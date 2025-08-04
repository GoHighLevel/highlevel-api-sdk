import { SessionStorage } from './session-storage';
import { ISessionData } from './mongodb-session-storage';
import { Logger } from '../logging';

/**
 * In-memory implementation of SessionStorage
 * Provides fast, non-persistent storage for sessions, tokens, and related data
 * Data is lost when the application restarts
 */
export class MemorySessionStorage extends SessionStorage {
  private sessions: Map<string, ISessionData & { createdAt: Date; updatedAt: Date }> = new Map();
  private clientId: string = '';
  private isInitialized: boolean = false;

  constructor(logger?: Logger) {
    super(logger ? logger.child('Memory') : new Logger('warn', 'GHL SDK Memory'));
  }

  /**
   * Calculate the expiration timestamp in milliseconds
   * @param expiresIn - The number of seconds until expiration (optional)
   * @returns The timestamp in milliseconds
   */
  private calculateExpireAt(expiresIn?: number): number {
    if (expiresIn === undefined || expiresIn === null) {
      // Default to 24 hours if no expires_in provided
      return Date.now() + (24 * 60 * 60 * 1000);
    }
    return Date.now() + (expiresIn * 1000);
  }

  /**
   * Check if a session is expired
   * @param sessionData - The session data to check
   * @returns True if expired, false otherwise
   */
  private isSessionExpired(sessionData: ISessionData): boolean {
    if (sessionData.expire_at === undefined) {
      return false; // No expiration, so not expired
    }
    return Date.now() >= sessionData.expire_at;
  }

  /**
   * Set the client ID (called automatically by HighLevel class)
   * @param clientId - The client ID from HighLevel configuration
   */
  setClientId(clientId: string): void {
    if (!clientId) {
      throw new Error('ClientId is required for session storage');
    }
    this.clientId = clientId;
    this.logger.debug(`MemorySessionStorage clientId set: ${this.getApplicationId()}`);
  }

  /**
   * Extract applicationId from clientId (first part before "-")
   * @returns Application ID extracted from clientId
   */
  private getApplicationId(): string {
    if (!this.clientId) {
      throw new Error('ClientId not set. Make sure HighLevel class has a valid clientId configured.');
    }
    return this.clientId.split('-')[0];
  }

  /**
   * Generate a unique key combining applicationId and resourceId
   * @param resourceId - The resource identifier (companyId or locationId)
   * @returns Unique composite key
   */
  private generateUniqueKey(resourceId: string): string {
    const applicationId = this.getApplicationId();
    return `${applicationId}:${resourceId}`;
  }

  /**
   * Initialize the memory storage (no-op for memory storage)
   */
  async init(): Promise<void> {
    this.isInitialized = true;
    this.logger.info('MemorySessionStorage initialized');
  }

  /**
   * Close the memory storage (clears all data)
   */
  async disconnect(): Promise<void> {
    this.sessions.clear();
    this.isInitialized = false;
    this.logger.info('MemorySessionStorage disconnected and cleared');
  }

  /**
   * Create a collection (no-op for memory storage)
   * @param collectionName - Name of the collection (ignored in memory storage)
   */
  async createCollection(collectionName: string): Promise<void> {
    this.logger.debug(`MemorySessionStorage collection concept acknowledged: ${collectionName}`);
  }

  /**
   * Get a collection reference (returns collection name for memory storage)
   * @param collectionName - Name of the collection
   */
  async getCollection(collectionName: string): Promise<string> {
    return collectionName;
  }

  /**
   * Store a session in memory
   * @param resourceId - Unique identifier: it can be a companyId or a locationId
   * @param sessionData - Session data to store
   */
  async setSession(resourceId: string, sessionData: ISessionData): Promise<void> {
    try {
      const uniqueKey = this.generateUniqueKey(resourceId);
      
      const sessionDocument = {
        ...sessionData,
        expire_at: this.calculateExpireAt(sessionData.expires_in),
        createdAt: new Date(),
        updatedAt: new Date()
      };

      this.sessions.set(uniqueKey, sessionDocument);

      this.logger.debug(`Session stored in memory: ${uniqueKey}`);
    } catch (error) {
      this.logger.error(`Error storing session ${this.getApplicationId()}:${resourceId}:`, error);
      throw error;
    }
  }

