import { useState } from 'react';
import { Search, Clock, ArrowRight, Mail } from 'lucide-react';
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
              } else {
                return (
                  <article
                    key={article.id}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
                  >
                    {cardContent}
                  </article>
                );
              }
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
