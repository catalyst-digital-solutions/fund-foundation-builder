import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmotionalCTA1 from '@/components/student-loan-refi2/sections/EmotionalCTA1';
import EmotionalCTA2 from '@/components/student-loan-refi2/sections/EmotionalCTA2';
import EmotionalCTA3 from '@/components/student-loan-refi2/sections/EmotionalCTA3';
import PoweredBySuperMoney from '@/components/PoweredBySuperMoney';
// ExternalLinkModal removed; open affiliate links in new tab instead
import {
  TrendingDown,
  Layers,
  Calendar,
  UserCheck,
  Ban,
  BarChart,
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  X,
  Lock,
  Activity,
  ChevronDown,
  AlertTriangle,
  DollarSign,
  Users,
  Award,
  Check
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const StudentLoanRefi2 = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [loanAmount, setLoanAmount] = useState(50000);
  const [currentRate, setCurrentRate] = useState(7);
  const [newRate, setNewRate] = useState(4.5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState('');

  const affiliateLink = "https://track.supermoney.com/aff_c?offer_id=1629&aff_id=2815";

  const handleAffiliateClick = () => {
    setSelectedUrl(affiliateLink);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (!isModalOpen || !selectedUrl) return;
    const popup = window.open(selectedUrl, '_blank', 'noopener,noreferrer');
    if (popup) popup.focus();
    setIsModalOpen(false);
  }, [isModalOpen, selectedUrl]);

  const calculateSavings = () => {
    const monthlyPaymentOld = (loanAmount * (currentRate / 100 / 12)) / (1 - Math.pow(1 + (currentRate / 100 / 12), -120));
    const monthlyPaymentNew = (loanAmount * (newRate / 100 / 12)) / (1 - Math.pow(1 + (newRate / 100 / 12), -120));
    const totalOld = monthlyPaymentOld * 120;
    const totalNew = monthlyPaymentNew * 120;
    
    return {
      monthlySavings: Math.round(monthlyPaymentOld - monthlyPaymentNew),
      totalSavings: Math.round(totalOld - totalNew),
      oldPayment: Math.round(monthlyPaymentOld),
      newPayment: Math.round(monthlyPaymentNew)
    };
  };

  const savings = calculateSavings();

  const faqs = [
    {
      question: "Will checking my rate hurt my credit score?",
      answer: "No! Checking your rate only requires a soft credit pull, which doesn't affect your credit score. Only when you formally apply with a lender will a hard credit inquiry be performed."
    },
    {
      question: "How much can I save by refinancing my student loans?",
      answer: "Savings vary based on your current rate, new rate, and loan balance. On average, borrowers save $20,000+ over the life of their loan. Some save even more if they have high-interest private loans or significant debt."
    },
    {
      question: "Can I refinance both federal and private student loans?",
      answer: "Yes, you can refinance both federal and private loans into one new private loan. However, refinancing federal loans means losing federal benefits like income-driven repayment, PSLF, and forbearance options."
    },
    {
      question: "What credit score do I need to refinance?",
      answer: "Most lenders require a minimum credit score of 650-660, though some may work with scores as low as 640. The higher your credit score, the better rate you'll qualify for."
    },
    {
      question: "How long does the refinancing process take?",
      answer: "Checking rates takes just 2-3 minutes. Once you choose a lender and apply, the process typically takes 2-4 weeks from application to disbursement."
    },
    {
      question: "What is the minimum loan amount I can refinance?",
      answer: "Most lenders require a minimum balance of $5,000 to refinance. There's typically a maximum of $300,000-$500,000 depending on the lender."
    },
    {
      question: "Do I need to be employed to refinance?",
      answer: "Yes, most lenders require steady employment and verifiable income. Some lenders may consider other income sources like spousal income or investments."
    },
    {
      question: "Can I refinance while I'm still in school?",
      answer: "No, you typically need to have graduated and completed your grace period before refinancing. Lenders want to see you've established employment and steady income."
    },
    {
      question: "Will I lose my grace period if I refinance?",
      answer: "Yes, refinancing converts your loans into a new private loan with immediate repayment. However, some lenders offer a brief forbearance period after refinancing."
    },
    {
      question: "What happens to my original loans when I refinance?",
      answer: "Your new lender pays off your existing loans directly. Your original loans are closed, and you'll only have the new refinanced loan to repay."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Student Loan Refinancing | Lower Rates & Payments | Mesa Group Consulting"
        description="Refinance student loans to lower rates, reduce payments, and save thousands. Compare top lenders and get expert guidance from Mesa Group Consulting."
        canonicalUrl="/student-loan-refi"
      />
      <Header />

      {/* HERO SECTION */}
      <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              Trusted Student Loan Refinancing Partner | Compare Top-Rated Lenders
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Lower Your <span className="text-[#f9c65d]">Student Loan Rate</span> and Save Thousands
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Compare personalized refinancing offers from multiple lenders in minutes. It's free, easy, and won't affect your credit score.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <div className="inline-block">
                <a
                  href={affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500"
                >
                  Check Your Rates Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <PoweredBySuperMoney className="mt-3" />
              </div>
              
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-gray-300 self-start"
              >
                How It Works
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span>No application fees</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-green-600" />
                <span>Won't hurt your credit score</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-green-600" />
                <span>Takes 2 minutes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST INDICATORS */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-mgc-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">$20,000+</div>
              <div className="text-lg text-white/90">Average savings over loan lifetime</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">2 Minutes</div>
              <div className="text-lg text-white/90">To check your personalized rates</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100+ Lenders</div>
              <div className="text-lg text-white/90">Compare offers in one place</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY REFINANCE */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Refinance Your <span className="text-[#f9c65d]">Student Loans?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Refinancing can help you save money, simplify payments, and pay off your debt faster.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#fef9ed] rounded-xl p-8 border-2 border-[#f9c65d]/30">
              <div className="w-12 h-12 bg-[#f9c65d] rounded-full flex items-center justify-center mb-4">
                <TrendingDown className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lower Your Interest Rate</h3>
              <p className="text-gray-700">
                If your credit has improved or market rates have dropped, you could qualify for a significantly lower rate, saving thousands over time.
              </p>
            </div>

            <div className="bg-[#fef9ed] rounded-xl p-8 border-2 border-[#f9c65d]/30">
              <div className="w-12 h-12 bg-[#f9c65d] rounded-full flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reduce Monthly Payments</h3>
              <p className="text-gray-700">
                Lower rates or extended terms can reduce your monthly burden, freeing up cash for other goals like buying a home or building savings.
              </p>
            </div>

            <div className="bg-[#fef9ed] rounded-xl p-8 border-2 border-[#f9c65d]/30">
              <div className="w-12 h-12 bg-[#f9c65d] rounded-full flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Simplify Multiple Loans</h3>
              <p className="text-gray-700">
                Combine several loans into one convenient payment with a single lender, eliminating confusion and missed payments.
              </p>
            </div>

            <div className="bg-[#fef9ed] rounded-xl p-8 border-2 border-[#f9c65d]/30">
              <div className="w-12 h-12 bg-[#f9c65d] rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Choose Your Repayment Term</h3>
              <p className="text-gray-700">
                Select a term (5-20 years) that fits your budget and goals. Pay off faster to save on interest, or extend for lower monthly payments.
              </p>
            </div>

            <div className="bg-[#fef9ed] rounded-xl p-8 border-2 border-[#f9c65d]/30">
              <div className="w-12 h-12 bg-[#f9c65d] rounded-full flex items-center justify-center mb-4">
                <UserCheck className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Release Your Co-signer</h3>
              <p className="text-gray-700">
                If you originally needed a co-signer but now qualify on your own, refinancing can release them from the loan obligation.
              </p>
            </div>

            <div className="bg-[#fef9ed] rounded-xl p-8 border-2 border-[#f9c65d]/30">
              <div className="w-12 h-12 bg-[#f9c65d] rounded-full flex items-center justify-center mb-4">
                <Ban className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">No Prepayment Penalties</h3>
              <p className="text-gray-700">
                Most lenders don't charge fees for paying off your loan early, allowing you to save even more by accelerating payments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EMOTIONAL CTA 1 */}
      <EmotionalCTA1 setIsModalOpen={setIsModalOpen} setSelectedUrl={setSelectedUrl} />

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How Student Loan <span className="text-[#f9c65d]">Refinancing Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting started is quick and easy. Here's what to expect:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="relative">
              <div className="bg-white rounded-xl p-8 border-2 border-[#f9c65d]/30 shadow-lg h-full">
                <div className="w-16 h-16 bg-[#f9c65d] rounded-full flex items-center justify-center text-gray-900 text-2xl font-bold mb-6">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Compare Rates</h3>
                <p className="text-gray-700 mb-4">
                  Fill out a quick form with your loan details and financial info. You'll receive personalized rate quotes from multiple lenders in minutes.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Soft credit pull only</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>No impact on credit score</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Takes 2-3 minutes</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl p-8 border-2 border-[#f9c65d]/30 shadow-lg h-full">
                <div className="w-16 h-16 bg-[#f9c65d] rounded-full flex items-center justify-center text-gray-900 text-2xl font-bold mb-6">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Choose Your Lender</h3>
                <p className="text-gray-700 mb-4">
                  Review and compare offers side-by-side. Consider rates, terms, monthly payments, and lender benefits before selecting the best fit.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Compare rates & terms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Review lender benefits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Select best option</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl p-8 border-2 border-[#f9c65d]/30 shadow-lg h-full">
                <div className="w-16 h-16 bg-[#f9c65d] rounded-full flex items-center justify-center text-gray-900 text-2xl font-bold mb-6">
                  3
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Finalize & Save</h3>
                <p className="text-gray-700 mb-4">
                  Complete your application with the chosen lender. They'll pay off your old loans directly, and you'll start making payments at your new, lower rate.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>2-4 week processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Old loans paid off</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Start saving immediately</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-block">
              <a
                href={affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Get Started - Check Rates
                <ArrowRight className="w-5 h-5" />
              </a>
              <PoweredBySuperMoney className="mt-3" />
            </div>
          </div>
        </div>
      </section>

      {/* WHO SHOULD REFINANCE */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Who Should <span className="text-[#f9c65d]">Refinance?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Refinancing isn't right for everyone. Here's how to know if it makes sense for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
            <div className="bg-green-50 border-2 border-green-300 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  You're a Good Candidate If:
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Your credit score has improved since taking out your loans (typically 650+ required)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">You have stable employment and steady income</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Your current interest rate is 6% or higher</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">You have private student loans or can afford to lose federal loan benefits</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">You want to simplify multiple loan payments</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">You're comfortable with a private lender</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                  <X className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  You Might Want to Wait If:
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <X className="w-6 h-6 text-gray-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">You're relying on income-driven repayment plans</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-6 h-6 text-gray-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">You're pursuing Public Service Loan Forgiveness (PSLF)</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-6 h-6 text-gray-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">You need federal forbearance or deferment options</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-6 h-6 text-gray-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Your income is unstable or you may face unemployment</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-6 h-6 text-gray-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">You have poor credit (under 650) and no co-signer</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-6 h-6 text-gray-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">You're currently in school or grace period</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-100 border-l-4 border-amber-600 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-gray-900 font-semibold mb-2">Important Note:</p>
                <p className="text-gray-700">
                  If you have federal student loans, carefully weigh the benefits of a lower rate against the loss of federal protections before refinancing. Once you refinance federal loans with a private lender, you cannot get those federal benefits back.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMOTIONAL CTA 2 */}
      <EmotionalCTA2 setIsModalOpen={setIsModalOpen} setSelectedUrl={setSelectedUrl} />

      {/* SAVINGS CALCULATOR */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#fef9ed] to-[#fdf6e3]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Calculate Your <span className="text-[#f9c65d]">Potential Savings</span>
            </h2>
            <p className="text-xl text-gray-600">
              See how much you could save by refinancing your student loans
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Total Loan Balance
                </label>
                <input
                  type="range"
                  min="10000"
                  max="200000"
                  step="5000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 bg-amber-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                />
                <div className="text-2xl font-bold text-gray-900 mt-2">
                  ${loanAmount.toLocaleString()}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Current Interest Rate
                </label>
                <input
                  type="range"
                  min="3"
                  max="12"
                  step="0.5"
                  value={currentRate}
                  onChange={(e) => setCurrentRate(Number(e.target.value))}
                  className="w-full h-2 bg-amber-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                />
                <div className="text-2xl font-bold text-gray-900 mt-2">
                  {currentRate.toFixed(1)}%
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  New Interest Rate
                </label>
                <input
                  type="range"
                  min="2"
                  max="10"
                  step="0.5"
                  value={newRate}
                  onChange={(e) => setNewRate(Number(e.target.value))}
                  className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                />
                <div className="text-2xl font-bold text-green-600 mt-2">
                  {newRate.toFixed(1)}%
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="text-sm font-semibold text-gray-600 mb-2">Rate Reduction</div>
                  <div className="text-3xl font-bold text-[#bb9446]">
                    {(currentRate - newRate).toFixed(1)}%
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t-2 border-gray-200 pt-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#fef9ed] rounded-xl p-6 border-2 border-[#f9c65d]/30">
                  <div className="text-sm font-semibold text-gray-600 mb-2">Monthly Savings</div>
                  <div className="text-4xl font-bold text-[#bb9446] mb-2">
                    ${savings.monthlySavings.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">
                    ${savings.oldPayment.toLocaleString()}/mo → ${savings.newPayment.toLocaleString()}/mo
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                  <div className="text-sm font-semibold text-gray-600 mb-2">Total Savings (10 years)</div>
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    ${savings.totalSavings.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">
                    Over the life of your loan
                  </div>
                </div>
              </div>
            </div>

                <div className="text-center mt-8">
              <div className="inline-block">
                <a
                  href={affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Check My Actual Rate
                  <ArrowRight className="w-5 h-5" />
                </a>
                <PoweredBySuperMoney className="mt-3" />
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Won't affect your credit score • Takes 2 minutes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FIXED VS VARIABLE */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Fixed vs Variable <span className="text-[#f9c65d]">Interest Rates</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding your rate options helps you choose the best loan for your situation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Fixed Rate</h3>
              </div>
              
              <p className="text-gray-700 mb-6">
                Your interest rate stays the same for the entire loan term, providing predictable monthly payments.
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Pros:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Predictable monthly payments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Protected if rates increase</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Easier to budget</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Peace of mind</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cons:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Typically higher initial rate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Won't benefit if rates drop</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-100 border-l-4 border-blue-600 rounded p-4">
                <p className="text-sm text-gray-900 font-semibold">
                  Best for: Risk-averse borrowers who want payment stability
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border-2 border-green-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Variable Rate</h3>
              </div>
              
              <p className="text-gray-700 mb-6">
                Your rate can change based on market conditions, typically tied to LIBOR or SOFR benchmarks.
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Pros:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Lower initial rate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Can save more if rates drop</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Good for short-term loans</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Often includes rate caps</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cons:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Unpredictable payments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Could increase significantly</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-100 border-l-4 border-green-600 rounded p-4">
                <p className="text-sm text-gray-900 font-semibold">
                  Best for: Borrowers planning to pay off quickly or expecting rates to fall
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-4xl mx-auto bg-amber-50 border-2 border-amber-200 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Making Your Choice
                </h3>
                <p className="text-gray-700 mb-4">
                  Most borrowers choose fixed rates for the predictability and peace of mind. However, variable rates can work well if you plan to pay off your loan quickly (within 5 years) or if you expect rates to remain stable or decrease.
                </p>
                <p className="text-gray-700">
                  Compare offers for both rate types to see which saves you the most based on your financial goals and risk tolerance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMOTIONAL CTA 3 */}
      <EmotionalCTA3 setIsModalOpen={setIsModalOpen} setSelectedUrl={setSelectedUrl} />

      {/* FAQ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-[#f9c65d]">Questions</span>
            </h2>
            <p className="text-xl text-gray-700">
              Get answers to common questions about student loan refinancing.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-amber-300 transition-colors duration-300">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-white/50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-600 flex-shrink-0 transition-transform duration-300 ${
                      openFAQ === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openFAQ === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 pt-2 bg-white">
                    <div className="text-gray-700 leading-relaxed">{faq.answer}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-block">
              <a
                href={affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Get Your Personalized Rates
                <ArrowRight className="w-5 h-5" />
              </a>
              <PoweredBySuperMoney className="mt-3" />
            </div>
          </div>
        </div>
      </section>

      {/* IMPORTANT CONSIDERATIONS */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-red-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-6">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Important <span className="text-[#f9c65d]">Considerations</span>
            </h2>
            <p className="text-xl text-gray-600">
              Understand what you're giving up when refinancing federal student loans
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-red-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Federal Benefits You'll Lose When Refinancing:
            </h3>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900">Income-Driven Repayment Plans</strong>
                  <span className="text-gray-700"> - Payments based on your income and family size</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900">Public Service Loan Forgiveness (PSLF)</strong>
                  <span className="text-gray-700"> - Forgiveness after 10 years of public service employment</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900">Forbearance & Deferment</strong>
                  <span className="text-gray-700"> - Temporarily pause payments during hardship</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900">Loan Forgiveness Programs</strong>
                  <span className="text-gray-700"> - Teacher forgiveness, disability discharge, death discharge</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900">Federal Consolidation</strong>
                  <span className="text-gray-700"> - Ability to consolidate federal loans in the future</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900">Flexible Payment Options</strong>
                  <span className="text-gray-700"> - Graduated, extended, and alternative repayment plans</span>
                </div>
              </li>
            </ul>

            <div className="bg-amber-100 rounded-lg p-6 border-2 border-amber-600 mb-8">
              <p className="text-gray-900 font-bold text-lg">
                ⚠️ This is a one-way decision. Once you refinance federal loans, you cannot convert them back.
              </p>
            </div>

            <div className="bg-green-50 border-2 border-green-300 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                When Refinancing Makes Sense:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Your savings significantly outweigh the value of federal protections</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">You have stable employment in the private sector</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">You don't anticipate needing income-driven repayment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">You're not pursuing Public Service Loan Forgiveness</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">You have an emergency fund to cover 6+ months of expenses</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Your career path is stable with low unemployment risk</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-block">
              <a
                href={affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                I Understand - Check My Rates
                <ArrowRight className="w-5 h-5" />
              </a>
              <PoweredBySuperMoney className="mt-3" />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#FFFBEC] from-40% to-[#FFECD7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Trust Recap */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">No Credit Impact</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">Compare 10+ Lenders</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">2-Minute Process</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">Save Up to $288/Month</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">No Obligation</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">100% Free Comparison</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">Secure & Private</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">Soft Credit Check Only</span>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ready to Start <span className="text-[#f9c65d]">Saving</span>?
            </h2>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
              Compare 10+ lenders in 2 minutes, with zero impact to your credit score.
            </p>

            <a
              href={affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 mb-4"
            >
              Check My New Rate →
            </a>
            <PoweredBySuperMoney className="mb-4" />
            
            <p className="text-gray-600">
              Or call us: <a href="tel:6613103040" className="text-[#bb9446] hover:underline font-semibold">(661) 310-3040</a>
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default StudentLoanRefi2;
