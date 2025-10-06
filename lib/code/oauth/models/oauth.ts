// Oauth Models

export interface GetAccessCodebodyDto {
  client_id: string;
  client_secret: string;
  grant_type: string;
  code?: string;
  refresh_token?: string;
  user_type?: string;
  redirect_uri?: string;
}

export interface GetAccessCodeSuccessfulResponseDto {
  access_token?: string;
  token_type?: string;
  expires_in?: number;
  refresh_token?: string;
  scope?: string;
  userType?: string;
  locationId?: string;
  companyId?: string;
  approvedLocations?: string[];
  userId: string;
  planId?: string;
  isBulkInstallation?: boolean;
}

export interface GetLocationAccessCodeBodyDto {
  companyId: string;
  locationId: string;
}

export interface GetLocationAccessTokenSuccessfulResponseDto {
  access_token?: string;
  token_type?: string;
  expires_in?: number;
  scope?: string;
  locationId?: string;
  planId?: string;
  userId: string;
}

export interface InstalledLocationSchema {
  _id: string;
  name: string;
  address: string;
  isInstalled?: boolean;
}

export interface GetInstalledLocationsSuccessfulResponseDto {
  locations?: InstalledLocationSchema[];
  count?: number;
  installToFutureLocations?: boolean;
}

