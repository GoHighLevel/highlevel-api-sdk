import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/invoices';

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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.CreateInvoiceTemplateResponseDto> {
    let url = '/invoices/template';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];


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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.ListTemplatesResponseDto> {
    let url = '/invoices/template';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];

    if (params) {
      if (params.altId !== undefined) {
        queryParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        queryParams['altType'] = params.altType;
      }
      if (params.status !== undefined) {
        queryParams['status'] = params.status;
      }
      if (params.startAt !== undefined) {
        queryParams['startAt'] = params.startAt;
      }
      if (params.endAt !== undefined) {
        queryParams['endAt'] = params.endAt;
      }
      if (params.search !== undefined) {
        queryParams['search'] = params.search;
      }
      if (params.paymentMode !== undefined) {
        queryParams['paymentMode'] = params.paymentMode;
      }
      if (params.limit !== undefined) {
        queryParams['limit'] = params.limit;
      }
      if (params.offset !== undefined) {
        queryParams['offset'] = params.offset;
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.GetTemplateResponseDto> {
    let url = '/invoices/template/{templateId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];

    if (params) {
      if (params.templateId !== undefined) {
        url = url.replace('{' + 'templateId' + '}', encodeURIComponent(String(params.templateId)));
      }
      if (params.altId !== undefined) {
        queryParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        queryParams['altType'] = params.altType;
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.UpdateInvoiceTemplateResponseDto> {
    let url = '/invoices/template/{templateId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];

    if (params) {
      if (params.templateId !== undefined) {
        url = url.replace('{' + 'templateId' + '}', encodeURIComponent(String(params.templateId)));
      }
    }

    const config: AxiosRequestConfig = {
      method: 'PUT',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      data: requestBody,
      ...options
    };

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.DeleteInvoiceTemplateResponseDto> {
    let url = '/invoices/template/{templateId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];

    if (params) {
      if (params.templateId !== undefined) {
        url = url.replace('{' + 'templateId' + '}', encodeURIComponent(String(params.templateId)));
      }
      if (params.altId !== undefined) {
        queryParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        queryParams['altType'] = params.altType;
      }
    }

    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      ...options
    };

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.UpdateInvoiceTemplateResponseDto> {
    let url = '/invoices/template/{templateId}/late-fees-configuration';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];

    if (params) {
      if (params.templateId !== undefined) {
        url = url.replace('{' + 'templateId' + '}', encodeURIComponent(String(params.templateId)));
      }
    }

    const config: AxiosRequestConfig = {
      method: 'PATCH',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      data: requestBody,
      ...options
    };

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.UpdateInvoiceTemplateResponseDto> {
    let url = '/invoices/template/{templateId}/payment-methods-configuration';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];

    if (params) {
      if (params.templateId !== undefined) {
        url = url.replace('{' + 'templateId' + '}', encodeURIComponent(String(params.templateId)));
      }
    }

    const config: AxiosRequestConfig = {
      method: 'PATCH',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      data: requestBody,
      ...options
    };

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.CreateInvoiceScheduleResponseDto> {
    let url = '/invoices/schedule';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];


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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.ListSchedulesResponseDto> {
    let url = '/invoices/schedule';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];

    if (params) {
      if (params.altId !== undefined) {
        queryParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        queryParams['altType'] = params.altType;
      }
      if (params.status !== undefined) {
        queryParams['status'] = params.status;
      }
      if (params.startAt !== undefined) {
        queryParams['startAt'] = params.startAt;
      }
      if (params.endAt !== undefined) {
        queryParams['endAt'] = params.endAt;
      }
      if (params.search !== undefined) {
        queryParams['search'] = params.search;
      }
      if (params.paymentMode !== undefined) {
        queryParams['paymentMode'] = params.paymentMode;
      }
      if (params.limit !== undefined) {
        queryParams['limit'] = params.limit;
      }
      if (params.offset !== undefined) {
        queryParams['offset'] = params.offset;
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.GetScheduleResponseDto> {
    let url = '/invoices/schedule/{scheduleId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];

    if (params) {
      if (params.scheduleId !== undefined) {
        url = url.replace('{' + 'scheduleId' + '}', encodeURIComponent(String(params.scheduleId)));
      }
      if (params.altId !== undefined) {
        queryParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        queryParams['altType'] = params.altType;
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.UpdateInvoiceScheduleResponseDto> {
    let url = '/invoices/schedule/{scheduleId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];

    if (params) {
      if (params.scheduleId !== undefined) {
        url = url.replace('{' + 'scheduleId' + '}', encodeURIComponent(String(params.scheduleId)));
      }
    }

    const config: AxiosRequestConfig = {
      method: 'PUT',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      data: requestBody,
      ...options
    };

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.DeleteInvoiceScheduleResponseDto> {
    let url = '/invoices/schedule/{scheduleId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];

    if (params) {
      if (params.scheduleId !== undefined) {
        url = url.replace('{' + 'scheduleId' + '}', encodeURIComponent(String(params.scheduleId)));
      }
      if (params.altId !== undefined) {
        queryParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        queryParams['altType'] = params.altType;
      }
    }

    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      ...options
    };

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.UpdateAndScheduleInvoiceScheduleResponseDto> {
    let url = '/invoices/schedule/{scheduleId}/updateAndSchedule';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];

    if (params) {
      if (params.scheduleId !== undefined) {
        url = url.replace('{' + 'scheduleId' + '}', encodeURIComponent(String(params.scheduleId)));
      }
    }

    const config: AxiosRequestConfig = {
      method: 'POST',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      ...options
    };

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.ScheduleInvoiceScheduleResponseDto> {
    let url = '/invoices/schedule/{scheduleId}/schedule';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];

    if (params) {
      if (params.scheduleId !== undefined) {
        url = url.replace('{' + 'scheduleId' + '}', encodeURIComponent(String(params.scheduleId)));
      }
    }

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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.AutoPaymentInvoiceScheduleResponseDto> {
    let url = '/invoices/schedule/{scheduleId}/auto-payment';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];

    if (params) {
      if (params.scheduleId !== undefined) {
        url = url.replace('{' + 'scheduleId' + '}', encodeURIComponent(String(params.scheduleId)));
      }
    }

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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.CancelInvoiceScheduleResponseDto> {
    let url = '/invoices/schedule/{scheduleId}/cancel';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];

    if (params) {
      if (params.scheduleId !== undefined) {
        url = url.replace('{' + 'scheduleId' + '}', encodeURIComponent(String(params.scheduleId)));
      }
    }

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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
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
    let url = '/invoices/text2pay';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];


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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.GenerateInvoiceNumberResponseDto> {
    let url = '/invoices/generate-invoice-number';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];

    if (params) {
      if (params.altId !== undefined) {
        queryParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        queryParams['altType'] = params.altType;
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.GetInvoiceResponseDto> {
    let url = '/invoices/{invoiceId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];

    if (params) {
      if (params.invoiceId !== undefined) {
        url = url.replace('{' + 'invoiceId' + '}', encodeURIComponent(String(params.invoiceId)));
      }
      if (params.altId !== undefined) {
        queryParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        queryParams['altType'] = params.altType;
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.UpdateInvoiceResponseDto> {
    let url = '/invoices/{invoiceId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];

    if (params) {
      if (params.invoiceId !== undefined) {
        url = url.replace('{' + 'invoiceId' + '}', encodeURIComponent(String(params.invoiceId)));
      }
    }

    const config: AxiosRequestConfig = {
      method: 'PUT',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      data: requestBody,
      ...options
    };

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.DeleteInvoiceResponseDto> {
    let url = '/invoices/{invoiceId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];

    if (params) {
      if (params.invoiceId !== undefined) {
        url = url.replace('{' + 'invoiceId' + '}', encodeURIComponent(String(params.invoiceId)));
      }
      if (params.altId !== undefined) {
        queryParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        queryParams['altType'] = params.altType;
      }
    }

    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      ...options
    };

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.UpdateInvoiceResponseDto> {
    let url = '/invoices/{invoiceId}/late-fees-configuration';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];

    if (params) {
      if (params.invoiceId !== undefined) {
        url = url.replace('{' + 'invoiceId' + '}', encodeURIComponent(String(params.invoiceId)));
      }
    }

    const config: AxiosRequestConfig = {
      method: 'PATCH',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      data: requestBody,
      ...options
    };

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.VoidInvoiceResponseDto> {
    let url = '/invoices/{invoiceId}/void';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];

    if (params) {
      if (params.invoiceId !== undefined) {
        url = url.replace('{' + 'invoiceId' + '}', encodeURIComponent(String(params.invoiceId)));
      }
    }

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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.SendInvoicesResponseDto> {
    let url = '/invoices/{invoiceId}/send';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];

    if (params) {
      if (params.invoiceId !== undefined) {
        url = url.replace('{' + 'invoiceId' + '}', encodeURIComponent(String(params.invoiceId)));
      }
    }

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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.RecordPaymentResponseDto> {
    let url = '/invoices/{invoiceId}/record-payment';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];

    if (params) {
      if (params.invoiceId !== undefined) {
        url = url.replace('{' + 'invoiceId' + '}', encodeURIComponent(String(params.invoiceId)));
      }
    }

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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<any> {
    let url = '/invoices/stats/last-visited-at';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];


    const config: AxiosRequestConfig = {
      method: 'PATCH',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      data: requestBody,
      ...options
    };

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.EstimateResponseDto> {
    let url = '/invoices/estimate';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];


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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.EstimateResponseDto> {
    let url = '/invoices/estimate/{estimateId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];

    if (params) {
      if (params.estimateId !== undefined) {
        url = url.replace('{' + 'estimateId' + '}', encodeURIComponent(String(params.estimateId)));
      }
    }

    const config: AxiosRequestConfig = {
      method: 'PUT',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      data: requestBody,
      ...options
    };

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.EstimateResponseDto> {
    let url = '/invoices/estimate/{estimateId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];

    if (params) {
      if (params.estimateId !== undefined) {
        url = url.replace('{' + 'estimateId' + '}', encodeURIComponent(String(params.estimateId)));
      }
    }

    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      data: requestBody,
      ...options
    };

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.GenerateEstimateNumberResponse> {
    let url = '/invoices/estimate/number/generate';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];

    if (params) {
      if (params.altId !== undefined) {
        queryParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        queryParams['altType'] = params.altType;
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.EstimateResponseDto> {
    let url = '/invoices/estimate/{estimateId}/send';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];

    if (params) {
      if (params.estimateId !== undefined) {
        url = url.replace('{' + 'estimateId' + '}', encodeURIComponent(String(params.estimateId)));
      }
    }

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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.CreateInvoiceFromEstimateResponseDTO> {
    let url = '/invoices/estimate/{estimateId}/invoice';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];

    if (params) {
      if (params.estimateId !== undefined) {
        url = url.replace('{' + 'estimateId' + '}', encodeURIComponent(String(params.estimateId)));
      }
    }

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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.ListEstimatesResponseDTO> {
    let url = '/invoices/estimate/list';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];

    if (params) {
      if (params.altId !== undefined) {
        queryParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        queryParams['altType'] = params.altType;
      }
      if (params.startAt !== undefined) {
        queryParams['startAt'] = params.startAt;
      }
      if (params.endAt !== undefined) {
        queryParams['endAt'] = params.endAt;
      }
      if (params.search !== undefined) {
        queryParams['search'] = params.search;
      }
      if (params.status !== undefined) {
        queryParams['status'] = params.status;
      }
      if (params.contactId !== undefined) {
        queryParams['contactId'] = params.contactId;
      }
      if (params.limit !== undefined) {
        queryParams['limit'] = params.limit;
      }
      if (params.offset !== undefined) {
        queryParams['offset'] = params.offset;
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<any> {
    let url = '/invoices/estimate/stats/last-visited-at';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];


    const config: AxiosRequestConfig = {
      method: 'PATCH',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      data: requestBody,
      ...options
    };

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.ListEstimateTemplateResponseDTO> {
    let url = '/invoices/estimate/template';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];

    if (params) {
      if (params.altId !== undefined) {
        queryParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        queryParams['altType'] = params.altType;
      }
      if (params.search !== undefined) {
        queryParams['search'] = params.search;
      }
      if (params.limit !== undefined) {
        queryParams['limit'] = params.limit;
      }
      if (params.offset !== undefined) {
        queryParams['offset'] = params.offset;
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.EstimateTemplateResponseDTO> {
    let url = '/invoices/estimate/template';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];


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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.EstimateTemplateResponseDTO> {
    let url = '/invoices/estimate/template/{templateId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];

    if (params) {
      if (params.templateId !== undefined) {
        url = url.replace('{' + 'templateId' + '}', encodeURIComponent(String(params.templateId)));
      }
    }

    const config: AxiosRequestConfig = {
      method: 'PUT',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      data: requestBody,
      ...options
    };

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.EstimateTemplateResponseDTO> {
    let url = '/invoices/estimate/template/{templateId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];

    if (params) {
      if (params.templateId !== undefined) {
        url = url.replace('{' + 'templateId' + '}', encodeURIComponent(String(params.templateId)));
      }
    }

    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      data: requestBody,
      ...options
    };

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.EstimateTemplateResponseDTO> {
    let url = '/invoices/estimate/template/preview';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];

    if (params) {
      if (params.altId !== undefined) {
        queryParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        queryParams['altType'] = params.altType;
      }
      if (params.templateId !== undefined) {
        queryParams['templateId'] = params.templateId;
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.CreateInvoiceResponseDto> {
    let url = '/invoices/';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];


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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
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
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<Models.ListInvoicesResponseDto> {
    let url = '/invoices/';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access","Agency-Access"];

    if (params) {
      if (params.altId !== undefined) {
        queryParams['altId'] = params.altId;
      }
      if (params.altType !== undefined) {
        queryParams['altType'] = params.altType;
      }
      if (params.status !== undefined) {
        queryParams['status'] = params.status;
      }
      if (params.startAt !== undefined) {
        queryParams['startAt'] = params.startAt;
      }
      if (params.endAt !== undefined) {
        queryParams['endAt'] = params.endAt;
      }
      if (params.search !== undefined) {
        queryParams['search'] = params.search;
      }
      if (params.paymentMode !== undefined) {
        queryParams['paymentMode'] = params.paymentMode;
      }
      if (params.contactId !== undefined) {
        queryParams['contactId'] = params.contactId;
      }
      if (params.limit !== undefined) {
        queryParams['limit'] = params.limit;
      }
      if (params.offset !== undefined) {
        queryParams['offset'] = params.offset;
      }
      if (params.sortField !== undefined) {
        queryParams['sortField'] = params.sortField;
      }
      if (params.sortOrder !== undefined) {
        queryParams['sortOrder'] = params.sortOrder;
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements, options?.preferredTokenType);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.ListInvoicesResponseDto> = await this.client.request(config);
    return response.data;
  }

}

export default Invoices; 