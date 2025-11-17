import { useState } from 'react';
import Header from "@/components/Header";

const DebtRelief = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does Mesa Group Capital's Debt Relief program work?",
      answer: "Our program works by negotiating with your creditors to settle debts for 30-50% less than you owe. You stop paying creditors directly and instead make one affordable monthly deposit into a dedicated savings account under your control. As funds accumulate, our expert negotiators work with your creditors to secure settlement offers. When settlements are reached, creditors are paid directly from your account. The entire process typically takes 20-48 months to complete."
    },
    {
      question: "Is debt relief better than making minimum payments?",
      answer: "Absolutely. If you only make minimum payments on a $20,000 credit card balance at 18% APR, you'll pay over $50,000 total and take 30+ years to pay it off. With debt relief, you could settle that same debt for $10,000-$14,000 (including fees) and be debt-free in 2-4 years. You save tens of thousands of dollars and decades of stress."
    },
    {
      question: "How much will I save with Mesa Group Capital's program?",
      answer: "On average, clients save 30-50% on enrolled debts (approximately 43% average) before program fees. For example, if you have $30,000 in credit card debt, you might settle for $15,000-$21,000 total, including program fees. Actual savings depend on your creditors, debt types, and negotiation outcomes. During your free consultation, we'll provide a personalized savings estimate."
    },
    {
      question: "Do I qualify for debt relief?",
      answer: "You may qualify if: (1) You have at least $10,000 in unsecured debt, (2) You're experiencing financial hardship or struggling with payments, (3) Your debts are with creditors who negotiate with debt relief companies, and (4) Your debts are unsecured (not backed by collateral). Federal student loans, secured debts like mortgages or car loans, child support, and most tax debts typically don't qualify. Book a free consultation to determine your eligibility."
    },
    {
      question: "What does Mesa Group Capital's program cost?",
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
            Mesa Group Capital | Debt Relief Specialists Since 2015
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Stop Drowning in Debt.<br />Start Living Your Life Again.
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Buried under credit card debt? Collections calling? Can't afford more than minimum payments? <strong>Mesa Group Capital's Debt Relief program</strong> reduces your debt by 30-50% and replaces multiple payments with one affordable monthly payment.
          </p>

          <div className="bg-white rounded-xl p-8 mb-10 shadow-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-[#3E3E3E] mb-6">
              How Debt Relief Works:
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
              We negotiate with your creditors, collection agencies, and attorneys to settle your debts for <strong>significantly less than you owe</strong>—while you focus on rebuilding your financial future, not drowning in debt.
            </p>
            
            <a
              href="https://mesagroupcapital.com/debt-analysis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#bb9446] text-white text-xl font-bold px-12 py-5 rounded-lg hover:bg-[#a07d3a] transition-all duration-200 shadow-xl hover:shadow-2xl"
            >
              Book Your Free Debt Analysis
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
              Are You Trapped in the Debt Cycle?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You're not alone. These are the signs that debt relief might be your best option.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#bb9446]">
              <div className="text-4xl mb-4">😰</div>
              <h3 className="text-xl font-bold text-[#3E3E3E] mb-3">
                Creditor Harassment
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Constant collection calls. Threatening letters. Lawsuits filed. You're afraid to answer your phone or check your mail.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#bb9446]">
              <div className="text-4xl mb-4">💸</div>
              <h3 className="text-xl font-bold text-[#3E3E3E] mb-3">
                Minimum Payment Trap
              </h3>
              <p className="text-gray-700 leading-relaxed">
                You're making minimum payments but the balance never goes down. Interest eats up everything you pay—you're running in place.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#bb9446]">
              <div className="text-4xl mb-4">😓</div>
              <h3 className="text-xl font-bold text-[#3E3E3E] mb-3">
                Can't Afford Payments
              </h3>
              <p className="text-gray-700 leading-relaxed">
                You have to choose between debt payments and groceries, rent, or utilities. There's nothing left at the end of the month.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#bb9446]">
              <div className="text-4xl mb-4">😢</div>
              <h3 className="text-xl font-bold text-[#3E3E3E] mb-3">
                Family Stress
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Debt is destroying your peace of mind, your relationships, and your health. You can't see a way out.
              </p>
            </div>

          </div>

          <div className="mt-12 bg-[#f8d899] rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-[#3E3E3E] mb-4">
              There's a Better Way Than Bankruptcy
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl mx-auto">
              Debt relief through Mesa Group Capital lets you settle debts for <strong>30-50% less than you owe</strong>, avoid bankruptcy, and protect your family's future—without destroying your credit for 7-10 years.
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
              How Debt Relief Transforms Your Life
            </h2>
            <p className="text-xl text-gray-600">
              Stop managing the debt crisis. Start living your life again.
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
                    Reduce Your Debt by 30-50%
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    On average, our clients save <strong>43% on enrolled debts</strong> before fees. If you owe $50,000, you might settle for $25,000-$35,000 total. That's tens of thousands of dollars saved—money that stays in your pocket.
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
                    Stop Creditor Harassment
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Once you enroll, <strong>we handle all creditor communication</strong>. No more collection calls. No more threatening letters. No more stress. Our certified Debt Specialists deal with creditors on your behalf.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#f9c65d] to-[#bb9446] rounded-full flex items-center justify-center text-3xl">
                  📅
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#3E3E3E] mb-3">
                    One Affordable Monthly Payment
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Instead of juggling 5+ creditors with different due dates and amounts, you make <strong>one predictable monthly deposit</strong> into your own dedicated savings account. Simple. Manageable. Under your control.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#f9c65d] to-[#bb9446] rounded-full flex items-center justify-center text-3xl">
                  ⏰
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#3E3E3E] mb-3">
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

      {/* SECTION 4: TYPES OF DEBT WE HANDLE */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3E3E3E] mb-4">
              Types of Debt We Can Settle
            </h2>
            <p className="text-xl text-gray-600">
              Our program handles unsecured debts—those not backed by collateral like a house or car.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-gradient-to-br from-[#f8d899] to-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-[#3E3E3E] mb-4">
                💳 Credit Cards & Loans
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446] font-bold">•</span>
                  <span>Credit card debt</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446] font-bold">•</span>
                  <span>Personal loans</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446] font-bold">•</span>
                  <span>Lines of credit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446] font-bold">•</span>
                  <span>Payday loans</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446] font-bold">•</span>
                  <span>Private student loans</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#f8d899] to-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-[#3E3E3E] mb-4">
                🏥 Medical & Other Debts
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446] font-bold">•</span>
                  <span>Medical bills</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446] font-bold">•</span>
                  <span>Hospital debt</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446] font-bold">•</span>
                  <span>Dental & veterinary bills</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446] font-bold">•</span>
                  <span>Cellular/utility debts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446] font-bold">•</span>
                  <span>Retail store cards</span>
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
                  <span>Charged-off accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446] font-bold">•</span>
                  <span>Judgments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446] font-bold">•</span>
                  <span>Repossession deficiencies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446] font-bold">•</span>
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#3E3E3E] mb-4">
              5 Steps to Debt Freedom
            </h2>
            <p className="text-xl text-gray-600">
              Our proven process has helped thousands of families escape the debt trap.
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
                  <strong>Connect:</strong> Book a free consultation with one of our certified Debt Specialists.<br />
                  <strong>Consult:</strong> Have an honest conversation about your debts, financial objectives, and available options.<br />
                  <strong>Personalize:</strong> We'll create a personalized debt relief plan that aligns with your specific needs and goals.
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
              Debt Relief Questions Answered
            </h2>
            <p className="text-xl text-gray-600">
              Get clarity before booking your free consultation.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 text-left hover:bg-gray-50 transition-colors flex justify-between items-center"
                >
                  <span className="text-lg font-semibold text-[#3E3E3E] pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-[#bb9446] flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
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
                {openIndex === index && (
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
            Stop Drowning in Debt.<br />Start Living Your Life Again.
          </h2>
          
          <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
            You didn't create this debt overnight, and you can't solve it overnight—but you <strong>can</strong> take the first step today. Let Mesa Group Capital's <strong>Debt Relief specialists</strong> handle your creditors while you focus on what matters most—<strong>your family, your peace of mind, and your future</strong>.
          </p>

          <div className="bg-white rounded-xl p-10 mb-8 shadow-2xl">
            <h3 className="text-3xl font-bold text-[#3E3E3E] mb-6">
              Book Your Free Debt Analysis Now
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              In just 30 minutes, we'll analyze your debt situation and show you exactly how much you can save through our proven debt relief program.
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
                Your trusted debt relief partner in Bakersfield, CA.
              </p>
              <p className="text-sm text-gray-300">
                📍 Bakersfield, CA<br />
                📞 (661) 310-3040
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#f9c65d] mb-4">Our Services</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="/debt-relief" className="hover:text-[#f9c65d]">Debt Relief</a></li>
                <li><a href="/credit-repair" className="hover:text-[#f9c65d]">Credit Repair</a></li>
                <li><a href="/credit-monitoring" className="hover:text-[#f9c65d]">Credit Monitoring</a></li>
                <li><a href="/business-debt-relief" className="hover:text-[#f9c65d]">Business Debt Relief</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#f9c65d] mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="https://www.mesagroupconsulting.com/about-us" className="hover:text-[#f9c65d]">About Us</a></li>
                <li><a href="https://www.mesagroupconsulting.com/blog" className="hover:text-[#f9c65d]">Mesa News Blog</a></li>
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
              <strong>Important Disclosure:</strong> Mesa Group Capital provides debt relief services in partnership with licensed debt resolution platforms. Results vary by client. Average savings of 30-50% (43% average) of enrolled debt are based on clients who complete the program and make all monthly payments. Fees range from 14-25% of enrolled debt. Programs typically last 20-48 months. Not all clients complete the program. First settlement averages 4-7 months from enrollment. We do not assume your debts, make monthly payments to creditors, or provide tax, bankruptcy, accounting, or legal advice. Debt relief will likely negatively affect your credit score. You may be subject to collections or lawsuits by creditors or collectors. Your outstanding debt may increase from the accrual of fees and interest. Any amount of debt forgiven by your creditors may be subject to income tax. Clients may withdraw from the program at any time without penalty and receive all funds from their dedicated account, other than funds earned by the company or fees paid to third-party service providers, as may be applicable. Read and understand all program materials prior to enrolling. Certain types of debts are not eligible for enrollment. Some creditors are not eligible for enrollment because they do not negotiate with debt resolution companies.
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

export default DebtRelief;