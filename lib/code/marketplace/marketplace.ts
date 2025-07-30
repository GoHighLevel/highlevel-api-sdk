import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/marketplace';

/**
 * Marketplace Service
 * Documentation for Marketplace API
 */
export class Marketplace {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Create a new wallet charge
   * &lt;div&gt;
                  &lt;p&gt;Create a new wallet charge&lt;/p&gt; 
                  &lt;div&gt;
&lt;span&gt;
                     :::info
 This feature is currently in Private Beta and not available to all developers.
 :::  
 &lt;/span&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
    
   */
  async charge(
    requestBody: Models.RaiseChargeBodyDTO,
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<any> {
    let url = '/marketplace/billing/charges';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access-Only"];


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

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get all wallet charges
   * &lt;div&gt;
                  &lt;p&gt;Get all wallet charges&lt;/p&gt; 
                  &lt;div&gt;
&lt;span&gt;
                     :::info
 This feature is currently in Private Beta and not available to all developers.
 :::  
 &lt;/span&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
    
   */
  async getCharges(
    params: {
      meterId?: string;
      eventId?: string;
      userId?: string;
      startDate?: string;
      endDate?: string;
      skip?: number;
      limit?: number;
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<any> {
    let url = '/marketplace/billing/charges';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access-Only"];

    if (params) {
      if (params.meterId !== undefined) {
        queryParams['meterId'] = params.meterId;
      }
      if (params.eventId !== undefined) {
        queryParams['eventId'] = params.eventId;
      }
      if (params.userId !== undefined) {
        queryParams['userId'] = params.userId;
      }
      if (params.startDate !== undefined) {
        queryParams['startDate'] = params.startDate;
      }
      if (params.endDate !== undefined) {
        queryParams['endDate'] = params.endDate;
      }
      if (params.skip !== undefined) {
        queryParams['skip'] = params.skip;
      }
      if (params.limit !== undefined) {
        queryParams['limit'] = params.limit;
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

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete a wallet charge
   * &lt;div&gt;
                  &lt;p&gt;Delete a wallet charge&lt;/p&gt; 
                  &lt;div&gt;
&lt;span&gt;
                     :::info
 This feature is currently in Private Beta and not available to all developers.
 :::  
 &lt;/span&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
    
   */
  async deleteCharge(
    params: {
      chargeId: string;
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<any> {
    let url = '/marketplace/billing/charges/{chargeId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access-Only"];

    if (params) {
      if (params.chargeId !== undefined) {
        url = url.replace('{' + 'chargeId' + '}', encodeURIComponent(String(params.chargeId)));
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

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get specific wallet charge details
   * &lt;div&gt;
                  &lt;p&gt;Get specific wallet charge details&lt;/p&gt; 
                  &lt;div&gt;
&lt;span&gt;
                     :::info
 This feature is currently in Private Beta and not available to all developers.
 :::  
 &lt;/span&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
    
   */
  async getSpecificCharge(
    params: {
      chargeId: string;
    },
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<any> {
    let url = '/marketplace/billing/charges/{chargeId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access-Only"];

    if (params) {
      if (params.chargeId !== undefined) {
        url = url.replace('{' + 'chargeId' + '}', encodeURIComponent(String(params.chargeId)));
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

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * Check if account has sufficient funds
   * &lt;div&gt;
                  &lt;p&gt;Check if account has sufficient funds&lt;/p&gt; 
                  &lt;div&gt;
&lt;span&gt;
                     :::info
 This feature is currently in Private Beta and not available to all developers.
 :::  
 &lt;/span&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
    
   */
  async hasFunds(
    options?: AxiosRequestConfig & { preferredTokenType?: 'agency' | 'location' }
  ): Promise<any> {
    let url = '/marketplace/billing/charges/has-funds';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access-Only"];


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

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

}

export default Marketplace; 