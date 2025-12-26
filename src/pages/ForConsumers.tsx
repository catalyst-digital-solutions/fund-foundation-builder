import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle, ArrowRight, Star, Users, Calendar, Globe,
  Shield, Laptop, TrendingUp, Eye, LifeBuoy, DollarSign,
  Car, GraduationCap, Layers, CreditCard, FileText, Heart,
  Search, CheckSquare, BookOpen, Award, Phone, MapPin, ChevronDown
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CalendlyPopupButton } from '@/components/CalendlyPopupButton';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  included: string[];
  idealFor: string[];
  pricing?: string;
  ctaText: string;
  ctaLink: string;
  poweredBy?: string;
  importantNote?: string;
}

const ServiceCard = ({
  icon,
  title,
  description,
  included,
  idealFor,
  pricing,
  ctaText,
  ctaLink,
  poweredBy,
  importantNote
}: ServiceCardProps) => {
  const isExternal = ctaLink.startsWith('http');
  
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 md:p-8 space-y-6 flex flex-col h-full">
      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      
      <h3 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h3>
      
      <p className="text-gray-700 leading-relaxed">{description}</p>
      
      <div className="space-y-3">
        <h4 className="font-semibold text-gray-900">What's Included:</h4>
        <ul className="space-y-2">
          {included.slice(0, 6).map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="space-y-3">
        <h4 className="font-semibold text-gray-900">Ideal For:</h4>
        <ul className="space-y-2">
          {idealFor.slice(0, 4).map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-amber-600 flex-shrink-0 mt-1" />
              <span className="text-sm text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {pricing && (
        <div className="bg-amber-50 rounded-lg p-4">
          <p className="text-sm text-gray-700">{pricing}</p>
        </div>
      )}
      
      {importantNote && (
        <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded">
          <p className="text-sm text-gray-700">{importantNote}</p>
        </div>
      )}
      
      {poweredBy && (
        <p className="text-xs text-gray-500">Powered by {poweredBy}</p>
      )}
      
      <div className="mt-auto pt-4">
        {isExternal ? (
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <span className="text-center">{ctaText}</span>
            <ArrowRight className="w-5 h-5 flex-shrink-0" />
          </a>
        ) : (
          <Link
            to={ctaLink}
            className="w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <span className="text-center">{ctaText}</span>
            <ArrowRight className="w-5 h-5 flex-shrink-0" />
          </Link>
        )}
      </div>
    </div>
  );
};

