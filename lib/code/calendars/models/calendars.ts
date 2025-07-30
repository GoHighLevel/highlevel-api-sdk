/**
 * Calendars Models and Types
 * Generated from OpenAPI schema definitions
 */

export interface GroupDTO {
  locationId: string;
  name: string;
  description: string;
  slug: string;
  isActive?: boolean;
  id?: string;
}

export interface AllGroupsSuccessfulResponseDTO {
  groups?: GroupDTO[];
}

export interface ValidateGroupSlugPostBody {
  locationId: string;
  slug: string;
}

export interface ValidateGroupSlugSuccessResponseDTO {
  available: boolean;
}

export interface GroupCreateDTO {
  locationId: string;
  name: string;
  description: string;
  slug: string;
  isActive?: boolean;
}

export interface GroupCreateSuccessfulResponseDTO {
  group?: GroupDTO;
}

export interface GroupSuccessfulResponseDTO {
  success?: boolean;
}

export interface GroupStatusUpdateParams {
  isActive: boolean;
}

export interface GroupUpdateDTO {
  name: string;
  description: string;
  slug: string;
}

export interface AppointmentCreateSchema {
  title?: string;
  meetingLocationType?: string;
  meetingLocationId?: string;
  overrideLocationConfig?: boolean;
  appointmentStatus?: string;
  assignedUserId?: string;
  address?: string;
  ignoreDateRange?: boolean;
  toNotify?: boolean;
  ignoreFreeSlotValidation?: boolean;
  rrule?: string;
  calendarId: string;
  locationId: string;
  contactId: string;
  startTime: string;
  endTime?: string;
}

export interface AppointmentSchemaResponse {
  calendarId: string;
  locationId: string;
  contactId: string;
  startTime?: string;
  endTime?: string;
  title?: string;
  meetingLocationType?: string;
  appointmentStatus?: string;
  assignedUserId?: string;
  address?: string;
  isRecurring?: boolean;
  rrule?: string;
  id: string;
}

export interface AppointmentEditSchema {
  title?: string;
  meetingLocationType?: string;
  meetingLocationId?: string;
  overrideLocationConfig?: boolean;
  appointmentStatus?: string;
  assignedUserId?: string;
  address?: string;
  ignoreDateRange?: boolean;
  toNotify?: boolean;
  ignoreFreeSlotValidation?: boolean;
  rrule?: string;
  calendarId?: string;
  startTime?: string;
  endTime?: string;
}

export interface CreatedOrUpdatedBy {
  userId?: string;
  source: string;
}

export interface CalendarEventDTO {
  id: string;
  address?: string;
  title: string;
  calendarId: string;
  locationId: string;
  contactId: string;
  groupId: string;
  appointmentStatus: string;
  assignedUserId: string;
  users: string[];
  notes?: string;
  isRecurring?: boolean;
  rrule?: string;
  startTime: any;
  endTime: any;
  dateAdded: any;
  dateUpdated: any;
  assignedResources?: string[];
  createdBy?: any;
  masterEventId?: string;
}

export interface GetCalendarEventsSuccessfulResponseDTO {
  events?: CalendarEventDTO[];
}

export interface BlockSlotCreateRequestDTO {
  title?: string;
  calendarId: string;
  assignedUserId?: string;
  locationId: string;
  startTime?: string;
  endTime?: string;
}

export interface BlockedSlotSuccessfulResponseDto {
  id: string;
  locationId: string;
  title: string;
  startTime: any;
  endTime: any;
  calendarId?: string;
  assignedUserId?: string;
}

export interface BlockSlotEditRequestDTO {
  title?: string;
  calendarId: string;
  assignedUserId?: string;
  locationId: string;
  startTime?: string;
  endTime?: string;
}

export interface SlotsSchema {
  slots: string[];
}

export interface GetSlotsSuccessfulResponseDto {
  _dates_: SlotsSchema;
}

export interface CalendarNotification {
  type?: string;
  shouldSendToContact: boolean;
  shouldSendToGuest: boolean;
  shouldSendToUser: boolean;
  shouldSendToSelectedUsers: boolean;
  selectedUsers: string;
}

export interface LocationConfiguration {
  kind: string;
  location?: string;
}

export interface TeamMember {
  userId: string;
  priority?: number;
  meetingLocationType?: string;
  meetingLocation?: string;
  isPrimary?: boolean;
  locationConfigurations?: LocationConfiguration[];
}

export interface Hour {
  openHour: number;
  openMinute: number;
  closeHour: number;
  closeMinute: number;
}

export interface OpenHour {
  daysOfTheWeek: number[];
  hours: Hour[];
}

export interface Recurring {
  freq?: string;
  count?: number;
  bookingOption?: string;
  bookingOverlapDefaultStatus?: string;
}

export interface Availability {
  date: string;
  hours: Hour[];
  deleted?: boolean;
}

