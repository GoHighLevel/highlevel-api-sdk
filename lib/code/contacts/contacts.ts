import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/contacts';

/**
 * Contacts Service
 * Documentation for Contacts API
 */
export class Contacts {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Search Contacts
   * Search contacts based on combinations of advanced filters. Documentation Link - https://doc.clickup.com/8631005/d/h/87cpx-158396/6e629989abe7fad
   */
  async searchContactsAdvanced(
    requestBody: Models.SearchBodyV2DTO,
    options?: AxiosRequestConfig
  ): Promise<any> {
    let url = '/contacts/search';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    

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

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Duplicate Contact
   * Get Duplicate Contact.&lt;br/&gt;&lt;br/&gt;If &#x60;Allow Duplicate Contact&#x60; is disabled under Settings, the global unique identifier will be used for searching the contact. If the setting is enabled, first priority for search is &#x60;email&#x60; and the second priority will be &#x60;phone&#x60;.
   */
  async getDuplicateContact(
    params: {
      locationId: string;
      number?: string;
      email?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<any> {
    let url = '/contacts/search/duplicate';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
      if (params.number !== undefined) {
        queryParams['number'] = params.number;
      }
      if (params.email !== undefined) {
        queryParams['email'] = params.email;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.number !== undefined) {
        allParams['number'] = params.number;
      }
      if (params.email !== undefined) {
        allParams['email'] = params.email;
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

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get all Tasks
   * Get all Tasks
   */
  async getAllTasks(
    params: {
      contactId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.TasksListSuccessfulResponseDto> {
    let url = '/contacts/{contactId}/tasks';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.contactId !== undefined) {
        url = url.replace('{' + 'contactId' + '}', encodeURIComponent(String(params.contactId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.contactId !== undefined) {
        allParams['contactId'] = params.contactId;
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

    const response: AxiosResponse<Models.TasksListSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Task
   * Create Task
   */
  async createTask(
    params: {
      contactId: string;
    },
    requestBody: Models.CreateTaskParams,
    options?: AxiosRequestConfig
  ): Promise<Models.TaskByIsSuccessfulResponseDto> {
    let url = '/contacts/{contactId}/tasks';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.contactId !== undefined) {
        url = url.replace('{' + 'contactId' + '}', encodeURIComponent(String(params.contactId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.contactId !== undefined) {
        allParams['contactId'] = params.contactId;
      }
    }

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

    const response: AxiosResponse<Models.TaskByIsSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Task
   * Get Task
   */
  async getTask(
    params: {
      contactId: string;
      taskId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.TaskByIsSuccessfulResponseDto> {
    let url = '/contacts/{contactId}/tasks/{taskId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.contactId !== undefined) {
        url = url.replace('{' + 'contactId' + '}', encodeURIComponent(String(params.contactId)));
      }
      if (params.taskId !== undefined) {
        url = url.replace('{' + 'taskId' + '}', encodeURIComponent(String(params.taskId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.contactId !== undefined) {
        allParams['contactId'] = params.contactId;
      }
      if (params.taskId !== undefined) {
        allParams['taskId'] = params.taskId;
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

    const response: AxiosResponse<Models.TaskByIsSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Task
   * Update Task
   */
  async updateTask(
    params: {
      contactId: string;
      taskId: string;
    },
    requestBody: Models.UpdateTaskBody,
    options?: AxiosRequestConfig
  ): Promise<Models.TaskByIsSuccessfulResponseDto> {
    let url = '/contacts/{contactId}/tasks/{taskId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.contactId !== undefined) {
        url = url.replace('{' + 'contactId' + '}', encodeURIComponent(String(params.contactId)));
      }
      if (params.taskId !== undefined) {
        url = url.replace('{' + 'taskId' + '}', encodeURIComponent(String(params.taskId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.contactId !== undefined) {
        allParams['contactId'] = params.contactId;
      }
      if (params.taskId !== undefined) {
        allParams['taskId'] = params.taskId;
      }
    }

    const config: AxiosRequestConfig = {
      method: 'PUT',
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

    const response: AxiosResponse<Models.TaskByIsSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Task
   * Delete Task
   */
  async deleteTask(
    params: {
      contactId: string;
      taskId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.DeleteTaskSuccessfulResponseDto> {
    let url = '/contacts/{contactId}/tasks/{taskId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.contactId !== undefined) {
        url = url.replace('{' + 'contactId' + '}', encodeURIComponent(String(params.contactId)));
      }
      if (params.taskId !== undefined) {
        url = url.replace('{' + 'taskId' + '}', encodeURIComponent(String(params.taskId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.contactId !== undefined) {
        allParams['contactId'] = params.contactId;
      }
      if (params.taskId !== undefined) {
        allParams['taskId'] = params.taskId;
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

    const response: AxiosResponse<Models.DeleteTaskSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Task Completed
   * Update Task Completed
   */
  async updateTaskCompleted(
    params: {
      contactId: string;
      taskId: string;
    },
    requestBody: Models.UpdateTaskStatusParams,
    options?: AxiosRequestConfig
  ): Promise<Models.TaskByIsSuccessfulResponseDto> {
    let url = '/contacts/{contactId}/tasks/{taskId}/completed';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.contactId !== undefined) {
        url = url.replace('{' + 'contactId' + '}', encodeURIComponent(String(params.contactId)));
      }
      if (params.taskId !== undefined) {
        url = url.replace('{' + 'taskId' + '}', encodeURIComponent(String(params.taskId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.contactId !== undefined) {
        allParams['contactId'] = params.contactId;
      }
      if (params.taskId !== undefined) {
        allParams['taskId'] = params.taskId;
      }
    }

    const config: AxiosRequestConfig = {
      method: 'PUT',
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

    const response: AxiosResponse<Models.TaskByIsSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Appointments for Contact
   * Get Appointments for Contact
   */
  async getAppointmentsForContact(
    params: {
      contactId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetEventsSuccessfulResponseDto> {
    let url = '/contacts/{contactId}/appointments';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.contactId !== undefined) {
        url = url.replace('{' + 'contactId' + '}', encodeURIComponent(String(params.contactId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.contactId !== undefined) {
        allParams['contactId'] = params.contactId;
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

    const response: AxiosResponse<Models.GetEventsSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Add Tags
   * Add Tags
   */
  async addTags(
    params: {
      contactId: string;
    },
    requestBody: Models.TagsDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.CreateAddTagSuccessfulResponseDto> {
    let url = '/contacts/{contactId}/tags';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.contactId !== undefined) {
        url = url.replace('{' + 'contactId' + '}', encodeURIComponent(String(params.contactId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.contactId !== undefined) {
        allParams['contactId'] = params.contactId;
      }
    }

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

    const response: AxiosResponse<Models.CreateAddTagSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Remove Tags
   * Remove Tags
   */
  async removeTags(
    params: {
      contactId: string;
    },
    requestBody: Models.TagsDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.CreateDeleteTagSuccessfulResponseDto> {
    let url = '/contacts/{contactId}/tags';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.contactId !== undefined) {
        url = url.replace('{' + 'contactId' + '}', encodeURIComponent(String(params.contactId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.contactId !== undefined) {
        allParams['contactId'] = params.contactId;
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

    const response: AxiosResponse<Models.CreateDeleteTagSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get All Notes
   * Get All Notes
   */
  async getAllNotes(
    params: {
      contactId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetNotesListSuccessfulResponseDto> {
    let url = '/contacts/{contactId}/notes';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.contactId !== undefined) {
        url = url.replace('{' + 'contactId' + '}', encodeURIComponent(String(params.contactId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.contactId !== undefined) {
        allParams['contactId'] = params.contactId;
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

    const response: AxiosResponse<Models.GetNotesListSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Note
   * Create Note
   */
  async createNote(
    params: {
      contactId: string;
    },
    requestBody: Models.NotesDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.GetCreateUpdateNoteSuccessfulResponseDto> {
    let url = '/contacts/{contactId}/notes';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.contactId !== undefined) {
        url = url.replace('{' + 'contactId' + '}', encodeURIComponent(String(params.contactId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.contactId !== undefined) {
        allParams['contactId'] = params.contactId;
      }
    }

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

    const response: AxiosResponse<Models.GetCreateUpdateNoteSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Note
   * Get Note
   */
  async getNote(
    params: {
      contactId: string;
      id: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetCreateUpdateNoteSuccessfulResponseDto> {
    let url = '/contacts/{contactId}/notes/{id}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.contactId !== undefined) {
        url = url.replace('{' + 'contactId' + '}', encodeURIComponent(String(params.contactId)));
      }
      if (params.id !== undefined) {
        url = url.replace('{' + 'id' + '}', encodeURIComponent(String(params.id)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.contactId !== undefined) {
        allParams['contactId'] = params.contactId;
      }
      if (params.id !== undefined) {
        allParams['id'] = params.id;
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

    const response: AxiosResponse<Models.GetCreateUpdateNoteSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Note
   * Update Note
   */
  async updateNote(
    params: {
      contactId: string;
      id: string;
    },
    requestBody: Models.NotesDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.GetCreateUpdateNoteSuccessfulResponseDto> {
    let url = '/contacts/{contactId}/notes/{id}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.contactId !== undefined) {
        url = url.replace('{' + 'contactId' + '}', encodeURIComponent(String(params.contactId)));
      }
      if (params.id !== undefined) {
        url = url.replace('{' + 'id' + '}', encodeURIComponent(String(params.id)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.contactId !== undefined) {
        allParams['contactId'] = params.contactId;
      }
      if (params.id !== undefined) {
        allParams['id'] = params.id;
      }
    }

    const config: AxiosRequestConfig = {
      method: 'PUT',
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

    const response: AxiosResponse<Models.GetCreateUpdateNoteSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Note
   * Delete Note
   */
  async deleteNote(
    params: {
      contactId: string;
      id: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.DeleteNoteSuccessfulResponseDto> {
    let url = '/contacts/{contactId}/notes/{id}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.contactId !== undefined) {
        url = url.replace('{' + 'contactId' + '}', encodeURIComponent(String(params.contactId)));
      }
      if (params.id !== undefined) {
        url = url.replace('{' + 'id' + '}', encodeURIComponent(String(params.id)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.contactId !== undefined) {
        allParams['contactId'] = params.contactId;
      }
      if (params.id !== undefined) {
        allParams['id'] = params.id;
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

    const response: AxiosResponse<Models.DeleteNoteSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Contacts Tags
   * Allows you to update tags to multiple contacts at once, you can add or remove tags from the contacts
   */
  async createAssociation(
    params: {
      type: string;
    },
    requestBody: Models.UpdateTagsDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.UpdateTagsResponseDTO> {
    let url = '/contacts/bulk/tags/update/{type}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = [];
    
    if (params) {
      if (params.type !== undefined) {
        url = url.replace('{' + 'type' + '}', encodeURIComponent(String(params.type)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.type !== undefined) {
        allParams['type'] = params.type;
      }
    }

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

    const response: AxiosResponse<Models.UpdateTagsResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Add/Remove Contacts From Business
   * Add/Remove Contacts From Business . Passing a &#x60;null&#x60; businessId will remove the businessId from the contacts
   */
  async addRemoveContactFromBusiness(
    requestBody: Models.ContactsBusinessUpdate,
    options?: AxiosRequestConfig
  ): Promise<Models.ContactsBulkUpateResponse> {
    let url = '/contacts/bulk/business';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = [];
    

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

    const response: AxiosResponse<Models.ContactsBulkUpateResponse> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Contact
   * Get Contact
   */
  async getContact(
    params: {
      contactId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.ContactsByIdSuccessfulResponseDto> {
    let url = '/contacts/{contactId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.contactId !== undefined) {
        url = url.replace('{' + 'contactId' + '}', encodeURIComponent(String(params.contactId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.contactId !== undefined) {
        allParams['contactId'] = params.contactId;
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

    const response: AxiosResponse<Models.ContactsByIdSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Contact
   * Please find the list of acceptable values for the &#x60;country&#x60; field  &lt;a href&#x3D;&quot;https://highlevel.stoplight.io/docs/integrations/ZG9jOjI4MzUzNDIy-country-list&quot; target&#x3D;&quot;_blank&quot;&gt;here&lt;/a&gt;
   */
  async updateContact(
    params: {
      contactId: string;
    },
    requestBody: Models.UpdateContactDto,
    options?: AxiosRequestConfig
  ): Promise<Models.UpdateContactsSuccessfulResponseDto> {
    let url = '/contacts/{contactId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.contactId !== undefined) {
        url = url.replace('{' + 'contactId' + '}', encodeURIComponent(String(params.contactId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.contactId !== undefined) {
        allParams['contactId'] = params.contactId;
      }
    }

    const config: AxiosRequestConfig = {
      method: 'PUT',
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

    const response: AxiosResponse<Models.UpdateContactsSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Contact
   * Delete Contact
   */
  async deleteContact(
    params: {
      contactId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.DeleteContactsSuccessfulResponseDto> {
    let url = '/contacts/{contactId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.contactId !== undefined) {
        url = url.replace('{' + 'contactId' + '}', encodeURIComponent(String(params.contactId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.contactId !== undefined) {
        allParams['contactId'] = params.contactId;
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

    const response: AxiosResponse<Models.DeleteContactsSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Upsert Contact
   * Please find the list of acceptable values for the &#x60;country&#x60; field  &lt;a href&#x3D;&quot;https://highlevel.stoplight.io/docs/integrations/ZG9jOjI4MzUzNDIy-country-list&quot; target&#x3D;&quot;_blank&quot;&gt;here&lt;/a&gt;&lt;br/&gt;&lt;br/&gt;The Upsert API will adhere to the configuration defined under the “Allow Duplicate Contact” setting at the Location level. If the setting is configured to check both Email and Phone, the API will attempt to identify an existing contact based on the priority sequence specified in the setting, and will create or update the contact accordingly.&lt;br/&gt;&lt;br/&gt;If two separate contacts already exist—one with the same email and another with the same phone—and an upsert request includes both the email and phone, the API will update the contact that matches the first field in the configured sequence, and ignore the second field to prevent duplication.
   */
  async upsertContact(
    requestBody: Models.UpsertContactDto,
    options?: AxiosRequestConfig
  ): Promise<Models.UpsertContactsSuccessfulResponseDto> {
    let url = '/contacts/upsert';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    

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

    const response: AxiosResponse<Models.UpsertContactsSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Contacts By BusinessId
   * Get Contacts By BusinessId
   */
  async getContactsByBusinessId(
    params: {
      businessId: string;
      limit?: string;
      locationId: string;
      skip?: string;
      query?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.ContactsSearchSuccessfulResponseDto> {
    let url = '/contacts/business/{businessId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.businessId !== undefined) {
        url = url.replace('{' + 'businessId' + '}', encodeURIComponent(String(params.businessId)));
      }
      if (params.limit !== undefined) {
        queryParams['limit'] = params.limit;
      }
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
      if (params.skip !== undefined) {
        queryParams['skip'] = params.skip;
      }
      if (params.query !== undefined) {
        queryParams['query'] = params.query;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.businessId !== undefined) {
        allParams['businessId'] = params.businessId;
      }
      if (params.limit !== undefined) {
        allParams['limit'] = params.limit;
      }
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.skip !== undefined) {
        allParams['skip'] = params.skip;
      }
      if (params.query !== undefined) {
        allParams['query'] = params.query;
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

    const response: AxiosResponse<Models.ContactsSearchSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Add Followers
   * Add Followers
   */
  async addFollowersContact(
    params: {
      contactId: string;
    },
    requestBody: Models.FollowersDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.CreateAddFollowersSuccessfulResponseDto> {
    let url = '/contacts/{contactId}/followers';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.contactId !== undefined) {
        url = url.replace('{' + 'contactId' + '}', encodeURIComponent(String(params.contactId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.contactId !== undefined) {
        allParams['contactId'] = params.contactId;
      }
    }

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

    const response: AxiosResponse<Models.CreateAddFollowersSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Remove Followers
   * Remove Followers
   */
  async removeFollowersContact(
    params: {
      contactId: string;
    },
    requestBody: Models.FollowersDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.DeleteFollowersSuccessfulResponseDto> {
    let url = '/contacts/{contactId}/followers';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.contactId !== undefined) {
        url = url.replace('{' + 'contactId' + '}', encodeURIComponent(String(params.contactId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.contactId !== undefined) {
        allParams['contactId'] = params.contactId;
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

    const response: AxiosResponse<Models.DeleteFollowersSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Add Contact to Campaign
   * Add contact to Campaign
   */
  async addContactToCampaign(
    params: {
      contactId: string;
      campaignId: string;
    },
    requestBody: Models.AddContactToCampaignDto,
    options?: AxiosRequestConfig
  ): Promise<Models.CreateDeleteCantactsCampaignsSuccessfulResponseDto> {
    let url = '/contacts/{contactId}/campaigns/{campaignId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.contactId !== undefined) {
        url = url.replace('{' + 'contactId' + '}', encodeURIComponent(String(params.contactId)));
      }
      if (params.campaignId !== undefined) {
        url = url.replace('{' + 'campaignId' + '}', encodeURIComponent(String(params.campaignId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.contactId !== undefined) {
        allParams['contactId'] = params.contactId;
      }
      if (params.campaignId !== undefined) {
        allParams['campaignId'] = params.campaignId;
      }
    }

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

    const response: AxiosResponse<Models.CreateDeleteCantactsCampaignsSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Remove Contact From Campaign
   * Remove Contact From Campaign
   */
  async removeContactFromCampaign(
    params: {
      contactId: string;
      campaignId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.CreateDeleteCantactsCampaignsSuccessfulResponseDto> {
    let url = '/contacts/{contactId}/campaigns/{campaignId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.contactId !== undefined) {
        url = url.replace('{' + 'contactId' + '}', encodeURIComponent(String(params.contactId)));
      }
      if (params.campaignId !== undefined) {
        url = url.replace('{' + 'campaignId' + '}', encodeURIComponent(String(params.campaignId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.contactId !== undefined) {
        allParams['contactId'] = params.contactId;
      }
      if (params.campaignId !== undefined) {
        allParams['campaignId'] = params.campaignId;
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

    const response: AxiosResponse<Models.CreateDeleteCantactsCampaignsSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Remove Contact From Every Campaign
   * Remove Contact From Every Campaign
   */
  async removeContactFromEveryCampaign(
    params: {
      contactId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.CreateDeleteCantactsCampaignsSuccessfulResponseDto> {
    let url = '/contacts/{contactId}/campaigns/removeAll';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.contactId !== undefined) {
        url = url.replace('{' + 'contactId' + '}', encodeURIComponent(String(params.contactId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.contactId !== undefined) {
        allParams['contactId'] = params.contactId;
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

    const response: AxiosResponse<Models.CreateDeleteCantactsCampaignsSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Add Contact to Workflow
   * Add Contact to Workflow
   */
  async addContactToWorkflow(
    params: {
      contactId: string;
      workflowId: string;
    },
    requestBody: Models.CreateWorkflowDto,
    options?: AxiosRequestConfig
  ): Promise<Models.ContactsWorkflowSuccessfulResponseDto> {
    let url = '/contacts/{contactId}/workflow/{workflowId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.contactId !== undefined) {
        url = url.replace('{' + 'contactId' + '}', encodeURIComponent(String(params.contactId)));
      }
      if (params.workflowId !== undefined) {
        url = url.replace('{' + 'workflowId' + '}', encodeURIComponent(String(params.workflowId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.contactId !== undefined) {
        allParams['contactId'] = params.contactId;
      }
      if (params.workflowId !== undefined) {
        allParams['workflowId'] = params.workflowId;
      }
    }

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

    const response: AxiosResponse<Models.ContactsWorkflowSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Contact from Workflow
   * Delete Contact from Workflow
   */
  async deleteContactFromWorkflow(
    params: {
      contactId: string;
      workflowId: string;
    },
    requestBody: Models.CreateWorkflowDto,
    options?: AxiosRequestConfig
  ): Promise<Models.ContactsWorkflowSuccessfulResponseDto> {
    let url = '/contacts/{contactId}/workflow/{workflowId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.contactId !== undefined) {
        url = url.replace('{' + 'contactId' + '}', encodeURIComponent(String(params.contactId)));
      }
      if (params.workflowId !== undefined) {
        url = url.replace('{' + 'workflowId' + '}', encodeURIComponent(String(params.workflowId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.contactId !== undefined) {
        allParams['contactId'] = params.contactId;
      }
      if (params.workflowId !== undefined) {
        allParams['workflowId'] = params.workflowId;
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

    const response: AxiosResponse<Models.ContactsWorkflowSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Contact
   * Please find the list of acceptable values for the &#x60;country&#x60; field  &lt;a href&#x3D;&quot;https://highlevel.stoplight.io/docs/integrations/ZG9jOjI4MzUzNDIy-country-list&quot; target&#x3D;&quot;_blank&quot;&gt;here&lt;/a&gt;
   */
  async createContact(
    requestBody: Models.CreateContactDto,
    options?: AxiosRequestConfig
  ): Promise<Models.CreateContactsSuccessfulResponseDto> {
    let url = '/contacts/';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    

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

    const response: AxiosResponse<Models.CreateContactsSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Contacts
   * Get Contacts

 **Note:** This API endpoint is deprecated. Please use the [Search Contacts](https://highlevel.stoplight.io/docs/integrations/dbe4f3a00a106-search-contacts) endpoint instead.
   * @deprecated deprecated. Use the [Search Contacts](https://highlevel instead.
   */
  async getContacts(
    params: {
      locationId: string;
      startAfterId?: string;
      startAfter?: number;
      query?: string;
      limit?: number;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.ContactsSearchSuccessfulResponseDto> {
    let url = '/contacts/';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
      if (params.startAfterId !== undefined) {
        queryParams['startAfterId'] = params.startAfterId;
      }
      if (params.startAfter !== undefined) {
        queryParams['startAfter'] = params.startAfter;
      }
      if (params.query !== undefined) {
        queryParams['query'] = params.query;
      }
      if (params.limit !== undefined) {
        queryParams['limit'] = params.limit;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.startAfterId !== undefined) {
        allParams['startAfterId'] = params.startAfterId;
      }
      if (params.startAfter !== undefined) {
        allParams['startAfter'] = params.startAfter;
      }
      if (params.query !== undefined) {
        allParams['query'] = params.query;
      }
      if (params.limit !== undefined) {
        allParams['limit'] = params.limit;
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

    const response: AxiosResponse<Models.ContactsSearchSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

}

export default Contacts; 