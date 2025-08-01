import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/companies';

/**
 * Companies Service
 * Documentation for Companies API
 */
export class Companies {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Get Company
   * Get Comapny
   */
  async getCompany(
    params: {
      companyId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetCompanyByIdSuccessfulResponseDto> {
    let url = '/companies/{companyId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Agency-Access"];
    
    if (params) {
      if (params.companyId !== undefined) {
        url = url.replace('{' + 'companyId' + '}', encodeURIComponent(String(params.companyId)));
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

    // Get appropriate authorization token based on security requirements
    const ghlInstance = (this.client as any).__ghlInstance;
    if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
      try {
        // Combine headerParams with headers from options
        const combinedHeaders = {
          ...headerParams,
          ...options?.headers
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          queryParams,
          {}
        );
        
        if (authToken) {
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        }
      } catch (error) {
        throw error; // Re-throw authentication errors
      }
    }

    const response: AxiosResponse<Models.GetCompanyByIdSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

}

export default Companies; 