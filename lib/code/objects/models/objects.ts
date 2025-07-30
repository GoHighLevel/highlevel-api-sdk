/**
 * Objects Models and Types
 * Generated from OpenAPI schema definitions
 */

export interface CustomObjectLabelDto {
  singular: string;
  plural: string;
}

export interface ICustomObjectSchema {
  id: string;
  standard: boolean;
  key: string;
  labels: any;
  description?: string;
  locationId: string;
  primaryDisplayProperty: string;
  dateAdded: string;
  dateUpdated: string;
  type?: any;
}

export interface OptionDTO {
  key: string;
  label: string;
  url?: string;
}

export interface ICustomField {
  locationId: string;
  name?: string;
  description?: string;
  placeholder?: string;
  showInForms: boolean;
  options?: OptionDTO[];
  acceptedFormats?: string;
  id: string;
  objectKey: string;
  dataType: string;
  parentId: string;
  fieldKey: string;
  allowCustomOption?: boolean;
  maxFileLimit?: number;
  dateAdded: string;
  dateUpdated: string;
}

export interface CustomObjectByIdResponseDTO {
  object?: ICustomObjectSchema;
  cache: boolean;
  fields?: ICustomField[];
}

export interface CustomObjectListResponseDTO {
  objects?: ICustomObjectSchema[];
}

export interface CustomObjectDisplayPropertyDetails {
  key: string;
  name: string;
  dataType: string;
}

export interface CreateCustomObjectSchemaDTO {
  labels: any;
  key: string;
  description?: string;
  locationId: string;
  primaryDisplayPropertyDetails: any;
}

export interface CustomObjectResponseDTO {
  object?: ICustomObjectSchema;
}

export interface CustomObjectLabelUpdateDto {
  singular?: string;
  plural?: string;
}

export interface UpdateCustomObjectSchemaDTO {
  labels?: any;
  description?: string;
  locationId: string;
  searchableProperties: string[];
}

export interface IRecordSchema {
  id: string;
  owner: string[];
  followers: string[];
  properties: string;
  dateAdded: string;
  dateUpdated: string;
}

export interface RecordByIdResponseDTO {
  record?: IRecordSchema;
}

export interface CreateCustomObjectRecordDto {
}

export interface UpdateCustomObjectRecordDto {
}

export interface ObjectRecordDeleteResponseDTO {
  id?: string;
  success?: boolean;
}

export interface SearchRecordsBody {
  locationId: string;
  page: number;
  pageLimit: number;
  query: string;
  searchAfter: string[];
}

export interface CreatedByResponseDTO {
  channel: string;
  createdAt: string;
  source: string;
  sourceId: string;
}

export interface RecordResponseDTO {
  id: string;
  owner: string[];
  followers: string[];
  properties: string;
  createdAt: string;
  updatedAt: string;
  locationId: string;
  objectId: string;
  objectKey: string;
  createdBy: any;
  lastUpdatedBy: any;
  searchAfter: number[];
}

export interface SearchRecordResponseDTO {
  records?: RecordResponseDTO[];
  total: number;
}

