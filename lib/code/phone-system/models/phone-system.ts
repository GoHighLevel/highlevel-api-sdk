// PhoneSystem Models

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

