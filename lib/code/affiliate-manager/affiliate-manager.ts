import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/affiliate-manager';
import { buildUrl, extractParams, getAuthToken, RequestConfig } from '../../utils/request-utils';

/**
 * AffiliateManager Service
 * Documentation for Affiliate Manager API
 */
export class AffiliateManager {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * List Affiliates
   * Retrieve the list of affiliates for a location.
   */
  async listAffiliates(
    params: {
      locationId: string;
      query?: string;
      active?: string;
      campaignId?: string;
      skip?: number;
      limit?: number;
      fromDate?: string;
      toDate?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.ListAffiliatesResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'},{name: 'query', in: 'query'},{name: 'active', in: 'query'},{name: 'campaignId', in: 'query'},{name: 'skip', in: 'query'},{name: 'limit', in: 'query'},{name: 'fromDate', in: 'query'},{name: 'toDate', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/affiliate-manager/{locationId}/affiliates', extracted.path),
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

    const response: AxiosResponse<Models.ListAffiliatesResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Affiliate
   * Retrieve a single affiliate by id for a location.
   */
  async getAffiliate(
    params: {
      locationId: string;
      affiliateId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetAffiliateResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'},{name: 'affiliateId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/affiliate-manager/{locationId}/affiliates/{affiliateId}', extracted.path),
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

    const response: AxiosResponse<Models.GetAffiliateResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * List Payouts
   * Retrieve the list of payouts for a location.
   */
  async listPayouts(
    params: {
      locationId: string;
      status?: string;
      query?: string;
      affiliateId?: string;
      campaignId?: string;
      skip?: number;
      limit?: number;
      start?: string;
      end?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetPayoutListResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'},{name: 'status', in: 'query'},{name: 'query', in: 'query'},{name: 'affiliateId', in: 'query'},{name: 'campaignId', in: 'query'},{name: 'skip', in: 'query'},{name: 'limit', in: 'query'},{name: 'start', in: 'query'},{name: 'end', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/affiliate-manager/{locationId}/payouts', extracted.path),
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

    const response: AxiosResponse<Models.GetPayoutListResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * List Commissions
   * Retrieve the list of commissions for a location.
   */
  async listCommissions(
    params: {
      locationId: string;
      campaignId?: string;
      affiliateId?: string;
      status?: string;
      query?: string;
      skip?: number;
      limit?: number;
      fromDate?: string;
      toDate?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetCommissionListResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'},{name: 'campaignId', in: 'query'},{name: 'affiliateId', in: 'query'},{name: 'status', in: 'query'},{name: 'query', in: 'query'},{name: 'skip', in: 'query'},{name: 'limit', in: 'query'},{name: 'fromDate', in: 'query'},{name: 'toDate', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/affiliate-manager/{locationId}/commissions', extracted.path),
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

    const response: AxiosResponse<Models.GetCommissionListResponseDto> = await this.client.request(config);
    return response.data;
  }

}

export default AffiliateManager; 