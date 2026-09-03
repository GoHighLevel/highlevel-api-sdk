// @generated
// File generated from our OpenAPI spec

import type { RateLimitInfo } from './utils/rate-limit';

/** Machine-readable category of a GHLError. Branch on it or use `instanceof` with the subclasses below. */
export type GHLErrorCode =
  | 'AUTHENTICATION'
  | 'FORBIDDEN'
  | 'NOT_FOUND'
  | 'VALIDATION'
  | 'RATE_LIMIT'
  | 'SERVER'
  | 'NETWORK'
  | 'REQUEST'
  | 'UNKNOWN';

// Custom error class for GHL API errors
export class GHLError extends Error {
  public statusCode?: number;
  public response?: any;
  public request?: any;
  public code: GHLErrorCode;

  constructor(message: string, statusCode?: number, response?: any, request?: any, code: GHLErrorCode = 'UNKNOWN') {
    super(message);
    this.name = 'GHLError';
    this.statusCode = statusCode;
    this.response = response;
    this.request = request;
    this.code = code;
  }
}

/** 401 - the token is missing, invalid or expired and could not be refreshed */
export class GHLAuthenticationError extends GHLError {
  constructor(message: string, statusCode?: number, response?: any, request?: any) {
    super(message, statusCode, response, request, 'AUTHENTICATION');
  }
}

/** 403 - the token does not have the required scopes or access */
export class GHLForbiddenError extends GHLError {
  constructor(message: string, statusCode?: number, response?: any, request?: any) {
    super(message, statusCode, response, request, 'FORBIDDEN');
  }
}

/** 404 - the resource does not exist */
export class GHLNotFoundError extends GHLError {
  constructor(message: string, statusCode?: number, response?: any, request?: any) {
    super(message, statusCode, response, request, 'NOT_FOUND');
  }
}

/** 400 / 422 - the request was rejected by validation */
export class GHLValidationError extends GHLError {
  constructor(message: string, statusCode?: number, response?: any, request?: any) {
    super(message, statusCode, response, request, 'VALIDATION');
  }
}

/** 429 - rate limit exceeded. `rateLimit` holds the parsed x-ratelimit-* headers and which limit (burst or daily) was hit */
export class GHLRateLimitError extends GHLError {
  public rateLimit?: RateLimitInfo;

  constructor(message: string, statusCode?: number, response?: any, request?: any, rateLimit?: RateLimitInfo) {
    super(message, statusCode, response, request, 'RATE_LIMIT');
    this.rateLimit = rateLimit;
  }
}

/** 5xx - the API failed to process the request */
export class GHLServerError extends GHLError {
  constructor(message: string, statusCode?: number, response?: any, request?: any) {
    super(message, statusCode, response, request, 'SERVER');
  }
}

/** The request was sent but no response was received */
export class GHLNetworkError extends GHLError {
  constructor(message: string, statusCode?: number, response?: any, request?: any) {
    super(message, statusCode, response, request, 'NETWORK');
  }
}

/**
 * Build the most specific GHLError subclass for an HTTP status code.
 * Every subclass reports `name === 'GHLError'` so existing checks keep working.
 */
export function createGHLError(message: string, statusCode: number, response?: any, request?: any, rateLimit?: RateLimitInfo): GHLError {
  if (statusCode === 401) return new GHLAuthenticationError(message, statusCode, response, request);
  if (statusCode === 403) return new GHLForbiddenError(message, statusCode, response, request);
  if (statusCode === 404) return new GHLNotFoundError(message, statusCode, response, request);
  if (statusCode === 400 || statusCode === 422) return new GHLValidationError(message, statusCode, response, request);
  if (statusCode === 429) return new GHLRateLimitError(message, statusCode, response, request, rateLimit);
  if (statusCode >= 500) return new GHLServerError(message, statusCode, response, request);
  return new GHLError(message, statusCode, response, request);
}
