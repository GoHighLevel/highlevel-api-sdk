import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/users';
import { buildUrl, extractParams, getAuthToken, RequestConfig } from '../../utils/request-utils';

/**
 * Users Service
 * Documentation for users API
 */
export class Users {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Search Users
   * Search Users
   */
  async searchUsers(
    params: {
      companyId: string;
      query?: string;
      skip?: string;
      limit?: string;
      locationId?: string;
      type?: string;
      role?: string;
      ids?: string;
      sort?: string;
      sortDirection?: string;
      enabled2waySync?: boolean;
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.SearchUserSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'companyId', in: 'query'},{name: 'query', in: 'query'},{name: 'skip', in: 'query'},{name: 'limit', in: 'query'},{name: 'locationId', in: 'query'},{name: 'type', in: 'query'},{name: 'role', in: 'query'},{name: 'ids', in: 'query'},{name: 'sort', in: 'query'},{name: 'sortDirection', in: 'query'},{name: 'enabled2waySync', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Agency-Access","Location-Access"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/users/search', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, {}, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.SearchUserSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Filter Users by Email
   * Filter users by company ID, deleted status, and email array
   */
  async filterUsersByEmail(
    requestBody: Models.FilterByEmailDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.SearchUserSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Agency-Access","Location-Access"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/users/search/filter-by-email', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, requestBody, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.SearchUserSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get User
   * Get User
   */
  async getUser(
    params: {
      userId: string;
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.UserSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'userId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Agency-Access","Location-Access"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/users/{userId}', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, {}, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.UserSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update User
   * Update User
   */
  async updateUser(
    requestBody: Models.UpdateUserDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.UserSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Agency-Access","Location-Access"];
    
    const config: RequestConfig = {
      method: 'PUT',
      url: buildUrl('/users/{userId}', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, requestBody, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.UserSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete User
   * Delete User
   */
  async deleteUser(
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.DeleteUserSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Agency-Access","Location-Access"];
    
    const config: RequestConfig = {
      method: 'DELETE',
      url: buildUrl('/users/{userId}', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, {}, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.DeleteUserSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get User by Location
   * Get User by Location
   */
  async getUserByLocation(
    params: {
      locationId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.LocationSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/users/', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.LocationSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create User
   * Create User
   */
  async createUser(
    requestBody: Models.CreateUserDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.UserSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Agency-Access","Location-Access"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/users/', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, requestBody, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.UserSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

}

export default Users; 