import { UserType } from '../constants';

/**
 * Session data interface for OAuth and authentication information
 * Used across all session storage implementations
 */
export interface ISessionData {
  access_token?: string;
  refresh_token?: string;
  token_type?: string;
  scope?: string;
  userType?: UserType | string;
  companyId?: string;
  locationId?: string;
  userId?: string;
  expires_in?: number; // Original expires_in from OAuth response (seconds)
  expire_at?: number; // Calculated expiration timestamp (milliseconds since epoch)
  [key: string]: any; // Allow additional properties
}
