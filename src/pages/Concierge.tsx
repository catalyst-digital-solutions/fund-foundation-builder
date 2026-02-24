import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactFormSection from '@/components/ContactFormSection';
import { SEO } from '@/components/SEO';
import {
  MessageSquare, Phone, Shield, Users, BookOpen, Briefcase,
  CheckCircle, XCircle, ChevronDown, ExternalLink, Check,
  Calendar, Target, TrendingUp, Star, Award
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PoweredBySmartCredit from '@/components/PoweredBySmartCredit';

const SMARTCREDIT_LINK = "https://www.smartcredit.com/join/?PID=53366&planType=PREMIUM";
const CALENDLY_LINK = "https://calendly.com/mesagroupconsulting/mesa-group-consulting-consultation-calendar";

const Concierge = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="min-h-screen bg-background font-['Inter',sans-serif]">
      <SEO
        title="Mesa Financial Concierge | Expert Financial Guidance | Mesa Group Consulting"
        description="Get expert credit coaching, business funding guidance, weekly live calls, and 24/7 community support. Community tier included FREE with Mesa x SmartCredit subscription."
        canonicalUrl="/concierge"
      />
      <Header />
      <HeroSection />
      <WhyPartnershipMatters />
      <EmotionalHook />
      <WhatYouGet />
      <FeatureBlocks />
      <ComparisonTable />
      <WhatIfSection />
      <HowToStart />
      <WhyDifferent />
      <MembershipTiers />
      <FAQSection />
      <WhichTier />
      <FinalCTA />
      <ContactFormSection />
      <Footer />
    </div>
  );
};

export default Concierge;

