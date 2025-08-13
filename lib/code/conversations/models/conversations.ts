/**
 * Conversations Models and Types
 * Generated from OpenAPI schema definitions
 */

export interface BadRequestDTO {
  statusCode?: number;
  message?: string;
}

export interface UnauthorizedDTO {
  statusCode?: number;
  message?: string;
  error?: string;
}

export interface ForbiddenDTO {
  statusCode?: number;
  message?: string;
  error?: string;
}

export interface StartAfterNumberSchema {
  startAfterDate?: number;
}

export interface StartAfterArrayNumberSchema {
  startAfterDate?: string[];
}

export interface ConversationSchema {
  id: string;
  contactId: string;
  locationId: string;
  lastMessageBody: string;
  lastMessageType: string;
  type: string;
  unreadCount: number;
  fullName: string;
  contactName: string;
  email: string;
  phone: string;
}

export interface SendConversationResponseDto {
  conversations: ConversationSchema[];
  total: number;
}

export interface CreateConversationDto {
  locationId: string;
  contactId: string;
}

export interface ConversationCreateResponseDto {
  id: string;
  dateUpdated: string;
  dateAdded: string;
  deleted: boolean;
  contactId: string;
  locationId: string;
  lastMessageDate: string;
  assignedTo?: string;
}

export interface CreateConversationSuccessResponse {
  success: boolean;
  conversation: any;
}

export interface GetConversationByIdResponse {
  contactId: string;
  locationId: string;
  deleted: boolean;
  inbox: boolean;
  type: number;
  unreadCount: number;
  assignedTo?: string;
  id: string;
  starred?: boolean;
}

export interface UpdateConversationDto {
  locationId: string;
  unreadCount?: number;
  starred?: boolean;
  feedback?: any;
}

export interface ConversationDto {
  id?: string;
  locationId: string;
  contactId: string;
  assignedTo?: string;
  userId?: string;
  lastMessageBody?: string;
  lastMessageDate?: string;
  lastMessageType?: string;
  unreadCount?: number;
  inbox?: boolean;
  starred?: boolean;
  deleted: boolean;
}

export interface GetConversationSuccessfulResponse {
  success: boolean;
  conversation: any;
}

export interface DeleteConversationSuccessfulResponse {
  success: boolean;
}

export interface GetEmailMessageResponseDto {
  id: string;
  altId?: string;
  threadId: string;
  locationId: string;
  contactId: string;
  conversationId: string;
  dateAdded: string;
  subject?: string;
  body: string;
  direction: string;
  status?: string;
  contentType: string;
  attachments?: string[];
  provider?: string;
  from: string;
  to: string[];
  cc?: string[];
  bcc?: string[];
  replyToMessageId?: string;
  source?: string;
  conversationProviderId?: string;
}

export interface CancelScheduledResponseDto {
  status: number;
  message: string;
}

export interface MessageMeta {
  callDuration?: string;
  callStatus?: string;
  email?: any;
}

export interface GetMessageResponseDto {
  id: string;
  altId?: string;
  type: number;
  messageType: string;
  locationId: string;
  contactId: string;
  conversationId: string;
  dateAdded: string;
  body?: string;
  direction: string;
  status?: string;
  contentType: string;
  attachments?: string[];
  meta?: MessageMeta;
  source?: string;
  userId?: string;
  conversationProviderId?: string;
}

export interface GetMessagesByConversationResponseDto {
  messages: any;
}

export interface SendMessageBodyDto {
  type: string;
  contactId: string;
  appointmentId?: string;
  attachments?: string[];
  emailFrom?: string;
  emailCc?: string[];
  emailBcc?: string[];
  html?: string;
  message?: string;
  subject?: string;
  replyMessageId?: string;
  templateId?: string;
  threadId?: string;
  scheduledTimestamp?: number;
  conversationProviderId?: string;
  emailTo?: string;
  emailReplyMode?: string;
  fromNumber?: string;
  toNumber?: string;
}

export interface SendMessageResponseDto {
  conversationId: string;
  emailMessageId?: string;
  messageId: string;
  messageIds?: string[];
  msg?: string;
}

export interface CallDataDTO {
  to?: string;
  from?: string;
  status?: string;
}

export interface ProcessMessageBodyDto {
  type: string;
  attachments?: string[];
  message?: string;
  conversationId: string;
  conversationProviderId: string;
  html?: string;
  subject?: string;
  emailFrom?: string;
  emailTo?: string;
  emailCc?: string[];
  emailBcc?: string[];
  emailMessageId?: string;
  altId?: string;
  direction?: any;
  date?: string;
  call?: any;
}

export interface ProcessMessageResponseDto {
  success: boolean;
  conversationId: string;
  messageId: string;
  message: string;
  contactId?: string;
  dateAdded?: string;
  emailMessageId?: string;
}

export interface ProcessOutboundMessageBodyDto {
  type: string;
  attachments?: string[];
  conversationId: string;
  conversationProviderId: string;
  altId?: string;
  date?: string;
  call?: any;
}

export interface UploadFilesDto {
  conversationId: string;
  locationId: string;
  attachmentUrls: string[];
}

export interface UploadFilesResponseDto {
  uploadedFiles: any;
}

export interface UploadFilesErrorResponseDto {
  status: number;
  message: string;
}

export interface ErrorDto {
  code: string;
  type: string;
  message: string;
}

export interface UpdateMessageStatusDto {
  status: string;
  error?: any;
  emailMessageId?: string;
  recipients?: string[];
}

export interface GetMessageTranscriptionResponseDto {
  mediaChannel: number;
  sentenceIndex: number;
  startTime: number;
  endTime: number;
  transcript: string;
  confidence: number;
}

export interface UserTypingBody {
  locationId: string;
  isTyping: string;
  visitorId: string;
  conversationId: string;
}

export interface CreateLiveChatMessageFeedbackResponse {
  success: boolean;
}

