import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/saas';

/**
 * Saas Service
 * API Service for SaaS
 */
export class Saas {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Get locations by stripeId with companyId
   * Get locations by stripeCustomerId or stripeSubscriptionId with companyId
   */
  async locations(
    params: {
      channel: string;
      source: string;
      customerId: string;
      subscriptionId: string;
      companyId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<string[]> {
    let url = '/saas-api/public-api/locations';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Agency-Access"];
    
    if (params) {
      if (params.channel !== undefined) {
        headerParams['channel'] = String(params.channel);
      }
      if (params.source !== undefined) {
        headerParams['source'] = String(params.source);
      }
      if (params.customerId !== undefined) {
        queryParams['customerId'] = params.customerId;
      }
      if (params.subscriptionId !== undefined) {
        queryParams['subscriptionId'] = params.subscriptionId;
      }
      if (params.companyId !== undefined) {
        queryParams['companyId'] = params.companyId;
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

    const response: AxiosResponse<string[]> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update SaaS subscription
   * Update SaaS subscription for given locationId and customerId
   */
  async generatePaymentLink(
    params: {
      locationId: string;
    },
    requestBody: Models.UpdateSubscriptionDto,
    options?: AxiosRequestConfig
  ): Promise<string> {
    let url = '/saas-api/public-api/update-saas-subscription/{locationId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Agency-Access"];
    
    if (params) {
      if (params.locationId !== undefined) {
        url = url.replace('{' + 'locationId' + '}', encodeURIComponent(String(params.locationId)));
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

    const response: AxiosResponse<string> = await this.client.request(config);
    return response.data;
  }

  /**
   * Disable SaaS for locations
   * Disable SaaS for locations for given locationIds
   */
  async bulkDisableSaas(
    params: {
      companyId: string;
    },
    requestBody: Models.BulkDisableSaasDto,
    options?: AxiosRequestConfig
  ): Promise<Models.BulkDisableSaasResponseDto> {
    let url = '/saas-api/public-api/bulk-disable-saas/{companyId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Agency-Access"];
    
    if (params) {
      if (params.companyId !== undefined) {
        url = url.replace('{' + 'companyId' + '}', encodeURIComponent(String(params.companyId)));
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

    const response: AxiosResponse<Models.BulkDisableSaasResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Enable SaaS for Sub-Account (Formerly Location)
   * &lt;div&gt;
                  &lt;p&gt;Create a new Sub-Account (Formerly Location) based on the data provided&lt;/p&gt; 
                  &lt;div&gt;
&lt;span&gt;
                     :::info
 This feature is only available on Agency Pro ($497) plan.
 :::  
 &lt;/span&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
    
   */
  async enableSaasLocation(
    params: {
      locationId: string;
    },
    requestBody: Models.EnableSaasDto,
    options?: AxiosRequestConfig
  ): Promise<Models.EnableSaasResponseDto> {
    let url = '/saas-api/public-api/enable-saas/{locationId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Agency-Access"];
    
    if (params) {
      if (params.locationId !== undefined) {
        url = url.replace('{' + 'locationId' + '}', encodeURIComponent(String(params.locationId)));
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

    const response: AxiosResponse<Models.EnableSaasResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Pause location
   * Pause Sub account for given locationId
   */
  async pauseLocation(
    params: {
      locationId: string;
    },
    requestBody: Models.PauseLocationDto,
    options?: AxiosRequestConfig
  ): Promise<boolean> {
    let url = '/saas-api/public-api/pause/{locationId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Agency-Access"];
    
    if (params) {
      if (params.locationId !== undefined) {
        url = url.replace('{' + 'locationId' + '}', encodeURIComponent(String(params.locationId)));
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

    const response: AxiosResponse<boolean> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Rebilling
   * Bulk update rebilling for given locationIds
   */
  async updateRebilling(
    params: {
      companyId: string;
    },
    requestBody: Models.UpdateRebillingDto,
    options?: AxiosRequestConfig
  ): Promise<Models.UpdateRebillingResponseDto> {
    let url = '/saas-api/public-api/update-rebilling/{companyId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Agency-Access"];
    
    if (params) {
      if (params.companyId !== undefined) {
        url = url.replace('{' + 'companyId' + '}', encodeURIComponent(String(params.companyId)));
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

    const response: AxiosResponse<Models.UpdateRebillingResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Agency Plans
   * Fetch all agency subscription plans for a given company ID
   */
  async getAgencyPlans(
    params: {
      companyId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.AgencyPlanResponseDto[]> {
    let url = '/saas-api/public-api/agency-plans/{companyId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Agency-Access"];
    
    if (params) {
      if (params.companyId !== undefined) {
        url = url.replace('{' + 'companyId' + '}', encodeURIComponent(String(params.companyId)));
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

    const response: AxiosResponse<Models.AgencyPlanResponseDto[]> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Location Subscription Details
   * Fetch subscription details for a specific location from location metadata
   */
  async getLocationSubscription(
    params: {
      locationId: string;
      companyId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.LocationSubscriptionResponseDto> {
    let url = '/saas-api/public-api/get-saas-subscription/{locationId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Agency-Access"];
    
    if (params) {
      if (params.locationId !== undefined) {
        url = url.replace('{' + 'locationId' + '}', encodeURIComponent(String(params.locationId)));
      }
      if (params.companyId !== undefined) {
        queryParams['companyId'] = params.companyId;
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

    const response: AxiosResponse<Models.LocationSubscriptionResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Bulk Enable SaaS
   * Enable SaaS mode for multiple locations with support for both SaaS v1 and v2
   */
  async bulkEnableSaas(
    params: {
      companyId: string;
    },
    requestBody: Models.BulkEnableSaasRequestDto,
    options?: AxiosRequestConfig
  ): Promise<Models.BulkEnableSaasResponseDto> {
    let url = '/saas-api/public-api/bulk-enable-saas/{companyId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Agency-Access"];
    
    if (params) {
      if (params.companyId !== undefined) {
        url = url.replace('{' + 'companyId' + '}', encodeURIComponent(String(params.companyId)));
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

    const response: AxiosResponse<Models.BulkEnableSaasResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get SaaS Locations
   * Fetch all SaaS-activated locations for a company with pagination
   */
  async getSaasLocations(
    params: {
      companyId: string;
      page: number;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetSaasLocationsResponseDto> {
    let url = '/saas-api/public-api/saas-locations/{companyId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Agency-Access"];
    
    if (params) {
      if (params.companyId !== undefined) {
        url = url.replace('{' + 'companyId' + '}', encodeURIComponent(String(params.companyId)));
      }
      if (params.page !== undefined) {
        queryParams['page'] = params.page;
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

    const response: AxiosResponse<Models.GetSaasLocationsResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get SaaS Plan
   * Fetch a specific SaaS plan by plan ID
   */
  async getSaasPlan(
    params: {
      planId: string;
      companyId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.SaasPlanResponseDto> {
    let url = '/saas-api/public-api/saas-plan/{planId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Agency-Access"];
    
    if (params) {
      if (params.planId !== undefined) {
        url = url.replace('{' + 'planId' + '}', encodeURIComponent(String(params.planId)));
      }
      if (params.companyId !== undefined) {
        queryParams['companyId'] = params.companyId;
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

    const response: AxiosResponse<Models.SaasPlanResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get SaaS location count
   * Get count of SaaS locations for a company
   */
  async getSaasLocationCount(
    params: {
      companyId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<any> {
    let url = '/saas-api/location-metadata/{companyId}/fetch_saas_locations_count';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.companyId !== undefined) {
        url = url.replace('{' + 'companyId' + '}', encodeURIComponent(String(params.companyId)));
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

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

}

export default Saas; 