import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/workflows';

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
    let url = '/workflows/';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
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

    const response: AxiosResponse<Models.GetWorkflowSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

}

export default Workflows; 