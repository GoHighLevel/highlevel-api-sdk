## v3.0.0 - 2026-05-01

### Specs changes

**AdManager**:

Added:
- new method `fbGetReporting` added GET /ad-publishing/facebook/reporting
- new method `fbGetCampaignReporting` added GET /ad-publishing/facebook/reporting/campaign/\{campaignId\}
- new method `fbGetReportingList` added GET /ad-publishing/facebook/reporting/list
- new method `fbGetCurrentUser` added GET /ad-publishing/facebook/me
- new method `fbGetPages` added GET /ad-publishing/facebook/pages
- new method `fbGetInstagramAccounts` added GET /ad-publishing/facebook/page/\{pageId\}/instagram
- new method `fbGetPageLeadForms` added GET /ad-publishing/facebook/page/\{pageId\}/forms
- new method `fbCreatePageLeadForm` added POST /ad-publishing/facebook/page/\{pageId\}/forms
- new method `fbGetAdAccounts` added GET /ad-publishing/facebook/ad-accounts
- new method `fbGetAdAccount` added GET /ad-publishing/facebook/ad-accounts/\{adAccountId\}
- new method `fbDeleteAdAccount` added DELETE /ad-publishing/facebook/ad-accounts/\{adAccountId\}
- new method `fbGetConversationForms` added GET /ad-publishing/facebook/conversation-forms
- new method `fbCreateConversationForm` added POST /ad-publishing/facebook/conversation-forms
- new method `fbGetIntegration` added GET /ad-publishing/facebook/integration
- new method `fbCreateIntegration` added POST /ad-publishing/facebook/integration
- new method `fbDeleteIntegration` added DELETE /ad-publishing/facebook/integration
- new method `fbSearchTargeting` added GET /ad-publishing/facebook/targeting/search
- new method `fbPublishCampaign` added POST /ad-publishing/facebook/campaigns/\{campaignId\}/publish
- new method `fbDeletePage` added DELETE /ad-publishing/facebook/page
- new method `fbGetPixels` added GET /ad-publishing/facebook/pixels
- new method `fbUpsertPixel` added PUT /ad-publishing/facebook/pixels
- new method `fbGetCustomAudiences` added GET /ad-publishing/facebook/custom-audience
- new method `fbGetCustomAudienceById` added GET /ad-publishing/facebook/custom-audience/\{audienceId\}
- new method `fbUpdateCustomAudience` added PUT /ad-publishing/facebook/custom-audience/\{audienceId\}
- new method `fbDeleteCustomAudience` added DELETE /ad-publishing/facebook/custom-audience/\{audienceId\}
- new method `fbAddCustomAudienceMember` added PUT /ad-publishing/facebook/custom-audience/\{audienceId\}/member
- new method `fbRemoveCustomAudienceMember` added DELETE /ad-publishing/facebook/custom-audience/\{audienceId\}/member
- new method `fbBatchUpdateAudienceMembers` added PUT /ad-publishing/facebook/custom-audience/\{audienceId\}/member/batch
- new method `fbSetDefaultPage` added PUT /ad-publishing/facebook/page/default
- new method `fbGetLeadForm` added GET /ad-publishing/facebook/lead-form/\{leadFormId\}
- new method `fbGetCampaign` added GET /ad-publishing/facebook/campaign/\{campaignId\}
- new method `fbGetEntity` added GET /ad-publishing/facebook/entity
- new method `fbUpsertCampaign` added PUT /ad-publishing/facebook/campaigns
- new method `fbUpsertAdset` added PUT /ad-publishing/facebook/adsets
- new method `fbUpsertAd` added PUT /ad-publishing/facebook/ads-v2
- new method `fbPauseCampaign` added POST /ad-publishing/facebook/campaigns/\{campaignId\}/pause
- new method `fbResumeCampaign` added POST /ad-publishing/facebook/campaigns/\{campaignId\}/resume
- new method `fbDuplicateCampaign` added POST /ad-publishing/facebook/campaigns/\{campaignId\}/duplicate
- new method `fbDeleteCampaign` added DELETE /ad-publishing/facebook/campaigns/\{campaignId\}
- new method `fbPauseAdset` added POST /ad-publishing/facebook/adsets/\{adsetId\}/pause
- new method `fbResumeAdset` added POST /ad-publishing/facebook/adsets/\{adsetId\}/resume
- new method `fbDuplicateAdset` added POST /ad-publishing/facebook/adsets/\{adsetId\}/duplicate
- new method `fbDeleteAdset` added DELETE /ad-publishing/facebook/adsets/\{adsetId\}
- new method `fbPauseAd` added POST /ad-publishing/facebook/ads/\{adId\}/pause
- new method `fbResumeAd` added POST /ad-publishing/facebook/ads/\{adId\}/resume
- new method `fbDuplicateAd` added POST /ad-publishing/facebook/ads/\{adId\}/duplicate
- new method `fbDeleteAd` added DELETE /ad-publishing/facebook/ads/\{adId\}
- new method `googleGetReporting` added GET /ad-publishing/google/reporting
- new method `googleGetReportingList` added GET /ad-publishing/google/reporting/list
- new method `googleGetCampaignReporting` added GET /ad-publishing/google/reporting/campaign/\{campaignId\}
- new method `googleGetConversions` added GET /ad-publishing/google/conversions
- new method `googleUpsertConversion` added PUT /ad-publishing/google/conversions
- new method `googleGetConversionById` added GET /ad-publishing/google/conversions/\{conversionId\}
- new method `googleDeleteConversion` added DELETE /ad-publishing/google/conversions/\{conversionId\}
- new method `googleGetIntegration` added GET /ad-publishing/google/integration
- new method `googleCreateIntegration` added POST /ad-publishing/google/integration
- new method `googleGetCurrentUser` added GET /ad-publishing/google/me
- new method `googleGetAdAccounts` added GET /ad-publishing/google/ad-accounts
- new method `googleGetAdAccountDetails` added GET /ad-publishing/google/ad-accounts/\{adAccountId\}
- new method `googleDeleteAdAccount` added DELETE /ad-publishing/google/ad-accounts/\{adAccountId\}
- new method `googlePublishAd` added POST /ad-publishing/google/ads/\{adId\}/publish
- new method `googleSearchTargeting` added GET /ad-publishing/google/targeting/search
- new method `googleGetKeywordIdeas` added POST /ad-publishing/google/keyword-ideas
- new method `googleGetAssets` added GET /ad-publishing/google/assets
- new method `googleUpsertAssets` added POST /ad-publishing/google/assets
- new method `googleGetEntity` added GET /ad-publishing/google/entity
- new method `googleGetTargetInterests` added GET /ad-publishing/google/target-interests
- new method `googleGetSegments` added GET /ad-publishing/google/segments
- new method `googleUpsertSegment` added PUT /ad-publishing/google/segments
- new method `googleGetSegmentById` added GET /ad-publishing/google/segments/\{segmentId\}
- new method `googleDeleteSegment` added DELETE /ad-publishing/google/segments/\{segmentId\}
- new method `googleCreateOfflineUserListJob` added POST /ad-publishing/google/segments/offline-user-list-job
- new method `googleGetAudiences` added GET /ad-publishing/google/audiences
- new method `googleUpsertAudience` added PUT /ad-publishing/google/audiences
- new method `googleGetAudienceById` added GET /ad-publishing/google/audiences/\{audienceId\}
- new method `googleUpsertCampaign` added PUT /ad-publishing/google/ads
- new method `googleGetCampaignById` added GET /ad-publishing/google/ads/\{adId\}
- new method `googleGetConversionGoals` added GET /ad-publishing/google/conversion-goals
- new method `liGetIntegration` added GET /ad-publishing/linkedin/integration
- new method `liCreateIntegration` added POST /ad-publishing/linkedin/integration
- new method `liGetAdAccounts` added GET /ad-publishing/linkedin/ad-accounts
- new method `liGetAdAccountDetails` added GET /ad-publishing/linkedin/ad-account
- new method `liDeleteAdAccount` added DELETE /ad-publishing/linkedin/ad-account
- new method `liGetCurrentUser` added GET /ad-publishing/linkedin/me
- new method `liGetCampaignGroup` added GET /ad-publishing/linkedin/ads/\{adId\}
- new method `liPublishCampaignGroup` added POST /ad-publishing/linkedin/ads/\{adId\}/publish
- new method `liUpsertCampaignGroup` added PUT /ad-publishing/linkedin/ads
- new method `liSearchTargeting` added GET /ad-publishing/linkedin/targeting/search
- new method `liGetLeadForms` added GET /ad-publishing/linkedin/\{accountId\}/forms
- new method `liCreateLeadForm` added POST /ad-publishing/linkedin/\{accountId\}/form
- new method `liUpdateAdStatus` added PATCH /ad-publishing/linkedin/\{adId\}/status
- new method `liGetAdAnalytics` added GET /ad-publishing/linkedin/reporting
- new method `liGetReportingList` added GET /ad-publishing/linkedin/reporting/list
- new method `liGetCampaignGroupReporting` added GET /ad-publishing/linkedin/reporting/campaign-group/\{campaignGroupId\}

