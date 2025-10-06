import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/marketplace';
import { buildUrl, extractParams, getAuthToken } from '../../utils/request-utils';

/**
 * Marketplace Service
 * Documentation for Marketplace API
 */
export class Marketplace {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Create a new wallet charge
   * Create a new wallet charge
   */
  async charge(
    requestBody: Models.RaiseChargeBodyDTO,
    options?: AxiosRequestConfig
  ): Promise<any> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access-Only"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/marketplace/billing/charges', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, requestBody);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get all wallet charges
   * Get all wallet charges
   */
  async getCharges(
    params: {
      meterId?: string;
      eventId?: string;
      userId?: string;
      startDate?: string;
      endDate?: string;
      skip?: number;
      limit?: number;
    },
    options?: AxiosRequestConfig
  ): Promise<any> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'meterId', in: 'query'},{name: 'eventId', in: 'query'},{name: 'userId', in: 'query'},{name: 'startDate', in: 'query'},{name: 'endDate', in: 'query'},{name: 'skip', in: 'query'},{name: 'limit', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access-Only"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/marketplace/billing/charges', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete a wallet charge
   * Delete a wallet charge
   */
  async deleteCharge(
    params: {
      chargeId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<any> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'chargeId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access-Only"];
    
    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: buildUrl('/marketplace/billing/charges/{chargeId}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get specific wallet charge details
   * Get specific wallet charge details
   */
  async getSpecificCharge(
    params: {
      chargeId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<any> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'chargeId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access-Only"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/marketplace/billing/charges/{chargeId}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * Check if account has sufficient funds
   * Check if account has sufficient funds
   */
  async hasFunds(
    options?: AxiosRequestConfig
  ): Promise<any> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access-Only"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/marketplace/billing/charges/has-funds', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * Uninstall an application
   * Uninstalls an application from your company or a specific location. This will remove the application&#x60;s access and stop all its functionalities
   */
  async uninstallApplication(
    params: {
      appId: string;
    },
    requestBody: Models.DeleteIntegrationBodyDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.DeleteIntegrationResponse> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'appId', in: 'path'},];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access-Only","Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: buildUrl('/marketplace/app/{appId}/installations', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, requestBody, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.DeleteIntegrationResponse> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Installer Details
   * Fetches installer details for the authenticated user. This endpoint returns information about the company, location, user, and installation details associated with the current OAuth token.
   */
  async getInstallerDetails(
    params: {
      appId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetInstallerDetailsResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'appId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = [];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/marketplace/app/{appId}/installations', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.GetInstallerDetailsResponseDTO> = await this.client.request(config);
    return response.data;
  }

}

export default Marketplace; 