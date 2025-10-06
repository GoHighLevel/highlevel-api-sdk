// Funnels Models

export interface CreateRedirectParams {
  locationId: string;
  domain: string;
  path: string;
  target: string;
  action: string;
}

export interface RedirectResponseDTO {
  id: string;
  locationId: string;
  domain: string;
  path: string;
  pathLowercase: string;
  type: string;
  target: string;
  action: string;
}

export interface CreateRedirectResponseDTO {
  data: any;
}

export interface UpdateRedirectParams {
  target: string;
  action: string;
  locationId: string;
}

export interface RedirectListResponseDTO {
  data: any;
}

export interface DeleteRedirectResponseDTO {
  data: any;
}

export interface UpdateRedirectResponseDTO {
  data: any;
}

export interface FunnelPageResponseDTO {
  _id: string;
  locationId: string;
  funnelId: string;
  name: string;
  stepId: string;
  deleted: string;
  updatedAt: string;
}

export interface FunnelPageCountResponseDTO {
  count: number;
}

export interface FunnelListResponseDTO {
  funnels: any;
  count: number;
  traceId: string;
}

