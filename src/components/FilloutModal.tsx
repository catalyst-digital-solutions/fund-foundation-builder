import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

// Extend Window interface for Fillout
declare global {
  interface Window {
    Fillout?: {
      initializeEmbeds?: () => void;
    };
  }
}

interface FilloutModalProps {
  isOpen: boolean;
  onClose: () => void;
  formId?: string;
  partner?: string;
  height?: string;
}

const FilloutModal: React.FC<FilloutModalProps> = ({
  isOpen,
  onClose,
  formId = 'tWKyZhPw3hus',
  partner = 'MESA GROUP CAPITAL',
  height = '600px'
}) => {
  const [userIp, setUserIp] = useState<string>('');

  useEffect(() => {
    // Fetch user's IP address
    fetch('https://api64.ipify.org?format=json')
      .then(res => res.json())
      .then(data => setUserIp(data.ip))
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!isOpen || !userIp) return;

    const formWrapper = document.getElementById('fillout-form-wrapper');
    if (!formWrapper) return;

    // Clear existing content completely
    formWrapper.innerHTML = '';

    // Small delay to ensure cleanup is complete
    const timeoutId = setTimeout(() => {
      // Create form container
      const formContainer = document.createElement('div');
      formContainer.style.width = '100%';
      formContainer.style.height = height;
      formContainer.setAttribute('data-fillout-id', formId);
      formContainer.setAttribute('data-fillout-embed-type', 'standard');
      formContainer.setAttribute('data-fillout-inherit-parameters', '');
      formContainer.setAttribute('data-fillout-dynamic-resize', '');
      formContainer.setAttribute('data-fillout-domain', 'form.advisorhub.io');
      formContainer.setAttribute('data-partner', partner);
      formContainer.setAttribute('data-ip', userIp);

      formWrapper.appendChild(formContainer);

      // Force script reload to reinitialize Fillout
      const existingScript = document.querySelector('script[src="https://server.fillout.com/embed/v1/"]');

      if (existingScript) {
        // Remove and re-add script to force reinitialization
        existingScript.remove();

        // Small delay before re-adding script
        setTimeout(() => {
          const script = document.createElement('script');
          script.src = 'https://server.fillout.com/embed/v1/';
          script.async = true;
          document.body.appendChild(script);
        }, 50);
      } else {
        // Load script for the first time
        const script = document.createElement('script');
        script.src = 'https://server.fillout.com/embed/v1/';
        script.async = true;
        document.body.appendChild(script);
      }
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      // Cleanup on unmount
      if (formWrapper) {
        formWrapper.innerHTML = '';
      }
    };
  }, [isOpen, userIp, formId, partner, height]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl mx-4 bg-white rounded-lg shadow-2xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Business Funding Application</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Content */}
        <div className="overflow-y-auto" style={{ maxHeight: 'calc(90vh - 64px)' }}>
          <div id="fillout-form-wrapper" className="p-4"></div>
        </div>
      </div>
    </div>
  );
};

export default FilloutModal;
