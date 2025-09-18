import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';
import { Associations } from './code/associations/associations';
import { Blogs } from './code/blogs/blogs';
import { Businesses } from './code/businesses/businesses';
import { Calendars } from './code/calendars/calendars';
import { Campaigns } from './code/campaigns/campaigns';
import { Companies } from './code/companies/companies';
import { Contacts } from './code/contacts/contacts';
import { Conversations } from './code/conversations/conversations';
import { Courses } from './code/courses/courses';
import { CustomFields } from './code/custom-fields/custom-fields';
import { CustomMenus } from './code/custom-menus/custom-menus';
import { EmailIsv } from './code/email-isv/email-isv';
import { Emails } from './code/emails/emails';
import { Forms } from './code/forms/forms';
import { Funnels } from './code/funnels/funnels';
import { Invoices } from './code/invoices/invoices';
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

// Extend AxiosRequestConfig to support retry tracking
declare module 'axios' {
  interface AxiosRequestConfig {
    __isRetryRequest?: boolean;
  }
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
}

// Type guard to ensure valid configuration
export type ValidConfig = 
  | { privateIntegrationToken: string; clientId?: string; clientSecret?: string; agencyAccessToken?: string; locationAccessToken?: string; apiVersion?: string; sessionStorage?: SessionStorage; logLevel?: LogLevelType; }
  | { clientId: string; clientSecret: string; privateIntegrationToken?: undefined; agencyAccessToken?: string; locationAccessToken?: string; apiVersion?: string; sessionStorage?: SessionStorage; logLevel?: LogLevelType; };

// Custom error class for GHL API errors
export class GHLError extends Error {
  public statusCode?: number;
  public response?: any;
  public request?: any;

  constructor(message: string, statusCode?: number, response?: any, request?: any) {
    super(message);
    this.name = 'GHLError';
    this.statusCode = statusCode;
    this.response = response;
    this.request = request;
  }
}

// Interceptor interfaces
export interface RequestInterceptor {
  onFulfilled?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>;
  onRejected?: (error: any) => any;
}

export interface ResponseInterceptor {
  onFulfilled?: (response: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>;
  onRejected?: (error: any) => any;
}

/**
 * HighLevel SDK Client
 * A comprehensive wrapper for the GHL API with interceptors, error handling, and automatic parameter injection
 */
export class HighLevel {
  private static readonly BASE_URL = 'https://services.leadconnectorhq.com';
  
  private config: Required<Omit<HighLevelConfig, 'privateIntegrationToken' | 'agencyAccessToken' | 'locationAccessToken' | 'clientId' | 'clientSecret' | 'sessionStorage' | 'logLevel'>> & { 
    privateIntegrationToken?: string;
    agencyAccessToken?: string;
    locationAccessToken?: string;
    clientId?: string;
    clientSecret?: string;
    agencyRefreshToken?: string | undefined;
    locationRefreshToken?: string | undefined;
  };
  private httpClient: AxiosInstance;
  private sessionStorage: SessionStorage;
  private logger: Logger;
  
  // Service instances
  public associations!: Associations;
  public blogs!: Blogs;
  public businesses!: Businesses;
  public calendars!: Calendars;
  public campaigns!: Campaigns;
  public companies!: Companies;
  public contacts!: Contacts;
  public conversations!: Conversations;
  public courses!: Courses;
  public customFields!: CustomFields;
  public customMenus!: CustomMenus;
  public emailIsv!: EmailIsv;
  public emails!: Emails;
  public forms!: Forms;
  public funnels!: Funnels;
  public invoices!: Invoices;
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
      apiVersion: config.apiVersion || '2021-07-28',
      privateIntegrationToken: config.privateIntegrationToken,
      agencyAccessToken: config.agencyAccessToken,
      locationAccessToken: config.locationAccessToken,
      clientId: config.clientId,
      clientSecret: config.clientSecret,
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

