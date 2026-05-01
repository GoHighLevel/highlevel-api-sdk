// KnowledgeBase Models

export interface BadRequestDTO {
  statusCode?: number;
  message?: string;
}

export interface UnauthorizedDTO {
  statusCode?: number;
  message?: string;
  error?: string;
}

export interface UnprocessableDTO {
  statusCode?: number;
  message?: string[];
  error?: string;
}

export interface InternalServerErrorDTO {
  statusCode?: number;
  message?: string;
}

export interface FaqResponseDTO {
  id: string;
  question: string;
  questionLowerCase: string;
  answer: string;
  knowledgeBaseId: string;
  locationId: string;
  trainedUrlId: string;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ListFaqsResponseDTO {
  count: number;
  faqs: FaqResponseDTO[];
  lastFaqId?: string;
  hasMore?: boolean;
}

export interface AddFaqDTO {
  locationId: string;
  question: string;
  answer: string;
  knowledgeBaseId: string;
}

export interface CreateFaqResponseDTO {
  success: boolean;
  faq: any;
}

export interface UpdateFaqBodyDTO {
  question: string;
  answer: string;
}

export interface UpdateFaqResponseDTO {
  success: boolean;
}

export interface DeleteFaqResponseDTO {
  success: boolean;
}

export interface CrawledUrlDTO {
  id: string;
  url: string;
  title: string;
  status: string;
  locationId: string;
  knowledgeBaseId: string;
  content: string;
  contentEditedByUser: boolean;
  updatedAt: string;
}

export interface GetAllUrlsByKnowledgeBaseResponseDTO {
  count: number;
  urls: CrawledUrlDTO[];
}

export interface ErrorDetailsDTO {
  stack: string;
  response: string;
  status: number;
  options?: any;
  message: string;
  name: string;
}

export interface CrawlingRecordDTO {
  url: string;
  id: string;
  title?: string;
  error?: any;
}

export interface CrawlingAggregateDTO {
  _id: string;
  records: CrawlingRecordDTO[];
}

export interface OperationDetailsDTO {
  discoveredUrlsCount: number;
  trainedUrlsCount: number;
  _id: string;
  locationId: string;
  status: string;
  url: string;
  mode: string;
  knowledgeBaseId: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  robotsFileData?: string;
}

export interface CrawlingStatusDataDTO {
  aggregate: CrawlingAggregateDTO[];
  operationDetails: any;
}

export interface CrawlingStatusResponseDTO {
  success: boolean;
  data: any;
}

export interface DiscoverWebsiteRequestDTO {
  locationId: string;
  url: string;
  option: string;
  knowledgeBaseId: string;
}

export interface DiscoverWebsiteDataDTO {
  operationId: string;
  status: string;
  url: string;
}

export interface DiscoverWebsiteResponseDTO {
  success: boolean;
  data: any;
}

export interface TrainDiscoveredUrlsDTO {
  locationId: string;
  urlIds: string[];
  knowledgeBaseId: string;
  operationId: string;
}

export interface TrainDiscoveredUrlsResponseDTO {
  success: boolean;
}

export interface DeleteWebsiteUrlRequestDTO {
  knowledgeBaseId: string;
  locationId: string;
  urlIds: string[];
}

export interface DeleteWebsiteUrlResponseDTO {
  success: boolean;
}

export interface KnowledgeBaseListItemDTO {
  id: string;
  name: string;
  createdAt: string;
}

export interface GetAllKnowledgeBasesPaginatedDataDTO {
  knowledgeBases: KnowledgeBaseListItemDTO[];
  activeCount: number;
  hasMore: boolean;
  lastKnowledgeBaseId?: string;
}

export interface GetAllKnowledgeBasesPaginatedResponseDTO {
  success: boolean;
  data: any;
}

export interface KnowledgeBaseMetadataDTO {
  faqs: number;
  urls: number;
  richText: number;
  files: number;
  webSearches: number;
  tables: number;
}

export interface GetKnowledgeBaseByIdDataDTO {
  id: string;
  name: string;
  nameLowerCase: string;
  locationId: string;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  kbMetadata: any;
  isDefault?: boolean;
}

export interface GetKnowledgeBaseByIdResponseDTO {
  success: boolean;
  data: any;
}

export interface CreateKnowledgeBaseDTO {
  name: string;
  description?: string;
  locationId: string;
}

export interface KnowledgeBaseDataDTO {
  id: string;
  name: string;
  nameLowerCase: string;
  locationId: string;
  kbMetadata: any;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateKnowledgeBaseResponseDTO {
  success: boolean;
  data: any;
}

export interface UpdateKnowledgeBaseDTO {
  name?: string;
  description?: string;
}

export interface UpdateKnowledgeBaseResponseDTO {
  success: boolean;
}

export interface DeleteKnowledgeBaseResponseDTO {
  success: boolean;
}

