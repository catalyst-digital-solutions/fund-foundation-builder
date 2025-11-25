import React from 'react';
import ctaImage from '@/assets/zero-interest-business-funding-cta-01.png';

const EmotionalCTA1 = () => {
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
          Tired of Watching Your Profits Vanish to Interest Payments?
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Every month, thousands drain away to interest while competitors invest that money into growth. Your cash flow suffers. Your expansion waits. Traditional lenders profit while your business stays stuck.
        </p>
        <button className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-8 py-4">
          Stop the Cash Flow Drain →
        </button>
      </div>
    </section>
  );
};

export default EmotionalCTA1;
