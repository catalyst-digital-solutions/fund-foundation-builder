import React from 'react';
import ctaImage from '@/assets/diy-credit-repair-cta-02.png';

interface EmotionalCTA2Props {
  setIsModalOpen: (open: boolean) => void;
}

const EmotionalCTA2: React.FC<EmotionalCTA2Props> = ({ setIsModalOpen }) => {
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
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
          Everything the Pros Use. A Fraction of the Cost.
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Creditily gives you AI-powered dispute recommendations, professional letter templates, and 3-bureau tracking — the same tools credit repair companies charge thousands for. Now in your hands for just $39.99/mo. No contracts. No upfront fees. Just results.
        </p>
        <button
          onClick={handleClick}
          className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-8 py-4"
        >
          Start Your DIY Journey →
        </button>
        <p className="text-sm text-white mt-4 drop-shadow-md">
          Powered by Mesa Group
        </p>
      </div>
    </section>
  );
};

export default EmotionalCTA2;
