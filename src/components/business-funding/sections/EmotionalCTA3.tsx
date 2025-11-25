import React from 'react';
import ctaImage from '@/assets/business-funding-cta-03.png';

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
          Picture Your Business Thriving. See Yourself Seizing Every Opportunity.
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Imagine accepting that major contract without hesitation. Opening your second location this quarter. Investing in equipment that multiplies your capacity. Paying yourself what you actually deserve. That's not fantasy—it's what happens with the right funding partner. Your breakthrough is one decision away.
        </p>
        <button className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-8 py-4">
          Start Your Growth Journey →
        </button>
      </div>
    </section>
  );
};

export default EmotionalCTA3;
