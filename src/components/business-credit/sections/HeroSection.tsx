import React from 'react';
import PoweredByMesaGroup from '@/components/PoweredByMesaGroup';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-white via-amber-50 to-white py-12 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-gray-700">
                Mesa Group Capital Business Credit Program
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Build <span className="text-[#f9c65d]">Business Credit</span> That Opens Doors to{' '}
              <span className="text-[#f9c65d]">$150K+</span> in Funding
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Establish business credit completely separate from your personal credit. Protect your personal assets while building the foundation for unlimited business funding opportunities. Our proven 6-12 month program creates credit profiles that access 10-20 times more capital.
            </p>

            {/* Key Benefits List */}
            <div className="space-y-3">
              {[
                'Separate business credit from personal credit',
                'Access $150,000+ in business funding opportunities',
                '12 months of expert coaching and support (Full Service)',
                'Experian Smart Business monitoring included',
                'myNovaeDisputes Manager software for 12 months'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col items-start pt-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://mesagroupcapital.com/business-credit-enroll"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 min-w-[220px]"
                >
                  Get Full Service ($2,495)
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="https://mesagroupcapital.com/bcfs-diy-enroll"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-gray-300 min-w-[220px]"
                >
                  Get DIY Version ($995)
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              <div className="w-full sm:w-auto flex justify-center sm:self-center mt-3">
                <PoweredByMesaGroup />
              </div>
            </div>

            {/* Trust Statistics */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#3e3e3e]">720+</div>
                <div className="text-sm text-gray-600 mt-1">Businesses Helped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#3e3e3e]">$42M+</div>
                <div className="text-sm text-gray-600 mt-1">Capital Secured</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#3e3e3e]">15+</div>
                <div className="text-sm text-gray-600 mt-1">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative lg:block hidden">
            <div className="relative bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl p-8 shadow-2xl">
              <div className="space-y-4">
                {/* Simulated Business Credit Score Display */}
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="text-sm font-medium text-gray-500 mb-2">Business Credit Score</div>
                  <div className="text-5xl font-bold text-green-600">85</div>
                  <div className="text-sm text-gray-600 mt-2">Excellent Business Credit</div>
                </div>
                
                {/* Funding Access Visualization */}
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="text-sm font-medium text-gray-500 mb-4">Funding Access</div>
                  <div className="space-y-3">
                    {[
                      { label: 'Business Credit Cards', amount: '$50,000' },
                      { label: 'Term Loans', amount: '$75,000' },
                      { label: 'Lines of Credit', amount: '$25,000' }
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm text-gray-700">{item.label}</span>
                        <span className="text-sm font-bold text-green-600">{item.amount}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-900">Total Access:</span>
                      <span className="text-xl font-bold text-[#3e3e3e]">$150,000+</span>
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
