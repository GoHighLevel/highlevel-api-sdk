import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/oauth';
import { UserType, UserTypeValue } from '../../constants';

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

    return `${this.MARKETPLACE_URL}/oauth/chooselocation?${new URLSearchParams(params).toString()}`;
  }

  /**
   * Refresh access token using refresh token
   * @param refreshToken The refresh token
   * @param clientId OAuth client ID
   * @param clientSecret OAuth client secret
   * @param grantType Grant type (must be 'refresh_token')
   * @param userType User type (UserType.Location or UserType.Company)
   */
  public async refreshToken(
    refreshToken: string,
    clientId: string,
    clientSecret: string,
    grantType: 'refresh_token',
    userType: UserTypeValue | string
  ): Promise<any> {
    if (grantType !== 'refresh_token') {
      throw new Error('grantType must be "refresh_token"');
    }

    if (!Object.values(UserType).includes(userType as UserType)) {
      throw new Error(`userType must be "${UserType.Location}" or "${UserType.Company}"`);
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
    options?: AxiosRequestConfig
  ): Promise<Models.GetAccessCodeSuccessfulResponseDto> {
    let url = '/oauth/token';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = [];


    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};

    const config: AxiosRequestConfig = {
      method: 'POST',
      url,
      params: { ...queryParams, ...allParams },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        ...headerParams,
        ...options?.headers
      },
      data: new URLSearchParams(requestBody as any).toString(),
      // Store security requirements for error handling
      __secutiryRequirements: securityRequirements,
      ...options
    };

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          // Combine queryParams with allParams for token resolution
          const combinedQuery = {
            ...queryParams,
            ...allParams
          };
          
          const authToken = await ghlInstance.getTokenForSecurity(
            securityRequirements,
            { ...headerParams, ...options?.headers },
            combinedQuery,
            requestBody
          );
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
    options?: AxiosRequestConfig
  ): Promise<Models.GetLocationAccessTokenSuccessfulResponseDto> {
    let url = '/oauth/locationToken';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Agency-Access-Only"];


    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};

    const config: AxiosRequestConfig = {
      method: 'POST',
      url,
      params: { ...queryParams, ...allParams },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        ...headerParams,
        ...options?.headers
      },
      data: new URLSearchParams(requestBody as any).toString(),
      // Store security requirements for error handling
      __secutiryRequirements: securityRequirements,
      ...options
    };

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          // Combine queryParams with allParams for token resolution
          const combinedQuery = {
            ...queryParams,
            ...allParams
          };
          
          const authToken = await ghlInstance.getTokenForSecurity(
            securityRequirements,
            { ...headerParams, ...options?.headers },
            combinedQuery,
            requestBody
          );
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
    options?: AxiosRequestConfig
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

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.skip !== undefined) {
        allParams['skip'] = params.skip;
      }
      if (params.limit !== undefined) {
        allParams['limit'] = params.limit;
      }
      if (params.query !== undefined) {
        allParams['query'] = params.query;
      }
      if (params.isInstalled !== undefined) {
        allParams['isInstalled'] = params.isInstalled;
      }
      if (params.companyId !== undefined) {
        allParams['companyId'] = params.companyId;
      }
      if (params.appId !== undefined) {
        allParams['appId'] = params.appId;
      }
      if (params.versionId !== undefined) {
        allParams['versionId'] = params.versionId;
      }
      if (params.onTrial !== undefined) {
        allParams['onTrial'] = params.onTrial;
      }
      if (params.planId !== undefined) {
        allParams['planId'] = params.planId;
      }
    }

    const config: AxiosRequestConfig = {
      method: 'GET',
      url,
      params: { ...queryParams, ...allParams },
      headers: {
        ...headerParams,
        ...options?.headers
      },
      // Store security requirements for error handling
      __secutiryRequirements: securityRequirements,
      ...options
    };

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          // Combine queryParams with allParams for token resolution
          const combinedQuery = {
            ...queryParams,
            ...allParams
          };
          
          const authToken = await ghlInstance.getTokenForSecurity(
            securityRequirements,
            { ...headerParams, ...options?.headers },
            combinedQuery,
            {}
          );
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