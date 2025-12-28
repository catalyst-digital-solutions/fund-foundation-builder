import React from 'react';
import { CalendlyPopupButton } from '@/components/CalendlyPopupButton';
import PoweredByMesaGroup from '@/components/PoweredByMesaGroup';

interface DualCTAButtonsProps {
  onQualifyClick: () => void;
  utmContent?: string;
}

const DualCTAButtons: React.FC<DualCTAButtonsProps> = ({ onQualifyClick, utmContent = 'cta' }) => {
  return (
    <div className="flex flex-col items-center mt-8">
      <div className="flex flex-col sm:flex-row gap-4 mb-3">
        <CalendlyPopupButton
          text="Book Your Free Funding Consultation"
          className="inline-flex items-center justify-center gap-2 text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-lg font-semibold px-8 py-4 text-center hover:scale-105"
          showArrow={false}
          prefillOptions={{
            customAnswers: {
              serviceType: 'Business services',
              primaryGoal: 'Access business funding'
            },
            utm: {
              source: 'zero-interest-funding-page',
              medium: 'website',
              campaign: 'zero-interest-funding',
              content: utmContent
            }
          }}
        />

        <button
          onClick={onQualifyClick}
          className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 text-lg font-semibold px-8 py-4 rounded-lg border-2 border-gray-300 hover:bg-gray-50 transition-all duration-200 text-center hover:scale-105"
        >
          See If You Qualify
        </button>
      </div>
      <PoweredByMesaGroup />
    </div>
  );
};

export default DualCTAButtons;
