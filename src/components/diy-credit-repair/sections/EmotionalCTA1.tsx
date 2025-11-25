import React from 'react';
import ctaImage from '@/assets/diy-credit-repair-cta-01.png';

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
          Tired of Watching Your Dreams Get Denied While Paying $1,500+ to Fix Errors You Could Dispute Yourself?
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Every loan rejection. Every "sorry, you don't qualify." Every month watching your score stay stuck while credit repair companies charge thousands for work you can do yourself. Those inaccuracies aren't going away on their own—but you don't need to spend a fortune to fix them.
        </p>
        <button className="bg-[#f9c65d] hover:bg-[#bb9446] text-[#3E3E3E] font-bold px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl">
          Take Control of Your Credit →
        </button>
      </div>
    </section>
  );
};

export default EmotionalCTA1;
