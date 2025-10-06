import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/saas-api';
import { buildUrl, extractParams, getAuthToken } from '../../utils/request-utils';

/**
 * SaasApi Service
 * API Service for SaaS
 */
export class SaasApi {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Get locations by stripeId with companyId
   * Get locations by stripeCustomerId or stripeSubscriptionId with companyId
   * @deprecated This method is deprecated
   */
  async locationsDeprecated(
    params: {
      customerId?: string;
      subscriptionId?: string;
      companyId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<string[]> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'customerId', in: 'query'},{name: 'subscriptionId', in: 'query'},{name: 'companyId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/saas-api/public-api/locations', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<string[]> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update SaaS subscription
   * Update SaaS subscription for given locationId and customerId
   * @deprecated This method is deprecated
   */
  async updateSaasSubscriptionDeprecated(
    params: {
      locationId: string;
    },
    requestBody: Models.UpdateSubscriptionDto,
    options?: AxiosRequestConfig
  ): Promise<string> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'PUT',
      url: buildUrl('/saas-api/public-api/update-saas-subscription/{locationId}', extracted.path),
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

    const response: AxiosResponse<string> = await this.client.request(config);
    return response.data;
  }

  /**
   * Disable SaaS for locations
   * Disable SaaS for locations for given locationIds
   * @deprecated This method is deprecated
   */
  async bulkDisableSaasDeprecated(
    params: {
      companyId: string;
    },
    requestBody: Models.BulkDisableSaasDto,
    options?: AxiosRequestConfig
  ): Promise<Models.BulkDisableSaasResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'companyId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/saas-api/public-api/bulk-disable-saas/{companyId}', extracted.path),
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

    const response: AxiosResponse<Models.BulkDisableSaasResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Enable SaaS for Sub-Account (Formerly Location)
   * &lt;div&gt;
                  &lt;p&gt;Enable SaaS for Sub-Account (Formerly Location) based on the data provided&lt;/p&gt;
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
    
   * @deprecated This method is deprecated
   */
  async enableSaasLocationDeprecated(
    params: {
      locationId: string;
    },
    requestBody: Models.EnableSaasDto,
    options?: AxiosRequestConfig
  ): Promise<Models.EnableSaasResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/saas-api/public-api/enable-saas/{locationId}', extracted.path),
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

    const response: AxiosResponse<Models.EnableSaasResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Pause location
   * Pause Sub account for given locationId
   * @deprecated This method is deprecated Use Sub account for given locationId instead.
   */
  async pauseLocationDeprecated(
    params: {
      locationId: string;
    },
    requestBody: Models.PauseLocationDto,
    options?: AxiosRequestConfig
  ): Promise<boolean> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/saas-api/public-api/pause/{locationId}', extracted.path),
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

