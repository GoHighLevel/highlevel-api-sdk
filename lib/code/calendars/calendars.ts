import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/calendars';

/**
 * Calendars Service
 * Documentation for Calendars API
 */
export class Calendars {
  private client: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.client = httpClient;
  }

  /**
   * Get Groups
   * Get all calendar groups in a location.
   */
  async getGroups(
    params: {
      locationId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.AllGroupsSuccessfulResponseDTO> {
    let url = '/calendars/groups';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];

    if (params) {
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.AllGroupsSuccessfulResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Calendar Group
   * Create Calendar Group
   */
  async createCalendarGroup(
    requestBody: Models.GroupCreateDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.GroupCreateSuccessfulResponseDTO> {
    let url = '/calendars/groups';
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.GroupCreateSuccessfulResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Validate group slug
   * Validate if group slug is available or not.
   */
  async validateGroupsSlug(
    requestBody: Models.ValidateGroupSlugPostBody,
    options?: AxiosRequestConfig
  ): Promise<Models.ValidateGroupSlugSuccessResponseDTO> {
    let url = '/calendars/groups/validate-slug';
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.ValidateGroupSlugSuccessResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Group
   * Delete Group
   */
  async deleteGroup(
    params: {
      groupId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GroupSuccessfulResponseDTO> {
    let url = '/calendars/groups/{groupId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];

    if (params) {
      if (params.groupId !== undefined) {
        url = url.replace('{' + 'groupId' + '}', encodeURIComponent(String(params.groupId)));
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.GroupSuccessfulResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Group
   * Update Group by group ID
   */
  async editGroup(
    params: {
      groupId: string;
    },
    requestBody: Models.GroupUpdateDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.GroupCreateSuccessfulResponseDTO> {
    let url = '/calendars/groups/{groupId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];

    if (params) {
      if (params.groupId !== undefined) {
        url = url.replace('{' + 'groupId' + '}', encodeURIComponent(String(params.groupId)));
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.GroupCreateSuccessfulResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Disable Group
   * Disable Group
   */
  async disableGroup(
    params: {
      groupId: string;
    },
    requestBody: Models.GroupStatusUpdateParams,
    options?: AxiosRequestConfig
  ): Promise<Models.GroupSuccessfulResponseDTO> {
    let url = '/calendars/groups/{groupId}/status';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];

    if (params) {
      if (params.groupId !== undefined) {
        url = url.replace('{' + 'groupId' + '}', encodeURIComponent(String(params.groupId)));
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.GroupSuccessfulResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create appointment
   * Create appointment
   */
  async createAppointment(
    requestBody: Models.AppointmentCreateSchema,
    options?: AxiosRequestConfig
  ): Promise<Models.AppointmentSchemaResponse> {
    let url = '/calendars/events/appointments';
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.AppointmentSchemaResponse> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Appointment
   * Update appointment
   */
  async editAppointment(
    params: {
      eventId: string;
    },
    requestBody: Models.AppointmentEditSchema,
    options?: AxiosRequestConfig
  ): Promise<Models.AppointmentSchemaResponse> {
    let url = '/calendars/events/appointments/{eventId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];

    if (params) {
      if (params.eventId !== undefined) {
        url = url.replace('{' + 'eventId' + '}', encodeURIComponent(String(params.eventId)));
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.AppointmentSchemaResponse> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Appointment
   * Get appointment by ID
   */
  async getAppointment(
    params: {
      eventId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetCalendarEventSuccessfulResponseDTO> {
    let url = '/calendars/events/appointments/{eventId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];

    if (params) {
      if (params.eventId !== undefined) {
        url = url.replace('{' + 'eventId' + '}', encodeURIComponent(String(params.eventId)));
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.GetCalendarEventSuccessfulResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Calendar Events
   * Get Calendar Events
   */
  async getCalendarEvents(
    params: {
      locationId: string;
      userId?: string;
      calendarId?: string;
      groupId?: string;
      startTime: string;
      endTime: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetCalendarEventsSuccessfulResponseDTO> {
    let url = '/calendars/events';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];

    if (params) {
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
      if (params.userId !== undefined) {
        queryParams['userId'] = params.userId;
      }
      if (params.calendarId !== undefined) {
        queryParams['calendarId'] = params.calendarId;
      }
      if (params.groupId !== undefined) {
        queryParams['groupId'] = params.groupId;
      }
      if (params.startTime !== undefined) {
        queryParams['startTime'] = params.startTime;
      }
      if (params.endTime !== undefined) {
        queryParams['endTime'] = params.endTime;
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.GetCalendarEventsSuccessfulResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Blocked Slots
   * Get Blocked Slots
   */
  async getBlockedSlots(
    params: {
      locationId: string;
      userId?: string;
      calendarId?: string;
      groupId?: string;
      startTime: string;
      endTime: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetCalendarEventsSuccessfulResponseDTO> {
    let url = '/calendars/blocked-slots';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];

    if (params) {
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
      if (params.userId !== undefined) {
        queryParams['userId'] = params.userId;
      }
      if (params.calendarId !== undefined) {
        queryParams['calendarId'] = params.calendarId;
      }
      if (params.groupId !== undefined) {
        queryParams['groupId'] = params.groupId;
      }
      if (params.startTime !== undefined) {
        queryParams['startTime'] = params.startTime;
      }
      if (params.endTime !== undefined) {
        queryParams['endTime'] = params.endTime;
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.GetCalendarEventsSuccessfulResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Block Slot
   * Create block slot
   */
  async createBlockSlot(
    requestBody: Models.BlockSlotCreateRequestDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.BlockedSlotSuccessfulResponseDto> {
    let url = '/calendars/events/block-slots';
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.BlockedSlotSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Block Slot
   * Update block slot by ID
   */
  async editBlockSlot(
    params: {
      eventId: string;
    },
    requestBody: Models.BlockSlotEditRequestDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.BlockedSlotSuccessfulResponseDto> {
    let url = '/calendars/events/block-slots/{eventId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];

    if (params) {
      if (params.eventId !== undefined) {
        url = url.replace('{' + 'eventId' + '}', encodeURIComponent(String(params.eventId)));
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.BlockedSlotSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Free Slots
   * Get free slots for a calendar between a date range. Optionally a consumer can also request free slots in a particular timezone and also for a particular user.
   */
  async getSlots(
    params: {
      calendarId: string;
      startDate: number;
      endDate: number;
      timezone?: string;
      userId?: string;
      userIds?: string[];
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetSlotsSuccessfulResponseDto> {
    let url = '/calendars/{calendarId}/free-slots';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];

    if (params) {
      if (params.calendarId !== undefined) {
        url = url.replace('{' + 'calendarId' + '}', encodeURIComponent(String(params.calendarId)));
      }
      if (params.startDate !== undefined) {
        queryParams['startDate'] = params.startDate;
      }
      if (params.endDate !== undefined) {
        queryParams['endDate'] = params.endDate;
      }
      if (params.timezone !== undefined) {
        queryParams['timezone'] = params.timezone;
      }
      if (params.userId !== undefined) {
        queryParams['userId'] = params.userId;
      }
      if (params.userIds !== undefined) {
        queryParams['userIds'] = params.userIds;
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.GetSlotsSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Calendar
   * Update calendar by ID.
   */
  async updateCalendar(
    params: {
      calendarId: string;
    },
    requestBody: Models.CalendarUpdateDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.CalendarByIdSuccessfulResponseDTO> {
    let url = '/calendars/{calendarId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];

    if (params) {
      if (params.calendarId !== undefined) {
        url = url.replace('{' + 'calendarId' + '}', encodeURIComponent(String(params.calendarId)));
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.CalendarByIdSuccessfulResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Calendar
   * Get calendar by ID
   */
  async getCalendar(
    params: {
      calendarId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.CalendarByIdSuccessfulResponseDTO> {
    let url = '/calendars/{calendarId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];

    if (params) {
      if (params.calendarId !== undefined) {
        url = url.replace('{' + 'calendarId' + '}', encodeURIComponent(String(params.calendarId)));
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.CalendarByIdSuccessfulResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Calendar
   * Delete calendar by ID
   */
  async deleteCalendar(
    params: {
      calendarId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.CalendarDeleteSuccessfulResponseDTO> {
    let url = '/calendars/{calendarId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];

    if (params) {
      if (params.calendarId !== undefined) {
        url = url.replace('{' + 'calendarId' + '}', encodeURIComponent(String(params.calendarId)));
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.CalendarDeleteSuccessfulResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Event
   * Delete event by ID
   */
  async deleteEvent(
    params: {
      eventId: string;
    },
    requestBody: Models.DeleteAppointmentSchema,
    options?: AxiosRequestConfig
  ): Promise<Models.DeleteEventSuccessfulResponseDto> {
    let url = '/calendars/events/{eventId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];

    if (params) {
      if (params.eventId !== undefined) {
        url = url.replace('{' + 'eventId' + '}', encodeURIComponent(String(params.eventId)));
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
      data: requestBody,
      ...options
    };

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.DeleteEventSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Notes
   * Get Appointment Notes
   */
  async getAppointmentNotes(
    params: {
      limit: number;
      offset: number;
      appointmentId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.GetNotesListSuccessfulResponseDto> {
    let url = '/calendars/appointments/{appointmentId}/notes';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];

    if (params) {
      if (params.limit !== undefined) {
        queryParams['limit'] = params.limit;
      }
      if (params.offset !== undefined) {
        queryParams['offset'] = params.offset;
      }
      if (params.appointmentId !== undefined) {
        url = url.replace('{' + 'appointmentId' + '}', encodeURIComponent(String(params.appointmentId)));
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.GetNotesListSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Note
   * Create Note
   */
  async createAppointmentNote(
    params: {
      appointmentId: string;
    },
    requestBody: Models.NotesDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.GetCreateUpdateNoteSuccessfulResponseDto> {
    let url = '/calendars/appointments/{appointmentId}/notes';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];

    if (params) {
      if (params.appointmentId !== undefined) {
        url = url.replace('{' + 'appointmentId' + '}', encodeURIComponent(String(params.appointmentId)));
      }
    }

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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.GetCreateUpdateNoteSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Note
   * Update Note
   */
  async updateAppointmentNote(
    params: {
      appointmentId: string;
    },
    requestBody: Models.NotesDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.GetCreateUpdateNoteSuccessfulResponseDto> {
    let url = '/calendars/appointments/{appointmentId}/notes/{noteId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];

    if (params) {
      if (params.appointmentId !== undefined) {
        url = url.replace('{' + 'appointmentId' + '}', encodeURIComponent(String(params.appointmentId)));
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.GetCreateUpdateNoteSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Note
   * Delete Note
   */
  async deleteAppointmentNote(
    params: {
      appointmentId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.DeleteNoteSuccessfulResponseDto> {
    let url = '/calendars/appointments/{appointmentId}/notes/{noteId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];

    if (params) {
      if (params.appointmentId !== undefined) {
        url = url.replace('{' + 'appointmentId' + '}', encodeURIComponent(String(params.appointmentId)));
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.DeleteNoteSuccessfulResponseDto> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Calendar Resource
   * Get calendar resource by ID
   */
  async getCalendarResource(
    params: {
      resourceType: string;
      id: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.CalendarResourceByIdResponseDTO> {
    let url = '/calendars/resources/{resourceType}/{id}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];

    if (params) {
      if (params.resourceType !== undefined) {
        url = url.replace('{' + 'resourceType' + '}', encodeURIComponent(String(params.resourceType)));
      }
      if (params.id !== undefined) {
        url = url.replace('{' + 'id' + '}', encodeURIComponent(String(params.id)));
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.CalendarResourceByIdResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update Calendar Resource
   * Update calendar resource by ID
   */
  async updateCalendarResource(
    params: {
      resourceType: string;
      id: string;
    },
    requestBody: Models.UpdateCalendarResourceDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.CalendarResourceResponseDTO> {
    let url = '/calendars/resources/{resourceType}/{id}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];

    if (params) {
      if (params.resourceType !== undefined) {
        url = url.replace('{' + 'resourceType' + '}', encodeURIComponent(String(params.resourceType)));
      }
      if (params.id !== undefined) {
        url = url.replace('{' + 'id' + '}', encodeURIComponent(String(params.id)));
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.CalendarResourceResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Calendar Resource
   * Delete calendar resource by ID
   */
  async deleteCalendarResource(
    params: {
      resourceType: string;
      id: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.ResourceDeleteResponseDTO> {
    let url = '/calendars/resources/{resourceType}/{id}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];

    if (params) {
      if (params.resourceType !== undefined) {
        url = url.replace('{' + 'resourceType' + '}', encodeURIComponent(String(params.resourceType)));
      }
      if (params.id !== undefined) {
        url = url.replace('{' + 'id' + '}', encodeURIComponent(String(params.id)));
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.ResourceDeleteResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * List Calendar Resources
   * List calendar resources by resource type and location ID
   */
  async fetchCalendarResources(
    params: {
      resourceType: string;
      locationId: string;
      limit: number;
      skip: number;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.CalendarResourceByIdResponseDTO[]> {
    let url = '/calendars/resources/{resourceType}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];

    if (params) {
      if (params.resourceType !== undefined) {
        url = url.replace('{' + 'resourceType' + '}', encodeURIComponent(String(params.resourceType)));
      }
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
      if (params.limit !== undefined) {
        queryParams['limit'] = params.limit;
      }
      if (params.skip !== undefined) {
        queryParams['skip'] = params.skip;
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.CalendarResourceByIdResponseDTO[]> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Calendar Resource
   * Create calendar resource by resource type
   */
  async createCalendarResource(
    params: {
      resourceType: string;
    },
    requestBody: Models.CreateCalendarResourceDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.CalendarResourceByIdResponseDTO> {
    let url = '/calendars/resources/{resourceType}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["Location-Access"];

    if (params) {
      if (params.resourceType !== undefined) {
        url = url.replace('{' + 'resourceType' + '}', encodeURIComponent(String(params.resourceType)));
      }
    }

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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.CalendarResourceByIdResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get notifications
   * Get calendar notifications based on query
   */
  async getEventNotification(
    params: {
      calendarId: string;
      isActive?: boolean;
      deleted?: boolean;
      limit?: number;
      skip?: number;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.CalendarNotificationResponseDTO[]> {
    let url = '/calendars/{calendarId}/notifications';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];

    if (params) {
      if (params.calendarId !== undefined) {
        url = url.replace('{' + 'calendarId' + '}', encodeURIComponent(String(params.calendarId)));
      }
      if (params.isActive !== undefined) {
        queryParams['isActive'] = params.isActive;
      }
      if (params.deleted !== undefined) {
        queryParams['deleted'] = params.deleted;
      }
      if (params.limit !== undefined) {
        queryParams['limit'] = params.limit;
      }
      if (params.skip !== undefined) {
        queryParams['skip'] = params.skip;
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.CalendarNotificationResponseDTO[]> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create notification
   * Create Calendar notifications, either one or multiple. All notification settings must be for single calendar only
   */
  async createEventNotification(
    params: {
      calendarId: string;
    },
    requestBody: Models.CreateCalendarNotificationDTO[],
    options?: AxiosRequestConfig
  ): Promise<Models.CalendarNotificationResponseDTO[]> {
    let url = '/calendars/{calendarId}/notifications';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];

    if (params) {
      if (params.calendarId !== undefined) {
        url = url.replace('{' + 'calendarId' + '}', encodeURIComponent(String(params.calendarId)));
      }
    }

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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.CalendarNotificationResponseDTO[]> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get notification
   * Find Event notification by notificationId
   */
  async findEventNotification(
    params: {
      calendarId: string;
      notificationId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.CalendarNotificationResponseDTO> {
    let url = '/calendars/{calendarId}/notifications/{notificationId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];

    if (params) {
      if (params.calendarId !== undefined) {
        url = url.replace('{' + 'calendarId' + '}', encodeURIComponent(String(params.calendarId)));
      }
      if (params.notificationId !== undefined) {
        url = url.replace('{' + 'notificationId' + '}', encodeURIComponent(String(params.notificationId)));
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.CalendarNotificationResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Update notification
   * Update Event notification by id
   */
  async updateEventNotification(
    params: {
      calendarId: string;
      notificationId: string;
    },
    requestBody: Models.UpdateCalendarNotificationsDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.CalendarNotificationDeleteResponseDTO> {
    let url = '/calendars/{calendarId}/notifications/{notificationId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];

    if (params) {
      if (params.calendarId !== undefined) {
        url = url.replace('{' + 'calendarId' + '}', encodeURIComponent(String(params.calendarId)));
      }
      if (params.notificationId !== undefined) {
        url = url.replace('{' + 'notificationId' + '}', encodeURIComponent(String(params.notificationId)));
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.CalendarNotificationDeleteResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Delete Notification
   * Delete notification
   */
  async deleteEventNotification(
    params: {
      calendarId: string;
      notificationId: string;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.CalendarNotificationDeleteResponseDTO> {
    let url = '/calendars/{calendarId}/notifications/{notificationId}';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];

    if (params) {
      if (params.calendarId !== undefined) {
        url = url.replace('{' + 'calendarId' + '}', encodeURIComponent(String(params.calendarId)));
      }
      if (params.notificationId !== undefined) {
        url = url.replace('{' + 'notificationId' + '}', encodeURIComponent(String(params.notificationId)));
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.CalendarNotificationDeleteResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Get Calendars
   * Get all calendars in a location.
   */
  async getCalendars(
    params: {
      locationId: string;
      groupId?: string;
      showDrafted?: boolean;
    },
    options?: AxiosRequestConfig
  ): Promise<Models.CalendarsGetSuccessfulResponseDTO> {
    let url = '/calendars/';
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    
    // Extract security requirements for this endpoint
    const securityRequirements: string[] = ["bearer"];

    if (params) {
      if (params.locationId !== undefined) {
        queryParams['locationId'] = params.locationId;
      }
      if (params.groupId !== undefined) {
        queryParams['groupId'] = params.groupId;
      }
      if (params.showDrafted !== undefined) {
        queryParams['showDrafted'] = params.showDrafted;
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.CalendarsGetSuccessfulResponseDTO> = await this.client.request(config);
    return response.data;
  }

  /**
   * Create Calendar
   * Create calendar in a location.
   */
  async createCalendar(
    requestBody: Models.CalendarCreateDTO,
    options?: AxiosRequestConfig
  ): Promise<Models.CalendarByIdSuccessfulResponseDTO> {
    let url = '/calendars/';
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

    // If security requirements exist, override Authorization header with appropriate token
    if (securityRequirements.length > 0) {
      // Access the HighLevel instance through the parent to get the token
      const ghlInstance = (this.client as any).__ghlInstance;
      if (ghlInstance && typeof ghlInstance.getTokenForSecurity === 'function') {
        try {
          const authToken = ghlInstance.getTokenForSecurity(securityRequirements);
          config.headers = {
            ...config.headers,
            'Authorization': authToken
          };
        } catch (error) {
          throw error; // Re-throw GHLError with appropriate message
        }
      }
    }

    const response: AxiosResponse<Models.CalendarByIdSuccessfulResponseDTO> = await this.client.request(config);
    return response.data;
  }

}

export default Calendars; 