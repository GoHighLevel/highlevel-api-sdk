import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/blogs';

/**
 * Blogs Service
 * Documentation for Blog public API
 */
export class Blogs {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Check url slug
   * The &quot;Check url slug&quot; API allows check the blog slug validation which is needed before publishing any blog post. Please use blogs/check-slug.readonly. you can find the POST ID from the post edit url.
   */
  async checkUrlSlugExists(
    params: {
      urlSlug: string;
      locationId: string;
      postId?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.UrlSlugCheckResponseDTO> {
    let url = '/blogs/posts/url-slug-exists';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];

    if (params) {
      if (params.urlSlug !== undefined) {
        queryParams['urlSlug'] = params.urlSlug;
      }
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
      if (params.postId !== undefined) {
        queryParams['postId'] = params.postId;
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

    const response: AxiosResponse<Models.UrlSlugCheckResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Blog Post
   * The &quot;Update Blog Post&quot; API allows you update blog post for any given blog site. Please use blogs/post-update.write
   */
  async updateBlogPost(
    requestBody: Models.UpdateBlogPostParams,
    options?: AxiosRequestConfig
  ): Promise<Models.BlogPostUpdateResponseWrapperDTO> {
    let url = '/blogs/posts/{postId}';
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

    const response: AxiosResponse<Models.BlogPostUpdateResponseWrapperDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Blog Post
   * The &quot;Create Blog Post&quot; API allows you create blog post for any given blog site. Please use blogs/post.write
   */
  async createBlogPost(
    requestBody: Models.CreateBlogPostParams,
    options?: AxiosRequestConfig
  ): Promise<Models.BlogPostCreateResponseWrapperDTO> {
    let url = '/blogs/posts';
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

    const response: AxiosResponse<Models.BlogPostCreateResponseWrapperDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get all authors
   * The &quot;Get all authors&quot; Api return the blog authors for a given location ID. Please use &quot;blogs/author.readonly&quot; 
   */
  async getAllBlogAuthorsByLocation(
    params: {
      locationId: string;
      limit: number;
      offset: number;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.AuthorsResponseDTO> {
    let url = '/blogs/authors';
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

    const response: AxiosResponse<Models.AuthorsResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get all categories
   * The &quot;Get all categories&quot; Api return the blog categoies for a given location ID. Please use &quot;blogs/category.readonly&quot; 
   */
  async getAllCategoriesByLocation(
    params: {
      locationId: string;
      limit: number;
      offset: number;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.CategoriesResponseDTO> {
    let url = '/blogs/categories';
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

    const response: AxiosResponse<Models.CategoriesResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Blog posts by Blog ID
   * The &quot;Get Blog posts by Blog ID&quot; API allows you get blog posts for any given blog site using blog ID.Please use blogs/posts.readonly
   */
  async getBlogPost(
    params: {
      locationId: string;
      blogId: string;
      limit: number;
      offset: number;
      searchTerm?: string;
      status?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.BlogPostGetResponseWrapperDTO> {
    let url = '/blogs/posts/all';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];

    if (params) {
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
      if (params.blogId !== undefined) {
        queryParams['blogId'] = params.blogId;
      }
      if (params.limit !== undefined) {
        queryParams['limit'] = params.limit;
      }
      if (params.offset !== undefined) {
        queryParams['offset'] = params.offset;
      }
      if (params.searchTerm !== undefined) {
        queryParams['searchTerm'] = params.searchTerm;
      }
      if (params.status !== undefined) {
        queryParams['status'] = params.status;
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

    const response: AxiosResponse<Models.BlogPostGetResponseWrapperDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Blogs by Location ID
   * The &quot;Get Blogs by Location ID&quot; API allows you get blogs using Location ID.Please use blogs/list.readonly
   */
  async getBlogs(
    params: {
      locationId: string;
      skip: number;
      limit: number;
      searchTerm?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.BlogGetResponseWrapperDTO> {
    let url = '/blogs/site/all';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];

    if (params) {
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
      if (params.skip !== undefined) {
        queryParams['skip'] = params.skip;
      }
      if (params.limit !== undefined) {
        queryParams['limit'] = params.limit;
      }
      if (params.searchTerm !== undefined) {
        queryParams['searchTerm'] = params.searchTerm;
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

    const response: AxiosResponse<Models.BlogGetResponseWrapperDTO> = await this.client.request(config);
    return response.data;
  }

}

export default Blogs; 