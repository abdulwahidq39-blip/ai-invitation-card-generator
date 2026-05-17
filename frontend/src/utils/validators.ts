import { InvitationFormData } from '@/types/invitation';

export const validateInvitationForm = (data: Partial<InvitationFormData>): string[] => {
  const errors: string[] = [];

  if (!data.eventType) errors.push('Event type is required');
  if (!data.theme) errors.push('Theme is required');
  if (!data.eventName) errors.push('Event name is required');
  if (!data.eventDate) errors.push('Event date is required');
  if (!data.venue) errors.push('Venue is required');
  if (!data.address) errors.push('Address is required');
  if (!data.hostName) errors.push('Host name is required');
  if (!data.contactNumber) errors.push('Contact number is required');

  // Validate phone number format
  if (data.contactNumber && !/^[\d\s\-\+\(\)]{10,}$/.test(data.contactNumber)) {
    errors.push('Invalid contact number');
  }

  // Validate email if provided
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Invalid email address');
  }

  return errors;
};
