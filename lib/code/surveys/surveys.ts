import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/surveys';

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
    let url = '/surveys/submissions';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
      if (params.page !== undefined) {
        queryParams['page'] = params.page;
      }
      if (params.limit !== undefined) {
        queryParams['limit'] = params.limit;
      }
      if (params.surveyId !== undefined) {
        queryParams['surveyId'] = params.surveyId;
      }
      if (params.q !== undefined) {
        queryParams['q'] = params.q;
      }
      if (params.startAt !== undefined) {
        queryParams['startAt'] = params.startAt;
      }
      if (params.endAt !== undefined) {
        queryParams['endAt'] = params.endAt;
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
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          queryParams,
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
    let url = '/surveys/';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
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
      if (params.type !== undefined) {
        queryParams['type'] = params.type;
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
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          queryParams,
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

    const response: AxiosResponse<Models.GetSurveysSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

}

export default Surveys; 