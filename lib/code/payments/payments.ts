import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/payments';

/**
 * Payments Service
 * Documentation for payments API
 */
export class Payments {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Create White-label Integration Provider
   * The &quot;Create White-label Integration Provider&quot; API allows adding a new payment provider integration to the system which is built on top of Authorize.net or NMI. Use this endpoint to create a integration provider with the specified details. Ensure that the required information is provided in the request payload. This endpoint can be only invoked using marketplace-app token
   */
  async createIntegrationProvider(
    requestBody: Models.CreateWhiteLabelIntegrationProviderDto,
    options?: AxiosRequestConfig
  ): Promise<Models.CreateWhitelabelIntegrationResponseDto> {
    let url = '/payments/integrations/provider/whitelabel';
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

    const response: AxiosResponse<Models.CreateWhitelabelIntegrationResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * List White-label Integration Providers
   * The &quot;List White-label Integration Providers&quot; API allows to retrieve a paginated list of integration providers. Customize your results by filtering whitelabel integration providers(which are built directly on top of Authorize.net or NMI) based on name or paginate through the list using the provided query parameters. This endpoint provides a straightforward way to explore and retrieve integration provider information.
   */
  async listIntegrationProviders(
    params: {
      altId: string;
      altType: string;
      limit?: number;
      offset?: number;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.ListWhitelabelIntegrationProviderResponseDto> {
    let url = '/payments/integrations/provider/whitelabel';
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

    const response: AxiosResponse<Models.ListWhitelabelIntegrationProviderResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * List Orders
   * The &quot;List Orders&quot; API allows to retrieve a paginated list of orders. Customize your results by filtering orders based on name, alt type, order status, payment mode, date range, type of source, contact, funnel products or paginate through the list using the provided query parameters. This endpoint provides a straightforward way to explore and retrieve order information.
   */
  async listOrders(
    params: {
      locationId?: string;
      altId: string;
      altType: string;
      status?: string;
      paymentMode?: string;
      startAt?: string;
      endAt?: string;
      search?: string;
      contactId?: string;
      funnelProductIds?: string;
      limit?: number;
      offset?: number;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.ListOrdersResponseDto> {
    let url = '/payments/orders';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    
    if (params) {
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
      if (params.altId !== undefined) {
        queryParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        queryParams['altType'] = params.altType;
      }
      if (params.status !== undefined) {
        queryParams['status'] = params.status;
      }
      if (params.paymentMode !== undefined) {
        queryParams['paymentMode'] = params.paymentMode;
      }
      if (params.startAt !== undefined) {
        queryParams['startAt'] = params.startAt;
      }
      if (params.endAt !== undefined) {
        queryParams['endAt'] = params.endAt;
      }
      if (params.search !== undefined) {
        queryParams['search'] = params.search;
      }
      if (params.contactId !== undefined) {
        queryParams['contactId'] = params.contactId;
      }
      if (params.funnelProductIds !== undefined) {
        queryParams['funnelProductIds'] = params.funnelProductIds;
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

    const response: AxiosResponse<Models.ListOrdersResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Order by ID
   * The &quot;Get Order by ID&quot; API allows to retrieve information for a specific order using its unique identifier. Use this endpoint to fetch details for a single order based on the provided order ID.
   */
  async getOrderById(
    params: {
      orderId: string;
      locationId?: string;
      altId: string;
      altType: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetOrderResponseSchema> {
    let url = '/payments/orders/{orderId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    
    if (params) {
      if (params.orderId !== undefined) {
        url = url.replace('{' + 'orderId' + '}', encodeURIComponent(String(params.orderId)));
      }
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
      if (params.altId !== undefined) {
        queryParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        queryParams['altType'] = params.altType;
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

    const response: AxiosResponse<Models.GetOrderResponseSchema> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create order fulfillment
   * The &quot;Order Fulfillment&quot; API facilitates the process of fulfilling an order.
   */
  async createOrderFulfillment(
    params: {
      orderId: string;
    },
    requestBody: Models.CreateFulfillmentDto,
    options?: AxiosRequestConfig
  ): Promise<Models.CreateFulfillmentResponseDto> {
    let url = '/payments/orders/{orderId}/fulfillments';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    
    if (params) {
      if (params.orderId !== undefined) {
        url = url.replace('{' + 'orderId' + '}', encodeURIComponent(String(params.orderId)));
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

    const response: AxiosResponse<Models.CreateFulfillmentResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * List fulfillment
   * List all fulfillment history of an order
   */
  async listOrderFulfillment(
    params: {
      altId: string;
      altType: string;
      orderId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.ListFulfillmentResponseDto> {
    let url = '/payments/orders/{orderId}/fulfillments';
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
      if (params.orderId !== undefined) {
        url = url.replace('{' + 'orderId' + '}', encodeURIComponent(String(params.orderId)));
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

    const response: AxiosResponse<Models.ListFulfillmentResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * List Transactions
   * The &quot;List Transactions&quot; API allows to retrieve a paginated list of transactions. Customize your results by filtering transactions based on name, alt type, transaction status, payment mode, date range, type of source, contact, subscription id, entity id or paginate through the list using the provided query parameters. This endpoint provides a straightforward way to explore and retrieve transaction information.
   */
  async listTransactions(
    params: {
      locationId?: string;
      altId: string;
      altType: string;
      paymentMode?: string;
      startAt?: string;
      endAt?: string;
      entitySourceType?: string;
      entitySourceSubType?: string;
      search?: string;
      subscriptionId?: string;
      entityId?: string;
      contactId?: string;
      limit?: number;
      offset?: number;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.ListTxnsResponseDto> {
    let url = '/payments/transactions';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    
    if (params) {
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
      if (params.altId !== undefined) {
        queryParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        queryParams['altType'] = params.altType;
      }
      if (params.paymentMode !== undefined) {
        queryParams['paymentMode'] = params.paymentMode;
      }
      if (params.startAt !== undefined) {
        queryParams['startAt'] = params.startAt;
      }
      if (params.endAt !== undefined) {
        queryParams['endAt'] = params.endAt;
      }
      if (params.entitySourceType !== undefined) {
        queryParams['entitySourceType'] = params.entitySourceType;
      }
      if (params.entitySourceSubType !== undefined) {
        queryParams['entitySourceSubType'] = params.entitySourceSubType;
      }
      if (params.search !== undefined) {
        queryParams['search'] = params.search;
      }
      if (params.subscriptionId !== undefined) {
        queryParams['subscriptionId'] = params.subscriptionId;
      }
      if (params.entityId !== undefined) {
        queryParams['entityId'] = params.entityId;
      }
      if (params.contactId !== undefined) {
        queryParams['contactId'] = params.contactId;
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

    const response: AxiosResponse<Models.ListTxnsResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Transaction by ID
   * The &quot;Get Transaction by ID&quot; API allows to retrieve information for a specific transaction using its unique identifier. Use this endpoint to fetch details for a single transaction based on the provided transaction ID.
   */
  async getTransactionById(
    params: {
      transactionId: string;
      locationId?: string;
      altId: string;
      altType: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetTxnResponseSchema> {
    let url = '/payments/transactions/{transactionId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    
    if (params) {
      if (params.transactionId !== undefined) {
        url = url.replace('{' + 'transactionId' + '}', encodeURIComponent(String(params.transactionId)));
      }
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
      if (params.altId !== undefined) {
        queryParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        queryParams['altType'] = params.altType;
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

    const response: AxiosResponse<Models.GetTxnResponseSchema> = await this.client.request(config);
    return response.data;
  }

  /**
   * List Subscriptions
   * The &quot;List Subscriptions&quot; API allows to retrieve a paginated list of subscriptions. Customize your results by filtering subscriptions based on name, alt type, subscription status, payment mode, date range, type of source, contact, subscription id, entity id, contact or paginate through the list using the provided query parameters. This endpoint provides a straightforward way to explore and retrieve subscription information.
   */
  async listSubscriptions(
    params: {
      altId: string;
      altType: string;
      entityId?: string;
      paymentMode?: string;
      startAt?: string;
      endAt?: string;
      entitySourceType?: string;
      search?: string;
      contactId?: string;
      id?: string;
      limit?: number;
      offset?: number;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.ListSubscriptionResponseDto> {
    let url = '/payments/subscriptions';
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
      if (params.entityId !== undefined) {
        queryParams['entityId'] = params.entityId;
      }
      if (params.paymentMode !== undefined) {
        queryParams['paymentMode'] = params.paymentMode;
      }
      if (params.startAt !== undefined) {
        queryParams['startAt'] = params.startAt;
      }
      if (params.endAt !== undefined) {
        queryParams['endAt'] = params.endAt;
      }
      if (params.entitySourceType !== undefined) {
        queryParams['entitySourceType'] = params.entitySourceType;
      }
      if (params.search !== undefined) {
        queryParams['search'] = params.search;
      }
      if (params.contactId !== undefined) {
        queryParams['contactId'] = params.contactId;
      }
      if (params.id !== undefined) {
        queryParams['id'] = params.id;
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

    const response: AxiosResponse<Models.ListSubscriptionResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Subscription by ID
   * The &quot;Get Subscription by ID&quot; API allows to retrieve information for a specific subscription using its unique identifier. Use this endpoint to fetch details for a single subscription based on the provided subscription ID.
   */
  async getSubscriptionById(
    params: {
      subscriptionId: string;
      altId: string;
      altType: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetSubscriptionResponseSchema> {
    let url = '/payments/subscriptions/{subscriptionId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    
    if (params) {
      if (params.subscriptionId !== undefined) {
        url = url.replace('{' + 'subscriptionId' + '}', encodeURIComponent(String(params.subscriptionId)));
      }
      if (params.altId !== undefined) {
        queryParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        queryParams['altType'] = params.altType;
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

    const response: AxiosResponse<Models.GetSubscriptionResponseSchema> = await this.client.request(config);
    return response.data;
  }

  /**
   * List Coupons
   * The &quot;List Coupons&quot; API allows you to retrieve a list of all coupons available in your location. Use this endpoint to view all promotional offers and special discounts for your customers.
   */
  async listCoupons(
    params: {
      altId: string;
      altType: string;
      limit?: number;
      offset?: number;
      status?: string;
      search?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.ListCouponsResponseDto> {
    let url = '/payments/coupon/list';
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
      if (params.status !== undefined) {
        queryParams['status'] = params.status;
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

    const response: AxiosResponse<Models.ListCouponsResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Coupon
   * The &quot;Create Coupon&quot; API allows you to create a new promotional coupon with customizable parameters such as discount amount, validity period, usage limits, and applicable products. Use this endpoint to set up promotional offers and special discounts for your customers.
   */
  async createCoupon(
    requestBody: Models.CreateCouponParams,
    options?: AxiosRequestConfig
  ): Promise<Models.CreateCouponResponseDto> {
    let url = '/payments/coupon';
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

    const response: AxiosResponse<Models.CreateCouponResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Coupon
   * The &quot;Update Coupon&quot; API enables you to modify existing coupon details such as discount values, validity periods, usage limits, and other promotional parameters. Use this endpoint to adjust or extend promotional offers for your customers.
   */
  async updateCoupon(
    requestBody: Models.UpdateCouponParams,
    options?: AxiosRequestConfig
  ): Promise<Models.CreateCouponResponseDto> {
    let url = '/payments/coupon';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    

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

    const response: AxiosResponse<Models.CreateCouponResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Coupon
   * The &quot;Delete Coupon&quot; API allows you to permanently remove a coupon from your system using its unique identifier. Use this endpoint to discontinue promotional offers or clean up unused coupons. Note that this action cannot be undone.
   */
  async deleteCoupon(
    requestBody: Models.DeleteCouponParams,
    options?: AxiosRequestConfig
  ): Promise<Models.DeleteCouponResponseDto> {
    let url = '/payments/coupon';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    

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

    const response: AxiosResponse<Models.DeleteCouponResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Fetch Coupon
   * The &quot;Get Coupon Details&quot; API enables you to retrieve comprehensive information about a specific coupon using either its unique identifier or promotional code. Use this endpoint to view coupon parameters, usage statistics, validity periods, and other promotional details.
   */
  async getCoupon(
    params: {
      altId: string;
      altType: string;
      id: string;
      code: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.CreateCouponResponseDto> {
    let url = '/payments/coupon';
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
      if (params.id !== undefined) {
        queryParams['id'] = params.id;
      }
      if (params.code !== undefined) {
        queryParams['code'] = params.code;
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

    const response: AxiosResponse<Models.CreateCouponResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create new integration
   * API to create a new association for an app and location
   */
  async createIntegration(
    params: {
      locationId: string;
    },
    requestBody: Models.CreateCustomProvidersDto,
    options?: AxiosRequestConfig
  ): Promise<Models.CreateCustomProvidersResponseSchema> {
    let url = '/payments/custom-provider/provider';
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

    const response: AxiosResponse<Models.CreateCustomProvidersResponseSchema> = await this.client.request(config);
    return response.data;
  }

  /**
   * Deleting an existing integration
   * API to delete an association for an app and location
   */
  async deleteIntegration(
    params: {
      locationId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.DeleteCustomProvidersResponseSchema> {
    let url = '/payments/custom-provider/provider';
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

    const response: AxiosResponse<Models.DeleteCustomProvidersResponseSchema> = await this.client.request(config);
    return response.data;
  }

  /**
   * Fetch given provider config
   * API for fetching an existing payment config for given location
   */
  async fetchConfig(
    params: {
      locationId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetCustomProvidersResponseSchema> {
    let url = '/payments/custom-provider/connect';
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

    const response: AxiosResponse<Models.GetCustomProvidersResponseSchema> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create new provider config
   * API to create a new payment config for given location
   */
  async createConfig(
    params: {
      locationId: string;
    },
    requestBody: Models.ConnectCustomProvidersConfigDto,
    options?: AxiosRequestConfig
  ): Promise<Models.ConnectCustomProvidersResponseSchema> {
    let url = '/payments/custom-provider/connect';
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

    const response: AxiosResponse<Models.ConnectCustomProvidersResponseSchema> = await this.client.request(config);
    return response.data;
  }

  /**
   * Disconnect existing provider config
   * API to disconnect an existing payment config for given location
   */
  async disconnectConfig(
    params: {
      locationId: string;
    },
    requestBody: Models.DeleteCustomProvidersConfigDto,
    options?: AxiosRequestConfig
  ): Promise<Models.DisconnectCustomProvidersResponseSchema> {
    let url = '/payments/custom-provider/disconnect';
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

    const response: AxiosResponse<Models.DisconnectCustomProvidersResponseSchema> = await this.client.request(config);
    return response.data;
  }

}

export default Payments; 