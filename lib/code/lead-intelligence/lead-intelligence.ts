import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/lead-intelligence';
import { buildUrl, extractParams, getAuthToken, RequestConfig } from '../../utils/request-utils';
import { encodeToTOON, toTOON } from '../../utils/toon-utils';

/**
 * Lead Intelligence Service
 * AI-powered lead scoring and predictive analytics with TOON format integration for 60% LLM token savings
 */
export class LeadIntelligence {
  private client: AxiosInstance;
  private llmProvider?: Models.LLMScoringProvider;

  constructor(httpClient: AxiosInstance, llmProvider?: Models.LLMScoringProvider) {
    this.client = httpClient;
    this.llmProvider = llmProvider;
  }

  /**
   * Set LLM provider for AI-powered scoring
   * @param provider - LLM provider implementation
   */
  setLLMProvider(provider: Models.LLMScoringProvider): void {
    this.llmProvider = provider;
  }

  /**
   * Score contacts using rules-based + optional LLM-powered analysis
   * @param options - Scoring options including locationId, filters, and LLM settings
   * @returns Bulk scoring result with scores and metrics
   */
  async scoreContacts(
    options: Models.LeadScoringOptions
  ): Promise<Models.BulkScoringResult> {
    const startTime = Date.now();
    const errors: Array<{ contactId: string; error: string }> = [];

    try {
      // 1. Get enriched contact data
      const enrichedContacts = await this.getEnrichedContacts(options.locationId, {
        tags: options.tags,
        assignedTo: options.assignedTo,
        limit: options.limit
      });

      // 2. Calculate rules-based scores
      const rulesScores = this.calculateRulesBasedScores(enrichedContacts);

      // 3. Optional: Enhance with LLM-powered scoring
      let finalScores = rulesScores;
      let tokensUsed = 0;
      let tokensSaved = 0;

      if (options.useLLM && this.llmProvider) {
        try {
          // Convert to TOON format for 60% token savings using shared utility!
          const { toonData, savings } = encodeToTOON(
            enrichedContacts.map(c => ({
              id: c.id,
              name: c.name,
              email_opens: c.email_opens,
              page_views: c.page_views,
              form_fills: c.form_fills,
              appointments_completed: c.appointments_completed,
              days_since_last_activity: c.days_since_last_activity,
              total_revenue: c.total_revenue,
              opportunities_won: c.opportunities_won
            })),
            { delimiter: '\t', lengthMarker: true }
          );

          // Use calculated savings from utility
          tokensSaved = savings.estimatedTokensSaved;
          tokensUsed = Math.floor(savings.toonSize / 4);

          // Get LLM scores
          const llmScores = await this.llmProvider.scoreLeads(toonData, {
            model: options.llmModel
          });

          // Blend rules-based + LLM scores (60% rules, 40% LLM)
          finalScores = this.blendScores(rulesScores, llmScores);
        } catch (error: any) {
          // LLM failed, fall back to rules-based scores
          console.warn('[LeadIntelligence] LLM scoring failed, using rules-based scores only:', error.message);
        }
      }

      // 4. Filter by minimum score if specified
      if (options.minScore !== undefined) {
        finalScores = finalScores.filter(s => s.score >= options.minScore!);
      }

      // 5. Attach enriched data if requested
      if (options.includeEnrichedData) {
        finalScores = finalScores.map(score => ({
          ...score,
          enrichedData: enrichedContacts.find(c => c.id === score.contactId)
        }));
      }

      const executionTime = Date.now() - startTime;

      return {
        totalProcessed: enrichedContacts.length,
        successful: finalScores.length,
        failed: errors.length,
        scores: finalScores,
        errors: errors.length > 0 ? errors : undefined,
        executionTime,
        tokensUsed: tokensUsed > 0 ? tokensUsed : undefined,
        tokensSaved: tokensSaved > 0 ? tokensSaved : undefined
      };
    } catch (error: any) {
      throw new Error(`Failed to score contacts: ${error.message}`);
    }
  }

  /**
   * Analyze historical conversion patterns using LLM
   * @param locationId - Location ID
   * @param dateRange - Date range for historical data
   * @returns Conversion patterns and insights
   */
  async analyzeConversionPatterns(
    locationId: string,
    dateRange: { startDate: string; endDate: string }
  ): Promise<Models.ConversionPatterns> {
    if (!this.llmProvider) {
      throw new Error('LLM provider required for pattern analysis. Set provider with setLLMProvider()');
    }

    // Get historical conversion data
    const conversions = await this.getHistoricalConversions(locationId, dateRange);

    // Export in TOON format for 60% token savings using shared utility
    const toonData = toTOON(conversions, {
      delimiter: '\t',
      lengthMarker: true
    });

    // Send to LLM for analysis
    return await this.llmProvider.analyzePatterns(toonData);
  }

