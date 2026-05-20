import apiClient from './api';
import { InvitationFormData, InvitationData, ApiResponse } from '@/types/invitation';

export const invitationService = {
  /**
   * Create new invitation
   */
  async createInvitation(data: Partial<InvitationFormData>): Promise<InvitationData> {
    const response = await apiClient.post<ApiResponse<InvitationData>>(
      '/invitations/create',
      data
    );
    return response.data.data!;
  },

  /**
   * Get invitation by ID
   */
  async getInvitation(id: string): Promise<InvitationData> {
    const response = await apiClient.get<ApiResponse<InvitationData>>(
      `/invitations/${id}`
    );
    return response.data.data!;
  },

  /**
   * Update invitation
   */
  async updateInvitation(id: string, data: Partial<InvitationFormData>): Promise<InvitationData> {
    const response = await apiClient.put<ApiResponse<InvitationData>>(
      `/invitations/${id}`,
      data
    );
    return response.data.data!;
  },

  /**
   * Delete invitation
   */
  async deleteInvitation(id: string): Promise<void> {
    await apiClient.delete(`/invitations/${id}`);
  },

  /**
   * Generate AI background
   */
  async generateBackground(
    id: string,
    eventType: string,
    theme: string,
    color: string,
    religion?: string
  ): Promise<{ backgroundUrl: string }> {
    const response = await apiClient.post<ApiResponse<{ backgroundUrl: string }>>(
      `/invitations/${id}/generate-background`,
      { eventType, theme, color, religion }
    );
    return response.data.data!;
  },

  /**
   * Generate QR codes
   */
  async generateQRCodes(
    id: string,
    latitude?: number,
    longitude?: number,
    contactName?: string,
    contactPhone?: string,
    rsvpUrl?: string
  ) {
    const response = await apiClient.post<ApiResponse<any>>(
      `/invitations/${id}/generate-qrcodes`,
      { latitude, longitude, contactName, contactPhone, rsvpUrl }
    );
    return response.data.data;
  },
};
