import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/contacts';
import { buildUrl, extractParams, getAuthToken, RequestConfig } from '../../utils/request-utils';

/**
 * Contacts Service
 * Documentation for Contacts API
 */
export class Contacts {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Search Contacts
   * Search contacts based on combinations of advanced filters. Documentation Link - https://doc.clickup.com/8631005/d/h/87cpx-158396/6e629989abe7fad
   */
  async searchContactsAdvanced(
    requestBody: Models.SearchBodyV2DTO,
    options?: AxiosRequestConfig
  ): Promise<any> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/contacts/search', extracted.path),
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

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Duplicate Contact
   * Get Duplicate Contact.&lt;br/&gt;&lt;br/&gt;If &#x60;Allow Duplicate Contact&#x60; is disabled under Settings, the global unique identifier will be used for searching the contact. If the setting is enabled, first priority for search is &#x60;email&#x60; and the second priority will be &#x60;phone&#x60;.
   */
  async getDuplicateContact(
    params: {
      locationId: string;
      number?: string;
      email?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<any> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'},{name: 'number', in: 'query'},{name: 'email', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/contacts/search/duplicate', extracted.path),
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

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get all Tasks
   * Get all Tasks
   */
  async getAllTasks(
    params: {
      contactId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.TasksListSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'contactId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/contacts/{contactId}/tasks', extracted.path),
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

    const response: AxiosResponse<Models.TasksListSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Task
   * Create Task
   */
  async createTask(
    params: {
      contactId: string;
    },
    requestBody: Models.CreateTaskParams,
    options?: AxiosRequestConfig
  ): Promise<Models.TaskByIsSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'contactId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/contacts/{contactId}/tasks', extracted.path),
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

    const response: AxiosResponse<Models.TaskByIsSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Task
   * Get Task
   */
  async getTask(
    params: {
      contactId: string;
      taskId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.TaskByIsSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'contactId', in: 'path'},{name: 'taskId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/contacts/{contactId}/tasks/{taskId}', extracted.path),
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

    const response: AxiosResponse<Models.TaskByIsSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Task
   * Update Task
   */
  async updateTask(
    params: {
      contactId: string;
      taskId: string;
    },
    requestBody: Models.UpdateTaskBody,
    options?: AxiosRequestConfig
  ): Promise<Models.TaskByIsSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'contactId', in: 'path'},{name: 'taskId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'PUT',
      url: buildUrl('/contacts/{contactId}/tasks/{taskId}', extracted.path),
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

    const response: AxiosResponse<Models.TaskByIsSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Task
   * Delete Task
   */
  async deleteTask(
    params: {
      contactId: string;
      taskId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.DeleteTaskSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'contactId', in: 'path'},{name: 'taskId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'DELETE',
      url: buildUrl('/contacts/{contactId}/tasks/{taskId}', extracted.path),
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

    const response: AxiosResponse<Models.DeleteTaskSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Task Completed
   * Update Task Completed
   */
  async updateTaskCompleted(
    params: {
      contactId: string;
      taskId: string;
    },
    requestBody: Models.UpdateTaskStatusParams,
    options?: AxiosRequestConfig
  ): Promise<Models.TaskByIsSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'contactId', in: 'path'},{name: 'taskId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'PUT',
      url: buildUrl('/contacts/{contactId}/tasks/{taskId}/completed', extracted.path),
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

    const response: AxiosResponse<Models.TaskByIsSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Appointments for Contact
   * Get Appointments for Contact
   */
  async getAppointmentsForContact(
    params: {
      contactId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetEventsSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'contactId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/contacts/{contactId}/appointments', extracted.path),
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

    const response: AxiosResponse<Models.GetEventsSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Add Tags
   * Add Tags
   */
  async addTags(
    params: {
      contactId: string;
    },
    requestBody: Models.TagsDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.CreateAddTagSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'contactId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/contacts/{contactId}/tags', extracted.path),
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

    const response: AxiosResponse<Models.CreateAddTagSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Remove Tags
   * Remove Tags
   */
  async removeTags(
    params: {
      contactId: string;
    },
    requestBody: Models.TagsDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.CreateDeleteTagSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'contactId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'DELETE',
      url: buildUrl('/contacts/{contactId}/tags', extracted.path),
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

    const response: AxiosResponse<Models.CreateDeleteTagSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get All Notes
   * Get All Notes
   */
  async getAllNotes(
    params: {
      contactId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetNotesListSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'contactId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/contacts/{contactId}/notes', extracted.path),
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

    const response: AxiosResponse<Models.GetNotesListSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Note
   * Create Note
   */
  async createNote(
    params: {
      contactId: string;
    },
    requestBody: Models.NotesDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.GetCreateUpdateNoteSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'contactId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/contacts/{contactId}/notes', extracted.path),
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

    const response: AxiosResponse<Models.GetCreateUpdateNoteSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Note
   * Get Note
   */
  async getNote(
    params: {
      contactId: string;
      id: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetCreateUpdateNoteSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'contactId', in: 'path'},{name: 'id', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/contacts/{contactId}/notes/{id}', extracted.path),
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

    const response: AxiosResponse<Models.GetCreateUpdateNoteSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Note
   * Update Note
   */
  async updateNote(
    params: {
      contactId: string;
      id: string;
    },
    requestBody: Models.NotesDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.GetCreateUpdateNoteSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'contactId', in: 'path'},{name: 'id', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'PUT',
      url: buildUrl('/contacts/{contactId}/notes/{id}', extracted.path),
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

    const response: AxiosResponse<Models.GetCreateUpdateNoteSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Note
   * Delete Note
   */
  async deleteNote(
    params: {
      contactId: string;
      id: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.DeleteNoteSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'contactId', in: 'path'},{name: 'id', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'DELETE',
      url: buildUrl('/contacts/{contactId}/notes/{id}', extracted.path),
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

    const response: AxiosResponse<Models.DeleteNoteSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Contacts Tags
   * Allows you to update tags to multiple contacts at once, you can add or remove tags from the contacts
   */
  async createAssociation(
    params: {
      type: string;
    },
    requestBody: Models.UpdateTagsDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.UpdateTagsResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'type', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = [];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/contacts/bulk/tags/update/{type}', extracted.path),
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

    const response: AxiosResponse<Models.UpdateTagsResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Add/Remove Contacts From Business
   * Add/Remove Contacts From Business . Passing a &#x60;null&#x60; businessId will remove the businessId from the contacts
   */
  async addRemoveContactFromBusiness(
    requestBody: Models.ContactsBusinessUpdate,
    options?: AxiosRequestConfig
  ): Promise<Models.ContactsBulkUpateResponse> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = [];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/contacts/bulk/business', extracted.path),
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

    const response: AxiosResponse<Models.ContactsBulkUpateResponse> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Contact
   * Get Contact
   */
  async getContact(
    params: {
      contactId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.ContactsByIdSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'contactId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/contacts/{contactId}', extracted.path),
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

    const response: AxiosResponse<Models.ContactsByIdSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Contact
   * Please find the list of acceptable values for the &#x60;country&#x60; field  &lt;a href&#x3D;&quot;https://highlevel.stoplight.io/docs/integrations/ZG9jOjI4MzUzNDIy-country-list&quot; target&#x3D;&quot;_blank&quot;&gt;here&lt;/a&gt;
   */
  async updateContact(
    params: {
      contactId: string;
    },
    requestBody: Models.UpdateContactDto,
    options?: AxiosRequestConfig
  ): Promise<Models.UpdateContactsSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'contactId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'PUT',
      url: buildUrl('/contacts/{contactId}', extracted.path),
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

    const response: AxiosResponse<Models.UpdateContactsSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Contact
   * Delete Contact
   */
  async deleteContact(
    params: {
      contactId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.DeleteContactsSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'contactId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'DELETE',
      url: buildUrl('/contacts/{contactId}', extracted.path),
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

    const response: AxiosResponse<Models.DeleteContactsSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Upsert Contact
   * Please find the list of acceptable values for the &#x60;country&#x60; field  &lt;a href&#x3D;&quot;https://highlevel.stoplight.io/docs/integrations/ZG9jOjI4MzUzNDIy-country-list&quot; target&#x3D;&quot;_blank&quot;&gt;here&lt;/a&gt;&lt;br/&gt;&lt;br/&gt;The Upsert API will adhere to the configuration defined under the “Allow Duplicate Contact” setting at the Location level. If the setting is configured to check both Email and Phone, the API will attempt to identify an existing contact based on the priority sequence specified in the setting, and will create or update the contact accordingly.&lt;br/&gt;&lt;br/&gt;If two separate contacts already exist—one with the same email and another with the same phone—and an upsert request includes both the email and phone, the API will update the contact that matches the first field in the configured sequence, and ignore the second field to prevent duplication.
   */
  async upsertContact(
    requestBody: Models.UpsertContactDto,
    options?: AxiosRequestConfig
  ): Promise<Models.UpsertContactsSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/contacts/upsert', extracted.path),
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

    const response: AxiosResponse<Models.UpsertContactsSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Contacts By BusinessId
   * Get Contacts By BusinessId
   */
  async getContactsByBusinessId(
    params: {
      businessId: string;
      limit?: string;
      locationId: string;
      skip?: string;
      query?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.ContactsSearchSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'businessId', in: 'path'},{name: 'limit', in: 'query'},{name: 'locationId', in: 'query'},{name: 'skip', in: 'query'},{name: 'query', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/contacts/business/{businessId}', extracted.path),
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

    const response: AxiosResponse<Models.ContactsSearchSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Add Followers
   * Add Followers
   */
  async addFollowersContact(
    params: {
      contactId: string;
    },
    requestBody: Models.FollowersDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.CreateAddFollowersSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'contactId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/contacts/{contactId}/followers', extracted.path),
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

    const response: AxiosResponse<Models.CreateAddFollowersSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Remove Followers
   * Remove Followers
   */
  async removeFollowersContact(
    params: {
      contactId: string;
    },
    requestBody: Models.FollowersDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.DeleteFollowersSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'contactId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'DELETE',
      url: buildUrl('/contacts/{contactId}/followers', extracted.path),
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

    const response: AxiosResponse<Models.DeleteFollowersSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Add Contact to Campaign
   * Add contact to Campaign
   */
  async addContactToCampaign(
    params: {
      contactId: string;
      campaignId: string;
    },
    requestBody: Models.AddContactToCampaignDto,
    options?: AxiosRequestConfig
  ): Promise<Models.CreateDeleteCantactsCampaignsSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'contactId', in: 'path'},{name: 'campaignId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/contacts/{contactId}/campaigns/{campaignId}', extracted.path),
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

    const response: AxiosResponse<Models.CreateDeleteCantactsCampaignsSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Remove Contact From Campaign
   * Remove Contact From Campaign
   */
  async removeContactFromCampaign(
    params: {
      contactId: string;
      campaignId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.CreateDeleteCantactsCampaignsSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'contactId', in: 'path'},{name: 'campaignId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'DELETE',
      url: buildUrl('/contacts/{contactId}/campaigns/{campaignId}', extracted.path),
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

    const response: AxiosResponse<Models.CreateDeleteCantactsCampaignsSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Remove Contact From Every Campaign
   * Remove Contact From Every Campaign
   */
  async removeContactFromEveryCampaign(
    params: {
      contactId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.CreateDeleteCantactsCampaignsSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'contactId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'DELETE',
      url: buildUrl('/contacts/{contactId}/campaigns/removeAll', extracted.path),
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

    const response: AxiosResponse<Models.CreateDeleteCantactsCampaignsSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Add Contact to Workflow
   * Add Contact to Workflow
   */
  async addContactToWorkflow(
    params: {
      contactId: string;
      workflowId: string;
    },
    requestBody: Models.CreateWorkflowDto,
    options?: AxiosRequestConfig
  ): Promise<Models.ContactsWorkflowSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'contactId', in: 'path'},{name: 'workflowId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/contacts/{contactId}/workflow/{workflowId}', extracted.path),
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

    const response: AxiosResponse<Models.ContactsWorkflowSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Contact from Workflow
   * Delete Contact from Workflow
   */
  async deleteContactFromWorkflow(
    params: {
      contactId: string;
      workflowId: string;
    },
    requestBody: Models.CreateWorkflowDto,
    options?: AxiosRequestConfig
  ): Promise<Models.ContactsWorkflowSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'contactId', in: 'path'},{name: 'workflowId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'DELETE',
      url: buildUrl('/contacts/{contactId}/workflow/{workflowId}', extracted.path),
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

    const response: AxiosResponse<Models.ContactsWorkflowSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Contact
   * Please find the list of acceptable values for the &#x60;country&#x60; field  &lt;a href&#x3D;&quot;https://highlevel.stoplight.io/docs/integrations/ZG9jOjI4MzUzNDIy-country-list&quot; target&#x3D;&quot;_blank&quot;&gt;here&lt;/a&gt;
   */
  async createContact(
    requestBody: Models.CreateContactDto,
    options?: AxiosRequestConfig
  ): Promise<Models.CreateContactsSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/contacts/', extracted.path),
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

    const response: AxiosResponse<Models.CreateContactsSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Contacts
   * Get Contacts

 **Note:** This API endpoint is deprecated. Please use the [Search Contacts](https://highlevel.stoplight.io/docs/integrations/dbe4f3a00a106-search-contacts) endpoint instead.
   * @deprecated deprecated. Use the [Search Contacts](https://highlevel instead.
   */
  async getContacts(
    params: {
      locationId: string;
      startAfterId?: string;
      startAfter?: number;
      query?: string;
      limit?: number;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.ContactsSearchSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'},{name: 'startAfterId', in: 'query'},{name: 'startAfter', in: 'query'},{name: 'query', in: 'query'},{name: 'limit', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/contacts/', extracted.path),
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

    const response: AxiosResponse<Models.ContactsSearchSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

}

export default Contacts; 