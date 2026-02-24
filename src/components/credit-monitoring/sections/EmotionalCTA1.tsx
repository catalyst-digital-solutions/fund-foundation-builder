import React from 'react';
import ctaImage from '@/assets/credit-monitoring-cta-01.png';
import PoweredBySmartCredit from '@/components/PoweredBySmartCredit';

const EmotionalCTA1 = () => {
  const handleClick = () => {
    window.open('https://www.smartcredit.com/join/?PID=53366&planType=PREMIUM', '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      className="relative h-[400px] md:h-[500px] flex items-center justify-center bg-cover bg-center" 
      style={{ 
        backgroundImage: `url(${ctaImage})` 
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
          Worried Your Identity Could Be Stolen?
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Every notification could be fraud. Every unfamiliar charge could be the start of identity theft. Nine million Americans become victims each year—and most don't know until the damage is done. You check your account obsessively, but you still don't have real answers or protection.
        </p>
        <button
          onClick={handleClick}
          className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-10 py-4"
        >
          Stop Worrying, Start Monitoring →
        </button>
        <PoweredBySmartCredit variant="dark" className="mt-4" />
      </div>
    </section>
  );
};

export default EmotionalCTA1;