**AffiliateManager**:

Added:
- new method `listAffiliates` added GET /affiliate-manager/\{locationId\}/affiliates
- new method `getAffiliate` added GET /affiliate-manager/\{locationId\}/affiliates/\{affiliateId\}
- new method `listPayouts` added GET /affiliate-manager/\{locationId\}/payouts
- new method `listCommissions` added GET /affiliate-manager/\{locationId\}/commissions

**AgentStudio**:

Added:
- new method `getAgents` added GET /agent-studio/agent
- new method `createAgent` added POST /agent-studio/agent
- new method `updateAgentVersion` added PATCH /agent-studio/agent/versions/\{versionId\}
- new method `getAgentById` added GET /agent-studio/agent/\{agentId\}
- new method `deleteAgent` added DELETE /agent-studio/agent/\{agentId\}
- new method `updateAgentMetadata` added PATCH /agent-studio/agent/\{agentId\}
- new method `promoteAndPublish` added POST /agent-studio/agent/versions/\{versionId\}/publish
- new method `executeAgent` added POST /agent-studio/agent/\{agentId\}/execute
- new method `getAgentsDeprecated` added GET /agent-studio/public-api/agents (deprecated)
- new method `getAgentByIdDeprecated` added GET /agent-studio/public-api/agents/\{agentId\} (deprecated)
- new method `executeAgentDeprecated` added POST /agent-studio/public-api/agents/\{agentId\}/execute (deprecated)

