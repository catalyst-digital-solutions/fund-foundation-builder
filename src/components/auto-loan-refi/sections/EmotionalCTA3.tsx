import React from 'react';
import ctaImage from '@/assets/auto-loan-refi-cta-03.png';

const EmotionalCTA3 = () => {
  const handleClick = () => {
    window.open('https://track.supermoney.com/aff_c?offer_id=1623&aff_id=2815&utm_source=mesa&utm_medium=website&utm_campaign=auto_loan_refi', '_blank', 'noopener,noreferrer');
  };

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
        <button 
          onClick={handleClick}
          className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-8 py-4"
        >
          Start Saving Today →
        </button>
      </div>
    </section>
  );
};

export default EmotionalCTA3;
