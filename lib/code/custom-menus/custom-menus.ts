import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/custom-menus';
import { buildUrl, extractParams, getAuthToken, RequestConfig } from '../../utils/request-utils';

/**
 * CustomMenus Service
 * Documentation for Custom menus API
 */
export class CustomMenus {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Get Custom Menu Link
   * Fetches a single custom menus based on id. This endpoint allows clients to retrieve custom menu configurations, which may include menu items, categories, and associated metadata
   */
  async getCustomMenuById(
    params: {
      customMenuId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetSingleCustomMenusSuccessfulResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'customMenuId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Agency-Access"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/custom-menus/{customMenuId}', extracted.path),
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

    const response: AxiosResponse<Models.GetSingleCustomMenusSuccessfulResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Custom Menu Link
   * Removes a specific custom menu from the system. This operation requires authentication and proper permissions. The custom menu is identified by its unique ID, and the operation is performed within the context of a specific company.
   */
  async deleteCustomMenu(
    params: {
      customMenuId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.DeleteCustomMenuSuccessfulResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'customMenuId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Agency-Access"];
    
    const config: RequestConfig = {
      method: 'DELETE',
      url: buildUrl('/custom-menus/{customMenuId}', extracted.path),
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

    const response: AxiosResponse<Models.DeleteCustomMenuSuccessfulResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Custom Menu Link
   * Updates an existing custom menu for a given company. Requires authentication and proper permissions.
   */
  async updateCustomMenu(
    params: {
      customMenuId: string;
    },
    requestBody: Models.UpdateCustomMenuDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.UpdateCustomMenuLinkResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'customMenuId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Agency-Access"];
    
    const config: RequestConfig = {
      method: 'PUT',
      url: buildUrl('/custom-menus/{customMenuId}', extracted.path),
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

    const response: AxiosResponse<Models.UpdateCustomMenuLinkResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Custom Menu Links
   * Fetches a collection of custom menus based on specified criteria. This endpoint allows clients to retrieve custom menu configurations, which may include menu items, categories, and associated metadata. The response can be tailored using query parameters for filtering, sorting, and pagination.
   */
  async getCustomMenus(
    params: {
      locationId?: string;
      skip?: number;
      limit?: number;
      query?: string;
      showOnCompany?: boolean;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetCustomMenusResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'},{name: 'skip', in: 'query'},{name: 'limit', in: 'query'},{name: 'query', in: 'query'},{name: 'showOnCompany', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Agency-Access"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/custom-menus/', extracted.path),
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

    const response: AxiosResponse<Models.GetCustomMenusResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Custom Menu Link
   * Creates a new custom menu for a company. Requires authentication and proper permissions. For Icon Usage Details please refer to  https://doc.clickup.com/8631005/d/h/87cpx-243696/d60fa70db6b92b2
   */
  async createCustomMenu(
    requestBody: Models.CreateCustomMenuDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.GetSingleCustomMenusSuccessfulResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Agency-Access"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/custom-menus/', extracted.path),
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

    const response: AxiosResponse<Models.GetSingleCustomMenusSuccessfulResponseDTO> = await this.client.request(config);
    return response.data;
  }

}

export default CustomMenus; 