// Opportunities Models

export interface LostReasonResponseSchema {
  id?: string;
  name?: string;
  locationId?: string;
  updatedAt?: string;
  createdAt?: string;
}

export interface LostReasonsResponseSchema {
  lostReasons?: LostReasonResponseSchema[];
  total?: number;
}

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
  notes?: any[][];
  tasks?: any[][];
  calendarEvents?: any[][];
  lostReasonId?: string;
  customFields?: CustomFieldResponseSchema[];
  followers?: any[][];
  externalObjectId?: string;
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

export interface AdditionalDetailsDTO {
  notes: boolean;
  tasks: boolean;
  calendarEvents: boolean;
  unReadConversations: boolean;
}

export interface OpportunitySearchBodyDTO {
  locationId: string;
  query: string;
  limit: number;
  page: number;
  searchAfter: string[];
  additionalDetails: AdditionalDetailsDTO;
}

export interface PostSearchSuccessfulResponseDto {
  opportunities?: SearchOpportunitiesResponseSchema[];
  total: number;
  aggregations?: any;
}

export interface PipelinesResponseSchema {
  id?: string;
  name?: string;
  stages?: any[][];
  showInFunnel?: boolean;
  showInPieChart?: boolean;
  locationId?: string;
  colorRenderMode?: string;
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
  lostReasonId?: string;
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
  id?: string;
  pipelineId: string;
  locationId: string;
  followers: string[];
  isRemoveAllFollowers: boolean;
  followersActionType: string;
  name?: string;
  status?: string;
  pipelineStageId?: string;
  monetaryValue?: any;
  assignedTo?: string;
  lostReasonId?: string;
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

