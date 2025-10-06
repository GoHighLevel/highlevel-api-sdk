// Businesses Models

export interface BusinessCreatedByOrUpdatedBy {
}

export interface BusinessDto {
  id: string;
  name: string;
  phone?: string;
  email?: string;
  website?: string;
  address?: string;
  city?: string;
  description?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  updatedBy?: any;
  locationId: string;
  createdBy?: any;
  createdAt?: string;
  updatedAt?: string;
}

export interface GetBusinessByLocationResponseDto {
  businesses: BusinessDto[];
}

export interface CreateBusinessDto {
  name: string;
  locationId: string;
  phone?: string;
  email?: string;
  website?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  state?: string;
  country?: string;
  description?: string;
}

export interface UpdateBusinessResponseDto {
  success: boolean;
  buiseness: any;
}

export interface UpdateBusinessDto {
  name?: string;
  phone?: string;
  email?: string;
  postalCode?: string;
  website?: string;
  address?: string;
  state?: string;
  city?: string;
  country?: string;
  description?: string;
}

export interface DeleteBusinessResponseDto {
  success: boolean;
}

export interface GetBusinessByIdResponseDto {
  business: any;
}

