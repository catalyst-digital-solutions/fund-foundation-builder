import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PoweredByMesaGroup from '@/components/PoweredByMesaGroup';
import {
  Trophy, TrendingUp, Home, Rocket, Shield, Zap, DollarSign,
  Brain, Users, Target, CheckCircle, Phone, Check, ChevronDown,
  X, Star, AlertCircle
} from 'lucide-react';

const ZeroInterestBusinessFunding2 = () => {
  return (
    <div className="min-h-screen bg-background font-['Inter',sans-serif]">
      <Header />
      <HeroSection />
      <TheAwakeningSection />
      <TrustIndicators />
      <TheVisionSection />
      <MesaAdvantage />
      <ThreeRoundFramework />
      <WhoThisWorksFor />
      <ResultsShowcase />
      <QualificationRequirements />
      <WhatYouActuallyDo />
      <PartnershipModel />
      <BeyondZeroPercent />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

// Hero Section
const HeroSection = () => (
  <section className="bg-gradient-to-br from-white via-amber-50 to-white py-16 md:py-20 px-6 animate-fade-in">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Left: Content */}
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-green-100 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-md border-2 border-green-300">
            <Trophy className="w-4 h-4" />
            700+ Credit Score? You Likely Qualify
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Access $50,000 to $250,000+ in <span className="text-amber-600">0% Interest Capital</span> Without Loans, Debt Payments, or Business Tax Returns
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
            We show you how to leverage your personal credit to unlock business capital at 0% interest for 9-18 months. No monthly debt payments. No crushing interest. Just pure growth capital you can deploy however you need.
          </p>

          <div className="bg-white rounded-lg p-6 mb-8 shadow-lg border-l-4 border-amber-500">
            <ul className="space-y-2 text-base text-gray-700">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                No business tax returns or financial statements required
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                No collateral required (unsecured credit lines)
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                0% interest means every dollar works for you, not lenders
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                Strategic bank relationships = higher approval rates
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                Capital available in 30-60 days, not 6+ months
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start">
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://funding-app.mesagroupconsulting.com/Opt-In"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-10 py-5 text-center hover:scale-105"
              >
                Book Your Free Funding Consultation
              </a>

              <a
                href="https://funding-app.mesagroupconsulting.com/Opt-In"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-amber-600 text-xl font-semibold px-10 py-5 rounded-lg border-2 border-amber-600 hover:bg-amber-50 transition-all duration-200 text-center hover:scale-105"
              >
                See If You Qualify
              </a>
            </div>
            <div className="w-full sm:w-auto flex justify-center sm:self-center mt-3">
              <PoweredByMesaGroup />
            </div>
          </div>
        </div>

        {/* Right: Hero Visual - Could be image placeholder */}
        <div className="hidden md:block">
          <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl p-8 shadow-2xl">
            <div className="text-center">
              <div className="text-6xl font-bold text-amber-600 mb-2">$155K</div>
              <div className="text-xl text-gray-700 mb-6">Average Funding Amount</div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-3xl font-bold text-gray-900">$47M+</div>
                  <div className="text-gray-600">Total Capital Secured</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-3xl font-bold text-gray-900">850+</div>
                  <div className="text-gray-600">Clients Funded</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-3xl font-bold text-gray-900">30-60</div>
                  <div className="text-gray-600">Days To Capital</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-3xl font-bold text-gray-900">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

// The Awakening Section
const TheAwakeningSection = () => (
  <section className="py-20 px-6 bg-gray-50">
    <div className="max-w-6xl mx-auto">

      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Imagine Having $150,000 in Credit Available and Paying Zero Interest for 18 Months
        </h2>
        <p className="text-xl text-gray-600">
          Let's talk real numbers. Here's what 0% capital actually means for your business.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">

        {/* Traditional Loan */}
        <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-red-200">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
              <X className="w-4 h-4" /> Traditional Business Loan at 9% APR
            </div>
          </div>
          <div className="space-y-4 text-lg">
            <div className="flex justify-between pb-3 border-b border-gray-200">
              <span className="text-gray-700">$150K borrowed =</span>
              <span className="font-bold text-red-600">$1,125/month in interest</span>
            </div>
            <div className="flex justify-between pb-3 border-b border-gray-200">
              <span className="text-gray-700">Over 18 months:</span>
              <span className="font-bold text-red-600">$20,250 wasted on interest</span>
            </div>
            <div className="py-3 border-b border-gray-200">
              <p className="text-gray-700 mb-2"><strong>Requires:</strong></p>
              <p className="text-sm text-gray-600">• 2+ years tax returns</p>
              <p className="text-sm text-gray-600">• 3-6 month approval process</p>
            </div>
            <div className="pt-3">
              <p className="text-gray-700"><strong>Fixed monthly payments:</strong></p>
              <p className="text-red-600 font-bold">$3,500+ whether you're making money or not</p>
            </div>
          </div>
        </div>

        {/* Mesa's 0% Funding */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 shadow-2xl border-2 border-green-400">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              <CheckCircle className="w-4 h-4" /> Mesa's 0% Funding Approach
            </div>
          </div>
          <div className="space-y-4 text-lg">
            <div className="flex justify-between pb-3 border-b border-green-200">
              <span className="text-gray-700">$150K at 0% APR =</span>
              <span className="font-bold text-green-600">$0 in interest payments</span>
            </div>
            <div className="flex justify-between pb-3 border-b border-green-200">
              <span className="text-gray-700">You keep:</span>
              <span className="font-bold text-green-600">All $20,250 for growth</span>
            </div>
            <div className="py-3 border-b border-green-200">
              <p className="text-gray-700 mb-2"><strong>Requires:</strong></p>
              <p className="text-sm text-gray-700">• LLCs with 6+ months history</p>
              <p className="text-sm text-gray-700">• 700+ credit score</p>
            </div>
            <div className="pt-3">
              <p className="text-gray-700"><strong>Minimum payments:</strong></p>
              <p className="text-green-600 font-bold">$50-100/month, preserving cash flow</p>
              <p className="text-sm text-gray-600 mt-1">Timeline: 30-60 days to first capital</p>
            </div>
          </div>
        </div>

      </div>

      <div className="bg-amber-50 rounded-xl p-8 shadow-lg border-l-4 border-amber-500">
        <p className="text-2xl font-bold text-gray-900 text-center">
          Bottom Line: That's $20,250 you keep to reinvest. While competitors hemorrhage cash on interest, you're building an empire.
        </p>
      </div>

    </div>
  </section>
);

// Trust Indicators
const TrustIndicators = () => (
  <section className="py-16 px-6 bg-gradient-to-br from-amber-50 to-orange-50">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {[
          { number: "$47M+", label: "Total 0% Capital Secured" },
          { number: "850+", label: "Clients Funded" },
          { number: "$155K", label: "Average Funding Amount" },
          { number: "30-60", label: "Days To First Capital" },
          { number: "15+", label: "Years Combined Banking Experience" }
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">{stat.number}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// The Vision Section
const TheVisionSection = () => {
  const visionCards = [
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
      title: "Scale Without Suffocating",
      description: "Hire that team. Launch that campaign. Buy that inventory. All without crushing loan payments killing your cash flow."
    },
    {
      icon: <Home className="w-12 h-12 text-purple-600" />,
      title: "Real Estate Investors: Move Fast",
      description: "Put $50K down on that flip while your competitor waits on hard money approval. Close deals in days, not weeks."
    },
    {
      icon: <Rocket className="w-12 h-12 text-orange-600" />,
      title: "Launch That Second Business",
      description: "You've had the idea for years. Now you have the capital to test it without risking everything."
    },
    {
      icon: <Shield className="w-12 h-12 text-green-600" />,
      title: "Build Your War Chest",
      description: "6-12 months of operating expenses at 0% interest. Weather any storm with confidence."
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-600" />,
      title: "Seize Opportunities Instantly",
      description: "When time-sensitive deals appear, you don't scramble for funding. You already have it."
    },
    {
      icon: <DollarSign className="w-12 h-12 text-red-600" />,
      title: "Eliminate High-Interest Debt",
      description: "Transfer $100K in 18% balances to 0% for 18 months. Save $27,000 in interest payments."
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Would You Do With $150,000 at 0% Interest Available Tomorrow?
          </h2>
          <p className="text-xl text-gray-600">
            This isn't just about capital. It's about what that capital makes possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visionCards.map((card, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-amber-300 hover:-translate-y-1">
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// Mesa Advantage
const MesaAdvantage = () => {
  const advantages = [
    {
      number: 1,
      icon: <Brain className="w-16 h-16 text-amber-600" />,
      title: "Banking Industry Insider Knowledge",
      description: "Our CEO comes from a banking background and understands exactly how banks evaluate clients and underwrite decisions. We know what triggers approvals and what causes denials—because we've seen it from the inside.",
      result: "We position your profile the exact way underwriters want to see it, maximizing your approval odds and credit limits."
    },
    {
      number: 2,
      icon: <Users className="w-16 h-16 text-blue-600" />,
      title: "Direct Banking Relationships",
      description: "We maintain personal connections with Business Relationship Managers at Chase, Bank of America, US Bank, and 40+ regional banks. Your applications go through people who know us, not algorithms that reject you.",
      result: "Higher approval rates, larger limits, reconsideration support when others get stuck."
    },
    {
      number: 3,
      icon: <Target className="w-16 h-16 text-purple-600" />,
      title: "Strategic Sequencing System",
      description: "The order you apply matters. Which bureau each bank pulls matters. We've processed thousands of funding rounds and know exactly which banks to approach, when, and in what sequence.",
      result: "Maximize total capital while protecting your credit profile from inquiry damage."
    },
    {
      number: 4,
      icon: <CheckCircle className="w-16 h-16 text-green-600" />,
      title: "Credit Optimization Before Applications",
      description: "Most people apply before they're ready. We analyze your profile across all three bureaus and optimize every factor that impacts underwriting BEFORE we submit anything.",
      result: "Position yourself for the highest limits possible—often $20K-$50K more per card."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Mesa Clients Get 2x-6x More Capital Than Going It Alone
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Anyone can Google "business credit cards." But random applications get random results. Our clients average $155K because we have what you can't Google.
          </p>
        </div>

        <div className="space-y-8">
          {advantages.map((advantage, index) => (
            <div key={index} className={`flex flex-col md:flex-row gap-6 items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-amber-500 text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-xl">
                  {advantage.number}
                </div>
              </div>
              <div className="flex-1 bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  {advantage.icon}
                  <h3 className="text-2xl font-bold text-gray-900">
                    {advantage.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {advantage.description}
                </p>
                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <p className="text-sm font-semibold text-gray-700">
                    <strong className="text-green-700">The Result:</strong> {advantage.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-2xl font-bold text-gray-900">
            This is why our clients average 2x-6x more funding than DIY attempts.
          </p>
        </div>

      </div>
    </section>
  );
};

// Three Round Framework
const ThreeRoundFramework = () => {
  const rounds = [
    {
      number: 1,
      title: "Foundation Round",
      description: "Major national banks where our relationships are strongest. Establish your foundation and prove you can manage credit responsibly.",
      timeline: "30-60 Days",
      expected: "$50K-$150K"
    },
    {
      number: 2,
      title: "Expansion Round",
      description: "With payment history from Round 1, we tap our network of regional banks and specialized underwriters. Massive leverage happens here.",
      timeline: "Days 60-120",
      expected: "$50K-$150K Additional"
    },
    {
      number: 3,
      title: "Maximization Round",
      description: "Final push leveraging your strong credit history and banking relationships. Institution-specific opportunities many miss completely.",
      timeline: "Days 120-180",
      expected: "$25K-$100K Additional"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Proven Three-Round Funding Framework
          </h2>
          <p className="text-xl text-gray-600">
            Strategic sequencing across multiple rounds. Each success builds momentum for the next.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {rounds.map((round, index) => (
            <div
              key={index}
              className="bg-gradient-to-br rounded-xl p-8 shadow-lg text-white"
              style={{
                backgroundImage: index === 0 ? 'linear-gradient(to br, #fef3c7, #fcd34d)' :
                                 index === 1 ? 'linear-gradient(to br, #fcd34d, #f59e0b)' :
                                 'linear-gradient(to br, #f59e0b, #d97706)'
              }}
            >
              <div className="w-16 h-16 bg-white text-amber-600 rounded-full flex items-center justify-center text-3xl font-bold mb-6 shadow-lg mx-auto">
                {round.number}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                {round.title}
              </h3>
              <p className="text-gray-800 leading-relaxed mb-6">
                {round.description}
              </p>
              <div className="space-y-2 text-gray-900">
                <p className="font-semibold">Timeline: <span className="font-bold">{round.timeline}</span></p>
                <p className="font-semibold">Expected: <span className="font-bold">{round.expected}</span></p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 rounded-xl p-8 shadow-lg border-l-4 border-amber-500">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Why Three Rounds Instead of All at Once?
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Banks reward established customers and payment history. By spacing applications strategically, you build the exact profile that makes banks compete to give you their highest limits. Rush it, and you leave $50K-$100K on the table.
          </p>
        </div>

      </div>
    </section>
  );
};

// Who This Works For
const WhoThisWorksFor = () => (
  <section className="py-20 px-6 bg-gray-50">
    <div className="max-w-6xl mx-auto">

      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Is 0% Business Funding Right for You?
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Great Fit */}
        <div className="bg-green-50 rounded-xl p-8 shadow-lg border-2 border-green-400">
          <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-2">
            <CheckCircle className="w-8 h-8" /> You're a Great Fit If:
          </h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-gray-900 mb-1">Your personal credit score is 700 or higher</p>
              <p className="text-sm text-gray-700">This system is built on personal creditworthiness. Below 700, approval rates and limits decrease significantly.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">You can manage credit responsibly</p>
              <p className="text-sm text-gray-700">We're giving you access to $150K+ at 0%. You need to pay on time and avoid overextending.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">You need capital for legitimate business purposes</p>
              <p className="text-sm text-gray-700">Growth, inventory, marketing, real estate, hiring, equipment—anything that moves your business forward.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">You're willing to follow our system</p>
              <p className="text-sm text-gray-700">We tell you what to do and when. Going rogue sabotages the process.</p>
            </div>
          </div>
        </div>

        {/* Not For You */}
        <div className="bg-red-50 rounded-xl p-8 shadow-lg border-2 border-red-400">
          <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center gap-2">
            <X className="w-8 h-8" /> This ISN'T For You If:
          </h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-gray-900 mb-1">Your credit score is below 700</p>
              <p className="text-sm text-gray-700">We can optimize your profile first, but you're not positioned for maximum approvals yet.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">You have recent bankruptcies or major derogatory marks</p>
              <p className="text-sm text-gray-700">Banks won't approve you regardless of our relationships.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">You're looking for "free money"</p>
              <p className="text-sm text-gray-700">This is real credit requiring real responsibility.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">You need money for personal expenses</p>
              <p className="text-sm text-gray-700">This is business funding only.</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
);

// Results Showcase
const ResultsShowcase = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      business: "E-commerce Owner",
      creditScore: 735,
      funded: "$187,000",
      timeline: "90 Days",
      quote: "I was stuck at $50K in revenue because I couldn't afford inventory at scale. Mesa helped me secure $187K at 0%. I 5x'd my inventory and hit $340K in revenue within 6 months. The 0% interest saved me $25K that hired two employees. This completely changed my trajectory."
    },
    {
      name: "Marcus T.",
      business: "Real Estate Investor",
      creditScore: 698,
      funded: "$143,000",
      timeline: "75 Days",
      quote: "Hard money was killing me at 12%. Mesa got me $143K at 0% in 75 days. I funded three flips simultaneously and made $89K profit. If I'd used hard money, interest would have eaten $15K-$18K. Now I close deals the day I find them."
    },
    {
      name: "David K.",
      business: "SaaS Startup",
      creditScore: 762,
      funded: "$218,000",
      timeline: "105 Days",
      quote: "VCs wanted 40% of my company. Instead, I got $218K at 0% and kept 100% ownership. Funded 9 months of development, hired three developers, launched, and hit $40K MRR. Now VCs chase us at a $15M valuation. Best decision I ever made."
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Real Clients. Real Results. Real Capital.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-amber-500 hover:shadow-xl transition-all duration-300">
              <div className="mb-4">
                <p className="text-xl font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.business}</p>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-4 text-sm">
                <div>
                  <p className="text-gray-600">Credit Score</p>
                  <p className="font-bold text-amber-600">{testimonial.creditScore}</p>
                </div>
                <div>
                  <p className="text-gray-600">Funded</p>
                  <p className="font-bold text-green-600">{testimonial.funded}</p>
                </div>
                <div>
                  <p className="text-gray-600">Timeline</p>
                  <p className="font-bold text-blue-600">{testimonial.timeline}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Across 850+ Clients:
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Average Funding", value: "$155,000" },
              { label: "Typical Interest Saved", value: "$18K-$28K" },
              { label: "Success Rate (720+ scores)", value: "94%" },
              { label: "Avg Time to First Approval", value: "38 days" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

// Qualification Requirements
const QualificationRequirements = () => (
  <section className="py-20 px-6 bg-gray-50">
    <div className="max-w-6xl mx-auto">

      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Here's Exactly What We Need to Get You Funded
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">

        {/* Minimum Requirements */}
        <div className="bg-gray-100 rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Check className="w-8 h-8 text-gray-700" /> Minimum Requirements:
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
              Personal credit score of 700+
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
              No late payments in the past 12 months
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
              No bankruptcies or charge-offs in the past 2 years
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
              At least 2 years of credit history
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
              Fewer than 5 inquiries per bureau in past 6 months
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
              Active business with 6+ months history (LLC, S-Corp, or Sole Proprietorship)
            </li>
          </ul>
        </div>

        {/* Ideal Profile */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 shadow-lg border-2 border-amber-400">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Star className="w-8 h-8 text-amber-600" /> Ideal Profile for Maximum Funding ($150K-$250K+):
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <Star className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              Credit score 750+
            </li>
            <li className="flex items-start gap-2">
              <Star className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              Multiple credit account types (cards, auto, mortgage)
            </li>
            <li className="flex items-start gap-2">
              <Star className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              Credit utilization under 10%
            </li>
            <li className="flex items-start gap-2">
              <Star className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              5+ years of credit history
            </li>
            <li className="flex items-start gap-2">
              <Star className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              Clean inquiry profile (under 3 per bureau)
            </li>
            <li className="flex items-start gap-2">
              <Star className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              Existing high-limit cards showing lender trust
            </li>
          </ul>
        </div>

      </div>

      <div className="bg-blue-50 rounded-xl p-8 shadow-lg border-l-4 border-blue-500">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          If You Don't Qualify Yet:
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          We can help you get there. Our credit optimization program fixes utilization, removes inaccurate items, and positions your profile for maximum approvals. Typically takes 60-90 days.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Most of our highest-funded clients started with scores in the 680-710 range. We optimized them to 720+ before Round 1, which is why they accessed significantly higher limits.
        </p>
      </div>

    </div>
  </section>
);

// What You Actually Do - PART 1 of split component
const WhatYouActuallyDo = () => (
  <section className="py-20 px-6 bg-white">
    <div className="max-w-6xl mx-auto">

      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Your Role in the Process
        </h2>
        <p className="text-xl text-gray-600">
          We handle applications, you follow our blueprint
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">

        {/* What We Handle */}
        <div className="bg-amber-50 rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            What We Handle:
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              Credit profile analysis and optimization strategy
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              Submitting all funding applications on your behalf
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              Coordinating directly with our banking contacts
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              Timing all applications strategically across three rounds
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              Managing inquiry distribution across all three bureaus
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              Guiding you through pending reviews or reconsiderations
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              Tracking your progress and next steps
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              Identifying credit limit increase opportunities
            </li>
          </ul>
        </div>

        {/* What You Handle */}
        <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            What You Handle:
          </h3>
          <div className="space-y-4 text-gray-700">
            <div>
              <p className="font-semibold text-gray-900 mb-2">Following Our Banking Relationship Blueprint</p>
              <p className="text-sm">We guide you through a specific sequence of relationship-building activities that position you as a priority client.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-2">Maintaining Strategic Communication</p>
              <p className="text-sm">When banks reach out for verification or due diligence, you'll handle those conversations using our positioning framework.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-2">Managing Your New Credit Lines</p>
              <p className="text-sm">You're responsible for maintaining positive balances, making on-time minimum payments, and keeping the banking relationships we've helped you establish.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-2">Providing Required Documentation</p>
              <p className="text-sm">When we need documents (ID, business formation docs, bank statements), provide them promptly to keep your funding timeline on track.</p>
            </div>
          </div>
        </div>

      </div>

      <div className="bg-gray-100 rounded-xl p-8 shadow-lg">
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          <strong className="text-gray-900">The Bottom Line:</strong> This isn't passive—you're an active participant. But you're never guessing. We handle the applications and strategy. You follow our blueprint and maintain relationships. Think of it like having a personal trainer: We design the program and track progress. You show up and do the work. Together, we get results.
        </p>
      </div>

    </div>
  </section>
);

// Partnership Model - PART 2
const PartnershipModel = () => (
  <section className="py-20 px-6 bg-gray-50">
    <div className="max-w-6xl mx-auto">

      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Performance-Based Partnership Model
        </h2>
        <p className="text-xl text-gray-600">
          We only succeed when you succeed. You never pay for promises, only results.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="w-12 h-12 text-amber-600" />
            <h3 className="text-2xl font-bold text-gray-900">Small Retainer to Begin</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            A minimal upfront investment covers your comprehensive credit analysis across all three bureaus, custom funding roadmap, and full onboarding. This ensures we're both committed to your funding goals.
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="w-12 h-12 text-green-600" />
            <h3 className="text-2xl font-bold text-gray-900">Success Fee on Results Only</h3>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Once you're approved and funded, we earn a percentage of the total capital you receive. This means:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              We're incentivized to maximize your approvals
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              You only pay when you get actual results
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              Our interests are 100% aligned
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              No funding = no success fee
            </li>
          </ul>
        </div>

      </div>

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 shadow-lg border-2 border-green-400 mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          The ROI Reality
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-4 text-center">
          When you're accessing $150K at 0% instead of paying 9-15% on traditional loans, the math is compelling. Most clients save 3-5x their program investment in interest payments alone.
        </p>
        <div className="bg-white rounded-lg p-6 text-center">
          <p className="text-xl font-bold text-gray-900 mb-2">
            Example: $150,000 at 0% vs. 9% traditional loan
          </p>
          <p className="text-3xl font-bold text-green-600">
            = $20,250 saved in interest over 18 months
          </p>
          <p className="text-gray-700 mt-2">
            That's real money staying in your business for growth instead of going to lenders.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">What You Get</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Complete credit analysis across all three bureaus",
            "Custom funding roadmap tailored to your profile",
            "Credit optimization included (if needed)",
            "Guided execution through all three rounds",
            "Direct access to our banking relationships",
            "Reconsideration support and bureau management",
            "Ongoing credit limit increase coaching"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-600 mt-6 text-center italic">
          Your exact investment and personalized funding projection will be covered in detail during your free consultation.
        </p>
      </div>

    </div>
  </section>
);

// Beyond 0% Credit
const BeyondZeroPercent = () => (
  <section className="py-20 px-6 bg-white">
    <div className="max-w-6xl mx-auto">

      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          What Happens After You've Maxed Out 0% Funding?
        </h2>
        <p className="text-xl text-gray-600">
          Once you've deployed 0% capital and proven your business model works at scale, bigger funding options open up:
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Bank Statement Loans",
            amount: "$50K-$500K",
            description: "After 3-6 months of using your 0% capital, you'll have business cash flow in bank statements. This qualifies you for larger loans based on deposits, not tax returns."
          },
          {
            title: "Traditional Business Lines of Credit",
            amount: "Varies",
            description: "With established revenue and banking relationships from our program, you can access revolving credit with better terms."
          },
          {
            title: "SBA Loans & Full-Doc Funding",
            amount: "Major Expansion",
            description: "Once you have 2+ years of tax returns showing strong revenue (built with your 0% capital), SBA loans become available for major expansion."
          }
        ].map((option, index) => (
          <div key={index} className="bg-gradient-to-br from-white to-amber-50 rounded-xl p-8 shadow-lg border-2 border-gray-200 hover:border-amber-400 transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{option.title}</h3>
            <p className="text-amber-600 font-bold mb-4">{option.amount}</p>
            <p className="text-gray-700 leading-relaxed">{option.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center bg-amber-50 rounded-xl p-8 shadow-lg">
        <p className="text-lg text-gray-700 leading-relaxed">
          Mesa Group Consulting can guide you through all of these when you're ready. The 0% program is the fastest way to get capital NOW. Everything else builds from there.
        </p>
      </div>

    </div>
  </section>
);

// FAQ Section
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is this even legal?",
      answer: "100% legal. We're leveraging business credit cards with promotional 0% APR periods. Banks WANT to give you these cards. We just maximize approval amounts through our relationships and positioning."
    },
    {
      question: "Will this hurt my credit score?",
      answer: "Each application creates a hard inquiry (2-5 point temporary drop). However, we manage inquiry distribution strategically across all three bureaus. Most clients see scores INCREASE by 20-40 points after Round 1 due to new accounts with high limits and low utilization."
    },
    {
      question: "What if I get denied?",
      answer: "Our optimization and banking relationships dramatically reduce denials. If you do get denied, we guide you through reconsideration—often converting denials to approvals. We have backup banks for every round. One denial doesn't kill the process."
    },
    {
      question: "Do I need an established business with revenue?",
      answer: "No. These are 'no-doc' approvals based on personal credit, not business financials. LLCs with 6+ months of history qualify immediately. You don't even need business revenue yet."
    },
    {
      question: "What if I don't have great credit?",
      answer: "If your score is 700-719, you'll likely qualify but may get lower limits ($65K-$130K range). If you're below 700, we recommend our credit optimization program first. We can usually get you to 720+ within 60-90 days, then proceed with funding."
    },
    {
      question: "How is this different from just applying for cards myself?",
      answer: "Three major differences: (1) We submit applications on your behalf through our banking relationships—your applications go through people who know us, not just online portals. (2) Our strategic sequencing and bureau management prevents inquiry damage while maximizing total approvals. (3) Our optimization process positions you for maximum limits before we submit anything. DIY attempts typically result in 40-60% of the funding you'd get with our system and relationships."
    },
    {
      question: "What happens when the 0% period ends?",
      answer: "You have options: (1) Pay off the balance before interest kicks in. (2) Transfer the balance to another 0% card (we help you find these). (3) Convert it to a low-interest business loan. (4) Keep it as a revolving line if needed. We track all your promotional periods and help you plan the best strategy."
    },
    {
      question: "Can I use this for real estate investing?",
      answer: "Absolutely. Many of our clients are real estate investors using 0% capital for down payments, renovations, or holding costs. $50K at 0% can fund multiple fix-and-flips without the crushing interest of hard money loans."
    },
    {
      question: "What if I already have some business credit cards?",
      answer: "Perfect. We'll incorporate your existing cards into the strategy and focus on getting you NEW lines at the highest limits. Having existing cards often helps with approvals."
    },
    {
      question: "How much time does this take from me?",
      answer: "Round 1 requires about 5-10 hours of your time spread over 30-60 days: following our banking blueprint, answering verification calls, providing documents. Rounds 2 and 3 are even easier because the foundation is established."
    },
    {
      question: "What if I miss a payment?",
      answer: "Your 0% rate disappears, and you get hit with penalty APR (typically 29.99%). This is why we emphasize: if you can't manage credit responsibly, this program isn't for you. The upside is massive, but you must make minimum payments on time."
    },
    {
      question: "Is there a guarantee?",
      answer: "We only get paid when you get funded. Our retainer covers your analysis and strategy—the real success fee only comes when you receive actual approvals. We've never had a client with a 720+ score fail to get at least $50K in Round 1. If your score is 700-719, we'll be upfront about realistic expectations during your consultation."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Questions? We've Heard Them All.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-amber-300 transition-colors duration-300">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-amber-50 transition-colors duration-200"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-amber-600 flex-shrink-0 transition-transform duration-300 ${
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

// Final CTA
const FinalCTA = () => (
  <section className="py-20 px-6 bg-gradient-to-br from-amber-50 to-orange-50">
    <div className="max-w-6xl mx-auto">

      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          You Have Two Choices Right Now
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">

        {/* Choice 1 */}
        <div className="bg-gray-100 rounded-xl p-8 shadow-lg border-2 border-gray-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">1</div>
            <h3 className="text-2xl font-bold text-gray-900">Keep Doing What You've Been Doing</h3>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              Keep applying for traditional loans with 9-15% interest rates
            </li>
            <li className="flex items-start gap-2">
              <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              Keep waiting 3-6 months for funding decisions
            </li>
            <li className="flex items-start gap-2">
              <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              Keep watching $20,000+ per year vanish into interest payments
            </li>
          </ul>
        </div>

        {/* Choice 2 */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 shadow-lg border-2 border-green-400">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">2</div>
            <h3 className="text-2xl font-bold text-gray-900">Access $150K at 0% Interest in 30-60 Days</h3>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              Let us show you exactly how much 0% capital you can access
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              Get the funding you need without crushing debt payments
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              Build your business with capital that costs you nothing
            </li>
          </ul>
        </div>

      </div>

      <div className="bg-amber-100 rounded-xl p-6 shadow-lg border-2 border-amber-400 mb-8">
        <div className="flex items-start gap-4">
          <AlertCircle className="w-8 h-8 text-amber-600 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Our Banking Relationships Are Capacity-Limited</h3>
            <p className="text-gray-700 mb-2">
              To maintain our high approval rates and personalized service, we only take on 15-20 new clients per month. This ensures every client gets the attention their funding deserves and our banking contacts aren't overwhelmed with applications.
            </p>
            <p className="text-gray-900 font-semibold">
              Current availability for December 2024: 7 spots remaining
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Book Your Free Funding Consultation Now
        </h3>
        <p className="text-lg text-gray-600 mb-6">
          On this 30-minute call, you'll get:
        </p>
        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8">
          {[
            "Complete credit analysis across all 3 bureaus",
            "Your exact funding potential ($50K-$250K range)",
            "Custom roadmap with timeline",
            "Honest assessment (we'll tell you if you're not ready)"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-2 text-left">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>

        <p className="text-gray-600 mb-6 italic">
          The consultation is free. The assessment is honest. The opportunity is real.<br />
          No pressure. No obligation. Just clarity.
        </p>

        <div className="flex flex-col items-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://funding-app.mesagroupconsulting.com/Opt-In"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-12 py-5 hover:scale-105"
            >
              Book Your Free Funding Consultation
            </a>

            <a
              href="tel:6613103040"
              className="inline-flex items-center justify-center gap-2 bg-white text-amber-600 text-xl font-semibold px-12 py-5 rounded-lg border-2 border-amber-600 hover:bg-amber-50 transition-all duration-200 hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              Call Us: (661) 310-3040
            </a>
          </div>
          <PoweredByMesaGroup className="mt-4" />
        </div>

      </div>

      <div className="mt-12 text-center text-sm text-gray-600 bg-white rounded-lg p-6">
        <p className="font-semibold mb-2">Important Disclosure:</p>
        <p className="mb-4">
          Mesa & Co Consulting LLC dba Mesa Group Consulting provides business credit consulting services. We do not issue credit, make lending decisions, or guarantee approval amounts. Funding amounts and approval rates depend on individual credit profiles and bank underwriting criteria. Results vary by client.
        </p>
        <p className="mb-4">
          Credit inquiries will affect credit scores temporarily. All business credit products are subject to terms and conditions set by issuing banks. This program requires responsible credit management and timely payments. Promotional 0% APR periods are subject to change by issuing banks and typically range from 9-18 months. Penalty APRs apply if payments are missed.
        </p>
        <p className="mb-4">
          <strong>Pricing Structure:</strong> Small retainer due upon enrollment to cover analysis and strategy. Success fee based on percentage of funded amount, due only when you receive approvals. No funding = no success fee.
        </p>
        <p>
          Mesa Group Consulting is not a lender, bank, or financial institution. We are a consulting firm that provides strategy, guidance, and access to banking relationships. All credit decisions are made by issuing banks based on their underwriting criteria. Business credit cards require personal guarantee by the business owner.
        </p>
      </div>

    </div>
  </section>
);

export default ZeroInterestBusinessFunding2;
