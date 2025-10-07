import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/store';
import { buildUrl, extractParams, getAuthToken, RequestConfig } from '../../utils/request-utils';

/**
 * Store Service
 * Documentation for store API
 */
export class Store {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Create Shipping Zone
   * The &quot;Create Shipping Zone&quot; API allows adding a new shipping zone.
   */
  async createShippingZone(
    requestBody: Models.CreateShippingZoneDto,
    options?: AxiosRequestConfig
  ): Promise<Models.CreateShippingZoneResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/store/shipping-zone', extracted.path),
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

    const response: AxiosResponse<Models.CreateShippingZoneResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * List Shipping Zones
   * The &quot;List Shipping Zone&quot; API allows to retrieve a list of shipping zone.
   */
  async listShippingZones(
    params: {
      altId: string;
      altType: string;
      limit?: number;
      offset?: number;
      withShippingRate?: boolean;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.ListShippingZoneResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'altId', in: 'query'},{name: 'altType', in: 'query'},{name: 'limit', in: 'query'},{name: 'offset', in: 'query'},{name: 'withShippingRate', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/store/shipping-zone', extracted.path),
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

    const response: AxiosResponse<Models.ListShippingZoneResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Shipping Zone
   * The &quot;List Shipping Zone&quot; API allows to retrieve a paginated list of shipping zone.
   */
  async getShippingZones(
    params: {
      shippingZoneId: string;
      altId: string;
      altType: string;
      withShippingRate?: boolean;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetShippingZoneResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'shippingZoneId', in: 'path'},{name: 'altId', in: 'query'},{name: 'altType', in: 'query'},{name: 'withShippingRate', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/store/shipping-zone/{shippingZoneId}', extracted.path),
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

    const response: AxiosResponse<Models.GetShippingZoneResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Shipping Zone
   * The &quot;update Shipping Zone&quot; API allows update a shipping zone to the system. 
   */
  async updateShippingZone(
    params: {
      shippingZoneId: string;
    },
    requestBody: Models.UpdateShippingZoneDto,
    options?: AxiosRequestConfig
  ): Promise<Models.UpdateShippingZoneResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'shippingZoneId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'PUT',
      url: buildUrl('/store/shipping-zone/{shippingZoneId}', extracted.path),
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

    const response: AxiosResponse<Models.UpdateShippingZoneResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete shipping zone
   * Delete specific shipping zone with Id :shippingZoneId
   */
  async deleteShippingZone(
    params: {
      shippingZoneId: string;
      altId: string;
      altType: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.DeleteShippingZoneResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'shippingZoneId', in: 'path'},{name: 'altId', in: 'query'},{name: 'altType', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'DELETE',
      url: buildUrl('/store/shipping-zone/{shippingZoneId}', extracted.path),
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

    const response: AxiosResponse<Models.DeleteShippingZoneResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get available shipping rates
   * This return available shipping rates for country based on order amount
   */
  async getAvailableShippingZones(
    requestBody: Models.GetAvailableShippingRates,
    options?: AxiosRequestConfig
  ): Promise<Models.GetAvailableShippingRatesResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = [];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/store/shipping-zone/shipping-rates', extracted.path),
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

    const response: AxiosResponse<Models.GetAvailableShippingRatesResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Shipping Rate
   * The &quot;Create Shipping Rate&quot; API allows adding a new shipping rate.
   */
  async createShippingRate(
    params: {
      shippingZoneId: string;
    },
    requestBody: Models.CreateShippingRateDto,
    options?: AxiosRequestConfig
  ): Promise<Models.CreateShippingRateResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'shippingZoneId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/store/shipping-zone/{shippingZoneId}/shipping-rate', extracted.path),
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

    const response: AxiosResponse<Models.CreateShippingRateResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * List Shipping Rates
   * The &quot;List Shipping Rate&quot; API allows to retrieve a list of shipping rate.
   */
  async listShippingRates(
    params: {
      shippingZoneId: string;
      altId: string;
      altType: string;
      limit?: number;
      offset?: number;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.ListShippingRateResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'shippingZoneId', in: 'path'},{name: 'altId', in: 'query'},{name: 'altType', in: 'query'},{name: 'limit', in: 'query'},{name: 'offset', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/store/shipping-zone/{shippingZoneId}/shipping-rate', extracted.path),
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

    const response: AxiosResponse<Models.ListShippingRateResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Shipping Rate
   * The &quot;List Shipping Rate&quot; API allows to retrieve a paginated list of shipping rate.
   */
  async getShippingRates(
    params: {
      shippingZoneId: string;
      shippingRateId: string;
      altId: string;
      altType: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetShippingRateResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'shippingZoneId', in: 'path'},{name: 'shippingRateId', in: 'path'},{name: 'altId', in: 'query'},{name: 'altType', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/store/shipping-zone/{shippingZoneId}/shipping-rate/{shippingRateId}', extracted.path),
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

    const response: AxiosResponse<Models.GetShippingRateResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Shipping Rate
   * The &quot;update Shipping Rate&quot; API allows update a shipping rate to the system. 
   */
  async updateShippingRate(
    params: {
      shippingZoneId: string;
      shippingRateId: string;
    },
    requestBody: Models.UpdateShippingRateDto,
    options?: AxiosRequestConfig
  ): Promise<Models.UpdateShippingRateResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'shippingZoneId', in: 'path'},{name: 'shippingRateId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'PUT',
      url: buildUrl('/store/shipping-zone/{shippingZoneId}/shipping-rate/{shippingRateId}', extracted.path),
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

    const response: AxiosResponse<Models.UpdateShippingRateResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete shipping rate
   * Delete specific shipping rate with Id :shippingRateId
   */
  async deleteShippingRate(
    params: {
      shippingZoneId: string;
      shippingRateId: string;
      altId: string;
      altType: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.DeleteShippingRateResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'shippingZoneId', in: 'path'},{name: 'shippingRateId', in: 'path'},{name: 'altId', in: 'query'},{name: 'altType', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'DELETE',
      url: buildUrl('/store/shipping-zone/{shippingZoneId}/shipping-rate/{shippingRateId}', extracted.path),
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

    const response: AxiosResponse<Models.DeleteShippingRateResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Shipping Carrier
   * The &quot;Create Shipping Carrier&quot; API allows adding a new shipping carrier.
   */
  async createShippingCarrier(
    requestBody: Models.CreateShippingCarrierDto,
    options?: AxiosRequestConfig
  ): Promise<Models.CreateShippingCarrierResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/store/shipping-carrier', extracted.path),
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

    const response: AxiosResponse<Models.CreateShippingCarrierResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * List Shipping Carriers
   * The &quot;List Shipping Carrier&quot; API allows to retrieve a list of shipping carrier.
   */
  async listShippingCarriers(
    params: {
      altId: string;
      altType: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.ListShippingCarrierResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'altId', in: 'query'},{name: 'altType', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/store/shipping-carrier', extracted.path),
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

    const response: AxiosResponse<Models.ListShippingCarrierResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Shipping Carrier
   * The &quot;List Shipping Carrier&quot; API allows to retrieve a paginated list of shipping carrier.
   */
  async getShippingCarriers(
    params: {
      shippingCarrierId: string;
      altId: string;
      altType: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetShippingCarrierResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'shippingCarrierId', in: 'path'},{name: 'altId', in: 'query'},{name: 'altType', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/store/shipping-carrier/{shippingCarrierId}', extracted.path),
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

    const response: AxiosResponse<Models.GetShippingCarrierResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Shipping Carrier
   * The &quot;update Shipping Carrier&quot; API allows update a shipping carrier to the system. 
   */
  async updateShippingCarrier(
    params: {
      shippingCarrierId: string;
    },
    requestBody: Models.UpdateShippingCarrierDto,
    options?: AxiosRequestConfig
  ): Promise<Models.UpdateShippingCarrierResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'shippingCarrierId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'PUT',
      url: buildUrl('/store/shipping-carrier/{shippingCarrierId}', extracted.path),
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

    const response: AxiosResponse<Models.UpdateShippingCarrierResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete shipping carrier
   * Delete specific shipping carrier with Id :shippingCarrierId
   */
  async deleteShippingCarrier(
    params: {
      shippingCarrierId: string;
      altId: string;
      altType: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.DeleteShippingCarrierResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'shippingCarrierId', in: 'path'},{name: 'altId', in: 'query'},{name: 'altType', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'DELETE',
      url: buildUrl('/store/shipping-carrier/{shippingCarrierId}', extracted.path),
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

    const response: AxiosResponse<Models.DeleteShippingCarrierResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create/Update Store Settings
   * Create or update store settings by altId and altType.
   */
  async createStoreSetting(
    requestBody: Models.CreateStoreSettingDto,
    options?: AxiosRequestConfig
  ): Promise<Models.CreateStoreSettingResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'POST',
      url: buildUrl('/store/store-setting', extracted.path),
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

    const response: AxiosResponse<Models.CreateStoreSettingResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Store Settings
   * Get store settings by altId and altType.
   */
  async getStoreSettings(
    params: {
      altId: string;
      altType: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetStoreSettingResponseDto> {
    const paramDefs: Array<{name: string, in: string}> = [{name: 'altId', in: 'query'},{name: 'altType', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/store/store-setting', extracted.path),
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

    const response: AxiosResponse<Models.GetStoreSettingResponseDto> = await this.client.request(config);
    return response.data;
  }

}

export default Store; 