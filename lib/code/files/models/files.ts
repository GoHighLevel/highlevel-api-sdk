// @generated
// File generated from our OpenAPI spec
// Files Models

export interface FileResponseDto {
  url: string;
  asset_id: string;
  content_type: string;
  filename: string;
  size: number;
  allow_download: boolean;
}

export interface FileErrorDto {
  error?: string;
}

