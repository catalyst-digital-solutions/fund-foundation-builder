import React, { useState } from 'react';
import {
  CheckCircle, X, ArrowRight, Phone, ChevronDown,
  Shield, Building, TrendingUp, CreditCard, Target,
  LayoutGrid, Search, Users, Star
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PoweredByMesaGroup from '@/components/PoweredByMesaGroup';
import { CalendlyPopupButton } from '@/components/CalendlyPopupButton';
import ExternalLinkModal from '@/components/ExternalLinkModal';

const BusinessCreditBuilder = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState('');

  const openFullServiceModal = () => {
    const url = 'https://mesagroupcapital.com/business-credit-enroll';
    const popup = window.open(url, '_blank', 'noopener,noreferrer');
    if (popup) popup.focus();
  };
  
  const openDIYModal = () => {
    const url = 'https://mesagroupcapital.com/bcfs-diy-enroll';
    const popup = window.open(url, '_blank', 'noopener,noreferrer');
    if (popup) popup.focus();
  };

  return (
    <div className="min-h-screen bg-background font-['Inter',sans-serif]">
      <Header />
      <HeroSection openFullServiceModal={openFullServiceModal} openDIYModal={openDIYModal} />
      <ProblemSection />
      <AwakeningSection />
      <VisionSection />
      <FundabilitySystemSection />
      <GuaranteeSection openFullServiceModal={openFullServiceModal} />
      <WhatsIncludedSection />
      <ProgramOptionsSection openFullServiceModal={openFullServiceModal} openDIYModal={openDIYModal} />
      <TestimonialsSection />
      <VideoSection />
      <ChoiceSection />
      <FAQSection openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <FinalCTASection openFullServiceModal={openFullServiceModal} openDIYModal={openDIYModal} />
      <Footer />

      <ExternalLinkModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        url={selectedUrl}
        title="Mesa Group Capital - Business Credit Builder"
      />
    </div>
  );
};

// HERO SECTION
interface HeroSectionProps {
  openFullServiceModal: () => void;
  openDIYModal: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ openFullServiceModal, openDIYModal }) => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-b from-white via-amber-50 to-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Stop Gambling <span style={{ color: '#f9c65d' }}>Your Home</span> Every Time<br /><span style={{ color: '#f9c65d' }}>Your Business</span> Needs Capital
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
          Build a fortress between your business and personal finances. Access $5,000 to $150,000 in business credit—without touching your personal credit, risking your home, or betting your family's security on every business decision.
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border-2 border-amber-200">
            <CheckCircle className="w-5 h-5 text-green-600" strokeWidth={2.5} />
            <span className="font-semibold text-gray-900 text-sm">Business Credit Finance Suite Included</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border-2 border-amber-200">
            <CheckCircle className="w-5 h-5 text-green-600" strokeWidth={2.5} />
            <span className="font-semibold text-gray-900 text-sm">$50,000 Minimum Funding Guarantee*</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border-2 border-amber-200">
            <CheckCircle className="w-5 h-5 text-green-600" strokeWidth={2.5} />
            <span className="font-semibold text-gray-900 text-sm">300+ Vendor & Lender Network</span>
          </div>
        </div>

        {/* Dual CTAs */}
        <div className="flex flex-col items-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={openFullServiceModal}
              className="group px-8 py-4 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 flex items-center gap-2 text-lg"
            >
              Get Full Service Program ($2,495)
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={openDIYModal}
              className="group px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-gray-300 flex items-center gap-2 text-lg"
            >
              Get DIY Program ($995)
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="mt-4">
            <PoweredByMesaGroup />
          </div>
        </div>
      </div>
    </section>
  );
};

