import { useEffect } from 'react';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      // Open GHL form in a centered popup window
      const width = 500;
      const height = 600;
      const left = (window.innerWidth - width) / 2 + window.screenX;
      const top = (window.innerHeight - height) / 2 + window.screenY;

      window.open(
        'https://link.mesagroupconsulting.com/widget/form/87XreQhYJtAAT7XwLE0p',
        'NewsletterSignup',
        `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`
      );

      // Close our state immediately since we opened a popup
      onClose();
    }
  }, [isOpen, onClose]);

  // This component doesn't render anything - it just opens a popup
  return null;
};