**BrandBoards**:

Added:
- new method `getBrandBoardsByLocation` added GET /brand-boards/\{locationId\}
- new method `getBrandBoardById` added GET /brand-boards/\{locationId\}/\{id\}
- new method `deleteBrandBoard` added DELETE /brand-boards/\{locationId\}/\{id\}
- new method `updateBrandBoard` added PATCH /brand-boards/\{locationId\}/\{id\}
- new method `createBrandBoard` added POST /brand-boards/

**Businesses**:

Added:
- query param `limit` is added in `getBusinessesByLocation` method (optional)
- query param `skip` is added in `getBusinessesByLocation` method (optional)

**Calendars**:

Added:
- new method `getAllSchedules` added GET /calendars/schedules/search
- new method `getScheduleById` added GET /calendars/schedules/\{id\}
- new method `updateSchedule` added PUT /calendars/schedules/\{id\}
- new method `deleteSchedule` added DELETE /calendars/schedules/\{id\}
- new method `createSchedule` added POST /calendars/schedules
- new method `addCalendarToSchedule` added PUT /calendars/schedules/\{id\}/associations/\{calendarId\}
- new method `removeCalendarFromSchedule` added DELETE /calendars/schedules/\{id\}/associations/\{calendarId\}

**Contacts**:

Added:
- response body array item field `notes[].title` added in `getAllNotes` method (optional)
- response body array item field `notes[].color` added in `getAllNotes` method (optional)
- response body array item field `notes[].pinned` added in `getAllNotes` method (optional)
- request body field `title` added in `createNote` method (optional)
- request body field `color` added in `createNote` method (optional)
- request body field `pinned` added in `createNote` method (optional)
- response body nested field `note.title` added in `createNote` method (optional)
- response body nested field `note.color` added in `createNote` method (optional)
- response body nested field `note.pinned` added in `createNote` method (optional)
- response body nested field `note.title` added in `getNote` method (optional)
- response body nested field `note.color` added in `getNote` method (optional)
- response body nested field `note.pinned` added in `getNote` method (optional)
- request body field `title` added in `updateNote` method (optional)
- request body field `color` added in `updateNote` method (optional)
- request body field `pinned` added in `updateNote` method (optional)
- response body nested field `note.title` added in `updateNote` method (optional)
- response body nested field `note.color` added in `updateNote` method (optional)
- response body nested field `note.pinned` added in `updateNote` method (optional)
- request body field `dateOfBirth` added in `updateContact` method (optional)
- request body field `dateOfBirth` added in `upsertContact` method (optional)
- request body field `createNewIfDuplicateAllowed` added in `upsertContact` method (optional)
- request body field `dateOfBirth` added in `createContact` method (optional)

