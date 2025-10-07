import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/medias';
import { buildUrl, extractParams, getAuthToken, RequestConfig } from '../../utils/request-utils';

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
   * Get List of Files/ Folders
   * Fetches list of files and folders from the media library
   */
  async fetchMediaContent(
    params: {
      offset?: string;
      limit?: string;
      sortBy: string;
      sortOrder: string;
      type: string;
      query?: string;
      altType: string;
      altId: string;
      parentId?: string;
      fetchAll?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetFilesResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'offset', in: 'query'},{name: 'limit', in: 'query'},{name: 'sortBy', in: 'query'},{name: 'sortOrder', in: 'query'},{name: 'type', in: 'query'},{name: 'query', in: 'query'},{name: 'altType', in: 'query'},{name: 'altId', in: 'query'},{name: 'parentId', in: 'query'},{name: 'fetchAll', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/medias/files', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    options?: AxiosRequestConfig
  ): Promise<Models.UploadFileResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/medias/upload-file', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, requestBody);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    options?: AxiosRequestConfig
  ): Promise<any> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'id', in: 'path'},{name: 'altType', in: 'query'},{name: 'altId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'DELETE',
      url: buildUrl('/medias/{id}', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update File/ Folder
   * Updates a single file or folder by ID
   */
  async updateMediaObject(
    params: {
      id: string;
    },
    requestBody: Models.UpdateObject,
    options?: AxiosRequestConfig
  ): Promise<any> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'id', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/medias/{id}', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, requestBody);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Folder
   * Creates a new folder in the media library
   */
  async createMediaFolder(
    requestBody: Models.CreateFolderParams,
    options?: AxiosRequestConfig
  ): Promise<Models.FolderDTO> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/medias/folder', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, requestBody);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.FolderDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Bulk Update Files/ Folders
   * Updates metadata or status of multiple files and folders
   */
  async bulkUpdateMediaObjects(
    requestBody: Models.UpdateMediaObjects,
    options?: AxiosRequestConfig
  ): Promise<any> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'PUT',
      url: buildUrl('/medias/update-files', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, requestBody);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * Bulk Delete / Trash Files or Folders
   * Soft-deletes or trashes multiple files and folders in a single request
   */
  async bulkDeleteMediaObjects(
    requestBody: Models.DeleteMediaObjectsBodyParams,
    options?: AxiosRequestConfig
  ): Promise<any> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'PUT',
      url: buildUrl('/medias/delete-files', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, requestBody);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

}

export default Medias; 