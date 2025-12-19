import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useCalendly, CalendlyPrefillOptions } from '@/hooks/useCalendly';
import { CalendlyModal } from './CalendlyModal';

interface CalendlyPopupButtonProps {
  /** Button text */
  text?: string;
  /** Custom className for styling (will merge with default button styles) */
  className?: string;
  /** Show arrow icon */
  showArrow?: boolean;
  /** Pre-fill options for Calendly form */
  prefillOptions?: CalendlyPrefillOptions;
  /** Custom onClick handler (will be called before opening Calendly) */
  onClick?: () => void;
}

/**
 * Reusable button component that opens Calendly popup
 * Uses Mesa Group's standard button styling
 * Automatically adapts to vertical monitors using custom modal
 */
export const CalendlyPopupButton: React.FC<CalendlyPopupButtonProps> = ({
  text = 'Schedule Free Consultation',
  className = '',
  showArrow = true,
  prefillOptions,
  onClick,
}) => {
  const { openPopup, isModalOpen, modalPrefillOptions, closeModal } = useCalendly();

  const handleClick = () => {
    // Call custom onClick if provided
    if (onClick) {
      onClick();
    }

    // Open Calendly popup
    openPopup(prefillOptions);
  };

  // Default Mesa Group button styles
  const defaultStyles = 'inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border-2 border-amber-500';

  return (
    <>
      <button
        onClick={handleClick}
        className={className || defaultStyles}
        type="button"
      >
        {text}
        {showArrow && <ArrowRight className="w-5 h-5" />}
      </button>

      {/* Custom modal for vertical monitors */}
      <CalendlyModal
        isOpen={isModalOpen}
        onClose={closeModal}
        prefillOptions={modalPrefillOptions}
      />
    </>
  );
};

/**
 * Variant for hero sections with larger styling
 */
export const CalendlyPopupButtonLarge: React.FC<CalendlyPopupButtonProps> = (props) => {
  return (
    <CalendlyPopupButton
      {...props}
      className={props.className || 'inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-gray-900 font-bold text-xl rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all'}
    />
  );
};

/**
 * Variant for text-style links (less prominent)
 */
export const CalendlyPopupLink: React.FC<CalendlyPopupButtonProps> = (props) => {
  const { openPopup, isModalOpen, modalPrefillOptions, closeModal } = useCalendly();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (props.onClick) {
      props.onClick();
    }
    openPopup(props.prefillOptions);
  };

  return (
    <>
      <a
        href="#"
        onClick={handleClick}
        className={props.className || 'text-amber-600 hover:text-amber-700 underline font-semibold'}
      >
        {props.text || 'Schedule a consultation'}
      </a>

      {/* Custom modal for vertical monitors */}
      <CalendlyModal
        isOpen={isModalOpen}
        onClose={closeModal}
        prefillOptions={modalPrefillOptions}
      />
    </>
  );
};
