import { encode } from '@toon-format/toon';

/**
 * TOON Utility Functions
 * Shared utilities for TOON format integration across all AI services
 * Provides 30-60% token savings when sending data to LLMs
 */

export interface TOONOptions {
  delimiter?: string;
  lengthMarker?: boolean;
}

export interface TokenSavings {
  originalSize: number;
  toonSize: number;
  bytesSaved: number;
  percentageSaved: number;
  estimatedTokensSaved: number;
  estimatedCostSavings: number; // in USD
}

/**
 * Convert any data to TOON format with automatic token savings calculation
 * @param data - The data to convert (object, array, or primitive)
 * @param options - TOON encoding options
 * @returns Object containing TOON-encoded string and savings metrics
 */
export function encodeToTOON(
  data: any,
  options?: TOONOptions
): { toonData: string; savings: TokenSavings } {
  const delimiter = options?.delimiter || '\t'; // Tab is most efficient
  const lengthMarker = options?.lengthMarker !== false; // Enabled by default

  // Encode to TOON format
  const toonData = encode(data, {
    delimiter: delimiter as any,
    lengthMarker: lengthMarker ? '#' : undefined as any
  });

  // Calculate savings
  const originalJson = JSON.stringify(data);
  const originalSize = originalJson.length;
  const toonSize = toonData.length;
  const bytesSaved = originalSize - toonSize;
  const percentageSaved = ((bytesSaved / originalSize) * 100);

  // Estimate tokens (rough: ~4 chars per token for English text)
  const estimatedTokensSaved = Math.floor(bytesSaved / 4);

  // Estimate cost savings (using GPT-4 pricing: ~$0.03 per 1K input tokens)
  const estimatedCostSavings = (estimatedTokensSaved / 1000) * 0.03;

  return {
    toonData,
    savings: {
      originalSize,
      toonSize,
      bytesSaved,
      percentageSaved,
      estimatedTokensSaved,
      estimatedCostSavings
    }
  };
}

/**
 * Encode data to TOON format (simple version without metrics)
 * @param data - The data to convert
 * @param options - TOON encoding options
 * @returns TOON-encoded string
 */
export function toTOON(data: any, options?: TOONOptions): string {
  const delimiter = options?.delimiter || '\t';
  const lengthMarker = options?.lengthMarker !== false;

  return encode(data, {
    delimiter: delimiter as any,
    lengthMarker: lengthMarker ? '#' : undefined as any
  });
}

/**
 * Prepare contact data for LLM processing with optimal TOON encoding
 * @param contacts - Array of contact objects
 * @param fields - Optional array of field names to include (defaults to all)
 * @returns TOON-encoded string optimized for LLM
 */
export function prepareContactsForLLM(
  contacts: any[],
  fields?: string[]
): { toonData: string; savings: TokenSavings } {
  // Select specific fields if provided, otherwise use all
  const processedContacts = fields
    ? contacts.map(contact =>
        fields.reduce((obj, field) => {
          if (contact[field] !== undefined) {
            obj[field] = contact[field];
          }
          return obj;
        }, {} as any)
      )
    : contacts;

  return encodeToTOON(processedContacts, {
    delimiter: '\t',
    lengthMarker: true
  });
}

/**
 * Prepare opportunities/deals for LLM processing with TOON encoding
 * @param opportunities - Array of opportunity objects
 * @param fields - Optional array of field names to include
 * @returns TOON-encoded string
 */
export function prepareOpportunitiesForLLM(
  opportunities: any[],
  fields?: string[]
): { toonData: string; savings: TokenSavings } {
  const processedOpps = fields
    ? opportunities.map(opp =>
        fields.reduce((obj, field) => {
          if (opp[field] !== undefined) {
            obj[field] = opp[field];
          }
          return obj;
        }, {} as any)
      )
    : opportunities;

  return encodeToTOON(processedOpps, {
    delimiter: '\t',
    lengthMarker: true
  });
}

/**
 * Prepare conversation data for LLM processing with TOON encoding
 * @param conversations - Array of conversation/message objects
 * @param fields - Optional array of field names to include
 * @returns TOON-encoded string
 */
export function prepareConversationsForLLM(
  conversations: any[],
  fields?: string[]
): { toonData: string; savings: TokenSavings } {
  const processedConvs = fields
    ? conversations.map(conv =>
        fields.reduce((obj, field) => {
          if (conv[field] !== undefined) {
            obj[field] = conv[field];
          }
          return obj;
        }, {} as any)
      )
    : conversations;

  return encodeToTOON(processedConvs, {
    delimiter: '\t',
    lengthMarker: true
  });
}

/**
 * Format savings report for logging/display
 * @param savings - Token savings metrics
 * @returns Formatted string with savings details
 */
export function formatSavingsReport(savings: TokenSavings): string {
  return `
📊 TOON Format Savings Report:
   Original Size: ${savings.originalSize} bytes
   TOON Size: ${savings.toonSize} bytes
   Saved: ${savings.bytesSaved} bytes (${savings.percentageSaved.toFixed(1)}%)
   
💰 Cost Savings:
   Tokens Saved: ~${savings.estimatedTokensSaved} tokens
   Cost Saved: ~$${savings.estimatedCostSavings.toFixed(4)} USD
   (Based on GPT-4 pricing: $0.03/1K input tokens)
  `.trim();
}

/**
 * Calculate potential monthly savings based on usage
 * @param requestsPerMonth - Number of LLM requests per month
 * @param avgDataSize - Average data size in bytes per request
 * @param avgSavingsPercentage - Average percentage savings (default: 50%)
 * @returns Monthly cost savings in USD
 */
export function calculateMonthlySavings(
  requestsPerMonth: number,
  avgDataSize: number,
  avgSavingsPercentage: number = 50
): {
  tokensSavedPerMonth: number;
  monthlyCostSavings: number;
  yearlyCostSavings: number;
} {
  const bytesSavedPerRequest = avgDataSize * (avgSavingsPercentage / 100);
  const tokensSavedPerRequest = Math.floor(bytesSavedPerRequest / 4);
  const tokensSavedPerMonth = tokensSavedPerRequest * requestsPerMonth;
  const monthlyCostSavings = (tokensSavedPerMonth / 1000) * 0.03;
  const yearlyCostSavings = monthlyCostSavings * 12;

  return {
    tokensSavedPerMonth,
    monthlyCostSavings,
    yearlyCostSavings
  };
}
