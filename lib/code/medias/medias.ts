import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/medias';

/**
 * Medias Service
 * Documentation for Files API
 */
export class Medias {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Get List of Files
   * Fetches list of files and folders from the media library
   */
  async fetchMediaContent(
    params: {
      offset?: string;
      limit?: string;
      sortBy: string;
      sortOrder: string;
      type?: string;
      query?: string;
      altType: string;
      altId: string;
      parentId?: string;
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.GetFilesResponseDTO> {
    let url = '/medias/files';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access-Only"];

    if (params) {
      if (params.offset !== undefined) {
        queryParams['offset'] = params.offset;
      }
      if (params.limit !== undefined) {
        queryParams['limit'] = params.limit;
      }
      if (params.sortBy !== undefined) {
        queryParams['sortBy'] = params.sortBy;
      }
      if (params.sortOrder !== undefined) {
        queryParams['sortOrder'] = params.sortOrder;
      }
      if (params.type !== undefined) {
        queryParams['type'] = params.type;
      }
      if (params.query !== undefined) {
        queryParams['query'] = params.query;
      }
      if (params.altType !== undefined) {
        queryParams['altType'] = params.altType;
      }
      if (params.altId !== undefined) {
        queryParams['altId'] = params.altId;
      }
      if (params.parentId !== undefined) {
        queryParams['parentId'] = params.parentId;
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

    const response: AxiosResponse<Models.GetFilesResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Upload File into Media Library
   * If hosted is set to true then fileUrl is required. Else file is required. If adding a file, maximum allowed is 25 MB
   */
  async uploadMediaContent(
    requestBody: any,
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.UploadFileResponseDTO> {
    let url = '/medias/upload-file';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access-Only"];


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

    const response: AxiosResponse<Models.UploadFileResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete File or Folder
   * Deletes specific file or folder from the media library
   */
  async deleteMediaContent(
    params: {
      id: string;
      altType: string;
      altId: string;
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<any> {
    let url = '/medias/{id}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access-Only"];

    if (params) {
      if (params.id !== undefined) {
        url = url.replace('{' + 'id' + '}', encodeURIComponent(String(params.id)));
      }
      if (params.altType !== undefined) {
        queryParams['altType'] = params.altType;
      }
      if (params.altId !== undefined) {
        queryParams['altId'] = params.altId;
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

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

}

export default Medias; 