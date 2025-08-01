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
    options?: AxiosRequestConfig
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
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          queryParams,
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

    const response: AxiosResponse<Models.SearchUserSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get User
   * Get User
   */
  async getUser(
    options?: AxiosRequestConfig
  ): Promise<Models.UserSuccessfulResponseDto> {
    let url = '/users/{userId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Agency-Access","Location-Access"];
    

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
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          queryParams,
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

    const response: AxiosResponse<Models.UserSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update User
   * Update User
   */
  async updateUser(
    requestBody: Models.UpdateUserDto,
    options?: AxiosRequestConfig
  ): Promise<Models.UserSuccessfulResponseDto> {
    let url = '/users/{userId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Agency-Access","Location-Access"];
    

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
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          queryParams,
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

    const response: AxiosResponse<Models.UserSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete User
   * Delete User
   */
  async deleteUser(
    options?: AxiosRequestConfig
  ): Promise<Models.DeleteUserSuccessfulResponseDto> {
    let url = '/users/{userId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Agency-Access","Location-Access"];
    

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
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          queryParams,
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
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          queryParams,
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
    options?: AxiosRequestConfig
  ): Promise<Models.UserSuccessfulResponseDto> {
    let url = '/users/';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Agency-Access","Location-Access"];
    

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
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          queryParams,
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

    const response: AxiosResponse<Models.UserSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

}

export default Users; 