import { FileText, Search, UserCheck, FileCheck, Shield, ArrowRight } from "lucide-react";
import PoweredByPolicyGenius from '@/components/PoweredByPolicyGenius';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: FileText,
      title: "Tell Us About Your Needs",
      description: "Share basic information about your health, lifestyle, and coverage goals. Takes just 5 minutes.",
      detail: "Answer simple questions about your age, health history, and financial needs"
    },
    {
      number: 2,
      icon: Search,
      title: "Compare Personalized Quotes",
      description: "Get instant quotes from 30+ top-rated life insurance carriers side-by-side.",
      detail: "See pricing, coverage options, and policy features in one easy comparison"
    },
    {
      number: 3,
      icon: UserCheck,
      title: "Speak with a Licensed Agent",
      description: "Connect with an expert who'll answer questions and help you choose the right policy.",
      detail: "No pressure—just personalized guidance from licensed professionals"
    },
    {
      number: 4,
      icon: FileCheck,
      title: "Complete Your Application",
      description: "Fill out your application online. Most policies require a quick medical exam.",
      detail: "Digital applications with case manager support throughout the process"
    },
    {
      number: 5,
      icon: Shield,
      title: "Get Approved & Covered",
      description: "Receive your policy documents and coverage begins. Most approvals within 24-48 hours.",
      detail: "Fast processing with instant coverage options available for qualifying applicants"
    },
    {
      number: 6,
      icon: ArrowRight,
      title: "Ongoing Support",
      description: "Access your policy anytime, make changes as your life evolves, and get support when needed.",
      detail: "Lifetime access to your PolicyGenius dashboard and support team"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How It <span className="text-[#f9c65d]">Works</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Getting life insurance is simple and fast with PolicyGenius. Follow these six easy steps to protect your family's future.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 1;
            
            return (
              <div key={index} className={`flex flex-col lg:flex-row gap-8 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Step Number & Icon */}
                <div className="flex-shrink-0 w-full lg:w-1/3">
                  <div className={`flex ${isEven ? 'lg:flex-row-reverse' : 'flex-row'} items-center gap-4`}>
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-3xl font-bold text-white">{step.number}</span>
                      </div>
                      {index < steps.length - 1 && (
                        <div className="hidden lg:block absolute top-20 left-1/2 w-0.5 h-16 bg-gradient-to-b from-amber-400 to-transparent transform -translate-x-1/2" />
                      )}
                    </div>
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-md">
                      <Icon className="w-8 h-8 text-[#3e3e3e]" />
                    </div>
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1 w-full">
                  <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">{step.description}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.detail}</p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-block">
            <a
              href="https://policygenius.go2cloud.org/aff_c?offer_id=811&aff_id=2244"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-900 bg-amber-400 rounded-lg hover:bg-amber-500 transition-all duration-200 shadow-lg hover:shadow-xl border-2 border-amber-500"
            >
              Start Your Application Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <PoweredByPolicyGenius className="mt-2" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
