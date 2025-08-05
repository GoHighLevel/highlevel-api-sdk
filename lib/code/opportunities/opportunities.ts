import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/opportunities';

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
    let url = '/opportunities/search';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.q !== undefined) {
        queryParams['q'] = params.q;
      }
      if (params.locationId !== undefined) {
        queryParams['location_id'] = params.locationId;
      }
      if (params.pipelineId !== undefined) {
        queryParams['pipeline_id'] = params.pipelineId;
      }
      if (params.pipelineStageId !== undefined) {
        queryParams['pipeline_stage_id'] = params.pipelineStageId;
      }
      if (params.contactId !== undefined) {
        queryParams['contact_id'] = params.contactId;
      }
      if (params.status !== undefined) {
        queryParams['status'] = params.status;
      }
      if (params.assignedTo !== undefined) {
        queryParams['assigned_to'] = params.assignedTo;
      }
      if (params.campaignId !== undefined) {
        queryParams['campaignId'] = params.campaignId;
      }
      if (params.id !== undefined) {
        queryParams['id'] = params.id;
      }
      if (params.order !== undefined) {
        queryParams['order'] = params.order;
      }
      if (params.endDate !== undefined) {
        queryParams['endDate'] = params.endDate;
      }
      if (params.startAfter !== undefined) {
        queryParams['startAfter'] = params.startAfter;
      }
      if (params.startAfterId !== undefined) {
        queryParams['startAfterId'] = params.startAfterId;
      }
      if (params.date !== undefined) {
        queryParams['date'] = params.date;
      }
      if (params.country !== undefined) {
        queryParams['country'] = params.country;
      }
      if (params.page !== undefined) {
        queryParams['page'] = params.page;
      }
      if (params.limit !== undefined) {
        queryParams['limit'] = params.limit;
      }
      if (params.getTasks !== undefined) {
        queryParams['getTasks'] = params.getTasks;
      }
      if (params.getNotes !== undefined) {
        queryParams['getNotes'] = params.getNotes;
      }
      if (params.getCalendarEvents !== undefined) {
        queryParams['getCalendarEvents'] = params.getCalendarEvents;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.q !== undefined) {
        allParams['q'] = params.q;
      }
      if (params.locationId !== undefined) {
        allParams['location_id'] = params.locationId;
      }
      if (params.pipelineId !== undefined) {
        allParams['pipeline_id'] = params.pipelineId;
      }
      if (params.pipelineStageId !== undefined) {
        allParams['pipeline_stage_id'] = params.pipelineStageId;
      }
      if (params.contactId !== undefined) {
        allParams['contact_id'] = params.contactId;
      }
      if (params.status !== undefined) {
        allParams['status'] = params.status;
      }
      if (params.assignedTo !== undefined) {
        allParams['assigned_to'] = params.assignedTo;
      }
      if (params.campaignId !== undefined) {
        allParams['campaignId'] = params.campaignId;
      }
      if (params.id !== undefined) {
        allParams['id'] = params.id;
      }
      if (params.order !== undefined) {
        allParams['order'] = params.order;
      }
      if (params.endDate !== undefined) {
        allParams['endDate'] = params.endDate;
      }
      if (params.startAfter !== undefined) {
        allParams['startAfter'] = params.startAfter;
      }
      if (params.startAfterId !== undefined) {
        allParams['startAfterId'] = params.startAfterId;
      }
      if (params.date !== undefined) {
        allParams['date'] = params.date;
      }
      if (params.country !== undefined) {
        allParams['country'] = params.country;
      }
      if (params.page !== undefined) {
        allParams['page'] = params.page;
      }
      if (params.limit !== undefined) {
        allParams['limit'] = params.limit;
      }
      if (params.getTasks !== undefined) {
        allParams['getTasks'] = params.getTasks;
      }
      if (params.getNotes !== undefined) {
        allParams['getNotes'] = params.getNotes;
      }
      if (params.getCalendarEvents !== undefined) {
        allParams['getCalendarEvents'] = params.getCalendarEvents;
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
    let url = '/opportunities/pipelines';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
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
    let url = '/opportunities/{id}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.id !== undefined) {
        url = url.replace('{' + 'id' + '}', encodeURIComponent(String(params.id)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.id !== undefined) {
        allParams['id'] = params.id;
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
    let url = '/opportunities/{id}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.id !== undefined) {
        url = url.replace('{' + 'id' + '}', encodeURIComponent(String(params.id)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.id !== undefined) {
        allParams['id'] = params.id;
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
    let url = '/opportunities/{id}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.id !== undefined) {
        url = url.replace('{' + 'id' + '}', encodeURIComponent(String(params.id)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.id !== undefined) {
        allParams['id'] = params.id;
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
    let url = '/opportunities/{id}/status';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.id !== undefined) {
        url = url.replace('{' + 'id' + '}', encodeURIComponent(String(params.id)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.id !== undefined) {
        allParams['id'] = params.id;
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
    let url = '/opportunities/upsert';
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
    let url = '/opportunities/{id}/followers';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.id !== undefined) {
        url = url.replace('{' + 'id' + '}', encodeURIComponent(String(params.id)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.id !== undefined) {
        allParams['id'] = params.id;
      }
    }

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
    let url = '/opportunities/{id}/followers';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.id !== undefined) {
        url = url.replace('{' + 'id' + '}', encodeURIComponent(String(params.id)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.id !== undefined) {
        allParams['id'] = params.id;
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
    let url = '/opportunities/';
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

    const response: AxiosResponse<Models.GetPostOpportunitySuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

}

export default Opportunities; 