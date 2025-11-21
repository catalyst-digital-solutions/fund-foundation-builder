import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Does my company need debt restructuring?",
      answer: "Our program is best suited for business owners who: (1) Can't afford existing debt payments but want to pay them off at a realistic pace, (2) Need to protect assets from aggressive creditors without filing bankruptcy, (3) Don't want to go deeper into debt by borrowing again at high, unsustainable rates. If you're struggling with cash flow due to debt payments, you likely qualify."
    },
    {
      question: "How does the debt relief process work?",
      answer: "We take your large amount of unaffordable debt and make it affordable. You provide your budget—what you can realistically afford monthly—and we use that to negotiate settlements with creditors ranging from pennies on the dollar to payment in full. There are no time limits for settlements. Some creditors settle quickly after our first offers, others take longer. Most importantly, you refer harassing collection calls to us so you can focus on your business."
    },
    {
      question: "What types of business debt do you handle?",
      answer: "All types of business debts including cash advances (MCA), credit cards, suppliers/vendors, business loans, leases, tax debts (IRS/state), and equipment financing. We routinely settle lawsuits, judgments, and secured debts as well—even those with personal guarantees. If it's a business debt causing financial hardship, we can likely help."
    },
    {
      question: "How much will it cost me to restructure my debt?",
      answer: "We don't promise specific outcomes, but clients who completed our program paid back 89% of their debt over 35 months on average—including the cost of our services. This means if you owed $100,000, you'd pay approximately $89,000 total (including our fees) instead of the full $100,000. We charge NO upfront fees—our fees are performance-based and only charged as debts successfully settle."
    },
    {
      question: "How long will it take to complete the program?",
      answer: "Our clients finish the program between 2-4 years typically—sometimes faster, sometimes slower. The more you pay monthly, the faster you'll be debt-free. However, we encourage clients to commit to paying as little as necessary because when cash flow is tight, it's better to pay back less than more. If your cash flow improves, you can always increase payments and finish faster."
    },
    {
      question: "What reporting and updates can I expect?",
      answer: "As our client, you'll have 24/7 access to your secure online dashboard with over a dozen reports including: your restructuring team's background, comprehensive creditor reports showing negotiation status, monthly transaction statements, rate of funding, payment schedules, needed documentation, net savings vs. net cost analysis, and a 'finish line' tracker showing remaining debt and timeline to completion."
    },
    {
      question: "How will the program affect my business credit?",
      answer: "The truth is clients may have to temporarily sacrifice their credit score to save their business. Whether in our program or not, credit scores will decline if debts aren't paid on time. Our goal is to get you out of debt with payments you can actually afford so you can save your business and continue providing for your family. Once debts are settled and cash flow improves, you can rebuild business credit."
    },
    {
      question: "What's the difference between debt relief and bankruptcy?",
      answer: "Bankruptcy forces you to liquidate assets, damages your business reputation for 7-10 years, requires expensive attorney fees ($3,000-$10,000+), and you lose control of the process. Debt relief lets you settle debts for less, protect your assets, keep the process private, and maintain business operations. You stay in control and avoid the stigma of bankruptcy."
    },
    {
      question: "Can I continue operating my business during the program?",
      answer: "Yes! That's the whole point. Unlike bankruptcy which may force liquidation, our debt relief program is designed to let you continue business operations while we negotiate settlements. You'll have improved cash flow from reduced debt payments, allowing you to focus on revenue generation rather than debt management."
    },
    {
      question: "What if creditors sue me or get a judgment?",
      answer: "We routinely handle lawsuits and judgments as part of our program. Even if a creditor has already sued you or obtained a judgment, we can still negotiate settlements. In many cases, we resolve legal actions for significantly less than the judgment amount. The key is acting quickly before garnishments or levies begin—book your free consultation now."
    },
    {
      question: "Do I qualify for business debt relief?",
      answer: "You may qualify if: (1) You have at least $10,000 in business debt, (2) You're experiencing financial hardship or struggling with payments, (3) You can commit to a monthly payment toward settlements based on your budget, and (4) Your debts are with creditors who negotiate settlements. The only way to know for sure is to book a free consultation—we'll review your situation and provide a customized recommendation."
    },
    {
      question: "Are there any upfront costs or fees?",
      answer: "NO. We charge zero upfront fees. Our fees are performance-based, meaning you only pay as debts successfully settle. This aligns our interests with yours—we don't get paid unless we deliver results. During your free consultation, we'll explain our complete fee structure transparently so you know exactly what to expect."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-amber-600">Questions</span>
          </h2>
          <p className="text-lg text-gray-700">
            Get answers to the most common questions about business debt relief
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-xl border-2 border-gray-200">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                <svg className={`w-6 h-6 text-amber-600 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
