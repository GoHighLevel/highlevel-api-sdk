import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/voice-ai';
import { buildUrl, extractParams, getAuthToken } from '../../utils/request-utils';

/**
 * VoiceAi Service
 * Documentation for Voice AI API
 */
export class VoiceAi {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Create Agent
   * Create a new voice AI agent configuration and settings
   */
  async createAgent(
    requestBody: Models.AgentCreationRequestDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.CreateAgentResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/voice-ai/agents', extracted.path),
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

    const response: AxiosResponse<Models.CreateAgentResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * List Agents
   * Retrieve a paginated list of agents for given location.
   */
  async getAgents(
    params: {
      page?: number;
      pageSize?: number;
      locationId: string;
      query?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetAgentsResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'page', in: 'query'},{name: 'pageSize', in: 'query'},{name: 'locationId', in: 'query'},{name: 'query', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/voice-ai/agents', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.GetAgentsResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Patch Agent
   * Partially update an existing voice AI agent
   */
  async patchAgent(
    params: {
      agentId: string;
      locationId: string;
    },
    requestBody: Models.PatchAgentDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.PatchAgentResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'agentId', in: 'path'},{name: 'locationId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'PATCH',
      url: buildUrl('/voice-ai/agents/{agentId}', extracted.path),
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

    const response: AxiosResponse<Models.PatchAgentResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Agent
   * Retrieve detailed configuration and settings for a specific voice AI agent
   */
  async getAgent(
    params: {
      agentId: string;
      locationId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetAgentResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'agentId', in: 'path'},{name: 'locationId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/voice-ai/agents/{agentId}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.GetAgentResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Agent
   * Delete a voice AI agent and all its configurations
   */
  async deleteAgent(
    params: {
      agentId: string;
      locationId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<any> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'agentId', in: 'path'},{name: 'locationId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: buildUrl('/voice-ai/agents/{agentId}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * List Call Logs
   * Returns call logs for Voice AI agents scoped to a location. Supports filtering by agent, contact, call type, action types, and date range (interpreted in the provided IANA timezone). Also supports sorting and 1-based pagination.
   */
  async getCallLogs(
    params: {
      locationId: string;
      agentId?: string;
      contactId?: string;
      callType?: string;
      startDate?: number;
      endDate?: number;
      actionType?: string;
      sortBy?: string;
      sort?: string;
      page?: number;
      pageSize?: number;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.CallLogsResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'},{name: 'agentId', in: 'query'},{name: 'contactId', in: 'query'},{name: 'callType', in: 'query'},{name: 'startDate', in: 'query'},{name: 'endDate', in: 'query'},{name: 'actionType', in: 'query'},{name: 'sortBy', in: 'query'},{name: 'sort', in: 'query'},{name: 'page', in: 'query'},{name: 'pageSize', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/voice-ai/dashboard/call-logs', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.CallLogsResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Call Log
   * Returns a call log by callId.
   */
  async getCallLog(
    params: {
      callId: string;
      locationId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.CallLogDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'callId', in: 'path'},{name: 'locationId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/voice-ai/dashboard/call-logs/{callId}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.CallLogDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Agent Action
   * Create a new action for a voice AI agent. Actions define specific behaviors and capabilities for the agent during calls.
   */
  async createAction(
    requestBody: Models.CreateSingleActionDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.CreateActionResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/voice-ai/actions', extracted.path),
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

    const response: AxiosResponse<Models.CreateActionResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Agent Action
   * Update an existing action for a voice AI agent. Modifies the behavior and configuration of an agent action.
   */
  async updateAction(
    params: {
      actionId: string;
    },
    requestBody: Models.UpdateSingleActionDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.UpdateActionResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'actionId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'PUT',
      url: buildUrl('/voice-ai/actions/{actionId}', extracted.path),
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

    const response: AxiosResponse<Models.UpdateActionResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Agent Action
   * Retrieve details of a specific action by its ID. Returns the action configuration including actionParameters.
   */
  async getAction(
    params: {
      actionId: string;
      locationId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetActionResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'actionId', in: 'path'},{name: 'locationId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/voice-ai/actions/{actionId}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.GetActionResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Agent Action
   * Delete an existing action from a voice AI agent. This permanently removes the action and its configuration.
   */
  async deleteAction(
    params: {
      actionId: string;
      locationId: string;
      agentId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<any> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'actionId', in: 'path'},{name: 'locationId', in: 'query'},{name: 'agentId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: buildUrl('/voice-ai/actions/{actionId}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

}

export default VoiceAi; 