import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/snapshots';
import { buildUrl, extractParams, getAuthToken } from '../../utils/request-utils';

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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'companyId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/snapshots/', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'companyId', in: 'query'},];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/snapshots/share/link', extracted.path),
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'snapshotId', in: 'path'},{name: 'companyId', in: 'query'},{name: 'from', in: 'query'},{name: 'to', in: 'query'},{name: 'lastDoc', in: 'query'},{name: 'limit', in: 'query'},];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/snapshots/snapshot-status/{snapshotId}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'companyId', in: 'query'},{name: 'snapshotId', in: 'path'},{name: 'locationId', in: 'path'},];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/snapshots/snapshot-status/{snapshotId}/location/{locationId}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.GetLatestSnapshotPushStatusSuccessfulResponseDTO> = await this.client.request(config);
    return response.data;
  }

}

export default Snapshots; 