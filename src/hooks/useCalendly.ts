import { useEffect } from 'react';

// Calendly configuration
export const CALENDLY_URL = 'https://calendly.com/mesagroupconsulting/mesa-group-consulting-consultation-calendar';
export const CALENDLY_PRIMARY_COLOR = 'f9c65d'; // Mesa Group amber color

// Pre-fill options for smart routing
export interface CalendlyPrefillOptions {
  name?: string;
  email?: string;
  customAnswers?: {
    // Question: "Are you inquiring for personal or business needs?"
    serviceType?: 'Personal/Consumer services' | 'Business services' | 'Both';
    // Question: "What's your primary goal?"
    primaryGoal?: 'Buy a home' | 'Buy a car' | 'Access business funding' | 'Build business credit' | 'Start a new business' | 'Lower interest rates/debt' | 'Improve credit score' | 'Other';
    // Question: "What's your timeline?"
    timeline?: 'Immediate (0-30 days)' | '1-3 months' | '3-6 months' | '6-12 months' | 'Just exploring options';
  };
  // UTM parameters for tracking
  utm?: {
    source?: string;
    medium?: string;
    campaign?: string;
    content?: string;
  };
}

/**
 * Hook to load and manage Calendly widget
 * Loads the Calendly script once and provides methods to open popup
 */
export const useCalendly = () => {
  useEffect(() => {
    // Check if Calendly script is already loaded
    if (window.Calendly) {
      return;
    }

    // Load Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Load Calendly JS
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount (optional, usually you want to keep it loaded)
      // script.remove();
      // link.remove();
    };
  }, []);

  /**
   * Open Calendly popup widget
   */
  const openPopup = (options?: CalendlyPrefillOptions) => {
    if (!window.Calendly) {
      console.error('Calendly script not loaded yet');
      return;
    }

    // Build URL with query parameters
    let url = `${CALENDLY_URL}?primary_color=${CALENDLY_PRIMARY_COLOR}`;

    // Add custom answers as URL parameters
    if (options?.customAnswers) {
      const { serviceType, primaryGoal, timeline } = options.customAnswers;

      // Calendly uses 'a1', 'a2', etc. for custom question answers
      if (serviceType) {
        url += `&a1=${encodeURIComponent(serviceType)}`;
      }
      if (primaryGoal) {
        url += `&a2=${encodeURIComponent(primaryGoal)}`;
      }
      if (timeline) {
        url += `&a3=${encodeURIComponent(timeline)}`;
      }
    }

    // Add UTM parameters for tracking
    if (options?.utm) {
      const { source, medium, campaign, content } = options.utm;
      if (source) url += `&utm_source=${encodeURIComponent(source)}`;
      if (medium) url += `&utm_medium=${encodeURIComponent(medium)}`;
      if (campaign) url += `&utm_campaign=${encodeURIComponent(campaign)}`;
      if (content) url += `&utm_content=${encodeURIComponent(content)}`;
    }

    // Open popup
    window.Calendly.initPopupWidget({
      url,
      prefill: {
        name: options?.name,
        email: options?.email,
      },
    });
  };

  return { openPopup };
};

// TypeScript declaration for Calendly global
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string; prefill?: { name?: string; email?: string } }) => void;
      initBadgeWidget: (options: any) => void;
      closePopupWidget: () => void;
    };
  }
}
