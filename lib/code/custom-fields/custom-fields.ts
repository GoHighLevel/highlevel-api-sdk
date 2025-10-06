import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/custom-fields';
import { buildUrl, extractParams, getAuthToken } from '../../utils/request-utils';

/**
 * CustomFields Service
 * Custom fields are data points that allow you to capture and store specific information tailored to your business requirements. You can create fields across field types like text, numeric, selection options and special fields like date/time or signature
 */
export class CustomFields {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Get Custom Field / Folder By Id
   * &lt;div&gt;
                  &lt;p&gt; Get Custom Field / Folder By Id.&lt;/p&gt; 
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
                        Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.
                        &lt;/strong&gt;
                      &lt;/span&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
   */
  async getCustomFieldById(
    params: {
      id: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.CustomFieldSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'id', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/custom-fields/{id}', extracted.path),
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
   * Update Custom Field By Id
   * &lt;div&gt;
    &lt;p&gt; Update Custom Field By Id &lt;/p&gt; 
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
          Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.
          &lt;/strong&gt;
        &lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;
   */
  async updateCustomField(
    params: {
      id: string;
    },
    requestBody: Models.UpdateCustomFieldsDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.CustomFieldSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'id', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'PUT',
      url: buildUrl('/custom-fields/{id}', extracted.path),
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
   * Delete Custom Field By Id
   * &lt;div&gt;
    &lt;p&gt; Delete Custom Field By Id &lt;/p&gt; 
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
          Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.
          &lt;/strong&gt;
        &lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;
   */
  async deleteCustomField(
    params: {
      id: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.CustomFolderDeleteResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'id', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: buildUrl('/custom-fields/{id}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.CustomFolderDeleteResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Custom Fields By Object Key
   * &lt;div&gt;
                  &lt;p&gt; Get Custom Fields By Object Key&lt;/p&gt; 
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
                        Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.
                        &lt;/strong&gt;
                      &lt;/span&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
   */
  async getCustomFieldsByObjectKey(
    params: {
      objectKey: string;
      locationId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.CustomFieldsResponseDTO> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'objectKey', in: 'path'},{name: 'locationId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/custom-fields/object-key/{objectKey}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.CustomFieldsResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Custom Field Folder
   * &lt;div&gt;
    &lt;p&gt; Create Custom Field Folder &lt;/p&gt; 
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
          Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.
          &lt;/strong&gt;
        &lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;
   */
  async createCustomFieldFolder(
    requestBody: Models.CreateFolder,
    options?: AxiosRequestConfig
  ): Promise<Models.ICustomFieldFolder> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/custom-fields/folder', extracted.path),
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

    const response: AxiosResponse<Models.ICustomFieldFolder> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Custom Field Folder Name
   * &lt;div&gt;
    &lt;p&gt; Create Custom Field Folder &lt;/p&gt; 
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
          Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.
          &lt;/strong&gt;
        &lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;
   */
  async updateCustomFieldFolder(
    params: {
      id: string;
    },
    requestBody: Models.UpdateFolder,
    options?: AxiosRequestConfig
  ): Promise<Models.ICustomFieldFolder> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'id', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'PUT',
      url: buildUrl('/custom-fields/folder/{id}', extracted.path),
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

    const response: AxiosResponse<Models.ICustomFieldFolder> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Custom Field Folder
   * &lt;div&gt;
    &lt;p&gt; Create Custom Field Folder &lt;/p&gt; 
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
          Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.
          &lt;/strong&gt;
        &lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;
   */
  async deleteCustomFieldFolder(
    params: {
      id: string;
      locationId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.CustomFolderDeleteResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'id', in: 'path'},{name: 'locationId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: buildUrl('/custom-fields/folder/{id}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.CustomFolderDeleteResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Custom Field
   * &lt;div&gt;
                  &lt;p&gt; Create Custom Field &lt;/p&gt; 
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
                        Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.
                        &lt;/strong&gt;
                      &lt;/span&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
   */
  async createCustomField(
    requestBody: Models.CreateCustomFieldsDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.CustomFieldSuccessfulResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/custom-fields/', extracted.path),
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

}

export default CustomFields; 