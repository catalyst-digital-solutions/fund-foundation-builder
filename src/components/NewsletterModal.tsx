import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-transparent rounded-lg max-w-lg w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - positioned outside the iframe */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-8 h-8" />
        </button>

        {/* GHL Form Iframe - only rendered when modal is open */}
        <iframe
          ref={iframeRef}
          src="https://link.mesagroupconsulting.com/widget/form/87XreQhYJtAAT7XwLE0p"
          style={{
            width: '100%',
            height: '450px',
            border: 'none',
            borderRadius: '8px'
          }}
          title="MGC Website NewsLetter"
        />
      </div>
    </div>
  );
};
