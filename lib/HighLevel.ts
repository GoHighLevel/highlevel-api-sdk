// @generated
// File generated from our OpenAPI spec
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';
import { AdManager } from './code/ad-manager/ad-manager';
import { AffiliateManager } from './code/affiliate-manager/affiliate-manager';
import { AgentStudio } from './code/agent-studio/agent-studio';
import { Associations } from './code/associations/associations';
import { Blogs } from './code/blogs/blogs';
import { BrandBoards } from './code/brand-boards/brand-boards';
import { Businesses } from './code/businesses/businesses';
import { Calendars } from './code/calendars/calendars';
import { Campaigns } from './code/campaigns/campaigns';
import { ChatWidget } from './code/chat-widget/chat-widget';
import { Companies } from './code/companies/companies';
import { Contacts } from './code/contacts/contacts';
import { ConversationAi } from './code/conversation-ai/conversation-ai';
import { Conversations } from './code/conversations/conversations';
import { Courses } from './code/courses/courses';
import { CustomFields } from './code/custom-fields/custom-fields';
import { CustomMenus } from './code/custom-menus/custom-menus';
import { EmailIsv } from './code/email-isv/email-isv';
import { Emails } from './code/emails/emails';
import { Files } from './code/files/files';
import { Forms } from './code/forms/forms';
import { Funnels } from './code/funnels/funnels';
import { Invoices } from './code/invoices/invoices';
import { KnowledgeBase } from './code/knowledge-base/knowledge-base';
import { Links } from './code/links/links';
import { Locations } from './code/locations/locations';
import { Marketplace } from './code/marketplace/marketplace';
import { Medias } from './code/medias/medias';
import { Oauth } from './code/oauth/oauth';
import { Objects } from './code/objects/objects';
import { Opportunities } from './code/opportunities/opportunities';
import { Payments } from './code/payments/payments';
import { PhoneSystem } from './code/phone-system/phone-system';
import { Products } from './code/products/products';
import { Proposals } from './code/proposals/proposals';
import { SaasApi } from './code/saas-api/saas-api';
import { Snapshots } from './code/snapshots/snapshots';
import { SocialMediaPosting } from './code/social-media-posting/social-media-posting';
import { Store } from './code/store/store';
import { Surveys } from './code/surveys/surveys';
import { Users } from './code/users/users';
import { VoiceAi } from './code/voice-ai/voice-ai';
import { Workflows } from './code/workflows/workflows';
import { SessionStorage, MemorySessionStorage, type ISessionData } from './storage';
import { Logger, LogLevelType } from './logging';
import { WebhookManager } from './webhook';
import { UserType } from './constants';
import { GHLError, GHLNetworkError, createGHLError } from './errors';
import { registerTokenProvider, type TokenProvider } from './utils/request-utils';
import { redactSensitive } from './utils/redact';
import { parseRateLimitHeaders, type RateLimitInfo } from './utils/rate-limit';

import * as fs from 'fs';
import * as path from 'path';

let SDK_VERSION = 'unknown';
try {
  const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '..', 'package.json'), 'utf8')) as { version?: string };
  SDK_VERSION = pkg.version || 'unknown';
} catch {
  // version unavailable
}

// Extend AxiosRequestConfig to support retry tracking and security requirements
declare module 'axios' {
  interface AxiosRequestConfig {
    __isRetryRequest?: boolean;
    __rateLimitAttempt?: number;
    __secutiryRequirements?: string[];
    __preferredTokenType?: 'company' | 'location';
  }
}

/**
 * Opt-in automatic retry of requests rejected by the burst rate limit (429).
 * The wait is the burst window reported in x-ratelimit-interval-milliseconds;
 * exponential backoff is used only when the response carries no rate limit
 * headers. A 429 caused by the daily limit is never retried.
 */
export interface RateLimitRetryConfig {
  /** Maximum number of retries after the first 429 (default 3) */
  maxRetries?: number;
  /** Base delay for the exponential backoff fallback (default 1000 ms) */
  baseDelayMs?: number;
  /** Upper bound for any single wait, including the reported burst window (default 30000 ms) */
  maxDelayMs?: number;
}

// Configuration interface for HighLevel SDK
export interface HighLevelConfig {
  apiVersion?: string;
  privateIntegrationToken?: string;
  agencyAccessToken?: string;
  locationAccessToken?: string;
  clientId?: string;
  clientSecret?: string;
  sessionStorage?: SessionStorage;
  logLevel?: LogLevelType;
  /**
   * Ed25519 public key used to verify webhook signatures (x-ghl-signature header).
   * Falls back to the WEBHOOK_SIGNATURE_PUBLIC_KEY environment variable.
   */
  webhookPublicKey?: string;
  /**
   * Retry requests that fail with 429 Too Many Requests. Disabled by default;
   * pass `true` for the defaults or an object to tune them.
   */
  rateLimitRetry?: boolean | RateLimitRetryConfig;
  /**
   * By default Authorization headers, tokens and secrets are redacted from debug
   * logs and from the request attached to errors. Set to `true` to log them as-is.
   */
  logSensitiveData?: boolean;
}

// Either a private integration token or OAuth client credentials are required
export type ValidConfig = HighLevelConfig & (
  | { privateIntegrationToken: string }
  | { clientId: string; clientSecret: string }
);

