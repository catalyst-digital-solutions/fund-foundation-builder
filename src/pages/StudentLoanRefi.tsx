import { useState } from 'react';
import Header from "@/components/Header";
import { ChevronDown } from 'lucide-react';

const StudentLoanRefi = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Will checking rates affect my credit score?",
      answer: "No. Our rate comparison uses a soft credit check, which doesn't impact your score. Only when you formally apply with a lender will a hard inquiry be performed."
    },
    {
      question: "How long does refinancing take?",
      answer: "Most borrowers complete the process in 2-4 weeks. Rate comparison takes 2 minutes, and applications typically take 15-30 minutes to complete."
    },
    {
      question: "Can I refinance federal and private loans together?",
      answer: "Yes. Many lenders allow you to consolidate both federal and private loans into a single new loan. Remember, federal loans will lose their protections if refinanced."
    },
    {
      question: "What credit score do I need?",
      answer: "Most lenders require a minimum score of 650, though the best rates go to borrowers with scores above 700. Some lenders offer options for borrowers with lower scores."
    },
    {
      question: "Can I refinance multiple times?",
      answer: "Absolutely. Many borrowers refinance again when rates drop or their credit improves. There's no limit to how many times you can refinance."
    },
    {
      question: "Are there fees to refinance?",
      answer: "Most lenders don't charge application, origination, or prepayment fees. However, always read the terms carefully before accepting an offer."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* SECTION 1: HERO */}
      <section className="bg-gradient-to-br from-[#3E3E3E] via-[#bb9446] to-[#f9c65d] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-white">
              
              <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🎓 Mesa Group Consulting | Student Loan Refinancing
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Lower Your Student Loan Payments and Save Thousands
              </h1>
              
              <p className="text-xl mb-8 leading-relaxed text-white/90">
                Refinance your student loans to secure a <strong>lower interest rate</strong>, reduce monthly payments, and pay off debt faster. Compare top lenders in minutes.
              </p>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold mb-1">$288</div>
                  <div className="text-sm text-white/80">Avg Monthly Savings</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold mb-1">1-3%</div>
                  <div className="text-sm text-white/80">Rate Reduction</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold mb-1">$10K+</div>
                  <div className="text-sm text-white/80">Lifetime Savings</div>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="https://track.supermoney.com/aff_c?offer_id=1629&aff_id=2815"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#10B981] text-white text-xl font-bold px-12 py-5 rounded-lg hover:bg-[#059669] transition-all duration-200 shadow-2xl hover:shadow-3xl hover:scale-105 mb-4"
              >
                Compare Rates Now →
              </a>
              
              <p className="text-sm text-white/80">
                ✓ No impact to credit score &nbsp; | &nbsp; ✓ Takes 2 minutes &nbsp; | &nbsp; ✓ 100% free comparison
              </p>

              {/* Trust Badges */}
              <div className="flex gap-4 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-sm">
                  🔒 SSL Secure
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-sm">
                  ⭐ Trusted by Thousands
                </div>
              </div>

            </div>

            {/* Right Visual */}
            <div className="hidden lg:block">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-[#1F2937] mb-6">
                  How Much Can You Save?
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Your Current Rate</span>
                      <span className="font-bold text-red-600">7.5%</span>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Your New Rate</span>
                      <span className="font-bold text-[#10B981]">5.0%</span>
                    </div>
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <div className="flex justify-between items-end">
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Monthly Savings</div>
                          <div className="text-3xl font-bold text-[#10B981]">$267</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-600 mb-1">Lifetime Savings</div>
                          <div className="text-3xl font-bold text-[#10B981]">$48,060</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <a
                  href="https://track.supermoney.com/aff_c?offer_id=1629&aff_id=2815"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#bb9446] text-white font-bold py-4 rounded-lg hover:bg-[#a07d3a] transition-all duration-200 mt-6"
                >
                  Get My Personalized Rates
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT IS STUDENT LOAN REFINANCING */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3E3E3E] mb-6">
              Turn Your Student Debt Into Opportunity
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Student loan refinancing replaces your existing federal or private student loans with a new loan at a <strong>lower interest rate</strong>. This can significantly reduce your monthly payments and the total amount you'll pay over the life of the loan.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#f8d899] to-white rounded-2xl p-8 mb-12 shadow-lg">
            <h3 className="text-2xl font-bold text-[#3E3E3E] mb-6 text-center">
              How It Works
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#bb9446] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">1️⃣</span>
                </div>
                <h4 className="font-bold text-lg mb-2 text-[#3E3E3E]">New Lender Pays Off Old Loans</h4>
                <p className="text-gray-600 text-sm">
                  A new lender pays off all your existing student loans in full
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#bb9446] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">2️⃣</span>
                </div>
                <h4 className="font-bold text-lg mb-2 text-[#3E3E3E]">You Get One New Loan</h4>
                <p className="text-gray-600 text-sm">
                  You receive a single new loan with better terms and lower rate
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#bb9446] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">3️⃣</span>
                </div>
                <h4 className="font-bold text-lg mb-2 text-[#3E3E3E]">Start Saving Money</h4>
                <p className="text-gray-600 text-sm">
                  Lower interest means more money in your pocket every month
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://track.supermoney.com/aff_c?offer_id=1629&aff_id=2815"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#10B981] text-white text-xl font-bold px-12 py-5 rounded-lg hover:bg-[#059669] transition-all duration-200 shadow-xl hover:shadow-2xl"
            >
              Check My Rates (Won't Affect Credit)
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 3: SIX BENEFITS */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#E5D2AF] to-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3E3E3E] mb-4">
              Why Thousands of Graduates Are Refinancing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Refinancing your student loans can unlock financial freedom and help you achieve your goals faster
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-200 border-t-4 border-[#f9c65d]">
              <div className="text-5xl mb-4">📉</div>
              <h3 className="text-2xl font-bold text-[#3E3E3E] mb-4">
                Lower Interest Rates
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Secure a competitive rate based on your current credit score and income—often significantly lower than your original student loan rates. <strong>Even a 1% reduction can save you thousands.</strong>
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-200 border-t-4 border-[#bb9446]">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-[#3E3E3E] mb-4">
                Reduced Monthly Payments
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Free up cash flow each month by extending your repayment term or lowering your interest rate. Use the extra money for savings, investing, or other financial goals.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-200 border-t-4 border-[#f8d899]">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-[#3E3E3E] mb-4">
                Simplified Repayment
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Combine multiple student loans into one convenient monthly payment. No more juggling different due dates, servicers, or payment amounts.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-200 border-t-4 border-[#F97316]">
              <div className="text-5xl mb-4">⏰</div>
              <h3 className="text-2xl font-bold text-[#3E3E3E] mb-4">
                Flexible Term Options
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Choose a repayment term that fits your budget—from 5 to 20 years. Shorter terms mean less interest paid overall; longer terms provide lower monthly payments.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-200 border-t-4 border-[#f9c65d]">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-2xl font-bold text-[#3E3E3E] mb-4">
                Remove a Cosigner
              </h3>
              <p className="text-gray-700 leading-relaxed">
                If you had a cosigner on your original loans, refinancing in your name alone can release them from that obligation and give you full financial independence.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-200 border-t-4 border-[#bb9446]">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-[#3E3E3E] mb-4">
                Pay Off Debt Faster
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Lower rates mean more of your payment goes toward principal. You can become debt-free years earlier without increasing your monthly payment.
              </p>
            </div>

          </div>

          <div className="text-center mt-12">
            <a
              href="https://track.supermoney.com/aff_c?offer_id=1629&aff_id=2815"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#bb9446] text-white text-xl font-bold px-12 py-5 rounded-lg hover:bg-[#a07d3a] transition-all duration-200 shadow-xl hover:shadow-2xl"
            >
              Start Saving Today →
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 4: THREE-STEP PROCESS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3E3E3E] mb-4">
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-xl text-gray-600">
              From rate comparison to debt freedom—we make refinancing easy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            
            <div className="relative">
              <div className="bg-gradient-to-br from-[#bb9446] to-[#f9c65d] rounded-2xl p-8 text-white shadow-xl">
                <div className="absolute -top-6 left-8 w-12 h-12 bg-[#10B981] rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  1
                </div>
                <h3 className="text-2xl font-bold mb-4 mt-4">Compare Your Options</h3>
                <p className="leading-relaxed mb-6">
                  Answer a few quick questions about your loans, credit score, and income. Our comparison tool instantly shows you personalized rates from multiple top lenders—<strong>with no impact to your credit score</strong>.
                </p>
                <div className="text-sm bg-white/20 backdrop-blur-sm rounded-lg p-3">
                  ⏱️ Takes just 2 minutes
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#f9c65d] to-[#10B981] rounded-2xl p-8 text-white shadow-xl">
                <div className="absolute -top-6 left-8 w-12 h-12 bg-[#F97316] rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  2
                </div>
                <h3 className="text-2xl font-bold mb-4 mt-4">Choose Your Best Offer</h3>
                <p className="leading-relaxed mb-6">
                  Review offers side-by-side, comparing interest rates, monthly payments, and loan terms. Select the option that best fits your financial goals and budget.
                </p>
                <div className="text-sm bg-white/20 backdrop-blur-sm rounded-lg p-3">
                  📊 Compare 10+ lenders
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#10B981] to-[#059669] rounded-2xl p-8 text-white shadow-xl">
                <div className="absolute -top-6 left-8 w-12 h-12 bg-[#bb9446] rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  3
                </div>
                <h3 className="text-2xl font-bold mb-4 mt-4">Complete Your Application</h3>
                <p className="leading-relaxed mb-6">
                  Apply directly with your chosen lender. They'll verify your information, finalize your rate, and pay off your existing loans. You'll start making payments on your new, lower-cost loan.
                </p>
                <div className="text-sm bg-white/20 backdrop-blur-sm rounded-lg p-3">
                  ✅ Process complete in 2-4 weeks
                </div>
              </div>
            </div>

          </div>

          <div className="bg-[#f8d899] rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-[#3E3E3E] mb-4">
              Ready to Lower Your Payments?
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Compare personalized rates from top lenders in just 2 minutes
            </p>
            <a
              href="https://track.supermoney.com/aff_c?offer_id=1629&aff_id=2815"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#10B981] text-white text-xl font-bold px-12 py-5 rounded-lg hover:bg-[#059669] transition-all duration-200 shadow-xl hover:shadow-2xl"
            >
              Get My Rates Now
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 5: WHO SHOULD REFINANCE */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#E5D2AF] to-white">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3E3E3E] mb-4">
              Is Student Loan Refinancing Right for You?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Refinancing works best for borrowers who meet these criteria
            </p>
          </div>

          <div className="space-y-6">
            
            <div className="bg-white rounded-xl p-8 shadow-lg flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#10B981] rounded-full flex items-center justify-center text-white text-2xl">
                ✓
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#3E3E3E] mb-2">
                  Good to Excellent Credit (650+)
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Your credit score significantly impacts the rates you'll qualify for. A score of 650 or higher typically unlocks competitive offers. The higher your score, the better your rate.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#bb9446] rounded-full flex items-center justify-center text-white text-2xl">
                ✓
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#3E3E3E] mb-2">
                  Steady Income
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Lenders want to see reliable income that demonstrates your ability to repay. Full-time employment or consistent self-employment income qualifies.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#f9c65d] rounded-full flex items-center justify-center text-white text-2xl">
                ✓
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#3E3E3E] mb-2">
                  High-Interest Private Loans
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  If your current loans have rates above 6-7%, refinancing can lead to substantial savings. Private student loans are especially good candidates for refinancing.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#F97316] rounded-full flex items-center justify-center text-white text-2xl">
                ⚠️
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#3E3E3E] mb-2">
                  Federal Loans You're Willing to Convert
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Federal loans come with unique protections (income-driven repayment, forgiveness programs). If you don't need these benefits, refinancing can save you money. <strong>Consider carefully before refinancing federal loans.</strong>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#10B981] rounded-full flex items-center justify-center text-white text-2xl">
                ✓
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#3E3E3E] mb-2">
                  No Plans for Loan Forgiveness
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  If you're pursuing Public Service Loan Forgiveness (PSLF) or other federal programs, keep federal loans separate and don't refinance them. Refinancing makes you ineligible for forgiveness.
                </p>
              </div>
            </div>

          </div>

          <div className="mt-12 bg-gradient-to-r from-[#bb9446] to-[#f9c65d] rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              See If You Qualify
            </h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Check your rate in 2 minutes with zero impact to your credit score
            </p>
            <a
              href="https://track.supermoney.com/aff_c?offer_id=1629&aff_id=2815"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#bb9446] text-xl font-bold px-12 py-5 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl"
            >
              Check My Qualification →
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 6: SAVINGS EXAMPLES */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3E3E3E] mb-4">
              Real Savings Examples
            </h2>
            <p className="text-xl text-gray-600">
              See how much borrowers like you are saving through refinancing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="bg-gradient-to-br from-[#f8d899] to-white rounded-xl p-8 shadow-lg border-2 border-[#f9c65d]">
              <div className="text-center mb-6">
                <div className="text-5xl mb-2">🎓</div>
                <h3 className="text-xl font-bold text-[#3E3E3E]">
                  Recent Graduate
                </h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="text-gray-600">Original Loan:</span>
                  <span className="font-bold">$50,000</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="text-gray-600">Original Rate:</span>
                  <span className="font-bold text-red-600">6.8%</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="text-gray-600">New Rate:</span>
                  <span className="font-bold text-[#10B981]">4.5%</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="text-gray-600">Term:</span>
                  <span className="font-bold">10 years</span>
                </div>
              </div>

              <div className="bg-[#10B981] text-white rounded-lg p-6 text-center">
                <div className="text-sm mb-2">Monthly Savings</div>
                <div className="text-3xl font-bold mb-4">$142</div>
                <div className="text-sm mb-2">Total Savings</div>
                <div className="text-3xl font-bold">$17,040</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#f8d899] to-white rounded-xl p-8 shadow-lg border-2 border-[#bb9446]">
              <div className="text-center mb-6">
                <div className="text-5xl mb-2">💼</div>
                <h3 className="text-xl font-bold text-[#3E3E3E]">
                  Established Professional
                </h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="text-gray-600">Original Loan:</span>
                  <span className="font-bold">$100,000</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="text-gray-600">Original Rate:</span>
                  <span className="font-bold text-red-600">7.5%</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="text-gray-600">New Rate:</span>
                  <span className="font-bold text-[#10B981]">5.0%</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="text-gray-600">Term:</span>
                  <span className="font-bold">15 years</span>
                </div>
              </div>

              <div className="bg-[#bb9446] text-white rounded-lg p-6 text-center">
                <div className="text-sm mb-2">Monthly Savings</div>
                <div className="text-3xl font-bold mb-4">$267</div>
                <div className="text-sm mb-2">Total Savings</div>
                <div className="text-3xl font-bold">$48,060</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#f8d899] to-white rounded-xl p-8 shadow-lg border-2 border-[#f8d899]">
              <div className="text-center mb-6">
                <div className="text-5xl mb-2">🚀</div>
                <h3 className="text-xl font-bold text-[#3E3E3E]">
                  Private Loan Holder
                </h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="text-gray-600">Original Loan:</span>
                  <span className="font-bold">$75,000</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="text-gray-600">Original Rate:</span>
                  <span className="font-bold text-red-600">9.0%</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="text-gray-600">New Rate:</span>
                  <span className="font-bold text-[#10B981]">5.5%</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="text-gray-600">Term:</span>
                  <span className="font-bold">15 years</span>
                </div>
              </div>

              <div className="bg-[#bb9446] text-white rounded-lg p-6 text-center">
                <div className="text-sm mb-2">Monthly Savings</div>
                <div className="text-3xl font-bold mb-4">$267</div>
                <div className="text-sm mb-2">Total Savings</div>
                <div className="text-3xl font-bold">$48,060</div>
              </div>
            </div>

          </div>

          <div className="mt-12 text-center">
            <a
              href="https://track.supermoney.com/aff_c?offer_id=1629&aff_id=2815"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#10B981] text-white text-xl font-bold px-12 py-5 rounded-lg hover:bg-[#059669] transition-all duration-200 shadow-xl hover:shadow-2xl"
            >
              Calculate My Savings →
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 7: FAQ ACCORDION */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#E5D2AF] to-white">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3E3E3E] mb-6">
              Common <span className="text-amber-600">Questions</span> About Student Loan Refinancing
            </h2>
            <p className="text-xl text-gray-700">
              Get answers to your most pressing questions about refinancing.
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
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#3E3E3E] via-[#bb9446] to-[#f9c65d]">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Lower Your Student Loan Payments?
          </h2>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Compare personalized rates from top lenders in 2 minutes. No cost, no obligation, no impact to your credit score.
          </p>

          <a
            href="https://track.supermoney.com/aff_c?offer_id=1629&aff_id=2815"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#bb9446] text-2xl font-bold px-16 py-6 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-2xl hover:shadow-3xl hover:scale-105 mb-6"
          >
            Get My Rates Now →
          </a>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white text-sm mb-8">
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>SSL Secure</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Your information is safe</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Compare 10+ lenders</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-white text-sm leading-relaxed">
              Questions? Call our Bakersfield office at <a href="tel:6613103040" className="font-bold hover:underline">(661) 310-3040</a> or schedule a free consultation. We're here to help you save money on your student loans.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 9: FOOTER */}
      <footer className="bg-[#3E3E3E] py-12 px-6 text-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            
            <div>
              <h3 className="text-xl font-bold text-[#f9c65d] mb-4">Mesa Group Consulting</h3>
              <p className="text-sm text-gray-300 mb-4">
                Your trusted partner for credit repair and financial services in Bakersfield, CA.
              </p>
              <p className="text-sm text-gray-300">
                📍 5001 California Ave Suite 219<br />
                Bakersfield, CA 93309<br />
                📞 (661) 310-3040
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#f9c65d] mb-4">For Consumers</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="/build-credit" className="hover:text-[#f9c65d]">Build Credit</a></li>
                <li><a href="/credit-monitoring" className="hover:text-[#f9c65d]">Credit Monitoring</a></li>
                <li><a href="/credit-repair" className="hover:text-[#f9c65d]">Credit Repair</a></li>
                <li><a href="/personal-loans" className="hover:text-[#f9c65d]">Personal Loans</a></li>
                <li><a href="/debt-consolidation" className="hover:text-[#f9c65d]">Debt Consolidation</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#f9c65d] mb-4">For Businesses</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="/business-funding" className="hover:text-[#f9c65d]">Business Funding</a></li>
                <li><a href="/business-credit" className="hover:text-[#f9c65d]">Business Credit</a></li>
                <li><a href="/business-debt-relief" className="hover:text-[#f9c65d]">Business Debt Relief</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#f9c65d] mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="/about" className="hover:text-[#f9c65d]">About Us</a></li>
                <li><a href="/blog" className="hover:text-[#f9c65d]">Mesa News Blog</a></li>
                <li><a href="/calculators" className="hover:text-[#f9c65d]">Financial Calculators</a></li>
                <li><a href="/contact" className="hover:text-[#f9c65d]">Contact</a></li>
              </ul>
            </div>

          </div>

          <div className="border-t border-gray-700 pt-6">
            <p className="text-xs text-gray-400 text-center leading-relaxed mb-4">
              <strong>Important Disclosure:</strong> Mesa Group Consulting is a marketing service that connects consumers with lending partners. We do not make credit decisions. Rates, terms, and conditions are determined by your chosen lender. Refinancing federal student loans eliminates federal benefits including income-driven repayment, loan forgiveness programs, and deferment options. Consider carefully before refinancing federal loans. Not all applicants will qualify. Your actual rate depends on credit score, income, and other factors.
            </p>
            <p className="text-sm text-gray-400 text-center">
              © {new Date().getFullYear()} Mesa Group Consulting. All rights reserved.
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default StudentLoanRefi;
