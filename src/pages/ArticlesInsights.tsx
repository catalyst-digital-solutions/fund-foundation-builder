import { useState } from 'react';
import { Search, Clock, ArrowRight, BookOpen, TrendingUp, Building2, Scale, DollarSign, Mail, CheckCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CalendlyModal } from '@/components/CalendlyModal';
import { NewsletterModal } from '@/components/NewsletterModal';

const ArticlesInsights = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const navigate = useNavigate();

  const openCalendly = () => setIsCalendlyOpen(true);
  const closeCalendly = () => setIsCalendlyOpen(false);
  const openNewsletter = () => setIsNewsletterOpen(true);
  const closeNewsletter = () => setIsNewsletterOpen(false);

  const handleViewServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    // Wait for navigation to complete, then scroll to services section
    setTimeout(() => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const featuredArticles = [
    {
      id: 1,
      title: "How Credit Scores Are Actually Calculated: The Complete Breakdown",
      excerpt: "Understanding the exact factors that determine your credit score is the first step to improving it. Learn the real math behind FICO scores.",
      category: "Credit Fundamentals",
      readTime: "8 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "How to Dispute Errors on Your Credit Report (Step-by-Step Guide)",
      excerpt: "A comprehensive walkthrough of the credit dispute process, including letter templates and timeline expectations.",
      category: "Credit Repair Strategies",
      readTime: "12 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Business Funding Options When You Have Bad Personal Credit",
      excerpt: "Your personal credit score doesn't have to block your business growth. Discover funding alternatives that look beyond FICO.",
      category: "Business Funding",
      readTime: "10 min read",
      image: "/api/placeholder/400/250"
    }
  ];

  const categories = [
    {
      name: "Credit Fundamentals",
      description: "Start here if you're new to credit or want to understand how the system really works. Learn what affects your score, how credit reports work, and the basics everyone should know.",
      icon: BookOpen,
      articles: [
        "How Credit Scores Are Actually Calculated: The Complete Breakdown",
        "What's the Difference Between a Hard Pull and Soft Pull?",
        "Understanding Credit Utilization: The 30% Rule Explained",
        "FICO Score vs. VantageScore: What's the Difference?",
        "How Long Do Negative Items Stay on Your Credit Report?"
      ]
    },
    {
      name: "Credit Repair Strategies",
      description: "Proven strategies for disputing errors, removing negative items, and rebuilding your credit profile. These are the same approaches professionals use—now available to you.",
      icon: TrendingUp,
      articles: [
        "How to Dispute Errors on Your Credit Report (Step-by-Step Guide)",
        "The Truth About Pay for Delete Agreements",
        "Can Goodwill Letters Really Remove Late Payments?",
        "How to Deal with Collections: Your Complete Guide",
        "What to Do If You're a Victim of Identity Theft"
      ]
    },
    {
      name: "Business Funding",
      description: "Access capital to grow your business—even with less-than-perfect credit. Learn how to qualify for funding, build business credit, and leverage the right financing options.",
      icon: Building2,
      articles: [
        "How to Qualify for 0% Business Credit Cards",
        "Business Funding Options When You Have Bad Personal Credit",
        "Building Business Credit: A Complete Starter Guide",
        "What Credit Score Do You Need for an SBA Loan?",
        "Net-30 Vendor Accounts: Building Business Credit Fast"
      ]
    },
    {
      name: "Debt Relief Solutions",
      description: "Overwhelmed by debt? Explore your options for getting relief, negotiating with creditors, and creating a realistic path forward without destroying your credit.",
      icon: Scale,
      articles: [
        "Debt Settlement vs. Debt Consolidation: Which Is Right for You?",
        "How to Negotiate with Creditors (Without Hurting Your Credit)",
        "Should You File for Bankruptcy? Pros, Cons, and Alternatives",
        "Understanding Debt Relief Programs: What You Need to Know",
        "How to Stop Collection Calls Legally"
      ]
    },
    {
      name: "Financial Planning",
      description: "Build long-term financial health with practical strategies for budgeting, saving, and planning major purchases—even when money is tight.",
      icon: DollarSign,
      articles: [
        "Building an Emergency Fund with Bad Credit: A Realistic Guide",
        "How to Budget When You're Living Paycheck to Paycheck",
        "First-Time Homebuyer Guide: Credit Requirements Explained",
        "How to Save for a Down Payment While Paying Off Debt",
        "Financial Planning for Immigrants: Navigating Credit in a New Country"
      ]
    }
  ];


  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-white via-amber-50 to-white py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Articles & <span className="text-[#f9c65d]">Insights</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Expert guidance on credit, debt, and financial growth—written for real people navigating real challenges.
            </p>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Whether you're rebuilding credit, exploring business funding options, or looking for debt relief strategies, our articles break down complex financial topics into clear, actionable steps. No jargon. No fluff. Just honest, practical advice you can use today.
            </p>

            <div className="max-w-2xl mx-auto mt-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles... (e.g., 'how to dispute collections')"
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-lg focus:border-[#f9c65d] focus:outline-none text-base"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURED/LATEST ARTICLES SECTION */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
            Latest <span className="text-[#f9c65d]">Articles</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
              >
                <div className="relative h-48 bg-gradient-to-br from-[#f9c65d]/20 to-[#bb9446]/20 overflow-hidden flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-[#bb9446]" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-[#f9c65d] text-gray-900 text-sm font-semibold rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-[#bb9446] transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="pt-4">
                    <span className="inline-flex items-center text-[#bb9446] font-semibold group-hover:gap-2 transition-all">
                      Read Article
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* BROWSE BY CATEGORY SECTION */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Browse by <span className="text-[#f9c65d]">Topic</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Find exactly what you're looking for. Our articles are organized by category to help you quickly access the information you need.
            </p>
          </div>

          <div className="space-y-16">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                  
                  <div className="flex items-start gap-6 mb-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#f9c65d]/20 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-[#bb9446]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                        {category.name}
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                      Popular Articles in This Category
                    </p>
                    <div className="space-y-3">
                      {category.articles.map((article, articleIndex) => (
                        <div 
                          key={articleIndex}
                          className="flex items-start gap-3 p-4 rounded-lg hover:bg-amber-50 transition-colors cursor-pointer group"
                        >
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 group-hover:text-[#bb9446] transition-colors font-medium">
                            {article}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* NEWSLETTER SIGNUP SECTION */}
      <section className="py-16 md:py-24 bg-[#3e3e3e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f9c65d] rounded-full mb-6">
            <Mail className="w-8 h-8 text-gray-900" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Never Miss an <span className="text-[#f9c65d]">Article</span>
          </h2>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Get our latest credit tips, financial strategies, and expert insights delivered straight to your inbox every week.
          </p>

          <button
            onClick={openNewsletter}
            className="px-8 py-4 bg-[#f9c65d] hover:bg-[#bb9446] text-gray-900 font-semibold rounded-lg transition-colors inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
          >
            Subscribe to Newsletter
            <ArrowRight className="w-5 h-5" />
          </button>

          <p className="text-sm text-gray-400 mt-4">
            No spam. Unsubscribe anytime.
          </p>

        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#FFFBEC] from-40% to-[#FFECD7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Need More Than <span className="text-[#f9c65d]">Articles?</span>
          </h2>

          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Reading about credit repair is a great start—but if you're ready for professional help, our team is here to guide you through every step of your financial journey.
          </p>

          <div className="flex flex-row gap-4 justify-center">
            <Link
              to="/"
              onClick={handleViewServicesClick}
              className="inline-flex items-center justify-center px-8 py-4 bg-[#f9c65d] hover:bg-[#bb9446] text-gray-900 font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl border-2 border-[#bb9446]"
            >
              View Our Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <button
              onClick={openCalendly}
              className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-lg border-2 border-gray-300 transition-all"
            >
              Book a Free Consultation
            </button>
          </div>

        </div>
      </section>

      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={closeCalendly}
        prefillOptions={{
          utm: {
            source: 'mesa-website',
            medium: 'website',
            campaign: 'Articles & Insights Page - Final CTA'
          }
        }}
      />

      <NewsletterModal
        isOpen={isNewsletterOpen}
        onClose={closeNewsletter}
      />

      <Footer />
    </div>
  );
};

export default ArticlesInsights;
