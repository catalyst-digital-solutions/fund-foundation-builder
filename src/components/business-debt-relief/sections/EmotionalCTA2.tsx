import React from 'react';
import ctaImage from '@/assets/business-debt-relief-cta-02.png';
import PoweredByMesaGroup from '@/components/PoweredByMesaGroup';
import { CalendlyPopupButton } from '@/components/CalendlyPopupButton';

const EmotionalCTA2 = () => {
  return (
    <section 
      className="relative h-[400px] md:h-[500px] flex items-center justify-center bg-cover bg-center" 
      style={{ 
        backgroundImage: `url(${ctaImage})` 
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
          What If You Could Eliminate 30-50% of Your Debt Without Filing Bankruptcy?
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Mesa Group Capital negotiates directly with your creditors—settling debts for pennies on the dollar while protecting your business assets. We've helped thousands reduce crushing debt into one affordable payment. No more creditor harassment. No bankruptcy stigma. Just a proven path forward with experts who see your potential where banks see only risk.
        </p>
        <div className="inline-block">
          <CalendlyPopupButton
            text="Discover Your Path to Freedom"
            className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-8 py-4 inline-flex items-center gap-2"
            showArrow={true}
            customUrl="https://calendly.com/d/43c-vpc-dpf/business-debt-help?embed_domain=mesagroupcapital.com&embed_type=Inline&hide_gdpr_banner=1&utm_source=wl&utm_term=mesagroup"
            prefillOptions={{
              customAnswers: {
                serviceType: 'Business services',
                primaryGoal: 'Lower interest rates/debt'
              },
              utm: {
                source: 'business-debt-relief-page',
                medium: 'website',
                campaign: 'business-debt-relief',
                content: 'emotional-cta-2'
              }
            }}
          />
          <PoweredByMesaGroup variant="dark" className="mt-4" />
        </div>
      </div>
    </section>
  );
};

export default EmotionalCTA2;
