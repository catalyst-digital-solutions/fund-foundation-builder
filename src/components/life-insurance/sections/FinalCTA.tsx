import { ArrowRight, Shield, Clock, CheckCircle } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Protect Your Family's{' '}
          <span className="text-amber-400">Future?</span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Get your free, personalized life insurance quote in minutes. Compare top-rated carriers 
          and find the perfect coverage for your family—with no obligation and expert guidance every step of the way.
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-green-400" />
            <span className="text-white font-medium">Licensed Agents</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-6 h-6 text-green-400" />
            <span className="text-white font-medium">5-Minute Quotes</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-green-400" />
            <span className="text-white font-medium">A+ Rated Insurers</span>
          </div>
        </div>

        {/* Primary CTA Button */}
        <a
          href="https://policygenius.go2cloud.org/aff_c?offer_id=811&aff_id=2244"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-12 py-5 text-lg font-semibold text-gray-900 bg-amber-400 rounded-lg hover:bg-amber-500 transition-all duration-200 shadow-2xl hover:shadow-amber-500/50 border-2 border-amber-500"
        >
          Get Your Free Quote Now
          <ArrowRight className="ml-2 w-6 h-6" />
        </a>

        <p className="text-gray-400 text-sm mt-6">
          No obligation • Free quotes • Expert guidance • 100% secure
        </p>

        {/* Social Proof */}
        <div className="mt-12 pt-12 border-t border-gray-700">
          <p className="text-gray-300 mb-4">
            Join <span className="text-white font-semibold">50,000+ families</span> who have protected their future with life insurance
          </p>
          <div className="flex justify-center items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-6 h-6 text-amber-400 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-400 text-sm mt-2">
            Rated 4.9/5 from thousands of satisfied customers
          </p>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
