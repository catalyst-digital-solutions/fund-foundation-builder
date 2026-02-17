import React from 'react';
import {
  Cookie,
  FileText,
  CircleAlert,
  CheckCircle2,
  Shield,
  MapPin,
  Mail,
  Phone,
  Globe,
  Settings,
  Eye,
  BarChart3,
  Megaphone,
  Users
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEO';

const CookiePolicy = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Cookie Policy | Mesa Group Consulting"
        description="Learn how Mesa Group Consulting uses cookies and tracking technologies on our website to enhance your browsing experience and deliver personalized content."
        canonicalUrl="/cookie-policy"
      />
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-12 md:py-16 border-b-2 border-amber-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <Cookie className="w-5 h-5 text-amber-600" />
              <span className="text-sm font-medium text-gray-700">Legal Document</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Cookie <span className="text-[#f9c65d]">Policy</span>
            </h1>

            <p className="text-xl text-gray-700 font-medium">
              MESA & CO CONSULTING LLC DBA MESA GROUP CONSULTING
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Effective Date: February 1, 2026</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full" />
              <div className="flex items-center gap-2">
                <CircleAlert className="w-4 h-4" />
                <span>Last Updated: February 1, 2026</span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              This Cookie Policy explains how MESA & CO CONSULTING LLC, doing business as Mesa Group Consulting, uses cookies and similar tracking technologies on our website to enhance your browsing experience, analyze website performance, and deliver personalized content.
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Table of <span className="text-[#f9c65d]">Contents</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { id: 'section-1', title: '1. What Are Cookies?' },
              { id: 'section-2', title: '2. Types of Cookies We Use' },
              { id: 'section-3', title: '3. Why We Use Cookies' },
              { id: 'section-4', title: '4. Third-Party Cookies' },
              { id: 'section-5', title: '5. How to Manage Cookies' },
              { id: 'section-6', title: '6. Do Not Track Signals' },
              { id: 'section-7', title: '7. Changes to This Cookie Policy' },
              { id: 'section-8', title: '8. Contact Us' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left px-4 py-3 bg-white rounded-lg border border-gray-200 hover:border-amber-400 hover:bg-amber-50 transition-all duration-200 group"
              >
                <span className="text-gray-700 group-hover:text-amber-600 font-medium">
                  {item.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Body */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            {/* Section 1: What Are Cookies? */}
            <div id="section-1" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">1</span>
                </div>
                WHAT ARE COOKIES?
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Cookies are small text files that are placed on your device (computer, smartphone, tablet) when you visit a website. Cookies allow websites to recognize your device, remember your preferences, and improve your browsing experience.
                </p>
                <p>
                  This Cookie Policy explains how <strong>MESA & CO CONSULTING LLC</strong>, doing business as <strong>Mesa Group Consulting</strong> ("Mesa Group," "we," "us," or "our"), uses cookies and similar tracking technologies on our website (<a href="https://www.mesagroupconsulting.com" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">www.mesagroupconsulting.com</a>).
                </p>
              </div>
            </div>

            {/* Section 2: Types of Cookies We Use */}
            <div id="section-2" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">2</span>
                </div>
                TYPES OF COOKIES WE USE
              </h2>
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Mesa Group Consulting uses the following types of cookies on our website:
                </p>

                {/* 2.1 Essential Cookies */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Settings className="w-6 h-6 text-amber-600" />
                    2.1 Essential Cookies (Strictly Necessary)
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Purpose:</strong> These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, accessibility, and basic navigation.</p>
                    <p className="font-semibold">Examples:</p>
                    <ul className="space-y-2 ml-6">
                      {['Session cookies (temporary cookies that expire when you close your browser)', 'Authentication cookies (keep you logged in to your client portal)', 'Security cookies (prevent fraudulent activity and protect your data)', 'Load balancing cookies (distribute traffic across servers)'].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p><strong>Can You Disable Them?</strong> No. Essential cookies cannot be disabled as they are required for the website to work. Blocking these cookies may prevent you from using our services.</p>
                    <p><strong>Duration:</strong> Session-based (deleted when you close your browser) or persistent (stored for a set period).</p>
                  </div>
                </div>

                {/* 2.2 Analytics and Performance Cookies */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BarChart3 className="w-6 h-6 text-amber-600" />
                    2.2 Analytics and Performance Cookies
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Purpose:</strong> These cookies collect information about how visitors use our website, such as which pages are visited most often, how long visitors stay on pages, and any error messages. This helps us improve website performance and user experience.</p>
                    <p className="font-semibold">Examples:</p>
                    <ul className="space-y-2 ml-6">
                      {['Google Analytics cookies (tracks website traffic, user behavior, page views, bounce rates)', 'Heatmap tracking (analyzes where users click and scroll on pages)', 'Website performance monitoring (identifies slow-loading pages and technical issues)'].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p><strong>Can You Disable Them?</strong> Yes. These cookies do not directly identify you, but disabling them may limit our ability to improve the website.</p>
                    <p><strong>Duration:</strong> Varies. Some are session-based; others persist for up to 2 years.</p>
                    <p className="font-semibold mt-4">Third-Party Analytics Providers:</p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Google Analytics:</strong> Tracks website usage and user behavior. Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://policies.google.com/privacy</a></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>GoHighLevel (GHL):</strong> Tracks website visitors and lead behavior. Privacy Policy: <a href="https://www.gohighlevel.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://www.gohighlevel.com/privacy-policy</a></span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* 2.3 Marketing and Advertising Cookies */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Megaphone className="w-6 h-6 text-amber-600" />
                    2.3 Marketing and Advertising Cookies
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Purpose:</strong> These cookies are used to deliver personalized advertisements, track ad performance, and measure the effectiveness of marketing campaigns. They may also be used to build a profile of your interests and show you relevant ads on other websites.</p>
                    <p className="font-semibold">Examples:</p>
                    <ul className="space-y-2 ml-6">
                      {[
                        'Facebook Pixel (tracks conversions, retargets website visitors on Facebook and Instagram)',
                        'Instagram ads (measures engagement and conversions on Instagram)',
                        'TikTok Pixel (tracks conversions and retargets visitors on TikTok)',
                        'YouTube ads (measures video ad performance and engagement)',
                        'X (Twitter) Pixel (tracks conversions and engagement on X/Twitter)',
                        'LinkedIn Insight Tag (tracks conversions and retargets on LinkedIn)',
                        'Google Ads cookies (measures ad clicks, conversions, and campaign performance)',
                        'Retargeting cookies (show you ads for Mesa Group services on other websites after you visit our site)',
                        'Affiliate tracking cookies (track referrals from affiliate partners)',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p><strong>Can You Disable Them?</strong> Yes. You can opt out of interest-based advertising through your browser settings or third-party opt-out tools.</p>
                    <p><strong>Duration:</strong> Varies. Typically persist for 30-90 days, but some may last up to 2 years.</p>
                    <p className="font-semibold mt-4">Third-Party Advertising Providers:</p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Facebook/Meta:</strong> Advertising and retargeting. Privacy Policy: <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://www.facebook.com/privacy/policy</a></span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Instagram:</strong> Advertising and retargeting. Privacy Policy: <a href="https://privacycenter.instagram.com/policy" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://privacycenter.instagram.com/policy</a></span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>TikTok:</strong> Advertising and retargeting. Privacy Policy: <a href="https://www.tiktok.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://www.tiktok.com/legal/privacy-policy</a></span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>YouTube/Google:</strong> Advertising and retargeting. Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://policies.google.com/privacy</a></span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>X (Twitter):</strong> Advertising and retargeting. Privacy Policy: <a href="https://twitter.com/en/privacy" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://twitter.com/en/privacy</a></span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>LinkedIn:</strong> Advertising and retargeting. Privacy Policy: <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://www.linkedin.com/legal/privacy-policy</a></span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Google Ads:</strong> Advertising and retargeting. Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://policies.google.com/privacy</a></span></li>
                    </ul>
                  </div>
                </div>

                {/* 2.4 Functional Cookies */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Settings className="w-6 h-6 text-amber-600" />
                    2.4 Functional Cookies
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Purpose:</strong> These cookies allow the website to remember your preferences and choices (such as language, region, or previously entered information) to provide enhanced, personalized features.</p>
                    <p className="font-semibold">Examples:</p>
                    <ul className="space-y-2 ml-6">
                      {['Language preference cookies', 'Region or location cookies', 'Chat widget cookies (remember chat conversations)', 'Form auto-fill cookies (remember previously entered information)', 'Video player cookies (remember playback preferences)'].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p><strong>Can You Disable Them?</strong> Yes, but doing so may prevent certain features from working properly.</p>
                    <p><strong>Duration:</strong> Varies. Some are session-based; others persist for up to 1 year.</p>
                  </div>
                </div>

                {/* 2.5 Social Media Cookies */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Users className="w-6 h-6 text-amber-600" />
                    2.5 Social Media Cookies
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Purpose:</strong> These cookies are set by social media platforms (Facebook, Instagram, TikTok, YouTube, X/Twitter, LinkedIn) when you share content or interact with social media plugins on our website.</p>
                    <p className="font-semibold">Examples:</p>
                    <ul className="space-y-2 ml-6">
                      {['Facebook Like button cookies', 'Instagram Share button cookies', 'TikTok Share button cookies', 'YouTube embed cookies', 'X (Twitter) Share button cookies', 'LinkedIn Share button cookies', 'Social media login cookies (if you use social login to access your account)'].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p><strong>Can You Disable Them?</strong> Yes, through your social media account settings or browser settings.</p>
                    <p><strong>Duration:</strong> Varies by platform. Typically persist for 30-90 days.</p>
                    <p className="font-semibold mt-4">Third-Party Social Media Providers:</p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Facebook/Meta:</strong> Privacy Policy: <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://www.facebook.com/privacy/policy</a></span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Instagram:</strong> Privacy Policy: <a href="https://privacycenter.instagram.com/policy" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://privacycenter.instagram.com/policy</a></span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>TikTok:</strong> Privacy Policy: <a href="https://www.tiktok.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://www.tiktok.com/legal/privacy-policy</a></span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>YouTube/Google:</strong> Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://policies.google.com/privacy</a></span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>X (Twitter):</strong> Privacy Policy: <a href="https://twitter.com/en/privacy" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://twitter.com/en/privacy</a></span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>LinkedIn:</strong> Privacy Policy: <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://www.linkedin.com/legal/privacy-policy</a></span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Why We Use Cookies */}
            <div id="section-3" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">3</span>
                </div>
                WHY WE USE COOKIES
              </h2>
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">Mesa Group Consulting uses cookies for the following purposes:</p>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Settings className="w-6 h-6 text-amber-600" />
                    3.1 Website Functionality
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    {['Enable core website features (navigation, form submissions, client portal access)', 'Remember your login status and preferences', 'Secure your account and prevent unauthorized access'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BarChart3 className="w-6 h-6 text-amber-600" />
                    3.2 Analytics and Performance
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    {['Understand how visitors use our website', 'Identify popular pages and content', 'Measure website performance and loading times', 'Track conversion rates and lead generation', 'Identify technical issues and errors'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Megaphone className="w-6 h-6 text-amber-600" />
                    3.3 Marketing and Advertising
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    {['Deliver personalized ads based on your interests', 'Retarget website visitors with relevant ads on Facebook, Instagram, TikTok, YouTube, X (Twitter), LinkedIn, and Google', 'Measure the effectiveness of marketing campaigns', 'Track ad clicks, conversions, and ROI', 'Identify which marketing channels drive the most leads'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Eye className="w-6 h-6 text-amber-600" />
                    3.4 User Experience
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    {['Remember your preferences (language, region, previously entered information)', 'Provide personalized content and recommendations', 'Enable social sharing and social media interactions', 'Remember items in your cart or form fields'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 4: Third-Party Cookies */}
            <div id="section-4" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">4</span>
                </div>
                THIRD-PARTY COOKIES
              </h2>
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Mesa Group Consulting uses third-party services that set cookies on our website. These third parties have their own privacy policies and cookie policies.
                </p>

                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
                    <thead className="bg-amber-100">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-bold text-gray-900 border-b border-gray-300">Third Party</th>
                        <th className="px-4 py-3 text-left text-sm font-bold text-gray-900 border-b border-gray-300">Purpose</th>
                        <th className="px-4 py-3 text-left text-sm font-bold text-gray-900 border-b border-gray-300">Privacy Policy</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {[
                        { name: 'Google Analytics', purpose: 'Website analytics, user behavior tracking', url: 'https://policies.google.com/privacy' },
                        { name: 'Facebook Pixel', purpose: 'Advertising, retargeting, conversion tracking', url: 'https://www.facebook.com/privacy/policy' },
                        { name: 'Instagram', purpose: 'Advertising, retargeting, social engagement', url: 'https://privacycenter.instagram.com/policy' },
                        { name: 'TikTok Pixel', purpose: 'Advertising, retargeting, conversion tracking', url: 'https://www.tiktok.com/legal/privacy-policy' },
                        { name: 'YouTube', purpose: 'Video ads, engagement tracking', url: 'https://policies.google.com/privacy' },
                        { name: 'X (Twitter) Pixel', purpose: 'Advertising, retargeting, conversion tracking', url: 'https://twitter.com/en/privacy' },
                        { name: 'LinkedIn Insight Tag', purpose: 'Advertising, retargeting, B2B targeting', url: 'https://www.linkedin.com/legal/privacy-policy' },
                        { name: 'Google Ads', purpose: 'Advertising, retargeting, conversion tracking', url: 'https://policies.google.com/privacy' },
                        { name: 'GoHighLevel (GHL)', purpose: 'CRM, lead tracking, marketing automation', url: 'https://www.gohighlevel.com/privacy-policy' },
                        { name: 'Skool', purpose: 'Educational platform, community access', url: 'https://www.skool.com/privacy' },
                        { name: 'SmartCredit', purpose: 'Credit monitoring services (for enrolled clients)', url: 'https://www.smartcredit.com/help/terms-and-privacy/privacy-policy.htm' },
                        { name: 'SuperMoney', purpose: 'Financial product comparisons and referrals', url: 'https://www.supermoney.com/privacy-policy/' },
                        { name: 'PolicyGenius', purpose: 'Life insurance comparison platform', url: 'https://www.policygenius.com/about/privacy/' },
                        { name: 'Trust & Will', purpose: 'Estate planning document platform', url: 'https://trustandwill.com/privacy' },
                        { name: 'Novae', purpose: 'Business funding and debt relief services', url: 'https://www.novae.com/privacy-policy' },
                        { name: 'Impruvu', purpose: 'Business funding services', url: 'https://www.impruvu.com/privacy-policy' },
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm text-gray-900 font-medium">{row.name}</td>
                          <td className="px-4 py-3 text-sm text-gray-700">{row.purpose}</td>
                          <td className="px-4 py-3 text-sm">
                            <a href={row.url} target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline break-all">
                              {row.url}
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex gap-3">
                    <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Important Notice</p>
                      <p className="text-gray-700">Mesa Group Consulting is not responsible for the cookies set by third-party services. We recommend reviewing the privacy policies of these third parties to understand how they use cookies.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5: How to Manage Cookies */}
            <div id="section-5" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">5</span>
                </div>
                HOW TO MANAGE COOKIES
              </h2>
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">You have several options to manage or disable cookies:</p>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">5.1 Browser Settings</h3>
                  <div className="space-y-3 text-gray-700">
                    <p>Most web browsers allow you to control cookies through their settings. You can:</p>
                    <ul className="space-y-2 ml-6">
                      {['Block all cookies', 'Block third-party cookies only', 'Delete cookies after each browsing session', 'Delete specific cookies manually'].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="font-semibold mt-4">How to Manage Cookies by Browser:</p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Google Chrome:</strong> Settings &gt; Privacy and Security &gt; Cookies and other site data</span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data</span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Firefox:</strong> Settings &gt; Privacy &amp; Security &gt; Cookies and Site Data</span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Microsoft Edge:</strong> Settings &gt; Privacy, search, and services &gt; Cookies and site permissions</span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Mobile Browsers:</strong> Settings &gt; Safari/Chrome &gt; Privacy &gt; Block Cookies</span></li>
                    </ul>
                    <p className="italic mt-4"><strong>Note:</strong> Blocking all cookies may prevent certain features of our website from working properly.</p>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">5.2 Opt-Out of Interest-Based Advertising</h3>
                  <div className="space-y-3 text-gray-700">
                    <p>To opt out of interest-based advertising from third-party networks:</p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Google Ads Settings:</strong> <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://adssettings.google.com</a></span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Facebook Ad Preferences:</strong> <a href="https://www.facebook.com/ads/preferences" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://www.facebook.com/ads/preferences</a></span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Network Advertising Initiative (NAI):</strong> <a href="https://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://optout.networkadvertising.org</a></span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Digital Advertising Alliance (DAA):</strong> <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://optout.aboutads.info</a></span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Your Online Choices (EU):</strong> <a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://www.youronlinechoices.com</a></span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">5.3 Google Analytics Opt-Out</h3>
                  <div className="space-y-3 text-gray-700">
                    <p>To opt out of Google Analytics tracking:</p>
                    <p>Install the <strong>Google Analytics Opt-Out Browser Add-On:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://tools.google.com/dlpage/gaoptout</a></p>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">5.4 Mobile Device Settings</h3>
                  <div className="space-y-3 text-gray-700">
                    <p className="font-semibold">iOS (iPhone/iPad):</p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Settings &gt; Privacy &gt; Tracking &gt; Toggle off "Allow Apps to Request to Track"</span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Settings &gt; Safari &gt; Privacy &amp; Security &gt; Toggle on "Prevent Cross-Site Tracking"</span></li>
                    </ul>
                    <p className="font-semibold mt-4">Android:</p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Settings &gt; Google &gt; Ads &gt; Opt out of Ads Personalization</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">5.5 Browser Privacy Tools</h3>
                  <div className="space-y-3 text-gray-700">
                    <p>Consider using browser privacy tools and extensions:</p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Privacy Badger:</strong> <a href="https://privacybadger.org" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://privacybadger.org</a></span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Ghostery:</strong> <a href="https://www.ghostery.com" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://www.ghostery.com</a></span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>uBlock Origin:</strong> <a href="https://ublockorigin.com" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://ublockorigin.com</a></span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>AdBlock Plus:</strong> <a href="https://adblockplus.org" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://adblockplus.org</a></span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6: Do Not Track Signals */}
            <div id="section-6" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">6</span>
                </div>
                DO NOT TRACK SIGNALS
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Some browsers and devices allow you to enable a "Do Not Track" (DNT) signal, which requests that websites do not track your online activity.</p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex gap-3">
                    <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Our Response to DNT Signals</p>
                      <p className="text-gray-700">Currently, there is no industry-wide standard for responding to DNT signals. Mesa Group Consulting does not currently respond to DNT signals. However, you can manage cookies and tracking through the methods described in Section 5 above.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 7: Changes to This Cookie Policy */}
            <div id="section-7" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">7</span>
                </div>
                CHANGES TO THIS COOKIE POLICY
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">Mesa Group Consulting reserves the right to update this Cookie Policy at any time to reflect changes in our practices or applicable laws. When we make changes, we will:</p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <ul className="space-y-2">
                    {['Update the "Last Updated" date at the top of this policy', 'Post the revised policy on our website', 'Notify you via email (if applicable)'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-gray-700 leading-relaxed mt-4">Your continued use of our website after changes become effective constitutes acceptance of the revised Cookie Policy.</p>
              </div>
            </div>

            {/* Section 8: Contact Us */}
            <div id="section-8" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">8</span>
                </div>
                CONTACT US
              </h2>
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">If you have questions or concerns about this Cookie Policy or how we use cookies, please contact us:</p>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">MESA & CO CONSULTING LLC DBA MESA GROUP CONSULTING</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Mailing Address</p>
                        <p className="text-gray-700">5001 California Ave, Suite 219</p>
                        <p className="text-gray-700">Bakersfield, CA 93309</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Email</p>
                        <a href="mailto:contact@mesagroupconsulting.com" className="text-amber-600 hover:text-amber-700 underline">contact@mesagroupconsulting.com</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Phone</p>
                        <a href="tel:+16613103040" className="text-amber-600 hover:text-amber-700 underline">(661) 310-3040</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Globe className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Website</p>
                        <a href="https://www.mesagroupconsulting.com" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">www.mesagroupconsulting.com</a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-amber-200">
                    <p className="font-semibold text-gray-900 mb-2">Business Hours</p>
                    <div className="text-gray-700 space-y-1">
                      <p>Monday - Friday, 9:00 AM - 7:00 PM Pacific Time</p>
                      <p>Saturday, 10:00 AM - 2:00 PM Pacific Time</p>
                      <p>Sunday, Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center pt-12 border-t-2 border-gray-200">
              <p className="text-gray-600 font-medium">© 2026 Mesa Group Consulting. All Rights Reserved.</p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