    // Inject reference to HighLevel instance for token selection
    (this.httpClient as any).__ghlInstance = this;

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
      'Version': this.config.apiVersion
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
        console.warn(`[GHL SDK] Failed to get token from storage for ${resourceId}:`, error);
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
   * Check if a token is expired (with 1 minute buffer for 401 retries)
   * @param sessionData - Session data containing expiration info
   * @returns True if token is expired
   */
  private isTokenExpired(sessionData: ISessionData): boolean {
    if (!sessionData.expire_at) return false;
    
    const bufferTime = 30 * 1000;
    return Date.now() + bufferTime >= sessionData.expire_at;
  }

  /**
   * Refresh token if expired and store the new token
   * @param resourceId - Resource ID for the session
   * @param sessionData - Current session data
   * @returns New Bearer token if successful, null otherwise
   */
  private async refreshTokenIfNeeded(resourceId: string, sessionData: ISessionData): Promise<string | null> {
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

        // Log request in development mode or when debug level is enabled
        this.logger.debug(`${config.method?.toUpperCase()} ${config.url}`, {
          headers: config.headers,
          params: config.params,
          data: config.data
        });

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
        // Log response in debug mode
        this.logger.debug(`Response ${response.status}:`, response.data);

        return response;
      },
      async (error: AxiosError) => {
        const originalRequest = error.config as any;
        
        // Handle 401 errors with automatic token refresh
        if (error.response?.status === 401 && !originalRequest.__isRetryRequest) {
          this.logger.warn('401 Unauthorized - Attempting token refresh');
          
          // Try to extract resourceId from the original request
          const resourceId = this.extractResourceId(
            [], // No security requirements available in error context
            originalRequest.headers || {},
            originalRequest.params || {},
            originalRequest.data || {},
            undefined // No preference available in error context
          );
          
          if (resourceId) {
            try {
              const sessionData = await this.sessionStorage.getSession(resourceId);
              
              if (sessionData && this.isTokenExpired(sessionData)) {
                this.logger.info(`Token expired for ${resourceId}, attempting refresh`);
                
                const newToken = await this.refreshTokenIfNeeded(resourceId, sessionData);
                if (newToken) {
                  // Mark as retry request and update authorization header
                  originalRequest.__isRetryRequest = true;
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

    if (error.response) {
      // The request was made and the server responded with a status code
      const { status, data } = error.response;
      const message = this.extractErrorMessage(data, status);
      
      ghlError = new GHLError(
        message,
        status,
        data,
        error.config
      );
    } else if (error.request) {
      // The request was made but no response was received
      ghlError = new GHLError(
        'Network error: No response received from server',
        undefined,
        undefined,
        error.config
      );
    } else {
      // Something happened in setting up the request
      ghlError = new GHLError(
        `Request setup error: ${error.message}`,
        undefined,
        undefined,
        error.config
      );
    }

    this.logger.error('Error:', ghlError);
    return Promise.reject(ghlError);
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
    // Create associations service with the shared HTTP client
    this.associations = new Associations(this.httpClient);
    // Create blogs service with the shared HTTP client
    this.blogs = new Blogs(this.httpClient);
    // Create businesses service with the shared HTTP client
    this.businesses = new Businesses(this.httpClient);
    // Create calendars service with the shared HTTP client
    this.calendars = new Calendars(this.httpClient);
    // Create campaigns service with the shared HTTP client
    this.campaigns = new Campaigns(this.httpClient);
    // Create companies service with the shared HTTP client
    this.companies = new Companies(this.httpClient);
    // Create contacts service with the shared HTTP client
    this.contacts = new Contacts(this.httpClient);
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
    // Create forms service with the shared HTTP client
    this.forms = new Forms(this.httpClient);
    // Create funnels service with the shared HTTP client
    this.funnels = new Funnels(this.httpClient);
    // Create invoices service with the shared HTTP client
    this.invoices = new Invoices(this.httpClient);
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
    this.webhooks = new WebhookManager(this.logger, this.sessionStorage, this.oauth);
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