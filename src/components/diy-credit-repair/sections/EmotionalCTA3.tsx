import React from 'react';
import ctaImage from '@/assets/diy-credit-repair-cta-03.png';

interface EmotionalCTA3Props {
  setIsModalOpen: (open: boolean) => void;
}

const EmotionalCTA3: React.FC<EmotionalCTA3Props> = ({ setIsModalOpen }) => {
  const handleClick = () => {
    setIsModalOpen(true);
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
          Bridge the Gap — Without Breaking the Bank.
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Approvals instead of denials. Better rates. Thousands saved. You don't need a credit repair company to get there. You just need the tools — and now you have them. $39.99/mo. No contracts. No excuses.
        </p>
        <div className="inline-block">
          <button
            onClick={handleClick}
            className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-8 py-4"
          >
            Begin Your Journey Today →
          </button>
          <p className="text-sm text-white mt-4 drop-shadow-md">Powered by Mesa Group</p>
        </div>
      </div>
    </section>
  );
};

export default EmotionalCTA3;
