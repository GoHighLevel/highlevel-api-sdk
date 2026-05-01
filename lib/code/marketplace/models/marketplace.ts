// Marketplace Models

export interface RaiseChargeBodyDTO {
  appId: string;
  meterId: string;
  eventId: string;
  userId?: string;
  locationId: string;
  companyId: string;
  description: string;
  price?: number;
  units: number;
  eventTime?: string;
}

export interface DeleteIntegrationBodyDto {
  companyId?: string;
  locationId?: string;
  reason?: string;
}

export interface DeleteIntegrationResponse {
  success: boolean;
}

export interface WhitelabelDetailsDTO {
  domain: string;
  logoUrl: string;
}

export interface InstallerDetailsDTO {
  companyId: string;
  locationId?: string;
  companyName: string;
  relationshipNumber: string;
  companyEmail?: string;
  companyOwnerFullName?: string;
  userId: string;
  isWhitelabelCompany: boolean;
  companyPlan?: string;
  companyHighLevelPlan?: string;
  marketplaceAppPlanId?: string;
  whitelabelDetails?: any;
}

export interface GetInstallerDetailsResponseDTO {
  installationDetails: any;
}

export interface SubscriptionPlanDTO {
  resellingAmount: number;
  baseAmount: number;
  planId: string;
  features: string[];
  paymentType: string;
  name: string;
  paymentTime: string;
}

export interface UsagePlanDTO {
  productType: string;
  productName: string;
  usageUnit: string;
  meterId: string;
  meterName: string;
  fixedPricePerUnit: number;
  priceType: string;
  minPricePerUnit: string;
  maxPricePerUnit: string;
  executionLimitPerCycle: number;
}

export interface PlansDTO {
  subscription: SubscriptionPlanDTO[];
  usage: UsagePlanDTO[];
}

export interface GetRebillingConfigResponseDTO {
  plans: any;
}

export interface MigrateConnectionDto {
  type: string;
  locationId: string;
  appId: string;
  appVersionId: string;
  accountId: string;
  apiKey?: string;
  basicCredentials?: any;
  accessToken?: string;
  refreshToken?: string;
  expiryIn?: number;
  expiryAt?: number;
  scopes?: string[];
  displayName?: string;
  isDefault?: boolean;
}

export interface MigrateConnectionResponseDto {
  success: boolean;
  identifier: string;
  message?: string;
}

export interface InternalServerErrorDTO {
  statusCode?: number;
  message?: string;
}

