import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactFormSection from '@/components/ContactFormSection';
import { SEO } from '@/components/SEO';
import {
  CheckCircle, XCircle, ChevronDown, Check, DollarSign,
  TrendingUp, Briefcase, Shield, Users, Target, Clock,
  Phone, Calendar, Star, AlertTriangle, ArrowRight, ExternalLink
} from 'lucide-react';

const CALENDLY_LINK = "https://calendly.com/mesagroupconsulting/mesa-group-consulting-consultation-calendar";

const ZeroInterestBusinessFunding = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="min-h-screen bg-background font-['Inter',sans-serif]">
      <SEO
        title="0% Business Funding | $50K–$250K | No Collateral | Mesa Group Consulting"
        description="Access $50,000 to $250,000+ in 0% interest business funding with no collateral, no tax returns, and no personal guarantees. Three support levels available."
        canonicalUrl="/zero-interest-business-funding"
      />
      <Header />
      <HeroSection />
      <QualificationForm />
      <WhatHappensNext />
      <WhyChooseMesa />
      <HowItWorks />
      <TimelineSection />
      <ComparisonSection />
      <IndustryUseCases />
      <TestimonialsSection />
      <StrategyGapSection />
      <ThreeTiers />
      <TierDetails />
      <QualificationSection />
      <FAQSection />
      <EmotionalHook />
      <FinalCTA />
      <ContactFormSection />
      <Footer />
    </div>
  );
};

