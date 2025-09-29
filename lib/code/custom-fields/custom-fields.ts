import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/custom-fields';

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
    let url = '/custom-fields/{id}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.id !== undefined) {
        url = url.replace('{' + 'id' + '}', encodeURIComponent(String(params.id)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.id !== undefined) {
        allParams['id'] = params.id;
      }
    }

    const config: AxiosRequestConfig = {
      method: 'GET',
      url,
      params: { ...queryParams, ...allParams },
      headers: {
        ...headerParams,
        ...options?.headers
      },
      // Store security requirements for error handling
      __secutiryRequirements: securityRequirements,
      ...options
    };

    // Get appropriate authorization token based on security requirements
    const ghlInstance = (this.client as any).__ghlInstance;
    if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
      try {
        // Combine headerParams with headers from options
        const combinedHeaders = {
          ...headerParams,
          ...options?.headers
        };
        
        // Combine queryParams with allParams for token resolution
        const combinedQuery = {
          ...queryParams,
          ...allParams
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          combinedQuery,
          {}
        );
        
        if (authToken) {
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        }
      } catch (error) {
        throw error; // Re-throw authentication errors
      }
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
    let url = '/custom-fields/{id}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.id !== undefined) {
        url = url.replace('{' + 'id' + '}', encodeURIComponent(String(params.id)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.id !== undefined) {
        allParams['id'] = params.id;
      }
    }

    const config: AxiosRequestConfig = {
      method: 'PUT',
      url,
      params: { ...queryParams, ...allParams },
      headers: {
        ...headerParams,
        ...options?.headers
      },
      data: requestBody,
      // Store security requirements for error handling
      __secutiryRequirements: securityRequirements,
      ...options
    };

    // Get appropriate authorization token based on security requirements
    const ghlInstance = (this.client as any).__ghlInstance;
    if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
      try {
        // Combine headerParams with headers from options
        const combinedHeaders = {
          ...headerParams,
          ...options?.headers
        };
        
        // Combine queryParams with allParams for token resolution
        const combinedQuery = {
          ...queryParams,
          ...allParams
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          combinedQuery,
          requestBody
        );
        
        if (authToken) {
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        }
      } catch (error) {
        throw error; // Re-throw authentication errors
      }
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
    let url = '/custom-fields/{id}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.id !== undefined) {
        url = url.replace('{' + 'id' + '}', encodeURIComponent(String(params.id)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.id !== undefined) {
        allParams['id'] = params.id;
      }
    }

    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url,
      params: { ...queryParams, ...allParams },
      headers: {
        ...headerParams,
        ...options?.headers
      },
      // Store security requirements for error handling
      __secutiryRequirements: securityRequirements,
      ...options
    };

    // Get appropriate authorization token based on security requirements
    const ghlInstance = (this.client as any).__ghlInstance;
    if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
      try {
        // Combine headerParams with headers from options
        const combinedHeaders = {
          ...headerParams,
          ...options?.headers
        };
        
        // Combine queryParams with allParams for token resolution
        const combinedQuery = {
          ...queryParams,
          ...allParams
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          combinedQuery,
          {}
        );
        
        if (authToken) {
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        }
      } catch (error) {
        throw error; // Re-throw authentication errors
      }
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
    let url = '/custom-fields/object-key/{objectKey}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.objectKey !== undefined) {
        url = url.replace('{' + 'objectKey' + '}', encodeURIComponent(String(params.objectKey)));
      }
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.objectKey !== undefined) {
        allParams['objectKey'] = params.objectKey;
      }
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
    }

    const config: AxiosRequestConfig = {
      method: 'GET',
      url,
      params: { ...queryParams, ...allParams },
      headers: {
        ...headerParams,
        ...options?.headers
      },
      // Store security requirements for error handling
      __secutiryRequirements: securityRequirements,
      ...options
    };

    // Get appropriate authorization token based on security requirements
    const ghlInstance = (this.client as any).__ghlInstance;
    if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
      try {
        // Combine headerParams with headers from options
        const combinedHeaders = {
          ...headerParams,
          ...options?.headers
        };
        
        // Combine queryParams with allParams for token resolution
        const combinedQuery = {
          ...queryParams,
          ...allParams
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          combinedQuery,
          {}
        );
        
        if (authToken) {
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        }
      } catch (error) {
        throw error; // Re-throw authentication errors
      }
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
    let url = '/custom-fields/folder';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};

    const config: AxiosRequestConfig = {
      method: 'POST',
      url,
      params: { ...queryParams, ...allParams },
      headers: {
        ...headerParams,
        ...options?.headers
      },
      data: requestBody,
      // Store security requirements for error handling
      __secutiryRequirements: securityRequirements,
      ...options
    };

    // Get appropriate authorization token based on security requirements
    const ghlInstance = (this.client as any).__ghlInstance;
    if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
      try {
        // Combine headerParams with headers from options
        const combinedHeaders = {
          ...headerParams,
          ...options?.headers
        };
        
        // Combine queryParams with allParams for token resolution
        const combinedQuery = {
          ...queryParams,
          ...allParams
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          combinedQuery,
          requestBody
        );
        
        if (authToken) {
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        }
      } catch (error) {
        throw error; // Re-throw authentication errors
      }
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
    let url = '/custom-fields/folder/{id}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.id !== undefined) {
        url = url.replace('{' + 'id' + '}', encodeURIComponent(String(params.id)));
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.id !== undefined) {
        allParams['id'] = params.id;
      }
    }

    const config: AxiosRequestConfig = {
      method: 'PUT',
      url,
      params: { ...queryParams, ...allParams },
      headers: {
        ...headerParams,
        ...options?.headers
      },
      data: requestBody,
      // Store security requirements for error handling
      __secutiryRequirements: securityRequirements,
      ...options
    };

    // Get appropriate authorization token based on security requirements
    const ghlInstance = (this.client as any).__ghlInstance;
    if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
      try {
        // Combine headerParams with headers from options
        const combinedHeaders = {
          ...headerParams,
          ...options?.headers
        };
        
        // Combine queryParams with allParams for token resolution
        const combinedQuery = {
          ...queryParams,
          ...allParams
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          combinedQuery,
          requestBody
        );
        
        if (authToken) {
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        }
      } catch (error) {
        throw error; // Re-throw authentication errors
      }
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
    let url = '/custom-fields/folder/{id}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.id !== undefined) {
        url = url.replace('{' + 'id' + '}', encodeURIComponent(String(params.id)));
      }
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
    }

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};
    if (params) {
      if (params.id !== undefined) {
        allParams['id'] = params.id;
      }
      if (params.locationId !== undefined) {
        allParams['locationId'] = params.locationId;
      }
    }

    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url,
      params: { ...queryParams, ...allParams },
      headers: {
        ...headerParams,
        ...options?.headers
      },
      // Store security requirements for error handling
      __secutiryRequirements: securityRequirements,
      ...options
    };

    // Get appropriate authorization token based on security requirements
    const ghlInstance = (this.client as any).__ghlInstance;
    if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
      try {
        // Combine headerParams with headers from options
        const combinedHeaders = {
          ...headerParams,
          ...options?.headers
        };
        
        // Combine queryParams with allParams for token resolution
        const combinedQuery = {
          ...queryParams,
          ...allParams
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          combinedQuery,
          {}
        );
        
        if (authToken) {
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        }
      } catch (error) {
        throw error; // Re-throw authentication errors
      }
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
    let url = '/custom-fields/';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    

    // Collect all parameters for token resolution (including path params)
    const allParams: Record<string, any> = {};

    const config: AxiosRequestConfig = {
      method: 'POST',
      url,
      params: { ...queryParams, ...allParams },
      headers: {
        ...headerParams,
        ...options?.headers
      },
      data: requestBody,
      // Store security requirements for error handling
      __secutiryRequirements: securityRequirements,
      ...options
    };

    // Get appropriate authorization token based on security requirements
    const ghlInstance = (this.client as any).__ghlInstance;
    if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
      try {
        // Combine headerParams with headers from options
        const combinedHeaders = {
          ...headerParams,
          ...options?.headers
        };
        
        // Combine queryParams with allParams for token resolution
        const combinedQuery = {
          ...queryParams,
          ...allParams
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          combinedQuery,
          requestBody
        );
        
        if (authToken) {
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        }
      } catch (error) {
        throw error; // Re-throw authentication errors
      }
    }

    const response: AxiosResponse<Models.CustomFieldSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

}

export default CustomFields; 