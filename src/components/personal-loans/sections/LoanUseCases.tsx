import React from 'react';
import { CreditCard, Home, Car, GraduationCap, Heart, Briefcase } from 'lucide-react';

const LoanUseCases = () => {
  const useCases = [
    {
      icon: CreditCard,
      title: "Debt Consolidation",
      description: "Combine multiple high-interest debts into one manageable payment with a lower rate",
      example: "Save $200/month by consolidating $15,000 in credit card debt at 22% APR into a personal loan at 8.99% APR"
    },
    {
      icon: Home,
      title: "Home Improvements",
      description: "Fund renovations, repairs, or upgrades that increase your home's value",
      example: "Finance a $30,000 kitchen remodel with fixed monthly payments instead of a high-interest credit card"
    },
    {
      icon: Car,
      title: "Major Purchases",
      description: "Buy a vehicle, appliances, furniture, or other big-ticket items without depleting savings",
      example: "Purchase a reliable used car for $12,000 with a 3-year personal loan instead of a subprime auto loan"
    },
    {
      icon: Heart,
      title: "Medical Expenses",
      description: "Cover unexpected medical bills, procedures, or treatments not fully covered by insurance",
      example: "Finance $8,000 in dental work with predictable monthly payments instead of payment plans with fees"
    },
    {
      icon: Briefcase,
      title: "Business Expenses",
      description: "Fund small business needs, inventory, equipment, or bridge cash flow gaps",
      example: "Invest $20,000 in business equipment to grow revenue without tapping business credit lines"
    },
    {
      icon: GraduationCap,
      title: "Education & Training",
      description: "Pay for courses, certifications, or skill development to advance your career",
      example: "Finance a $5,000 professional certification program that leads to a higher-paying job"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Personal Loans for <span className="text-[#f9c65d]">Any Purpose</span>
          </h2>
          <p className="text-xl text-gray-700">
            Whether you're consolidating debt, funding a project, or covering unexpected expenses—
            personal loans give you the flexibility to achieve your goals.
          </p>
        </div>

        {/* Use Case Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-amber-50 rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-amber-300">
                <div className="w-12 h-12 bg-amber-400 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{useCase.description}</p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-amber-400">
                  <p className="text-sm text-gray-600 italic">{useCase.example}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LoanUseCases;
