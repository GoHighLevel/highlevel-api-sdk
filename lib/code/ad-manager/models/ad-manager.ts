// AdManager Models

export interface GreetingCard {
  title: string;
  style: string;
  content: string[];
}

export interface FormQuestionOption {
  key: string;
  value: string;
}

export interface FormQuestion {
  label?: string;
  key: string;
  type: string;
  options?: FormQuestionOption[];
}

export interface CustomDisclaimerCheckbox {
  is_required: boolean;
  text: string;
  key: string;
}

export interface CustomDisclaimer {
  title: string;
  body: string;
  checkboxes?: CustomDisclaimerCheckbox[];
}

export interface ThankYouPage {
  title: string;
  body: string;
  buttonText: string;
  buttonType: string;
  buttonLink?: string;
  businessPhone?: string;
  countryCode?: string;
}

export interface CreateLeadFormDTO {
  type: string;
  name: string;
  locationId: string;
  greetingCard?: any;
  questions: FormQuestion[];
  questionPageHeadline?: string;
  privacyPolicyLink: string;
  privacyPolicyText?: string;
  customDisclaimer?: any;
  thankYouPage: any;
}

export interface LocationIdBodyDTO {
  locationId: string;
}

export interface WelcomeMessageQuestion {
  question: string;
  response?: string;
}

export interface CreateConversationFormDTO {
  locationId: string;
  name: string;
  text: string;
  questions: WelcomeMessageQuestion[];
}

export interface CreateIntegrationDTO {
  locationId: string;
  pageId: string;
  adAccountId?: string;
}

export interface PublishAdDTO {
  locationId: string;
}

export interface UpsertConversionPixelDTO {
  locationId: string;
  conversionPixelId?: string;
  name?: string;
  igUserId?: string;
  type: string;
}

export interface FbUpdateAudienceBodyDTO {
  locationId: string;
  name: string;
  description: string;
}

export interface UpdateCustomAudienceDTO {
  locationId: string;
  contactId: string;
  fbAdAccountId?: string;
}

export interface UpdateCustomAudienceBatchDTO {
  locationId: string;
  csvPath?: string;
  operationType: string;
  smartlistIds?: string[];
  dynamicAudience?: string;
}

export interface FbSetDefaultPageBodyDTO {
  pageId: string;
}

export interface UpsertCampaignDTO {
  id?: string;
  locationId: string;
  name?: string;
  objective?: string;
  specialAdCategories?: string;
  source?: string;
}

export interface AudienceLocationGeometry {
  location: any;
  location_type: string;
}

export interface AudienceLocationDTO {
  key: string;
  name: string;
  type: string;
  selectionType: string;
  radius?: number;
  radiusUnit?: string;
  geometry?: any;
}

export interface AudienceLocaleDTO {
  name: string;
  key: number;
}

export interface AudiencePlacementsDTO {
  facebook?: string[];
  instagram?: string[];
  messenger?: string[];
}

export interface AudienceCustomAudienceItemDTO {
  id: string;
  name: string;
}

export interface AudienceInterestDTO {
  id: string;
  name: string;
  type?: string;
}

export interface FacebookAudienceDTO {
  geo_locations: AudienceLocationDTO[];
  locales?: AudienceLocaleDTO[];
  placements?: any;
  placementType?: string;
  lookalike?: AudienceCustomAudienceItemDTO[];
  retargeting?: AudienceCustomAudienceItemDTO[];
  interests?: AudienceInterestDTO[];
  age_min?: number;
  age_max?: number;
  genders?: number[];
}

export interface Budget {
  budgetType: string;
  amount: number;
  scheduleStartDate?: string;
  scheduleEndDate?: string;
}

export interface UpsertAdsetDTO {
  id?: string;
  locationId: string;
  name?: string;
  pageId?: string;
  instagramActorId?: string;
  messagingPlatforms?: string;
  whatsappNumber?: string;
  audience?: any;
  budget?: any;
  conversionLocation?: string;
  customEventType?: string;
  pixelId?: string;
  campaignId: string;
}

export interface MediaDTO {
  src: string;
  thumbnailUrl?: string;
  selectedPoster?: number;
  type: string;
  name?: string;
  headline?: string;
  description?: string;
  link?: string;
}

export interface UpsertAdDTO {
  id?: string;
  locationId: string;
  name?: string;
  primaryText?: string;
  headline?: string;
  description?: string;
  imageUrl?: string;
  mediaType?: string;
  media?: MediaDTO[];
  multiAdvertiserAds?: boolean;
  campaignId: string;
  adsetId: string;
  cta?: string;
  conversationFormId?: string;
  destinationLink?: string;
  destinationFormId?: string;
}

