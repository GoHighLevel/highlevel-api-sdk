import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/campaigns';

/**
 * Campaigns Service
 * Documentation for campaigns API
 */
export class Campaigns {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Get Campaigns
   * Get Campaigns
   */
  async getCampaigns(
    params: {
      locationId: string;
      status?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.CampaignsSuccessfulResponseDto> {
    let url = '/campaigns/';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
      if (params.status !== undefined) {
        queryParams['status'] = params.status;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.status !== undefined) {
        allParams['status'] = params.status;
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
        
        // Combine queryParams with allParams for token resolution
        const combinedQuery = {
          ...queryParams,
          ...allParams
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          combinedQuery,
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

    const response: AxiosResponse<Models.CampaignsSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

}

export default Campaigns; 