import React from 'react';
import { Layers, TrendingDown, Calendar } from 'lucide-react';

const ValueProposition = () => {
  const benefits = [
    {
      icon: Layers,
      title: "Simplify Multiple Debts Into One",
      description: "Stop tracking 5 different due dates, minimum payments, and interest rates. Consolidate credit cards, medical bills, and other debts into a single loan with one predictable monthly payment."
    },
    {
      icon: TrendingDown,
      title: "Lower Your Interest Rate",
      description: "Credit cards average 20-25% APR. With a debt consolidation loan, you could qualify for rates as low as 5.99% APR—potentially saving thousands in interest over the life of your loan."
    },
    {
      icon: Calendar,
      title: "Pay Off Debt Faster",
      description: "With lower rates and fixed payments, more of your money goes toward principal instead of interest. Most clients become debt-free in 3-5 years instead of decades of minimum payments."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-[#f9c65d]">Debt Consolidation</span>?
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Debt consolidation isn't about taking on more debt—it's about replacing expensive, chaotic debt 
            with a structured plan to become debt-free faster while paying less interest.
          </p>
        </div>

        {/* Benefit Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-[#fff8e7] rounded-xl p-8 border border-[#bb9446]/30 hover:shadow-xl transition-shadow duration-300">
                <div className="w-14 h-14 bg-[#bb9446] rounded-lg flex items-center justify-center mb-6">
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