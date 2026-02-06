import { useState } from 'react';
import { Search, Clock, ArrowRight, BookOpen, TrendingUp, Building2, Scale, DollarSign, Mail, Loader2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CalendlyModal } from '@/components/CalendlyModal';
import { NewsletterModal } from '@/components/NewsletterModal';
import { useWordPressPosts } from '@/hooks/useWordPress';
import { 
  getFeaturedImageUrl, 
  getPostCategories, 
  stripHtmlTags, 
  calculateReadingTime,
  getBlogPostUrl,
  decodeHtmlEntities
} from '@/utils/wordpress';

const ArticlesInsights = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const navigate = useNavigate();

  // Fetch WordPress posts
  const { data: wordpressPosts, isLoading, error } = useWordPressPosts({ per_page: 9 });

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

  const categories = [
    {
      name: "Credit Fundamentals",
      description: "Start here if you're new to credit or want to understand how the system really works. Learn what affects your score, how credit reports work, and the basics everyone should know.",
      icon: BookOpen,
      articles: []
    },
    {
      name: "Credit Repair Strategies",
      description: "Proven strategies for disputing errors, removing negative items, and rebuilding your credit profile. These are the same approaches professionals use, now available to you.",
      icon: TrendingUp,
      articles: []
    },
    {
      name: "Business Funding",
      description: "Access capital to grow your business, even with less-than-perfect credit. Learn how to qualify for funding, build business credit, and leverage the right financing options.",
      icon: Building2,
      articles: []
    },
    {
      name: "Debt Relief Solutions",
      description: "Overwhelmed by debt? Explore your options for getting relief, negotiating with creditors, and creating a realistic path forward without destroying your credit.",
      icon: Scale,
      articles: []
    },
    {
      name: "Financial Planning",
      description: "Build long-term financial health with practical strategies for budgeting, saving, and planning major purchases, even when money is tight.",
      icon: DollarSign,
      articles: []
    }
  ];

  const featuredArticles = [
    {
      id: 1,
      title: "Does Credit Utilization Matter If You Pay in Full Every Month?",
      excerpt: "Yes, credit utilization affects your score even if you pay in full monthly. The timing of when your balance gets reported matters more than whether you eventually pay it off. Learn why statement closing dates are more important than due dates.",
      category: "Credit Truth Thursdays",
      readTime: "8 min read",
      image: "/blog-post-images/post-01-img-1-woman-reviewing-credit-card-statement-v2.png"
    },
    {
      id: 2,
      title: "What Is WFBNA on Your Credit Report? (Wells Fargo Explained)",
      excerpt: "WFBNA stands for Wells Fargo Bank N.A. and appears on credit reports for Wells Fargo products. Learn when this code is normal and when it signals a problem you need to address.",
      category: "What's That Wednesday",
      readTime: "6 min read",
      image: "/blog-post-images/post-02-img-1-confused-person-reviewing-credit-report.png"
    },
    {
      id: 3,
      title: "Debt Relief vs Debt Consolidation: Which One Is Right for You?",
      excerpt: "Debt relief and debt consolidation solve different problems. Consolidation reorganizes your debt at better terms. Relief reduces what you owe through negotiation. Learn which path fits your situation.",
      category: "Money Mondays",
      readTime: "10 min read",
      image: "/blog-post-images/post-03-img-1-stressed-person-choosing-debt-options.png"
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
              Expert guidance on credit, debt, and financial growth, written for real people navigating real challenges.
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

          {/* Loading State */}
          {isLoading && (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="w-8 h-8 text-[#f9c65d] animate-spin" />
              <span className="ml-3 text-gray-600">Loading articles...</span>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-12">
              <p className="text-red-600 mb-4">Unable to load articles from WordPress.</p>
              <p className="text-gray-600">Please check back later or contact support.</p>
            </div>
          )}

          {/* WordPress Posts */}
          {!isLoading && !error && wordpressPosts && wordpressPosts.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {wordpressPosts.map((post) => {
                const featuredImage = getFeaturedImageUrl(post);
                const categories = getPostCategories(post);
                const category = categories.length > 0 ? categories[0].name : 'Uncategorized';
                const title = decodeHtmlEntities(post.title.rendered);
                const excerpt = stripHtmlTags(post.excerpt.rendered);
                const readTime = calculateReadingTime(post.content.rendered);
                const postUrl = getBlogPostUrl(post.slug);

                return (
                  <a
                    key={post.id}
                    href={postUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group block"
                  >
                    <div className="relative h-48 overflow-hidden">
                      {featuredImage ? (
                        <img
                          src={featuredImage}
                          alt={title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                          <BookOpen className="w-16 h-16 text-amber-300" />
                        </div>
                      )}
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 bg-[#f9c65d] text-gray-900 text-sm font-semibold rounded-full shadow-lg">
                          {category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{readTime}</span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-[#bb9446] transition-colors">
                        {title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed line-clamp-3">
                        {excerpt}
                      </p>

                      <div className="pt-4">
                        <span className="inline-flex items-center text-[#bb9446] font-semibold group-hover:gap-2 transition-all">
                          Read Article
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          )}

          {/* Fallback: Show old featured articles if no WordPress posts */}
          {!isLoading && !error && (!wordpressPosts || wordpressPosts.length === 0) && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.map((article) => {
                const isFirstArticle = article.id === 1;
                const isSecondArticle = article.id === 2;
                const isThirdArticle = article.id === 3;
                const cardContent = (
                  <>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 bg-[#f9c65d] text-gray-900 text-sm font-semibold rounded-full shadow-lg">
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
                  </>
                );

                if (isFirstArticle) {
                  return (
                    <Link
                      key={article.id}
                      to="/blog/does-credit-utilization-matter-if-you-pay-in-full-every-month"
                      className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group block"
                    >
                      {cardContent}
                    </Link>
                  );
                } else if (isSecondArticle) {
                  return (
                    <Link
                      key={article.id}
                      to="/blog/what-is-wfbna-on-credit-report"
                      className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group block"
                    >
                      {cardContent}
                    </Link>
                  );
                } else if (isThirdArticle) {
                  return (
                    <Link
                      key={article.id}
                      to="/blog/debt-relief-vs-debt-consolidation"
                      className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group block"
                    >
                      {cardContent}
                    </Link>
                  );
                }
                return null;
              })}
            </div>
          )}

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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#f9c65d]/20 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-[#bb9446]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {category.description}
                  </p>
                  <p className="text-sm text-gray-500 italic mt-4">
                    Articles coming soon
                  </p>
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
            Reading about credit repair is a great start, but if you're ready for professional help, our team is here to guide you through every step of your financial journey.
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
