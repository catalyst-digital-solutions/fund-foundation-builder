import React from 'react';
import ctaImage from '@/assets/credit-cards-cta-01.png';

const EmotionalCTA1 = () => {
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
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
          Tired of Seeing "DECLINED" While Everyone Else Earns Rewards on Every Purchase?
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Another rejection. Another form asking for perfect credit you don't have. You watch friends earn cash back and travel rewards while you're stuck paying cash for everything—no credit building, no benefits, no path forward.
        </p>
        <button
          onClick={handleClick}
          className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-8 py-4"
        >
          Find Cards You Qualify For →
        </button>
        <p className="text-sm text-white mt-4 drop-shadow-md">
          Powered by SuperMoney
        </p>
      </div>
    </section>
  );
};

export default EmotionalCTA1;
