import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/knowledge-base';
import { buildUrl, extractParams, getAuthToken, RequestConfig } from '../../utils/request-utils';

/**
 * KnowledgeBase Service
 * Documentation for Knowledge Base API
 */
export class KnowledgeBase {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Get all FAQs by knowledge base with pagination support
   * Retrieves FAQs for a knowledge base. Supports pagination using limit and lastFaqId parameters.
   */
  async list(
    params: {
      knowledgeBaseId: string;
      locationId: string;
      limit?: number;
      lastFaqId?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.ListFaqsResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'knowledgeBaseId', in: 'query'},{name: 'locationId', in: 'query'},{name: 'limit', in: 'query'},{name: 'lastFaqId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/knowledge-bases/faqs', extracted.path),
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

    const response: AxiosResponse<Models.ListFaqsResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create a new FAQ inside knowledge base
   * 
   */
  async create(
    requestBody: Models.AddFaqDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.CreateFaqResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/knowledge-bases/faqs', extracted.path),
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

    const response: AxiosResponse<Models.CreateFaqResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update an existing knowledge base FAQ
   * 
   */
  async update(
    params: {
      id: string;
    },
    requestBody: Models.UpdateFaqBodyDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.UpdateFaqResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'id', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'PUT',
      url: buildUrl('/knowledge-bases/faqs/{id}', extracted.path),
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

    const response: AxiosResponse<Models.UpdateFaqResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete an existing knowledge base FAQ
   * 
   */
  async delete(
    params: {
      id: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.DeleteFaqResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'id', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'DELETE',
      url: buildUrl('/knowledge-bases/faqs/{id}', extracted.path),
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

    const response: AxiosResponse<Models.DeleteFaqResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get all trained page links by knowledge base
   * 
   */
  async getAllWebsiteUrlsDataByKnowledgeBase(
    params: {
      knowledgeBaseId: string;
      locationId: string;
      page?: number;
      pageLength?: number;
      query?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetAllUrlsByKnowledgeBaseResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'knowledgeBaseId', in: 'query'},{name: 'locationId', in: 'query'},{name: 'page', in: 'query'},{name: 'pageLength', in: 'query'},{name: 'query', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/knowledge-bases/crawler', extracted.path),
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

    const response: AxiosResponse<Models.GetAllUrlsByKnowledgeBaseResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Start crawling and discover pages for training
   * 
   */
  async discoverWebsite(
    requestBody: Models.DiscoverWebsiteRequestDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.DiscoverWebsiteResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/knowledge-bases/crawler', extracted.path),
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

    const response: AxiosResponse<Models.DiscoverWebsiteResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete trained pages
   * 
   */
  async deleteTrainedUrlsForKnowledgeBase(
    requestBody: Models.DeleteWebsiteUrlRequestDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.DeleteWebsiteUrlResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'DELETE',
      url: buildUrl('/knowledge-bases/crawler', extracted.path),
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

    const response: AxiosResponse<Models.DeleteWebsiteUrlResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get crawling status for the latest operation
   * 
   */
  async getCrawlingStatusForLatestOperation(
    params: {
      locationId: string;
      operationId: string;
      knowledgeBaseId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.CrawlingStatusResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'},{name: 'operationId', in: 'query'},{name: 'knowledgeBaseId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/knowledge-bases/crawler/status', extracted.path),
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

    const response: AxiosResponse<Models.CrawlingStatusResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Train discovered website pages and ingest into the knowledge base
   * 
   */
  async trainDiscoveredUrls(
    requestBody: Models.TrainDiscoveredUrlsDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.TrainDiscoveredUrlsResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/knowledge-bases/crawler/train', extracted.path),
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

    const response: AxiosResponse<Models.TrainDiscoveredUrlsResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get knowledge base by ID
   * 
   */
  async getKnowledgeBaseById(
    params: {
      knowledgeBaseId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetKnowledgeBaseByIdResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'knowledgeBaseId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/knowledge-bases/{knowledgeBaseId}', extracted.path),
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

    const response: AxiosResponse<Models.GetKnowledgeBaseByIdResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete a knowledge base
   * 
   */
  async deleteKnowledgeBase(
    params: {
      knowledgeBaseId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.DeleteKnowledgeBaseResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'knowledgeBaseId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'DELETE',
      url: buildUrl('/knowledge-bases/{knowledgeBaseId}', extracted.path),
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

    const response: AxiosResponse<Models.DeleteKnowledgeBaseResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update a knowledge base
   * 
   */
  async updateKnowledgeBase(
    params: {
      id: string;
    },
    requestBody: Models.UpdateKnowledgeBaseDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.UpdateKnowledgeBaseResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'id', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'PUT',
      url: buildUrl('/knowledge-bases/{id}', extracted.path),
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

    const response: AxiosResponse<Models.UpdateKnowledgeBaseResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get all knowledge bases for a location by location Id (paginated)
   * 
   */
  async listAllKnowledgeBasesPaginated(
    params: {
      locationId: string;
      query?: string;
      limit?: number;
      lastKnowledgeBaseId?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetAllKnowledgeBasesPaginatedResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'},{name: 'query', in: 'query'},{name: 'limit', in: 'query'},{name: 'lastKnowledgeBaseId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/knowledge-bases/', extracted.path),
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

    const response: AxiosResponse<Models.GetAllKnowledgeBasesPaginatedResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create a new knowledge base (max 15 knowledge bases per location)
   * 
   */
  async createKnowledgeBase(
    requestBody: Models.CreateKnowledgeBaseDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.CreateKnowledgeBaseResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/knowledge-bases/', extracted.path),
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

    const response: AxiosResponse<Models.CreateKnowledgeBaseResponseDTO> = await this.client.request(config);
    return response.data;
  }

}

export default KnowledgeBase; 