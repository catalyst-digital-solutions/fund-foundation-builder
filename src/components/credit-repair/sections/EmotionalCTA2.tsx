import React from 'react';
import ctaImage from '@/assets/credit-repair-cta-02.png';

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
          What If Expert Credit Specialists Could Remove Those Negative Items While You Focus on Living Your Life?
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Mesa Group Capital's certified credit experts know exactly which items to dispute, which laws to cite, and how to negotiate with creditors for deletions. We've helped 4,200+ clients remove inaccurate items and raise scores an average of 90 points. Let us fight the bureaus while you breathe easier.
        </p>
        <button className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-lg font-semibold px-8 py-4">
          Start Your Credit Transformation →
        </button>
      </div>
    </section>
  );
};

export default EmotionalCTA2;
