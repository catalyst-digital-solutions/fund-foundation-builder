import React from 'react';
import { CheckCircle, Clock, Shield, DollarSign, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const openAffiliateLink = () => {
    window.open('https://track.supermoney.com/aff_c?offer_id=1618&aff_id=2815&utm_source=mesa&utm_medium=website&utm_campaign=personal_loans', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 mb-6">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">
                Trusted by 2,500+ Clients | No Impact on Credit Score
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Compare <span className="text-[#f9c65d]">Personal Loans</span> from Multiple Lenders in <span className="text-[#f9c65d]">Minutes</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Get personalized loan offers from $1,000 to $100,000 with competitive rates. 
              One simple application. Multiple lenders competing for your business. Zero impact on your credit score.
            </p>

            {/* Key Benefits */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Borrow $1,000 - $100,000 for any purpose</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Get approved in as fast as 24 hours</span>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Soft credit pull won't affect your credit score</span>
              </div>
              <div className="flex items-start gap-3">
                <DollarSign className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Compare rates from 5.99% APR and up</span>
              </div>
            </div>

            {/* Primary CTA */}
            <button
              onClick={openAffiliateLink}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500"
            >
              Get Started - Compare Loan Offers Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>

            {/* Social Proof */}
            <div className="flex items-center gap-4 mt-8">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-400 border-2 border-white"></div>
              </div>
              <div className="text-sm text-gray-700">
                <div className="font-semibold">Join 2,500+ satisfied clients</div>
                <div className="text-gray-600">who found their perfect loan through Mesa Group</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <span className="text-gray-700 font-medium">Loan Amount</span>
                    <span className="text-2xl font-bold text-[#3e3e3e]">$25,000</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <span className="text-gray-700 font-medium">APR</span>
                    <span className="text-2xl font-bold text-green-600">6.99%</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <span className="text-gray-700 font-medium">Monthly Payment</span>
                    <span className="text-2xl font-bold text-gray-900">$450</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">Term</span>
                    <span className="text-2xl font-bold text-gray-900">60 months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