Removed:
- path param `type` is removed in `createAssociation` method (required)

Modified:
- request body field `body` modified in `updateNote` method (required: true -> false)

**ConversationAi**:

Added:
- new method `createAction` added POST /conversation-ai/agents/\{agentId\}/actions
- new method `listActions` added GET /conversation-ai/agents/\{agentId\}/actions/list
- new method `getActionById` added GET /conversation-ai/agents/\{agentId\}/actions/\{actionId\}
- new method `updateAction` added PUT /conversation-ai/agents/\{agentId\}/actions/\{actionId\}
- new method `deleteAction` added DELETE /conversation-ai/agents/\{agentId\}/actions/\{actionId\}
- new method `updateFollowupSettings` added PATCH /conversation-ai/agents/\{agentId\}/followup-settings
- new method `createAgent` added POST /conversation-ai/agents
- new method `searchAgent` added GET /conversation-ai/agents/search
- new method `getAgent` added GET /conversation-ai/agents/\{agentId\}
- new method `updateAgent` added PUT /conversation-ai/agents/\{agentId\}
- new method `deleteAgent` added DELETE /conversation-ai/agents/\{agentId\}
- new method `getGenerationDetails` added GET /conversation-ai/generations

**Conversations**:

Added:
- new method `getAllCustomSubtypes` added GET /conversations/preferences/custom-subtypes
- new method `createCustomSubtype` added POST /conversations/preferences/custom-subtypes
- new method `updateCustomSubtype` added PUT /conversations/preferences/custom-subtypes/\{id\}
- new method `getContactUnsubscriptionStatus` added GET /conversations/preferences/unsubscriptions/status
- new method `userSubscriptionChange` added POST /conversations/preferences/unsubscriptions/user-change
- new method `exportMessagesByLocation` added GET /conversations/messages/export
- new method `sendReviewReply` added POST /conversations/messages/review-reply
- new method `initiateFileUpload` added POST /conversations/messages/upload/initiate
- new method `completeFileUpload` added POST /conversations/messages/upload/complete
- new method `addMessageAttachments` added PUT /conversations/messages/\{messageId\}/attachments
- query param `startDate` is added in `searchConversation` method (optional)
- query param `endDate` is added in `searchConversation` method (optional)
- response body field `lastMessageId` added in `getMessages` method (required)
- response body field `nextPage` added in `getMessages` method (required)
- response body array item field `messages[].id` added in `getMessages` method (required)
- response body array item field `messages[].type` added in `getMessages` method (required)
- response body array item field `messages[].messageType` added in `getMessages` method (required)
- response body array item field `messages[].locationId` added in `getMessages` method (required)
- response body array item field `messages[].contactId` added in `getMessages` method (required)
- response body array item field `messages[].conversationId` added in `getMessages` method (required)
- response body array item field `messages[].dateAdded` added in `getMessages` method (required)
- response body array item field `messages[].body` added in `getMessages` method (optional)
- response body array item field `messages[].direction` added in `getMessages` method (required)
- response body array item field `messages[].status` added in `getMessages` method (optional)
- response body array item field `messages[].contentType` added in `getMessages` method (required)
- response body array item field `messages[].attachments` added in `getMessages` method (optional)
- response body array item field `messages[].meta` added in `getMessages` method (optional)
- response body array item field `messages[].source` added in `getMessages` method (optional)
- response body array item field `messages[].userId` added in `getMessages` method (optional)
- response body array item field `messages[].conversationProviderId` added in `getMessages` method (optional)
- response body array item field `messages[].chatWidgetId` added in `getMessages` method (optional)
- request body field `subType` added in `sendANewMessage` method (required)
- request body field `customSubtypeId` added in `sendANewMessage` method (optional)
- request body field `forward` added in `sendANewMessage` method (optional)
- request body field `status` added in `sendANewMessage` method (required)
- request body field `usesNativeSchedulingAi` added in `sendANewMessage` method (optional)
- request body field `optimizationPeriod` added in `sendANewMessage` method (optional)
- response body field `forwardData` added in `sendANewMessage` method (optional)
- response body field `status` added in `sendANewMessage` method (required)
- request body field `contactId` added in `addAnInboundMessage` method (required)
- response body field `twilioMediaSids` added in `uploadFileAttachments` method (optional)
- response body field `forwardData` added in `updateMessageStatus` method (optional)
- response body field `status` added in `updateMessageStatus` method (required)