// Errors live in ./errors; GHLError is re-exported here only so existing deep imports
// of lib/HighLevel keep working. Import errors from the package root instead.
export { GHLError } from './errors';

// Interceptor interfaces
export interface RequestInterceptor {
  onFulfilled?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>;
  onRejected?: (error: any) => any;
}

export interface ResponseInterceptor {
  onFulfilled?: (response: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>;
  onRejected?: (error: any) => any;
}

/** HighLevel SDK Client */
export class HighLevel implements TokenProvider {
  private static readonly BASE_URL = 'https://services.leadconnectorhq.com';
  
  private config: Omit<HighLevelConfig, 'apiVersion'> & {
    apiVersion: string;
    agencyRefreshToken?: string | undefined;
    locationRefreshToken?: string | undefined;
  };
  private httpClient: AxiosInstance;
  private sessionStorage: SessionStorage;
  private logger: Logger;
  // One refresh per resource at a time; concurrent callers await the same promise
  private refreshInFlight: Map<string, Promise<string | null>> = new Map();
  
  // Service instances
  public adManager!: AdManager;
  public affiliateManager!: AffiliateManager;
  public agentStudio!: AgentStudio;
  public associations!: Associations;
  public blogs!: Blogs;
  public brandBoards!: BrandBoards;
  public businesses!: Businesses;
  public calendars!: Calendars;
  public campaigns!: Campaigns;
  public chatWidget!: ChatWidget;
  public companies!: Companies;
  public contacts!: Contacts;
  public conversationAi!: ConversationAi;
  public conversations!: Conversations;
  public courses!: Courses;
  public customFields!: CustomFields;
  public customMenus!: CustomMenus;
  public emailIsv!: EmailIsv;
  public emails!: Emails;
  public files!: Files;
  public forms!: Forms;
  public funnels!: Funnels;
  public invoices!: Invoices;
  public knowledgeBase!: KnowledgeBase;
  public links!: Links;
  public locations!: Locations;
  public marketplace!: Marketplace;
  public medias!: Medias;
  public oauth!: Oauth;
  public objects!: Objects;
  public opportunities!: Opportunities;
  public payments!: Payments;
  public phoneSystem!: PhoneSystem;
  public products!: Products;
  public proposals!: Proposals;
  public saasApi!: SaasApi;
  public snapshots!: Snapshots;
  public socialMediaPosting!: SocialMediaPosting;
  public store!: Store;
  public surveys!: Surveys;
  public users!: Users;
  public voiceAi!: VoiceAi;
  public workflows!: Workflows;
  
  // Webhook manager
  public webhooks!: WebhookManager;

  constructor(config: ValidConfig) {
    // Validate configuration
    if (!config.privateIntegrationToken && (!config.clientId || !config.clientSecret)) {
      throw new GHLError(
        'Invalid configuration: Either provide privateIntegrationToken OR both clientId and clientSecret are required.'
      );
    }

    // Initialize logger FIRST (needed for other initialization steps)
    this.logger = new Logger(config.logLevel || 'warn');

    // Set default configuration
    this.config = {
      apiVersion: config.apiVersion || '2023-02-21',
      privateIntegrationToken: config.privateIntegrationToken,
      agencyAccessToken: config.agencyAccessToken,
      locationAccessToken: config.locationAccessToken,
      clientId: config.clientId,
      clientSecret: config.clientSecret,
      webhookPublicKey: config.webhookPublicKey,
      rateLimitRetry: config.rateLimitRetry,
      logSensitiveData: config.logSensitiveData ?? false,
      // Refresh tokens are not part of user input - set via setter methods only
      agencyRefreshToken: undefined,
      locationRefreshToken: undefined
    };

    // Store sessionStorage reference or create default MemorySessionStorage with correct logger
    if (config.sessionStorage) {
      this.sessionStorage = config.sessionStorage;
      // Update the sessionStorage logger to match our configured level
      this.updateSessionStorageLogger();
    } else {
      // Auto-create MemorySessionStorage with the configured logger
      this.sessionStorage = new MemorySessionStorage(this.logger);
      this.logger.info('No sessionStorage provided, using MemorySessionStorage');
    }

    // Create HTTP client with base configuration
    this.httpClient = axios.create({
      baseURL: HighLevel.BASE_URL,
      timeout: 30000, // 30 seconds timeout
      headers: this.getDefaultHeaders()
    });

    // Register this instance as the token provider for the shared HTTP client
    registerTokenProvider(this.httpClient, this);

    // Setup default interceptors
    this.setupDefaultInterceptors();

    // Initialize services with updated configuration
    this.initializeServices();

    // Initialize session storage
    this.initializeSessionStorage();
  }

  /**
   * Generate default headers for HTTP requests
   */
  private getDefaultHeaders(): Record<string, string> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'Version': this.config.apiVersion,
      'x-sdk-version': SDK_VERSION
    };

    // Priority 1: privateIntegrationToken (with Bearer prefix)
    if (this.config.privateIntegrationToken) {
      headers['Authorization'] = `Bearer ${this.config.privateIntegrationToken}`;
    }
    // Priority 2: agencyAccessToken (with Bearer prefix) - temporary token
    else if (this.config.agencyAccessToken) {
      headers['Authorization'] = `Bearer ${this.config.agencyAccessToken}`;
    }
    // Priority 3: locationAccessToken (with Bearer prefix) - temporary token
    else if (this.config.locationAccessToken) {
      headers['Authorization'] = `Bearer ${this.config.locationAccessToken}`;
    }
    // Priority 4: No default token - will be resolved per request with resourceId

