// @generated
// File generated from our OpenAPI spec
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/chat-widget';
import { buildUrl, extractParams, getAuthToken, RequestConfig } from '../../utils/request-utils';

/**
 * ChatWidget Service
 * Documentation for Chat Widget API
 */
export class ChatWidget {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * List Chat Widgets
   * Retrieves a list of chat widgets for a specific location
   */
  async listChatWidgets(
    params: {
      locationId: string;
      offset: string;
      limit: string;
      chatType?: string;
      excludeChatType?: string;
      voiceAiAgentId?: string;
      creationSource?: string;
      excludeCreationSource?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.ChatWidgetListResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'},{name: 'offset', in: 'query'},{name: 'limit', in: 'query'},{name: 'chatType', in: 'query'},{name: 'excludeChatType', in: 'query'},{name: 'voiceAiAgentId', in: 'query'},{name: 'creationSource', in: 'query'},{name: 'excludeCreationSource', in: 'query'},];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/chat-widget/list', extracted.path),
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

    const response: AxiosResponse<Models.ChatWidgetListResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Chat Widget by ID
   * Returns the full chat widget configuration for the given location and widget ID
   */
  async getChatWidgetById(
    params: {
      id: string;
      locationId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.ChatWidgetDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'id', in: 'path'},{name: 'locationId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/chat-widget/data/{locationId}/{id}', extracted.path),
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

    const response: AxiosResponse<Models.ChatWidgetDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Chat Widget
   * Replaces an existing chat widget with the provided configuration
   */
  async updateChatWidget(
    params: {
      id: string;
      locationId: string;
    },
    requestBody: Models.UpdateWidgetDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.ChatWidgetDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'id', in: 'path'},{name: 'locationId', in: 'path'},];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'PUT',
      url: buildUrl('/chat-widget/data/{locationId}/{id}', extracted.path),
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

    const response: AxiosResponse<Models.ChatWidgetDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Patch Chat Widget
   * Applies a partial update to an existing chat widget
   */
  async patchChatWidget(
    params: {
      id: string;
      locationId: string;
    },
    requestBody: Models.UpdateWidgetDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.ChatWidgetDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'id', in: 'path'},{name: 'locationId', in: 'path'},];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'PATCH',
      url: buildUrl('/chat-widget/data/{locationId}/{id}', extracted.path),
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

    const response: AxiosResponse<Models.ChatWidgetDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete a Chat Widget
   * Deletes a chat widget by ID
   */
  async deleteChatWidget(
    params: {
      id: string;
      locationId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.ChatWidgetDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'id', in: 'path'},{name: 'locationId', in: 'path'},];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'DELETE',
      url: buildUrl('/chat-widget/{locationId}/{id}', extracted.path),
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

    const response: AxiosResponse<Models.ChatWidgetDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Clone a Chat Widget
   * Clones an existing chat widget into a new widget
   */
  async cloneChatWidget(
    requestBody: Models.CloneChatWidgetDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.ChatWidgetDTO> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/chat-widget/clone', extracted.path),
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

    const response: AxiosResponse<Models.ChatWidgetDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create a new chat widget
   * Creates a new chat widget for a specific location
   */
  async createChatWidget(
    requestBody: Models.CreateWidgetDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.ChatWidgetDTO> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/chat-widget/', extracted.path),
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

    const response: AxiosResponse<Models.ChatWidgetDTO> = await this.client.request(config);
    return response.data;
  }

}

export default ChatWidget; 