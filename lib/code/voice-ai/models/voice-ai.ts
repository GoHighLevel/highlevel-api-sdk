/**
 * VoiceAi Models and Types
 * Generated from OpenAPI schema definitions
 */

export interface VoiceAILanguage {
}

export interface PatienceLevel {
}

export interface SendPostCallNotificationDTO {
  admins: boolean;
  allUsers: boolean;
  contactAssignedUser: boolean;
  specificUsers: string[];
  customEmails: string[];
}

export interface IntervalDTO {
  startHour: number;
  endHour: number;
  startMinute: number;
  endMinute: number;
}

export interface AgentWorkingHoursDTO {
  dayOfTheWeek: number;
  intervals: IntervalDTO[];
}

export interface TranslationDTO {
  enabled: boolean;
  language?: string;
}

export interface AgentCreationRequestDTO {
  locationId?: string;
  agentName?: string;
  businessName?: string;
  welcomeMessage?: string;
  agentPrompt?: string;
  voiceId?: string;
  language?: VoiceAILanguage;
  patienceLevel?: PatienceLevel;
  maxCallDuration?: number;
  sendUserIdleReminders?: boolean;
  reminderAfterIdleTimeSeconds?: number;
  inboundNumber?: string;
  numberPoolId?: string;
  callEndWorkflowIds?: string[];
  sendPostCallNotificationTo?: any;
  agentWorkingHours?: AgentWorkingHoursDTO[];
  timezone?: string;
  isAgentAsBackupDisabled?: boolean;
  translation?: any;
}

export interface SendPostCallNotificationSchema {
  admins?: boolean;
  allUsers?: boolean;
  contactAssignedUser?: boolean;
  specificUsers?: string[];
  customEmails?: string[];
}

export interface TranslationSchema {
  enabled?: boolean;
  language?: string;
}

export interface CreateAgentResponseDTO {
  id: string;
  locationId: string;
  agentName: string;
  businessName: string;
  welcomeMessage: string;
  agentPrompt: string;
  voiceId: string;
  language: string;
  patienceLevel: string;
  maxCallDuration: number;
  sendUserIdleReminders: boolean;
  reminderAfterIdleTimeSeconds: number;
  inboundNumber?: string;
  numberPoolId?: string;
  callEndWorkflowIds?: string[];
  sendPostCallNotificationTo?: any;
  agentWorkingHours?: AgentWorkingHoursDTO[];
  timezone: string;
  isAgentAsBackupDisabled: boolean;
  translation?: any;
}

export interface PatchAgentDTO {
  agentName?: string;
  businessName?: string;
  welcomeMessage?: string;
  agentPrompt?: string;
  voiceId?: string;
  language?: VoiceAILanguage;
  patienceLevel?: PatienceLevel;
  maxCallDuration?: number;
  sendUserIdleReminders?: boolean;
  reminderAfterIdleTimeSeconds?: number;
  inboundNumber?: string;
  numberPoolId?: string;
  callEndWorkflowIds?: string[];
  sendPostCallNotificationTo?: any;
  agentWorkingHours?: AgentWorkingHoursDTO[];
  timezone?: string;
  isAgentAsBackupDisabled?: boolean;
  translation?: any;
}

export interface PatchAgentResponseDTO {
  id: string;
  locationId: string;
  agentName: string;
  businessName: string;
  welcomeMessage: string;
  agentPrompt: string;
  voiceId: string;
  language: string;
  patienceLevel: string;
  maxCallDuration: number;
  sendUserIdleReminders: boolean;
  reminderAfterIdleTimeSeconds: number;
  inboundNumber?: string;
  numberPoolId?: string;
  callEndWorkflowIds?: string[];
  sendPostCallNotificationTo?: any;
  agentWorkingHours?: AgentWorkingHoursDTO[];
  timezone: string;
  isAgentAsBackupDisabled: boolean;
  translation?: any;
}

export interface AgentActionResponseDTO {
  id: string;
  actionType: string;
  name: string;
  actionParameters: any;
}

