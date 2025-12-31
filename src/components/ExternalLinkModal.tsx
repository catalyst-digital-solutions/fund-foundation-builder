import React, { useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

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
  // Open popup window when modal is triggered
  useEffect(() => {
    if (!isOpen) return;

    // Calculate popup dimensions (80% of screen)
    const width = Math.min(1400, window.screen.width * 0.8);
    const height = Math.min(900, window.screen.height * 0.8);
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;

    // Open popup window
    const popup = window.open(
      url,
      'creditily_signup',
      `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes,status=yes,toolbar=no,menubar=no,location=yes`
    );

    // Focus the popup
    if (popup) {
      popup.focus();
    }

    // Close the modal immediately after opening popup
    onClose();
  }, [isOpen, url, onClose]);

  // Render confirmation dialog
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
            <ExternalLink className="w-6 h-6 text-amber-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Opening Signup Page</h3>
            <p className="text-sm text-gray-600">You'll be redirected to complete your registration</p>
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-3 rounded">
          <p className="text-sm text-gray-700">
            <strong>Note:</strong> A popup window will open. If you don't see it, check your browser's popup blocker.
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ExternalLinkModal;
