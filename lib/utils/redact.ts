/**
 * Redaction helpers so credentials never reach logs or error payloads.
 */

const SENSITIVE_KEY_PATTERN =
  /^(authorization|proxy-authorization|cookie|set-cookie|x-api-key|api[-_]?key|access[-_]?token|refresh[-_]?token|id[-_]?token|client[-_]?secret|private[-_]?integration[-_]?token|agency[-_]?access[-_]?token|location[-_]?access[-_]?token|password|secret|token)$/i;

// Matches `key=value` (form encoded) and `"key":"value"` (JSON) pairs for sensitive keys inside a string body
const SENSITIVE_FORM_PAIR_PATTERN =
  /\b(client_secret|refresh_token|access_token|id_token|token|password|secret)=([^&\s]*)/gi;
const SENSITIVE_JSON_PAIR_PATTERN =
  /("(?:client_secret|refresh_token|access_token|id_token|token|password|secret|clientSecret|refreshToken|accessToken|privateIntegrationToken)"\s*:\s*")((?:[^"\\]|\\.)*)(")/gi;

export const REDACTED = '[REDACTED]';
const MAX_DEPTH = 8;

/**
 * Whether a header or property name is treated as sensitive
 */
export function isSensitiveKey(key: string): boolean {
  return SENSITIVE_KEY_PATTERN.test(key);
}

/**
 * Redact sensitive `key=value` and `"key":"value"` pairs inside a serialized body
 */
export function redactSensitiveText(text: string): string {
  return text
    .replace(SENSITIVE_FORM_PAIR_PATTERN, (_match, key: string) => `${key}=${REDACTED}`)
    .replace(SENSITIVE_JSON_PAIR_PATTERN, (_match, prefix: string, _value: string, suffix: string) => `${prefix}${REDACTED}${suffix}`);
}

/**
 * Returns a deep copy of `value` with the values of sensitive keys replaced by
 * `[REDACTED]`. Serialized string bodies are scanned for sensitive pairs.
 * Buffers, Dates and class instances without `toJSON` are returned unchanged so
 * the caller never loses the original shape.
 */
export function redactSensitive<T>(value: T, depth: number = 0): T {
  if (depth > MAX_DEPTH || value === null || value === undefined) return value;
  if (typeof value === 'string') return redactSensitiveText(value) as unknown as T;
  if (Array.isArray(value)) {
    return value.map(item => redactSensitive(item, depth + 1)) as unknown as T;
  }
  if (typeof value !== 'object') return value;
  if (Buffer.isBuffer(value) || value instanceof Date) return value;

  const source: any = value;
  const plain = typeof source.toJSON === 'function' ? source.toJSON() : source;
  if (plain !== source) return redactSensitive(plain, depth + 1) as T;

  const proto = Object.getPrototypeOf(plain);
  if (proto !== null && proto !== Object.prototype) return value;

  const result: Record<string, any> = {};
  for (const [key, entry] of Object.entries(plain)) {
    if (isSensitiveKey(key) && entry !== undefined && entry !== null) {
      result[key] = REDACTED;
    } else {
      result[key] = redactSensitive(entry, depth + 1);
    }
  }
  return result as T;
}
