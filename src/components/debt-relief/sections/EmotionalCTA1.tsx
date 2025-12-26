import React from 'react';
import { ArrowRight } from 'lucide-react';
import debtReliefCta01 from '@/assets/debt-relief-cta-01.png';
import PoweredByMesaGroup from '@/components/PoweredByMesaGroup';

const EmotionalCTA1 = () => {
  return (
    <section
      className="relative h-[400px] md:h-[500px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${debtReliefCta01})`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
          Tired of Drowning in Debt While Creditors Take Everything You've Worked For?
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Multiple creditor calls every day. Watching your bank account drained by minimum payments that never touch the principal. You can't afford basic necessities while interest piles up. Every night you lie awake calculating numbers that don't add up—trapped in a cycle that steals your peace and your future.
        </p>
        <div className="inline-block">
          <a
            href="https://calendly.com/d/z7p-zgg-z6c/debt-help-consultation?embed_domain=mesagroupcapital.com&embed_type=Inline&utm_source=wl&utm_term=mesagroup&hide_gdpr_banner=1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-8 py-4 inline-flex items-center justify-center gap-2"
          >
            Stop the Debt Spiral
            <ArrowRight className="w-5 h-5" />
          </a>
          <PoweredByMesaGroup variant="dark" className="mt-4" />
        </div>
      </div>
    </section>
  );
};

export default EmotionalCTA1;
