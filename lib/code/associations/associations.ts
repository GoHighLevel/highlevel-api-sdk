import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/associations';
import { buildUrl, extractParams, getAuthToken, RequestConfig } from '../../utils/request-utils';

/**
 * Associations Service
 * Documentation for Associations API
 */
export class Associations {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Create Relation for you associated entities.
   * Create Relation.Documentation Link - https://doc.clickup.com/8631005/d/h/87cpx-293776/cd0f4122abc04d3
   */
  async createRelation(
    requestBody: Models.createRelationReqDto,
    options?: AxiosRequestConfig
  ): Promise<Models.GetPostSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/associations/relations', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, requestBody);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.GetPostSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get all relations By record Id
   * Get all relations by record Id
   */
  async getRelationsByRecordId(
    params: {
      recordId: string;
      locationId: string;
      skip: number;
      limit: number;
      associationIds?: string[];
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetPostSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'recordId', in: 'path'},{name: 'locationId', in: 'query'},{name: 'skip', in: 'query'},{name: 'limit', in: 'query'},{name: 'associationIds', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/associations/relations/{recordId}', extracted.path),
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

    const response: AxiosResponse<Models.GetPostSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Relation
   * Delete Relation
   */
  async deleteRelation(
    params: {
      relationId: string;
      locationId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetPostSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'relationId', in: 'path'},{name: 'locationId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'DELETE',
      url: buildUrl('/associations/relations/{relationId}', extracted.path),
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

    const response: AxiosResponse<Models.GetPostSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get association key by key name
   * Using this api you can get standard / user defined association by key
   */
  async getAssociationKeyByKeyName(
    params: {
      keyName: string;
      locationId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetPostSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'key_name', in: 'path'},{name: 'locationId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/associations/key/{key_name}', extracted.path),
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

    const response: AxiosResponse<Models.GetPostSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get association by object keys
   * Get association by object keys like contacts, custom objects and opportunities. Documentation Link - https://doc.clickup.com/8631005/d/h/87cpx-293776/cd0f4122abc04d3
   */
  async getAssociationByObjectKeys(
    params: {
      objectKey?: string;
      locationId?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetPostSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'objectKey', in: 'path'},{name: 'locationId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/associations/objectKey/{objectKey}', extracted.path),
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

    const response: AxiosResponse<Models.GetPostSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Association By Id
   * Update Association , Allows you to update labels of an associations. Documentation Link - https://doc.clickup.com/8631005/d/h/87cpx-293776/cd0f4122abc04d3
   */
  async updateAssociation(
    params: {
      associationId: string;
    },
    requestBody: Models.UpdateAssociationReqDto,
    options?: AxiosRequestConfig
  ): Promise<Models.GetPostSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'associationId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'PUT',
      url: buildUrl('/associations/{associationId}', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, requestBody);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.GetPostSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Association
   * Delete USER_DEFINED Association By Id, deleting an association will also all the relations for that association
   */
  async deleteAssociation(
    params: {
      associationId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.DeleteAssociationsResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'associationId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'DELETE',
      url: buildUrl('/associations/{associationId}', extracted.path),
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

    const response: AxiosResponse<Models.DeleteAssociationsResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get association by ID
   * Using this api you can get SYSTEM_DEFINED / USER_DEFINED association by id 
   */
  async getAssociationByID(
    params: {
      associationId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetPostSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'associationId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/associations/{associationId}', extracted.path),
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

    const response: AxiosResponse<Models.GetPostSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Association
   * Allow you to create contact - contact , contact - custom objects associations, will add more in the future.Documentation Link - https://doc.clickup.com/8631005/d/h/87cpx-293776/cd0f4122abc04d3
   */
  async createAssociation(
    requestBody: Models.createAssociationReqDto,
    options?: AxiosRequestConfig
  ): Promise<Models.GetPostSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/associations/', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, requestBody);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.GetPostSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get all associations for a sub-account / location
   * Get all Associations
   */
  async findAssociations(
    params: {
      locationId: string;
      skip: number;
      limit: number;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetPostSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'},{name: 'skip', in: 'query'},{name: 'limit', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/associations/', extracted.path),
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

    const response: AxiosResponse<Models.GetPostSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

}

export default Associations; 