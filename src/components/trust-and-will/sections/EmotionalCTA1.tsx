import React from 'react';
import ctaImage from '@/assets/trust-and-will-cta-01.png';

const EmotionalCTA1 = () => {
  const handleClick = () => {
    window.open('https://trustandwill.com/?utm_source=novae&utm_medium=partnerships&p_id=110&c_id=mesagroup', '_blank', 'noopener,noreferrer');
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
          Tired of Knowing You Need a Will But Putting It Off Another Year?
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Without a plan, the state decides who raises your kids and who gets your assets. Family fights in probate court. Thousands in legal fees. You know it's critical—but attorney costs and complexity keep you frozen while your family remains vulnerable.
        </p>
        <button
          onClick={handleClick}
          className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-8 py-4"
        >
          Protect Your Family Today →
        </button>
        <p className="text-sm text-white mt-4 drop-shadow-md">
          Powered by estateOS
        </p>
      </div>
    </section>
  );
};

export default EmotionalCTA1;
