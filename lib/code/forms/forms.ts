import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/forms';
import { buildUrl, extractParams, getAuthToken, RequestConfig } from '../../utils/request-utils';

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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'},{name: 'page', in: 'query'},{name: 'limit', in: 'query'},{name: 'formId', in: 'query'},{name: 'q', in: 'query'},{name: 'startAt', in: 'query'},{name: 'endAt', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/forms/submissions', extracted.path),
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'contactId', in: 'query'},{name: 'locationId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer","Location-Access"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/forms/upload-custom-files', extracted.path),
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'},{name: 'skip', in: 'query'},{name: 'limit', in: 'query'},{name: 'type', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/forms/', extracted.path),
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

    const response: AxiosResponse<Models.FormsSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

}

export default Forms; 