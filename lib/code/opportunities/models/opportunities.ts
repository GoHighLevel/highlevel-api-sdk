/**
 * Opportunities Models and Types
 * Generated from OpenAPI schema definitions
 */

export interface SearchOpportunitiesContactResponseSchema {
  id?: string;
  name?: string;
  companyName?: string;
  email?: string;
  phone?: string;
  tags?: string[];
}

export interface CustomFieldResponseSchema {
  id: string;
  fieldValue: any;
}

export interface SearchOpportunitiesResponseSchema {
  id?: string;
  name?: string;
  monetaryValue?: number;
  pipelineId?: string;
  pipelineStageId?: string;
  assignedTo?: string;
  status?: string;
  source?: string;
  lastStatusChangeAt?: string;
  lastStageChangeAt?: string;
  lastActionDate?: string;
  indexVersion?: string;
  createdAt?: string;
  updatedAt?: string;
  contactId?: string;
  locationId?: string;
  contact?: SearchOpportunitiesContactResponseSchema;
  notes?: string[];
  tasks?: string[];
  calendarEvents?: string[];
  customFields?: CustomFieldResponseSchema[];
  followers?: any[][];
}

export interface SearchMetaResponseSchema {
  total?: number;
  nextPageUrl?: string;
  startAfterId?: string;
  startAfter?: number;
  currentPage?: number;
  nextPage?: number;
  prevPage?: number;
}

export interface SearchSuccessfulResponseDto {
  opportunities?: SearchOpportunitiesResponseSchema[];
  meta?: SearchMetaResponseSchema;
  aggregations?: any;
}

export interface PipelinesResponseSchema {
  id?: string;
  name?: string;
  stages?: any[][];
  showInFunnel?: boolean;
  showInPieChart?: boolean;
  locationId?: string;
}

export interface GetPipelinesSuccessfulResponseDto {
  pipelines?: PipelinesResponseSchema[];
}

export interface GetPostOpportunitySuccessfulResponseDto {
  opportunity?: SearchOpportunitiesResponseSchema;
}

export interface DeleteUpdateOpportunitySuccessfulResponseDto {
  succeded?: boolean;
}

export interface UpdateStatusDto {
  status: string;
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

export interface CreateDto {
  pipelineId: string;
  locationId: string;
  name: string;
  pipelineStageId?: string;
  status: string;
  contactId: string;
  monetaryValue?: number;
  assignedTo?: string;
  customFields?: any[];
}

export interface UpdateOpportunityDto {
  pipelineId?: string;
  name?: string;
  pipelineStageId?: string;
  status?: string;
  monetaryValue?: number;
  assignedTo?: string;
  customFields?: any[];
}

export interface UpsertOpportunityDto {
  pipelineId: string;
  locationId: string;
  contactId: string;
  name?: string;
  status?: string;
  pipelineStageId?: string;
  monetaryValue?: number;
  assignedTo?: string;
}

export interface UpsertOpportunitySuccessfulResponseDto {
  opportunity: any;
  new: boolean;
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

