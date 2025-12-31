import React from 'react';
import ctaImage from '@/assets/debt-consolidation-cta-02.png';
import PoweredBySuperMoney from '@/components/PoweredBySuperMoney';

interface EmotionalCTA2Props {
  setIsModalOpen: (open: boolean) => void;
  setSelectedUrl: (url: string) => void;
}

const EmotionalCTA2: React.FC<EmotionalCTA2Props> = ({ setIsModalOpen, setSelectedUrl }) => {
  const handleClick = () => {
    setSelectedUrl('https://track.supermoney.com/aff_c?offer_id=1634&aff_id=2815');
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
          What If One Simple Payment Could Replace the Chaos and Save You Thousands?
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          We've helped thousands simplify their debt into one manageable payment with lower rates. No more juggling due dates or drowning in interest. Mesa Group Capital connects you with solutions others overlook—because financial breathing room shouldn't feel impossible.
        </p>
        <div className="inline-block">
          <button
            onClick={handleClick}
            className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-8 py-4"
          >
            Discover Your Consolidation Options →
          </button>
          <PoweredBySuperMoney variant="dark" className="mt-3" />
        </div>
      </div>
    </section>
  );
};

export default EmotionalCTA2;
