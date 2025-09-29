import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/emails';

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
    let url = '/emails/schedule';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    
    if (params) {
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
      if (params.limit !== undefined) {
        queryParams['limit'] = params.limit;
      }
      if (params.offset !== undefined) {
        queryParams['offset'] = params.offset;
      }
      if (params.status !== undefined) {
        queryParams['status'] = params.status;
      }
      if (params.emailStatus !== undefined) {
        queryParams['emailStatus'] = params.emailStatus;
      }
      if (params.name !== undefined) {
        queryParams['name'] = params.name;
      }
      if (params.parentId !== undefined) {
        queryParams['parentId'] = params.parentId;
      }
      if (params.limitedFields !== undefined) {
        queryParams['limitedFields'] = params.limitedFields;
      }
      if (params.archived !== undefined) {
        queryParams['archived'] = params.archived;
      }
      if (params.campaignsOnly !== undefined) {
        queryParams['campaignsOnly'] = params.campaignsOnly;
      }
      if (params.showStats !== undefined) {
        queryParams['showStats'] = params.showStats;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.limit !== undefined) {
        allParams['limit'] = params.limit;
      }
      if (params.offset !== undefined) {
        allParams['offset'] = params.offset;
      }
      if (params.status !== undefined) {
        allParams['status'] = params.status;
      }
      if (params.emailStatus !== undefined) {
        allParams['emailStatus'] = params.emailStatus;
      }
      if (params.name !== undefined) {
        allParams['name'] = params.name;
      }
      if (params.parentId !== undefined) {
        allParams['parentId'] = params.parentId;
      }
      if (params.limitedFields !== undefined) {
        allParams['limitedFields'] = params.limitedFields;
      }
      if (params.archived !== undefined) {
        allParams['archived'] = params.archived;
      }
      if (params.campaignsOnly !== undefined) {
        allParams['campaignsOnly'] = params.campaignsOnly;
      }
      if (params.showStats !== undefined) {
        allParams['showStats'] = params.showStats;
      }
    }

    const config: AxiosRequestConfig = {
      method: 'GET',
      url,
      params: { ...queryParams, ...allParams },
      headers: {
        ...headerParams,
        ...options?.headers
      },
      // Store security requirements for error handling
      __secutiryRequirements: securityRequirements,
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
    let url = '/emails/builder';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};

    const config: AxiosRequestConfig = {
      method: 'POST',
      url,
      params: { ...queryParams, ...allParams },
      headers: {
        ...headerParams,
        ...options?.headers
      },
      data: requestBody,
      // Store security requirements for error handling
      __secutiryRequirements: securityRequirements,
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
    let url = '/emails/builder';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    
    if (params) {
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
      if (params.limit !== undefined) {
        queryParams['limit'] = params.limit;
      }
      if (params.offset !== undefined) {
        queryParams['offset'] = params.offset;
      }
      if (params.search !== undefined) {
        queryParams['search'] = params.search;
      }
      if (params.sortByDate !== undefined) {
        queryParams['sortByDate'] = params.sortByDate;
      }
      if (params.archived !== undefined) {
        queryParams['archived'] = params.archived;
      }
      if (params.builderVersion !== undefined) {
        queryParams['builderVersion'] = params.builderVersion;
      }
      if (params.name !== undefined) {
        queryParams['name'] = params.name;
      }
      if (params.parentId !== undefined) {
        queryParams['parentId'] = params.parentId;
      }
      if (params.originId !== undefined) {
        queryParams['originId'] = params.originId;
      }
      if (params.templatesOnly !== undefined) {
        queryParams['templatesOnly'] = params.templatesOnly;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.limit !== undefined) {
        allParams['limit'] = params.limit;
      }
      if (params.offset !== undefined) {
        allParams['offset'] = params.offset;
      }
      if (params.search !== undefined) {
        allParams['search'] = params.search;
      }
      if (params.sortByDate !== undefined) {
        allParams['sortByDate'] = params.sortByDate;
      }
      if (params.archived !== undefined) {
        allParams['archived'] = params.archived;
      }
      if (params.builderVersion !== undefined) {
        allParams['builderVersion'] = params.builderVersion;
      }
      if (params.name !== undefined) {
        allParams['name'] = params.name;
      }
      if (params.parentId !== undefined) {
        allParams['parentId'] = params.parentId;
      }
      if (params.originId !== undefined) {
        allParams['originId'] = params.originId;
      }
      if (params.templatesOnly !== undefined) {
        allParams['templatesOnly'] = params.templatesOnly;
      }
    }

    const config: AxiosRequestConfig = {
      method: 'GET',
      url,
      params: { ...queryParams, ...allParams },
      headers: {
        ...headerParams,
        ...options?.headers
      },
      // Store security requirements for error handling
      __secutiryRequirements: securityRequirements,
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
    let url = '/emails/builder/{locationId}/{templateId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    
    if (params) {
      if (params.locationId !== undefined) {
        url = url.replace('{' + 'locationId' + '}', encodeURIComponent(String(params.locationId)));
      }
      if (params.templateId !== undefined) {
        url = url.replace('{' + 'templateId' + '}', encodeURIComponent(String(params.templateId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.templateId !== undefined) {
        allParams['templateId'] = params.templateId;
      }
    }

    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url,
      params: { ...queryParams, ...allParams },
      headers: {
        ...headerParams,
        ...options?.headers
      },
      // Store security requirements for error handling
      __secutiryRequirements: securityRequirements,
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
    let url = '/emails/builder/data';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};

    const config: AxiosRequestConfig = {
      method: 'POST',
      url,
      params: { ...queryParams, ...allParams },
      headers: {
        ...headerParams,
        ...options?.headers
      },
      data: requestBody,
      // Store security requirements for error handling
      __secutiryRequirements: securityRequirements,
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

    const response: AxiosResponse<Models.BuilderUpdateSuccessfulDTO> = await this.client.request(config);
    return response.data;
  }

}

export default Emails; 