import { useState, useEffect } from 'react';
import {
  Calculator,
  ArrowDown,
  ArrowRight,
  Mail,
  Calendar,
  Plus,
  CreditCard,
  TrendingDown,
  PieChart,
  DollarSign,
  Shield,
  Lock,
  Award,
  Target,
  AlertCircle
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CalendlyModal } from '@/components/CalendlyModal';
import { NewsletterModal } from '@/components/NewsletterModal';
import CreditUtilizationCalculator from '@/components/calculators/CreditUtilizationCalculator';
import DebtPayoffCalculator from '@/components/calculators/DebtPayoffCalculator';
import DTICalculator from '@/components/calculators/DTICalculator';
import MonthlyPaymentCalculator from '@/components/calculators/MonthlyPaymentCalculator';
import EmergencyFundCalculator from '@/components/calculators/EmergencyFundCalculator';

type CalculatorType = 'hub' | 'credit-utilization' | 'debt-payoff' | 'dti' | 'monthly-payment' | 'emergency-fund';
type FilterType = 'all' | 'credit' | 'debt' | 'savings';

const calculators = [
  {
    id: 'credit-utilization' as const,
    title: 'Credit Utilization Calculator',
    description: "Find out if your credit card balances are hurting your score—and exactly how much to pay down to optimize your utilization ratio.",
    icon: CreditCard,
    category: 'credit' as const
  },
  {
    id: 'debt-payoff' as const,
    title: 'Debt Payoff Calculator',
    description: "See exactly when you'll be debt-free and how much interest you'll save using the snowball or avalanche method.",
    icon: TrendingDown,
    category: 'debt' as const
  },
  {
    id: 'dti' as const,
    title: 'Debt-to-Income Ratio Calculator',
    description: "Find out if you qualify for a mortgage, auto loan, or other major purchase based on your debt-to-income ratio.",
    icon: PieChart,
    category: 'debt' as const
  },
  {
    id: 'monthly-payment' as const,
    title: 'Monthly Payment Calculator',
    description: "Calculate what your monthly payment would be for a car loan, personal loan, or other installment debt.",
    icon: DollarSign,
    category: 'debt' as const
  },
  {
    id: 'emergency-fund' as const,
    title: 'Emergency Fund Calculator',
    description: "Find out how much you should save for emergencies and create a realistic savings plan to reach your goal.",
    icon: Shield,
    category: 'savings' as const
  }
];

