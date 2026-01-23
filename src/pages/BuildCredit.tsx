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
  ExternalLink,
  HelpCircle,
  Settings
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CalendlyPopupButton } from '@/components/CalendlyPopupButton';
import { GHLFormModal } from '@/components/GHLFormModal';

const BuildCredit = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);
  const [selectedGuideUrl, setSelectedGuideUrl] = useState('');

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
      tools: [
        '2-3 revolving accounts (credit builders or secured cards)',
        '1-2 installment accounts (credit builder loans)',
        '1 rent reporting service (optional but recommended)'
      ],
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
    { name: 'Ava Finance', url: 'https://meetava.sjv.io/xLxZEA', features: ['Reports to all 3 bureaus', 'No credit check to apply', 'Builds revolving credit'] },
    { name: 'Kikoff', url: 'https://kikoff.com/', features: ['$0 annual fee', 'No hard pull', 'Reports monthly'] },
    { name: 'CreditStrong Revolv', url: 'https://www.creditstrong.com/?transid=346adf8666034416853ba1e6c434b2cc&utm_medium=31&utm_source=Affiliate&affiliate_id=31&utm_campaign=429891', features: ['Credit builder + revolving', 'Low monthly cost', 'All 3 bureaus'] },
    { name: 'Credit Builder Card', url: 'https://www.creditbuildercard.com/mesagroupconsulting', features: ['Secured option', 'Graduate to unsecured', 'Rewards potential'] },
  ];

  const installmentPartners = [
    { name: 'CreditStrong Loans', url: 'https://www.creditstrong.com/?transid=346adf8666034416853ba1e6c434b2cc&utm_medium=31&utm_source=Affiliate&affiliate_id=31&utm_campaign=429891', features: ['Credit builder loan', 'Reports to all 3 bureaus', 'Save while building'] },
    { name: 'Self Credit Builder', url: 'https://self.inc', features: ['No credit check', 'Save money as you build', 'Low monthly payments'] },
  ];

  const rentPartners = [
    { name: 'RentReporters', url: 'https://www.rentreporters.com/?clickref=1110lXs9Zs', features: ['Backdate up to 24 months', 'Reports to TransUnion', 'Fast enrollment'] },
    { name: 'Rental Kharma', url: 'https://www.rentalkharma.com/partner-ecalderon/?Code=MESAGROUP', features: ['Reports to TransUnion', 'Past rent history', 'Monthly reporting'] },
    { name: 'BoomPay', url: 'https://www.boompay.app/', features: ['Reports to all 3 bureaus', 'Rent + utilities', 'Backdate history'] },
    { name: 'Experian Boost', url: 'https://www.experian.com/lp/score-boost/?conf=aff_a&pc=aff_exp_27&cc=aff_33_27_1228_6640_429891_01_213777450_eb70e093-56e4-474a-a807-01fcb94afdcc_rid175705769&ref=6fda4f17%2c21d6beda%2cn%2cn', features: ['FREE service', 'Add utilities & streaming', 'Instant score update'] },
  ];

  const guideFormUrls: { [key: string]: string } = {
    'Foundation Builder': 'https://link.mesagroupconsulting.com/widget/form/uUE1dkTdPGFZVQRR0ObD',
    'Accelerated Builder': 'https://link.mesagroupconsulting.com/widget/form/UI9ZQ3EKobX1pX2qLz7s',
    'Premium Profile Builder': 'https://link.mesagroupconsulting.com/widget/form/5Omruu9hIcuHix52sRHp'
  };

  const openGuideModal = (pathName: string) => {
    setSelectedGuideUrl(guideFormUrls[pathName]);
    setIsGuideModalOpen(true);
  };

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
      transformation: '0 → 738 in 8 months',
      image: '/img-04-professional-headshot-of-jessica-m.jpeg'
    },
    {
      quote: "After my credit restoration, I thought I was done. Mesa Group showed me that removing negatives was just step one. Building positive accounts is where the magic happens.",
      name: 'Marcus T.',
      location: 'Los Angeles, CA',
      transformation: '540 → 712 in 10 months',
      image: '/img-05-professional-headshot-of-marcus-t.jpeg'
    },
    {
      quote: "The rent reporting alone added 24 months of payment history I didn\'t know I could use. Game changer.",
      name: 'Sarah K.',
      location: 'Fresno, CA',
      transformation: '580 → 695 in 6 months',
      image: '/img-06-professional-headshot-of-sarah-k.jpeg'
    },
    {
      quote: "Person A vs. Person B? I was Person A for years. Once I followed this strategy, everything changed. Pre-approved for my first home loan last month.",
      name: 'David R.',
      location: 'Bakersfield, CA',
      transformation: '620 → 745 in 12 months',
      image: '/img-07-professional-headshot-of-david-r.jpeg'
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
              Build Credit Fast—The <span className="text-[#f9c65d]">Strategic</span> Way
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              Access the nation's leading credit building platforms through one trusted partner. We've partnered with proven tools to help you build strong credit relationships—no guesswork, no wasted time, just a clear path to funding.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <CalendlyPopupButton
                text="Schedule Your Free Consultation"
                showArrow={true}
                prefillOptions={{
                  utm: { source: 'website', medium: 'build_credit', campaign: 'hero_cta' }
                }}
              />
              <a
                href="tel:6613103040"
                className="bg-white hover:bg-gray-50 text-gray-900 font-semibold py-4 px-8 rounded-lg border-2 border-gray-300 hover:border-amber-400 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-center">Speak with a Specialist:<br />(661) 310-3040</span>
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
            Credit Is About <span className="text-[#f9c65d]">Relationships</span>, Not Just Numbers
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

      {/* Success Stories */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12">
            Real Results from <span className="text-[#f9c65d]">Real People</span>
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
                <div className="border-t border-gray-600 pt-4 flex items-start gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.location}</p>
                    <p className="text-sm text-amber-400 font-semibold mt-1">{testimonial.transformation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-600 italic text-center mt-8">
            Compliance Disclaimer: Results vary based on individual circumstances. Testimonials reflect individual experiences and are not a guarantee of similar outcomes.
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              You Can't Get Credit Without <span className="text-[#f9c65d]">Credit History</span>
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
            <span className="text-[#f9c65d]">Completely Different Outcome.</span>
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
              Credit Building = Adding <span className="text-[#f9c65d]">Positive Accounts</span> That Lenders Actually Want to See
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Credit building means strategically opening accounts that report positive payment history to the credit bureaus. These accounts create the "credit depth" that lenders need to see before approving you for major purchases.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fivePillars.slice(0, 3).map((pillar, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-amber-100">
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
              <div key={index + 3} className="bg-white rounded-xl p-6 shadow-md border border-amber-100">
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
            Your Credit Building Journey in <span className="text-[#f9c65d]">3 Steps</span>
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
                  
                  {step.tools && (
                    <div className="bg-amber-50 rounded-lg p-4 mt-4">
                      <p className="text-sm font-semibold text-gray-900 mb-2">Pick 3-5 accounts across different categories:</p>
                      <ul className="space-y-1">
                        {step.tools.map((item, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                            <ArrowRight className="w-4 h-4 text-amber-600" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      {step.cta && (
                        <p className="text-amber-600 font-semibold text-sm mt-3">{step.cta}</p>
                      )}
                    </div>
                  )}
                  
                  {!step.tools && step.cta && (
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

      {/* Quick Access Partners - ORIGINAL (disabled, using hardcoded version below) */}
      {false && (
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Ready to Get Started? Click Your <span className="text-[#f9c65d]">Preferred Tool</span> Below
            </h2>
            <p className="text-lg text-gray-700">
              We've partnered with the nation's leading credit building platforms. Click any partner below to get started immediately:
            </p>
          </div>
          
          {/* Revolving Credit Builders */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-amber-600" />
              Revolving Credit Builders
            </h3>
            <p className="text-gray-700 mb-6 max-w-4xl">
              Revolving credit accounts are the foundation of a strong credit profile. These platforms let you add primary credit card tradelines without requiring good credit.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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
                  {/* Plain anchor tags - no modal, no JavaScript, clean navigation */}
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-colors text-sm text-center"
                  >
                    Get Started Now
                  </a>
                </div>
              ))}
            </div>
            
            {/* Revolving Credit Info Box */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-8 border border-amber-200">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">?</span>
                    What They Are
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Specialized accounts that report as revolving credit to all three bureaus—with no credit check required.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">⚙</span>
                    How They Work
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    You sign up, the account reports as a $2,500-$10,000 credit line on your report. You make small purchases or payments monthly, and positive payment history builds automatically.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</span>
                    Key Benefits
                  </h4>
                  <ul className="space-y-2">
                    <li className="text-gray-700 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      No hard inquiry or credit check
                    </li>
                    <li className="text-gray-700 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      Instant approval
                    </li>
                    <li className="text-gray-700 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      Reports to all three bureaus
                    </li>
                    <li className="text-gray-700 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      Credit limits from $2,500 to $10,000+
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Installment Loan Builders */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FileText className="w-6 h-6 text-amber-600" />
              Installment Loan Builders
            </h3>
            <p className="text-gray-700 mb-6 max-w-4xl">
              Installment loans demonstrate your ability to manage fixed payments over time. Credit builder loans report positive payment history to credit bureaus while helping you save money.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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
                  {/* Use plain anchor tags for all installment partners */}
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-colors text-sm text-center"
                  >
                    Get Started Now
                  </a>
                </div>
              ))}
            </div>

            {/* Installment Loan Info Box */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-8 border border-amber-200">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-5 h-5 text-white" />
                    </div>
                    What They Are
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Credit builder loans are designed to help you establish credit history while saving money. You make monthly payments into a secured account over 6-24 months, and the lender reports your payment history to the credit bureaus.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Settings className="w-5 h-5 text-white" />
                    </div>
                    How They Work
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    You open a small loan ($500-$3,000), make monthly payments for the loan term, and the lender reports your on-time payments to credit bureaus. At the end of the term, you receive your savings (minus interest and fees).
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    Key Benefits
                  </h4>
                  <ul className="space-y-2">
                    <li className="text-gray-700 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      Build credit and savings simultaneously
                    </li>
                    <li className="text-gray-700 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      Adds installment account diversity
                    </li>
                    <li className="text-gray-700 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      Reports to all three bureaus
                    </li>
                    <li className="text-gray-700 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      Low monthly payments ($25-$150)
                    </li>
                    <li className="text-gray-700 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      Typical results visible in 3-6 months*
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Rent Reporting */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Home className="w-6 h-6 text-amber-600" />
              Rent Reporting & Alternative Credit
            </h3>
            <p className="text-gray-700 mb-6 max-w-4xl">
              Your rent is likely your largest monthly expense. Rent reporting services add your on-time rent payments to your credit reports, potentially backdating months or years of positive payment history.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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
                  {/* Use plain anchor tags for all rent reporting partners */}
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-colors text-sm text-center"
                  >
                    Get Started Now
                  </a>
                </div>
              ))}
            </div>

            {/* Rent Reporting Info Box */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-8 border border-amber-200">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-5 h-5 text-white" />
                    </div>
                    What They Are
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Services that report your monthly rent payments to credit bureaus, turning an expense you're already paying into credit-building history. Some services can add verified past rent payments to your credit report.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Settings className="w-5 h-5 text-white" />
                    </div>
                    How They Work
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    You connect your bank account or provide lease documentation. The service verifies your rent payments and reports them to one or more credit bureaus. Some services also report utility bills, phone bills, and subscription payments.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    Key Benefits
                  </h4>
                  <ul className="space-y-2">
                    <li className="text-gray-700 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      Add 12-24 months of verified payment history
                    </li>
                    <li className="text-gray-700 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      No new credit accounts or hard inquiries
                    </li>
                    <li className="text-gray-700 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      Average score increase varies by credit profile*
                    </li>
                    <li className="text-gray-700 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      Low monthly cost ($5-$20/month, Experian Boost is free)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* [HARDCODED VERSION] Quick Access Partners - No React arrays, just plain HTML */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Ready to Get Started? Click Your <span className="text-[#f9c65d]">Preferred Tool</span> Below
            </h2>
            <p className="text-lg text-gray-700">
              We've partnered with the nation's leading credit building platforms. Click any partner below to get started immediately:
            </p>
          </div>

          {/* Revolving Credit Builders - Hardcoded */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-amber-600" />
              Revolving Credit Builders
            </h3>
            <p className="text-gray-700 mb-6 max-w-4xl">
              Revolving credit accounts are the foundation of a strong credit profile. These platforms let you add primary credit card tradelines without requiring good credit.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

              {/* Ava Finance */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Ava Finance</h4>
                <ul className="space-y-2 mb-4">
                  <li className="text-sm text-gray-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Reports to all 3 bureaus
                  </li>
                  <li className="text-sm text-gray-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    No credit check to apply
                  </li>
                  <li className="text-sm text-gray-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Builds revolving credit
                  </li>
                </ul>
                <a
                  href="https://meetava.sjv.io/xLxZEA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-colors text-sm text-center"
                >
                  Get Started Now
                </a>
              </div>

              {/* Kikoff */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Kikoff</h4>
                <ul className="space-y-2 mb-4">
                  <li className="text-sm text-gray-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    $0 annual fee
                  </li>
                  <li className="text-sm text-gray-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    No hard pull
                  </li>
                  <li className="text-sm text-gray-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Reports monthly
                  </li>
                </ul>
                <a
                  href="https://kikoff.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-colors text-sm text-center"
                >
                  Get Started Now
                </a>
              </div>

              {/* CreditStrong Revolv */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-bold text-gray-900 mb-3">CreditStrong Revolv</h4>
                <ul className="space-y-2 mb-4">
                  <li className="text-sm text-gray-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Credit builder + revolving
                  </li>
                  <li className="text-sm text-gray-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Low monthly cost
                  </li>
                  <li className="text-sm text-gray-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    All 3 bureaus
                  </li>
                </ul>
                <a
                  href="https://www.creditstrong.com/?transid=346adf8666034416853ba1e6c434b2cc&utm_medium=31&utm_source=Affiliate&affiliate_id=31&utm_campaign=429891"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-colors text-sm text-center"
                >
                  Get Started Now
                </a>
              </div>

              {/* Credit Builder Card */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Credit Builder Card</h4>
                <ul className="space-y-2 mb-4">
                  <li className="text-sm text-gray-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Secured option
                  </li>
                  <li className="text-sm text-gray-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Graduate to unsecured
                  </li>
                  <li className="text-sm text-gray-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Rewards potential
                  </li>
                </ul>
                <a
                  href="https://www.creditbuildercard.com/mesagroupconsulting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-colors text-sm text-center"
                >
                  Get Started Now
                </a>
              </div>
            </div>

            {/* Revolving Credit Info Box */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-8 border border-amber-200">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">?</span>
                    What They Are
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Specialized accounts that report as revolving credit to all three bureaus—with no credit check required.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">⚙</span>
                    How They Work
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    You sign up, the account reports as a $2,500-$10,000 credit line on your report. You make small purchases or payments monthly, and positive payment history builds automatically.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</span>
                    Key Benefits
                  </h4>
                  <ul className="space-y-2">
                    <li className="text-gray-700 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      No hard inquiry or credit check
                    </li>
                    <li className="text-gray-700 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      Instant approval
                    </li>
                    <li className="text-gray-700 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      Reports to all three bureaus
                    </li>
                    <li className="text-gray-700 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      Credit limits from $2,500 to $10,000+
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Installment Loan Builders - Hardcoded */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FileText className="w-6 h-6 text-amber-600" />
              Installment Loan Builders
            </h3>
            <p className="text-gray-700 mb-6 max-w-4xl">
              Installment loans demonstrate your ability to manage fixed payments over time. Credit builder loans report positive payment history to credit bureaus while helping you save money.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

              {/* CreditStrong Loans */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-bold text-gray-900 mb-3">CreditStrong Loans</h4>
                <ul className="space-y-2 mb-4">
                  <li className="text-sm text-gray-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Credit builder loan
                  </li>
                  <li className="text-sm text-gray-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Reports to all 3 bureaus
                  </li>
                  <li className="text-sm text-gray-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Save while building
                  </li>
                </ul>
                <a
                  href="https://www.creditstrong.com/?transid=346adf8666034416853ba1e6c434b2cc&utm_medium=31&utm_source=Affiliate&affiliate_id=31&utm_campaign=429891"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-colors text-sm text-center"
                >
                  Get Started Now
                </a>
              </div>

              {/* Self Credit Builder */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Self Credit Builder</h4>
                <ul className="space-y-2 mb-4">
                  <li className="text-sm text-gray-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    No credit check
                  </li>
                  <li className="text-sm text-gray-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Save money as you build
                  </li>
                  <li className="text-sm text-gray-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Low monthly payments
                  </li>
                </ul>
                <a
                  href="https://self.inc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-colors text-sm text-center"
                >
                  Get Started Now
                </a>
              </div>
            </div>

            {/* Installment Loan Info Box */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-8 border border-amber-200">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-5 h-5 text-white" />
                    </div>
                    What They Are
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Credit builder loans are designed to help you establish credit history while saving money. You make monthly payments into a secured account over 6-24 months, and the lender reports your payment history to the credit bureaus.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Settings className="w-5 h-5 text-white" />
                    </div>
                    How They Work
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    You open a small loan ($500-$3,000), make monthly payments for the loan term, and the lender reports your on-time payments to credit bureaus. At the end of the term, you receive your savings (minus interest and fees).
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    Key Benefits
                  </h4>
                  <ul className="space-y-2">
                    <li className="text-gray-700 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      Build credit and savings simultaneously
                    </li>
                    <li className="text-gray-700 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      Adds installment account diversity
                    </li>
                    <li className="text-gray-700 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      Reports to all three bureaus
                    </li>
                    <li className="text-gray-700 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      Low monthly payments ($25-$150)
                    </li>
                    <li className="text-gray-700 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      Typical results visible in 3-6 months*
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Rent Reporting - Hardcoded */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Home className="w-6 h-6 text-amber-600" />
              Rent Reporting & Alternative Credit
            </h3>
            <p className="text-gray-700 mb-6 max-w-4xl">
              Your rent is likely your largest monthly expense. Rent reporting services add your on-time rent payments to your credit reports, potentially backdating months or years of positive payment history.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

              {/* RentReporters */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-bold text-gray-900 mb-3">RentReporters</h4>
                <ul className="space-y-2 mb-4">
                  <li className="text-sm text-gray-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Backdate up to 24 months
                  </li>
                  <li className="text-sm text-gray-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Reports to TransUnion
                  </li>
                  <li className="text-sm text-gray-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Fast enrollment
                  </li>
                </ul>
                <a
                  href="https://www.rentreporters.com/?clickref=1110lXs9Zs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-colors text-sm text-center"
                >
                  Get Started Now
                </a>
              </div>

              {/* Rental Kharma */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Rental Kharma</h4>
                <ul className="space-y-2 mb-4">
                  <li className="text-sm text-gray-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Reports to TransUnion
                  </li>
                  <li className="text-sm text-gray-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Past rent history
                  </li>
                  <li className="text-sm text-gray-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Monthly reporting
                  </li>
                </ul>
                <a
                  href="https://www.rentalkharma.com/partner-ecalderon/?Code=MESAGROUP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-colors text-sm text-center"
                >
                  Get Started Now
                </a>
              </div>

              {/* BoomPay */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-bold text-gray-900 mb-3">BoomPay</h4>
                <ul className="space-y-2 mb-4">
                  <li className="text-sm text-gray-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Reports to all 3 bureaus
                  </li>
                  <li className="text-sm text-gray-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Rent + utilities
                  </li>
                  <li className="text-sm text-gray-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Backdate history
                  </li>
                </ul>
                <a
                  href="https://www.boompay.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-colors text-sm text-center"
                >
                  Get Started Now
                </a>
              </div>

              {/* Experian Boost */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Experian Boost</h4>
                <ul className="space-y-2 mb-4">
                  <li className="text-sm text-gray-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    FREE service
                  </li>
                  <li className="text-sm text-gray-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Add utilities & streaming
                  </li>
                  <li className="text-sm text-gray-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Instant score update
                  </li>
                </ul>
                <a
                  href="https://www.experian.com/lp/score-boost/?conf=aff_a&pc=aff_exp_27&cc=aff_33_27_1228_6640_429891_01_213777450_eb70e093-56e4-474a-a807-01fcb94afdcc_rid175705769&ref=6fda4f17%2c21d6beda%2cn%2cn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-colors text-sm text-center"
                >
                  Get Started Now
                </a>
              </div>
            </div>

            {/* Rent Reporting Info Box */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-8 border border-amber-200">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-5 h-5 text-white" />
                    </div>
                    What They Are
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Services that report your monthly rent payments to credit bureaus, turning an expense you're already paying into credit-building history. Some services can add verified past rent payments to your credit report.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Settings className="w-5 h-5 text-white" />
                    </div>
                    How They Work
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    You connect your bank account or provide lease documentation. The service verifies your rent payments and reports them to one or more credit bureaus. Some services also report utility bills, phone bills, and subscription payments.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    Key Benefits
                  </h4>
                  <ul className="space-y-2">
                    <li className="text-gray-700 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      Add 12-24 months of verified payment history
                    </li>
                    <li className="text-gray-700 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      No new credit accounts or hard inquiries
                    </li>
                    <li className="text-gray-700 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      Average score increase varies by credit profile*
                    </li>
                    <li className="text-gray-700 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      Low monthly cost ($5-$20/month, Experian Boost is free)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Continue with original content */}
      <section className="pt-0 pb-16 md:pb-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Authorized User Strategy */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Users className="w-6 h-6 text-amber-600" />
              Authorized User Strategy (Educational)
            </h3>
            <p className="text-gray-700 mb-6 max-w-4xl">
              Some consumers explore authorized user tradelines—being added to established credit card accounts (typically 5-20+ years old) to potentially benefit from the account's positive history.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
              <p className="text-lg font-semibold text-gray-900 mb-3">Important Considerations:</p>
              <p className="text-gray-700 leading-relaxed">
                Mesa Group provides education on all legitimate credit-building strategies, including authorized user accounts. <strong>We do not sell tradelines directly.</strong> We recommend a family-first approach and understanding the significant risks involved.
              </p>
            </div>

            {/* Info Box */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-8 border border-amber-200 mb-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-5 h-5 text-white" />
                    </div>
                    What They Are
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Authorized user tradelines involve being added as an authorized user to someone else's credit card account. The account history may report to your credit file, potentially adding account age and positive payment history.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Settings className="w-5 h-5 text-white" />
                    </div>
                    How They Work
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    You can be added as an authorized user by a family member (parent, spouse) or through third-party tradeline services. Once added, the account may appear on your credit report within 30-60 days, depending on when the card issuer reports.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-5 h-5 text-white" />
                    </div>
                    Important Risks
                  </h4>
                  <ul className="space-y-2">
                    <li className="text-gray-700 flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">If the primary account holder misses payments, it negatively impacts YOUR credit</span>
                    </li>
                    <li className="text-gray-700 flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Not all card issuers report authorized users to all three bureaus</span>
                    </li>
                    <li className="text-gray-700 flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Third-party tradeline services can cost $200-$1,500+ per tradeline</span>
                    </li>
                    <li className="text-gray-700 flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Recent FICO algorithm changes have reduced the impact of purchased tradelines</span>
                    </li>
                    <li className="text-gray-700 flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">This is not a substitute for building your own primary credit history</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mesa Group's Approach */}
            <div className="bg-white rounded-xl p-8 shadow-md mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Mesa Group's Educational Approach</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Family approach first:</p>
                    <p className="text-gray-700">Being added to a parent's or spouse's card is safest and free</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Understand the risks:</p>
                    <p className="text-gray-700">This strategy has significant downsides if not done carefully</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Focus on fundamentals:</p>
                    <p className="text-gray-700">Your own payment history and credit utilization matter most long-term</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Not Sure CTA */}
          <div className="text-center bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Not Sure Where to Start?</h3>
            <CalendlyPopupButton
              text="Schedule Your Free Consultation"
              showArrow={true}
              prefillOptions={{
                utm: { source: 'website', medium: 'build_credit', campaign: 'not_sure_cta' }
              }}
            />
            <p className="text-sm text-gray-600 mt-2">or call (661) 310-3040</p>
          </div>
        </div>
      </section>

      {/* Path Chooser */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Three Proven <span className="text-[#f9c65d]">Paths</span> to Building Credit
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

                <button
                  onClick={() => openGuideModal(path.name)}
                  className="w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
                >
                  <span>Download {path.name} Guide</span>
                  <ArrowRight className="w-5 h-5 flex-shrink-0" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long Game Vision */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-8">
            Beyond the Score: Building <span className="text-[#f9c65d]">Institutional Relationships</span>
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
            5 Mistakes That <span className="text-[#f9c65d]">Cost People</span> Months of Progress
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
            <span className="text-[#f9c65d]">Add Credit Building.</span>
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
            <CalendlyPopupButton
              text="Talk to Your Advisor About Credit Building"
              showArrow={true}
              prefillOptions={{
                utm: { source: 'website', medium: 'build_credit', campaign: 'advisor_credit_building_cta' }
              }}
            />
            <CalendlyPopupButton
              text="Schedule Free Consultation"
              showArrow={true}
              className="bg-white hover:bg-gray-50 text-gray-900 font-semibold py-3 px-6 rounded-lg border-2 border-gray-300 hover:border-amber-400 transition-colors inline-flex items-center justify-center gap-2"
              prefillOptions={{
                utm: { source: 'website', medium: 'build_credit', campaign: 'free_analysis_cta' }
              }}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12">
            Common <span className="text-[#f9c65d]">Questions</span> About Building Credit
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
            Start Building <span className="text-[#f9c65d]">Relationships</span>, Not Just Scores
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
            <CalendlyPopupButton
              text="Schedule Your Free Consultation"
              showArrow={true}
              className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-lg inline-flex items-center justify-center gap-2"
              prefillOptions={{
                utm: { source: 'website', medium: 'build_credit', campaign: 'final_cta' }
              }}
            />
            <a
              href="tel:6613103040"
              className="bg-white hover:bg-gray-50 text-gray-900 font-bold py-4 px-8 rounded-lg border-2 border-gray-300 hover:border-amber-400 transition-all duration-200 text-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5 flex-shrink-0" />
              <span className="text-center">Speak with a Specialist:<br />(661) 310-3040</span>
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

      {/* GHL Form Modal for Download Guides */}
      <GHLFormModal
        isOpen={isGuideModalOpen}
        onClose={() => setIsGuideModalOpen(false)}
        formUrl={selectedGuideUrl}
        title="Download Credit Building Guide"
      />
    </div>
  );
};

export default BuildCredit;
