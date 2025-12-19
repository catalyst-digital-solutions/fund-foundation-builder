import React from 'react';
import { Building2, CheckCircle } from 'lucide-react';

const LenderNetwork = () => {
  const networkFeatures = [
    "Banks specializing in debt consolidation",
    "Credit unions with competitive rates",
    "Online lenders with fast approval",
    "Lenders for various credit profiles"
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Access to <span className="text-[#f9c65d]">30+ Trusted Lenders</span>
          </h2>
          <p className="text-xl text-gray-700">
            We partner with lenders who specialize in debt consolidation to give you 
            the best chance of approval and the most competitive rates.
          </p>
        </div>

        {/* Network Grid */}
        <div className="bg-gradient-to-br from-gray-50 to-[#fff8e7] rounded-2xl p-8 md:p-12 border-2 border-[#bb9446]/30">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Icon & Description */}
            <div>
              <div className="w-20 h-20 bg-[#bb9446] rounded-2xl flex items-center justify-center mb-6">
                <Building2 className="w-10 h-10 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Lending Network Includes:
              </h3>
              <div className="space-y-4">
                {networkFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-4xl font-bold text-[#3e3e3e] mb-2">30+</div>
                <div className="text-sm text-gray-700">Lending Partners</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-4xl font-bold text-[#3e3e3e] mb-2">$100K</div>
                <div className="text-sm text-gray-700">Max Loan Amount</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-4xl font-bold text-[#3e3e3e] mb-2">5.99%</div>
                <div className="text-sm text-gray-700">Starting APR</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-4xl font-bold text-[#3e3e3e] mb-2">84</div>
                <div className="text-sm text-gray-700">Max Term (months)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Note */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            All lenders in our network are licensed financial institutions. 
            We carefully vet each partner to ensure fair practices and transparent terms.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LenderNetwork;