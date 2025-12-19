import React from 'react';
import { CheckCircle, Clock, Shield, TrendingDown, ArrowRight } from 'lucide-react';
import PoweredBySuperMoney from '@/components/PoweredBySuperMoney';

const HeroSection = () => {
  const openAffiliateLink = () => {
    window.open('https://track.supermoney.com/aff_c?offer_id=1634&aff_id=2815&utm_source=mesa&utm_medium=website&utm_campaign=debt_consolidation', '_blank', 'noopener,noreferrer');
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
              Combine Your Debts Into <span className="text-[#f9c65d]">One Simple Payment</span> with Lower Rates
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Stop juggling multiple payments and high interest rates. Get a debt consolidation loan 
              from $5,000 to $100,000 to pay off credit cards, medical bills, and other debts—all with one predictable monthly payment.
            </p>

            {/* Key Benefits */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <TrendingDown className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Lower your average interest rate from 20%+ to as low as 5.99% APR</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">One monthly payment instead of 5+ separate bills</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Get approved and funded in as fast as 24-48 hours</span>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Soft credit pull won't affect your credit score</span>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="inline-block">
              <button
                onClick={openAffiliateLink}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-900 bg-[#f9c65d] hover:bg-[#bb9446] rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-[#bb9446]"
              >
                Get Started - Compare Consolidation Offers Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <PoweredBySuperMoney className="mt-3" />
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 mt-8">
            <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f9c65d] to-[#bb9446] border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#bb9446] to-[#f9c65d] border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f9c65d] to-[#bb9446] border-2 border-white"></div>
              </div>
              <div className="text-sm text-gray-700">
                <div className="font-semibold">Join thousands who simplified their debt</div>
                <div className="text-gray-600">Average client saves $300/month in interest</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f9c65d] to-[#bb9446] rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <span className="text-sm font-medium text-gray-600">Before vs After Consolidation</span>
                </div>
                <div className="space-y-6">
                  <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <div className="text-sm text-red-700 font-medium mb-2">Before: 5 Separate Payments</div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Credit Card 1 (22% APR)</span>
                      <span>$180/mo</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Credit Card 2 (24% APR)</span>
                      <span>$150/mo</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Medical Bill</span>
                      <span>$100/mo</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Store Card (26% APR)</span>
                      <span>$75/mo</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Personal Loan (18% APR)</span>
                      <span>$200/mo</span>
                    </div>
                    <div className="border-t border-red-200 mt-2 pt-2">
                      <div className="flex justify-between font-bold text-red-700">
                        <span>Total</span>
                        <span>$705/mo</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <div className="text-sm text-green-700 font-medium mb-2">After: 1 Simple Payment</div>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-2xl font-bold text-green-700">$450/mo</div>
                        <div className="text-sm text-green-600">at 8.99% APR</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-700">Save $255/mo</div>
                        <div className="text-sm text-green-600">$3,060/year</div>
                      </div>
                    </div>
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