  /**
   * Retrieve a session from memory
   * @param resourceId - Unique identifier: it can be a companyId or a locationId
   * @returns Session data or null if not found
   */
  async getSession(resourceId: string): Promise<ISessionData | null> {
    try {
      const uniqueKey = this.generateUniqueKey(resourceId);
      
      const sessionDocument = this.sessions.get(uniqueKey);
      
      if (!sessionDocument) {
        return null;
      }

      this.logger.debug(`Session retrieved from memory: ${uniqueKey}`);
      
      // Return the session data without the timestamps
      const { createdAt, updatedAt, ...sessionData } = sessionDocument;
      return sessionData as ISessionData;
    } catch (error) {
      this.logger.error(`Error retrieving session ${this.getApplicationId()}:${resourceId}:`, error);
      throw error;
    }
  }

  /**
   * Delete a session from memory
   * @param resourceId - Unique identifier: it can be a companyId or a locationId
   */
  async deleteSession(resourceId: string): Promise<void> {
    try {
      const uniqueKey = this.generateUniqueKey(resourceId);
      
      const deleted = this.sessions.delete(uniqueKey);
      
      if (deleted) {
        this.logger.debug(`Session deleted from memory: ${uniqueKey}`);
      } else {
        this.logger.debug(`Session not found for deletion: ${uniqueKey}`);
      }
    } catch (error) {
      this.logger.error(`Error deleting session ${this.getApplicationId()}:${resourceId}:`, error);
      throw error;
    }
  }

  /**
   * Get only the access token for a resource
   * @param resourceId - Unique identifier for the resource (companyId or locationId)
   * @returns Access token or null if not found
   */
  async getAccessToken(resourceId: string): Promise<string | null> {
    try {
      const uniqueKey = this.generateUniqueKey(resourceId);
      const sessionDocument = this.sessions.get(uniqueKey);
      
      return sessionDocument?.access_token || null;
    } catch (error) {
      this.logger.error(`Error retrieving access token ${this.getApplicationId()}:${resourceId}:`, error);
      throw error;
    }
  }

  /**
   * Get only the refresh token for a resource
   * @param resourceId - Unique identifier for the resource (companyId or locationId)
   * @returns Refresh token or null if not found
   */
  async getRefreshToken(resourceId: string): Promise<string | null> {
    try {
      const uniqueKey = this.generateUniqueKey(resourceId);
      const sessionDocument = this.sessions.get(uniqueKey);
      
      return sessionDocument?.refresh_token || null;
    } catch (error) {
      this.logger.error(`Error retrieving refresh token ${this.getApplicationId()}:${resourceId}:`, error);
      throw error;
    }
  }

  /**
   * Get all sessions for this application
   * @returns Array of session data for the application
   */
  async getSessionsByApplication(): Promise<ISessionData[]> {
    try {
      const applicationId = this.getApplicationId();
      const appSessions: ISessionData[] = [];
      
      for (const [key, sessionData] of this.sessions.entries()) {
        if (key.startsWith(`${applicationId}:`)) {
          const { createdAt, updatedAt, ...cleanSessionData } = sessionData;
          appSessions.push(cleanSessionData as ISessionData);
        }
      }
      
      this.logger.debug(`Found ${appSessions.length} sessions in memory for application: ${applicationId}`);
      return appSessions;
    } catch (error) {
      this.logger.error(`Error retrieving sessions for application ${this.getApplicationId()}:`, error);
      throw error;
    }
  }

  /**
   * Check if the storage is initialized
   * @returns Initialization status
   */
  public isStorageActive(): boolean {
    return this.isInitialized;
  }

  /**
   * Get current session count
   * @returns Number of sessions stored in memory
   */
  public getSessionCount(): number {
    return this.sessions.size;
  }

  /**
   * Get all session keys (for debugging)
   * @returns Array of all session keys
   */
  public getAllSessionKeys(): string[] {
    return Array.from(this.sessions.keys());
  }

  /**
   * Clear all sessions (useful for testing)
   */
  public clearAllSessions(): void {
    const count = this.sessions.size;
    this.sessions.clear();
    this.logger.debug(`Cleared ${count} sessions from memory`);
  }
} 