export default ZeroInterestBusinessFunding;

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-white via-amber-50 to-white py-20 px-6 lg:py-28">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-amber-100 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-6 border-2 border-amber-300">
          <DollarSign className="w-4 h-4" />
          0% Interest Business Funding
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Access $50,000 to $250,000+ in 0% Business Funding Without Collateral, Tax Returns, or Personal Guarantees
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
          Most business owners have access to $50K–$250K in 0% capital but don't know how to get it. We show you the exact strategy, then you choose how much support you want.
        </p>

        <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
          Most business owners don't realize they're sitting on $50K–$250K in accessible capital. Not through banks. Not through investors. Through strategic 0% business credit that requires no collateral, no business tax returns, and no equity giveaway.
          <br /><br />
          The difference between $15K and $150K isn't your credit score. It's knowing the strategy. We show you exactly how to access it, whether you want the roadmap, coaching support, or white-glove service where we handle everything.
        </p>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-10">
          {[
            { stat: '$50K+', label: 'Average Funding' },
            { stat: '2,500+', label: 'Lives Changed' },
            { stat: '90 Days', label: 'Average Timeline' },
          ].map(({ stat, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#f9c65d]">{stat}</div>
              <div className="text-sm text-gray-600 mt-1">{label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <a
            href="#qualification-form"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-10 py-4"
          >
            See If You Qualify →
          </a>
          <a href="tel:6613103040" className="text-gray-700 font-semibold hover:text-[#bb9446] transition-colors">
            Or call us: (661) 310-3040
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-4">
          {[
            'No Collateral Required',
            'No Business Tax Returns',
            '100% Satisfaction Rate',
            '0% Interest for 12–21 Months',
          ].map((badge) => (
            <div key={badge} className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
              <span>{badge}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500">Hablamos Español &nbsp;|&nbsp; Assi Punjabi Bolde Haan</p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   QUALIFICATION FORM (GHL Survey embed)
───────────────────────────────────────────── */
function QualificationForm() {
  return (
    <section id="qualification-form" className="py-16 px-6 bg-gradient-to-br from-amber-50 to-white">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-amber-200 overflow-hidden">
          <div className="bg-amber-400 px-8 py-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900">Fill Out This Form to Get Started</h2>
            <p className="text-gray-800 mt-1 font-medium">700+ Credit Score Required</p>
            <p className="text-gray-700 text-sm">Applying Will Not Impact Your Credit</p>
          </div>
          <div className="p-6">
            <iframe
              src="https://link.mesagroupconsulting.com/widget/survey/FIkq2SkzWrx0Ylx8xp9w"
              style={{ border: 'none', width: '100%', minHeight: '500px' }}
              scrolling="no"
              id="FIkq2SkzWrx0Ylx8xp9w"
              title="0% Business Funding Qualification"
            />
            <p className="text-center text-sm text-gray-600 mt-4 flex items-center justify-center gap-2">
              <span>✍</span>
              Response From One of Our Funding Strategists Within 24 Hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   WHAT HAPPENS NEXT
───────────────────────────────────────────── */
function WhatHappensNext() {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
          What Happens After You Submit?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Clock,
              time: 'Within 1 Hour',
              desc: 'Confirmation email with next steps',
            },
            {
              icon: Phone,
              time: 'Within 24 Hours',
              desc: 'A Business Funding Strategist reviews your information and contacts you',
            },
            {
              icon: Target,
              time: 'During Your Call',
              desc: 'We assess where you are and create a clear path forward. If you qualify now, we show you your options. If not, we tell you what to optimize.',
            },
          ].map(({ icon: Icon, time, desc }) => (
            <div key={time} className="bg-gradient-to-br from-light to-background rounded-xl p-6 shadow-md text-center">
              <Icon className="w-10 h-10 text-[#ECC169] mx-auto mb-3" />
              <div className="font-bold text-gray-900 mb-2">{time}</div>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 mt-6 text-sm">
          <strong>Your Path Forward:</strong> Whether you're ready today or need 3–6 months to build qualification, we're here to guide you.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   WHY CHOOSE MESA GROUP
───────────────────────────────────────────── */
function WhyChooseMesa() {
  const cards = [
    {
      icon: DollarSign,
      title: 'Access Up to $250,000 at 0% Interest',
      body: 'Get substantial business funding at zero interest for 12–21 months. No collateral. No personal guarantees. No equity required.',
    },
    {
      icon: Target,
      title: 'Strategic Application Process',
      body: 'We don\'t just tell you to "apply for credit cards." We provide the proven strategy that gets you 3–7x more funding than DIY approaches.',
    },
    {
      icon: Users,
      title: 'Three Levels of Support',
      body: 'Want the roadmap? Coaching? Full white-glove service? We help business owners at every support level, from $1,997 to done-for-you.',
    },
    {
      icon: TrendingUp,
      title: 'Build Business Credit While You Grow',
      body: 'Access capital now and strengthen your business credit profile for future funding rounds. This is a repeatable system.',
    },
    {
      icon: Shield,
      title: 'No Business Tax Returns Required',
      body: 'Unlike traditional loans, 0% business credit doesn\'t require business tax returns, revenue verification, or years of financial history.',
    },
    {
      icon: Star,
      title: 'Expert Guidance You Can Trust',
      body: 'Work with strategists who genuinely want you to succeed. We\'re here to help you access capital, not pressure you into services you don\'t need.',
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-light to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Business Owners Trust Mesa Group for <span className="text-[#f9c65d]">0% Funding</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've helped 2,500+ clients build better financial futures through credit optimization, business funding, and honest guidance.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <div className="inline-block bg-[#bb9446]/10 p-3 rounded-lg mb-4">
                <Icon className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   HOW IT WORKS
───────────────────────────────────────────── */
function HowItWorks() {
  const steps = [
    {
      num: '1',
      title: 'Fundability Assessment',
      body: 'We pull your 3-bureau credit report and analyze your actual qualification tier. No generic estimates. We tell you exactly what funding amount you qualify for and why.',
    },
    {
      num: '2',
      title: 'Custom Strategy Development',
      body: 'We build your personalized roadmap: which banks to target, which to avoid, what sequence maximizes your approvals, and what timeline makes sense for YOUR situation.',
    },
    {
      num: '3',
      title: 'Strategic Execution',
      body: 'Whether you execute the strategy yourself (Blueprint), we coach you through it (Guided Journey), or we handle everything (Full-Service), you\'re using the same proven system that gets our clients $50K+ vs $15K–$25K DIY.',
    },
    {
      num: '4',
      title: 'Funding Access & Optimization',
      body: 'Access your 0% capital and deploy it for growth. We also show you how to position your credit profile for future funding rounds 12–18 months later. This is a repeatable system.',
    },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Getting 0% Capital Is Easier Than You Think
          </h2>
          <p className="text-xl text-muted-foreground">Follow our proven 4-step process to access the funding you already qualify for.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {steps.map(({ num, title, body }) => (
            <div key={num} className="relative">
              <div className="bg-card rounded-2xl p-6 shadow-xl h-full">
                <div className="w-10 h-10 bg-[#ECC169] rounded-full flex items-center justify-center text-xl font-bold text-gray-900 shadow-md mb-4">
                  {num}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href="#qualification-form"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-lg font-bold px-10 py-4"
          >
            See If You Qualify →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   90-DAY TIMELINE
───────────────────────────────────────────── */
function TimelineSection() {
  const phases = [
    {
      weeks: 'Week 1–2',
      title: 'Foundation',
      items: ['Complete fundability audit', 'Build custom strategy roadmap', '90-minute strategy session', 'Banking relationship setup begins'],
      color: 'border-amber-400 bg-amber-50',
    },
    {
      weeks: 'Week 3–8',
      title: 'Relationship Building',
      items: ['Open strategic banking accounts', 'Deposit and season accounts', 'Credit profile optimization (if needed)', 'Prepare for application phase'],
      color: 'border-blue-400 bg-blue-50',
    },
    {
      weeks: 'Week 9–12',
      title: 'Round 1 Applications',
      items: ['Execute primary applications strategically', 'Handle any reconsideration calls', 'Begin receiving first approvals', 'Monitor credit profile changes'],
      color: 'border-green-400 bg-green-50',
    },
    {
      weeks: 'Week 13–16',
      title: 'Round 2–3 Expansion',
      items: ['Execute secondary applications', 'Leverage improved credit profile', 'Maximize approval amounts', 'Push for credit limit increases'],
      color: 'border-purple-400 bg-purple-50',
    },
    {
      weeks: 'Week 17+',
      title: 'Fund Access & Optimization',
      items: ['Access your 0% capital', 'Deploy funds for business growth', 'Position for future funding rounds', 'Celebrate your success'],
      color: 'border-[#bb9446] bg-amber-100',
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-light to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Your 90-Day Funding Timeline</h2>
          <p className="text-xl text-muted-foreground">Here's what happens from strategy to capital access.</p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {phases.map(({ weeks, title, items, color }) => (
            <div key={weeks} className={`rounded-xl p-5 border-2 ${color} shadow-md`}>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">{weeks}</div>
              <h3 className="text-base font-bold text-gray-900 mb-3">{title}</h3>
              <ul className="space-y-1.5">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-1.5 text-xs text-gray-700">
                    <Check className="w-3 h-3 text-green-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-6">
          Timeline may vary based on your starting point and tier selection. Most clients complete the process in 90–120 days.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   COMPARISON: 0% vs TRADITIONAL
───────────────────────────────────────────── */
function ComparisonSection() {
  const rows = [
    ['Requires 2+ years business tax returns', 'No business tax returns required'],
    ['Collateral or personal guarantee required', 'No collateral, no personal guarantees'],
    ['8–14% interest rates', '0% interest for 12–21 months'],
    ['3–6 month approval process', '60–90 days to funding'],
    ['Rigid repayment schedules', 'Flexible 0% promotional periods'],
    ['One funding source', 'Multiple strategic approvals'],
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-10 text-center">
          0% Business Funding vs Traditional Financing
        </h2>
        <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200">
          <table className="w-full">
            <thead>
              <tr>
                <th className="bg-gray-100 px-6 py-4 text-left font-bold text-gray-700 border-r border-gray-200">Traditional Bank Loans</th>
                <th className="bg-amber-400 px-6 py-4 text-left font-bold text-gray-900">0% Business Funding with Mesa Group</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([traditional, mesa], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 text-gray-600 text-sm border-r border-gray-200">
                    <div className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      {traditional}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-800 text-sm font-medium">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      {mesa}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-center text-xl font-bold text-gray-900 mt-6">You already qualify. You just need the strategy.</p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   INDUSTRY USE CASES
───────────────────────────────────────────── */
function IndustryUseCases() {
  const cases = [
    {
      industry: 'Truck Drivers & Owner-Operators',
      challenge: 'Need to purchase or upgrade truck, cover maintenance, or handle operating expenses without eating into already-thin margins.',
      uses: ['Purchase newer truck or upgrade existing equipment', 'Cover major repairs without depleting emergency fund', 'Pay for fuel, permits, and insurance during slow seasons', 'Bridge cash flow gaps between loads'],
      funding: '$50K–$100K',
      payoff: 'Revenue from hauling pays off balance before 0% period ends',
    },
    {
      industry: 'Startups (6–12 Months Old)',
      challenge: 'Need working capital to scale but don\'t have years of financial history for traditional loans.',
      uses: ['Hire first employees without depleting runway', 'Purchase inventory for initial product launches', 'Cover marketing and customer acquisition costs', 'Build operational reserves while proving business model'],
      funding: '$35K–$75K',
      payoff: 'Customer revenue scales as business grows, pays off capital before 0% ends',
    },
    {
      industry: 'E-Commerce & Online Sellers',
      challenge: 'Need to purchase inventory upfront but don\'t get paid until products sell.',
      uses: ['Purchase seasonal inventory at bulk discounts', 'Scale product lines without cash flow constraints', 'Cover Amazon FBA fees and advertising costs', 'Expand into new marketplaces or product categories'],
      funding: '$75K–$150K',
      payoff: 'Inventory sells, revenue comes in, pay off balance before 0% ends',
    },
    {
      industry: 'Service-Based Businesses',
      challenge: 'Need to invest in growth but operate on net-30 or net-60 payment terms from clients.',
      uses: ['Hire additional team members to scale capacity', 'Purchase equipment or technology upgrades', 'Cover payroll during client payment delays', 'Market and acquire new clients without cash constraints'],
      funding: '$50K–$100K',
      payoff: 'Client payments arrive, pay down balance progressively over 12–18 months',
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-light to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">How Business Owners Use 0% Funding</h2>
          <p className="text-xl text-muted-foreground">Real strategies from real businesses across different industries.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {cases.map(({ industry, challenge, uses, funding, payoff }) => (
            <div key={industry} className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-foreground mb-2">{industry}</h3>
              <p className="text-sm text-amber-700 italic mb-4"><strong>Challenge:</strong> {challenge}</p>
              <ul className="space-y-1.5 mb-4">
                {uses.map((use) => (
                  <li key={use} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    {use}
                  </li>
                ))}
              </ul>
              <div className="bg-amber-50 rounded-lg p-3 border border-amber-200 text-sm">
                <div className="font-bold text-gray-900">Typical Funding: <span className="text-[#bb9446]">{funding}</span></div>
                <div className="text-gray-600 mt-1"><strong>Payoff Strategy:</strong> {payoff}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 mt-8 max-w-3xl mx-auto">
          Regardless of your industry, 0% capital gives you the flexibility to invest in growth without the burden of monthly loan payments eating into your margins.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   TESTIMONIALS (video placeholders)
───────────────────────────────────────────── */
function TestimonialsSection() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Real Business Owners, Real Results</h2>
          <p className="text-xl text-muted-foreground">Here's what happens when you use a proven strategy instead of random applications.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { src: '/mgc-zero-percent-interest-funding-videos/compressed/Funding Review 1 (1).webm', label: 'Client Review #1' },
            { src: '/mgc-zero-percent-interest-funding-videos/compressed/Funding Review 2 V2 (1).webm', label: 'Client Review #2' },
            { src: '/mgc-zero-percent-interest-funding-videos/compressed/Funding Review 3 (1).webm', label: 'Client Review #3' },
            { src: '/mgc-zero-percent-interest-funding-videos/compressed/Funding Review 4 (1).webm', label: 'Client Review #4' },
          ].map(({ src, label }) => (
            <div key={src} className="rounded-2xl overflow-hidden shadow-lg bg-black">
              <video
                controls
                preload="metadata"
                className="w-full aspect-video object-cover"
                aria-label={label}
              >
                <source src={src} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-[#3e3e3e] to-[#2c2c2c] rounded-2xl py-6 px-8">
          <div className="flex flex-wrap justify-center gap-8 text-white text-sm text-center">
            {[
              '2,500+ Lives Changed',
              '$50K+ Avg Client Funding',
              '90-Day Avg Timeline',
              'Trusted by Business Owners Nationwide',
            ].map((stat) => (
              <div key={stat} className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#f9c65d] fill-[#f9c65d]" />
                {stat}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   STRATEGY GAP SECTION
───────────────────────────────────────────── */
function StrategyGapSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-amber-50 to-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
          Why Most Business Owners Get $15K When They Qualify for $150K
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
          It's not your credit score. It's not your business. It's the strategy you don't know exists.
        </p>
        <div className="prose prose-lg max-w-none text-gray-700 mb-10 space-y-4">
          <p>You Google "business credit cards." Apply to a few. Maybe get $5K here, $8K there. Total? $15K if you're lucky. You think that's all you qualify for.</p>
          <p><strong>But here's what actually happened:</strong></p>
          <p>Banks don't advertise their underwriting criteria. The application sequence that maximizes approvals? Not public. The relationship strategies that increase approval odds by 300%? Insider knowledge. The reconsideration approaches that turn 60–70% of declines into approvals? You won't find those on Google.</p>
          <p>This isn't your fault. The information asymmetry is intentional.</p>
          <p className="font-semibold text-gray-900">That's the gap between $15K (going alone) and $50K+ (with strategy).</p>
        </div>

        <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200 mb-8">
          <table className="w-full">
            <thead>
              <tr>
                <th className="bg-gray-100 px-6 py-4 text-left font-bold text-gray-700 border-r border-gray-200">Without Strategy</th>
                <th className="bg-amber-400 px-6 py-4 text-left font-bold text-gray-900">With Strategic Approach</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['$15K–$25K average', '$50K+ average'],
                ['Random applications', 'Proven methodology'],
                ['Multiple denials', 'Strategic approvals'],
                ['6+ months trial-and-error', '60–90 days with roadmap'],
              ].map(([without, with_], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-3 text-gray-600 text-sm border-r border-gray-200">
                    <div className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-400" />{without}</div>
                  </td>
                  <td className="px-6 py-3 text-gray-800 text-sm font-medium">
                    <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" />{with_}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-2xl p-8 text-white text-center">
          <p className="text-lg leading-relaxed mb-4">
            Imagine $150,000 at 0% right now. That equipment upgrade? Funded. That inventory buy? Funded. Those new hires? Funded. The working capital cushion? Funded.
          </p>
          <p className="text-amber-300 font-semibold text-xl">The capital exists. The strategy works. Now choose: Do it yourself, get coaching, or have us handle it?</p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   THREE TIERS OVERVIEW
───────────────────────────────────────────── */
function ThreeTiers() {
  const tiers = [
    {
      name: 'The Strategy Builder',
      tag: null,
      price: '$1,997',
      approach: 'DIY with Expert Roadmap',
      timeline: '6-Week Intensive',
      perfect: 'Self-starters who can execute independently',
      cta: 'Get My Strategy →',
    },
    {
      name: 'The Guided Journey',
      tag: 'MOST POPULAR',
      price: '$3,500',
      approach: 'Done-With-You Coaching',
      timeline: '6-Month Partnership',
      perfect: 'Business owners who want guidance & accountability',
      cta: 'Start My Journey →',
    },
    {
      name: 'The Full-Service Experience',
      tag: 'LIMITED: 5/month',
      price: '$500 + 10% of funded',
      approach: 'Done-For-You Execution',
      timeline: '90–120 Days Avg',
      perfect: 'Busy executives who value time over fee',
      cta: 'Apply Now →',
    },
  ];

  const features = [
    { label: 'Complete Fundability Audit', tier1: true, tier2: true, tier3: true },
    { label: 'Custom Application Roadmap', tier1: true, tier2: true, tier3: true },
    { label: 'Banking Strategy Guide', tier1: true, tier2: true, tier3: true },
    { label: '90-Min Strategy Session (recorded)', tier1: true, tier2: true, tier3: true },
    { label: 'Approval Optimization Strategies', tier1: true, tier2: true, tier3: true },
    { label: 'Reconsideration Approaches', tier1: true, tier2: true, tier3: true },
    { label: '2 Follow-Up Strategy Calls', tier1: true, tier2: true, tier3: true },
    { label: '12 Bi-Weekly Coaching Calls', tier1: false, tier2: true, tier3: true },
    { label: 'Real-Time Expert Support', tier1: false, tier2: true, tier3: true },
    { label: 'Application-by-Application Coaching', tier1: false, tier2: true, tier3: true },
    { label: '6-Month Expert Partnership', tier1: false, tier2: true, tier3: true },
    { label: 'We Submit All Applications', tier1: false, tier2: false, tier3: true },
    { label: 'We Manage All Bank Communications', tier1: false, tier2: false, tier3: true },
    { label: 'We Handle Reconsideration Calls', tier1: false, tier2: false, tier3: true },
    { label: 'Performance-Based Fee Structure', tier1: false, tier2: false, tier3: true },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Choose Your Level of Support</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Same proven strategy. Three levels of support. You decide what fits.
          </p>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Some business owners want the roadmap and execute independently. Some want expert coaching through the process. Some prefer white-glove execution while they focus on revenue. You choose.
          </p>
        </div>

        {/* Tier Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {tiers.map(({ name, tag, price, approach, timeline, perfect, cta }) => (
            <div key={name} className={`bg-card rounded-2xl shadow-xl border-2 overflow-hidden ${tag === 'MOST POPULAR' ? 'border-amber-400' : 'border-gray-200'}`}>
              <div className={`px-6 py-5 ${tag === 'MOST POPULAR' ? 'bg-amber-400' : 'bg-gray-100'}`}>
                {tag && <div className="text-xs font-bold mb-1">{tag === 'MOST POPULAR' ? '⭐ ' : '⚠ '}{tag}</div>}
                <div className="text-2xl font-bold text-gray-900">{name}</div>
                <div className="text-xl font-bold text-gray-800 mt-1">{price}</div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-600 mb-2"><strong>Approach:</strong> {approach}</div>
                <div className="text-sm text-gray-600 mb-2"><strong>Timeline:</strong> {timeline}</div>
                <div className="text-sm text-gray-600 mb-6 italic"><strong>Perfect for:</strong> {perfect}</div>
                <a
                  href={CALENDLY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow hover:shadow-lg transition-all duration-200 border-2 border-amber-500 font-bold px-4 py-3 text-sm"
                >
                  {cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Feature comparison table */}
        <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-left font-bold text-gray-700 border-r border-gray-200">What's Included</th>
                <th className="px-4 py-3 text-center font-bold text-gray-700 border-r border-gray-200">Strategy Builder</th>
                <th className="px-4 py-3 text-center font-bold text-amber-700 bg-amber-50 border-r border-gray-200">Guided Journey</th>
                <th className="px-4 py-3 text-center font-bold text-gray-700">Full-Service</th>
              </tr>
            </thead>
            <tbody>
              {features.map(({ label, tier1, tier2, tier3 }, i) => (
                <tr key={label} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 text-gray-700 border-r border-gray-200">{label}</td>
                  <td className="px-4 py-3 text-center border-r border-gray-200">
                    {tier1 ? <CheckCircle className="w-4 h-4 text-green-600 mx-auto" /> : <XCircle className="w-4 h-4 text-red-400 mx-auto" />}
                  </td>
                  <td className="px-4 py-3 text-center bg-amber-50/50 border-r border-gray-200">
                    {tier2 ? <CheckCircle className="w-4 h-4 text-green-600 mx-auto" /> : <XCircle className="w-4 h-4 text-red-400 mx-auto" />}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {tier3 ? <CheckCircle className="w-4 h-4 text-green-600 mx-auto" /> : <XCircle className="w-4 h-4 text-red-400 mx-auto" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-center text-sm text-gray-600 mt-6">
          Not sure which tier fits?{' '}
          <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="text-[#bb9446] font-semibold hover:underline">
            Schedule a free consultation →
          </a>{' '}
          and we'll recommend the best path for your situation.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   DETAILED TIER BREAKDOWNS
───────────────────────────────────────────── */
function TierDetails() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-light to-background">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Tier 1 */}
        <div className="bg-card rounded-2xl p-8 shadow-lg border border-gray-200">
          <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
            <div>
              <h3 className="text-3xl font-bold text-foreground">The Strategy Builder</h3>
              <p className="text-muted-foreground mt-1">Get the Complete Roadmap, Execute on Your Timeline</p>
            </div>
            <div className="text-3xl font-bold text-[#f9c65d]">$1,997</div>
          </div>
          <p className="text-gray-600 italic mb-6">For self-motivated business owners who can follow a detailed roadmap independently.</p>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Week 1–2: Complete Strategy Development</h4>
              <ul className="space-y-1.5 text-sm text-gray-700">
                {['Comprehensive 3-bureau credit analysis', 'Custom application roadmap based on YOUR profile', 'Realistic funding projections', '90-minute deep-dive strategy session (recorded)', 'Banking relationship strategies', 'Approval optimization techniques', 'Reconsideration scripts and approaches'].map(i => <li key={i} className="flex items-start gap-1.5"><Check className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />{i}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Weeks 3–4: Independent Execution</h4>
              <ul className="space-y-1.5 text-sm text-gray-700">
                {['You follow the roadmap on your timeline', 'Detailed documentation and checklists provided'].map(i => <li key={i} className="flex items-start gap-1.5"><Check className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />{i}</li>)}
                <h4 className="font-bold text-gray-900 mt-4 mb-2">Week 5–6: Strategy Support Calls</h4>
                {['Two follow-up calls to answer questions', 'Troubleshoot any challenges', 'Final preparation before execution'].map(i => <li key={i} className="flex items-start gap-1.5"><Check className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />{i}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">This Tier Makes Sense If:</h4>
              <ul className="space-y-1.5 text-sm text-gray-700 mb-4">
                {["You're highly organized and self-motivated", 'You can follow detailed strategic guidance', 'You prefer independence over ongoing support', 'You want the strategy at the lowest investment'].map(i => <li key={i} className="flex items-start gap-1.5"><CheckCircle className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />{i}</li>)}
              </ul>
              <h4 className="font-bold text-gray-900 mb-2">This Tier Does NOT Make Sense If:</h4>
              <ul className="space-y-1.5 text-sm text-gray-700">
                {['You need accountability to follow through', 'You prefer having an expert available when stuck', 'You want hand-holding through the process'].map(i => <li key={i} className="flex items-start gap-1.5"><XCircle className="w-3 h-3 text-red-400 mt-0.5 flex-shrink-0" />{i}</li>)}
              </ul>
            </div>
          </div>
          <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg border-2 border-amber-500 font-bold px-8 py-3 transition-all">Get My Strategy →</a>
        </div>

        {/* Tier 2 */}
        <div className="bg-card rounded-2xl p-8 shadow-xl border-2 border-amber-400">
          <div className="flex items-start justify-between flex-wrap gap-4 mb-2">
            <div>
              <div className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full mb-2">⭐ MOST POPULAR</div>
              <h3 className="text-3xl font-bold text-foreground">The Guided Journey</h3>
              <p className="text-muted-foreground mt-1">Expert Coaching Every Step of the Way</p>
            </div>
            <div className="text-3xl font-bold text-[#f9c65d]">$3,500</div>
          </div>
          <p className="text-gray-600 italic mb-6">For business owners who want expert guidance, accountability, and support through the entire process.</p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Month 1: Foundation</h4>
              <ul className="space-y-1.5 text-sm text-gray-700 mb-4">
                {['Complete strategy development and credit analysis', 'Credit optimization coaching if needed', 'Banking strategy implementation guidance'].map(i => <li key={i} className="flex items-start gap-1.5"><Check className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />{i}</li>)}
              </ul>
              <h4 className="font-bold text-gray-900 mb-2">Months 2–5: Execution Partnership</h4>
              <ul className="space-y-1.5 text-sm text-gray-700 mb-4">
                {['12 bi-weekly coaching calls throughout the process', 'Real-time support (Mon–Fri, 24-hour response)', 'Application-by-application guidance', 'Reconsideration coaching when needed', 'Strategy adjustments based on real-time results', 'Credit optimization as profile improves'].map(i => <li key={i} className="flex items-start gap-1.5"><Check className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />{i}</li>)}
              </ul>
              <h4 className="font-bold text-gray-900 mb-2">Month 6: Maximization</h4>
              <ul className="space-y-1.5 text-sm text-gray-700">
                {['Final application strategies', 'Limit increase coaching', 'Fund access optimization', 'Long-term positioning strategy'].map(i => <li key={i} className="flex items-start gap-1.5"><Check className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />{i}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">This Tier Makes Sense If:</h4>
              <ul className="space-y-1.5 text-sm text-gray-700 mb-4">
                {['You want expert guidance through the entire process', 'You value accountability', 'You want someone to call when you hit roadblocks', 'You want the highest probability of success'].map(i => <li key={i} className="flex items-start gap-1.5"><CheckCircle className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />{i}</li>)}
              </ul>
              <h4 className="font-bold text-gray-900 mb-2">This Tier Does NOT Make Sense If:</h4>
              <ul className="space-y-1.5 text-sm text-gray-700">
                {["We don't submit applications (you execute with our coaching)", "We don't make calls on your behalf (we give you the approach)"].map(i => <li key={i} className="flex items-start gap-1.5"><XCircle className="w-3 h-3 text-red-400 mt-0.5 flex-shrink-0" />{i}</li>)}
              </ul>
            </div>
          </div>
          <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg border-2 border-amber-500 font-bold px-8 py-3 transition-all">Start My Journey →</a>
        </div>

        {/* Tier 3 */}
        <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-2xl p-8 shadow-lg text-white">
          <div className="flex items-start justify-between flex-wrap gap-4 mb-2">
            <div>
              <div className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">⚠ LIMITED: 5 CLIENTS/MONTH MAX</div>
              <h3 className="text-3xl font-bold">The Full-Service Experience</h3>
              <p className="text-gray-300 mt-1">We Handle Everything While You Focus on Your Business</p>
            </div>
            <div className="text-2xl font-bold text-[#f9c65d]">$500 + 10% of funded</div>
          </div>
          <p className="text-gray-300 italic mb-6">For busy executives who value their time more than the fee and want results without time investment.</p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold text-amber-300 mb-2">Complete White-Glove Execution:</h4>
              <ul className="space-y-1.5 text-sm text-gray-300">
                {['We submit all applications on your behalf', 'We manage all banking relationships', 'We handle all reconsideration calls', 'We coordinate all bank communications', 'You receive weekly updates, we do the work'].map(i => <li key={i} className="flex items-start gap-1.5"><Check className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />{i}</li>)}
              </ul>
              <h4 className="font-bold text-amber-300 mt-4 mb-2">Performance-Based Pricing:</h4>
              <ul className="space-y-1.5 text-sm text-gray-300">
                {['$500 upfront: strategy development and setup (credited toward success fee)', 'We execute the entire process for you', 'When funding is secured, you pay 10% of funded amount', '$500 is credited against the success fee'].map(i => <li key={i} className="flex items-start gap-1.5"><Check className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />{i}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-amber-300 mb-2">Pricing Examples:</h4>
              <div className="space-y-2 text-sm text-gray-300 mb-4">
                <p>We secure $50K → $4,500 final payment (Total: $5,000)</p>
                <p>We secure $100K → $9,500 final payment (Total: $10,000)</p>
                <p>We secure $150K → $14,500 final payment (Total: $15,000)</p>
                <p className="text-amber-300 font-semibold">If we don't secure funding: you only pay the $500 strategy fee.</p>
              </div>
              <h4 className="font-bold text-amber-300 mb-2">This Tier Makes Sense If:</h4>
              <ul className="space-y-1.5 text-sm text-gray-300">
                {["You're doing $500K–$1M+ annual revenue", 'Your time is worth $200–$500+ per hour', 'You prefer delegation over DIY', 'You want zero time investment with maximum results'].map(i => <li key={i} className="flex items-start gap-1.5"><CheckCircle className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />{i}</li>)}
              </ul>
            </div>
          </div>
          <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg border-2 border-amber-500 font-bold px-8 py-3 transition-all">Apply for Full-Service →</a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   QUALIFICATION CHECKLIST
───────────────────────────────────────────── */
function QualificationSection() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Do You Qualify for 0% Business Funding?</h2>
          <p className="text-xl text-muted-foreground">Most business owners qualify if they meet these basic requirements.</p>
        </div>
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 border-2 border-amber-200 shadow-lg mb-8">
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              'Personal credit score 700+ (across all three bureaus)',
              'LLC or Corporation formed (or willing to form one)',
              'Business operating 6+ months (newer businesses considered)',
              '$5K–$10K available for temporary strategic deposits',
              'No recent bankruptcies (within 24 months)',
              'No active collections (within 12 months)',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
          </div>
          <div className="border-t border-amber-300 pt-6">
            <h3 className="font-bold text-gray-900 mb-3">Quick Self-Assessment. Count How Many You Checked:</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p className="flex items-start gap-2"><span className="text-green-600 font-bold">5–6 checks:</span> You're very likely qualified. Fill out the form above or call us.</p>
              <p className="flex items-start gap-2"><span className="text-amber-600 font-bold">3–4 checks:</span> You might qualify with adjusted expectations. Call us for an honest assessment.</p>
              <p className="flex items-start gap-2"><span className="text-red-500 font-bold">0–2 checks:</span> You're not ready yet. Contact us and we'll tell you what to fix first and when you're ready.</p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-gray-600 mb-4">Not sure if you qualify? Fill out our qualification form or call us. We'll assess your situation honestly and tell you exactly where you stand, even if that means coming back in 6 months after optimizing your credit. We help people first. Always.</p>
          <a
            href="#qualification-form"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-lg font-bold px-10 py-4"
          >
            Check Your Qualification Status →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FAQ
───────────────────────────────────────────── */
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: 'What types of businesses qualify for 0% funding?', a: 'We work with startups, established companies, e-commerce, brick-and-mortar, service-based businesses, truck drivers, owner-operators, and more. As long as you have a legitimate business entity (LLC or Corp) and 700+ personal credit, you likely qualify.' },
    { q: 'How much funding can I get?', a: 'Funding typically ranges from $50K to $250K depending on your credit profile and business structure. Our clients average $50K+, while DIY business owners average $15K–$25K. The difference is strategy.' },
    { q: 'Do I need collateral or business tax returns?', a: 'No! That\'s the beauty of 0% business credit. No collateral. No business tax returns. No revenue verification. No personal guarantees. You keep 100% ownership of your business.' },
    { q: 'How long does this take?', a: 'Average timeline is 90–120 days from start to funding. This includes strategic relationship building, application execution, and fund access. Much faster than traditional bank loans (3–6 months).' },
    { q: 'Will this affect my personal credit?', a: 'Your personal credit is reviewed during qualification, but this builds your business credit profile. The reporting benefits your business credit, not your personal credit.' },
    { q: 'What if I have limited business history or less-than-perfect credit?', a: 'Minimum requirement is 700+ personal credit. If you\'re below that, we\'ll tell you what to optimize and when you\'re ready for funding.' },
    { q: "What's the difference between the three support tiers?", a: 'The strategy is identical. You\'re choosing support level: Strategy Builder ($1,997): we give you the complete roadmap, you execute solo. Guided Journey ($3,500): we coach you through execution for 6 months. Full-Service ($500 + 10%): we handle everything while you focus on business.' },
    { q: "Can't I just Google this and figure it out myself?", a: 'You can try. You\'ll find generic YouTube videos, Reddit threads with conflicting info, and blog posts from companies trying to sell you something. What you WON\'T find: which specific banks to target based on YOUR 3-bureau profile, current underwriting criteria, the exact sequence that maximizes YOUR approvals, or real-time support when banks push back. The gap between Google and us is worth $50K–$100K to your business.' },
    { q: 'What happens after the 0% promotional period ends?', a: 'You have three options: pay off the balance before 0% ends (ideal), transfer to another 0% card (extends the period), or keep the balance at regular APR (not recommended). Most business owners use 0% capital for growth that pays itself off.' },
    { q: 'Can I do this again in the future?', a: 'Yes! This is a repeatable system. After 12–18 months, your business credit profile is actually stronger, and you can execute Round 2 funding for additional capital.' },
    { q: "What's the \"10% of funded\" fee for Full-Service?", a: 'Performance-based pricing that protects both of us. You pay $500 upfront. We execute everything. When we secure funding, you pay 10% of the funded amount minus your $500 credit. If we don\'t secure funding, you only pay the $500 strategy fee.' },
    { q: 'Why should I trust you?', a: '2,500+ clients helped since 2023. $50K+ average client funding (vs $15K–$25K DIY). Physical office at 5001 California Ave Suite 219, Bakersfield. 15+ years combined banking industry experience. Our founder had a 490 credit score and built this on transparency. We earn trust by helping everybody, not by selling everybody.' },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-light to-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Common <span className="text-[#f9c65d]">Questions</span> About 0% Business Funding
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-amber-300 transition-colors duration-300">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-gray-900 pr-4">{q}</span>
                <ChevronDown className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-96' : 'max-h-0'}`}>
                <div className="px-6 pb-5 pt-2">
                  <p className="text-gray-700 leading-relaxed text-sm">{a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   EMOTIONAL HOOK
───────────────────────────────────────────── */
function EmotionalHook() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c]">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          What Will You Look Back On <span className="text-[#f9c65d]">Five Years From Now?</span>
        </h2>
        <div className="space-y-4 text-lg text-gray-300 leading-relaxed mb-10">
          <p>Five years from now, you'll look back on today as the day everything changed. The day you stopped accepting $15K when you qualified for $150K. The day you learned the strategy that the wealthy use but never share. The day you leveled the playing field.</p>
          <p>Or you'll look back and wonder, "What if I had just filled out that form?"</p>
          <p className="text-amber-300 font-bold text-xl">The capital exists. The strategy works. The only question is: What will you do next?</p>
        </div>
        <a
          href="#qualification-form"
          className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-12 py-5"
        >
          See If You Qualify →
        </a>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FINAL CTA
───────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#FFFBEC] from-40% to-[#FFECD7]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12">
          {[
            '2,500+ Lives Changed Since 2023',
            '$50K+ Average Client Funding',
            '100% Satisfaction Rate',
            'No Collateral Required',
            '0% Interest for 12–21 Months',
            'Trusted by Business Owners Nationwide',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ready to Access 0% Capital for Your Business?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join 2,500+ clients who've accessed the funding they already qualified for. No collateral. No tax returns. No equity required.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <a
            href="#qualification-form"
            className="flex flex-col items-center bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 font-bold px-4 py-5 text-center"
          >
            <ArrowRight className="w-5 h-5 mb-2" />
            <span className="font-bold">Fill Out Qualification Form</span>
            <span className="text-xs text-gray-700 mt-1">2-minute form, 24-hour strategist response</span>
          </a>
          <a
            href={CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-white hover:bg-amber-50 text-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-400 font-bold px-4 py-5 text-center"
          >
            <Calendar className="w-5 h-5 mb-2" />
            <span className="font-bold">Schedule Free Consultation</span>
            <span className="text-xs text-gray-600 mt-1">30-minute call, honest assessment</span>
          </a>
          <a
            href="tel:6613103040"
            className="flex flex-col items-center bg-white hover:bg-amber-50 text-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-400 font-bold px-4 py-5 text-center"
          >
            <Phone className="w-5 h-5 mb-2" />
            <span className="font-bold">Call Us: (661) 310-3040</span>
            <span className="text-xs text-gray-600 mt-1">Talk to a Business Funding Strategist now</span>
          </a>
        </div>

        <div className="text-center text-sm text-gray-600">
          <p>Not sure if you qualify? We'll assess your situation honestly and show you the best path forward, even if that means optimizing your credit first.</p>
          <p className="mt-2 text-gray-500">Hablamos Español &nbsp;|&nbsp; Assi Punjabi Bolde Haan</p>
        </div>
      </div>
    </section>
  );
}
