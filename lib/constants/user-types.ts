/**
 * Enum for user types in the HighLevel system
 * Used for OAuth flows and session management
 */
export enum UserType {
  Company = 'Company',
  Location = 'Location'
}

/**
 * Type definition for user type values
 * Can be used for type annotations
 */
export type UserTypeValue = `${UserType}`;
