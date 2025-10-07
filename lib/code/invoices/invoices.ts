import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/invoices';
import { buildUrl, extractParams, getAuthToken, RequestConfig } from '../../utils/request-utils';

/**
 * Invoices Service
 * Documentation for invoice API
 */
export class Invoices {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Create template
   * API to create a template
   */
  async createInvoiceTemplate(
    requestBody: Models.CreateInvoiceTemplateDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.CreateInvoiceTemplateResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/invoices/template', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, requestBody, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.CreateInvoiceTemplateResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * List templates
   * API to get list of templates
   */
  async listInvoiceTemplates(
    params: {
      altId: string;
      altType: string;
      status?: string;
      startAt?: string;
      endAt?: string;
      search?: string;
      paymentMode?: string;
      limit: string;
      offset: string;
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.ListTemplatesResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'altId', in: 'query'},{name: 'altType', in: 'query'},{name: 'status', in: 'query'},{name: 'startAt', in: 'query'},{name: 'endAt', in: 'query'},{name: 'search', in: 'query'},{name: 'paymentMode', in: 'query'},{name: 'limit', in: 'query'},{name: 'offset', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/invoices/template', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, {}, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.ListTemplatesResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get an template
   * API to get an template by template id
   */
  async getInvoiceTemplate(
    params: {
      templateId: string;
      altId: string;
      altType: string;
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.GetTemplateResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'templateId', in: 'path'},{name: 'altId', in: 'query'},{name: 'altType', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/invoices/template/{templateId}', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, {}, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.GetTemplateResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update template
   * API to update an template by template id
   */
  async updateInvoiceTemplate(
    params: {
      templateId: string;
    },
    requestBody: Models.UpdateInvoiceTemplateDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.UpdateInvoiceTemplateResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'templateId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: RequestConfig = {
      method: 'PUT',
      url: buildUrl('/invoices/template/{templateId}', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, requestBody, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.UpdateInvoiceTemplateResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete template
   * API to update an template by template id
   */
  async deleteInvoiceTemplate(
    params: {
      templateId: string;
      altId: string;
      altType: string;
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.DeleteInvoiceTemplateResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'templateId', in: 'path'},{name: 'altId', in: 'query'},{name: 'altType', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: RequestConfig = {
      method: 'DELETE',
      url: buildUrl('/invoices/template/{templateId}', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, {}, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.DeleteInvoiceTemplateResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update template late fees configuration
   * API to update template late fees configuration by template id
   */
  async updateInvoiceTemplateLateFeesConfiguration(
    params: {
      templateId: string;
    },
    requestBody: Models.UpdateInvoiceLateFeesConfigurationDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.UpdateInvoiceTemplateResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'templateId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: RequestConfig = {
      method: 'PATCH',
      url: buildUrl('/invoices/template/{templateId}/late-fees-configuration', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, requestBody, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.UpdateInvoiceTemplateResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update template late fees configuration
   * API to update template late fees configuration by template id
   */
  async updateInvoicePaymentMethodsConfiguration(
    params: {
      templateId: string;
    },
    requestBody: Models.UpdatePaymentMethodsConfigurationDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.UpdateInvoiceTemplateResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'templateId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: RequestConfig = {
      method: 'PATCH',
      url: buildUrl('/invoices/template/{templateId}/payment-methods-configuration', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, requestBody, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.UpdateInvoiceTemplateResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Invoice Schedule
   * API to create an invoice Schedule
   */
  async createInvoiceSchedule(
    requestBody: Models.CreateInvoiceScheduleDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.CreateInvoiceScheduleResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/invoices/schedule', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, requestBody, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.CreateInvoiceScheduleResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * List schedules
   * API to get list of schedules
   */
  async listInvoiceSchedules(
    params: {
      altId: string;
      altType: string;
      status?: string;
      startAt?: string;
      endAt?: string;
      search?: string;
      paymentMode?: string;
      limit: string;
      offset: string;
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.ListSchedulesResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'altId', in: 'query'},{name: 'altType', in: 'query'},{name: 'status', in: 'query'},{name: 'startAt', in: 'query'},{name: 'endAt', in: 'query'},{name: 'search', in: 'query'},{name: 'paymentMode', in: 'query'},{name: 'limit', in: 'query'},{name: 'offset', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/invoices/schedule', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, {}, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.ListSchedulesResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get an schedule
   * API to get an schedule by schedule id
   */
  async getInvoiceSchedule(
    params: {
      scheduleId: string;
      altId: string;
      altType: string;
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.GetScheduleResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'scheduleId', in: 'path'},{name: 'altId', in: 'query'},{name: 'altType', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/invoices/schedule/{scheduleId}', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, {}, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.GetScheduleResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update schedule
   * API to update an schedule by schedule id
   */
  async updateInvoiceSchedule(
    params: {
      scheduleId: string;
    },
    requestBody: Models.UpdateInvoiceScheduleDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.UpdateInvoiceScheduleResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'scheduleId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: RequestConfig = {
      method: 'PUT',
      url: buildUrl('/invoices/schedule/{scheduleId}', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, requestBody, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.UpdateInvoiceScheduleResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete schedule
   * API to delete an schedule by schedule id
   */
  async deleteInvoiceSchedule(
    params: {
      scheduleId: string;
      altId: string;
      altType: string;
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.DeleteInvoiceScheduleResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'scheduleId', in: 'path'},{name: 'altId', in: 'query'},{name: 'altType', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: RequestConfig = {
      method: 'DELETE',
      url: buildUrl('/invoices/schedule/{scheduleId}', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, {}, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.DeleteInvoiceScheduleResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update scheduled recurring invoice
   * API to update scheduled recurring invoice
   */
  async updateAndScheduleInvoiceSchedule(
    params: {
      scheduleId: string;
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.UpdateAndScheduleInvoiceScheduleResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'scheduleId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/invoices/schedule/{scheduleId}/updateAndSchedule', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, {}, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.UpdateAndScheduleInvoiceScheduleResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Schedule an schedule invoice
   * API to schedule an schedule invoice to start sending to the customer
   */
  async scheduleInvoiceSchedule(
    params: {
      scheduleId: string;
    },
    requestBody: Models.ScheduleInvoiceScheduleDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.ScheduleInvoiceScheduleResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'scheduleId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/invoices/schedule/{scheduleId}/schedule', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, requestBody, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.ScheduleInvoiceScheduleResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Manage Auto payment for an schedule invoice
   * API to manage auto payment for a schedule
   */
  async autoPaymentInvoiceSchedule(
    params: {
      scheduleId: string;
    },
    requestBody: Models.AutoPaymentScheduleDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.AutoPaymentInvoiceScheduleResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'scheduleId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/invoices/schedule/{scheduleId}/auto-payment', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, requestBody, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.AutoPaymentInvoiceScheduleResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Cancel an scheduled invoice
   * API to cancel a scheduled invoice by schedule id
   */
  async cancelInvoiceSchedule(
    params: {
      scheduleId: string;
    },
    requestBody: Models.CancelInvoiceScheduleDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.CancelInvoiceScheduleResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'scheduleId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/invoices/schedule/{scheduleId}/cancel', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, requestBody, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.CancelInvoiceScheduleResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create &amp; Send
   * API to create or update a text2pay invoice
   */
  async text2payInvoice(
    requestBody: Models.Text2PayDto,
    options?: AxiosRequestConfig
  ): Promise<Models.Text2PayInvoiceResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/invoices/text2pay', extracted.path),
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

    const response: AxiosResponse<Models.Text2PayInvoiceResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Generate Invoice Number
   * Get the next invoice number for the given location
   */
  async generateInvoiceNumber(
    params: {
      altId: string;
      altType: string;
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.GenerateInvoiceNumberResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'altId', in: 'query'},{name: 'altType', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/invoices/generate-invoice-number', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, {}, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.GenerateInvoiceNumberResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get invoice
   * API to get invoice by invoice id
   */
  async getInvoice(
    params: {
      invoiceId: string;
      altId: string;
      altType: string;
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.GetInvoiceResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'invoiceId', in: 'path'},{name: 'altId', in: 'query'},{name: 'altType', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/invoices/{invoiceId}', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, {}, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.GetInvoiceResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update invoice
   * API to update invoice by invoice id
   */
  async updateInvoice(
    params: {
      invoiceId: string;
    },
    requestBody: Models.UpdateInvoiceDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.UpdateInvoiceResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'invoiceId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: RequestConfig = {
      method: 'PUT',
      url: buildUrl('/invoices/{invoiceId}', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, requestBody, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.UpdateInvoiceResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete invoice
   * API to delete invoice by invoice id
   */
  async deleteInvoice(
    params: {
      invoiceId: string;
      altId: string;
      altType: string;
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.DeleteInvoiceResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'invoiceId', in: 'path'},{name: 'altId', in: 'query'},{name: 'altType', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: RequestConfig = {
      method: 'DELETE',
      url: buildUrl('/invoices/{invoiceId}', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, {}, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.DeleteInvoiceResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update invoice late fees configuration
   * API to update invoice late fees configuration by invoice id
   */
  async updateInvoiceLateFeesConfiguration(
    params: {
      invoiceId: string;
    },
    requestBody: Models.UpdateInvoiceLateFeesConfigurationDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.UpdateInvoiceResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'invoiceId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: RequestConfig = {
      method: 'PATCH',
      url: buildUrl('/invoices/{invoiceId}/late-fees-configuration', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, requestBody, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.UpdateInvoiceResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Void invoice
   * API to delete invoice by invoice id
   */
  async voidInvoice(
    params: {
      invoiceId: string;
    },
    requestBody: Models.VoidInvoiceDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.VoidInvoiceResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'invoiceId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/invoices/{invoiceId}/void', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, requestBody, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.VoidInvoiceResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Send invoice
   * API to send invoice by invoice id
   */
  async sendInvoice(
    params: {
      invoiceId: string;
    },
    requestBody: Models.SendInvoiceDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.SendInvoicesResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'invoiceId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/invoices/{invoiceId}/send', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, requestBody, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.SendInvoicesResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Record a manual payment for an invoice
   * API to record manual payment for an invoice by invoice id
   */
  async recordInvoice(
    params: {
      invoiceId: string;
    },
    requestBody: Models.RecordPaymentDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.RecordPaymentResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'invoiceId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/invoices/{invoiceId}/record-payment', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, requestBody, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.RecordPaymentResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update invoice last visited at
   * API to update invoice last visited at by invoice id
   */
  async updateInvoiceLastVisitedAt(
    requestBody: Models.PatchInvoiceStatsLastViewedDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<any> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: RequestConfig = {
      method: 'PATCH',
      url: buildUrl('/invoices/stats/last-visited-at', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, requestBody, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create New Estimate
   * Create a new estimate with the provided details
   */
  async createNewEstimate(
    requestBody: Models.CreateEstimatesDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.EstimateResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/invoices/estimate', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, requestBody, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.EstimateResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Estimate
   * Update an existing estimate with new details
   */
  async updateEstimate(
    params: {
      estimateId: string;
    },
    requestBody: Models.UpdateEstimateDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.EstimateResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'estimateId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: RequestConfig = {
      method: 'PUT',
      url: buildUrl('/invoices/estimate/{estimateId}', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, requestBody, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.EstimateResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Estimate
   * Delete an existing estimate
   */
  async deleteEstimate(
    params: {
      estimateId: string;
    },
    requestBody: Models.AltDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.EstimateResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'estimateId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: RequestConfig = {
      method: 'DELETE',
      url: buildUrl('/invoices/estimate/{estimateId}', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, requestBody, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.EstimateResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Generate Estimate Number
   * Get the next estimate number for the given location
   */
  async generateEstimateNumber(
    params: {
      altId: string;
      altType: string;
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.GenerateEstimateNumberResponse> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'altId', in: 'query'},{name: 'altType', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/invoices/estimate/number/generate', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, {}, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.GenerateEstimateNumberResponse> = await this.client.request(config);
    return response.data;
  }

  /**
   * Send Estimate
   * API to send estimate by estimate id
   */
  async sendEstimate(
    params: {
      estimateId: string;
    },
    requestBody: Models.SendEstimateDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.EstimateResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'estimateId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/invoices/estimate/{estimateId}/send', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, requestBody, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.EstimateResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Invoice from Estimate
   * Create a new invoice from an existing estimate
   */
  async createInvoiceFromEstimate(
    params: {
      estimateId: string;
    },
    requestBody: Models.CreateInvoiceFromEstimateDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.CreateInvoiceFromEstimateResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'estimateId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/invoices/estimate/{estimateId}/invoice', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, requestBody, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.CreateInvoiceFromEstimateResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * List Estimates
   * Get a paginated list of estimates
   */
  async listEstimates(
    params: {
      altId: string;
      altType: string;
      startAt?: string;
      endAt?: string;
      search?: string;
      status?: string;
      contactId?: string;
      limit: string;
      offset: string;
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.ListEstimatesResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'altId', in: 'query'},{name: 'altType', in: 'query'},{name: 'startAt', in: 'query'},{name: 'endAt', in: 'query'},{name: 'search', in: 'query'},{name: 'status', in: 'query'},{name: 'contactId', in: 'query'},{name: 'limit', in: 'query'},{name: 'offset', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/invoices/estimate/list', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, {}, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.ListEstimatesResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update estimate last visited at
   * API to update estimate last visited at by estimate id
   */
  async updateEstimateLastVisitedAt(
    requestBody: Models.EstimateIdParam,
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<any> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: RequestConfig = {
      method: 'PATCH',
      url: buildUrl('/invoices/estimate/stats/last-visited-at', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, requestBody, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * List Estimate Templates
   * Get a list of estimate templates or a specific template by ID
   */
  async listEstimateTemplates(
    params: {
      altId: string;
      altType: string;
      search?: string;
      limit: string;
      offset: string;
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.ListEstimateTemplateResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'altId', in: 'query'},{name: 'altType', in: 'query'},{name: 'search', in: 'query'},{name: 'limit', in: 'query'},{name: 'offset', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/invoices/estimate/template', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, {}, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.ListEstimateTemplateResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Estimate Template
   * Create a new estimate template
   */
  async createEstimateTemplate(
    requestBody: Models.EstimateTemplatesDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.EstimateTemplateResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/invoices/estimate/template', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, requestBody, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.EstimateTemplateResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Estimate Template
   * Update an existing estimate template
   */
  async updateEstimateTemplate(
    params: {
      templateId: string;
    },
    requestBody: Models.EstimateTemplatesDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.EstimateTemplateResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'templateId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: RequestConfig = {
      method: 'PUT',
      url: buildUrl('/invoices/estimate/template/{templateId}', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, requestBody, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.EstimateTemplateResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Estimate Template
   * Delete an existing estimate template
   */
  async deleteEstimateTemplate(
    params: {
      templateId: string;
    },
    requestBody: Models.AltDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.EstimateTemplateResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'templateId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: RequestConfig = {
      method: 'DELETE',
      url: buildUrl('/invoices/estimate/template/{templateId}', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, requestBody, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.EstimateTemplateResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Preview Estimate Template
   * Get a preview of an estimate template
   */
  async previewEstimateTemplate(
    params: {
      altId: string;
      altType: string;
      templateId: string;
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.EstimateTemplateResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'altId', in: 'query'},{name: 'altType', in: 'query'},{name: 'templateId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/invoices/estimate/template/preview', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, {}, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.EstimateTemplateResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Invoice
   * API to create an invoice
   */
  async createInvoice(
    requestBody: Models.CreateInvoiceDto,
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.CreateInvoiceResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/invoices/', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, requestBody, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.CreateInvoiceResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * List invoices
   * API to get list of invoices
   */
  async listInvoices(
    params: {
      altId: string;
      altType: string;
      status?: string;
      startAt?: string;
      endAt?: string;
      search?: string;
      paymentMode?: string;
      contactId?: string;
      limit: string;
      offset: string;
      sortField?: string;
      sortOrder?: string;
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'company' | 'location' }
  ): Promise<Models.ListInvoicesResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'altId', in: 'query'},{name: 'altType', in: 'query'},{name: 'status', in: 'query'},{name: 'startAt', in: 'query'},{name: 'endAt', in: 'query'},{name: 'search', in: 'query'},{name: 'paymentMode', in: 'query'},{name: 'contactId', in: 'query'},{name: 'limit', in: 'query'},{name: 'offset', in: 'query'},{name: 'sortField', in: 'query'},{name: 'sortOrder', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access","Agency-Access"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/invoices/', extracted.path),
      params: extracted.query,
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      __preferredTokenType: options?.preferredTokenType,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, { ...config.params || {}, ...config.__pathParams }, {}, options?.preferredTokenType);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.ListInvoicesResponseDto> = await this.client.request(config);
    return response.data;
  }

}

export default Invoices; 