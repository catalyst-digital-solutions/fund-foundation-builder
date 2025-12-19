import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { CALENDLY_URL, CALENDLY_PRIMARY_COLOR, CalendlyPrefillOptions } from '@/hooks/useCalendly';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillOptions?: CalendlyPrefillOptions;
}

/**
 * Custom Calendly modal using inline embed
 * Provides full control over sizing and positioning for vertical monitors
 */
export const CalendlyModal: React.FC<CalendlyModalProps> = ({
  isOpen,
  onClose,
  prefillOptions,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen || !containerRef.current) return;

    // Load Calendly CSS if not already loaded
    if (!document.querySelector('link[href*="calendly"]')) {
      const link = document.createElement('link');
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }

    // Load Calendly JS if not already loaded
    if (!window.Calendly) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => initializeCalendly();
      document.body.appendChild(script);
    } else {
      initializeCalendly();
    }

    function initializeCalendly() {
      if (!window.Calendly || !containerRef.current) return;

      // Build URL with query parameters
      let url = `${CALENDLY_URL}?primary_color=${CALENDLY_PRIMARY_COLOR}&embed_domain=${window.location.hostname}&embed_type=Inline`;

      // Add custom answers as URL parameters
      if (prefillOptions?.customAnswers) {
        const { serviceType, primaryGoal, timeline } = prefillOptions.customAnswers;
        if (serviceType) url += `&a1=${encodeURIComponent(serviceType)}`;
        if (primaryGoal) url += `&a2=${encodeURIComponent(primaryGoal)}`;
        if (timeline) url += `&a3=${encodeURIComponent(timeline)}`;
      }

      // Add UTM parameters for tracking
      if (prefillOptions?.utm) {
        const { source, medium, campaign, content } = prefillOptions.utm;
        if (source) url += `&utm_source=${encodeURIComponent(source)}`;
        if (medium) url += `&utm_medium=${encodeURIComponent(medium)}`;
        if (campaign) url += `&utm_campaign=${encodeURIComponent(campaign)}`;
        if (content) url += `&utm_content=${encodeURIComponent(content)}`;
      }

      // Initialize inline widget
      window.Calendly.initInlineWidget({
        url,
        parentElement: containerRef.current,
        prefill: {
          name: prefillOptions?.name,
          email: prefillOptions?.email,
        },
      });
    }

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, prefillOptions]);

  // Handle escape key to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-[600px] h-[90vh] max-h-[900px] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        {/* Calendly Inline Embed Container */}
        <div
          ref={containerRef}
          className="flex-1 w-full min-h-0 overflow-auto"
        />
      </div>
    </div>
  );
};

// TypeScript declaration for Calendly global
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string; prefill?: { name?: string; email?: string } }) => void;
      initInlineWidget: (options: { url: string; parentElement: HTMLElement; prefill?: { name?: string; email?: string } }) => void;
      initBadgeWidget: (options: any) => void;
      closePopupWidget: () => void;
    };
  }
}
