import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmotionalCTA1 from '@/components/auto-loan-refi/sections/EmotionalCTA1';
import EmotionalCTA2 from '@/components/auto-loan-refi/sections/EmotionalCTA2';
import EmotionalCTA3 from '@/components/auto-loan-refi/sections/EmotionalCTA3';
import { Lock, Zap, CircleDollarSign, TrendingUp, TrendingDown, Search, BarChart3, Landmark, Lightbulb, Star, Banknote, Ban, UserMinus, FileText, Shield, AlertTriangle, LockKeyhole, CheckCircle2, ChevronDown } from 'lucide-react';

const AutoLoanRefi = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Will refinancing my car loan hurt my credit score?",
      answer: "Checking your rates through our platform uses a soft credit check, which does NOT hurt your credit score. You can compare offers from 100+ lenders with zero credit impact. When you formally accept a loan and the lender does final verification, there will be a hard credit inquiry, which may temporarily lower your score by a few points. However, if you make all your refinanced loan payments on time, your credit score will improve over time."
    },
    {
      question: "How much can I actually save by refinancing my car loan?",
      answer: "It depends on your current rate, new rate, and loan balance. On average, borrowers save $50-$150/month and $1,200-$3,600 over the life of the loan. Even a 1-2% rate drop can save thousands. For example, refinancing a $20,000 loan from 7.5% to 4.5% APR saves you about $26/month and $1,248 in total interest over 48 months. Your actual savings depend on your situation."
    },
    {
      question: "How soon after buying my car can I refinance?",
      answer: "You should wait at least 60-90 days after your original loan before refinancing. This gives time for the vehicle title to transfer properly, which is required before any lender will approve a refinance. Some borrowers with excellent credit can refinance earlier, but 60-90 days is the safe minimum for most people."
    },
    {
      question: "Can I refinance if I bought my car from a dealer?",
      answer: "Yes! It doesn't matter where you bought your car—dealership, private party, or even if you financed through the dealer. You can refinance with any lender on our platform. In fact, many dealers mark up interest rates, so refinancing away from dealer financing often gets you a better deal."
    },
    {
      question: "What if my car is really old or has high mileage?",
      answer: "Most lenders require cars to be less than 10 years old, though some go up to 15 years. High mileage can affect eligibility and rates—lenders typically prefer vehicles under 100,000-125,000 miles, but some will work with higher mileage. The older or higher-mileage your car, the fewer lenders you'll qualify for, but it's still worth checking your options."
    },
    {
      question: "Can I refinance to remove a co-signer from my loan?",
      answer: "Yes! This is one of the most common reasons people refinance. If you needed a co-signer originally but your credit has improved, you can refinance into a new loan in your name only, removing the co-signer from responsibility. This gives both you and your co-signer financial independence."
    },
    {
      question: "Will my monthly payment definitely go down?",
      answer: "Not necessarily—it depends on your goals. If you want a lower monthly payment, you can refinance to a lower rate or extend your loan term. If you want to pay off your car faster, you can refinance to a shorter term, which increases your monthly payment but saves you interest. The choice is yours based on your financial goals."
    },
    {
      question: "Are there any fees for refinancing my car loan?",
      answer: "Our comparison platform is 100% free to use. However, some lenders may charge: (1) loan origination fees (typically 1-2% of loan amount), (2) title transfer fees (usually $50-$150, depending on your state), (3) lien filing fees (varies by state). These fees are clearly disclosed before you accept any loan offer. Many lenders have $0 origination fees."
    },
    {
      question: "What happens to my old auto loan when I refinance?",
      answer: "Your new lender pays off your old loan in full and closes that account. You'll start making payments to your new lender under the new terms. The process is seamless—you don't need to coordinate anything between lenders. Your new lender handles all the paperwork and title transfer."
    },
    {
      question: "Can I refinance a leased vehicle?",
      answer: "Technically, no—you can't refinance a lease because you don't own the car. However, you can do a 'lease buyout' where you purchase the leased vehicle and finance it with a loan. Some of our lending partners offer lease buyout financing. If you're interested in keeping your leased car, this is an option worth exploring."
    }
  ];

  const handleCTA = () => {
    window.open('https://track.supermoney.com/aff_c?offer_id=1623&aff_id=2815&utm_source=mesa&utm_medium=website&utm_campaign=auto_loan_refi', '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="min-h-screen">
      <Header />
      {/* SECTION 1: HERO */}
      <section className="bg-gradient-to-br from-white via-amber-50 to-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* LEFT COLUMN - Content */}
            <div>
              {/* Eyebrow */}
              <p className="text-sm uppercase tracking-wide text-gray-700 mb-4 font-semibold">
                Auto Loan Refinancing
              </p>
              
              {/* H1 Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Lower Your <span className="text-[#3e3e3e]">Car Payment</span>. Keep the Same Car.
              </h1>
              
              {/* Subheadline */}
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                Compare 100+ lenders in minutes and find a better rate on your auto loan. Most drivers save $50-$150/month—without changing anything about their car.
              </p>
              
              {/* Value Props Quick List */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700"><strong>Soft credit check only</strong> – won't hurt your score</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700"><strong>Average savings: $100/month</strong> ($1,200/year)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700"><strong>Compare 100+ lenders</strong> with one application</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700"><strong>Rates as low as 3.99% APR</strong> for qualified borrowers</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700"><strong>Takes under 2 minutes</strong> to see your offers</span>
                </li>
              </ul>
              
              {/* Primary CTA */}
              <button 
                onClick={handleCTA}
                className="text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-lg font-semibold px-8 py-4 w-full md:w-auto"
              >
                Check My New Rate
              </button>
              
              <p className="text-sm text-gray-600 mt-4">
                Free comparison. No credit score impact. See offers in 60 seconds.
              </p>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <Lock className="w-6 h-6 text-gray-700" />
                  <span className="text-sm font-medium text-gray-900">SOC 2 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-6 h-6 text-amber-500" />
                  <span className="text-sm font-medium text-[#3E3E3E]">60-Second Results</span>
                </div>
                <div className="flex items-center gap-2">
                  <CircleDollarSign className="w-6 h-6 text-green-600" />
                  <span className="text-sm font-medium text-[#3E3E3E]">Avg $1,200/Year Saved</span>
                </div>
              </div>
            </div>
            
            {/* RIGHT COLUMN - Visual */}
            <div className="hidden md:block">
              <div className="bg-white rounded-lg shadow-2xl p-6 border-2 border-[#bb9446]">
                <h3 className="text-lg font-bold text-[#3E3E3E] mb-4 text-center">
                  See Your Potential Savings
                </h3>
                <div className="space-y-6">
                  <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                    <div className="text-sm text-gray-600 mb-2">Your Current Payment</div>
                    <div className="text-3xl font-bold text-red-600 mb-1">$542/month</div>
                    <div className="text-xs text-gray-600">7.5% APR • 60 months remaining</div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-4xl text-green-500">↓</div>
                  </div>
                  <div className="p-4 bg-green-50 border-2 border-green-500 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Your New Payment</span>
                      <span className="px-2 py-1 bg-green-500 text-white rounded text-xs font-bold">BEST RATE</span>
                    </div>
                    <div className="text-3xl font-bold text-green-600 mb-1">$437/month</div>
                    <div className="text-xs text-gray-600">4.2% APR • 60 months remaining</div>
                  </div>
                  <div className="bg-[#f8d899] rounded-lg p-4 text-center">
                    <div className="text-sm text-gray-700 mb-1">You Save</div>
                    <div className="text-2xl font-bold text-[#bb9446]">$105/month</div>
                    <div className="text-xs text-gray-600">$6,300 over life of loan</div>
                  </div>
                </div>
                <p className="text-center text-xs text-gray-600 mt-4 italic">
                  Example rates. Your savings may vary.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* SECTION 2: WHEN TO REFINANCE */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-4 text-center">
            Is Auto Loan Refinancing Right for You?
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Refinancing makes sense in these common situations. If any of these apply to you, you could save money.
          </p>
          
          {/* 5 Scenarios Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-6 text-center shadow-md border-2 border-green-200">
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-3">
                Your Credit Improved
              </h3>
              <p className="text-sm text-gray-700">
                If your credit score has increased since you bought your car, you likely qualify for a better rate now.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 text-center shadow-md border-2 border-blue-200">
              <div className="flex justify-center mb-4">
                <TrendingDown className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-3">
                Interest Rates Dropped
              </h3>
              <p className="text-sm text-gray-700">
                If rates have fallen 1-2% or more since your original loan, refinancing could save you thousands.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 text-center shadow-md border-2 border-purple-200">
              <div className="flex justify-center mb-4">
                <Banknote className="w-12 h-12 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-3">
                Payment Too High
              </h3>
              <p className="text-sm text-gray-700">
                Struggling with high monthly payments? Refinance to extend your term and lower your payment.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 text-center shadow-md border-2 border-yellow-200">
              <div className="flex justify-center mb-4">
                <Ban className="w-12 h-12 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-3">
                Dealer Marked Up Rate
              </h3>
              <p className="text-sm text-gray-700">
                Dealers often mark up interest rates. You may have been overcharged and can get a better deal now.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-6 text-center shadow-md border-2 border-red-200">
              <div className="flex justify-center mb-4">
                <UserMinus className="w-12 h-12 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-3">
                Remove Co-Signer
              </h3>
              <p className="text-sm text-gray-700">
                If you needed a co-signer originally but your credit has improved, refinance to remove them from the loan.
              </p>
            </div>
            
          </div>
          
          {/* Quick Calculator */}
          <div className="bg-[#f8d899] rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#3E3E3E] mb-4 text-center">
              Quick Savings Calculator
            </h3>
            <p className="text-gray-700 mb-6 text-center">
              See how much you could save by refinancing your auto loan to a lower rate:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-[#3E3E3E] mb-4">Current Loan</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Loan Balance:</span>
                    <span className="font-semibold">$20,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Interest Rate:</span>
                    <span className="font-semibold">7.5% APR</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Months Remaining:</span>
                    <span className="font-semibold">48</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-200">
                    <span>Monthly Payment:</span>
                    <span className="font-bold text-red-600">$482</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Interest Paid:</span>
                    <span className="font-bold text-red-600">$3,136</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-2 border-green-500">
                <h4 className="font-semibold text-[#3E3E3E] mb-4">After Refinancing</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Loan Balance:</span>
                    <span className="font-semibold">$20,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>New Interest Rate:</span>
                    <span className="font-semibold text-green-600">4.5% APR</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Months Remaining:</span>
                    <span className="font-semibold">48</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-200">
                    <span>New Monthly Payment:</span>
                    <span className="font-bold text-green-600">$456</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Interest Paid:</span>
                    <span className="font-bold text-green-600">$1,888</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 mt-6 text-center">
              <div className="text-3xl font-bold text-[#bb9446] mb-2">You Save $1,248</div>
              <div className="text-gray-700">$26/month + $1,248 in total interest over 48 months</div>
            </div>
          </div>
          
        </div>
      </section>

      <EmotionalCTA1 />

      {/* SECTION 3: HOW IT WORKS */}
      <section className="bg-[#E5D2AF] py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-4 text-center">
            How Auto Loan Refinancing Works
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Get a better rate on your car loan in 4 simple steps—no dealership required.
          </p>
          
          {/* 4-Step Process */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-[#bb9446] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <div className="flex justify-center mb-4">
                <FileText className="w-10 h-10 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-[#3E3E3E] mb-3">
                Tell Us About Your Car
              </h3>
              <p className="text-sm text-gray-700">
                Enter your vehicle info, loan balance, and estimated credit score. Takes under 2 minutes.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-[#bb9446] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <div className="flex justify-center mb-4">
                <Search className="w-10 h-10 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-[#3E3E3E] mb-3">
                We Find Your Best Rates
              </h3>
              <p className="text-sm text-gray-700">
                Our platform compares 100+ lenders using a soft credit check that won't impact your score.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-[#bb9446] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <div className="flex justify-center mb-4">
                <BarChart3 className="w-10 h-10 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-[#3E3E3E] mb-3">
                Compare & Choose
              </h3>
              <p className="text-sm text-gray-700">
                Review personalized offers side-by-side. See your new payment, rate, and total savings.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-[#bb9446] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <div className="flex justify-center mb-4">
                <CheckCircle2 className="w-10 h-10 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-[#3E3E3E] mb-3">
                Start Saving Money
              </h3>
              <p className="text-sm text-gray-700">
                Accept your new loan. New lender pays off your old loan. Lower payment starts next month.
              </p>
            </div>
            
          </div>
          
          {/* Timeline Callout */}
          <div className="bg-white rounded-lg p-8 mt-12 max-w-4xl mx-auto text-center">
            <h4 className="text-2xl font-bold text-[#3E3E3E] mb-4">Typical Timeline</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-4xl font-bold text-[#bb9446] mb-2">2 min</div>
                <div className="text-gray-700 text-sm">Complete application</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#bb9446] mb-2">60 sec</div>
                <div className="text-gray-700 text-sm">Get instant rate offers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#bb9446] mb-2">1-2 weeks</div>
                <div className="text-gray-700 text-sm">New loan finalized</div>
              </div>
            </div>
            <p className="text-gray-600 mt-6 text-sm">
              Your new lender handles all the paperwork with your old lender. You just enjoy the lower payment.
            </p>
          </div>
          
        </div>
      </section>

      {/* SECTION 4: WHY REFINANCE WITH US */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-4 text-center">
            Why Compare Auto Loan Rates With Us?
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            We make refinancing simple, fast, and completely free—with zero risk to your credit score.
          </p>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-8 border-2 border-green-200">
              <div className="flex items-start gap-4">
                <Shield className="w-12 h-12 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-[#3E3E3E] mb-3">
                    Safe Credit Check
                  </h3>
                  <p className="text-gray-700 mb-4">
                    We only use <strong>soft credit pulls</strong> to show you rates. Your credit score stays protected while you shop—check as many offers as you want with zero impact.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 text-lg">✓</span>
                      <span>Soft pull doesn't appear on credit reports</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 text-lg">✓</span>
                      <span>Compare rates unlimited times</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 text-lg">✓</span>
                      <span>Hard pull only when you accept a loan</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 border-2 border-blue-200">
              <div className="flex items-start gap-4">
                <Landmark className="w-12 h-12 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-[#3E3E3E] mb-3">
                    100+ Lenders Compete
                  </h3>
                  <p className="text-gray-700 mb-4">
                    We partner with <strong>over 100 banks, credit unions, and online lenders</strong>—all competing for your business. More competition = better rates for you.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 text-lg">✓</span>
                      <span>Major banks (Bank of America, Chase, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 text-lg">✓</span>
                      <span>Credit unions with low rates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 text-lg">✓</span>
                      <span>Online lenders (fast approvals)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 border-2 border-purple-200">
              <div className="flex items-start gap-4">
                <CircleDollarSign className="w-12 h-12 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-[#3E3E3E] mb-3">
                    Guaranteed Real Savings
                  </h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Average borrowers save $100/month</strong> ($1,200/year). Even a 1-2% rate drop can save you thousands over the life of your loan.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 text-lg">✓</span>
                      <span>Lower monthly payment immediately</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 text-lg">✓</span>
                      <span>Pay thousands less in interest</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 text-lg">✓</span>
                      <span>Free up cash for other expenses</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-8 border-2 border-yellow-200">
              <div className="flex items-start gap-4">
                <Zap className="w-12 h-12 text-amber-500 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-[#3E3E3E] mb-3">
                    Fast & Easy Process
                  </h3>
                  <p className="text-gray-700 mb-4">
                    <strong>See your rates in 60 seconds</strong> with one simple application. No dealership visits, no pushy salespeople, no runaround.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 text-lg">✓</span>
                      <span>2-minute online application</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 text-lg">✓</span>
                      <span>New lender handles all paperwork</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 text-lg">✓</span>
                      <span>New payment starts within 1-2 weeks</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
      </section>

      {/* SECTION 5: RATE SCENARIOS BY CREDIT SCORE */}
      <section className="bg-[#f8d899] py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-4 text-center">
            What Auto Refi Rates Can I Expect?
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Your auto refinance rate depends mainly on your credit score. Here's what borrowers typically see:
          </p>
          
          {/* Credit Score Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
            
            <div className="bg-white rounded-lg p-6 text-center shadow-md border-2 border-green-500">
              <div className="flex justify-center gap-1 mb-3">
                <Star className="w-6 h-6 text-green-600 fill-green-600" />
                <Star className="w-6 h-6 text-green-600 fill-green-600" />
                <Star className="w-6 h-6 text-green-600 fill-green-600" />
              </div>
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-2">Excellent</h3>
              <div className="text-2xl font-bold text-green-600 mb-2">3.99%-5.49%</div>
              <div className="text-sm text-gray-600 mb-3">Credit: 750+</div>
              <p className="text-xs text-gray-600">
                Best rates available. Lenders compete for you.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-md border-2 border-blue-500">
              <div className="flex justify-center gap-1 mb-3">
                <Star className="w-6 h-6 text-blue-600 fill-blue-600" />
                <Star className="w-6 h-6 text-blue-600 fill-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-2">Good</h3>
              <div className="text-2xl font-bold text-blue-600 mb-2">5.5%-7.99%</div>
              <div className="text-sm text-gray-600 mb-3">Credit: 700-749</div>
              <p className="text-xs text-gray-600">
                Great rates. Plenty of lender options.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-md border-2 border-yellow-500">
              <div className="flex justify-center gap-1 mb-3">
                <Star className="w-6 h-6 text-yellow-600 fill-yellow-600" />
              </div>
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-2">Fair</h3>
              <div className="text-2xl font-bold text-yellow-600 mb-2">8%-11.99%</div>
              <div className="text-sm text-gray-600 mb-3">Credit: 640-699</div>
              <p className="text-xs text-gray-600">
                Moderate rates. Good lender selection.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-md border-2 border-orange-500">
              <div className="flex justify-center mb-3">
                <AlertTriangle className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-2">Poor</h3>
              <div className="text-2xl font-bold text-orange-600 mb-2">12%-16.99%</div>
              <div className="text-sm text-gray-600 mb-3">Credit: 580-639</div>
              <p className="text-xs text-gray-600">
                Higher rates but still worth comparing.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-md border-2 border-red-500">
              <div className="text-3xl mb-3">❌</div>
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-2">Bad</h3>
              <div className="text-2xl font-bold text-red-600 mb-2">17%-23%</div>
              <div className="text-sm text-gray-600 mb-3">Credit: 500-579</div>
              <p className="text-xs text-gray-600">
                Limited options. Still better than predatory lenders.
              </p>
            </div>
            
          </div>
          
          {/* Example Savings by Credit Improvement */}
          <div className="bg-white rounded-lg p-8 border-2 border-[#bb9446]">
            <h3 className="text-2xl font-bold text-[#3E3E3E] mb-4 text-center">
              How Credit Improvement Affects Your Savings
            </h3>
            <p className="text-gray-700 mb-6 text-center">
              Example: <strong>$25,000 loan balance, 48 months remaining</strong>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">7.5% APR</div>
                <div className="text-sm text-gray-600 mb-2">Current Rate (Fair Credit)</div>
                <div className="text-xl font-semibold text-[#3E3E3E]">$603/month</div>
                <div className="text-sm text-gray-600">Total Cost: $28,944</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-600 mb-2">5.5% APR</div>
                <div className="text-sm text-gray-600 mb-2">New Rate (Good Credit)</div>
                <div className="text-xl font-semibold text-[#3E3E3E]">$580/month</div>
                <div className="text-sm text-gray-600">Total Cost: $27,840</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">4.0% APR</div>
                <div className="text-sm text-gray-600 mb-2">Best Rate (Excellent Credit)</div>
                <div className="text-xl font-semibold text-[#3E3E3E]">$563/month</div>
                <div className="text-sm text-gray-600">Total Cost: $27,024</div>
              </div>
            </div>
            <p className="text-center text-gray-700 mt-6 font-medium">
              Improving your credit from fair to excellent saves <strong>$40/month and $1,920 total</strong>!
            </p>
          </div>
          
          {/* Good News */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mt-8">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-8 h-8 text-amber-500 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-[#3E3E3E] mb-2">Good News: We Work With All Credit Tiers</h4>
                <p className="text-gray-700">
                  Even if you have fair, poor, or bad credit (500+ credit score), our platform connects you with lenders who specialize in all credit levels. You may not get the absolute lowest rate, but you'll see your best options—and refinancing can still save you money even with less-than-perfect credit.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <EmotionalCTA2 />

      {/* SECTION 6: REQUIREMENTS & QUALIFICATIONS */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-12 text-center">
            Auto Loan Refinancing Requirements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
            {/* What You'll Need */}
            <div className="bg-gradient-to-br from-[#f8d899] to-[#E5D2AF] rounded-lg p-8 border-2 border-[#bb9446]">
              <h3 className="text-2xl font-bold text-[#3E3E3E] mb-4">What You'll Need to Apply</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#bb9446] text-xl">✓</span>
                  <div>
                    <strong>Vehicle Information:</strong> Year, make, model, mileage, VIN
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#bb9446] text-xl">✓</span>
                  <div>
                    <strong>Current Loan Details:</strong> Remaining balance, current lender name, monthly payment
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#bb9446] text-xl">✓</span>
                  <div>
                    <strong>Personal Info:</strong> Name, address, SSN, date of birth
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#bb9446] text-xl">✓</span>
                  <div>
                    <strong>Income Verification:</strong> Pay stubs, tax returns, or bank statements
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#bb9446] text-xl">✓</span>
                  <div>
                    <strong>Proof of Insurance:</strong> Current auto insurance card
                  </div>
                </li>
              </ul>
              <p className="text-sm text-gray-600 mt-4 italic">
                Don't worry—most of this you can fill in from memory. Documents only needed if you accept a loan.
              </p>
            </div>
            
            {/* Typical Lender Requirements */}
            <div className="bg-gradient-to-br from-[#f8d899] to-[#E5D2AF] rounded-lg p-8 border-2 border-[#bb9446]">
              <h3 className="text-2xl font-bold text-[#3E3E3E] mb-4">Typical Lender Requirements</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#bb9446] text-xl">•</span>
                  <div>
                    <strong>Vehicle Age:</strong> Typically less than 10 years old (some lenders go up to 15 years)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#bb9446] text-xl">•</span>
                  <div>
                    <strong>Loan Balance:</strong> Usually $7,500 - $100,000 remaining
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#bb9446] text-xl">•</span>
                  <div>
                    <strong>Vehicle Value:</strong> Must not be "upside-down" (owe more than car's worth)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#bb9446] text-xl">•</span>
                  <div>
                    <strong>Credit Score:</strong> Minimum 500-580 for most lenders
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#bb9446] text-xl">•</span>
                  <div>
                    <strong>Time Since Purchase:</strong> Wait at least 60-90 days from original loan
                  </div>
                </li>
              </ul>
              <p className="text-sm text-gray-600 mt-4 italic">
                Requirements vary by lender. Our platform shows you which lenders you qualify for.
              </p>
            </div>
            
          </div>
          
          {/* Important: Upside-Down Loans */}
          <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-12 h-12 text-orange-600 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-[#3E3E3E] mb-3">
                  Important: What If I'm "Upside-Down" on My Loan?
                </h3>
                <p className="text-gray-700 mb-4">
                  Being "upside-down" means you owe more on your loan than your car is currently worth. For example, if you owe $18,000 but your car is only worth $15,000, you're upside-down by $3,000.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Can you still refinance?</strong> It depends. Some lenders will refinance upside-down loans, but you may:
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500">•</span>
                    <span>Need to pay the difference before refinancing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500">•</span>
                    <span>Get a higher interest rate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500">•</span>
                    <span>Roll the negative equity into the new loan (not ideal)</span>
                  </li>
                </ul>
                <p className="text-gray-700 font-medium">
                  <strong>How to check:</strong> Look up your car's value on Kelley Blue Book (kbb.com), then compare it to your loan payoff amount (call your current lender).
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <EmotionalCTA3 />

      {/* SECTION 7: FAQ ACCORDION */}
      <section className="bg-[#E5D2AF] py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-6 text-center">
            Common <span className="text-[#3e3e3e]">Questions</span> About Auto Loan Refinancing
          </h2>
          <p className="text-xl text-gray-700 mb-12 text-center">
            Get answers to common questions about refinancing your auto loan.
          </p>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-amber-300 transition-colors duration-300">
                
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-white/50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#3e3e3e] flex-shrink-0 transition-transform duration-300 ${
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

      {/* SECTION 8: SUCCESS STORIES & TRUST */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-4 text-center">
            Real Drivers, Real Savings
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 text-center">
            See how others lowered their car payments by refinancing through our platform.
          </p>
          
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            
            <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-lg p-6 shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />
                ))}
              </div>
              <p className="text-white mb-4 italic leading-relaxed">
                "Refinanced my 2021 Honda Accord from 8.2% to 4.8% APR. My payment dropped from $498 to $441/month. That's an extra $57/month for groceries and gas!"
              </p>
              <div className="pt-4 border-t border-white/30">
                <p className="font-semibold text-white">Christina M.</p>
                <p className="text-sm text-white/90">Saved $57/month • $2,280 total</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-lg p-6 shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />
                ))}
              </div>
              <p className="text-white mb-4 italic leading-relaxed">
                "I bought my truck at a dealership and got stuck with a 9.5% interest rate. Refinanced 4 months later at 5.2% and I'm saving over $120/month. Wish I'd known sooner!"
              </p>
              <div className="pt-4 border-t border-white/30">
                <p className="font-semibold text-white">David R.</p>
                <p className="text-sm text-white/90">Saved $120/month • $6,240 total</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-lg p-6 shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />
                ))}
              </div>
              <p className="text-white mb-4 italic leading-relaxed">
                "My credit score went from 640 to 710 over the past year. Refinanced my SUV and knocked 3% off my rate. The whole process took 10 days and saved me $4,100 in interest."
              </p>
              <div className="pt-4 border-t border-white/30">
                <p className="font-semibold text-white">Angela T.</p>
                <p className="text-sm text-white/90">Saved $85/month • $4,100 total</p>
              </div>
            </div>
            
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#bb9446] mb-2">$100</div>
              <div className="text-gray-700">Average monthly savings</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#bb9446] mb-2">$5B+</div>
              <div className="text-gray-700">Auto loans processed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#bb9446] mb-2">100+</div>
              <div className="text-gray-700">Trusted lenders</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#bb9446] mb-2">4.8/5</div>
              <div className="text-gray-700">Customer rating</div>
            </div>
          </div>
          
          {/* Trust Certifications */}
          <div className="bg-[#E5D2AF] rounded-lg p-8">
            <h3 className="text-2xl font-bold text-[#3E3E3E] mb-6 text-center">
              Your Data is Protected
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="flex justify-center mb-2">
                  <LockKeyhole className="w-10 h-10 text-[#3e3e3e]" />
                </div>
                <div className="font-semibold text-[#3E3E3E] mb-1">SOC 2 Type II Certified</div>
                <div className="text-sm text-gray-600">Audited for data security</div>
              </div>
              <div>
                <div className="flex justify-center mb-2">
                  <Shield className="w-10 h-10 text-[#3e3e3e]" />
                </div>
                <div className="font-semibold text-[#3E3E3E] mb-1">256-Bit Encryption</div>
                <div className="text-sm text-gray-600">Bank-level protection</div>
              </div>
              <div>
                <div className="flex justify-center mb-2">
                  <CheckCircle2 className="w-10 h-10 text-[#3e3e3e]" />
                </div>
                <div className="font-semibold text-[#3E3E3E] mb-1">No Data Selling</div>
                <div className="text-sm text-gray-600">We never sell your info</div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Lower Your <span className="text-amber-400">Car Payment</span>?
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl text-gray-300 mb-12">
            See your new rate from 100+ lenders in 60 seconds—with zero impact to your credit score.
          </p>

          {/* Single CTA Card */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 text-left">
              <h3 className="text-2xl font-bold mb-4">Auto Loan Refinancing</h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <div className="text-3xl font-bold mb-1">100+</div>
                  <div className="text-sm opacity-90">Lenders</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">60 Sec</div>
                  <div className="text-sm opacity-90">Quick Check</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">0</div>
                  <div className="text-sm opacity-90">Score Impact</div>
                </div>
              </div>
              <button 
                onClick={handleCTA}
                className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-lg transition-colors"
              >
                Check My New Rate
              </button>
              <p className="text-sm text-white/90 mt-3 text-center">
                Free comparison • Soft credit check only • No obligation
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>No Credit Score Impact</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>100% Free Comparison</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-amber-400" />
              <span>Secure & Private</span>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AutoLoanRefi;