import { useEffect } from 'react';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    // Load GHL form embed script once on mount
    const script = document.createElement('script');
    script.src = 'https://link.mesagroupconsulting.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Trigger GHL's native popup by dispatching a click event on the hidden iframe
      const iframe = document.getElementById('popup-87XreQhYJtAAT7XwLE0p');
      if (iframe) {
        // GHL's form embed script will handle showing the popup
        const event = new Event('click', { bubbles: true });
        iframe.dispatchEvent(event);
      }
      // Close our wrapper immediately since GHL will show its own modal
      onClose();
    }
  }, [isOpen, onClose]);

  // Render the hidden GHL iframe that the embed script needs
  return (
    <iframe
      src="https://link.mesagroupconsulting.com/widget/form/87XreQhYJtAAT7XwLE0p"
      style={{ display: 'none' }}
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
  );
};
