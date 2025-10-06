// Contacts Models

export interface SearchBodyV2DTO {
}

export interface CustomFieldSchema {
  id?: string;
  value?: string;
}

export interface DndSettingSchema {
  status: string;
  message?: string;
  code?: string;
}

export interface DndSettingsSchema {
  Call?: DndSettingSchema;
  Email?: DndSettingSchema;
  SMS?: DndSettingSchema;
  WhatsApp?: DndSettingSchema;
  GMB?: DndSettingSchema;
  FB?: DndSettingSchema;
}

export interface ContactOpportunity {
  id: string;
  pipeline_id: string;
  pipeline_stage_id: string;
  monetary_value: number;
  status: string;
}

export interface Contact {
  id?: string;
  phoneLabel?: string;
  country?: string;
  address?: string;
  source?: string;
  type?: string;
  locationId?: string;
  dnd?: boolean;
  state?: string;
  businessName?: string;
  customFields?: CustomFieldSchema[];
  tags?: string[];
  dateAdded?: string;
  additionalEmails?: string[];
  phone?: string;
  companyName?: string;
  additionalPhones?: string[];
  dateUpdated?: string;
  city?: string;
  dateOfBirth?: string;
  firstName?: string;
  lastName?: string;
  firstNameLowerCase?: string;
  lastNameLowerCase?: string;
  email?: string;
  assignedTo?: string;
  followers?: string[];
  validEmail?: boolean;
  dndSettings?: DndSettingsSchema;
  opportunities?: ContactOpportunity[];
  postalCode?: string;
  businessId?: string;
  searchAfter?: string[];
}

export interface SearchContactSuccessResponseDto {
  contacts: Contact[];
  total: number;
}

export interface TaskSchema {
  id?: string;
  title?: string;
  body?: string;
  assignedTo?: string;
  dueDate?: string;
  completed?: boolean;
  contactId?: string;
}

export interface TasksListSuccessfulResponseDto {
  tasks?: TaskSchema[];
}

export interface TaskByIsSuccessfulResponseDto {
  task?: TaskSchema;
}

export interface CreateTaskParams {
  title: string;
  body?: string;
  dueDate: string;
  completed: boolean;
  assignedTo?: string;
}

export interface UpdateTaskBody {
  title?: string;
  body?: string;
  dueDate?: string;
  completed?: boolean;
  assignedTo?: string;
}

export interface UpdateTaskStatusParams {
  completed: boolean;
}

export interface DeleteTaskSuccessfulResponseDto {
  succeded?: boolean;
}

export interface GetEventSchema {
  id?: string;
  calendarId?: string;
  status?: string;
  title?: string;
  assignedUserId?: string;
  notes?: string;
  startTime?: string;
  endTime?: string;
  address?: string;
  locationId?: string;
  contactId?: string;
  groupId?: string;
  appointmentStatus?: string;
  users?: string[];
  dateAdded?: string;
  dateUpdated?: string;
  assignedResources?: string[];
}

export interface GetEventsSuccessfulResponseDto {
  events?: GetEventSchema[];
}

export interface TagsDTO {
  tags: string[];
}

export interface CreateAddTagSuccessfulResponseDto {
  tags?: string[];
}

export interface CreateDeleteTagSuccessfulResponseDto {
  tags?: string[];
}

export interface GetNoteSchema {
  id?: string;
  body?: string;
  userId?: string;
  dateAdded?: string;
  contactId?: string;
}

export interface GetNotesListSuccessfulResponseDto {
  notes?: GetNoteSchema[];
}

export interface NotesDTO {
  userId?: string;
  body: string;
}

export interface GetCreateUpdateNoteSuccessfulResponseDto {
  note?: GetNoteSchema;
}

export interface DeleteNoteSuccessfulResponseDto {
  succeded?: boolean;
}

export interface UpdateTagsDTO {
  contacts: string[];
  tags: string[];
  locationId: string;
  removeAllTags?: boolean;
}

export interface UpdateTagsResponseDTO {
  succeded: boolean;
  errorCount: number;
  responses: string[];
}

export interface ContactsBusinessUpdate {
  locationId: string;
  ids: string[];
  businessId: string;
}

export interface ContactsBulkUpateResponse {
  success: boolean;
  ids: string[];
}

export interface AttributionSource {
  url: string;
  campaign?: string;
  utmSource?: string;
  utmMedium?: string;
  utmContent?: string;
  referrer?: string;
  campaignId?: string;
  fbclid?: string;
  gclid?: string;
  msclikid?: string;
  dclid?: string;
  fbc?: string;
  fbp?: string;
  fbEventId?: string;
  userAgent?: string;
  ip?: string;
  medium?: string;
  mediumId?: string;
}

export interface GetContectByIdSchema {
  id?: string;
  name?: string;
  locationId?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  emailLowerCase?: string;
  timezone?: string;
  companyName?: string;
  phone?: string;
  dnd?: boolean;
  dndSettings?: DndSettingsSchema;
  type?: string;
  source?: string;
  assignedTo?: string;
  address1?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  website?: string;
  tags?: string[];
  dateOfBirth?: string;
  dateAdded?: string;
  dateUpdated?: string;
  attachments?: string;
  ssn?: string;
  keyword?: string;
  firstNameLowerCase?: string;
  fullNameLowerCase?: string;
  lastNameLowerCase?: string;
  lastActivity?: string;
  customFields?: CustomFieldSchema[];
  businessId?: string;
  attributionSource?: AttributionSource;
  lastAttributionSource?: AttributionSource;
  visitorId?: string;
}

