/**
 * Users Models and Types
 * Generated from OpenAPI schema definitions
 */

export interface PermissionsDto {
  campaignsEnabled?: boolean;
  campaignsReadOnly?: boolean;
  contactsEnabled?: boolean;
  workflowsEnabled?: boolean;
  workflowsReadOnly?: boolean;
  triggersEnabled?: boolean;
  funnelsEnabled?: boolean;
  websitesEnabled?: boolean;
  opportunitiesEnabled?: boolean;
  dashboardStatsEnabled?: boolean;
  bulkRequestsEnabled?: boolean;
  appointmentsEnabled?: boolean;
  reviewsEnabled?: boolean;
  onlineListingsEnabled?: boolean;
  phoneCallEnabled?: boolean;
  conversationsEnabled?: boolean;
  assignedDataOnly?: boolean;
  adwordsReportingEnabled?: boolean;
  membershipEnabled?: boolean;
  facebookAdsReportingEnabled?: boolean;
  attributionsReportingEnabled?: boolean;
  settingsEnabled?: boolean;
  tagsEnabled?: boolean;
  leadValueEnabled?: boolean;
  marketingEnabled?: boolean;
  agentReportingEnabled?: boolean;
  botService?: boolean;
  socialPlanner?: boolean;
  bloggingEnabled?: boolean;
  invoiceEnabled?: boolean;
  affiliateManagerEnabled?: boolean;
  contentAiEnabled?: boolean;
  refundsEnabled?: boolean;
  recordPaymentEnabled?: boolean;
  cancelSubscriptionEnabled?: boolean;
  paymentsEnabled?: boolean;
  communitiesEnabled?: boolean;
  exportPaymentsEnabled?: boolean;
}

export interface RoleSchema {
  type?: string;
  role?: string;
  locationIds?: string[];
  restrictSubAccount?: boolean;
}

export interface UserSchema {
  id?: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  extension?: string;
  permissions?: PermissionsDto;
  scopes?: string;
  roles?: RoleSchema;
  deleted?: boolean;
  lcPhone?: any;
}

export interface SearchUserSuccessfulResponseDto {
  users?: UserSchema[];
  count?: number;
}

export interface FilterByEmailDto {
  companyId: string;
  emails: string[];
  deleted?: boolean;
  skip?: string;
  limit?: string;
  projection?: string;
}

export interface LocationSuccessfulResponseDto {
  users?: UserSchema[];
}

export interface UserSuccessfulResponseDto {
  id?: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  extension?: string;
  permissions?: PermissionsDto;
  scopes?: string;
  roles?: RoleSchema;
  lcPhone?: any;
}

export interface CreateUserDto {
  companyId: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
  type: string;
  role: string;
  locationIds: string[];
  permissions?: PermissionsDto;
  scopes?: string[];
  scopesAssignedToOnly?: string[];
  profilePhoto?: string;
}

export interface UpdateUserDto {
  firstName?: string;
  lastName?: string;
  email?: string;
  emailChangeOTP?: string;
  password?: string;
  phone?: string;
  type?: string;
  role?: string;
  companyId?: string;
  locationIds?: string[];
  permissions?: PermissionsDto;
  scopes?: string[];
  scopesAssignedToOnly?: string[];
  profilePhoto?: string;
}

export interface DeleteUserSuccessfulResponseDto {
  succeded?: boolean;
  message?: string;
}