export interface LookBusyConfiguration {
  enabled: boolean;
  LookBusyPercentage: number;
}

export interface CalendarCreateDTO {
  isActive?: boolean;
  notifications?: CalendarNotification[];
  locationId: string;
  groupId?: string;
  teamMembers?: TeamMember[];
  eventType?: string;
  name: string;
  description?: string;
  slug?: string;
  widgetSlug?: string;
  calendarType?: string;
  widgetType?: string;
  eventTitle?: string;
  eventColor?: string;
  meetingLocation?: string;
  locationConfigurations?: LocationConfiguration[];
  slotDuration?: number;
  slotDurationUnit?: string;
  slotInterval?: number;
  slotIntervalUnit?: string;
  slotBuffer?: number;
  slotBufferUnit?: string;
  preBuffer?: number;
  preBufferUnit?: string;
  appoinmentPerSlot?: number;
  appoinmentPerDay?: number;
  allowBookingAfter?: number;
  allowBookingAfterUnit?: string;
  allowBookingFor?: number;
  allowBookingForUnit?: string;
  openHours?: OpenHour[];
  enableRecurring?: boolean;
  recurring?: Recurring;
  formId?: string;
  stickyContact?: boolean;
  isLivePaymentMode?: boolean;
  autoConfirm?: boolean;
  shouldSendAlertEmailsToAssignedMember?: boolean;
  alertEmail?: string;
  googleInvitationEmails?: boolean;
  allowReschedule?: boolean;
  allowCancellation?: boolean;
  shouldAssignContactToTeamMember?: boolean;
  shouldSkipAssigningContactForExisting?: boolean;
  notes?: string;
  pixelId?: string;
  formSubmitType?: string;
  formSubmitRedirectURL?: string;
  formSubmitThanksMessage?: string;
  availabilityType?: number;
  availabilities?: Availability[];
  guestType?: string;
  consentLabel?: string;
  calendarCoverImage?: string;
  lookBusyConfig?: any;
}

export interface LocationConfigurationResponse {
  kind: string;
  location?: string;
  meetingId?: string;
}

export interface TeamMemberResponse {
  userId: string;
  priority?: number;
  meetingLocationType?: string;
  meetingLocation?: string;
  isPrimary?: boolean;
  locationConfigurations?: LocationConfigurationResponse[];
}

export interface CalendarDTO {
  isActive?: boolean;
  notifications?: CalendarNotification[];
  locationId: string;
  groupId?: string;
  teamMembers?: TeamMemberResponse[];
  eventType?: string;
  name: string;
  description?: string;
  slug?: string;
  widgetSlug?: string;
  calendarType?: string;
  widgetType?: string;
  eventTitle?: string;
  eventColor?: string;
  meetingLocation?: string;
  locationConfigurations?: LocationConfigurationResponse[];
  slotDuration?: number;
  slotDurationUnit?: string;
  slotInterval?: number;
  slotIntervalUnit?: string;
  slotBuffer?: number;
  slotBufferUnit?: string;
  preBuffer?: number;
  preBufferUnit?: string;
  appoinmentPerSlot?: number;
  appoinmentPerDay?: number;
  allowBookingAfter?: number;
  allowBookingAfterUnit?: string;
  allowBookingFor?: number;
  allowBookingForUnit?: string;
  openHours?: OpenHour[];
  enableRecurring?: boolean;
  recurring?: Recurring;
  formId?: string;
  stickyContact?: boolean;
  isLivePaymentMode?: boolean;
  autoConfirm?: boolean;
  shouldSendAlertEmailsToAssignedMember?: boolean;
  alertEmail?: string;
  googleInvitationEmails?: boolean;
  allowReschedule?: boolean;
  allowCancellation?: boolean;
  shouldAssignContactToTeamMember?: boolean;
  shouldSkipAssigningContactForExisting?: boolean;
  notes?: string;
  pixelId?: string;
  formSubmitType?: string;
  formSubmitRedirectURL?: string;
  formSubmitThanksMessage?: string;
  availabilityType?: number;
  availabilities?: Availability[];
  guestType?: string;
  consentLabel?: string;
  calendarCoverImage?: string;
  lookBusyConfig?: any;
  id: string;
}

export interface CalendarsGetSuccessfulResponseDTO {
  calendars?: CalendarDTO[];
}

export interface CalendarByIdSuccessfulResponseDTO {
  calendar: CalendarDTO;
}

export interface UpdateAvailability {
  date: string;
  hours: Hour[];
  deleted?: boolean;
  id?: string;
}

