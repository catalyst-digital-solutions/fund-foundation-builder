import React from 'react';

const TrustIndicators = () => {
  return (
    <section className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-[#3e3e3e]">2,500+</div>
            <div className="text-sm text-gray-700 mt-2">Clients Served</div>
          </div>
          
          <div>
            <div className="text-4xl font-bold text-[#3e3e3e]">$50M+</div>
            <div className="text-sm text-gray-700 mt-2">Loans Facilitated</div>
          </div>
          
          <div>
            <div className="text-4xl font-bold text-[#3e3e3e]">30+</div>
            <div className="text-sm text-gray-700 mt-2">Lending Partners</div>
          </div>
          
          <div>
            <div className="text-4xl font-bold text-[#3e3e3e]">4.8/5</div>
            <div className="text-sm text-gray-700 mt-2">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
