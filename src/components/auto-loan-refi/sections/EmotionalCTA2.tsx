import React from 'react';
import ctaImage from '@/assets/auto-loan-refi-cta-02.png';

const EmotionalCTA2 = () => {
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
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
          What If You Could Lower Your Rate in Minutes and Keep $2,000+ Over the Life of Your Loan?
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          We connect you with lenders competing for your business—often dropping your rate 2-4%. Check your rate without impacting your credit score. Get approved in 24-48 hours. We advocate for you, negotiating terms dealerships never offered.
        </p>
        <button
          onClick={handleClick}
          className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-8 py-4"
        >
          Compare Your Options →
        </button>
        <p className="text-sm text-white mt-4 drop-shadow-md">
          Powered by SuperMoney
        </p>
      </div>
    </section>
  );
};

export default EmotionalCTA2;
