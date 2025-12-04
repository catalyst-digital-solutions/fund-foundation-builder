import React from 'react';

const WhatsIncluded = () => {
  const components = [
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
      title: 'Business Credit Finance Suite',
      value: '$2,500',
      description: 'Comprehensive step-by-step system for building business credit from scratch.'
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />,
      title: 'Business Credit Education',
      value: '$2,500',
      description: 'In-depth education on business credit mechanics and credit bureau reporting.'
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />,
      title: 'Personal Coaching (12 Months)',
      value: '$2,400',
      description: 'Weekly check-in calls with your dedicated business credit advisor.',
      fullServiceOnly: true
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />,
      title: 'myNovaeDisputes Manager',
      value: '$800',
      description: '12-month subscription to professional dispute management software.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to Build <span className="text-[#f9c65d]">Business Credit</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Our comprehensive Business Credit Finance Suite includes professional tools, expert guidance, and ongoing support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {components.map((component, index) => (
            <div key={index} className={`bg-white rounded-xl shadow-lg p-6 md:p-8 border-l-4 ${component.fullServiceOnly ? 'border-amber-500' : 'border-green-500'}`}>
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-16 h-16 rounded-lg flex items-center justify-center ${component.fullServiceOnly ? 'bg-amber-100 text-[#3e3e3e]' : 'bg-green-100 text-green-600'}`}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {component.icon}
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{component.title}</h3>
                    <span className="text-lg font-bold text-[#3e3e3e] whitespace-nowrap">{component.value}</span>
                  </div>
                  <p className="text-gray-600">{component.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsIncluded;
