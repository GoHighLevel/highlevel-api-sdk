import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/payments';
import { buildUrl, extractParams, getAuthToken } from '../../utils/request-utils';

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
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/payments/integrations/provider/whitelabel', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, requestBody);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'altId', in: 'query'},{name: 'altType', in: 'query'},{name: 'limit', in: 'query'},{name: 'offset', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/payments/integrations/provider/whitelabel', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'},{name: 'altId', in: 'query'},{name: 'altType', in: 'query'},{name: 'status', in: 'query'},{name: 'paymentMode', in: 'query'},{name: 'startAt', in: 'query'},{name: 'endAt', in: 'query'},{name: 'search', in: 'query'},{name: 'contactId', in: 'query'},{name: 'funnelProductIds', in: 'query'},{name: 'limit', in: 'query'},{name: 'offset', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/payments/orders', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetOrderResponseSchema> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'orderId', in: 'path'},{name: 'locationId', in: 'query'},{name: 'altId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/payments/orders/{orderId}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.GetOrderResponseSchema> = await this.client.request(config);
    return response.data;
  }

  /**
   * Record Order Payment
   * The &quot;Record Order Payment&quot; API allows to record a payment for an order. Use this endpoint to record payment for an order and update the order status to &quot;Paid&quot;.
   */
  async recordOrderPayment(
    params: {
      orderId: string;
    },
    requestBody: Models.PostRecordOrderPaymentBody,
    options?: AxiosRequestConfig
  ): Promise<Models.PostRecordOrderPaymentResponse> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'orderId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/payments/orders/{orderId}/record-payment', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, requestBody);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.PostRecordOrderPaymentResponse> = await this.client.request(config);
    return response.data;
  }

  /**
   * migration Endpoint for Order Payment Status
   * Process to migrate all the older orders and based on the statuses introduce the payment statuses as well
   */
  async postMigrateOrderPaymentStatus(
    params: {
      locationId?: string;
      altId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<any> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'},{name: 'altId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/payments/orders/migrate-order-ps', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<any> = await this.client.request(config);
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'orderId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/payments/orders/{orderId}/fulfillments', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, requestBody);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'altId', in: 'query'},{name: 'altType', in: 'query'},{name: 'orderId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/payments/orders/{orderId}/fulfillments', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.ListFulfillmentResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * List Order Notes
   * List all notes of an order
   */
  async listOrderNotes(
    params: {
      altId: string;
      altType: string;
      orderId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<any> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'altId', in: 'query'},{name: 'altType', in: 'query'},{name: 'orderId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/payments/orders/{orderId}/notes', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<any> = await this.client.request(config);
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'},{name: 'altId', in: 'query'},{name: 'altType', in: 'query'},{name: 'paymentMode', in: 'query'},{name: 'startAt', in: 'query'},{name: 'endAt', in: 'query'},{name: 'entitySourceType', in: 'query'},{name: 'entitySourceSubType', in: 'query'},{name: 'search', in: 'query'},{name: 'subscriptionId', in: 'query'},{name: 'entityId', in: 'query'},{name: 'contactId', in: 'query'},{name: 'limit', in: 'query'},{name: 'offset', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/payments/transactions', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'transactionId', in: 'path'},{name: 'locationId', in: 'query'},{name: 'altId', in: 'query'},{name: 'altType', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/payments/transactions/{transactionId}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'altId', in: 'query'},{name: 'altType', in: 'query'},{name: 'entityId', in: 'query'},{name: 'paymentMode', in: 'query'},{name: 'startAt', in: 'query'},{name: 'endAt', in: 'query'},{name: 'entitySourceType', in: 'query'},{name: 'search', in: 'query'},{name: 'contactId', in: 'query'},{name: 'id', in: 'query'},{name: 'limit', in: 'query'},{name: 'offset', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/payments/subscriptions', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'subscriptionId', in: 'path'},{name: 'altId', in: 'query'},{name: 'altType', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/payments/subscriptions/{subscriptionId}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'altId', in: 'query'},{name: 'altType', in: 'query'},{name: 'limit', in: 'query'},{name: 'offset', in: 'query'},{name: 'status', in: 'query'},{name: 'search', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/payments/coupon/list', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/payments/coupon', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, requestBody);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'PUT',
      url: buildUrl('/payments/coupon', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, requestBody);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: buildUrl('/payments/coupon', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, requestBody);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'altId', in: 'query'},{name: 'altType', in: 'query'},{name: 'id', in: 'query'},{name: 'code', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/payments/coupon', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/payments/custom-provider/provider', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, requestBody);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: buildUrl('/payments/custom-provider/provider', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/payments/custom-provider/connect', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/payments/custom-provider/connect', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, requestBody);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/payments/custom-provider/disconnect', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, requestBody);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.DisconnectCustomProvidersResponseSchema> = await this.client.request(config);
    return response.data;
  }

  /**
   * Custom-provider marketplace app update capabilities
   * Toggle capabilities for the marketplace app tied to the OAuth client
   */
  async customProviderMarketplaceAppUpdateCapabilities(
    requestBody: Models.UpdateCustomProviderCapabilitiesDto,
    options?: AxiosRequestConfig
  ): Promise<Models.UpdateCustomProviderCapabilitiesResponseSchema> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'PUT',
      url: buildUrl('/payments/custom-provider/capabilities', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, requestBody);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.UpdateCustomProviderCapabilitiesResponseSchema> = await this.client.request(config);
    return response.data;
  }

}

export default Payments; 