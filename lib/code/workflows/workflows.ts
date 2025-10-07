import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/workflows';
import { buildUrl, extractParams, getAuthToken, RequestConfig } from '../../utils/request-utils';

/**
 * Workflows Service
 * Documentation for workflows API
 */
export class Workflows {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Get Workflow
   * Get Workflow
   */
  async getWorkflow(
    params: {
      locationId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetWorkflowSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/workflows/', extracted.path),
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

    const response: AxiosResponse<Models.GetWorkflowSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

}

export default Workflows; 