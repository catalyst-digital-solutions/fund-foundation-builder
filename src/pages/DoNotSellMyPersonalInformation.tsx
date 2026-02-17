import React from 'react';
import {
  EyeOff,
  FileText,
  CircleAlert,
  CheckCircle2,
  XCircle,
  Shield,
  Chrome,
  Settings,
  Smartphone,
  MapPin,
  Mail,
  Phone,
  Globe
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEO';

const DoNotSellMyPersonalInformation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Do Not Sell My Personal Information | Mesa Group Consulting"
        description="California residents: learn about your CCPA rights and how Mesa Group Consulting handles the sale or sharing of personal information."
        canonicalUrl="/do-not-sell-my-personal-information"
      />
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-12 md:py-16 border-b-2 border-amber-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <EyeOff className="w-5 h-5 text-amber-600" />
              <span className="text-sm font-medium text-gray-700">Legal Document</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Do Not Sell My <span className="text-amber-600">Personal Information</span>
            </h1>

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
              This page provides California residents with information about their right to opt out of the "sale" of personal information under the California Consumer Privacy Act (CCPA).
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Table of <span className="text-amber-600">Contents</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { id: 'section-1', title: '1. We Do Not Sell Your Personal Information' },
              { id: 'section-2', title: '2. What Does "Sell" Mean Under CCPA?' },
              { id: 'section-3', title: '3. Third-Party Cookies and Tracking' },
              { id: 'section-4', title: '4. How to Opt Out of Third-Party Tracking' },
              { id: 'section-5', title: '5. Your CCPA Rights' },
              { id: 'section-6', title: '6. Contact Information' },
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

            {/* Section 1: We Do Not Sell Your Personal Information */}
            <div id="section-1" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-xl">1</span>
                </div>
                WE DO NOT SELL YOUR PERSONAL INFORMATION
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex gap-3">
                    <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Mesa Group Consulting does NOT sell your personal information.</p>
                      <p>We want to be absolutely clear: We do not sell, rent, lease, or exchange your personal information for monetary compensation to third-party marketers, data brokers, advertisers, or any other entities.</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">What We Don't Do:</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <ul className="space-y-2">
                    {[
                      'Sell your name, email, phone number, or address to third-party marketers',
                      'Sell your credit report information to data brokers',
                      'Sell your financial information to advertisers',
                      'Exchange your personal data for money',
                      'Provide your information to third parties for their direct marketing purposes',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">What We Do:</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <ul className="space-y-2">
                    {[
                      'Share information with trusted service partners only when necessary to provide services you requested (e.g., SmartCredit for credit monitoring, LendFlow for business funding)',
                      'Use third-party cookies and tracking technologies (Google Analytics, Facebook Pixel) for website analytics and advertising',
                      'Comply with legal and regulatory requirements',
                      'Protect your information with industry-standard security measures',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2: What Does "Sell" Mean Under CCPA? */}
            <div id="section-2" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-xl">2</span>
                </div>
                WHAT DOES "SELL" MEAN UNDER CCPA?
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Under the CCPA, <strong>"selling"</strong> personal information means disclosing or making available personal information to a third party in exchange for monetary or other valuable consideration.</p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Examples of "Selling" (Which We Do NOT Do):</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <ul className="space-y-2">
                    {[
                      'Providing customer lists to data brokers for payment',
                      'Exchanging customer data with advertisers for money',
                      'Selling email lists to third-party marketers',
                      'Providing personal information to affiliates in exchange for commissions (when the information is used for purposes beyond providing services)',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">What Is NOT Considered a "Sale":</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <ul className="space-y-2">
                    {[
                      'Sharing information with service providers who perform services on our behalf (credit bureaus, payment processors, email platforms)',
                      'Sharing information as required by law (subpoenas, court orders, regulatory requests)',
                      'Sharing information to protect against fraud or illegal activity',
                      'Transferring information as part of a business merger or acquisition',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3: Third-Party Cookies and Tracking */}
            <div id="section-3" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-xl">3</span>
                </div>
                THIRD-PARTY COOKIES AND TRACKING
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>While Mesa Group Consulting does not sell your personal information in the traditional sense, we use third-party cookies and tracking technologies that may be considered "sharing" under CCPA.</p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Third-Party Technologies We Use:</h3>
                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <ul className="space-y-2">
                    {[
                      { label: 'Google Analytics:', desc: 'Tracks website traffic, user behavior, and demographics' },
                      { label: 'Facebook Pixel:', desc: 'Tracks conversions, retargets website visitors on Facebook/Instagram' },
                      { label: 'TikTok Pixel:', desc: 'Tracks conversions, retargets website visitors on TikTok' },
                      { label: 'YouTube Ads:', desc: 'Tracks video engagement and ad performance' },
                      { label: 'X (Twitter) Pixel:', desc: 'Tracks conversions, retargets website visitors on X/Twitter' },
                      { label: 'LinkedIn Insight Tag:', desc: 'Tracks conversions, retargets website visitors on LinkedIn' },
                      { label: 'GoHighLevel (GHL):', desc: 'CRM and marketing automation platform' },
                      { label: 'Advertising Networks:', desc: 'Display ads and retargeting campaigns' },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>{item.label}</strong> {item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">How These Technologies Work:</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <ul className="space-y-2">
                    {[
                      'Third-party cookies collect information about your website activity (pages visited, clicks, time on site)',
                      'This information may be used to display personalized ads on other websites',
                      'Advertising networks may use this data to build interest-based profiles',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Is This a "Sale" Under CCPA?</h3>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex gap-3">
                    <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p>Under the CCPA's broad definition, using third-party cookies and tracking technologies may technically be considered "sharing" or "selling" personal information, even though we do not receive monetary compensation for this activity.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: How to Opt Out of Third-Party Tracking */}
            <div id="section-4" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-xl">4</span>
                </div>
                HOW TO OPT OUT OF THIRD-PARTY TRACKING
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>If you want to limit third-party tracking and interest-based advertising, you have several options:</p>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Chrome className="w-6 h-6 text-amber-600" />
                    4.1 Browser Cookie Settings
                  </h3>
                  <p className="mb-3">Most browsers allow you to block or delete cookies:</p>
                  <ul className="space-y-2">
                    {[
                      { label: 'Google Chrome:', desc: 'Settings > Privacy and Security > Cookies and other site data' },
                      { label: 'Safari:', desc: 'Preferences > Privacy > Manage Website Data' },
                      { label: 'Firefox:', desc: 'Settings > Privacy & Security > Cookies and Site Data' },
                      { label: 'Microsoft Edge:', desc: 'Settings > Privacy, search, and services > Cookies' },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>{item.label}</strong> {item.desc}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
                    <div className="flex gap-3">
                      <CircleAlert className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <p><strong>Note:</strong> Blocking all cookies may affect website functionality.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Settings className="w-6 h-6 text-amber-600" />
                    4.2 Opt Out of Interest-Based Advertising
                  </h3>
                  <p className="mb-3">Use these tools to opt out of interest-based advertising:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Google Ads Settings:</strong> <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://adssettings.google.com</a></span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Facebook Ad Preferences:</strong> <a href="https://www.facebook.com/ads/preferences" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://www.facebook.com/ads/preferences</a></span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Instagram Ad Settings:</strong> <a href="https://www.facebook.com/ads/preferences" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://www.facebook.com/ads/preferences</a> (managed through Facebook)</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>TikTok Ad Settings:</strong> <a href="https://www.tiktok.com/ads/settings" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://www.tiktok.com/ads/settings</a> (in TikTok app under Settings &gt; Ads)</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>YouTube Ad Settings:</strong> <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://adssettings.google.com</a> (managed through Google)</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>X (Twitter) Ad Preferences:</strong> <a href="https://twitter.com/settings/personalization" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://twitter.com/settings/personalization</a></span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>LinkedIn Ad Preferences:</strong> <a href="https://www.linkedin.com/psettings/advertising" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://www.linkedin.com/psettings/advertising</a></span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Network Advertising Initiative (NAI):</strong> <a href="https://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://optout.networkadvertising.org</a></span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Digital Advertising Alliance (DAA):</strong> <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://optout.aboutads.info</a></span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Your Online Choices (EU):</strong> <a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://www.youronlinechoices.com</a></span></li>
                  </ul>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Shield className="w-6 h-6 text-amber-600" />
                    4.3 Google Analytics Opt-Out
                  </h3>
                  <p className="mb-3">Install the Google Analytics Opt-Out Browser Add-On:</p>
                  <p><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://tools.google.com/dlpage/gaoptout</a></p>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Smartphone className="w-6 h-6 text-amber-600" />
                    4.4 Mobile Device Settings
                  </h3>
                  <p className="mb-3 font-semibold">iOS (iPhone/iPad):</p>
                  <ul className="space-y-2 mb-4">
                    {[
                      'Settings > Privacy > Tracking > Toggle off "Allow Apps to Request to Track"',
                      'Settings > Safari > Privacy & Security > Toggle on "Prevent Cross-Site Tracking"',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mb-3 font-semibold">Android:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Settings &gt; Google &gt; Ads &gt; Opt out of Ads Personalization</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Shield className="w-6 h-6 text-amber-600" />
                    4.5 Browser Privacy Tools
                  </h3>
                  <p className="mb-3">Use privacy-focused browser extensions:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Privacy Badger:</strong> <a href="https://privacybadger.org" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://privacybadger.org</a></span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Ghostery:</strong> <a href="https://www.ghostery.com" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://www.ghostery.com</a></span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>uBlock Origin:</strong> <a href="https://ublockorigin.com" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://ublockorigin.com</a></span></li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
                  <div className="flex gap-3">
                    <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p>For more details, see our <a href="/cookie-policy" className="text-amber-600 hover:text-amber-700 underline">Cookie Policy</a>.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5: Your CCPA Rights */}
            <div id="section-5" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-xl">5</span>
                </div>
                YOUR CCPA RIGHTS
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>As a California resident, you have the following rights under the CCPA:</p>

                {[
                  { num: '5.1', title: 'Right to Know', desc: 'Request information about the personal information we have collected, used, and disclosed about you in the past 12 months.' },
                  { num: '5.2', title: 'Right to Delete', desc: 'Request deletion of your personal information (subject to certain legal exceptions).' },
                  { num: '5.3', title: 'Right to Correct', desc: 'Request correction of inaccurate personal information.' },
                  { num: '5.4', title: 'Right to Opt-Out of Sale', desc: 'Opt out of the "sale" or "sharing" of your personal information (see Section 4 for opt-out instructions).' },
                  { num: '5.5', title: 'Right to Limit Use of Sensitive Personal Information', desc: 'Limit the use of your sensitive personal information (SSN, driver\'s license, precise geolocation, etc.) to only what is necessary to provide services.' },
                  { num: '5.6', title: 'Right to Non-Discrimination', desc: 'Receive equal service and pricing even if you exercise your CCPA rights.' },
                ].map((item) => (
                  <div key={item.num} className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                      {item.num} {item.title}
                    </h3>
                    <p>{item.desc}</p>
                  </div>
                ))}

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
                  <div className="flex gap-3">
                    <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p>For more details, see our <a href="/california-privacy-policy" className="text-amber-600 hover:text-amber-700 underline">California Privacy Policy</a>.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6: Contact Information */}
            <div id="section-6" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-xl">6</span>
                </div>
                CONTACT INFORMATION
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>If you have questions about the sale or sharing of personal information or wish to exercise your CCPA rights, contact us:</p>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">MESA & CO CONSULTING LLC DBA MESA GROUP CONSULTING</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Mailing Address</p>
                        <p>5001 California Ave, Suite 219</p>
                        <p>Bakersfield, CA 93309</p>
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
                        <a href="tel:+16613103040" className="text-amber-600 hover:text-amber-700 underline">661-310-3040</a>
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
                    <p className="font-semibold text-gray-900 mb-2">Business Hours:</p>
                    <p>Monday - Friday, 9:00 AM - 7:00 PM Pacific Time</p>
                    <p>Saturday, 10:00 AM - 2:00 PM Pacific Time</p>
                    <p>Sunday, Closed</p>
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

export default DoNotSellMyPersonalInformation;
