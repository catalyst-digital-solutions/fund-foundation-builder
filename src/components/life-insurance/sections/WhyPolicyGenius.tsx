import { Scale, Users, Zap, Award, CheckCircle } from "lucide-react";

const WhyPolicyGenius = () => {
  const benefits = [
    {
      icon: Scale,
      color: "blue",
      title: "Unbiased Comparison",
      description: "Compare 30+ top-rated insurers side-by-side. No hidden fees, no markups—just transparent pricing.",
      badge: "Free Quote Service"
    },
    {
      icon: Users,
      color: "amber",
      title: "Expert Guidance",
      description: "Licensed agents in all 50 states provide personalized recommendations based on your unique situation.",
      badge: "Personal Support"
    },
    {
      icon: Zap,
      color: "green",
      title: "Simplified Process",
      description: "Complete online applications in minutes with digital document signing and case manager support throughout.",
      badge: "Fast & Easy"
    },
    {
      icon: Award,
      color: "purple",
      title: "Trusted Platform",
      description: "Over 30 million quotes provided to customers nationwide. Partnered exclusively with A+ rated insurers.",
      badge: "30M+ Quotes"
    }
  ];

  const stats = [
    { value: "30+", label: "Top-Rated Insurers" },
    { value: "50", label: "States Covered" },
    { value: "30M+", label: "Quotes Provided" },
    { value: "A+", label: "Rated Partners" }
  ];

  const colorMap: { [key: string]: { bg: string; icon: string } } = {
    blue: { bg: "bg-blue-100", icon: "text-blue-600" },
    amber: { bg: "bg-amber-100", icon: "text-[#3e3e3e]" },
    green: { bg: "bg-green-100", icon: "text-green-600" },
    purple: { bg: "bg-purple-100", icon: "text-purple-600" }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why We Partner with{' '}
            <span className="text-[#3e3e3e]">PolicyGenius</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Mesa Group Consulting partners with PolicyGenius to provide our clients with access 
            to the best life insurance options from top-rated carriers—all in one place.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const colors = colorMap[benefit.color];
            
            return (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className={`w-8 h-8 ${colors.icon}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-700 text-sm mb-4">
                  {benefit.description}
                </p>
                <div className="inline-flex items-center gap-2 text-sm text-green-600 font-medium">
                  <CheckCircle className="w-4 h-4" />
                  {benefit.badge}
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#3e3e3e] mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Statement */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              No Pressure. No Hidden Fees. Just Expert Help.
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              PolicyGenius is an independent insurance marketplace—not tied to any single carrier. 
              That means you get unbiased recommendations and truly competitive pricing. Their licensed 
              agents work for you, not the insurance companies, ensuring you find the best policy for 
              your needs and budget.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>No Obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Free Quotes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Transparent Pricing</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyPolicyGenius;
