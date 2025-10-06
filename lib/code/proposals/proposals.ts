import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/proposals';
import { buildUrl, extractParams, getAuthToken } from '../../utils/request-utils';

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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'},{name: 'status', in: 'query'},{name: 'paymentStatus', in: 'query'},{name: 'limit', in: 'query'},{name: 'skip', in: 'query'},{name: 'query', in: 'query'},{name: 'dateFrom', in: 'query'},{name: 'dateTo', in: 'query'},];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/proposals/document', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {}, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/proposals/document/send', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, requestBody, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'},{name: 'dateFrom', in: 'query'},{name: 'dateTo', in: 'query'},{name: 'type', in: 'query'},{name: 'name', in: 'query'},{name: 'isPublicDocument', in: 'query'},{name: 'userId', in: 'query'},{name: 'limit', in: 'query'},{name: 'skip', in: 'query'},];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/proposals/templates', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {}, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/proposals/templates/send', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, requestBody, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.SendTemplateResponseDto> = await this.client.request(config);
    return response.data;
  }

}

export default Proposals; 