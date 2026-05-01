// AgentStudio Models

export interface InternalServerErrorDTO {
  statusCode?: number;
  message?: string;
}

export interface CreatePublicAgentDTO {
  locationId: string;
  name?: string;
  description?: string;
  agencyId?: string;
  authorId?: string;
  authorName?: string;
  authorEmail?: string;
  status: string;
  version: any;
  nodes?: string[];
  edges?: string[];
}

export interface CreatePublicAgentResponseDTO {
  success: boolean;
  message: string;
  agent: any;
  versions: any[];
}

export interface UpdatePublicAgentVersionDTO {
  locationId: string;
  versionName?: string;
  description?: string;
  nodes?: any[];
  edges?: any[];
  globalVariables?: any[];
  inputVariables?: any[];
  runtimeVariables?: any[];
  globalConfig?: any;
  userId?: string;
  userName?: string;
}

export interface UpdatePublicAgentResponseDTO {
  success: boolean;
  message: string;
  data: any;
}

export interface UpdatePublicAgentMetadataDTO {
  locationId: string;
  name?: string;
  description?: string;
  status?: string;
}

export interface DeletePublicAgentResponseDTO {
  success: boolean;
  message: string;
  agentId?: string;
}

export interface PromoteAndPublishDTO {
  locationId: string;
  userId?: string;
  userName?: string;
  userEmail?: string;
}

export interface PromoteAndPublishResponseDTO {
  success: boolean;
  message: string;
  data: any;
}

export interface GetPublishedAgentsResponseDTO {
  success: boolean;
  message: string;
  agents: any[];
  pagination: any;
}

export interface GetAgentByIdResponseDTO {
  success: boolean;
  message: string;
  agent: any;
  traceId?: string;
}

export interface PublicAttachmentSchema {
  type: string;
  imageUrl: string;
}

export interface ExecutePublicAgentDTO {
  message: string;
  executionId?: string;
  inputVariables?: any;
  versionId?: string;
  attachments?: PublicAttachmentSchema[];
  locationId: string;
  contactId?: string;
}

export interface ExecutePublicAgentResponseDTO {
  success: boolean;
  executionId: string;
  interactionId: string;
  response: string;
  type: string;
  nextExpectedInput: string;
  goalCompletion: boolean;
  executionStatus: string;
  flowSwitch: boolean;
  attachments: any[];
  generativeOutputs: any[];
}

