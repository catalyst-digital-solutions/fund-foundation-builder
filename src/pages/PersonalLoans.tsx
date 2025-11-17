import { useState } from 'react';
import Header from "@/components/Header";

const PersonalLoans = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Will comparing loans hurt my credit score?",
      answer: "No. We only use soft credit pulls to show you personalized offers, which do NOT impact your credit score. You can check rates from 100+ lenders as many times as you want with zero credit score damage. The only time you'll see a hard credit inquiry (which can temporarily lower your score by a few points) is when you formally accept a loan offer and the lender does final verification."
    },
    {
      question: "How fast can I get my money?",
      answer: "It varies by lender. Some lenders fund loans as fast as 1 business day after approval, while others take 3-7 business days. Once you compare offers, each lender will show their estimated funding timeline. For urgent needs, you can filter for lenders that offer fast funding."
    },
    {
      question: "What credit score do I need to qualify?",
      answer: "Our network of lenders accepts credit scores as low as 300, though your rate and loan amount will depend on your credit profile. Generally: Excellent (750+) = best rates; Good (700-749) = great rates; Fair (640-699) = moderate rates; Poor (580-639) = higher rates but still available; Bad (300-579) = highest rates, limited options. Even with bad credit, you can still get offers—just expect higher interest rates."
    },
    {
      question: "Are there any fees to use this comparison service?",
      answer: "Nope. Our loan comparison platform is 100% free to use. You won't pay application fees, comparison fees, or hidden charges to see your offers. However, individual lenders may charge origination fees (typically 1-6% of the loan amount), which will be clearly disclosed in each loan offer before you accept."
    },
    {
      question: "Can I pay off my loan early without penalties?",
      answer: "It depends on the lender. Many lenders in our network allow early payoff with no prepayment penalties, but some do charge fees for paying off loans early. Each loan offer will clearly state whether prepayment penalties apply. If avoiding prepayment penalties is important to you, filter for lenders that don't charge them."
    },
    {
      question: "What documents will I need to apply?",
      answer: "To see your initial offers, you'll just need basic info (name, address, estimated credit score, loan amount). If you accept an offer, most lenders will require: valid government ID (driver's license, passport), proof of income (pay stubs, tax returns, bank statements), Social Security number, and proof of address (utility bill, lease agreement). The exact requirements vary by lender."
    },
    {
      question: "What if I'm self-employed or have irregular income?",
      answer: "Many lenders in our network work with self-employed borrowers, freelancers, and gig workers. You may need to provide additional documentation like tax returns, bank statements showing consistent deposits, or 1099 forms. Some lenders specialize in non-traditional income verification, so you'll likely still find options even if you're not a W-2 employee."
    },
    {
      question: "Can I use a personal loan to pay off credit cards?",
      answer: "Yes! Debt consolidation is one of the most common uses for personal loans. If you have high-interest credit card debt (15-25% APR), consolidating into a personal loan (5-15% APR) can save you thousands in interest and simplify your monthly payments. Many borrowers use personal loans specifically for this purpose."
    },
    {
      question: "How do I know which loan offer is best for me?",
      answer: "Compare these factors side-by-side: (1) APR (annual percentage rate) – lower is better; (2) Monthly payment – must fit your budget; (3) Total loan cost – includes all interest and fees; (4) Loan term – shorter = less interest, longer = lower payment; (5) Origination fees – some lenders charge them, others don't; (6) Prepayment penalties – avoid if you plan to pay off early. Focus on total cost, not just monthly payment."
    },
    {
      question: "Is my personal information safe?",
      answer: "Yes. Our platform is SOC 2 Type II certified, which is the gold standard for data security. We use bank-level 256-bit encryption to protect your information, and we never sell your data to third-party marketers. We only share your information with lenders you explicitly choose to apply with."
    }
  ];

  const openAffiliateLink = () => {
    window.open('https://track.supermoney.com/aff_c?offer_id=1618&aff_id=2815&utm_source=mesa&utm_medium=website&utm_campaign=personal_loans', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* SECTION 1: HERO */}
      <section className="bg-gradient-to-b from-[#f9c65d] via-[#f8d899] to-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* LEFT COLUMN - Content */}
            <div>
              {/* Eyebrow */}
              <p className="text-sm uppercase tracking-wide text-[#3E3E3E] mb-4">
                Personal Loan Comparison
              </p>
              
              {/* H1 Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#3E3E3E] mb-6 leading-tight">
                Compare 100+ Lenders. One Simple Application.
              </h1>
              
              {/* Subheadline */}
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                Get personalized loan offers from top lenders in minutes—without hurting your credit score. Compare rates, terms, and payments side-by-side to find your best deal.
              </p>
              
              {/* Value Props Quick List */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</span>
                  <span className="text-gray-800"><strong>Soft credit pull only</strong> – won't affect your credit score</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</span>
                  <span className="text-gray-800"><strong>Compare 100+ lenders</strong> with one application</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</span>
                  <span className="text-gray-800"><strong>Rates from 5.99% APR</strong> for qualified borrowers</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</span>
                  <span className="text-gray-800"><strong>Loans from $1,000 to $100,000</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</span>
                  <span className="text-gray-800"><strong>All credit types welcome</strong> (300+ credit score)</span>
                </li>
              </ul>
              
              {/* Primary CTA */}
              <button 
                onClick={openAffiliateLink}
                className="bg-[#bb9446] hover:bg-[#f9c65d] text-white hover:text-[#3E3E3E] text-lg font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition duration-200 w-full md:w-auto"
              >
                Compare Loan Offers Now
              </button>
              
              <p className="text-sm text-gray-600 mt-4">
                Free comparison. No impact to credit score. Takes under 2 minutes.
              </p>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🔒</span>
                  <span className="text-sm font-medium text-[#3E3E3E]">SOC 2 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  <span className="text-sm font-medium text-[#3E3E3E]">Instant Offers</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span className="text-sm font-medium text-[#3E3E3E]">100+ Lenders</span>
                </div>
              </div>
            </div>
            
            {/* RIGHT COLUMN - Visual */}
            <div className="hidden md:block">
              <div className="bg-white rounded-lg shadow-2xl p-6 border-2 border-[#bb9446]">
                <h3 className="text-lg font-bold text-[#3E3E3E] mb-4 text-center">
                  Your Personalized Offers
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-[#3E3E3E]">Best Egg</span>
                      <span className="px-3 py-1 bg-green-500 text-white rounded-full text-xs font-bold">BEST RATE</span>
                    </div>
                    <div className="text-2xl font-bold text-[#bb9446] mb-1">5.99% APR</div>
                    <div className="text-sm text-gray-600">$15,000 • 36 months • $449/mo</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border-2 border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-[#3E3E3E]">LendingClub</span>
                    </div>
                    <div className="text-2xl font-bold text-[#bb9446] mb-1">7.24% APR</div>
                    <div className="text-sm text-gray-600">$15,000 • 36 months • $463/mo</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border-2 border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-[#3E3E3E]">Upgrade</span>
                    </div>
                    <div className="text-2xl font-bold text-[#bb9446] mb-1">8.49% APR</div>
                    <div className="text-sm text-gray-600">$15,000 • 36 months • $472/mo</div>
                  </div>
                </div>
                <p className="text-center text-xs text-gray-600 mt-4 italic">
                  Example offers. Your rates may vary.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* SECTION 2: HOW IT WORKS */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-4 text-center">
            How Personal Loan Comparison Works
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Get multiple loan offers in minutes—no guesswork, no credit score damage, no hidden fees.
          </p>
          
          {/* 4-Step Process */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Step 1 */}
            <div className="bg-gradient-to-br from-[#f8d899] to-[#E5D2AF] rounded-lg p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-[#bb9446] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-lg font-semibold text-[#3E3E3E] mb-3">
                Tell Us About Yourself
              </h3>
              <p className="text-sm text-gray-700">
                Fill out one simple form with your loan amount, credit score range, and basic info. Takes under 2 minutes.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-gradient-to-br from-[#f8d899] to-[#E5D2AF] rounded-lg p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-[#bb9446] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-lg font-semibold text-[#3E3E3E] mb-3">
                We Match You With Lenders
              </h3>
              <p className="text-sm text-gray-700">
                Our platform compares 100+ lenders instantly using a soft credit pull that won't hurt your score.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-gradient-to-br from-[#f8d899] to-[#E5D2AF] rounded-lg p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-[#bb9446] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-semibold text-[#3E3E3E] mb-3">
                Compare Your Offers
              </h3>
              <p className="text-sm text-gray-700">
                Review personalized loan offers side-by-side. Compare rates, monthly payments, terms, and total costs.
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="bg-gradient-to-br from-[#f8d899] to-[#E5D2AF] rounded-lg p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-[#bb9446] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-lg font-semibold text-[#3E3E3E] mb-3">
                Choose Your Best Deal
              </h3>
              <p className="text-sm text-gray-700">
                Select the loan that fits your budget. Complete the lender's application and get funded in as fast as 1 business day.
              </p>
            </div>
            
          </div>
          
          {/* Timeline Callout */}
          <div className="bg-[#f8d899] rounded-lg p-8 mt-12 max-w-4xl mx-auto text-center">
            <h4 className="text-2xl font-bold text-[#3E3E3E] mb-4">Fast & Transparent Process</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-4xl font-bold text-[#bb9446] mb-2">2 min</div>
                <div className="text-gray-700">Application time</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#bb9446] mb-2">60 sec</div>
                <div className="text-gray-700">Get instant offers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#bb9446] mb-2">1-3 days</div>
                <div className="text-gray-700">Funds in your account</div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* SECTION 3: COMMON USES FOR PERSONAL LOANS */}
      <section className="bg-[#E5D2AF] py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-4 text-center">
            What Can You Use a Personal Loan For?
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Personal loans are flexible. Use them for almost anything—no restrictions, no questions asked.
          </p>
          
          {/* Use Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Use Case 1: Debt Consolidation */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-5xl mb-4 text-center">💳</div>
              <h3 className="text-xl font-bold text-[#3E3E3E] mb-3 text-center">
                Debt Consolidation
              </h3>
              <p className="text-gray-700 mb-4 text-center">
                Combine multiple high-interest credit cards or debts into one lower-rate monthly payment.
              </p>
              <div className="bg-green-50 border-2 border-green-200 rounded p-3 text-sm text-gray-700">
                <strong>Example:</strong> Consolidate $20,000 in credit card debt (22% APR) into a personal loan (8% APR) and save $5,600+ in interest over 5 years.
              </div>
            </div>
            
            {/* Use Case 2: Emergency Expenses */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-5xl mb-4 text-center">🚨</div>
              <h3 className="text-xl font-bold text-[#3E3E3E] mb-3 text-center">
                Emergency Expenses
              </h3>
              <p className="text-gray-700 mb-4 text-center">
                Medical bills, car repairs, or unexpected home repairs—get fast cash when you need it most.
              </p>
              <div className="bg-blue-50 border-2 border-blue-200 rounded p-3 text-sm text-gray-700">
                <strong>Fast Funding:</strong> Some lenders fund loans in as little as 1 business day for urgent needs.
              </div>
            </div>
            
            {/* Use Case 3: Home Improvement */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-5xl mb-4 text-center">🏠</div>
              <h3 className="text-xl font-bold text-[#3E3E3E] mb-3 text-center">
                Home Improvement
              </h3>
              <p className="text-gray-700 mb-4 text-center">
                Remodel your kitchen, finish your basement, or add solar panels—increase your home's value.
              </p>
              <div className="bg-purple-50 border-2 border-purple-200 rounded p-3 text-sm text-gray-700">
                <strong>ROI Potential:</strong> Home improvements can increase property value and may pay for themselves at resale.
              </div>
            </div>
            
            {/* Use Case 4: Major Purchases */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-5xl mb-4 text-center">🛒</div>
              <h3 className="text-xl font-bold text-[#3E3E3E] mb-3 text-center">
                Major Purchases
              </h3>
              <p className="text-gray-700 mb-4 text-center">
                Furniture, appliances, electronics—finance big-ticket items with manageable monthly payments.
              </p>
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded p-3 text-sm text-gray-700">
                <strong>Tip:</strong> Personal loans often have lower rates than store credit cards or buy-now-pay-later plans.
              </div>
            </div>
            
            {/* Use Case 5: Moving Costs */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-5xl mb-4 text-center">📦</div>
              <h3 className="text-xl font-bold text-[#3E3E3E] mb-3 text-center">
                Moving & Relocation
              </h3>
              <p className="text-gray-700 mb-4 text-center">
                Cover moving expenses, deposits, and first/last month's rent when relocating for work or family.
              </p>
              <div className="bg-orange-50 border-2 border-orange-200 rounded p-3 text-sm text-gray-700">
                <strong>Average Cost:</strong> Cross-country moves can cost $5,000-$10,000+. A personal loan can ease the burden.
              </div>
            </div>
            
            {/* Use Case 6: Life Events */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-5xl mb-4 text-center">💍</div>
              <h3 className="text-xl font-bold text-[#3E3E3E] mb-3 text-center">
                Weddings & Life Events
              </h3>
              <p className="text-gray-700 mb-4 text-center">
                Finance weddings, adoption costs, or family celebrations without draining your savings.
              </p>
              <div className="bg-pink-50 border-2 border-pink-200 rounded p-3 text-sm text-gray-700">
                <strong>Average Wedding Cost:</strong> $28,000+ nationally. Finance your dream day with fixed monthly payments.
              </div>
            </div>
            
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <button 
              onClick={openAffiliateLink}
              className="bg-[#bb9446] hover:bg-[#f9c65d] text-white hover:text-[#3E3E3E] text-lg font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition duration-200"
            >
              See Your Personalized Loan Offers
            </button>
          </div>
          
        </div>
      </section>

      {/* SECTION 4: WHY COMPARE WITH US */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-4 text-center">
            Why Compare Personal Loans With Us?
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            We've made loan shopping transparent, fast, and completely free—with zero impact to your credit score.
          </p>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Benefit 1: No Credit Score Impact */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-8 border-2 border-green-200">
              <div className="flex items-start gap-4">
                <div className="text-5xl">🛡️</div>
                <div>
                  <h3 className="text-2xl font-bold text-[#3E3E3E] mb-3">
                    No Credit Score Impact
                  </h3>
                  <p className="text-gray-700 mb-4">
                    We only use <strong>soft credit pulls</strong> to show you personalized offers. Your credit score stays safe while you shop and compare—no matter how many offers you check.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 text-lg">✓</span>
                      <span>Soft pull won't show up on credit reports</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 text-lg">✓</span>
                      <span>Check rates as many times as you want</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 text-lg">✓</span>
                      <span>Hard pull only when you accept an offer</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Benefit 2: Compare 100+ Lenders */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 border-2 border-blue-200">
              <div className="flex items-start gap-4">
                <div className="text-5xl">🏦</div>
                <div>
                  <h3 className="text-2xl font-bold text-[#3E3E3E] mb-3">
                    100+ Lenders in One Place
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Stop visiting 10+ different bank websites. We partner with <strong>over 100 trusted lenders</strong>—banks, credit unions, and online lenders—so you can compare all your options instantly.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 text-lg">✓</span>
                      <span>Major banks (Wells Fargo, Chase, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 text-lg">✓</span>
                      <span>Top online lenders (SoFi, LendingClub, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 text-lg">✓</span>
                      <span>Credit unions and specialty lenders</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Benefit 3: Save Time & Money */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 border-2 border-purple-200">
              <div className="flex items-start gap-4">
                <div className="text-5xl">💰</div>
                <div>
                  <h3 className="text-2xl font-bold text-[#3E3E3E] mb-3">
                    Save Time & Money
                  </h3>
                  <p className="text-gray-700 mb-4">
                    One application gets you <strong>multiple offers in under 2 minutes</strong>. Compare rates side-by-side and choose the loan that saves you the most money—without the hassle of calling banks.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 text-lg">✓</span>
                      <span>2-minute application vs. hours of research</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 text-lg">✓</span>
                      <span>Lenders compete for your business = better rates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 text-lg">✓</span>
                      <span>Transparent comparison = no hidden fees</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Benefit 4: Secure & Private */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-8 border-2 border-yellow-200">
              <div className="flex items-start gap-4">
                <div className="text-5xl">🔐</div>
                <div>
                  <h3 className="text-2xl font-bold text-[#3E3E3E] mb-3">
                    Secure & Private Platform
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Your data is protected by <strong>SOC 2 Type II certification</strong>—the gold standard for data security. We never sell your information to third parties or spam you with unwanted calls.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 text-lg">✓</span>
                      <span>Bank-level 256-bit encryption</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 text-lg">✓</span>
                      <span>No selling data to marketers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 text-lg">✓</span>
                      <span>Audited & compliant with strict security standards</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
      </section>

      {/* SECTION 5: LOAN RATES BY CREDIT SCORE */}
      <section className="bg-[#f8d899] py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-4 text-center">
            What Rates Can I Expect?
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Personal loan rates depend primarily on your credit score. Here's what borrowers typically see across different credit tiers.
          </p>
          
          {/* Credit Score Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
            
            {/* Excellent Credit */}
            <div className="bg-white rounded-lg p-6 text-center shadow-md border-2 border-green-500">
              <div className="text-3xl mb-3">⭐⭐⭐</div>
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-2">Excellent</h3>
              <div className="text-2xl font-bold text-green-600 mb-2">5.99%-7.99%</div>
              <div className="text-sm text-gray-600 mb-3">Credit: 750+</div>
              <p className="text-xs text-gray-600">
                Best rates. Most lenders compete for your business.
              </p>
            </div>
            
            {/* Good Credit */}
            <div className="bg-white rounded-lg p-6 text-center shadow-md border-2 border-blue-500">
              <div className="text-3xl mb-3">⭐⭐</div>
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-2">Good</h3>
              <div className="text-2xl font-bold text-blue-600 mb-2">8%-12%</div>
              <div className="text-sm text-gray-600 mb-3">Credit: 700-749</div>
              <p className="text-xs text-gray-600">
                Great rates. Plenty of lender options available.
              </p>
            </div>
            
            {/* Fair Credit */}
            <div className="bg-white rounded-lg p-6 text-center shadow-md border-2 border-yellow-500">
              <div className="text-3xl mb-3">⭐</div>
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-2">Fair</h3>
              <div className="text-2xl font-bold text-yellow-600 mb-2">12%-18%</div>
              <div className="text-sm text-gray-600 mb-3">Credit: 640-699</div>
              <p className="text-xs text-gray-600">
                Moderate rates. Good selection of lenders.
              </p>
            </div>
            
            {/* Poor Credit */}
            <div className="bg-white rounded-lg p-6 text-center shadow-md border-2 border-orange-500">
              <div className="text-3xl mb-3">⚠️</div>
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-2">Poor</h3>
              <div className="text-2xl font-bold text-orange-600 mb-2">18%-28%</div>
              <div className="text-sm text-gray-600 mb-3">Credit: 580-639</div>
              <p className="text-xs text-gray-600">
                Higher rates. Limited but available options.
              </p>
            </div>
            
            {/* Bad Credit */}
            <div className="bg-white rounded-lg p-6 text-center shadow-md border-2 border-red-500">
              <div className="text-3xl mb-3">❌</div>
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-2">Bad</h3>
              <div className="text-2xl font-bold text-red-600 mb-2">28%-36%</div>
              <div className="text-sm text-gray-600 mb-3">Credit: 300-579</div>
              <p className="text-xs text-gray-600">
                Highest rates. Fewer options, but still possible.
              </p>
            </div>
            
          </div>
          
          {/* Example Savings Calculation */}
          <div className="bg-white rounded-lg p-8 border-2 border-[#bb9446]">
            <h3 className="text-2xl font-bold text-[#3E3E3E] mb-4 text-center">
              Why Your Rate Matters: Real Example
            </h3>
            <p className="text-gray-700 mb-6 text-center">
              Let's say you borrow <strong>$15,000 over 5 years</strong>. Here's how different rates affect your total cost:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">7% APR</div>
                <div className="text-sm text-gray-600 mb-2">Excellent Credit</div>
                <div className="text-xl font-semibold text-[#3E3E3E]">$297/month</div>
                <div className="text-sm text-gray-600">Total Cost: $17,822</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-600 mb-2">15% APR</div>
                <div className="text-sm text-gray-600 mb-2">Fair Credit</div>
                <div className="text-xl font-semibold text-[#3E3E3E]">$356/month</div>
                <div className="text-sm text-gray-600">Total Cost: $21,388</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">25% APR</div>
                <div className="text-sm text-gray-600 mb-2">Bad Credit</div>
                <div className="text-xl font-semibold text-[#3E3E3E]">$431/month</div>
                <div className="text-sm text-gray-600">Total Cost: $25,887</div>
              </div>
            </div>
            <p className="text-center text-gray-700 mt-6 font-medium">
              <strong>That's a $8,065 difference</strong> between excellent and bad credit! Shopping for the best rate is critical.
            </p>
          </div>
          
          {/* Bottom Notice */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mt-8">
            <div className="flex items-start gap-3">
              <span className="text-3xl">💡</span>
              <div>
                <h4 className="font-bold text-[#3E3E3E] mb-2">Good News: We Accept All Credit Types</h4>
                <p className="text-gray-700">
                  Even if you have fair, poor, or bad credit (300+ credit score), our platform connects you with lenders who specialize in all credit tiers. You may not get the lowest rate, but you'll see your actual options—and comparing multiple offers means you'll still get the best deal available to you.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* SECTION 6: LOAN AMOUNT & TERM OPTIONS */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-12 text-center">
            Flexible Loan Amounts & Terms
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
            {/* Loan Amounts */}
            <div className="bg-gradient-to-br from-[#f8d899] to-[#E5D2AF] rounded-lg p-8 border-2 border-[#bb9446]">
              <h3 className="text-2xl font-bold text-[#3E3E3E] mb-4">Loan Amounts</h3>
              <div className="text-5xl font-bold text-[#bb9446] mb-4">$1,000 - $100,000</div>
              <p className="text-gray-700 mb-4">
                Borrow exactly what you need. Most lenders in our network offer loans from small ($1,000) to large ($100,000).
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446]">•</span>
                  <span><strong>Small loans ($1K-$5K):</strong> Emergency repairs, minor purchases</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446]">•</span>
                  <span><strong>Medium loans ($5K-$25K):</strong> Debt consolidation, home improvement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446]">•</span>
                  <span><strong>Large loans ($25K-$100K):</strong> Major renovations, business needs</span>
                </li>
              </ul>
            </div>
            
            {/* Loan Terms */}
            <div className="bg-gradient-to-br from-[#f8d899] to-[#E5D2AF] rounded-lg p-8 border-2 border-[#bb9446]">
              <h3 className="text-2xl font-bold text-[#3E3E3E] mb-4">Loan Terms</h3>
              <div className="text-5xl font-bold text-[#bb9446] mb-4">12 - 84 Months</div>
              <p className="text-gray-700 mb-4">
                Choose a repayment term that fits your budget. Shorter terms = higher payments but less interest. Longer terms = lower payments but more interest.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446]">•</span>
                  <span><strong>12-24 months:</strong> Pay off quickly, save on interest</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446]">•</span>
                  <span><strong>36-60 months:</strong> Balance monthly payment & total cost</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446]">•</span>
                  <span><strong>72-84 months:</strong> Lowest monthly payment (higher total cost)</span>
                </li>
              </ul>
            </div>
            
          </div>
          
          {/* Comparison Example */}
          <div className="bg-[#E5D2AF] rounded-lg p-8">
            <h3 className="text-2xl font-bold text-[#3E3E3E] mb-4 text-center">
              Example: $15,000 Loan at 10% APR
            </h3>
            <p className="text-gray-700 mb-6 text-center">
              See how different loan terms affect your monthly payment and total interest paid:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-[#bb9446] mb-2">24 Months</div>
                <div className="text-xl font-semibold text-[#3E3E3E] mb-2">$692/month</div>
                <div className="text-sm text-gray-600">Total Interest: $1,596</div>
                <div className="text-xs text-gray-500 mt-2">Fast payoff, less interest</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center border-2 border-[#bb9446]">
                <div className="text-3xl font-bold text-[#bb9446] mb-2">48 Months</div>
                <div className="text-xl font-semibold text-[#3E3E3E] mb-2">$380/month</div>
                <div className="text-sm text-gray-600">Total Interest: $3,253</div>
                <div className="text-xs text-gray-500 mt-2">Balanced option (most popular)</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-[#bb9446] mb-2">72 Months</div>
                <div className="text-xl font-semibold text-[#3E3E3E] mb-2">$278/month</div>
                <div className="text-sm text-gray-600">Total Interest: $5,041</div>
                <div className="text-xs text-gray-500 mt-2">Lowest payment, more interest</div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* SECTION 7: FAQ ACCORDION */}
      <section className="bg-[#E5D2AF] py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-12 text-center">
            Common Questions About Personal Loans
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg border-2 border-[#CBCBCB] hover:border-[#f9c65d] overflow-hidden transition duration-200">
                
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-[#f8d899] transition duration-200"
                >
                  <h3 className="text-lg font-semibold text-[#3E3E3E] pr-8">
                    {faq.question}
                  </h3>
                  <span className="text-2xl text-[#bb9446] flex-shrink-0 font-bold">
                    {openFAQ === index ? '−' : '+'}
                  </span>
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-4 pt-2">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
                
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* SECTION 8: TRUST SIGNALS & TESTIMONIALS */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-4 text-center">
            Trusted by Thousands of Borrowers
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 text-center">
            Real people, real savings, real loans.
          </p>
          
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            
            {/* Testimonial 1 */}
            <div className="bg-[#f8d899] rounded-lg p-6 shadow-md">
              <div className="flex gap-1 mb-4">
                <span className="text-yellow-500 text-xl">⭐</span>
                <span className="text-yellow-500 text-xl">⭐</span>
                <span className="text-yellow-500 text-xl">⭐</span>
                <span className="text-yellow-500 text-xl">⭐</span>
                <span className="text-yellow-500 text-xl">⭐</span>
              </div>
              <p className="text-gray-700 mb-4 italic leading-relaxed">
                "I was paying 22% APR on three credit cards. Got a personal loan at 9.5% APR and paid them all off. Saving over $200/month now. Best financial decision I've made."
              </p>
              <div className="pt-4 border-t border-yellow-300">
                <p className="font-semibold text-[#3E3E3E]">Jennifer K.</p>
                <p className="text-sm text-gray-600">Debt Consolidation</p>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-[#f8d899] rounded-lg p-6 shadow-md">
              <div className="flex gap-1 mb-4">
                <span className="text-yellow-500 text-xl">⭐</span>
                <span className="text-yellow-500 text-xl">⭐</span>
                <span className="text-yellow-500 text-xl">⭐</span>
                <span className="text-yellow-500 text-xl">⭐</span>
                <span className="text-yellow-500 text-xl">⭐</span>
              </div>
              <p className="text-gray-700 mb-4 italic leading-relaxed">
                "Applied at 10am, compared 8 offers, picked the best one, and had $12,000 in my account by the next afternoon. Covered my emergency car repair without touching savings."
              </p>
              <div className="pt-4 border-t border-yellow-300">
                <p className="font-semibold text-[#3E3E3E]">Marcus T.</p>
                <p className="text-sm text-gray-600">Emergency Expenses</p>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-[#f8d899] rounded-lg p-6 shadow-md">
              <div className="flex gap-1 mb-4">
                <span className="text-yellow-500 text-xl">⭐</span>
                <span className="text-yellow-500 text-xl">⭐</span>
                <span className="text-yellow-500 text-xl">⭐</span>
                <span className="text-yellow-500 text-xl">⭐</span>
                <span className="text-yellow-500 text-xl">⭐</span>
              </div>
              <p className="text-gray-700 mb-4 italic leading-relaxed">
                "My credit score is only 620, but I still got 5 loan offers. Chose one at 16% APR—not perfect, but way better than the 29% my credit card was charging me."
              </p>
              <div className="pt-4 border-t border-yellow-300">
                <p className="font-semibold text-[#3E3E3E]">Patricia G.</p>
                <p className="text-sm text-gray-600">Fair Credit Success</p>
              </div>
            </div>
            
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#bb9446] mb-2">$5B+</div>
              <div className="text-gray-700">Loans processed through our platform</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#bb9446] mb-2">100+</div>
              <div className="text-gray-700">Trusted lending partners</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#bb9446] mb-2">2 min</div>
              <div className="text-gray-700">Average application time</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#bb9446] mb-2">4.8/5</div>
              <div className="text-gray-700">Average customer rating</div>
            </div>
          </div>
          
          {/* Trust Certifications */}
          <div className="bg-[#E5D2AF] rounded-lg p-8">
            <h3 className="text-2xl font-bold text-[#3E3E3E] mb-6 text-center">
              Bank-Level Security & Trust
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl mb-2">🔐</div>
                <div className="font-semibold text-[#3E3E3E] mb-1">SOC 2 Type II Certified</div>
                <div className="text-sm text-gray-600">Audited for data security</div>
              </div>
              <div>
                <div className="text-4xl mb-2">🛡️</div>
                <div className="font-semibold text-[#3E3E3E] mb-1">256-Bit Encryption</div>
                <div className="text-sm text-gray-600">Bank-level data protection</div>
              </div>
              <div>
                <div className="text-4xl mb-2">✅</div>
                <div className="font-semibold text-[#3E3E3E] mb-1">No Data Selling</div>
                <div className="text-sm text-gray-600">Your info stays private</div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="bg-gradient-to-r from-[#f9c65d] to-[#bb9446] py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-4">
            Ready to Compare Your Loan Options?
          </h2>
          
          <p className="text-xl text-[#3E3E3E] mb-8">
            Get personalized offers from 100+ lenders in under 2 minutes—with zero impact to your credit score.
          </p>
          
          <button 
            onClick={openAffiliateLink}
            className="bg-white text-[#bb9446] hover:bg-[#3E3E3E] hover:text-white text-xl font-bold px-10 py-5 rounded-lg shadow-2xl hover:shadow-3xl transition duration-200"
          >
            Compare Loan Offers Now
          </button>
          
          <p className="text-sm text-[#3E3E3E] mt-4 font-medium">
            Free comparison • Soft pull only • Takes under 2 minutes • No obligations
          </p>
          
          {/* Trust Elements */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
            <div className="flex items-center gap-2 text-[#3E3E3E]">
              <span className="text-2xl">✓</span>
              <span className="text-sm font-medium">Won't Hurt Credit Score</span>
            </div>
            <div className="flex items-center gap-2 text-[#3E3E3E]">
              <span className="text-2xl">✓</span>
              <span className="text-sm font-medium">100% Free to Use</span>
            </div>
            <div className="flex items-center gap-2 text-[#3E3E3E]">
              <span className="text-2xl">🔒</span>
              <span className="text-sm font-medium">SOC 2 Certified</span>
            </div>
            <div className="flex items-center gap-2 text-[#3E3E3E]">
              <span className="text-2xl">⚡</span>
              <span className="text-sm font-medium">Instant Offers</span>
            </div>
          </div>
          
          {/* Alternative Services */}
          <div className="mt-12 pt-8 border-t-2 border-[#3E3E3E]/20">
            <p className="text-[#3E3E3E] mb-3">
              Need help with credit repair first?
            </p>
            <a 
              href="/credit-repair" 
              className="text-[#3E3E3E] hover:text-white font-semibold underline text-lg"
            >
              Learn about our credit repair services →
            </a>
          </div>
          
        </div>
      </section>

      {/* SECTION 10: COMPLIANCE FOOTER */}
      <footer className="bg-gray-50 py-12 px-6 md:px-8 border-t-2 border-[#CBCBCB]">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-sm text-gray-600 leading-relaxed space-y-4">
            
            <p>
              <strong>Affiliate Disclosure:</strong> Mesa Group Consulting is a partner with SuperMoney and may earn a commission if you complete a loan application through our platform, at no additional cost to you. We only recommend services we believe provide value to consumers seeking personal loans.
            </p>
            
            <p>
              <strong>Loan Marketplace Disclaimer:</strong> SuperMoney is a loan comparison platform that connects borrowers with multiple lenders. SuperMoney is not a direct lender and does not make lending decisions. Rates, terms, and loan approval are determined by individual lenders based on your creditworthiness and financial profile. Not all applicants will qualify for the lowest advertised rates.
            </p>
            
            <p>
              <strong>Credit Score Impact:</strong> Checking your rates through our platform uses a soft credit inquiry, which does NOT impact your credit score. If you formally accept a loan offer, the lender will perform a hard credit inquiry, which may temporarily affect your credit score by a few points.
            </p>
            
            <p>
              <strong>APR Range Disclosure:</strong> Advertised rates are subject to change and depend on borrower qualifications. APRs typically range from 5.99% to 35.99% depending on credit score, income, loan amount, loan term, and other factors. Example: A $15,000 loan at 10% APR for 48 months would have monthly payments of $380 and total interest of $3,253. Your actual rate may be higher or lower.
            </p>
            
            <p>
              <strong>Lending Partners:</strong> SuperMoney partners with 100+ banks, credit unions, and online lenders. Lender availability varies by state and borrower qualifications. Not all lenders are available in all states.
            </p>
            
            <p>
              <strong>Data Security:</strong> Our loan comparison platform is SOC 2 Type II certified and uses 256-bit encryption to protect your personal and financial information. We do not sell your information to third-party marketers.
            </p>
            
            <p>
              <strong>Consumer Resources:</strong> For more information about personal loans and consumer lending rights, visit the Consumer Financial Protection Bureau (CFPB) at <a href="https://www.consumerfinance.gov/" target="_blank" rel="noopener noreferrer" className="text-[#bb9446] hover:underline">consumerfinance.gov</a>.
            </p>
            
          </div>
          
        </div>
      </footer>
    </div>
  );
};

export default PersonalLoans;
