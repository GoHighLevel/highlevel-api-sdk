import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/locations';
import { buildUrl, extractParams, getAuthToken } from '../../utils/request-utils';

/**
 * Locations Service
 * Documentation for Sub-Account (Formerly location) API
 */
export class Locations {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Search
   * Search Sub-Account (Formerly Location)
   */
  async searchLocations(
    params: {
      companyId?: string;
      skip?: string;
      limit?: string;
      order?: string;
      email?: string;
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.SearchSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'companyId', in: 'query'},{name: 'skip', in: 'query'},{name: 'limit', in: 'query'},{name: 'order', in: 'query'},{name: 'email', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Agency-Access","Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/locations/search', extracted.path),
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

    const response: AxiosResponse<Models.SearchSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Sub-Account (Formerly Location)
   * Get details of a Sub-Account (Formerly Location) by passing the sub-account id
   */
  async getLocation(
    params: {
      locationId: string;
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.GetLocationByIdSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/locations/{locationId}', extracted.path),
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

    const response: AxiosResponse<Models.GetLocationByIdSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Put Sub-Account (Formerly Location)
   * Update a Sub-Account (Formerly Location) based on the data provided
   */
  async putLocation(
    params: {
      locationId: string;
    },
    requestBody: Models.UpdateLocationDto,
    options?: AxiosRequestConfig
  ): Promise<Models.CreateLocationSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'PUT',
      url: buildUrl('/locations/{locationId}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, requestBody);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.CreateLocationSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Sub-Account (Formerly Location)
   * Delete a Sub-Account (Formerly Location) from the Agency
   */
  async deleteLocation(
    params: {
      locationId: string;
      deleteTwilioAccount: boolean;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.LocationDeletedSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'},{name: 'deleteTwilioAccount', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: buildUrl('/locations/{locationId}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.LocationDeletedSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Tags
   * Get Sub-Account (Formerly Location) Tags
   */
  async getLocationTags(
    params: {
      locationId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.LocationTagsSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/locations/{locationId}/tags', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.LocationTagsSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Tag
   * Create tag
   */
  async createTag(
    params: {
      locationId: string;
    },
    requestBody: Models.tagBody,
    options?: AxiosRequestConfig
  ): Promise<Models.LocationTagSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/locations/{locationId}/tags', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, requestBody);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.LocationTagSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get tag by id
   * Get tag by id
   */
  async getTagById(
    params: {
      locationId: string;
      tagId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.LocationTagSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'},{name: 'tagId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/locations/{locationId}/tags/{tagId}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.LocationTagSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update tag
   * Update tag
   */
  async updateTag(
    params: {
      locationId: string;
      tagId: string;
    },
    requestBody: Models.tagBody,
    options?: AxiosRequestConfig
  ): Promise<Models.LocationTagSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'},{name: 'tagId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'PUT',
      url: buildUrl('/locations/{locationId}/tags/{tagId}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, requestBody);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.LocationTagSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete tag
   * Delete tag
   */
  async deleteTag(
    params: {
      locationId: string;
      tagId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.LocationTagDeleteSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'},{name: 'tagId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: buildUrl('/locations/{locationId}/tags/{tagId}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.LocationTagDeleteSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Task Search Filter
   * Task Search
   */
  async taskSearch(
    params: {
      locationId: string;
    },
    requestBody: Models.TaskSearchParamsDto,
    options?: AxiosRequestConfig
  ): Promise<Models.LocationTaskListSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/locations/{locationId}/tasks/search', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, requestBody);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.LocationTaskListSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Recurring Task By Id
   * Get Recurring Task By Id
   */
  async getRecurringTaskById(
    params: {
      id: string;
      locationId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.RecurringTaskSingleResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'id', in: 'path'},{name: 'locationId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/locations/{locationId}/recurring-tasks/{id}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.RecurringTaskSingleResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Recurring Task
   * Update Recurring Task
   */
  async updateRecurringTask(
    params: {
      id: string;
      locationId: string;
    },
    requestBody: Models.RecurringTaskUpdateDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.RecurringTaskSingleResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'id', in: 'path'},{name: 'locationId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'PUT',
      url: buildUrl('/locations/{locationId}/recurring-tasks/{id}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, requestBody);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.RecurringTaskSingleResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Recurring Task
   * Delete Recurring Task
   */
  async deleteRecurringTask(
    params: {
      id: string;
      locationId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.DeleteRecurringTaskResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'id', in: 'path'},{name: 'locationId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: buildUrl('/locations/{locationId}/recurring-tasks/{id}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.DeleteRecurringTaskResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Recurring Task
   * Create Recurring Task
   */
  async createRecurringTask(
    params: {
      locationId: string;
    },
    requestBody: Models.RecurringTaskCreateDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.RecurringTaskSingleResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/locations/{locationId}/recurring-tasks', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, requestBody);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.RecurringTaskSingleResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Custom Fields
   * Get Custom Fields
   */
  async getCustomFields(
    params: {
      locationId: string;
      model?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.CustomFieldsListSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'},{name: 'model', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/locations/{locationId}/customFields', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.CustomFieldsListSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Custom Field
   * Create Custom Field
   */
  async createCustomField(
    params: {
      locationId: string;
    },
    requestBody: Models.CreateCustomFieldsDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.CustomFieldSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/locations/{locationId}/customFields', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, requestBody);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.CustomFieldSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Custom Field
   * Get Custom Field
   */
  async getCustomField(
    params: {
      locationId: string;
      id: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.CustomFieldSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'},{name: 'id', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/locations/{locationId}/customFields/{id}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.CustomFieldSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Custom Field
   * Update Custom Field
   */
  async updateCustomField(
    params: {
      locationId: string;
      id: string;
    },
    requestBody: Models.UpdateCustomFieldsDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.CustomFieldSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'},{name: 'id', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'PUT',
      url: buildUrl('/locations/{locationId}/customFields/{id}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, requestBody);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.CustomFieldSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Custom Field
   * Delete Custom Field
   */
  async deleteCustomField(
    params: {
      locationId: string;
      id: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.CustomFieldDeleteSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'},{name: 'id', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: buildUrl('/locations/{locationId}/customFields/{id}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.CustomFieldDeleteSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Uploads File to customFields
   * Uploads File to customFields
   */
  async uploadFileCustomFields(
    params: {
      locationId: string;
    },
    requestBody: any,
    options?: AxiosRequestConfig
  ): Promise<Models.FileUploadResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/locations/{locationId}/customFields/upload', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, requestBody);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.FileUploadResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Custom Values
   * Get Custom Values
   */
  async getCustomValues(
    params: {
      locationId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.CustomValuesListSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/locations/{locationId}/customValues', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.CustomValuesListSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Custom Value
   * Create Custom Value
   */
  async createCustomValue(
    params: {
      locationId: string;
    },
    requestBody: Models.customValuesDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.CustomValueIdSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/locations/{locationId}/customValues', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, requestBody);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.CustomValueIdSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Custom Value
   * Get Custom Value
   */
  async getCustomValue(
    params: {
      locationId: string;
      id: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.CustomValueIdSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'},{name: 'id', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/locations/{locationId}/customValues/{id}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.CustomValueIdSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Custom Value
   * Update Custom Value
   */
  async updateCustomValue(
    params: {
      locationId: string;
      id: string;
    },
    requestBody: Models.customValuesDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.CustomValueIdSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'},{name: 'id', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'PUT',
      url: buildUrl('/locations/{locationId}/customValues/{id}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, requestBody);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.CustomValueIdSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Custom Value
   * Delete Custom Value
   */
  async deleteCustomValue(
    params: {
      locationId: string;
      id: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.CustomValueDeleteSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'},{name: 'id', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: buildUrl('/locations/{locationId}/customValues/{id}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.CustomValueDeleteSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Fetch Timezones
   * Fetch the available timezones
   */
  async getTimezones(
    options?: AxiosRequestConfig
  ): Promise<any> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["bearer","Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/locations/{locationId}/timezones', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * GET all or email/sms templates
   * GET all or email/sms templates
   */
  async gETAllOrEmailSmsTemplates(
    params: {
      deleted?: boolean;
      skip?: string;
      limit?: string;
      type?: string;
      originId: string;
      locationId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetTemplatesSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'deleted', in: 'query'},{name: 'skip', in: 'query'},{name: 'limit', in: 'query'},{name: 'type', in: 'query'},{name: 'originId', in: 'query'},{name: 'locationId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/locations/{locationId}/templates', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.GetTemplatesSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * DELETE an email/sms template
   * DELETE an email/sms template
   */
  async dELETEAnEmailSmsTemplate(
    params: {
      locationId: string;
      id: string;
    },
    options?: AxiosRequestConfig
  ): Promise<any> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'},{name: 'id', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: buildUrl('/locations/{locationId}/templates/{id}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Sub-Account (Formerly Location)
   * &lt;div&gt;
                  &lt;p&gt;Create a new Sub-Account (Formerly Location) based on the data provided&lt;/p&gt; 
                  &lt;div&gt;
                    &lt;span style&#x3D; &quot;display: inline-block;
                                width: 25px; height: 25px;
                                background-color: yellow;
                                color: black;
                                font-weight: bold;
                                font-size: 24px;
                                text-align: center;
                                line-height: 22px;
                                border: 2px solid black;
                                border-radius: 10%;
                                margin-right: 10px;&quot;&gt;
                                !
                      &lt;/span&gt;
                      &lt;span&gt;
                        &lt;strong&gt;
                          This feature is only available on Agency Pro ($497) plan.
                        &lt;/strong&gt;
                      &lt;/span&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
    
   */
  async createLocation(
    requestBody: Models.CreateLocationDto,
    options?: AxiosRequestConfig
  ): Promise<Models.CreateLocationSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/locations/', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, requestBody);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.CreateLocationSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

}

export default Locations; 