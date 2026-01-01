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
      // Trigger GHL's native popup by clicking the iframe
      const iframe = document.getElementById('popup-87XreQhYJtAAT7XwLE0p') as HTMLIFrameElement;
      if (iframe) {
        iframe.click();
      }
      // Close our wrapper immediately since GHL will show its own modal
      onClose();
    }
  }, [isOpen, onClose]);

  // Render the hidden GHL iframe that the embed script needs
  // Removed auto-trigger attributes to prevent auto-opening
  return (
    <iframe
      src="https://link.mesagroupconsulting.com/widget/form/87XreQhYJtAAT7XwLE0p"
      style={{ display: 'none', width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
      id="popup-87XreQhYJtAAT7XwLE0p"
      data-layout='{"id":"POPUP"}'
      data-trigger-type="click"
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
