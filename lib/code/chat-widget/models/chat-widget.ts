// @generated
// File generated from our OpenAPI spec
// ChatWidget Models

export interface AcknowledgementDetailsDTO {
  icon?: any;
  placeholderColor?: string;
  liveChatIcon?: any;
  liveChatPlaceholderColor?: string;
}

export interface WidgetSettingsThemeCustomColorDTO {
  chatBubbleColor?: string;
  backgroundColor?: string;
  headerColor?: string;
  buttonColor?: string;
  avatarBackgroundColor?: string;
  avatarBorderColor?: string;
  senderMessageColor?: string;
  receivedMessageColor?: string;
}

export interface WidgetSettingsTypographyColorDTO {
  senderMessageTextColor?: string;
  receivedMessageTextColor?: string;
  headerMessageTextColor?: string;
  welcomeMessageTextColor?: string;
  systemMessageTextColor?: string;
}

export interface WidgetSettingsTypographyDTO {
  fontFamily?: string;
  colors?: any;
}

export interface WidgetSettingsThemeDTO {
  name?: string;
  value?: string;
  colors?: any;
  typography?: any;
}

export interface WidgetSettingsCustomizationSizeDTO {
  width?: any;
  height?: any;
}

export interface WidgetSettingsCustomizationDTO {
  position?: string;
  sizes?: any;
}

export interface RedirectDTO {
  redirectAction?: boolean;
  redirectWebsite?: string;
  redirectText?: string;
}

export interface BusinessOfficeHoursDTO {
  enableBusinessHours?: boolean;
  openHours?: OpenHoursDTO[];
  timezone?: string;
  outsideOfficeHoursWelcomeMsg?: string;
}

export interface ContactFormOptionsDTO {
  label?: string;
  value?: string;
  dataType?: string;
  placeholder?: string;
  fieldKey?: string;
  required?: boolean;
  id?: string;
  disabled?: boolean;
  picklistOptions?: string[];
}

export interface FBPageDTO {
  facebookPageId?: string;
  facebookPageName?: string;
}

export interface InstagramPageDTO {
  facebookPageId?: string;
  facebookPageName?: string;
  instagramPageId?: string;
  instagramUsername?: string;
}

export interface AdvanceSettingsDTO {
  brandingTitle?: string;
  redirect?: any;
  enableContactForm?: boolean;
  defaultConsentCheck?: boolean;
  businessOfficeHours?: any;
  contactFormOptions?: ContactFormOptionsDTO[];
  allInOneChatTypes?: string[];
  allInOneInitialMsg?: string;
  contactFormIntroMessage?: string;
  contactFormSystemMessage?: string;
  prefilledMessageText?: string;
  voiceAiAgent?: any;
  fbPage?: any;
  instagramPage?: any;
  playNotificationSound?: boolean;
  allowVoiceNotes?: boolean;
  allowAttachments?: boolean;
  voiceAiSendActionText?: string;
  voiceAiDisplayMode?: string;
  voiceAiAnimation?: string;
  voiceAiAnimationColor?: string;
  voiceAiAnimationSize?: string;
  addSupportingText?: boolean;
  supportingText?: string;
}

export interface WidgetSettingsDTO {
  acknowledgementDetails?: any;
  agencyName?: string;
  agencyWebsite?: string;
  allowAvatarImage?: boolean;
  autoCountryCode?: boolean;
  countryCode?: string;
  chatType?: string;
  promptType?: string;
  chatIcon?: any;
  enableRevisitMessage?: boolean;
  heading?: string;
  legalMsg?: string;
  liveChatAckMsg?: string;
  liveChatEndedMsg?: string;
  liveChatFeedbackMsg?: string;
  liveChatFeedbackNote?: string;
  liveChatIntroMsg?: string;
  liveChatUserInactiveMsg?: string;
  liveChatUserInactiveTime?: string;
  liveChatVisitorInactiveMsg?: string;
  liveChatVisitorInactiveTime?: string;
  locale?: string;
  promptAvatar?: string;
  promptAvatarAltText?: string;
  isPromptAvatarImageOptimize?: boolean;
  promptMsg?: string;
  revisitPromptMsg?: string;
  sendActionText?: string;
  showAgencyBranding?: boolean;
  showConsentCheckbox?: boolean;
  showLiveChatWelcomeMsg?: boolean;
  showPrompt?: boolean;
  subHeading?: string;
  successMsg?: string;
  supportContact?: string;
  thankYouMsg?: string;
  theme?: any;
  waNumber?: string;
  widgetPrimaryColor?: string;
  representativeAssignedMessage?: string;
  dimensions?: any;
  advanceSettings?: any;
  locationCountryCode?: string;
  widgetPlacement?: string;
  loadStrategy?: string;
}

export interface CreateWidgetDTO {
  version: number;
  chatType: string;
  name: string;
  locationId: string;
  deleted?: boolean;
  default?: boolean;
  settings?: any;
}

export interface InvalidLocationDTO {
  statusCode?: number;
  message?: string;
}

export interface NotFoundDTO {
  statusCode?: number;
  message?: string;
  error?: string;
}

export interface UpdateWidgetDTO {
  version?: number;
  chatType?: string;
  name?: string;
  default?: boolean;
  settings?: any;
}

export interface CloneChatWidgetDTO {
  locationId: string;
  chatWidgetId: string;
  name?: string;
}

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

export interface ChatWidgetDTO {
  _id: string;
  version: number;
  chatType: string;
  name: string;
  locationId: string;
  deleted: boolean;
  default: boolean;
  settings?: any;
  creationSource?: string;
  updatedBy?: string;
  originId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ChatWidgetListItemDTO {
  _id: string;
  name: string;
  chatType: string;
  default: boolean;
  creationSource?: string;
  settings?: any;
  createdAt: string;
  updatedAt: string;
}

export interface ChatWidgetListResponseDTO {
  chatWidgets: ChatWidgetListItemDTO[];
  totalCount: number;
}

export interface OpenHoursDTO {
  daysOfTheWeek?: string[];
  hours?: string[];
}

