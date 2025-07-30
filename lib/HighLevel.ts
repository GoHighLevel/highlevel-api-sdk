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
import { Products } from './code/products/products';
import { Saas } from './code/saas/saas';
import { Snapshots } from './code/snapshots/snapshots';
import { SocialPlanner } from './code/social-planner/social-planner';
import { Surveys } from './code/surveys/surveys';
import { Users } from './code/users/users';
import { Workflows } from './code/workflows/workflows';

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
}

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
  
  private config: Required<Omit<HighLevelConfig, 'privateIntegrationToken' | 'agencyAccessToken' | 'locationAccessToken' | 'clientId' | 'clientSecret'>> & { 
    privateIntegrationToken?: string;
    agencyAccessToken?: string;
    locationAccessToken?: string;
    clientId?: string;
    clientSecret?: string;
    agencyRefreshToken?: string | undefined;
    locationRefreshToken?: string | undefined;
  };
  private httpClient: AxiosInstance;
  
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
  public products!: Products;
  public saas!: Saas;
  public snapshots!: Snapshots;
  public socialPlanner!: SocialPlanner;
  public surveys!: Surveys;
  public users!: Users;
  public workflows!: Workflows;

  constructor(config: HighLevelConfig = {}) {
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
    // Priority 2: agencyAccessToken (with Bearer prefix)
    else if (this.config.agencyAccessToken) {
      headers['Authorization'] = `Bearer ${this.config.agencyAccessToken}`;
    }
    // Priority 3: locationAccessToken (with Bearer prefix)
    else if (this.config.locationAccessToken) {
      headers['Authorization'] = `Bearer ${this.config.locationAccessToken}`;
    }

    return headers;
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

        // Log request in development
        if (process.env.NODE_ENV === 'development') {
          console.log(`[GHL SDK] ${config.method?.toUpperCase()} ${config.url}`, {
            headers: config.headers,
            params: config.params,
            data: config.data
          });
        }

        return config;
      },
      (error) => {
        console.error('[GHL SDK] Request Error:', error);
        return Promise.reject(error);
      }
    );

    // Response interceptor - handle errors and responses
    this.httpClient.interceptors.response.use(
      (response) => {
        // Log response in development
        if (process.env.NODE_ENV === 'development') {
          console.log(`[GHL SDK] Response ${response.status}:`, response.data);
        }

        return response;
      },
      async (error: AxiosError) => {
        // Check if this is a 401 error that might be resolved by refreshing tokens
        if (error.response?.status === 401 && error.config && !error.config.__isRetryRequest) {
          try {
            const refreshed = await this.attemptTokenRefresh(error);
            if (refreshed) {
              // Mark this as a retry request to prevent infinite loops
              error.config.__isRetryRequest = true;
              // Retry the original request with the new token
              return this.httpClient.request(error.config);
            }
          } catch (refreshError) {
            console.warn('[GHL SDK] Token refresh failed:', refreshError);
            // Fall through to normal error handling
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

    console.error('[GHL SDK] Error:', ghlError);
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
    // Create products service with the shared HTTP client
    this.products = new Products(this.httpClient);
    // Create saas service with the shared HTTP client
    this.saas = new Saas(this.httpClient);
    // Create snapshots service with the shared HTTP client
    this.snapshots = new Snapshots(this.httpClient);
    // Create socialPlanner service with the shared HTTP client
    this.socialPlanner = new SocialPlanner(this.httpClient);
    // Create surveys service with the shared HTTP client
    this.surveys = new Surveys(this.httpClient);
    // Create users service with the shared HTTP client
    this.users = new Users(this.httpClient);
    // Create workflows service with the shared HTTP client
    this.workflows = new Workflows(this.httpClient);
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
   * Set or update the agency access token (used with Bearer prefix)
   */
  public setAgencyAccessToken(token: string): void {
    this.updateConfig({ agencyAccessToken: token });
  }

  /**
   * Get current agency access token
   */
  public getAgencyAccessToken(): string | undefined {
    return this.config.agencyAccessToken;
  }

  /**
   * Set or update the location access token (used with Bearer prefix)
   */
  public setLocationAccessToken(token: string): void {
    this.updateConfig({ locationAccessToken: token });
  }

  /**
   * Get current location access token
   */
  public getLocationAccessToken(): string | undefined {
    return this.config.locationAccessToken;
  }

  /**
   * Set or update the agency refresh token
   */
  public setAgencyRefreshToken(token: string): void {
    this.updateConfig({ agencyRefreshToken: token });
  }

  /**
   * Get current agency refresh token
   */
  public getAgencyRefreshToken(): string | undefined {
    return this.config.agencyRefreshToken;
  }

  /**
   * Set or update the location refresh token
   */
  public setLocationRefreshToken(token: string): void {
    this.updateConfig({ locationRefreshToken: token });
  }

  /**
   * Get current location refresh token
   */
  public getLocationRefreshToken(): string | undefined {
    return this.config.locationRefreshToken;
  }

  /**
   * Set client ID for OAuth operations
   */
  public setClientId(clientId: string): void {
    this.updateConfig({ clientId });
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
   * Dynamically select the appropriate token based on security requirements
   */
  private selectTokenForSecurity(securityRequirements: string[], preferredTokenType?: 'agency' | 'location'): string | null {
    // Always prioritize privateIntegrationToken if available
    if (this.config.privateIntegrationToken) {
      return `Bearer ${this.config.privateIntegrationToken}`;
    }

    // If no security requirements, use default (location token)
    if (!securityRequirements || securityRequirements.length === 0) {
      if (this.config.locationAccessToken) {
        return `Bearer ${this.config.locationAccessToken}`;
      }
      return null;
    }

    const hasAgencyAccess = securityRequirements.includes('Agency-Access');
    const hasLocationAccess = securityRequirements.includes('Location-Access');
    const hasAgencyOnly = securityRequirements.includes('Agency-Access-Only');
    const hasLocationOnly = securityRequirements.includes('Location-Access-Only');

    // Handle exclusive access requirements
    if (hasAgencyOnly) {
      if (this.config.agencyAccessToken) {
        return `Bearer ${this.config.agencyAccessToken}`;
      }
      throw new GHLError(`This method requires an Agency Access Token, but none is configured. Use setAgencyAccessToken() to configure it.`);
    }

    if (hasLocationOnly) {
      if (this.config.locationAccessToken) {
        return `Bearer ${this.config.locationAccessToken}`;
      }
      throw new GHLError(`This method requires a Location Access Token, but none is configured. Use setLocationAccessToken() to configure it.`);
    }

    // Handle cases where both agency and location access are supported
    if (hasAgencyAccess && hasLocationAccess) {
      // Use preferred token type if specified
      if (preferredTokenType === 'agency' && this.config.agencyAccessToken) {
        return `Bearer ${this.config.agencyAccessToken}`;
      }
      if (preferredTokenType === 'location' && this.config.locationAccessToken) {
        return `Bearer ${this.config.locationAccessToken}`;
      }
      
      // Default to location token when both are supported
      if (this.config.locationAccessToken) {
        return `Bearer ${this.config.locationAccessToken}`;
      }
      if (this.config.agencyAccessToken) {
        return `Bearer ${this.config.agencyAccessToken}`;
      }
      
      throw new GHLError(`This method supports both Agency and Location Access Tokens, but neither is configured. Use setAgencyAccessToken() or setLocationAccessToken() to configure one.`);
    }

    // Handle single access type requirements
    if (hasAgencyAccess) {
      if (this.config.agencyAccessToken) {
        return `Bearer ${this.config.agencyAccessToken}`;
      }
      throw new GHLError(`This method requires an Agency Access Token, but none is configured. Use setAgencyAccessToken() to configure it.`);
    }

    if (hasLocationAccess) {
      if (this.config.locationAccessToken) {
        return `Bearer ${this.config.locationAccessToken}`;
      }
      throw new GHLError(`This method requires a Location Access Token, but none is configured. Use setLocationAccessToken() to configure it.`);
    }

    // Handle generic bearer auth
    if (securityRequirements.includes('bearer')) {
      if (this.config.locationAccessToken) {
        return `Bearer ${this.config.locationAccessToken}`;
      }
      if (this.config.agencyAccessToken) {
        return `Bearer ${this.config.agencyAccessToken}`;
      }
      throw new GHLError(`This method requires authentication, but no token is configured.`);
    }

    // Default fallback
    if (this.config.locationAccessToken) {
      return `Bearer ${this.config.locationAccessToken}`;
    }
    if (this.config.agencyAccessToken) {
      return `Bearer ${this.config.agencyAccessToken}`;
    }
    
    return null; // No token available
  }

  /**
   * Get the appropriate token for the given security requirements
   */
  public getTokenForSecurity(securityRequirements: string[] = [], preferredTokenType?: 'agency' | 'location'): string {
    const token = this.selectTokenForSecurity(securityRequirements, preferredTokenType);
    if (!token) {
      throw new GHLError(`No authentication token is configured. Please configure an appropriate token using setPrivateIntegrationToken(), setAgencyAccessToken(), or setLocationAccessToken().`);
    }
    return token;
  }

  /**
   * Attempt to refresh an expired token when a 401 error occurs
   */
  private async attemptTokenRefresh(error: AxiosError): Promise<boolean> {
    // Check if we have the required client credentials
    if (!this.config.clientId || !this.config.clientSecret) {
      console.warn('[GHL SDK] Cannot refresh token: clientId and clientSecret are required');
      return false;
    }

    // Get the Authorization header from the failed request
    const authHeader = error.config?.headers?.Authorization as string;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return false;
    }

    // Determine which token was used and if we can refresh it
    let refreshToken: string | undefined;
    let userType: 'Company' | 'Location';
    let tokenType: 'agency' | 'location';

    if (this.config.agencyAccessToken && `Bearer ${this.config.agencyAccessToken}` === authHeader) {
      // Agency token was used
      refreshToken = this.config.agencyRefreshToken;
      userType = 'Company';
      tokenType = 'agency';
    } else if (this.config.locationAccessToken && `Bearer ${this.config.locationAccessToken}` === authHeader) {
      // Location token was used
      refreshToken = this.config.locationRefreshToken;
      userType = 'Location';
      tokenType = 'location';
    } else {
      // Cannot determine which token was used or it's not refreshable (e.g., privateIntegrationToken)
      return false;
    }

    if (!refreshToken) {
      console.warn(`[GHL SDK] Cannot refresh ${tokenType} token: refresh token not available`);
      return false;
    }

    try {
      console.log(`[GHL SDK] Attempting to refresh ${tokenType} access token...`);
      
      // Call the OAuth service to refresh the token
      const refreshResponse = await this.oauth.getAccessToken({
        client_id: this.config.clientId,
        client_secret: this.config.clientSecret,
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
        user_type: userType
      });

             // Update the appropriate token with the new access token
       if (tokenType === 'agency') {
         this.config.agencyAccessToken = refreshResponse.access_token;
         // Update refresh token if provided
         if (refreshResponse.refresh_token) {
           this.config.agencyRefreshToken = refreshResponse.refresh_token;
         }
         console.log('[GHL SDK] Agency access token refreshed successfully');
       } else {
         this.config.locationAccessToken = refreshResponse.access_token;
         // Update refresh token if provided
         if (refreshResponse.refresh_token) {
           this.config.locationRefreshToken = refreshResponse.refresh_token;
         }
         console.log('[GHL SDK] Location access token refreshed successfully');
       }

      // Update the default headers with the new token
      const newHeaders = this.getDefaultHeaders();
      Object.assign(this.httpClient.defaults.headers, newHeaders);

      return true;
    } catch (refreshError) {
      console.error(`[GHL SDK] Failed to refresh ${tokenType} token:`, refreshError);
      return false;
    }
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
      console.warn('[GHL SDK] Health check failed:', error);
      return false;
    }
  }
}

export default HighLevel; 