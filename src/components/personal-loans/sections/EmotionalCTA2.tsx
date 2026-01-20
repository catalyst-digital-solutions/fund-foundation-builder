import React from 'react';
import ctaImage from '@/assets/personal-loans-cta-02.png';
import PoweredBySuperMoney from '@/components/PoweredBySuperMoney';

interface EmotionalCTA2Props {
  setIsModalOpen: (open: boolean) => void;
  setSelectedUrl: (url: string) => void;
}

const EmotionalCTA2: React.FC<EmotionalCTA2Props> = ({ setIsModalOpen, setSelectedUrl }) => {
  const affiliateUrl = 'https://track.supermoney.com/aff_c?offer_id=1618&aff_id=2815&utm_source=mesa&utm_medium=website&utm_campaign=personal_loans';

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
          What If One Simple Decision Could Lower Your Payments and Save You Thousands?
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          Through our SuperMoney partnership, you can compare personalized offers from 100+ lenders in minutes—without affecting your credit score. Imagine consolidating your high-interest debt into one affordable payment with a lower rate. Mesa Group Capital connects you with the right solution, turning your financial stress into a clear path forward.
        </p>
        <a
          href={affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-8 py-4 inline-flex items-center justify-center"
        >
          Compare Your Options Free →
        </a>
        <PoweredBySuperMoney variant="dark" className="mt-4" />
      </div>
    </section>
  );
};

export default EmotionalCTA2;
