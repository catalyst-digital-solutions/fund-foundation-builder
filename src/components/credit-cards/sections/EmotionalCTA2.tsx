import React from 'react';
import ctaImage from '@/assets/credit-cards-cta-02.png';
import supermoneyLogo from '@/assets/supermoney-logo.svg';

const EmotionalCTA2 = () => {
  const handleClick = () => {
    window.open('https://track.supermoney.com/aff_c?offer_id=596&aff_id=2815', '_blank', 'noopener,noreferrer');
  };

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
          What If You Could See Exactly Which Cards Will Approve You—Before You Apply?
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          No more guessing. No more rejection letters. Mesa Group Capital shows you cards matched to YOUR credit level—with approval odds displayed upfront. Compare rates, rewards, and terms with zero credit score impact. We believe everyone deserves access to the right financial tools.
        </p>
        <button
          onClick={handleClick}
          className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-8 py-4"
        >
          See Your Card Matches Now →
        </button>
        <div className="flex items-center justify-center gap-2 mt-4">
          <span className="text-xs text-white/80 drop-shadow-md">Powered by</span>
          <img src={supermoneyLogo} alt="SuperMoney" className="h-4 brightness-0 invert" />
        </div>
      </div>
    </section>
  );
};

export default EmotionalCTA2;
