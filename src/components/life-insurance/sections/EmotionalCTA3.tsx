import React from 'react';
import ctaImage from '@/assets/life-insurance-cta-03.png';

const EmotionalCTA3 = () => {
  const handleClick = () => {
    window.open('https://policygenius.go2cloud.org/aff_c?offer_id=811&aff_id=2244', '_blank', 'noopener,noreferrer');
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
          Picture Your Family Staying in Their Home. See Your Kids Going to College.
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Imagine knowing your spouse won't have to work three jobs. Your children's education is secured. The mortgage gets paid. Final expenses covered with dignity. That's the peace of mind life insurance creates. Your family's security is one decision away.
        </p>
        <button
          onClick={handleClick}
          className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-8 py-4"
        >
          Secure Your Family's Future →
        </button>
        <p className="text-sm text-white mt-4 drop-shadow-md">
          Powered by Policygenius
        </p>
      </div>
    </section>
  );
};

export default EmotionalCTA3;
