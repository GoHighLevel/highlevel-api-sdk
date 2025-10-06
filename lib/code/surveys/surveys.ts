import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/surveys';
import { buildUrl, extractParams, getAuthToken } from '../../utils/request-utils';

/**
 * Surveys Service
 * Documentation for surveys API
 */
export class Surveys {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Get Surveys Submissions
   * Get Surveys Submissions
   */
  async getSurveysSubmissions(
    params: {
      locationId: string;
      page?: number;
      limit?: number;
      surveyId?: string;
      q?: string;
      startAt?: string;
      endAt?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetSurveysSubmissionSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'},{name: 'page', in: 'query'},{name: 'limit', in: 'query'},{name: 'surveyId', in: 'query'},{name: 'q', in: 'query'},{name: 'startAt', in: 'query'},{name: 'endAt', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/surveys/submissions', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.GetSurveysSubmissionSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Surveys
   * Get Surveys
   */
  async getSurveys(
    params: {
      locationId: string;
      skip?: number;
      limit?: number;
      type?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetSurveysSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'},{name: 'skip', in: 'query'},{name: 'limit', in: 'query'},{name: 'type', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/surveys/', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.GetSurveysSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

}

export default Surveys; 