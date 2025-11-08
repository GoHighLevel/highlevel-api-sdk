// HighLevel SDK - Main wrapper class
export { HighLevel, type HighLevelConfig, type ValidConfig, GHLError, type RequestInterceptor, type ResponseInterceptor } from './lib/HighLevel';

// Storage classes and types
export { SessionStorage, MongoDBSessionStorage, MemorySessionStorage, type ISessionData } from './lib/storage';

// Logging classes and types
export { Logger, LogLevel, type LogLevelType, type LogLevelString } from './lib/logging';

// Webhook classes and types
export { WebhookManager } from './lib/webhook';

// Constants and enums
export { UserType, type UserTypeValue } from './lib/constants';

// Lead Intelligence types and models
export { LeadIntelligence } from './lib/code/lead-intelligence/lead-intelligence';
export type {
  LeadScoringFactors,
  ScoredContact,
  EnrichedContact,
  LeadScoringOptions,
  ConversionPatterns,
  ConversionRecord,
  DealClosePrediction,
  LeadInsights,
  BulkScoringResult,
  TOONExportOptions,
  LLMScoringProvider
} from './lib/code/lead-intelligence/models/lead-intelligence';

// TOON utilities for AI/LLM token savings (can be used by ALL services)
export {
  encodeToTOON,
  toTOON,
  prepareContactsForLLM,
  prepareOpportunitiesForLLM,
  prepareConversationsForLLM,
  formatSavingsReport,
  calculateMonthlySavings
} from './lib/utils/toon-utils';
export type { TOONOptions, TokenSavings } from './lib/utils/toon-utils';

// Default export - HighLevel wrapper class
export { HighLevel as default } from './lib/HighLevel';
