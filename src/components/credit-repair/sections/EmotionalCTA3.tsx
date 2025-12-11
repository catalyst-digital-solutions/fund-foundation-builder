import React from 'react';
import ctaImage from '@/assets/credit-repair-cta-03.png';
import PoweredByMesaGroup from '@/components/PoweredByMesaGroup';

const EmotionalCTA3 = () => {
  const handleClick = () => {
    window.open('https://portal.mesagroupconsulting.com//portal-signUp/signup.jsp?id=MjI1cm9wbjdDZFc1U1d0REI0NnNJdz09', '_blank', 'noopener,noreferrer');
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
          Picture Your Score at 720. See Yourself Getting Approved. Imagine Saving $15,000 in Interest.
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Imagine checking your credit in 90 days—watching those negative items disappear. Getting that car loan at 4% instead of 18%. Qualifying for the mortgage you've been dreaming about. Refinancing debt and pocketing thousands in savings. That financial freedom you deserve is one decision away.
        </p>
        <div className="inline-block">
          <button 
            onClick={handleClick}
            className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-lg font-semibold px-8 py-4"
          >
            Claim Your Fresh Start →
          </button>
          <PoweredByMesaGroup variant="dark" className="mt-4" />
        </div>
      </div>
    </section>
  );
};

export default EmotionalCTA3;
