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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
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

    const response: AxiosResponse<Models.GetLatestSnapshotPushStatusSuccessfulResponseDTO> = await this.client.request(config);
    return response.data;
  }

}

export default Snapshots; 