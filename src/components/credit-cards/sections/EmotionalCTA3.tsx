import React from 'react';
import ctaImage from '@/assets/credit-cards-cta-03.png';
import supermoneyLogo from '@/assets/supermoney-logo.svg';

const EmotionalCTA3 = () => {
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
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
          Picture Your Credit Score Rising. See Yourself Getting Approved. Imagine Earning Rewards Again.
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Imagine checking your credit score next month—watching it climb. Getting approved for that premium card. Earning 3% cash back on groceries. Booking flights with points you earned. That financial confidence you deserve is one decision away.
        </p>
        <button
          onClick={handleClick}
          className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-8 py-4"
        >
          Start Building Your Credit Future →
        </button>
        <div className="flex items-center justify-center gap-2 mt-4">
          <span className="text-sm text-white drop-shadow-md">Powered by</span>
          <img src={supermoneyLogo} alt="SuperMoney" className="h-5 brightness-0 invert" />
        </div>
      </div>
    </section>
  );
};

export default EmotionalCTA3;
