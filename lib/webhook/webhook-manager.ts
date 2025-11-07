import { Request, Response, NextFunction } from 'express';
import { Logger } from '../logging';
import * as crypto from 'crypto';
import { SessionStorage } from '../storage/session-storage';

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
 * WebhookManager handles incoming webhooks from GoHighLevel
 * Provides Express middleware for processing webhook events
 */
export class WebhookManager {
  private logger: Logger;
  private sessionStorage: SessionStorage;
  private oauthService: OAuthService;

  constructor(
    logger: Logger,
    sessionStorage: SessionStorage,
    oauthService: OAuthService
  ) {
    this.logger = logger;
    this.sessionStorage = sessionStorage;
    this.oauthService = oauthService;
  }

  /**
   * Returns Express middleware for handling GoHighLevel webhooks
   * For all webhooks, it will validate the webhook signature if received.
   * This middleware will handle INSTALL and UNINSTALL webhooks.
   * It will automatically generate token and store it for INSTALL webhook event
   * It will automatically remove token for UNINSTALL webhook event
   */
  subscribe() {
    return async (req: Request, res: Response, next: NextFunction) => {
      this.logger.debug('Webhook received', {
        method: req.method,
        url: req.url,
        headers: req.headers,
        body: req.body,
      });

      try {
        const clientId = process.env.CLIENT_ID;
        const appId = clientId ? clientId.split('-')[0] : '';
        if (appId !== req.body.appId) {
          this.logger.warn('App ID mismatch, skipping webhook processing');
          return next();
        }

        // Initialize request flags
        (req as any).skippedSignatureVerification = false;
        (req as any).isSignatureValid = false;

        // Verify webhook signature
        const signature = req.headers['x-wh-signature'] as string;
        const publicKey = process.env.WEBHOOK_PUBLIC_KEY;

        if (signature && publicKey) {
          const payload = JSON.stringify(req.body);
          const isValid = this.verifySignature(payload, signature, publicKey);

          (req as any).isSignatureValid = isValid;

          if (!isValid) {
            this.logger.warn('Invalid webhook signature');
            return next();
          }
        } else {
          this.logger.warn(
            'Skipping signature verification - missing signature or public key'
          );
          (req as any).skippedSignatureVerification = true;
        }
        const requestBody = req.body as InstallWebhookRequest;
        const companyId = requestBody.companyId;
        const locationId = requestBody.locationId;
        switch (requestBody.type) {
          case 'INSTALL':
            if (companyId && locationId) {
              await this.generateLocationAccessToken(companyId, locationId);
            }
            break;
          case 'UNINSTALL':
            if (locationId || companyId) {
              const resourceId = locationId || companyId;
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
   * Verify webhook signature using GoHighLevel's public key
   * @param payload - The JSON stringified request body
   * @param signature - The signature from x-wh-signature header
   * @param publicKey - The public key from environment variable
   * @returns True if signature is valid, false otherwise
   */
  public verifySignature(
    payload: string,
    signature: string,
    publicKey: string
  ): boolean {
    try {
      this.logger.debug('Verifying webhook signature');

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
   * Generate location access token and store it using company token
   * @param companyId - The company ID
   * @param locationId - The location ID
   */
  private async generateLocationAccessToken(
    companyId: string,
    locationId: string
  ) {
    try {
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
    } catch (error) {
      this.logger.error(`Failed to generate location access token:`, error);
    }
  }
}
