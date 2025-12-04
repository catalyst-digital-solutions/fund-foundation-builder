import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#FFFBEC] from-40% to-[#FFECD7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Recap */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="flex items-center gap-2 text-sm">
            <Check className="w-4 h-4 text-green-600" />
            <span className="text-gray-700">720+ Businesses Served</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Check className="w-4 h-4 text-green-600" />
            <span className="text-gray-700">$150K+ Funding Access</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Check className="w-4 h-4 text-green-600" />
            <span className="text-gray-700">12-Month Program</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Check className="w-4 h-4 text-green-600" />
            <span className="text-gray-700">Weekly Coaching Calls</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Check className="w-4 h-4 text-green-600" />
            <span className="text-gray-700">Protect Personal Credit</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Check className="w-4 h-4 text-green-600" />
            <span className="text-gray-700">Build Business Identity</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Check className="w-4 h-4 text-green-600" />
            <span className="text-gray-700">$42M+ Capital Secured</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Check className="w-4 h-4 text-green-600" />
            <span className="text-gray-700">15+ Years Experience</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Stop Risking Personal Assets.<br />
            Start Building <span className="text-[#f9c65d]">Business Credit</span> Today.
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join 720+ Bakersfield business owners who've protected their personal credit while accessing $150,000+ in business funding.
          </p>
        </div>

        {/* Two-Column Button Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Primary Option - Full Service */}
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 text-left text-white">
            <div className="text-xs font-bold mb-2 tracking-wide">MOST POPULAR</div>
            <h3 className="text-2xl font-bold mb-4">Full Service Program</h3>
            <div className="text-4xl font-bold mb-2">$2,495</div>
            <p className="text-sm opacity-90 mb-6">12-month coaching + weekly calls included</p>
            <a 
              href="https://mesagroupcapital.com/business-credit-enroll" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block w-full text-center py-4 px-6 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-lg transition-colors mb-4"
            >
              Enroll in Full Service
            </a>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Done-for-you setup</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Weekly coaching calls</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>$11,040 total value</span>
              </div>
            </div>
          </div>

          {/* Secondary Option - DIY */}
          <div className="bg-white rounded-2xl p-8 text-left border-2 border-gray-200 shadow-lg">
            <div className="text-xs font-bold mb-2 tracking-wide text-gray-400">SELF-GUIDED</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">DIY Program</h3>
            <div className="text-4xl font-bold mb-2 text-gray-900">$995</div>
            <p className="text-sm text-gray-600 mb-6">Self-paced with all tools included</p>
            <a 
              href="https://mesagroupcapital.com/bcfs-diy-enroll" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500"
            >
              Enroll in DIY Program
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                <span className="text-gray-700">Complete training library</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                <span className="text-gray-700">All software included</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                <span className="text-gray-700">Email support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Phone CTA */}
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-2">
            Or call us: <a href="tel:6613103040" className="text-[#bb9446] hover:underline font-semibold">(661) 310-3040</a>
          </p>
          <p className="text-sm text-gray-500">Powered by Mesa Group</p>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
