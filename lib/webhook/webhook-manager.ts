import * as crypto from 'crypto';
import { Logger } from '../logging';
import { SessionStorage } from '../storage/session-storage';
import { redactSensitive } from '../utils/redact';

// Type definition for OAuth service
interface OAuthService {
  getLocationAccessToken(requestBody: {
    companyId: string;
    locationId: string;
  }): Promise<any>;
}

interface InstallWebhookRequest {
  type: string;
  appId: string;
  versionId: string;
  installType: string;
  locationId?: string;
  companyId: string;
  userId?: string;
  companyName?: string;
  isWhitelabelCompany?: boolean;
  whitelabelDetails?: {
    logoUrl: string;
    domain: string;
  };
  planId?: string;
  trial?: object;
  timestamp: string;
  webhookId: string;
}

/**
 * Minimal request shape the webhook middleware needs. Structurally compatible
 * with an Express `Request`, so no dependency on express is required.
 */
export interface WebhookRequest {
  method?: string;
  url?: string;
  headers: Record<string, string | string[] | undefined>;
  /** Parsed JSON body (e.g. from `express.json()`), or the raw Buffer when using `express.raw()` */
  body?: any;
  /**
   * Raw request body as received on the wire. When present it is used for
   * signature verification instead of re-serializing `body`. Capture it with
   * `express.json({ verify: (req, _res, buf) => { req.rawBody = buf; } })`.
   */
  rawBody?: Buffer | string;
  /** Set by the middleware: whether the x-ghl-signature header verified against the configured public key */
  isSignatureValid?: boolean;
  /** Set by the middleware: true when no signature header or public key was available so verification was skipped */
  skippedSignatureVerification?: boolean;
  /** Set by the middleware when an INSTALL webhook was verified but the location token could not be generated */
  installTokenError?: unknown;
}

export type WebhookResponse = unknown;
export type WebhookNextFunction = (error?: any) => void;
export type WebhookMiddleware = (
  req: WebhookRequest,
  res: WebhookResponse,
  next: WebhookNextFunction
) => Promise<void>;

export interface WebhookManagerOptions {
  /**
   * OAuth client id. Its first segment is the app id that incoming webhooks
   * must match. Falls back to the CLIENT_ID environment variable.
   */
  clientId?: string;
  /**
   * Ed25519 public key used to verify the x-ghl-signature header (PEM, or the
   * raw 32-byte key as base64/hex). Falls back to the
   * WEBHOOK_SIGNATURE_PUBLIC_KEY environment variable.
   */
  publicKey?: string;
  /**
   * Log webhook headers and bodies without redacting Authorization headers,
   * tokens and secrets. Off by default.
   */
  logSensitiveData?: boolean;
}

export const WEBHOOK_SIGNATURE_HEADER = 'x-ghl-signature';

// DER prefix of an Ed25519 SubjectPublicKeyInfo; appended with the raw 32-byte key it forms a valid SPKI key
const ED25519_SPKI_PREFIX = Buffer.from('302a300506032b6570032100', 'hex');
const ED25519_RAW_KEY_LENGTH = 32;

/**
 * WebhookManager handles incoming webhooks from GoHighLevel
 * Provides Express-compatible middleware for processing webhook events
 */
export class WebhookManager {
  private logger: Logger;
  private sessionStorage: SessionStorage;
  private oauthService: OAuthService;
  private options: WebhookManagerOptions;

  constructor(
    logger: Logger,
    sessionStorage: SessionStorage,
    oauthService: OAuthService,
    options: WebhookManagerOptions = {}
  ) {
    this.logger = logger;
    this.sessionStorage = sessionStorage;
    this.oauthService = oauthService;
    this.options = options;
  }

