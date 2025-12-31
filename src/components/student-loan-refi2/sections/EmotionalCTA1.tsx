import React from 'react';
import ctaImage from '@/assets/student-loan-refi-cta-01.png';
import PoweredBySuperMoney from '@/components/PoweredBySuperMoney';

interface EmotionalCTA1Props {
  setIsModalOpen: (open: boolean) => void;
  setSelectedUrl: (url: string) => void;
}

const EmotionalCTA1: React.FC<EmotionalCTA1Props> = ({ setIsModalOpen, setSelectedUrl }) => {
  const handleClick = () => {
    setSelectedUrl('https://track.supermoney.com/aff_c?offer_id=1629&aff_id=2815&utm_source=mesa&utm_medium=website&utm_campaign=student_loan_refi');
    setIsModalOpen(true);
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
          Tired of Watching $800+ Vanish Every Month While Your Loan Balance Barely Moves?
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Your friends are buying homes, starting families, building savings—while your student loans keep you stuck. Every payment at that high rate is throwing money away to interest. You graduated to build a future, not spend a decade trapped by debt you can't escape.
        </p>
        <button
          onClick={handleClick}
          className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-8 py-4"
        >
          Break Free from High Rates →
        </button>
        <PoweredBySuperMoney variant="dark" className="mt-4" />
      </div>
    </section>
  );
};

export default EmotionalCTA1;
