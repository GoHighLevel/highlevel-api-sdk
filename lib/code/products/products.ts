import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/products';

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
    let url = '/products/bulk-update';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    

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

    const response: AxiosResponse<Models.BulkUpdateResponseDto> = await this.client.request(config);
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
    let url = '/products/{productId}/price';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];
    
    if (params) {
      if (params.productId !== undefined) {
        url = url.replace('{' + 'productId' + '}', encodeURIComponent(String(params.productId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.productId !== undefined) {
        allParams['productId'] = params.productId;
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
    let url = '/products/{productId}/price';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];
    
    if (params) {
      if (params.productId !== undefined) {
        url = url.replace('{' + 'productId' + '}', encodeURIComponent(String(params.productId)));
      }
      if (params.limit !== undefined) {
        queryParams['limit'] = params.limit;
      }
      if (params.offset !== undefined) {
        queryParams['offset'] = params.offset;
      }
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
      if (params.ids !== undefined) {
        queryParams['ids'] = params.ids;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.productId !== undefined) {
        allParams['productId'] = params.productId;
      }
      if (params.limit !== undefined) {
        allParams['limit'] = params.limit;
      }
      if (params.offset !== undefined) {
        allParams['offset'] = params.offset;
      }
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.ids !== undefined) {
        allParams['ids'] = params.ids;
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
    let url = '/products/inventory';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];
    
    if (params) {
      if (params.limit !== undefined) {
        queryParams['limit'] = params.limit;
      }
      if (params.offset !== undefined) {
        queryParams['offset'] = params.offset;
      }
      if (params.altId !== undefined) {
        queryParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        queryParams['altType'] = params.altType;
      }
      if (params.search !== undefined) {
        queryParams['search'] = params.search;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.limit !== undefined) {
        allParams['limit'] = params.limit;
      }
      if (params.offset !== undefined) {
        allParams['offset'] = params.offset;
      }
      if (params.altId !== undefined) {
        allParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        allParams['altType'] = params.altType;
      }
      if (params.search !== undefined) {
        allParams['search'] = params.search;
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
    let url = '/products/inventory';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];
    

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
    let url = '/products/{productId}/price/{priceId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];
    
    if (params) {
      if (params.productId !== undefined) {
        url = url.replace('{' + 'productId' + '}', encodeURIComponent(String(params.productId)));
      }
      if (params.priceId !== undefined) {
        url = url.replace('{' + 'priceId' + '}', encodeURIComponent(String(params.priceId)));
      }
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.productId !== undefined) {
        allParams['productId'] = params.productId;
      }
      if (params.priceId !== undefined) {
        allParams['priceId'] = params.priceId;
      }
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
    let url = '/products/{productId}/price/{priceId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];
    
    if (params) {
      if (params.productId !== undefined) {
        url = url.replace('{' + 'productId' + '}', encodeURIComponent(String(params.productId)));
      }
      if (params.priceId !== undefined) {
        url = url.replace('{' + 'priceId' + '}', encodeURIComponent(String(params.priceId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.productId !== undefined) {
        allParams['productId'] = params.productId;
      }
      if (params.priceId !== undefined) {
        allParams['priceId'] = params.priceId;
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
    let url = '/products/{productId}/price/{priceId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];
    
    if (params) {
      if (params.productId !== undefined) {
        url = url.replace('{' + 'productId' + '}', encodeURIComponent(String(params.productId)));
      }
      if (params.priceId !== undefined) {
        url = url.replace('{' + 'priceId' + '}', encodeURIComponent(String(params.priceId)));
      }
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.productId !== undefined) {
        allParams['productId'] = params.productId;
      }
      if (params.priceId !== undefined) {
        allParams['priceId'] = params.priceId;
      }
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
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
    let url = '/products/store/{storeId}/stats';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    
    if (params) {
      if (params.storeId !== undefined) {
        url = url.replace('{' + 'storeId' + '}', encodeURIComponent(String(params.storeId)));
      }
      if (params.altId !== undefined) {
        queryParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        queryParams['altType'] = params.altType;
      }
      if (params.search !== undefined) {
        queryParams['search'] = params.search;
      }
      if (params.collectionIds !== undefined) {
        queryParams['collectionIds'] = params.collectionIds;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.storeId !== undefined) {
        allParams['storeId'] = params.storeId;
      }
      if (params.altId !== undefined) {
        allParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        allParams['altType'] = params.altType;
      }
      if (params.search !== undefined) {
        allParams['search'] = params.search;
      }
      if (params.collectionIds !== undefined) {
        allParams['collectionIds'] = params.collectionIds;
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
    let url = '/products/store/{storeId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    
    if (params) {
      if (params.storeId !== undefined) {
        url = url.replace('{' + 'storeId' + '}', encodeURIComponent(String(params.storeId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.storeId !== undefined) {
        allParams['storeId'] = params.storeId;
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

    const response: AxiosResponse<Models.UpdateProductStoreResponseDto> = await this.client.request(config);
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
    let url = '/products/collections';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    
    if (params) {
      if (params.limit !== undefined) {
        queryParams['limit'] = params.limit;
      }
      if (params.offset !== undefined) {
        queryParams['offset'] = params.offset;
      }
      if (params.altId !== undefined) {
        queryParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        queryParams['altType'] = params.altType;
      }
      if (params.collectionIds !== undefined) {
        queryParams['collectionIds'] = params.collectionIds;
      }
      if (params.name !== undefined) {
        queryParams['name'] = params.name;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.limit !== undefined) {
        allParams['limit'] = params.limit;
      }
      if (params.offset !== undefined) {
        allParams['offset'] = params.offset;
      }
      if (params.altId !== undefined) {
        allParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        allParams['altType'] = params.altType;
      }
      if (params.collectionIds !== undefined) {
        allParams['collectionIds'] = params.collectionIds;
      }
      if (params.name !== undefined) {
        allParams['name'] = params.name;
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
    let url = '/products/collections';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    

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
    },
    options?: AxiosRequestConfig
  ): Promise<Models.DefaultCollectionResponseDto> {
    let url = '/products/collections/{collectionId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    
    if (params) {
      if (params.collectionId !== undefined) {
        url = url.replace('{' + 'collectionId' + '}', encodeURIComponent(String(params.collectionId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.collectionId !== undefined) {
        allParams['collectionId'] = params.collectionId;
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
    let url = '/products/collections/{collectionId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    
    if (params) {
      if (params.collectionId !== undefined) {
        url = url.replace('{' + 'collectionId' + '}', encodeURIComponent(String(params.collectionId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.collectionId !== undefined) {
        allParams['collectionId'] = params.collectionId;
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
    let url = '/products/collections/{collectionId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    
    if (params) {
      if (params.collectionId !== undefined) {
        url = url.replace('{' + 'collectionId' + '}', encodeURIComponent(String(params.collectionId)));
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
      if (params.collectionId !== undefined) {
        allParams['collectionId'] = params.collectionId;
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
    let url = '/products/reviews';
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
      if (params.sortField !== undefined) {
        queryParams['sortField'] = params.sortField;
      }
      if (params.sortOrder !== undefined) {
        queryParams['sortOrder'] = params.sortOrder;
      }
      if (params.rating !== undefined) {
        queryParams['rating'] = params.rating;
      }
      if (params.startDate !== undefined) {
        queryParams['startDate'] = params.startDate;
      }
      if (params.endDate !== undefined) {
        queryParams['endDate'] = params.endDate;
      }
      if (params.productId !== undefined) {
        queryParams['productId'] = params.productId;
      }
      if (params.storeId !== undefined) {
        queryParams['storeId'] = params.storeId;
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
      if (params.sortField !== undefined) {
        allParams['sortField'] = params.sortField;
      }
      if (params.sortOrder !== undefined) {
        allParams['sortOrder'] = params.sortOrder;
      }
      if (params.rating !== undefined) {
        allParams['rating'] = params.rating;
      }
      if (params.startDate !== undefined) {
        allParams['startDate'] = params.startDate;
      }
      if (params.endDate !== undefined) {
        allParams['endDate'] = params.endDate;
      }
      if (params.productId !== undefined) {
        allParams['productId'] = params.productId;
      }
      if (params.storeId !== undefined) {
        allParams['storeId'] = params.storeId;
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
    let url = '/products/reviews/count';
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
      if (params.rating !== undefined) {
        queryParams['rating'] = params.rating;
      }
      if (params.startDate !== undefined) {
        queryParams['startDate'] = params.startDate;
      }
      if (params.endDate !== undefined) {
        queryParams['endDate'] = params.endDate;
      }
      if (params.productId !== undefined) {
        queryParams['productId'] = params.productId;
      }
      if (params.storeId !== undefined) {
        queryParams['storeId'] = params.storeId;
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
      if (params.rating !== undefined) {
        allParams['rating'] = params.rating;
      }
      if (params.startDate !== undefined) {
        allParams['startDate'] = params.startDate;
      }
      if (params.endDate !== undefined) {
        allParams['endDate'] = params.endDate;
      }
      if (params.productId !== undefined) {
        allParams['productId'] = params.productId;
      }
      if (params.storeId !== undefined) {
        allParams['storeId'] = params.storeId;
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
    let url = '/products/reviews/{reviewId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    
    if (params) {
      if (params.reviewId !== undefined) {
        url = url.replace('{' + 'reviewId' + '}', encodeURIComponent(String(params.reviewId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.reviewId !== undefined) {
        allParams['reviewId'] = params.reviewId;
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
    let url = '/products/reviews/{reviewId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    
    if (params) {
      if (params.reviewId !== undefined) {
        url = url.replace('{' + 'reviewId' + '}', encodeURIComponent(String(params.reviewId)));
      }
      if (params.altId !== undefined) {
        queryParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        queryParams['altType'] = params.altType;
      }
      if (params.productId !== undefined) {
        queryParams['productId'] = params.productId;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.reviewId !== undefined) {
        allParams['reviewId'] = params.reviewId;
      }
      if (params.altId !== undefined) {
        allParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        allParams['altType'] = params.altType;
      }
      if (params.productId !== undefined) {
        allParams['productId'] = params.productId;
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
    let url = '/products/reviews/bulk-update';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    

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
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.GetProductResponseDto> {
    let url = '/products/{productId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];
    
    if (params) {
      if (params.productId !== undefined) {
        url = url.replace('{' + 'productId' + '}', encodeURIComponent(String(params.productId)));
      }
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.productId !== undefined) {
        allParams['productId'] = params.productId;
      }
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
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.DeleteProductResponseDto> {
    let url = '/products/{productId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];
    
    if (params) {
      if (params.productId !== undefined) {
        url = url.replace('{' + 'productId' + '}', encodeURIComponent(String(params.productId)));
      }
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.productId !== undefined) {
        allParams['productId'] = params.productId;
      }
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
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
    let url = '/products/{productId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];
    
    if (params) {
      if (params.productId !== undefined) {
        url = url.replace('{' + 'productId' + '}', encodeURIComponent(String(params.productId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.productId !== undefined) {
        allParams['productId'] = params.productId;
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
    let url = '/products/';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];
    

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
    let url = '/products/';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];
    
    if (params) {
      if (params.limit !== undefined) {
        queryParams['limit'] = params.limit;
      }
      if (params.offset !== undefined) {
        queryParams['offset'] = params.offset;
      }
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
      if (params.search !== undefined) {
        queryParams['search'] = params.search;
      }
      if (params.collectionIds !== undefined) {
        queryParams['collectionIds'] = params.collectionIds;
      }
      if (params.collectionSlug !== undefined) {
        queryParams['collectionSlug'] = params.collectionSlug;
      }
      if (params.expand !== undefined) {
        queryParams['expand'] = params.expand;
      }
      if (params.productIds !== undefined) {
        queryParams['productIds'] = params.productIds;
      }
      if (params.storeId !== undefined) {
        queryParams['storeId'] = params.storeId;
      }
      if (params.includedInStore !== undefined) {
        queryParams['includedInStore'] = params.includedInStore;
      }
      if (params.availableInStore !== undefined) {
        queryParams['availableInStore'] = params.availableInStore;
      }
      if (params.sortOrder !== undefined) {
        queryParams['sortOrder'] = params.sortOrder;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.limit !== undefined) {
        allParams['limit'] = params.limit;
      }
      if (params.offset !== undefined) {
        allParams['offset'] = params.offset;
      }
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.search !== undefined) {
        allParams['search'] = params.search;
      }
      if (params.collectionIds !== undefined) {
        allParams['collectionIds'] = params.collectionIds;
      }
      if (params.collectionSlug !== undefined) {
        allParams['collectionSlug'] = params.collectionSlug;
      }
      if (params.expand !== undefined) {
        allParams['expand'] = params.expand;
      }
      if (params.productIds !== undefined) {
        allParams['productIds'] = params.productIds;
      }
      if (params.storeId !== undefined) {
        allParams['storeId'] = params.storeId;
      }
      if (params.includedInStore !== undefined) {
        allParams['includedInStore'] = params.includedInStore;
      }
      if (params.availableInStore !== undefined) {
        allParams['availableInStore'] = params.availableInStore;
      }
      if (params.sortOrder !== undefined) {
        allParams['sortOrder'] = params.sortOrder;
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

    const response: AxiosResponse<Models.ListProductsResponseDto> = await this.client.request(config);
    return response.data;
  }

}

export default Products; 