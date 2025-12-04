import React from 'react';

const WhyBusinessCreditMatters = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Business Credit Changes Everything for Your Company
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Business credit is the single most important financial tool for business growth. Here's why separating your business credit from personal credit is not optional—it's essential.
          </p>
        </div>

        {/* Two-Column Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Without Business Credit */}
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Without Business Credit</h3>
            </div>
            <ul className="space-y-4">
              {[
                'Personal credit at risk with every business decision',
                'Limited to $10,000-$25,000 in business funding',
                'Personal assets exposed to business liabilities',
                'Higher interest rates on business financing',
                'Business growth tied to personal credit limits',
                'Difficult to separate personal and business finances'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* With Business Credit */}
          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">With Business Credit</h3>
            </div>
            <ul className="space-y-4">
              {[
                'Personal credit protected from business decisions',
                'Access to $150,000+ in business funding',
                'Personal assets shielded from business liabilities',
                'Lower interest rates and better terms',
                'Unlimited business growth potential',
                'Clear separation of personal and business finances'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            The Business Credit Advantage
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#3e3e3e] mb-3">10-20x</div>
              <div className="text-gray-700 font-medium">More Funding Access</div>
              <div className="text-sm text-gray-600 mt-2">
                Businesses with established credit access 10-20 times more capital than those without
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#3e3e3e] mb-3">100%</div>
              <div className="text-gray-700 font-medium">Asset Protection</div>
              <div className="text-sm text-gray-600 mt-2">
                Keep your personal assets completely separate from business liabilities
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#3e3e3e] mb-3">6-12</div>
              <div className="text-gray-700 font-medium">Months to Build</div>
              <div className="text-sm text-gray-600 mt-2">
                Typical timeframe to establish meaningful business credit profiles
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to protect your personal credit and unlock business funding?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://mesagroupcapital.com/business-credit-enroll"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500"
            >
              Start Full Service Program
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="https://mesagroupcapital.com/bcfs-diy-enroll"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-gray-300"
            >
              Start DIY Program
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBusinessCreditMatters;
