import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
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
  User,
  Target,
  Briefcase,
  Home,
  Heart,
  ChevronDown,
  ChevronRight,
  Star,
  TrendingUp,
  Award,
  Clock,
  Lock,
  X
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TransformationJourney from '@/components/homepage/TransformationJourney';
import { CalendlyPopupButton, CalendlyPopupButtonLarge } from '@/components/CalendlyPopupButton';
// Fullpage.js removed - using CSS scroll-snap instead

// Import media logos
import kget17Logo from '@/assets/kget-17-logo.png';
import studio17Logo from '@/assets/studio-17-logo.png';
import evertStudio17Img from '@/assets/evert-studio17-interview.jpg';
import telemundoLogo from '@/assets/telemundo-logo.png';
import cwLogo from '@/assets/cw-logo.png';

// Import meeting room image
import meetingRoomImg from '@/assets/meeting-room-consultation.jpg';

// ============================================================================
// HOW IT WORKS - 3 STEP FLIP CARD SECTION
// ============================================================================

const FlipCard = ({ step }: { step: any }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const mouseY = e.clientY;

      // Define the vertical section: card top to card bottom
      const isInVerticalSection = mouseY >= rect.top && mouseY <= rect.bottom;

      setIsFlipped(isInVerticalSection);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={cardRef} className="py-4">
      {/* Desktop: Flip Card */}
      <div className="hidden md:block perspective-1000">
        <div
          className={`relative w-full h-[400px] transform-style-3d transition-transform duration-500 ease-in-out ${
            isFlipped ? '[transform:rotateY(180deg)]' : ''
          }`}
        >
          {/* FRONT FACE */}
          <div className={`absolute inset-0 backface-hidden bg-gradient-to-br ${step.bgGradient} rounded-3xl p-8 md:p-12 shadow-xl border-2 ${step.borderColor}`}>
            <div className="flex items-center gap-8 h-full">
              {/* Step Number & Icon */}
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full shadow-2xl mb-4 animate-bounce-slow">
                  <span className="text-4xl font-bold text-white">{step.number}</span>
                </div>
                <div className={`w-24 h-24 bg-gradient-to-br ${step.iconBg} rounded-3xl flex items-center justify-center shadow-xl mx-auto`}>
                  <step.icon className={`w-14 h-14 ${step.iconColor}`} />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  {step.description}
                </p>
                <p className="text-sm text-gray-500 mt-6 italic">
                  Hover over the card to see what happens next →
                </p>
              </div>
            </div>
          </div>

          {/* BACK FACE */}
          <div className={`absolute inset-0 backface-hidden [transform:rotateY(180deg)] bg-gradient-to-br ${step.backBgGradient} rounded-3xl p-8 md:p-12 shadow-xl border-2 ${step.borderColor}`}>
            <div className="flex flex-col justify-center items-center h-full text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full shadow-2xl mb-6">
                <span className="text-3xl font-bold text-white">{step.number}</span>
              </div>
              <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                What Happens
              </h4>
              <p className="text-xl text-gray-800 leading-relaxed max-w-2xl whitespace-pre-line">
                {step.whatHappens}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Stacked Content (no flip) */}
      <div className="md:hidden">
        <div className={`bg-gradient-to-br ${step.bgGradient} rounded-3xl p-6 shadow-xl border-2 ${step.borderColor}`}>
          <div className="text-center">
            {/* Step Number & Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full shadow-2xl mb-4">
              <span className="text-3xl font-bold text-white">{step.number}</span>
            </div>
            <div className={`w-20 h-20 bg-gradient-to-br ${step.iconBg} rounded-3xl flex items-center justify-center shadow-xl mx-auto mb-6`}>
              <step.icon className={`w-12 h-12 ${step.iconColor}`} />
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {step.title}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {step.description}
            </p>

            {/* What Happens - Visible on Mobile */}
            <div className={`bg-gradient-to-br ${step.backBgGradient} rounded-2xl p-6 border-2 ${step.borderColor}`}>
              <p className="text-base font-bold text-gray-900 mb-2">What happens:</p>
              <p className="text-base text-gray-800 leading-relaxed whitespace-pre-line">
                {step.whatHappens}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      icon: Users,
      iconBg: 'from-amber-100 to-amber-200',
      iconColor: 'text-amber-600',
      title: 'Schedule Your Free Consultation',
      description: 'Book a call with one of our advisors to discuss your current situation, goals, and challenges. We\'ll assess your situation honestly and help you understand your best path forward.',
      whatHappens: 'We\'ll spend 30-45 minutes understanding your complete financial picture. Where you are, where you want to be, and what\'s standing in your way.\n\nAvailable in-office, by phone, or video call. Choose what works for you.',
      bgGradient: 'from-amber-100 via-amber-50 to-white',
      borderColor: 'border-amber-200',
      backBgGradient: 'from-amber-200 via-amber-100 to-amber-50'
    },
    {
      number: 2,
      icon: Target,
      iconBg: 'from-purple-100 to-purple-200',
      iconColor: 'text-purple-600',
      title: 'We\'ll Show You What\'s Possible',
      description: 'Based on our conversation, we\'ll create a personalized roadmap for your situation. You\'ll know exactly what to do next and why it makes sense for your goals.',
      whatHappens: 'You\'ll receive a clear action plan tailored to your situation. We\'ll tell you honestly what makes sense and what doesn\'t.\n\nMost people get their roadmap within 24 hours of the consultation.',
      bgGradient: 'from-purple-100 via-purple-50 to-white',
      borderColor: 'border-purple-200',
      backBgGradient: 'from-purple-200 via-purple-100 to-purple-50'
    },
    {
      number: 3,
      icon: TrendingUp,
      iconBg: 'from-green-100 to-green-200',
      iconColor: 'text-green-600',
      title: 'Move Forward with Confidence',
      description: 'Whether that\'s working with us or handling things yourself, you\'ll have the clarity and guidance you need to make the right decision for your situation.',
      whatHappens: 'You choose what fits. Some people need our services. Some people just need direction. We help both.\n\nIf you move forward with us, we get started immediately. No waiting periods.',
      bgGradient: 'from-green-100 via-green-50 to-white',
      borderColor: 'border-green-200',
      backBgGradient: 'from-green-200 via-green-100 to-green-50'
    }
  ];

  const walkAways = [
    'Complete understanding of your financial situation',
    'Clear roadmap with specific next steps',
    'Honest guidance from people who\'ve been where you are',
    'Options that actually fit your goals and budget',
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Getting Started is <span className="text-[#f9c65d]">Straightforward</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            We've designed our process to be transparent, efficient, and friction-free, so you know exactly what to expect at every step.
          </p>
          <p className="text-base text-gray-500 hidden md:block">
            Move your cursor over each card to see what happens next
          </p>
        </div>

        {/* What You'll Walk Away With */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 mb-12 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-4">What You'll Walk Away With:</h3>
          <ul className="space-y-3">
            {walkAways.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <FlipCard key={index} step={step} />
          ))}
        </div>

        {/* Common Questions */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center text-sm text-gray-600 max-w-3xl mx-auto">
          <div><p className="font-semibold text-gray-900 mb-1">How long does it take?</p><p>30-45 minutes, depending on your situation</p></div>
          <div><p className="font-semibold text-gray-900 mb-1">Is there really no charge?</p><p>None. The consultation is completely free.</p></div>
          <div><p className="font-semibold text-gray-900 mb-1">Do I need to prepare?</p><p>Just come ready to talk about your goals.</p></div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <CalendlyPopupButtonLarge
            text="Start My Free Consultation"
            prefillOptions={{
              utm: { source: 'website', medium: 'homepage', campaign: 'how_it_works' }
            }}
          />
        </div>
      </div>
    </section>
  );
};

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
      link: '/student-loan-refi',
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
      {/* Tab Navigation - 4x2 Grid on Mobile/Tablet, 8-column on Desktop */}
      <div className="mb-8 py-2 px-2">
        <div className="grid grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-3">
          {services.map((service) => {
            const ServiceIcon = service.icon;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`
                  group relative flex flex-col items-center justify-center
                  px-2 sm:px-4 lg:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl transition-all duration-300
                  ${activeTab === service.id
                    ? 'bg-gradient-to-br from-amber-400 to-amber-500 shadow-xl scale-105'
                    : 'bg-white hover:bg-amber-50 shadow-md hover:shadow-lg'
                  }
                `}
              >
                <ServiceIcon
                  className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 mb-1 sm:mb-2 transition-colors ${
                    activeTab === service.id ? 'text-white' : 'text-amber-600 group-hover:text-amber-700'
                  }`}
                />
                <span className={`text-xs sm:text-sm font-semibold text-center transition-colors leading-tight ${
                  activeTab === service.id ? 'text-white' : 'text-gray-900'
                }`}>
                  {service.label}
                </span>
                {activeTab === service.id && (
                  <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-500 rounded-full" />
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

    </div>
  );
};

// ============================================================================
// MAIN HOMEPAGE COMPONENT
// ============================================================================

const Homepage = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Mesa Group Consulting - Credit Repair, Business Funding & Financial Services" 
        description="Expert credit repair, business funding, and financial services in Bakersfield, CA. Build credit, access business funding, and achieve financial freedom with Mesa Group Consulting."
        canonicalUrl="/"
      />
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
                  2,500+ Lives Changed Since 2023
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Premier <span className="text-[#f9c65d]">Financial Partner</span>: From Credit to Capital, We've Got You Covered
              </h1>

              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                We've built a comprehensive financial ecosystem with the nation's top providers, giving you institutional-grade solutions with personalized guidance every step of the way.
              </p>

              <p className="text-lg text-gray-600">
                Whether you're building credit, accessing capital, or protecting your legacy, Mesa Group delivers white-glove service backed by industry-leading technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <CalendlyPopupButton
                  text="Schedule Free Consultation"
                  prefillOptions={{
                    utm: { source: 'website', medium: 'homepage', campaign: 'hero_cta' }
                  }}
                />
                
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
                  <span>100% Customized Solutions</span>
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

            {/* Right Column - Video */}
            <div className="flex flex-col">
              <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster="/mesa-group-consulting-30-second-commercial-thumbnail.jpg"
                  preload="metadata"
                >
                  <source src="/mesa-group-consulting-30-second-commercial.webm" type="video/webm" />
                  <source src="/mesa-group-consulting-30-second-commercial.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Stats Cards - Below Video */}
              <div className="flex justify-center gap-4 mt-4">
                <div className="bg-white rounded-xl shadow-xl p-4 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">2,500+</p>
                      <p className="text-xs text-gray-600">Lives Changed</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-xl p-4 animate-float-delayed">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-amber-600 fill-amber-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">5-Star</p>
                      <p className="text-xs text-gray-600">Client Rating</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 2: MEDIA TRUST STRIP (AS SEEN ON)
      ================================================================ */}
      <section className="bg-gray-100 py-12 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-600 text-sm mb-10">
            Featured in local and national media for our proven financial solutions
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 lg:gap-28">
            <img src={kget17Logo} alt="KGET 17" className="h-16 md:h-20 w-auto object-contain" />
            <img src={studio17Logo} alt="Studio 17" className="h-20 md:h-28 w-auto object-contain" />
            <img src={telemundoLogo} alt="Telemundo" className="h-16 md:h-20 w-auto object-contain" />
            <img src={cwLogo} alt="The CW" className="h-14 md:h-18 w-auto object-contain" />
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 2A: THE PAIN (EMOTIONAL AMPLIFICATION)
      ================================================================ */}
      <section
        className="relative py-16 md:py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/mesa-group-office-9-small.jpg')" }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
            You Deserve <span className="text-[#f9c65d]">Better</span> Than This
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-gray-200 leading-relaxed">
            <p>
              Getting denied for that apartment while the landlord looked at you like you're irresponsible.
            </p>

            <p>
              Watching your friends book trips with credit card rewards while you're stuck paying cash for everything.
            </p>

            <p>
              That sick feeling in your stomach every time you apply for something, knowing the rejection is coming before you even hit submit.
            </p>

            <p>
              The stress of being one emergency away from financial catastrophe. The shame of pulling out your debit card while everyone else swipes credit. The weight of knowing your financial past is stealing your financial future.
            </p>

            <p className="text-2xl font-semibold text-white pt-4">
              This isn't about a number on a report. This is about your dignity. Your opportunities. Your family's future.
            </p>

            <p className="text-2xl font-bold text-[#f9c65d]">
              That cycle ends today.
            </p>

            <p>
              We help everybody who walks through our door, whether you need comprehensive services or just honest guidance on your next step. Whether you're in crisis or just want to optimize. Whether your credit is terrible or just okay.
            </p>

            <p className="text-xl font-bold text-white">
              We help people first.
            </p>

            <p>
              We assess your situation. We answer your questions honestly. We guide you to the right solution, even if that solution isn't us.
            </p>

            <p>
              Because you're not a sales target. You're a person who deserves honest guidance from people who've been exactly where you are.
            </p>

            <p className="text-xl font-semibold text-[#f9c65d]">
              That's our promise to you.
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
              We Know the Way Forward. <span className="text-[#f9c65d]">Let Us Help You Get There.</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-4">
              You've spent enough time feeling stuck. Enough nights lying awake wondering how you'll ever get ahead. Enough years watching everyone else build wealth while you're just trying to survive.
            </p>
            
            <p className="text-2xl font-bold text-[#f9c65d]">
              That cycle breaks today.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16 space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Most people navigate their financial lives across dozens of disconnected platforms: one for credit monitoring, another for loans, a third for estate planning. It's inefficient, confusing, and leaves critical gaps in your strategy.
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
              We've spent years building relationships with the nation's premier financial service providers, from credit restoration platforms to business funding networks to estate planning technologies. We've negotiated access, vetted their credibility, and integrated them into a single, cohesive ecosystem.
            </p>

            <p className="font-semibold text-gray-900">
              Here's what makes Mesa Group different:
            </p>

            <p>
              We help you navigate it all. We assess your situation honestly. We recommend what you actually need. We give you a roadmap that works for YOUR goals.
            </p>
            
            <p className="text-xl font-semibold text-gray-900">
              Because we help people first. Always.
            </p>
            
            <p>
              We did the homework. We made the connections. We built the shortcuts.
            </p>

            <p className="text-xl font-semibold text-[#f9c65d]">
              You get the guidance. And when you're ready, you get the results.
            </p>
          </div>

          {/* Cost Comparison */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 lg:p-12 mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Why People Choose Mesa Group
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
                    'No one to give you honest guidance without a sales pitch',
                    '6-12 months longer to see results (if you see results at all)'
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
                    'Finally, everything you need in one place',
                    'Someone who tells you the truth about what you actually need',
                    'Guidance from people who\'ve been exactly where you are',
                    'A partner in your corner who genuinely wants you to succeed'
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
              The difference? We help people first. Always.
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
                We partner with industry leaders like SmartCredit, SuperMoney, and Novae, platforms serving millions of Americans. You get enterprise-level tools with boutique-level service.
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
                Our team evaluates your complete financial picture and recommends solutions based on your goals, not commissions. We succeed when you succeed.
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
                With over 2,500+ lives changed and 150+ five-star reviews, we demonstrate what happens when real people help real people. We help people first. Always.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================================================================
          SECTION 4: COMPREHENSIVE SERVICES
      ================================================================ */}
      <section id="services" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-amber-50/30 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Badge - shared for both subsections */}
          <div className="text-center mb-12">
            <div className="inline-block bg-amber-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-4">
              COMPREHENSIVE CREDIT & FINANCIAL SERVICES
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Complete <span className="text-[#f9c65d]">Credit & Financial</span> Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help everyone who walks through our door, from individuals building credit to businesses accessing capital. Whether you need comprehensive services or just honest guidance on your next step, we're here for you.
            </p>
          </div>

          {/* Three Solution Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">

            {/* Credit Solutions */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Credit Solutions
              </h3>
              <p className="text-gray-600 text-sm mb-6">Not sure where to start? Let's figure it out together.</p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  Professional Credit Restoration
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  DIY Credit Repair
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  Credit Monitoring
                </li>
              </ul>

              <Link to="/for-consumers" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold">
                Learn More About Your Options
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Business Funding */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Business Funding
              </h3>
              <p className="text-gray-600 text-sm mb-6">From startups to growth stages, we'll find what fits.</p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  0% Interest Business Funding
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  Business Funding Network
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

              <Link to="/for-businesses" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold">
                Explore Your Funding Options
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Build Credit */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Build Credit
              </h3>
              <p className="text-gray-600 text-sm mb-6">Building credit takes time. We'll show you the fastest path.</p>

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
                  Credit Education Resources
                </li>
              </ul>

              <Link to="/build-credit" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold">
                See How We Can Help
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            We'll be honest with you: not everyone needs every service. During your free consultation, we'll assess your situation and recommend only what makes sense for YOUR goals. Sometimes that's our services. Sometimes it's just good advice. Either way, you'll know the truth.
          </p>

          {/* Check Out Our Services - Tab System */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Check Out Our <span className="text-[#f9c65d] italic">Services</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our complete ecosystem of financial solutions, from credit building to life insurance, all in one place.
            </p>
          </div>

          <ServicesTabSystem />

        </div>
      </section>

      {/* ================================================================
          SECTION 4B: NOT SURE WHERE TO START CTA
      ================================================================ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Primary CTA - Meeting Room Background Section */}
          <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-3xl">
            <img
              src={meetingRoomImg}
              alt="Mesa Group Consulting professional meeting room"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50" />
            <div className="relative h-full flex items-center">
              <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-center">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Not Sure Where to <span className="text-[#f9c65d]">Start?</span>
                </h3>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Schedule your free consultation. We'll assess your situation honestly and help you understand your best path forward. No pressure. No sales pitch.
                </p>
                <p className="text-white/70 text-sm mt-4">Talk to real people who've been where you are.</p>
                <CalendlyPopupButton
                  text="Schedule My Free Consultation"
                  prefillOptions={{
                    utm: { source: 'website', medium: 'homepage', campaign: 'not_sure_section' }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ================================================================
          SECTION 4B: TRANSFORMATION JOURNEY (A/B TEST VARIANT)
      ================================================================ */}
      <TransformationJourney />

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
              <span className="font-semibold">Here's why 2,500+ families decided Mesa Group was different, and why they were right.</span>
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
                  That's why Mesa Group operates different. We're not here to judge you. We're here to guide you, because we've walked the exact path you're on right now.
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
                  Here's what that looks like:
                </p>

                <p>
                  A teacher came to us confused about buying a home. Didn't know if his credit was good enough. Didn't know where to start. Didn't know if he could even afford it.
                </p>

                <p>
                  We walked him through everything. Showed him what he needed to fix. Built him a roadmap. Six months later, he's a homeowner. And he's sent his sister, his coworker, and two friends from church our way.
                </p>

                <p>
                  That's how we've built this. Not by maximizing every transaction. But by genuinely helping people first.
                </p>
                
                <p>
                  We've maintained a perfect 5-star rating across 150+ Google reviews. Families trust us with their financial futures. And while other companies have come and gone, we're still here, still growing.
                </p>
                
                <p className="font-bold text-green-600">
                  When you actually help people, they don't forget it. And that trust? We protect it with everything we have.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================================================================
          SECTION 6: HOW IT WORKS - FLIP CARDS
      ================================================================ */}
      <HowItWorksSection />

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
              Whether you're just starting out or starting over, your first step is the same: talking to someone who understands.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
              We work with individuals, families, and businesses at every stage of their financial journey:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <User className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Young Adults
              </h3>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Dreaming of homeownership but need to boost credit scores, reduce debt, or access down payment assistance.
              </p>
              
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-900">Typical needs:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Credit building tools</li>
                  <li>• First-time credit cards</li>
                  <li>• Student loan refinancing</li>
                  <li>• Financial education</li>
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
                Working toward homeownership, managing household debt, and making smart financial decisions that impact their children's future.
              </p>
              
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-900">Typical needs:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Credit restoration</li>
                  <li>• Mortgage preparation</li>
                  <li>• Debt consolidation</li>
                  <li>• Estate planning</li>
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
                Recovering from financial setbacks (divorce, medical debt, job loss, business failure) and creating a path forward with expert guidance.
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
              Here's what happens when you work with people who genuinely want you to succeed.
            </p>
          </div>

          {/* Real Google Reviews */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Julian Morales — 512→762+, car loan, dream home */}
            <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />)}
              </div>
              <p className="text-white leading-relaxed mb-6 italic">
                "A year ago, my credit score was 512 and I felt stuck. This company guided me step-by-step from disputing errors and building positive credit to teaching me smart habits. Within 6 months, my score jumped over 250 points. Thanks to them, I was finally approved for my first car loan and just closed on my dream home."
              </p>
              <div className="border-t border-gray-600 pt-4">
                <p className="font-semibold text-white">Julian M.</p>
                <p className="text-sm text-amber-400 font-semibold mt-1">512 → 762+ in 6 months · First car loan · Dream home</p>
                <p className="text-xs text-gray-400">Bakersfield, CA</p>
              </div>
            </div>

            {/* MyaG — bought first home after 2 failed companies */}
            <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />)}
              </div>
              <p className="text-white leading-relaxed mb-6 italic">
                "I had previously worked with several other individuals and saw no improvement. Evert from Mesa Group has been working on my credit from day one, and he knows exactly what actions to take to achieve results. I was able to buy my first home as of 4/7/25!"
              </p>
              <div className="border-t border-gray-600 pt-4">
                <p className="font-semibold text-white">Mya G.</p>
                <p className="text-sm text-amber-400 font-semibold mt-1">Bought first home after 2 failed companies</p>
                <p className="text-xs text-gray-400">Bakersfield, CA</p>
              </div>
            </div>

            {/* Harwinder Singh — "guidance, support, and a clear path forward" */}
            <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />)}
              </div>
              <p className="text-white leading-relaxed mb-6 italic">
                "From the beginning, their team has been professional, respectful, and responsive to every question we've had. What stands out most is their dedication to truly helping their clients. They don't just offer a service — they offer guidance, support, and a clear path forward."
              </p>
              <div className="border-t border-gray-600 pt-4">
                <p className="font-semibold text-white">Harwinder S.</p>
                <p className="text-sm text-amber-400 font-semibold mt-1">Professional · Transparent · Dedicated</p>
                <p className="text-xs text-gray-400">Bakersfield, CA</p>
              </div>
            </div>

            {/* nava andrew — negatives removed, car loan, on track for home */}
            <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />)}
              </div>
              <p className="text-white leading-relaxed mb-6 italic">
                "Within just a few months, they removed several negative items including collections and late payments. They didn't just fix credit — they educated me so I can keep it healthy. Thanks to them, I was approved for a car loan with a great interest rate and I'm on track to buy my first home."
              </p>
              <div className="border-t border-gray-600 pt-4">
                <p className="font-semibold text-white">Andrew N.</p>
                <p className="text-sm text-amber-400 font-semibold mt-1">Collections removed · Car loan approved · First home in sight</p>
                <p className="text-xs text-gray-400">Bakersfield, CA</p>
              </div>
            </div>

            {/* Alex Medrano — 2 failed companies → results in months */}
            <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />)}
              </div>
              <p className="text-white leading-relaxed mb-6 italic">
                "I tried 2 other companies and for over 2 years combined, all I got was empty promises and no results. I came across Mesa Group Consulting and in just a few months the results speak for themselves. Evert's attention to detail, transparency, and dedication have left me speechless."
              </p>
              <div className="border-t border-gray-600 pt-4">
                <p className="font-semibold text-white">Alex M.</p>
                <p className="text-sm text-amber-400 font-semibold mt-1">Results in months after 2+ years at other companies</p>
                <p className="text-xs text-gray-400">Bakersfield, CA</p>
              </div>
            </div>

            {/* Google Reviews CTA Card */}
            <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-center items-center text-center text-white">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                <Star className="w-10 h-10 text-amber-500 fill-amber-500" />
              </div>
              <p className="text-3xl font-bold mb-1">150+</p>
              <p className="text-lg font-semibold mb-2">Five-Star Reviews</p>
              <p className="text-sm text-white/80 mb-6">All from real clients. All verified.</p>
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
              Why We Built <span className="text-[#f9c65d]">Mesa Group</span>, And Why It Had To Exist
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Evert Calderon Studio 17 Photo */}
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[3/4] rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src={evertStudio17Img}
                  alt="Why I Built Mesa Group..."
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column - Story */}
            <div className="order-1 lg:order-2 space-y-6 text-lg text-gray-700 leading-relaxed">
              
              <p className="text-2xl font-bold text-gray-900">
                Our founder will never forget checking his credit score for the first time: 490. But that wasn't even the painful part.
              </p>
              
              <p>
                The painful part was watching his immigrant parents almost lose everything they'd built.
              </p>
              
              <p>
                That's why this company was born: from a promise that no family should ever navigate the financial system blind.
              </p>

              <p>
                His parents worked two jobs. They paid their bills. They did everything right. And the system still almost crushed them.
              </p>
              
              <p>
                He watched his family file bankruptcy in the early 2000s. Saw the stress, the shame, the feeling of failure even though they worked harder than anyone he knew.
              </p>
              
              <p>
                When he tried to start his own life, he repeated the same mistakes. Credit cards he didn't understand. Loans he couldn't afford. A business that collapsed under debt he didn't know how to manage.
              </p>
              
              <p className="text-xl font-bold text-red-600">
                That 490 credit score felt like a life sentence.
              </p>
              
              <p>
                But then came the realization that changed everything:
              </p>
              
              <p className="text-xl font-bold text-[#f9c65d]">
                Bad credit doesn't mean you're irresponsible. It means no one taught you.
              </p>

              {/* Mobile/Tablet only - show conclusion inline (desktop shows in Section 9B) */}
              <div className="lg:hidden">
                <p className="mt-6">
                  And if no one taught hardworking immigrants who risked everything to build a life in this country, then how many other families were out there navigating this system blind?
                </p>

                <p className="text-xl font-bold text-gray-900 mt-6">
                  That's why Mesa Group exists.
                </p>

                <p className="mt-6">
                  To be the financial partner those families never had. To help people first, always.
                </p>

                <p className="mt-6">
                  Our team shows up every day for one reason: to help you figure out your best path forward. Sometimes that's credit repair. Sometimes it's business funding. Sometimes it's just honest advice that saves you thousands of dollars.
                </p>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 my-8">
                  <p className="font-semibold text-gray-900">
                    Today, we've helped over 2,500 individuals, families, and businesses. We've turned denials into approvals. We've turned denied loan applications into funded businesses.
                  </p>
                </div>

                <p className="text-xl font-bold text-green-600">
                  But here's what keeps us going:
                </p>

                <p>
                  Every single person we help is now equipped to teach the next generation. They understand how credit works. They know how to access capital. They can build wealth that lasts.
                </p>

                <p className="text-xl font-bold text-gray-900">
                  That's why we do this. Not to fix credit scores. To help people build the lives they deserve.
                </p>

                <p className="italic text-gray-600 mt-8">
                  — The Mesa Group Team
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================================================================
          SECTION 9B: FOUNDER'S LEGACY CONTINUATION (Desktop only)
          Same white background as Section 9 for visual continuity
      ================================================================ */}
      <section className="hidden lg:block pb-16 md:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">

            <p>
              And if no one taught hardworking immigrants who risked everything to build a life in this country, then how many other families were out there navigating this system blind?
            </p>

            <p className="text-xl font-bold text-gray-900">
              That's why Mesa Group exists.
            </p>

            <p>
              To be the financial partner those families never had. To help people first, always.
            </p>

            <p>
              Our team shows up every day for one reason: to help you figure out your best path forward. Sometimes that's credit repair. Sometimes it's business funding. Sometimes it's just honest advice that saves you thousands of dollars.
            </p>

            <p>
              We help everybody. That's the promise we made, and that's the promise we keep.
            </p>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 my-8">
              <p className="text-xl font-semibold text-gray-900">
                Today, we've helped over 2,500 individuals, families, and businesses. We've turned denials into approvals. We've turned denied loan applications into funded businesses.
              </p>
              <p className="text-lg text-gray-700 mt-4">
                That teacher who came to us confused about buying a home? He's a homeowner now. And his kids will grow up watching their dad own something, not rent. That's generational change.
              </p>
            </div>

            <p className="text-xl font-bold text-green-600">
              That's why we do this. Not to fix credit scores. To help people build the lives they deserve.
            </p>

            <p className="italic text-gray-600 mt-8">
              — The Mesa Group Team
            </p>

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
                answer: "Mesa Group is a comprehensive financial services platform. While we offer credit restoration through our Mesa360 Credit System, we help people with much more than just credit repair. We provide access to business funding, debt relief, credit monitoring, estate planning, and more through our partnerships with industry-leading providers. Think of us as your financial partner who helps you navigate everything, not just one service."
              },
              {
                question: "How is Mesa Group different from other financial services companies?",
                answer: "Three things set us apart: (1) We help people first. Not everyone who calls us becomes a client, and that's okay. We'd rather give you honest guidance than push services you don't need. (2) We've built the ecosystem for you. Instead of researching dozens of platforms, you get access to vetted partners through one relationship. (3) We've been where you are. Our founder had a 490 credit score. We understand what it's like to feel stuck, which is why we're here to help you move forward."
              },
              {
                question: "What services does Mesa Group offer?",
                answer: "We help with credit restoration (professional and DIY), credit monitoring, business funding (including 0% interest programs), business credit building, debt consolidation, debt relief, personal loans, auto loan refinancing, student loan refinancing, life insurance, and estate planning. During your free consultation, we'll assess your situation and recommend only what makes sense for YOUR goals."
              },
              {
                question: "How long does it take to see results?",
                answer: "It depends on your situation and goals. For credit restoration, most clients see measurable improvement within 45-90 days. Business funding can be as fast as 24-48 hours for certain programs. Loan pre-qualifications are typically instant. During your consultation, we'll give you a realistic timeline based on your specific situation."
              },
              {
                question: "Does Mesa Group guarantee specific results?",
                answer: "We can't guarantee specific credit score increases or funding approvals because results depend on your individual circumstances. What we do guarantee: honest guidance, transparent communication, and access to the same tools and platforms the wealthy use to build and protect their wealth."
              },
              {
                question: "Is there a free consultation?",
                answer: "Yes. The consultation is completely free. We'll spend 30-45 minutes understanding your situation, answering your questions, and helping you figure out your best path forward. No pressure. No obligations. Just honest guidance."
              },
              {
                question: "Do I have to sign up for services after the consultation?",
                answer: "Absolutely not. Many people schedule consultations just to understand their options or get expert advice, and that's completely fine with us. We help everybody, not just the people who become clients."
              },
              {
                question: "What areas do you serve?",
                answer: "We serve clients nationwide. While our headquarters is in Bakersfield, California (5001 California Ave Suite 219), our platform and partner network allow us to help individuals, families, and businesses across all 50 states. We offer consultations in-office, by phone, or video call."
              },
              {
                question: "How do I get started?",
                answer: "Schedule a free consultation. Call us at (661) 310-3040 or book online. We'll discuss your situation and help you understand your best path forward. No pressure. No obligations. Just people who genuinely want to help."
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
            {[
              'Serving since 2023',
              '2,500+ Lives Changed',
              '150+ 5-Star Reviews',
              'Trilingual Support',
              'Helping Clients Nationwide',
              '100% Customized Solutions',
              'EN/ES/Punjabi Support',
              'Real Office You Can Visit',
            ].map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{badge}</span>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ready to Transform Your<br /><span className="text-[#f9c65d]">Financial Future</span>?
            </h2>

            <CalendlyPopupButtonLarge
              text="Schedule My Free Consultation →"
              showArrow={false}
              prefillOptions={{
                utm: { source: 'website', medium: 'homepage', campaign: 'final_cta' }
              }}
            />

            <p className="text-gray-600 mb-6 mt-6">
              Or call us: <a href="tel:6613103040" className="text-[#bb9446] hover:underline font-semibold">(661) 310-3040</a>
            </p>
            <p className="text-sm text-gray-500">Hablamos Español 🇪🇸 |  Assi Punjabi Bolde Haan 🇮🇳</p>
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
