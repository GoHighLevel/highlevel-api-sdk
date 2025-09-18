/**
 * Locations Models and Types
 * Generated from OpenAPI schema definitions
 */

export interface SettingsSchema {
  allowDuplicateContact?: boolean;
  allowDuplicateOpportunity?: boolean;
  allowFacebookNameMerge?: boolean;
  disableContactTimezone?: boolean;
}

export interface SocialSchema {
  facebookUrl?: string;
  googlePlus?: string;
  linkedIn?: string;
  foursquare?: string;
  twitter?: string;
  yelp?: string;
  instagram?: string;
  youtube?: string;
  pinterest?: string;
  blogRss?: string;
  googlePlacesId?: string;
}

export interface GetLocationSchema {
  id?: string;
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  website?: string;
  timezone?: string;
  settings?: any;
  social?: any;
}

export interface SearchSuccessfulResponseDto {
  locations?: GetLocationSchema[];
}

export interface BusinessSchema {
  name?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  website?: string;
  timezone?: string;
  logoUrl?: string;
}

export interface GetLocationByIdSchema {
  id?: string;
  companyId?: string;
  name?: string;
  domain?: string;
  address?: string;
  city?: string;
  state?: string;
  logoUrl?: string;
  country?: string;
  postalCode?: string;
  website?: string;
  timezone?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  business?: BusinessSchema;
  social?: SocialSchema;
  settings?: SettingsSchema;
  reseller?: any;
}

export interface GetLocationByIdSuccessfulResponseDto {
  location?: GetLocationByIdSchema;
}

export interface ProspectInfoDto {
  firstName: string;
  lastName: string;
  email: string;
}

export interface TwilioSchema {
  sid: string;
  authToken: string;
}

export interface MailgunSchema {
  apiKey: string;
  domain: string;
}

export interface CreateLocationDto {
  name: string;
  phone?: string;
  companyId: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  website?: string;
  timezone?: string;
  prospectInfo?: any;
  settings?: any;
  social?: any;
  twilio?: any;
  mailgun?: any;
  snapshotId?: string;
}

export interface CreateLocationSuccessfulResponseDto {
  id?: string;
  companyId?: string;
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
  city?: string;
  state?: string;
  domain?: string;
  country?: string;
  postalCode?: string;
  website?: string;
  timezone?: string;
  settings?: any;
  social?: any;
}

export interface SnapshotPutSchema {
  id: string;
  override?: boolean;
}

export interface UpdateLocationDto {
  name?: string;
  phone?: string;
  companyId: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  website?: string;
  timezone?: string;
  prospectInfo?: any;
  settings?: any;
  social?: any;
  twilio?: any;
  mailgun?: any;
  snapshot?: any;
}

export interface LocationDeletedSuccessfulResponseDto {
  success: boolean;
  message: string;
}

export interface LocationTagsSchema {
  name?: string;
  locationId?: string;
  id?: string;
}

export interface LocationTagsSuccessfulResponseDto {
  tags?: LocationTagsSchema[];
}

export interface LocationTagSuccessfulResponseDto {
  tag?: LocationTagsSchema;
}

export interface tagBody {
  name: string;
}

export interface LocationTagDeleteSuccessfulResponseDto {
  succeded?: boolean;
}

export interface TaskSearchParamsDto {
  contactId?: string[];
  completed?: boolean;
  assignedTo?: string[];
  query?: string;
  limit?: number;
  skip?: number;
  businessId?: string;
}

export interface LocationTaskListSuccessfulResponseDto {
  tasks?: any[][];
}

export interface CustomFieldSchema {
  id?: string;
  name?: string;
  fieldKey?: string;
  placeholder?: string;
  dataType?: string;
  position?: number;
  picklistOptions?: string[];
  picklistImageOptions?: string[];
  isAllowedCustomOption?: boolean;
  isMultiFileAllowed?: boolean;
  maxFileLimit?: number;
  locationId?: string;
  model?: string;
}

export interface CustomFieldsListSuccessfulResponseDto {
  customFields?: CustomFieldSchema[];
}

export interface CustomFieldSuccessfulResponseDto {
  customField?: CustomFieldSchema;
}

export interface textBoxListOptionsSchema {
  label?: string;
  prefillValue?: string;
}

export interface CreateCustomFieldsDTO {
  name: string;
  dataType: string;
  placeholder?: string;
  acceptedFormat?: string[];
  isMultipleFile?: boolean;
  maxNumberOfFiles?: number;
  textBoxListOptions?: any[];
  position?: number;
  model?: string;
}

export interface UpdateCustomFieldsDTO {
  name: string;
  placeholder?: string;
  acceptedFormat?: string[];
  isMultipleFile?: boolean;
  maxNumberOfFiles?: number;
  textBoxListOptions?: any[];
  position?: number;
  model?: string;
}

export interface CustomFieldDeleteSuccessfulResponseDto {
  succeded?: boolean;
}

export interface FileUploadBody {
  id?: string;
  maxFiles?: string;
}

export interface FileUploadResponseDto {
  uploadedFiles?: any;
  meta?: string[];
}

export interface CustomValueSchema {
  id?: string;
  name?: string;
  fieldKey?: string;
  value?: string;
  locationId?: string;
}

export interface CustomValuesListSuccessfulResponseDto {
  customValues?: CustomValueSchema[];
}

export interface CustomValueIdSuccessfulResponseDto {
  customValue?: CustomValueSchema;
}

export interface customValuesDTO {
  name: string;
  value: string;
}

export interface CustomValueDeleteSuccessfulResponseDto {
  succeded?: boolean;
}

export interface SmsTemplateSchema {
  body?: string;
  attachments?: any[][];
}

export interface GetSmsTemplateResponseSchema {
  id?: string;
  name?: string;
  type?: string;
  template?: SmsTemplateSchema;
  dateAdded?: string;
  locationId?: string;
  urlAttachments?: string[];
}

export interface EmailTemplateSchema {
  subject?: string;
  attachments?: any[][];
  html?: string;
}

export interface GetEmailTemplateResponseSchema {
  id?: string;
  name?: string;
  type?: string;
  dateAdded?: string;
  template?: EmailTemplateSchema;
  locationId?: string;
}

export interface GetTemplatesSuccessfulResponseDto {
  templates?: any[];
  totalCount?: number;
}

export interface CustomRRulesOptions {
  intervalType: string;
  interval: number;
  startDate: string;
  endDate?: string;
  dayOfMonth?: number;
  dayOfWeek?: string;
  monthOfYear?: number;
  count?: number;
  createTaskIfOverDue?: boolean;
  dueAfterSeconds: number;
}

export interface RecurringTaskResponseDTO {
  id: string;
  title: string;
  description: string;
  locationId: string;
  updatedAt: string;
  createdAt: string;
  rruleOptions: any;
  totalOccurrence: number;
  deleted: boolean;
  assignedTo?: string;
  contactId?: string;
}

export interface RecurringTaskSingleResponseDTO {
  recurringTask: any;
}

export interface RecurringTaskCreateDTO {
  title: string;
  description?: string;
  contactIds?: string[];
  owners?: string[];
  rruleOptions: any;
  ignoreTaskCreation?: boolean;
}

export interface RecurringTaskUpdateDTO {
  title?: string;
  description?: string;
  contactIds?: string[];
  owners?: string[];
  rruleOptions?: any;
  ignoreTaskCreation?: boolean;
}

export interface DeleteRecurringTaskResponseDTO {
  id: string;
  success: boolean;
}

