// Proposals Models

export interface EntityReference {
}

export interface ELEMENTS_LOOKUP {
}

export interface FillableFieldsDTO {
  fieldId: string;
  isRequired: boolean;
  hasCompleted: boolean;
  recipient: string;
  entityType: EntityReference;
  id: string;
  type: ELEMENTS_LOOKUP;
  value: string;
}

export interface DiscountDto {
  id: string;
  value: number;
  type: string;
}

export interface GrandTotalDto {
  amount: number;
  currency: string;
  discountPercentage: number;
  discounts: DiscountDto[];
}

export interface RecipientItem {
  id: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phoneNumber?: string;
  phone?: string;
  hasCompleted: boolean;
  role: string;
  isPrimary: boolean;
  signingOrder: number;
  imgUrl?: string;
  ip?: string;
  userAgent?: string;
  signedDate?: string;
  contactName?: string;
  country?: string;
  entityName?: string;
  initialsImgUrl?: string;
  lastViewedAt?: string;
  shareLink?: string;
}

export interface ProposalEstimateLinksDto {
  referenceId: string;
  documentId: string;
  recipientId: string;
  entityName: string;
  recipientCategory: string;
  documentRevision: number;
  createdBy: string;
  deleted: boolean;
}

export interface DocumentDto {
  locationId: string;
  documentId: string;
  _id: string;
  name: string;
  type: string;
  deleted: boolean;
  isExpired: boolean;
  documentRevision: number;
  fillableFields: FillableFieldsDTO[];
  grandTotal: any;
  locale: string;
  status: string[];
  paymentStatus: string[];
  recipients: RecipientItem[];
  links: ProposalEstimateLinksDto[];
  updatedAt: string;
  createdAt: string;
}

export interface DocumentListResponseDto {
  documents: DocumentDto[];
  total: number;
  whiteLabelBaseUrl?: number;
  whiteLabelBaseUrlForInvoice?: number;
}

export interface BadRequestDTO {
  statusCode?: number;
  message?: string;
}

export interface CCRecipientItem {
  email: string;
  id: string;
  imageUrl: string;
  contactName: string;
  firstName: string;
  lastName: string;
}

export interface NotificationSendSettingDto {
  templateId: string;
  subject: string;
}

export interface NotificationSenderSettingDto {
  fromEmail: string;
  fromName: string;
}

export interface NotificationSettingsDto {
  receive: NotificationSendSettingDto;
  sender: NotificationSenderSettingDto;
}

export interface SendDocumentDto {
  locationId: string;
  documentId: string;
  documentName?: string;
  medium?: string;
  ccRecipients?: CCRecipientItem[];
  notificationSettings?: any;
  sentBy: string;
}

export interface SendDocumentResponseDto {
  success: boolean;
  links: ProposalEstimateLinksDto[];
}

export interface TemplateListResponseDTO {
  _id: string;
  deleted: boolean;
  version: number;
  name: string;
  locationId: string;
  type: string;
  updatedBy: string;
  isPublicDocument: boolean;
  createdAt: string;
  updatedAt: string;
  id: string;
  documentCount?: number;
  docFormUrl?: string;
}

export interface TemplateListPaginationResponseDTO {
  data: TemplateListResponseDTO[];
  total: number;
  traceId?: string;
}

export interface SendDocumentFromPublicApiBodyDto {
  templateId: string;
  userId: string;
  sendDocument?: boolean;
  locationId: string;
  contactId: string;
  opportunityId?: string;
}

export interface SendTemplateResponseDto {
  success: boolean;
  links: ProposalEstimateLinksDto[];
}

export interface UnauthorizedDTO {
  statusCode?: number;
  message?: string;
  error?: string;
}

