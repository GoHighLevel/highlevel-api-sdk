/**
 * Log levels for the GHL SDK
 * Higher numbers include all lower level logs
 */
export enum LogLevel {
  NONE = 0,    // No logs
  ERROR = 1,   // Only errors
  WARN = 2,    // Warnings + errors
  INFO = 3,    // Info + warnings + errors  
  DEBUG = 4    // All logs (most verbose)
}

/**
 * String representations of log levels for user convenience
 */
export type LogLevelString = 'none' | 'error' | 'warn' | 'info' | 'debug';

/**
 * Combined log level type for configuration
 */
export type LogLevelType = LogLevel | LogLevelString;

/**
 * Parse string log level to enum value
 * @param level - String log level
 * @returns LogLevel enum value
 */
export function parseLogLevel(level: LogLevelString): LogLevel {
  switch (level.toLowerCase()) {
    case 'none': return LogLevel.NONE;
    case 'error': return LogLevel.ERROR;
    case 'warn': return LogLevel.WARN;
    case 'info': return LogLevel.INFO;
    case 'debug': return LogLevel.DEBUG;
    default: return LogLevel.WARN; // Default fallback
  }
} 