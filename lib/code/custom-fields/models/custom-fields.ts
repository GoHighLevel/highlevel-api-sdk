/**
 * CustomFields Models and Types
 * Generated from OpenAPI schema definitions
 */

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

export interface CustomFieldSuccessfulResponseDto {
  field?: ICustomField;
}

export interface CustomFieldsResponseDTO {
  fields?: ICustomField[];
  folders?: ICustomField[];
}

export interface CreateCustomFieldsDTO {
  locationId: string;
  name?: string;
  description?: string;
  placeholder?: string;
  showInForms: boolean;
  options?: OptionDTO[];
  acceptedFormats?: string;
  dataType: string;
  fieldKey: string;
  objectKey: string;
  maxFileLimit?: number;
  allowCustomOption?: boolean;
  parentId: string;
}

export interface CreateFolder {
  objectKey: string;
  name: string;
  locationId: string;
}

export interface ICustomFieldFolder {
  id: string;
  objectKey: string;
  locationId: string;
  name: string;
}

export interface UpdateFolder {
  name: string;
  locationId: string;
}

export interface CustomFolderDeleteResponseDto {
  succeded: boolean;
  id: string;
  key: string;
}

export interface UpdateCustomFieldsDTO {
  locationId: string;
  name?: string;
  description?: string;
  placeholder?: string;
  showInForms: boolean;
  options?: OptionDTO[];
  acceptedFormats?: string;
  maxFileLimit?: number;
}