// PROBLEM SECTION
const ProblemSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-8">
          You Built a Business to Create Opportunity—<br />Not to Risk Everything You Own
        </h2>

        <div className="prose prose-lg max-w-4xl mx-auto text-gray-700 mb-12 leading-relaxed">
          <p className="text-lg">
            Every business loan application. Every piece of equipment you need. Every expansion opportunity that appears. Right now, they all have one thing in common: <strong>they're tied to YOUR personal credit</strong>. Your Social Security number. Your home as collateral. Your family's financial security on the line.
          </p>
          <p className="text-lg mt-4">
            Here's what's happening every time you use personal credit for business:
          </p>
          <p className="text-lg mt-4">
            Your personal credit score takes the hit. Your personal assets are exposed. Your home becomes collateral. One business setback—something completely outside your control—could wipe out everything your family depends on.
          </p>
        </div>

        {/* WITHOUT vs WITH Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* WITHOUT Business Credit */}
          <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-red-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <X className="w-7 h-7 text-red-600" strokeWidth={2.5} />
              The Brutal Reality Most Business Owners Face:
            </h3>
            <ul className="space-y-3">
              {[
                'Limited to $10,000-$25,000 in funding (personal credit limits)',
                'Banks require personal guarantees and home equity',
                'Every business purchase impacts your personal credit score',
                'One missed payment puts your home at risk',
                'Business liabilities become personal liabilities',
                'Growth is capped by personal credit limits',
                'Higher interest rates because you\'re the "risk," not your business'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" strokeWidth={2.5} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* WITH Business Credit */}
          <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-green-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <CheckCircle className="w-7 h-7 text-green-600" strokeWidth={2.5} />
              Meanwhile, businesses with established credit profiles are:
            </h3>
            <ul className="space-y-3">
              {[
                'Accessing $50,000 to $150,000 without personal guarantees',
                'Protecting personal assets from business decisions',
                'Getting better rates and terms (even 0% promotional periods)',
                'Scaling without being limited by personal credit',
                'Building business equity that exists independently',
                'Sleeping soundly knowing their home isn\'t on the line'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" strokeWidth={2.5} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-8 shadow-lg text-center max-w-3xl mx-auto">
          <p className="text-xl font-bold text-gray-900">
            What's the difference?
          </p>
          <p className="text-lg text-gray-700 mt-4">
            They discovered something most business owners don't know exists—and every day you wait costs you opportunities, limits your growth, and keeps your personal assets at risk.
          </p>
        </div>
      </div>
    </section>
  );
};

// AWAKENING SECTION
const AwakeningSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-6">
          What Separating Your Business Credit<br />from Personal Credit Really Means
        </h2>

        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Business credit isn't just about "building a score." It's about creating a <strong>firewall between your business operations and your personal life</strong>—so one never threatens the other.
        </p>

        {/* Two-Column Comparison Table */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* WITHOUT Business Credit */}
          <div className="bg-gradient-to-br from-red-50 to-white rounded-xl p-8 shadow-lg border-2 border-red-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <X className="w-7 h-7 text-red-600" strokeWidth={2.5} />
              WITHOUT Business Credit
            </h3>
            <ul className="space-y-4">
              {[
                'Personal credit at risk with every business decision',
                'Limited to $10,000-$25,000 in business funding',
                'Personal assets exposed to business liabilities',
                'Higher interest rates on business financing',
                'Business growth tied to personal credit limits',
                'Difficult to separate personal and business finances',
                'Banks require home equity for business loans'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0 mt-2" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* WITH Business Credit */}
          <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 shadow-lg border-2 border-green-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <CheckCircle className="w-7 h-7 text-green-600" strokeWidth={2.5} />
              WITH Business Credit
            </h3>
            <ul className="space-y-4">
              {[
                'Personal credit protected from business decisions',
                'Access to $150,000+ in business funding',
                'Personal assets shielded from business liabilities',
                'Lower interest rates and better terms',
                'Unlimited business growth potential',
                'Clear separation of personal and business finances',
                'No personal guarantees or home equity required'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0 mt-2" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// VISION SECTION
const VisionSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Financial Freedom',
      description: 'Making business decisions based on opportunity, not fear'
    },
    {
      icon: Building,
      title: 'Asset Protection',
      description: 'Your home, savings, and personal credit stay completely separate'
    },
    {
      icon: TrendingUp,
      title: 'Real Scalability',
      description: 'Access 10-20x more capital than personal credit alone'
    },
    {
      icon: CreditCard,
      title: 'Better Terms',
      description: 'Lower rates, longer terms, 0% promotional offers'
    },
    {
      icon: Target,
      title: 'Business Equity',
      description: 'Build a company with its own financial identity and value'
    },
    {
      icon: CheckCircle,
      title: 'Peace of Mind',
      description: 'Your breakthrough is one approval away—not one risk away'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-6">
          Picture Your Business Standing Strong on Its Own Credit.<br />
          <span style={{ color: '#f9c65d' }}>Imagine Your Family Protected.</span>
        </h2>

        <div className="bg-white rounded-xl p-8 shadow-lg max-w-3xl mx-auto mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Imagine this:</strong>
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            $50,000 approved—no personal guarantee. Equipment purchased on business terms. Sleeping soundly knowing your home isn't at risk. Taking that major contract without hesitation. <strong>That's what real business credit creates.</strong>
          </p>
        </div>

        <p className="text-xl text-gray-900 font-bold text-center mb-10">
          This isn't about paperwork. This is about:
        </p>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all hover:scale-105 border-2 border-amber-200"
              >
                <Icon className="w-12 h-12 text-amber-600 mb-4" strokeWidth={2} />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// 5-STEP FUNDABILITY® SYSTEM SECTION
const FundabilitySystemSection = () => {
  const steps = [
    {
      number: 1,
      icon: Target,
      title: 'Know Your Fundability Score™ and Unlock Funding Now',
      subtitle: 'See exactly where you stand and what you qualify for today',
      body: 'With real-time insights into your business\'s financial health, you\'ll discover how fundable your business truly is, what funding you qualify for right now, and the exact steps needed to unlock even more capital in the future.',
      reveals: [
        'Your current Fundability Score across all credit bureaus',
        'What funding you can access today (before building)',
        'The exact gaps preventing higher approvals',
        'Your personalized roadmap to $150K+'
      ]
    },
    {
      number: 2,
      icon: Search,
      title: 'Identify Fundability Factors™ Holding You Back',
      subtitle: 'Discover the hidden barriers blocking your approvals',
      body: 'Over 125 hidden factors can prevent funding approvals—even for profitable businesses. We reveal exactly what\'s holding you back (business structure issues, financial gaps, industry risk factors) so you can eliminate these barriers and secure maximum capital.',
      reveals: [
        'Which of the 125+ factors are affecting you',
        'Business structure optimization needs',
        'Financial documentation gaps',
        'Industry-specific approval barriers',
        'Quick fixes vs long-term improvements'
      ],
      hint: 'Most business owners have 8-15 fixable issues they didn\'t even know existed. Once corrected, approval odds skyrocket.'
    },
    {
      number: 3,
      icon: TrendingUp,
      title: 'Track Your Business Bureau Insights™',
      subtitle: 'See what lenders see when they review your business',
      body: 'Get real-time monitoring from Dun & Bradstreet, Experian, Equifax—even the "secret" credit reporting agencies lenders actually use. You\'ll see exactly what\'s on your business credit reports, fix errors instantly, boost your scores, and track improvements as they happen.',
      reveals: [
        'Dun & Bradstreet PAYDEX scores',
        'Experian Intelliscore and Financial Stability Risk',
        'Equifax Business Credit Reports',
        '"Hidden" bureau reports lenders actually check',
        'Real-time updates when tradelines report',
        'Error detection and dispute management'
      ]
    },
    {
      number: 4,
      icon: LayoutGrid,
      title: 'Maximize Your Fundability®',
      subtitle: 'Follow your custom roadmap to build a fundable business profile',
      body: 'Your business is unique. That\'s why our proven software creates a tailored Fundability roadmap specific to your business type, industry, and goals. You\'ll build credit strategically—not randomly—enhancing your profile step-by-step to secure higher limits, lower rates, and better terms.',
      reveals: [
        'Which vendors to start with (and in what order)',
        'When to apply for business credit cards',
        'How to layer accounts for maximum impact',
        'Strategic timing to avoid application denials',
        'Credit utilization strategies that boost scores',
        'Documentation lenders actually want to see'
      ]
    },
    {
      number: 5,
      icon: Users,
      title: 'Get MATCHED with Vendors, Lenders & Credit Issuers',
      subtitle: 'Access our exclusive network of 300+ funding sources',
      body: 'Fundability® matches you with secured and unsecured credit lines, vendor accounts, and business financing based purely on your company\'s creditworthiness—without personal guarantees or relying on personal credit.',
      reveals: [
        '300+ vendors, suppliers, and lenders who report to bureaus',
        'Tier 1: Vendor credit (starter accounts, easy approval)',
        'Tier 2: Retail business credit cards ($5K-$15K limits)',
        'Tier 3: Bank business credit cards ($10K-$50K limits)',
        'Tier 4: Business lines of credit and term loans ($50K-$150K+)',
        'Pre-qualified matching (only see offers you\'ll likely get approved for)'
      ],
      result: 'You\'re not guessing which lenders to apply to. You\'re strategically matched with funding sources most likely to approve your specific business profile.'
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How Fundability<sup className="text-2xl">®</sup> Prepares Your Business<br />for <span style={{ color: '#f9c65d' }}>Maximum Funding</span> in 5 Steps
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Your business has untapped funding potential. The challenge? Most businesses don't know how to unlock it. Our proven Fundability<sup>®</sup> system shows you exactly how fundable your business is right now—and the precise steps to maximize your access to capital.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-amber-50 rounded-xl p-8 shadow-lg border-2 border-amber-200 hover:shadow-2xl transition-all"
              >
                <div className="flex items-start gap-6">
                  {/* Step Number Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#f9c65d] rounded-full flex items-center justify-center text-gray-900 font-bold text-2xl shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  <div className="flex-1">
                    {/* Icon */}
                    <Icon className="w-12 h-12 text-[#f9c65d] mb-4" strokeWidth={2} />

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      STEP {step.number}: {step.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-lg text-[#d4a84b] font-semibold mb-4">{step.subtitle}</p>

                    {/* Body */}
                    <p className="text-gray-700 leading-relaxed mb-6">{step.body}</p>

                    {/* What This Reveals */}
                    <div className="bg-white rounded-lg p-6 border-l-4 border-[#f9c65d]">
                      <p className="font-bold text-gray-900 mb-3 text-lg">
                        {step.number === 2 ? 'WHAT YOU DISCOVER:' :
                         step.number === 3 ? 'WHAT YOU\'LL MONITOR:' :
                         step.number === 4 ? 'YOUR CUSTOM ROADMAP INCLUDES:' :
                         step.number === 5 ? 'EXCLUSIVE ACCESS TO:' : 'WHAT THIS REVEALS:'}
                      </p>
                      <ul className="space-y-2">
                        {step.reveals.map((reveal, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                            <span className="text-gray-700">{reveal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Hint or Result */}
                    {step.hint && (
                      <div className="mt-4 bg-amber-100 rounded-lg p-4 border-l-4 border-[#f9c65d]">
                        <p className="text-sm text-gray-800">
                          <strong>HINT:</strong> {step.hint}
                        </p>
                      </div>
                    )}
                    {step.result && (
                      <div className="mt-4 bg-green-100 rounded-lg p-4 border-l-4 border-green-600">
                        <p className="text-sm text-gray-800">
                          <strong>THE RESULT:</strong> {step.result}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// GUARANTEE SECTION
interface GuaranteeSectionProps {
  openFullServiceModal: () => void;
}

const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ openFullServiceModal }) => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-white to-amber-50 rounded-2xl p-10 shadow-2xl border-4 border-[#f9c65d]">
          <div className="text-center mb-8">
            <div className="inline-block bg-[#f9c65d] text-gray-900 px-6 py-2 rounded-full font-bold text-lg mb-4">
              OUR GUARANTEE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We'll Assist You with Accessing Credit Lines<br />from $5,000 to $150,000
            </h2>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl mx-auto">
            We don't just give you software and wish you luck. We continue developing your business credit profile until you're approved for business funding of at least <strong className="text-amber-700">$50,000</strong>*.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
            This isn't a "try and see" program. This is a proven system with a guarantee: <strong>if you follow the plan and practice healthy financial behaviors, we keep working with you until you hit that $50,000 minimum funding threshold.</strong>
          </p>

          <div className="text-center">
            <button
              onClick={openFullServiceModal}
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-lg"
            >
              Get Started with Full Service ($2,495)
              <ArrowRight className="w-5 h-5" />
            </button>
            <div className="mt-4">
              <PoweredByMesaGroup />
            </div>
          </div>

          <div className="mt-8 bg-white rounded-lg p-6 border-l-4 border-[#f9c65d]">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>*</strong>The $50,000 funding guarantee is based on our advisor team of Business Credit Experts assisting you with securing several credit approvals, totaling at least $50,000, through each tier of funding. If you do not comply with the plan or practice healthy financial behaviors, funding may not be approved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// WHAT'S INCLUDED SECTION
const WhatsIncludedSection = () => {
  const components = [
    {
      name: 'Business Credit Finance Suite',
      value: '$2,500',
      description: 'Your complete credit-building command center. Real-time Fundability Score tracking, vendor matching from our 300+ database, step-by-step roadmap customized to your business, and progress analytics showing exactly where you stand.'
    },
    {
      name: 'Business Credit Education & Restoration',
      value: '$2,500',
      description: 'Learn the insider strategies banks don\'t want you to know. Comprehensive training on business credit mechanics, dispute management for errors dragging down your scores, and restoration tactics to recover from past issues.'
    },
    {
      name: 'Personal Business Coaching & Advisement (12 months)',
      value: '$2,400',
      description: 'Your dedicated Business Credit Expert. Weekly check-in calls, strategy sessions, approval optimization, accountability partnership, and someone in your corner who wants you to win.'
    },
    {
      name: 'Access to Lending Sources in Specific Tiers',
      value: '$2,000',
      description: 'Our exclusive network of 300+ vendors, lenders, and credit issuers. Pre-qualified matching, insider relationships for better approval odds, and tier-by-tier access as your profile strengthens.'
    },
    {
      name: 'myNovaeDisputes Manager (12 months)',
      value: '$800',
      description: 'Professional-grade dispute software. Monitor all three bureaus, file disputes instantly, track resolution status, and fix errors that are costing you approvals.'
    },
    {
      name: 'Experian Smart Business Monitoring',
      value: '$600',
      description: 'Enterprise-level monitoring from one of the big three credit bureaus. Real-time alerts when changes hit your report, score tracking, and lender inquiry monitoring.'
    },
    {
      name: 'Personal Debt & Budgeting Software',
      value: '$240',
      description: 'Because business and personal finances impact each other. Cash flow planning, debt payoff strategies, and budgeting tools to keep your personal financial house in order while building business credit.'
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-6">
          Everything You Need to Build<br />Fundable Business Credit
        </h2>

        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          This isn't just software. This is a complete business credit building system with coaching, education, monitoring, and access to funding sources you can't get on your own.
        </p>

        {/* Value Breakdown Table */}
        <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl p-8 shadow-2xl border-2 border-amber-200 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">See what you're really getting:</h3>

          <div className="space-y-4">
            {components.map((component, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-bold text-gray-900 flex-1">{component.name}</h4>
                  <span className="text-2xl font-bold text-[#f9c65d]">{component.value}</span>
                </div>
                <p className="text-gray-700 leading-relaxed">{component.description}</p>
              </div>
            ))}

            {/* Total Value */}
            <div className="bg-gradient-to-r from-[#fad780] to-[#f9c65d] rounded-lg p-6 shadow-lg">
              <div className="flex justify-between items-center">
                <h4 className="text-xl font-bold text-gray-900">THE TRUE VALUE OF THIS SYSTEM</h4>
                <span className="text-3xl font-bold text-gray-900">$11,040</span>
              </div>
            </div>

            {/* Priceless */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-6 shadow-lg">
              <div className="flex justify-between items-center">
                <h4 className="text-xl font-bold text-white">The Success of Your Business</h4>
                <span className="text-3xl font-bold text-amber-400">PRICELESS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// PROGRAM OPTIONS SECTION
interface ProgramOptionsSectionProps {
  openFullServiceModal: () => void;
  openDIYModal: () => void;
}

const ProgramOptionsSection: React.FC<ProgramOptionsSectionProps> = ({ openFullServiceModal, openDIYModal }) => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4">
          Two Ways to Build Business Credit.<br />One Guaranteed Result.
        </h2>
        <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-12">
          Access Your Business Credit Finance Suite TODAY
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* FULL SERVICE PROGRAM */}
          <div className="bg-gradient-to-br from-white to-amber-50 rounded-2xl p-8 shadow-2xl border-4 border-[#f9c65d] hover:scale-105 transition-all">
            <div className="text-center mb-6">
              <div className="inline-block bg-[#f9c65d] text-gray-900 px-6 py-2 rounded-full font-bold text-lg mb-4">
                MOST POPULAR
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Full Service Program</h3>
              <div className="text-5xl font-bold text-[#f9c65d] mb-2">$2,495</div>
              <p className="text-gray-600">one-time payment</p>
              <p className="text-sm text-gray-600 mt-2">Or choose 3-month payment plan<br />(access granted after 2nd payment)</p>
            </div>

            <p className="text-center text-gray-700 font-semibold mb-6">
              Everything included. Full advisor support. Maximum results.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Get access to the complete Business Credit Finance Suite with 12 months of dedicated coaching, weekly check-in calls, priority support, and our $50K funding guarantee.
            </p>

            <div className="bg-white rounded-lg p-6 mb-6">
              <p className="font-bold text-gray-900 mb-3">PERFECT FOR:</p>
              <ul className="space-y-2">
                {[
                  'Business owners who want expert guidance every step',
                  'Entrepreneurs who value accountability and coaching',
                  'Those who want to maximize approval odds with insider knowledge',
                  'Businesses serious about accessing $50K-$150K in funding'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={openFullServiceModal}
              className="block text-center px-8 py-4 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-lg w-full"
            >
              Get Started with Full Service →
            </button>

            <p className="text-sm text-gray-600 text-center mt-4">Access granted within 2-3 business days</p>
          </div>

          {/* DIY PROGRAM */}
          <div className="bg-gradient-to-br from-white to-gray-100 rounded-2xl p-8 shadow-2xl border-4 border-gray-300 hover:scale-105 transition-all">
            <div className="text-center mb-6">
              <div className="inline-block bg-gray-700 text-white px-6 py-2 rounded-full font-bold text-lg mb-4">
                BEST VALUE
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">D.I.Y. Business Credit Program</h3>
              <div className="text-5xl font-bold text-gray-900 mb-2">$995</div>
              <p className="text-gray-600">one-time payment</p>
              <p className="text-sm text-gray-600 mt-2">Full payment required today for instant access</p>
            </div>

            <p className="text-center text-gray-700 font-semibold mb-6">
              Same software. Same funding tiers. Same education. You drive.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Get immediate access to the complete Business Credit Finance Suite, all educational materials, and funding source database—without the coaching or weekly calls.
            </p>

            <div className="bg-white rounded-lg p-6 mb-6">
              <p className="font-bold text-gray-900 mb-3">WHAT'S INCLUDED:</p>
              <ul className="space-y-2">
                {[
                  'Business Credit Builder D.I.Y. Platform',
                  'Personal Credit D.I.Y. Kit',
                  'Access to ALL Business Credit Tiers and Information',
                  'Funding Specialist Team (email support)',
                  'Complete Training Library',
                  'All Software Tools'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="font-bold text-gray-900 mb-3">PERFECT FOR:</p>
              <ul className="space-y-2">
                {[
                  'Self-motivated entrepreneurs who prefer working independently',
                  'Business owners with prior credit-building experience',
                  'Those who want the tools without ongoing coaching',
                  'Budget-conscious businesses ready to do the work'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={openDIYModal}
              className="block text-center px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-gray-300 text-lg w-full"
            >
              Get D.I.Y. Program Now →
            </button>

            <p className="text-sm text-gray-600 text-center mt-4">Instant access upon enrollment</p>
          </div>
        </div>

        {/* Powered By Mesa Group Capital - Centered Below Both Cards */}
        <div className="flex justify-center mt-8 mb-8">
          <PoweredByMesaGroup />
        </div>

        {/* Need Help Deciding */}
        <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help Deciding?</h3>
          <p className="text-gray-700 mb-6">
            Not sure which program fits your business? Our team can walk you through both options and help you make the best choice based on your goals, experience level, and timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyPopupButton
              text="Book a Consultation"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500"
              showArrow={false}
              prefillOptions={{
                customAnswers: {
                  serviceType: 'Business services',
                  primaryGoal: 'Establish/build business credit'
                },
                utm: {
                  source: 'business-credit-builder-page',
                  medium: 'website',
                  campaign: 'business-credit-builder',
                  content: 'consultation-cta'
                }
              }}
            />
            <a
              href="tel:6613103040"
              className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-gray-300 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call (661) 310-3040
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// TESTIMONIALS SECTION
const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "This has been a lifesaver on all levels. Getting my LLC up and running, having advisors there to call when I need them.",
      author: "Michelle",
      rating: 5
    },
    {
      text: "It's been everything it was advertised to be and then some. I'm not sure where you can find a program that is as comprehensive.",
      author: "Curtis H.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          What Our Clients Are Saying About the<br />Business Credit Builder Program
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#f9c65d] text-[#f9c65d]" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <p className="text-gray-900 font-bold">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// VIDEO SECTION
const VideoSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          See the Business Credit Finance Suite in Action
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Watch a quick walkthrough of the software platform
        </p>

        <div className="rounded-xl overflow-hidden shadow-lg border-4 border-[#f9c65d]">
          <video 
            className="w-full aspect-video"
            controls
            poster="/Mesa-BCFS-Video-thumbnail.jpg"
            preload="metadata"
          >
            <source src="/Mesa BCFS Video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <p className="text-gray-600 mt-6 leading-relaxed">
          With our intuitive software and dedicated full-service business credit adviser team, we streamline the process of securing business credit, guiding you effortlessly at every step.
        </p>
      </div>
    </section>
  );
};

// CHOICE SECTION
const ChoiceSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12">
          Two Paths Forward. Same Destination.
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Path 1: DIY */}
          <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-red-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <X className="w-7 h-7 text-red-600" strokeWidth={2.5} />
              Path 1: Build It Yourself
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can try to figure out business credit on your own. Research which vendors report. Navigate credit bureau requirements. Hope you're applying in the right order. Pray you don't damage your credit in the process.
            </p>
            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <p className="text-gray-800 font-semibold">
                Most business owners who go this route spend <strong>18-24 months</strong> (if they succeed at all) and make costly mistakes along the way.
              </p>
            </div>
          </div>

          {/* Path 2: Mesa System */}
          <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-green-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-7 h-7 text-green-600" strokeWidth={2.5} />
              Path 2: Let Us Engineer Your Approval
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We've built business credit for 720+ business owners. We know exactly which steps to take, in what order, and how to position you for maximum approval rates. Our system is proven. Our timeline is 6-12 months. Our guarantee is $50K minimum.
            </p>
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <p className="text-gray-800 font-semibold">
                The question isn't "can I build business credit?"<br />
                <strong>The question is: "How much is it costing me to wait?"</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl p-8 shadow-lg border-2 border-amber-200 max-w-3xl mx-auto">
          <p className="text-xl font-bold text-gray-900 mb-4 text-center">
            Every month without business credit is another month of:
          </p>
          <ul className="space-y-3">
            {[
              'Risking personal assets on business decisions',
              'Limited access to capital when opportunities arise',
              'Higher interest rates and worse terms',
              'Slower business growth tied to personal limits'
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" strokeWidth={2.5} />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

// FAQ SECTION (with 23 questions)
const FAQSection = ({ openFaq, setOpenFaq }: { openFaq: number | null; setOpenFaq: (index: number | null) => void }) => {
  const faqs = [
    {
      question: 'What is a Business Credit Bureau?',
      answer: 'A business credit bureau is an agency that collects and researches data on businesses and sells it for a fee to lenders and credit issuers to make lending decisions. It may also be called a commercial business credit reporting agency, or a corporate credit bureau. The three major business credit bureaus are Dun & Bradstreet, Experian Business, and Equifax Business.'
    },
    {
      question: 'What is a Business Credit History?',
      answer: 'A business credit history is the number of trade payment experiences reported on business credit reports. This includes payment terms, amounts, and whether payments were made on time. Your business credit history shows lenders how your business handles credit obligations over time.'
    },
    {
      question: 'What Does it Mean to Establish Business Tradelines?',
      answer: 'Establishing business tradelines is the act of applying to and using accounts that report to the business credit bureaus. A tradeline is any credit account—vendor accounts, business credit cards, lines of credit—that appears on your business credit report and shows your payment history.'
    },
    {
      question: 'What is a Personal Guarantee?',
      answer: 'A personal guarantee is an individual\'s legal promise to repay credit issued to a business where they are an owner, executive, or a partner. With business credit agreements, giving a personal guarantee essentially makes you a co-signer on the business credit account. You remain personally liable for any debts the business incurs. In practice, this means your personal credit undergoes a hard inquiry, your personal credit score can be affected, and your personal assets are at risk if the business defaults. With strong business credit, you can eventually access funding WITHOUT personal guarantees.'
    },
    {
      question: 'What is Trade Credit?',
      answer: 'Trade credit is credit issued by vendors to businesses for the purchase of goods or services. Instead of paying upfront, the vendor extends credit terms (like Net 30), allowing you to receive the product or service now and pay within the agreed timeframe.'
    },
    {
      question: 'What Are Business Credit Tiers?',
      answer: 'Business credit tiers are our terminology for categorizing credit sources by difficulty level and requirements. For example: Tier 1: Vendor Credit (easy to get started, minimal requirements), Tier 2: Retail Business Credit (requires some business credit history), Tier 3: Bank Business Credit Cards (requires stronger business credit profile), Tier 4: Business Lines of Credit & Term Loans (requires established business credit profile with strong scores).'
    },
    {
      question: 'How Does Business Credit Work When Seeking Loans?',
      answer: 'When a lending institution has more than just your personal credit scores to look at, they will review any other information they believe will better answer their one big question: Will you pay them back? Lending institutions review your business credit reports looking for: Do you pay your bills on time? Are there negative items on your credit reports? How long have you been in business? Is the business credible? If the answers to these questions satisfy the lending institution, then you\'re more likely to get a loan.'
    },
    {
      question: 'How Long Does It Take to Build Business Credit?',
      answer: 'Most businesses can build a fundable business credit profile in 6-12 months with our system. Timeline breakdown: Months 1-3: Foundation setup, initial vendor accounts. Months 3-6: Additional vendor accounts, retail business credit cards. Months 6-9: Bank business credit cards, higher limits. Months 9-12: Business lines of credit, term loans, equipment financing. Some clients see approvals as early as 30-45 days, while accessing $50K-$150K typically takes the full 6-12 months.'
    },
    {
      question: 'Do I Need an LLC or Corporation?',
      answer: 'While not legally required, having a formal business entity (LLC, Corporation, S-Corp) is strongly recommended and makes business credit building much easier and more effective. Sole proprietorships can technically build business credit, but you\'ll face more limitations and many lenders won\'t work with you without a formal business entity.'
    },
    {
      question: 'Will This Affect My Personal Credit?',
      answer: 'When done correctly, building business credit has ZERO impact on your personal credit score. Applications, inquiries, and payment history all report under your business EIN—not your personal Social Security Number. This is one of the biggest advantages of business credit.'
    },
    {
      question: 'What\'s the $50,000 Guarantee?',
      answer: 'We guarantee that if you follow our program and maintain healthy financial behaviors, we\'ll continue working with you until you\'re approved for at least $50,000 in total business funding. This means we\'re committed to your success. We don\'t just hand you software and disappear—we stay with you until you hit that $50K threshold. The $50,000 funding guarantee is based on our advisor team assisting you with securing several credit approvals, totaling at least $50,000, through each tier of funding.'
    },
    {
      question: 'What\'s the Difference Between Full Service and DIY?',
      answer: 'Full Service Program ($2,495): 12 months of dedicated business credit coaching, weekly check-in calls with your advisor, custom strategy development, priority support, accountability partnership, and $50K funding guarantee. D.I.Y. Program ($995): Complete Business Credit Finance Suite software access, all educational materials and training, email support from funding specialists, self-paced learning, no coaching calls. Both programs include the same software, education, and access to our 300+ vendor/lender network. The difference is the level of guidance and support.'
    },
    {
      question: 'Can I Do This Without Your Program?',
      answer: 'Technically, yes. However, most business owners who try to DIY business credit either fail or take 18-24+ months because they don\'t know: the proper sequence of applications, which vendors actually report to bureaus, credit bureau reporting requirements, how to optimize approval odds, when to move from one tier to the next. Our program compresses the timeline to 6-12 months and significantly increases success rates because we\'ve already figured out what works.'
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Common Questions About Building Business Credit
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-amber-300 transition-colors duration-300 shadow-md"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-amber-50 transition-colors duration-200"
              >
                <span className="font-semibold text-gray-900 pr-4 text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-amber-600 flex-shrink-0 transition-transform duration-300 ${
                    openFaq === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFaq === index ? 'max-h-[1000px]' : 'max-h-0'
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

// FINAL CTA SECTION
interface FinalCTASectionProps {
  openFullServiceModal: () => void;
  openDIYModal: () => void;
}

const FinalCTASection: React.FC<FinalCTASectionProps> = ({ openFullServiceModal, openDIYModal }) => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Build Business Credit That<br />Opens Doors to Real Funding?
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Stop risking your personal assets. Stop being limited by personal credit. Start building business credit that unlocks $5,000 to $150,000 in funding—without personal guarantees.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-6">
          {/* Full Service CTA */}
          <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl p-8 shadow-2xl border-4 border-amber-400 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">Full Service Program</h3>
            <div className="text-center mb-6 flex-grow">
              <div className="text-5xl font-bold text-amber-500 mb-2">$2,495</div>
              <p className="text-gray-700">12 months of coaching + weekly calls + $50K guarantee</p>
              <p className="text-sm text-gray-600 mt-2">Or choose 3-month payment plan (access after 2nd payment)</p>
            </div>
            <button
              onClick={openFullServiceModal}
              className="block text-center px-8 py-4 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-lg w-full"
            >
              Get Started Today
            </button>
          </div>

          {/* DIY CTA */}
          <div className="bg-gradient-to-br from-white to-gray-100 rounded-xl p-8 shadow-2xl border-4 border-gray-300 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">D.I.Y. Program</h3>
            <div className="text-center mb-6 flex-grow">
              <div className="text-5xl font-bold text-gray-900 mb-2">$995</div>
              <p className="text-gray-700">Complete system + software + all education</p>
              <p className="text-sm text-gray-600 mt-2">Instant access upon enrollment</p>
            </div>
            <button
              onClick={openDIYModal}
              className="block text-center px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-gray-300 text-lg w-full"
            >
              Purchase Now
            </button>
          </div>
        </div>

        {/* Powered By Mesa Group Capital - Centered Below Pricing Cards */}
        <div className="flex justify-center mb-12">
          <PoweredByMesaGroup />
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200 max-w-2xl mx-auto text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions? Speak with an Expert</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyPopupButton
              text="Book a Consultation"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500"
              showArrow={false}
              prefillOptions={{
                customAnswers: {
                  serviceType: 'Business services',
                  primaryGoal: 'Establish/build business credit'
                },
                utm: {
                  source: 'business-credit-builder-page',
                  medium: 'website',
                  campaign: 'business-credit-builder',
                  content: 'consultation-cta'
                }
              }}
            />
            <a
              href="tel:6613103040"
              className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-gray-300 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call (661) 310-3040
            </a>
          </div>
        </div>

        {/* Compliance Disclaimers */}
        <div className="mt-12 bg-gray-50 rounded-xl p-8 border-2 border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Important Disclosure:</h3>
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <p>
              Mesa Group Consulting and Mesa Group Capital (collectively "Mesa Group") provide business credit consulting and advisory services in partnership with Novae. We do not issue credit, make lending decisions, or guarantee specific approval amounts. Funding amounts and approval rates depend on individual business profiles, credit history, revenue, and lender underwriting criteria. Results vary by client.
            </p>
            <p>
              The $50,000 funding guarantee is based on our advisor team of Business Credit Experts, working in conjunction with our partners at Novae, assisting the client with securing several credit approvals totaling at least $50,000 across multiple accounts through each tier of funding. If the client does not comply with the program recommendations or does not practice healthy financial behaviors, funding may not be approved.
            </p>
            <p>
              Credit inquiries may temporarily affect personal credit scores during the initial setup phase. All business credit products are subject to terms and conditions set by issuing banks and lenders. This program requires responsible credit management and timely payments to maintain and build business credit scores.
            </p>
            <p>
              Mesa Group Consulting and Mesa Group Capital are not lenders, banks, credit bureaus, or financial institutions. We are consulting firms that provide strategy, education, software tools, and guidance for building business credit through our partnership with Novae. The Business Credit Finance Suite and related software platforms are powered by Novae technology. All credit decisions are made by issuing banks and lenders based on their individual underwriting criteria.
            </p>
            <p>
              <strong>Partnership Disclosure:</strong> This program is delivered through a strategic partnership between Mesa Group Consulting, Mesa Group Capital, and Novae. Novae provides the technology platform (Business Credit Finance Suite, myNovaeDisputes Manager) and certain educational materials. Mesa Group provides consulting, coaching, and advisory services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessCreditBuilder;
