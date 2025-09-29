import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/store';

/**
 * Store Service
 * Documentation for store API
 */
export class Store {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Create Shipping Zone
   * The &quot;Create Shipping Zone&quot; API allows adding a new shipping zone.
   */
  async createShippingZone(
    requestBody: Models.CreateShippingZoneDto,
    options?: AxiosRequestConfig
  ): Promise<Models.CreateShippingZoneResponseDto> {
    let url = '/store/shipping-zone';
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

    const response: AxiosResponse<Models.CreateShippingZoneResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * List Shipping Zones
   * The &quot;List Shipping Zone&quot; API allows to retrieve a list of shipping zone.
   */
  async listShippingZones(
    params: {
      altId: string;
      altType: string;
      limit?: number;
      offset?: number;
      withShippingRate?: boolean;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.ListShippingZoneResponseDto> {
    let url = '/store/shipping-zone';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    
    if (params) {
      if (params.altId !== undefined) {
        queryParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        queryParams['altType'] = params.altType;
      }
      if (params.limit !== undefined) {
        queryParams['limit'] = params.limit;
      }
      if (params.offset !== undefined) {
        queryParams['offset'] = params.offset;
      }
      if (params.withShippingRate !== undefined) {
        queryParams['withShippingRate'] = params.withShippingRate;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.altId !== undefined) {
        allParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        allParams['altType'] = params.altType;
      }
      if (params.limit !== undefined) {
        allParams['limit'] = params.limit;
      }
      if (params.offset !== undefined) {
        allParams['offset'] = params.offset;
      }
      if (params.withShippingRate !== undefined) {
        allParams['withShippingRate'] = params.withShippingRate;
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

    const response: AxiosResponse<Models.ListShippingZoneResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Shipping Zone
   * The &quot;List Shipping Zone&quot; API allows to retrieve a paginated list of shipping zone.
   */
  async getShippingZones(
    params: {
      shippingZoneId: string;
      altId: string;
      altType: string;
      withShippingRate?: boolean;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetShippingZoneResponseDto> {
    let url = '/store/shipping-zone/{shippingZoneId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    
    if (params) {
      if (params.shippingZoneId !== undefined) {
        url = url.replace('{' + 'shippingZoneId' + '}', encodeURIComponent(String(params.shippingZoneId)));
      }
      if (params.altId !== undefined) {
        queryParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        queryParams['altType'] = params.altType;
      }
      if (params.withShippingRate !== undefined) {
        queryParams['withShippingRate'] = params.withShippingRate;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.shippingZoneId !== undefined) {
        allParams['shippingZoneId'] = params.shippingZoneId;
      }
      if (params.altId !== undefined) {
        allParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        allParams['altType'] = params.altType;
      }
      if (params.withShippingRate !== undefined) {
        allParams['withShippingRate'] = params.withShippingRate;
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

    const response: AxiosResponse<Models.GetShippingZoneResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Shipping Zone
   * The &quot;update Shipping Zone&quot; API allows update a shipping zone to the system. 
   */
  async updateShippingZone(
    params: {
      shippingZoneId: string;
    },
    requestBody: Models.UpdateShippingZoneDto,
    options?: AxiosRequestConfig
  ): Promise<Models.UpdateShippingZoneResponseDto> {
    let url = '/store/shipping-zone/{shippingZoneId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    
    if (params) {
      if (params.shippingZoneId !== undefined) {
        url = url.replace('{' + 'shippingZoneId' + '}', encodeURIComponent(String(params.shippingZoneId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.shippingZoneId !== undefined) {
        allParams['shippingZoneId'] = params.shippingZoneId;
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

    const response: AxiosResponse<Models.UpdateShippingZoneResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete shipping zone
   * Delete specific shipping zone with Id :shippingZoneId
   */
  async deleteShippingZone(
    params: {
      shippingZoneId: string;
      altId: string;
      altType: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.DeleteShippingZoneResponseDto> {
    let url = '/store/shipping-zone/{shippingZoneId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    
    if (params) {
      if (params.shippingZoneId !== undefined) {
        url = url.replace('{' + 'shippingZoneId' + '}', encodeURIComponent(String(params.shippingZoneId)));
      }
      if (params.altId !== undefined) {
        queryParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        queryParams['altType'] = params.altType;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.shippingZoneId !== undefined) {
        allParams['shippingZoneId'] = params.shippingZoneId;
      }
      if (params.altId !== undefined) {
        allParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        allParams['altType'] = params.altType;
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

    const response: AxiosResponse<Models.DeleteShippingZoneResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get available shipping rates
   * This return available shipping rates for country based on order amount
   */
  async getAvailableShippingZones(
    requestBody: Models.GetAvailableShippingRates,
    options?: AxiosRequestConfig
  ): Promise<Models.GetAvailableShippingRatesResponseDto> {
    let url = '/store/shipping-zone/shipping-rates';
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

    const response: AxiosResponse<Models.GetAvailableShippingRatesResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Shipping Rate
   * The &quot;Create Shipping Rate&quot; API allows adding a new shipping rate.
   */
  async createShippingRate(
    params: {
      shippingZoneId: string;
    },
    requestBody: Models.CreateShippingRateDto,
    options?: AxiosRequestConfig
  ): Promise<Models.CreateShippingRateResponseDto> {
    let url = '/store/shipping-zone/{shippingZoneId}/shipping-rate';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    
    if (params) {
      if (params.shippingZoneId !== undefined) {
        url = url.replace('{' + 'shippingZoneId' + '}', encodeURIComponent(String(params.shippingZoneId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.shippingZoneId !== undefined) {
        allParams['shippingZoneId'] = params.shippingZoneId;
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

    const response: AxiosResponse<Models.CreateShippingRateResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * List Shipping Rates
   * The &quot;List Shipping Rate&quot; API allows to retrieve a list of shipping rate.
   */
  async listShippingRates(
    params: {
      shippingZoneId: string;
      altId: string;
      altType: string;
      limit?: number;
      offset?: number;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.ListShippingRateResponseDto> {
    let url = '/store/shipping-zone/{shippingZoneId}/shipping-rate';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    
    if (params) {
      if (params.shippingZoneId !== undefined) {
        url = url.replace('{' + 'shippingZoneId' + '}', encodeURIComponent(String(params.shippingZoneId)));
      }
      if (params.altId !== undefined) {
        queryParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        queryParams['altType'] = params.altType;
      }
      if (params.limit !== undefined) {
        queryParams['limit'] = params.limit;
      }
      if (params.offset !== undefined) {
        queryParams['offset'] = params.offset;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.shippingZoneId !== undefined) {
        allParams['shippingZoneId'] = params.shippingZoneId;
      }
      if (params.altId !== undefined) {
        allParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        allParams['altType'] = params.altType;
      }
      if (params.limit !== undefined) {
        allParams['limit'] = params.limit;
      }
      if (params.offset !== undefined) {
        allParams['offset'] = params.offset;
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

    const response: AxiosResponse<Models.ListShippingRateResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Shipping Rate
   * The &quot;List Shipping Rate&quot; API allows to retrieve a paginated list of shipping rate.
   */
  async getShippingRates(
    params: {
      shippingZoneId: string;
      shippingRateId: string;
      altId: string;
      altType: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetShippingRateResponseDto> {
    let url = '/store/shipping-zone/{shippingZoneId}/shipping-rate/{shippingRateId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    
    if (params) {
      if (params.shippingZoneId !== undefined) {
        url = url.replace('{' + 'shippingZoneId' + '}', encodeURIComponent(String(params.shippingZoneId)));
      }
      if (params.shippingRateId !== undefined) {
        url = url.replace('{' + 'shippingRateId' + '}', encodeURIComponent(String(params.shippingRateId)));
      }
      if (params.altId !== undefined) {
        queryParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        queryParams['altType'] = params.altType;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.shippingZoneId !== undefined) {
        allParams['shippingZoneId'] = params.shippingZoneId;
      }
      if (params.shippingRateId !== undefined) {
        allParams['shippingRateId'] = params.shippingRateId;
      }
      if (params.altId !== undefined) {
        allParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        allParams['altType'] = params.altType;
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

    const response: AxiosResponse<Models.GetShippingRateResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Shipping Rate
   * The &quot;update Shipping Rate&quot; API allows update a shipping rate to the system. 
   */
  async updateShippingRate(
    params: {
      shippingZoneId: string;
      shippingRateId: string;
    },
    requestBody: Models.UpdateShippingRateDto,
    options?: AxiosRequestConfig
  ): Promise<Models.UpdateShippingRateResponseDto> {
    let url = '/store/shipping-zone/{shippingZoneId}/shipping-rate/{shippingRateId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    
    if (params) {
      if (params.shippingZoneId !== undefined) {
        url = url.replace('{' + 'shippingZoneId' + '}', encodeURIComponent(String(params.shippingZoneId)));
      }
      if (params.shippingRateId !== undefined) {
        url = url.replace('{' + 'shippingRateId' + '}', encodeURIComponent(String(params.shippingRateId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.shippingZoneId !== undefined) {
        allParams['shippingZoneId'] = params.shippingZoneId;
      }
      if (params.shippingRateId !== undefined) {
        allParams['shippingRateId'] = params.shippingRateId;
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

    const response: AxiosResponse<Models.UpdateShippingRateResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete shipping rate
   * Delete specific shipping rate with Id :shippingRateId
   */
  async deleteShippingRate(
    params: {
      shippingZoneId: string;
      shippingRateId: string;
      altId: string;
      altType: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.DeleteShippingRateResponseDto> {
    let url = '/store/shipping-zone/{shippingZoneId}/shipping-rate/{shippingRateId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    
    if (params) {
      if (params.shippingZoneId !== undefined) {
        url = url.replace('{' + 'shippingZoneId' + '}', encodeURIComponent(String(params.shippingZoneId)));
      }
      if (params.shippingRateId !== undefined) {
        url = url.replace('{' + 'shippingRateId' + '}', encodeURIComponent(String(params.shippingRateId)));
      }
      if (params.altId !== undefined) {
        queryParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        queryParams['altType'] = params.altType;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.shippingZoneId !== undefined) {
        allParams['shippingZoneId'] = params.shippingZoneId;
      }
      if (params.shippingRateId !== undefined) {
        allParams['shippingRateId'] = params.shippingRateId;
      }
      if (params.altId !== undefined) {
        allParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        allParams['altType'] = params.altType;
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

    const response: AxiosResponse<Models.DeleteShippingRateResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Shipping Carrier
   * The &quot;Create Shipping Carrier&quot; API allows adding a new shipping carrier.
   */
  async createShippingCarrier(
    requestBody: Models.CreateShippingCarrierDto,
    options?: AxiosRequestConfig
  ): Promise<Models.CreateShippingCarrierResponseDto> {
    let url = '/store/shipping-carrier';
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

    const response: AxiosResponse<Models.CreateShippingCarrierResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * List Shipping Carriers
   * The &quot;List Shipping Carrier&quot; API allows to retrieve a list of shipping carrier.
   */
  async listShippingCarriers(
    params: {
      altId: string;
      altType: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.ListShippingCarrierResponseDto> {
    let url = '/store/shipping-carrier';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    
    if (params) {
      if (params.altId !== undefined) {
        queryParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        queryParams['altType'] = params.altType;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.altId !== undefined) {
        allParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        allParams['altType'] = params.altType;
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

    const response: AxiosResponse<Models.ListShippingCarrierResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Shipping Carrier
   * The &quot;List Shipping Carrier&quot; API allows to retrieve a paginated list of shipping carrier.
   */
  async getShippingCarriers(
    params: {
      shippingCarrierId: string;
      altId: string;
      altType: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetShippingCarrierResponseDto> {
    let url = '/store/shipping-carrier/{shippingCarrierId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    
    if (params) {
      if (params.shippingCarrierId !== undefined) {
        url = url.replace('{' + 'shippingCarrierId' + '}', encodeURIComponent(String(params.shippingCarrierId)));
      }
      if (params.altId !== undefined) {
        queryParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        queryParams['altType'] = params.altType;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.shippingCarrierId !== undefined) {
        allParams['shippingCarrierId'] = params.shippingCarrierId;
      }
      if (params.altId !== undefined) {
        allParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        allParams['altType'] = params.altType;
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

    const response: AxiosResponse<Models.GetShippingCarrierResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Shipping Carrier
   * The &quot;update Shipping Carrier&quot; API allows update a shipping carrier to the system. 
   */
  async updateShippingCarrier(
    params: {
      shippingCarrierId: string;
    },
    requestBody: Models.UpdateShippingCarrierDto,
    options?: AxiosRequestConfig
  ): Promise<Models.UpdateShippingCarrierResponseDto> {
    let url = '/store/shipping-carrier/{shippingCarrierId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    
    if (params) {
      if (params.shippingCarrierId !== undefined) {
        url = url.replace('{' + 'shippingCarrierId' + '}', encodeURIComponent(String(params.shippingCarrierId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.shippingCarrierId !== undefined) {
        allParams['shippingCarrierId'] = params.shippingCarrierId;
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

    const response: AxiosResponse<Models.UpdateShippingCarrierResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete shipping carrier
   * Delete specific shipping carrier with Id :shippingCarrierId
   */
  async deleteShippingCarrier(
    params: {
      shippingCarrierId: string;
      altId: string;
      altType: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.DeleteShippingCarrierResponseDto> {
    let url = '/store/shipping-carrier/{shippingCarrierId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    
    if (params) {
      if (params.shippingCarrierId !== undefined) {
        url = url.replace('{' + 'shippingCarrierId' + '}', encodeURIComponent(String(params.shippingCarrierId)));
      }
      if (params.altId !== undefined) {
        queryParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        queryParams['altType'] = params.altType;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.shippingCarrierId !== undefined) {
        allParams['shippingCarrierId'] = params.shippingCarrierId;
      }
      if (params.altId !== undefined) {
        allParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        allParams['altType'] = params.altType;
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

    const response: AxiosResponse<Models.DeleteShippingCarrierResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create/Update Store Settings
   * Create or update store settings by altId and altType.
   */
  async createStoreSetting(
    requestBody: Models.CreateStoreSettingDto,
    options?: AxiosRequestConfig
  ): Promise<Models.CreateStoreSettingResponseDto> {
    let url = '/store/store-setting';
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

    const response: AxiosResponse<Models.CreateStoreSettingResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Store Settings
   * Get store settings by altId and altType.
   */
  async getStoreSettings(
    params: {
      altId: string;
      altType: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetStoreSettingResponseDto> {
    let url = '/store/store-setting';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    
    if (params) {
      if (params.altId !== undefined) {
        queryParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        queryParams['altType'] = params.altType;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.altId !== undefined) {
        allParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        allParams['altType'] = params.altType;
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

    const response: AxiosResponse<Models.GetStoreSettingResponseDto> = await this.client.request(config);
    return response.data;
  }

}

export default Store; 