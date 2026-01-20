import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GHL_NEWSLETTER_FORM_URL = 'https://link.mesagroupconsulting.com/widget/form/87XreQhYJtAAT7XwLE0p';

export const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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
        className="relative w-full max-w-[500px] h-auto max-h-[90vh] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden"
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

        {/* GHL Form Embed */}
        <iframe
          src={GHL_NEWSLETTER_FORM_URL}
          title="Newsletter Signup Form"
          className="flex-1 w-full min-h-[520px] border-0"
          allow="geolocation; microphone; camera"
        />
      </div>
    </div>
  );
};
