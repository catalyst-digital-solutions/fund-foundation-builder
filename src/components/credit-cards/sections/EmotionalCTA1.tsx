import React from 'react';

const EmotionalCTA1 = () => {
  return (
    <section 
      className="relative h-[400px] md:h-[500px] flex items-center justify-center bg-cover bg-center" 
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1600&q=80')" 
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
          Tired of Seeing "DECLINED" While Everyone Else Earns Rewards on Every Purchase?
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Another rejection. Another form asking for perfect credit you don't have. You watch friends earn cash back and travel rewards while you're stuck paying cash for everything—no credit building, no benefits, no path forward.
        </p>
        <button className="bg-[#f9c65d] hover:bg-[#bb9446] text-[#3E3E3E] font-bold px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl">
          Find Cards You Qualify For →
        </button>
      </div>
    </section>
  );
};

export default EmotionalCTA1;
