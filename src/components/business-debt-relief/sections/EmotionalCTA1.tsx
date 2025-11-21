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
          Tired of Watching Your Business Drown While Creditors Take Everything You've Built?
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Every day brings more collection calls, more threats, more sleepless nights wondering if today's the day you lose it all. Your business is gasping for air while debt payments consume every dollar of profit. You've poured your heart into building something—but debt is stealing your dream while competitors thrive and you're trapped watching it all slip away.
        </p>
        <button className="bg-[#f9c65d] hover:bg-[#bb9446] text-[#3E3E3E] font-bold px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl">
          Stop the Debt Spiral →
        </button>
      </div>
    </section>
  );
};

export default EmotionalCTA1;
