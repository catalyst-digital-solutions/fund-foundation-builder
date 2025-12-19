import React, { useState } from 'react';
import { 
  CheckCircle, 
  X, 
  ArrowRight, 
  ArrowDown,
  FileQuestion, 
  FileX, 
  Clock,
  Building,
  CreditCard,
  FileText,
  Calendar,
  LayoutGrid,
  Search,
  TrendingUp,
  Phone,
  Mail,
  ChevronDown,
  Star,
  Users,
  Zap,
  Target,
  Shield,
  Home,
  Car,
  Briefcase,
  AlertTriangle,
  ExternalLink
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BuildCredit = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const trustPillars = [
    { icon: Calendar, title: 'Consistency', description: 'Showing up every month with on-time payments' },
    { icon: Shield, title: 'Responsibility', description: 'Managing different types of credit without maxing out' },
    { icon: Clock, title: 'History', description: "Demonstrating you've been reliable over time" },
    { icon: LayoutGrid, title: 'Diversity', description: 'Proving you can handle both revolving credit and installment loans' },
  ];

  const scenarios = [
    {
      icon: FileQuestion,
      title: 'Scenario 1: The Thin File Problem',
      description: 'You have maybe one credit card you opened a year ago. You pay it on time every month. But when you apply for a car loan, you get denied—not because of bad behavior, but because lenders can\'t see enough history to trust you.'
    },
    {
      icon: FileX,
      title: 'Scenario 2: The "Clean Slate" Problem',
      description: 'You just finished credit restoration. All the negatives are gone. Your report is clean. But clean isn\'t fundable. With no positive accounts reporting, you\'re essentially starting from scratch.'
    },
    {
      icon: Clock,
      title: 'Scenario 3: The "New Credit" Problem',
      description: 'You opened 3 credit cards last month hoping to build credit fast. Instead, your score dropped 40 points. Too many hard inquiries. No account age. Lenders now see you as risky.'
    },
  ];

  const personAPoints = [
    'Opens 5 random credit cards in one month',
    'Score drops 60 points from hard inquiries',
    'Gets denied for an apartment because of "too many recent accounts"',
    'Maxes out 2 cards trying to build utilization',
    'Closes old accounts because "they\'re not using them"',
    '12 months later: 580 score, no lending relationships, frustration'
  ];

  const personBPoints = [
    'Starts with 1 credit union secured card + 1 credit builder loan',
    'Opens accounts strategically, 60+ days apart',
    'Keeps utilization under 10% on every account',
    'Adds rent reporting to backdate 24 months of payment history',
    'After 6 months, adds 2 more revolving accounts strategically',
    '12 months later: 720+ score, credit union relationship, auto loan pre-approval, $15K available credit'
  ];

  const fivePillars = [
    {
      icon: Building,
      number: 1,
      title: 'Credit Union Relationships',
      description: 'Credit unions are member-owned, which means they\'re designed to help you succeed—not just profit from fees. When you open a secured card or credit builder account at a credit union, you\'re building a relationship that leads to future auto loans, personal loans, and eventually mortgages.',
      goal: 'Establish at least one credit union membership with an active account.'
    },
    {
      icon: CreditCard,
      number: 2,
      title: 'Revolving Credit',
      description: 'These are credit cards and lines of credit where you can borrow, repay, and borrow again. Lenders want to see that you can manage available credit responsibly without maxing it out.',
      goal: '3-5 revolving accounts with combined credit limits of $10,000+ and utilization under 10%.'
    },
    {
      icon: FileText,
      number: 3,
      title: 'Installment Credit',
      description: 'These are fixed loans with set payment amounts over time—like auto loans, mortgages, or credit builder loans. Having installment credit shows lenders you can commit to regular payments.',
      goal: '1-2 installment accounts showing consistent on-time payments.'
    },
    {
      icon: Calendar,
      number: 4,
      title: 'Account Age & Payment History',
      description: 'The longer your accounts have been open with positive payment history, the more trustworthy you appear. This is why closing old accounts or opening too many new ones can hurt you.',
      goal: 'Average account age of 2+ years with zero late payments.'
    },
    {
      icon: LayoutGrid,
      number: 5,
      title: 'Credit Mix & Diversity',
      description: 'Lenders like seeing that you can manage different types of credit. Having only credit cards or only loans limits what they can assess about your financial responsibility.',
      goal: 'A mix of revolving and installment accounts demonstrating financial versatility.'
    },
  ];

  const howItWorksSteps = [
    {
      icon: Search,
      number: 1,
      title: 'Choose Your Tools',
      description: 'Based on your starting point, select the credit building accounts that make sense. Not everyone needs the same combination. Someone with zero credit history needs different tools than someone who just finished credit restoration.',
      cta: 'We help you choose the right combination for your situation.'
    },
    {
      icon: Calendar,
      number: 2,
      title: 'Open Accounts Strategically',
      description: 'Timing matters. Opening too many accounts at once triggers hard inquiries and signals desperation to lenders. The 60-Day Rule: Space new account applications at least 60 days apart to minimize score impact and avoid triggering "too many recent accounts" flags.',
      timeline: ['Month 1: Foundation accounts', 'Month 3-4: Secondary accounts', 'Month 6+: Strategic additions']
    },
    {
      icon: TrendingUp,
      number: 3,
      title: 'Make On-Time Payments & Watch Your Profile Grow',
      description: 'Every on-time payment builds trust. Every month of responsible behavior strengthens your file. This isn\'t a hack—it\'s a system. And systems work when you work them consistently.',
      results: ['Credit score increases', 'Credit limits increase', 'Interest rates decrease', 'Approval odds increase']
    },
  ];

  const revolvingPartners = [
    { name: 'Ava Finance', features: ['Reports to all 3 bureaus', 'No credit check to apply', 'Builds revolving credit'] },
    { name: 'Kikoff', features: ['$0 annual fee', 'No hard pull', 'Reports monthly'] },
    { name: 'CreditStrong Revolv', features: ['Credit builder + revolving', 'Low monthly cost', 'All 3 bureaus'] },
    { name: 'Credit Builder Card', features: ['Secured option', 'Graduate to unsecured', 'Rewards potential'] },
  ];

  const installmentPartners = [
    { name: 'CreditStrong Loans', features: ['Credit builder loan', 'Reports to all 3 bureaus', 'Save while building'] },
    { name: 'Self Credit Builder', features: ['No credit check', 'Save money as you build', 'Low monthly payments'] },
  ];

  const rentPartners = [
    { name: 'RentReporters', features: ['Backdate up to 24 months', 'Reports to TransUnion', 'Fast enrollment'] },
    { name: 'Rental Kharma', features: ['Reports to TransUnion', 'Past rent history', 'Monthly reporting'] },
    { name: 'BoomPay', features: ['Reports to all 3 bureaus', 'Rent + utilities', 'Backdate history'] },
    { name: 'Experian Boost', features: ['FREE service', 'Add utilities & streaming', 'Instant score update'] },
  ];

  const paths = [
    {
      name: 'Foundation Builder',
      level: 'Beginner',
      bestFor: 'No credit history, thin files, or starting from scratch',
      timeline: '6-12 months to fundable profile',
      strategy: [
        'Open 1 credit union secured card',
        'Start 1 credit builder loan',
        'Add rent reporting (backdate if possible)',
        'After 6 months, add 1-2 more revolving accounts',
        'Keep utilization under 10%'
      ],
      results: '720+ score potential, credit union relationship, 3-5 tradelines, $5K-$10K available credit',
      color: 'amber'
    },
    {
      name: 'Accelerated Builder',
      level: 'Intermediate',
      bestFor: 'Some credit history, post-restoration, or 1-3 existing accounts',
      timeline: '4-8 months to fundable profile',
      strategy: [
        'Add 2-3 revolving accounts (spaced 60+ days)',
        'Add installment account if missing',
        'Implement rent reporting with backdating',
        'Consider authorized user tradeline for instant age',
        'Optimize existing account utilization'
      ],
      results: '750+ score potential, diverse credit mix, 6-8 tradelines, $10K-$15K available credit',
      color: 'green'
    },
    {
      name: 'Premium Profile Builder',
      level: 'Advanced',
      bestFor: 'Strong foundation, targeting premium approvals (mortgages, business funding)',
      timeline: '3-6 months to premium fundable profile',
      strategy: [
        'Add premium authorized user tradelines (10+ years)',
        'Strategic credit limit increases',
        'Add business credit accounts (if applicable)',
        'Optimize credit mix for mortgage/business funding',
        'Target specific lender requirements'
      ],
      results: '780+ score potential, premium credit profile, 8-10+ tradelines, $20K+ available credit',
      color: 'blue'
    },
  ];

  const testimonials = [
    {
      quote: "I went from no credit to a 738 score in 8 months. The strategy was simple—I just needed someone to show me the right order to do things.",
      name: 'Jessica M.',
      location: 'Bakersfield, CA',
      transformation: '0 → 738 in 8 months'
    },
    {
      quote: "After my credit restoration, I thought I was done. Mesa Group showed me that removing negatives was just step one. Building positive accounts is where the magic happens.",
      name: 'Marcus T.',
      location: 'Los Angeles, CA',
      transformation: '540 → 712 in 10 months'
    },
    {
      quote: "The rent reporting alone added 24 months of payment history I didn\'t know I could use. Game changer.",
      name: 'Sarah K.',
      location: 'Fresno, CA',
      transformation: '580 → 695 in 6 months'
    },
    {
      quote: "Person A vs. Person B? I was Person A for years. Once I followed this strategy, everything changed. Pre-approved for my first home loan last month.",
      name: 'David R.',
      location: 'Bakersfield, CA',
      transformation: '620 → 745 in 12 months'
    },
  ];

  const mistakes = [
    {
      mistake: 'Opening Too Many Accounts at Once',
      whyItHurts: 'Each application creates a hard inquiry. Multiple inquiries in a short period signals desperation to lenders and drops your score. "Too many recent accounts" is a common denial reason.',
      fix: 'Space applications 60+ days apart. Start with 1-2 accounts and build gradually.'
    },
    {
      mistake: 'Skipping the Credit Union',
      whyItHurts: 'Banks and credit card companies don\'t build relationships—they build profits. Credit unions are designed to help members succeed and will approve you for future loans based on your membership history.',
      fix: 'Start with a credit union secured card or credit builder. Build the relationship first.'
    },
    {
      mistake: 'Maxing Out New Accounts',
      whyItHurts: 'High utilization (using more than 30% of your limit) signals financial stress. Even paying it off monthly, high reported balances hurt your score.',
      fix: 'Keep utilization under 10% on every account. Pay balances before statement closes.'
    },
    {
      mistake: 'Missing Payments',
      whyItHurts: 'One late payment can drop your score 50-100 points and stays on your report for 7 years. Payment history is 35% of your credit score—the single biggest factor.',
      fix: 'Set up autopay for at least minimum payments. Never miss. Ever.'
    },
    {
      mistake: 'Closing Old Accounts',
      whyItHurts: 'Closing accounts reduces your available credit (increasing utilization) and eventually removes account age from your profile. Both hurt your score.',
      fix: 'Keep old accounts open, even if unused. Use them occasionally to keep them active.'
    },
  ];

  const faqs = [
    {
      question: 'How long does it take to build credit from scratch?',
      answer: 'With strategic account selection and consistent payments, most people can achieve a fundable credit profile (680+ score with diverse tradelines) in 6-12 months. Some reach 720+ in 8-10 months using our accelerated strategies.'
    },
    {
      question: 'Should I start with a secured card or a credit builder account?',
      answer: 'We recommend starting with both if possible. A secured card builds revolving credit while a credit builder loan adds installment credit. This creates credit mix from day one.'
    },
    {
      question: 'Will opening multiple accounts hurt my credit score?',
      answer: 'Only if you open them too quickly. Each hard inquiry causes a small, temporary dip. By spacing applications 60+ days apart, you minimize impact while building a strong profile over time.'
    },
    {
      question: 'Do I need good credit to get started?',
      answer: 'No! The tools we recommend are specifically designed for people with no credit, thin files, or recovering credit. Most require no credit check to apply.'
    },
    {
      question: 'Can I build credit while in credit restoration?',
      answer: 'Absolutely—and you should. Running both simultaneously compresses your timeline significantly. While negatives are being removed, you\'re building positive accounts.'
    },
    {
      question: 'When should I add an authorized user tradeline?',
      answer: 'After you have a foundation of your own accounts (usually 6+ months). Adding tradelines too early without your own credit activity can look suspicious to lenders.'
    },
    {
      question: 'Do these accounts report to all three bureaus?',
      answer: 'Most of our recommended partners report to all three major bureaus (Experian, Equifax, TransUnion). We specifically choose partners with comprehensive reporting.'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-amber-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Build Credit Fast—The <span className="text-amber-600">Strategic</span> Way
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              Access the nation's leading credit building platforms through one trusted partner. We've partnered with proven tools to help you build strong credit relationships—no guesswork, no wasted time, just a clear path to funding.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2">
                Get Your Free Credit Building Guide
                <ArrowRight className="w-5 h-5" />
              </button>
              <a 
                href="tel:6613103040" 
                className="bg-white hover:bg-gray-50 text-gray-900 font-semibold py-4 px-8 rounded-lg border-2 border-gray-300 hover:border-amber-400 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Speak with a Specialist: (661) 310-3040
              </a>
            </div>
            
            {/* Trust Bar */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>2,500+ Clients Guided</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Recognized by SmartCredit for Empowering Consumers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Trusted by Leading Financial Platforms</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-8">
            Credit Is About <span className="text-amber-600">Relationships</span>, Not Just Numbers
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mb-12">
            <p>
              Most people think credit is just about hitting a score. They obsess over three digits, constantly refreshing their credit apps, hoping their number magically jumps high enough to qualify for something.
            </p>
            <p>
              <strong>That's the wrong approach.</strong>
            </p>
            <p>
              Credit isn't a game you hack. It's a relationship system between you and financial institutions. Banks, credit unions, and lenders want to see one thing: <em>Are you someone they can trust with their money?</em>
            </p>
            <p>
              And trust isn't built overnight. It's built through:
            </p>
          </div>
          
          {/* Trust Pillars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {trustPillars.map((pillar, index) => (
              <div key={index} className="bg-amber-50 rounded-xl p-6 text-center">
                <pillar.icon className="w-10 h-10 text-amber-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{pillar.title}</h3>
                <p className="text-sm text-gray-700">{pillar.description}</p>
              </div>
            ))}
          </div>
          
          {/* Callout Quote */}
          <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-xl">
            <p className="text-lg italic text-gray-800">
              "You can have a 750 credit score and still get denied. Someone with a 680 and relationships gets approved. This is the power of relationships."
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              You Can't Get Credit Without <span className="text-amber-600">Credit History</span>
            </h2>
            <p className="text-xl text-gray-700">It's the ultimate catch-22.</p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <p className="text-gray-700 leading-relaxed mb-4">
                You walk into a car dealership. You've never missed a payment in your life. You have $5,000 saved for a down payment. You've been at your job for 3 years.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The salesperson runs your credit.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>"I'm sorry, we can't approve you today. Your credit file is too thin."</strong>
              </p>
              <p className="text-gray-700 leading-relaxed">
                Because lenders don't just want a clean report. They want to see <em>proof</em> that you can handle credit responsibly. And if you've never had credit—or if you recently removed all your negative accounts—you're essentially invisible to them.
              </p>
            </div>
          </div>
          
          {/* Scenario Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {scenarios.map((scenario, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <scenario.icon className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{scenario.title}</h3>
                <p className="text-gray-700 leading-relaxed">{scenario.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two People Comparison */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12">
            Same Starting Point. Different Strategy.{' '}
            <span className="text-amber-600">Completely Different Outcome.</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Person A */}
            <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-red-600">
              <div className="flex items-center gap-3 mb-6">
                <X className="w-8 h-8 text-red-600" />
                <h3 className="text-2xl font-bold text-gray-900">Person A (Didn't Follow This Guide)</h3>
              </div>
              <ul className="space-y-4">
                {personAPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Person B */}
            <div className="bg-amber-50 rounded-xl p-8 border-l-4 border-green-600">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">Person B (Followed This Guide)</h3>
              </div>
              <ul className="space-y-4">
                {personBPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-4">
              The difference? Person B understood that credit building isn't about finding a magic product. It's about <strong>strategic relationships and timing</strong>.
            </p>
            <p className="text-xl font-semibold text-amber-600">
              You're about to become Person B.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section - 5 Pillars */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Credit Building = Adding <span className="text-amber-600">Positive Accounts</span> That Lenders Actually Want to See
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Credit building means strategically opening accounts that report positive payment history to the credit bureaus. These accounts create the "credit depth" that lenders need to see before approving you for major purchases.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fivePillars.slice(0, 3).map((pillar, index) => (
              <div key={index} className="bg-amber-50/50 rounded-xl p-6 shadow-md border border-amber-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <pillar.icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <span className="text-sm text-amber-600 font-semibold">Pillar {pillar.number}</span>
                    <h3 className="text-xl font-bold text-gray-900">{pillar.title}</h3>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{pillar.description}</p>
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm text-green-800">
                    <strong>The Goal:</strong> {pillar.goal}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom row with 2 pillars centered */}
          <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
            {fivePillars.slice(3, 5).map((pillar, index) => (
              <div key={index + 3} className="bg-amber-50/50 rounded-xl p-6 shadow-md border border-amber-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <pillar.icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <span className="text-sm text-amber-600 font-semibold">Pillar {pillar.number}</span>
                    <h3 className="text-xl font-bold text-gray-900">{pillar.title}</h3>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{pillar.description}</p>
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm text-green-800">
                    <strong>The Goal:</strong> {pillar.goal}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12">
            Your Credit Building Journey in <span className="text-amber-600">3 Steps</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  <step.icon className="w-8 h-8 text-amber-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{step.description}</p>
                  
                  {step.cta && (
                    <p className="text-amber-600 font-semibold">{step.cta}</p>
                  )}
                  
                  {step.timeline && (
                    <div className="bg-amber-50 rounded-lg p-4 mt-4">
                      <p className="text-sm font-semibold text-gray-900 mb-2">Timeline:</p>
                      <ul className="space-y-1">
                        {step.timeline.map((item, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                            <ArrowRight className="w-4 h-4 text-amber-600" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {step.results && (
                    <div className="bg-green-50 rounded-lg p-4 mt-4">
                      <p className="text-sm font-semibold text-gray-900 mb-2">Results:</p>
                      <ul className="space-y-1">
                        {step.results.map((item, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Partners */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Ready to Get Started? Click Your <span className="text-amber-600">Preferred Tool</span> Below
            </h2>
            <p className="text-lg text-gray-700">
              We've partnered with the nation's leading credit building platforms. Click any partner below to get started immediately:
            </p>
          </div>
          
          {/* Revolving Credit Builders */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-amber-600" />
              Revolving Credit Builders
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {revolvingPartners.map((partner, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{partner.name}</h4>
                  <ul className="space-y-2 mb-4">
                    {partner.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
                    Get Started Now
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          {/* Installment Loan Builders */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileText className="w-6 h-6 text-amber-600" />
              Installment Loan Builders
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {installmentPartners.map((partner, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{partner.name}</h4>
                  <ul className="space-y-2 mb-4">
                    {partner.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
                    Get Started Now
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          {/* Rent Reporting */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Home className="w-6 h-6 text-amber-600" />
              Rent Reporting & Alternative Credit
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {rentPartners.map((partner, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{partner.name}</h4>
                  <ul className="space-y-2 mb-4">
                    {partner.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
                    Get Started Now
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          {/* Authorized User Tradelines */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Users className="w-6 h-6 text-amber-600" />
              Authorized User Tradelines (Advanced)
            </h3>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <p className="text-gray-700 mb-6">
                Access 3,000+ aged tradelines (5-20+ years) for instant account age boost. Best for those with established foundation seeking premium profile acceleration.
              </p>
              <button className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors">
                Schedule Free Tradeline Consultation
              </button>
            </div>
          </div>
          
          {/* Not Sure CTA */}
          <div className="text-center bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8">
            <p className="text-lg text-gray-700 mb-4">Not Sure Where to Start?</p>
            <button className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-3 px-8 rounded-lg shadow-lg transition-all">
              Schedule Free Credit Building Consultation
            </button>
            <p className="text-sm text-gray-600 mt-2">or call (661) 310-3040</p>
          </div>
        </div>
      </section>

      {/* Path Chooser */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Three Proven <span className="text-amber-600">Paths</span> to Building Credit
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Choose the combination that fits your starting point and goals. Instead of opening random accounts and hoping for the best, follow a proven strategy.
            </p>
          </div>
          
          {/* Simple Path Flowchart */}
          <div className="bg-amber-50 p-8 rounded-xl mb-12 max-w-2xl mx-auto">
            <div className="text-center space-y-4">
              <div className="font-bold text-lg text-gray-900">START HERE</div>
              <ArrowDown className="w-6 h-6 mx-auto text-amber-600" />
              <div className="text-gray-700">Do you have ANY credit history?</div>
              <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm">
                <div className="bg-white rounded-lg p-3">
                  <span className="font-semibold text-red-600">NO</span> → Foundation Builder Path
                </div>
                <div className="bg-white rounded-lg p-3">
                  <span className="font-semibold text-green-600">YES</span> → Continue to Accelerated or Premium
                </div>
              </div>
            </div>
          </div>
          
          {/* Path Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {paths.map((path, index) => (
              <div key={index} className={`bg-white rounded-xl p-8 shadow-lg border-t-4 ${
                path.color === 'amber' ? 'border-amber-400' : 
                path.color === 'green' ? 'border-green-500' : 
                'border-blue-500'
              }`}>
                <div className="mb-6">
                  <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                    path.color === 'amber' ? 'bg-amber-100 text-amber-700' : 
                    path.color === 'green' ? 'bg-green-100 text-green-700' : 
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {path.level}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{path.name}</h3>
                <p className="text-gray-600 mb-4">{path.bestFor}</p>
                <p className="text-amber-600 font-semibold mb-6">{path.timeline}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">The Strategy:</h4>
                  <ul className="space-y-2">
                    {path.strategy.map((item, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-green-800">
                    <strong>Results:</strong> {path.results}
                  </p>
                </div>
                
                <button className="w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors">
                  Start {path.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12">
            Real Results from <span className="text-amber-600">Real People</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-xl p-6 shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#f9c65d] text-[#f9c65d]" />
                  ))}
                </div>
                <p className="text-white italic mb-4 leading-relaxed">"{testimonial.quote}"</p>
                <div className="border-t border-gray-600 pt-4">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.location}</p>
                  <p className="text-sm text-amber-400 font-semibold mt-1">{testimonial.transformation}</p>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-sm text-gray-600 italic text-center mt-8">
            Compliance Disclaimer: Results vary based on individual circumstances. Testimonials reflect individual experiences and are not a guarantee of similar outcomes.
          </p>
        </div>
      </section>

      {/* Long Game Vision */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-8">
            Beyond the Score: Building <span className="text-amber-600">Institutional Relationships</span>
          </h2>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              You can have a 750 credit score and still get denied for a mortgage. Why? Because the lender has never seen your name before. You have no relationship with them. No history. No trust.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              But someone with a 680 who's been banking at the same credit union for 5 years, paid off a car loan through them, and has a checking account? They're getting approved—often with better terms.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl border-l-4 border-amber-600 max-w-4xl mx-auto mb-12">
            <p className="text-xl font-semibold text-gray-900">
              "Credit scores are just the entry ticket. Relationships are what get you approved."
            </p>
          </div>
          
          {/* 5-Year Roadmap */}
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Your 5-Year Credit Journey</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-amber-600">Year 1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Foundation Set</h4>
                  <p className="text-gray-700">Credit union relationship established, 3-5 tradelines, 700+ score potential</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-green-600">Year 3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Relationship Growth</h4>
                  <p className="text-gray-700">Auto loan paid/paying, personal loan access, $20K+ available credit</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-blue-600">Year 5</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Premium Access</h4>
                  <p className="text-gray-700">Mortgage approved with competitive rates, $50K+ credit access, business funding opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12">
            5 Mistakes That <span className="text-amber-600">Cost People</span> Months of Progress
          </h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {mistakes.map((mistake, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <X className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Mistake #{index + 1}: {mistake.mistake}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      <strong>Why It Hurts:</strong> {mistake.whyItHurts}
                    </p>
                    <div className="bg-green-50 rounded-lg p-4 flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">
                        <strong>The Fix:</strong> {mistake.fix}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credit Building + Restoration */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-8">
            Already Working on Credit Restoration?{' '}
            <span className="text-amber-600">Add Credit Building.</span>
          </h2>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              If you're currently working with Mesa Group on credit restoration, don't wait until it's complete to start building. The most effective strategy is running both simultaneously—removing negatives while adding positives.
            </p>
          </div>
          
          {/* Timeline Comparison */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-red-600">
              <X className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Without Credit Building</h3>
              <p className="text-3xl font-bold text-gray-900 mb-2">18 months to fundability</p>
              <p className="text-sm text-gray-600">(6 months restoration + 12 months building = 18 months total)</p>
            </div>
            <div className="bg-amber-50 rounded-xl p-8 border-l-4 border-green-600">
              <CheckCircle className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">With Credit Building</h3>
              <p className="text-3xl font-bold text-gray-900 mb-2">6-8 months to fundability</p>
              <p className="text-sm text-gray-600">(Both running simultaneously = compressed timeline)</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors">
              Ask Your Advisor About Adding Credit Building
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-900 font-semibold py-3 px-6 rounded-lg border-2 border-gray-300 hover:border-amber-400 transition-colors">
              Schedule Free Credit Analysis
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12">
            Common <span className="text-amber-600">Questions</span> About Building Credit
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#FFFBEC] from-40% to-[#FFECD7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Start Building <span className="text-amber-600">Relationships</span>, Not Just Scores
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Credit isn't a number you chase. It's a reputation you build. And with the right strategy, tools, and guidance, you can build a credit profile that opens doors—not just today, but for decades to come.
          </p>
          
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">The Choice Is Yours:</h3>
            <div className="space-y-4 text-left max-w-md mx-auto">
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Do nothing and stay stuck</span>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Try to figure it out alone and waste months</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Follow these strategies and become Person B</strong></span>
              </div>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 mb-8">
            You just read a guide that most people would charge $500+ for. We gave it to you for free because we believe in education-first.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-lg flex items-center justify-center gap-2">
              Get Your Free Credit Building Guide
              <ArrowRight className="w-5 h-5" />
            </button>
            <a 
              href="tel:6613103040"
              className="bg-white hover:bg-gray-50 text-gray-900 font-bold py-4 px-8 rounded-lg border-2 border-gray-300 hover:border-amber-400 transition-all duration-200 text-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Speak with a Specialist: (661) 310-3040
            </a>
          </div>
          
          <div className="bg-amber-50 rounded-xl p-6 mb-8">
            <h4 className="font-bold text-gray-900 mb-4">What Happens Next:</h4>
            <ul className="space-y-2 text-left max-w-md mx-auto">
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Download your complete guide instantly
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Get personalized recommendations via email
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Option to schedule free 1-on-1 consultation
              </li>
            </ul>
          </div>
          
          {/* Trust Bar */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>2,500+ Clients Guided</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>Recognized by SmartCredit</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>Trusted by Leading Platforms</span>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Disclaimers */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-sm text-gray-600">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Partner Disclosure</h4>
              <p>Mesa Group Consulting partners with leading financial service platforms and may earn compensation when you use partner services through our provided links. This allows us to offer educational resources and guidance at no cost to you. We only recommend products and platforms we genuinely believe help our clients build credit effectively.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Educational Resource Disclaimer</h4>
              <p>The information provided on this page is for educational purposes only and should not be considered financial advice. Mesa Group Consulting is not a financial advisor. Credit building results vary based on individual circumstances, credit history, payment behavior, and financial responsibility. We cannot guarantee specific score increases or approval for any financial product.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Credit Restoration Services</h4>
              <p>Credit restoration services (disputing inaccurate or unverifiable information) are separate from credit building. For credit restoration services, visit our credit restoration page. Mesa Group Consulting provides credit restoration services in accordance with the Credit Repair Organizations Act (CROA).</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BuildCredit;
