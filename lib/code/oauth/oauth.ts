import * as qs from 'querystring';
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/oauth';

/**
 * Oauth Service
 * Documentation for OAuth 2.0 API
 */
export class Oauth {
  private readonly MARKETPLACE_URL = 'https://marketplace.gohighlevel.com';
  
  private client: AxiosInstance;
  private config: { baseUrl?: string };

  constructor(httpClient: AxiosInstance, config: { baseUrl?: string } = {}) {
    this.client = httpClient;
    this.config = config;
  }

  /**
   * Generate OAuth authorization URL for the authorization code flow
   */
  public getAuthorizationUrl(clientId: string, redirectUri: string, scope: string): string {
    const params = {
      client_id: clientId,
      redirect_uri: redirectUri,
      scope,
      response_type: 'code'
    }

    return `${this.MARKETPLACE_URL}/oauth/chooselocation?${qs.stringify(params)}`;
  }

  /**
   * Refresh access token using refresh token
   * @param refreshToken The refresh token
   * @param clientId OAuth client ID
   * @param clientSecret OAuth client secret
   * @param grantType Grant type (must be 'refresh_token')
   * @param userType User type ('Location' or 'Company')
   */
  public async refreshToken(
    refreshToken: string,
    clientId: string,
    clientSecret: string,
    grantType: 'refresh_token',
    userType: 'Location' | 'Company'
  ): Promise<any> {
    if (grantType !== 'refresh_token') {
      throw new Error('grantType must be "refresh_token"');
    }

    if (!['Location', 'Company'].includes(userType)) {
      throw new Error('userType must be "Location" or "Company"');
    }

    return this.getAccessToken({
      refresh_token: refreshToken,
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: grantType,
      user_type: userType
    });
  }

  /**
   * Get Access Token
   * Use Access Tokens to access GoHighLevel resources on behalf of an authenticated location/company.
   */
  async getAccessToken(
    requestBody: Models.GetAccessCodebodyDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.GetAccessCodeSuccessfulResponseDto> {
    let url = '/oauth/token';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = [];


    const config: AxiosRequestConfig = {
      method: 'POST',
      url,
      params: queryParams,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        ...headerParams,
        ...options?.headers
      },
      data: qs.stringify(requestBody as any),
      ...options
    };

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.GetAccessCodeSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Location Access Token from Agency Token
   * This API allows you to generate locationAccessToken from AgencyAccessToken
   */
  async getLocationAccessToken(
    requestBody: Models.GetLocationAccessCodeBodyDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.GetLocationAccessTokenSuccessfulResponseDto> {
    let url = '/oauth/locationToken';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Agency-Access-Only"];


    const config: AxiosRequestConfig = {
      method: 'POST',
      url,
      params: queryParams,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        ...headerParams,
        ...options?.headers
      },
      data: qs.stringify(requestBody as any),
      ...options
    };

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.GetLocationAccessTokenSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Location where app is installed
   * This API allows you fetch location where app is installed upon
   */
  async getInstalledLocation(
    params: {
      skip?: string;
      limit?: string;
      query?: string;
      isInstalled?: boolean;
      companyId: string;
      appId: string;
      versionId?: string;
      onTrial?: boolean;
      planId?: string;
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.GetInstalledLocationsSuccessfulResponseDto> {
    let url = '/oauth/installedLocations';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Agency-Access"];

    if (params) {
      if (params.skip !== undefined) {
        queryParams['skip'] = params.skip;
      }
      if (params.limit !== undefined) {
        queryParams['limit'] = params.limit;
      }
      if (params.query !== undefined) {
        queryParams['query'] = params.query;
      }
      if (params.isInstalled !== undefined) {
        queryParams['isInstalled'] = params.isInstalled;
      }
      if (params.companyId !== undefined) {
        queryParams['companyId'] = params.companyId;
      }
      if (params.appId !== undefined) {
        queryParams['appId'] = params.appId;
      }
      if (params.versionId !== undefined) {
        queryParams['versionId'] = params.versionId;
      }
      if (params.onTrial !== undefined) {
        queryParams['onTrial'] = params.onTrial;
      }
      if (params.planId !== undefined) {
        queryParams['planId'] = params.planId;
      }
    }

    const config: AxiosRequestConfig = {
      method: 'GET',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      ...options
    };

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.GetInstalledLocationsSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

}

export default Oauth; 