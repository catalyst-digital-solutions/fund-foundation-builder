import React from 'react';
import debtReliefCta02 from '@/assets/debt-relief-cta-02.png';
import PoweredByMesaGroup from '@/components/PoweredByMesaGroup';
import { CalendlyPopupButton } from '@/components/CalendlyPopupButton';

const EmotionalCTA2 = () => {
  return (
    <section
      className="relative h-[400px] md:h-[500px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${debtReliefCta02})`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
          What If You Could Eliminate Up to 50% of Your Debt and Finally Breathe Again?
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Mesa Group Capital negotiates directly with your creditors—settling your debts for pennies on the dollar while you make one affordable payment based on YOUR budget. No more harassment. No more juggling due dates. We handle the creditors while you reclaim your life. We see your potential for freedom where banks see only numbers.
        </p>
        <div className="inline-block">
          <CalendlyPopupButton
            text="Discover Your Path to Freedom"
            className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-8 py-4 inline-flex items-center justify-center gap-2"
            showArrow={true}
            prefillOptions={{
              customAnswers: {
                serviceType: 'Personal/Consumer services',
                primaryGoal: 'Lower interest rates/debt'
              },
              utm: {
                source: 'debt-relief-page',
                medium: 'website',
                campaign: 'debt-relief',
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
