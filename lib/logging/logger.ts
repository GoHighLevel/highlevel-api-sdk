import { LogLevel, LogLevelType, parseLogLevel } from './log-level';

/**
 * Logger class for the GHL SDK
 * Provides level-based logging with configurable verbosity
 */
export class Logger {
  private level: LogLevel;
  private prefix: string;

  /**
   * Create a new Logger instance
   * @param level - Log level (enum or string)
   * @param prefix - Optional prefix for log messages (default: 'GHL SDK')
   */
  constructor(level: LogLevelType = LogLevel.WARN, prefix: string = 'GHL SDK') {
    this.level = typeof level === 'string' ? parseLogLevel(level) : level;
    this.prefix = prefix;
  }

  /**
   * Log an error message (always includes stack trace if available)
   * @param message - Error message
   * @param args - Additional arguments to log
   */
  error(message: string, ...args: any[]): void {
    if (this.level >= LogLevel.ERROR) {
      console.error(`[${this.prefix}] ERROR: ${message}`, ...args);
    }
  }

  /**
   * Log a warning message
   * @param message - Warning message
   * @param args - Additional arguments to log
   */
  warn(message: string, ...args: any[]): void {
    if (this.level >= LogLevel.WARN) {
      console.warn(`[${this.prefix}] WARN: ${message}`, ...args);
    }
  }

  /**
   * Log an info message
   * @param message - Info message
   * @param args - Additional arguments to log
   */
  info(message: string, ...args: any[]): void {
    if (this.level >= LogLevel.INFO) {
      console.log(`[${this.prefix}] INFO: ${message}`, ...args);
    }
  }

  /**
   * Log a debug message
   * @param message - Debug message
   * @param args - Additional arguments to log
   */
  debug(message: string, ...args: any[]): void {
    if (this.level >= LogLevel.DEBUG) {
      console.log(`[${this.prefix}] DEBUG: ${message}`, ...args);
    }
  }

  /**
   * Check if a specific log level is enabled
   * @param level - Log level to check
   * @returns True if the level is enabled
   */
  isLevelEnabled(level: LogLevel): boolean {
    return this.level >= level;
  }

  /**
   * Get the current log level
   * @returns Current log level
   */
  getLevel(): LogLevel {
    return this.level;
  }

  /**
   * Set a new log level
   * @param level - New log level
   */
  setLevel(level: LogLevelType): void {
    this.level = typeof level === 'string' ? parseLogLevel(level) : level;
  }

  /**
   * Create a child logger with a different prefix but same level
   * @param prefix - New prefix for the child logger
   * @returns New Logger instance
   */
  child(prefix: string): Logger {
    return new Logger(this.level, prefix);
  }
} 