import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/voice-ai';

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
    let url = '/voice-ai/agents';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};

    const config: AxiosRequestConfig = {
      method: 'POST',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      data: requestBody,
      ...options
    };

    // Get appropriate authorization token based on security requirements
    const ghlInstance = (this.client as any).__ghlInstance;
    if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
      try {
        // Combine headerParams with headers from options
        const combinedHeaders = {
          ...headerParams,
          ...options?.headers
        };
        
        // Combine queryParams with allParams for token resolution
        const combinedQuery = {
          ...queryParams,
          ...allParams
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          combinedQuery,
          requestBody
        );
        
        if (authToken) {
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        }
      } catch (error) {
        throw error; // Re-throw authentication errors
      }
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
    let url = '/voice-ai/agents';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.page !== undefined) {
        queryParams['page'] = params.page;
      }
      if (params.pageSize !== undefined) {
        queryParams['pageSize'] = params.pageSize;
      }
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
      if (params.query !== undefined) {
        queryParams['query'] = params.query;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.page !== undefined) {
        allParams['page'] = params.page;
      }
      if (params.pageSize !== undefined) {
        allParams['pageSize'] = params.pageSize;
      }
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.query !== undefined) {
        allParams['query'] = params.query;
      }
    }

    const config: AxiosRequestConfig = {
      method: 'GET',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      ...options
    };

    // Get appropriate authorization token based on security requirements
    const ghlInstance = (this.client as any).__ghlInstance;
    if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
      try {
        // Combine headerParams with headers from options
        const combinedHeaders = {
          ...headerParams,
          ...options?.headers
        };
        
        // Combine queryParams with allParams for token resolution
        const combinedQuery = {
          ...queryParams,
          ...allParams
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          combinedQuery,
          {}
        );
        
        if (authToken) {
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        }
      } catch (error) {
        throw error; // Re-throw authentication errors
      }
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
    let url = '/voice-ai/agents/{agentId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.agentId !== undefined) {
        url = url.replace('{' + 'agentId' + '}', encodeURIComponent(String(params.agentId)));
      }
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.agentId !== undefined) {
        allParams['agentId'] = params.agentId;
      }
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
    }

    const config: AxiosRequestConfig = {
      method: 'PATCH',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      data: requestBody,
      ...options
    };

    // Get appropriate authorization token based on security requirements
    const ghlInstance = (this.client as any).__ghlInstance;
    if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
      try {
        // Combine headerParams with headers from options
        const combinedHeaders = {
          ...headerParams,
          ...options?.headers
        };
        
        // Combine queryParams with allParams for token resolution
        const combinedQuery = {
          ...queryParams,
          ...allParams
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          combinedQuery,
          requestBody
        );
        
        if (authToken) {
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        }
      } catch (error) {
        throw error; // Re-throw authentication errors
      }
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
    let url = '/voice-ai/agents/{agentId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.agentId !== undefined) {
        url = url.replace('{' + 'agentId' + '}', encodeURIComponent(String(params.agentId)));
      }
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.agentId !== undefined) {
        allParams['agentId'] = params.agentId;
      }
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
    }

    const config: AxiosRequestConfig = {
      method: 'GET',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      ...options
    };

    // Get appropriate authorization token based on security requirements
    const ghlInstance = (this.client as any).__ghlInstance;
    if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
      try {
        // Combine headerParams with headers from options
        const combinedHeaders = {
          ...headerParams,
          ...options?.headers
        };
        
        // Combine queryParams with allParams for token resolution
        const combinedQuery = {
          ...queryParams,
          ...allParams
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          combinedQuery,
          {}
        );
        
        if (authToken) {
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        }
      } catch (error) {
        throw error; // Re-throw authentication errors
      }
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
    let url = '/voice-ai/agents/{agentId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.agentId !== undefined) {
        url = url.replace('{' + 'agentId' + '}', encodeURIComponent(String(params.agentId)));
      }
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.agentId !== undefined) {
        allParams['agentId'] = params.agentId;
      }
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
    }

    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      ...options
    };

    // Get appropriate authorization token based on security requirements
    const ghlInstance = (this.client as any).__ghlInstance;
    if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
      try {
        // Combine headerParams with headers from options
        const combinedHeaders = {
          ...headerParams,
          ...options?.headers
        };
        
        // Combine queryParams with allParams for token resolution
        const combinedQuery = {
          ...queryParams,
          ...allParams
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          combinedQuery,
          {}
        );
        
        if (authToken) {
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        }
      } catch (error) {
        throw error; // Re-throw authentication errors
      }
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
    let url = '/voice-ai/dashboard/call-logs';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
      if (params.agentId !== undefined) {
        queryParams['agentId'] = params.agentId;
      }
      if (params.contactId !== undefined) {
        queryParams['contactId'] = params.contactId;
      }
      if (params.callType !== undefined) {
        queryParams['callType'] = params.callType;
      }
      if (params.startDate !== undefined) {
        queryParams['startDate'] = params.startDate;
      }
      if (params.endDate !== undefined) {
        queryParams['endDate'] = params.endDate;
      }
      if (params.actionType !== undefined) {
        queryParams['actionType'] = params.actionType;
      }
      if (params.sortBy !== undefined) {
        queryParams['sortBy'] = params.sortBy;
      }
      if (params.sort !== undefined) {
        queryParams['sort'] = params.sort;
      }
      if (params.page !== undefined) {
        queryParams['page'] = params.page;
      }
      if (params.pageSize !== undefined) {
        queryParams['pageSize'] = params.pageSize;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.agentId !== undefined) {
        allParams['agentId'] = params.agentId;
      }
      if (params.contactId !== undefined) {
        allParams['contactId'] = params.contactId;
      }
      if (params.callType !== undefined) {
        allParams['callType'] = params.callType;
      }
      if (params.startDate !== undefined) {
        allParams['startDate'] = params.startDate;
      }
      if (params.endDate !== undefined) {
        allParams['endDate'] = params.endDate;
      }
      if (params.actionType !== undefined) {
        allParams['actionType'] = params.actionType;
      }
      if (params.sortBy !== undefined) {
        allParams['sortBy'] = params.sortBy;
      }
      if (params.sort !== undefined) {
        allParams['sort'] = params.sort;
      }
      if (params.page !== undefined) {
        allParams['page'] = params.page;
      }
      if (params.pageSize !== undefined) {
        allParams['pageSize'] = params.pageSize;
      }
    }

    const config: AxiosRequestConfig = {
      method: 'GET',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      ...options
    };

    // Get appropriate authorization token based on security requirements
    const ghlInstance = (this.client as any).__ghlInstance;
    if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
      try {
        // Combine headerParams with headers from options
        const combinedHeaders = {
          ...headerParams,
          ...options?.headers
        };
        
        // Combine queryParams with allParams for token resolution
        const combinedQuery = {
          ...queryParams,
          ...allParams
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          combinedQuery,
          {}
        );
        
        if (authToken) {
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        }
      } catch (error) {
        throw error; // Re-throw authentication errors
      }
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
    let url = '/voice-ai/dashboard/call-logs/{callId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.callId !== undefined) {
        url = url.replace('{' + 'callId' + '}', encodeURIComponent(String(params.callId)));
      }
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.callId !== undefined) {
        allParams['callId'] = params.callId;
      }
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
    }

    const config: AxiosRequestConfig = {
      method: 'GET',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      ...options
    };

    // Get appropriate authorization token based on security requirements
    const ghlInstance = (this.client as any).__ghlInstance;
    if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
      try {
        // Combine headerParams with headers from options
        const combinedHeaders = {
          ...headerParams,
          ...options?.headers
        };
        
        // Combine queryParams with allParams for token resolution
        const combinedQuery = {
          ...queryParams,
          ...allParams
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          combinedQuery,
          {}
        );
        
        if (authToken) {
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        }
      } catch (error) {
        throw error; // Re-throw authentication errors
      }
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
    let url = '/voice-ai/actions';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};

    const config: AxiosRequestConfig = {
      method: 'POST',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      data: requestBody,
      ...options
    };

    // Get appropriate authorization token based on security requirements
    const ghlInstance = (this.client as any).__ghlInstance;
    if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
      try {
        // Combine headerParams with headers from options
        const combinedHeaders = {
          ...headerParams,
          ...options?.headers
        };
        
        // Combine queryParams with allParams for token resolution
        const combinedQuery = {
          ...queryParams,
          ...allParams
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          combinedQuery,
          requestBody
        );
        
        if (authToken) {
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        }
      } catch (error) {
        throw error; // Re-throw authentication errors
      }
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
    let url = '/voice-ai/actions/{actionId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.actionId !== undefined) {
        url = url.replace('{' + 'actionId' + '}', encodeURIComponent(String(params.actionId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.actionId !== undefined) {
        allParams['actionId'] = params.actionId;
      }
    }

    const config: AxiosRequestConfig = {
      method: 'PUT',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      data: requestBody,
      ...options
    };

    // Get appropriate authorization token based on security requirements
    const ghlInstance = (this.client as any).__ghlInstance;
    if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
      try {
        // Combine headerParams with headers from options
        const combinedHeaders = {
          ...headerParams,
          ...options?.headers
        };
        
        // Combine queryParams with allParams for token resolution
        const combinedQuery = {
          ...queryParams,
          ...allParams
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          combinedQuery,
          requestBody
        );
        
        if (authToken) {
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        }
      } catch (error) {
        throw error; // Re-throw authentication errors
      }
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
    let url = '/voice-ai/actions/{actionId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.actionId !== undefined) {
        url = url.replace('{' + 'actionId' + '}', encodeURIComponent(String(params.actionId)));
      }
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.actionId !== undefined) {
        allParams['actionId'] = params.actionId;
      }
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
    }

    const config: AxiosRequestConfig = {
      method: 'GET',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      ...options
    };

    // Get appropriate authorization token based on security requirements
    const ghlInstance = (this.client as any).__ghlInstance;
    if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
      try {
        // Combine headerParams with headers from options
        const combinedHeaders = {
          ...headerParams,
          ...options?.headers
        };
        
        // Combine queryParams with allParams for token resolution
        const combinedQuery = {
          ...queryParams,
          ...allParams
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          combinedQuery,
          {}
        );
        
        if (authToken) {
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        }
      } catch (error) {
        throw error; // Re-throw authentication errors
      }
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
    let url = '/voice-ai/actions/{actionId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.actionId !== undefined) {
        url = url.replace('{' + 'actionId' + '}', encodeURIComponent(String(params.actionId)));
      }
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
      if (params.agentId !== undefined) {
        queryParams['agentId'] = params.agentId;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.actionId !== undefined) {
        allParams['actionId'] = params.actionId;
      }
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.agentId !== undefined) {
        allParams['agentId'] = params.agentId;
      }
    }

    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      ...options
    };

    // Get appropriate authorization token based on security requirements
    const ghlInstance = (this.client as any).__ghlInstance;
    if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
      try {
        // Combine headerParams with headers from options
        const combinedHeaders = {
          ...headerParams,
          ...options?.headers
        };
        
        // Combine queryParams with allParams for token resolution
        const combinedQuery = {
          ...queryParams,
          ...allParams
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          combinedQuery,
          {}
        );
        
        if (authToken) {
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        }
      } catch (error) {
        throw error; // Re-throw authentication errors
      }
    }

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

}

export default VoiceAi; 