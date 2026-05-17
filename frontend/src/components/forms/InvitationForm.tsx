'use client';

import React from 'react';
import { InvitationFormData } from '@/types/invitation';
import { validateInvitationForm } from '@/utils/validators';

export interface InvitationFormProps {
  onSubmit: (data: InvitationFormData) => void;
  loading?: boolean;
}

const InvitationForm: React.FC<InvitationFormProps> = ({ onSubmit, loading = false }) => {
  const [formData, setFormData] = React.useState<Partial<InvitationFormData>>({
    eventType: 'wedding',
    theme: 'traditional',
    color: 'gold',
    language: 'en',
  });

  const [errors, setErrors] = React.useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files) {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validateInvitationForm(formData);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors([]);
    onSubmit(formData as InvitationFormData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Create Your Invitation</h2>

      {/* Error Messages */}
      {errors.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="text-red-800 font-semibold mb-2">Please fix the following errors:</h3>
          <ul className="list-disc list-inside text-red-700">
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Event Type and Theme */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Event Type *
          </label>
          <select
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="wedding">Wedding</option>
            <option value="engagement">Engagement</option>
            <option value="birthday">Birthday</option>
            <option value="babyshower">Baby Shower</option>
            <option value="housewarming">Housewarming</option>
            <option value="religious">Religious Events</option>
            <option value="corporate">Corporate Events</option>
            <option value="festival">Festival</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Theme *
          </label>
          <select
            name="theme"
            value={formData.theme}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="traditional">Traditional</option>
            <option value="modern">Modern</option>
            <option value="minimal">Minimal</option>
            <option value="royal">Royal</option>
            <option value="floral">Floral</option>
            <option value="cartoon">Cartoon</option>
            <option value="kids">Kids</option>
          </select>
        </div>
      </div>

      {/* Event Details */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Event Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="eventName"
            placeholder="Event Name *"
            value={formData.eventName || ''}
            onChange={handleChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="date"
            name="eventDate"
            value={formData.eventDate || ''}
            onChange={handleChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="time"
            name="eventTime"
            value={formData.eventTime || ''}
            onChange={handleChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="venue"
            placeholder="Venue *"
            value={formData.venue || ''}
            onChange={handleChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <textarea
          name="address"
          placeholder="Address *"
          value={formData.address || ''}
          onChange={handleChange}
          className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
      </div>

      {/* Host Details */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Host Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="hostName"
            placeholder="Host Name *"
            value={formData.hostName || ''}
            onChange={handleChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="tel"
            name="contactNumber"
            placeholder="Contact Number *"
            value={formData.contactNumber || ''}
            onChange={handleChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email (Optional)"
            value={formData.email || ''}
            onChange={handleChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="guestName"
            placeholder="Guest Name (Optional)"
            value={formData.guestName || ''}
            onChange={handleChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Media Upload */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Media (Optional)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Couple Photo
            </label>
            <input
              type="file"
              name="couplePhoto"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Family Photo
            </label>
            <input
              type="file"
              name="familyPhoto"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Custom Logo
            </label>
            <input
              type="file"
              name="customLogo"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-3 rounded-lg transition duration-300"
      >
        {loading ? 'Creating...' : 'Create Invitation'}
      </button>
    </form>
  );
};

export default InvitationForm;
