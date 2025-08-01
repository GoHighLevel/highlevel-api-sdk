import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/conversations';

/**
 * Conversations Service
 * Documentation for Conversations API
 */
export class Conversations {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Search Conversations
   * Returns a list of all conversations matching the search criteria along with the sort and filter options selected.
   */
  async searchConversation(
    params: {
      locationId: string;
      contactId?: string;
      assignedTo?: string;
      followers?: string;
      mentions?: string;
      query?: string;
      sort?: string;
      startAfterDate?: any;
      id?: string;
      limit?: number;
      lastMessageType?: string;
      lastMessageAction?: string;
      lastMessageDirection?: string;
      status?: string;
      sortBy?: string;
      sortScoreProfile?: string;
      scoreProfile?: string;
      scoreProfileMin?: number;
      scoreProfileMax?: number;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.SendConversationResponseDto> {
    let url = '/conversations/search';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
      if (params.contactId !== undefined) {
        queryParams['contactId'] = params.contactId;
      }
      if (params.assignedTo !== undefined) {
        queryParams['assignedTo'] = params.assignedTo;
      }
      if (params.followers !== undefined) {
        queryParams['followers'] = params.followers;
      }
      if (params.mentions !== undefined) {
        queryParams['mentions'] = params.mentions;
      }
      if (params.query !== undefined) {
        queryParams['query'] = params.query;
      }
      if (params.sort !== undefined) {
        queryParams['sort'] = params.sort;
      }
      if (params.startAfterDate !== undefined) {
        queryParams['startAfterDate'] = params.startAfterDate;
      }
      if (params.id !== undefined) {
        queryParams['id'] = params.id;
      }
      if (params.limit !== undefined) {
        queryParams['limit'] = params.limit;
      }
      if (params.lastMessageType !== undefined) {
        queryParams['lastMessageType'] = params.lastMessageType;
      }
      if (params.lastMessageAction !== undefined) {
        queryParams['lastMessageAction'] = params.lastMessageAction;
      }
      if (params.lastMessageDirection !== undefined) {
        queryParams['lastMessageDirection'] = params.lastMessageDirection;
      }
      if (params.status !== undefined) {
        queryParams['status'] = params.status;
      }
      if (params.sortBy !== undefined) {
        queryParams['sortBy'] = params.sortBy;
      }
      if (params.sortScoreProfile !== undefined) {
        queryParams['sortScoreProfile'] = params.sortScoreProfile;
      }
      if (params.scoreProfile !== undefined) {
        queryParams['scoreProfile'] = params.scoreProfile;
      }
      if (params.scoreProfileMin !== undefined) {
        queryParams['scoreProfileMin'] = params.scoreProfileMin;
      }
      if (params.scoreProfileMax !== undefined) {
        queryParams['scoreProfileMax'] = params.scoreProfileMax;
      }
    }

    const config: AxiosRequestConfig = {
      method: 'GET',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      ...options
    };

    // Get appropriate authorization token based on security requirements
    const ghlInstance = (this.client as any).__ghlInstance;
    if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
      try {
        // Combine headerParams with headers from options
        const combinedHeaders = {
          ...headerParams,
          ...options?.headers
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          queryParams,
          {}
        );
        
        if (authToken) {
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        }
      } catch (error) {
        throw error; // Re-throw authentication errors
      }
    }

    const response: AxiosResponse<Models.SendConversationResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Conversation
   * Get the conversation details based on the conversation ID
   */
  async getConversation(
    params: {
      conversationId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetConversationByIdResponse> {
    let url = '/conversations/{conversationId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.conversationId !== undefined) {
        url = url.replace('{' + 'conversationId' + '}', encodeURIComponent(String(params.conversationId)));
      }
    }

    const config: AxiosRequestConfig = {
      method: 'GET',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      ...options
    };

    // Get appropriate authorization token based on security requirements
    const ghlInstance = (this.client as any).__ghlInstance;
    if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
      try {
        // Combine headerParams with headers from options
        const combinedHeaders = {
          ...headerParams,
          ...options?.headers
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          queryParams,
          {}
        );
        
        if (authToken) {
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        }
      } catch (error) {
        throw error; // Re-throw authentication errors
      }
    }

    const response: AxiosResponse<Models.GetConversationByIdResponse> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Conversation
   * Update the conversation details based on the conversation ID
   */
  async updateConversation(
    params: {
      conversationId: string;
    },
    requestBody: Models.UpdateConversationDto,
    options?: AxiosRequestConfig
  ): Promise<Models.GetConversationSuccessfulResponse> {
    let url = '/conversations/{conversationId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.conversationId !== undefined) {
        url = url.replace('{' + 'conversationId' + '}', encodeURIComponent(String(params.conversationId)));
      }
    }