Removed:
- response body field `altId` removed in `getMessage` method
- response body nested field `messages.lastMessageId` removed in `getMessages` method
- response body nested field `messages.nextPage` removed in `getMessages` method
- response body nested field `messages.messages` removed in `getMessages` method

Modified:
- response body field `messages` modified in `getMessages` method (type: `object` -> `array`)

**Invoices**:

Added:
- new method `getInvoiceSettings` added GET /invoices/settings
- request body nested field `autoPayment.provider` added in `scheduleInvoiceSchedule` method (optional)
- request body nested field `autoPayment.provider` added in `autoPaymentInvoiceSchedule` method (optional)
- request body nested field `autoPayment.provider` added in `sendInvoice` method (optional)
- request body array item field `items[].attachments` added in `createNewEstimate` method (optional)
- request body array item field `items[].attachments` added in `updateEstimate` method (optional)

Modified:
- request body nested field `lateFeesConfiguration.frequency.intervalCount` modified in `createInvoiceTemplate` method (required: false -> true)
- request body nested field `lateFeesConfiguration.frequency.intervalCount` modified in `updateInvoiceTemplateLateFeesConfiguration` method (required: false -> true)
- request body nested field `lateFeesConfiguration.frequency.intervalCount` modified in `createInvoiceSchedule` method (required: false -> true)
- request body nested field `lateFeesConfiguration.frequency.intervalCount` modified in `text2payInvoice` method (required: false -> true)
- request body nested field `lateFeesConfiguration.frequency.intervalCount` modified in `updateInvoiceLateFeesConfiguration` method (required: false -> true)
- request body nested field `lateFeesConfiguration.frequency.intervalCount` modified in `createInvoice` method (required: false -> true)

**KnowledgeBase**:

Added:
- new method `list` added GET /knowledge-bases/faqs
- new method `create` added POST /knowledge-bases/faqs
- new method `update` added PUT /knowledge-bases/faqs/\{id\}
- new method `delete` added DELETE /knowledge-bases/faqs/\{id\}
- new method `getAllWebsiteUrlsDataByKnowledgeBase` added GET /knowledge-bases/crawler
- new method `discoverWebsite` added POST /knowledge-bases/crawler
- new method `deleteTrainedUrlsForKnowledgeBase` added DELETE /knowledge-bases/crawler
- new method `getCrawlingStatusForLatestOperation` added GET /knowledge-bases/crawler/status
- new method `trainDiscoveredUrls` added POST /knowledge-bases/crawler/train
- new method `getKnowledgeBaseById` added GET /knowledge-bases/\{knowledgeBaseId\}
- new method `deleteKnowledgeBase` added DELETE /knowledge-bases/\{knowledgeBaseId\}
- new method `updateKnowledgeBase` added PUT /knowledge-bases/\{id\}
- new method `listAllKnowledgeBasesPaginated` added GET /knowledge-bases/
- new method `createKnowledgeBase` added POST /knowledge-bases/

**Marketplace**:

Added:
- new method `getRebillingConfigForApp` added GET /marketplace/app/\{appId\}/rebilling-config/location/\{locationId\}
- new method `migrateConnection` added POST /marketplace/external-auth/migration
- response body field `count` added in `getCharges` method (optional)
- response body field `pagination` added in `getCharges` method (optional)
- header param `Version` is added in `getInstallerDetails` method (required)
- response body nested field `installationDetails.relationshipNumber` added in `getInstallerDetails` method (required)
- response body nested field `installationDetails.companyPlan` added in `getInstallerDetails` method (optional)

Removed:
- response body field `total` removed in `getCharges` method

Modified:
- request body field `units` modified in `charge` method (type: `string` -> `number`)
- response body nested field `installationDetails.companyEmail` modified in `getInstallerDetails` method (required: true -> false)
- response body nested field `installationDetails.companyHighLevelPlan` modified in `getInstallerDetails` method (now deprecated)

**Oauth**:

Added:
- response body field `installToFutureLocations` added in `getAccessToken` method (optional)
- response body field `approveAllLocations` added in `getAccessToken` method (optional)
- response body field `appId` added in `getLocationAccessToken` method (optional)
- response body field `versionId` added in `getLocationAccessToken` method (optional)
- query param `locationId` is added in `getInstalledLocation` method (optional)
- response body array item field `locations[].versionId` added in `getInstalledLocation` method (optional)
- response body array item field `locations[].installedAt` added in `getInstalledLocation` method (optional)

**Opportunities**:

