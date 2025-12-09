import React, { useState } from 'react';
import { 
  BookOpen, 
  Newspaper, 
  Calculator, 
  FileText, 
  CheckCircle, 
  ArrowRight,
  Star,
  Users,
  Globe,
  TrendingUp,
  Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Resources = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      alert('Thank you for subscribing!');
    }, 1000);
  };

  const resourceCategories = [
    {
      icon: BookOpen,
      title: 'Articles & Insights',
      description: 'In-depth guides and educational content answering your most pressing financial questions. From credit repair strategies to business funding tips, our articles break down complex topics into clear, actionable steps.',
      features: [
        'Credit fundamentals and scoring',
        'Credit repair strategies that work',
        'Business funding insights',
        'Debt relief solutions',
        'Financial planning guidance'
      ],
      link: '/resources/articles',
      linkText: 'Browse Articles'
    },
    {
      icon: Newspaper,
      title: 'MESA News',
      description: "Stay updated on MESA's growth, community involvement, industry developments, and partnership announcements. See what we're doing locally in Bakersfield and beyond as we continue bridging the gap between culture and credit.",
      features: [
        'Company milestones and achievements',
        'Local community impact stories',
        'Industry news and regulatory updates',
        'Partnership announcements',
        'Client success stories'
      ],
      link: '/resources/news',
      linkText: 'Read Latest News'
    },
    {
      icon: Calculator,
      title: 'Financial Calculators',
      description: 'Free, interactive tools that provide instant insights into your financial situation. Get personalized results and actionable recommendations to help you make informed decisions about your credit and debt.',
      features: [
        'Credit utilization calculator',
        'Debt payoff calculator',
        'Debt-to-income calculator',
        'Credit score simulator',
        'Business funding qualification calculator',
        'Settlement offer calculator',
        'Credit card payoff calculator',
        'Emergency fund calculator'
      ],
      link: '/resources/calculators',
      linkText: 'Try Calculators'
    },
    {
      icon: FileText,
      title: 'Letter Templates',
      description: 'Professional letter templates you can download and customize for free. These are the same formats credit repair specialists use—now available to help you take action on your own terms.',
      features: [
        'Credit dispute letters',
        'Debt management letters',
        'Pay for delete templates',
        'Cease and desist letters',
        'Goodwill adjustment letters',
        'ChexSystems dispute letters',
        'Personal information update letters',
        'Identity theft affidavits'
      ],
      link: '/resources/templates',
      linkText: 'Download Templates'
    }
  ];

  const trustStats = [
    { icon: Users, number: '2,500+', label: 'Clients Helped' },
    { icon: Star, number: '150+', label: 'Five-Star Reviews' },
    { icon: Globe, number: '3', label: 'Languages Supported' },
    { icon: TrendingUp, number: '10+', label: 'Years Experience' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-[#E5D2AF]/20 to-white py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-[#CBCBCB]">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-[#3E3E3E]">
                Free Educational Resources
              </span>
            </div>

            {/* Hero Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#3E3E3E] leading-tight">
              Your Financial Education <span className="text-[#f9c65d]">Starts Here</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-[#3E3E3E] leading-relaxed">
              Expert insights, proven strategies, and free tools to transform your financial future.
            </p>

            {/* Body Copy */}
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 text-left max-w-3xl mx-auto">
              <p className="text-lg text-[#3E3E3E] leading-relaxed">
                At Mesa Group Consulting, we believe knowledge is the first step to financial freedom. That's why we've created <strong>The MESA Financial Knowledge Center</strong>—a comprehensive resource hub designed to educate, empower, and equip you with everything you need to take control of your credit and finances.
              </p>
              <p className="text-lg text-[#3E3E3E] leading-relaxed mt-4">
                Whether you're looking to understand credit fundamentals, repair your credit profile, secure business funding, or manage debt, you'll find the answers you need right here.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Resource Categories Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-[#E5D2AF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3E3E3E] mb-4">
              Everything You Need to Build <span className="text-[#f9c65d]">Financial Confidence</span>
            </h2>
            <p className="text-lg md:text-xl text-[#3E3E3E] leading-relaxed">
              The MESA Financial Knowledge Center brings together educational content, real-time tools, professional templates, and company updates—all in one place. Explore each section below to find exactly what you're looking for.
            </p>
          </div>

          {/* Resource Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {resourceCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-[#f9c65d]/30 to-[#bb9446]/30 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f9c65d]/20 to-[#bb9446]/20" />
                    <IconComponent className="w-20 h-20 text-[#bb9446] relative z-10" />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#f9c65d]/20 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-[#bb9446]" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#3E3E3E] flex-1">
                        {category.title}
                      </h3>
                    </div>

                    <p className="text-[#3E3E3E] leading-relaxed mb-6">
                      {category.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3 mb-6">
                      <p className="text-sm font-semibold text-[#3E3E3E] uppercase tracking-wide">
                        What's Inside:
                      </p>
                      {category.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-[#3E3E3E]">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Link
                      to={category.link}
                      className="inline-flex items-center justify-center gap-2 bg-[#f9c65d] hover:bg-[#bb9446] text-[#3E3E3E] font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 w-full group-hover:scale-[1.02]"
                    >
                      {category.linkText}
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Why MESA Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#E5D2AF]/30 to-[#f8d899]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left - Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3E3E3E]">
                Education-First <span className="text-[#f9c65d]">Financial Guidance</span>
              </h2>

              <div className="space-y-4 text-lg text-[#3E3E3E] leading-relaxed">
                <p>
                  Unlike other companies that just want to sell you services, MESA Group Consulting is committed to <strong>educating you first</strong>. We believe that when you understand how credit works, you're empowered to make better decisions for your financial future.
                </p>
                <p>
                  Our Financial Knowledge Center reflects this commitment—offering real value, transparency, and support whether you're just starting to learn about credit or ready to take action with our professional services.
                </p>
              </div>

              {/* Trust Stats Grid */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                {trustStats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                      <div className="flex items-center gap-3 mb-2">
                        <IconComponent className="w-6 h-6 text-[#bb9446]" />
                        <p className="text-3xl font-bold text-[#3E3E3E]">
                          {stat.number}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-[#3E3E3E]/70">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3">
                  <Globe className="w-6 h-6 text-[#bb9446] flex-shrink-0" />
                  <p className="text-[#3E3E3E] font-medium">
                    <strong>Multilingual Support:</strong> Spanish, English & Punjabi
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <p className="text-[#3E3E3E] font-medium">
                    Serving Kern County & Beyond
                  </p>
                </div>
              </div>

            </div>

            {/* Right - Image Placeholder */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#f9c65d]/40 to-[#bb9446]/40 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f9c65d]/30 to-[#bb9446]/30" />
                <BookOpen className="w-32 h-32 text-[#bb9446] relative z-10" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Professional Help CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-[#3E3E3E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Want Experts to <span className="text-[#f9c65d]">Handle It for You?</span>
          </h2>

          <p className="text-xl text-white/80 leading-relaxed mb-8">
            Our resources are designed to educate and empower you—but if you'd rather have professionals handle your credit repair, business funding, or debt relief, we're here to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-[#f9c65d] hover:bg-[#bb9446] text-[#3E3E3E] font-semibold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-200"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://www.mesagroupconsulting.com/contact-us"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-[#3E3E3E] font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-white"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-white via-[#E5D2AF]/20 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f9c65d]/20 rounded-full mb-4">
                <Mail className="w-8 h-8 text-[#bb9446]" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-4">
                Get Weekly <span className="text-[#f9c65d]">Financial Insights</span>
              </h2>

              <p className="text-lg text-[#3E3E3E] leading-relaxed">
                Join <strong>2,500+ readers</strong> who receive expert credit tips, industry updates, and exclusive resources delivered straight to their inbox.
              </p>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-6 py-4 rounded-lg border-2 border-[#CBCBCB] focus:border-[#f9c65d] focus:ring-2 focus:ring-[#f9c65d]/20 outline-none transition-all text-[#3E3E3E]"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 bg-[#f9c65d] hover:bg-[#bb9446] disabled:bg-[#CBCBCB] text-[#3E3E3E] font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                </button>
              </div>

              <p className="text-sm text-[#3E3E3E]/60 text-center mt-4">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </form>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
