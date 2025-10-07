import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/phone-system';
import { buildUrl, extractParams, getAuthToken, RequestConfig } from '../../utils/request-utils';

/**
 * PhoneSystem Service
 * Documentation for Phone System API
 */
export class PhoneSystem {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * List Number Pools
   * Get list of number pools
   */
  async getNumberPoolList(
    params: {
      locationId?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<any> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'},];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/phone-system/number-pools', extracted.path),
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

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * List active numbers
   * Retrieve a paginated list of active phone numbers for a specific location. Supports filtering, pagination, and optional exclusion of number pool assignments.
   */
  async activeNumbers(
    params: {
      locationId: string;
      pageSize?: number;
      page?: number;
      searchFilter?: string;
      skipNumberPool?: boolean;
    },
    options?: AxiosRequestConfig
  ): Promise<any> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'},{name: 'pageSize', in: 'query'},{name: 'page', in: 'query'},{name: 'searchFilter', in: 'query'},{name: 'skipNumberPool', in: 'query'},];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/phone-system/numbers/location/{locationId}', extracted.path),
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

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

}

export default PhoneSystem; 