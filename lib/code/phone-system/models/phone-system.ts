// PhoneSystem Models

export interface AvailableNumbersResponseDto {
  fingerprintId: string;
  numbers: AvailablePhoneNumberDto[];
}

export interface AvailablePhoneNumberDto {
  phoneNumber: string;
  friendlyName: string;
  isoCountry: string;
  lata?: string;
  locality?: string;
  rateCenter?: string;
  latitude?: string;
  longitude?: string;
  region?: string;
  postalCode?: string;
  addressRequirements: string;
  beta: boolean;
  capabilities: any;
  price?: any;
}

export interface TwilioAccountResponseDto {
  id: string;
  account_sid: string;
  under_ghl_account: boolean;
  validate_sms: boolean;
  location_id: string;
  migration_status?: string;
  migration_numbers?: string[];
  assigned_to_numbers?: any;
  numbers: any;
  number_name?: any;
  new_account_sid?: string;
}

export interface PurchasePhoneNumberBodyDto {
  phoneNumber: string;
  countryCode?: string;
  numberType?: string;
  addressSid?: string;
  bundleSid?: string;
  locality?: string;
  region?: string;
  fingerprintId?: string;
  skipLocationKYC?: boolean;
}

export interface DetailedPhoneNumberDto {
  phoneNumber: string;
  friendlyName?: string;
  sid: string;
  countryCode: string;
  capabilities: any;
  type: string;
  isDefaultNumber: boolean;
  linkedUser?: string;
  linkedRingAllUsers: string[];
  inboundCallService?: any;
  forwardingNumber?: string;
  isGroupConversationEnabled: boolean;
  addressSid?: string;
  bundleSid?: string;
  dateAdded?: string;
  dateUpdated?: string;
  origin?: string;
}

export interface NumberPoolDto {
  id?: string;
  name?: string;
  locationId?: string;
  numbers?: any[];
  forwardingNumber?: string;
  whisper?: boolean;
  whisperMessage?: string;
  callRecording?: boolean;
  isActive?: boolean;
  inboundCallService?: any;
}

