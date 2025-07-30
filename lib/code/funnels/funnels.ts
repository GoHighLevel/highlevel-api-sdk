import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/funnels';

/**
 * Funnels Service
 * Documentation for funnels API
 */
export class Funnels {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Create Redirect
   * The &quot;Create Redirect&quot; API Allows adding a new url redirect to the system. Use this endpoint to create a url redirect with the specified details. Ensure that the required information is provided in the request payload.
   */
  async createRedirect(
    requestBody: Models.CreateRedirectParams,
    options?: AxiosRequestConfig
  ): Promise<Models.CreateRedirectResponseDTO> {
    let url = '/funnels/lookup/redirect';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];


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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.CreateRedirectResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Redirect By Id
   * The &quot;Update Redirect By Id&quot; API Allows updating an existing URL redirect in the system. Use this endpoint to modify a URL redirect with the specified ID using details provided in the request payload.
   */
  async updateRedirectById(
    params: {
      id: string;
    },
    requestBody: Models.UpdateRedirectParams,
    options?: AxiosRequestConfig
  ): Promise<Models.UpdateRedirectResponseDTO> {
    let url = '/funnels/lookup/redirect/{id}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];

    if (params) {
      if (params.id !== undefined) {
        url = url.replace('{' + 'id' + '}', encodeURIComponent(String(params.id)));
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.UpdateRedirectResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Redirect By Id
   * The &quot;Delete Redirect By Id&quot; API Allows deletion of a URL redirect from the system using its unique identifier. Use this endpoint to delete a URL redirect with the specified ID using details provided in the request payload.
   */
  async deleteRedirectById(
    params: {
      id: string;
      locationId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.DeleteRedirectResponseDTO> {
    let url = '/funnels/lookup/redirect/{id}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];

    if (params) {
      if (params.id !== undefined) {
        url = url.replace('{' + 'id' + '}', encodeURIComponent(String(params.id)));
      }
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.DeleteRedirectResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Fetch List of Redirects
   * Retrieves a list of all URL redirects based on the given query parameters.
   */
  async fetchRedirectsList(
    params: {
      locationId: string;
      limit: number;
      offset: number;
      search?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.RedirectListResponseDTO> {
    let url = '/funnels/lookup/redirect/list';
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.RedirectListResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Fetch List of Funnels
   * Retrieves a list of all funnels based on the given query parameters.
   */
  async getFunnels(
    params: {
      locationId: string;
      type?: string;
      category?: string;
      offset?: string;
      limit?: string;
      parentId?: string;
      name?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.FunnelListResponseDTO> {
    let url = '/funnels/funnel/list';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];

    if (params) {
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
      if (params.type !== undefined) {
        queryParams['type'] = params.type;
      }
      if (params.category !== undefined) {
        queryParams['category'] = params.category;
      }
      if (params.offset !== undefined) {
        queryParams['offset'] = params.offset;
      }
      if (params.limit !== undefined) {
        queryParams['limit'] = params.limit;
      }
      if (params.parentId !== undefined) {
        queryParams['parentId'] = params.parentId;
      }
      if (params.name !== undefined) {
        queryParams['name'] = params.name;
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.FunnelListResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Fetch list of funnel pages
   * Retrieves a list of all funnel pages based on the given query parameters.
   */
  async getPagesByFunnelId(
    params: {
      locationId: string;
      funnelId: string;
      name?: string;
      limit: number;
      offset: number;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.FunnelPageResponseDTO> {
    let url = '/funnels/page';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];

    if (params) {
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
      if (params.funnelId !== undefined) {
        queryParams['funnelId'] = params.funnelId;
      }
      if (params.name !== undefined) {
        queryParams['name'] = params.name;
      }
      if (params.limit !== undefined) {
        queryParams['limit'] = params.limit;
      }
      if (params.offset !== undefined) {
        queryParams['offset'] = params.offset;
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.FunnelPageResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Fetch count of funnel pages
   * Retrieves count of all funnel pages based on the given query parameters.
   */
  async getPagesCountByFunnelId(
    params: {
      locationId: string;
      funnelId: string;
      name?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.FunnelPageCountResponseDTO> {
    let url = '/funnels/page/count';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];

    if (params) {
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
      if (params.funnelId !== undefined) {
        queryParams['funnelId'] = params.funnelId;
      }
      if (params.name !== undefined) {
        queryParams['name'] = params.name;
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.FunnelPageCountResponseDTO> = await this.client.request(config);
    return response.data;
  }

}

export default Funnels; 