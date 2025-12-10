import React, { useState } from 'react';
import { 
  CheckCircle, 
  Star, 
  TrendingUp, 
  Building2,
  CreditCard,
  DollarSign,
  Percent,
  ShieldCheck,
  Search,
  Calendar,
  Briefcase,
  GraduationCap,
  Award,
  Target,
  ChevronDown,
  ChevronUp,
  MapPin,
  Clock,
  ArrowRight,
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ForBusinesses = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    {
      question: "How do I know which service I need?",
      answer: "That's exactly what the discovery call is for. We'll assess your situation and recommend the best path—whether it's one service or a combination. Some clients start with building business credit, then move to funding. Others need debt relief first to create capacity for new credit. We'll show you the right sequence for your specific situation."
    },
    {
      question: "Do I need to have good personal credit to work with you?",
      answer: "Not necessarily. For building business credit, we can work with personal scores as low as 600. For 0% interest funding, we typically need 700+ on personal credit (clients with 720+ see the highest approval rates and funding amounts). For business funding through Mesa Group Capital, it depends on the product—we have solutions for credit scores ranging from 530+ to 700+. For debt relief, your credit score doesn't matter at all."
    },
    {
      question: "How long does it take to see results?",
      answer: "Depends on the service: Business Credit Building: 30-45 days for first approvals, 6-12 months to reach $50K-$150K fundability. Business Funding: 24 hours to 8 weeks depending on product type (cash advances fastest, SBA loans longest). 0% Interest Funding: 30-60 days for Round 1, full deployment across all 3 rounds in 120-180 days. Debt Relief: 60-180 days depending on negotiation complexity."
    },
    {
      question: "What if I'm turned down for funding?",
      answer: "With business funding through Mesa Group Capital, there's no upfront cost, so if you're not approved, you don't pay anything. For our 0% Interest Funding program, we assess fundability before enrollment to minimize declined applications. If you're not fundable yet, we'll tell you honestly and show you how to get there."
    },
    {
      question: "Can I use multiple services at once?",
      answer: "Absolutely. Many clients combine services—like building business credit while securing traditional funding, or using 0% interest funding while resolving old debt. We'll create an integrated strategy that maximizes your results."
    },
    {
      question: "Do you work with startups or only established businesses?",
      answer: "Both. Startups typically begin with our Business Credit Building program to establish fundability. Established businesses often go straight to funding or 0% interest programs. We have solutions for every stage of business growth."
    },
    {
      question: "What industries do you work with?",
      answer: "We work with almost every industry: retail, e-commerce, construction, professional services, restaurants, real estate investors, healthcare, technology, and more. The strategies we use are industry-agnostic—they work regardless of what your business does."
    },
    {
      question: "Is this just for corporations, or can LLCs and sole proprietors qualify too?",
      answer: "We work with all entity types: LLCs, S-Corps, C-Corps, and even sole proprietors (though we often recommend forming an LLC first for asset protection and better fundability)."
    },
    {
      question: "How much does it cost to work with Mesa Group?",
      answer: "Build Business Credit: $2,495 Full Service (12-month program with coaching) OR $995 DIY (software + education, self-paced). Business Funding: $0 upfront (we earn commissions from lenders when you get funded). 0% Interest Funding: Small retainer + performance-based success fee (we only get paid when you get funded). Business Debt Relief: Results-based fees (you only pay when debt is reduced)."
    },
    {
      question: "What's the catch?",
      answer: "There isn't one. We're incentivized to get you real results because we only succeed when you do. Our reputation depends on delivering what we promise, which is why we're transparent about requirements, timelines, and outcomes from day one."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-amber-50 to-white py-12 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6 lg:space-y-8">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                <span className="text-sm font-medium text-gray-700">
                  5.0 Star Rating on Google (200+ Reviews)
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Business Financial Solutions That <span className="text-[#f9c65d]">Actually Work</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                From building business credit to securing funding, 0% interest capital to debt relief—find the financial solution that grows your business. No runaround. No personal guarantees. Just strategic guidance and real results.
              </p>

              {/* Supporting Copy */}
              <p className="text-base text-gray-600 leading-relaxed">
                Whether you're a startup building fundability from scratch, an established business ready to scale, or recovering from crushing debt—Mesa Group connects you with the right resources and expert support to move your business forward with confidence.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl border-2 border-amber-500"
                >
                  Explore Your Business Solutions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-lg shadow-md border-2 border-gray-300 transition-all duration-200"
                >
                  Schedule Free Consultation
                </a>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl shadow-2xl flex items-center justify-center">
                  <Briefcase className="w-48 h-48 text-amber-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar Section */}
      <section className="bg-gray-50 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <TrendingUp className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">1,850+</div>
              <div className="text-sm text-gray-600">Businesses Funded</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <Star className="w-12 h-12 text-amber-400 fill-amber-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">5.0</div>
              <div className="text-sm text-gray-600">Star Rating (200+ Reviews)</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <Building2 className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">Since 2023</div>
              <div className="text-sm text-gray-600">Serving Businesses Nationwide</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">All 50</div>
              <div className="text-sm text-gray-600">States Licensed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mesa Group Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-8">
            Business Financial Solutions Built for <span className="text-[#f9c65d]">Real Entrepreneurs</span>, Real Growth
          </h2>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Business growth doesn't follow a straight line, and neither does your funding journey. Maybe traditional banks turned you down. Maybe no one ever taught you how business credit actually works. Maybe you're tired of risking your personal assets for every business decision.
            </p>
            
            <p className="text-xl font-semibold text-gray-900">
              Here's what matters: where you start doesn't determine where you finish.
            </p>
            
            <p>
              Mesa Group exists to guide you from wherever you are to wherever you want to be—with transparency, respect, and strategic solutions that actually work. No corporate jargon. No hidden fees. No treating you like a credit score instead of a business owner with a vision.
            </p>
            
            <p>
              We've built businesses ourselves. We understand the stress, the cash flow challenges, and the frustration of navigating a financial system that seems designed to keep entrepreneurs stuck. That's exactly why we built something different.
            </p>
            
            <p>
              Through <strong>Mesa Group Consulting</strong> (credit building and advisory) and <strong>Mesa Group Capital</strong> (business funding brokerage), we provide the complete spectrum of business financial solutions—from establishing fundability to deploying capital to eliminating crushing debt.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Find the Right <span className="text-[#f9c65d]">Solution</span> for Your Business
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Every business challenge requires a different approach. Explore our business services below and discover which path makes sense for your growth goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Service Card 1: Business Credit */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200 hover:border-amber-200 p-8">
              <div className="flex justify-center mb-6">
                <div className="bg-amber-50 p-4 rounded-full">
                  <CreditCard className="w-16 h-16 text-amber-600" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Business Credit Builder Program
              </h3>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Build a fortress between your business and personal finances. Access $5,000 to $150,000 in business credit—without touching your personal credit, risking your home, or betting your family's security on every business decision.
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Business Credit Finance Suite - Your complete credit-building command center</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Fundability Score™ tracking across all major bureaus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Access to 300+ vendors, lenders & credit issuers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Tier-by-tier progression: Vendor credit → Retail cards → Bank cards → Lines of credit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">$50K minimum funding guarantee (Full Service program)</span>
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Ideal For:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• New businesses needing to establish credit from scratch</li>
                  <li>• Entrepreneurs who want asset protection (no personal guarantees)</li>
                  <li>• Owners tired of risking personal credit for business needs</li>
                  <li>• Anyone ready to separate business and personal finances</li>
                </ul>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg mb-6">
                <div className="font-semibold text-gray-900 mb-2">Program Options:</div>
                <div className="text-sm text-gray-700 space-y-1">
                  <div>Full Service: <strong>$2,495</strong> (12-month program with coaching)</div>
                  <div>DIY: <strong>$995</strong> (software + education, self-paced)</div>
                </div>
              </div>

              <Link
                to="/business-credit"
                className="block w-full text-center px-6 py-3 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold rounded-lg transition-colors duration-200 border-2 border-amber-500"
              >
                Start Building Business Credit →
              </Link>
            </div>

            {/* Service Card 2: Business Funding */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200 hover:border-amber-200 p-8">
              <div className="flex justify-center mb-6">
                <div className="bg-amber-50 p-4 rounded-full">
                  <DollarSign className="w-16 h-16 text-amber-600" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Business Funding Solutions via Mesa Group Capital
              </h3>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Through our brokerage division, Mesa Group Capital, access the right type of capital at the right time—from equipment financing to expansion loans, cash advances to SBA loans. We connect you with 75+ specialized lenders who compete for your business.
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Access to 75+ vetted lender relationships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Multiple funding products under one roof</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Strategic positioning and application optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Terms negotiation on your behalf</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">No upfront fees - we only get paid when you get funded</span>
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Funding Products Available:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Business Cash Advances: $10K-$10M (24-48 hour approval)</li>
                  <li>• Term Loans: $10K-$5M (2-4 week approval)</li>
                  <li>• Lines of Credit: $5K-$250K (1-2 week approval)</li>
                  <li>• Equipment Financing: $1K-$20M (5-7 day approval)</li>
                  <li>• SBA Loans: $50K-$5M (4-8 week approval)</li>
                  <li>• Invoice Factoring: $10K-$5M (3-5 day approval)</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <div className="font-semibold text-gray-900 mb-2">Track Record:</div>
                <div className="text-sm text-gray-700">
                  $50M+ in funding facilitated | 1,000+ businesses funded | 30-day average approval
                </div>
              </div>

              <Link
                to="/business-funding"
                className="block w-full text-center px-6 py-3 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold rounded-lg transition-colors duration-200 border-2 border-amber-500"
              >
                Explore Business Funding Options →
              </Link>
            </div>

            {/* Service Card 3: 0% Interest Funding */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200 hover:border-amber-200 p-8">
              <div className="flex justify-center mb-6">
                <div className="bg-amber-50 p-4 rounded-full">
                  <Percent className="w-16 h-16 text-amber-600" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                0% Interest Business Funding Program
              </h3>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Access $50,000-$250,000+ in 0% APR business credit cards and use the interest-free period (9-18 months) to fuel growth, manage cash flow, or consolidate expensive debt. Save $18,000-$28,000 in interest payments that would otherwise go to lenders.
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">0% APR business credit cards (9-18 month intro periods)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Direct banking relationships with Chase, BofA, US Bank, 40+ regional banks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Strategic Three-Round Framework for maximum approvals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Banking Industry Insider Knowledge - approvals through people, not algorithms</span>
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">The Three-Round Framework:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Round 1: Foundation - $50K-$150K</li>
                  <li>• Round 2: Expansion - $50K-$150K additional</li>
                  <li>• Round 3: Maximization - $25K-$100K additional</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <div className="font-semibold text-gray-900 mb-2">Real ROI Example:</div>
                <div className="text-sm text-gray-700">
                  $150K at 0% vs. 9% traditional loan = <strong>$20,250 saved</strong> over 18 months
                </div>
              </div>

              <Link
                to="/zero-interest-business-funding"
                className="block w-full text-center px-6 py-3 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold rounded-lg transition-colors duration-200 border-2 border-amber-500"
              >
                Discover 0% Interest Funding →
              </Link>
            </div>

            {/* Service Card 4: Business Debt Relief */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200 hover:border-amber-200 p-8">
              <div className="flex justify-center mb-6">
                <div className="bg-amber-50 p-4 rounded-full">
                  <ShieldCheck className="w-16 h-16 text-amber-600" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Business Debt Relief & Settlement
              </h3>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Eliminate or restructure crippling business debt using negotiation, settlement, and strategic legal leverage—without bankruptcy and without destroying your credit permanently. Break free from merchant cash advances and predatory lending cycles.
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Merchant Cash Advance settlements (often 40-60% off balance)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Revenue-based financing negotiation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Business credit card debt resolution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Multi-creditor workout strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Complete debt freedom roadmap</span>
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Handles These Debts:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Merchant cash advances (MCA)</li>
                  <li>• Revenue-based financing</li>
                  <li>• Business credit cards</li>
                  <li>• SBA loan defaults</li>
                  <li>• Equipment financing defaults</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <div className="font-semibold text-gray-900 mb-2">Typical Timeline:</div>
                <div className="text-sm text-gray-700">
                  First settlement: 4-7 months | Complete debt freedom: 12-36 months
                </div>
              </div>

              <Link
                to="/business-debt-relief"
                className="block w-full text-center px-6 py-3 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold rounded-lg transition-colors duration-200 border-2 border-amber-500"
              >
                Get Business Debt Relief Help →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16">
            Getting Started Is <span className="text-[#f9c65d]">Simple</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 h-full">
                <div className="flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6 mx-auto">
                  <span className="text-3xl font-bold text-amber-600">1</span>
                </div>
                <div className="flex justify-center mb-4">
                  <Search className="w-12 h-12 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                  Explore Your Options
                </h3>
                <p className="text-gray-700 text-center">
                  Browse our business services and identify which solutions align with your current growth goals and challenges. Need help deciding? That's what the next step is for.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 h-full">
                <div className="flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6 mx-auto">
                  <span className="text-3xl font-bold text-amber-600">2</span>
                </div>
                <div className="flex justify-center mb-4">
                  <Calendar className="w-12 h-12 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                  Schedule a Free Consultation
                </h3>
                <p className="text-gray-700 text-center">
                  Talk with a Mesa Group advisor who will listen to your situation, answer your questions, and recommend the best path forward—no pressure, just strategic information.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 h-full">
                <div className="flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6 mx-auto">
                  <span className="text-3xl font-bold text-amber-600">3</span>
                </div>
                <div className="flex justify-center mb-4">
                  <CheckCircle className="w-12 h-12 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                  Choose Your Solution
                </h3>
                <p className="text-gray-700 text-center">
                  Select the service or program that makes the most sense for your budget, timeline, and business goals. You're in control of your business growth journey.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 h-full">
                <div className="flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6 mx-auto">
                  <span className="text-3xl font-bold text-amber-600">4</span>
                </div>
                <div className="flex justify-center mb-4">
                  <TrendingUp className="w-12 h-12 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                  Take Action & See Results
                </h3>
                <p className="text-gray-700 text-center">
                  Start making progress with expert guidance, transparent pricing, and ongoing support every step of the way. From fundability to funding to freedom from debt—we're with you.
                </p>
              </div>
            </div>
          </div>

          {/* Section CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold rounded-lg shadow-lg transition-all duration-200 border-2 border-amber-500"
            >
              Schedule Your Free Consultation
            </a>
            <a
              href="tel:+16613103040"
              className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-lg shadow-md border-2 border-gray-300 transition-all duration-200"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (661) 310-3040
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Mesa Group Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16">
            Why Business Owners Choose <span className="text-[#f9c65d]">Mesa Group</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Reason 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="bg-amber-100 p-4 rounded-full">
                  <Briefcase className="w-12 h-12 text-amber-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                We're Operators, Not Just Advisors
              </h3>
              <p className="text-gray-700 text-center">
                Our team has collectively raised millions in capital, built profitable businesses, and navigated every funding scenario you can imagine. We don't teach theory—we share what actually works because we've done it ourselves.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="bg-amber-100 p-4 rounded-full">
                  <Building2 className="w-12 h-12 text-amber-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                Insider Banking Knowledge
              </h3>
              <p className="text-gray-700 text-center">
                Our CEO comes from a banking background and understands exactly how banks evaluate clients and make underwriting decisions. We know what triggers approvals and what causes denials—because we've seen it from the inside. Your applications go through people who know us, not just algorithms.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="bg-amber-100 p-4 rounded-full">
                  <DollarSign className="w-12 h-12 text-amber-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                Transparent Pricing & Aligned Incentives
              </h3>
              <p className="text-gray-700 text-center">
                No hidden fees. No surprise charges. Most of our services are performance-based—we only win when you do. Business funding? $0 upfront. 0% funding? Pay when funded. Debt relief? Pay when debt is reduced.
              </p>
            </div>

            {/* Reason 4 */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="bg-amber-100 p-4 rounded-full">
                  <GraduationCap className="w-12 h-12 text-amber-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                Education-First Approach
              </h3>
              <p className="text-gray-700 text-center">
                We don't just get you funded—we teach you the system so you can make informed decisions long after our engagement ends. Financial literacy is freedom, and we're committed to empowering you with knowledge.
              </p>
            </div>

            {/* Reason 5 */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="bg-amber-100 p-4 rounded-full">
                  <Award className="w-12 h-12 text-amber-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                Proven Track Record Across All Services
              </h3>
              <p className="text-gray-700 text-center">
                $97M+ in total funding facilitated. 1,850+ businesses funded. 720+ business credit profiles built. 75+ lender network. 300+ vendor relationships. These aren't vanity metrics—they're results from doing this right, every single time.
              </p>
            </div>

            {/* Reason 6 */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="bg-amber-100 p-4 rounded-full">
                  <Target className="w-12 h-12 text-amber-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                Comprehensive Business Solutions
              </h3>
              <p className="text-gray-700 text-center">
                From credit building to funding to 0% interest capital to debt relief—we offer a full spectrum of business financial solutions. You don't need to navigate multiple companies. One trusted partner for your entire business finance journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16">
            Real Stories from <span className="text-[#f9c65d]">Real Business Owners</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] p-8 rounded-xl shadow-md border border-gray-700">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />
                ))}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                "Mesa Group Capital got us $250K when three banks said no"
              </h3>
              <p className="text-gray-300 mb-4">
                "Their broker relationships made the difference. We hired two employees, bought a second truck, and doubled revenue in six months. The team was transparent about timelines and delivered exactly what they promised."
              </p>
              <p className="text-sm text-gray-400">
                — Sarah M., Construction Company Owner | Funded: $250,000
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] p-8 rounded-xl shadow-md border border-gray-700">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />
                ))}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                "Funded in 18 days after months of rejections"
              </h3>
              <p className="text-gray-300 mb-4">
                "The difference was night and day. Other brokers sent a generic application. Mesa Group Capital told our story and positioned us strategically across their lender network. They knew exactly which lenders would appreciate our tech business model."
              </p>
              <p className="text-sm text-gray-400">
                — James K., Tech Startup Founder | Funded: $85,000
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] p-8 rounded-xl shadow-md border border-gray-700">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />
                ))}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                "Got $75K even with damaged credit from my divorce"
              </h3>
              <p className="text-gray-300 mb-4">
                "I thought my credit was too damaged after my divorce. They helped me understand what their lenders actually care about and which programs I qualified for. Got $75K for inventory through their factoring partner. Now we're on track for our best year ever."
              </p>
              <p className="text-sm text-gray-400">
                — Patricia L., E-commerce Retailer | Funded: $75,000
              </p>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] p-8 rounded-xl shadow-md border border-gray-700">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />
                ))}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                "$187K at 0% changed everything for my e-commerce business"
              </h3>
              <p className="text-gray-300 mb-4">
                "I was stuck at $50K in revenue because I couldn't afford inventory at scale. Mesa helped me secure $187K at 0%. I 5x'd my inventory and hit $340K in revenue within 6 months. The 0% interest saved me $25K that hired two employees."
              </p>
              <p className="text-sm text-gray-400">
                — Sarah M., E-commerce Owner | 0% Funding: $187,000
              </p>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] p-8 rounded-xl shadow-md border border-gray-700">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />
                ))}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                "Built business credit from zero to $75K in funding"
              </h3>
              <p className="text-gray-300 mb-4">
                "Every bank told me no because my business was 'too new.' Mesa Group built our business credit from scratch and within 10 months, we had $75K in funding and landed our first municipal contract without ever risking my personal assets."
              </p>
              <p className="text-sm text-gray-400">
                — Jennifer R., General Contractor | Business Credit Program
              </p>
            </div>

            {/* Testimonial 6 */}
            <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] p-8 rounded-xl shadow-md border border-gray-700">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />
                ))}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                "Freedom from $180K in merchant cash advances"
              </h3>
              <p className="text-gray-300 mb-4">
                "We owed $180K in merchant cash advances that were bleeding us dry with weekly payments. Mesa Group negotiated settlements for $68K total and restructured the rest. We're finally profitable again and actually growing."
              </p>
              <p className="text-sm text-gray-400">
                — David L., Restaurant Owner | Debt Relief
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16">
            Common <span className="text-[#f9c65d]">Questions</span> About Our Business Services
          </h2>

          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-amber-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 bg-white">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold rounded-lg shadow-lg transition-all duration-200 border-2 border-amber-500"
            >
              Still Have Questions? Schedule a Call
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-[#FFFBEC] from-40% to-[#FFECD7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your Business Growth Journey Starts with <span className="text-[#f9c65d]">One Conversation</span>
          </h2>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Whether you're ready to take action today or just exploring your options, we're here to help. Schedule a free consultation, and let's talk about where your business is, where you want it to be, and the most practical path to get there.
          </p>

          <p className="text-base text-gray-600 mb-10">
            No pressure. No judgment. Just honest guidance from people who understand what you're going through because we've built businesses ourselves.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://calendly.com/mesagroupconsulting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold rounded-lg shadow-lg transition-all duration-200 border-2 border-amber-500"
            >
              Schedule Free Consultation
            </a>
            <a
              href="tel:+16613103040"
              className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-lg shadow-md border-2 border-gray-300 transition-all duration-200"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us: (661) 310-3040
            </a>
          </div>

          {/* Office Information Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Clock className="w-6 h-6 text-amber-600" />
                <h3 className="text-lg font-bold text-gray-900">Office Hours</h3>
              </div>
              <p className="text-gray-700">M-F: 9am - 7pm</p>
              <p className="text-gray-700">Sat: 10am - 2pm PST</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center justify-center gap-2 mb-3">
                <MapPin className="w-6 h-6 text-amber-600" />
                <h3 className="text-lg font-bold text-gray-900">Office Location</h3>
              </div>
              <p className="text-gray-700">5001 California Ave Suite 219</p>
              <p className="text-gray-700">Bakersfield, CA 93309</p>
            </div>
          </div>

          {/* Badges */}
          <div className="mt-8 space-y-2">
            <div className="inline-block bg-green-100 px-4 py-2 rounded-full">
              <span className="text-sm font-medium text-green-800">
                Currently booking consultations 3-5 days out
              </span>
            </div>
            <div className="text-sm text-gray-600">
              Serving business owners nationwide | Licensed in all 50 states
            </div>
            <div className="text-sm text-gray-600">
              Operating through Mesa Group Consulting & Mesa Group Capital
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForBusinesses;
