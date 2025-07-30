import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/businesses';

/**
 * Businesses Service
 * Documentation for business API
 */
export class Businesses {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Update Business
   * Update Business
   */
  async updateBusiness(
    params: {
      businessId: string;
    },
    requestBody: Models.UpdateBusinessDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.UpdateBusinessResponseDto> {
    let url = '/businesses/{businessId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];

    if (params) {
      if (params.businessId !== undefined) {
        url = url.replace('{' + 'businessId' + '}', encodeURIComponent(String(params.businessId)));
      }
    }

    const config: AxiosRequestConfig = {
      method: 'PUT',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      data: requestBody,
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

    const response: AxiosResponse<Models.UpdateBusinessResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Business
   * Delete Business
   */
  async deleteBusiness(
    params: {
      businessId: string;
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.DeleteBusinessResponseDto> {
    let url = '/businesses/{businessId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];

    if (params) {
      if (params.businessId !== undefined) {
        url = url.replace('{' + 'businessId' + '}', encodeURIComponent(String(params.businessId)));
      }
    }

    const config: AxiosRequestConfig = {
      method: 'DELETE',
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

    const response: AxiosResponse<Models.DeleteBusinessResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Business
   * Get Business
   */
  async getBusiness(
    params: {
      businessId: string;
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.GetBusinessByIdResponseDto> {
    let url = '/businesses/{businessId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];

    if (params) {
      if (params.businessId !== undefined) {
        url = url.replace('{' + 'businessId' + '}', encodeURIComponent(String(params.businessId)));
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

    const response: AxiosResponse<Models.GetBusinessByIdResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Businesses by Location
   * Get Businesses by Location
   */
  async getBusinessesByLocation(
    params: {
      locationId: string;
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.GetBusinessByLocationResponseDto> {
    let url = '/businesses/';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];

    if (params) {
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
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

    const response: AxiosResponse<Models.GetBusinessByLocationResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Business
   * Create Business
   */
  async createBusiness(
    requestBody: Models.CreateBusinessDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.UpdateBusinessResponseDto> {
    let url = '/businesses/';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];


    const config: AxiosRequestConfig = {
      method: 'POST',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      data: requestBody,
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

    const response: AxiosResponse<Models.UpdateBusinessResponseDto> = await this.client.request(config);
    return response.data;
  }

}

export default Businesses; 