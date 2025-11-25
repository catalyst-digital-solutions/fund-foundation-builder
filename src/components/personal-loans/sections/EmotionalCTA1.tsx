import React from 'react';
import ctaImage from '@/assets/personal-loans-cta-01.png';

const EmotionalCTA1 = () => {
  const openAffiliateLink = () => {
    window.open('https://track.supermoney.com/aff_c?offer_id=1618&aff_id=2815&utm_source=mesa&utm_medium=website&utm_campaign=personal_loans', '_blank', 'noopener,noreferrer');
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
          Tired of Being Trapped by High-Interest Payments That Keep You Struggling?
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Every month you're drowning in multiple payments—credit cards, medical bills, unexpected expenses—with rates that make it impossible to get ahead. You work hard, but your debt keeps growing. You deserve better than living paycheck to paycheck, stressed about money while your financial goals slip further away.
        </p>
        <button 
          onClick={openAffiliateLink}
          className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-8 py-4"
        >
          Find Your Solution Now →
        </button>
      </div>
    </section>
  );
};

export default EmotionalCTA1;
