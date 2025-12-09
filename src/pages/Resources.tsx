import React, { useState } from 'react';
import { 
  BookOpen, 
  Newspaper, 
  Calculator, 
  FileText, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Star, 
  Globe,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Resources = () => {
  const [email, setEmail] = useState('');

  const resourceCards = [
    {
      icon: BookOpen,
      title: 'Articles & Insights',
      description: 'In-depth guides and educational content answering your most pressing financial questions. From credit repair strategies to business funding tips, our articles break down complex topics into clear, actionable steps.',
      items: [
        'Credit fundamentals and scoring',
        'Credit repair strategies that work',
        'Business funding insights',
        'Debt relief solutions',
        'Financial planning guidance'
      ],
      href: '/articles',
      cta: 'Browse Articles'
    },
    {
      icon: Newspaper,
      title: 'MESA News',
      description: "Stay updated on MESA's growth, community involvement, industry developments, and partnership announcements. See what we're doing locally in Bakersfield and beyond as we continue bridging the gap between culture and credit.",
      items: [
        'Company milestones and achievements',
        'Local community impact stories',
        'Industry news and regulatory updates',
        'Partnership announcements',
        'Client success stories'
      ],
      href: '/mesa-news',
      cta: 'Read Latest News'
    },
    {
      icon: Calculator,
      title: 'Financial Calculators',
      description: 'Free, interactive tools that provide instant insights into your financial situation. Get personalized results and actionable recommendations to help you make informed decisions about your credit and debt.',
      items: [
        'Credit utilization calculator',
        'Debt payoff calculator',
        'Debt-to-income calculator',
        'Credit score simulator',
        'Business funding qualification calculator',
        'Settlement offer calculator',
        'Credit card payoff calculator',
        'Emergency fund calculator'
      ],
      href: '/financial-calculators',
      cta: 'Use Calculators'
    },
    {
      icon: FileText,
      title: 'Letter Templates',
      description: "Professional letter templates you can download and customize for free. These are the same formats credit repair specialists use—now available to help you take action on your own terms.",
      items: [
        'Credit dispute letters',
        'Debt management letters',
        'Pay for delete templates',
        'Cease and desist letters',
        'Goodwill adjustment letters',
        'ChexSystems dispute letters',
        'Personal information update letters',
        'Identity theft affidavits'
      ],
      href: '/letter-templates',
      cta: 'Download Templates'
    }
  ];

  const trustStats = [
    { value: '2,500+', label: 'Clients Helped' },
    { value: '150+', label: 'Five-Star Reviews' },
    { value: '3', label: 'Languages Supported' },
    { value: 'Kern+', label: 'County & Beyond' }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#3e3e3e] via-[#2c2c2c] to-[#3e3e3e] py-20 md:py-28 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f9c65d' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#f9c65d]/20 text-[#f9c65d] px-4 py-2 rounded-full text-sm font-medium">
                <BookOpen className="w-4 h-4" />
                <span>The MESA Financial Knowledge Center</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Your Financial Education{' '}
                <span className="text-[#f9c65d]">Starts Here</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Expert insights, proven strategies, and free tools to transform your financial future.
              </p>
              
              <p className="text-lg text-gray-400 leading-relaxed">
                At Mesa Group Consulting, we believe knowledge is the first step to financial freedom. That's why we've created The MESA Financial Knowledge Center—a comprehensive resource hub designed to educate, empower, and equip you with everything you need to take control of your credit and finances.
              </p>
              
              <p className="text-lg text-gray-400 leading-relaxed">
                Whether you're looking to understand credit fundamentals, repair your credit profile, secure business funding, or manage debt, you'll find the answers you need right here.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="#resources"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#f9c65d] text-[#3e3e3e] font-semibold rounded-lg hover:bg-[#bb9446] transition-colors shadow-lg"
                >
                  Explore Resources
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <Link 
                  to="/credit-repair-2"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white/30 hover:border-[#f9c65d] hover:text-[#f9c65d] transition-colors"
                >
                  Get Professional Help
                </Link>
              </div>
            </div>
            
            {/* Hero Image Placeholder */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#f9c65d]/20 to-[#bb9446]/20 rounded-2xl border border-[#f9c65d]/30 flex items-center justify-center">
                  {/* Image Placeholder */}
                  <div className="text-center p-8">
                    <BookOpen className="w-24 h-24 text-[#f9c65d]/50 mx-auto mb-4" />
                    <p className="text-gray-500 text-sm">[Hero Image Placeholder: Professional scene showing diverse people learning about finances, studying documents, or using financial tools. Warm, inviting atmosphere with MGC gold accents.]</p>
                  </div>
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-[#f9c65d] text-[#3e3e3e] px-4 py-2 rounded-lg font-bold shadow-lg">
                  100% Free
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white text-[#3e3e3e] px-4 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />
                    <span className="font-semibold">Expert-Curated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Find Here Section */}
      <section id="resources" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3e3e3e] leading-tight">
              Everything You Need to Build{' '}
              <span className="text-[#f9c65d]">Financial Confidence</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              The MESA Financial Knowledge Center brings together educational content, real-time tools, professional templates, and company updates—all in one place. Explore each section below to find exactly what you're looking for.
            </p>
          </div>

          {/* Resource Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {resourceCards.map((card, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Card Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-[#f9c65d]/10 to-[#bb9446]/10 flex items-center justify-center border-b border-gray-100">
                  <div className="text-center p-4">
                    <card.icon className="w-16 h-16 text-[#bb9446] mx-auto mb-2" />
                    <p className="text-gray-400 text-xs">[Image Placeholder: Visual representing {card.title}]</p>
                  </div>
                </div>
                
                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#f9c65d]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <card.icon className="w-6 h-6 text-[#bb9446]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#3e3e3e]">{card.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                  
                  <div className="pt-2">
                    <p className="text-sm font-semibold text-[#3e3e3e] mb-3">What's Inside:</p>
                    <ul className="space-y-2">
                      {card.items.slice(0, 5).map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                      {card.items.length > 5 && (
                        <li className="text-sm text-[#bb9446] font-medium">
                          + {card.items.length - 5} more...
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="pt-4">
                    <Link
                      to={card.href}
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#f9c65d] text-[#3e3e3e] font-semibold rounded-lg hover:bg-[#bb9446] transition-colors group-hover:shadow-md"
                    >
                      {card.cta}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why MESA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#3e3e3e] via-[#2c2c2c] to-[#3e3e3e] relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#f9c65d]/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Education-First{' '}
                <span className="text-[#f9c65d]">Financial Guidance</span>
              </h2>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Unlike other companies that just want to sell you services, MESA Group Consulting is committed to educating you first. We believe that when you understand how credit works, you're empowered to make better decisions for your financial future.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Our Financial Knowledge Center reflects this commitment—offering real value, transparency, and support whether you're just starting to learn about credit or ready to take action with our professional services.
              </p>
              
              {/* Trust Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                {trustStats.map((stat, index) => (
                  <div key={index} className="text-center bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="text-3xl md:text-4xl font-bold text-[#f9c65d]">{stat.value}</div>
                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Image Placeholder */}
            <div className="hidden lg:block">
              <div className="aspect-square bg-gradient-to-br from-[#f9c65d]/10 to-[#bb9446]/10 rounded-2xl border border-[#f9c65d]/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <Users className="w-24 h-24 text-[#f9c65d]/50 mx-auto mb-4" />
                  <p className="text-gray-500 text-sm">[Image Placeholder: Mesa Group team helping diverse clients, warm educational setting, showing trust and professionalism]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Help CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#FFFBEC] from-40% to-[#FFECD7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3e3e3e] leading-tight mb-6">
            Want Experts to{' '}
            <span className="text-[#f9c65d]">Handle It for You?</span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto">
            Our resources are designed to educate and empower you—but if you'd rather have professionals handle your credit repair, business funding, or debt relief, we're here to help.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <Link 
              to="/credit-repair-2"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all group border border-gray-100"
            >
              <div className="w-14 h-14 bg-[#f9c65d]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#f9c65d]/20 transition-colors">
                <CheckCircle className="w-7 h-7 text-[#bb9446]" />
              </div>
              <h3 className="text-xl font-bold text-[#3e3e3e] mb-2">Credit Repair</h3>
              <p className="text-gray-600 text-sm mb-4">Professional credit restoration with our Mesa360 system</p>
              <span className="inline-flex items-center text-[#bb9446] font-semibold group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </span>
            </Link>
            
            <Link 
              to="/business-funding"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all group border border-gray-100"
            >
              <div className="w-14 h-14 bg-[#f9c65d]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#f9c65d]/20 transition-colors">
                <Calculator className="w-7 h-7 text-[#bb9446]" />
              </div>
              <h3 className="text-xl font-bold text-[#3e3e3e] mb-2">Business Funding</h3>
              <p className="text-gray-600 text-sm mb-4">Access capital through our network of 75+ lenders</p>
              <span className="inline-flex items-center text-[#bb9446] font-semibold group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </span>
            </Link>
            
            <Link 
              to="/debt-relief"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all group border border-gray-100"
            >
              <div className="w-14 h-14 bg-[#f9c65d]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#f9c65d]/20 transition-colors">
                <FileText className="w-7 h-7 text-[#bb9446]" />
              </div>
              <h3 className="text-xl font-bold text-[#3e3e3e] mb-2">Debt Relief</h3>
              <p className="text-gray-600 text-sm mb-4">Reduce your debt burden and achieve financial freedom</p>
              <span className="inline-flex items-center text-[#bb9446] font-semibold group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </span>
            </Link>
          </div>
          
          <Link
            to="/about"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#f9c65d] text-[#3e3e3e] font-semibold rounded-lg hover:bg-[#bb9446] transition-colors shadow-lg"
          >
            Schedule Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-[#3e3e3e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-[#f9c65d]/10 to-[#bb9446]/10 rounded-2xl border border-[#f9c65d]/20 p-8 md:p-12">
            <Mail className="w-16 h-16 text-[#f9c65d] mx-auto mb-6" />
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Weekly Financial Insights
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join 2,500+ readers who receive expert credit tips, industry updates, and exclusive resources delivered straight to their inbox.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg bg-white text-[#3e3e3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f9c65d]"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-[#f9c65d] text-[#3e3e3e] font-semibold rounded-lg hover:bg-[#bb9446] transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-sm text-gray-500">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
