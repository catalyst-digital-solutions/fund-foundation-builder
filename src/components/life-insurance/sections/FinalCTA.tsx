import { ArrowRight, Check } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#FFFBEC] from-40% to-[#FFECD7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Recap */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="flex items-center gap-2 text-sm">
            <Check className="w-4 h-4 text-green-600" />
            <span className="text-gray-700">Licensed Agents</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Check className="w-4 h-4 text-green-600" />
            <span className="text-gray-700">5-Minute Quotes</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Check className="w-4 h-4 text-green-600" />
            <span className="text-gray-700">A+ Rated Insurers</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Check className="w-4 h-4 text-green-600" />
            <span className="text-gray-700">No Obligation</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Check className="w-4 h-4 text-green-600" />
            <span className="text-gray-700">Compare Top Carriers</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Check className="w-4 h-4 text-green-600" />
            <span className="text-gray-700">Expert Guidance</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Check className="w-4 h-4 text-green-600" />
            <span className="text-gray-700">100% Secure</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Check className="w-4 h-4 text-green-600" />
            <span className="text-gray-700">Free Quotes</span>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Protect Your Family's <span className="text-[#f9c65d]">Future</span>?
          </h2>
          
          <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            Get your free, personalized life insurance quote in minutes. Compare top-rated carriers 
            and find the perfect coverage for your family.
          </p>

          <a
            href="https://policygenius.go2cloud.org/aff_c?offer_id=811&aff_id=2244"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 mb-4"
          >
            Get Your Free Quote Now
            <ArrowRight className="ml-2 w-6 h-6" />
          </a>
          
          <p className="text-gray-600 mb-6">
            Or call us: <a href="tel:6613103040" className="text-[#bb9446] hover:underline font-semibold">(661) 310-3040</a>
          </p>
          <p className="text-sm text-gray-500">Powered by Policygenius</p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
