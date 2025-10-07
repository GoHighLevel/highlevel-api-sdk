import { AxiosInstance, AxiosRequestConfig } from 'axios';

export type RequestParams = Record<string, any>;

export interface RequestConfig extends AxiosRequestConfig {
  __secutiryRequirements?: string[];
  __preferredTokenType?: 'company' | 'location';
  __pathParams?: RequestParams;
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
  const ghlInstance = (client as any).__ghlInstance;
  if (!ghlInstance?.getTokenForSecurity) return null;
  return await ghlInstance.getTokenForSecurity(requirements, headers, query, body, preferredType);
}
