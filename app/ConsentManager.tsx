'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: Object[];
  }
}

export function ConsentManager() {
  useEffect(() => {
    // Function to check if GTM is loaded
    const checkGTMLoaded = () => {
      const consentAlreadySet = localStorage.getItem('gtm_consent_set');
      if (consentAlreadySet) {
        return true;
      }
      if (window.dataLayer && window.gtag) {
        // Set default consent state
        window.gtag('consent', 'default', {
          'ad_storage': 'granted',
          'ad_user_data': 'granted',
          'ad_personalization': 'granted',
          'analytics_storage': 'granted'
        });
        localStorage.setItem('gtm_consent_set', 'true');
        return true;
      }
      return false;
    };

    // Try immediately
    if (!checkGTMLoaded()) {
      // If not loaded, set up a polling mechanism
      const interval = setInterval(() => {
        if (checkGTMLoaded()) {
          clearInterval(interval);
        }
      }, 100); // Check every 100ms

      // Cleanup interval after 5 seconds if GTM never loads
      setTimeout(() => clearInterval(interval), 5000);

      return () => clearInterval(interval);
    }
  }, []);

  return null;
}