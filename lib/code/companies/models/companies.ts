// Companies Models

export interface IOnboardingDto {
  pending: boolean;
  haveWebsite?: boolean;
  websiteUrl?: string;
  industryServed?: string;
  customerCount?: string;
  tools?: string[];
  location?: boolean;
  conversationDemo?: boolean;
  locationId?: string;
  snapshotId?: string;
  planId?: string;
  affiliateSignup?: boolean;
  hasJoinedKickoffCall?: boolean;
  kickoffActionTaken?: boolean;
  hasJoinedImplementationCall?: boolean;
  version?: string;
  metaData?: any;
}

export interface GetCompanyByIdSchema {
  id?: string;
  name?: string;
  email?: string;
  logoUrl?: string;
  phone?: string;
  website?: string;
  domain?: string;
  spareDomain?: string;
  privacyPolicy?: string;
  termsConditions?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  country?: string;
  state?: string;
  timezone?: string;
  relationshipNumber?: string;
  subdomain?: string;
  plan?: number;
  currency?: string;
  customerType?: string;
  termsOfServiceVersion?: string;
  termsOfServiceAcceptedBy?: string;
  twilioTrialMode?: boolean;
  twilioFreeCredits?: number;
  termsOfServiceAcceptedDate?: string;
  privacyPolicyVersion?: string;
  privacyPolicyAcceptedBy?: string;
  privacyPolicyAcceptedDate?: string;
  affiliatePolicyVersion?: string;
  affiliatePolicyAcceptedBy?: string;
  affiliatePolicyAcceptedDate?: string;
  isReselling?: boolean;
  onboardingInfo?: any;
  upgradeEnabledForClients?: boolean;
  cancelEnabledForClients?: boolean;
  autoSuspendEnabled?: boolean;
  saasSettings?: any;
  stripeConnectId?: string;
  enableDepreciatedFeatures?: boolean;
  premiumUpgraded?: boolean;
  status?: string;
  locationCount?: number;
  disableEmailService?: boolean;
  referralId?: string;
  isEnterpriseAccount?: boolean;
  businessNiche?: string;
  businessCategory?: string;
  businessAffinityGroup?: string;
  isSandboxAccount?: boolean;
  enableNewSubAccountDefaultData?: boolean;
}

export interface GetCompanyByIdSuccessfulResponseDto {
  company?: GetCompanyByIdSchema;
}