export interface ContactsByIdSuccessfulResponseDto {
  contact?: GetContectByIdSchema;
}

export interface customFieldsInputArraySchema {
  id: string;
  key?: string;
  field_value?: string[];
}

export interface customFieldsInputObjectSchema {
  id: string;
  key?: string;
  field_value?: any;
}

export interface customFieldsInputStringSchema {
  id?: string;
  key?: string;
  field_value?: string;
}

export interface TextField {
  id: string;
  key?: string;
  field_value?: string;
}

export interface LargeTextField {
  id: string;
  key?: string;
  field_value?: string;
}

export interface SingleSelectField {
  id: string;
  key?: string;
  field_value?: string;
}

export interface RadioField {
  id: string;
  key?: string;
  field_value?: string;
}

export interface NumericField {
  id: string;
  key?: string;
  field_value?: any;
}

export interface MonetoryField {
  id: string;
  key?: string;
  field_value?: any;
}

export interface CheckboxField {
  id: string;
  key?: string;
  field_value?: string[];
}

export interface MultiSelectField {
  id: string;
  key?: string;
  field_value?: string[];
}

export interface FileField {
  id: string;
  key?: string;
  field_value?: any;
}

export interface InboundDndSettingSchema {
  status: string;
  message?: string;
}

export interface InboundDndSettingsSchema {
  all?: InboundDndSettingSchema;
}

export interface CreateContactDto {
  firstName?: string;
  lastName?: string;
  name?: string;
  email?: string;
  locationId: string;
  gender?: string;
  phone?: string;
  address1?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  website?: string;
  timezone?: string;
  dnd?: boolean;
  dndSettings?: DndSettingsSchema;
  inboundDndSettings?: InboundDndSettingsSchema;
  tags?: string[];
  customFields?: any[];
  source?: string;
  country?: string;
  companyName?: string;
  assignedTo?: string;
}

export interface CreateContactSchema {
  id?: string;
  dateAdded?: string;
  dateUpdated?: string;
  deleted?: boolean;
  tags?: string[];
  type?: string;
  customFields?: CustomFieldSchema[];
  locationId?: string;
  firstName?: string;
  firstNameLowerCase?: string;
  fullNameLowerCase?: string;
  lastName?: string;
  lastNameLowerCase?: string;
  email?: string;
  emailLowerCase?: string;
  bounceEmail?: boolean;
  unsubscribeEmail?: boolean;
  dnd?: boolean;
  dndSettings?: DndSettingsSchema;
  phone?: string;
  address1?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  website?: string;
  source?: string;
  companyName?: string;
  dateOfBirth?: string;
  birthMonth?: number;
  birthDay?: number;
  lastSessionActivityAt?: string;
  offers?: string[];
  products?: string[];
  businessId?: string;
  assignedTo?: string;
}

export interface CreateContactsSuccessfulResponseDto {
  contact?: CreateContactSchema;
}

export interface UpdateContactDto {
  firstName?: string;
  lastName?: string;
  name?: string;
  email?: string;
  phone?: string;
  address1?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  website?: string;
  timezone?: string;
  dnd?: boolean;
  dndSettings?: DndSettingsSchema;
  inboundDndSettings?: InboundDndSettingsSchema;
  tags?: string[];
  customFields?: any[];
  source?: string;
  country?: string;
  assignedTo?: string;
}

export interface UpdateContactsSuccessfulResponseDto {
  succeded?: boolean;
  contact?: GetContectByIdSchema;
}

export interface UpsertContactDto {
  firstName?: string;
  lastName?: string;
  name?: string;
  email?: string;
  locationId: string;
  gender?: string;
  phone?: string;
  address1?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  website?: string;
  timezone?: string;
  dnd?: boolean;
  dndSettings?: DndSettingsSchema;
  inboundDndSettings?: InboundDndSettingsSchema;
  tags?: string[];
  customFields?: any[];
  source?: string;
  country?: string;
  companyName?: string;
  assignedTo?: string;
}

export interface UpsertContactsSuccessfulResponseDto {
  new?: boolean;
  contact?: GetContectByIdSchema;
  traceId?: string;
}

export interface DeleteContactsSuccessfulResponseDto {
  succeded?: boolean;
}

export interface ContactsSearchSchema {
  id?: string;
  locationId?: string;
  email?: string;
  timezone?: string;
  country?: string;
  source?: string;
  dateAdded?: string;
  customFields?: CustomFieldSchema[];
  tags?: string[];
  businessId?: string;
  attributions?: AttributionSource[];
  followers?: string[];
}

export interface ContactsMetaSchema {
  total?: number;
  nextPageUrl?: string;
  startAfterId?: string;
  startAfter?: number;
  currentPage?: number;
  nextPage?: number;
  prevPage?: number;
}

export interface ContactsSearchSuccessfulResponseDto {
  contacts?: ContactsSearchSchema[];
  count?: number;
}

export interface FollowersDTO {
  followers: string[];
}

export interface CreateAddFollowersSuccessfulResponseDto {
  followers?: string[];
  followersAdded?: string[];
}

export interface DeleteFollowersSuccessfulResponseDto {
  followers?: string[];
  followersRemoved?: string[];
}

export interface AddContactToCampaignDto {
}

export interface CreateDeleteCantactsCampaignsSuccessfulResponseDto {
  succeded?: boolean;
}

export interface CreateWorkflowDto {
  eventStartTime?: string;
}

export interface ContactsWorkflowSuccessfulResponseDto {
  succeded?: boolean;
}

