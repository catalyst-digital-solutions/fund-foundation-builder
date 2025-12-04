import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Will checking rates affect my credit score?",
      answer: "No! When you check rates through our platform, we only use a soft credit inquiry, which does not impact your credit score. Only when you formally apply with a specific lender will they perform a hard credit pull—and only after you've chosen to proceed."
    },
    {
      question: "How fast can I get funded?",
      answer: "Once approved by a lender, funds are typically deposited into your bank account within 1-3 business days. Some lenders offer same-day or next-day funding for an additional fee. The overall timeline from application to funding is usually 2-5 business days."
    },
    {
      question: "What credit score do I need to qualify?",
      answer: "While many lenders prefer credit scores of 640+, our network includes lenders who work with scores as low as 580 or even lower. Your credit score affects your interest rate more than your approval odds. Better credit typically means lower rates."
    },
    {
      question: "Can I use a personal loan for any purpose?",
      answer: "Yes! Personal loans are unsecured and can be used for almost any legal purpose—debt consolidation, home improvements, medical bills, major purchases, business expenses, education, and more. Some lenders may ask what you'll use the funds for, but there are no restrictions."
    },
    {
      question: "What's the difference between a personal loan and a credit card?",
      answer: "Personal loans provide a lump sum with fixed monthly payments over a set term (e.g., 36 months), typically at lower interest rates than credit cards. Credit cards are revolving credit with variable payments and higher APRs. For large expenses or debt consolidation, personal loans usually save more money."
    },
    {
      question: "Are there any fees I should know about?",
      answer: "Some lenders charge an origination fee (typically 1-6% of the loan amount), which is deducted from your loan proceeds. Other potential fees include late payment fees and failed payment fees. Many lenders do not charge prepayment penalties, allowing you to pay off your loan early without penalty. Always review the loan terms before accepting an offer."
    },
    {
      question: "How much can I borrow?",
      answer: "Loan amounts in our network range from $1,000 to $100,000, depending on the lender and your qualifications. Most borrowers qualify for $5,000 to $35,000. Your approved amount depends on your income, credit score, existing debts, and the lender's criteria."
    },
    {
      question: "What documents will I need to apply?",
      answer: "Typically, you'll need: proof of identity (driver's license or state ID), proof of income (recent pay stubs, W-2s, or bank statements), Social Security Number, proof of address, and bank account information. Self-employed applicants may need tax returns or additional documentation."
    },
    {
      question: "Can I pay off my loan early?",
      answer: "Most lenders in our network allow early payoff without penalties, which can save you money on interest. However, some lenders do charge prepayment penalties, so always check the loan terms before accepting an offer."
    },
    {
      question: "What happens if I miss a payment?",
      answer: "Missing a payment can result in late fees (typically $15-$30) and negative marks on your credit report if the payment is more than 30 days late. If you're struggling to make payments, contact your lender immediately—many offer hardship programs or payment arrangements."
    },
    {
      question: "Is Mesa Group Consulting a lender?",
      answer: "No, Mesa Group Consulting is not a lender. We are a financial services marketplace that connects consumers with multiple lending partners. We do not make lending decisions or fund loans—we simply help you compare offers from our network of trusted lenders."
    },
    {
      question: "How do you make money if the service is free?",
      answer: "Our service is free for consumers. We earn a referral fee from lenders when you successfully complete a loan through our platform. This does not affect your interest rate or loan terms—lenders pay us for connecting them with qualified borrowers."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-[#3e3e3e]">Questions</span>
          </h2>
          <p className="text-xl text-gray-700">
            Get answers to common questions about personal loans and our comparison service.
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
