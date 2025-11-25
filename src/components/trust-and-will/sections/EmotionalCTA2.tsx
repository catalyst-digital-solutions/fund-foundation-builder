import React from 'react';
import ctaImage from '@/assets/trust-and-will-cta-02.png';

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
          What If You Could Create a Complete Estate Plan in 20 Minutes for Under $200?
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Trust & Will makes it attorney-simple without attorney prices. Answer guided questions online. Get state-specific documents instantly. Name guardians, divide assets, avoid probate—all legally valid. We make protection affordable and achievable.
        </p>
        <button className="bg-[#f9c65d] hover:bg-[#bb9446] text-[#3E3E3E] font-bold px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl">
          Start Your Plan Now →
        </button>
      </div>
    </section>
  );
};

export default EmotionalCTA2;
