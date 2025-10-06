import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/funnels';
import { buildUrl, extractParams, getAuthToken } from '../../utils/request-utils';

/**
 * Funnels Service
 * Documentation for funnels API
 */
export class Funnels {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Create Redirect
   * The &quot;Create Redirect&quot; API Allows adding a new url redirect to the system. Use this endpoint to create a url redirect with the specified details. Ensure that the required information is provided in the request payload.
   */
  async createRedirect(
    requestBody: Models.CreateRedirectParams,
    options?: AxiosRequestConfig
  ): Promise<Models.CreateRedirectResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/funnels/lookup/redirect', extracted.path),
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

    const response: AxiosResponse<Models.CreateRedirectResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Redirect By Id
   * The &quot;Update Redirect By Id&quot; API Allows updating an existing URL redirect in the system. Use this endpoint to modify a URL redirect with the specified ID using details provided in the request payload.
   */
  async updateRedirectById(
    params: {
      id: string;
    },
    requestBody: Models.UpdateRedirectParams,
    options?: AxiosRequestConfig
  ): Promise<Models.UpdateRedirectResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'id', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'PATCH',
      url: buildUrl('/funnels/lookup/redirect/{id}', extracted.path),
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

    const response: AxiosResponse<Models.UpdateRedirectResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Redirect By Id
   * The &quot;Delete Redirect By Id&quot; API Allows deletion of a URL redirect from the system using its unique identifier. Use this endpoint to delete a URL redirect with the specified ID using details provided in the request payload.
   */
  async deleteRedirectById(
    params: {
      id: string;
      locationId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.DeleteRedirectResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'id', in: 'path'},{name: 'locationId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: buildUrl('/funnels/lookup/redirect/{id}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.DeleteRedirectResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Fetch List of Redirects
   * Retrieves a list of all URL redirects based on the given query parameters.
   */
  async fetchRedirectsList(
    params: {
      locationId: string;
      limit: number;
      offset: number;
      search?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.RedirectListResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'},{name: 'limit', in: 'query'},{name: 'offset', in: 'query'},{name: 'search', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/funnels/lookup/redirect/list', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.RedirectListResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Fetch List of Funnels
   * Retrieves a list of all funnels based on the given query parameters.
   */
  async getFunnels(
    params: {
      locationId: string;
      type?: string;
      category?: string;
      offset?: string;
      limit?: string;
      parentId?: string;
      name?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.FunnelListResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'},{name: 'type', in: 'query'},{name: 'category', in: 'query'},{name: 'offset', in: 'query'},{name: 'limit', in: 'query'},{name: 'parentId', in: 'query'},{name: 'name', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/funnels/funnel/list', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.FunnelListResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Fetch list of funnel pages
   * Retrieves a list of all funnel pages based on the given query parameters.
   */
  async getPagesByFunnelId(
    params: {
      locationId: string;
      funnelId: string;
      name?: string;
      limit: number;
      offset: number;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.FunnelPageResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'},{name: 'funnelId', in: 'query'},{name: 'name', in: 'query'},{name: 'limit', in: 'query'},{name: 'offset', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/funnels/page', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.FunnelPageResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Fetch count of funnel pages
   * Retrieves count of all funnel pages based on the given query parameters.
   */
  async getPagesCountByFunnelId(
    params: {
      locationId: string;
      funnelId: string;
      name?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.FunnelPageCountResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'},{name: 'funnelId', in: 'query'},{name: 'name', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/funnels/page/count', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.FunnelPageCountResponseDTO> = await this.client.request(config);
    return response.data;
  }

}

export default Funnels; 