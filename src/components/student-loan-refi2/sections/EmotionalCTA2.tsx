import React from 'react';

const EmotionalCTA2 = () => {
  return (
    <section 
      className="relative h-[400px] md:h-[500px] flex items-center justify-center bg-cover bg-center" 
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&q=80')" 
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
        <button className="bg-[#f9c65d] hover:bg-[#bb9446] text-[#3E3E3E] font-bold px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl">
          See Your New Rate Now →
        </button>
      </div>
    </section>
  );
};

export default EmotionalCTA2;
