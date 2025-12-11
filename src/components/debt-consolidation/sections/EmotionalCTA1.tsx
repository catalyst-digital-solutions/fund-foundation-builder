import React from 'react';
import ctaImage from '@/assets/debt-consolidation-cta-01.png';
import PoweredBySuperMoney from '@/components/PoweredBySuperMoney';

const EmotionalCTA1 = () => {
  const handleClick = () => {
    window.open('https://track.supermoney.com/aff_c?offer_id=1634&aff_id=2815', '_blank', 'noopener,noreferrer');
  };

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
        <div className="inline-block">
          <button
            onClick={handleClick}
            className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-8 py-4"
          >
            Break Free from Debt Chaos →
          </button>
          <PoweredBySuperMoney variant="dark" className="mt-3" />
        </div>
      </div>
    </section>
  );
};

export default EmotionalCTA1;
