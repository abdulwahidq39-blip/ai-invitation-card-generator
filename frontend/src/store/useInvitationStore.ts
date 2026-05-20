import { create } from 'zustand';
import { InvitationFormData, TemplateVariation } from '@/types/invitation';

interface InvitationStore {
  formData: Partial<InvitationFormData>;
  templates: TemplateVariation[];
  selectedTemplate: TemplateVariation | null;
  invitationId: string | null;
  loading: boolean;
  error: string | null;
  
  setFormData: (data: Partial<InvitationFormData>) => void;
  setTemplates: (templates: TemplateVariation[]) => void;
  setSelectedTemplate: (template: TemplateVariation | null) => void;
  setInvitationId: (id: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  resetStore: () => void;
}

const initialFormData: Partial<InvitationFormData> = {
  eventType: 'wedding',
  theme: 'traditional',
  color: 'gold',
  language: 'en',
};

export const useInvitationStore = create<InvitationStore>((set) => (({
  formData: initialFormData,
  templates: [],
  selectedTemplate: null,
  invitationId: null,
  loading: false,
  error: null,
  
  setFormData: (data) => set((state) => ({
    formData: { ...state.formData, ...data },
  })),
  
  setTemplates: (templates) => set({ templates }),
  
  setSelectedTemplate: (template) => set({ selectedTemplate: template }),
  
  setInvitationId: (id) => set({ invitationId: id }),
  
  setLoading: (loading) => set({ loading }),
  
  setError: (error) => set({ error }),
  
  resetStore: () => set({
    formData: initialFormData,
    templates: [],
    selectedTemplate: null,
    invitationId: null,
    loading: false,
    error: null,
  }),
})));
