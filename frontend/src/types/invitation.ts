export type EventType = 'wedding' | 'engagement' | 'birthday' | 'babyshower' | 'housewarming' | 'religious' | 'corporate' | 'festival';
export type Religion = 'hindu' | 'muslim' | 'christian' | 'jewish' | 'sikh' | 'buddhist' | 'other';
export type Language = 'en' | 'hi' | 'kn' | 'ta' | 'te' | 'ur';
export type Theme = 'traditional' | 'modern' | 'minimal' | 'royal' | 'floral' | 'cartoon' | 'kids';
export type TemplateLayout = 'portrait' | 'landscape' | 'instagram' | 'whatsapp';
export type DownloadFormat = 'png' | 'jpg' | 'pdf';

export interface InvitationFormData {
  eventType: EventType;
  religion?: Religion;
  theme: Theme;
  color: string;
  language: Language;
  
  eventName: string;
  eventDate: string;
  eventTime?: string;
  venue: string;
  address: string;
  
  hostName: string;
  guestName?: string;
  brideName?: string;
  groomName?: string;
  contactNumber: string;
  email?: string;
  
  dressCode?: string;
  rsvpDetails?: string;
  description?: string;
  mapLocation?: string;
  
  couplePhoto?: File;
  familyPhoto?: File;
  customLogo?: File;
  
  latitude?: number;
  longitude?: number;
}

export interface InvitationData {
  _id: string;
  eventType: EventType;
  religion?: Religion;
  theme: Theme;
  color: string;
  language: Language;
  
  eventName: string;
  eventDate: Date;
  eventTime?: string;
  venue: string;
  address: string;
  
  hostName: string;
  guestName?: string;
  brideName?: string;
  groomName?: string;
  contactNumber: string;
  email?: string;
  
  dressCode?: string;
  rsvpDetails?: string;
  description?: string;
  mapLocation?: string;
  
  couplePhoto?: string;
  familyPhoto?: string;
  customLogo?: string;
  aiGeneratedBackground?: string;
  
  locationQRCode?: string;
  contactQRCode?: string;
  rsvpQRCode?: string;
  
  selectedTemplate?: string;
  templateVariations?: TemplateVariation[];
  designElements?: DesignElements;
  
  downloadFormat: DownloadFormat;
  downloadUrl?: string;
  
  createdAt: Date;
  updatedAt: Date;
  status: 'draft' | 'completed' | 'expired';
}

export interface TemplateVariation {
  id: string;
  name: string;
  previewUrl: string;
  layout: TemplateLayout;
  isSelected: boolean;
}

export interface DesignElements {
  fontFamily?: string;
  fontSize?: number;
  textColor?: string;
  borderStyle?: string;
  decorativeElements?: string[];
  animationType?: string;
  gradientOverlay?: boolean;
  glassmorphism?: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}
