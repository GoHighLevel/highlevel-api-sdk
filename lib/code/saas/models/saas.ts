/**
 * Saas Models and Types
 * Generated from OpenAPI schema definitions
 */

export interface ResourceNotFoundDTO {
  statusCode?: number;
  message?: string;
}

export interface InternalServerErrorDTO {
  statusCode?: number;
  message?: string;
}

export interface UpdateSubscriptionDto {
  subscriptionId: string;
  customerId: string;
  companyId: string;
}

export interface BulkDisableSaasDto {
  locationIds: string[];
}

export interface BulkDisableSaasResponseDto {
  data: any;
}

export interface EnableSaasDto {
  stripeAccountId?: string;
  name?: string;
  email?: string;
  stripeCustomerId?: string;
  companyId: string;
  isSaaSV2: boolean;
  contactId?: string;
  providerLocationId?: string;
  description?: string;
  saasPlanId?: string;
  priceId?: string;
}

export interface EnableSaasResponseDto {
  data: any;
}

export interface PauseLocationDto {
  paused: boolean;
  companyId: string;
}

export interface UpdateRebillingDto {
  product: string;
  locationIds: string[];
  config: any;
}

export interface UpdateRebillingResponseDto {
  success: boolean;
}

export interface AgencyPlanResponseDto {
  planId: string;
  title: string;
  description: string;
  saasProducts: string[];
  addOns?: string[];
  planLevel: number;
  trialPeriod: number;
  userLimit?: number;
  contactLimit?: number;
  prices: any[];
  categoryId?: string;
  snapshotId?: string;
  productId?: string;
  isSaaSV2: boolean;
  providerLocationId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface LocationSubscriptionResponseDto {
  locationId: string;
  isSaaSV2: boolean;
  companyId: string;
  saasMode?: string;
  subscriptionId?: string;
  customerId?: string;
  productId?: string;
  priceId?: string;
  saasPlanId?: string;
  subscriptionStatus?: string;
}

export interface BulkEnableSaasActionPayloadDto {
  priceId?: string;
  stripeAccountId?: string;
  saasPlanId: string;
  providerLocationId?: string;
}

export interface BulkEnableSaasRequestDto {
  locationIds: string[];
  isSaaSV2: boolean;
  actionPayload: any;
}

export interface BulkEnableSaasResponseDto {
  success: boolean;
  message: string;
  bulkActionUrl?: string;
}

export interface SaasLocationDto {
  locationId: string;
  companyId: string;
  saasMode: string;
  subscriptionId: string;
  customerId?: string;
  name?: string;
  email?: string;
  providerLocationId?: string;
  isSaaSV2?: boolean;
  subscriptionInfo?: any;
}

export interface GetSaasLocationsResponseDto {
  locations: SaasLocationDto[];
  pagination: any;
}

export interface SaasPlanResponseDto {
  planId: string;
  companyId: string;
  title: string;
  description: string;
  saasProducts: string[];
  addOns?: string[];
  planLevel: number;
  trialPeriod: number;
  setupFee?: number;
  userLimit?: number;
  contactLimit?: number;
  prices: any[];
  categoryId?: string;
  snapshotId?: string;
  providerLocationId?: string;
  productId?: string;
  isSaaSV2: boolean;
  createdAt: string;
  updatedAt: string;
}

