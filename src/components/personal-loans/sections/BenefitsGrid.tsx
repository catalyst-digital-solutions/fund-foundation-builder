import React from 'react';
import { Zap, DollarSign, Clock, Shield, Users, TrendingDown } from 'lucide-react';

const BenefitsGrid = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Fast Approval Process",
      description: "Get pre-qualified in minutes and receive funds as soon as 24-48 hours after approval"
    },
    {
      icon: DollarSign,
      title: "Competitive Rates",
      description: "Access rates from 5.99% APR with our network of 30+ lending partners competing for your business"
    },
    {
      icon: Clock,
      title: "Flexible Terms",
      description: "Choose repayment terms from 12 to 84 months to fit your budget and financial goals"
    },
    {
      icon: Shield,
      title: "No Prepayment Penalties",
      description: "Many lenders allow you to pay off your loan early without fees—save on interest"
    },
    {
      icon: Users,
      title: "Personalized Matching",
      description: "Our technology connects you with lenders most likely to approve your application"
    },
    {
      icon: TrendingDown,
      title: "Lower Your Payments",
      description: "Consolidate high-interest debt and reduce monthly payments by hundreds of dollars"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-[#f9c65d]">Our Loan Marketplace</span>?
          </h2>
          <p className="text-xl text-gray-700">
            More options, better rates, and expert guidance—all in one place.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-amber-100">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;
