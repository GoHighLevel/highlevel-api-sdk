import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/companies';
import { buildUrl, extractParams, getAuthToken } from '../../utils/request-utils';

/**
 * Companies Service
 * Documentation for Companies API
 */
export class Companies {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Get Company
   * Get Comapny
   */
  async getCompany(
    params: {
      companyId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetCompanyByIdSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'companyId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/companies/{companyId}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.GetCompanyByIdSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

}

export default Companies; 