import React from 'react';

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Stop Risking Personal Assets.<br />
          Start Building <span className="text-amber-400">Business Credit</span> Today.
        </h2>
        
        <p className="text-xl text-gray-300 mb-12">
          Join 720+ Bakersfield business owners who've protected their personal credit while accessing $150,000+ in business funding.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 text-left">
            <h3 className="text-2xl font-bold mb-4">Full Service</h3>
            <div className="text-4xl font-bold mb-6">$2,495</div>
            <a href="https://mesagroupcapital.com/business-credit-enroll" target="_blank" rel="noopener noreferrer" className="block w-full text-center py-4 px-6 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-lg">
              Enroll in Full Service
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-left border-2 border-white/20">
            <h3 className="text-2xl font-bold mb-4">DIY Program</h3>
            <div className="text-4xl font-bold mb-6">$995</div>
            <a href="https://mesagroupcapital.com/bcfs-diy-enroll" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500">
              Enroll in DIY Program
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
