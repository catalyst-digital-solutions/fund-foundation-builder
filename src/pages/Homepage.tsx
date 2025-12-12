import React, { useState } from 'react';
import { 
  Check,
  CheckCircle,
  ArrowRight, 
  Phone,
  CreditCard,
  DollarSign,
  Car,
  GraduationCap,
  TrendingDown,
  Umbrella,
  Scale,
  LifeBuoy,
  Building2,
  ShieldCheck,
  Users,
  Target,
  Briefcase,
  Home,
  Heart,
  PlayCircle,
  ChevronDown,
  Star,
  TrendingUp,
  Award,
  Clock,
  Lock,
  X
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Import media logos
import kget17Logo from '@/assets/kget-17-logo.png';
import studio17Logo from '@/assets/studio-17-logo.png';
import telemundoLogo from '@/assets/telemundo-logo.png';
import cwLogo from '@/assets/cw-logo.png';

// ============================================================================
// INNOVATIVE SERVICES TAB COMPONENT
// ============================================================================

const ServicesTabSystem = () => {
  const [activeTab, setActiveTab] = useState('credit-cards');

  const services = [
    {
      id: 'credit-cards',
      icon: CreditCard,
      label: 'Credit Cards',
      headline: 'Find Your Perfect Match Without Hurting Your Score',
      description: 'Compare and choose offers from top providers tailored to your credit profile. Our intelligent matching system connects you with cards you\'re likely to be approved for.',
      benefits: [
        'Pre-qualified offers with no hard inquiry',
        'Compare 400+ cards from top issuers',
        'Match based on your credit profile',
        'Rewards, cashback, and 0% APR options'
      ],
      link: '/credit-cards',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'personal-loans',
      icon: DollarSign,
      label: 'Personal Loans',
      headline: 'Access Up to $250,000 in Less Than 60 Seconds',
      description: 'Receive pre-qualified personal loan offers from multiple lenders instantly. Competitive rates, flexible terms, and fast funding for any purpose.',
      benefits: [
        'Pre-qualified offers in under 60 seconds',
        'Loan amounts from $1,000 to $250,000',
        'Competitive rates starting at 5.99% APR',
        'Same-day funding available'
      ],
      link: '/personal-loans',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'auto-refi',
      icon: Car,
      label: 'Auto Loan Refi',
      headline: 'Lower Your Monthly Car Payment Today',
      description: 'Refinance your auto loan and potentially save thousands. Get offers from $10,000 to $100,000 with competitive rates in seconds.',
      benefits: [
        'Reduce monthly payments by up to 30%',
        'Loan amounts $10,000 to $100,000',
        'Rates as low as 3.99% APR',
        'Keep your existing car'
      ],
      link: '/auto-loan-refi',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'student-refi',
      icon: GraduationCap,
      label: 'Student Loan Refi',
      headline: 'Break Free from Student Loan Burden',
      description: 'Refinance up to $500,000 in student loans with terms up to 20 years. Lower your rate and take control of your financial future.',
      benefits: [
        'Refinance up to $500,000',
        'Terms up to 20 years',
        'Fixed and variable rate options',
        'No origination or application fees'
      ],
      link: '/student-loan-refi-2',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'debt-consolidation',
      icon: TrendingDown,
      label: 'Debt Consolidation',
      headline: 'Simplify Multiple Debts Into One Payment',
      description: 'Combine multiple high-interest debts into a single, manageable loan with a lower interest rate. Take control of your finances.',
      benefits: [
        'One payment instead of many',
        'Lower overall interest rates',
        'Fixed monthly payments',
        'Improve credit through on-time payments'
      ],
      link: '/debt-consolidation-loan',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      id: 'debt-relief',
      icon: Umbrella,
      label: 'Debt Relief',
      headline: 'Reduce Your Total Debt Balance by Up to 50%',
      description: 'Achieve financial freedom by reducing your overall debt burden. Our partners negotiate with creditors to significantly lower what you owe.',
      benefits: [
        'Reduce debt by 30-50% on average',
        'Become debt-free in 24-48 months',
        'Stop collection calls',
        'One affordable monthly payment'
      ],
      link: '/debt-relief',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'estate-planning',
      icon: Scale,
      label: 'Trust & Will',
      headline: 'Protect Your Legacy and Loved Ones',
      description: 'Create customized, state-specific trusts and wills online in minutes. Ensure your assets are protected and your wishes are honored.',
      benefits: [
        'Attorney-reviewed legal documents',
        'State-specific customization',
        'Protect assets from probate',
        'Complete in 15-20 minutes'
      ],
      link: '/trust-and-will-plan',
      color: 'from-amber-500 to-yellow-500'
    },
    {
      id: 'life-insurance',
      icon: LifeBuoy,
      label: 'Life Insurance',
      headline: 'Secure Your Family\'s Financial Future',
      description: 'Compare life insurance quotes from top-rated providers. Affordable coverage to protect the people who matter most.',
      benefits: [
        'Term and whole life options',
        'Coverage from $50,000 to $10M+',
        'Instant quotes from 30+ carriers',
        'No medical exam options available'
      ],
      link: '/life-insurance',
      color: 'from-rose-500 to-pink-500'
    }
  ];

  const activeService = services.find(s => s.id === activeTab)!;
  const IconComponent = activeService.icon;

  return (
    <div className="relative">
      {/* Tab Navigation - Horizontal Scroll on Mobile, Grid on Desktop */}
      <div className="mb-8 overflow-x-auto scrollbar-hide">
        <div className="flex lg:grid lg:grid-cols-8 gap-3 min-w-max lg:min-w-0 pb-4 lg:pb-0">
          {services.map((service) => {
            const ServiceIcon = service.icon;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`
                  group relative flex flex-col items-center justify-center
                  px-6 py-4 rounded-xl transition-all duration-300
                  min-w-[140px] lg:min-w-0
                  ${activeTab === service.id 
                    ? 'bg-gradient-to-br from-amber-400 to-amber-500 shadow-xl scale-105' 
                    : 'bg-white hover:bg-amber-50 shadow-md hover:shadow-lg'
                  }
                `}
              >
                <ServiceIcon 
                  className={`w-8 h-8 mb-2 transition-colors ${
                    activeTab === service.id ? 'text-white' : 'text-amber-600 group-hover:text-amber-700'
                  }`}
                />
                <span className={`text-sm font-semibold text-center transition-colors ${
                  activeTab === service.id ? 'text-white' : 'text-gray-900'
                }`}>
                  {service.label}
                </span>
                {activeTab === service.id && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Display */}
      <div className="relative bg-gradient-to-br from-white via-amber-50/30 to-white rounded-3xl shadow-2xl overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${activeService.color} opacity-5`} />
        
        <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-12">
          
          {/* Left Column - Service Details */}
          <div className="space-y-6 animate-fadeIn">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${activeService.color} shadow-lg`}>
              <IconComponent className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              {activeService.headline}
            </h3>

            <p className="text-lg text-gray-700 leading-relaxed">
              {activeService.description}
            </p>

            <div className="space-y-3">
              {activeService.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href={activeService.link}
                className={`
                  inline-flex items-center gap-2 px-8 py-4 rounded-xl
                  bg-gradient-to-r ${activeService.color}
                  text-white font-semibold shadow-lg hover:shadow-xl
                  transform hover:scale-105 transition-all duration-200
                `}
              >
                Learn More & Get Started
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className={`absolute inset-0 bg-gradient-to-br ${activeService.color} opacity-20 blur-3xl rounded-full`} />
              
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-gray-200/50">
                <div className="flex items-center justify-between mb-6">
                  <IconComponent className={`w-12 h-12 bg-gradient-to-br ${activeService.color} text-white p-2.5 rounded-xl`} />
                  <Star className="w-6 h-6 text-amber-500 fill-amber-500" />
                </div>

                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  {activeService.label}
                </h4>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span className="text-sm text-gray-600">Average Approval</span>
                    <span className="text-lg font-bold text-green-600">93%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span className="text-sm text-gray-600">Avg. Time to Approval</span>
                    <span className="text-lg font-bold text-blue-600">&lt; 2 min</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span className="text-sm text-gray-600">Customer Rating</span>
                    <span className="text-lg font-bold text-amber-600">4.8/5.0</span>
                  </div>
                </div>

                <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-2xl" />
                <div className="absolute bottom-4 left-4 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-2xl" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Additional Services Callout */}
      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-4">
          Need help with credit restoration, business funding, or credit building?
        </p>
        <a
          href="#additional-services"
          className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold"
        >
          View All Services
          <ChevronDown className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

// ============================================================================
// MAIN HOMEPAGE COMPONENT
// ============================================================================

const Homepage = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const openConsultationModal = () => {
    // Opens GoHighLevel contact form in new tab
    window.open('https://api.leadconnectorhq.com/widget/booking/FNqPZuq2sL5wFO5kGELK', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* ================================================================
          SECTION 1: HERO SECTION
      ================================================================ */}
      <section className="relative bg-gradient-to-br from-white via-amber-50 to-orange-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-amber-100/30 to-yellow-100/30 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Content */}
            <div className="space-y-6 lg:space-y-8">
              
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-amber-200">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">
                  2,500+ Clients Served Since 2023
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Premier <span className="text-[#f9c65d]">Financial Partner</span>—From Credit to Capital, We've Got You Covered
              </h1>

              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                We've built a comprehensive financial ecosystem with the nation's top providers—giving you institutional-grade solutions with personalized guidance every step of the way.
              </p>

              <p className="text-lg text-gray-600">
                Whether you're building credit, accessing capital, or protecting your legacy—Mesa Group delivers white-glove service backed by industry-leading technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={openConsultationModal}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border-2 border-amber-500"
                >
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>
                
                <a
                  href="tel:6613103040"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-xl shadow-md hover:shadow-lg border-2 border-gray-300 transition-all duration-200"
                >
                  <Phone className="w-5 h-5 text-amber-600" />
                  (661) 310-3040
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>2,500+ Clients Served</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>150+ Five-Star Reviews</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Trilingual Support</span>
                </div>
              </div>
            </div>

            {/* Right Column - Video Placeholder */}
            <div className="relative">
              <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm hover:bg-black/30 transition-all cursor-pointer group">
                  <div className="transform group-hover:scale-110 transition-transform">
                    <PlayCircle className="w-24 h-24 text-white drop-shadow-lg" />
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl">
                    <p className="text-sm font-semibold text-gray-900 mb-1">
                      Watch: Why Mesa Group Is Different
                    </p>
                    <p className="text-xs text-gray-600">
                      45-90 second founder video • Evert Calderon
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -right-4 top-12 bg-white rounded-xl shadow-xl p-4 animate-float hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">$100M+</p>
                    <p className="text-xs text-gray-600">Funding Facilitated</p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-4 bottom-12 bg-white rounded-xl shadow-xl p-4 animate-float-delayed hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-amber-600 fill-amber-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">4.9/5.0</p>
                    <p className="text-xs text-gray-600">Client Rating</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 2: MEDIA TRUST STRIP
      ================================================================ */}
      <section className="bg-gradient-to-br from-[#fcf7e6] via-white to-[#fcf7e6] py-10 border-y border-gray-200 relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#f9c65d]/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#f9c65d]/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-center text-gray-500 text-sm font-medium tracking-wider uppercase mb-6">
            As Featured On
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center justify-items-center">
            <img src={kget17Logo} alt="KGET 17" className="h-32 sm:h-40 md:h-48 w-auto max-w-[280px] md:max-w-[360px] opacity-80 hover:opacity-100 transition-opacity object-contain" />
            <img src={studio17Logo} alt="Studio 17" className="h-32 sm:h-40 md:h-48 w-auto max-w-[280px] md:max-w-[360px] opacity-80 hover:opacity-100 transition-opacity object-contain" />
            <img src={telemundoLogo} alt="Telemundo" className="h-32 sm:h-40 md:h-48 w-auto max-w-[280px] md:max-w-[360px] opacity-80 hover:opacity-100 transition-opacity object-contain" />
            <img src={cwLogo} alt="The CW" className="h-32 sm:h-40 md:h-48 w-auto max-w-[280px] md:max-w-[360px] opacity-80 hover:opacity-100 transition-opacity object-contain" />
          </div>

          <p className="text-center text-gray-600 text-sm mt-6">
            Recognized across California and beyond as a trusted financial resource
          </p>
        </div>
      </section>

      {/* ================================================================
          SECTION 2A: THE PAIN (EMOTIONAL AMPLIFICATION)
      ================================================================ */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            You Deserve <span className="text-[#f9c65d]">Better</span> Than This
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
            <p>
              Getting denied for that apartment while the landlord looked at you like you're irresponsible.
            </p>
            
            <p>
              Watching your friends book trips with credit card rewards while you're stuck paying cash for everything.
            </p>
            
            <p>
              That sick feeling in your stomach every time you apply for something—knowing the rejection is coming before you even hit submit.
            </p>
            
            <p>
              The stress of being one emergency away from financial catastrophe. The shame of pulling out your debit card while everyone else swipes credit. The weight of knowing your financial past is stealing your financial future.
            </p>
            
            <p className="text-2xl font-semibold text-gray-900 pt-4">
              This isn't about a number on a report. This is about your dignity. Your opportunities. Your family's future.
            </p>
            
            <p className="text-2xl font-bold text-[#f9c65d]">
              And it ends here.
            </p>
          </div>

        </div>
      </section>

      {/* ================================================================
          SECTION 3: THE MESA ADVANTAGE
      ================================================================ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              We Did the <span className="text-[#f9c65d]">Heavy Lifting</span>. You Get the Results.
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-8">
              You've spent enough time feeling stuck. Enough nights lying awake wondering how you'll ever get ahead. Enough years watching everyone else build wealth while you're just trying to survive.
            </p>
            
            <p className="text-2xl font-bold text-[#f9c65d]">
              That cycle breaks today.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16 space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Most people navigate their financial lives across dozens of disconnected platforms—one for credit monitoring, another for loans, a third for estate planning. It's inefficient, confusing, and leaves critical gaps in your strategy.
            </p>
            
            <p className="font-semibold text-gray-900">
              But here's what really costs you:
            </p>
            
            <p>
              The hours wasted researching which companies are legitimate. The money lost on trial-and-error with the wrong services. The opportunities missed because you didn't know where to start.
            </p>
            
            <p className="text-xl font-bold text-gray-900">
              Mesa Group eliminates all of that.
            </p>
            
            <p>
              We've spent years building relationships with the nation's premier financial service providers—from credit restoration platforms to business funding networks to estate planning technologies. We've negotiated access, vetted their credibility, and integrated them into a single, cohesive ecosystem.
            </p>
            
            <p className="text-xl font-semibold text-gray-900">
              We did the homework. We made the connections. We built the shortcuts.
            </p>
            
            <p className="text-xl font-semibold text-[#f9c65d]">
              You get the results.
            </p>
          </div>

          {/* Cost Comparison */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 lg:p-12 mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              The Cost of Going It Alone
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-red-600 mb-4">
                  WITHOUT MESA GROUP
                </h4>
                <div className="space-y-3">
                  {[
                    '10+ hours researching which platforms are trustworthy',
                    '$500+ on trial-and-error with the wrong services',
                    '6-12 months longer to see results (if they see results at all)',
                    'Countless opportunities lost to confusion and overwhelm'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-4 h-4 text-red-600" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-green-600 mb-4">
                  WITH MESA GROUP
                </h4>
                <div className="space-y-3">
                  {[
                    'Instant access to vetted, industry-leading platforms',
                    'A clear roadmap built specifically for your situation',
                    'Expert guidance at every step—no more guessing',
                    'Real results in 45-90 days for most clients'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-center text-xl font-bold text-gray-900 mt-8 pt-8 border-t border-amber-200">
              The difference? You're not alone anymore.
            </p>
          </div>

          {/* Key Differentiators */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Strategic Partnerships
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We partner with industry leaders like SmartCredit, SuperMoney, and Novae—platforms serving millions of Americans. You get enterprise-level tools with boutique-level service.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Expert Guidance
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our team evaluates your complete financial picture and recommends solutions based on your goals—not commissions. We succeed when you succeed.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Proven Results
              </h3>
              <p className="text-gray-700 leading-relaxed">
                With over $100M in client funding facilitated and 2,500+ successful outcomes, we demonstrate what happens when expertise meets execution.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================================================================
          SECTION 4: INNOVATIVE SERVICES TAB SYSTEM
      ================================================================ */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-amber-50/30 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <div className="inline-block bg-amber-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-4">
              COMPREHENSIVE CREDIT & FINANCIAL SERVICES
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Check Out Our <span className="text-[#f9c65d] italic">Services</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our complete ecosystem of financial solutions—from credit building to life insurance, all in one place.
            </p>
          </div>

          <ServicesTabSystem />

        </div>
      </section>

      {/* ================================================================
          SECTION 4B: ADDITIONAL SERVICES
      ================================================================ */}
      <section id="additional-services" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12">
            Complete <span className="text-[#f9c65d]">Credit & Business</span> Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            
            {/* Credit Solutions */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Credit Solutions
              </h3>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  Professional Credit Restoration
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  DIY Credit Repair (Powered by Creditily)
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  Credit Monitoring (Powered by SmartCredit)
                </li>
              </ul>
              
              <a href="/credit-repair-2" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold">
                View All Credit Services
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Business Funding */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Business Funding
              </h3>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  0% Interest Business Funding (Exclusive)
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  Business Funding Network (75+ Lenders)
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  Business Credit Building
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  Business Debt Relief
                </li>
              </ul>
              
              <a href="/business-funding" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold">
                Explore Business Solutions
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Build Credit */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Build Credit
              </h3>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  Secured Credit Cards
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  Credit Builder Loans
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  Authorized User Tradelines
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  Credit Education Resources
                </li>
              </ul>
              
              <a href="/business-credit" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold">
                Start Building Credit
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Primary CTA */}
          <div className="text-center bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Not Sure Where to Start?
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Schedule your free consultation and let our experts create a personalized roadmap for your financial success.
            </p>
            <button
              onClick={openConsultationModal}
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all border-2 border-amber-500"
            >
              Schedule My Free Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </section>

      {/* ================================================================
          SECTION 4A: THE TRANSFORMATION (EMOTIONAL FUTURE STATE)
      ================================================================ */}
      <section className="py-16 md:py-24 bg-[#3e3e3e] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Imagine Your Life <span className="text-amber-400">6 Months From Now</span>
          </h2>

          <div className="space-y-6 text-lg md:text-xl leading-relaxed">
            <p>
              You check your credit score and it's climbed over 100 points. The collections are gone. The late payments—removed. Your report is clean.
            </p>
            
            <p>
              You apply for that apartment you've been eyeing. <span className="font-bold text-green-400">Approved.</span>
            </p>
            
            <p>
              You walk into the car dealership with confidence instead of dread. The finance manager comes back smiling. <span className="font-bold text-green-400">Approved at 6.9% instead of 18%.</span>
            </p>
            
            <p>
              You tell your kids you're buying a house. They don't have to move again. You're building something they can inherit.
            </p>
            
            <p className="text-2xl font-bold text-amber-400 pt-6">
              This isn't a fantasy. This is what happens when you have the right partner.
            </p>
            
            <div className="pt-8 space-y-4 text-gray-300">
              <p>
                You stop living paycheck to paycheck because you consolidated that debt at a fraction of the interest.
              </p>
              <p>
                You stop losing sleep because you have estate planning in place—your family is protected.
              </p>
              <p>
                You stop wondering "what if" because you secured that business funding and finally launched.
              </p>
            </div>
            
            <div className="pt-8 space-y-4 text-xl font-semibold">
              <p>This is the freedom good credit creates.</p>
              <p>This is the opportunity smart money decisions unlock.</p>
              <p>This is the legacy Mesa Group helps you build.</p>
            </div>
            
            <p className="text-2xl font-bold text-white pt-8">
              Your financial past doesn't have to define your financial future. Not anymore.
            </p>
          </div>

        </div>
      </section>

      {/* ================================================================
          SECTION 5: WHY MESA GROUP (STRATEGIC DIFFERENTIATION)
      ================================================================ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Families Choose <span className="text-[#f9c65d]">Mesa Group</span> When Everything Else Has Failed
            </h2>
            
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              You've tried fixing it yourself. You've looked at other companies. You've spent money on services that promised results and delivered excuses.
              <br/><br/>
              We get it. Trust is earned, not given.
              <br/><br/>
              <span className="font-semibold">Here's why 2,500+ families decided Mesa Group was different—and why they were right.</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 lg:p-10">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                We've Actually Been There
              </h3>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Most financial companies are run by people who've never struggled with bad credit. Never been denied. Never felt the shame of financial rejection.
                </p>
                
                <p className="font-semibold">
                  Not us.
                </p>
                
                <p>
                  Our founder had a 490 credit score. Failed business. Nearly empty bank account. He watched his immigrant parents almost lose their home and everything they built when they risked coming to this country. He knows what it feels like to be stuck.
                </p>
                
                <p>
                  That's why Mesa Group operates different. We're not here to judge you. We're here to guide you—because we've walked the exact path you're on right now.
                </p>
                
                <p className="font-bold text-gray-900">
                  You're not talking to salespeople. You're talking to people who understand.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 lg:p-10">
              <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                We Built the Shortcuts You Need
              </h3>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  You know what separates people who succeed from people who stay stuck? <span className="font-semibold">Information.</span>
                </p>
                
                <p>
                  The wealthy have financial advisors, estate planners, CPAs, credit specialists, funding networks. They have access.
                </p>
                
                <p className="font-bold text-gray-900">
                  Mesa Group gives you that same access.
                </p>
                
                <p>
                  We spent years building relationships with SmartCredit, SuperMoney, Novae, and more. We negotiated partnerships so you get enterprise-level tools without enterprise-level prices.
                </p>
                
                <p className="font-bold text-[#f9c65d]">
                  The shortcuts the wealthy use? Now they're yours too.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 lg:p-10">
              <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Your Success is Our Success
              </h3>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Here's the difference between Mesa Group and everyone else:
                </p>
                
                <p>
                  <span className="font-semibold">Other companies:</span> Get paid whether you succeed or not. They take your money upfront, deliver mediocre results, and move on.
                </p>
                
                <p>
                  <span className="font-semibold text-green-600">Mesa Group:</span> We only win when you win. Our reputation is built on your transformation. Your referrals. Your success stories.
                </p>
                
                <p>
                  That's why we work harder. That's why we care more. That's why we've maintained a perfect 5-star rating across 150+ Google reviews.
                </p>
                
                <p className="font-semibold">
                  When you succeed, you tell people. And that's how we grow.
                </p>
                
                <p className="font-bold text-gray-900">
                  We're not here to make a quick buck. We're here to build generational relationships with families who trust us with their financial futures.
                </p>
                
                <p className="font-bold text-green-600">
                  That trust? We protect it with everything we have.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================================================================
          SECTION 6: HOW IT WORKS (PROCESS TRANSPARENCY)
      ================================================================ */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Getting Started is <span className="text-[#f9c65d]">Straightforward</span>
            </h2>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We've designed our process to be transparent, efficient, and friction-free—so you know exactly what to expect at every step.
            </p>
          </div>

          {/* 3-Step Process */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            
            <div className="relative">
              <div className="absolute -top-6 left-8 w-14 h-14 bg-amber-400 rounded-full flex items-center justify-center text-2xl font-bold text-gray-900 shadow-lg">
                1
              </div>
              
              <div className="bg-white rounded-2xl p-8 pt-12 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-blue-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Free Consultation
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Schedule a conversation with our team to discuss your current situation, goals, and challenges. We'll provide expert guidance on your best path forward—completely free.
                </p>
                
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2">What happens:</p>
                  <p className="text-sm text-gray-600">
                    You'll complete a brief contact form or call us directly. We'll schedule a consultation at your convenience to review your needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-6 left-8 w-14 h-14 bg-amber-400 rounded-full flex items-center justify-center text-2xl font-bold text-gray-900 shadow-lg">
                2
              </div>
              
              <div className="bg-white rounded-2xl p-8 pt-12 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-purple-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Custom Recommendations
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Based on your analysis, we'll recommend the right solutions from our ecosystem—whether that's credit restoration, funding access, debt relief, or financial product comparisons.
                </p>
                
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2">What happens:</p>
                  <p className="text-sm text-gray-600">
                    Our team creates a personalized action plan with transparent pricing and expected timelines.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-6 left-8 w-14 h-14 bg-amber-400 rounded-full flex items-center justify-center text-2xl font-bold text-gray-900 shadow-lg">
                3
              </div>
              
              <div className="bg-white rounded-2xl p-8 pt-12 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7 text-green-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Execute & Transform
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  We guide you through implementation, provide ongoing support, and track your progress until you hit your goals. You're never alone in this process.
                </p>
                
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2">What happens:</p>
                  <p className="text-sm text-gray-600">
                    Regular check-ins, progress updates, and adjustments as needed. We're with you every step of the way.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <button
              onClick={openConsultationModal}
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all border-2 border-amber-500"
            >
              Start My Free Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </section>

      {/* ================================================================
          SECTION 7: WHO WE SERVE (PERSONAS)
      ================================================================ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Who We <span className="text-[#f9c65d]">Serve</span>
            </h2>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Mesa Group's ecosystem is built for Americans at every stage of their financial journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Home className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                First-Time Buyers
              </h3>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Dreaming of homeownership but need to boost credit scores, reduce debt, or access down payment assistance.
              </p>
              
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-900">Typical needs:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Credit restoration</li>
                  <li>• Debt consolidation</li>
                  <li>• Pre-approval prep</li>
                  <li>• Down payment strategies</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Growing Families
              </h3>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Expanding families needing to protect their future through estate planning, life insurance, and strategic credit optimization.
              </p>
              
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-900">Typical needs:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Life insurance</li>
                  <li>• Estate planning</li>
                  <li>• Credit optimization</li>
                  <li>• Savings strategies</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Business Owners & Entrepreneurs
              </h3>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Accessing funding to grow or sustain operations, building business credit, and protecting their company's financial health.
              </p>
              
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-900">Typical needs:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 0% business funding</li>
                  <li>• Business credit building</li>
                  <li>• Debt restructuring</li>
                  <li>• Capital access</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Anyone Rebuilding
              </h3>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Recovering from financial setbacks—divorce, medical debt, job loss, business failure—and creating a path forward with expert guidance.
              </p>
              
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-900">Typical needs:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Credit restoration</li>
                  <li>• Debt relief</li>
                  <li>• Fresh start strategies</li>
                  <li>• Financial coaching</li>
                </ul>
              </div>
            </div>

          </div>

          <p className="text-center text-xl text-gray-700 mt-12">
            No matter where you're starting, we have the platform, partnerships, and expertise to help you move forward.
          </p>

        </div>
      </section>

      {/* ================================================================
          SECTION 8: RESULTS & SOCIAL PROOF
      ================================================================ */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Real Clients. Real Results. Real <span className="text-[#f9c65d]">Transformation</span>.
            </h2>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Don't just take our word for it—hear from families and businesses who've used Mesa Group to change their financial futures.
            </p>
          </div>

          {/* Text Testimonials */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />
                ))}
              </div>
              
              <p className="text-white leading-relaxed mb-6">
                "Professional, transparent, and results-driven. Mesa Group facilitated our business funding when traditional banks turned us down. Game-changer for our growth."
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold">
                  MT
                </div>
                <div>
                  <p className="font-semibold text-white">Michael T.</p>
                  <p className="text-sm text-gray-400">Business Owner, Bakersfield, CA</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />
                ))}
              </div>
              
              <p className="text-white leading-relaxed mb-6">
                "I was skeptical of credit repair companies after being burned before. Mesa Group was different—they educated me on every step and delivered exactly what they promised."
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center text-white font-bold">
                  SL
                </div>
                <div>
                  <p className="font-semibold text-white">Sarah L.</p>
                  <p className="text-sm text-gray-400">Homeowner, Los Angeles, CA</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />
                ))}
              </div>
              
              <p className="text-white leading-relaxed mb-6">
                "The team at Mesa helped me consolidate $45K in debt and create a realistic repayment plan. I finally feel like I'm in control of my finances again."
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                  JR
                </div>
                <div>
                  <p className="font-semibold text-white">James R.</p>
                  <p className="text-sm text-gray-400">Marketing Manager, Fresno, CA</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />
                ))}
              </div>
              
              <p className="text-white leading-relaxed mb-6">
                "Their 0% business funding program gave us the capital we needed without crushing interest payments. Incredible opportunity that we wouldn't have found elsewhere."
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white font-bold">
                  JK
                </div>
                <div>
                  <p className="font-semibold text-white">Jennifer K.</p>
                  <p className="text-sm text-gray-400">Restaurant Owner, Bakersfield, CA</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />
                ))}
              </div>
              
              <p className="text-white leading-relaxed mb-6">
                "From credit monitoring to estate planning—Mesa Group truly has everything under one roof. I don't have to manage multiple companies anymore."
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold">
                  DM
                </div>
                <div>
                  <p className="font-semibold text-white">David M.</p>
                  <p className="text-sm text-gray-400">Financial Consultant, San Diego, CA</p>
                </div>
              </div>
            </div>

            {/* Google Reviews CTA Card */}
            <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-center items-center text-center text-white">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                <Star className="w-10 h-10 text-amber-500 fill-amber-500" />
              </div>
              
              <p className="text-3xl font-bold mb-2">150+</p>
              <p className="text-lg font-semibold mb-4">Five-Star Reviews</p>
              
              <a
                href="https://www.google.com/search?q=mesa+group+consulting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Read All Reviews
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Compliance Disclaimer */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-600 max-w-3xl mx-auto">
              <strong>Important Disclosure:</strong> Results vary based on individual circumstances. Testimonials reflect individual client experiences and are not a guarantee of similar outcomes. All testimonials are from actual clients.
            </p>
          </div>

        </div>
      </section>

      {/* ================================================================
          SECTION 9: FOUNDER'S STORY (HUMANIZE THE BRAND)
      ================================================================ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why I Built <span className="text-[#f9c65d]">Mesa Group</span>—And Why It Had to Exist
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Photo Placeholder */}
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 bg-amber-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-16 h-16 text-white" />
                    </div>
                    <p className="text-lg font-semibold text-gray-700">
                      [Insert Professional Photo of Evert Calderon Here]
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Founder & CEO, Mesa Group Consulting
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Story */}
            <div className="order-1 lg:order-2 space-y-6 text-lg text-gray-700 leading-relaxed">
              
              <p className="text-2xl font-bold text-gray-900">
                At 25, I had bad credit, a failed business, and nearly nothing in the bank.
              </p>
              
              <p>
                But that's not even the painful part.
              </p>
              
              <p>
                The painful part was watching my immigrant parents almost lose their home in 2008—not because they were lazy or irresponsible, but because no one ever explained how the financial system worked. They worked two jobs. They paid their bills. They did everything they were supposed to do.
              </p>
              
              <p className="font-semibold text-gray-900">
                And the system still almost crushed them.
              </p>
              
              <p>
                I watched my family file bankruptcy in the early 2000s. I saw what it did to them—the stress, the shame, the feeling of failure even though they worked harder than anyone I knew.
              </p>
              
              <p>
                When I tried to start my own life, I repeated the same mistakes. Credit cards I didn't understand. Loans I couldn't afford. A business that collapsed under debt I didn't know how to manage.
              </p>
              
              <p className="text-xl font-bold text-red-600">
                I'll never forget the feeling of checking my credit score for the first time: 490.
              </p>
              
              <p>
                I felt like a failure. Like I'd let my family down. Like I was destined to repeat their struggle.
              </p>
              
              <p className="text-xl font-bold text-[#f9c65d]">
                But then I realized something that changed everything:
              </p>
              
              <p className="text-2xl font-bold text-gray-900">
                Bad credit doesn't mean you're irresponsible. It means no one taught you.
              </p>
              
              <p>
                And if no one taught my parents—hardworking immigrants who risked everything to come to this country and build a life—then how many other families were out there navigating this system blind?
              </p>
              
              <p className="text-xl font-bold text-gray-900">
                That's why I built Mesa Group.
              </p>
              
              <p>
                So it could be the strategic financial partner my family never had when we needed it most.
              </p>
              
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 my-8">
                <p className="font-semibold text-gray-900">
                  Today, we've helped over 2,500 families and businesses. We've facilitated over $100M in funding through our partner networks. We've turned 490 credit scores into mortgage approvals. We've turned denied loan applications into funded businesses.
                </p>
              </div>
              
              <p className="text-xl font-bold text-green-600">
                But here's what I'm most proud of:
              </p>
              
              <p>
                Every single client we've helped is now equipped to teach the next generation. They understand how credit works. They know how to access capital. They can build wealth that lasts.
              </p>
              
              <p className="text-xl font-bold text-gray-900">
                That's the real legacy. Not fixing credit—breaking generational curses.
              </p>
              
              <p className="italic text-gray-600 mt-8">
                — Evert Calderon, Founder & CEO
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================================================================
          SECTION 10: FAQ ACCORDION
      ================================================================ */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-[#f9c65d]">Questions</span>
            </h2>
            
            <p className="text-xl text-gray-700">
              Get answers to the most common questions about Mesa Group's services.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Is Mesa Group a credit repair company?",
                answer: "Mesa Group is a comprehensive financial services platform. While we offer credit restoration through our Mesa360 Credit System, we also provide access to personal loans, debt consolidation, business funding, estate planning, life insurance, and more through our strategic partnerships with industry-leading providers."
              },
              {
                question: "How is Mesa Group different from other financial services companies?",
                answer: "Three key differentiators: (1) We've built an ecosystem of vetted partners so you don't have to research multiple platforms, (2) Our founder and team have personal experience overcoming financial challenges—we understand your situation, (3) We succeed when you succeed, which is why we maintain a 5-star rating across 150+ Google reviews."
              },
              {
                question: "What services does Mesa Group offer?",
                answer: "We offer credit monitoring, credit restoration (professional and DIY), personal loans, auto loan refinancing, student loan refinancing, debt consolidation, debt relief, business funding (including 0% interest programs), business credit building, life insurance, and estate planning."
              },
              {
                question: "How long does it take to see results?",
                answer: "Results vary by service. For credit restoration, most clients see measurable improvement within 45-90 days. Loan pre-qualifications are typically instant. Business funding timelines depend on your specific situation but can be as fast as 24-48 hours for certain programs."
              },
              {
                question: "Does Mesa Group guarantee specific results?",
                answer: "We cannot guarantee specific credit score increases or funding approvals, as results depend on individual circumstances. What we do guarantee is expert guidance, transparent communication, and access to the same tools and platforms used by financial professionals nationwide."
              },
              {
                question: "Is there a free consultation?",
                answer: "Yes! We offer a completely free consultation to understand your situation, goals, and challenges. There's no obligation—just a conversation about how we might be able to help you achieve your financial objectives."
              },
              {
                question: "What areas do you serve?",
                answer: "Mesa Group serves clients nationwide. While our headquarters is in Bakersfield, California, our digital platform and partner network allow us to help families and businesses across all 50 states."
              },
              {
                question: "How do I get started?",
                answer: "Simply schedule a free consultation through our website or call us at (661) 310-3040. We'll discuss your situation and recommend the best path forward based on your unique needs and goals."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{item.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                      faqOpen === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {faqOpen === idx && (
                  <div className="px-6 pb-5 bg-white">
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================================================================
          SECTION 11: FINAL CONVERSION ZONE
      ================================================================ */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#FFFBEC] from-40% to-[#FFECD7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Trust Recap */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">Licensed & Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">A+ Rated Partners</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">Nationwide from Bakersfield</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">Bilingual Support</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">2,500+ Clients Served</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">150+ Five-Star Reviews</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">EN/ES/Punjabi Support</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">Real Office You Can Visit</span>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ready to Transform Your <span className="text-[#f9c65d]">Financial Future</span>?
            </h2>
            
            <button
              onClick={openConsultationModal}
              className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 mb-2"
            >
              Schedule My Free Consultation →
            </button>
            <p className="text-sm text-gray-600 mb-4">Powered by Mesa Group</p>
            
            <p className="text-gray-600 mb-6">
              Or call us: <a href="tel:6613103040" className="text-[#bb9446] hover:underline font-semibold">(661) 310-3040</a>
            </p>
            <p className="text-sm text-gray-500">Hablamos español | We speak Punjabi</p>
          </div>
        </div>
      </section>

      <Footer />

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite 0.5s;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

    </div>
  );
};

export default Homepage;