    const config: AxiosRequestConfig = {
      method: 'PUT',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      data: requestBody,
      ...options
    };

    // Get appropriate authorization token based on security requirements
    const ghlInstance = (this.client as any).__ghlInstance;
    if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
      try {
        // Combine headerParams with headers from options
        const combinedHeaders = {
          ...headerParams,
          ...options?.headers
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          queryParams,
          requestBody
        );
        
        if (authToken) {
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        }
      } catch (error) {
        throw error; // Re-throw authentication errors
      }
    }

    const response: AxiosResponse<Models.GetConversationSuccessfulResponse> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Conversation
   * Delete the conversation details based on the conversation ID
   */
  async deleteConversation(
    params: {
      conversationId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.DeleteConversationSuccessfulResponse> {
    let url = '/conversations/{conversationId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.conversationId !== undefined) {
        url = url.replace('{' + 'conversationId' + '}', encodeURIComponent(String(params.conversationId)));
      }
    }

    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      ...options
    };

    // Get appropriate authorization token based on security requirements
    const ghlInstance = (this.client as any).__ghlInstance;
    if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
      try {
        // Combine headerParams with headers from options
        const combinedHeaders = {
          ...headerParams,
          ...options?.headers
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          queryParams,
          {}
        );
        
        if (authToken) {
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        }
      } catch (error) {
        throw error; // Re-throw authentication errors
      }
    }

    const response: AxiosResponse<Models.DeleteConversationSuccessfulResponse> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get email by Id
   * Get email by Id
   */
  async getEmailById(
    options?: AxiosRequestConfig
  ): Promise<Models.GetEmailMessageResponseDto> {
    let url = '/conversations/messages/email/{id}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = [];
    

    const config: AxiosRequestConfig = {
      method: 'GET',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      ...options
    };

    // Get appropriate authorization token based on security requirements
    const ghlInstance = (this.client as any).__ghlInstance;
    if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
      try {
        // Combine headerParams with headers from options
        const combinedHeaders = {
          ...headerParams,
          ...options?.headers
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          queryParams,
          {}
        );
        
        if (authToken) {
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        }
      } catch (error) {
        throw error; // Re-throw authentication errors
      }
    }

    const response: AxiosResponse<Models.GetEmailMessageResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Cancel a scheduled email message.
   * Post the messageId for the API to delete a scheduled email message. &lt;br /&gt;
   */
  async cancelScheduledEmailMessage(
    params: {
      emailMessageId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.CancelScheduledResponseDto> {
    let url = '/conversations/messages/email/{emailMessageId}/schedule';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = [];
    
    if (params) {
      if (params.emailMessageId !== undefined) {
        url = url.replace('{' + 'emailMessageId' + '}', encodeURIComponent(String(params.emailMessageId)));
      }
    }

    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      ...options
    };

    // Get appropriate authorization token based on security requirements
    const ghlInstance = (this.client as any).__ghlInstance;
    if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
      try {
        // Combine headerParams with headers from options
        const combinedHeaders = {
          ...headerParams,
          ...options?.headers
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          queryParams,
          {}
        );
        
        if (authToken) {
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        }
      } catch (error) {
        throw error; // Re-throw authentication errors
      }
    }

    const response: AxiosResponse<Models.CancelScheduledResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get message by message id
   * Get message by message id.
   */
  async getMessage(
    options?: AxiosRequestConfig
  ): Promise<Models.GetMessageResponseDto> {
    let url = '/conversations/messages/{id}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    

    const config: AxiosRequestConfig = {
      method: 'GET',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      ...options
    };

    // Get appropriate authorization token based on security requirements
    const ghlInstance = (this.client as any).__ghlInstance;
    if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
      try {
        // Combine headerParams with headers from options
        const combinedHeaders = {
          ...headerParams,
          ...options?.headers
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          queryParams,
          {}
        );
        
        if (authToken) {
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        }
      } catch (error) {
        throw error; // Re-throw authentication errors
      }
    }

    const response: AxiosResponse<Models.GetMessageResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get messages by conversation id
   * Get messages by conversation id.
   */
  async getMessages(
    params: {
      conversationId: string;
      lastMessageId?: string;
      limit?: number;
      type?: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetMessagesByConversationResponseDto> {
    let url = '/conversations/{conversationId}/messages';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.conversationId !== undefined) {
        url = url.replace('{' + 'conversationId' + '}', encodeURIComponent(String(params.conversationId)));
      }
      if (params.lastMessageId !== undefined) {
        queryParams['lastMessageId'] = params.lastMessageId;
      }
      if (params.limit !== undefined) {
        queryParams['limit'] = params.limit;
      }
      if (params.type !== undefined) {
        queryParams['type'] = params.type;
      }
    }

    const config: AxiosRequestConfig = {
      method: 'GET',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      ...options
    };

    // Get appropriate authorization token based on security requirements
    const ghlInstance = (this.client as any).__ghlInstance;
    if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
      try {
        // Combine headerParams with headers from options
        const combinedHeaders = {
          ...headerParams,
          ...options?.headers
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          queryParams,
          {}
        );
        
        if (authToken) {
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        }
      } catch (error) {
        throw error; // Re-throw authentication errors
      }
    }

    const response: AxiosResponse<Models.GetMessagesByConversationResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Send a new message
   * Post the necessary fields for the API to send a new message.
   */
  async sendANewMessage(
    requestBody: Models.SendMessageBodyDto,
    options?: AxiosRequestConfig
  ): Promise<Models.SendMessageResponseDto> {
    let url = '/conversations/messages';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    

    const config: AxiosRequestConfig = {
      method: 'POST',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      data: requestBody,
      ...options
    };

    // Get appropriate authorization token based on security requirements
    const ghlInstance = (this.client as any).__ghlInstance;
    if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
      try {
        // Combine headerParams with headers from options
        const combinedHeaders = {
          ...headerParams,
          ...options?.headers
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          queryParams,
          requestBody
        );
        
        if (authToken) {
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        }
      } catch (error) {
        throw error; // Re-throw authentication errors
      }
    }

    const response: AxiosResponse<Models.SendMessageResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Add an inbound message
   * Post the necessary fields for the API to add a new inbound message. &lt;br /&gt;
   */
  async addAnInboundMessage(
    requestBody: Models.ProcessMessageBodyDto,
    options?: AxiosRequestConfig
  ): Promise<Models.ProcessMessageResponseDto> {
    let url = '/conversations/messages/inbound';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    

    const config: AxiosRequestConfig = {
      method: 'POST',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      data: requestBody,
      ...options
    };

    // Get appropriate authorization token based on security requirements
    const ghlInstance = (this.client as any).__ghlInstance;
    if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
      try {
        // Combine headerParams with headers from options
        const combinedHeaders = {
          ...headerParams,
          ...options?.headers
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          queryParams,
          requestBody
        );
        
        if (authToken) {
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        }
      } catch (error) {
        throw error; // Re-throw authentication errors
      }
    }

    const response: AxiosResponse<Models.ProcessMessageResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Add an external outbound call
   * Post the necessary fields for the API to add a new outbound call.
   */
  async addAnOutboundMessage(
    requestBody: Models.ProcessOutboundMessageBodyDto,
    options?: AxiosRequestConfig
  ): Promise<Models.ProcessMessageResponseDto> {
    let url = '/conversations/messages/outbound';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    

    const config: AxiosRequestConfig = {
      method: 'POST',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      data: requestBody,
      ...options
    };

    // Get appropriate authorization token based on security requirements
    const ghlInstance = (this.client as any).__ghlInstance;
    if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
      try {
        // Combine headerParams with headers from options
        const combinedHeaders = {
          ...headerParams,
          ...options?.headers
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          queryParams,
          requestBody
        );
        
        if (authToken) {
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        }
      } catch (error) {
        throw error; // Re-throw authentication errors
      }
    }

    const response: AxiosResponse<Models.ProcessMessageResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Cancel a scheduled message.
   * Post the messageId for the API to delete a scheduled message. &lt;br /&gt;
   */
  async cancelScheduledMessage(
    params: {
      messageId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.CancelScheduledResponseDto> {
    let url = '/conversations/messages/{messageId}/schedule';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.messageId !== undefined) {
        url = url.replace('{' + 'messageId' + '}', encodeURIComponent(String(params.messageId)));
      }
    }

    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      ...options
    };

    // Get appropriate authorization token based on security requirements
    const ghlInstance = (this.client as any).__ghlInstance;
    if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
      try {
        // Combine headerParams with headers from options
        const combinedHeaders = {
          ...headerParams,
          ...options?.headers
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          queryParams,
          {}
        );
        
        if (authToken) {
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        }
      } catch (error) {
        throw error; // Re-throw authentication errors
      }
    }

    const response: AxiosResponse<Models.CancelScheduledResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Upload file attachments
   * Post the necessary fields for the API to upload files. The files need to be a buffer with the key &quot;fileAttachment&quot;. &lt;br /&gt;&lt;br /&gt; The allowed file types are: &lt;br/&gt; &lt;ul&gt;&lt;li&gt;JPG&lt;/li&gt;&lt;li&gt;JPEG&lt;/li&gt;&lt;li&gt;PNG&lt;/li&gt;&lt;li&gt;MP4&lt;/li&gt;&lt;li&gt;MPEG&lt;/li&gt;&lt;li&gt;ZIP&lt;/li&gt;&lt;li&gt;RAR&lt;/li&gt;&lt;li&gt;PDF&lt;/li&gt;&lt;li&gt;DOC&lt;/li&gt;&lt;li&gt;DOCX&lt;/li&gt;&lt;li&gt;TXT&lt;/li&gt;&lt;li&gt;MP3&lt;/li&gt;&lt;li&gt;WAV&lt;/li&gt;&lt;/ul&gt; &lt;br /&gt;&lt;br /&gt; The API will return an object with the URLs
   */
  async uploadFileAttachments(
    requestBody: any,
    options?: AxiosRequestConfig
  ): Promise<Models.UploadFilesResponseDto> {
    let url = '/conversations/messages/upload';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    

    const config: AxiosRequestConfig = {
      method: 'POST',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      data: requestBody,
      ...options
    };

    // Get appropriate authorization token based on security requirements
    const ghlInstance = (this.client as any).__ghlInstance;
    if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
      try {
        // Combine headerParams with headers from options
        const combinedHeaders = {
          ...headerParams,
          ...options?.headers
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          queryParams,
          requestBody
        );
        
        if (authToken) {
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        }
      } catch (error) {
        throw error; // Re-throw authentication errors
      }
    }

    const response: AxiosResponse<Models.UploadFilesResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update message status
   * Post the necessary fields for the API to update message status.
   */
  async updateMessageStatus(
    params: {
      messageId: string;
    },
    requestBody: Models.UpdateMessageStatusDto,
    options?: AxiosRequestConfig
  ): Promise<Models.SendMessageResponseDto> {
    let url = '/conversations/messages/{messageId}/status';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    
    if (params) {
      if (params.messageId !== undefined) {
        url = url.replace('{' + 'messageId' + '}', encodeURIComponent(String(params.messageId)));
      }
    }

    const config: AxiosRequestConfig = {
      method: 'PUT',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      data: requestBody,
      ...options
    };

    // Get appropriate authorization token based on security requirements
    const ghlInstance = (this.client as any).__ghlInstance;
    if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
      try {
        // Combine headerParams with headers from options
        const combinedHeaders = {
          ...headerParams,
          ...options?.headers
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          queryParams,
          requestBody
        );
        
        if (authToken) {
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        }
      } catch (error) {
        throw error; // Re-throw authentication errors
      }
    }

    const response: AxiosResponse<Models.SendMessageResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Recording by Message ID
   * Get the recording for a message by passing the message id
   */
  async getMessageRecording(
    params: {
      locationId: string;
      messageId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<any> {
    let url = '/conversations/messages/{messageId}/locations/{locationId}/recording';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer","Location-Access"];
    
    if (params) {
      if (params.locationId !== undefined) {
        url = url.replace('{' + 'locationId' + '}', encodeURIComponent(String(params.locationId)));
      }
      if (params.messageId !== undefined) {
        url = url.replace('{' + 'messageId' + '}', encodeURIComponent(String(params.messageId)));
      }
    }

    const config: AxiosRequestConfig = {
      method: 'GET',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      ...options
    };

    // Get appropriate authorization token based on security requirements
    const ghlInstance = (this.client as any).__ghlInstance;
    if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
      try {
        // Combine headerParams with headers from options
        const combinedHeaders = {
          ...headerParams,
          ...options?.headers
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          queryParams,
          {}
        );
        
        if (authToken) {
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        }
      } catch (error) {
        throw error; // Re-throw authentication errors
      }
    }

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get transcription by Message ID
   * Get the recording transcription for a message by passing the message id
   */
  async getMessageTranscription(
    params: {
      locationId: string;
      messageId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetMessageTranscriptionResponseDto> {
    let url = '/conversations/locations/{locationId}/messages/{messageId}/transcription';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer","Location-Access"];
    
    if (params) {
      if (params.locationId !== undefined) {
        url = url.replace('{' + 'locationId' + '}', encodeURIComponent(String(params.locationId)));
      }
      if (params.messageId !== undefined) {
        url = url.replace('{' + 'messageId' + '}', encodeURIComponent(String(params.messageId)));
      }
    }

    const config: AxiosRequestConfig = {
      method: 'GET',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      ...options
    };

    // Get appropriate authorization token based on security requirements
    const ghlInstance = (this.client as any).__ghlInstance;
    if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
      try {
        // Combine headerParams with headers from options
        const combinedHeaders = {
          ...headerParams,
          ...options?.headers
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          queryParams,
          {}
        );
        
        if (authToken) {
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        }
      } catch (error) {
        throw error; // Re-throw authentication errors
      }
    }

    const response: AxiosResponse<Models.GetMessageTranscriptionResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Download transcription by Message ID
   * Download the recording transcription for a message by passing the message id
   */
  async downloadMessageTranscription(
    params: {
      locationId: string;
      messageId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<any> {
    let url = '/conversations/locations/{locationId}/messages/{messageId}/transcription/download';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer","Location-Access"];
    
    if (params) {
      if (params.locationId !== undefined) {
        url = url.replace('{' + 'locationId' + '}', encodeURIComponent(String(params.locationId)));
      }
      if (params.messageId !== undefined) {
        url = url.replace('{' + 'messageId' + '}', encodeURIComponent(String(params.messageId)));
      }
    }

    const config: AxiosRequestConfig = {
      method: 'GET',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      ...options
    };

    // Get appropriate authorization token based on security requirements
    const ghlInstance = (this.client as any).__ghlInstance;
    if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
      try {
        // Combine headerParams with headers from options
        const combinedHeaders = {
          ...headerParams,
          ...options?.headers
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          queryParams,
          {}
        );
        
        if (authToken) {
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        }
      } catch (error) {
        throw error; // Re-throw authentication errors
      }
    }

    const response: AxiosResponse<any> = await this.client.request(config);
    return response.data;
  }

  /**
   * Agent/Ai-Bot is typing a message indicator for live chat
   * Agent/AI-Bot will call this when they are typing a message in live chat message
   */
  async liveChatAgentTyping(
    requestBody: Models.UserTypingBody,
    options?: AxiosRequestConfig
  ): Promise<Models.CreateLiveChatMessageFeedbackResponse> {
    let url = '/conversations/providers/live-chat/typing';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];
    

    const config: AxiosRequestConfig = {
      method: 'POST',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      data: requestBody,
      ...options
    };

    // Get appropriate authorization token based on security requirements
    const ghlInstance = (this.client as any).__ghlInstance;
    if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
      try {
        // Combine headerParams with headers from options
        const combinedHeaders = {
          ...headerParams,
          ...options?.headers
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          queryParams,
          requestBody
        );
        
        if (authToken) {
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        }
      } catch (error) {
        throw error; // Re-throw authentication errors
      }
    }

    const response: AxiosResponse<Models.CreateLiveChatMessageFeedbackResponse> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Conversation
   * Creates a new conversation with the data provided
   */
  async createConversation(
    requestBody: Models.CreateConversationDto,
    options?: AxiosRequestConfig
  ): Promise<Models.CreateConversationSuccessResponse> {
    let url = '/conversations/';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];
    

    const config: AxiosRequestConfig = {
      method: 'POST',
      url,
      params: queryParams,
      headers: {
        ...headerParams,
        ...options?.headers
      },
      data: requestBody,
      ...options
    };

    // Get appropriate authorization token based on security requirements
    const ghlInstance = (this.client as any).__ghlInstance;
    if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
      try {
        // Combine headerParams with headers from options
        const combinedHeaders = {
          ...headerParams,
          ...options?.headers
        };
        
        const authToken = await ghlInstance.getTokenForSecurity(
          securityRequirements,
          combinedHeaders,
          queryParams,
          requestBody
        );
        
        if (authToken) {
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        }
      } catch (error) {
        throw error; // Re-throw authentication errors
      }
    }

    const response: AxiosResponse<Models.CreateConversationSuccessResponse> = await this.client.request(config);
    return response.data;
  }

}

export default Conversations; 