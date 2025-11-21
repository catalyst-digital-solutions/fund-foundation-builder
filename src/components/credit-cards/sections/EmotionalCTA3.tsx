import React from 'react';

const EmotionalCTA3 = () => {
  return (
    <section 
      className="relative h-[400px] md:h-[500px] flex items-center justify-center bg-cover bg-center" 
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600&q=80')" 
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
          Picture Your Credit Score Rising. See Yourself Getting Approved. Imagine Earning Rewards Again.
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Imagine checking your credit score next month—watching it climb. Getting approved for that premium card. Earning 3% cash back on groceries. Booking flights with points you earned. That financial confidence you deserve is one decision away.
        </p>
        <button className="bg-[#f9c65d] hover:bg-[#bb9446] text-[#3E3E3E] font-bold px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl">
          Start Building Your Credit Future →
        </button>
      </div>
    </section>
  );
};

export default EmotionalCTA3;
