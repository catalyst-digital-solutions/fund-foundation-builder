import React from 'react';
import ctaImage from '@/assets/credit-monitoring-cta-01.png';

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
          Tired of Lying Awake Wondering If Someone's Stealing Your Identity Right Now?
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Every notification could be fraud. Every unfamiliar charge could be the start of identity theft. Nine million Americans become victims each year—and most don't know until the damage is done. You check your account obsessively, but you still don't have real answers or protection.
        </p>
        <button className="bg-[#f9c65d] hover:bg-[#bb9446] text-[#3E3E3E] font-bold px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl">
          Stop Worrying, Start Monitoring →
        </button>
      </div>
    </section>
  );
};

export default EmotionalCTA1;
