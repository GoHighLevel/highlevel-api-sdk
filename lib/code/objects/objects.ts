import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/objects';
import { buildUrl, extractParams, getAuthToken, RequestConfig } from '../../utils/request-utils';

/**
 * Objects Service
 * Custom objects are completely customizable objects that allow you to store and manage information tailored to your unique business needs. With custom objects, you can create custom fields, establish relationships, and integrate them into workflows, providing flexibility beyond standard objects like Contacts, Opportunities or Companies.
 */
export class Objects {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Get Object Schema by key / id
   * Retrieve Object Schema by key or ID. This will return the schema of the custom object, including all its fields and properties. Supported objects include contact, opportunity, business and custom objects.To understand objects and records, please have a look the documentation here : https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0
   */
  async getObjectSchemaByKey(
    params: {
      key: string;
      locationId: string;
      fetchProperties?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.CustomObjectByIdResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'key', in: 'path'},{name: 'locationId', in: 'query'},{name: 'fetchProperties', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/objects/{key}', extracted.path),
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

    const response: AxiosResponse<Models.CustomObjectByIdResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Object Schema By Key / Id
   * Update Custom Object Schema  or standard object&#x27;s like contact, opportunity, business searchable fields. To understand objects and records, please have a look at the documentation here : https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0
   */
  async updateCustomObject(
    params: {
      key: string;
    },
    requestBody: Models.UpdateCustomObjectSchemaDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.CustomObjectResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'key', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'PUT',
      url: buildUrl('/objects/{key}', extracted.path),
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

    const response: AxiosResponse<Models.CustomObjectResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Record By Id
   * Allows you to get a Standard Object like business and custom object record by Id
   */
  async getRecordById(
    params: {
      schemaKey: string;
      id: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.RecordByIdResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'schemaKey', in: 'path'},{name: 'id', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/objects/{schemaKey}/records/{id}', extracted.path),
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

    const response: AxiosResponse<Models.RecordByIdResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Record
   * Update a Custom Object Record by Id. Supported Objects are business and custom objects. Documentation Link - https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0/87cpx-376296
   */
  async updateObjectRecord(
    params: {
      schemaKey: string;
      id: string;
      locationId: string;
    },
    requestBody: Models.UpdateCustomObjectRecordDto,
    options?: AxiosRequestConfig
  ): Promise<Models.RecordByIdResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'schemaKey', in: 'path'},{name: 'id', in: 'path'},{name: 'locationId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'PUT',
      url: buildUrl('/objects/{schemaKey}/records/{id}', extracted.path),
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

    const response: AxiosResponse<Models.RecordByIdResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Record
   * Delete Record By Id . Supported Objects are business and custom objects.
   */
  async deleteObjectRecord(
    params: {
      schemaKey: string;
      id: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.ObjectRecordDeleteResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'schemaKey', in: 'path'},{name: 'id', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'DELETE',
      url: buildUrl('/objects/{schemaKey}/records/{id}', extracted.path),
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

    const response: AxiosResponse<Models.ObjectRecordDeleteResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Record
   * Create a Custom Object Record. Supported Objects business and custom objects. Documentation Link - https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0/87cpx-376296
   */
  async createObjectRecord(
    params: {
      schemaKey: string;
    },
    requestBody: Models.CreateCustomObjectRecordDto,
    options?: AxiosRequestConfig
  ): Promise<Models.RecordByIdResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'schemaKey', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/objects/{schemaKey}/records', extracted.path),
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

    const response: AxiosResponse<Models.RecordByIdResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Search Object Records
   * Supported Objects are custom objects and standard objects like &quot;business&quot;. Documentation Link - https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0/87cpx-379336
   */
  async searchObjectRecords(
    params: {
      schemaKey?: string;
    },
    requestBody: Models.SearchRecordsBody,
    options?: AxiosRequestConfig
  ): Promise<Models.SearchRecordResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'schemaKey', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/objects/{schemaKey}/records/search', extracted.path),
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

    const response: AxiosResponse<Models.SearchRecordResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get all objects for a location
   * Get all objects for a location. Supported Objects are contact, opportunity, business and custom objects.To understand objects and records, please have a look at the documentation here : https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0
   */
  async getObjectByLocationId(
    params: {
      locationId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.CustomObjectListResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/objects/', extracted.path),
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

    const response: AxiosResponse<Models.CustomObjectListResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Custom Object
   * Allows you to create a custom object schema. To understand objects and records, please have a look at the documentation here : https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0
   */
  async createCustomObjectSchema(
    requestBody: Models.CreateCustomObjectSchemaDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.CustomObjectResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Agency-Access"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/objects/', extracted.path),
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

    const response: AxiosResponse<Models.CustomObjectResponseDTO> = await this.client.request(config);
    return response.data;
  }

}

export default Objects; 