Added:
- new method `getLostReason` added GET /opportunities/lost-reason
- new method `searchOpportunitiesAdvanced` added POST /opportunities/search
- response body array item field `opportunities[].lostReasonId` added in `searchOpportunity` method (optional)
- response body array item field `opportunities[].externalObjectId` added in `searchOpportunity` method (optional)
- response body array item field `pipelines[].colorRenderMode` added in `getPipelines` method (optional)
- response body nested field `opportunity.lostReasonId` added in `getOpportunity` method (optional)
- response body nested field `opportunity.externalObjectId` added in `getOpportunity` method (optional)
- response body nested field `opportunity.lostReasonId` added in `updateOpportunity` method (optional)
- response body nested field `opportunity.externalObjectId` added in `updateOpportunity` method (optional)
- request body field `lostReasonId` added in `updateOpportunityStatus` method (optional)
- request body field `id` added in `upsertOpportunity` method (optional)
- request body field `followers` added in `upsertOpportunity` method (required)
- request body field `isRemoveAllFollowers` added in `upsertOpportunity` method (required)
- request body field `followersActionType` added in `upsertOpportunity` method (required)
- request body field `lostReasonId` added in `upsertOpportunity` method (optional)
- query param `isRemoveAllFollowers` is added in `removeFollowersOpportunity` method (optional)
- response body nested field `opportunity.lostReasonId` added in `createOpportunity` method (optional)
- response body nested field `opportunity.externalObjectId` added in `createOpportunity` method (optional)

Removed:
- request body field `contactId` removed in `upsertOpportunity` method

Modified:
- request body field `monetaryValue` modified in `upsertOpportunity` method (type: `number` -> `object`)

**Payments**:

Added:
- query param `paymentStatus` is added in `listOrders` method (optional)
- query param `sourceId` is added in `listOrders` method (optional)
- response body array item field `data[].createdBy` added in `listOrders` method (optional)
- response body field `createdBy` added in `getOrderById` method (optional)
- response body array item field `data[].createdBy` added in `listTransactions` method (optional)
- response body field `createdBy` added in `getTransactionById` method (optional)
- query param `getPaymentsCollectedCount` is added in `listSubscriptions` method (optional)
- response body array item field `data[].createdBy` added in `listSubscriptions` method (optional)
- response body field `createdBy` added in `getSubscriptionById` method (optional)

Removed:
- method `postMigrateOrderPaymentStatus` removed
- query param `altType` is removed in `listOrders` method (required)
- response body array item field `data[].items[].product.medias` removed in `listOrderFulfillment` method
- response body array item field `data[].items[].product.userId` removed in `listOrderFulfillment` method
- response body array item field `data[].items[].product.isLabelEnabled` removed in `listOrderFulfillment` method
- response body array item field `data[].items[].product.seo` removed in `listOrderFulfillment` method
- response body array item field `data.items[].product.medias` removed in `createOrderFulfillment` method
- response body array item field `data.items[].product.userId` removed in `createOrderFulfillment` method
- response body array item field `data.items[].product.isLabelEnabled` removed in `createOrderFulfillment` method
- response body array item field `data.items[].product.seo` removed in `createOrderFulfillment` method

**PhoneSystem**:

Added:
- new method `availableNumbers` added GET /phone-system/numbers/location/\{locationId\}/available
- new method `purchasePhoneNumber` added POST /phone-system/numbers/location/\{locationId\}/purchase

**Users**:

Added:
- request body field `twilioPhone` added in `updateUser` method (optional)
- request body field `twilioPhone` added in `createUser` method (optional)

Modified:
- method `getUserByLocation` now deprecated

**VoiceAi**:

Removed:
- response body array item field `callLogs[].executedCallActions[].description` removed in `getCallLogs` method
- response body array item field `executedCallActions[].description` removed in `getCallLog` method

Modified:
- request body field `locationId` modified in `createAgent` method (required: false -> true)

### SDK changes

- feat: new services added in sdk, send latest version in header, add sdk version in the header (27c44c9)

## v2.3.0 - 2026-05-01

### SDK changes

- feat: ed25519 signature support added in webhook, axios version bumped (f58cb4f)

## v2.2.2 - 2025-11-07

### Specs changes

**Calendars**:

