import { TrendingUp, Target, Heart, CheckCircle } from "lucide-react";

const ValueProposition = () => {
  return (
    <section id="value-prop" className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Life Insurance: An Investment in{' '}
            <span className="text-amber-600">Peace of Mind</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Life insurance isn't just about the unknown—it's about ensuring that you and your 
            family have financial confidence in the future. Think of it as a smart investment 
            that grows alongside your life's journey.
          </p>
        </div>

        {/* Three Value Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1 - Financial Confidence */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Financial Confidence
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Protect major life expenses including mortgage payments, children's education, 
              and retirement savings—ensuring your family's financial stability.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Cover outstanding debts</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Fund education expenses</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Maintain living standards</span>
              </li>
            </ul>
          </div>

          {/* Card 2 - Strategic Planning */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Strategic Planning
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Choose coverage that fits your lifestyle and needs. Predictable, stable, and 
              tailored to your goals—no surprises, no guesswork.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Customizable coverage amounts</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Flexible term options</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Predictable premium rates</span>
              </li>
            </ul>
          </div>

          {/* Card 3 - Legacy Building */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Legacy Building
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Provide for loved ones and secure their future. Leave a lasting impact that 
              extends beyond your lifetime.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Estate planning support</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Tax-advantaged benefits</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Generational wealth transfer</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