const ForConsumers = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const services: ServiceCardProps[] = [
    {
      icon: <Shield className="w-6 h-6 text-amber-600" />,
      title: "Credit Restoration with Mesa360 Credit System™",
      description: "Our proven Mesa360 Credit System™ doesn't just remove negative items—it's a complete financial transformation program. Repair inaccurate items, rebuild your credit foundation, and optimize your financial profile with 1-on-1 coaching.",
      included: [
        "REPAIR: Remove inaccurate negative items",
        "REBUILD: 1-on-1 financial coaching & customized action plan",
        "OPTIMIZE: Funding profile optimization",
        "3-Bureau dispute services",
        "Dedicated account manager",
        "Full legal team for FCRA violations"
      ],
      idealFor: [
        "Credit scores below 650",
        "Denied for loans, apartments, or credit cards",
        "Inaccurate items on credit reports",
        "Anyone rebuilding after financial hardship"
      ],
      pricing: "Monthly Plans starting at $149/month • 90-Day Money-Back Guarantee",
      ctaText: "Start Your Credit Transformation",
      ctaLink: "/credit-repair-2"
    },
    {
      icon: <Laptop className="w-6 h-6 text-amber-600" />,
      title: "DIY Credit Restoration Software",
      description: "Take control of your credit restoration journey with professional-grade tools, AI-powered dispute recommendations, and step-by-step guidance—at a fraction of the cost of full-service credit restoration companies.",
      included: [
        "Unlimited 3-bureau disputes",
        "AI-powered analysis and dispute recommendations",
        "Professional letter templates citing federal laws",
        "Real-time tracking dashboard",
        "Credit education library",
        "Email support from credit experts"
      ],
      idealFor: [
        "Tech-savvy individuals who want control",
        "People with 1-10 negative items to dispute",
        "Budget-conscious consumers",
        "Those who prefer DIY with professional tools"
      ],
      pricing: "$39.99/month • Save 70-90% vs. traditional credit restoration",
      ctaText: "Try DIY Credit Restoration",
      ctaLink: "/diy-credit-repair"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-amber-600" />,
      title: "Build Credit Fast—The Strategic Way",
      description: "Access proven credit building platforms through one trusted partner. We guide you through a strategic credit building journey that focuses on relationships, not just scores.",
      included: [
        "Strategic Account Selection (3 proven paths)",
        "Credit Union Relationship building",
        "Revolving & Installment Credit Builders",
        "Rent Reporting Services (24-48 months history)",
        "Authorized User Tradelines access",
        "1-on-1 Specialist Consultation"
      ],
      idealFor: [
        "People with thin or no credit files",
        "Anyone who removed negatives but can't get approved",
        "Those preparing for major purchases",
        "Individuals targeting 720+ FICO scores"
      ],
      ctaText: "Get Your Free Credit Building Guide",
      ctaLink: "/build-credit"
    },
    {
      icon: <Eye className="w-6 h-6 text-amber-600" />,
      title: "SmartCredit Monitoring",
      description: "Stay on top of your credit with real-time alerts, 3-bureau tracking, and comprehensive identity theft protection—all in one platform.",
      included: [
        "3-bureau credit reports & scores",
        "Daily credit monitoring",
        "Identity theft protection",
        "Credit score simulator",
        "Dispute tracking tools",
        "Credit education resources"
      ],
      idealFor: [
        "Anyone working on credit improvement",
        "Identity theft protection seekers",
        "People monitoring dispute progress",
        "Those wanting credit score transparency"
      ],
      pricing: "$1 for 7-day trial, then $27.99/month",
      ctaText: "Start Monitoring Your Credit",
      ctaLink: "/credit-monitoring",
      poweredBy: "SmartCredit"
    },
    {
      icon: <LifeBuoy className="w-6 h-6 text-amber-600" />,
      title: "Debt Relief",
      description: "Settle unsecured debts for 30-50% less than you owe. Stop creditor harassment, consolidate multiple payments into one, and become debt-free in 20-48 months.",
      included: [
        "Debt negotiation with creditors",
        "One affordable monthly payment",
        "Creditor harassment protection",
        "Certified Debt Specialists",
        "First settlement in 4-7 months",
        "Complete debt freedom in 20-48 months"
      ],
      idealFor: [
        "$10,000+ in unsecured debt",
        "Struggling to make minimum payments",
        "Experiencing creditor harassment",
        "Considering alternatives to bankruptcy"
      ],
      ctaText: "Get Free Debt Analysis",
      ctaLink: "/debt-relief"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-amber-600" />,
      title: "Personal Loans",
      description: "Compare personalized loan offers from multiple lenders in minutes—without impacting your credit score. Find the best rates for debt consolidation, home improvements, or major expenses.",
      included: [
        "Soft credit pull (no score impact)",
        "Multiple lender comparison",
        "Personalized rate quotes",
        "Fast approval process",
        "Loan amounts up to $100,000",
        "Terms from 2-7 years"
      ],
      idealFor: [
        "Debt consolidation",
        "Home improvement projects",
        "Major purchases or expenses",
        "Emergency funding needs"
      ],
      ctaText: "Compare Personal Loans",
      ctaLink: "/personal-loans",
      poweredBy: "SuperMoney"
    },
    {
      icon: <Car className="w-6 h-6 text-amber-600" />,
      title: "Auto Loan Refinancing",
      description: "Lower your monthly car payment, reduce your interest rate, or change your loan term. See if you qualify for better rates in minutes.",
      included: [
        "Multiple lender rate comparison",
        "No impact on credit score",
        "Potential savings calculator",
        "Fast approval decisions",
        "Loan amounts up to vehicle value",
        "Terms from 24-84 months"
      ],
      idealFor: [
        "High-interest auto loans",
        "Improved credit since original loan",
        "Need to lower monthly payment",
        "Want to pay off loan faster"
      ],
      ctaText: "Check Refinance Rates",
      ctaLink: "/auto-loan-refi",
      poweredBy: "SuperMoney"
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-amber-600" />,
      title: "Student Loan Refinancing",
      description: "Refinance your private student loans to potentially lower your interest rate, reduce monthly payments, or pay off your loans faster.",
      included: [
        "Multiple lender rate comparison",
        "No impact on credit score",
        "Potential savings calculator",
        "Fixed and variable rate options",
        "Loan amounts up to $500,000",
        "Terms from 5-20 years"
      ],
      idealFor: [
        "Private student loan refinancing",
        "Improved credit since graduation",
        "Stable income and employment",
        "Want lower interest rates"
      ],
      importantNote: "Federal student loans have unique protections. Refinancing converts them to private loans.",
      ctaText: "Check Student Loan Rates",
      ctaLink: "/student-loan-refi-2",
      poweredBy: "SuperMoney"
    },
    {
      icon: <Layers className="w-6 h-6 text-amber-600" />,
      title: "Debt Consolidation Loans",
      description: "Combine multiple high-interest debts into one lower monthly payment. Simplify your finances and potentially save thousands in interest.",
      included: [
        "Multiple lender rate comparison",
        "No impact on credit score",
        "Debt payoff calculator",
        "Loan amounts up to $100,000",
        "Terms from 2-7 years",
        "Fixed interest rates"
      ],
      idealFor: [
        "$5,000+ in unsecured debt",
        "Multiple high-interest accounts",
        "Good to excellent credit",
        "Want one simple monthly payment"
      ],
      ctaText: "Compare Consolidation Loans",
      ctaLink: "/debt-consolidation-loan",
      poweredBy: "SuperMoney"
    },
    {
      icon: <CreditCard className="w-6 h-6 text-amber-600" />,
      title: "Credit Cards",
      description: "Find the right credit card for your situation—whether you're building credit, earning rewards, or looking for balance transfer options.",
      included: [
        "Personalized card recommendations",
        "No impact on credit score",
        "Side-by-side comparison",
        "Rewards calculators",
        "Pre-qualification checks",
        "Secured and unsecured options"
      ],
      idealFor: [
        "Building or rebuilding credit",
        "Maximizing rewards and cashback",
        "Transferring high-interest balances",
        "Managing business expenses"
      ],
      ctaText: "Find Your Card",
      ctaLink: "/credit-cards",
      poweredBy: "SuperMoney"
    },
    {
      icon: <FileText className="w-6 h-6 text-amber-600" />,
      title: "Trust & Will Planning",
      description: "Protect your family's future with comprehensive estate planning. Create legally binding documents from the comfort of your home.",
      included: [
        "Last Will and Testament",
        "Living Trust documents",
        "Healthcare directives",
        "Power of Attorney",
        "Digital asset protection",
        "State-specific legal documents"
      ],
      idealFor: [
        "Protecting family assets",
        "Parents with minor children",
        "Anyone wanting to avoid probate",
        "Estate planning on a budget"
      ],
      pricing: "Affordable estate planning starting at a fraction of attorney costs",
      ctaText: "Protect Your Legacy",
      ctaLink: "/trust-and-will-plan"
    },
    {
      icon: <Heart className="w-6 h-6 text-amber-600" />,
      title: "Life Insurance",
      description: "Protect your family's financial future with affordable life insurance. Compare policies from top-rated carriers and get covered in minutes.",
      included: [
        "Multiple carrier comparison",
        "Instant quote estimates",
        "Coverage up to $2M+",
        "Medical exam coordination",
        "Policy selection guidance",
        "No-exam options available"
      ],
      idealFor: [
        "Parents with dependents",
        "Primary income earners",
        "Mortgage protection",
        "Estate planning"
      ],
      ctaText: "Get Life Insurance Quotes",
      ctaLink: "/life-insurance"
    }
  ];

  const faqs = [
    {
      q: "How do I know which service is right for me?",
      a: "Schedule a free consultation with one of our advisors. We'll discuss your situation, goals, and budget to recommend the best solution. There's no obligation—just honest guidance."
    },
    {
      q: "Do you work with people who have bad credit?",
      a: "Absolutely. We specialize in helping people improve their credit, regardless of where they're starting. Whether your score is 300 or 800, you'll receive the same level of respect and professional service."
    },
    {
      q: "Are there any hidden fees?",
      a: "No. We provide transparent pricing upfront for every service. You'll know exactly what you're paying before you commit to anything."
    },
    {
      q: "What if I can't afford your services right now?",
      a: "We offer multiple pricing tiers and payment options to fit different budgets. Some services like credit card comparisons and loan shopping are completely free. Let's talk about what's possible for your situation."
    },
    {
      q: "How long does it take to see results?",
      a: "It depends on the service. Credit restoration typically shows initial results in 60-90 days. Debt relief sees first settlements in 4-7 months. Loan and credit card applications can happen same-day. We'll set realistic expectations during your consultation."
    },
    {
      q: "Do you offer support in languages other than English?",
      a: "Yes! We provide dedicated support in English, Spanish, and Punjabi to serve our diverse community."
    },
    {
      q: "What makes Mesa Group different from other financial services companies?",
      a: "We combine education with action. We're not just selling services—we're teaching you how to maintain financial health long-term. Plus, our founder has been where you are, which shapes how we treat every client: with empathy, respect, and practical guidance."
    },
    {
      q: "Do I have to commit to anything during the free consultation?",
      a: "No obligation whatsoever. The consultation is about understanding your situation and providing information. You decide if and when you're ready to move forward."
    }
  ];

  const testimonials = [
    {
      quote: "Mesa Group helped me raise my credit score by over 100 points in just 4 months. Their team was supportive every step of the way.",
      name: "Maria G.",
      service: "Credit Restoration"
    },
    {
      quote: "I was drowning in debt and didn't know where to turn. They helped me settle my debts for less than half of what I owed.",
      name: "James T.",
      service: "Debt Relief"
    },
    {
      quote: "The DIY credit software was exactly what I needed. Easy to use and saved me thousands compared to hiring a credit repair company.",
      name: "Sarah K.",
      service: "DIY Credit Restoration"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-amber-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">2,500+ Clients Helped Since 2023</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Financial <span className="text-[#f9c65d]">Fresh Start</span> Begins Here
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed">
                From credit restoration to debt relief, personal loans to life insurance—find the financial solution that fits your life. No judgment. No runaround. Just honest guidance and real results.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Whether you're rebuilding after a setback, planning for the future, or simply looking to improve your financial health, Mesa Group connects you with the right resources and expert support to move forward with confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToServices}
                  className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-4 px-8 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  Explore Your Options
                  <ArrowRight className="w-5 h-5" />
                </button>
                <CalendlyPopupButton
                  text="Schedule Free Consultation"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-semibold py-4 px-8 rounded-lg border-2 border-gray-300 transition-colors"
                  prefillOptions={{
                    utm: {
                      source: "for_consumers",
                      medium: "hero_cta"
                    }
                  }}
                  showArrow={false}
                />
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Shield className="w-24 h-24 text-amber-600 mx-auto" />
                  <p className="text-xl font-semibold text-gray-800">Your Financial Partner</p>
                  <p className="text-gray-600">Trusted by 2,500+ clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <Users className="w-8 h-8 text-amber-600 mx-auto" />
              <div className="text-3xl md:text-4xl font-bold text-gray-900">2,500+</div>
              <div className="text-sm text-gray-600">Clients Helped</div>
            </div>
            <div className="space-y-2">
              <Star className="w-8 h-8 text-amber-600 mx-auto" />
              <div className="text-3xl md:text-4xl font-bold text-gray-900">150+</div>
              <div className="text-sm text-gray-600">Five-Star Reviews</div>
            </div>
            <div className="space-y-2">
              <Calendar className="w-8 h-8 text-amber-600 mx-auto" />
              <div className="text-3xl md:text-4xl font-bold text-gray-900">Since 2023</div>
              <div className="text-sm text-gray-600">Serving Families & Businesses</div>
            </div>
            <div className="space-y-2">
              <Globe className="w-8 h-8 text-amber-600 mx-auto" />
              <div className="text-3xl md:text-4xl font-bold text-gray-900">3</div>
              <div className="text-sm text-gray-600">Languages: EN, ES, PA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Financial Solutions Built for <span className="text-[#f9c65d]">Real People</span>, Real Situations
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Life doesn't follow a straight line, and neither does your financial journey. Maybe you've had some setbacks. Maybe no one ever taught you how credit actually works. Maybe you're just looking for better options than what the banks are offering.
            </p>
            <p className="font-semibold">
              Here's what matters: where you start doesn't determine where you finish.
            </p>
            <p>
              Mesa Group Consulting exists to guide you from wherever you are to wherever you want to be—with transparency, respect, and practical solutions that actually work. No corporate jargon. No hidden fees. No treating you like a credit score instead of a person.
            </p>
            <p>
              We've been where you are. We understand the stress, the confusion, and the frustration of navigating a financial system that wasn't designed with you in mind. That's exactly why we built something different.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Find the Right <span className="text-[#f9c65d]">Solution</span> for Your Situation
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Every financial challenge requires a different approach. Explore our consumer services below and discover which path makes sense for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16">
            Getting Started Is <span className="text-[#f9c65d]">Simple</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Search className="w-8 h-8 text-white" />,
                step: "1",
                title: "Explore Your Options",
                description: "Browse our consumer services and identify which solutions align with your current financial goals and challenges."
              },
              {
                icon: <Calendar className="w-8 h-8 text-white" />,
                step: "2",
                title: "Schedule a Free Consultation",
                description: "Talk with a Mesa Group advisor who will listen to your situation, answer your questions, and recommend the best path forward."
              },
              {
                icon: <CheckSquare className="w-8 h-8 text-white" />,
                step: "3",
                title: "Choose Your Solution",
                description: "Select the service or program that makes the most sense for your budget, timeline, and goals. You're in control."
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-white" />,
                step: "4",
                title: "Take Action & See Results",
                description: "Start making progress with professional guidance, transparent pricing, and ongoing support every step of the way."
              }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center mx-auto">
                  {item.icon}
                </div>
                <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center mx-auto -mt-2">
                  <span className="text-sm font-bold text-gray-900">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 space-y-4">
            <CalendlyPopupButton
              text="Schedule Your Free Consultation"
              className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-4 px-8 rounded-lg transition-colors"
              prefillOptions={{
                customAnswers: {
                  a1: "For Consumers Page - How It Works CTA"
                }
              }}
            />
            <div>
              <a href="tel:6613103040" className="inline-flex items-center gap-2 text-gray-700 hover:text-amber-600 font-medium">
                <Phone className="w-5 h-5" />
                (661) 310-3040
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Mesa Group */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16">
            Why People Choose <span className="text-[#f9c65d]">Mesa Group</span> Consulting
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-6 h-6 text-amber-600" />,
                title: "No Judgment, Just Guidance",
                description: "Your credit score doesn't define you. We've worked with clients from 300 to 800, and everyone gets the same respect, professionalism, and white-glove service."
              },
              {
                icon: <DollarSign className="w-6 h-6 text-amber-600" />,
                title: "Transparent Pricing",
                description: "No hidden fees. No surprise charges. We tell you exactly what services cost upfront, so you can make informed decisions without anxiety."
              },
              {
                icon: <Globe className="w-6 h-6 text-amber-600" />,
                title: "Multilingual Support",
                description: "We serve diverse communities with dedicated support in English, Spanish, and Punjabi—because financial guidance should be accessible in your language."
              },
              {
                icon: <BookOpen className="w-6 h-6 text-amber-600" />,
                title: "Education-First Approach",
                description: "We don't just provide services—we teach you how credit works, why it matters, and how to maintain your financial health long-term."
              },
              {
                icon: <Award className="w-6 h-6 text-amber-600" />,
                title: "Proven Results",
                description: "2,500+ clients helped. 150+ five-star reviews. Real people achieving real financial transformation with our guidance and support."
              },
              {
                icon: <Layers className="w-6 h-6 text-amber-600" />,
                title: "Comprehensive Solutions",
                description: "From credit restoration to life insurance, we offer a full range of consumer financial solutions—so you don't need to navigate multiple companies."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 space-y-4 shadow-md">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16">
            Real Stories from <span className="text-[#f9c65d]">Real People</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-lg p-6 shadow-md space-y-4">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#f9c65d] text-[#f9c65d]" />
                  ))}
                </div>
                <p className="text-white italic leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-300">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12">
            Common Questions About Our <span className="text-[#f9c65d]">Consumer Services</span>
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-bold text-gray-900">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your Financial <span className="text-[#f9c65d]">Transformation</span> Starts with One Conversation
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Whether you're ready to take action today or just exploring your options, we're here to help. Schedule a free consultation, and let's talk about where you are, where you want to be, and the most practical path to get there.
          </p>

          <p className="text-gray-600 mb-8">
            No pressure. No judgment. Just honest guidance from people who understand what you're going through.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <CalendlyPopupButton
              text="Schedule Free Consultation"
              className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-4 px-8 rounded-lg transition-colors"
              prefillOptions={{
                utm: {
                  source: "for_consumers",
                  medium: "final_cta"
                }
              }}
              showArrow={false}
            />
            <a
              href="tel:6613103040"
              className="bg-white hover:bg-gray-50 text-gray-900 font-semibold py-4 px-8 rounded-lg border-2 border-gray-300 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Us: (661) 310-3040
            </a>
          </div>

          <div className="text-sm text-gray-600 space-y-2">
            <p className="flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" />
              M-F: 9am - 7pm | Sat: 10am - 2pm PST
            </p>
            <p className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" />
              5001 California Ave Suite 219, Bakersfield, California 93309
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForConsumers;
