// Store Models

export interface ShippingZoneCountryStateDto {
  code: string;
}

export interface ShippingZoneCountryDto {
  code: number;
  states?: ShippingZoneCountryStateDto[];
}

export interface CreateShippingZoneDto {
  altId: string;
  altType: string;
  name: string;
  countries: ShippingZoneCountryDto[];
}

export interface ShippingCarrierServiceDto {
  name: string;
  value: string;
}

export interface ShippingRateSchema {
  altId: string;
  altType: string;
  name: string;
  description?: string;
  currency: string;
  amount: number;
  conditionType: string;
  minCondition: number;
  maxCondition: number;
  isCarrierRate?: boolean;
  shippingCarrierId: string;
  percentageOfRateFee?: number;
  shippingCarrierServices?: ShippingCarrierServiceDto[];
  _id: string;
  shippingZoneId: string;
  createdAt: string;
  updatedAt: string;
}

export interface ShippingZoneSchema {
  altId: string;
  altType: string;
  name: string;
  countries: ShippingZoneCountryDto[];
  _id: string;
  shippingRates?: ShippingRateSchema[];
  createdAt: string;
  updatedAt: string;
}

export interface CreateShippingZoneResponseDto {
  status: boolean;
  message?: string;
  data: any;
}

export interface ListShippingZoneResponseDto {
  total: number;
  data: ShippingZoneSchema[];
}

export interface GetShippingZoneResponseDto {
  status: boolean;
  message?: string;
  data: any;
}

export interface UpdateShippingZoneDto {
  altId?: string;
  altType?: string;
  name?: string;
  countries?: ShippingZoneCountryDto[];
}

export interface UpdateShippingZoneResponseDto {
  status: boolean;
  message?: string;
  data: any;
}

export interface DeleteShippingZoneResponseDto {
  status: boolean;
  message?: string;
}

export interface ContactAddress {
  name?: string;
  companyName?: string;
  addressLine1?: string;
  country: string;
  state?: string;
  city?: string;
  zip?: string;
  phone?: string;
  email?: string;
}

export interface OrderSource {
  type: string;
  subType?: string;
}

export interface ProductItem {
  id: string;
  qty: number;
}

export interface GetAvailableShippingRates {
  altId: string;
  altType: string;
  country: string;
  address?: any;
  amountAvailable?: string;
  totalOrderAmount: number;
  weightAvailable?: boolean;
  totalOrderWeight: number;
  source: any;
  products: ProductItem[];
  couponCode?: string;
}

export interface AvailableShippingRate {
  name: string;
  description?: string;
  currency: string;
  amount: number;
  isCarrierRate?: boolean;
  shippingCarrierId: string;
  percentageOfRateFee?: number;
  shippingCarrierServices?: ShippingCarrierServiceDto[];
  _id: string;
  shippingZoneId: string;
}

export interface GetAvailableShippingRatesResponseDto {
  status: boolean;
  message?: string;
  data: AvailableShippingRate[];
}

export interface CreateShippingRateDto {
  altId: string;
  altType: string;
  name: string;
  description?: string;
  currency: string;
  amount: number;
  conditionType: string;
  minCondition: number;
  maxCondition: number;
  isCarrierRate?: boolean;
  shippingCarrierId: string;
  percentageOfRateFee?: number;
  shippingCarrierServices?: ShippingCarrierServiceDto[];
}

export interface CreateShippingRateResponseDto {
  status: boolean;
  message?: string;
  data: any;
}

export interface ListShippingRateResponseDto {
  total: number;
  data: ShippingRateSchema[];
}

export interface GetShippingRateResponseDto {
  status: boolean;
  message?: string;
  data: any;
}

export interface UpdateShippingRateDto {
  altId?: string;
  altType?: string;
  name?: string;
  description?: string;
  currency?: string;
  amount?: number;
  conditionType?: string;
  minCondition?: number;
  maxCondition?: number;
  isCarrierRate?: boolean;
  shippingCarrierId?: string;
  percentageOfRateFee?: number;
  shippingCarrierServices?: ShippingCarrierServiceDto[];
}

export interface UpdateShippingRateResponseDto {
  status: boolean;
  message?: string;
  data: any;
}

export interface DeleteShippingRateResponseDto {
  status: boolean;
  message?: string;
}

export interface CreateShippingCarrierDto {
  altId: string;
  altType: string;
  name: string;
  callbackUrl: string;
  services?: ShippingCarrierServiceDto[];
  allowsMultipleServiceSelection?: boolean;
}

export interface ShippingCarrierSchema {
  altId: string;
  altType: string;
  name: string;
  callbackUrl: string;
  services?: ShippingCarrierServiceDto[];
  allowsMultipleServiceSelection?: boolean;
  _id: string;
  marketplaceAppId: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateShippingCarrierResponseDto {
  status: boolean;
  message?: string;
  data: any;
}

export interface ListShippingCarrierResponseDto {
  status: boolean;
  message?: string;
  data: ShippingCarrierSchema[];
}

export interface GetShippingCarrierResponseDto {
  status: boolean;
  message?: string;
  data: any;
}

export interface UpdateShippingCarrierDto {
  altId?: string;
  altType?: string;
  name?: string;
  callbackUrl?: string;
  services?: ShippingCarrierServiceDto[];
  allowsMultipleServiceSelection?: boolean;
}

export interface UpdateShippingCarrierResponseDto {
  status: boolean;
  message?: string;
  data: any;
}

export interface DeleteShippingCarrierResponseDto {
  status: boolean;
  message?: string;
}

export interface StoreShippingOriginDto {
  name: string;
  country: number;
  state?: string;
  city: string;
  street1: string;
  street2?: string;
  zip: string;
  phone?: string;
  email?: string;
}

export interface StoreOrderNotificationDto {
  enabled: boolean;
  subject: string;
  emailTemplateId: string;
  defaultEmailTemplateId: string;
}

export interface StoreOrderFulfillmentNotificationDto {
  enabled: boolean;
  subject: string;
  emailTemplateId: string;
  defaultEmailTemplateId: string;
}

export interface CreateStoreSettingDto {
  altId: string;
  altType: string;
  shippingOrigin: any;
  storeOrderNotification?: any;
  storeOrderFulfillmentNotification?: any;
}

export interface StoreSettingSchema {
  altId: string;
  altType: string;
  shippingOrigin: any;
  storeOrderNotification?: any;
  storeOrderFulfillmentNotification?: any;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateStoreSettingResponseDto {
  status: boolean;
  message?: string;
  data: any;
}

export interface GetStoreSettingResponseDto {
  status: boolean;
  message?: string;
  data: any;
}