Added:
- request body field `description` added in `createAppointment` method (optional)
- response body nested field `event.description` added in `getAppointment` method (optional)
- request body field `description` added in `editAppointment` method (optional)
- response body array item field `events[].description` added in `getCalendarEvents` method (optional)
- response body array item field `events[].description` added in `getBlockedSlots` method (optional)
- response body field `additionalPhoneNumbers` added in `findEventNotification` method (optional)
- response body field `additionalWhatsappNumbers` added in `findEventNotification` method (optional)
- request body field `additionalPhoneNumbers` added in `updateEventNotification` method (optional)
- request body field `fromNumber` added in `updateEventNotification` method (optional)

Removed:
- response body `GetSlotsSuccessfulResponseDto` removed in `getSlots` method

### SDK changes

- fix: add return statements and await calls in webhook processing, pass raw body for oauth, remove unique key for tokens and create index for appId and resourceId (f5bd807)

## v2.2.1 - 2025-10-07

### SDK changes

- fix: remove all params from axios request config object which is causing 422 errors (e96f45b)

## v2.2.0 - 2025-10-06

### SDK changes

- refactor: service template params and token handle improved (6b46327)

## v2.1.0 - 2025-09-29

### SDK changes

- changes in config to reduce the size of the sdk (8ce6d34)
- fix: token not getting auto refreshed when api throws 401 error (3747ddb)

## v2.0.0 - 2025-09-18

Specs changes

**Contacts**:

Removed:
- response body `SearchContactSuccessResponseDto` removed in `searchContactsAdvanced` method

Modified:
- method name changed from `deleteContactToWorkflow` to `deleteContactFromWorkflow` for DELETE /contacts/\{contactId\}/workflow/\{workflowId\}

**Locations**:

Added:
- new method `getRecurringTaskById` added GET /locations/\{locationId\}/recurring-tasks/\{id\}
- new method `updateRecurringTask` added PUT /locations/\{locationId\}/recurring-tasks/\{id\}
- new method `deleteRecurringTask` added DELETE /locations/\{locationId\}/recurring-tasks/\{id\}
- new method `createRecurringTask` added POST /locations/\{locationId\}/recurring-tasks

**Payments**:

Added:
- new method `recordOrderPayment` added POST /payments/orders/\{orderId\}/record-payment
- new method `postMigrateOrderPaymentStatus` added POST /payments/orders/migrate-order-ps
- new method `listOrderNotes` added GET /payments/orders/\{orderId\}/notes
- new method `customProviderMarketplaceAppUpdateCapabilities` added PUT /payments/custom-provider/capabilities
- response body field `automaticTaxesCalculated` added in `getOrderById` method (optional)
- response body field `taxCalculationProvider` added in `getOrderById` method (optional)
- response body array item field `data[].items[].product.automaticTaxCategoryId` added in `listOrderFulfillment` method (optional)
- response body array item field `data.items[].product.automaticTaxCategoryId` added in `createOrderFulfillment` method (optional)
- response body array item field `data[].mergedFromContactId` added in `listTransactions` method (optional)
- response body array item field `data[].fulfilledAt` added in `listTransactions` method (required)
- response body field `mergedFromContactId` added in `getTransactionById` method (optional)
- request body field `supportsSubscriptionSchedule` added in `createIntegration` method (required)

Removed:
- query param `altType` is removed in `getOrderById` method (required)
- response body array item field `data[].hasAffiliateCoupon` removed in `listCoupons` method
- response body array item field `data[].deleted` removed in `listCoupons` method

**PhoneSystem**:

Added:
- new method `getNumberPoolList` added GET /phone-system/number-pools
- new method `activeNumbers` added GET /phone-system/numbers/location/\{locationId\}

**Products**:

Added:
- new method `bulkEdit` added POST /products/bulk-update/edit
- new method `updateDisplayPriority` added POST /products/store/\{storeId\}/priority
- request body field `altId` added in `updateStoreStatus` method (required)
- request body field `altType` added in `updateStoreStatus` method (required)
- query param `altId` is added in `getProductCollectionId` method (required)
- query param `sendWishlistStatus` is added in `getProductById` method (optional)
- request body field `taxInclusive` added in `updateProductById` method (optional)
- request body field `prices` added in `updateProductById` method (optional)
- query param `sendWishlistStatus` is added in `deleteProductById` method (optional)
- request body field `taxInclusive` added in `createProduct` method (optional)

