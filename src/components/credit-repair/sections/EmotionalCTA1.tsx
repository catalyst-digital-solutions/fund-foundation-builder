import React from 'react';
import ctaImage from '@/assets/credit-repair-cta-01.png';
import PoweredByMesaGroup from '@/components/PoweredByMesaGroup';

const EmotionalCTA1 = () => {
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
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
          Tired of Missing Opportunities Because of Credit Report Errors?
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Every loan denial. Every "sorry, you don't qualify." Every night worrying your past mistakes will follow you forever. You know some of those items aren't even accurate—but the bureaus won't listen when you try to fix it yourself. Your dreams are on hold while your credit stays broken.
        </p>
        <div className="inline-block">
          <button 
            onClick={handleClick}
            className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-lg font-semibold px-8 py-4"
          >
            Get Your Free Credit Analysis →
          </button>
          <PoweredByMesaGroup variant="dark" className="mt-4" />
        </div>
      </div>
    </section>
  );
};

export default EmotionalCTA1;
