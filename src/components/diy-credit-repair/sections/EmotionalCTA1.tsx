import React from 'react';
import ctaImage from '@/assets/diy-credit-repair-cta-01.png';

interface EmotionalCTA1Props {
  setIsModalOpen: (open: boolean) => void;
}

const EmotionalCTA1: React.FC<EmotionalCTA1Props> = ({ setIsModalOpen }) => {
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
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
          You've Been Denied Enough. Why Pay Thousands to Fix It?
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Every rejection. Every "sorry, you don't qualify." Every company charging $1,500+ for disputes you could file yourself. Enough. Those errors aren't going away on their own — but fixing them shouldn't cost a fortune. Creditily gives you the tools. You make the moves.
        </p>
        <button
          onClick={handleClick}
          className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-8 py-4"
        >
          Fix It Yourself for $39.99/mo →
        </button>
        <p className="text-sm text-white mt-4 drop-shadow-md">
          Powered by Mesa Group
        </p>
      </div>
    </section>
  );
};

export default EmotionalCTA1;
