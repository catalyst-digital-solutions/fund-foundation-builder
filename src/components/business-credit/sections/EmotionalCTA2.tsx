import React from 'react';
import ctaImage from '@/assets/business-credit-cta-02.png';

const EmotionalCTA2 = () => {
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
          What If Building Business Credit Could Unlock $150,000 Without Touching Your Personal Assets?
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          We've helped 720+ business owners build business credit that unlocks real funding—without personal guarantees. Our proven system separates your personal life from business risk. We see your potential where banks see only numbers. This is your path to breathing easy.
        </p>
        <button className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-8 py-4">
          Discover Your Path Forward →
        </button>
      </div>
    </section>
  );
};

export default EmotionalCTA2;
