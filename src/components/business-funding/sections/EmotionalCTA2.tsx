import React from 'react';
import ctaImage from '@/assets/business-funding-cta-02.png';

const EmotionalCTA2 = () => {
  const handleClick = () => {
    window.open('https://mesagroupcapital.com/for-businesses/business-funding', '_blank', 'noopener,noreferrer');
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
          What If One Call Could Unlock The Funding You've Been Denied?
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Mesa Group Capital isn't another lender—we're your advocate. With 8 funding solutions and nationwide lender relationships, we match your unique situation with the right capital source. No cookie-cutter rejections. Just expert guidance that opens doors banks closed.
        </p>
        <button
          onClick={handleClick}
          className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-8 py-4"
        >
          Discover Your Options →
        </button>
        <p className="text-sm text-white mt-4 drop-shadow-md">Powered by Mesa Group</p>
      </div>
    </section>
  );
};

export default EmotionalCTA2;
