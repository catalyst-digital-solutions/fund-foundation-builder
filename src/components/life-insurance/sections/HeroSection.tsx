import { Shield, ArrowRight, ChevronDown } from "lucide-react";
import PoweredByPolicyGenius from '@/components/PoweredByPolicyGenius';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-white via-amber-50 to-white py-12 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">
                Licensed Partners | A+ Rated
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Protect Your Family's{' '}
              <span className="text-[#f9c65d]">Future</span> with Life Insurance
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Secure peace of mind with affordable life insurance coverage. Compare policies, 
              get quotes, and protect what matters most—all in minutes with PolicyGenius.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#3e3e3e]">$2M+</div>
                <div className="text-sm text-gray-600 mt-1">Coverage Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#3e3e3e]">5 Min</div>
                <div className="text-sm text-gray-600 mt-1">Quick Quotes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#3e3e3e]">A+ Rated</div>
                <div className="text-sm text-gray-600 mt-1">Partner Insurers</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="inline-block">
                <a
                  href="https://policygenius.go2cloud.org/aff_c?offer_id=811&aff_id=2244"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-900 bg-amber-400 rounded-lg hover:bg-amber-500 transition-all duration-200 shadow-lg hover:shadow-xl border-2 border-amber-500"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <PoweredByPolicyGenius className="mt-2" />
              </div>
              <button
                onClick={() => document.getElementById('value-prop')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl self-start"
              >
                Learn More
                <ChevronDown className="ml-2 w-5 h-5" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                    {i === 1 && "5★"}
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">50,000+</span> families protected
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image/Visual */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="text-center space-y-6">
                  <Shield className="w-32 h-32 text-[#3e3e3e] mx-auto" />
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900">Your Family's Security</h3>
                    <p className="text-gray-600">Protected by life insurance</p>
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
