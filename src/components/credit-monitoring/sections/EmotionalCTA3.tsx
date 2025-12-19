import React from 'react';
import ctaImage from '@/assets/credit-monitoring-cta-03.png';
import smartcreditLogoLight from '@/assets/smartcredit-logo-light.png';

const EmotionalCTA3 = () => {
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
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
          Sleep Soundly Knowing Your Credit Is Protected. Catch Fraud the Moment It Happens.
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Imagine waking up to instant alerts—not devastating surprises months later. Your family covered with $1M fraud insurance. Your credit score rising as you dispute errors and build strategically. Complete peace of mind knowing you'll catch threats before they destroy your financial future. That security you deserve is one decision away.
        </p>
        <button
          onClick={handleClick}
          className="inline-flex items-center gap-2 text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-12 py-5"
        >
          Claim Your Peace of Mind →
        </button>
        <div className="flex items-center justify-center gap-2 mt-4">
          <span className="text-sm text-white drop-shadow-md">Powered by</span>
          <img src={smartcreditLogoLight} alt="SmartCredit" className="h-5" />
        </div>
      </div>
    </section>
  );
};

export default EmotionalCTA3;
