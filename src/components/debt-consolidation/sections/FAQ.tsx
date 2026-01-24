import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is debt consolidation?",
      answer: "Debt consolidation is the process of combining multiple debts (like credit cards, medical bills, and personal loans) into a single loan with one monthly payment. The goal is to simplify your finances, lower your interest rate, and pay off debt faster."
    },
    {
      question: "Will checking rates affect my credit score?",
      answer: "No! When you check rates through our platform, we only use a soft credit inquiry, which does not impact your credit score. Only when you formally apply with a specific lender will they perform a hard credit pull, and only after you've chosen to proceed."
    },
    {
      question: "How much can I save with debt consolidation?",
      answer: "Savings vary based on your current debts and the rate you qualify for. On average, clients who consolidate credit card debt (typically 20-25% APR) into a personal loan (8-15% APR) save $200-$400 per month. Over the life of the loan, this can add up to thousands of dollars in interest savings."
    },
    {
      question: "What types of debt can I consolidate?",
      answer: "You can consolidate most unsecured debts including credit cards, medical bills, personal loans, payday loans, collection accounts, and other installment debts. Secured debts like mortgages and auto loans typically require different solutions."
    },
    {
      question: "What credit score do I need to qualify?",
      answer: "While many lenders prefer credit scores of 640+, our network includes lenders who work with scores as low as 580 or even lower. Your credit score affects your interest rate more than your approval odds. Better credit typically means lower rates."
    },
    {
      question: "How fast can I get funded?",
      answer: "Once approved by a lender, funds are typically deposited into your bank account within 1-3 business days. The lender then pays off your existing debts directly. The overall timeline from application to debt payoff is usually 3-7 business days."
    },
    {
      question: "Is debt consolidation the same as debt settlement?",
      answer: "No, they are very different. Debt consolidation is a loan that pays off your existing debts in full. You then repay the new loan over time. Debt settlement involves negotiating with creditors to pay less than you owe, which can significantly damage your credit. Consolidation is generally a better option if you can qualify for a loan."
    },
    {
      question: "Will I save money if I consolidate?",
      answer: "You'll likely save money if: 1) Your new interest rate is lower than the average of your current rates, 2) You pay off the loan within the term (don't extend your debt timeline significantly), and 3) You don't accumulate new debt on the accounts you paid off. Our comparison tool shows you exactly how much you'll save before you commit."
    },
    {
      question: "What happens to my credit cards after I consolidate?",
      answer: "After consolidation, your credit cards will be paid off and have zero balances. You can keep the accounts open (which can help your credit utilization ratio) or close them. Many financial advisors recommend keeping older accounts open but removing temptation by cutting up the physical cards."
    },
    {
      question: "Are there any fees I should know about?",
      answer: "Some lenders charge an origination fee (typically 1-6% of the loan amount), which is deducted from your loan proceeds. Other potential fees include late payment fees. Many lenders do not charge prepayment penalties, allowing you to pay off your loan early without penalty. Always review the loan terms before accepting."
    },
    {
      question: "Is Mesa Group Consulting a lender?",
      answer: "No, Mesa Group Consulting is not a lender. We are a financial services marketplace that connects consumers with multiple lending partners. We do not make lending decisions or fund loans. We help you compare offers from our network of trusted lenders to find the best solution for your situation."
    },
    {
      question: "How is this different from a balance transfer credit card?",
      answer: "Balance transfer cards offer low intro APRs (often 0%) but typically for only 12-21 months, after which rates jump to 20%+. If you can't pay off the balance in that time, you're back to high interest. Debt consolidation loans have fixed rates for the entire term (3-7 years), making them better for larger amounts or longer payoff timelines."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-[#f9c65d]">Questions</span>
          </h2>
          <p className="text-xl text-gray-700">
            Get answers to common questions about debt consolidation loans.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-amber-300 transition-colors duration-300">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-white/50 transition-colors duration-200"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-[#3e3e3e] flex-shrink-0 transition-transform duration-300 ${
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
  );
};

export default FAQ;