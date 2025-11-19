import { Clock, TrendingUp, Building, Users, CheckCircle, ArrowRight } from "lucide-react";

const CoverageTypes = () => {
  const coverageTypes = [
    {
      icon: Clock,
      title: "Term Life Insurance",
      subtitle: "Most Popular & Affordable",
      description: "Coverage for a specific period (10, 20, or 30 years). Perfect for temporary needs like mortgage protection or income replacement during working years.",
      features: [
        "Lowest premiums",
        "Flexible term lengths",
        "Simple, straightforward coverage",
        "Convertible to permanent coverage"
      ],
      bestFor: "Young families, mortgage protection, budget-conscious shoppers",
      highlight: true
    },
    {
      icon: TrendingUp,
      title: "Whole Life Insurance",
      subtitle: "Lifetime Coverage with Cash Value",
      description: "Permanent coverage that lasts your entire life with guaranteed death benefit and cash value growth. Premiums stay level for life.",
      features: [
        "Lifetime protection",
        "Builds cash value",
        "Fixed premiums",
        "Tax-deferred growth"
      ],
      bestFor: "Estate planning, long-term wealth building, tax-advantaged savings",
      highlight: false
    },
    {
      icon: Building,
      title: "Universal Life Insurance",
      subtitle: "Flexible Permanent Coverage",
      description: "Adjustable permanent coverage with flexible premiums and death benefits. Cash value grows based on current interest rates.",
      features: [
        "Flexible premiums",
        "Adjustable death benefit",
        "Cash value accumulation",
        "Interest-sensitive growth"
      ],
      bestFor: "Those wanting permanent coverage with flexibility and cash value growth",
      highlight: false
    },
    {
      icon: Users,
      title: "Final Expense Insurance",
      subtitle: "Simplified Coverage for Seniors",
      description: "Smaller policies ($5,000-$25,000) designed to cover funeral costs and final expenses. Guaranteed acceptance with no medical exam.",
      features: [
        "No medical exam required",
        "Guaranteed acceptance",
        "Fast approval",
        "Affordable premiums"
      ],
      bestFor: "Seniors 50+, covering funeral expenses, simplified underwriting",
      highlight: false
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Types of Life Insurance <span className="text-amber-600">Coverage</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Choose the coverage type that best fits your needs and budget. Not sure which is right? Our licensed agents can help.
          </p>
        </div>

        {/* Coverage Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {coverageTypes.map((coverage, index) => {
            const Icon = coverage.icon;
            return (
              <div 
                key={index} 
                className={`rounded-xl p-8 ${
                  coverage.highlight 
                    ? 'bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-400 shadow-xl' 
                    : 'bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 shadow-lg'
                } hover:shadow-2xl transition-shadow duration-300`}
              >
                {coverage.highlight && (
                  <div className="inline-flex items-center gap-2 bg-amber-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    <CheckCircle className="w-4 h-4" />
                    Most Popular Choice
                  </div>
                )}
                
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 ${coverage.highlight ? 'bg-amber-400' : 'bg-white'} rounded-lg flex items-center justify-center shadow-md`}>
                    <Icon className={`w-7 h-7 ${coverage.highlight ? 'text-white' : 'text-amber-600'}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{coverage.title}</h3>
                    <p className="text-sm font-medium text-amber-600">{coverage.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{coverage.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Key Features:</h4>
                  <ul className="space-y-2">
                    {coverage.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-600 mb-1 font-medium uppercase tracking-wide">Best For:</p>
                  <p className="text-sm text-gray-700">{coverage.bestFor}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Not Sure Which Type is Right for You?
          </h3>
          <p className="text-gray-700 text-center mb-6 max-w-2xl mx-auto">
            Life insurance costs vary based on age, health, lifestyle, and coverage amount. PolicyGenius provides personalized quotes from multiple insurers so you can compare and choose the best option for your situation.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://policygenius.go2cloud.org/aff_c?offer_id=811&aff_id=2244"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-900 bg-amber-400 rounded-lg hover:bg-amber-500 transition-all duration-200 shadow-lg hover:shadow-xl border-2 border-amber-500"
          >
            Compare Policies & Get Your Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default CoverageTypes;