export interface GetAgentResponseDTO {
  id: string;
  locationId: string;
  agentName: string;
  businessName: string;
  welcomeMessage: string;
  agentPrompt: string;
  voiceId: string;
  language: string;
  patienceLevel: string;
  maxCallDuration: number;
  sendUserIdleReminders: boolean;
  reminderAfterIdleTimeSeconds: number;
  inboundNumber?: string;
  numberPoolId?: string;
  callEndWorkflowIds?: string[];
  sendPostCallNotificationTo?: any;
  agentWorkingHours?: AgentWorkingHoursDTO[];
  timezone: string;
  isAgentAsBackupDisabled: boolean;
  translation?: any;
  actions: AgentActionResponseDTO[];
}

export interface GetAgentsResponseDTO {
  total: number;
  page: number;
  pageSize: number;
  agents: GetAgentResponseDTO[];
}

export interface CallTransferActionParameters {
  triggerPrompt: string;
  transferToType: string;
  transferToValue: string;
  triggerMessage?: string;
  hearWhisperMessage?: boolean;
}

export interface DataExtractionActionParameters {
  contactFieldId: string;
  description: string;
  examples: string[];
  overwriteExistingValue?: boolean;
}

export interface InCallDataExtractionActionParameters {
  contactFieldId: string;
  description: string;
  examples: string[];
  overwriteExistingValue?: boolean;
}

export interface WorkflowTriggerParameters {
  triggerPrompt: string;
  triggerMessage: string;
  workflowId: string;
}

export interface SMSParameters {
  triggerPrompt: string;
  triggerMessage: string;
  messageBody: string;
}

export interface AppointmentBookingActionParameters {
  calendarId: string;
  daysOfOfferingDates: number;
  slotsPerDay: number;
  hoursBetweenSlots: number;
}

export interface CustomActionHeaderDTO {
  key: string;
  value: string;
}

export interface CustomActionParameterDTO {
  name: string;
  description?: string;
  type?: string;
  example?: string;
}

export interface CustomActionApiDetailsDTO {
  url: string;
  method: string;
  authenticationRequired?: boolean;
  authenticationValue?: string;
  headers?: CustomActionHeaderDTO[];
  parameters?: CustomActionParameterDTO[];
}

export interface CustomActionParameters {
  triggerPrompt: string;
  triggerMessage?: string;
  apiDetails: any;
  selectedPaths?: string[];
}

export interface KnowledgeBaseParameters {
  triggerPrompt?: string;
  triggerMessage: string;
  knowledgeBaseId: string;
  parameters?: CustomActionParameterDTO[];
}

export interface CallActionSchema {
  actionId?: string;
  actionType: string;
  actionName: string;
  description?: string;
  actionParameters?: any;
  executedAt?: string;
  triggerReceivedAt?: string;
}

export interface ExtractedDataSchema {
}

export interface CallLogDTO {
  id: string;
  contactId?: string;
  agentId: string;
  isAgentDeleted: boolean;
  fromNumber?: string;
  createdAt: string;
  duration: number;
  trialCall: boolean;
  executedCallActions: CallActionSchema[];
  summary: string;
  transcript: string;
  translation?: any;
  extractedData?: any;
  messageId?: string;
}

export interface CallLogsResponseDTO {
  total: number;
  page: number;
  pageSize: number;
  callLogs: CallLogDTO[];
}

export interface CreateSingleActionDTO {
  agentId: string;
  locationId: string;
  actionType: string;
  name: string;
  actionParameters: any;
}

export interface CreateActionResponseDTO {
  id: string;
  actionType: string;
  name: string;
  actionParameters: any;
}

export interface UpdateSingleActionDTO {
  agentId: string;
  locationId: string;
  actionType: string;
  name: string;
  actionParameters: any;
}

export interface UpdateActionResponseDTO {
  id: string;
  actionType: string;
  name: string;
  actionParameters: any;
}

export interface GetActionResponseDTO {
  id: string;
  actionType: string;
  name: string;
  actionParameters: any;
}

