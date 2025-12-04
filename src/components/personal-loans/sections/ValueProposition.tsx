import React from 'react';
import { Layers, Shield, UserCheck } from 'lucide-react';

const ValueProposition = () => {
  const benefits = [
    {
      icon: Layers,
      title: "One Application, Multiple Offers",
      description: "Submit one application and receive personalized loan offers from multiple lenders. Compare rates, terms, and monthly payments side-by-side to find your best option."
    },
    {
      icon: Shield,
      title: "No Credit Score Impact",
      description: "We use soft credit inquiries to match you with lenders—meaning zero impact on your credit score when you check rates. Only the lender you choose will do a hard pull."
    },
    {
      icon: UserCheck,
      title: "Expert Guidance Every Step",
      description: "Backed by Mesa Group's financial expertise and 10+ years helping clients achieve their goals. We're here to answer questions and guide you to the right loan solution."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Compare Personal Loans with <span className="text-[#3e3e3e]">Mesa Group Consulting</span>?
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Skip the hassle of applying to dozens of lenders. We connect you with multiple pre-qualified offers 
            in one simple application—saving you time and protecting your credit score.
          </p>
        </div>

        {/* Benefit Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-14 h-14 bg-amber-400 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