export interface CalendarUpdateDTO {
  notifications?: CalendarNotification[];
  groupId?: string;
  teamMembers?: TeamMember[];
  eventType?: string;
  name?: string;
  description?: string;
  slug?: string;
  widgetSlug?: string;
  widgetType?: string;
  eventTitle?: string;
  eventColor?: string;
  locationConfigurations?: LocationConfiguration[];
  meetingLocation?: string;
  slotDuration?: number;
  slotDurationUnit?: string;
  preBufferUnit?: string;
  slotInterval?: number;
  slotIntervalUnit?: string;
  slotBuffer?: number;
  preBuffer?: number;
  appoinmentPerSlot?: number;
  appoinmentPerDay?: number;
  allowBookingAfter?: number;
  allowBookingAfterUnit?: string;
  allowBookingFor?: number;
  allowBookingForUnit?: string;
  openHours?: OpenHour[];
  enableRecurring?: boolean;
  recurring?: Recurring;
  formId?: string;
  stickyContact?: boolean;
  isLivePaymentMode?: boolean;
  autoConfirm?: boolean;
  shouldSendAlertEmailsToAssignedMember?: boolean;
  alertEmail?: string;
  googleInvitationEmails?: boolean;
  allowReschedule?: boolean;
  allowCancellation?: boolean;
  shouldAssignContactToTeamMember?: boolean;
  shouldSkipAssigningContactForExisting?: boolean;
  notes?: string;
  pixelId?: string;
  formSubmitType?: string;
  formSubmitRedirectURL?: string;
  formSubmitThanksMessage?: string;
  availabilityType?: number;
  availabilities?: UpdateAvailability[];
  guestType?: string;
  consentLabel?: string;
  calendarCoverImage?: string;
  lookBusyConfig?: any;
  isActive?: boolean;
}

export interface CalendarDeleteSuccessfulResponseDTO {
  success: boolean;
}

export interface GetCalendarEventSuccessfulResponseDTO {
  event?: CalendarEventDTO;
}

export interface DeleteAppointmentSchema {
}

export interface DeleteEventSuccessfulResponseDto {
  succeeded?: boolean;
}

export interface NoteCreatedBySchema {
  id?: string;
  name?: string;
}

export interface GetNoteSchema {
  id?: string;
  body?: string;
  userId?: string;
  dateAdded?: string;
  contactId?: string;
  createdBy?: NoteCreatedBySchema;
}

export interface GetNotesListSuccessfulResponseDto {
  notes?: GetNoteSchema[];
  hasMore?: boolean;
}

export interface NotesDTO {
  userId?: string;
  body: string;
}

export interface GetCreateUpdateNoteSuccessfulResponseDto {
  note?: GetNoteSchema;
}

export interface DeleteNoteSuccessfulResponseDto {
  success?: boolean;
}

export interface CalendarResourceByIdResponseDTO {
  locationId: string;
  name: string;
  resourceType: string;
  isActive: boolean;
  description?: string;
  quantity?: number;
  outOfService?: number;
  capacity?: number;
  calendarIds: string[];
}

export interface UpdateCalendarResourceDTO {
  locationId?: string;
  name?: string;
  description?: string;
  quantity?: number;
  outOfService?: number;
  capacity?: number;
  calendarIds?: string[];
  isActive?: boolean;
}

export interface CalendarResourceResponseDTO {
  locationId: string;
  name: string;
  resourceType: string;
  isActive: boolean;
  description?: string;
  quantity?: number;
  outOfService?: number;
  capacity?: number;
}

export interface ResourceDeleteResponseDTO {
  success?: boolean;
}

export interface CreateCalendarResourceDTO {
  locationId: string;
  name: string;
  description: string;
  quantity: number;
  outOfService: number;
  capacity: number;
  calendarIds: string[];
}

export interface SchedulesDTO {
  timeOffset?: number;
  unit?: string;
}

export interface CalendarNotificationResponseDTO {
  _id?: string;
  receiverType?: string;
  additionalEmailIds?: string[];
  channel?: string;
  notificationType?: string;
  isActive?: boolean;
  templateId?: string;
  body?: string;
  subject?: string;
  afterTime?: SchedulesDTO[];
  beforeTime?: SchedulesDTO[];
  selectedUsers?: string[];
  deleted?: boolean;
}

export interface CreateCalendarNotificationDTO {
  receiverType: string;
  channel: string;
  notificationType: string;
  isActive?: boolean;
  templateId?: string;
  body?: string;
  subject?: string;
  afterTime?: SchedulesDTO[];
  beforeTime?: SchedulesDTO[];
  additionalEmailIds?: string[];
  selectedUsers?: string[];
  fromAddress?: string;
  fromName?: string;
}

export interface UpdateCalendarNotificationsDTO {
  receiverType?: string;
  additionalEmailIds?: string[];
  selectedUsers?: string[];
  channel?: string;
  notificationType?: string;
  isActive?: boolean;
  deleted?: boolean;
  templateId?: string;
  body?: string;
  subject?: string;
  afterTime?: SchedulesDTO[];
  beforeTime?: SchedulesDTO[];
  fromAddress?: string;
  fromName?: string;
}

export interface CalendarNotificationDeleteResponseDTO {
  message: string;
}

