import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/campaigns';
import { buildUrl, extractParams, getAuthToken } from '../../utils/request-utils';

/**
 * Campaigns Service
 * Documentation for campaigns API
 */
export class Campaigns {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Get Campaigns
   * Get Campaigns
   */
  async getCampaigns(
    params: {
      locationId: string;
      status?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.CampaignsSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'},{name: 'status', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/campaigns/', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.CampaignsSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

}

export default Campaigns; 