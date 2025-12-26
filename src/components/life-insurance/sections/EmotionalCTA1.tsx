import React from 'react';
import ctaImage from '@/assets/life-insurance-cta-01.png';
import PoweredByPolicyGenius from '@/components/PoweredByPolicyGenius';

const EmotionalCTA1 = () => {
  const handleClick = () => {
    window.open('https://www.policygenius.com/mesa-group-capital-life/?show_prices=true&utm_campaign=811&utm_content=&utm_medium=affiliate&utm_source=Novae+', '_blank', 'noopener,noreferrer');
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
          Tired of Lying Awake Wondering What Happens to Your Family If Something Happens to You?
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md">
          The mortgage. College tuition. Daily expenses your family depends on. Every day without coverage is a gamble with everything they've built their lives around. You know you need protection—but the quotes seem overwhelming and you keep putting it off.
        </p>
        <div className="inline-block">
          <button
            onClick={handleClick}
            className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-8 py-4"
          >
            Protect Your Family Now →
          </button>
          <PoweredByPolicyGenius variant="dark" className="mt-3" />
        </div>
      </div>
    </section>
  );
};

export default EmotionalCTA1;
