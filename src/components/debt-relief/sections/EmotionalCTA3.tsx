import React from 'react';
import { ArrowRight } from 'lucide-react';
import debtReliefCta03 from '@/assets/debt-relief-cta-03.png';
import PoweredByMesaGroup from '@/components/PoweredByMesaGroup';

interface EmotionalCTA3Props {
  openCalendly: () => void;
}

const EmotionalCTA3: React.FC<EmotionalCTA3Props> = ({ openCalendly }) => {
  return (
    <section
      className="relative h-[400px] md:h-[500px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${debtReliefCta03})`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
          Picture Your Phone Silent. See Your Family Smiling. Imagine Finally Being Debt-Free.
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Imagine checking your caller ID and seeing a friend, not a creditor. Having cash flow for groceries and gas without anxiety. Taking your family on that vacation you've been postponing for years. Watching your debt balance drop to zero in 2-4 years—not 20. That financial freedom you deserve is one decision away.
        </p>
        <div className="inline-block">
          <button
            onClick={openCalendly}
            className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-8 py-4 inline-flex items-center justify-center gap-2"
          >
            Start Your Debt-Free Journey
            <ArrowRight className="w-5 h-5" />
          </button>
          <PoweredByMesaGroup variant="dark" className="mt-4" />
        </div>
      </div>
    </section>
  );
};

export default EmotionalCTA3;
