// Forms Models

export interface PageDetailsSchema {
  url?: string;
  title?: string;
}

export interface ContactSessionIds {
  ids?: string[];
}

export interface EventDataSchema {
  fbc?: string;
  fbp?: string;
  page?: PageDetailsSchema;
  type?: string;
  domain?: string;
  medium?: string;
  source?: string;
  version?: string;
  adSource?: string;
  mediumId?: string;
  parentId?: string;
  referrer?: string;
  fbEventId?: string;
  timestamp?: number;
  parentName?: string;
  fingerprint?: string;
  pageVisitType?: string;
  contactSessionIds?: any;
}

export interface othersSchema {
  __submissions_other_field__?: string;
  __custom_field_id__?: string;
  eventData?: EventDataSchema;
  fieldsOriSequance?: string[];
}

export interface FormsSubmissionsSubmissionsSchema {
  id?: string;
  contactId?: string;
  createdAt?: string;
  formId?: string;
  name?: string;
  email?: string;
  others?: othersSchema;
}

export interface metaSchema {
  total?: number;
  currentPage?: number;
  nextPage?: number;
  prevPage?: number;
}

export interface FormsSubmissionsSuccessfulResponseDto {
  submissions?: FormsSubmissionsSubmissionsSchema[];
  meta?: metaSchema;
}

export interface FormsParams {
  id?: string;
  name?: string;
  locationId?: string;
}

export interface FormsSuccessfulResponseDto {
  forms?: FormsParams[];
  total?: number;
}

