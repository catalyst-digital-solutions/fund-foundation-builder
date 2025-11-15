import React, { useState } from 'react';

const ServiceTierComparison = () => {
  const [selectedTier, setSelectedTier] = useState('full');

  const fullServiceFeatures = [
    { name: 'Business Credit Finance Suite', value: '$2,500', included: true },
    { name: 'Business Credit Education & Restoration', value: '$2,500', included: true },
    { name: 'Personal Business Coaching & Advisement (12 months)', value: '$2,400', included: true },
    { name: 'Access to Lending Sources in Specific Tiers', value: '$2,000', included: true },
    { name: 'myNovaeDisputes Manager (12 months)', value: '$800', included: true },
    { name: 'Experian Smart Business Monitoring', value: '$600', included: true },
    { name: 'Personal Debt & Budgeting Software', value: '$240', included: true },
    { name: 'Weekly Check-In Calls', value: 'Priceless', included: true },
    { name: 'Priority Email Support', value: 'Priceless', included: true },
    { name: 'Custom Strategy Development', value: 'Priceless', included: true }
  ];

  const diyFeatures = [
    { name: 'Business Credit Finance Suite', included: true },
    { name: 'Business Credit Education Materials', included: true },
    { name: 'Self-Guided Program', included: true },
    { name: 'myNovaeDisputes Manager (12 months)', included: true },
    { name: 'Email Support', included: true },
    { name: 'Personal Business Coaching', included: false },
    { name: 'Weekly Check-In Calls', included: false },
    { name: 'Custom Strategy Development', included: false },
    { name: 'Priority Support', included: false }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your <span className="text-amber-600">Business Credit</span> Program
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Select the program that fits your business needs and budget. Both options provide access to the same business credit building system—the difference is in the level of support and guidance.
          </p>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex border-b-2 border-gray-200 mb-8">
          <button
            onClick={() => setSelectedTier('full')}
            className={`flex-1 py-4 px-4 font-semibold transition-all relative ${
              selectedTier === 'full'
                ? 'text-amber-600'
                : 'text-gray-500'
            }`}
          >
            Full Service
            {selectedTier === 'full' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600"></div>
            )}
          </button>
          <button
            onClick={() => setSelectedTier('diy')}
            className={`flex-1 py-4 px-4 font-semibold transition-all relative ${
              selectedTier === 'diy'
                ? 'text-amber-600'
                : 'text-gray-500'
            }`}
          >
            DIY
            {selectedTier === 'diy' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600"></div>
            )}
          </button>
        </div>

        {/* Desktop: Side-by-Side Comparison */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {/* Full Service Tier */}
          <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-2xl overflow-hidden border-4 border-amber-400">
            {/* Recommended Badge */}
            <div className="absolute top-6 right-6 bg-green-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
              MOST POPULAR
            </div>

            <div className="p-8 md:p-10">
              {/* Tier Header */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Full Service</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive business credit building with dedicated coaching and support
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-gray-900">$2,495</span>
                  <span className="text-gray-600">one-time</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Or 3-month payment plan available
                </p>
              </div>

              {/* Value Breakdown */}
              <div className="bg-white rounded-lg p-6 mb-8">
                <div className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
                  Total Program Value: $11,040
                </div>
                <div className="space-y-3">
                  {fullServiceFeatures.map((feature, index) => (
                    <div key={index} className="flex justify-between items-start gap-4">
                      <div className="flex items-start gap-2 flex-1">
                        <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">{feature.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-amber-600 whitespace-nowrap">
                        {feature.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Best For */}
              <div className="bg-amber-100 rounded-lg p-6 mb-8">
                <h4 className="font-semibold text-gray-900 mb-3">Best for:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Business owners who want expert guidance</li>
                  <li>• Entrepreneurs new to business credit</li>
                  <li>• Those who value accountability and coaching</li>
                  <li>• Businesses seeking maximum funding opportunities</li>
                </ul>
              </div>

              {/* CTA Button */}
              <a
                href="https://mesagroupcapital.com/business-credit-enroll"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500"
              >
                Enroll in Full Service
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              <p className="text-xs text-center text-gray-600 mt-4">
                Access granted within 2-3 business days
              </p>
            </div>
          </div>

          {/* DIY Tier */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200">
            <div className="p-8 md:p-10">
              {/* Tier Header */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">DIY Program</h3>
                <p className="text-gray-600 mb-6">
                  Self-guided business credit building with software and resources
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-gray-900">$995</span>
                  <span className="text-gray-600">one-time</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Full payment due today
                </p>
              </div>

              {/* Features */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <div className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
                  What's Included
                </div>
                <div className="space-y-3">
                  {diyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      {feature.included ? (
                        <>
                          <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-gray-700">{feature.name}</span>
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <span className="text-sm text-gray-400 line-through">{feature.name}</span>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Best For */}
              <div className="bg-gray-100 rounded-lg p-6 mb-8">
                <h4 className="font-semibold text-gray-900 mb-3">Best for:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Self-motivated entrepreneurs</li>
                  <li>• Those with prior credit building experience</li>
                  <li>• Budget-conscious business owners</li>
                  <li>• People who prefer self-paced learning</li>
                </ul>
              </div>

              {/* CTA Button */}
              <a
                href="https://mesagroupcapital.com/bcfs-diy-enroll"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-gray-300"
              >
                Enroll in DIY Program
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              <p className="text-xs text-center text-gray-600 mt-4">
                Instant access upon enrollment
              </p>
            </div>
          </div>
        </div>

        {/* Mobile: Single Column with Toggle */}
        <div className="md:hidden">
          {selectedTier === 'full' ? (
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-2xl overflow-hidden border-4 border-amber-400">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Full Service</h3>
                  <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  Comprehensive business credit building with dedicated coaching
                </p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-gray-900">$2,495</span>
                  <span className="text-gray-600">one-time</span>
                </div>
                <p className="text-sm text-gray-600 mb-8">
                  Or 3-month payment plan available
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <div className="text-sm font-semibold text-gray-700 mb-4">
                    Value: $11,040
                  </div>
                  <div className="space-y-2">
                    {fullServiceFeatures.slice(0, 7).map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">{feature.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="https://mesagroupcapital.com/business-credit-enroll"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500"
                >
                  Enroll in Full Service
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">DIY Program</h3>
                <p className="text-gray-600 mb-6">
                  Self-guided business credit building
                </p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-gray-900">$995</span>
                  <span className="text-gray-600">one-time</span>
                </div>
                <p className="text-sm text-gray-600 mb-8">
                  Full payment due today
                </p>

                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <div className="space-y-2">
                    {diyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        {feature.included ? (
                          <>
                            <svg className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-gray-700">{feature.name}</span>
                          </>
                        ) : (
                          <>
                            <svg className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <span className="text-sm text-gray-400 line-through">{feature.name}</span>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="https://mesagroupcapital.com/bcfs-diy-enroll"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-gray-300"
                >
                  Enroll in DIY Program
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Comparison Help */}
        <div className="mt-12 bg-blue-50 rounded-xl p-8 border-2 border-blue-200">
          <div className="flex items-start gap-4">
            <svg className="w-8 h-8 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Not sure which program is right for you?
              </h4>
              <p className="text-gray-700 mb-4">
                Most business owners choose Full Service for the dedicated coaching and accountability. If you're experienced with credit building and prefer self-guided programs, DIY might be a better fit. Both programs use the same proven system—the difference is in the level of support.
              </p>
              <a
                href="#faq"
                className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2"
              >
                Read our FAQ for more guidance
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTierComparison;
