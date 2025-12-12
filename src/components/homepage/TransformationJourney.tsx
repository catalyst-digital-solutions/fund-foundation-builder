import React from 'react';
import { Eye, TrendingUp, Key, Car, Home, Unlock, Building } from 'lucide-react';

export default function TransformationJourney() {
  return (
    <section className="relative overflow-hidden">
      
      {/* Vision Opener - Dark Blue Background */}
      <div className="bg-gradient-to-b from-blue-900 to-blue-800 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-700/50 mb-6">
            <Eye className="w-8 h-8 md:w-10 md:h-10 text-amber-400" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Imagine Your Life 6 Months From Now
          </h2>
        </div>
      </div>

      {/* Milestone 1: Credit Transformation */}
      <div className="bg-gradient-to-b from-blue-800 to-blue-700 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-600/50 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-amber-400" />
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-lg md:text-xl text-white leading-relaxed">
                You check your credit score and it's climbed over <span className="font-bold text-amber-400">100 points</span>. 
                The collections are gone. The late payments—removed. Your report is clean.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Milestone 2: Apartment Approval */}
      <div className="bg-gradient-to-b from-blue-700 to-blue-600 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-500/50 flex items-center justify-center">
                <Key className="w-6 h-6 md:w-8 md:h-8 text-amber-400" />
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-lg md:text-xl text-white leading-relaxed">
                You apply for that apartment you've been eyeing. <span className="font-bold text-green-400">Approved.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Milestone 3: Car Dealership Win */}
      <div className="bg-gradient-to-b from-blue-600 to-blue-500 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-400/50 flex items-center justify-center">
                <Car className="w-6 h-6 md:w-8 md:h-8 text-amber-400" />
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-lg md:text-xl text-white leading-relaxed">
                You walk into the car dealership with confidence instead of dread. The finance manager comes back smiling. 
                Approved at <span className="font-bold text-amber-400">6.9%</span> instead of <span className="line-through text-red-300">18%</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Milestone 4: Homeownership & Legacy - Peak Emotional */}
      <div className="bg-gradient-to-b from-blue-500 via-blue-400 to-amber-900 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-amber-800/70 flex items-center justify-center">
                <Home className="w-6 h-6 md:w-8 md:h-8 text-amber-300" />
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-lg md:text-xl text-white leading-relaxed">
                You tell your kids you're buying a house. They don't have to move again. 
                You're building something they can inherit.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Declaration - Transition Section */}
      <div className="bg-gradient-to-b from-amber-900 to-amber-800 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl md:text-2xl font-bold text-white leading-tight">
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
