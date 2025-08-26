import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/users';

/**
 * Users Service
 * Documentation for users API
 */
export class Users {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Search Users
   * Search Users
   */
  async searchUsers(
    params: {
      companyId: string;
      query?: string;
      skip?: string;
      limit?: string;
      locationId?: string;
      type?: string;
      role?: string;
      ids?: string;
      sort?: string;
      sortDirection?: string;
      enabled2waySync?: boolean;
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.SearchUserSuccessfulResponseDto> {
    let url = '/users/search';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Agency-Access","Location-Access"];
    
    if (params) {
      if (params.companyId !== undefined) {
        queryParams['companyId'] = params.companyId;
      }
      if (params.query !== undefined) {
        queryParams['query'] = params.query;
      }
      if (params.skip !== undefined) {
        queryParams['skip'] = params.skip;
      }
      if (params.limit !== undefined) {
        queryParams['limit'] = params.limit;
      }
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
      if (params.type !== undefined) {
        queryParams['type'] = params.type;
      }
      if (params.role !== undefined) {
        queryParams['role'] = params.role;
      }
      if (params.ids !== undefined) {
        queryParams['ids'] = params.ids;
      }
      if (params.sort !== undefined) {
        queryParams['sort'] = params.sort;
      }
      if (params.sortDirection !== undefined) {
        queryParams['sortDirection'] = params.sortDirection;
      }
      if (params.enabled2waySync !== undefined) {
        queryParams['enabled2waySync'] = params.enabled2waySync;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.companyId !== undefined) {
        allParams['companyId'] = params.companyId;
      }
      if (params.query !== undefined) {
        allParams['query'] = params.query;
      }
      if (params.skip !== undefined) {
        allParams['skip'] = params.skip;
      }
      if (params.limit !== undefined) {
        allParams['limit'] = params.limit;
      }
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.type !== undefined) {
        allParams['type'] = params.type;
      }
      if (params.role !== undefined) {
        allParams['role'] = params.role;
      }
      if (params.ids !== undefined) {
        allParams['ids'] = params.ids;
      }
      if (params.sort !== undefined) {
        allParams['sort'] = params.sort;
      }
      if (params.sortDirection !== undefined) {
        allParams['sortDirection'] = params.sortDirection;
      }
      if (params.enabled2waySync !== undefined) {
        allParams['enabled2waySync'] = params.enabled2waySync;
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
          {},
          options?.preferredTokenType
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

    const response: AxiosResponse<Models.SearchUserSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Filter Users by Email
   * Filter users by company ID, deleted status, and email array
   */
  async filterUsersByEmail(
    requestBody: Models.FilterByEmailDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.SearchUserSuccessfulResponseDto> {
    let url = '/users/search/filter-by-email';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Agency-Access","Location-Access"];
    

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
          requestBody,
          options?.preferredTokenType
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

    const response: AxiosResponse<Models.SearchUserSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get User
   * Get User
   */
  async getUser(
    params: {
      userId: string;
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.UserSuccessfulResponseDto> {
    let url = '/users/{userId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Agency-Access","Location-Access"];
    
    if (params) {
      if (params.userId !== undefined) {
        url = url.replace('{' + 'userId' + '}', encodeURIComponent(String(params.userId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.userId !== undefined) {
        allParams['userId'] = params.userId;
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
          {},
          options?.preferredTokenType
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

    const response: AxiosResponse<Models.UserSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update User
   * Update User
   */
  async updateUser(
    requestBody: Models.UpdateUserDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.UserSuccessfulResponseDto> {
    let url = '/users/{userId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Agency-Access","Location-Access"];
    

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};

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
          requestBody,
          options?.preferredTokenType
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

    const response: AxiosResponse<Models.UserSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete User
   * Delete User
   */
  async deleteUser(
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.DeleteUserSuccessfulResponseDto> {
    let url = '/users/{userId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Agency-Access","Location-Access"];
    

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};

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
          {},
          options?.preferredTokenType
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

    const response: AxiosResponse<Models.DeleteUserSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get User by Location
   * Get User by Location
   */
  async getUserByLocation(
    params: {
      locationId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.LocationSuccessfulResponseDto> {
    let url = '/users/';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    
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

    const response: AxiosResponse<Models.LocationSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create User
   * Create User
   */
  async createUser(
    requestBody: Models.CreateUserDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.UserSuccessfulResponseDto> {
    let url = '/users/';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Agency-Access","Location-Access"];
    

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
          requestBody,
          options?.preferredTokenType
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

    const response: AxiosResponse<Models.UserSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

}

export default Users; 