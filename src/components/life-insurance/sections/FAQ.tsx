import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How much life insurance do I need?",
      answer: "A common rule of thumb is 10-12 times your annual income. However, the right amount depends on your specific situation including debts, income, dependents, and long-term financial goals. PolicyGenius agents can help you calculate the optimal coverage amount for your family's needs."
    },
    {
      question: "How much does life insurance cost?",
      answer: "Term life insurance is surprisingly affordable—many healthy individuals in their 30s can get $500,000 in coverage for $20-30 per month. Costs vary based on age, health, lifestyle habits (smoking), coverage amount, and policy type. Get a free personalized quote to see exact pricing for your situation."
    },
    {
      question: "Do I need a medical exam?",
      answer: "Most traditional policies require a medical exam, which is typically free and completed at your home or workplace. The exam includes basic measurements (height, weight, blood pressure) and blood/urine samples. Some policies offer no-exam options, though they may have higher premiums or lower coverage limits."
    },
    {
      question: "What's the difference between term and whole life insurance?",
      answer: "Term life insurance provides coverage for a specific period (10, 20, or 30 years) and is typically more affordable. Whole life insurance provides permanent coverage for your entire life and builds cash value, but costs significantly more. Term is best for temporary needs; whole life is better for estate planning and long-term wealth building."
    },
    {
      question: "Can I get life insurance if I have health conditions?",
      answer: "Yes. Many people with health conditions like diabetes, high blood pressure, or even cancer history can still qualify for coverage. Insurers will consider your specific condition, how well it's managed, and overall health. Some conditions may result in higher premiums, but coverage is often still available."
    },
    {
      question: "How long does the application process take?",
      answer: "The entire process typically takes 2-6 weeks from application to approval. You can complete the online application in 10-15 minutes, schedule your medical exam within days, and most approvals come within 24-48 hours after the exam. Some policies offer instant decisions for qualifying applicants."
    },
    {
      question: "Is the death benefit taxable?",
      answer: "No. Life insurance death benefits are generally income-tax-free to your beneficiaries. This is one of the key advantages of life insurance—your loved ones receive the full benefit amount without tax implications. However, the cash value growth in permanent policies may have tax considerations; consult a tax advisor for specifics."
    },
    {
      question: "Can I change my coverage amount later?",
      answer: "It depends on your policy type. Term life insurance typically has fixed coverage for the term length, though some policies offer conversion options to permanent coverage. Whole and universal life policies often allow adjustments to death benefits and premiums (subject to underwriting). It's generally easier to decrease coverage than increase it."
    },
    {
      question: "What if I miss a premium payment?",
      answer: "Most policies have a grace period (typically 30-31 days) after your payment due date. If you pay within the grace period, your coverage continues uninterrupted. If you miss the grace period, your policy may lapse. Contact your insurer immediately if you're having payment difficulties—they may offer options."
    },
    {
      question: "Do I need life insurance if I'm young and single?",
      answer: "Even if you don't have dependents, life insurance can make sense if you have: (1) cosigned student loans or other debts that family would inherit, (2) want to lock in lower rates while you're young and healthy, (3) plan to have a family soon, or (4) want to help cover final expenses. It's also significantly cheaper when you're younger."
    },
    {
      question: "How does PolicyGenius make money if quotes are free?",
      answer: "PolicyGenius is compensated by insurance carriers when you purchase a policy—similar to how traditional insurance agents are paid. This commission is built into the policy price by the carrier, so you pay the same whether you buy through PolicyGenius or directly from the insurer. There are no extra fees or markups."
    },
    {
      question: "Is PolicyGenius trustworthy?",
      answer: "Yes. PolicyGenius is a licensed insurance broker with licenses in all 50 states. They've helped over 30 million people shop for insurance and are rated A+ by the Better Business Bureau. PolicyGenius works with top-rated carriers (A.M. Best ratings of A or higher) and their agents are licensed professionals bound by strict regulations."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-amber-600">Questions</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Get answers to common questions about life insurance
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-amber-600 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <div className="pt-2 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed mt-3">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 border-2 border-amber-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Still Have Questions?
          </h3>
          <p className="text-gray-700 mb-6">
            Connect with a licensed PolicyGenius agent who can answer your specific questions and help you find the right coverage.
          </p>
          <a
            href="https://policygenius.go2cloud.org/aff_c?offer_id=811&aff_id=2244"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-gray-900 bg-amber-400 rounded-lg hover:bg-amber-500 transition-all duration-200 shadow-lg hover:shadow-xl border-2 border-amber-500"
          >
            Speak with an Expert
          </a>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
