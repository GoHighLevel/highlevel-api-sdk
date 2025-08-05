import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/social-planner';

/**
 * SocialPlanner Service
 * Documentation for Social Media Posting API
 */
export class SocialPlanner {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Starts OAuth For Google Account
   * Open the API in a window with appropriate params and headers instead of using the Curl. User is navigated to Google login OAuth screen. On successful login, listen on window object for message where event listener returns data in its callback function. 
  ### Sample code to listen to event data:
    window.addEventListener(&#x27;message&#x27;, 
      function(e) {
        if (e.data &amp;&amp; e.data.page &#x3D;&#x3D;&#x3D; &#x27;social_media_posting&#x27;) {
        const { actionType, page, platform, placement, accountId, reconnectAccounts } &#x3D; e.data
        }
      },
    false)
  ### Event Data Response:
    {
      actionType: string,            Ex: &quot;close&quot; 
      page: string,                  Ex: &quot;social-media-posting&quot; 
      platform: string,              Ex: &quot;google&quot; 
      placement: string,             Ex: &quot;placement&quot; 
      accountId: string,             Ex: &quot;658a9b6833b91e0ecb8f3958&quot; 
      reconnectAccounts: string[]]   Ex: [&quot;658a9b6833b91e0ecb834acd&quot;, &quot;efd2daa9b6833b91e0ecb8f3511&quot;] 
    }
  ### The accountId retrieved from above data can be used to fetch Google account details using below API -
  API: &#x27;/social-media-posting/oauth/google/accounts/:accountId&#x27; 

  Method: GET
   */
  async startGoogleOauth(
    params: {
      locationId: string;
      userId: string;
      page?: string;
      reconnect?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<any> {
    let url = '/social-media-posting/oauth/google/start';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
      if (params.userId !== undefined) {
        queryParams['userId'] = params.userId;
      }
      if (params.page !== undefined) {
        queryParams['page'] = params.page;
      }
      if (params.reconnect !== undefined) {
        queryParams['reconnect'] = params.reconnect;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.userId !== undefined) {
        allParams['userId'] = params.userId;
      }
      if (params.page !== undefined) {
        allParams['page'] = params.page;
      }
      if (params.reconnect !== undefined) {
        allParams['reconnect'] = params.reconnect;
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

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get google business locations
   * Get google business locations
   */
  async getGoogleLocations(
    params: {
      locationId: string;
      accountId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetGoogleLocationResponseDTO> {
    let url = '/social-media-posting/oauth/{locationId}/google/locations/{accountId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        url = url.replace('{' + 'locationId' + '}', encodeURIComponent(String(params.locationId)));
      }
      if (params.accountId !== undefined) {
        url = url.replace('{' + 'accountId' + '}', encodeURIComponent(String(params.accountId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.accountId !== undefined) {
        allParams['accountId'] = params.accountId;
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

    const response: AxiosResponse<Models.GetGoogleLocationResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Set google business locations
   * Set google business locations
   */
  async setGoogleLocations(
    params: {
      locationId: string;
      accountId: string;
    },
    requestBody: Models.AttachGMBLocationDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.SocialMediaGmbAccountResponseDTO> {
    let url = '/social-media-posting/oauth/{locationId}/google/locations/{accountId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        url = url.replace('{' + 'locationId' + '}', encodeURIComponent(String(params.locationId)));
      }
      if (params.accountId !== undefined) {
        url = url.replace('{' + 'accountId' + '}', encodeURIComponent(String(params.accountId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.accountId !== undefined) {
        allParams['accountId'] = params.accountId;
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

    const response: AxiosResponse<Models.SocialMediaGmbAccountResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get posts
   * Get Posts
   */
  async getPosts(
    params: {
      locationId: string;
    },
    requestBody: Models.SearchPostDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.PostSuccessfulResponseDTO> {
    let url = '/social-media-posting/{locationId}/posts/list';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        url = url.replace('{' + 'locationId' + '}', encodeURIComponent(String(params.locationId)));
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

    const response: AxiosResponse<Models.PostSuccessfulResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create post
   * Create posts for all supported platforms. It is possible to create customized posts per channel by using the same platform account IDs in a request and hitting the create post API multiple times with different summaries and account IDs per platform.

The content and media limitations, as well as platform rate limiters corresponding to the respective platforms, are provided in the following reference link:

  Link: [Platform Limitations](https://help.leadconnectorhq.com/support/solutions/articles/48001240003-social-planner-image-video-content-and-api-limitations &quot;Social Planner Help&quot;)
   */
  async createPost(
    params: {
      locationId: string;
    },
    requestBody: Models.CreatePostDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.CreatePostSuccessfulResponseDTO> {
    let url = '/social-media-posting/{locationId}/posts';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        url = url.replace('{' + 'locationId' + '}', encodeURIComponent(String(params.locationId)));
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

    const response: AxiosResponse<Models.CreatePostSuccessfulResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get post
   * Get post
   */
  async getPost(
    params: {
      locationId: string;
      id: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetPostSuccessfulResponseDTO> {
    let url = '/social-media-posting/{locationId}/posts/{id}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        url = url.replace('{' + 'locationId' + '}', encodeURIComponent(String(params.locationId)));
      }
      if (params.id !== undefined) {
        url = url.replace('{' + 'id' + '}', encodeURIComponent(String(params.id)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.id !== undefined) {
        allParams['id'] = params.id;
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

    const response: AxiosResponse<Models.GetPostSuccessfulResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Edit post
   * Create posts for all supported platforms. It is possible to create customized posts per channel by using the same platform account IDs in a request and hitting the create post API multiple times with different summaries and account IDs per platform.

The content and media limitations, as well as platform rate limiters corresponding to the respective platforms, are provided in the following reference link:

  Link: [Platform Limitations](https://help.leadconnectorhq.com/support/solutions/articles/48001240003-social-planner-image-video-content-and-api-limitations &quot;Social Planner Help&quot;)
   */
  async editPost(
    params: {
      locationId: string;
      id: string;
    },
    requestBody: Models.PostCreateRequest,
    options?: AxiosRequestConfig
  ): Promise<Models.UpdatePostSuccessfulResponseDTO> {
    let url = '/social-media-posting/{locationId}/posts/{id}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        url = url.replace('{' + 'locationId' + '}', encodeURIComponent(String(params.locationId)));
      }
      if (params.id !== undefined) {
        url = url.replace('{' + 'id' + '}', encodeURIComponent(String(params.id)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.id !== undefined) {
        allParams['id'] = params.id;
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

    const response: AxiosResponse<Models.UpdatePostSuccessfulResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Post
   * Delete Post
   */
  async deletePost(
    params: {
      locationId: string;
      id: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.DeletePostSuccessfulResponseDTO> {
    let url = '/social-media-posting/{locationId}/posts/{id}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        url = url.replace('{' + 'locationId' + '}', encodeURIComponent(String(params.locationId)));
      }
      if (params.id !== undefined) {
        url = url.replace('{' + 'id' + '}', encodeURIComponent(String(params.id)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.id !== undefined) {
        allParams['id'] = params.id;
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

    const response: AxiosResponse<Models.DeletePostSuccessfulResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Bulk Delete Social Planner Posts
   * Deletes multiple posts based on the provided list of post IDs. 
                  This operation is useful for clearing up large numbers of posts efficiently. 
                  
Note: 
                  
1.The maximum number of posts that can be deleted in a single request is &#x27;50&#x27;.
                  
2.However, It will only get deleted in Highlevel database but still
                   it is recommended to be cautious of this operation.
   */
  async bulkDeleteSocialPlannerPosts(
    requestBody: Models.DeletePostsDto,
    options?: AxiosRequestConfig
  ): Promise<Models.BulkDeleteResponseDto> {
    let url = '/social-media-posting/{locationId}/posts/bulk-delete';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    

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

    const response: AxiosResponse<Models.BulkDeleteResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Accounts
   * Get list of accounts and groups
   */
  async getAccount(
    params: {
      locationId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.AccountsListResponseDTO> {
    let url = '/social-media-posting/{locationId}/accounts';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        url = url.replace('{' + 'locationId' + '}', encodeURIComponent(String(params.locationId)));
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

    const response: AxiosResponse<Models.AccountsListResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Account
   * Delete account and account from group
   */
  async deleteAccount(
    params: {
      locationId: string;
      id: string;
      companyId?: string;
      userId?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.LocationAndAccountDeleteResponseDTO> {
    let url = '/social-media-posting/{locationId}/accounts/{id}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        url = url.replace('{' + 'locationId' + '}', encodeURIComponent(String(params.locationId)));
      }
      if (params.id !== undefined) {
        url = url.replace('{' + 'id' + '}', encodeURIComponent(String(params.id)));
      }
      if (params.companyId !== undefined) {
        queryParams['companyId'] = params.companyId;
      }
      if (params.userId !== undefined) {
        queryParams['userId'] = params.userId;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.id !== undefined) {
        allParams['id'] = params.id;
      }
      if (params.companyId !== undefined) {
        allParams['companyId'] = params.companyId;
      }
      if (params.userId !== undefined) {
        allParams['userId'] = params.userId;
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

    const response: AxiosResponse<Models.LocationAndAccountDeleteResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Starts OAuth For Facebook Account
   * Open the API in a window with appropriate params and headers instead of using the Curl. User is navigated to Facebook login OAuth screen. On successful login, listen on window object for message where event listener returns data in its callback function. 
  ### Sample code to listen to event data:
    window.addEventListener(&#x27;message&#x27;, 
      function(e) {
        if (e.data &amp;&amp; e.data.page &#x3D;&#x3D;&#x3D; &#x27;social_media_posting&#x27;) {
        const { actionType, page, platform, placement, accountId, reconnectAccounts } &#x3D; e.data
        }
      },
    false)
  ### Event Data Response:
    {
      actionType: string,            Ex: &quot;close&quot; 
      page: string,                  Ex: &quot;social-media-posting&quot; 
      platform: string,              Ex: &quot;facebook&quot; 
      placement: string,             Ex: &quot;placement&quot; 
      accountId: string,             Ex: &quot;658a9b6833b91e0ecb8f3958&quot; 
      reconnectAccounts: string[]]   Ex: [&quot;658a9b6833b91e0ecb834acd&quot;, &quot;efd2daa9b6833b91e0ecb8f3511&quot;] 
    }
  ### The accountId retrieved from above data can be used to fetch Facebook account details using below API -
  API: &#x27;/social-media-posting/oauth/facebook/accounts/:accountId&#x27; 

  Method: GET
   */
  async startFacebookOauth(
    params: {
      locationId: string;
      userId: string;
      page?: string;
      reconnect?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<any> {
    let url = '/social-media-posting/oauth/facebook/start';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
      if (params.userId !== undefined) {
        queryParams['userId'] = params.userId;
      }
      if (params.page !== undefined) {
        queryParams['page'] = params.page;
      }
      if (params.reconnect !== undefined) {
        queryParams['reconnect'] = params.reconnect;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.userId !== undefined) {
        allParams['userId'] = params.userId;
      }
      if (params.page !== undefined) {
        allParams['page'] = params.page;
      }
      if (params.reconnect !== undefined) {
        allParams['reconnect'] = params.reconnect;
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

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get facebook pages
   * Get facebook pages
   */
  async getFacebookPageGroup(
    params: {
      locationId: string;
      accountId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetFacebookAccountsResponseDTO> {
    let url = '/social-media-posting/oauth/{locationId}/facebook/accounts/{accountId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        url = url.replace('{' + 'locationId' + '}', encodeURIComponent(String(params.locationId)));
      }
      if (params.accountId !== undefined) {
        url = url.replace('{' + 'accountId' + '}', encodeURIComponent(String(params.accountId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.accountId !== undefined) {
        allParams['accountId'] = params.accountId;
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

    const response: AxiosResponse<Models.GetFacebookAccountsResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Attach facebook pages
   * Attach facebook pages
   */
  async attachFacebookPageGroup(
    params: {
      locationId: string;
      accountId: string;
    },
    requestBody: Models.AttachFBAccountDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.SocialMediaFBAccountResponseDTO> {
    let url = '/social-media-posting/oauth/{locationId}/facebook/accounts/{accountId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        url = url.replace('{' + 'locationId' + '}', encodeURIComponent(String(params.locationId)));
      }
      if (params.accountId !== undefined) {
        url = url.replace('{' + 'accountId' + '}', encodeURIComponent(String(params.accountId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.accountId !== undefined) {
        allParams['accountId'] = params.accountId;
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

    const response: AxiosResponse<Models.SocialMediaFBAccountResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Starts OAuth For Instagram Account
   * Open the API in a window with appropriate params and headers instead of using the Curl. User is navigated to Instagram login OAuth screen. On successful login, listen on window object for message where event listener returns data in its callback function. 
  ### Sample code to listen to event data:
    window.addEventListener(&#x27;message&#x27;, 
      function(e) {
        if (e.data &amp;&amp; e.data.page &#x3D;&#x3D;&#x3D; &#x27;social_media_posting&#x27;) {
        const { actionType, page, platform, placement, accountId, reconnectAccounts } &#x3D; e.data
        }
      },
    false)
  ### Event Data Response:
    {
      actionType: string,            Ex: &quot;close&quot; 
      page: string,                  Ex: &quot;social-media-posting&quot; 
      platform: string,              Ex: &quot;instagram&quot; 
      placement: string,             Ex: &quot;placement&quot; 
      accountId: string,             Ex: &quot;658a9b6833b91e0ecb8f3958&quot; 
      reconnectAccounts: string[]]   Ex: [&quot;658a9b6833b91e0ecb834acd&quot;, &quot;efd2daa9b6833b91e0ecb8f3511&quot;] 
    }
  ### The accountId retrieved from above data can be used to fetch Instagram account details using below API -
  API: &#x27;/social-media-posting/oauth/instagram/accounts/:accountId&#x27; 

  Method: GET
   */
  async startInstagramOauth(
    params: {
      locationId: string;
      userId: string;
      page?: string;
      reconnect?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<any> {
    let url = '/social-media-posting/oauth/instagram/start';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
      if (params.userId !== undefined) {
        queryParams['userId'] = params.userId;
      }
      if (params.page !== undefined) {
        queryParams['page'] = params.page;
      }
      if (params.reconnect !== undefined) {
        queryParams['reconnect'] = params.reconnect;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.userId !== undefined) {
        allParams['userId'] = params.userId;
      }
      if (params.page !== undefined) {
        allParams['page'] = params.page;
      }
      if (params.reconnect !== undefined) {
        allParams['reconnect'] = params.reconnect;
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

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Instagram Professional Accounts
   * Get Instagram Professional Accounts
   */
  async getInstagramPageGroup(
    params: {
      locationId: string;
      accountId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetInstagramAccountsResponseDTO> {
    let url = '/social-media-posting/oauth/{locationId}/instagram/accounts/{accountId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        url = url.replace('{' + 'locationId' + '}', encodeURIComponent(String(params.locationId)));
      }
      if (params.accountId !== undefined) {
        url = url.replace('{' + 'accountId' + '}', encodeURIComponent(String(params.accountId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.accountId !== undefined) {
        allParams['accountId'] = params.accountId;
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

    const response: AxiosResponse<Models.GetInstagramAccountsResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Attach Instagram Professional Accounts
   * Attach Instagram Professional Accounts
   */
  async attachInstagramPageGroup(
    params: {
      locationId: string;
      accountId: string;
    },
    requestBody: Models.AttachIGAccountDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.SocialMediaInstagramAccountResponseDTO> {
    let url = '/social-media-posting/oauth/{locationId}/instagram/accounts/{accountId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        url = url.replace('{' + 'locationId' + '}', encodeURIComponent(String(params.locationId)));
      }
      if (params.accountId !== undefined) {
        url = url.replace('{' + 'accountId' + '}', encodeURIComponent(String(params.accountId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.accountId !== undefined) {
        allParams['accountId'] = params.accountId;
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

    const response: AxiosResponse<Models.SocialMediaInstagramAccountResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Starts OAuth For LinkedIn Account
   * Open the API in a window with appropriate params and headers instead of using the Curl. User is navigated to LinkedIn login OAuth screen. On successful login, listen on window object for message where event listener returns data in its callback function. 
  ### Sample code to listen to event data:
    window.addEventListener(&#x27;message&#x27;, 
      function(e) {
        if (e.data &amp;&amp; e.data.page &#x3D;&#x3D;&#x3D; &#x27;social_media_posting&#x27;) {
        const { actionType, page, platform, placement, accountId, reconnectAccounts } &#x3D; e.data
        }
      },
    false)
  ### Event Data Response:
    {
      actionType: string,            Ex: &quot;close&quot; 
      page: string,                  Ex: &quot;social-media-posting&quot; 
      platform: string,              Ex: &quot;linkedin&quot; 
      placement: string,             Ex: &quot;placement&quot; 
      accountId: string,             Ex: &quot;658a9b6833b91e0ecb8f3958&quot; 
      reconnectAccounts: string[]]   Ex: [&quot;658a9b6833b91e0ecb834acd&quot;, &quot;efd2daa9b6833b91e0ecb8f3511&quot;] 
    }
  ### The accountId retrieved from above data can be used to fetch LinkedIn account details using below API -
  API: &#x27;/social-media-posting/oauth/linkedin/accounts/:accountId&#x27; 

  Method: GET
   */
  async startLinkedinOauth(
    params: {
      locationId: string;
      userId: string;
      page?: string;
      reconnect?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<any> {
    let url = '/social-media-posting/oauth/linkedin/start';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
      if (params.userId !== undefined) {
        queryParams['userId'] = params.userId;
      }
      if (params.page !== undefined) {
        queryParams['page'] = params.page;
      }
      if (params.reconnect !== undefined) {
        queryParams['reconnect'] = params.reconnect;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.userId !== undefined) {
        allParams['userId'] = params.userId;
      }
      if (params.page !== undefined) {
        allParams['page'] = params.page;
      }
      if (params.reconnect !== undefined) {
        allParams['reconnect'] = params.reconnect;
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

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Linkedin pages and profile
   * Get Linkedin pages and profile
   */
  async getLinkedinPageProfile(
    params: {
      locationId: string;
      accountId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetLinkedInAccountsResponseDTO> {
    let url = '/social-media-posting/oauth/{locationId}/linkedin/accounts/{accountId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        url = url.replace('{' + 'locationId' + '}', encodeURIComponent(String(params.locationId)));
      }
      if (params.accountId !== undefined) {
        url = url.replace('{' + 'accountId' + '}', encodeURIComponent(String(params.accountId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.accountId !== undefined) {
        allParams['accountId'] = params.accountId;
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

    const response: AxiosResponse<Models.GetLinkedInAccountsResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Attach linkedin pages and profile
   * Attach linkedin pages and profile
   */
  async attachLinkedinPageProfile(
    params: {
      locationId: string;
      accountId: string;
    },
    requestBody: Models.AttachLinkedinAccountDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.SocialMediaLinkedInAccountResponseDTO> {
    let url = '/social-media-posting/oauth/{locationId}/linkedin/accounts/{accountId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        url = url.replace('{' + 'locationId' + '}', encodeURIComponent(String(params.locationId)));
      }
      if (params.accountId !== undefined) {
        url = url.replace('{' + 'accountId' + '}', encodeURIComponent(String(params.accountId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.accountId !== undefined) {
        allParams['accountId'] = params.accountId;
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

    const response: AxiosResponse<Models.SocialMediaLinkedInAccountResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Starts OAuth For Twitter Account
   * As of December 4, 2024, X (formerly Twitter) is no longer supported. We apologise for any inconvenience.
   */
  async startTwitterOauth(
    params: {
      locationId: string;
      userId: string;
      page?: string;
      reconnect?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<any> {
    let url = '/social-media-posting/oauth/twitter/start';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
      if (params.userId !== undefined) {
        queryParams['userId'] = params.userId;
      }
      if (params.page !== undefined) {
        queryParams['page'] = params.page;
      }
      if (params.reconnect !== undefined) {
        queryParams['reconnect'] = params.reconnect;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.userId !== undefined) {
        allParams['userId'] = params.userId;
      }
      if (params.page !== undefined) {
        allParams['page'] = params.page;
      }
      if (params.reconnect !== undefined) {
        allParams['reconnect'] = params.reconnect;
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

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Twitter profile
   * As of December 4, 2024, X (formerly Twitter) is no longer supported. We apologise for any inconvenience.
   */
  async getTwitterProfile(
    params: {
      locationId: string;
      accountId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetTwitterAccountsResponseDTO> {
    let url = '/social-media-posting/oauth/{locationId}/twitter/accounts/{accountId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = [];
    
    if (params) {
      if (params.locationId !== undefined) {
        url = url.replace('{' + 'locationId' + '}', encodeURIComponent(String(params.locationId)));
      }
      if (params.accountId !== undefined) {
        url = url.replace('{' + 'accountId' + '}', encodeURIComponent(String(params.accountId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.accountId !== undefined) {
        allParams['accountId'] = params.accountId;
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

    const response: AxiosResponse<Models.GetTwitterAccountsResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Attach Twitter profile
   * As of December 4, 2024, X (formerly Twitter) is no longer supported. We apologise for any inconvenience.
   */
  async attachTwitterProfile(
    params: {
      locationId: string;
      accountId: string;
    },
    requestBody: Models.AttachTwitterAccountDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.SocialMediaTwitterAccountResponseDTO> {
    let url = '/social-media-posting/oauth/{locationId}/twitter/accounts/{accountId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = [];
    
    if (params) {
      if (params.locationId !== undefined) {
        url = url.replace('{' + 'locationId' + '}', encodeURIComponent(String(params.locationId)));
      }
      if (params.accountId !== undefined) {
        url = url.replace('{' + 'accountId' + '}', encodeURIComponent(String(params.accountId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.accountId !== undefined) {
        allParams['accountId'] = params.accountId;
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

    const response: AxiosResponse<Models.SocialMediaTwitterAccountResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Upload CSV
   * 
   */
  async uploadCsv(
    params: {
      locationId: string;
    },
    requestBody: any,
    options?: AxiosRequestConfig
  ): Promise<Models.UploadFileResponseDTO> {
    let url = '/social-media-posting/{locationId}/csv';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        url = url.replace('{' + 'locationId' + '}', encodeURIComponent(String(params.locationId)));
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

    const response: AxiosResponse<Models.UploadFileResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Upload Status
   * 
   */
  async getUploadStatus(
    params: {
      locationId: string;
      skip?: string;
      limit?: string;
      includeUsers?: string;
      userId?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetUploadStatusResponseDTO> {
    let url = '/social-media-posting/{locationId}/csv';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        url = url.replace('{' + 'locationId' + '}', encodeURIComponent(String(params.locationId)));
      }
      if (params.skip !== undefined) {
        queryParams['skip'] = params.skip;
      }
      if (params.limit !== undefined) {
        queryParams['limit'] = params.limit;
      }
      if (params.includeUsers !== undefined) {
        queryParams['includeUsers'] = params.includeUsers;
      }
      if (params.userId !== undefined) {
        queryParams['userId'] = params.userId;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.skip !== undefined) {
        allParams['skip'] = params.skip;
      }
      if (params.limit !== undefined) {
        allParams['limit'] = params.limit;
      }
      if (params.includeUsers !== undefined) {
        allParams['includeUsers'] = params.includeUsers;
      }
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

    const response: AxiosResponse<Models.GetUploadStatusResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Set Accounts
   * 
   */
  async setAccounts(
    params: {
      locationId: string;
    },
    requestBody: Models.SetAccountsDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.SetAccountsResponseDTO> {
    let url = '/social-media-posting/{locationId}/set-accounts';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        url = url.replace('{' + 'locationId' + '}', encodeURIComponent(String(params.locationId)));
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

    const response: AxiosResponse<Models.SetAccountsResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get CSV Post
   * 
   */
  async getCsvPost(
    params: {
      locationId: string;
      id: string;
      skip?: string;
      limit?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetCsvPostResponseDTO> {
    let url = '/social-media-posting/{locationId}/csv/{id}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        url = url.replace('{' + 'locationId' + '}', encodeURIComponent(String(params.locationId)));
      }
      if (params.id !== undefined) {
        url = url.replace('{' + 'id' + '}', encodeURIComponent(String(params.id)));
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
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.id !== undefined) {
        allParams['id'] = params.id;
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

    const response: AxiosResponse<Models.GetCsvPostResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Start CSV Finalize
   * 
   */
  async startCsvFinalize(
    params: {
      locationId: string;
      id: string;
    },
    requestBody: Models.CSVDefaultDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.CsvPostStatusResponseDTO> {
    let url = '/social-media-posting/{locationId}/csv/{id}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        url = url.replace('{' + 'locationId' + '}', encodeURIComponent(String(params.locationId)));
      }
      if (params.id !== undefined) {
        url = url.replace('{' + 'id' + '}', encodeURIComponent(String(params.id)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.id !== undefined) {
        allParams['id'] = params.id;
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

    const response: AxiosResponse<Models.CsvPostStatusResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete CSV
   * 
   */
  async deleteCsv(
    params: {
      locationId: string;
      id: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.DeleteCsvResponseDTO> {
    let url = '/social-media-posting/{locationId}/csv/{id}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        url = url.replace('{' + 'locationId' + '}', encodeURIComponent(String(params.locationId)));
      }
      if (params.id !== undefined) {
        url = url.replace('{' + 'id' + '}', encodeURIComponent(String(params.id)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.id !== undefined) {
        allParams['id'] = params.id;
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

    const response: AxiosResponse<Models.DeleteCsvResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete CSV Post
   * 
   */
  async deleteCsvPost(
    params: {
      locationId: string;
      postId: string;
      csvId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.DeletePostResponseDTO> {
    let url = '/social-media-posting/{locationId}/csv/{csvId}/post/{postId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        url = url.replace('{' + 'locationId' + '}', encodeURIComponent(String(params.locationId)));
      }
      if (params.postId !== undefined) {
        url = url.replace('{' + 'postId' + '}', encodeURIComponent(String(params.postId)));
      }
      if (params.csvId !== undefined) {
        url = url.replace('{' + 'csvId' + '}', encodeURIComponent(String(params.csvId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.postId !== undefined) {
        allParams['postId'] = params.postId;
      }
      if (params.csvId !== undefined) {
        allParams['csvId'] = params.csvId;
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

    const response: AxiosResponse<Models.DeletePostResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Starts OAuth For Tiktok Account
   * Open the API in a window with appropriate params and headers instead of using the Curl. User is navigated to Tiktok login OAuth screen. On successful login, listen on window object for message where event listener returns data in its callback function. 
  ### Sample code to listen to event data:
    window.addEventListener(&#x27;message&#x27;, 
      function(e) {
        if (e.data &amp;&amp; e.data.page &#x3D;&#x3D;&#x3D; &#x27;social_media_posting&#x27;) {
        const { actionType, page, platform, placement, accountId, reconnectAccounts } &#x3D; e.data
        }
      },
    false)
  ### Event Data Response:
    {
      actionType: string,            Ex: &quot;close&quot; 
      page: string,                  Ex: &quot;social-media-posting&quot; 
      platform: string,              Ex: &quot;tiktok&quot; 
      placement: string,             Ex: &quot;placement&quot; 
      accountId: string,             Ex: &quot;658a9b6833b91e0ecb8f3958&quot; 
      reconnectAccounts: string[]]   Ex: [&quot;658a9b6833b91e0ecb834acd&quot;, &quot;efd2daa9b6833b91e0ecb8f3511&quot;] 
    }
  ### The accountId retrieved from above data can be used to fetch Tiktok account details using below API -
  API: &#x27;/social-media-posting/oauth/tiktok/accounts/:accountId&#x27; 

  Method: GET
   */
  async startTiktokOauth(
    params: {
      locationId: string;
      userId: string;
      page?: string;
      reconnect?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<any> {
    let url = '/social-media-posting/oauth/tiktok/start';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
      if (params.userId !== undefined) {
        queryParams['userId'] = params.userId;
      }
      if (params.page !== undefined) {
        queryParams['page'] = params.page;
      }
      if (params.reconnect !== undefined) {
        queryParams['reconnect'] = params.reconnect;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.userId !== undefined) {
        allParams['userId'] = params.userId;
      }
      if (params.page !== undefined) {
        allParams['page'] = params.page;
      }
      if (params.reconnect !== undefined) {
        allParams['reconnect'] = params.reconnect;
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

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Tiktok profile
   * Get Tiktok profile
   */
  async getTiktokProfile(
    params: {
      locationId: string;
      accountId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetTiktokAccountResponseDTO> {
    let url = '/social-media-posting/oauth/{locationId}/tiktok/accounts/{accountId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        url = url.replace('{' + 'locationId' + '}', encodeURIComponent(String(params.locationId)));
      }
      if (params.accountId !== undefined) {
        url = url.replace('{' + 'accountId' + '}', encodeURIComponent(String(params.accountId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.accountId !== undefined) {
        allParams['accountId'] = params.accountId;
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

    const response: AxiosResponse<Models.GetTiktokAccountResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Attach Tiktok profile
   * Attach Tiktok profile
   */
  async attachTiktokProfile(
    params: {
      locationId: string;
      accountId: string;
    },
    requestBody: Models.AttachTiktokAccountDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.SocialMediaTiktokAccountResponseDTO> {
    let url = '/social-media-posting/oauth/{locationId}/tiktok/accounts/{accountId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        url = url.replace('{' + 'locationId' + '}', encodeURIComponent(String(params.locationId)));
      }
      if (params.accountId !== undefined) {
        url = url.replace('{' + 'accountId' + '}', encodeURIComponent(String(params.accountId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.accountId !== undefined) {
        allParams['accountId'] = params.accountId;
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

    const response: AxiosResponse<Models.SocialMediaTiktokAccountResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Starts OAuth For Tiktok Business Account
   * Open the API in a window with appropriate params and headers instead of using the Curl. User is navigated to Tiktok-Business login OAuth screen. On successful login, listen on window object for message where event listener returns data in its callback function. 
  ### Sample code to listen to event data:
    window.addEventListener(&#x27;message&#x27;, 
      function(e) {
        if (e.data &amp;&amp; e.data.page &#x3D;&#x3D;&#x3D; &#x27;social_media_posting&#x27;) {
        const { actionType, page, platform, placement, accountId, reconnectAccounts } &#x3D; e.data
        }
      },
    false)
  ### Event Data Response:
    {
      actionType: string,            Ex: &quot;close&quot; 
      page: string,                  Ex: &quot;social-media-posting&quot; 
      platform: string,              Ex: &quot;tiktok-business&quot; 
      placement: string,             Ex: &quot;placement&quot; 
      accountId: string,             Ex: &quot;658a9b6833b91e0ecb8f3958&quot; 
      reconnectAccounts: string[]]   Ex: [&quot;658a9b6833b91e0ecb834acd&quot;, &quot;efd2daa9b6833b91e0ecb8f3511&quot;] 
    }
  ### The accountId retrieved from above data can be used to fetch Tiktok-Business account details using below API -
  API: &#x27;/social-media-posting/oauth/tiktok-business/accounts/:accountId&#x27; 

  Method: GET
   */
  async startTiktokBusinessOauth(
    params: {
      locationId: string;
      userId: string;
      page?: string;
      reconnect?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<any> {
    let url = '/social-media-posting/oauth/tiktok-business/start';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
      if (params.userId !== undefined) {
        queryParams['userId'] = params.userId;
      }
      if (params.page !== undefined) {
        queryParams['page'] = params.page;
      }
      if (params.reconnect !== undefined) {
        queryParams['reconnect'] = params.reconnect;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.userId !== undefined) {
        allParams['userId'] = params.userId;
      }
      if (params.page !== undefined) {
        allParams['page'] = params.page;
      }
      if (params.reconnect !== undefined) {
        allParams['reconnect'] = params.reconnect;
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

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Tiktok Business profile
   * Get Tiktok Business profile
   */
  async getTiktokBusinessProfile(
    params: {
      locationId: string;
      accountId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetTiktokBusinessAccountResponseDTO> {
    let url = '/social-media-posting/oauth/{locationId}/tiktok-business/accounts/{accountId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        url = url.replace('{' + 'locationId' + '}', encodeURIComponent(String(params.locationId)));
      }
      if (params.accountId !== undefined) {
        url = url.replace('{' + 'accountId' + '}', encodeURIComponent(String(params.accountId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.accountId !== undefined) {
        allParams['accountId'] = params.accountId;
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

    const response: AxiosResponse<Models.GetTiktokBusinessAccountResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get categories by location id
   * 
   */
  async getCategoriesLocationId(
    params: {
      locationId: string;
      searchText?: string;
      limit?: string;
      skip?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetByLocationIdResponseDTO> {
    let url = '/social-media-posting/{locationId}/categories';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        url = url.replace('{' + 'locationId' + '}', encodeURIComponent(String(params.locationId)));
      }
      if (params.searchText !== undefined) {
        queryParams['searchText'] = params.searchText;
      }
      if (params.limit !== undefined) {
        queryParams['limit'] = params.limit;
      }
      if (params.skip !== undefined) {
        queryParams['skip'] = params.skip;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.searchText !== undefined) {
        allParams['searchText'] = params.searchText;
      }
      if (params.limit !== undefined) {
        allParams['limit'] = params.limit;
      }
      if (params.skip !== undefined) {
        allParams['skip'] = params.skip;
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

    const response: AxiosResponse<Models.GetByLocationIdResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get categories by id
   * 
   */
  async getCategoriesId(
    params: {
      id: string;
      locationId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetByIdResponseDTO> {
    let url = '/social-media-posting/{locationId}/categories/{id}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.id !== undefined) {
        url = url.replace('{' + 'id' + '}', encodeURIComponent(String(params.id)));
      }
      if (params.locationId !== undefined) {
        url = url.replace('{' + 'locationId' + '}', encodeURIComponent(String(params.locationId)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.id !== undefined) {
        allParams['id'] = params.id;
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

    const response: AxiosResponse<Models.GetByIdResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get tags by location id
   * 
   */
  async getTagsLocationId(
    params: {
      locationId: string;
      searchText?: string;
      limit?: string;
      skip?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetTagsByLocationIdResponseDTO> {
    let url = '/social-media-posting/{locationId}/tags';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        url = url.replace('{' + 'locationId' + '}', encodeURIComponent(String(params.locationId)));
      }
      if (params.searchText !== undefined) {
        queryParams['searchText'] = params.searchText;
      }
      if (params.limit !== undefined) {
        queryParams['limit'] = params.limit;
      }
      if (params.skip !== undefined) {
        queryParams['skip'] = params.skip;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.searchText !== undefined) {
        allParams['searchText'] = params.searchText;
      }
      if (params.limit !== undefined) {
        allParams['limit'] = params.limit;
      }
      if (params.skip !== undefined) {
        allParams['skip'] = params.skip;
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

    const response: AxiosResponse<Models.GetTagsByLocationIdResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get tags by ids
   * 
   */
  async getTagsByIds(
    params: {
      locationId: string;
    },
    requestBody: Models.UpdateTagDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.GetTagsByIdResponseDTO> {
    let url = '/social-media-posting/{locationId}/tags/details';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        url = url.replace('{' + 'locationId' + '}', encodeURIComponent(String(params.locationId)));
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

    const response: AxiosResponse<Models.GetTagsByIdResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Social Media Statistics
   * Retrieve analytics data for multiple social media accounts. Provides metrics for the last 7 days with comparison to the previous 7 days. Supports filtering by platforms and specific connected accounts.
   */
  async getSocialMediaStatistics(
    params: {
      locationId: string;
    },
    requestBody?: any,
    options?: AxiosRequestConfig
  ): Promise<any> {
    let url = '/social-media-posting/statistics';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = [];
    
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

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

}

export default SocialPlanner; 