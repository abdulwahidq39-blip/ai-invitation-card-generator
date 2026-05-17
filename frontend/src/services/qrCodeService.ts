export const qrCodeService = {
  /**
   * Download QR code from data URL
   */
  downloadQRCode(qrDataUrl: string, fileName: string = 'qrcode.png') {
    const link = document.createElement('a');
    link.href = qrDataUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },

  /**
   * Get coordinates from address (requires Google Maps API)
   */
  async getCoordinatesFromAddress(address: string) {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}`
      );
      const data = await response.json();
      if (data.results && data.results[0]) {
        const { lat, lng } = data.results[0].geometry.location;
        return { latitude: lat, longitude: lng };
      }
    } catch (error) {
      console.error('Geocoding error:', error);
    }
    return null;
  },
};
