import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ExternalLinkModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title?: string;
}

const ExternalLinkModal: React.FC<ExternalLinkModalProps> = ({
  isOpen,
  onClose,
  url,
  title = 'External Site'
}) => {
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Full-screen modal container */}
      <div
        className="relative w-full h-full bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button - fixed in upper right corner */}
        <button
          onClick={onClose}
          className="fixed top-4 right-4 z-[60] p-3 bg-white hover:bg-gray-100 rounded-full shadow-lg border-2 border-gray-300 transition-colors group"
          aria-label="Close"
        >
          <X className="w-6 h-6 text-gray-600 group-hover:text-gray-900" />
        </button>

        {/* Optional title bar */}
        {title && (
          <div className="absolute top-0 left-0 right-0 bg-gray-900 text-white px-6 py-3 text-sm font-medium z-[55]">
            {title}
          </div>
        )}

        {/* Full-screen iframe */}
        <iframe
          src={url}
          className={`w-full h-full border-0 ${title ? 'mt-12' : ''}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
        />
      </div>
    </div>
  );
};

export default ExternalLinkModal;
