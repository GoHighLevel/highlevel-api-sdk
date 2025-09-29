import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/marketplace';

/**
 * Marketplace Service
 * Documentation for Marketplace API
 */
export class Marketplace {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Create a new wallet charge
   * Create a new wallet charge
   */
  async charge(
    requestBody: Models.RaiseChargeBodyDTO,
    options?: AxiosRequestConfig
  ): Promise<any> {
    let url = '/marketplace/billing/charges';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access-Only"];
    

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
   * Get all wallet charges
   * Get all wallet charges
   */
  async getCharges(
    params: {
      meterId?: string;
      eventId?: string;
      userId?: string;
      startDate?: string;
      endDate?: string;
      skip?: number;
      limit?: number;
    },
    options?: AxiosRequestConfig
  ): Promise<any> {
    let url = '/marketplace/billing/charges';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access-Only"];
    
    if (params) {
      if (params.meterId !== undefined) {
        queryParams['meterId'] = params.meterId;
      }
      if (params.eventId !== undefined) {
        queryParams['eventId'] = params.eventId;
      }
      if (params.userId !== undefined) {
        queryParams['userId'] = params.userId;
      }
      if (params.startDate !== undefined) {
        queryParams['startDate'] = params.startDate;
      }
      if (params.endDate !== undefined) {
        queryParams['endDate'] = params.endDate;
      }
      if (params.skip !== undefined) {
        queryParams['skip'] = params.skip;
      }
      if (params.limit !== undefined) {
        queryParams['limit'] = params.limit;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.meterId !== undefined) {
        allParams['meterId'] = params.meterId;
      }
      if (params.eventId !== undefined) {
        allParams['eventId'] = params.eventId;
      }
      if (params.userId !== undefined) {
        allParams['userId'] = params.userId;
      }
      if (params.startDate !== undefined) {
        allParams['startDate'] = params.startDate;
      }
      if (params.endDate !== undefined) {
        allParams['endDate'] = params.endDate;
      }
      if (params.skip !== undefined) {
        allParams['skip'] = params.skip;
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

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete a wallet charge
   * Delete a wallet charge
   */
  async deleteCharge(
    params: {
      chargeId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<any> {
    let url = '/marketplace/billing/charges/{chargeId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access-Only"];
    
    if (params) {
      if (params.chargeId !== undefined) {
        url = url.replace('{' + 'chargeId' + '}', encodeURIComponent(String(params.chargeId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.chargeId !== undefined) {
        allParams['chargeId'] = params.chargeId;
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

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get specific wallet charge details
   * Get specific wallet charge details
   */
  async getSpecificCharge(
    params: {
      chargeId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<any> {
    let url = '/marketplace/billing/charges/{chargeId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access-Only"];
    
    if (params) {
      if (params.chargeId !== undefined) {
        url = url.replace('{' + 'chargeId' + '}', encodeURIComponent(String(params.chargeId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.chargeId !== undefined) {
        allParams['chargeId'] = params.chargeId;
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
   * Check if account has sufficient funds
   * Check if account has sufficient funds
   */
  async hasFunds(
    options?: AxiosRequestConfig
  ): Promise<any> {
    let url = '/marketplace/billing/charges/has-funds';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access-Only"];
    

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};

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
   * Uninstall an application
   * Uninstalls an application from your company or a specific location. This will remove the application&#x60;s access and stop all its functionalities
   */
  async uninstallApplication(
    params: {
      appId: string;
    },
    requestBody: Models.DeleteIntegrationBodyDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.DeleteIntegrationResponse> {
    let url = '/marketplace/app/{appId}/installations';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access-Only","Agency-Access"];
    
    if (params) {
      if (params.appId !== undefined) {
        url = url.replace('{' + 'appId' + '}', encodeURIComponent(String(params.appId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.appId !== undefined) {
        allParams['appId'] = params.appId;
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
      __preferredTokenType: options?.preferredTokenType,
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

    const response: AxiosResponse<Models.DeleteIntegrationResponse> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Installer Details
   * Fetches installer details for the authenticated user. This endpoint returns information about the company, location, user, and installation details associated with the current OAuth token.
   */
  async getInstallerDetails(
    params: {
      appId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetInstallerDetailsResponseDTO> {
    let url = '/marketplace/app/{appId}/installations';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = [];
    
    if (params) {
      if (params.appId !== undefined) {
        url = url.replace('{' + 'appId' + '}', encodeURIComponent(String(params.appId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.appId !== undefined) {
        allParams['appId'] = params.appId;
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

    const response: AxiosResponse<Models.GetInstallerDetailsResponseDTO> = await this.client.request(config);
    return response.data;
  }

}

export default Marketplace; 