Removed:
- response body field `medias` removed in `getProductById` method
- response body field `userId` removed in `getProductById` method
- response body field `isLabelEnabled` removed in `getProductById` method
- response body field `seo` removed in `getProductById` method
- response body field `medias` removed in `updateProductById` method
- response body field `userId` removed in `updateProductById` method
- response body field `isLabelEnabled` removed in `updateProductById` method
- response body field `seo` removed in `updateProductById` method
- response body array item field `products[].medias` removed in `listInvoices` method
- response body array item field `products[].userId` removed in `listInvoices` method
- response body array item field `products[].isLabelEnabled` removed in `listInvoices` method
- response body array item field `products[].seo` removed in `listInvoices` method
- response body field `medias` removed in `createProduct` method
- response body field `userId` removed in `createProduct` method
- response body field `isLabelEnabled` removed in `createProduct` method
- response body field `seo` removed in `createProduct` method

**Proposals**:

Added:
- new method `listDocumentsContracts` added GET /proposals/document
- new method `sendDocumentsContracts` added POST /proposals/document/send
- new method `listDocumentsContractsTemplates` added GET /proposals/templates
- new method `sendDocumentsContractsTemplate` added POST /proposals/templates/send

**Store**:

Added:
- new method `listShippingZones` added GET /store/shipping-zone
- new method `createShippingZone` added POST /store/shipping-zone
- new method `getShippingZones` added GET /store/shipping-zone/\{shippingZoneId\}
- new method `updateShippingZone` added PUT /store/shipping-zone/\{shippingZoneId\}
- new method `deleteShippingZone` added DELETE /store/shipping-zone/\{shippingZoneId\}
- new method `getAvailableShippingZones` added POST /store/shipping-zone/shipping-rates
- new method `listShippingRates` added GET /store/shipping-zone/\{shippingZoneId\}/shipping-rate
- new method `createShippingRate` added POST /store/shipping-zone/\{shippingZoneId\}/shipping-rate
- new method `getShippingRates` added GET /store/shipping-zone/\{shippingZoneId\}/shipping-rate/\{shippingRateId\}
- new method `updateShippingRate` added PUT /store/shipping-zone/\{shippingZoneId\}/shipping-rate/\{shippingRateId\}
- new method `deleteShippingRate` added DELETE /store/shipping-zone/\{shippingZoneId\}/shipping-rate/\{shippingRateId\}
- new method `listShippingCarriers` added GET /store/shipping-carrier
- new method `createShippingCarrier` added POST /store/shipping-carrier
- new method `getShippingCarriers` added GET /store/shipping-carrier/\{shippingCarrierId\}
- new method `updateShippingCarrier` added PUT /store/shipping-carrier/\{shippingCarrierId\}
- new method `deleteShippingCarrier` added DELETE /store/shipping-carrier/\{shippingCarrierId\}
- new method `getStoreSettings` added GET /store/store-setting
- new method `createStoreSetting` added POST /store/store-setting

**VoiceAi**:

Added:
- new method `getAgents` added GET /voice-ai/agents
- new method `createAgent` added POST /voice-ai/agents
- new method `getAgent` added GET /voice-ai/agents/\{agentId\}
- new method `deleteAgent` added DELETE /voice-ai/agents/\{agentId\}
- new method `patchAgent` added PATCH /voice-ai/agents/\{agentId\}
- new method `getCallLogs` added GET /voice-ai/dashboard/call-logs
- new method `getCallLog` added GET /voice-ai/dashboard/call-logs/\{callId\}
- new method `createAction` added POST /voice-ai/actions
- new method `getAction` added GET /voice-ai/actions/\{actionId\}
- new method `updateAction` added PUT /voice-ai/actions/\{actionId\}
- new method `deleteAction` added DELETE /voice-ai/actions/\{actionId\}

SDK changes

- fix: remove extra things from package to reduce the build size (3fe5b3a)

## v1.0.1 - 2025-08-26

Specs changes

Conversations:
Added:
- response body field `chatWidgetId` added in `getMessage` method (optional)
- response body array item field `messages.messages[].chatWidgetId` added in `getMessages` method (optional)

Marketplace:
Added:
- request body field `price` added in `charge` method (optional)

Modified:
- method `getInstallerDetails` endpoint changed from GET /marketplace/app/{appId}/installer-details to GET /marketplace/app/{appId}/installations

Users:
Added:
- path param `userId` is added in `getUser` method

Removed:
- header param `Authorization` is removed in `filterUsersByEmail` method

SDK changes

- fix: crypto package removed, token expire function moved to base storage class (d96d25c)

## v1.0.0 - 2025-08-25

SDK changes

- feat: package name updated for highlevel api client (e85cc51)

## v0.1.0 - 2025-08-19

SDK changes

- feat: use company token as fallback if available while refreshing location token (4dfa77e)
