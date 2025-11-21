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
          What If Building Business Credit Could Unlock $150,000 Without Touching Your Personal Assets?
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Mesa Group Capital doesn't just file paperwork—we build the financial foundation your business deserves. Our proven 4-stage process has helped 720+ Bakersfield business owners separate their personal lives from business risk while accessing serious funding. We see your potential where traditional lenders see only credit scores. This isn't about more debt on your shoulders—it's about building credit in your business's name so you can finally breathe easy.
        </p>
        <button className="bg-[#f9c65d] hover:bg-[#bb9446] text-[#3E3E3E] font-bold px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl">
          Discover Your Path Forward →
        </button>
      </div>
    </section>
  );
};

export default EmotionalCTA2;
