import React from 'react';
import ctaImage from '@/assets/debt-consolidation-cta-01.png';

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
          Tired of Juggling Five Different Payments While Your Interest Charges Eat Your Paycheck?
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Credit cards. Personal loans. Medical bills. Every month, different due dates, different amounts, watching hundreds disappear to interest alone. You're working harder but getting nowhere—trapped in a cycle that never ends while life passes by.
        </p>
        <button className="bg-[#f9c65d] hover:bg-[#bb9446] text-[#3E3E3E] font-bold px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl">
          Break Free from Debt Chaos →
        </button>
      </div>
    </section>
  );
};

export default EmotionalCTA1;
