import React, { useRef, useEffect, useState } from 'react';
import { Eye, TrendingUp, Unlock, Building } from 'lucide-react';

// Import transformation images
import creditScoreImg from '@/assets/transformation-credit-score.jpg';
import apartmentKeysImg from '@/assets/transformation-apartment-keys.jpg';
import carApprovalImg from '@/assets/transformation-car-approval.jpg';
import familyHomeImg from '@/assets/transformation-family-home.jpg';
import sunriseCoastlineImg from '@/assets/transformation-sunrise-coastline.jpg';

export default function TransformationJourney() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;

      const rect = parallaxRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress: 0 (bottom of image) when section is at bottom of viewport
      // 1 (top of image) when section reaches top of viewport
      // Progress increases as section moves up the viewport
      const progress = Math.max(0, Math.min(1,
        1 - (rect.bottom / windowHeight)
      ));

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden">
      
      {/* Milestone 1: Credit Score - Combined with "Imagine Your Life" headline */}
      <div className="relative h-[500px] md:h-[600px] overflow-hidden">
        <img 
          src={creditScoreImg} 
          alt="Man smiling at improved credit score on phone"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        <div className="relative h-full flex flex-col items-center justify-center">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-center space-y-6">
            {/* Centered headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Imagine <span className="text-[#f9c65d]">Your Life</span> 6 Months From Now
            </h2>
            
            <p className="text-lg md:text-xl text-white/80 italic pt-2">You check your credit score...</p>
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#f9c65d] leading-none">
              +100 points.
            </p>
            <p className="text-xl md:text-2xl text-white font-light tracking-wide pt-2">
              Collections? <span className="font-semibold">Gone.</span><br />
              Late payments? <span className="font-semibold">Removed.</span><br />
              Your report? <span className="font-semibold text-[#f9c65d]">Clean.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Milestone 2: Apartment Approval - Full width image with text overlay */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img 
          src={apartmentKeysImg} 
          alt="Property manager handing over keys to new apartment"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/60 to-transparent" />
        <div className="relative h-full flex items-center justify-end">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
            <div className="max-w-2xl ml-auto text-right space-y-2">
              <p className="text-lg md:text-xl text-white/80 italic">That apartment you've been eyeing...</p>
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-400 leading-none">
                Approved.
              </p>
              <p className="text-xl md:text-2xl text-white font-light tracking-wide pt-4">
                The keys are yours.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Milestone 3: Car Dealership Win - Full width image with text overlay */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img 
          src={carApprovalImg} 
          alt="Woman shaking hands at car dealership after loan approval"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        <div className="relative h-full flex items-center justify-start">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
            <div className="max-w-2xl mr-auto text-left space-y-2">
              <p className="text-lg md:text-xl text-white/80 italic">You walk into the dealership...</p>
              <p className="text-xl md:text-2xl text-white font-light tracking-wide">
                Not with dread. <span className="font-semibold">With confidence.</span>
              </p>
              <div className="pt-4 flex items-baseline gap-4 flex-wrap justify-start">
                <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#f9c65d]">6.9%</span>
                <span className="text-2xl md:text-3xl text-white/60">not</span>
                <span className="text-3xl md:text-4xl text-red-400 line-through">18%</span>
              </div>
              <p className="text-xl md:text-2xl text-white font-light tracking-wide pt-2">
                The finance manager is <span className="font-semibold text-[#f9c65d]">smiling.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Milestone 4: Homeownership & Legacy - Full width image with text overlay */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img 
          src={familyHomeImg} 
          alt="Happy family in front of their new home with SOLD sign"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/60 to-transparent" />
        <div className="relative h-full flex items-center justify-end">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
            <div className="max-w-2xl ml-auto text-right space-y-2">
              <p className="text-lg md:text-xl text-white/80 italic">"We're buying a house."</p>
              <p className="text-2xl md:text-3xl text-white font-light tracking-wide pt-2">
                They don't have to move again.
              </p>
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#f9c65d] leading-tight pt-4">
                You're building something<br />they can inherit.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Declaration - Parallax Section */}
      <div
        ref={parallaxRef}
        className="relative h-[40vh] md:h-[45vh] overflow-hidden"
      >
        <img
          src={sunriseCoastlineImg}
          alt="Sunrise over coastline"
          className="absolute w-full h-[180%] object-cover"
          style={{
            objectPosition: `center ${scrollProgress * 100}%`,
            top: `${-80 + (scrollProgress * 80)}%`
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight drop-shadow-lg">
              This isn't a <span className="text-[#f9c65d]">fantasy.</span> This is what happens when you have the <span className="text-[#f9c65d]">right partner.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Freedom Trilogy - Three Cards */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1: Freedom */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-200">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                <Unlock className="w-6 h-6 text-amber-600" />
              </div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                You stop living paycheck to paycheck because you consolidated that debt at a fraction of the interest.
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                This is the <span className="text-amber-600">freedom</span> good credit creates.
              </h3>
            </div>

            {/* Card 2: Opportunity */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-200">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-amber-600" />
              </div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                You stop losing sleep because you have estate planning in place—your family is protected.
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                This is the <span className="text-amber-600">opportunity</span> smart money decisions unlock.
              </h3>
            </div>

            {/* Card 3: Legacy */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-200">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                <Building className="w-6 h-6 text-amber-600" />
              </div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                You stop wondering "what if" because you secured that business funding and finally launched.
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                This is the <span className="text-amber-600">legacy</span> Mesa Group helps you build.
              </h3>
            </div>

          </div>
        </div>
      </div>

      {/* Closing Declaration - Final Empowerment */}
      <div className="bg-gradient-to-br from-amber-100 via-amber-50 to-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Your financial past doesn't have to define your <span className="text-amber-600">financial future</span>. 
            <span className="block mt-2">Not anymore.</span>
          </p>
        </div>
      </div>

    </section>
  );
}
