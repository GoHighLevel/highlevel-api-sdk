import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/oauth';
import { UserType, UserTypeValue } from '../../constants';
import { buildUrl, extractParams, getAuthToken, RequestConfig } from '../../utils/request-utils';

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
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = [];
    
    const processedBody = new URLSearchParams(requestBody as any).toString();
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/oauth/token', extracted.path),
      params: extracted.query,
      headers: { 
        
        'Content-Type': 'application/x-www-form-urlencoded',
        
        ...extracted.header, 
        ...options?.headers 
      },
      data: processedBody,
      __secutiryRequirements: requirements,
      
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, requestBody);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Agency-Access-Only"];
    
    const processedBody = new URLSearchParams(requestBody as any).toString();
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/oauth/locationToken', extracted.path),
      params: extracted.query,
      headers: { 
        
        'Content-Type': 'application/x-www-form-urlencoded',
        
        ...extracted.header, 
        ...options?.headers 
      },
      data: processedBody,
      __secutiryRequirements: requirements,
      
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, requestBody);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'skip', in: 'query'},{name: 'limit', in: 'query'},{name: 'query', in: 'query'},{name: 'isInstalled', in: 'query'},{name: 'companyId', in: 'query'},{name: 'appId', in: 'query'},{name: 'versionId', in: 'query'},{name: 'onTrial', in: 'query'},{name: 'planId', in: 'query'},];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Agency-Access"];
    
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/oauth/installedLocations', extracted.path),
      params: extracted.query,
      headers: { 
        
        ...extracted.header, 
        ...options?.headers 
      },
      
      __secutiryRequirements: requirements,
      
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.GetInstalledLocationsSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

}

export default Oauth; 