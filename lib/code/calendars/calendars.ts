import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Models from './models/calendars';
import { buildUrl, extractParams, getAuthToken } from '../../utils/request-utils';

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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/calendars/groups', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/calendars/groups', extracted.path),
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
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/calendars/groups/validate-slug', extracted.path),
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'groupId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: buildUrl('/calendars/groups/{groupId}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'groupId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'PUT',
      url: buildUrl('/calendars/groups/{groupId}', extracted.path),
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'groupId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'PUT',
      url: buildUrl('/calendars/groups/{groupId}/status', extracted.path),
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
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/calendars/events/appointments', extracted.path),
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'eventId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'PUT',
      url: buildUrl('/calendars/events/appointments/{eventId}', extracted.path),
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'eventId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/calendars/events/appointments/{eventId}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'},{name: 'userId', in: 'query'},{name: 'calendarId', in: 'query'},{name: 'groupId', in: 'query'},{name: 'startTime', in: 'query'},{name: 'endTime', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/calendars/events', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'},{name: 'userId', in: 'query'},{name: 'calendarId', in: 'query'},{name: 'groupId', in: 'query'},{name: 'startTime', in: 'query'},{name: 'endTime', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/calendars/blocked-slots', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/calendars/events/block-slots', extracted.path),
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'eventId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'PUT',
      url: buildUrl('/calendars/events/block-slots/{eventId}', extracted.path),
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'calendarId', in: 'path'},{name: 'startDate', in: 'query'},{name: 'endDate', in: 'query'},{name: 'timezone', in: 'query'},{name: 'userId', in: 'query'},{name: 'userIds', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/calendars/{calendarId}/free-slots', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'calendarId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'PUT',
      url: buildUrl('/calendars/{calendarId}', extracted.path),
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'calendarId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/calendars/{calendarId}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'calendarId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: buildUrl('/calendars/{calendarId}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'eventId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: buildUrl('/calendars/events/{eventId}', extracted.path),
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'limit', in: 'query'},{name: 'offset', in: 'query'},{name: 'appointmentId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/calendars/appointments/{appointmentId}/notes', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'appointmentId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/calendars/appointments/{appointmentId}/notes', extracted.path),
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'appointmentId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'PUT',
      url: buildUrl('/calendars/appointments/{appointmentId}/notes/{noteId}', extracted.path),
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'appointmentId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: buildUrl('/calendars/appointments/{appointmentId}/notes/{noteId}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'resourceType', in: 'path'},{name: 'id', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/calendars/resources/{resourceType}/{id}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'resourceType', in: 'path'},{name: 'id', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'PUT',
      url: buildUrl('/calendars/resources/{resourceType}/{id}', extracted.path),
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'resourceType', in: 'path'},{name: 'id', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: buildUrl('/calendars/resources/{resourceType}/{id}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'resourceType', in: 'path'},{name: 'locationId', in: 'query'},{name: 'limit', in: 'query'},{name: 'skip', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/calendars/resources/{resourceType}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'resourceType', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["Location-Access"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/calendars/resources/{resourceType}', extracted.path),
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'calendarId', in: 'path'},{name: 'isActive', in: 'query'},{name: 'deleted', in: 'query'},{name: 'limit', in: 'query'},{name: 'skip', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/calendars/{calendarId}/notifications', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'calendarId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/calendars/{calendarId}/notifications', extracted.path),
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'calendarId', in: 'path'},{name: 'notificationId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/calendars/{calendarId}/notifications/{notificationId}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'calendarId', in: 'path'},{name: 'notificationId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'PUT',
      url: buildUrl('/calendars/{calendarId}/notifications/{notificationId}', extracted.path),
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'calendarId', in: 'path'},{name: 'notificationId', in: 'path'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: buildUrl('/calendars/{calendarId}/notifications/{notificationId}', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [{name: 'locationId', in: 'query'},{name: 'groupId', in: 'query'},{name: 'showDrafted', in: 'query'}];
    const extracted = extractParams(params, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: buildUrl('/calendars/', extracted.path),
      params: { ...extracted.query, ...extracted.all },
      headers: { ...extracted.header, ...options?.headers },
      
      __secutiryRequirements: requirements,
      
      ...options
    };

    const authToken = await getAuthToken(this.client, requirements, config.headers || {}, config.params || {}, {});
    if (authToken) {
      config.headers = { ...config.headers, Authorization: authToken };
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
    const paramDefs: Array<{name: string, in: string}> = [];
    const extracted = extractParams(null, paramDefs);
    const requirements: string[] = ["bearer"];
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: buildUrl('/calendars/', extracted.path),
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

    const response: AxiosResponse<Models.CalendarByIdSuccessfulResponseDTO> = await this.client.request(config);
    return response.data;
  }

}

export default Calendars; 