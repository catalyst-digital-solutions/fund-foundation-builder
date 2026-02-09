import React, { useState } from 'react';
import {
  Newspaper,
  Search,
  Calendar,
  Tag,
  ArrowRight,
  Building2,
  FileText,
  Handshake,
  Award,
  UserCircle,
  Heart,
  Users,
  MapPin,
  Tv,
  Radio,
  Mail,
  Send,
  Phone,
  Filter,
  TrendingUp,
  Loader2
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CalendlyModal } from '@/components/CalendlyModal';
import { NewsletterModal } from '@/components/NewsletterModal';
import { useWordPressPosts } from '@/hooks/useWordPress';
import { 
  getFeaturedImageUrl, 
  getPostCategories, 
  stripHtmlTags,
  formatPostDate,
  getBlogPostUrl,
  decodeHtmlEntities
} from '@/utils/wordpress';
import { SEO } from '@/components/SEO';

import kget17Logo from '@/assets/kget-17-logo.png';
import studio17Logo from '@/assets/studio-17-logo.png';
import telemundoLogo from '@/assets/telemundo-logo.png';
import cwLogo from '@/assets/cw-logo.png';

const MesaNews = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('recent');
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  // Fetch WordPress posts for news
  const { data: wordpressPosts, isLoading, error } = useWordPressPosts({ per_page: 6 });

  const openCalendly = () => setIsCalendlyOpen(true);
  const closeCalendly = () => setIsCalendlyOpen(false);
  const openNewsletter = () => setIsNewsletterOpen(true);
  const closeNewsletter = () => setIsNewsletterOpen(false);

  const categories = [
    {
      id: 'company-updates',
      name: 'Company Updates',
      icon: Building2,
      description: 'Major milestones, new services, office updates, and the growth of MESA Group Consulting. See how we\'re expanding our reach and deepening our impact in the communities we serve.'
    },
    {
      id: 'industry-news',
      name: 'Industry News',
      icon: FileText,
      description: 'Important updates affecting credit repair, debt relief, and financial services. Stay informed about regulatory changes, bureau updates, and trends that impact your financial options.'
    },
    {
      id: 'partnership-announcements',
      name: 'Partnership Announcements',
      icon: Handshake,
      description: 'Strategic partnerships that enhance our services and expand opportunities for our clients. Learn about the trusted companies we work with to deliver comprehensive financial solutions.'
    },
    {
      id: 'client-success-stories',
      name: 'Client Success Stories',
      icon: Award,
      description: 'Real transformation stories from real people. These are the wins that remind us why we do what we do, helping families and businesses rewrite their financial futures.'
    },
    {
      id: 'team-spotlights',
      name: 'Team Spotlights',
      icon: UserCircle,
      description: 'Meet the people behind MESA Group Consulting. Learn about our team\'s expertise, passion, and the personal experiences that drive our commitment to your financial success.'
    }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: '——',
      category: 'Company Updates',
      date: 'January 2026',
      excerpt: '——',
    },
    {
      id: 2,
      title: '——',
      category: 'Partnership Announcements',
      date: 'January 2026',
      excerpt: '——',
    },
    {
      id: 3,
      title: '——',
      category: 'Client Success Stories',
      date: 'January 2026',
      excerpt: '——',
    }
  ];

  const communityHighlights = [
    '——',
    '——',
    '——',
    '——'
  ];

  const mediaLogos = [
    { name: 'KGET 17', logo: kget17Logo },
    { name: 'Studio 17', logo: studio17Logo },
    { name: 'Telemundo', logo: telemundoLogo },
    { name: 'The CW', logo: cwLogo }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Mesa News & Updates | Mesa Group Consulting"
        description="Stay updated on Mesa Group Consulting news, community involvement, media features, and company milestones. Bakersfield credit repair and financial services updates."
        canonicalUrl="/resources/news"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-amber-50 to-white py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            <div className="flex justify-center">
              <div className="bg-amber-100 p-4 rounded-full">
                <Newspaper className="w-12 h-12 text-amber-600" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              MESA <span className="text-[#f9c65d]">News</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Company updates, industry insights, and the stories behind our mission to bridge the gap between culture and credit.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Stay connected with what's happening at MESA Group Consulting. From local community involvement to major milestones, partnership announcements to industry developments. This is where we share our journey, celebrate our clients, and keep you informed about the financial services landscape.
            </p>

            {/* Search & Filter Bar */}
            <div className="mt-8 max-w-2xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-4 space-y-4">
                
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search news... (e.g., 'partnership announcements')"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  
                  <div className="flex-1 relative">
                    <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg appearance-none bg-white cursor-pointer focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                    >
                      <option value="all">All News</option>
                      <option value="company-updates">Company Updates</option>
                      <option value="industry-news">Industry News</option>
                      <option value="partnership-announcements">Partnership Announcements</option>
                      <option value="client-success-stories">Client Success Stories</option>
                      <option value="team-spotlights">Team Spotlights</option>
                    </select>
                  </div>

                  <div className="flex-1 relative">
                    <TrendingUp className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    <select
                      value={sortOrder}
                      onChange={(e) => setSortOrder(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg appearance-none bg-white cursor-pointer focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                    >
                      <option value="recent">Most Recent</option>
                      <option value="oldest">Oldest First</option>
                      <option value="popular">Most Popular</option>
                    </select>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Latest <span className="text-[#f9c65d]">Updates</span>
            </h2>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="w-8 h-8 text-[#f9c65d] animate-spin" />
              <span className="ml-3 text-gray-600">Loading news...</span>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-12">
              <p className="text-red-600 mb-4">Unable to load news from WordPress.</p>
              <p className="text-gray-600">Please check back later or contact support.</p>
            </div>
          )}

          {/* WordPress Posts */}
          {!isLoading && !error && wordpressPosts && wordpressPosts.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {wordpressPosts.map((post) => {
                const featuredImage = getFeaturedImageUrl(post);
                const categories = getPostCategories(post);
                const category = categories.length > 0 ? categories[0].name : 'Company Updates';
                const title = decodeHtmlEntities(post.title.rendered);
                const excerpt = stripHtmlTags(post.excerpt.rendered);
                const date = formatPostDate(post.date);
                const postUrl = getBlogPostUrl(post.slug);

                return (
                  <a
                    key={post.id}
                    href={postUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group block"
                  >
                    <div className="relative h-48 overflow-hidden">
                      {featuredImage ? (
                        <img
                          src={featuredImage}
                          alt={title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="bg-gradient-to-br from-amber-100 to-orange-100 w-full h-full flex items-center justify-center">
                          <Newspaper className="w-16 h-16 text-amber-300" />
                        </div>
                      )}
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 text-amber-800 rounded-full font-medium">
                          <Tag className="w-3 h-3" />
                          {category}
                        </span>
                        <span className="flex items-center gap-1 text-gray-500">
                          <Calendar className="w-4 h-4" />
                          {date}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-amber-600 transition-colors">
                        {title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed line-clamp-3">
                        {excerpt}
                      </p>

                      <span className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors">
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          )}

          {/* Fallback: Show placeholder if no WordPress posts */}
          {!isLoading && !error && (!wordpressPosts || wordpressPosts.length === 0) && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                  <div className="relative h-48 bg-gradient-to-br from-amber-100 to-orange-100 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Newspaper className="w-16 h-16 text-amber-300" />
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 text-amber-800 rounded-full font-medium">
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-gray-500">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-amber-600 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <span className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors cursor-pointer">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Browse by Category Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Explore by <span className="text-[#f9c65d]">Topic</span>
            </h2>
            <p className="text-lg text-gray-700">
              From company milestones to client success stories, find the news that matters to you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div key={category.id} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-amber-600" />
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
                    News coming soon
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Community Impact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              
              <div className="inline-flex bg-amber-100 p-4 rounded-lg">
                <Heart className="w-10 h-10 text-amber-600" />
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                MESA in the <span className="text-[#f9c65d]">Community</span>
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                We're proud to call Kern County home. Beyond credit repair and business funding, we're committed to giving back to the communities that have supported us, through education, sponsorships, and local involvement.
              </p>

              <div className="space-y-4 pt-4">
                {communityHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 leading-relaxed">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>

            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Users className="w-24 h-24 text-amber-300" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Media Appearances Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            
            <div className="inline-flex bg-amber-100 p-4 rounded-lg mb-6">
              <Tv className="w-10 h-10 text-amber-600" />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              MESA in the <span className="text-[#f9c65d]">Media</span>
            </h2>
            
            <p className="text-lg text-gray-700">
              Our mission to bridge the gap between culture and credit has been featured across local and industry media. See where MESA has been making headlines.
            </p>
          </div>

          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
              As Seen On
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {mediaLogos.map((media, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full max-w-[200px] aspect-video flex items-center justify-center"
              >
                <img 
                  src={media.logo} 
                  alt={media.name} 
                  className="max-w-full max-h-16 h-auto object-contain grayscale hover:grayscale-0 transition-all" 
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            
            <div className="flex justify-center mb-6">
              <div className="bg-amber-100 p-4 rounded-full">
                <Mail className="w-10 h-10 text-amber-600" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
              Stay in the <span className="text-[#f9c65d]">Loop</span>
            </h2>

            <p className="text-lg text-gray-700 text-center mb-8 leading-relaxed">
              Get MESA news, company updates, and exclusive announcements delivered to your inbox. Be the first to know about new services, partnerships, and community events.
            </p>

            <div className="text-center">
              <button
                onClick={openNewsletter}
                className="bg-amber-400 text-gray-900 font-semibold py-4 px-8 rounded-lg hover:bg-amber-500 transition-colors shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
              >
                Subscribe to Newsletter
                <Send className="w-5 h-5" />
              </button>

              <p className="text-sm text-gray-600 mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-gradient-to-br from-gray-50 to-amber-50 rounded-2xl shadow-xl p-8 md:p-12 text-center">
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Ready to Write Your Own <span className="text-[#f9c65d]">Success Story?</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              The clients featured in our success stories started right where you are. If you're ready to transform your credit, secure funding, or find debt relief, let's talk.
            </p>

            <div className="flex flex-row gap-4 justify-center items-center">

              <a
                href="/"
                className="inline-flex items-center gap-2 bg-amber-400 text-gray-900 font-semibold px-8 py-4 rounded-lg hover:bg-amber-500 transition-colors shadow-lg hover:shadow-xl"
              >
                View Our Services
                <ArrowRight className="w-5 h-5" />
              </a>

              <button
                onClick={openCalendly}
                className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold px-8 py-4 rounded-lg border-2 border-gray-300 hover:border-amber-400 hover:bg-amber-50 transition-all shadow-md hover:shadow-lg"
              >
                Book a Free Consultation
              </button>

            </div>

            <div className="mt-6">
              <a
                href="tel:661-310-3040"
                className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call (661) 310-3040
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* About This News Section */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center">
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              About MESA News
            </h3>
            
            <p className="text-gray-700 leading-relaxed">
              MESA News is your source for company updates, industry insights, and the stories behind our mission. We're committed to transparency, community, and keeping you informed about what matters in the world of credit and financial services.
            </p>

          </div>

        </div>
      </section>

      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={closeCalendly}
        utmCampaign="Mesa News Page - Final CTA"
      />

      <NewsletterModal
        isOpen={isNewsletterOpen}
        onClose={closeNewsletter}
      />

      <Footer />
    </div>
  );
};

export default MesaNews;
