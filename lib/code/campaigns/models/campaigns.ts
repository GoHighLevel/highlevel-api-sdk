// @generated
// File generated from our OpenAPI spec
// Campaigns Models

export interface campaignsSchema {
  id?: string;
  name?: string;
  status?: string;
  locationId?: string;
}

export interface CampaignsSuccessfulResponseDto {
  campaigns?: campaignsSchema[];
}

