import React from 'react';
import { Zap, DollarSign, Clock, Shield, Brain, TrendingDown } from 'lucide-react';

const BenefitsGrid = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Lower Interest Rates",
      description: "Replace 20-25% credit card APRs with personal loan rates as low as 5.99% APR"
    },
    {
      icon: Clock,
      title: "One Monthly Payment",
      description: "Simplify your finances with a single payment date and fixed monthly amount"
    },
    {
      icon: TrendingDown,
      title: "Pay Off Debt Faster",
      description: "Fixed terms of 3-5 years mean you have a clear end date for becoming debt-free"
    },
    {
      icon: Zap,
      title: "Fast Funding",
      description: "Get approved in minutes and receive funds in as fast as 24-48 hours"
    },
    {
      icon: Brain,
      title: "Reduce Financial Stress",
      description: "Stop worrying about multiple due dates and minimum payments every month"
    },
    {
      icon: Shield,
      title: "No Credit Score Impact",
      description: "Check your rates with a soft inquiry that won't affect your credit score"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-[#fff8e7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Benefits of <span className="text-[#f9c65d]">Debt Consolidation</span> Loans
          </h2>
          <p className="text-xl text-gray-700">
            More than just convenience—consolidation can save you money and help you achieve financial freedom faster.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-[#bb9446]/30">
                <div className="w-14 h-14 bg-gradient-to-br from-[#f9c65d] to-[#bb9446] rounded-lg flex items-center justify-center mb-4">
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