export interface AdScheduleTargetDTO {
  startMinute: string;
  endMinute: string;
  dayOfWeek: string;
  startHour: number;
  endHour: number;
}

export interface CallAssetPayloadDTO {
  phoneNumber: string;
  countryCode: string;
  callConversionAction?: string;
  adScheduleTargets?: AdScheduleTargetDTO[];
  resourceName?: string;
}

export interface SitelinkAssetPayloadDTO {
  resourceName?: string;
  linkText: string;
  finalUrls: string;
  description1?: string;
  description2?: string;
  startDate?: string;
  endDate?: string;
  adScheduleTargets?: AdScheduleTargetDTO[];
}

export interface LeadFormFieldDTO {
  inputType: string;
  singleChoiceAnswers?: string[];
}

export interface CustomQuestionFieldDTO {
  customQuestionText: string;
  singleChoiceAnswers: string[];
}

export interface LeadFormAssetPayloadDTO {
  resourceName?: string;
  headline: string;
  description: string;
  businessName: string;
  privacyPolicyUrl: string;
  fields: LeadFormFieldDTO[];
  callToActionType: string;
  callToActionDescription?: string;
  backgroundImageAsset?: string;
  desiredIntent?: string;
  customQuestionFields?: CustomQuestionFieldDTO[];
  postSubmitHeadline?: string;
  postSubmitDescription?: string;
  postSubmitCallToActionType?: string;
  finalUrls?: string;
}

export interface ConversionValueSettings {
  defaultValue: number;
  defaultCurrencyCode: string;
  alwaysUseDefaultValue: boolean;
}

export interface UpsertConversionDTO {
  locationId: string;
  conversionId?: string;
  name: string;
  type: string;
  category: string;
  valueSettings: any;
  countingType: string;
  attributionModel: string;
  clickThroughWindow: number;
}

export interface CreateGoogleIntegrationDTO {
  locationId: string;
  adAccountId: string;
  mccId: string;
}

export interface KeywordSuggestionDTO {
  url: string;
  languageCode?: string;
  locations?: string[];
  keywords?: string[];
}

export interface UpsertAssetsDTO {
  locationId: string;
  type: string;
  payload: any;
}

export interface MemberDTO {
  memberType: string;
  keyword?: string;
  url?: string;
  app?: string;
}

export interface StringRuleItemDTO {
  operator: string;
  value: string;
}

export interface RuleItemDTO {
  name: string;
  stringRuleItem: any;
}

export interface RuleItemGroupDTO {
  ruleItems: RuleItemDTO[];
}

export interface RuleDTO {
  ruleItemGroups: RuleItemGroupDTO[];
}

export interface RuleOperandDTO {
  lookbackWindowDays: number;
  rule: any;
}

export interface FlexibleRuleUserListDTO {
  inclusiveRuleOperator?: string;
  inclusiveOperands: RuleOperandDTO[];
  exclusiveOperands: RuleOperandDTO[];
}

export interface RuleBasedUserListDTO {
  prepopulationStatus?: string;
  flexibleRuleUserList: any;
}

export interface UpsertSegmentDTO {
  name: string;
  description?: string;
  members?: MemberDTO[];
  status?: string;
  type?: string;
  id?: string;
  membershipStatus?: string;
  ruleBasedUserList?: any;
  membershipLifeSpan?: number;
  seedUserListIds?: string[];
  countryCodes?: string[];
  expansionLevel?: string;
}

export interface CreateOfflineUserListJobDTO {
  locationId: string;
  smartListIds?: string[];
  csvPath?: string;
  userListId?: string;
  isDynamic?: boolean;
}

export interface AudienceSegmentsDTO {
  customAudiences?: string[];
  userLists?: string[];
  userInterests?: string[];
}

export interface AudienceDimensionDTO {
  isAgeUnknown?: boolean;
  ageRanges?: string[];
  genders?: string[];
  parentalStatuses?: string[];
  audienceSegments?: any;
}

export interface UpsertAudienceDTO {
  locationId: string;
  resourceName?: string;
  name: string;
  dimensions?: any;
  exclusionDimension?: any;
}

export interface GoogleBudgetDTO {
  budgetType?: string;
  amount?: number;
  scheduleStartDate?: string;
  scheduleEndDate?: string;
}

export interface GeoLatLngDTO {
  lat?: number;
  lng?: number;
}

export interface GeoViewportDTO {
  northeast?: any;
  southwest?: any;
}

export interface GeoGeometryDTO {
  location?: any;
  location_type?: string;
  viewport?: any;
}

