import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/phone-system';

/**
 * PhoneSystem Service
 * Documentation for Phone System API
 */
export class PhoneSystem {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * List Number Pools
   * Get list of number pools
   */
  async getNumberPoolList(
    params: {
      locationId?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<any> {
    let url = '/phone-system/number-pools';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    
    if (params) {
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
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

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * List active numbers
   * Retrieve a paginated list of active phone numbers for a specific location. Supports filtering, pagination, and optional exclusion of number pool assignments.
   */
  async activeNumbers(
    params: {
      locationId: string;
      pageSize?: number;
      page?: number;
      searchFilter?: string;
      skipNumberPool?: boolean;
    },
    options?: AxiosRequestConfig
  ): Promise<any> {
    let url = '/phone-system/numbers/location/{locationId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    
    if (params) {
      if (params.locationId !== undefined) {
        url = url.replace('{' + 'locationId' + '}', encodeURIComponent(String(params.locationId)));
      }
      if (params.pageSize !== undefined) {
        queryParams['pageSize'] = params.pageSize;
      }
      if (params.page !== undefined) {
        queryParams['page'] = params.page;
      }
      if (params.searchFilter !== undefined) {
        queryParams['searchFilter'] = params.searchFilter;
      }
      if (params.skipNumberPool !== undefined) {
        queryParams['skipNumberPool'] = params.skipNumberPool;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.pageSize !== undefined) {
        allParams['pageSize'] = params.pageSize;
      }
      if (params.page !== undefined) {
        allParams['page'] = params.page;
      }
      if (params.searchFilter !== undefined) {
        allParams['searchFilter'] = params.searchFilter;
      }
      if (params.skipNumberPool !== undefined) {
        allParams['skipNumberPool'] = params.skipNumberPool;
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

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

}

export default PhoneSystem; 