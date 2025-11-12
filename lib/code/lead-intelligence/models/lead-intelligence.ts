// Lead Intelligence Models

/**
 * Scoring factors breakdown
 */
export interface LeadScoringFactors {
  engagement: number;       // 0-40 points based on email opens, page views
  behavioral: number;        // 0-30 points based on form fills, appointments
  recency: number;           // 0-30 points based on days since last activity
}

/**
 * Scored contact with prediction
 */
export interface ScoredContact {
  contactId: string;
  score: number;             // 0-100 overall score
  factors: LeadScoringFactors;
  prediction?: {
    conversionProbability: number;  // 0-1 probability
    confidence: number;              // 0-1 confidence level
    estimatedDaysToConversion?: number;
    recommendedActions: string[];
  };
  enrichedData?: EnrichedContact;
}

/**
 * Enriched contact data aggregated from multiple services
 */
export interface EnrichedContact {
  id: string;
  name?: string;
  email?: string;
  phone?: string;
  locationId: string;
  tags?: string[];
  customFields?: Array<{ id: string; value: any }>;
  
  // Engagement metrics
  email_opens: number;
  email_clicks: number;
  page_views: number;
  form_fills: number;
  
  // Activity metrics
  total_conversations: number;
  last_conversation_date?: string;
  appointments_scheduled: number;
  appointments_completed: number;
  appointments_no_show: number;
  
  // Opportunity metrics
  opportunities_count: number;
  opportunities_won: number;
  opportunities_lost: number;
  current_opportunity_stage?: string;
  
  // Payment metrics
  total_revenue: number;
  transaction_count: number;
  last_payment_date?: string;
  average_order_value: number;
  
  // Recency
  days_since_last_activity: number;
  last_activity_date?: string;
  last_activity_type?: string;
  
  // Lifecycle
  created_at?: string;
  lifecycle_stage?: string;
  assignedTo?: string;
}

/**
 * Options for lead scoring
 */
export interface LeadScoringOptions {
  locationId: string;
  minScore?: number;                    // Filter leads with score >= this value
  limit?: number;                       // Max number of leads to return
  tags?: string[];                      // Filter by tags
  assignedTo?: string;                  // Filter by assigned user
  useLLM?: boolean;                     // Enable LLM-powered scoring (requires API key)
  llmModel?: 'gpt-4' | 'gpt-3.5-turbo' | 'claude-3-opus' | 'claude-3-sonnet';
  includeEnrichedData?: boolean;        // Include full enriched contact data
}

/**
 * Conversion pattern analysis
 */
export interface ConversionPatterns {
  totalConversions: number;
  averageTimeToConversion: number;      // Days
  conversionRate: number;               // 0-1
  topConversionFactors: Array<{
    factor: string;
    weight: number;                     // 0-1 importance
    correlation: number;                // -1 to 1
  }>;
  optimalTouchPoints: {
    emailOpens: { min: number; max: number; avg: number };
    formFills: { min: number; max: number; avg: number };
    pageViews: { min: number; max: number; avg: number };
  };
  recommendations: string[];
}

/**
 * Historical conversion data for pattern analysis
 */
export interface ConversionRecord {
  contactId: string;
  locationId: string;
  convertedAt: string;
  daysToConversion: number;
  email_opens: number;
  email_clicks: number;
  page_views: number;
  form_fills: number;
  appointments: number;
  conversations: number;
  tags: string[];
  source?: string;
  finalOpportunityValue: number;
}

/**
 * Deal close prediction
 */
export interface DealClosePrediction {
  opportunityId: string;
  closeProbability: number;             // 0-1
  confidence: number;                   // 0-1
  estimatedCloseDate?: string;
  estimatedValue?: number;
  riskFactors: string[];
  accelerators: string[];
  recommendedActions: string[];
}

/**
 * Lead insights and analytics
 */
export interface LeadInsights {
  locationId: string;
  dateRange: {
    startDate: string;
    endDate: string;
  };
  totalLeads: number;
  hotLeads: number;                     // Score >= 70
  warmLeads: number;                    // Score 40-69
  coldLeads: number;                    // Score < 40
  averageScore: number;
  averageTimeToConversion: number;
  conversionRate: number;
  topPerformingTags: Array<{
    tag: string;
    averageScore: number;
    conversionRate: number;
  }>;
  scoringDistribution: {
    ranges: string[];                   // ['0-20', '21-40', etc.]
    counts: number[];
  };
}

/**
 * Bulk scoring result
 */
export interface BulkScoringResult {
  totalProcessed: number;
  successful: number;
  failed: number;
  scores: ScoredContact[];
  errors?: Array<{
    contactId: string;
    error: string;
  }>;
  executionTime: number;                // milliseconds
  tokensUsed?: number;                  // LLM tokens if used
  tokensSaved?: number;                 // Tokens saved by using TOON
}

/**
 * TOON export options
 */
export interface TOONExportOptions {
  delimiter?: ',' | '\t' | '|';         // Default: tab for max efficiency
  lengthMarker?: boolean;               // Add # prefix to array lengths
  indent?: number;                      // Spaces per indent level
}

/**
 * LLM provider interface for scoring
 */
export interface LLMScoringProvider {
  /**
   * Score leads using LLM analysis
   * @param toonData - Contact data in TOON format (40-60% token savings)
   * @param options - LLM options
   */
  scoreLeads(toonData: string, options?: {
    model?: string;
    temperature?: number;
  }): Promise<Array<{
    contactId: string;
    score: number;
    reasoning: string;
  }>>;

  /**
   * Analyze conversion patterns using LLM
   * @param toonData - Historical conversion data in TOON format
   */
  analyzePatterns(toonData: string): Promise<ConversionPatterns>;

  /**
   * Predict deal close using LLM
   * @param toonData - Opportunity data in TOON format
   */
  predictDealClose(toonData: string): Promise<DealClosePrediction>;
}

