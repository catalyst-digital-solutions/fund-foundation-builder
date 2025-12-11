import React from 'react';
import ctaImage from '@/assets/business-debt-relief-cta-01.png';
import PoweredByMesaGroup from '@/components/PoweredByMesaGroup';

const EmotionalCTA1 = () => {
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
          Tired of Watching Your Business Drown While Creditors Take Everything You've Built?
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Every day brings more collection calls, more threats, more sleepless nights wondering if today's the day you lose it all. Your business is gasping for air while debt payments consume every dollar of profit. You've poured your heart into building something—but debt is stealing your dream while competitors thrive and you're trapped watching it all slip away.
        </p>
        <div className="inline-block">
          <a
            href="https://mesagroupcapital.com/for-businesses/debt-relief"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-8 py-4 inline-block"
          >
            Stop the Debt Spiral →
          </a>
          <PoweredByMesaGroup variant="dark" className="mt-4" />
        </div>
      </div>
    </section>
  );
};

export default EmotionalCTA1;
