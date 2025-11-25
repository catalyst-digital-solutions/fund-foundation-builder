import React from 'react';
import ctaImage from '@/assets/personal-loans-cta-03.png';

const EmotionalCTA3 = () => {
  const openAffiliateLink = () => {
    window.open('https://track.supermoney.com/aff_c?offer_id=1618&aff_id=2815&utm_source=mesa&utm_medium=website&utm_campaign=personal_loans', '_blank', 'noopener,noreferrer');
  };

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
          Picture Yourself Finally Breathing Easy—Bills Paid, Savings Growing, Future Secure.
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Imagine waking up without that knot in your stomach. One manageable payment instead of juggling five. Money left over to build your emergency fund, plan that vacation, start investing. Your financial freedom isn't a dream—it's one decision away. Take control today and watch your stress transform into confidence.
        </p>
        <button 
          onClick={openAffiliateLink}
          className="bg-[#f9c65d] hover:bg-[#bb9446] text-[#3E3E3E] font-bold px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl"
        >
          Start Your Journey Now →
        </button>
      </div>
    </section>
  );
};

export default EmotionalCTA3;
