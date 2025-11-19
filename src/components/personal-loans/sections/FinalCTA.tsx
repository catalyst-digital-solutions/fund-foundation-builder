import React from 'react';
import { ArrowRight, Shield, Clock, CheckCircle } from 'lucide-react';

const FinalCTA = () => {
  const openAffiliateLink = () => {
    window.open('https://track.supermoney.com/aff_c?offer_id=1618&aff_id=2815&utm_source=mesa&utm_medium=website&utm_campaign=personal_loans', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to <span className="text-amber-400">Compare Your Options</span>?
        </h2>
        
        {/* Subheadline */}
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          See personalized loan offers from multiple lenders in minutes. 
          No impact on your credit score. No obligation to accept any offer.
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <div className="flex items-center gap-2 text-gray-300">
            <Shield className="w-5 h-5 text-green-400" />
            <span className="text-sm">100% Secure</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Clock className="w-5 h-5 text-green-400" />
            <span className="text-sm">3-Minute Application</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-sm">No Credit Impact</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={openAffiliateLink}
          className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-2xl hover:shadow-amber-500/50 transition-all duration-200 border-2 border-amber-500 transform hover:scale-105"
        >
          Get Started - Compare Rates Now
          <ArrowRight className="ml-3 w-6 h-6" />
        </button>

        {/* Fine Print */}
        <p className="text-sm text-gray-400 mt-6 max-w-2xl mx-auto">
          By clicking "Get Started," you'll be connected with our partner SuperMoney to compare personalized loan offers. 
          Checking rates will not affect your credit score.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-700">
          <div>
            <div className="text-3xl font-bold text-amber-400">2,500+</div>
            <div className="text-sm text-gray-400 mt-1">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-400">$50M+</div>
            <div className="text-sm text-gray-400 mt-1">Loans Facilitated</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-400">4.8/5</div>
            <div className="text-sm text-gray-400 mt-1">Satisfaction Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
