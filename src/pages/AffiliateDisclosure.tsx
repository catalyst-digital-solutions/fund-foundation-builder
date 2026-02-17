import React from 'react';
import {
  Handshake,
  FileText,
  CircleAlert,
  CheckCircle2,
  MapPin,
  Mail,
  Phone,
  Globe,
  Shield,
  AlertCircle
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEO';

const AffiliateDisclosure = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Affiliate Disclosure | Mesa Group Consulting"
        description="Mesa Group Consulting's affiliate disclosure explains our financial relationships with third-party partners and compensation we may receive from partner services."
        canonicalUrl="/affiliate-disclosure"
      />
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-12 md:py-16 border-b-2 border-amber-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <Handshake className="w-5 h-5 text-amber-600" />
              <span className="text-sm font-medium text-gray-700">Legal Document</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Affiliate <span className="text-[#f9c65d]">Disclosure</span>
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
              In compliance with the Federal Trade Commission's 16 CFR Part 255 (Guides Concerning the Use of Endorsements and Testimonials in Advertising), Mesa Group Consulting provides this Affiliate Disclosure to inform you of our financial relationships with third-party partners and the compensation we may receive when you use certain services or products.
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
              { id: 'what-is-affiliate-marketing', num: '1', title: 'What is Affiliate Marketing?' },
              { id: 'our-affiliate-relationships', num: '2', title: 'Our Affiliate Relationships' },
              { id: 'how-affiliate-compensation-works', num: '3', title: 'How Affiliate Compensation Works' },
              { id: 'no-additional-cost', num: '4', title: 'No Additional Cost to You' },
              { id: 'our-commitment-to-transparency', num: '5', title: 'Our Commitment to Transparency' },
              { id: 'your-trust-is-important', num: '6', title: 'Your Trust is Important to Us' },
              { id: 'specific-affiliate-partnerships', num: '7', title: 'Specific Affiliate Partnerships' },
              { id: 'ftc-compliance', num: '8', title: 'FTC Compliance' },
              { id: 'contact-information', num: '9', title: 'Contact Information' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all text-left group"
              >
                <span className="text-2xl font-bold text-[#f9c65d] group-hover:scale-110 transition-transform flex-shrink-0">{item.num}</span>
                <span className="text-gray-900 font-medium">{item.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Body */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section 1: What is Affiliate Marketing? */}
          <div id="what-is-affiliate-marketing" className="mb-12 scroll-mt-24">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-[#f9c65d]">1</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase">
                What is Affiliate Marketing?
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Affiliate marketing is a performance-based marketing arrangement in which a company (Mesa Group Consulting) receives compensation from third-party partners when clients enroll in services, purchase products, or complete specific actions (such as signing up for credit monitoring or applying for business funding).
              </p>
              <p className="text-gray-700 leading-relaxed">
                This is a common and legal practice used by many businesses to generate revenue while connecting clients with valuable services and products.
              </p>
            </div>
          </div>

          {/* Section 2: Our Affiliate Relationships */}
          <div id="our-affiliate-relationships" className="mb-12 scroll-mt-24">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-[#f9c65d]">2</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase">
                Our Affiliate Relationships
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">Mesa Group Consulting participates in affiliate marketing programs with the following types of partners:</p>

              {/* 2.1 */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">2.1 Credit Monitoring Services</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>SmartCredit:</strong> 3-bureau credit monitoring and reporting services</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>When you enroll in SmartCredit through Mesa Group Consulting, we may receive a commission or referral fee</span></li>
                  </ul>
                </div>
              </div>

              {/* 2.2 */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">2.2 Business Funding Partners</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Novae:</strong> Business funding and debt relief services (business and personal)</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Impruvu:</strong> Business funding and lending marketplace</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Other Lending Partners:</strong> Various lenders offering business loans, lines of credit, and financing products</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>When you apply for or secure business funding through our referrals, we may receive a commission or referral fee</span></li>
                  </ul>
                </div>
              </div>

              {/* 2.3 */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">2.3 Consumer Loan and Financial Product Comparison Platforms</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <p className="text-gray-700 mb-3"><strong>SuperMoney:</strong> Financial product comparison platform offering:</p>
                  <ul className="space-y-2 text-gray-700">
                    {['Personal loans ($1,000-$100,000)', 'Auto loan refinancing', 'Student loan refinancing', 'Debt consolidation loans', 'Credit card comparisons', 'When you use SuperMoney through our referral links or secure loans/products, we may receive a commission'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 2.4 */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">2.4 Credit Building Services</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Ava Finance:</strong> Credit building platform</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>CreditStrong:</strong> Credit building and installment loans</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Self:</strong> Credit builder loans</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>RentReporters, Rental Kharma, BoomPay:</strong> Rent reporting services</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Experian Boost:</strong> Free credit building tool</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>When you enroll in credit building services through our recommendations, we may receive a commission or referral fee</span></li>
                  </ul>
                </div>
              </div>

              {/* 2.5 */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">2.5 Life Insurance Comparison Services</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>PolicyGenius:</strong> Life insurance comparison and referral platform</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>When you request insurance quotes or purchase policies through PolicyGenius, we may receive a commission</span></li>
                  </ul>
                </div>
              </div>

              {/* 2.6 */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">2.6 Estate Planning Services</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Trust & Will:</strong> Estate planning document platform (Wills, Trusts, Healthcare Directives, Power of Attorney)</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>When you create estate planning documents through Trust & Will, we may receive a commission</span></li>
                  </ul>
                </div>
              </div>

              {/* 2.7 */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">2.7 DIY Credit Repair Platform</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>CreditVersio:</strong> White-label platform provider for GetCreditly.com</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>When you enroll in DIY credit repair services through GetCreditly, we may receive compensation</span></li>
                  </ul>
                </div>
              </div>

              {/* 2.8 */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">2.8 Debt Relief Services</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Novae and Partner Networks:</strong> Debt settlement and negotiation services for credit cards, personal loans, medical bills, and collection accounts</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>When you enroll in debt relief programs through our referrals, we may receive a commission</span></li>
                  </ul>
                </div>
              </div>

              {/* 2.9 */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">2.9 Other Financial Service Providers</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>We may have affiliate relationships with additional financial service providers, including credit card issuers, loan providers, mortgage lenders, insurance carriers, and financial education platforms</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>When you click on affiliate links or enroll in partner services, we may receive compensation</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: How Affiliate Compensation Works */}
          <div id="how-affiliate-compensation-works" className="mb-12 scroll-mt-24">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-[#f9c65d]">3</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase">
                How Affiliate Compensation Works
              </h2>
            </div>
            <div className="space-y-6">

              {/* 3.1 */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">3.1 Commission Structure</h3>
                <p className="text-gray-700 leading-relaxed mb-4">Mesa Group Consulting may receive compensation in the following ways:</p>
                <div className="bg-amber-50 border-l-4 border-amber-400 rounded-lg p-6 space-y-4">
                  {[
                    { label: 'Pay-Per-Enrollment:', desc: 'We receive a commission when you enroll in a partner service (e.g., SmartCredit credit monitoring)' },
                    { label: 'Pay-Per-Funding:', desc: 'We receive a commission when you successfully secure business funding through our lending partners' },
                    { label: 'Revenue Share:', desc: 'We receive a percentage of revenue generated from clients we refer to partner services' },
                    { label: 'Flat Referral Fees:', desc: 'We receive a one-time flat fee when you sign up for or use a partner service' },
                    { label: 'Recurring Commissions:', desc: 'We receive ongoing commissions for as long as you remain enrolled in certain subscription-based services' },
                  ].map((item, i) => (
                    <div key={i}>
                      <h4 className="font-bold text-gray-900 mb-1">{item.label}</h4>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3.2 */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">3.2 Amount of Compensation</h3>
                <p className="text-gray-700 leading-relaxed mb-4">The amount of compensation we receive varies by partner and service. Compensation may range from:</p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <ul className="space-y-2 text-gray-700">
                    {['Small referral fees ($10-$50)', 'Moderate commissions ($50-$500)', 'Large commissions ($500-$5,000+) for business funding referrals', 'Ongoing monthly commissions for subscription services'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-6 mt-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-900 font-bold mb-2">Important:</p>
                      <p className="text-gray-700">The exact amount of compensation is confidential and subject to non-disclosure agreements with our partners. However, we are committed to transparency about the existence of these affiliate relationships.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: No Additional Cost to You */}
          <div id="no-additional-cost" className="mb-12 scroll-mt-24">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-[#f9c65d]">4</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase">
                No Additional Cost to You
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed font-bold text-lg">You do not pay more because of our affiliate relationships.</p>
              <p className="text-gray-700 leading-relaxed">When you enroll in partner services or products through Mesa Group Consulting:</p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <ul className="space-y-2 text-gray-700">
                  {['Your cost is the same as if you had signed up directly with the partner', 'We do not mark up prices or charge additional fees due to affiliate relationships', 'The partner pays us from their revenue, not from your wallet'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 rounded-lg p-6 mt-6">
                <h4 className="font-bold text-gray-900 mb-3">Example:</h4>
                <p className="text-gray-700 mb-2">If a partner service has a monthly subscription fee:</p>
                <ul className="space-y-2 text-gray-700 ml-4">
                  {['You pay the same price whether you sign up through Mesa Group or directly with the partner', 'The partner pays Mesa Group a commission from their revenue', 'Your cost is the same'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-[#f9c65d] font-bold">•</span><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Section 5: Our Commitment to Transparency */}
          <div id="our-commitment-to-transparency" className="mb-12 scroll-mt-24">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-[#f9c65d]">5</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase">
                Our Commitment to Transparency
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">Mesa Group Consulting is committed to full transparency regarding our affiliate relationships. We want you to know:</p>

              {[
                {
                  title: '5.1 We Disclose Affiliate Relationships',
                  items: ['We clearly disclose when we have an affiliate relationship with a partner', 'This Affiliate Disclosure page is easily accessible on our website', 'We include affiliate disclosures in marketing materials, emails, and communications where appropriate'],
                },
                {
                  title: '5.2 We Recommend Based on Value',
                  items: ['We only recommend services and products that we believe provide genuine value to our clients', 'Our recommendations are based on quality, reputation, client needs, and suitability—not solely on commission rates', 'We have personally vetted our partners and believe in the services they provide'],
                },
                {
                  title: '5.3 We Are Honest About Limitations',
                  items: ['If a partner service has limitations, downsides, or drawbacks, we disclose them', 'We do not make exaggerated or false claims about partner services to earn commissions', 'We provide balanced, honest assessments of services and products'],
                },
                {
                  title: '5.4 We Respect Your Choices',
                  items: ['You are never obligated to use our partner services', 'You can choose to sign up directly with partners or explore other options', 'We respect your decision regardless of whether we receive a commission'],
                },
              ].map((sub) => (
                <div key={sub.title}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{sub.title}</h3>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <ul className="space-y-2 text-gray-700">
                      {sub.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 6: Your Trust is Important to Us */}
          <div id="your-trust-is-important" className="mb-12 scroll-mt-24">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-[#f9c65d]">6</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase">
                Your Trust is Important to Us
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">Mesa Group Consulting's reputation and success depend on your trust. We take our responsibility seriously to:</p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <ul className="space-y-2 text-gray-700">
                  {['Provide honest, accurate information about services and products', 'Disclose affiliate relationships clearly and prominently', 'Recommend services that genuinely benefit our clients', 'Prioritize client interests over commission earnings', 'Maintain ethical business practices and comply with FTC guidelines'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-amber-50 border-l-4 border-amber-400 rounded-lg p-6 mt-6">
                <h4 className="font-bold text-gray-900 mb-3">Our Philosophy:</h4>
                <p className="text-gray-700">We believe that by helping you succeed (improving your credit, securing business funding, building financial health), we earn your trust, loyalty, and referrals—which are far more valuable to us than short-term affiliate commissions.</p>
              </div>
            </div>
          </div>

          {/* Section 7: Specific Affiliate Partnerships */}
          <div id="specific-affiliate-partnerships" className="mb-12 scroll-mt-24">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-[#f9c65d]">7</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase">
                Specific Affiliate Partnerships
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">Below are specific details about our key affiliate partnerships:</p>

              {[
                {
                  title: '7.1 SmartCredit (Credit Monitoring)',
                  fields: [
                    { label: 'Service:', desc: '3-bureau credit monitoring, credit reports, credit scores, identity theft protection' },
                    { label: 'Cost to You:', desc: 'Subscription-based pricing (subject to SmartCredit\'s pricing)' },
                    { label: 'Compensation:', desc: 'Mesa Group receives a commission when you enroll in SmartCredit' },
                    { label: 'Why We Recommend It:', desc: 'SmartCredit provides comprehensive 3-bureau monitoring, which is essential for tracking credit repair progress and detecting identity theft' },
                  ],
                },
                {
                  title: '7.2 Novae (Business Funding & Debt Relief)',
                  fields: [
                    { label: 'Service:', desc: 'Business funding marketplace and debt relief services (business and personal)' },
                    { label: 'Cost to You:', desc: 'Free to apply; costs vary by lender and loan terms' },
                    { label: 'Compensation:', desc: 'Mesa Group receives a commission when you secure funding or enroll in debt relief services through Novae' },
                    { label: 'Why We Recommend It:', desc: 'Novae provides access to multiple funding options and debt relief solutions tailored to business and personal needs' },
                  ],
                },
                {
                  title: '7.3 Impruvu (Business Funding)',
                  fields: [
                    { label: 'Service:', desc: 'Business funding and lending marketplace' },
                    { label: 'Cost to You:', desc: 'Free to apply; costs vary by lender and loan terms' },
                    { label: 'Compensation:', desc: 'Mesa Group receives a commission when you secure funding through Impruvu' },
                    { label: 'Why We Recommend It:', desc: 'Impruvu connects businesses with diverse funding sources and simplifies the application process' },
                  ],
                },
                {
                  title: '7.4 CreditVersio (DIY Credit Repair Platform)',
                  fields: [
                    { label: 'Service:', desc: 'White-label DIY credit repair platform for GetCreditly.com' },
                    { label: 'Cost to You:', desc: 'Varies by subscription plan' },
                    { label: 'Compensation:', desc: 'Mesa Group receives compensation for subscriptions through our white-label partnership' },
                    { label: 'Why We Recommend It:', desc: 'CreditVersio provides comprehensive DIY tools, dispute letter templates, and educational resources for self-directed credit repair' },
                  ],
                },
                {
                  title: '7.5 SuperMoney (Financial Product Comparisons)',
                  fields: [
                    { label: 'Service:', desc: 'Financial product comparison platform (loans, credit cards, banking products)' },
                    { label: 'Cost to You:', desc: 'Free to use; costs vary by product you choose' },
                    { label: 'Compensation:', desc: 'Mesa Group may receive a commission when you use SuperMoney and select financial products' },
                    { label: 'Why We Recommend It:', desc: 'SuperMoney provides transparent comparisons of financial products, helping you make informed decisions' },
                  ],
                },
              ].map((sub) => (
                <div key={sub.title}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{sub.title}</h3>
                  <div className="bg-amber-50 border-l-4 border-amber-400 rounded-lg p-6 space-y-3">
                    {sub.fields.map((field, i) => (
                      <div key={i}>
                        <p className="text-gray-900 font-bold mb-1">{field.label}</p>
                        <p className="text-gray-700">{field.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 8: FTC Compliance */}
          <div id="ftc-compliance" className="mb-12 scroll-mt-24">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-[#f9c65d]">8</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase">
                FTC Compliance
              </h2>
            </div>
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Mesa Group Consulting complies with the Federal Trade Commission's (FTC) guidelines on endorsements, testimonials, and affiliate marketing (16 CFR Part 255).</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">8.1 Material Connection Disclosure</h3>
                <p className="text-gray-700 leading-relaxed">We disclose the "material connection" between Mesa Group Consulting and our affiliate partners. A material connection exists when we receive compensation for recommending or endorsing products or services.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">8.2 Honest and Truthful Representations</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <ul className="space-y-2 text-gray-700">
                    {['We do not make false, misleading, or exaggerated claims about affiliate products or services', 'We provide honest assessments based on research, client feedback, and our own experience', 'We do not guarantee results or outcomes for affiliate services unless explicitly stated by the partner'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">8.3 Endorsements Reflect Genuine Opinions</h3>
                <p className="text-gray-700 leading-relaxed mb-3">When we endorse or recommend affiliate services, our endorsements reflect:</p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <ul className="space-y-2 text-gray-700">
                    {['Our genuine beliefs about the quality and value of the services', 'Research and due diligence we have conducted', 'Client feedback and results where applicable'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">8.4 Clear and Conspicuous Disclosures</h3>
                <p className="text-gray-700 leading-relaxed mb-3">We ensure that affiliate disclosures are:</p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <ul className="space-y-2 text-gray-700">
                    {['Clear and easy to understand', 'Conspicuous and not hidden in fine print', 'Placed close to any affiliate links, recommendations, or endorsements'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section 9: Contact Information */}
          <div id="contact-information" className="mb-12 scroll-mt-24">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-[#f9c65d]">9</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase">
                Contact Information
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">If you have questions about our affiliate relationships, compensation, or this Affiliate Disclosure, please contact us:</p>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-8 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">MESA & CO CONSULTING LLC DBA MESA GROUP CONSULTING</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900">Mailing Address:</p>
                      <p className="text-gray-700">5001 California Ave, Suite 219</p>
                      <p className="text-gray-700">Bakersfield, CA 93309</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900">Email:</p>
                      <a href="mailto:contact@mesagroupconsulting.com" className="text-amber-600 hover:text-amber-700 underline">contact@mesagroupconsulting.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900">Phone:</p>
                      <a href="tel:661-310-3040" className="text-amber-600 hover:text-amber-700 underline">661-310-3040</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900">Website:</p>
                      <a href="https://www.mesagroupconsulting.com" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">www.mesagroupconsulting.com</a>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-amber-200">
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900">Business Hours:</p>
                      <p className="text-gray-700">Monday - Friday, 9:00 AM - 7:00 PM Pacific Time</p>
                      <p className="text-gray-700">Saturday, 10:00 AM - 2:00 PM Pacific Time</p>
                      <p className="text-gray-700">Sunday, Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Changes to This Affiliate Disclosure */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Changes to This <span className="text-[#f9c65d]">Affiliate Disclosure</span>
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">Mesa Group Consulting reserves the right to update this Affiliate Disclosure at any time to reflect changes in our affiliate relationships, compensation structures, or FTC guidelines. When we make changes, we will:</p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <ul className="space-y-2 text-gray-700">
                  {['Update the "Last Updated" date at the top of this page', 'Post the revised disclosure on our website', 'Notify you via email (if applicable)'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed">Your continued use of our website or services after changes become effective constitutes acceptance of the revised Affiliate Disclosure.</p>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              <span className="text-[#f9c65d]">Summary</span>
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">Mesa Group Consulting participates in affiliate marketing and may receive compensation when you use certain partner services or products. This compensation does not increase your cost, and we are committed to recommending only services we believe provide genuine value.</p>
              <p className="text-gray-700 leading-relaxed">We disclose these relationships in compliance with FTC guidelines to maintain transparency and earn your trust.</p>
              <p className="text-gray-700 leading-relaxed">For more information on how we use and protect your information, please review:</p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><FileText className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" /><a href="/privacy-policy" className="text-amber-600 hover:text-amber-700 underline">Privacy Policy</a></li>
                  <li className="flex items-start gap-2"><FileText className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" /><a href="/terms-and-conditions" className="text-amber-600 hover:text-amber-700 underline">Terms & Conditions</a></li>
                  <li className="flex items-start gap-2"><FileText className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" /><a href="/disclaimer" className="text-amber-600 hover:text-amber-700 underline">Disclaimer</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-12 border-t-2 border-gray-200">
            <p className="text-gray-600 font-medium">© 2026 Mesa Group Consulting. All Rights Reserved.</p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AffiliateDisclosure;
