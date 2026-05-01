import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/agent-studio';
import { buildUrl, extractParams, getAuthToken, RequestConfig } from '../../utils/request-utils';

/**
 * AgentStudio Service
 * Documentation for Agent Studio APIs
 */
export class AgentStudio {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Create Agent
   * Creates a new agent with staging version. The agent will be created with an initial staging version that can later be promoted to production. 
   */
  async createAgent(
    params: {
      source?: string;
    },
    requestBody: Models.CreatePublicAgentDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.CreatePublicAgentResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'source', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/agent-studio/agent', extracted.path),
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

    const response: AxiosResponse<Models.CreatePublicAgentResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * List Agents
   * Lists all active agents for the specified location. locationId is required parameter to ensure optimal performance. Supports pagination using limit and offset. Optionally filter by isPublished&#x3D;true to return only agents with a published production version.
   */
  async getAgents(
    params: {
      locationId: string;
      isPublished?: string;
      limit: string;
      offset: string;
      source?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetPublishedAgentsResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'},{name: 'isPublished', in: 'query'},{name: 'limit', in: 'query'},{name: 'offset', in: 'query'},{name: 'source', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/agent-studio/agent', extracted.path),
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

    const response: AxiosResponse<Models.GetPublishedAgentsResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Agent
   * Updates a specific agent version by versionId. Supports updating nodes, edges, variables, and configuration. 
   */
  async updateAgentVersion(
    params: {
      versionId: string;
      source?: string;
    },
    requestBody: Models.UpdatePublicAgentVersionDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.UpdatePublicAgentResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'versionId', in: 'path'},{name: 'source', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'PATCH',
      url: buildUrl('/agent-studio/agent/versions/{versionId}', extracted.path),
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

    const response: AxiosResponse<Models.UpdatePublicAgentResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Agent Metadata
   * Updates agent metadata such as name, description, and status. 
   */
  async updateAgentMetadata(
    params: {
      agentId: string;
      source?: string;
    },
    requestBody: Models.UpdatePublicAgentMetadataDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.UpdatePublicAgentResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'agentId', in: 'path'},{name: 'source', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'PATCH',
      url: buildUrl('/agent-studio/agent/{agentId}', extracted.path),
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

    const response: AxiosResponse<Models.UpdatePublicAgentResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Agent
   * Deletes an agent and all its versions. 
   */
  async deleteAgent(
    params: {
      agentId: string;
      locationId: string;
      source?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.DeletePublicAgentResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'agentId', in: 'path'},{name: 'locationId', in: 'query'},{name: 'source', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'DELETE',
      url: buildUrl('/agent-studio/agent/{agentId}', extracted.path),
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

    const response: AxiosResponse<Models.DeletePublicAgentResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Agent
   * Gets a specific agent by its ID for the specified location with all its versions. Returns complete agent metadata and all non-deleted versions (draft, staging, production). locationId is required parameter. The agent must have active status.
   */
  async getAgentById(
    params: {
      agentId: string;
      locationId: string;
      source?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetAgentByIdResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'agentId', in: 'path'},{name: 'locationId', in: 'query'},{name: 'source', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/agent-studio/agent/{agentId}', extracted.path),
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

    const response: AxiosResponse<Models.GetAgentByIdResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Promote to Production
   * Promotes a draft version to production.
   */
  async promoteAndPublish(
    params: {
      versionId: string;
      source?: string;
    },
    requestBody: Models.PromoteAndPublishDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.PromoteAndPublishResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'versionId', in: 'path'},{name: 'source', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/agent-studio/agent/versions/{versionId}/publish', extracted.path),
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

    const response: AxiosResponse<Models.PromoteAndPublishResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Execute Agent
   * Executes the specified agent and returns a non-streaming JSON response with the complete agent output. The agent must be in active status and belong to the specified location. locationId is required in the request body. 

**Session Management:**
- For the first message in a new session, do not include the &#x60;executionId&#x60; in the request payload.
- The API will return an &#x60;executionId&#x60; along with the agent response, which uniquely identifies this conversation session.
- To continue the conversation within the same session, include the &#x60;executionId&#x60; from the previous response in subsequent requests. This allows the agent to maintain conversation context and history across multiple interactions.
   */
  async executeAgent(
    params: {
      agentId: string;
      source?: string;
    },
    requestBody: Models.ExecutePublicAgentDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.ExecutePublicAgentResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'agentId', in: 'path'},{name: 'source', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/agent-studio/agent/{agentId}/execute', extracted.path),
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

    const response: AxiosResponse<Models.ExecutePublicAgentResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * List Agents (Deprecated)
   * **Deprecated endpoint - use GET /agent instead.**

Lists all active agents that have a published production version for the specified location. locationId is required parameter. Supports pagination using limit and offset.
   * @deprecated Deprecated endpoint - use GET /agent instead. Use GET /agent instead instead.
   */
  async getAgentsDeprecated(
    params: {
      locationId: string;
      limit: string;
      offset: string;
      source?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetPublishedAgentsResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'},{name: 'limit', in: 'query'},{name: 'offset', in: 'query'},{name: 'source', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/agent-studio/public-api/agents', extracted.path),
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

    const response: AxiosResponse<Models.GetPublishedAgentsResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Agent (Deprecated)
   * **Deprecated endpoint - use GET /agent/:agentId instead.**

Gets a specific agent by its ID for the specified location with all its versions. locationId is required parameter. The agent must have active status.
   * @deprecated Deprecated endpoint - use GET /agent/:agentId instead. Use GET /agent/:agentId instead instead.
   */
  async getAgentByIdDeprecated(
    params: {
      agentId: string;
      locationId: string;
      source?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetAgentByIdResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'agentId', in: 'path'},{name: 'locationId', in: 'query'},{name: 'source', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/agent-studio/public-api/agents/{agentId}', extracted.path),
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

    const response: AxiosResponse<Models.GetAgentByIdResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Execute Agent (Deprecated)
   * **Deprecated endpoint - use POST /agent/:agentId/execute instead.**

Executes the specified agent and returns a non-streaming JSON response with the complete agent output. The agent must be in active status and belong to the specified location. locationId is required in the request body. 

**Session Management:**
- For the first message in a new session, do not include the &#x60;executionId&#x60; in the request payload.
- The API will return an &#x60;executionId&#x60; along with the agent response, which uniquely identifies this conversation session.
- To continue the conversation within the same session, include the &#x60;executionId&#x60; from the previous response in subsequent requests.
   * @deprecated Deprecated endpoint - use POST /agent/:agentId/execute instead. Use POST /agent/:agentId/execute instead instead.
   */
  async executeAgentDeprecated(
    params: {
      agentId: string;
      source?: string;
    },
    requestBody: Models.ExecutePublicAgentDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.ExecutePublicAgentResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'agentId', in: 'path'},{name: 'source', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/agent-studio/public-api/agents/{agentId}/execute', extracted.path),
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

    const response: AxiosResponse<Models.ExecutePublicAgentResponseDTO> = await this.client.request(config);
    return response.data;
  }

}

export default AgentStudio; 