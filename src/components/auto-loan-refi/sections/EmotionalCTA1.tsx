import React from 'react';
import ctaImage from '@/assets/auto-loan-refi-cta-01.png';

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
          Tired of Watching Hundreds Vanish Each Month to an Overpriced Car Loan?
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Every payment you make at that high rate is money you'll never see again. Money that could be building savings, paying off debt faster, or just breathing easier. You know you're overpaying—but refinancing seems complicated and you keep putting it off.
        </p>
        <button className="bg-[#f9c65d] hover:bg-[#bb9446] text-[#3E3E3E] font-bold px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl">
          Check Your New Rate →
        </button>
      </div>
    </section>
  );
};

export default EmotionalCTA1;