  /**
   * Returns Express-compatible middleware for handling GoHighLevel webhooks.
   * Every webhook is verified against the x-ghl-signature header (Ed25519).
   * INSTALL webhooks generate and store a location token, UNINSTALL webhooks
   * remove the stored token. The outcome is exposed on the request as
   * `isSignatureValid`, `skippedSignatureVerification` and `installTokenError`.
   */
  subscribe(): WebhookMiddleware {
    return async (req: WebhookRequest, _res: WebhookResponse, next: WebhookNextFunction) => {
      const received = {
        method: req.method,
        url: req.url,
        headers: req.headers,
        body: req.body,
      };
      this.logger.debug('Webhook received', this.options.logSensitiveData ? received : redactSensitive(received));

      try {
        const requestBody = this.parseBody(req) as InstallWebhookRequest;

        const appId = this.getAppId();
        if (!appId || appId !== requestBody.appId) {
          this.logger.warn('App ID mismatch, skipping webhook processing');
          return next();
        }

        // Initialize request flags
        req.skippedSignatureVerification = false;
        req.isSignatureValid = false;

        const signature = this.getHeader(req, WEBHOOK_SIGNATURE_HEADER);
        const publicKey = this.getPublicKey();

        if (!signature || !publicKey) {
          this.logger.warn(
            `Skipping signature verification - missing ${WEBHOOK_SIGNATURE_HEADER} header or webhook public key`
          );
          req.skippedSignatureVerification = true;
          return next();
        }

        const payload = this.getSignedPayload(req);
        const isValid = this.verifyEd25519Signature(payload, signature, publicKey);
        req.isSignatureValid = isValid;
        if (!isValid) {
          this.logger.warn(`Invalid webhook signature from ${WEBHOOK_SIGNATURE_HEADER}`);
          return next();
        }

        const companyId = requestBody.companyId;
        const locationId = requestBody.locationId;
        switch (requestBody.type) {
          case 'INSTALL':
            if (companyId && locationId) {
              try {
                await this.generateLocationAccessToken(companyId, locationId);
              } catch (error) {
                req.installTokenError = error;
                this.logger.error(
                  `Failed to generate location access token for INSTALL webhook (location: ${locationId}):`,
                  error
                );
              }
            }
            break;
          case 'UNINSTALL':
            if (locationId || companyId) {
              const resourceId = (locationId || companyId) as string;
              await this.sessionStorage.deleteSession(resourceId);
            }
            break;
        }

        this.logger.debug('Webhook processed successfully');
        next();
      } catch (error) {
        this.logger.error('Webhook processing failed:', error);
        next(error);
      }
    };
  }

  /**
   * Verify a legacy RSA-SHA256 webhook signature (x-wh-signature header).
   * @deprecated The x-wh-signature header is no longer sent. Use `verifyEd25519Signature` with the x-ghl-signature header.
   * @param payload - The JSON stringified request body
   * @param signature - The base64 signature
   * @param publicKey - The RSA public key (PEM)
   * @returns True if signature is valid, false otherwise
   */
  public verifySignature(
    payload: string,
    signature: string,
    publicKey: string
  ): boolean {
    try {
      this.logger.debug('Verifying legacy RSA webhook signature');

      const verifier = crypto.createVerify('sha256');
      verifier.update(payload);
      verifier.end();

      return verifier.verify(publicKey, signature, 'base64');
    } catch (error) {
      this.logger.error('Error verifying webhook signature:', error);
      return false;
    }
  }

  /**
   * Verify webhook signature using an Ed25519 public key
   * @param payload - The raw request body (Buffer) or its JSON string
   * @param signature - The base64 signature from the x-ghl-signature header
   * @param publicKey - The Ed25519 public key (PEM, or raw 32-byte key as base64/hex)
   * @returns True if signature is valid, false otherwise
   */
  public verifyEd25519Signature(
    payload: string | Buffer,
    signature: string,
    publicKey: string
  ): boolean {
    try {
      this.logger.debug('Verifying webhook Ed25519 signature');

      const signatureBuffer = Buffer.from(signature, 'base64');
      const payloadBuffer = Buffer.isBuffer(payload) ? payload : Buffer.from(payload, 'utf8');
      return crypto.verify(
        null,
        payloadBuffer,
        this.toEd25519PublicKey(publicKey),
        signatureBuffer
      );
    } catch (error) {
      this.logger.error('Error verifying webhook Ed25519 signature:', error);
      return false;
    }
  }

