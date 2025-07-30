/**
 * Campaigns Models and Types
 * Generated from OpenAPI schema definitions
 */

export interface campaignsSchema {
  id?: string;
  name?: string;
  status?: string;
  locationId?: string;
}

export interface CampaignsSuccessfulResponseDto {
  campaigns?: campaignsSchema[];
}

