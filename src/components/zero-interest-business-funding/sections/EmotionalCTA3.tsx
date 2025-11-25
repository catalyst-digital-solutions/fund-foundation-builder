import React from 'react';
import ctaImage from '@/assets/zero-interest-business-funding-cta-03.png';

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
          Picture Reinvesting Those Interest Savings Into Real Growth.
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Imagine saving $5,000+ in interest and channeling it into marketing that doubles revenue. Hiring that key employee who transforms operations. Buying equipment that multiplies capacity. That's the 0% advantage. Your breakthrough is one call away.
        </p>
        <button className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-8 py-4">
          Start Your 0% Journey →
        </button>
      </div>
    </section>
  );
};

export default EmotionalCTA3;
