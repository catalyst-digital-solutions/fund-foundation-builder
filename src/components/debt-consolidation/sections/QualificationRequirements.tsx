import React from 'react';
import { CheckCircle, User, DollarSign, FileText, CreditCard, MapPin } from 'lucide-react';

const QualificationRequirements = () => {
  const requirements = [
    {
      icon: User,
      title: "Age",
      requirement: "18+ years old",
      details: "You must be at least 18 years old (19 in some states)"
    },
    {
      icon: MapPin,
      title: "Residency",
      requirement: "U.S. Citizen or Permanent Resident",
      details: "Valid Social Security Number required"
    },
    {
      icon: DollarSign,
      title: "Income",
      requirement: "Steady Income Source",
      details: "Employment, self-employment, or consistent income stream"
    },
    {
      icon: FileText,
      title: "Bank Account",
      requirement: "Active Checking Account",
      details: "For receiving funds and making payments"
    },
    {
      icon: CreditCard,
      title: "Credit Score",
      requirement: "580+ recommended",
      details: "Some lenders accept lower scores; rates vary by credit"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-[#f9c65d]">Qualification</span> Requirements
          </h2>
          <p className="text-xl text-gray-700">
            Basic requirements to get started with debt consolidation. Don't worry if you don't meet every criterion—
            our network includes lenders for various situations.
          </p>
        </div>

        {/* Requirements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {requirements.map((req, index) => {
            const Icon = req.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-[#bb9446] transition-colors duration-300 shadow-sm hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#3e3e3e]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{req.title}</h3>
                    <p className="text-sm font-semibold text-[#3e3e3e] mb-2">{req.requirement}</p>
                    <p className="text-sm text-gray-600">{req.details}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info Box */}
        <div className="bg-gradient-to-br from-amber-50 to-[#fff8e7] rounded-2xl p-8 border-2 border-[#bb9446]/30">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Good Candidates for Debt Consolidation
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Debt consolidation works best if you:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#3e3e3e] font-bold">•</span>
                  <span>Have multiple high-interest debts (credit cards, medical bills, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3e3e3e] font-bold">•</span>
                  <span>Can qualify for a lower interest rate than you're currently paying</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3e3e3e] font-bold">•</span>
                  <span>Are committed to not accumulating new debt while paying off the loan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3e3e3e] font-bold">•</span>
                  <span>Have stable income to make consistent monthly payments</span>
                </li>
              </ul>
              <p className="text-gray-700 mt-4 font-semibold">
                Check your rates in 3 minutes—it won't affect your credit score.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationRequirements;