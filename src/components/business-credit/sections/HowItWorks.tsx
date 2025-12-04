import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Business Foundation Setup',
      description: 'We ensure your business has the proper legal structure, EIN, business bank account, and business phone number. This foundation is critical for credit building.',
      timeline: 'Week 1-2',
      deliverables: [
        'Business entity verification',
        'EIN confirmation',
        'Business banking setup guidance',
        'Business phone number establishment'
      ]
    },
    {
      number: '02',
      title: 'Vendor Credit Establishment',
      description: 'We guide you through establishing relationships with vendor credit accounts that report to business credit bureaus. These are the building blocks of your business credit profile.',
      timeline: 'Month 1-3',
      deliverables: [
        'Vendor credit account setup',
        'Payment schedule management',
        'Credit bureau reporting verification',
        'Trade line establishment'
      ]
    },
    {
      number: '03',
      title: 'Business Credit Cards',
      description: 'With vendor credit established, we help you qualify for business credit cards with higher limits. These cards further strengthen your business credit profile.',
      timeline: 'Month 3-6',
      deliverables: [
        'Business credit card applications',
        'Credit limit optimization',
        'Strategic utilization guidance',
        'Monthly monitoring and adjustments'
      ]
    },
    {
      number: '04',
      title: 'Higher-Tier Funding Access',
      description: 'With strong business credit established, you now qualify for business lines of credit, term loans, and equipment financing—all without personal guarantee requirements.',
      timeline: 'Month 6-12',
      deliverables: [
        'Access to $150K+ in funding',
        'No personal guarantee options',
        'Lower interest rate qualification',
        'Ongoing credit monitoring and support'
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your Path to <span className="text-[#3e3e3e]">$150K+ in Business Funding</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Our proven 4-stage process builds your business credit systematically, protecting your personal credit while opening doors to significant business funding opportunities.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-8 md:space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connecting Line (except for last item) */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute left-12 top-24 bottom-0 w-0.5 bg-amber-300" />
              )}

              <div className="grid md:grid-cols-12 gap-6 items-start">
                {/* Step Number */}
                <div className="md:col-span-2 flex items-center md:justify-center">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-3xl font-bold text-white">{step.number}</span>
                    </div>
                    {index !== steps.length - 1 && (
                      <div className="md:hidden absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-amber-300" />
                    )}
                  </div>
                </div>

                {/* Step Content */}
                <div className="md:col-span-10">
                  <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-l-4 border-amber-400">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                      <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full shrink-0">
                        <svg className="w-5 h-5 text-[#3e3e3e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-semibold text-amber-700">{step.timeline}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Deliverables */}
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
                        What You Get
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {step.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-sm text-gray-700">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Visualization */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Your 12-Month Business Credit Journey
          </h3>
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-amber-200 via-amber-400 to-green-400 rounded-full transform -translate-y-1/2" />
            <div className="relative grid grid-cols-4 gap-4">
              {[
                { month: '0-3', label: 'Foundation & Vendor Credit', color: 'amber' },
                { month: '3-6', label: 'Business Credit Cards', color: 'amber' },
                { month: '6-9', label: 'Higher Credit Limits', color: 'orange' },
                { month: '9-12', label: '$150K+ Funding Access', color: 'green' }
              ].map((milestone, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto bg-amber-500 rounded-full flex items-center justify-center shadow-lg mb-3 relative z-10 border-4 border-white">
                    <span className="text-white font-bold text-sm">{milestone.month}</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">{milestone.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Start building your business credit foundation today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <a
              href="https://mesagroupcapital.com/bcfs-diy-enroll"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-gray-300"
            >
              Start DIY Version
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

export default HowItWorks;
