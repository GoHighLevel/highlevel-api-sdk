import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/blogs';
import { buildUrl, extractParams, getAuthToken } from '../../utils/request-utils';

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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'urlSlug', in: 'query'},{name: 'locationId', in: 'query'},{name: 'postId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/blogs/posts/url-slug-exists', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'PUT',
      url: buildUrl('/blogs/posts/{postId}', extracted.path),
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
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/blogs/posts', extracted.path),
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'},{name: 'limit', in: 'query'},{name: 'offset', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/blogs/authors', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'},{name: 'limit', in: 'query'},{name: 'offset', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/blogs/categories', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'},{name: 'blogId', in: 'query'},{name: 'limit', in: 'query'},{name: 'offset', in: 'query'},{name: 'searchTerm', in: 'query'},{name: 'status', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/blogs/posts/all', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'},{name: 'skip', in: 'query'},{name: 'limit', in: 'query'},{name: 'searchTerm', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/blogs/site/all', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.BlogGetResponseWrapperDTO> = await this.client.request(config);
    return response.data;
  }

}

export default Blogs; 