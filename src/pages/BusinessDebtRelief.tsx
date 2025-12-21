import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PoweredByMesaGroup from "@/components/PoweredByMesaGroup";
import { CalendlyPopupButton } from "@/components/CalendlyPopupButton";
import EmotionalCTA1 from "@/components/business-debt-relief/sections/EmotionalCTA1";
import EmotionalCTA2 from "@/components/business-debt-relief/sections/EmotionalCTA2";
import EmotionalCTA3 from "@/components/business-debt-relief/sections/EmotionalCTA3";
import FAQ from "@/components/business-debt-relief/sections/FAQ";
import { 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  AlertCircle, 
  TrendingDown, 
  Shield, 
  Users, 
  CreditCard, 
  DollarSign, 
  FileText, 
  Scale, 
  Building, 
  Briefcase,
  TrendingUp,
  Heart,
  Calendar,
  Clock,
  Lock,
  Check
} from 'lucide-react';

const BusinessDebtRelief = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      {/* SECTION 1: HERO SECTION */}
      <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200 mb-8">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-sm font-semibold text-gray-900">
              Mesa Group Capital | Business Debt Relief Specialists
            </span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Stop Hiding from <span className="text-[#f9c65d]">Creditors</span>.<br />
            Start Rebuilding Your <span className="text-[#f9c65d]">Business</span>.
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
            Drowning in business debt? Collections calling? Can't make payroll without creditor anxiety? 
            <strong> Mesa Group's Business Debt Relief program</strong> converts crushing debt into one 
            manageable payment—so you can get back to running your business.
          </p>
          
          {/* Key Benefits Bullets */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10 text-left max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-base font-semibold text-gray-900">Reduce Debt by 30-50%</p>
                <p className="text-sm text-gray-600">Settle for pennies on the dollar</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-base font-semibold text-gray-900">Avoid Bankruptcy</p>
                <p className="text-sm text-gray-600">Protect your business assets</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-base font-semibold text-gray-900">No Upfront Fees</p>
                <p className="text-sm text-gray-600">Pay only when debts settle</p>
              </div>
            </div>
          </div>
          
          {/* Dual CTA Buttons */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CalendlyPopupButton
                text="Book Free Debt Analysis"
                className="inline-flex items-center gap-2 bg-amber-400 text-gray-900 text-lg font-bold px-8 py-4 rounded-lg hover:bg-amber-500 transition-all duration-200 shadow-lg justify-center border-2 border-amber-500"
                showArrow={true}
                prefillOptions={{
                  customAnswers: {
                    serviceType: 'Business services',
                    primaryGoal: 'Lower interest rates/debt'
                  },
                  utm: {
                    source: 'business-debt-relief-page',
                    medium: 'website',
                    campaign: 'business-debt-relief',
                    content: 'hero-cta'
                  }
                }}
              />
              <a 
                href="tel:661-310-3040"
                className="inline-flex items-center gap-2 bg-white text-gray-900 text-lg font-semibold px-8 py-4 rounded-lg border-2 border-gray-300 hover:border-amber-400 hover:bg-gray-50 transition-all duration-200 justify-center"
              >
                <Phone className="w-5 h-5" />
                Call (661) 310-3040
              </a>
            </div>
            <PoweredByMesaGroup className="mt-3" />
          </div>
          
          {/* Trust Line */}
          <p className="text-sm text-gray-600 mt-6">
            Free consultation • No obligation • Confidential
          </p>
          
        </div>
      </section>

      {/* SECTION 2: PROBLEM / PAIN POINTS */}
      <section className="bg-[#F9F7F4] py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Is <span className="text-[#f9c65d]">Business Debt</span> Controlling Your Life?
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed">
            You're not alone. Thousands of business owners face the same creditor pressure, sleepless nights, 
            and constant worry about keeping their company afloat.
          </p>
          
          {/* Pain Points Grid */}
          <div className="grid md:grid-cols-2 gap-6 text-left">
            
            <div className="bg-white rounded-lg p-6 border-l-4 border-red-500 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-red-500" />
                Creditor Harassment
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Daily calls from collection agencies, attorneys, and creditors demanding immediate payment. 
                You're afraid to answer your phone or check your mail.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 border-l-4 border-red-500 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-red-500" />
                Lawsuit Threats & Judgments
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Facing lawsuits, wage garnishments, or bank levies? Legal threats keep you up at night 
                and distract you from running your business.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 border-l-4 border-red-500 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-red-500" />
                Cash Flow Crisis
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Juggling multiple minimum payments with different due dates leaves nothing for payroll, 
                inventory, or growth. Your business is suffocating.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 border-l-4 border-red-500 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-red-500" />
                Bankruptcy Looming
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Considering bankruptcy but terrified of losing your business assets, damaging your reputation, 
                and paying expensive attorney fees just to file.
              </p>
            </div>
            
          </div>
          
          {/* Transition Statement */}
          <div className="mt-12 bg-amber-400 rounded-xl p-8">
            <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              There's a Better Way Than Bankruptcy
            </p>
            <p className="text-lg text-gray-800 mt-4">
              Business debt relief settles debts for <strong>30-50% less than you owe</strong>, 
              protects your assets, and lets you continue operating while we negotiate on your behalf.
            </p>
          </div>
          
        </div>
      </section>

      {/* SECTION 3: SOLUTION OVERVIEW */}
      <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How <span className="text-[#f9c65d]">Business Debt Relief</span> Works
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Mesa Group Capital's business debt relief program restructures your unaffordable debt into 
              <strong> one manageable monthly payment</strong> you can actually afford—while our expert negotiators 
              settle your debts for pennies on the dollar.
            </p>
          </div>
          
          {/* Three-Column Value Props */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Reduce Total Debt
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Settle for <strong>30-50% less</strong> than what you owe. On average, clients complete the 
                program paying back just 89% of their debt, including our fees.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Protect Your Assets
              </h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Guaranteed asset protection</strong> means you avoid bankruptcy and keep your business 
                intact. No liquidation. No losing control of your company.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                We Handle Creditors
              </h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Stop creditor harassment immediately.</strong> Refer all collection calls, attorney threats, 
                and aggressive creditors to us. Get back to running your business.
              </p>
            </div>
            
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <div className="inline-block">
              <CalendlyPopupButton
                text="Get Your Free Debt Analysis"
                className="inline-flex items-center gap-2 bg-amber-400 text-gray-900 text-lg font-bold px-8 py-4 rounded-lg hover:bg-amber-500 transition-all duration-200 shadow-lg"
                showArrow={true}
                prefillOptions={{
                  customAnswers: {
                    serviceType: 'Business services',
                    primaryGoal: 'Lower interest rates/debt'
                  },
                  utm: {
                    source: 'business-debt-relief-page',
                    medium: 'website',
                    campaign: 'business-debt-relief',
                    content: 'how-it-works-cta'
                  }
                }}
              />
              <PoweredByMesaGroup className="mt-4" />
            </div>
            <p className="text-sm text-gray-600 mt-4">
              No upfront costs • No obligation • Confidential consultation
            </p>
          </div>
          
        </div>
      </section>

      {/* EMOTIONAL CTA 1 */}
      <EmotionalCTA1 />

      {/* SECTION 4: TYPES OF DEBT WE HANDLE */}
      <section className="bg-[#F9F7F4] py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              We Resolve <span className="text-[#f9c65d]">All Types</span> of Business Debt
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              From merchant cash advances to credit cards, lawsuits to tax debts—we routinely settle every 
              category of business debt, including secured debts and personal guarantees.
            </p>
          </div>
          
          {/* Debt Types Grid - 3x2 */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <CreditCard className="w-8 h-8 text-[#3e3e3e]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Credit Cards</h3>
                  <p className="text-gray-700">Business credit cards with high balances and interest rates crushing your cash flow.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <DollarSign className="w-8 h-8 text-[#3e3e3e]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Cash Advances (MCA)</h3>
                  <p className="text-gray-700">Merchant cash advances with daily payments draining your business bank account.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <FileText className="w-8 h-8 text-[#3e3e3e]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Supplier/Vendor Debt</h3>
                  <p className="text-gray-700">Outstanding invoices and payment terms with vendors threatening to cut you off.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Scale className="w-8 h-8 text-[#3e3e3e]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Lawsuits & Judgments</h3>
                  <p className="text-gray-700">Active lawsuits, court judgments, wage garnishments, and legal threats.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Building className="w-8 h-8 text-[#3e3e3e]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Tax Debt (IRS/State)</h3>
                  <p className="text-gray-700">Federal and state tax liabilities, payroll tax debt, and IRS notices.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Briefcase className="w-8 h-8 text-[#3e3e3e]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Personal Guarantees</h3>
                  <p className="text-gray-700">Business debts with personal guarantees putting your personal assets at risk.</p>
                </div>
              </div>
            </div>
            
          </div>
          
          {/* Additional Note */}
          <div className="mt-12 bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
            <p className="text-base text-gray-800 leading-relaxed">
              <strong>Note:</strong> We handle both secured and unsecured business debts. Even if creditors have 
              liens or collateral, our experts routinely negotiate favorable settlements that protect your business assets.
            </p>
          </div>
          
        </div>
      </section>

      {/* SECTION 5: FOUR CORE BENEFITS */}
      <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How Business Debt Relief <span className="text-[#f9c65d]">Transforms</span> Your Situation
            </h2>
            <p className="text-lg md:text-xl text-gray-700">
              Stop managing the debt crisis. Start managing your business again.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Benefit 1: Cash Flow */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-amber-400 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Increase Your Cash Flow
                  </h3>
                  <p className="text-gray-800 leading-relaxed mb-4">
                    Short-term debt converted into a manageable long-term plan means <strong>more money available 
                    for operations</strong>. Instead of paying $5,000/month toward debt, you might pay $2,000/month 
                    while we negotiate settlements—freeing up $3,000/month for payroll, inventory, and growth.
                  </p>
                  <div className="bg-white/50 rounded-lg p-4 border border-amber-200">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Example:</p>
                    <p className="text-sm text-gray-700">
                      <strong>$100,000 in debt</strong> with $5,000/month payments becomes 
                      <strong> $2,000/month</strong> in our program = <strong className="text-[#3e3e3e]">$3,000/month 
                      saved for business operations</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Benefit 2: Quality of Life */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-amber-400 rounded-lg flex items-center justify-center">
                  <Heart className="w-8 h-8 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Improve Your Quality of Life
                  </h3>
                  <p className="text-gray-800 leading-relaxed mb-4">
                    <strong>We deal with creditors, collection agencies, and attorneys</strong> so you can get back 
                    to doing what's important: creating revenue, not hiding from calls. Sleep better knowing experts 
                    are handling your debt crisis while you run your business.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">No more creditor harassment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Dedicated negotiation team</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Peace of mind restored</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Benefit 3: Avoid Legal Fees */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-amber-400 rounded-lg flex items-center justify-center">
                  <Scale className="w-8 h-8 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Avoid Unnecessary Legal Fees
                  </h3>
                  <p className="text-gray-800 leading-relaxed mb-4">
                    <strong>Debts can be settled without attorneys</strong>. Bankruptcy lawyers charge 
                    $3,000-$10,000+ just to file—and then you lose control of your business assets. Debt settlement 
                    costs a fraction and you keep your business intact.
                  </p>
                  <div className="bg-white/50 rounded-lg p-4 border border-amber-200">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Cost Comparison:</p>
                    <p className="text-sm text-gray-700">
                      <strong>Bankruptcy:</strong> $5,000-$10,000+ in legal fees + asset loss<br />
                      <strong>Debt Relief:</strong> Performance-based fees only when debts settle
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Benefit 4: Fixed Payments */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-amber-400 rounded-lg flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Fixed & Affordable Payments
                  </h3>
                  <p className="text-gray-800 leading-relaxed mb-4">
                    <strong>Cash outlay can be forecasted and managed better.</strong> No more juggling multiple 
                    creditors with different due dates and interest rates. One predictable monthly payment lets you 
                    plan your business finances with confidence.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">One monthly payment based on your budget</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Predictable financial planning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">No surprise payments or fees</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
          
          {/* CTA */}
          <div className="mt-12 text-center">
            <div className="inline-block">
              <CalendlyPopupButton
                text="Schedule Your Free Consultation"
                className="inline-flex items-center gap-2 bg-amber-400 text-gray-900 text-lg font-bold px-8 py-4 rounded-lg hover:bg-amber-500 transition-all duration-200 shadow-lg"
                showArrow={true}
                prefillOptions={{
                  customAnswers: {
                    serviceType: 'Business services',
                    primaryGoal: 'Lower interest rates/debt'
                  },
                  utm: {
                    source: 'business-debt-relief-page',
                    medium: 'website',
                    campaign: 'business-debt-relief',
                    content: 'process-cta'
                  }
                }}
              />
              <PoweredByMesaGroup className="mt-4" />
            </div>
          </div>
          
        </div>
      </section>

      {/* EMOTIONAL CTA 2 */}
      <EmotionalCTA2 />

      {/* SECTION 6: FIVE-STEP PROCESS */}
      <section className="bg-[#F9F7F4] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Your Path to <span className="text-[#f9c65d]">Debt Freedom</span> in 5 Steps
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              From your first consultation to complete debt resolution, here's exactly how our proven process works.
            </p>
          </div>
          
          <div className="space-y-8">
            
            {/* Step 1 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-900">1</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Free Consultation & Debt Analysis</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We review your complete financial situation—cash flow, debt types, creditor pressures, and business 
                  goals. Our experts determine if you qualify for the program and provide a customized savings estimate.
                </p>
                <div className="flex items-center gap-2 text-sm text-amber-400">
                  <Clock className="w-4 h-4" />
                  <span>Typical duration: 30-45 minutes</span>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-900">2</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Enrollment & Program Setup</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Once you decide to proceed, we set up your dedicated account with 24/7 online access. You'll be 
                  assigned a restructuring team and we'll establish your affordable monthly payment based on your budget.
                </p>
                <div className="flex items-center gap-2 text-sm text-amber-400">
                  <Shield className="w-4 h-4" />
                  <span>Guaranteed asset protection activated</span>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-900">3</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Creditor Negotiation Begins</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Our expert negotiators contact your creditors immediately. We handle all communication—you refer 
                  collection calls to us. We begin negotiations to settle debts for pennies on the dollar while you 
                  focus on your business.
                </p>
                <div className="flex items-center gap-2 text-sm text-amber-400">
                  <Phone className="w-4 h-4" />
                  <span>All creditor harassment stops for you</span>
                </div>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-900">4</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Settlements & Debt Reduction</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  As funds accumulate from your monthly payments, we strategically settle debts one by one. You'll 
                  see real-time updates in your online dashboard. Some creditors settle quickly (4-7 months), others 
                  take longer—we negotiate based on your budget and priorities.
                </p>
                <div className="flex items-center gap-2 text-sm text-amber-400">
                  <TrendingDown className="w-4 h-4" />
                  <span>Average savings: 30-50% on settled debts</span>
                </div>
              </div>
            </div>
            
            {/* Step 5 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-900">5</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Debt Freedom & Business Recovery</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Once all enrolled debts are settled (typically 2-4 years), you graduate the program completely 
                  debt-free. With improved cash flow and no creditor pressure, you can focus on growing your business 
                  and rebuilding credit.
                </p>
                <div className="flex items-center gap-2 text-sm text-amber-400">
                  <CheckCircle className="w-4 h-4" />
                  <span>Program completion: 2-4 years on average</span>
                </div>
              </div>
            </div>
            
          </div>
          
          {/* CTA */}
          <div className="mt-12 text-center bg-amber-400 rounded-xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey to Debt Freedom?
            </h3>
            <p className="text-lg text-gray-800 mb-6">
              Book your free consultation now. No obligation, no upfront fees, completely confidential.
            </p>
            <div className="flex flex-col items-center">
              <CalendlyPopupButton
                text="Book Free Consultation Now"
                className="inline-flex items-center gap-2 bg-[#3E3E3E] text-white text-lg font-bold px-8 py-4 rounded-lg hover:bg-[#4a4a4a] transition-all duration-200 shadow-lg"
                showArrow={true}
                prefillOptions={{
                  customAnswers: {
                    serviceType: 'Business services',
                    primaryGoal: 'Lower interest rates/debt'
                  },
                  utm: {
                    source: 'business-debt-relief-page',
                    medium: 'website',
                    campaign: 'business-debt-relief',
                    content: 'final-cta'
                  }
                }}
              />
              <div className="bg-black rounded-lg px-4 py-2 mt-3 inline-block">
                <PoweredByMesaGroup variant="dark" />
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* SECTION 7: RESULTS & STATISTICS */}
      <section className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Proven <span className="text-[#f9c65d]">Results</span> for Business Owners
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our business debt relief program has helped thousands of companies reduce debt, avoid bankruptcy, 
              and regain financial stability.
            </p>
          </div>
          
          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 text-center border-2 border-amber-200">
              <div className="text-5xl font-bold text-[#3e3e3e] mb-2">30-50%</div>
              <p className="text-base font-semibold text-gray-900 mb-1">Average Debt Reduction</p>
              <p className="text-sm text-gray-600">Settled for less than full balance</p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 text-center border-2 border-amber-200">
              <div className="text-5xl font-bold text-[#3e3e3e] mb-2">89%</div>
              <p className="text-base font-semibold text-gray-900 mb-1">Total Repayment Rate</p>
              <p className="text-sm text-gray-600">Including fees (vs. 100% owed)</p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 text-center border-2 border-amber-200">
              <div className="text-5xl font-bold text-[#3e3e3e] mb-2">2-4</div>
              <p className="text-base font-semibold text-gray-900 mb-1">Years to Complete</p>
              <p className="text-sm text-gray-600">Average program duration</p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 text-center border-2 border-amber-200">
              <div className="text-5xl font-bold text-[#3e3e3e] mb-2">4-7</div>
              <p className="text-base font-semibold text-gray-900 mb-1">Months to First Settlement</p>
              <p className="text-sm text-gray-600">Initial debt resolved quickly</p>
            </div>
            
          </div>
          
          {/* Guarantee Box */}
          <div className="bg-amber-400 rounded-2xl p-8 md:p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full mb-6">
                <Shield className="w-6 h-6 text-[#3e3e3e]" />
                <span className="text-base font-bold text-gray-900">Our Guarantee</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                You'll Pay Back Less Than What You Owe
              </h3>
              <p className="text-lg text-gray-800 leading-relaxed">
                If you qualify for our guarantee program, the <strong>total amount you pay back—including all our 
                fees—will be less than the full amount you currently owe</strong>. This is our commitment to you: 
                genuine debt reduction, not just restructuring.
              </p>
            </div>
          </div>
          
        </div>
      </section>

      {/* SECTION 8: FAQ SECTION */}
      <FAQ />

      {/* EMOTIONAL CTA 3 */}
      <EmotionalCTA3 />

      {/* SECTION 9: FINAL CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#FFFBEC] from-40% to-[#FFECD7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Trust Recap */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">30-50% Debt Reduction</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">No Upfront Fees</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">2-4 Year Program</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">Free Consultation</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">No Obligation</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">100% Confidential</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">Avoid Bankruptcy</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">Stop Creditor Calls</span>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Stop Drowning in Debt.<br />
              Start Building Your <span className="text-[#f9c65d]">Business Future</span>.
            </h2>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
              You've worked too hard to let debt destroy everything you've built. Mesa Group Capital's business debt 
              relief program gives you a proven path to financial freedom.
            </p>

            <div className="inline-block">
              <CalendlyPopupButton
                text="Get Your Free Debt Analysis"
                className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 mb-4"
                showArrow={true}
                prefillOptions={{
                  customAnswers: {
                    serviceType: 'Business services',
                    primaryGoal: 'Lower interest rates/debt'
                  },
                  utm: {
                    source: 'business-debt-relief-page',
                    medium: 'website',
                    campaign: 'business-debt-relief',
                    content: 'stop-drowning-cta'
                  }
                }}
              />
              <PoweredByMesaGroup className="mt-2" />
            </div>
            
            <p className="text-gray-600 mb-6">
              Or call us: <a href="tel:6613103040" className="text-[#bb9446] hover:underline font-semibold">(661) 310-3040</a>
            </p>
            <p className="text-sm text-gray-500">Free 30-minute consultation • No obligation • 100% confidential</p>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
};

export default BusinessDebtRelief;