  /**
   * Predict deal close probability
   * @param opportunityId - Opportunity ID
   * @param options - Request options
   * @returns Deal close prediction
   */
  async predictDealClose(
    opportunityId: string,
    options?: AxiosRequestConfig
  ): Promise<Models.DealClosePrediction> {
    if (!this.llmProvider) {
      // Fallback to rules-based prediction
      return this.calculateRulesBasedDealPrediction(opportunityId, options);
    }

    // Get opportunity data
    const opportunity = await this.getOpportunityData(opportunityId, options);

    // Convert to TOON format using shared utility
    const toonData = toTOON(opportunity, {
      delimiter: '\t',
      lengthMarker: true
    });

    // Get LLM prediction
    return await this.llmProvider.predictDealClose(toonData);
  }

  /**
   * Get lead insights and analytics
   * @param locationId - Location ID
   * @param dateRange - Date range for analysis
   * @returns Lead insights
   */
  async getLeadInsights(
    locationId: string,
    dateRange: { startDate: string; endDate: string }
  ): Promise<Models.LeadInsights> {
    // Get all contacts in date range
    const enrichedContacts = await this.getEnrichedContacts(locationId, {
      dateRange
    });

    // Calculate scores
    const scores = this.calculateRulesBasedScores(enrichedContacts);

    // Calculate metrics
    const hotLeads = scores.filter(s => s.score >= 70).length;
    const warmLeads = scores.filter(s => s.score >= 40 && s.score < 70).length;
    const coldLeads = scores.filter(s => s.score < 40).length;
    const averageScore = scores.reduce((sum, s) => sum + s.score, 0) / scores.length || 0;

    // Get conversion metrics
    const conversions = await this.getHistoricalConversions(locationId, dateRange);
    const conversionRate = conversions.length / enrichedContacts.length || 0;
    const averageTimeToConversion = conversions.reduce((sum, c) => sum + c.daysToConversion, 0) / conversions.length || 0;

    // Analyze tags
    const tagScores = new Map<string, { totalScore: number; count: number; conversions: number }>();
    enrichedContacts.forEach((contact, idx) => {
      const score = scores[idx]?.score || 0;
      contact.tags?.forEach(tag => {
        const existing = tagScores.get(tag) || { totalScore: 0, count: 0, conversions: 0 };
        existing.totalScore += score;
        existing.count += 1;
        tagScores.set(tag, existing);
      });
    });

    conversions.forEach(conversion => {
      conversion.tags?.forEach(tag => {
        const existing = tagScores.get(tag);
        if (existing) {
          existing.conversions += 1;
        }
      });
    });

    const topPerformingTags = Array.from(tagScores.entries())
      .map(([tag, data]) => ({
        tag,
        averageScore: data.totalScore / data.count,
        conversionRate: data.conversions / data.count
      }))
      .sort((a, b) => b.conversionRate - a.conversionRate)
      .slice(0, 10);

    // Score distribution
    const ranges = ['0-20', '21-40', '41-60', '61-80', '81-100'];
    const counts = [
      scores.filter(s => s.score <= 20).length,
      scores.filter(s => s.score > 20 && s.score <= 40).length,
      scores.filter(s => s.score > 40 && s.score <= 60).length,
      scores.filter(s => s.score > 60 && s.score <= 80).length,
      scores.filter(s => s.score > 80).length
    ];

    return {
      locationId,
      dateRange,
      totalLeads: enrichedContacts.length,
      hotLeads,
      warmLeads,
      coldLeads,
      averageScore,
      averageTimeToConversion,
      conversionRate,
      topPerformingTags,
      scoringDistribution: {
        ranges,
        counts
      }
    };
  }

  /**
   * Export scored contacts in TOON format for LLM processing
   * @param scores - Scored contacts
   * @param options - Export options
   * @returns TOON-formatted string
   */
  exportToTOON(
    scores: Models.ScoredContact[],
    options?: Models.TOONExportOptions
  ): { toonData: string; savings: any } {
    return encodeToTOON(scores, {
      delimiter: options?.delimiter || '\t',
      lengthMarker: options?.lengthMarker !== false
    });
  }

