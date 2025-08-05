import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/snapshots';

/**
 * Snapshots Service
 * Documentation for Snapshots API
 */
export class Snapshots {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Get Snapshots
   * Get a list of all own and imported Snapshots
   */
  async getCustomSnapshots(
    params: {
      companyId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetSnapshotsSuccessfulResponseDto> {
    let url = '/snapshots/';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Agency-Access"];
    
    if (params) {
      if (params.companyId !== undefined) {
        queryParams['companyId'] = params.companyId;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.companyId !== undefined) {
        allParams['companyId'] = params.companyId;
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

    const response: AxiosResponse<Models.GetSnapshotsSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Snapshot Share Link
   * Create a share link for snapshot
   */
  async createSnapshotShareLink(
    params: {
      companyId: string;
    },
    requestBody: Models.CreateSnapshotShareLinkRequestDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.CreateSnapshotShareLinkSuccessfulResponseDTO> {
    let url = '/snapshots/share/link';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Agency-Access"];
    
    if (params) {
      if (params.companyId !== undefined) {
        queryParams['companyId'] = params.companyId;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.companyId !== undefined) {
        allParams['companyId'] = params.companyId;
      }
    }

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
          requestBody
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

    const response: AxiosResponse<Models.CreateSnapshotShareLinkSuccessfulResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Snapshot Push between Dates
   * Get list of sub-accounts snapshot pushed in time period
   */
  async getSnapshotPush(
    params: {
      snapshotId: string;
      companyId: string;
      from: string;
      to: string;
      lastDoc: string;
      limit: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetSnapshotPushStatusSuccessfulResponseDTO> {
    let url = '/snapshots/snapshot-status/{snapshotId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Agency-Access"];
    
    if (params) {
      if (params.snapshotId !== undefined) {
        url = url.replace('{' + 'snapshotId' + '}', encodeURIComponent(String(params.snapshotId)));
      }
      if (params.companyId !== undefined) {
        queryParams['companyId'] = params.companyId;
      }
      if (params.from !== undefined) {
        queryParams['from'] = params.from;
      }
      if (params.to !== undefined) {
        queryParams['to'] = params.to;
      }
      if (params.lastDoc !== undefined) {
        queryParams['lastDoc'] = params.lastDoc;
      }
      if (params.limit !== undefined) {
        queryParams['limit'] = params.limit;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.snapshotId !== undefined) {
        allParams['snapshotId'] = params.snapshotId;
      }
      if (params.companyId !== undefined) {
        allParams['companyId'] = params.companyId;
      }
      if (params.from !== undefined) {
        allParams['from'] = params.from;
      }
      if (params.to !== undefined) {
        allParams['to'] = params.to;
      }
      if (params.lastDoc !== undefined) {
        allParams['lastDoc'] = params.lastDoc;
      }
      if (params.limit !== undefined) {
        allParams['limit'] = params.limit;
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

    const response: AxiosResponse<Models.GetSnapshotPushStatusSuccessfulResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Last Snapshot Push
   * Get Latest Snapshot Push Status for a location id
   */
  async getLatestSnapshotPush(
    params: {
      companyId: string;
      snapshotId: string;
      locationId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetLatestSnapshotPushStatusSuccessfulResponseDTO> {
    let url = '/snapshots/snapshot-status/{snapshotId}/location/{locationId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Agency-Access"];
    
    if (params) {
      if (params.companyId !== undefined) {
        queryParams['companyId'] = params.companyId;
      }
      if (params.snapshotId !== undefined) {
        url = url.replace('{' + 'snapshotId' + '}', encodeURIComponent(String(params.snapshotId)));
      }
      if (params.locationId !== undefined) {
        url = url.replace('{' + 'locationId' + '}', encodeURIComponent(String(params.locationId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.companyId !== undefined) {
        allParams['companyId'] = params.companyId;
      }
      if (params.snapshotId !== undefined) {
        allParams['snapshotId'] = params.snapshotId;
      }
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

    const response: AxiosResponse<Models.GetLatestSnapshotPushStatusSuccessfulResponseDTO> = await this.client.request(config);
    return response.data;
  }

}

export default Snapshots; 