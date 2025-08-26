/**
 * Marketplace Models and Types
 * Generated from OpenAPI schema definitions
 */

export interface RaiseChargeBodyDTO {
  appId: string;
  meterId: string;
  eventId: string;
  userId?: string;
  locationId: string;
  companyId: string;
  description: string;
  price?: number;
  units: string;
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
  companyEmail: string;
  companyOwnerFullName?: string;
  userId: string;
  isWhitelabelCompany: boolean;
  companyHighLevelPlan?: string;
  marketplaceAppPlanId?: string;
  whitelabelDetails?: any;
}

export interface GetInstallerDetailsResponseDTO {
  installationDetails: any;
}

