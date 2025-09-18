import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/proposals';

/**
 * Proposals Service
 * Documentation for Documents and Contracts API
 */
export class Proposals {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * List documents
   * List documents for a location
   */
  async listDocumentsContracts(
    params: {
      locationId: string;
      status?: string;
      paymentStatus?: string;
      limit?: number;
      skip?: number;
      query?: string;
      dateFrom?: string;
      dateTo?: string;
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.DocumentListResponseDto> {
    let url = '/proposals/document';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];
    
    if (params) {
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
      if (params.status !== undefined) {
        queryParams['status'] = params.status;
      }
      if (params.paymentStatus !== undefined) {
        queryParams['paymentStatus'] = params.paymentStatus;
      }
      if (params.limit !== undefined) {
        queryParams['limit'] = params.limit;
      }
      if (params.skip !== undefined) {
        queryParams['skip'] = params.skip;
      }
      if (params.query !== undefined) {
        queryParams['query'] = params.query;
      }
      if (params.dateFrom !== undefined) {
        queryParams['dateFrom'] = params.dateFrom;
      }
      if (params.dateTo !== undefined) {
        queryParams['dateTo'] = params.dateTo;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.status !== undefined) {
        allParams['status'] = params.status;
      }
      if (params.paymentStatus !== undefined) {
        allParams['paymentStatus'] = params.paymentStatus;
      }
      if (params.limit !== undefined) {
        allParams['limit'] = params.limit;
      }
      if (params.skip !== undefined) {
        allParams['skip'] = params.skip;
      }
      if (params.query !== undefined) {
        allParams['query'] = params.query;
      }
      if (params.dateFrom !== undefined) {
        allParams['dateFrom'] = params.dateFrom;
      }
      if (params.dateTo !== undefined) {
        allParams['dateTo'] = params.dateTo;
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
        
        // Combine queryParams with allParams for token resolution
        const combinedQuery = {
          ...queryParams,
          ...allParams
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          combinedQuery,
          {},
          options?.preferredTokenType
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

    const response: AxiosResponse<Models.DocumentListResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Send document
   * Send document to a client
   */
  async sendDocumentsContracts(
    requestBody: Models.SendDocumentDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.SendDocumentResponseDto> {
    let url = '/proposals/document/send';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];
    

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};

    const config: AxiosRequestConfig = {
      method: 'POST',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      data: requestBody,
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
        
        // Combine queryParams with allParams for token resolution
        const combinedQuery = {
          ...queryParams,
          ...allParams
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          combinedQuery,
          requestBody,
          options?.preferredTokenType
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

    const response: AxiosResponse<Models.SendDocumentResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * List templates
   * List document contract templates for a location
   */
  async listDocumentsContractsTemplates(
    params: {
      locationId: string;
      dateFrom?: string;
      dateTo?: string;
      type?: string;
      name?: string;
      isPublicDocument?: boolean;
      userId?: string;
      limit?: string;
      skip?: string;
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.TemplateListPaginationResponseDTO> {
    let url = '/proposals/templates';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];
    
    if (params) {
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
      if (params.dateFrom !== undefined) {
        queryParams['dateFrom'] = params.dateFrom;
      }
      if (params.dateTo !== undefined) {
        queryParams['dateTo'] = params.dateTo;
      }
      if (params.type !== undefined) {
        queryParams['type'] = params.type;
      }
      if (params.name !== undefined) {
        queryParams['name'] = params.name;
      }
      if (params.isPublicDocument !== undefined) {
        queryParams['isPublicDocument'] = params.isPublicDocument;
      }
      if (params.userId !== undefined) {
        queryParams['userId'] = params.userId;
      }
      if (params.limit !== undefined) {
        queryParams['limit'] = params.limit;
      }
      if (params.skip !== undefined) {
        queryParams['skip'] = params.skip;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
      if (params.dateFrom !== undefined) {
        allParams['dateFrom'] = params.dateFrom;
      }
      if (params.dateTo !== undefined) {
        allParams['dateTo'] = params.dateTo;
      }
      if (params.type !== undefined) {
        allParams['type'] = params.type;
      }
      if (params.name !== undefined) {
        allParams['name'] = params.name;
      }
      if (params.isPublicDocument !== undefined) {
        allParams['isPublicDocument'] = params.isPublicDocument;
      }
      if (params.userId !== undefined) {
        allParams['userId'] = params.userId;
      }
      if (params.limit !== undefined) {
        allParams['limit'] = params.limit;
      }
      if (params.skip !== undefined) {
        allParams['skip'] = params.skip;
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
        
        // Combine queryParams with allParams for token resolution
        const combinedQuery = {
          ...queryParams,
          ...allParams
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          combinedQuery,
          {},
          options?.preferredTokenType
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

    const response: AxiosResponse<Models.TemplateListPaginationResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Send template
   * Send template to a client
   */
  async sendDocumentsContractsTemplate(
    requestBody: Models.SendDocumentFromPublicApiBodyDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.SendTemplateResponseDto> {
    let url = '/proposals/templates/send';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];
    

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};

    const config: AxiosRequestConfig = {
      method: 'POST',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      data: requestBody,
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
        
        // Combine queryParams with allParams for token resolution
        const combinedQuery = {
          ...queryParams,
          ...allParams
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          combinedQuery,
          requestBody,
          options?.preferredTokenType
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

    const response: AxiosResponse<Models.SendTemplateResponseDto> = await this.client.request(config);
    return response.data;
  }

}

export default Proposals; 