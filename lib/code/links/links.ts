import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/links';

/**
 * Links Service
 * Documentation for links API
 */
export class Links {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Update Link
   * Update Link
   */
  async updateLink(
    params: {
      linkId: string;
    },
    requestBody: Models.LinkUpdateDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.GetLinkSuccessfulResponseDto> {
    let url = '/links/{linkId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];

    if (params) {
      if (params.linkId !== undefined) {
        url = url.replace('{' + 'linkId' + '}', encodeURIComponent(String(params.linkId)));
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

    const response: AxiosResponse<Models.GetLinkSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Link
   * Delete Link
   */
  async deleteLink(
    params: {
      linkId: string;
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.DeleteLinksSuccessfulResponseDto> {
    let url = '/links/{linkId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];

    if (params) {
      if (params.linkId !== undefined) {
        url = url.replace('{' + 'linkId' + '}', encodeURIComponent(String(params.linkId)));
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

    const response: AxiosResponse<Models.DeleteLinksSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Links
   * Get Links
   */
  async getLinks(
    params: {
      locationId: string;
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.GetLinksSuccessfulResponseDto> {
    let url = '/links/';
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

    const response: AxiosResponse<Models.GetLinksSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Link
   * Create Link
   */
  async createLink(
    requestBody: Models.LinksDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.GetLinkSuccessfulResponseDto> {
    let url = '/links/';
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

    const response: AxiosResponse<Models.GetLinkSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

}

export default Links; 