export interface GeoAddressComponentDTO {
  long_name?: string;
  short_name?: string;
  types?: string[];
}

export interface GoogleGeoLocationDTO {
  key?: string;
  id?: string;
  name?: string;
  country_name?: string;
  type?: string;
  radius?: number;
  radiusUnit?: string;
  selectionType?: string;
  resourceName?: string;
  place_id?: string;
  formatted_address?: string;
  geometry?: any;
  address_components?: GeoAddressComponentDTO[];
}

export interface GoogleLocaleDTO {
  name?: string;
  key?: string;
  id?: string;
  resourceName?: string;
}

export interface GoogleDemographicTargetDTO {
  enum: string;
  negative: boolean;
}

export interface GoogleSegmentTargetDTO {
  type: string;
  id: string;
}

export interface GoogleTargetInterestsDTO {
  affinity?: string[];
  inMarket?: string[];
}

export interface GoogleCampaignAudienceDTO {
  geo_locations?: GoogleGeoLocationDTO[];
  locales?: GoogleLocaleDTO[];
  gender?: GoogleDemographicTargetDTO[];
  ageRange?: GoogleDemographicTargetDTO[];
  segments?: GoogleSegmentTargetDTO[];
  targetInterests?: any;
}

export interface GoogleNetworkSettingsDTO {
  targetSearchNetwork: boolean;
  targetContentNetwork: boolean;
}

export interface GoogleBiddingStrategyDTO {
  type?: string;
  value?: number;
}

export interface GoogleAssetImageDTO {
  url: string;
  resourceName?: string;
  name?: string;
  error?: string;
}

export interface GoogleAssetsDTO {
  calls?: string[];
  sitelinks?: string[];
  leadForm?: string;
  images?: GoogleAssetImageDTO[];
  businessLogo?: any;
}

export interface GoogleMediaDTO {
  type?: string;
  src?: string;
  isLogo?: boolean;
  error?: string;
  url?: string;
  imageType?: string;
}

export interface GoogleYouTubeVideoLinkDTO {
  youtubeVideoId: string;
}

export interface GoogleCarouselCardDTO {
  headline?: string;
  finalUrl?: string;
  callToActionLabel?: string;
  media?: GoogleMediaDTO[];
}

export interface GoogleAdContentDTO {
  id?: string;
  name?: string;
  mediaType?: string;
  headlines?: string[];
  longHeadlines?: string[];
  descriptions?: string[];
  finalUrl?: string;
  path1?: string;
  path2?: string;
  isDeleted?: boolean;
  adError?: string;
  publishingStatus?: string;
  adId?: string;
  adCampaignId?: string;
  adGroupId?: string;
  googleAdId?: string;
  media?: GoogleMediaDTO[];
  callToActionLabel?: string;
  businessName?: string;
  youtubeVideoLinks?: GoogleYouTubeVideoLinkDTO[];
  carouselCards?: GoogleCarouselCardDTO[];
  placements?: string[];
  customChannels?: boolean;
}

export interface GoogleKeywordItemDTO {
  keyword: string;
  matchType: string;
}

export interface GoogleKeywordsDTO {
  positives?: GoogleKeywordItemDTO[];
  negatives?: GoogleKeywordItemDTO[];
}

export interface GoogleAdGroupAudienceDTO {
  geo_locations?: GoogleGeoLocationDTO[];
  locales?: GoogleLocaleDTO[];
}

export interface GoogleAdGroupDTO {
  id?: string;
  adGroupId?: string;
  name?: string;
  adCampaignId?: string;
  adContent?: GoogleAdContentDTO[];
  keywords?: any;
  publishingStatus?: string;
  adGroupError?: string;
  googleAdGroupId?: string;
  customChannels?: boolean;
  selectedChannels?: string[];
  googleAudienceId?: string;
  audience?: any;
}

export interface GoogleCampaignGoalDTO {
  type: string;
  value?: string;
  isCustomConversionGoal?: boolean;
}

export interface GoogleAdScheduleDTO {
  dayOfWeek: string;
  from: string;
  to: string;
}

export interface CampaignDTO {
  id?: string;
  name: string;
  locationId: string;
  advertisingChannelType: string;
  advertisingChannelSubType?: string;
  goalType?: string;
  budget?: any;
  audience?: any;
  networkSettings?: any;
  biddingStrategy?: any;
  assets?: any;
  isEuPoliticalAds?: boolean;
  adGroups?: GoogleAdGroupDTO[];
  campaignGoal?: any;
  adSchedule?: GoogleAdScheduleDTO[];
  publishingStatus?: string;
  googleAdAccountId?: string;
  unpublishedChanges?: boolean;
  maximumCpc?: number;
  googleCampaignId?: string;
  source?: string;
  advancedOptions?: any;
}

