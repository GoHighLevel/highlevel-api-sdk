import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/brand-boards';
import { buildUrl, extractParams, getAuthToken, RequestConfig } from '../../utils/request-utils';

/**
 * BrandBoards Service
 * Documentation for Brand Boards API
 */
export class BrandBoards {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Get Brand Boards
   * Retrieves all Brand Boards for a specific location
   */
  async getBrandBoardsByLocation(
    params: {
      locationId: string;
      limit?: number;
      offset?: number;
      search?: string;
      deleted?: boolean;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetBrandBoardsByLocationSuccessDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'},{name: 'limit', in: 'query'},{name: 'offset', in: 'query'},{name: 'search', in: 'query'},{name: 'deleted', in: 'query'},];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/brand-boards/{locationId}', extracted.path),
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

    const response: AxiosResponse<Models.GetBrandBoardsByLocationSuccessDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Brand Board
   * Retrieves a specific Brand Board by its ID
   */
  async getBrandBoardById(
    params: {
      locationId: string;
      id: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetBrandBoardSuccessDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'},{name: 'id', in: 'path'},];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/brand-boards/{locationId}/{id}', extracted.path),
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

    const response: AxiosResponse<Models.GetBrandBoardSuccessDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update a Brand Board
   * Updates an existing Brand Board
   */
  async updateBrandBoard(
    params: {
      locationId: string;
      id: string;
    },
    requestBody: Models.UpdateBrandBoardBody,
    options?: AxiosRequestConfig
  ): Promise<Models.GetBrandBoardSuccessDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'},{name: 'id', in: 'path'},];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'PATCH',
      url: buildUrl('/brand-boards/{locationId}/{id}', extracted.path),
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

    const response: AxiosResponse<Models.GetBrandBoardSuccessDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete a Brand Board
   * Deletes a Brand Board
   */
  async deleteBrandBoard(
    params: {
      locationId: string;
      id: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetBrandBoardSuccessDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'},{name: 'id', in: 'path'},];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'DELETE',
      url: buildUrl('/brand-boards/{locationId}/{id}', extracted.path),
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

    const response: AxiosResponse<Models.GetBrandBoardSuccessDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create a new brand board
   * Creates a new brand board with logos, colors, and fonts
   */
  async createBrandBoard(
    requestBody: Models.CreateBrandBoardParam,
    options?: AxiosRequestConfig
  ): Promise<Models.GetBrandBoardSuccessDTO> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/brand-boards/', extracted.path),
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

    const response: AxiosResponse<Models.GetBrandBoardSuccessDTO> = await this.client.request(config);
    return response.data;
  }

}

export default BrandBoards; 