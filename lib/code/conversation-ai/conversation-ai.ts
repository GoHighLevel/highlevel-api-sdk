import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/conversation-ai';
import { buildUrl, extractParams, getAuthToken, RequestConfig } from '../../utils/request-utils';

/**
 * ConversationAi Service
 * Documentation for AI Employees API
 */
export class ConversationAi {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Attach Action to Agent
   * Creates and attach a new action for an AI agent. Actions define specific tasks or behaviors that the agent can perform, such as booking appointments, sending follow-ups, or collecting information.
   */
  async createAction(
    params: {
      agentId: string;
    },
    requestBody: Models.CreateActionDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.createActionResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'agentId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/conversation-ai/agents/{agentId}/actions', extracted.path),
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

    const response: AxiosResponse<Models.createActionResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * List Actions for an Agent
   * List for actions for an agent
   */
  async listActions(
    params: {
      agentId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.fetchActionsForEmployeeResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'agentId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/conversation-ai/agents/{agentId}/actions/list', extracted.path),
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

    const response: AxiosResponse<Models.fetchActionsForEmployeeResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Action by ID
   * Retrieves detailed information about a specific action using its unique identifier. Returns the action configuration, associated agents, and performance metrics.
   */
  async getActionById(
    params: {
      actionId: string;
      agentId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.fetchActionDetailsResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'actionId', in: 'path'},{name: 'agentId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/conversation-ai/agents/{agentId}/actions/{actionId}', extracted.path),
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

    const response: AxiosResponse<Models.fetchActionDetailsResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Action
   * Updates an existing action&#x27;s configuration. This includes modifying the action name, description, trigger conditions, and behavior settings.
   */
  async updateAction(
    params: {
      actionId: string;
      agentId: string;
    },
    requestBody: Models.CreateActionDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.updateActionResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'actionId', in: 'path'},{name: 'agentId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'PUT',
      url: buildUrl('/conversation-ai/agents/{agentId}/actions/{actionId}', extracted.path),
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

    const response: AxiosResponse<Models.updateActionResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Remove Action from Agent
   * Permanently deletes an action. This will remove the action from all associated agents and cannot be undone.
   */
  async deleteAction(
    params: {
      actionId: string;
      agentId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.deleteActionResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'actionId', in: 'path'},{name: 'agentId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'DELETE',
      url: buildUrl('/conversation-ai/agents/{agentId}/actions/{actionId}', extracted.path),
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

    const response: AxiosResponse<Models.deleteActionResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Followup Settings
   * Update the followup settings for an action
   */
  async updateFollowupSettings(
    params: {
      agentId: string;
    },
    requestBody: Models.UpdateFollowupSettingsDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.updateActionResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'agentId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'PATCH',
      url: buildUrl('/conversation-ai/agents/{agentId}/followup-settings', extracted.path),
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

    const response: AxiosResponse<Models.updateActionResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create an Agent
   * Creates a new AI agent for the location. The agent will be created with the specified configuration including name, role, actions, and behavior settings.
   */
  async createAgent(
    requestBody: Models.CreateEmployeeDto,
    options?: AxiosRequestConfig
  ): Promise<Models.EmployeeResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/conversation-ai/agents', extracted.path),
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

    const response: AxiosResponse<Models.EmployeeResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Search Agents
   * Searches for AI agents based on various criteria including name, status, and configuration. Supports advanced filtering and full-text search capabilities.
   */
  async searchAgent(
    params: {
      startAfter?: string;
      limit?: number;
      query?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.SearchEmployeeResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'startAfter', in: 'query'},{name: 'limit', in: 'query'},{name: 'query', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/conversation-ai/agents/search', extracted.path),
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

    const response: AxiosResponse<Models.SearchEmployeeResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Agent
   * Updates an existing AI agent&#x27;s configuration. All fields in the agent configuration can be updated including name, status, actions, and behavior settings.
   */
  async updateAgent(
    params: {
      agentId: string;
    },
    requestBody: Models.UpdateEmployeeDto,
    options?: AxiosRequestConfig
  ): Promise<Models.EmployeeResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'agentId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'PUT',
      url: buildUrl('/conversation-ai/agents/{agentId}', extracted.path),
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

    const response: AxiosResponse<Models.EmployeeResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Agent
   * Retrieves a specific AI agent by its ID. Returns the complete agent configuration including name, status, actions, and settings.
   */
  async getAgent(
    params: {
      agentId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.EmployeeResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'agentId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/conversation-ai/agents/{agentId}', extracted.path),
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

    const response: AxiosResponse<Models.EmployeeResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Agent
   * Deletes an AI agent permanently. This action cannot be undone. All associated configurations and conversation history will be removed.
   */
  async deleteAgent(
    params: {
      agentId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.DeleteEmployeeResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'agentId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'DELETE',
      url: buildUrl('/conversation-ai/agents/{agentId}', extracted.path),
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

    const response: AxiosResponse<Models.DeleteEmployeeResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get the generation details
   * Retrieves detailed information about AI responses including the System Prompt, Conversation history, Knowledge base, website, FAQ chunks, and Rich Text chunks.
   */
  async getGenerationDetails(
    params: {
      messageId: string;
      source: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.FetchAIResponseDetailsResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'messageId', in: 'query'},{name: 'source', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/conversation-ai/generations', extracted.path),
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

    const response: AxiosResponse<Models.FetchAIResponseDetailsResponseDTO> = await this.client.request(config);
    return response.data;
  }

}

export default ConversationAi; 