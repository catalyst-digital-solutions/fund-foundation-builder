import React from 'react';
import { FileText, TrendingUp, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: FileText,
      title: "Tell Us About Your Loan",
      description: "Complete a quick 3-minute application telling us how much you need to borrow, what you'll use it for, and basic information about your financial situation. No credit score impact at this stage."
    },
    {
      number: 2,
      icon: TrendingUp,
      title: "Compare Pre-Qualified Offers",
      description: "Receive personalized loan offers from multiple lenders within minutes. Compare interest rates, repayment terms, monthly payments, and fees side-by-side. See which lenders you're likely to qualify with before applying."
    },
    {
      number: 3,
      icon: CheckCircle,
      title: "Choose Your Lender & Get Funded",
      description: "Select the loan offer that best fits your needs and complete the lender's application. Once approved, funds are typically deposited directly into your bank account within 1-3 business days."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get Your <span className="text-[#3e3e3e]">Personal Loan</span> in 3 Simple Steps
          </h2>
          <p className="text-xl text-gray-700">
            From application to funding—we make the process fast, easy, and transparent.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line (desktop only) */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400" style={{ top: '80px', left: '10%', right: '10%', zIndex: 0 }}></div>
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-amber-100">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg z-10">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-amber-50 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <Icon className="w-8 h-8 text-[#3e3e3e]" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed text-center">{step.description}</p>
              </div>
            );
          })}
        </div>

        {/* Timeline Note */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">
            <span className="font-semibold text-[#3e3e3e]">Average time from application to funding: 1-3 business days</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
