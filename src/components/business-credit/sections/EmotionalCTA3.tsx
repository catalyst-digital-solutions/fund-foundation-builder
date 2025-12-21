import React from 'react';
import ctaImage from '@/assets/business-credit-cta-03.png';
import PoweredByMesaGroup from '@/components/PoweredByMesaGroup';
import { CalendlyPopupButton } from '@/components/CalendlyPopupButton';

const EmotionalCTA3 = () => {
  return (
    <section 
      className="relative h-[400px] md:h-[500px] flex items-center justify-center bg-cover bg-center" 
      style={{ 
        backgroundImage: `url(${ctaImage})` 
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
          Picture Your Business Standing Strong on Its Own Credit. Imagine Your Family Protected.
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Imagine $50,000 approved—no personal guarantee. Equipment purchased on business terms. Sleeping soundly knowing your home's protected. Taking that major contract without hesitation. That's what real business credit creates. Your breakthrough is one decision away.
        </p>
        <div className="inline-block">
          <CalendlyPopupButton
            text="Start Building Your Foundation"
            className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-8 py-4 inline-flex items-center gap-2"
            showArrow={true}
            prefillOptions={{
              customAnswers: {
                serviceType: 'Business services',
                primaryGoal: 'Establish/build business credit'
              },
              utm: {
                source: 'business-credit-builder-page',
                medium: 'website',
                campaign: 'business-credit-builder',
                content: 'emotional-cta-3'
              }
            }}
          />
          <PoweredByMesaGroup variant="dark" className="mt-4" />
        </div>
      </div>
    </section>
  );
};

export default EmotionalCTA3;
