import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/opportunities';
import { buildUrl, extractParams, getAuthToken, RequestConfig } from '../../utils/request-utils';

/**
 * Opportunities Service
 * Documentation for Opportunities API
 */
export class Opportunities {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Search Opportunity
   * Search Opportunity
   */
  async searchOpportunity(
    params: {
      q?: string;
      locationId: string;
      pipelineId?: string;
      pipelineStageId?: string;
      contactId?: string;
      status?: string;
      assignedTo?: string;
      campaignId?: string;
      id?: string;
      order?: string;
      endDate?: string;
      startAfter?: string;
      startAfterId?: string;
      date?: string;
      country?: string;
      page?: number;
      limit?: number;
      getTasks?: boolean;
      getNotes?: boolean;
      getCalendarEvents?: boolean;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.SearchSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'q', in: 'query'},{name: 'location_id', in: 'query'},{name: 'pipeline_id', in: 'query'},{name: 'pipeline_stage_id', in: 'query'},{name: 'contact_id', in: 'query'},{name: 'status', in: 'query'},{name: 'assigned_to', in: 'query'},{name: 'campaignId', in: 'query'},{name: 'id', in: 'query'},{name: 'order', in: 'query'},{name: 'endDate', in: 'query'},{name: 'startAfter', in: 'query'},{name: 'startAfterId', in: 'query'},{name: 'date', in: 'query'},{name: 'country', in: 'query'},{name: 'page', in: 'query'},{name: 'limit', in: 'query'},{name: 'getTasks', in: 'query'},{name: 'getNotes', in: 'query'},{name: 'getCalendarEvents', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/opportunities/search', extracted.path),
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

    const response: AxiosResponse<Models.SearchSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Pipelines
   * Get Pipelines
   */
  async getPipelines(
    params: {
      locationId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetPipelinesSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/opportunities/pipelines', extracted.path),
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

    const response: AxiosResponse<Models.GetPipelinesSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Opportunity
   * Get Opportunity
   */
  async getOpportunity(
    params: {
      id: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetPostOpportunitySuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'id', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/opportunities/{id}', extracted.path),
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

    const response: AxiosResponse<Models.GetPostOpportunitySuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Opportunity
   * Delete Opportunity
   */
  async deleteOpportunity(
    params: {
      id: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.DeleteUpdateOpportunitySuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'id', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'DELETE',
      url: buildUrl('/opportunities/{id}', extracted.path),
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

    const response: AxiosResponse<Models.DeleteUpdateOpportunitySuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Opportunity
   * Update Opportunity
   */
  async updateOpportunity(
    params: {
      id: string;
    },
    requestBody: Models.UpdateOpportunityDto,
    options?: AxiosRequestConfig
  ): Promise<Models.GetPostOpportunitySuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'id', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'PUT',
      url: buildUrl('/opportunities/{id}', extracted.path),
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

    const response: AxiosResponse<Models.GetPostOpportunitySuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Opportunity Status
   * Update Opportunity Status
   */
  async updateOpportunityStatus(
    params: {
      id: string;
    },
    requestBody: Models.UpdateStatusDto,
    options?: AxiosRequestConfig
  ): Promise<Models.DeleteUpdateOpportunitySuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'id', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'PUT',
      url: buildUrl('/opportunities/{id}/status', extracted.path),
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

    const response: AxiosResponse<Models.DeleteUpdateOpportunitySuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Upsert Opportunity
   * Upsert Opportunity
   */
  async upsertOpportunity(
    requestBody: Models.UpsertOpportunityDto,
    options?: AxiosRequestConfig
  ): Promise<Models.UpsertOpportunitySuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/opportunities/upsert', extracted.path),
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

    const response: AxiosResponse<Models.UpsertOpportunitySuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Add Followers
   * Add Followers
   */
  async addFollowersOpportunity(
    params: {
      id: string;
    },
    requestBody: Models.FollowersDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.CreateAddFollowersSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'id', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/opportunities/{id}/followers', extracted.path),
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

    const response: AxiosResponse<Models.CreateAddFollowersSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Remove Followers
   * Remove Followers
   */
  async removeFollowersOpportunity(
    params: {
      id: string;
    },
    requestBody: Models.FollowersDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.DeleteFollowersSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'id', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'DELETE',
      url: buildUrl('/opportunities/{id}/followers', extracted.path),
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

    const response: AxiosResponse<Models.DeleteFollowersSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Opportunity
   * Create Opportunity
   */
  async createOpportunity(
    requestBody: Models.CreateDto,
    options?: AxiosRequestConfig
  ): Promise<Models.GetPostOpportunitySuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/opportunities/', extracted.path),
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

    const response: AxiosResponse<Models.GetPostOpportunitySuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

}

export default Opportunities; 