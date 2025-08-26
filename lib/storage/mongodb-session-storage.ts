import { MongoClient, Db, Collection } from 'mongodb';
import { SessionStorage } from './session-storage';
import { ISessionData } from './interfaces';
import { Logger } from '../logging';
/**
 * MongoDB implementation of SessionStorage
 * Provides MongoDB-based storage for sessions, tokens, and related data
 */
export class MongoDBSessionStorage extends SessionStorage {
  private client: MongoClient | null = null;
  private db: Db | null = null;
  private dbUrl: string;
  private dbName: string;
  private collectionName: string;
  private clientId: string = '';
  private isConnected: boolean = false;

  constructor(dbUrl: string, dbName: string, collectionName: string = 'application_sessions', logger?: Logger) {
    super(logger ? logger.child('MongoDB') : new Logger('warn', 'GHL SDK MongoDB'));
    this.dbUrl = dbUrl;
    this.dbName = dbName;
    this.collectionName = collectionName;
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
    this.logger.debug(`SessionStorage clientId set: ${this.getApplicationId()}`);
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
   * Initialize the MongoDB connection
   */
  async init(): Promise<void> {
    try {
      this.client = new MongoClient(this.dbUrl);
      await this.client.connect();
      this.db = this.client.db(this.dbName);
      await this.createCollection(this.collectionName);
      this.isConnected = true;
      
      this.logger.info(`Connected to MongoDB database: ${this.dbName}`);
    } catch (error) {
      this.logger.error('Failed to connect to MongoDB:', error);
      throw error;
    }
  }

  /**
   * Close the MongoDB connection
   */
  async disconnect(): Promise<void> {
    try {
      if (this.isConnected && this.client) {
        await this.client.close();
        this.isConnected = false;
        this.db = null;
        this.client = null;
        this.logger.info('Disconnected from MongoDB');
      }
    } catch (error) {
      this.logger.error('Error disconnecting from MongoDB:', error);
      throw error;
    }
  }

  /**
   * Create a collection if it doesn't exist
   * @param collectionName - Name of the collection to create
   */
  async createCollection(collectionName: string): Promise<void> {
    if (!this.db) {
      throw new Error('Database not initialized. Call init() first.');
    }

    try {
      // Get list of existing collections
      const collections = await this.db.listCollections().toArray();
      const collectionExists = collections.some(col => col.name === collectionName);
      
      if (!collectionExists) {
        await this.db.createCollection(collectionName);
        this.logger.debug(`Created MongoDB collection: ${collectionName}`);
      } else {
        this.logger.debug(`MongoDB collection already exists: ${collectionName}`);
      }
    } catch (error) {
      this.logger.error(`Error creating collection ${collectionName}:`, error);
      throw error;
    }
  }

  /**
   * Get a reference to a collection
   * @param collectionName - Name of the collection to get
   */
  async getCollection(collectionName: string): Promise<Collection> {
    if (!this.db) {
      throw new Error('Database not initialized. Call init() first.');
    }

    // Ensure collection exists
    await this.createCollection(collectionName);
    
    return this.db.collection(collectionName);
  }

  /**
   * Store a session in MongoDB
   * @param resourceId - Unique identifier: it can be a companyId or a locationId
   * @param sessionData - Session data to store
   */
  async setSession(resourceId: string, sessionData: ISessionData): Promise<void> {
    try {
      const collection = await this.getCollection(this.collectionName);
      const applicationId = this.getApplicationId();
      const uniqueKey = this.generateUniqueKey(resourceId);
      
      const sessionDocument = {
        uniqueKey,
        applicationId,
        resourceId,
        ...sessionData,
        expire_at: this.calculateExpireAt(sessionData.expires_in),
        createdAt: new Date(),
        updatedAt: new Date()
      };

      await collection.findOneAndReplace(
        { uniqueKey },
        sessionDocument,
        { upsert: true }
      );

      this.logger.debug(`Session stored: ${uniqueKey}`);
    } catch (error) {
      this.logger.error(`Error storing session ${this.getApplicationId()}:${resourceId}:`, error);
      throw error;
    }
  }

  /**
   * Retrieve a session from MongoDB
   * @param resourceId - Unique identifier: it can be a companyId or a locationId
   * @returns Session data or null if not found
   */
  async getSession(resourceId: string): Promise<ISessionData | null> {
    try {
      const collection = await this.getCollection(this.collectionName);
      const uniqueKey = this.generateUniqueKey(resourceId);
      
      const sessionDocument = await collection.findOne({ uniqueKey });
      
      if (!sessionDocument) {
        return null;
      }

      this.logger.debug(`Session retrieved: ${uniqueKey}`);
      
              // Return the session data including expire_at but without MongoDB metadata
        const { uniqueKey: _, applicationId: __, resourceId: ___, createdAt, updatedAt, _id, ...sessionData } = sessionDocument;
        return sessionData as ISessionData;
    } catch (error) {
      this.logger.error(`Error retrieving session ${this.getApplicationId()}:${resourceId}:`, error);
      throw error;
    }
  }

  /**
   * Delete a session from MongoDB
   * @param resourceId - Unique identifier: it can be a companyId or a locationId
   */
  async deleteSession(resourceId: string): Promise<void> {
    try {
      const collection = await this.getCollection(this.collectionName);
      const uniqueKey = this.generateUniqueKey(resourceId);
      
      const result = await collection.deleteOne({ uniqueKey });
      
      if (result.deletedCount > 0) {
        this.logger.debug(`Session deleted: ${uniqueKey}`);
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
      const collection = await this.getCollection(this.collectionName);
      const uniqueKey = this.generateUniqueKey(resourceId);
      
      const sessionDocument = await collection.findOne({ uniqueKey }, { projection: { access_token: 1 } });
      
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
      const collection = await this.getCollection(this.collectionName);
      const uniqueKey = this.generateUniqueKey(resourceId);
      
      const sessionDocument = await collection.findOne({ uniqueKey }, { projection: { refresh_token: 1 } });
      
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
      const collection = await this.getCollection(this.collectionName);
      const applicationId = this.getApplicationId();
      
      const sessions = await collection.find({ applicationId }).toArray();
      
      this.logger.debug(`Found ${sessions.length} sessions for application: ${applicationId}`);
      
      // Return session data without MongoDB metadata
      return sessions.map(doc => {
        const { uniqueKey: _, applicationId: __, resourceId: ___, createdAt, updatedAt, _id, expire_at, ...sessionData } = doc;
        return sessionData as ISessionData;
      });
    } catch (error) {
      this.logger.error(`Error retrieving sessions for application ${this.getApplicationId()}:`, error);
      throw error;
    }
  }

  /**
   * Get the underlying MongoDB database instance
   * @returns MongoDB Db instance
   */
  public getDb(): Db | null {
    return this.db;
  }

  /**
   * Get the underlying MongoDB client instance
   * @returns MongoDB client instance
   */
  public getClient(): MongoClient | null {
    return this.client;
  }

  /**
   * Check if the storage is connected
   * @returns Connection status
   */
  public isConnectionActive(): boolean {
    return this.isConnected;
  }
} 