function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-white via-amber-50 to-white py-20 px-6 lg:py-28">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-amber-100 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-4 border-2 border-amber-300">
          <Award className="w-4 h-4" />
          PREMIER FINANCIAL PARTNERSHIP
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Your Personal <span className="text-[#f9c65d]">Financial Concierge</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
          The white-glove financial partnership you've been searching for. Expert advisors. Proven strategies. A community that understands. Whether you're building personal credit or growing a business, this is the partnership you deserve.
        </p>

        {/* Free Access Callout */}
        <div className="inline-block bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-500 rounded-2xl px-8 py-5 mb-8 shadow-lg">
          <div className="text-2xl font-bold text-gray-900 mb-1">
            FREE ACCESS
          </div>
          <div className="text-gray-700 text-base">
            with an active <strong>Mesa x SmartCredit</strong> subscription
          </div>
          <div className="mt-2 text-sm text-gray-600">
            Don't have one?{' '}
            <Link to="/credit-monitoring" className="text-green-700 font-semibold underline hover:text-green-900">
              Get yours here →
            </Link>
          </div>
        </div>

        {/* Quick Benefit Icons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-gray-700">
          {[
            { icon: MessageSquare, label: 'Expert Guidance' },
            { icon: Phone, label: 'Weekly Live Calls' },
            { icon: Shield, label: '$1M Insurance' },
            { icon: Users, label: 'Private Community' },
            { icon: BookOpen, label: 'Complete Education' },
            { icon: Briefcase, label: 'Business Funding Guidance' },
            { icon: Check, label: 'Cancel Anytime' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-1.5 bg-white rounded-full px-3 py-1.5 border border-amber-200 shadow-sm">
              <Icon className="w-4 h-4 text-[#bb9446]" />
              {label}
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-10">
          {[
            '2,500+ Lives Changed Since 2023',
            'Included FREE with Mesa x SmartCredit',
            'Included FREE with Mesa360 Credit System',
            '$1M Identity Theft Insurance',
            'Cancel Anytime, No Contracts',
          ].map((badge) => (
            <div key={badge} className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
              <span>{badge}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={SMARTCREDIT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-10 py-4"
          >
            Get Started with SmartCredit →
            <ExternalLink className="w-5 h-5" />
          </a>
          <a
            href="tel:6613103040"
            className="text-gray-700 font-semibold hover:text-[#bb9446] transition-colors"
          >
            Or schedule a consultation: (661) 310-3040
          </a>
        </div>
        <p className="mt-3 text-sm text-gray-500">Hablamos Español &nbsp;|&nbsp; Assi Punjabi Bolde Haan</p>
      </div>
    </section>
  );
}

function WhyPartnershipMatters() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            You Weren't Meant to Figure This Out <span className="text-[#f9c65d]">Alone</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every financial decision you make affects your family's future. Your opportunities. Your peace of mind. Your business's ability to grow. Yet most people are expected to navigate all of it without any real guidance.
          </p>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            That's not fair. And it doesn't have to be that way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Users,
              color: 'text-red-500',
              bg: 'bg-red-50',
              border: 'border-red-200',
              title: "You're Not Crazy for Feeling Lost",
              body: "80% of people navigate their finances completely alone. No expert guidance. No support system. Just Google and hope for the best.",
            },
            {
              icon: TrendingUp,
              color: 'text-amber-600',
              bg: 'bg-amber-50',
              border: 'border-amber-200',
              title: 'Your Mistakes Are Expensive',
              body: 'The average person wastes hundreds of dollars annually on the wrong financial services. Trial and error is costing you money you can\'t afford to lose.',
            },
            {
              icon: Calendar,
              color: 'text-blue-600',
              bg: 'bg-blue-50',
              border: 'border-blue-200',
              title: 'Going Alone Costs You Time',
              body: 'Without expert guidance, everything takes 6 to 12 months longer. That\'s a year of your life stuck in the same place while everyone else moves forward.',
            },
            {
              icon: Briefcase,
              color: 'text-purple-600',
              bg: 'bg-purple-50',
              border: 'border-purple-200',
              title: 'Business Owners Are Left Out Too',
              body: 'Most small business owners get rejected for funding because no one taught them how business credit works. You built something real. You deserve a partner who helps you access the capital to grow it.',
            },
            {
              icon: Star,
              color: 'text-green-600',
              bg: 'bg-green-50',
              border: 'border-green-200',
              title: 'You Deserve Better',
              body: 'The wealthy have financial advisors because they can afford them. You can\'t. So you\'re expected to just figure it out? That\'s not right.',
            },
          ].map(({ icon: Icon, color, bg, border, title, body }) => (
            <div key={title} className={`${bg} border ${border} rounded-xl p-6 shadow-md`}>
              <Icon className={`w-10 h-10 ${color} mb-3`} />
              <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-2xl p-10 text-center text-white">
          <p className="text-xl leading-relaxed mb-4 max-w-3xl mx-auto">
            We don't think that's right. Everyone deserves access to expert financial guidance — not just the wealthy, not just people who can afford a five-thousand dollar retainer, not just businesses with perfect credit. <strong>Everybody.</strong>
          </p>
          <p className="text-lg text-amber-300 font-semibold mb-6">That's why we built Mesa Financial Concierge.</p>
          <a
            href={SMARTCREDIT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-lg font-bold px-8 py-4"
          >
            Get Started with Mesa Financial Concierge →
          </a>
        </div>
      </div>
    </section>
  );
}

function EmotionalHook() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-amber-50 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
          You Shouldn't Have to <span className="text-[#f9c65d]">Do This Alone</span>
        </h2>
        <div className="space-y-4 text-lg text-gray-700 leading-relaxed mb-10 text-left">
          <p>Every financial decision feels like you're guessing. Every credit question leaves you more confused than before. Every service you research makes you wonder who you can actually trust.</p>
          <p>You've spent hours Googling with no clear answers. You've watched everyone else seem to have it figured out while you're still stuck trying to understand the basics. Maybe you've been turned down for funding and don't know why. Maybe you're not sure if your personal credit or your business credit is the problem.</p>
          <p>Here's what we believe: <strong>Nobody should have to navigate their financial life without real guidance.</strong></p>
          <p>The system wasn't built for regular people. It was built for people who already have money, who already have advisors, who already know how everything works. That's not right. And we're here to change it.</p>
          <p>Mesa Financial Concierge exists because everyone deserves a financial partner in their corner. Whether you're working on personal credit, building a business, or both — someone who genuinely wants you to succeed. A community where people actually help each other.</p>
          <p className="text-xl font-semibold text-gray-900">That's what you've been missing. And that's what we built.</p>
        </div>
      </div>
    </section>
  );
}

function WhatYouGet() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What If You Had Someone to <span className="text-[#f9c65d]">Call?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Not a salesperson. Not a customer service line. A real financial partner who knows your name, understands your situation, and genuinely wants you to succeed.
          </p>
        </div>
        <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-2xl p-10 text-white">
          <p className="text-lg leading-relaxed mb-4">That's what Mesa Financial Concierge gives you.</p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              'A credit question at 10 PM? Post it in the community and get a real answer from experts or members within 24 hours.',
              'Weekly group calls where an advisor walks through exactly how to build credit, optimize your profile, or prepare for funding — and you can ask your specific questions live.',
              'Guidance on which funding options you actually qualify for and a clear roadmap to build the business credit profile lenders want to see.',
              'Courses that teach you everything the wealthy know about credit and money, step by step, in plain English, at your own pace.',
              'A clear action plan that tells you exactly what to do next. No more guessing. No more wondering if you\'re doing it right.',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-amber-300 font-semibold text-lg">This is what financial partnership looks like. And Community tier is included with SmartCredit.</p>
        </div>
      </div>
    </section>
  );
}

function FeatureBlocks() {
  const features = [
    {
      icon: Users,
      headline: 'Your Financial Family, Available 24/7',
      label: 'Private Community Access',
      body: `That credit question at 10 PM we mentioned? Here's where you ask it.\n\nPost questions anytime and get real answers from experts or members who've been exactly where you are — within 24 to 48 hours. Share wins. Troubleshoot challenges. Get support from people who actually understand.\n\nWhether you're working through a dispute, trying to understand your credit profile, or figuring out your next step toward business funding, this community has been there.\n\nThe Mesa Financial Concierge community isn't just a forum. It's your financial family.`,
    },
    {
      icon: Phone,
      headline: 'Expert Guidance Every Single Week',
      label: 'Weekly Live Strategy Calls',
      body: `Every week, join live coaching sessions with financial experts. Get your credit questions answered. Learn proven strategies that actually work. Get the real talk on what lenders look for and how to position yourself for business funding. Celebrate wins with people who are rooting for you.\n\nCan't make it live? Every single call is recorded and posted so you never miss out.\n\nThis is the accountability that keeps you moving forward.`,
    },
    {
      icon: BookOpen,
      headline: 'Learn Everything the Wealthy Already Know',
      label: 'Complete Education Library',
      body: `Step-by-step training designed to take you from confused to confident. How credit actually works. How to access personal and business funding. How to build business credit from scratch. How to build wealth that lasts. All in plain English. All at your own pace.\n\nNew modules unlock as you progress, so you're never overwhelmed. Just consistently moving forward.\n\nThis is the education you deserved all along.`,
    },
    {
      icon: Target,
      headline: 'Finally Know Exactly What to Do Next',
      label: 'Personalized Action Plan',
      body: `Powered by LevelUpScore technology, your personalized roadmap shows you exactly what to do next based on your credit profile and your goals.\n\nNo more Googling "what should I do first?" No more wondering if you're doing the right thing. Just follow your plan and watch the progress happen.\n\nThis is what having a roadmap feels like.`,
    },
    {
      icon: Briefcase,
      headline: 'Your Business Deserves Capital Too',
      label: 'Business Funding Guidance',
      body: `Building a business is hard enough without navigating funding alone.\n\nWhether you're a startup that needs your first round of capital or an established business ready to scale, your Concierge membership includes real guidance on how to access the funding your business needs.\n\nLearn how business credit works, which funding options fit your profile, and what steps to take before you apply. Understand what lenders actually look for. Get connected to Mesa Group Capital's funding specialists when you're ready to move forward.\n\nGrowing your business shouldn't mean guessing which doors to knock on.`,
    },
    {
      icon: Shield,
      headline: 'Your Family Is Protected',
      label: '$1M Identity Theft Insurance',
      body: `Peace of mind included at no extra cost.\n\nComprehensive identity fraud protection covering your entire household. With millions of Americans experiencing identity theft every year, this isn't optional. It's essential.\n\nAnd you get it automatically with your membership.\n\nBecause protecting your family is just as important as building your credit.`,
    },
    {
      icon: Award,
      headline: 'Ready for Your Own Personal Advisor?',
      label: 'Want More? Upgrade to Premium Tiers',
      body: `Community tier gives you everything you need to succeed on your own.\n\nBut if you want personalized guidance? Monthly accountability? Weekly strategy calls with your own named advisor who knows your story, your goals, and your business?\n\nOur premium tiers are here when you're ready.\n\nWe help people first, so we built Community tier to be free with SmartCredit. But when you're ready for more, we're here.`,
      cta: true,
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-light to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Everything You Need in One Partnership
          </h2>
          <p className="text-xl text-muted-foreground">Expert guidance when you need it. Education that actually makes sense. A community where everyone understands.</p>
        </div>
        <div className="space-y-8">
          {features.map(({ icon: Icon, headline, label, body, cta }) => (
            <div key={label} className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="grid md:grid-cols-3 gap-6 items-start">
                <div className="md:col-span-1">
                  <div className="inline-block bg-[#bb9446]/10 p-4 rounded-lg mb-4">
                    <Icon className="w-10 h-10 text-foreground" />
                  </div>
                  <div className="text-xs font-bold text-[#bb9446] uppercase tracking-wider mb-1">{label}</div>
                  <h3 className="text-2xl font-bold text-foreground">{headline}</h3>
                </div>
                <div className="md:col-span-2">
                  <div className="space-y-3">
                    {body.split('\n\n').map((para, i) => (
                      <p key={i} className="text-muted-foreground leading-relaxed">{para}</p>
                    ))}
                  </div>
                  {cta && (
                    <a
                      href={CALENDLY_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow hover:shadow-lg transition-all duration-200 border-2 border-amber-500 font-bold px-6 py-3"
                    >
                      Learn More About Premium Tiers →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonTable() {
  const rows = [
    ['Figure everything out by yourself', 'Expert advisors who genuinely want to help'],
    ['Google at midnight with no real answers', 'Post questions anytime, get answers within 24–48 hours'],
    ['Expensive trial-and-error mistakes', 'Proven system that actually works'],
    ['No one to keep you accountable', 'Weekly group calls and community support'],
    ['Generic advice that doesn\'t fit your situation', 'Personalized strategies for your specific goals'],
    ['Constant confusion and overwhelm', 'Clear action plan that tells you exactly what to do next'],
    ['Wondering if you\'re making the right decisions', 'Confidence knowing you\'re on the right track'],
    ['Getting turned down for funding with no explanation', 'A roadmap that prepares you for the capital your business needs'],
    ['Watching everyone else get ahead', 'Finally making real progress'],
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Difference Between <span className="text-[#f9c65d]">Struggling Alone</span> and Having a Partner
          </h2>
        </div>
        <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200">
          <table className="w-full">
            <thead>
              <tr>
                <th className="bg-gray-100 px-6 py-4 text-left font-bold text-gray-700">Navigating Alone</th>
                <th className="bg-amber-400 px-6 py-4 text-left font-bold text-gray-900">With Mesa Financial Concierge</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([alone, concierge], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 text-gray-600 text-sm border-r border-gray-200">
                    <div className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      {alone}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-800 text-sm font-medium">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      {concierge}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center mt-8">
          <p className="text-lg text-gray-700 mb-4">The difference? You're not alone anymore. And you don't have to be. All it takes is one simple membership.</p>
          <a
            href={SMARTCREDIT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-lg font-bold px-10 py-4"
          >
            Get Started with Mesa Financial Concierge →
          </a>
        </div>
      </div>
    </section>
  );
}

function WhatIfSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c]">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          This Is What Having a <span className="text-[#f9c65d]">Financial Partner</span> Feels Like
        </h2>
        <div className="space-y-4 text-lg text-gray-300 leading-relaxed mb-10 text-left">
          <p>No more Googling credit questions at midnight with no real answers.</p>
          <p>No more wondering if you're making the right financial decision. No more feeling lost about your next step. No more watching everyone else get ahead while you're stuck trying to figure it out alone. No more getting turned down for funding and not knowing why.</p>
          <p className="text-white font-semibold">Mesa Financial Concierge changes all of that.</p>
          <p>Expert guidance whenever you need it. A proven system that actually works. A community where everyone understands what you're going through. Business funding direction for when you're ready to grow. Accountability to keep you moving forward.</p>
          <p className="text-amber-300 font-semibold">The financial partner you've always needed is here. All you need is an active Mesa x SmartCredit subscription.</p>
        </div>
        <a
          href={SMARTCREDIT_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-12 py-5"
        >
          Get Started with SmartCredit →
          <ExternalLink className="w-5 h-5" />
        </a>
        <PoweredBySmartCredit variant="dark" className="mt-4" />
      </div>
    </section>
  );
}

function HowToStart() {
  const steps = [
    {
      num: '1',
      title: 'Activate SmartCredit',
      subtitle: 'Activate your Mesa x SmartCredit account to get instant access to Mesa Financial Concierge.',
      items: [
        '3-bureau credit monitoring activated',
        '$1M identity theft insurance activated',
        'Mesa Financial Concierge Community access granted',
      ],
    },
    {
      num: '2',
      title: 'Receive Your Welcome Packet',
      subtitle: 'Within 24 hours, receive your login credentials and welcome packet via email.',
      items: [
        'Welcome email with community login details',
        'Introduction to Mesa Financial Concierge',
        'Action plan setup',
        'Weekly call schedule and calendar invite',
        '"Start Here" module unlocked',
      ],
    },
    {
      num: '3',
      title: 'Start Learning & Connecting',
      subtitle: 'Attend your first group call, complete your action plan, and connect with your financial family.',
      items: [
        'Join your first weekly live call or watch the replay',
        'Complete your first education module',
        'Post your introduction in the community',
        'Get your first expert guidance',
        'Start your financial journey — personal, business, or both',
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-light to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Getting Started is Simple</h2>
          <p className="text-xl text-muted-foreground">You're less than 5 minutes away from having a financial partner in your corner.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map(({ num, title, subtitle, items }) => (
            <div key={num} className="relative">
              <div className="bg-card rounded-2xl p-8 shadow-xl h-full">
                <div className="absolute -top-6 left-8 w-12 h-12 bg-[#ECC169] rounded-full flex items-center justify-center text-2xl font-bold text-gray-900 shadow-lg">
                  {num}
                </div>
                <h3 className="text-xl font-bold text-foreground mt-4 mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{subtitle}</p>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href={SMARTCREDIT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-12 py-5"
          >
            Get Started with SmartCredit →
            <ExternalLink className="w-5 h-5" />
          </a>
          <PoweredBySmartCredit className="mt-3" />
          <p className="text-sm text-gray-600 mt-2">Or schedule a consultation: <a href="tel:6613103040" className="text-[#bb9446] font-semibold hover:underline">(661) 310-3040</a></p>
          <p className="text-sm text-gray-500 mt-1">Not sure if this is right for you? We'll help you figure it out. No pressure. No obligations. Just honest guidance.</p>
          <p className="text-sm text-gray-500 mt-1">Hablamos Español &nbsp;|&nbsp; Assi Punjabi Bolde Haan</p>
        </div>
      </div>
    </section>
  );
}

function WhyDifferent() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why We Built This <span className="text-[#f9c65d]">Different</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We built Mesa Financial Concierge the way we wish financial services had existed when we needed them most.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Award,
              title: 'Everything in One Place',
              body: 'No more juggling multiple coaches, courses, or subscriptions. No more wondering who to trust or where to turn. Credit coaching. Funding guidance. Community support. Education. Accountability. Whether your goals are personal, business, or both — it\'s all in one partnership.',
              note: 'This is what you\'ve been missing.',
            },
            {
              icon: CheckCircle,
              title: 'Built on Real Results',
              body: 'We\'ve helped over 2,500 individuals, families, and businesses since 2023. Every strategy you\'ll learn has been tested in the real world, not just in theory. We know what works because we\'ve seen it work thousands of times.',
              note: 'This is the system that actually delivers.',
            },
            {
              icon: Star,
              title: 'Fits Your Life',
              body: 'Access on desktop, mobile, or in-person. Attend calls live or watch replays. Learn at your own pace. No pressure. No rigid schedules. Your financial partner adapts to you, not the other way around.',
              note: 'This is partnership on your terms.',
            },
          ].map(({ icon: Icon, title, body, note }) => (
            <div key={title} className="bg-gradient-to-br from-light to-background rounded-xl p-8 shadow-md text-center hover:shadow-lg transition-all">
              <div className="flex justify-center mb-4">
                <Icon className="w-14 h-14 text-[#ECC169]" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">{body}</p>
              <p className="text-sm font-semibold text-[#bb9446]">{note}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-10 border-2 border-amber-200">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Here's What Makes Mesa Financial Concierge Different
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4 text-center max-w-3xl mx-auto">
            <strong>We help people first.</strong>
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Some people need comprehensive credit repair. Some need business funding guidance. Some just need honest direction. We help all of them. That's how we've built this company — by genuinely caring about your success, not just signing you up.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Mesa Financial Concierge was built from a simple realization: most people don't need another product. They need a partner. Someone who stays in their corner for the long haul. A community that actually understands what they're going through.
          </p>
          <p className="text-gray-700 leading-relaxed">
            That's why Community tier is included with a Mesa x SmartCredit account. We believe everyone deserves a financial partner in their corner, regardless of what they can afford.
          </p>
        </div>
      </div>
    </section>
  );
}

function MembershipTiers() {
  const tiers = [
    {
      name: 'Community',
      price: 'FREE',
      priceNote: 'Included with Mesa x SmartCredit Account',
      tag: null,
      color: 'border-gray-200',
      headerBg: 'bg-gray-100',
      headerText: 'text-gray-900',
      description: 'Perfect for: Self-starters building personal or business credit who want education, community, and accountability',
      included: [
        'Private Mesa Financial Concierge community',
        'Complete education library (personal credit and business funding modules)',
        'Weekly live group coaching calls',
        'Community support (24 to 48 hour response)',
        '$1M identity theft insurance',
        'Personalized action plan',
        'Business funding guidance and education',
        'Credit monitoring via SmartCredit (3 bureaus)',
      ],
      excluded: [
        'No 1-on-1 calls with advisors',
        'No personalized credit report reviews',
        'No direct advisor access',
        'No credit repair dispute work',
      ],
      cta: 'Get Started with Community →',
      ctaLink: SMARTCREDIT_LINK,
      ctaExternal: true,
    },
    {
      name: 'Concierge',
      price: '$97/mo',
      priceNote: '+ Mesa x SmartCredit',
      tag: 'MOST POPULAR',
      color: 'border-amber-400',
      headerBg: 'bg-amber-400',
      headerText: 'text-gray-900',
      description: 'Perfect for: Individuals and business owners who want monthly personalized guidance, whether for a major personal financial move or preparing their business for funding',
      included: [
        'Everything in Community PLUS:',
        'Monthly 1-on-1 strategy calls with named advisor',
        'Personalized monthly credit report review (all 3 bureaus)',
        'Credit card selection and application timing guidance',
        'Travel rewards optimization coaching',
        'Business funding pre-qualification assistance',
        'Personalized accountability coaching',
        'Business credit building roadmap',
      ],
      excluded: [
        'No weekly calls (monthly only)',
        'No priority support between calls',
        'No credit repair dispute work',
      ],
      cta: 'Schedule Consultation →',
      ctaLink: CALENDLY_LINK,
      ctaExternal: true,
    },
    {
      name: 'Executive',
      price: '$197/mo',
      priceNote: '+ Mesa x SmartCredit',
      tag: 'VIP',
      color: 'border-gray-700',
      headerBg: 'bg-gradient-to-r from-[#3e3e3e] to-[#2c2c2c]',
      headerText: 'text-white',
      description: 'Perfect for: High-achievers and business owners who want weekly guidance, business credit building, and priority access to everything Mesa offers',
      included: [
        'Everything in Concierge PLUS:',
        'Weekly 1-on-1 strategy calls (4x per month)',
        'Priority text and email advisor access',
        'Priority questions answered first in community',
        'Business credit building (D&B, Experian Business, Equifax Business)',
        'Business funding pre-qualification and lender match strategy',
        'SBA and alternative funding roadmap',
        'Funding readiness assessment with ongoing tracking',
        'Priority access to all Mesa Group services',
        'Preferred rates on Mesa360 and funding',
      ],
      excluded: [
        'No credit repair dispute work (separate service)',
      ],
      cta: 'Schedule Consultation →',
      ctaLink: CALENDLY_LINK,
      ctaExternal: true,
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-light to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Choose the Level of Support That <span className="text-[#f9c65d]">Fits Your Goals</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            All tiers require an active Mesa x SmartCredit subscription. The difference is how much personalized support you receive.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {tiers.map(({ name, price, priceNote, tag, color, headerBg, headerText, description, included, excluded, cta, ctaLink, ctaExternal }) => (
            <div key={name} className={`bg-card rounded-2xl shadow-xl border-2 ${color} overflow-hidden flex flex-col`}>
              <div className={`${headerBg} px-6 py-5`}>
                {tag && (
                  <div className="inline-block bg-white/20 text-current text-xs font-bold px-3 py-1 rounded-full mb-2">
                    ⭐ {tag}
                  </div>
                )}
                <div className={`text-3xl font-bold ${headerText}`}>{name}</div>
                <div className={`text-2xl font-bold ${headerText} mt-1`}>{price}</div>
                <div className={`text-xs ${name === 'Concierge' ? 'text-gray-700' : name === 'Executive' ? 'text-gray-400' : 'text-gray-600'} mt-0.5`}>{priceNote}</div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-sm text-gray-600 italic mb-4">{description}</p>
                <div className="space-y-2 mb-4 flex-1">
                  {included.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
                {excluded.length > 0 && (
                  <div className="space-y-2 mb-6 border-t border-gray-100 pt-4">
                    {excluded.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm text-gray-500">
                        <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                        {item}
                      </div>
                    ))}
                  </div>
                )}
                <a
                  href={ctaLink}
                  target={ctaExternal ? '_blank' : undefined}
                  rel={ctaExternal ? 'noopener noreferrer' : undefined}
                  className="block text-center bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow hover:shadow-lg transition-all duration-200 border-2 border-amber-500 font-bold px-6 py-3 text-sm mt-auto"
                >
                  {cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-left font-bold text-gray-700 border-r border-gray-200">Feature</th>
                <th className="px-4 py-3 text-center font-bold text-gray-700 border-r border-gray-200">Community</th>
                <th className="px-4 py-3 text-center font-bold text-amber-700 bg-amber-50 border-r border-gray-200">Concierge</th>
                <th className="px-4 py-3 text-center font-bold text-gray-700">Executive</th>
              </tr>
              <tr className="bg-gray-50 border-t border-gray-200">
                <th className="px-4 py-2 text-left text-gray-500 font-normal border-r border-gray-200">Monthly Cost</th>
                <th className="px-4 py-2 text-center text-green-700 font-bold border-r border-gray-200">FREE</th>
                <th className="px-4 py-2 text-center text-amber-700 font-bold bg-amber-50 border-r border-gray-200">$97/mo</th>
                <th className="px-4 py-2 text-center font-bold">$197/mo</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Private Community', '✓', '✓', '✓ Priority'],
                ['Education Library', '✓', '✓', '✓'],
                ['Business Funding Modules', '✓', '✓', '✓ Advanced'],
                ['Weekly Group Calls', '✓', '✓', '✓ Priority Q&A'],
                ['$1M Insurance', '✓', '✓', '✓'],
                ['Personalized Action Plan', '✓', '✓ Updated Monthly', '✓ Updated Weekly'],
                ['1-on-1 Calls', '✗', '✓ Monthly', '✓ Weekly (4x)'],
                ['Credit Report Reviews', '✗', '✓ Monthly', '✓ Monthly'],
                ['Personalized Recommendations', '✗', '✓', '✓ Advanced'],
                ['Business Credit Building', '✗', '✓ Roadmap', '✓ Full Strategy'],
                ['Funding Pre-Qualification', '✗', '✓', '✓ Lender Match'],
                ['Priority Support', '✗', '✗', '✓ Text & Email'],
              ].map(([feature, community, concierge, executive], i) => (
                <tr key={feature} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 text-gray-700 border-r border-gray-200 font-medium">{feature}</td>
                  <td className="px-4 py-3 text-center border-r border-gray-200">
                    <span className={community === '✗' ? 'text-red-400' : 'text-green-600'}>{community}</span>
                  </td>
                  <td className="px-4 py-3 text-center bg-amber-50/50 border-r border-gray-200">
                    <span className={concierge === '✗' ? 'text-red-400' : 'text-amber-700 font-medium'}>{concierge}</span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={executive === '✗' ? 'text-red-400' : 'text-gray-800 font-medium'}>{executive}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'How do I join Mesa Financial Concierge?',
      a: 'All you need is an active Mesa x SmartCredit subscription. Sign up for Mesa x SmartCredit and you automatically get Community tier access at no additional cost. Already a Mesa360 credit repair client? You\'re automatically enrolled. Community tier is included with your service.',
    },
    {
      q: "What's the difference between the three tiers?",
      a: 'All tiers include the same foundation: community access, education library, weekly group calls, business funding modules, and $1M insurance. Community (FREE): Everything above, perfect for self-starters. Concierge ($97/mo): Everything above plus monthly 1-on-1 advisor calls and personalized recommendations. Executive ($197/mo): Everything above plus weekly 1-on-1 calls, priority support, and a full business credit and funding strategy.',
    },
    {
      q: 'Does this help business owners, not just consumers?',
      a: 'Absolutely. Mesa Financial Concierge serves both individuals and business owners. Community and Concierge tiers include business funding guidance and education on how business credit works. Executive tier includes a full business credit building strategy and a personalized funding roadmap through Mesa Group Capital\'s network of lenders.',
    },
    {
      q: "I'm a business owner who needs funding now. Can this help me?",
      a: "Yes. If you're funding-ready, we can connect you directly with Mesa Group Capital for a free consultation. If you're not quite there yet, Concierge tier gives you a personalized roadmap to get funding-ready, including which accounts to open, what credit scores you need, and how to structure your business to qualify.",
    },
    {
      q: 'Is this included with Mesa360 Credit System?',
      a: 'Yes. Every Mesa360 credit repair client automatically gets Mesa Financial Concierge Community tier at no additional cost. You can upgrade to Concierge or Executive anytime for personalized 1-on-1 support.',
    },
    {
      q: "What's the difference between Mesa Financial Concierge and Mesa360?",
      a: "They're two different services that work well together. Mesa360 is hands-on credit repair, including dispute work and removal of negative items. Mesa Financial Concierge is credit coaching, business funding guidance, education, and ongoing strategy. Many clients have both — Mesa360 fixes existing problems while Concierge helps you build positive credit, prepare for funding, and stay on track for the long haul.",
    },
    {
      q: 'Can I upgrade or downgrade tiers?',
      a: 'Yes, anytime. Start with Community and upgrade when you\'re ready. Or downgrade if needed. Your Mesa x SmartCredit subscription stays active throughout.',
    },
    {
      q: 'Is there a contract?',
      a: 'No contracts. Month-to-month for all tiers. Cancel anytime.',
    },
    {
      q: 'How is this different from other financial coaching programs?',
      a: "Three things. We've been where you are — our founder had credit completely shot at one point. We're not lecturing from ivory towers. We've lived this journey. Complete ecosystem: you get credit monitoring, community, education, personal and business funding guidance, and marketplace access. Everything in one place. We help people first: we believe everyone deserves a financial partner in their corner, regardless of what they can afford. That's why Community tier is included with Mesa x SmartCredit.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Common <span className="text-[#f9c65d]">Questions</span> About Mesa Financial Concierge
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-amber-300 transition-colors duration-300">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-white/50 transition-colors duration-200"
              >
                <span className="font-semibold text-gray-900 pr-4">{q}</span>
                <ChevronDown className={`w-5 h-5 text-[#3e3e3e] flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-96' : 'max-h-0'}`}>
                <div className="px-6 pb-5 pt-2 bg-white">
                  <p className="text-gray-700 leading-relaxed">{a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhichTier() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-amber-50 to-yellow-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Not Sure Which Tier to <span className="text-[#f9c65d]">Choose?</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            {
              tier: 'Community',
              items: [
                "You're comfortable learning independently",
                'You want community, education, and accountability',
                'You prefer group learning over 1-on-1',
                "You're actively working on personal or business credit",
                'You want to start with the included tier',
              ],
            },
            {
              tier: 'Concierge',
              items: [
                'You want monthly personalized guidance',
                'You need accountability to stay on track',
                "You're preparing for a major financial move (mortgage, business funding, or expansion)",
                'You want tailored recommendations for your specific situation',
                "You're a business owner building toward your first round of funding",
              ],
            },
            {
              tier: 'Executive',
              items: [
                "You're a business owner actively building business credit",
                'You want a full funding roadmap and lender match strategy',
                'You want weekly support and priority access',
                "You're optimizing a complex financial picture",
                'You want a true financial partner who knows your name and your goals',
              ],
            },
          ].map(({ tier, items }) => (
            <div key={tier} className="bg-white rounded-xl p-6 shadow-md border border-amber-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Choose {tier} if:</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-gray-700 mb-4">Still not sure?</p>
          <a
            href={CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-lg font-bold px-10 py-4"
          >
            Schedule a Free Consultation →
          </a>
          <p className="text-sm text-gray-500 mt-2">No pressure. No obligations. Just honest guidance.</p>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#FFFBEC] from-40% to-[#FFECD7]">
      <div className="max-w-5xl mx-auto">
        {/* Trust Badge Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-12">
          {[
            '3-Bureau Credit Monitoring',
            '$1M Identity Theft Insurance',
            'Weekly Live Group Calls',
            'Business Funding Guidance',
            'Complete Education Library',
            'Included with Mesa360 Credit System',
            'Cancel Anytime',
            'No Contracts',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>

        {/* Emotional Close */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            You Don't Have to Do This <span className="text-[#f9c65d]">Alone Anymore</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
            Imagine having an expert advisor who knows your story. A community where everyone understands. A proven system that actually works. No more Googling at midnight. No more expensive mistakes. No more getting turned down for funding with no explanation.
          </p>
          <p className="text-xl font-semibold text-gray-900 mb-10">That ends today.</p>
        </div>

        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Ready to Get Started?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Join Mesa Financial Concierge and get the financial partnership you deserve. Personal credit, business credit, or both — we've got you covered.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href={SMARTCREDIT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 font-bold px-4 py-5"
            >
              <ExternalLink className="w-5 h-5 mb-1" />
              <span className="text-sm font-bold">Community Tier</span>
              <span className="text-xs mt-1">Get Started with Mesa x SmartCredit →</span>
              <span className="text-xs text-gray-700 mt-1">Includes Community tier automatically</span>
            </a>
            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-white hover:bg-amber-50 text-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-400 font-bold px-4 py-5"
            >
              <Calendar className="w-5 h-5 mb-1" />
              <span className="text-sm font-bold">Concierge or Executive</span>
              <span className="text-xs mt-1">Schedule Free Consultation →</span>
              <span className="text-xs text-gray-600 mt-1">We'll help you choose the right tier</span>
            </a>
            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-white hover:bg-amber-50 text-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-400 font-bold px-4 py-5"
            >
              <Briefcase className="w-5 h-5 mb-1" />
              <span className="text-sm font-bold">Business Owners</span>
              <span className="text-xs mt-1">Talk to a Funding Specialist →</span>
              <span className="text-xs text-gray-600 mt-1">Ready to build business credit or access capital?</span>
            </a>
            <a
              href="tel:6613103040"
              className="flex flex-col items-center bg-white hover:bg-amber-50 text-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-400 font-bold px-4 py-5"
            >
              <Phone className="w-5 h-5 mb-1" />
              <span className="text-sm font-bold">Call Us</span>
              <span className="text-xs mt-1">(661) 310-3040</span>
              <span className="text-xs text-gray-600 mt-1">Prefer to talk? We'll walk you through everything.</span>
            </a>
          </div>
        </div>

        <div className="text-center mt-8 space-y-2 text-sm text-gray-600">
          <p>Not sure which tier is right for you? <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="text-[#bb9446] font-semibold hover:underline">Schedule a free consultation</a> — no pressure, no obligations, just honest guidance.</p>
          <p>Already a Mesa360 client? You already have Community tier access. Check your email for login details. Want to upgrade? <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="text-[#bb9446] font-semibold hover:underline">Contact your advisor →</a></p>
          <p className="text-gray-500">Hablamos Español &nbsp;|&nbsp; Assi Punjabi Bolde Haan</p>
        </div>

        {/* Disclosure */}
        <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200 text-xs text-gray-500 leading-relaxed">
          <strong>DISCLOSURE:</strong> Platform: Mesa Financial Concierge (Private Community). Requirement: Active Mesa x SmartCredit subscription or Mesa360 Credit System enrollment. Important: Mesa Financial Concierge provides credit coaching and financial education, not hands-on credit repair dispute work. For credit repair services, see Mesa360 Credit System. Business funding guidance connects clients with Mesa Group Capital specialists. Individual results vary.
        </div>
      </div>
    </section>
  );
}
