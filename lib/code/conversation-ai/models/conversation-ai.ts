// ConversationAi Models

export interface triggerWorkflowDto {
  workflowIds: string[];
  triggerCondition: string;
  triggerMessage?: string;
}

export interface updateContactFieldDto {
  contactFieldId: string;
  description: string;
  contactUpdateExamples?: string[];
}

export interface appointmentBookingDto {
  actionId?: string;
  calendarId: string;
  onlySendLink: boolean;
  triggerWorkflow: boolean;
  workflowIds?: string[];
  sleepAfterBooking: boolean;
  sleepTimeUnit?: string;
  sleepTime?: number;
  transferBot: boolean;
  transferAgent?: string;
  rescheduleEnabled: boolean;
  cancelEnabled: boolean;
}

export interface stopBotDto {
  stopBotDetectionType: string;
  stopBotTriggerCondition: string;
  reactivateEnabled: boolean;
  sleepTimeUnit?: string;
  sleepTime?: number;
  enabled: boolean;
  stopBotExamples: string[];
  finalMessage: string;
  tags?: string[];
}

export interface humanHandOverDto {
  enabled: boolean;
  triggerCondition: string;
  examples?: string[];
  assignToUserId?: string;
  skipAssignToUser?: boolean;
  createTask?: boolean;
  reactivateEnabled: boolean;
  sleepTimeUnit?: string;
  sleepTime?: number;
  finalMessage: string;
  tags?: string[];
  handoverType: string;
}

export interface FollowupSequence {
  id: number;
  followupTimeUnit: string;
  followupTime: number;
  aiEnabledMessage?: boolean;
  triggerWorkflow?: boolean;
  customMessage?: string;
  workflowId?: string;
  contactRequested?: boolean;
}

export interface Interval {
  startHour: number;
  startMinute: number;
  endHour: number;
  endMinute: number;
}

export interface WorkingHours {
  dayOfTheWeek: number;
  intervals?: Interval[];
}

export interface FollowupSettings {
  dynamicChannelSwitching: boolean;
  followUpHours?: boolean;
  workingHours?: WorkingHours[];
  timezoneToUse?: string;
}

export interface advancedFollowupDto {
  enabled: boolean;
  scenarioId: string;
  followupSequence: FollowupSequence[];
  followupSettings?: any;
}

export interface transferBotDto {
  transferBotType: string;
  transferToBot: string;
  enabled: boolean;
  transferBotTriggerCondition?: string;
  transferBotExamples?: string[];
}

export interface CreateActionDTO {
  type: string;
  name: string;
  details: any;
}

export interface ActionDataDTO {
  id: string;
  name: string;
  type: string;
  agentId?: string;
  details: any;
}

export interface createActionResponseDTO {
  data: any;
  success: boolean;
}

export interface fetchActionsForEmployeeResponseDTO {
  data: ActionDataDTO[];
  success: boolean;
}

export interface fetchActionDetailsResponseDTO {
  data: any;
  success: boolean;
}

export interface updateActionResponseDTO {
  data: any;
  success: boolean;
}

export interface DeleteActionDataDTO {
  id: string;
}

export interface deleteActionResponseDTO {
  data: any;
  success: boolean;
}

export interface UpdateFollowupSettingsDTO {
  actionIds: string[];
  followupSettings: FollowupSettings;
}

export interface CreateEmployeeDto {
  name: string;
  businessName?: string;
  mode?: string;
  channels?: string[];
  isPrimary?: boolean;
  waitTime?: number;
  waitTimeUnit?: string;
  sleepEnabled?: boolean;
  sleepTime?: number;
  sleepTimeUnit?: string;
  personality: string;
  goal: string;
  instructions: string;
  autoPilotMaxMessages?: number;
  knowledgeBaseIds?: string[];
  respondToImages?: boolean;
  respondToAudio?: boolean;
  sleepOnManualMessage?: boolean;
  sleepOnWorkflowMessage?: boolean;
}

export interface ActionsIdDto {
  id: string;
  type: string;
}

export interface EmployeeResponseDTO {
  id: string;
  name: string;
  businessName?: string;
  mode: string;
  channels: string[];
  waitTime: number;
  waitTimeUnit: string;
  sleepEnabled: boolean;
  sleepTime?: number;
  sleepTimeUnit?: string;
  actions: ActionsIdDto[];
  isPrimary: boolean;
  autoPilotMaxMessages: number;
  goal?: string;
  personality?: string;
  instructions?: string;
  knowledgeBaseIds?: string[];
  sleepOnManualMessage?: boolean;
  sleepOnWorkflowMessage?: boolean;
}

export interface EmployeeListItemDTO {
  id: string;
  name: string;
  businessName?: string;
  mode: string;
  channels: string[];
  waitTime: number;
  waitTimeUnit: string;
  sleepEnabled: boolean;
  sleepTime?: number;
  sleepTimeUnit?: string;
  actions: any[];
  isPrimary: boolean;
  autoPilotMaxMessages: number;
  goal?: any;
  knowledgeBaseIds?: string[];
  createdAt: string;
  updatedAt: string;
  sleepOnManualMessage?: boolean;
  sleepOnWorkflowMessage?: boolean;
}

export interface SearchEmployeeResponseDTO {
  agents: EmployeeListItemDTO[];
  totalCount: number;
  count: number;
}

export interface UpdateEmployeeDto {
  name?: string;
  businessName?: string;
  mode?: string;
  channels?: string[];
  isPrimary?: boolean;
  waitTime?: number;
  waitTimeUnit?: string;
  sleepEnabled?: boolean;
  sleepTime?: number;
  sleepTimeUnit?: string;
  personality?: string;
  goal?: string;
  instructions?: string;
  autoPilotMaxMessages: number;
  knowledgeBaseIds?: string[];
  respondToImages?: boolean;
  respondToAudio?: boolean;
  sleepOnManualMessage?: boolean;
  sleepOnWorkflowMessage?: boolean;
}

export interface DeleteEmployeeResponseDTO {
  success: boolean;
  id: string;
}

export interface FetchAIResponseDetailsResponseDTO {
  prompt: string;
  intent?: string;
  responseMessage: string;
  faqs?: any[];
  website?: any[];
  agentId?: string;
  input?: string;
  actionLogs: any[];
  history: any[];
  mode?: string;
}

