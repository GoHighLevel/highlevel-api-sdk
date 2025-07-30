/**
 * Emails Models and Types
 * Generated from OpenAPI schema definitions
 */

export interface ScheduleDto {
  name: string;
  repeatAfter: string;
  id: string;
  parentId: string;
  childCount: number;
  campaignType: string;
  bulkActionVersion: string;
  _id: string;
  status: string;
  sendDays: string[];
  deleted: boolean;
  migrated: boolean;
  archived: boolean;
  hasTracking: boolean;
  isPlainText: boolean;
  hasUtmTracking: boolean;
  enableResendToUnopened: boolean;
  locationId: string;
  templateId: string;
  templateType: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  documentId: string;
  downloadUrl: string;
  templateDataDownloadUrl: string;
  child: string[];
}

export interface ScheduleFetchSuccessfulDTO {
  schedules: ScheduleDto[];
  total: string[];
  traceId: string;
}

export interface InvalidLocationDTO {
  statusCode?: number;
  message?: string;
}

export interface NotFoundDTO {
  statusCode?: number;
  message?: string;
  error?: string;
}

export interface CreateBuilderDto {
  locationId: string;
  title?: string;
  type: string;
  updatedBy?: string;
  builderVersion?: string;
  name?: string;
  parentId?: string;
  templateDataUrl?: string;
  importProvider: string;
  importURL?: string;
  templateSource?: string;
  isPlainText?: boolean;
}

export interface CreateBuilderSuccesfulResponseDto {
  redirect: string;
  traceId: string;
}

export interface FetchBuilderSuccesfulResponseDto {
  name?: string;
  updatedBy?: string;
  isPlainText?: boolean;
  lastUpdated?: string;
  dateAdded?: string;
  previewUrl?: string;
  id?: string;
  version?: string;
  templateType?: string;
}

export interface DeleteBuilderSuccesfulResponseDto {
  ok?: string;
  traceId?: string;
}

export interface TemplateSettings {
}

export interface IBuilderJsonMapper {
  elements: string[];
  attrs: any;
  templateSettings: TemplateSettings;
}

export interface SaveBuilderDataDto {
  locationId: string;
  templateId: string;
  updatedBy: string;
  dnd: any;
  html: string;
  editorType: string;
  previewText?: string;
  isPlainText?: boolean;
}

export interface BuilderUpdateSuccessfulDTO {
  ok?: string;
  traceId?: string;
  previewUrl?: string;
  templateDownloadUrl?: string;
}

