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
          What If You Could See Exactly Which Cards Will Approve You—Before You Apply?
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          No more guessing. No more rejection letters. Mesa Group Capital shows you cards matched to YOUR credit level—with approval odds displayed upfront. Compare rates, rewards, and terms with zero credit score impact. We believe everyone deserves access to the right financial tools.
        </p>
        <button className="bg-[#f9c65d] hover:bg-[#bb9446] text-[#3E3E3E] font-bold px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl">
          See Your Card Matches Now →
        </button>
      </div>
    </section>
  );
};

export default EmotionalCTA2;
