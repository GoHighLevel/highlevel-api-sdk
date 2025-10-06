import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/conversations';
import { buildUrl, extractParams, getAuthToken } from '../../utils/request-utils';

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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'},{name: 'contactId', in: 'query'},{name: 'assignedTo', in: 'query'},{name: 'followers', in: 'query'},{name: 'mentions', in: 'query'},{name: 'query', in: 'query'},{name: 'sort', in: 'query'},{name: 'startAfterDate', in: 'query'},{name: 'id', in: 'query'},{name: 'limit', in: 'query'},{name: 'lastMessageType', in: 'query'},{name: 'lastMessageAction', in: 'query'},{name: 'lastMessageDirection', in: 'query'},{name: 'status', in: 'query'},{name: 'sortBy', in: 'query'},{name: 'sortScoreProfile', in: 'query'},{name: 'scoreProfile', in: 'query'},{name: 'scoreProfileMin', in: 'query'},{name: 'scoreProfileMax', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/conversations/search', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'conversationId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/conversations/{conversationId}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'conversationId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'PUT',
      url: buildUrl('/conversations/{conversationId}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, requestBody);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'conversationId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: buildUrl('/conversations/{conversationId}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = [];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/conversations/messages/email/{id}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'emailMessageId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = [];
    
    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: buildUrl('/conversations/messages/email/{emailMessageId}/schedule', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/conversations/messages/{id}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'conversationId', in: 'path'},{name: 'lastMessageId', in: 'query'},{name: 'limit', in: 'query'},{name: 'type', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/conversations/{conversationId}/messages', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/conversations/messages', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, requestBody);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/conversations/messages/inbound', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, requestBody);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/conversations/messages/outbound', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, requestBody);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'messageId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: buildUrl('/conversations/messages/{messageId}/schedule', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/conversations/messages/upload', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, requestBody);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'messageId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'PUT',
      url: buildUrl('/conversations/messages/{messageId}/status', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, requestBody);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'},{name: 'messageId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer","Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/conversations/messages/{messageId}/locations/{locationId}/recording', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'},{name: 'messageId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer","Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/conversations/locations/{locationId}/messages/{messageId}/transcription', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'path'},{name: 'messageId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer","Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/conversations/locations/{locationId}/messages/{messageId}/transcription/download', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/conversations/providers/live-chat/typing', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, requestBody);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/conversations/', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      data: requestBody,
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, requestBody);
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
    }

    const response: AxiosResponse<Models.CreateConversationSuccessResponse> = await this.client.request(config);
    return response.data;
  }

}

export default Conversations; 