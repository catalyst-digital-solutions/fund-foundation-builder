import React from 'react';
import ctaImage from '@/assets/credit-monitoring-cta-02.png';

const EmotionalCTA2 = () => {
  const handleClick = () => {
    window.open('https://smartcredit.com/join/?PID=24603&planType=PREMIUM', '_blank', 'noopener,noreferrer');
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
          What If You Could See EVERYTHING on Your Credit—Across All 3 Bureaus—With $1M Fraud Protection?
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Through SmartCredit®, monitor Experian, Equifax, and TransUnion 24/7 with instant fraud alerts. Get $1 Million family fraud insurance. Catch identity theft before it ruins your credit. Track your score daily and dispute errors instantly. Mesa Group Capital gives you complete visibility and ironclad protection.
        </p>
        <button
          onClick={handleClick}
          className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-10 py-4"
        >
          Get Complete Protection Now →
        </button>
        <p className="text-sm text-white mt-4 drop-shadow-md">
          Powered by SmartCredit
        </p>
      </div>
    </section>
  );
};

export default EmotionalCTA2;