export interface CreateLinkedinIntegrationDTO {
  locationId: string;
  adAccountId: string;
  adAccountName: string;
  currencyCode: string;
  organizationId: string;
}

export interface LinkedInBudgetDTO {
  budgetType?: string;
  amount?: number;
  scheduleStartDate?: string;
  scheduleEndDate?: string;
}

export interface LocaleDTO {
  country: string;
  language: string;
}

export interface GeoLocationDTO {
  name: string;
  urn: string;
  facetUrn: string;
  selectionType: string;
}

export interface SelectedAttributeDTO {
  urn: string;
  name: string;
  categoryName: string;
  facet: string;
}

export interface TargetAudienceDTO {
  include?: SelectedAttributeDTO[][];
  exclude?: SelectedAttributeDTO[][];
}

export interface AudienceDTO {
  geo_locations?: GeoLocationDTO[];
  targetAudience?: any;
}

export interface UnitCostDTO {
  amount: number;
}

export interface LinkedInMediaDTO {
  type?: string;
  src?: string;
  frames?: string[];
  selectedPoster?: number;
  thumbnailUrl?: string;
  name?: string;
  headline?: string;
  destinationUrl?: string;
  fileSizeBytes?: number;
}

export interface LinkedInAdDTO {
  id?: string;
  name?: string;
  introductoryText?: string;
  destinationUrl?: string;
  callToActionLabel?: string;
  destinationFormId?: string;
  contentReferenceString?: string;
  media?: LinkedInMediaDTO[];
  adCampaignId?: string;
  adId?: string;
  headline?: string;
  publishingStatus?: string;
  adCampaignGroupId?: string;
  description?: string;
  meta?: any;
  linkedInError?: string;
}

export interface AdCampaignDTO {
  id?: string;
  locale?: any;
  name?: string;
  publishingStatus?: string;
  mediaType?: string;
  audience?: any;
  unitCost?: any;
  campaignType?: string;
  adCampaignGroupId?: string;
  adCampaignId?: string;
  ads?: LinkedInAdDTO[];
  linkedInError?: string;
  meta?: any;
}

export interface AdCampaignGroupDataDTO {
  id?: string;
  locationId: string;
  budget?: LinkedInBudgetDTO;
  adCampaigns?: AdCampaignDTO[];
  adBudgetOptimization?: string;
  objectiveType?: string;
  name?: string;
  adCampaignGroupId?: string;
  publishingStatus?: string;
  linkedInAdAccountId?: string;
  unpublishedChanges?: boolean;
  meta?: any;
  linkedInError?: string;
}

export interface SponsoredAccountOwnerDTO {
  sponsoredAccount: string;
}

export interface CreationLocaleDTO {
  country: string;
  language: string;
}

export interface LocalizedStringDTO {
  localized: any;
}

export interface MultipleChoiceOptionDTO {
  id: number;
  text: any;
}

export interface MultipleChoiceQuestionDetailsDTO {
  options: MultipleChoiceOptionDTO[];
}

export interface QuestionDetailsDTO {
  textQuestionDetails?: any;
  multipleChoiceQuestionDetails?: any;
}

export interface LeadFormQuestionDTO {
  question: any;
  name: string;
  questionDetails: any;
  predefinedField?: string;
}

export interface PostSubmissionCallToActionTargetDTO {
  landingPageUrl: string;
}

export interface PostSubmissionCallToActionDTO {
  callToActionTarget: any;
  callToActionLabel: string;
}

export interface PostSubmissionInfoDTO {
  message: any;
  callToAction: any;
}

export interface ConsentDTO {
  checkRequired: boolean;
  id: number;
  consent: any;
}

export interface LegalInfoDTO {
  consents: ConsentDTO[];
  privacyPolicyUrl: string;
  legalDisclaimer?: any;
}

export interface LeadFormContentDTO {
  questions: LeadFormQuestionDTO[];
  description?: any;
  headline: any;
  postSubmissionInfo: any;
  legalInfo: any;
}

export interface HiddenFieldDTO {
  name: string;
  value: string;
}

export interface LinkedInCreateLeadFormBodyDTO {
  owner: any;
  creationLocale: any;
  name: string;
  state: string;
  content: any;
  hiddenFields?: HiddenFieldDTO[];
}

export interface LinkedInUpdateAdStatusBodyDTO {
  operationType: string;
  type: string;
}

