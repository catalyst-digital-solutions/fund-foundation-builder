import React from 'react';
import ctaImage from '@/assets/auto-loan-refi-cta-03.png';

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
          Picture an Extra $150 in Your Pocket Each Month. Imagine Owning Your Car Outright Sooner.
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Imagine redirecting those savings toward a vacation fund, emergency cushion, or paying off your car a year early. Watching your balance drop faster while your credit score climbs. That financial flexibility you deserve is one decision away.
        </p>
        <button className="bg-[#f9c65d] hover:bg-[#bb9446] text-[#3E3E3E] font-bold px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl">
          Start Saving Today →
        </button>
      </div>
    </section>
  );
};

export default EmotionalCTA3;
