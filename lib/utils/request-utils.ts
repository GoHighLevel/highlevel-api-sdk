import { AxiosInstance, AxiosRequestConfig } from 'axios';

export type RequestParams = Record<string, any>;

export interface RequestConfig extends AxiosRequestConfig {
  __secutiryRequirements?: string[];
  __preferredTokenType?: 'company' | 'location';
  __pathParams?: RequestParams;
}

/**
 * Resolves the Authorization header value for a request from the endpoint's
 * security requirements. HighLevel implements this and registers itself for the
 * shared Axios instance so generated services can resolve tokens without
 * holding a reference to the client.
 */
export interface TokenProvider {
  getTokenForSecurity(
    securityRequirements: string[],
    headers?: RequestParams,
    query?: RequestParams,
    body?: any,
    preferredTokenType?: 'company' | 'location'
  ): Promise<string>;
}

const tokenProviders = new WeakMap<AxiosInstance, TokenProvider>();

/**
 * Associate a token provider with an Axios instance
 */
export function registerTokenProvider(client: AxiosInstance, provider: TokenProvider): void {
  tokenProviders.set(client, provider);
}

/**
 * Look up the token provider registered for an Axios instance
 */
export function getTokenProvider(client: AxiosInstance): TokenProvider | undefined {
  return tokenProviders.get(client);
}

export function buildUrl(template: string, pathParams: RequestParams): string {
  let url = template;
  for (const [key, value] of Object.entries(pathParams)) {
    url = url.replace(`{${key}}`, encodeURIComponent(String(value)));
  }
  return url;
}

export function extractParams(params: any, paramDefs: Array<{name: string, in: string}>): {
  path: RequestParams;
  query: RequestParams; 
  header: RequestParams;
  all: RequestParams;
} {
  const result: {
    path: RequestParams;
    query: RequestParams; 
    header: RequestParams;
    all: RequestParams;
  } = { path: {}, query: {}, header: {}, all: {} };
  if (!params) return result;
  
  for (const def of paramDefs) {
    if (def.name === 'Authorization' || def.name === 'Version') continue;
    const camelName = def.name.replace(/[-_](\w)/g, (_, c) => c.toUpperCase());
    const value = params[camelName];
    if (value !== undefined) {
      result.all[def.name] = value;
      if (def.in === 'path') result.path[def.name] = value;
      else if (def.in === 'query') result.query[def.name] = value;
      else if (def.in === 'header') result.header[def.name] = String(value);
    }
  }
  return result;
}

export async function getAuthToken(client: AxiosInstance, requirements: string[], headers: RequestParams, query: RequestParams, body: any, preferredType?: string): Promise<string | null> {
  if (!requirements.length) return null;
  const provider = getTokenProvider(client);
  if (!provider) return null;
  return await provider.getTokenForSecurity(
    requirements,
    headers,
    query,
    body,
    preferredType as 'company' | 'location' | undefined
  );
}
