import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What's the difference between the Full Service and DIY programs?",
      answer: "The Full Service program ($2,495) includes 12 months of dedicated business coaching with weekly check-in calls. The DIY program ($995) is self-guided without coaching."
    },
    {
      question: "How long does it take to build business credit?",
      answer: "Building meaningful business credit typically takes 6-12 months. Most clients see progress within 90 days and can access business credit cards by month 3-6."
    },
    {
      question: "Will building business credit affect my personal credit?",
      answer: "No. When done correctly, business credit is completely separate from your personal credit, protecting your personal assets."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border-2 border-gray-200">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left bg-white"
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                <svg className={`w-6 h-6 text-amber-600 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 bg-white">
                  <p className="text-gray-700">{faq.answer}</p>
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
