import React from 'react';
import ctaImage from '@/assets/debt-consolidation-cta-03.png';

const EmotionalCTA3 = () => {
  const handleClick = () => {
    window.open('https://track.supermoney.com/aff_c?offer_id=1634&aff_id=2815', '_blank', 'noopener,noreferrer');
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
          Picture One Payment. Imagine Lower Interest. See Yourself Debt-Free in 3-5 Years.
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Imagine checking one box each month instead of five. Watching your balance actually decrease. Having money left over for savings, for life, for dreams you've postponed. That financial freedom you deserve is one decision away.
        </p>
        <button
          onClick={handleClick}
          className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-8 py-4"
        >
          Start Your Debt-Free Journey →
        </button>
        <p className="text-sm text-white mt-4 drop-shadow-md">
          Powered by SuperMoney
        </p>
      </div>
    </section>
  );
};

export default EmotionalCTA3;