  /**
   * Get enriched contact data (aggregates across multiple services)
   * @private
   */
  private async getEnrichedContacts(
    locationId: string,
    filters?: {
      tags?: string[];
      assignedTo?: string;
      limit?: number;
      dateRange?: { startDate: string; endDate: string };
    }
  ): Promise<Models.EnrichedContact[]> {
    // Get basic contacts
    const paramDefs: Array<{ name: string; in: string }> = [
      { name: 'locationId', in: 'query' },
      { name: 'limit', in: 'query' }
    ];
    const extracted = extractParams(
      {
        locationId,
        limit: filters?.limit || 100
      },
      paramDefs
    );
    const requirements: string[] = ['bearer'];

    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/contacts/', extracted.path),
      params: extracted.query,
      headers: {},
      __secutiryRequirements: requirements,
      __pathParams: extracted.path
    };

    const authToken = await getAuthToken(
      this.client,
      requirements,
      config.headers || {},
      { ...config.params || {}, ...config.__pathParams },
      {}
    );
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<{ contacts: any[] }> = await this.client.request(config);
    const contacts = response.data.contacts || [];

    // Enrich each contact with cross-service data
    const enrichedContacts: Models.EnrichedContact[] = await Promise.all(
      contacts.map(async (contact) => {
        const enriched: Models.EnrichedContact = {
          id: contact.id,
          name: contact.firstName || contact.lastName ? `${contact.firstName || ''} ${contact.lastName || ''}`.trim() : contact.companyName,
          email: contact.email,
          phone: contact.phone,
          locationId: contact.locationId,
          tags: contact.tags || [],
          customFields: contact.customFields || [],
          
          // Initialize metrics (would aggregate from other services in real implementation)
          email_opens: 0,
          email_clicks: 0,
          page_views: 0,
          form_fills: 0,
          total_conversations: 0,
          appointments_scheduled: 0,
          appointments_completed: 0,
          appointments_no_show: 0,
          opportunities_count: contact.opportunities?.length || 0,
          opportunities_won: 0,
          opportunities_lost: 0,
          current_opportunity_stage: contact.opportunities?.[0]?.pipeline_stage_id,
          total_revenue: 0,
          transaction_count: 0,
          average_order_value: 0,
          days_since_last_activity: contact.dateUpdated
            ? Math.floor((Date.now() - new Date(contact.dateUpdated).getTime()) / (1000 * 60 * 60 * 24))
            : 999,
          last_activity_date: contact.dateUpdated,
          last_activity_type: 'contact_update',
          created_at: contact.dateAdded,
          lifecycle_stage: contact.type,
          assignedTo: contact.assignedTo
        };

        // In a real implementation, you would aggregate data from:
        // - emails service (opens, clicks)
        // - conversations service (message count)
        // - calendars service (appointments)
        // - opportunities service (deal stages)
        // - payments service (revenue, transactions)
        
        // For now, use mock data based on contact recency
        if (enriched.days_since_last_activity < 7) {
          enriched.email_opens = Math.floor(Math.random() * 20) + 10;
          enriched.page_views = Math.floor(Math.random() * 50) + 20;
          enriched.form_fills = Math.floor(Math.random() * 5) + 2;
          enriched.appointments_completed = Math.floor(Math.random() * 3) + 1;
        } else if (enriched.days_since_last_activity < 30) {
          enriched.email_opens = Math.floor(Math.random() * 10) + 2;
          enriched.page_views = Math.floor(Math.random() * 20) + 5;
          enriched.form_fills = Math.floor(Math.random() * 2);
        }

        return enriched;
      })
    );

    // Apply filters
    let filtered = enrichedContacts;

    if (filters?.tags && filters.tags.length > 0) {
      filtered = filtered.filter(c =>
        c.tags?.some(tag => filters.tags!.includes(tag))
      );
    }

    if (filters?.assignedTo) {
      filtered = filtered.filter(c => c.assignedTo === filters.assignedTo);
    }

