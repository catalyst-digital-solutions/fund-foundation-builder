import React from 'react';
import { Eye, TrendingUp, Unlock, Building } from 'lucide-react';

// Import transformation images
import creditScoreImg from '@/assets/transformation-credit-score.jpeg';
import apartmentKeysImg from '@/assets/transformation-apartment-keys.jpeg';
import carApprovalImg from '@/assets/transformation-car-approval.jpeg';
import familyHomeImg from '@/assets/transformation-family-home.jpeg';

export default function TransformationJourney() {
  return (
    <section className="relative overflow-hidden">
      
      {/* Vision Opener - Sunrise gradient background */}
      <div 
        className="py-16 md:py-20"
        style={{ background: 'linear-gradient(-115deg, #e8c872 0%, #f5d98a 50%, #fcefd3 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#3e3e3e]/20 mb-6">
            <Eye className="w-8 h-8 md:w-10 md:h-10 text-[#3e3e3e]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3e3e3e] leading-tight">
            Imagine Your Life 6 Months From Now
          </h2>
        </div>
      </div>

      {/* Milestone 1: Credit Score - Full width image with text overlay */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img 
          src={creditScoreImg} 
          alt="Man smiling at improved credit score on phone"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="relative h-full flex items-center">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <p className="text-xl md:text-2xl lg:text-3xl text-white leading-relaxed font-medium max-w-2xl">
              You check your credit score and it's climbed over <span className="font-bold text-[#f9c65d]">100 points</span>. 
              The collections are gone. The late payments—removed. Your report is clean.
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
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/50 to-transparent" />
        <div className="relative h-full flex items-center justify-end">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
            <p className="text-xl md:text-2xl lg:text-3xl text-white leading-relaxed font-medium max-w-2xl ml-auto text-right">
              You apply for that apartment you've been eyeing. <span className="font-bold text-green-400">Approved.</span>
            </p>
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="relative h-full flex items-center">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <p className="text-xl md:text-2xl lg:text-3xl text-white leading-relaxed font-medium max-w-2xl">
              You walk into the car dealership with confidence instead of dread. The finance manager comes back smiling. 
              Approved at <span className="font-bold text-[#f9c65d]">6.9%</span> instead of <span className="line-through text-red-300">18%</span>.
            </p>
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
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/50 to-transparent" />
        <div className="relative h-full flex items-center justify-end">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
            <p className="text-xl md:text-2xl lg:text-3xl text-white leading-relaxed font-medium max-w-2xl ml-auto text-right">
              You tell your kids you're buying a house. They don't have to move again. 
              You're building something they can inherit.
            </p>
          </div>
        </div>
      </div>

      {/* Partner Declaration - Transition Section */}
      <div 
        className="py-12 md:py-16"
        style={{ background: 'linear-gradient(-115deg, #f7f0b8 0%, #fbf2cc 50%, #fefaf4 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl md:text-2xl font-bold text-[#3e3e3e] leading-tight">
            This isn't a fantasy. This is what happens when you have the right partner.
          </p>
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
