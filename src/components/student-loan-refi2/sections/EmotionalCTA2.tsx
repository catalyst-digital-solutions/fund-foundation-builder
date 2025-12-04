import React from 'react';
import ctaImage from '@/assets/student-loan-refi-cta-02.png';

const EmotionalCTA2 = () => {
  const handleClick = () => {
    window.open('https://track.supermoney.com/aff_c?offer_id=1629&aff_id=2815&utm_source=mesa&utm_medium=website&utm_campaign=student_loan_refi', '_blank', 'noopener,noreferrer');
  };

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
          What If Refinancing Could Save You $288/Month and Cut Years Off Your Repayment?
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Through our SuperMoney partnership, compare 10+ lenders in minutes—no credit score impact. Lower your rate 1-3%, reduce monthly payments, or pay off faster. We see your potential for financial freedom where lenders see only numbers. One soft credit check could save you $10,000+.
        </p>
        <button
          onClick={handleClick}
          className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-8 py-4"
        >
          See Your New Rate Now →
        </button>
        <p className="text-sm text-white mt-4 drop-shadow-md">
          Powered by SuperMoney
        </p>
      </div>
    </section>
  );
};

export default EmotionalCTA2;
