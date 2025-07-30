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
  units: string;
  eventTime?: string;
}

