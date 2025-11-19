import { DollarSign, Users, Umbrella, Heart, TrendingUp, CheckCircle } from "lucide-react";

const KeyBenefits = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Income Replacement",
      description: "Replace lost income to maintain your family's standard of living and cover daily expenses."
    },
    {
      icon: Users,
      title: "Debt Protection",
      description: "Pay off mortgages, loans, and credit card debt so your family isn't burdened with financial obligations."
    },
    {
      icon: Umbrella,
      title: "Final Expenses",
      description: "Cover funeral costs, medical bills, and estate settlement expenses without depleting savings."
    },
    {
      icon: Heart,
      title: "Peace of Mind",
      description: "Sleep better knowing your loved ones are protected financially no matter what happens."
    },
    {
      icon: TrendingUp,
      title: "Wealth Building",
      description: "Some policies build cash value over time, creating a financial asset for your future."
    },
    {
      icon: CheckCircle,
      title: "Tax Advantages",
      description: "Death benefits are generally income-tax-free, and cash value grows tax-deferred."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Six Key <span className="text-amber-600">Benefits</span> of Life Insurance
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Life insurance provides comprehensive protection for your family's financial future
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                  <Icon className="w-6 h-6 text-amber-600" />
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

export default KeyBenefits;
