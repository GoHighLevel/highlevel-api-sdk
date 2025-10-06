import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/products';
import { buildUrl, extractParams, getAuthToken } from '../../utils/request-utils';

/**
 * Products Service
 * Documentation for products API
 */
export class Products {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Bulk Update Products
   * API to bulk update products (price, availability, collections, delete)
   */
  async bulkUpdate(
    requestBody: Models.BulkUpdateDto,
    options?: AxiosRequestConfig
  ): Promise<Models.BulkUpdateResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/products/bulk-update', extracted.path),
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

    const response: AxiosResponse<Models.BulkUpdateResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Bulk Edit Products and Prices
   * API to bulk edit products and their associated prices (max 30 entities)
   */
  async bulkEdit(
    requestBody: Models.BulkEditRequestDto,
    options?: AxiosRequestConfig
  ): Promise<Models.BulkEditResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = [];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/products/bulk-update/edit', extracted.path),
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

    const response: AxiosResponse<Models.BulkEditResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Price for a Product
   * The &quot;Create Price for a Product&quot; API allows adding a new price associated with a specific product to the system. Use this endpoint to create a price with the specified details for a particular product. Ensure that the required information is provided in the request payload.
   */
  async createPriceForProduct(
    params: {
      productId: string;
    },
    requestBody: Models.CreatePriceDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.CreatePriceResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'productId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/products/{productId}/price', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, requestBody, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.CreatePriceResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * List Prices for a Product
   * The &quot;List Prices for a Product&quot; API allows retrieving a paginated list of prices associated with a specific product. Customize your results by filtering prices or paginate through the list using the provided query parameters.
   */
  async listPricesForProduct(
    params: {
      productId: string;
      limit?: number;
      offset?: number;
      locationId: string;
      ids?: string;
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.ListPricesResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'productId', in: 'path'},{name: 'limit', in: 'query'},{name: 'offset', in: 'query'},{name: 'locationId', in: 'query'},{name: 'ids', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/products/{productId}/price', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {}, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.ListPricesResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * List Inventory
   * The &quot;List Inventory API allows the user to retrieve a paginated list of inventory items. Use this endpoint to fetch details for multiple items in the inventory based on the provided query parameters.
   */
  async getListInventory(
    params: {
      limit?: number;
      offset?: number;
      altId: string;
      altType: string;
      search?: string;
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.GetInventoryResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'limit', in: 'query'},{name: 'offset', in: 'query'},{name: 'altId', in: 'query'},{name: 'altType', in: 'query'},{name: 'search', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/products/inventory', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {}, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.GetInventoryResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Inventory
   * The Update Inventory API allows the user to bulk update the inventory for multiple items. Use this endpoint to update the available quantity and out-of-stock purchase settings for multiple items in the inventory.
   */
  async updateInventory(
    requestBody: Models.UpdateInventoryDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.UpdateInventoryResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/products/inventory', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, requestBody, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.UpdateInventoryResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Price by ID for a Product
   * The &quot;Get Price by ID for a Product&quot; API allows retrieving information for a specific price associated with a particular product using its unique identifier. Use this endpoint to fetch details for a single price based on the provided price ID and product ID.
   */
  async getPriceByIdForProduct(
    params: {
      productId: string;
      priceId: string;
      locationId: string;
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.GetPriceResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'productId', in: 'path'},{name: 'priceId', in: 'path'},{name: 'locationId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/products/{productId}/price/{priceId}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {}, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.GetPriceResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Price by ID for a Product
   * The &quot;Update Price by ID for a Product&quot; API allows modifying information for a specific price associated with a particular product using its unique identifier. Use this endpoint to update details for a single price based on the provided price ID and product ID.
   */
  async updatePriceByIdForProduct(
    params: {
      productId: string;
      priceId: string;
    },
    requestBody: Models.UpdatePriceDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.UpdatePriceResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'productId', in: 'path'},{name: 'priceId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'PUT',
      url: buildUrl('/products/{productId}/price/{priceId}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, requestBody, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.UpdatePriceResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Price by ID for a Product
   * The &quot;Delete Price by ID for a Product&quot; API allows deleting a specific price associated with a particular product using its unique identifier. Use this endpoint to remove a price from the system.
   */
  async deletePriceByIdForProduct(
    params: {
      productId: string;
      priceId: string;
      locationId: string;
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.DeletePriceResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'productId', in: 'path'},{name: 'priceId', in: 'path'},{name: 'locationId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: buildUrl('/products/{productId}/price/{priceId}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {}, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.DeletePriceResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Fetch Product Store Stats
   * API to fetch the total number of products, included in the store, and excluded from the store and other stats
   */
  async getProductStoreStats(
    params: {
      storeId: string;
      altId: string;
      altType: string;
      search?: string;
      collectionIds?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetProductStatsResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'storeId', in: 'path'},{name: 'altId', in: 'query'},{name: 'altType', in: 'query'},{name: 'search', in: 'query'},{name: 'collectionIds', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/products/store/{storeId}/stats', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.GetProductStatsResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Action to include/exclude the product in store
   * API to update the status of products in a particular store
   */
  async updateStoreStatus(
    params: {
      storeId: string;
    },
    requestBody: Models.UpdateProductStoreDto,
    options?: AxiosRequestConfig
  ): Promise<Models.UpdateProductStoreResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'storeId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/products/store/{storeId}', extracted.path),
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

    const response: AxiosResponse<Models.UpdateProductStoreResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update product display priorities in store
   * API to set the display priority of products in a store
   */
  async updateDisplayPriority(
    params: {
      storeId: string;
    },
    requestBody: Models.UpdateDisplayPriorityBodyDto,
    options?: AxiosRequestConfig
  ): Promise<any> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'storeId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/products/store/{storeId}/priority', extracted.path),
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

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * Fetch Product Collections
   * Internal API to fetch the Product Collections
   */
  async getProductCollection(
    params: {
      limit?: number;
      offset?: number;
      altId: string;
      altType: string;
      collectionIds?: string;
      name?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.ListCollectionResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'limit', in: 'query'},{name: 'offset', in: 'query'},{name: 'altId', in: 'query'},{name: 'altType', in: 'query'},{name: 'collectionIds', in: 'query'},{name: 'name', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/products/collections', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.ListCollectionResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Product Collection
   * Create a new Product Collection for a specific location
   */
  async createProductCollection(
    requestBody: Models.CreateProductCollectionsDto,
    options?: AxiosRequestConfig
  ): Promise<Models.CreateCollectionResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/products/collections', extracted.path),
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

    const response: AxiosResponse<Models.CreateCollectionResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Details about individual product collection
   * Get Details about individual product collection
   */
  async getProductCollectionId(
    params: {
      collectionId: string;
      altId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.DefaultCollectionResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'collectionId', in: 'path'},{name: 'altId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/products/collections/{collectionId}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.DefaultCollectionResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Product Collection
   * Update a specific product collection with Id :collectionId
   */
  async updateProductCollection(
    params: {
      collectionId: string;
    },
    requestBody: Models.UpdateProductCollectionsDto,
    options?: AxiosRequestConfig
  ): Promise<Models.UpdateProductCollectionResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'collectionId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'PUT',
      url: buildUrl('/products/collections/{collectionId}', extracted.path),
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

    const response: AxiosResponse<Models.UpdateProductCollectionResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Product Collection
   * Delete specific product collection with Id :collectionId
   */
  async deleteProductCollection(
    params: {
      collectionId: string;
      altId: string;
      altType: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.DeleteProductCollectionResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'collectionId', in: 'path'},{name: 'altId', in: 'query'},{name: 'altType', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: buildUrl('/products/collections/{collectionId}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.DeleteProductCollectionResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Fetch Product Reviews
   * API to fetch the Product Reviews
   */
  async getProductReviews(
    params: {
      altId: string;
      altType: string;
      limit?: number;
      offset?: number;
      sortField?: string;
      sortOrder?: string;
      rating?: number;
      startDate?: string;
      endDate?: string;
      productId?: string;
      storeId?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.ListProductReviewsResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'altId', in: 'query'},{name: 'altType', in: 'query'},{name: 'limit', in: 'query'},{name: 'offset', in: 'query'},{name: 'sortField', in: 'query'},{name: 'sortOrder', in: 'query'},{name: 'rating', in: 'query'},{name: 'startDate', in: 'query'},{name: 'endDate', in: 'query'},{name: 'productId', in: 'query'},{name: 'storeId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/products/reviews', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.ListProductReviewsResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Fetch Review Count as per status
   * API to fetch the Review Count as per status
   */
  async getReviewsCount(
    params: {
      altId: string;
      altType: string;
      rating?: number;
      startDate?: string;
      endDate?: string;
      productId?: string;
      storeId?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.CountReviewsByStatusResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'altId', in: 'query'},{name: 'altType', in: 'query'},{name: 'rating', in: 'query'},{name: 'startDate', in: 'query'},{name: 'endDate', in: 'query'},{name: 'productId', in: 'query'},{name: 'storeId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/products/reviews/count', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.CountReviewsByStatusResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Product Reviews
   * Update status, reply, etc of a particular review
   */
  async updateProductReview(
    params: {
      reviewId: string;
    },
    requestBody: Models.UpdateProductReviewDto,
    options?: AxiosRequestConfig
  ): Promise<Models.UpdateProductReviewsResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'reviewId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'PUT',
      url: buildUrl('/products/reviews/{reviewId}', extracted.path),
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

    const response: AxiosResponse<Models.UpdateProductReviewsResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Product Review
   * Delete specific product review
   */
  async deleteProductReview(
    params: {
      reviewId: string;
      altId: string;
      altType: string;
      productId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.DeleteProductReviewResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'reviewId', in: 'path'},{name: 'altId', in: 'query'},{name: 'altType', in: 'query'},{name: 'productId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: buildUrl('/products/reviews/{reviewId}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.DeleteProductReviewResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Product Reviews
   * Update one or multiple product reviews: status, reply, etc.
   */
  async bulkUpdateProductReview(
    requestBody: Models.UpdateProductReviewsDto,
    options?: AxiosRequestConfig
  ): Promise<Models.UpdateProductReviewsResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/products/reviews/bulk-update', extracted.path),
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

    const response: AxiosResponse<Models.UpdateProductReviewsResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Product by ID
   * The &quot;Get Product by ID&quot; API allows to retrieve information for a specific product using its unique identifier. Use this endpoint to fetch details for a single product based on the provided product ID.
   */
  async getProductById(
    params: {
      productId: string;
      locationId: string;
      sendWishlistStatus?: boolean;
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.GetProductResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'productId', in: 'path'},{name: 'locationId', in: 'query'},{name: 'sendWishlistStatus', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/products/{productId}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {}, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.GetProductResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Product by ID
   * The &quot;Delete Product by ID&quot; API allows deleting a specific product using its unique identifier. Use this endpoint to remove a product from the system.
   */
  async deleteProductById(
    params: {
      productId: string;
      locationId: string;
      sendWishlistStatus?: boolean;
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.DeleteProductResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'productId', in: 'path'},{name: 'locationId', in: 'query'},{name: 'sendWishlistStatus', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: buildUrl('/products/{productId}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {}, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.DeleteProductResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Product by ID
   * The &quot;Update Product by ID&quot; API allows modifying information for a specific product using its unique identifier. Use this endpoint to update details for a single product based on the provided product ID.
   */
  async updateProductById(
    params: {
      productId: string;
    },
    requestBody: Models.UpdateProductDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.UpdateProductResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'productId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'PUT',
      url: buildUrl('/products/{productId}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, requestBody, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.UpdateProductResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Product
   * The &quot;Create Product&quot; API allows adding a new product to the system. Use this endpoint to create a product with the specified details. Ensure that the required information is provided in the request payload.
   */
  async createProduct(
    requestBody: Models.CreateProductDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.CreateProductResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/products/', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, requestBody, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.CreateProductResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * List Products
   * The &quot;List Products&quot; API allows to retrieve a paginated list of products. Customize your results by filtering products based on name or paginate through the list using the provided query parameters. This endpoint provides a straightforward way to explore and retrieve product information.
   */
  async listInvoices(
    params: {
      limit?: number;
      offset?: number;
      locationId: string;
      search?: string;
      collectionIds?: string;
      collectionSlug?: string;
      expand?: string[];
      productIds?: string[];
      storeId?: string;
      includedInStore?: boolean;
      availableInStore?: boolean;
      sortOrder?: string;
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.ListProductsResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'limit', in: 'query'},{name: 'offset', in: 'query'},{name: 'locationId', in: 'query'},{name: 'search', in: 'query'},{name: 'collectionIds', in: 'query'},{name: 'collectionSlug', in: 'query'},{name: 'expand', in: 'query'},{name: 'productIds', in: 'query'},{name: 'storeId', in: 'query'},{name: 'includedInStore', in: 'query'},{name: 'availableInStore', in: 'query'},{name: 'sortOrder', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/products/', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {}, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.ListProductsResponseDto> = await this.client.request(config);
    return response.data;
  }

}

export default Products; 