  /**
   * Accept the public key as PEM or as the raw 32-byte key encoded in base64 or hex
   */
  private toEd25519PublicKey(publicKey: string): crypto.KeyObject {
    const trimmed = publicKey.trim();
    if (trimmed.includes('-----BEGIN')) {
      return crypto.createPublicKey({ key: trimmed, format: 'pem' });
    }

    const raw = /^[0-9a-fA-F]{64}$/.test(trimmed)
      ? Buffer.from(trimmed, 'hex')
      : Buffer.from(trimmed, 'base64');

    if (raw.length === ED25519_SPKI_PREFIX.length + ED25519_RAW_KEY_LENGTH && raw.subarray(0, ED25519_SPKI_PREFIX.length).equals(ED25519_SPKI_PREFIX)) {
      return crypto.createPublicKey({ key: raw, format: 'der', type: 'spki' });
    }
    if (raw.length !== ED25519_RAW_KEY_LENGTH) {
      throw new Error('Unsupported Ed25519 public key format: expected PEM or a 32-byte key as base64/hex');
    }
    return crypto.createPublicKey({
      key: Buffer.concat([ED25519_SPKI_PREFIX, raw]),
      format: 'der',
      type: 'spki',
    });
  }

  /**
   * App id derived from the configured client id (option first, then CLIENT_ID env)
   */
  private getAppId(): string {
    const clientId = this.options.clientId || process.env.CLIENT_ID;
    return clientId ? clientId.split('-')[0] : '';
  }

  /**
   * Ed25519 public key (option first, then WEBHOOK_SIGNATURE_PUBLIC_KEY env)
   */
  private getPublicKey(): string | undefined {
    return this.options.publicKey || process.env.WEBHOOK_SIGNATURE_PUBLIC_KEY;
  }

  private getHeader(req: WebhookRequest, name: string): string | undefined {
    const value = req.headers[name] ?? req.headers[name.toLowerCase()];
    return Array.isArray(value) ? value[0] : value;
  }

  /**
   * Bytes that were signed: the raw body when the host captured it, otherwise the
   * Buffer body from `express.raw()`, otherwise the re-serialized parsed body.
   */
  private getSignedPayload(req: WebhookRequest): Buffer {
    if (Buffer.isBuffer(req.rawBody)) return req.rawBody;
    if (typeof req.rawBody === 'string') return Buffer.from(req.rawBody, 'utf8');
    if (Buffer.isBuffer(req.body)) return req.body;
    return Buffer.from(JSON.stringify(req.body ?? {}), 'utf8');
  }

  /**
   * Parsed JSON body regardless of whether the host used a JSON or raw body parser
   */
  private parseBody(req: WebhookRequest): any {
    const body = req.body;
    if (Buffer.isBuffer(body)) return this.safeJsonParse(body.toString('utf8'));
    if (typeof body === 'string') return this.safeJsonParse(body);
    return body ?? {};
  }

  private safeJsonParse(text: string): any {
    try {
      return JSON.parse(text);
    } catch {
      return {};
    }
  }

  /**
   * Generate location access token and store it using company token
   * @param companyId - The company ID
   * @param locationId - The location ID
   * @throws when the token exchange or storage write fails
   */
  private async generateLocationAccessToken(
    companyId: string,
    locationId: string
  ): Promise<void> {
    // Get the token for the company from the store
    const companyToken = await this.sessionStorage.getAccessToken(companyId);
    if (!companyToken) {
      this.logger.warn(
        `Company token not found for companyId: ${companyId}, skipping location access token generation`
      );
      return;
    }
    this.logger.debug(
      `Generating location access token for location: ${locationId}`
    );
    // Get location access token using OAuth service
    const locationTokenResponse =
      await this.oauthService.getLocationAccessToken({
        companyId,
        locationId,
      });
    // Store the location token in session storage
    await this.sessionStorage.setSession(locationId, locationTokenResponse);

    this.logger.debug(
      `Location access token generated and stored for location: ${locationId}`
    );
  }
}