    return headers;
  }

  /**
   * Get appropriate token for API requests (internal method)
   * @param resourceId - Optional resourceId (companyId or locationId) for storage-based token lookup
   * @returns Authorization header value or null
   */
  public async getAuthToken(resourceId?: string): Promise<string | null> {
    // Priority 1: privateIntegrationToken
    if (this.config.privateIntegrationToken) {
      return `Bearer ${this.config.privateIntegrationToken}`;
    }

    // Priority 2: agencyAccessToken (temporary)
    if (this.config.agencyAccessToken) {
      return `Bearer ${this.config.agencyAccessToken}`;
    }

    // Priority 3: locationAccessToken (temporary)  
    if (this.config.locationAccessToken) {
      return `Bearer ${this.config.locationAccessToken}`;
    }

    // Priority 4: Storage-based token (requires resourceId)
    if (resourceId && this.sessionStorage) {
      try {
        const accessToken = await this.sessionStorage.getAccessToken(resourceId);
        if (accessToken) {
          return `Bearer ${accessToken}`;
        }
      } catch (error) {
        this.logger.warn(`Failed to get token from storage for ${resourceId}:`, error);
      }
    }

    return null;
  }

  /**
   * Helper method to try getting token from storage
   * @param resourceId - Resource ID for token lookup
   * @returns Bearer token if found, null otherwise
   */
  private async fetchToken(resourceId: string | null): Promise<string | null> {
    if (!resourceId) return null;
    
    try {
      // Get session data
      const sessionData = await this.sessionStorage.getSession(resourceId);
      if (!sessionData) return null;
      
      // Check if we need to refresh the token proactively
      if (this.shouldRefreshToken(sessionData)) {
        this.logger.debug(`Token expiring soon for ${resourceId}, refreshing proactively`);
        const refreshed = await this.refreshTokenIfNeeded(resourceId, sessionData);
        if (refreshed) {
          return refreshed;
        }
      }
      
      return sessionData.access_token ? `Bearer ${sessionData.access_token}` : null;
          } catch (error) {
        this.logger.warn(`Failed to get token from storage for ${resourceId}:`, error);
        return null;
      }
  }

  /**
   * Check if a token should be refreshed based on expiration
   * @param sessionData - Session data containing expiration info
   * @returns True if token should be refreshed
   */
  private shouldRefreshToken(sessionData: ISessionData): boolean {
    if (!sessionData.expire_at) return false;
    
    // Refresh if token expires within 30 seconds
    const bufferTime = 30 * 1000; // 30 seconds in milliseconds
    return Date.now() + bufferTime >= sessionData.expire_at;
  }

  /**
   * Refresh token if expired and store the new token.
   * Concurrent calls for the same resource share a single refresh so a rotated
   * refresh token is never used twice.
   * @param resourceId - Resource ID for the session
   * @param sessionData - Current session data
   * @returns New Bearer token if successful, null otherwise
   */
  private refreshTokenIfNeeded(resourceId: string, sessionData: ISessionData): Promise<string | null> {
    const inFlight = this.refreshInFlight.get(resourceId);
    if (inFlight) {
      this.logger.debug(`Token refresh already in progress for ${resourceId}, waiting for it`);
      return inFlight;
    }

    const refreshPromise = this.performTokenRefresh(resourceId, sessionData).finally(() => {
      this.refreshInFlight.delete(resourceId);
    });
    this.refreshInFlight.set(resourceId, refreshPromise);
    return refreshPromise;
  }

  private async performTokenRefresh(resourceId: string, sessionData: ISessionData): Promise<string | null> {
    if (!sessionData.refresh_token) {
      this.logger.warn(`No refresh token available for ${resourceId}`);
      return null;
    }

    if (!this.config.clientId || !this.config.clientSecret) {
      this.logger.warn(`Client credentials not available for token refresh`);
      return null;
    }

    try {
      this.logger.info(`Refreshing token for ${resourceId}`);
      
      // Determine user type from session data (default to Location if not specified)
      const userType = sessionData.userType || UserType.Location;
      
      // Use the OAuth service to refresh the token
      const newTokenData = await this.oauth.refreshToken(
        sessionData.refresh_token,
        this.config.clientId,
        this.config.clientSecret,
        'refresh_token',
        userType
      );
      
      // Store the new token data
      await this.sessionStorage.setSession(resourceId, {
        ...sessionData,
        ...newTokenData
      });

      this.logger.info(`Token refreshed successfully for ${resourceId}`);
      return `Bearer ${newTokenData.access_token}`;
      
    } catch (error) {
      this.logger.error(`Failed to refresh token for ${resourceId}:`, error);
      
      // If this is a location token refresh failure, try fallback to company token
      if (sessionData.userType === UserType.Location && sessionData.companyId) {
        this.logger.info(`Attempting fallback to company token for location ${resourceId}`);
        return await this.handleLocationTokenFallback(resourceId, sessionData);
      }
      
      return null;
    }
  }

  /**
   * Handle location token refresh fallback using company token
   * @param locationId - The location ID that failed to refresh
   * @param locationSessionData - The location session data
   * @returns New Bearer token if successful, null otherwise
   */
  private async handleLocationTokenFallback(locationId: string, locationSessionData: ISessionData): Promise<string | null> {
    if (!locationSessionData.companyId) {
      this.logger.error(`No companyId available for location token fallback`);
      return null;
    }

    try {
      // Fetch company session data
      const companySessionData = await this.sessionStorage.getSession(locationSessionData.companyId);
      
      if (!companySessionData) {
        this.logger.error(`No company session found for companyId: ${locationSessionData.companyId}`);
        return null;
      }

      // Check if company token needs refresh
      if (this.shouldRefreshToken(companySessionData)) {
        this.logger.info(`Company token needs refresh for companyId: ${locationSessionData.companyId}`);
        
        if (!companySessionData.refresh_token) {
          this.logger.error(`No refresh token available for company: ${locationSessionData.companyId}`);
          return null;
        }

        try {
          // Refresh company token
          const newCompanyTokenData = await this.oauth.refreshToken(
            companySessionData.refresh_token,
            this.config.clientId!,
            this.config.clientSecret!,
            'refresh_token',
            UserType.Company
          );

          // Store the refreshed company token
          await this.sessionStorage.setSession(locationSessionData.companyId, {
            ...companySessionData,
            ...newCompanyTokenData
          });
          this.logger.info(`Company token refreshed successfully for companyId: ${locationSessionData.companyId}`);
        } catch (companyRefreshError) {
          this.logger.error(`Failed to refresh company token for companyId: ${locationSessionData.companyId}:`, companyRefreshError);
          return null;
        }
      }

      // Use company token to fetch new location token
      this.logger.info(`Fetching new location token using company token for locationId: ${locationId}`);
      const newLocationTokenData = await this.oauth.getLocationAccessToken(
        {
          companyId: locationSessionData.companyId,
          locationId: locationId
        }
      );

      // Store the new location token
      await this.sessionStorage.setSession(locationId, {
        ...locationSessionData,
        ...newLocationTokenData,
        companyId: locationSessionData.companyId // Preserve companyId
      });

      this.logger.info(`Location token fetched successfully using company token fallback for locationId: ${locationId}`);
      return `Bearer ${newLocationTokenData.access_token}`;

    } catch (error) {
      this.logger.error(`Failed to handle location token fallback for locationId: ${locationId}:`, error);
      return null;
    }
  }

  /**
   * Internal method to get token based on security requirements and request data
   * @param securityRequirements - Security requirements from OpenAPI spec
   * @param headers - Request headers
   * @param query - Query parameters  
   * @param body - Request body
   * @param preferredTokenType - Preferred token type when both are available ('company' or 'location')
   * @returns Authorization header value or throws error
   */
  public async getTokenForSecurity(
    securityRequirements: string[], 
    headers: any = {}, 
    query: any = {}, 
    body: any = {},
    preferredTokenType?: 'company' | 'location'
  ): Promise<string> {
    // Priority 1: privateIntegrationToken always wins
    if (this.config.privateIntegrationToken) {
      return `Bearer ${this.config.privateIntegrationToken}`;
    }

    // check which token we need to use
    const hasAgencyAccess = securityRequirements.includes('Agency-Access');
    const hasLocationAccess = securityRequirements.includes('Location-Access');
    const hasAgencyOnly = securityRequirements.includes('Agency-Access-Only');
    const hasLocationOnly = securityRequirements.includes('Location-Access-Only');
    const hasBearer = securityRequirements.includes('bearer');

    // Extract resourceId from request data
    const resourceId = this.extractResourceId(securityRequirements, headers, query, body, preferredTokenType);

    // Handle Agency-Access-Only
    if (hasAgencyOnly) {
      if (this.config.agencyAccessToken) {
        return `Bearer ${this.config.agencyAccessToken}`;
      }
      const storageToken = await this.fetchToken(resourceId);
      if (storageToken) return storageToken;
      throw new GHLError('Agency Access Token required but not available');
    }

    // Handle Location-Access-Only
    if (hasLocationOnly) {
      if (this.config.locationAccessToken) {
        return `Bearer ${this.config.locationAccessToken}`;
      }
      const storageToken = await this.fetchToken(resourceId);
      if (storageToken) return storageToken;
      throw new GHLError('Location Access Token required but not available');
    }

    // Handle both Agency-Access and Location-Access (flexible)
    if (hasAgencyAccess || hasLocationAccess || hasBearer) {
      // Try temporary tokens first
      if (this.config.agencyAccessToken) {
        return `Bearer ${this.config.agencyAccessToken}`;
      }
      if (this.config.locationAccessToken) {
        return `Bearer ${this.config.locationAccessToken}`;
      }
      
      // Try storage-based token
      const storageToken = await this.fetchToken(resourceId);
      if (storageToken) return storageToken;
      
      throw new GHLError('Authentication token required but not available');
    }

    // Default fallback
    const token = await this.getAuthToken(resourceId || undefined);
    if (!token) {
      throw new GHLError('No authentication token available');
    }
    return token;
  }

  /**
   * Extract resourceId from request data based on security requirements
   * @param securityRequirements - Security requirements to determine token type
   * @param headers - Request headers
   * @param query - Query parameters  
   * @param body - Request body
   * @param preferredTokenType - Preferred token type when both are available ('company' or 'location')
   * @returns Extracted resourceId (companyId or locationId)
   */
  public extractResourceId(securityRequirements: string[], headers: any = {}, query: any = {}, body: any = {}, preferredTokenType?: 'company' | 'location'): string | null {
    // Check headers first
    let companyId = ''
    let locationId = ''
    companyId = headers['x-company-id'] || headers['companyId'] || headers['company-id'];
    locationId = headers['x-location-id'] || headers['locationId'] || headers['location-id'];

    // Check query 
    if (!companyId) {
      if (query.companyId) companyId = query.companyId;
      if (query.company_id) companyId = query.company_id;
    }

    if (!locationId) {
      if (query.locationId) locationId = query.locationId;
      if (query.location_id) locationId = query.location_id;
    }

    // Check body
    if (!companyId && !locationId && body && typeof body === 'object') {
      if (body.companyId) companyId = body.companyId;
      if (body.company_id) companyId = body.company_id;

      if (body.locationId) locationId = body.locationId;
      if (body.location_id) locationId = body.location_id;
    }
    
    // Determine if we need location-level or agency-level token
    const needsLocationToken = securityRequirements.some(req => 
      req === 'Location-Access' || req === 'Location-Access-Only' || req === 'bearer'
    );
    const needsAgencyToken = securityRequirements.some(req => 
      req === 'Agency-Access' || req === 'Agency-Access-Only'
    );

    // If both token types are supported, respect user preference
    if (needsLocationToken && needsAgencyToken) {
      if (preferredTokenType === 'company' && companyId) {
        return companyId;
      }
      if (preferredTokenType === 'location' && locationId) {
        return locationId;
      }
    }
    
    if (needsLocationToken) {
      return locationId;
    }
    if (needsAgencyToken) {
      return companyId;
    }
    
    return null;
  }

  /**
   * Setup default request and response interceptors
   */
  private setupDefaultInterceptors(): void {
    // Request interceptor - inject common parameters
    this.httpClient.interceptors.request.use(
      (config) => {
        // Ensure Authorization header is always present if token exists
        // Priority 1: privateIntegrationToken (with Bearer)
        if (this.config.privateIntegrationToken && !config.headers?.Authorization) {
          config.headers = config.headers || {};
          config.headers.Authorization = `Bearer ${this.config.privateIntegrationToken}`;
        }
        // Priority 2: agencyAccessToken (with Bearer)
        else if (this.config.agencyAccessToken && !config.headers?.Authorization) {
          config.headers = config.headers || {};
          config.headers.Authorization = `Bearer ${this.config.agencyAccessToken}`;
        }
        // Priority 3: locationAccessToken (with Bearer)
        else if (this.config.locationAccessToken && !config.headers?.Authorization) {
          config.headers = config.headers || {};
          config.headers.Authorization = `Bearer ${this.config.locationAccessToken}`;
        }

        // Ensure Version header is always present
        if (!config.headers?.Version) {
          config.headers = config.headers || {};
          config.headers.Version = this.config.apiVersion;
        }

        // Log request in development mode or when debug level is enabled (credentials redacted)
        this.logger.debug(`${config.method?.toUpperCase()} ${config.url}`, this.redact({
          headers: config.headers,
          params: config.params,
          data: config.data
        }));

        return config;
      },
      (error) => {
        this.logger.error('Request Error:', error);
        return Promise.reject(error);
      }
    );

    // Response interceptor - handle errors and responses
    this.httpClient.interceptors.response.use(
      (response) => {
        // Log response in debug mode (credentials redacted)
        this.logger.debug(`Response ${response.status}:`, this.redact(response.data));

        return response;
      },
      async (error: AxiosError) => {
        const originalRequest = error.config as any;

        // Handle 429 errors with opt-in retry (burst limit only)
        if (error.response?.status === 429 && originalRequest) {
          const retryPolicy = this.getRateLimitRetryPolicy();
          const attempt: number = originalRequest.__rateLimitAttempt || 0;
          if (retryPolicy && attempt < retryPolicy.maxRetries) {
            const rateLimit = parseRateLimitHeaders(error.response.headers);
            if (rateLimit?.scope === 'daily') {
              this.logger.warn('429 Too Many Requests - daily rate limit exhausted, not retrying', rateLimit);
            } else {
              const delayMs = this.getRateLimitRetryDelay(rateLimit, attempt, retryPolicy);
              this.logger.warn(`429 Too Many Requests - burst limit reached, retrying in ${delayMs}ms (attempt ${attempt + 1} of ${retryPolicy.maxRetries})`, rateLimit);
              originalRequest.__rateLimitAttempt = attempt + 1;
              await this.sleep(delayMs);
              return this.httpClient.request(originalRequest);
            }
          }
        }
        
        // Handle 401 errors with automatic token refresh
        if (error.response?.status === 401 && originalRequest && !originalRequest.__isRetryRequest) {
          // Mark before retrying so the retried request carries the flag and a second 401 is not retried again
          originalRequest.__isRetryRequest = true;
          this.logger.warn('401 Unauthorized - Attempting token refresh');
          
          // Try to extract resourceId from the original request using stored security requirements
          const securityRequirements = originalRequest.__secutiryRequirements || [];
          const preferredTokenType = originalRequest.__preferredTokenType;
          
          const resourceId = this.extractResourceId(
            securityRequirements,
            originalRequest.headers || {},
            { ...originalRequest.params || {}, ...originalRequest.__pathParams || {} },
            originalRequest.data || {},
            preferredTokenType
          );
          
          if (resourceId) {
            try {
              const sessionData = await this.sessionStorage.getSession(resourceId);
              
              if (sessionData) {
                let newToken: string | null = null;
                const usedToken = originalRequest.headers?.Authorization;
                const storedToken = sessionData.access_token ? `Bearer ${sessionData.access_token}` : null;

                if (storedToken && usedToken && storedToken !== usedToken && !this.shouldRefreshToken(sessionData)) {
                  // Another request already refreshed this token; reuse it instead of refreshing again
                  this.logger.debug(`Token for ${resourceId} was already refreshed, retrying with the stored token`);
                  newToken = storedToken;
                } else {
                  this.logger.info(`Token expired for ${resourceId}, attempting refresh`);
                  newToken = await this.refreshTokenIfNeeded(resourceId, sessionData);
                }

                if (newToken) {
                  originalRequest.headers = originalRequest.headers || {};
                  originalRequest.headers.Authorization = newToken;
                  
                  this.logger.debug(`Retrying request with refreshed token for ${resourceId}`);
                  return this.httpClient.request(originalRequest);
                }
              }
            } catch (refreshError) {
              this.logger.error('Failed to refresh token on 401:', refreshError);
            }
          }
        }
        
        return this.handleResponseError(error);
      }
    );
  }

  /**
   * Handle response errors with proper error formatting
   */
  private handleResponseError(error: AxiosError): Promise<never> {
    let ghlError: GHLError;
    const safeRequest = this.sanitizeRequestConfig(error.config);

    if (error.response) {
      // The request was made and the server responded with a status code
      const { status, data, headers } = error.response;
      const message = this.extractErrorMessage(data, status);
      const rateLimit = status === 429 ? parseRateLimitHeaders(headers) : undefined;

      ghlError = createGHLError(message, status, data, safeRequest, rateLimit);
    } else if (error.request) {
      // The request was made but no response was received
      ghlError = new GHLNetworkError(
        'Network error: No response received from server',
        undefined,
        undefined,
        safeRequest
      );
    } else {
      // Something happened in setting up the request
      ghlError = new GHLError(
        `Request setup error: ${error.message}`,
        undefined,
        undefined,
        safeRequest,
        'REQUEST'
      );
    }

    this.logger.error('Error:', ghlError);
    return Promise.reject(ghlError);
  }

  /**
   * Redact credentials unless the user opted into logging sensitive data
   */
  private redact<T>(value: T): T {
    return this.config.logSensitiveData ? value : redactSensitive(value);
  }

  /**
   * Copy of the request config with credentials redacted (unless logSensitiveData is set), safe to attach to errors and logs
   */
  private sanitizeRequestConfig(config: AxiosRequestConfig | undefined): AxiosRequestConfig | undefined {
    if (!config) return config;
    const headers: any = config.headers;
    const plainHeaders = headers && typeof headers.toJSON === 'function' ? headers.toJSON() : headers;
    return {
      ...config,
      headers: this.redact(plainHeaders),
      data: this.redact(config.data)
    };
  }

  /**
   * Effective rate-limit retry policy, or null when retries are disabled
   */
  private getRateLimitRetryPolicy(): Required<RateLimitRetryConfig> | null {
    const setting = this.config.rateLimitRetry;
    if (!setting) return null;
    const custom: RateLimitRetryConfig = setting === true ? {} : setting;
    return {
      maxRetries: custom.maxRetries ?? 3,
      baseDelayMs: custom.baseDelayMs ?? 1000,
      maxDelayMs: custom.maxDelayMs ?? 30000
    };
  }

  /**
   * Delay before the next retry: the burst window reported by the API when present,
   * otherwise exponential backoff with jitter
   */
  private getRateLimitRetryDelay(rateLimit: RateLimitInfo | undefined, attempt: number, policy: Required<RateLimitRetryConfig>): number {
    if (rateLimit?.intervalMs !== undefined && rateLimit.intervalMs > 0) {
      return Math.min(rateLimit.intervalMs, policy.maxDelayMs);
    }

    const backoff = policy.baseDelayMs * Math.pow(2, attempt);
    const jitter = Math.floor(Math.random() * Math.min(100, policy.baseDelayMs));
    return Math.min(backoff + jitter, policy.maxDelayMs);
  }

  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Extract meaningful error message from API response
   */
  private extractErrorMessage(data: any, statusCode: number): string {
    if (typeof data === 'string') {
      return data;
    }

    if (data && typeof data === 'object') {
      // Try different common error message fields
      if (data.message) {
        return Array.isArray(data.message) ? data.message.join(', ') : data.message;
      }
      if (data.error) {
        return typeof data.error === 'string' ? data.error : JSON.stringify(data.error);
      }
      if (data.detail) {
        return data.detail;
      }
    }

    // Fallback to HTTP status messages
    const statusMessages: Record<number, string> = {
      400: 'Bad Request - Invalid request parameters',
      401: 'Unauthorized - Invalid or missing access token',
      403: 'Forbidden - Insufficient permissions',
      404: 'Not Found - Resource does not exist',
      422: 'Unprocessable Entity - Validation error',
      429: 'Too Many Requests - Rate limit exceeded',
      500: 'Internal Server Error',
      502: 'Bad Gateway',
      503: 'Service Unavailable',
      504: 'Gateway Timeout'
    };

    return statusMessages[statusCode] || `HTTP Error ${statusCode}`;
  }

  /**
   * Initialize all service instances with the shared HTTP client
   */
  private initializeServices(): void {
    // Create adManager service with the shared HTTP client
    this.adManager = new AdManager(this.httpClient);
    // Create affiliateManager service with the shared HTTP client
    this.affiliateManager = new AffiliateManager(this.httpClient);
    // Create agentStudio service with the shared HTTP client
    this.agentStudio = new AgentStudio(this.httpClient);
    // Create associations service with the shared HTTP client
    this.associations = new Associations(this.httpClient);
    // Create blogs service with the shared HTTP client
    this.blogs = new Blogs(this.httpClient);
    // Create brandBoards service with the shared HTTP client
    this.brandBoards = new BrandBoards(this.httpClient);
    // Create businesses service with the shared HTTP client
    this.businesses = new Businesses(this.httpClient);
    // Create calendars service with the shared HTTP client
    this.calendars = new Calendars(this.httpClient);
    // Create campaigns service with the shared HTTP client
    this.campaigns = new Campaigns(this.httpClient);
    // Create chatWidget service with the shared HTTP client
    this.chatWidget = new ChatWidget(this.httpClient);
    // Create companies service with the shared HTTP client
    this.companies = new Companies(this.httpClient);
    // Create contacts service with the shared HTTP client
    this.contacts = new Contacts(this.httpClient);
    // Create conversationAi service with the shared HTTP client
    this.conversationAi = new ConversationAi(this.httpClient);
    // Create conversations service with the shared HTTP client
    this.conversations = new Conversations(this.httpClient);
    // Create courses service with the shared HTTP client
    this.courses = new Courses(this.httpClient);
    // Create customFields service with the shared HTTP client
    this.customFields = new CustomFields(this.httpClient);
    // Create customMenus service with the shared HTTP client
    this.customMenus = new CustomMenus(this.httpClient);
    // Create emailIsv service with the shared HTTP client
    this.emailIsv = new EmailIsv(this.httpClient);
    // Create emails service with the shared HTTP client
    this.emails = new Emails(this.httpClient);
    // Create files service with the shared HTTP client
    this.files = new Files(this.httpClient);
    // Create forms service with the shared HTTP client
    this.forms = new Forms(this.httpClient);
    // Create funnels service with the shared HTTP client
    this.funnels = new Funnels(this.httpClient);
    // Create invoices service with the shared HTTP client
    this.invoices = new Invoices(this.httpClient);
    // Create knowledgeBase service with the shared HTTP client
    this.knowledgeBase = new KnowledgeBase(this.httpClient);
    // Create links service with the shared HTTP client
    this.links = new Links(this.httpClient);
    // Create locations service with the shared HTTP client
    this.locations = new Locations(this.httpClient);
    // Create marketplace service with the shared HTTP client
    this.marketplace = new Marketplace(this.httpClient);
    // Create medias service with the shared HTTP client
    this.medias = new Medias(this.httpClient);
    // Create oauth service with the shared HTTP client
    this.oauth = new Oauth(this.httpClient, { baseUrl: HighLevel.BASE_URL });
    // Create objects service with the shared HTTP client
    this.objects = new Objects(this.httpClient);
    // Create opportunities service with the shared HTTP client
    this.opportunities = new Opportunities(this.httpClient);
    // Create payments service with the shared HTTP client
    this.payments = new Payments(this.httpClient);
    // Create phoneSystem service with the shared HTTP client
    this.phoneSystem = new PhoneSystem(this.httpClient);
    // Create products service with the shared HTTP client
    this.products = new Products(this.httpClient);
    // Create proposals service with the shared HTTP client
    this.proposals = new Proposals(this.httpClient);
    // Create saasApi service with the shared HTTP client
    this.saasApi = new SaasApi(this.httpClient);
    // Create snapshots service with the shared HTTP client
    this.snapshots = new Snapshots(this.httpClient);
    // Create socialMediaPosting service with the shared HTTP client
    this.socialMediaPosting = new SocialMediaPosting(this.httpClient);
    // Create store service with the shared HTTP client
    this.store = new Store(this.httpClient);
    // Create surveys service with the shared HTTP client
    this.surveys = new Surveys(this.httpClient);
    // Create users service with the shared HTTP client
    this.users = new Users(this.httpClient);
    // Create voiceAi service with the shared HTTP client
    this.voiceAi = new VoiceAi(this.httpClient);
    // Create workflows service with the shared HTTP client
    this.workflows = new Workflows(this.httpClient);
    
    // Initialize webhook manager
    this.webhooks = new WebhookManager(this.logger, this.sessionStorage, this.oauth, {
      clientId: this.config.clientId,
      publicKey: this.config.webhookPublicKey,
      logSensitiveData: this.config.logSensitiveData
    });
  }

  /**
   * Update session storage logger to match the main logger level
   */
  private updateSessionStorageLogger(): void {
    if (this.sessionStorage && 'logger' in this.sessionStorage) {
      // Create a child logger with the same level as the main logger
      // Determine the appropriate prefix based on storage type
      let prefix = 'Storage';
      const storageType = this.sessionStorage.constructor.name;
      if (storageType === 'MongoDBSessionStorage') {
        prefix = 'MongoDB';
      } else if (storageType === 'MemorySessionStorage') {
        prefix = 'Memory';
      }
      
      const childLogger = this.logger.child(prefix);
      (this.sessionStorage as any).logger = childLogger;
    }
  }

  /**
   * Initialize session storage (always exists now - either provided or auto-created)
   */
  private initializeSessionStorage(): void {
    // Pass clientId to session storage if available
    if (this.config.clientId && this.sessionStorage) {
      this.sessionStorage.setClientId(this.config.clientId);
    }
    
    this.sessionStorage!.init().catch(error => {
      this.logger.error('Failed to initialize session storage:', error);
    });
  }

  /**
   * Get the session storage instance (always available)
   */
  public getSessionStorage(): SessionStorage {
    return this.sessionStorage!;
  }

  /**
   * Set or update the session storage instance
   */
  public setSessionStorage(sessionStorage: SessionStorage): void {
    this.sessionStorage = sessionStorage;
    
    // Update the sessionStorage logger to match our configured level
    this.updateSessionStorageLogger();
    
    // Pass clientId to session storage if available
    if (this.config.clientId) {
      this.sessionStorage.setClientId(this.config.clientId);
    }
    
    this.initializeSessionStorage();
  }

  /**
   * Disconnect session storage
   */
  public async disconnectSessionStorage(): Promise<void> {
    try {
      await this.sessionStorage!.disconnect();
    } catch (error) {
      this.logger.error('Error disconnecting session storage:', error);
    }
  }

  /**
   * Update configuration and refresh all services
   */
  public updateConfig(newConfig: Partial<HighLevelConfig & { agencyRefreshToken?: string | undefined; locationRefreshToken?: string | undefined; }>): void {
    // Update configuration
    this.config = {
      ...this.config,
      ...newConfig
    };

    // Update headers with new configuration
    const newHeaders = this.getDefaultHeaders();
    Object.assign(this.httpClient.defaults.headers, newHeaders);

    // Re-initialize services with new configuration
    this.initializeServices();
  }



  /**
   * Set or update the private integration token (used without Bearer prefix)
   */
  public setPrivateIntegrationToken(token: string): void {
    this.updateConfig({ privateIntegrationToken: token });
  }

  /**
   * Get current private integration token
   */
  public getPrivateIntegrationToken(): string | undefined {
    return this.config.privateIntegrationToken;
  }

  /**
   * Get current temporary agency access token (read-only, set during initialization)
   */
  public getAgencyAccessToken(): string | undefined {
    return this.config.agencyAccessToken;
  }

  /**
   * Get current temporary location access token (read-only, set during initialization)
   */
  public getLocationAccessToken(): string | undefined {
    return this.config.locationAccessToken;
  }

  /**
   * Set client ID for OAuth operations and update session storage
   */
  public setClientId(clientId: string): void {
    this.updateConfig({ clientId });
    
    // Update session storage with new clientId (always exists)
    if (clientId) {
      this.sessionStorage!.setClientId(clientId);
    }
  }

  /**
   * Get current client ID
   */
  public getClientId(): string | undefined {
    return this.config.clientId;
  }

  /**
   * Set client secret for OAuth operations
   */
  public setClientSecret(clientSecret: string): void {
    this.updateConfig({ clientSecret });
  }

  /**
   * Get current client secret
   */
  public getClientSecret(): string | undefined {
    return this.config.clientSecret;
  }

  /**
   * Set API version
   */
  public setApiVersion(version: string): void {
    this.updateConfig({ apiVersion: version });
  }

  /**
   * Get current configuration
   */
  public getConfig(): HighLevelConfig {
    return { 
      ...this.config
    };
  }

  /**
   * Get current default headers
   */
  public getHeaders(): Record<string, string> {
    return this.getDefaultHeaders();
  }

  /**
   * Add custom request interceptor
   */
  public addRequestInterceptor(interceptor: RequestInterceptor): number {
    return this.httpClient.interceptors.request.use(
      interceptor.onFulfilled,
      interceptor.onRejected
    );
  }

  /**
   * Add custom response interceptor
   */
  public addResponseInterceptor(interceptor: ResponseInterceptor): number {
    return this.httpClient.interceptors.response.use(
      interceptor.onFulfilled,
      interceptor.onRejected
    );
  }

  /**
   * Remove request interceptor by ID
   */
  public removeRequestInterceptor(interceptorId: number): void {
    this.httpClient.interceptors.request.eject(interceptorId);
  }

  /**
   * Remove response interceptor by ID
   */
  public removeResponseInterceptor(interceptorId: number): void {
    this.httpClient.interceptors.response.eject(interceptorId);
  }

  /**
   * Get the underlying HTTP client (for advanced usage)
   */
  public getHttpClient(): AxiosInstance {
    return this.httpClient;
  }

  /**
   * Make a raw HTTP request using the configured client
   */
  public async request<T = any>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.httpClient.request<T>(config);
  }

  /**
   * Health check method to test connectivity
   */
  public async healthCheck(): Promise<boolean> {
    try {
      // Try to make a simple request to test connectivity
      await this.httpClient.get('/health');
      return true;
    } catch (error) {
      this.logger.warn('Health check failed:', error);
      return false;
    }
  }
}

export default HighLevel; 