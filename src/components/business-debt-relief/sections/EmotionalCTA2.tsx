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
          What If You Could Eliminate 30-50% of Your Debt Without Filing Bankruptcy?
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Mesa Group Capital negotiates directly with your creditors—settling debts for pennies on the dollar while protecting your business assets. We've helped thousands reduce crushing debt into one affordable payment. No more creditor harassment. No bankruptcy stigma. Just a proven path forward with experts who see your potential where banks see only risk.
        </p>
        <button className="bg-[#f9c65d] hover:bg-[#bb9446] text-[#3E3E3E] font-bold px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl">
          Discover Your Path to Freedom →
        </button>
      </div>
    </section>
  );
};

export default EmotionalCTA2;
