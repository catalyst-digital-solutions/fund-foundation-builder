import React from 'react';
import ctaImage from '@/assets/diy-credit-repair-cta-02.png';

const EmotionalCTA2 = () => {
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
          What If You Had the Same Professional Tools Credit Repair Companies Use—For Just $39/Month?
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Our AI-powered software analyzes your reports, generates legally-compliant dispute letters, and tracks all three bureaus—just like the pros. Mesa Group Capital gives you the tools and guidance to dispute inaccuracies yourself. Save $3,000+ while taking control of your financial future.
        </p>
        <button className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-8 py-4">
          Start Your Free Trial →
        </button>
      </div>
    </section>
  );
};

export default EmotionalCTA2;
