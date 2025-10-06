// EmailIsv Models

export interface EmailNotVerifiedResponseDto {
  verified: boolean;
  message?: string;
  address?: string;
}

export interface LeadConnectorRecomandationDto {
  isEmailValid?: boolean;
}

export interface EmailVerifiedResponseDto {
  reason?: string[];
  result: string;
  risk: string;
  address: string;
  leadconnectorRecomendation: any;
}

export interface VerificationBodyDto {
  type: string;
  verify: string;
}

