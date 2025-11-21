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
          Picture Your Business Standing Strong on Its Own Credit. Imagine Your Family Protected.
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Imagine getting approved for a $50,000 business line of credit—without a personal guarantee. Purchasing that essential equipment on business terms while your personal credit score actually improves. Sleeping soundly knowing your home is never at risk from business decisions. Taking that major contract without hesitation because your business has the credit foundation to support growth. That's not a distant dream—that's what happens when you build real business credit. Your breakthrough is one decision away.
        </p>
        <button className="bg-[#f9c65d] hover:bg-[#bb9446] text-[#3E3E3E] font-bold px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl">
          Start Building Your Foundation →
        </button>
      </div>
    </section>
  );
};

export default EmotionalCTA3;