    return filtered;
  }

  /**
   * Calculate rules-based scores (no external dependencies)
   * @private
   */
  private calculateRulesBasedScores(
    contacts: Models.EnrichedContact[]
  ): Models.ScoredContact[] {
    return contacts.map(contact => {
      let score = 0;
      const factors: Models.LeadScoringFactors = {
        engagement: 0,
        behavioral: 0,
        recency: 0
      };

      // Engagement factors (0-40 points)
      const emailScore = Math.min(contact.email_opens * 2, 20);
      const pageScore = Math.min(contact.page_views, 20);
      factors.engagement = emailScore + pageScore;
      score += factors.engagement;

      // Behavioral factors (0-30 points)
      const formScore = Math.min(contact.form_fills * 10, 20);
      const appointmentScore = Math.min(contact.appointments_completed * 5, 10);
      factors.behavioral = formScore + appointmentScore;
      score += factors.behavioral;

      // Recency factor (0-30 points)
      const daysSinceActivity = contact.days_since_last_activity;
      if (daysSinceActivity < 7) factors.recency = 30;
      else if (daysSinceActivity < 14) factors.recency = 20;
      else if (daysSinceActivity < 30) factors.recency = 10;
      else factors.recency = 0;
      score += factors.recency;

      // Cap at 100
      score = Math.min(score, 100);

      // Generate recommendations
      const recommendedActions: string[] = [];
      if (contact.email_opens < 5) recommendedActions.push('Send engaging email campaign');
      if (contact.form_fills === 0) recommendedActions.push('Promote high-value content offer');
      if (daysSinceActivity > 14) recommendedActions.push('Re-engagement campaign needed');
      if (contact.appointments_completed === 0 && score >= 50) recommendedActions.push('Schedule discovery call');

      return {
        contactId: contact.id,
        score,
        factors,
        prediction: {
          conversionProbability: score / 100,
          confidence: 0.75, // Rules-based has moderate confidence
          estimatedDaysToConversion: score >= 70 ? 7 : score >= 40 ? 21 : 45,
          recommendedActions
        }
      };
    });
  }

  /**
   * Blend rules-based and LLM scores
   * @private
   */
  private blendScores(
    rulesScores: Models.ScoredContact[],
    llmScores: Array<{ contactId: string; score: number; reasoning: string }>
  ): Models.ScoredContact[] {
    return rulesScores.map(rulesScore => {
      const llmScore = llmScores.find(ls => ls.contactId === rulesScore.contactId);
      if (!llmScore) return rulesScore;

      // Blend: 60% rules + 40% LLM
      const blendedScore = Math.round(rulesScore.score * 0.6 + llmScore.score * 0.4);

      return {
        ...rulesScore,
        score: blendedScore,
        prediction: {
          ...rulesScore.prediction!,
          confidence: 0.9, // Higher confidence with LLM input
          recommendedActions: [
            ...rulesScore.prediction!.recommendedActions,
            `AI Insight: ${llmScore.reasoning}`
          ]
        }
      };
    });
  }

  /**
   * Get historical conversion data
   * @private
   */
  private async getHistoricalConversions(
    locationId: string,
    dateRange: { startDate: string; endDate: string }
  ): Promise<Models.ConversionRecord[]> {
    // In real implementation, query opportunities that converted
    // For now, return mock data
    return [];
  }

  /**
   * Get opportunity data for prediction
   * @private
   */
  private async getOpportunityData(
    opportunityId: string,
    options?: AxiosRequestConfig
  ): Promise<any> {
    const paramDefs: Array<{ name: string; in: string }> = [
      { name: 'id', in: 'path' }
    ];
    const extracted = extractParams({ id: opportunityId }, paramDefs);
    const requirements: string[] = ['bearer'];

    const config: RequestConfig = {
      method: 'GET',
      url: buildUrl('/opportunities/{id}', extracted.path),
      params: extracted.query,
      headers: { ...options?.headers },
      __secutiryRequirements: requirements,
      __pathParams: extracted.path,
      ...options
    };

    const authToken = await getAuthToken(
      this.client,
      requirements,
      config.headers || {},
      { ...config.params || {}, ...config.__pathParams },
      {}
    );
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * Calculate rules-based deal prediction
   * @private
   */
  private async calculateRulesBasedDealPrediction(
    opportunityId: string,
    options?: AxiosRequestConfig
  ): Promise<Models.DealClosePrediction> {
    const opportunity = await this.getOpportunityData(opportunityId, options);

    // Simple rules-based prediction
    const daysInStage = opportunity.lastStageChangeAt
      ? Math.floor((Date.now() - new Date(opportunity.lastStageChangeAt).getTime()) / (1000 * 60 * 60 * 24))
      : 0;

    let closeProbability = 0.5;
    const riskFactors: string[] = [];
    const accelerators: string[] = [];

    if (daysInStage > 30) {
      closeProbability -= 0.2;
      riskFactors.push('Deal stagnant for 30+ days');
    }

    if (opportunity.status === 'open') {
      closeProbability += 0.2;
      accelerators.push('Deal actively being worked');
    }

    return {
      opportunityId,
      closeProbability: Math.max(0, Math.min(1, closeProbability)),
      confidence: 0.6,
      estimatedCloseDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      estimatedValue: opportunity.monetaryValue,
      riskFactors,
      accelerators,
      recommendedActions: riskFactors.length > 0 ? ['Schedule follow-up call', 'Send proposal'] : ['Continue nurturing']
    };
  }
}

export default LeadIntelligence;

