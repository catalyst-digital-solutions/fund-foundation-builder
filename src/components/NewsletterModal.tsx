import { useEffect } from 'react';
import { X } from 'lucide-react';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';

      // Load GHL form embed script
      const script = document.createElement('script');
      script.src = 'https://link.mesagroupconsulting.com/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.style.overflow = 'unset';
        // Clean up script on unmount
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg shadow-xl max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            Get the latest financial insights and tips delivered to your inbox.
          </p>

          {/* GHL Form Iframe */}
          <div className="w-full">
            <iframe
              src="https://link.mesagroupconsulting.com/widget/form/87XreQhYJtAAT7XwLE0p"
              style={{
                width: '100%',
                height: '340px',
                border: 'none',
                borderRadius: '3px'
              }}
              id="popup-87XreQhYJtAAT7XwLE0p"
              data-layout='{"id":"POPUP"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="MGC Website NewsLetter"
              data-height="340"
              data-layout-iframe-id="popup-87XreQhYJtAAT7XwLE0p"
              data-form-id="87XreQhYJtAAT7XwLE0p"
              title="MGC Website NewsLetter"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
