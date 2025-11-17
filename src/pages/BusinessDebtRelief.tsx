import { useState } from 'react';
import Header from "@/components/Header";

const BusinessDebtRelief = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does Mesa Group Capital's Business Debt Relief program work?",
      answer: "Our program works by negotiating with your business creditors to settle debts for 30-50% less than you owe. You stop paying creditors directly and instead make one affordable monthly deposit into a dedicated savings account under your control. As funds accumulate, our expert negotiators work with your creditors to secure settlement offers. When settlements are reached, creditors are paid directly from your account. The entire process typically takes 20-60 months to complete."
    },
    {
      question: "Is business debt relief better than bankruptcy?",
      answer: "For most businesses, yes. Bankruptcy destroys your business credit for 7-10 years, requires public court filings, forces you to surrender assets, and costs $3,000-$10,000+ in attorney fees just to file. Business debt relief settles debts for less, protects your business assets, keeps the process private, and allows you to continue operating while negotiating. You maintain control and avoid the stigma of bankruptcy."
    },
    {
      question: "How much will I save with Mesa Group Capital's program?",
      answer: "On average, businesses save 30-50% on enrolled debts (approximately 43% average) before program fees. For example, if you have $100,000 in business debt, you might settle for $50,000-$70,000 total, including program fees. Actual savings depend on your creditors, debt types, and negotiation outcomes. During your free consultation, we'll provide a personalized savings estimate."
    },
    {
      question: "Do I qualify for business debt relief?",
      answer: "You may qualify if: (1) You have at least $10,000 in unsecured business debt, (2) You're experiencing financial hardship or struggling with payments, (3) Your debts are with creditors who negotiate with debt relief companies, and (4) Your debts are unsecured (not backed by collateral). Secured debts like equipment loans with liens or commercial mortgages typically don't qualify. Book a free consultation to determine your eligibility."
    },
    {
      question: "What does Mesa Group Capital's program cost?",
      answer: "We charge NO UPFRONT FEES. Our fees are performance-based and range from 14-25% of your enrolled debt amount, charged only as debts are successfully settled. For example, on $100,000 enrolled debt with a 20% fee structure, our total fees would be $20,000, paid gradually as each debt settles. You pay nothing until we deliver results. This is required by FTC regulations."
    },
    {
      question: "What's the difference between debt relief and debt consolidation?",
      answer: "Debt consolidation combines multiple debts into one loan—you still owe 100% of the principal plus interest. Debt relief (settlement) negotiates with creditors to reduce the total amount you owe by 30-50%. Consolidation requires good credit and may not reduce your debt burden. Relief is for businesses struggling to pay and results in significantly less total repayment."
    },
    {
      question: "How long will it take to be debt-free?",
      answer: "Most business debt relief programs take 20-60 months to complete, depending on your total debt amount, monthly deposit capacity, and creditor cooperation. Your first settlement typically occurs within 4-7 months of enrollment, with additional settlements approximately every 3-6 months thereafter. We'll provide a realistic timeline during your consultation based on your specific situation."
    },
    {
      question: "Will debt relief impact my business credit score?",
      answer: "Yes, debt relief will likely have a negative impact on your business credit score temporarily because you'll stop making payments to creditors during negotiations. However, if your credit is already damaged from late payments or collections, the impact may be minimal. The alternative—bankruptcy—is far more damaging and lasts 7-10 years. Debt relief allows you to rebuild credit faster after completion."
    },
    {
      question: "Can you help if my business is facing lawsuits or judgments?",
      answer: "Yes! We can often negotiate settlements even after lawsuits are filed or judgments are entered. Early intervention is best, but we work with collection attorneys and creditors at all stages of the collection process. In some cases, we can negotiate to stop garnishments or remove liens as part of settlement agreements."
    },
    {
      question: "What happens if I can't complete the program?",
      answer: "You can withdraw from the program at any time without penalty. If you withdraw, you'll receive all funds from your dedicated savings account, minus any fees earned by Mesa Group Capital for completed settlements and any fees paid to third-party service providers. We work with you to create sustainable payment plans, but life circumstances change and we understand that."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      {/* SECTION 1: HERO */}
      <section className="bg-gradient-to-br from-[#3E3E3E] via-[#bb9446] to-[#f9c65d] py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          
          <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold mb-8">
            Mesa Group Capital | Business Debt Relief Specialists
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Stop Hiding from Creditors.<br />Start Rebuilding Your Business.
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Drowning in business debt? Collections calling? Can't make payroll without worrying about creditors? <strong>Mesa Group Capital's Business Debt Relief program</strong> converts crushing debt into one manageable payment—so you can get back to running your business.
          </p>

          <div className="bg-white rounded-xl p-8 mb-10 shadow-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-[#3E3E3E] mb-6">
              How Business Debt Relief Works:
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center mb-6">
              <div>
                <div className="text-4xl font-bold text-[#bb9446] mb-2">30-50%</div>
                <div className="text-sm text-gray-600">Average Debt Reduction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#bb9446] mb-2">1</div>
                <div className="text-sm text-gray-600">Affordable Monthly Payment</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#bb9446] mb-2">20-48</div>
                <div className="text-sm text-gray-600">Months to Debt-Free</div>
              </div>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We negotiate with your creditors, collection agencies, and attorneys to settle your business debts for <strong>significantly less than you owe</strong>—while you focus on revenue generation, not debt crisis management.
            </p>
            
            <a
              href="https://mesagroupcapital.com/debt-analysis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#bb9446] text-white text-xl font-bold px-12 py-5 rounded-lg hover:bg-[#a07d3a] transition-all duration-200 shadow-xl hover:shadow-2xl"
            >
              Book Your Free Debt Consultation
            </a>
            <p className="text-sm text-gray-600 mt-4">
              ✓ No upfront fees &nbsp; | &nbsp; ✓ Minimum $10,000 debt required &nbsp; | &nbsp; ✓ Results in 4-7 months
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:6613103040"
              className="inline-block bg-white text-[#bb9446] text-xl font-semibold px-10 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
            >
              📞 Call (661) 310-3040
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 2: THE PROBLEM (PAIN POINTS) */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3E3E3E] mb-4">
              Is Your Business Suffocating Under Debt?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You're not alone. These are the signs that business debt relief might be your best option.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            
            <div className="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 shadow-md border-l-4 border-red-500">
              <div className="text-4xl mb-3">📞</div>
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-2">
                Constant Creditor Harassment
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Collection calls interrupting your workday. Legal threats. Stress preventing you from focusing on your business.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 shadow-md border-l-4 border-red-500">
              <div className="text-4xl mb-3">💸</div>
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-2">
                Drowning in Minimum Payments
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Paying thousands monthly but the principal barely moves. High-interest credit cards and lines of credit eating your cash flow.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 shadow-md border-l-4 border-red-500">
              <div className="text-4xl mb-3">🏢</div>
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-2">
                Considering Bankruptcy
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Bankruptcy seems like the only option, but you know it will devastate your business credit and reputation for years.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 shadow-md border-l-4 border-red-500">
              <div className="text-4xl mb-3">😰</div>
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-2">
                Can't Grow Your Business
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Every dollar goes to debt payments instead of inventory, marketing, or hiring. Your business is stagnant because debt consumes all revenue.
              </p>
            </div>

          </div>

          <div className="bg-[#f8d899] rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-[#3E3E3E] mb-4">
              There's a Better Way Than Bankruptcy
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl mx-auto">
              Business debt relief through Mesa Group Capital lets you settle debts for <strong>30-50% less than you owe</strong>, avoid bankruptcy, and protect your business's future—without shutting down or losing everything you've built.
            </p>
            <a
              href="https://mesagroupcapital.com/debt-analysis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#bb9446] text-white text-xl font-bold px-10 py-4 rounded-lg hover:bg-[#a07d3a] transition-all duration-200 shadow-lg"
            >
              Get Your Free Debt Analysis
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 3: THE 4 BENEFITS */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3E3E3E] mb-4">
              How Business Debt Relief Transforms Your Situation
            </h2>
            <p className="text-xl text-gray-600">
              Stop managing the debt crisis. Start managing your business again.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#f9c65d] to-[#bb9446] rounded-full flex items-center justify-center text-3xl">
                  💰
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#3E3E3E] mb-3">
                    Increase Your Cash Flow
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Short-term debt converted into a manageable long-term plan means <strong>more money available for operations</strong>. Instead of paying $5,000/month toward debt, you might pay $2,000/month while we negotiate settlements—freeing up $3,000/month for payroll, inventory, and growth.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#f9c65d] to-[#bb9446] rounded-full flex items-center justify-center text-3xl">
                  🛡️
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#3E3E3E] mb-3">
                    Improve Your Quality of Life
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>We deal with creditors, collection agencies, and attorneys</strong> so you can get back to doing what's important: creating revenue, not hiding from calls. Sleep better knowing experts are handling your debt crisis while you run your business.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#f9c65d] to-[#bb9446] rounded-full flex items-center justify-center text-3xl">
                  ⚖️
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#3E3E3E] mb-3">
                    Avoid Unnecessary Legal Fees
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Debts can be settled without the need for attorneys</strong>. Bankruptcy lawyers charge $3,000-$10,000+ just to file—and then you lose control of your business assets. Debt settlement costs a fraction and you keep your business intact.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#f9c65d] to-[#bb9446] rounded-full flex items-center justify-center text-3xl">
                  📊
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#3E3E3E] mb-3">
                    Fixed & Affordable Payments
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Cash outlay can be forecasted and managed better.</strong> No more juggling multiple creditors with different due dates and interest rates. One predictable monthly payment lets you plan your business finances with confidence.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4: TYPES OF BUSINESS DEBT WE HANDLE */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3E3E3E] mb-4">
              Types of Business Debt We Can Settle
            </h2>
            <p className="text-xl text-gray-600">
              Our program handles unsecured business debts—those not backed by collateral.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-gradient-to-br from-[#f8d899] to-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-[#3E3E3E] mb-4">
                💳 Business Credit & Financing
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446] font-bold">•</span>
                  <span>Business credit cards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446] font-bold">•</span>
                  <span>Business lines of credit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446] font-bold">•</span>
                  <span>Unsecured business loans</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446] font-bold">•</span>
                  <span>Merchant cash advances</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446] font-bold">•</span>
                  <span>Personal guarantees on business debt</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#f8d899] to-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-[#3E3E3E] mb-4">
                📦 Vendor & Operational Debt
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446] font-bold">•</span>
                  <span>Unpaid vendor invoices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446] font-bold">•</span>
                  <span>Trade credit debts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446] font-bold">•</span>
                  <span>Equipment leases (unsecured)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446] font-bold">•</span>
                  <span>Commercial rent arrears (if unsecured)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446] font-bold">•</span>
                  <span>Utility debts</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#f8d899] to-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-[#3E3E3E] mb-4">
                ⚖️ Collections & Legal Debts
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446] font-bold">•</span>
                  <span>Collection agency accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446] font-bold">•</span>
                  <span>Business judgments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446] font-bold">•</span>
                  <span>Attorney-represented debts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446] font-bold">•</span>
                  <span>Deficiency balances</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446] font-bold">•</span>
                  <span>Business tax debts (certain types)</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="mt-12 bg-gray-100 rounded-xl p-6">
            <p className="text-center text-gray-700 leading-relaxed">
              <strong>Note:</strong> Secured debts (mortgages, auto loans, equipment with liens) and certain tax obligations may not qualify. During your free consultation, we'll review your specific debt situation to determine eligibility.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 5: THE 5-STEP PROCESS */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3E3E3E] mb-4">
              5 Steps to Business Debt Freedom
            </h2>
            <p className="text-xl text-gray-600">
              Our proven process has helped hundreds of businesses escape the debt trap.
            </p>
          </div>

          <div className="space-y-8">
            
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-20 h-20 bg-[#bb9446] text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-xl">
                1
              </div>
              <div className="flex-1 bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-2xl font-bold text-[#3E3E3E] mb-3">
                  Free Debt Consultation
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Connect:</strong> Book a free consultation with one of our certified Business Debt Specialists.<br />
                  <strong>Consult:</strong> Have a conversation about your debts, financial objectives, and available options.<br />
                  <strong>Personalize:</strong> We'll tailor a personalized plan that aligns with your specific business needs and goals.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-20 h-20 bg-[#bb9446] text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-xl">
                2
              </div>
              <div className="flex-1 bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-2xl font-bold text-[#3E3E3E] mb-3">
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
              <div className="flex-shrink-0 w-20 h-20 bg-[#bb9446] text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-xl">
                3
              </div>
              <div className="flex-1 bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-2xl font-bold text-[#3E3E3E] mb-3">
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
              <div className="flex-shrink-0 w-20 h-20 bg-[#bb9446] text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-xl">
                4
              </div>
              <div className="flex-1 bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-2xl font-bold text-[#3E3E3E] mb-3">
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
              <div className="flex-shrink-0 w-20 h-20 bg-[#bb9446] text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-xl">
                5
              </div>
              <div className="flex-1 bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-2xl font-bold text-[#3E3E3E] mb-3">
                  Achieve Debt Freedom
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Embark on a fresh start, free from the burden of debt!<br />
                  • <strong>Program Completion:</strong> Successfully navigate through our debt relief program<br />
                  • <strong>Debt-Free Future:</strong> Achieve freedom from debt within 20-60 months<br />
                  • <strong>Rebuild & Grow:</strong> Focus all your resources on growing your business instead of servicing debt
                </p>
              </div>
            </div>

          </div>

          <div className="mt-12 text-center">
            <a
              href="https://mesagroupcapital.com/debt-analysis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#bb9446] text-white text-xl font-bold px-12 py-5 rounded-lg hover:bg-[#a07d3a] transition-all duration-200 shadow-xl hover:shadow-2xl"
            >
              Start Your Debt-Free Journey Today
            </a>
            <p className="text-gray-600 mt-4">Minimum $10,000 in debt required • No upfront fees</p>
          </div>

        </div>
      </section>

      {/* SECTION 6: FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3E3E3E] mb-4">
              Business Debt Relief Questions Answered
            </h2>
            <p className="text-xl text-gray-600">
              Get clarity before booking your free consultation.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-5 text-left hover:bg-gray-50 transition-colors flex justify-between items-center"
                >
                  <span className="text-lg font-semibold text-[#3E3E3E] pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-[#bb9446] flex-shrink-0 transition-transform ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openFAQ === index && (
                  <div className="px-6 py-5 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 7: FINAL CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#bb9446] via-[#f9c65d] to-[#E5D2AF]">
        <div className="max-w-5xl mx-auto text-center">
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Stop Drowning in Debt.<br />Start Growing Your Business Again.
          </h2>
          
          <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
            You didn't start your business to spend every day managing a debt crisis. Let Mesa Group Capital's <strong>Business Debt Relief specialists</strong> handle your creditors while you focus on what you do best—<strong>running and growing your business</strong>.
          </p>

          <div className="bg-white rounded-xl p-10 mb-8 shadow-2xl">
            <h3 className="text-3xl font-bold text-[#3E3E3E] mb-6">
              Book Your Free Debt Consultation Now
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              In just 30 minutes, we'll analyze your business debt situation and show you exactly how much you can save through our proven debt relief program.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#bb9446] mb-2">$0</div>
                <div className="text-sm text-gray-600">Upfront Fees</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#bb9446] mb-2">30-50%</div>
                <div className="text-sm text-gray-600">Average Savings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#bb9446] mb-2">4-7</div>
                <div className="text-sm text-gray-600">Months to 1st Settlement</div>
              </div>
            </div>

            <a
              href="https://mesagroupcapital.com/debt-analysis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#bb9446] text-white text-2xl font-bold px-16 py-6 rounded-lg hover:bg-[#a07d3a] transition-all duration-200 shadow-xl hover:shadow-2xl mb-4"
            >
              Schedule Free Consultation →
            </a>
            
            <p className="text-sm text-gray-600">
              Or call us directly: <a href="tel:6613103040" className="font-bold text-[#bb9446] hover:underline">(661) 310-3040</a>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 text-white text-sm">
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No Obligation</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Certified Specialists</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Proven Results</span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 8: FOOTER */}
      <footer className="bg-[#3E3E3E] py-12 px-6 text-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            
            <div>
              <h3 className="text-xl font-bold text-[#f9c65d] mb-4">Mesa Group Capital</h3>
              <p className="text-sm text-gray-300 mb-4">
                Your trusted business debt relief partner in Bakersfield, CA.
              </p>
              <p className="text-sm text-gray-300">
                📍 Bakersfield, CA<br />
                📞 (661) 310-3040
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#f9c65d] mb-4">Our Services</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="/business-debt-relief" className="hover:text-[#f9c65d]">Business Debt Relief</a></li>
                <li><a href="/business-funding" className="hover:text-[#f9c65d]">Business Funding</a></li>
                <li><a href="/business-credit" className="hover:text-[#f9c65d]">Business Credit Building</a></li>
                <li><a href="/credit-repair" className="hover:text-[#f9c65d]">Credit Repair</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#f9c65d] mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="https://www.mesagroupconsulting.com/about-us" className="hover:text-[#f9c65d]">About Us</a></li>
                <li><a href="https://www.mesagroupconsulting.com/blog" className="hover:text-[#f9c65d]">Mesa News Blog</a></li>
                <li><a href="/calculators" className="hover:text-[#f9c65d]">Financial Calculators</a></li>
                <li><a href="https://www.mesagroupconsulting.com/contact-us" className="hover:text-[#f9c65d]">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#f9c65d] mb-4">Get Started</h3>
              <a
                href="https://mesagroupcapital.com/debt-analysis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#f9c65d] text-[#3E3E3E] text-base font-bold px-6 py-3 rounded-lg hover:bg-[#f8d899] transition-all duration-200 mb-4 w-full text-center"
              >
                Free Consultation
              </a>
              <p className="text-xs text-gray-400">
                No upfront fees • Proven results • Expert negotiators
              </p>
            </div>

          </div>

          <div className="border-t border-gray-600 pt-6">
            <p className="text-sm text-gray-400 mb-4 text-center leading-relaxed">
              <strong>Important Disclosure:</strong> Mesa Group Capital provides business debt relief services in partnership with licensed debt resolution platforms. Results vary by client. Average savings of 30-50% (43% average) of enrolled debt are based on clients who complete the program and make all monthly payments. Fees range from 14-25% of enrolled debt. Programs typically last 20-60 months. Not all clients complete the program. First settlement averages 4-7 months from enrollment. We do not assume your debts, make payments to creditors, or provide tax, bankruptcy, accounting, or legal advice. Debt relief will likely negatively affect your credit score. You may face collections or lawsuits. Forgiven debt may be taxable. Read all program materials before enrolling.
            </p>
            <p className="text-sm text-gray-400 text-center">
              © {new Date().getFullYear()} Mesa Group Capital. All rights reserved.
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default BusinessDebtRelief;