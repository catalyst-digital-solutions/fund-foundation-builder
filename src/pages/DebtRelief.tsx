import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmotionalCTA1 from "@/components/debt-relief/sections/EmotionalCTA1";
import EmotionalCTA2 from "@/components/debt-relief/sections/EmotionalCTA2";
import EmotionalCTA3 from "@/components/debt-relief/sections/EmotionalCTA3";
import { 
  AlertCircle, 
  CreditCard, 
  TrendingDown, 
  Users, 
  DollarSign, 
  Shield, 
  Calendar, 
  Clock, 
  CreditCard as CardIcon,
  Heart,
  Scale,
  CheckCircle,
  ChevronDown
} from 'lucide-react';

const DebtRelief = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does Mesa Group Consulting's Debt Relief program work?",
      answer: "Our program works by negotiating with your creditors to settle debts for 30-50% less than you owe. You stop paying creditors directly and instead make one affordable monthly deposit into a dedicated savings account under your control. As funds accumulate, our expert negotiators work with your creditors to secure settlement offers. When settlements are reached, creditors are paid directly from your account. The entire process typically takes 20-48 months to complete."
    },
    {
      question: "Is debt relief better than making minimum payments?",
      answer: "Absolutely. If you only make minimum payments on a $20,000 credit card balance at 18% APR, you'll pay over $50,000 total and take 30+ years to pay it off. With debt relief, you could settle that same debt for $10,000-$14,000 (including fees) and be debt-free in 2-4 years. You save tens of thousands of dollars and decades of stress."
    },
    {
      question: "How much will I save with Mesa Group Consulting's program?",
      answer: "On average, clients save 30-50% on enrolled debts (approximately 43% average) before program fees. For example, if you have $30,000 in credit card debt, you might settle for $15,000-$21,000 total, including program fees. Actual savings depend on your creditors, debt types, and negotiation outcomes. During your free consultation, we'll provide a personalized savings estimate."
    },
    {
      question: "Do I qualify for debt relief?",
      answer: "You may qualify if: (1) You have at least $10,000 in unsecured debt, (2) You're experiencing financial hardship or struggling with payments, (3) Your debts are with creditors who negotiate with debt relief companies, and (4) Your debts are unsecured (not backed by collateral). Federal student loans, secured debts like mortgages or car loans, child support, and most tax debts typically don't qualify. Book a free consultation to determine your eligibility."
    },
    {
      question: "What does Mesa Group Consulting's program cost?",
      answer: "We charge NO UPFRONT FEES. Our fees are performance-based and range from 14-25% of your enrolled debt amount, charged only as debts are successfully settled. For example, on $30,000 enrolled debt with a 20% fee structure, our total fees would be $6,000, paid gradually as each debt settles. You pay nothing until we deliver results. This is required by FTC regulations."
    },
    {
      question: "What's the difference between debt relief and debt consolidation?",
      answer: "Debt consolidation combines multiple debts into one loan—you still owe 100% of the principal plus interest, and you need good credit to qualify. Debt relief (settlement) negotiates with creditors to reduce the total amount you owe by 30-50%. You don't need good credit to qualify for debt relief, and you end up paying significantly less than you originally owed."
    },
    {
      question: "How long will it take to be debt-free?",
      answer: "Most debt relief programs take 20-48 months to complete, depending on your total debt amount, monthly deposit capacity, and creditor cooperation. Your first settlement typically occurs within 4-7 months of enrollment, with additional settlements approximately every 3-6 months thereafter. We'll provide a realistic timeline during your consultation based on your specific situation."
    },
    {
      question: "Will debt relief impact my credit score?",
      answer: "Yes, debt relief will likely have a negative impact on your credit score temporarily because you'll stop making payments to creditors during negotiations. However, if your credit is already damaged from late payments or collections, the impact may be minimal. The alternative—bankruptcy—is far more damaging and lasts 7-10 years. Debt relief allows you to rebuild credit faster after completion, and most clients see their scores recover within 2-3 years."
    },
    {
      question: "Can you help if I'm already facing lawsuits or judgments?",
      answer: "Yes! We can often negotiate settlements even after lawsuits are filed or judgments are entered. Early intervention is best, but we work with collection attorneys and creditors at all stages of the collection process. In some cases, we can negotiate to stop wage garnishments or bank levies as part of settlement agreements."
    },
    {
      question: "What happens if I can't complete the program?",
      answer: "You can withdraw from the program at any time without penalty. If you withdraw, you'll receive all funds from your dedicated savings account, minus any fees earned by Mesa Group Consulting for completed settlements and any fees paid to third-party service providers. We work with you to create sustainable payment plans, but life circumstances change and we understand that."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      
      {/* SECTION 1: HERO */}
      <section className="bg-gradient-to-br from-white via-amber-50 to-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          
          <div className="inline-block bg-white px-6 py-3 rounded-full text-sm font-bold mb-8 border-2 border-gray-200 shadow-sm">
            <span className="text-gray-700">Mesa Group Consulting | Debt Relief Specialists Since 2015</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Stop Drowning in Debt.<br />Start <span className="text-amber-600">Living Your Life</span> Again.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Buried under credit card debt? Collections calling? Can't afford more than minimum payments? <strong>Mesa Group Consulting's Debt Relief program</strong> reduces your debt by 30-50% and replaces multiple payments with one affordable monthly payment.
          </p>

          <div className="bg-white rounded-2xl p-8 mb-10 shadow-2xl max-w-3xl mx-auto border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              How Debt Relief Works:
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center mb-6">
              <div>
                <div className="text-4xl font-bold text-amber-600 mb-2">30-50%</div>
                <div className="text-sm text-gray-600">Average Debt Reduction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-amber-600 mb-2">1</div>
                <div className="text-sm text-gray-600">Affordable Monthly Payment</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-amber-600 mb-2">20-48</div>
                <div className="text-sm text-gray-600">Months to Debt-Free</div>
              </div>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We negotiate with your creditors, collection agencies, and attorneys to settle your debts for <strong>significantly less than you owe</strong>—while you focus on rebuilding your financial future, not drowning in debt.
            </p>
            
            <a
              href="https://mesagroupcapital.com/debt-analysis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-400 hover:bg-amber-500 text-gray-900 text-xl font-bold px-12 py-5 rounded-lg transition-all duration-200 shadow-xl hover:shadow-2xl border-2 border-amber-500"
            >
              Book Your Free Debt Analysis
            </a>
            <p className="text-sm text-gray-600 mt-4 flex items-center justify-center gap-4 flex-wrap">
              <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-600" /> No upfront fees</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-600" /> Minimum $10,000 debt required</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-600" /> Results in 4-7 months</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:6613103040"
              className="inline-block bg-white text-gray-700 border-2 border-gray-300 text-xl font-semibold px-10 py-4 rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-lg"
            >
              Call (661) 310-3040
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 2: THE PROBLEM (PAIN POINTS) */}
      <section className="py-20 px-6" style={{ backgroundColor: '#3e3e3e' }}>
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Are You Trapped in the <span className="text-amber-400">Debt Cycle</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              You're not alone. These are the signs that debt relief might be your best option.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/20 hover:border-amber-400 hover:shadow-lg transition-all">
              <div className="mb-4 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Creditor Harassment
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Constant collection calls. Threatening letters. Lawsuits filed. You're afraid to answer your phone or check your mail.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/20 hover:border-amber-400 hover:shadow-lg transition-all">
              <div className="mb-4 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Minimum Payment Trap
              </h3>
              <p className="text-gray-300 leading-relaxed">
                You're making minimum payments but the balance never goes down. Interest eats up everything you pay—you're running in place.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/20 hover:border-amber-400 hover:shadow-lg transition-all">
              <div className="mb-4 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Can't Afford Payments
              </h3>
              <p className="text-gray-300 leading-relaxed">
                You have to choose between debt payments and groceries, rent, or utilities. There's nothing left at the end of the month.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/20 hover:border-amber-400 hover:shadow-lg transition-all">
              <div className="mb-4 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Family Stress
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Debt is destroying your peace of mind, your relationships, and your health. You can't see a way out.
              </p>
            </div>

          </div>

          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border-2 border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              There's a Better Way Than Bankruptcy
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6 max-w-3xl mx-auto">
              Debt relief through Mesa Group Consulting lets you settle debts for <strong>30-50% less than you owe</strong>, avoid bankruptcy, and protect your family's future—without destroying your credit for 7-10 years.
            </p>
            <a
              href="https://mesagroupcapital.com/debt-analysis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-400 hover:bg-amber-500 text-gray-900 text-xl font-bold px-10 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl border-2 border-amber-500"
            >
              Get Your Free Debt Analysis
            </a>
          </div>

        </div>
      </section>

      <EmotionalCTA1 />

      {/* SECTION 3: THE 4 BENEFITS */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How Debt Relief <span className="text-amber-600">Transforms Your Life</span>
            </h2>
            <p className="text-xl text-gray-600">
              Stop managing the debt crisis. Start living your life again.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-gray-100 hover:border-amber-400">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center">
                  <DollarSign className="w-8 h-8 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Reduce Your Debt by 30-50%
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    On average, our clients save <strong>43% on enrolled debts</strong> before fees. If you owe $50,000, you might settle for $25,000-$35,000 total. That's tens of thousands of dollars saved—money that stays in your pocket.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-gray-100 hover:border-amber-400">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Stop Creditor Harassment
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Once you enroll, <strong>we handle all creditor communication</strong>. No more collection calls. No more threatening letters. No more stress. Our certified Debt Specialists deal with creditors on your behalf.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-gray-100 hover:border-amber-400">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    One Affordable Monthly Payment
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Instead of juggling 5+ creditors with different due dates and amounts, you make <strong>one predictable monthly deposit</strong> into your own dedicated savings account. Simple. Manageable. Under your control.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-gray-100 hover:border-amber-400">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center">
                  <Clock className="w-8 h-8 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Be Debt-Free in 20-48 Months
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Most clients achieve complete debt freedom <strong>within 4 years or less</strong>—with the first settlement typically within 4-7 months. Compare that to 15+ years of minimum payments on credit cards.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <EmotionalCTA2 />

      {/* SECTION 4: TYPES OF DEBT WE HANDLE */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Types of Debt We Can <span className="text-amber-600">Settle</span>
            </h2>
            <p className="text-xl text-gray-600">
              Our program handles unsecured debts—those not backed by collateral like a house or car.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-amber-400 transition-all">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center">
                  <CardIcon className="w-5 h-5 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Credit Cards & Loans
                </h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Credit card debt</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Personal loans</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Lines of credit</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Payday loans</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Private student loans</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-amber-400 transition-all">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Medical & Other Debts
                </h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Medical bills</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Hospital debt</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Dental & veterinary bills</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Cellular/utility debts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Retail store cards</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-amber-400 transition-all">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center">
                  <Scale className="w-5 h-5 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Collections & Legal Debts
                </h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Collection agency accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Charged-off accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Judgments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Repossession deficiencies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Attorney-represented debts</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="mt-12 bg-gray-100 rounded-xl p-6">
            <p className="text-center text-gray-700 leading-relaxed">
              <strong>Note:</strong> Secured debts (mortgages, auto loans with collateral), federal student loans, child support, alimony, and certain tax obligations typically do not qualify. During your free consultation, we'll review your specific debt situation to determine eligibility.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 5: THE 5-STEP PROCESS */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              5 Steps to <span className="text-amber-600">Debt Freedom</span>
            </h2>
            <p className="text-xl text-gray-600">
              Our proven process has helped thousands of families escape the debt trap.
            </p>
          </div>

          <div className="space-y-8">
            
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-20 h-20 bg-amber-400 text-gray-900 rounded-full flex items-center justify-center text-3xl font-bold shadow-xl">
                1
              </div>
              <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Free Debt Consultation
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Connect:</strong> Book a free consultation with one of our certified Debt Specialists.<br />
                  <strong>Consult:</strong> Have an honest conversation about your debts, financial objectives, and available options.<br />
                  <strong>Personalize:</strong> We'll create a personalized debt relief plan that aligns with your specific needs and goals.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-20 h-20 bg-amber-400 text-gray-900 rounded-full flex items-center justify-center text-3xl font-bold shadow-xl">
                2
              </div>
              <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Establish Dedicated Savings Account
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We help you set up a dedicated savings account <strong>under your control</strong> with these features:<br />
                  • <strong>Halt High-Interest Payments:</strong> Stop paying creditors directly while we negotiate<br />
                  • <strong>Monthly Deposit:</strong> Make one affordable monthly deposit into your account<br />
                  • <strong>Accumulate Funds:</strong> Build up settlement funds that will be used for negotiations
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-20 h-20 bg-amber-400 text-gray-900 rounded-full flex items-center justify-center text-3xl font-bold shadow-xl">
                3
              </div>
              <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Professional Debt Negotiation
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our team of skilled negotiators works on your behalf:<br />
                  • <strong>Expert Negotiation:</strong> We negotiate with creditors, collection agencies, and attorneys using proven strategies<br />
                  • <strong>Settlement Notifications:</strong> You're promptly informed whenever a settlement offer is received<br />
                  • <strong>Your Choice:</strong> You have freedom to accept the offer or wait for a potentially better deal
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-20 h-20 bg-amber-400 text-gray-900 rounded-full flex items-center justify-center text-3xl font-bold shadow-xl">
                4
              </div>
              <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Debt Settlements & Payments
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Achieve significant debt reduction:<br />
                  • <strong>30-50% Reduction:</strong> Settle debts for a fraction of what you owed<br />
                  • <strong>First Settlement:</strong> Experience your first settlement within 4-7 months<br />
                  • <strong>Direct Payment:</strong> Creditors are paid directly from your dedicated account<br />
                  • <strong>Flexible Terms:</strong> Settlements can be spread over 12 months for manageable payments
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-20 h-20 bg-amber-400 text-gray-900 rounded-full flex items-center justify-center text-3xl font-bold shadow-xl">
                5
              </div>
              <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Achieve Debt Freedom
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Embark on a fresh start, free from the burden of debt!<br />
                  • <strong>Program Completion:</strong> Successfully navigate through our debt relief program<br />
                  • <strong>Debt-Free Future:</strong> Achieve freedom from debt within 20-60 months<br />
                  • <strong>Peace of Mind:</strong> Experience the tranquility of a life unburdened by debt
                </p>
              </div>
            </div>

          </div>

          <div className="mt-12 text-center">
            <a
              href="https://mesagroupcapital.com/debt-analysis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-400 hover:bg-amber-500 text-gray-900 text-xl font-bold px-12 py-5 rounded-lg transition-all duration-200 shadow-xl hover:shadow-2xl"
            >
              Start Your Debt-Free Journey Today
            </a>
            <p className="text-gray-600 mt-4">Minimum $10,000 in debt required • No upfront fees</p>
          </div>

        </div>
      </section>

      <EmotionalCTA3 />

      {/* SECTION 6: FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Debt Relief <span className="text-amber-600">Questions</span> Answered
            </h2>
            <p className="text-xl text-gray-700">
              Get clarity before booking your free consultation.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-amber-300 transition-colors duration-300">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-white/50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-amber-600 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 pt-2 bg-white">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 7: FINAL CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#FFFBEC] from-40% to-[#FFECD7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Trust Recap */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">No Upfront Fees</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">30-50% Average Savings</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">Certified Specialists</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">Results in 4-7 Months</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">One Monthly Payment</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">Debt-Free in 20-48 Months</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">We Handle Creditors</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">Proven Results</span>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Stop Drowning in Debt.<br />Start <span className="text-[#f9c65d]">Living Your Life</span> Again.
            </h2>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
              You didn't create this debt overnight, and you can't solve it overnight—but you <strong>can</strong> take the first step today. Let Mesa Group Consulting's <strong>Debt Relief specialists</strong> handle your creditors while you focus on what matters most.
            </p>

            <a
              href="https://mesagroupcapital.com/debt-analysis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 mb-4"
            >
              Schedule Free Consultation →
            </a>
            
            <p className="text-gray-600 mb-6">
              Or call us: <a href="tel:6613103040" className="text-[#bb9446] hover:underline font-semibold">(661) 310-3040</a>
            </p>
            <p className="text-sm text-gray-500">Minimum $10,000 debt required</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DebtRelief;