const FinancialCalculators = () => {
  const [activeCalculator, setActiveCalculator] = useState<CalculatorType>('hub');
  const [filter, setFilter] = useState<FilterType>('all');
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  // Scroll to top when switching between calculators
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeCalculator]);

  const openCalendly = () => setIsCalendlyOpen(true);
  const closeCalendly = () => setIsCalendlyOpen(false);
  const openNewsletter = () => setIsNewsletterOpen(true);
  const closeNewsletter = () => setIsNewsletterOpen(false);

  const filteredCalculators = calculators.filter(calc => 
    filter === 'all' || calc.category === filter
  );

  const scrollToCalculators = () => {
    document.getElementById('calculators')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Render individual calculator
  if (activeCalculator !== 'hub') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {activeCalculator === 'credit-utilization' && (
              <CreditUtilizationCalculator onBack={() => setActiveCalculator('hub')} />
            )}
            {activeCalculator === 'debt-payoff' && (
              <DebtPayoffCalculator onBack={() => setActiveCalculator('hub')} />
            )}
            {activeCalculator === 'dti' && (
              <DTICalculator onBack={() => setActiveCalculator('hub')} />
            )}
            {activeCalculator === 'monthly-payment' && (
              <MonthlyPaymentCalculator onBack={() => setActiveCalculator('hub')} />
            )}
            {activeCalculator === 'emergency-fund' && (
              <EmergencyFundCalculator onBack={() => setActiveCalculator('hub')} />
            )}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-white via-amber-50 to-white py-12 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 mb-6">
            <Calculator className="w-5 h-5 text-amber-600" />
            <span className="text-sm font-medium text-gray-700">
              Free Tools • No Registration Required
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Financial <span className="text-[#f9c65d]">Calculators</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Free tools that give you instant clarity on your credit, debt, and financial goals.
          </p>

          {/* Body Copy */}
          <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
            <p>
              Numbers don't lie—but they can be confusing. Our financial calculators take the guesswork out of important decisions by providing personalized insights based on your unique situation. Whether you're wondering how long it'll take to pay off debt, if your credit card balances are hurting your score, or how much you should save for emergencies, these tools give you answers in seconds.
            </p>
            <p className="font-medium text-gray-700">
              No credit card required. No strings attached. Just honest, helpful calculations to guide your next move.
            </p>
          </div>

          {/* CTA */}
          <button 
            onClick={scrollToCalculators}
            className="inline-flex items-center gap-2 bg-amber-400 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-amber-500 transition-all"
          >
            Explore Calculators
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12">
            How Our <span className="text-[#f9c65d]">Calculators</span> Work
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <span className="text-2xl font-bold text-gray-900">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Choose Your Calculator</h3>
              <p className="text-gray-600 leading-relaxed">
                Select the tool that matches your question—whether it's about credit utilization, debt payoff, or monthly payments.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <span className="text-2xl font-bold text-gray-900">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Enter Your Numbers</h3>
              <p className="text-gray-600 leading-relaxed">
                Input your information. All calculations happen instantly in your browser. We don't store or share your data.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <span className="text-2xl font-bold text-gray-900">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Get Your Results</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive personalized insights and recommendations. Want a detailed report? Enter your email and we'll send it right over.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR CATEGORIES SECTION */}
      <section id="calculators" className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Choose Your <span className="text-[#f9c65d]">Calculator</span>
            </h2>
            <p className="text-xl text-gray-600">
              Select the tool that answers your most pressing question.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              onClick={() => setFilter('all')}
              className={`px-6 py-2 font-semibold rounded-lg transition-colors ${
                filter === 'all' 
                  ? 'bg-amber-400 text-gray-900' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-amber-400'
              }`}
            >
              All Calculators
            </button>
            <button 
              onClick={() => setFilter('credit')}
              className={`px-6 py-2 font-semibold rounded-lg transition-colors ${
                filter === 'credit' 
                  ? 'bg-amber-400 text-gray-900' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-amber-400'
              }`}
            >
              Credit Tools
            </button>
            <button 
              onClick={() => setFilter('debt')}
              className={`px-6 py-2 font-semibold rounded-lg transition-colors ${
                filter === 'debt' 
                  ? 'bg-amber-400 text-gray-900' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-amber-400'
              }`}
            >
              Debt Tools
            </button>
            <button 
              onClick={() => setFilter('savings')}
              className={`px-6 py-2 font-semibold rounded-lg transition-colors ${
                filter === 'savings' 
                  ? 'bg-amber-400 text-gray-900' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-amber-400'
              }`}
            >
              Savings & Planning
            </button>
          </div>

          {/* Calculator Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCalculators.map((calc) => {
              const IconComponent = calc.icon;
              return (
                <div 
                  key={calc.id}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-gray-900" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {calc.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {calc.description}
                  </p>
                  <button 
                    onClick={() => setActiveCalculator(calc.id)}
                    className="w-full bg-amber-400 text-gray-900 py-3 rounded-lg font-semibold hover:bg-amber-500 transition-colors inline-flex items-center justify-center gap-2"
                  >
                    Start Calculator
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}

            {/* Coming Soon Card */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg p-6 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-center">
              <Plus className="w-12 h-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-bold text-gray-600 mb-2">
                More Coming Soon
              </h3>
              <p className="text-sm text-gray-500">
                We're adding new calculators based on your feedback
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY USE MESA CALCULATORS SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12">
            Why Our Calculators Are <span className="text-[#f9c65d]">Different</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">No Data Sharing</h3>
              <p className="text-gray-700 leading-relaxed">
                All calculations happen in your browser. We never store, sell, or share your personal financial information.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Based on Real Industry Standards</h3>
              <p className="text-gray-700 leading-relaxed">
                Our calculators use the same formulas and benchmarks that lenders and credit bureaus use—so your results are realistic.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-200">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Actionable Recommendations</h3>
              <p className="text-gray-700 leading-relaxed">
                You don't just get a number—you get a clear next step. Whether it's paying down debt, disputing errors, or building savings, we tell you exactly what to do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER SIGNUP SECTION */}
      <section className="py-16 md:py-24 bg-[#3e3e3e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="w-16 h-16 text-amber-400 mx-auto mb-6" />

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Get More Free <span className="text-amber-400">Tools & Tips</span>
          </h2>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join our email list for exclusive calculators, downloadable resources, and expert financial strategies delivered weekly.
          </p>

          <button
            onClick={openNewsletter}
            className="px-8 py-4 bg-amber-400 text-gray-900 font-semibold rounded-lg hover:bg-amber-500 transition-colors shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
          >
            Subscribe Now
          </button>

          <p className="text-sm text-gray-400 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready for <span className="text-[#f9c65d]">Professional Help?</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Calculators are great for DIY guidance—but if you want a customized strategy built by experts, we're here to help. Our team specializes in credit repair, business funding, and debt relief tailored to your unique situation.
          </p>

          <div className="flex flex-row gap-4 justify-center">
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-amber-400 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-amber-500 transition-all"
            >
              View Our Services
              <ArrowRight className="w-5 h-5" />
            </a>
            <button
              onClick={openCalendly}
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-gray-300 hover:border-amber-400 transition-all"
            >
              Book Free Consultation
              <Calendar className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* DISCLAIMER SECTION */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-gray-600" />
              Legal Disclaimer
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              These calculators provide estimates based on the information you provide and general industry standards. Actual results may vary based on your complete financial profile, credit report details, and lender-specific criteria. For personalized advice, consult with a financial professional or contact MESA Group Consulting for a free consultation.
            </p>
          </div>
        </div>
      </section>

      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={closeCalendly}
        utmCampaign="Financial Calculators Page - Final CTA"
      />

      <NewsletterModal
        isOpen={isNewsletterOpen}
        onClose={closeNewsletter}
      />

      <Footer />
    </div>
  );
};

export default FinancialCalculators;
