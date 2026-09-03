/**
 * HighLevel rate limit headers returned on every response.
 * Burst: `x-ratelimit-max` requests per `x-ratelimit-interval-milliseconds`.
 * Daily: `x-ratelimit-limit-daily` requests per day.
 */
export const RATE_LIMIT_HEADERS = {
  dailyLimit: 'x-ratelimit-limit-daily',
  dailyRemaining: 'x-ratelimit-daily-remaining',
  dailyReset: 'x-ratelimit-daily-reset',
  intervalMs: 'x-ratelimit-interval-milliseconds',
  max: 'x-ratelimit-max',
  remaining: 'x-ratelimit-remaining',
} as const;

/** Which limit a 429 response hit */
export type RateLimitScope = 'burst' | 'daily' | 'unknown';

export interface RateLimitInfo {
  scope: RateLimitScope;
  /** Length of the burst window in milliseconds */
  intervalMs?: number;
  /** Maximum requests allowed per burst window */
  max?: number;
  /** Requests remaining in the current burst window */
  remaining?: number;
  /** Daily request limit */
  dailyLimit?: number;
  /** Requests remaining today */
  dailyRemaining?: number;
  /** Milliseconds until the daily limit resets, when the API reports it */
  dailyResetMs?: number;
}

function readHeader(headers: any, name: string): unknown {
  if (!headers) return undefined;
  if (typeof headers.get === 'function') {
    const value = headers.get(name);
    if (value !== undefined && value !== null) return value;
  }
  return headers[name] ?? headers[name.toUpperCase()];
}

function readNumber(headers: any, name: string): number | undefined {
  const raw = readHeader(headers, name);
  if (raw === undefined || raw === null || raw === '') return undefined;
  const value = Number(Array.isArray(raw) ? raw[0] : raw);
  return Number.isFinite(value) ? value : undefined;
}

/**
 * Parse HighLevel's rate limit headers. Returns undefined when none are present.
 * On a 429 response the scope is `daily` when no daily requests remain,
 * otherwise `burst`.
 */
export function parseRateLimitHeaders(headers: any): RateLimitInfo | undefined {
  const values = {
    intervalMs: readNumber(headers, RATE_LIMIT_HEADERS.intervalMs),
    max: readNumber(headers, RATE_LIMIT_HEADERS.max),
    remaining: readNumber(headers, RATE_LIMIT_HEADERS.remaining),
    dailyLimit: readNumber(headers, RATE_LIMIT_HEADERS.dailyLimit),
    dailyRemaining: readNumber(headers, RATE_LIMIT_HEADERS.dailyRemaining),
    dailyResetMs: readNumber(headers, RATE_LIMIT_HEADERS.dailyReset),
  };

  if (Object.values(values).every(value => value === undefined)) return undefined;

  let scope: RateLimitScope = 'unknown';
  if (values.dailyRemaining !== undefined && values.dailyRemaining <= 0) {
    scope = 'daily';
  } else if (values.intervalMs !== undefined || values.max !== undefined || values.remaining !== undefined) {
    scope = 'burst';
  }

  return { scope, ...values };
}
