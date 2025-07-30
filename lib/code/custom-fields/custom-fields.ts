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
 &lt;/div&gt; 
 :::info
 Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.
 :::
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

    const response: AxiosResponse<Models.CustomFieldSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Custom Field By Id
   * &lt;div&gt;
 &lt;p&gt; Update Custom Field By Id &lt;/p&gt; 
 &lt;/div&gt; 
 :::info
 Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.
 :::
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

    const response: AxiosResponse<Models.CustomFieldSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Custom Field By Id
   * &lt;div&gt;
 &lt;p&gt; Delete Custom Field By Id &lt;/p&gt; 
 &lt;/div&gt; 
 :::info
 Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.
 :::
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

    const response: AxiosResponse<Models.CustomFolderDeleteResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Custom Fields By Object Key
   * &lt;div&gt;
 &lt;p&gt; Get Custom Fields By Object Key &lt;/p&gt; 
 &lt;/div&gt; 
 :::info
 Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.
 :::
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

    const response: AxiosResponse<Models.CustomFieldsResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Custom Field Folder
   * &lt;div&gt;
 &lt;p&gt; Create Custom Field Folder &lt;/p&gt; 
 &lt;/div&gt; 
 :::info
 Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.
 :::
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

    const response: AxiosResponse<Models.ICustomFieldFolder> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Custom Field Folder Name
   * &lt;div&gt;
 &lt;p&gt; Create Custom Field Folder &lt;/p&gt; 
 &lt;/div&gt; 
 :::info
 Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.
 :::
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

    const response: AxiosResponse<Models.ICustomFieldFolder> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Custom Field Folder
   * &lt;div&gt;
&lt;p&gt; Create Custom Field Folder &lt;/p&gt; 
 &lt;/div&gt; 
 :::info
 Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.
 :::
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

    const response: AxiosResponse<Models.CustomFolderDeleteResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Custom Field
   * &lt;div&gt;
&lt;p&gt; Create Custom Field &lt;/p&gt; 
 &lt;/div&gt; 
 :::info
 Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.
 :::
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

    const response: AxiosResponse<Models.CustomFieldSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

}

export default CustomFields; 