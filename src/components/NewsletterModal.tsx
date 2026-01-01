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
      // Trigger the hidden link that GHL's script is bound to
      const triggerLink = document.getElementById('ghl-newsletter-trigger');
      if (triggerLink) {
        triggerLink.click();
      }
      // Close our wrapper immediately since GHL will show its own modal
      onClose();
    }
  }, [isOpen, onClose]);

  // Render a hidden link that GHL's script will bind to, plus the hidden iframe
  return (
    <>
      <a
        href="#"
        id="ghl-newsletter-trigger"
        style={{ display: 'none' }}
        data-form="87XreQhYJtAAT7XwLE0p"
      >
        Newsletter
      </a>
      <iframe
        src="https://link.mesagroupconsulting.com/widget/form/87XreQhYJtAAT7XwLE0p"
        style={{ display: 'none' }}
        id="popup-87XreQhYJtAAT7XwLE0p"
        data-layout='{"id":"POPUP"}'
        data-trigger-type="click"
        data-trigger-value="#ghl-newsletter-trigger"
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
    </>
  );
};
