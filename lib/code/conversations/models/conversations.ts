// Conversations Models

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

export interface CreateCustomSubtypeDto {
  name: string;
  description?: string;
  channel: string;
  language: string;
}

export interface UpdateCustomSubtypeDto {
  name?: string;
  description?: string;
  archived?: boolean;
  resubscription_legal_form_id?: string;
}

export interface SubscriptionActionDto {
  type: string;
  subtype_name?: string;
  subtype_id?: string;
  subtype_status: string;
}

export interface UserSubscriptionChangeDto {
  locationId: string;
  contactId: string;
  email: string;
  subscription_action: any;
  legal_reason?: string;
  legal_description?: string;
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
  chatWidgetId?: string;
}

export interface ExportMessagesResponseDto {
  messages: GetMessageResponseDto[];
  nextCursor?: string;
  total: number;
}

export interface GetMessagesByConversationResponseDto {
  lastMessageId: string;
  nextPage: boolean;
  messages: GetMessageResponseDto[];
}

export interface ForwardConfigDto {
  isForwarded: boolean;
  forwardWholeThread?: boolean;
  messageId?: string;
  emailMessageId?: string;
  sourceContactId?: string;
  sourceConversationId?: string;
  toEmail?: string;
  recipientContactId?: string;
  recipientConversationId?: string;
}

export interface SendMessageBodyDto {
  type: string;
  subType: any;
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
  customSubtypeId?: string;
  emailReplyMode?: string;
  fromNumber?: string;
  toNumber?: string;
  forward?: any;
  status: string;
  usesNativeSchedulingAi?: boolean;
  optimizationPeriod?: string;
}

export interface ForwardResponseDto {
  forwardWholeThread?: boolean;
  messageId?: string;
  emailMessageId?: string;
  sourceContactId?: string;
  sourceConversationId?: string;
  forwardToEmail?: string;
  recipientContactId?: string;
  recipientConversationId?: string;
}

export interface SendMessageResponseDto {
  conversationId: string;
  emailMessageId?: string;
  messageId: string;
  messageIds?: string[];
  msg?: string;
  forwardData?: any;
  status: string;
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
  contactId: string;
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

export interface SendReviewReplyDto {
  conversationId: string;
  locationId: string;
  message: string;
}

export interface UploadFilesDto {
  conversationId: string;
  contactId: string;
  locationId: string;
  attachmentUrls: string[];
  chatServiceSid?: string;
  isGroupSms?: string;
}

export interface UploadFilesResponseDto {
  uploadedFiles: any;
  twilioMediaSids?: string[];
}

export interface UploadFilesErrorResponseDto {
  status: number;
  message: string;
}

export interface InitiateFileUploadDto {
  locationId: string;
  conversationId: string;
  filename: string;
  contentType: string;
  fileSize?: number;
  channel: string;
}

export interface InitiateFileUploadResponseDto {
  uploadUrl: string;
  uploadId: string;
  filePath: string;
  expiresAt: number;
  maxFileSize: number;
}

export interface CompleteFileUploadDto {
  uploadId: string;
  filePath: string;
  locationId: string;
  conversationId: string;
  filename: string;
}

export interface CompleteFileUploadResponseDto {
  uploadedFiles: any;
  metadata: any;
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

export interface AddMessageAttachmentsDto {
  attachments: string[];
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