    const response: AxiosResponse<boolean> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Rebilling
   * Bulk update rebilling for given locationIds
   * @deprecated This method is deprecated
   */
  async updateRebillingDeprecated(
    params: {
      companyId: string;
    },
    requestBody: Models.UpdateRebillingDto,
    options?: AxiosRequestConfig
  ): Promise<Models.UpdateRebillingResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'companyId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/saas-api/public-api/update-rebilling/{companyId}', extracted.path),
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

    const response: AxiosResponse<Models.UpdateRebillingResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Agency Plans
   * Fetch all agency subscription plans for a given company ID
   * @deprecated This method is deprecated
   */
  async getAgencyPlansDeprecated(
    params: {
      companyId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.AgencyPlanResponseDto[]> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'companyId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/saas-api/public-api/agency-plans/{companyId}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.AgencyPlanResponseDto[]> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Location Subscription Details
   * Fetch subscription details for a specific location from location metadata
   * @deprecated This method is deprecated
   */
  async getLocationSubscriptionDeprecated(
    params: {
      locationId: string;
      companyId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.LocationSubscriptionResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'},{name: 'companyId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/saas-api/public-api/get-saas-subscription/{locationId}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.LocationSubscriptionResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Bulk Enable SaaS
   * Enable SaaS mode for multiple locations with support for both SaaS v1 and v2
   * @deprecated This method is deprecated
   */
  async bulkEnableSaasDeprecated(
    params: {
      companyId: string;
    },
    requestBody: Models.BulkEnableSaasRequestDto,
    options?: AxiosRequestConfig
  ): Promise<Models.BulkEnableSaasResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'companyId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/saas-api/public-api/bulk-enable-saas/{companyId}', extracted.path),
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

    const response: AxiosResponse<Models.BulkEnableSaasResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get SaaS Locations
   * Fetch all SaaS-activated locations for a company with pagination
   * @deprecated This method is deprecated
   */
  async getSaasLocationsDeprecated(
    params: {
      companyId: string;
      page?: number;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetSaasLocationsResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'companyId', in: 'path'},{name: 'page', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/saas-api/public-api/saas-locations/{companyId}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.GetSaasLocationsResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get SaaS Plan
   * Fetch a specific SaaS plan by plan ID
   * @deprecated This method is deprecated
   */
  async getSaasPlanDeprecated(
    params: {
      planId: string;
      companyId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.SaasPlanResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'planId', in: 'path'},{name: 'companyId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/saas-api/public-api/saas-plan/{planId}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.SaasPlanResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get locations by stripeId with companyId
   * Get locations by stripeCustomerId or stripeSubscriptionId with companyId
   */
  async locations(
    params: {
      customerId: string;
      subscriptionId: string;
      companyId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<any> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'customerId', in: 'query'},{name: 'subscriptionId', in: 'query'},{name: 'companyId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/saas/locations', extracted.path),
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
   * Update SaaS subscription
   * Update SaaS subscription for given locationId and customerId
   */
  async generatePaymentLink(
    params: {
      locationId: string;
    },
    requestBody: Models.UpdateSubscriptionDto,
    options?: AxiosRequestConfig
  ): Promise<any> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'PUT',
      url: buildUrl('/saas/update-saas-subscription/{locationId}', extracted.path),
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

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * Disable SaaS for locations
   * Disable SaaS for locations for given locationIds
   */
  async bulkDisableSaas(
    params: {
      companyId: string;
    },
    requestBody: Models.BulkDisableSaasDto,
    options?: AxiosRequestConfig
  ): Promise<any> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'companyId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/saas/bulk-disable-saas/{companyId}', extracted.path),
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

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * Enable SaaS for Sub-Account (Formerly Location)
   * &lt;div&gt;
                  &lt;p&gt;Enable SaaS for Sub-Account (Formerly Location) based on the data provided&lt;/p&gt;
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
  async enableSaasLocation(
    params: {
      locationId: string;
    },
    requestBody: Models.EnableSaasDto,
    options?: AxiosRequestConfig
  ): Promise<any> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/saas/enable-saas/{locationId}', extracted.path),
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

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * Pause location
   * Pause Sub account for given locationId
   */
  async pauseLocation(
    params: {
      locationId: string;
    },
    requestBody: Models.PauseLocationDto,
    options?: AxiosRequestConfig
  ): Promise<any> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/saas/pause/{locationId}', extracted.path),
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

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Rebilling
   * Bulk update rebilling for given locationIds
   */
  async updateRebilling(
    params: {
      companyId: string;
    },
    requestBody: Models.UpdateRebillingDto,
    options?: AxiosRequestConfig
  ): Promise<any> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'companyId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/saas/update-rebilling/{companyId}', extracted.path),
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

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Agency Plans
   * Fetch all agency subscription plans for a given company ID
   */
  async getAgencyPlans(
    params: {
      companyId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<any> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'companyId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/saas/agency-plans/{companyId}', extracted.path),
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
   * Get Location Subscription Details
   * Fetch subscription details for a specific location from location metadata
   */
  async getLocationSubscription(
    params: {
      locationId: string;
      companyId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<any> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'},{name: 'companyId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/saas/get-saas-subscription/{locationId}', extracted.path),
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
   * Bulk Enable SaaS
   * Enable SaaS mode for multiple locations with support for both SaaS v1 and v2
   */
  async bulkEnableSaas(
    params: {
      companyId: string;
    },
    requestBody: Models.BulkEnableSaasRequestDto,
    options?: AxiosRequestConfig
  ): Promise<any> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'companyId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/saas/bulk-enable-saas/{companyId}', extracted.path),
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

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get SaaS Locations
   * Fetch all SaaS-activated locations for a company with pagination
   */
  async getSaasLocations(
    params: {
      companyId: string;
      page: number;
    },
    options?: AxiosRequestConfig
  ): Promise<any> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'companyId', in: 'path'},{name: 'page', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/saas/saas-locations/{companyId}', extracted.path),
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
   * Get SaaS Plan
   * Fetch a specific SaaS plan by plan ID
   */
  async getSaasPlan(
    params: {
      planId: string;
      companyId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<any> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'planId', in: 'path'},{name: 'companyId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Agency-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/saas/saas-plan/{planId}', extracted.path),
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

}

export default SaasApi; 