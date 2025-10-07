import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/emails';
import { buildUrl, extractParams, getAuthToken, RequestConfig } from '../../utils/request-utils';

/**
 * Emails Service
 * Documentation for emails API
 */
export class Emails {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Get Campaigns
   * Get Campaigns
   */
  async fetchCampaigns(
    params: {
      locationId: string;
      limit?: number;
      offset?: number;
      status?: string;
      emailStatus?: string;
      name?: string;
      parentId?: string;
      limitedFields?: boolean;
      archived?: boolean;
      campaignsOnly?: boolean;
      showStats?: boolean;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.ScheduleFetchSuccessfulDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'},{name: 'limit', in: 'query'},{name: 'offset', in: 'query'},{name: 'status', in: 'query'},{name: 'emailStatus', in: 'query'},{name: 'name', in: 'query'},{name: 'parentId', in: 'query'},{name: 'limitedFields', in: 'query'},{name: 'archived', in: 'query'},{name: 'campaignsOnly', in: 'query'},{name: 'showStats', in: 'query'},];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/emails/schedule', extracted.path),
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

    const response: AxiosResponse<Models.ScheduleFetchSuccessfulDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create a new template
   * Create a new template
   */
  async createTemplate(
    requestBody: Models.CreateBuilderDto,
    options?: AxiosRequestConfig
  ): Promise<Models.CreateBuilderSuccesfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/emails/builder', extracted.path),
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

    const response: AxiosResponse<Models.CreateBuilderSuccesfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Fetch email templates
   * Fetch email templates by location id
   */
  async fetchTemplate(
    params: {
      locationId: string;
      limit?: string;
      offset?: string;
      search?: string;
      sortByDate?: string;
      archived?: string;
      builderVersion?: string;
      name?: string;
      parentId?: string;
      originId?: string;
      templatesOnly?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.FetchBuilderSuccesfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'},{name: 'limit', in: 'query'},{name: 'offset', in: 'query'},{name: 'search', in: 'query'},{name: 'sortByDate', in: 'query'},{name: 'archived', in: 'query'},{name: 'builderVersion', in: 'query'},{name: 'name', in: 'query'},{name: 'parentId', in: 'query'},{name: 'originId', in: 'query'},{name: 'templatesOnly', in: 'query'},];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/emails/builder', extracted.path),
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

    const response: AxiosResponse<Models.FetchBuilderSuccesfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete a template
   * Delete a template
   */
  async deleteTemplate(
    params: {
      locationId: string;
      templateId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.DeleteBuilderSuccesfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'},{name: 'templateId', in: 'path'},];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'DELETE',
      url: buildUrl('/emails/builder/{locationId}/{templateId}', extracted.path),
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

    const response: AxiosResponse<Models.DeleteBuilderSuccesfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update a template
   * Update a template
   */
  async updateTemplate(
    requestBody: Models.SaveBuilderDataDto,
    options?: AxiosRequestConfig
  ): Promise<Models.BuilderUpdateSuccessfulDTO> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/emails/builder/data', extracted.path),
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

    const response: AxiosResponse<Models.BuilderUpdateSuccessfulDTO> = await this.client.request(config);
    return response.data;
  }

}

export default Emails; 