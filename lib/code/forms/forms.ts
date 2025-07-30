import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/forms';

/**
 * Forms Service
 * Documentation for forms API
 */
export class Forms {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Get Forms Submissions
   * Get Forms Submissions
   */
  async getFormsSubmissions(
    params: {
      locationId: string;
      page?: number;
      limit?: number;
      formId?: string;
      q?: string;
      startAt?: string;
      endAt?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.FormsSubmissionsSuccessfulResponseDto> {
    let url = '/forms/submissions';
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
      if (params.formId !== undefined) {
        queryParams['formId'] = params.formId;
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

    const response: AxiosResponse<Models.FormsSubmissionsSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Upload files to custom fields
   * Post the necessary fields for the API to upload files. The files need to be a buffer with the key &quot;&lt; custom_field_id &gt;_&lt; file_id &gt;&quot;. &lt;br /&gt; Here custom field id is the ID of your custom field and file id is a randomly generated id (or uuid) &lt;br /&gt; There is support for multiple file uploads as well. Have multiple fields in the format mentioned.&lt;br /&gt;File size is limited to 50 MB.&lt;br /&gt;&lt;br /&gt; The allowed file types are: &lt;br/&gt; &lt;ul&gt;&lt;li&gt;PDF&lt;/li&gt;&lt;li&gt;DOCX&lt;/li&gt;&lt;li&gt;DOC&lt;/li&gt;&lt;li&gt;JPG&lt;/li&gt;&lt;li&gt;JPEG&lt;/li&gt;&lt;li&gt;PNG&lt;/li&gt;&lt;li&gt;GIF&lt;/li&gt;&lt;li&gt;CSV&lt;/li&gt;&lt;li&gt;XLSX&lt;/li&gt;&lt;li&gt;XLS&lt;/li&gt;&lt;li&gt;MP4&lt;/li&gt;&lt;li&gt;MPEG&lt;/li&gt;&lt;li&gt;ZIP&lt;/li&gt;&lt;li&gt;RAR&lt;/li&gt;&lt;li&gt;TXT&lt;/li&gt;&lt;li&gt;SVG&lt;/li&gt;&lt;/ul&gt; &lt;br /&gt;&lt;br /&gt; The API will return the updated contact object.
   */
  async uploadToCustomFields(
    params: {
      contactId: string;
      locationId: string;
    },
    requestBody: any,
    options?: AxiosRequestConfig
  ): Promise<any> {
    let url = '/forms/upload-custom-files';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer","Location-Access"];

    if (params) {
      if (params.contactId !== undefined) {
        queryParams['contactId'] = params.contactId;
      }
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
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

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Forms
   * Get Forms
   */
  async getForms(
    params: {
      locationId: string;
      skip?: number;
      limit?: number;
      type?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.FormsSuccessfulResponseDto> {
    let url = '/forms/';
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

    const response: AxiosResponse<Models.FormsSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

}

export default Forms; 