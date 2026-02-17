import React from 'react';
import { Shield, FileText, CircleAlert, CheckCircle2, MapPin, Mail, Phone, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEO';

const PrivacyPolicy = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Privacy Policy | Mesa Group Consulting"
        description="Learn how Mesa Group Consulting collects, uses, shares, and protects your personal information. Review our privacy practices and your privacy rights."
        canonicalUrl="/privacy-policy"
      />
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-12 md:py-16 border-b-2 border-amber-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <Shield className="w-5 h-5 text-amber-600" />
              <span className="text-sm font-medium text-gray-700">Legal Document</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Privacy <span className="text-amber-600">Policy</span>
            </h1>

            <p className="text-lg font-semibold text-gray-800">MESA & CO CONSULTING LLC DBA MESA GROUP CONSULTING</p>

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
              { id: 'section-1', title: '1. Introduction' },
              { id: 'section-2', title: '2. Information We Collect' },
              { id: 'section-3', title: '3. How We Use Your Information' },
              { id: 'section-4', title: '4. How We Share Your Information' },
              { id: 'section-5', title: '5. Cookies and Tracking Technologies' },
              { id: 'section-6', title: '6. Email and SMS Marketing' },
              { id: 'section-7', title: '7. Data Security' },
              { id: 'section-8', title: '8. Data Retention' },
              { id: 'section-9', title: '9. Your Privacy Rights' },
              { id: 'section-10', title: '10. Children\'s Privacy' },
              { id: 'section-11', title: '11. Third-Party Links' },
              { id: 'section-12', title: '12. International Data Transfers' },
              { id: 'section-13', title: '13. Changes to This Privacy Policy' },
              { id: 'section-14', title: '14. Contact Us' },
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

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            {/* Section 1: Introduction */}
            <div id="section-1" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-xl">1</span>
                </div>
                INTRODUCTION
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Welcome to Mesa Group Consulting. We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how MESA & CO CONSULTING LLC, doing business as Mesa Group Consulting ("Mesa Group," "we," "us," or "our"), collects, uses, shares, and protects your information when you:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Visit our website at <a href="https://www.mesagroupconsulting.com" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">www.mesagroupconsulting.com</a></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Use our services (credit repair, business funding, credit monitoring, DIY training, financial consulting)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Communicate with us via email, phone, SMS, or other channels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Create an account or client portal access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Submit forms or inquiries through our website</span>
                  </li>
                </ul>
                <p>
                  By using our website or services, you consent to the data practices described in this Privacy Policy. If you do not agree with this Privacy Policy, please do not use our website or services.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
                  <div className="flex gap-3">
                    <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Important Legal Compliance:</p>
                      <p className="mb-2">Mesa Group Consulting complies with:</p>
                      <ul className="space-y-1 ml-4">
                        <li>• Gramm-Leach-Bliley Act (GLBA)</li>
                        <li>• Fair Credit Reporting Act (FCRA)</li>
                        <li>• Credit Repair Organizations Act (CROA)</li>
                        <li>• California Consumer Privacy Act (CCPA)</li>
                        <li>• Telephone Consumer Protection Act (TCPA)</li>
                        <li>• CAN-SPAM Act</li>
                        <li>• General Data Protection Regulation (GDPR) where applicable</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Information We Collect */}
            <div id="section-2" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-xl">2</span>
                </div>
                INFORMATION WE COLLECT
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">2.1 Information You Provide Directly</h3>
                  <p className="mb-4">We collect information that you voluntarily provide to us, including:</p>

                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Personal Identification Information:</p>
                      <ul className="space-y-1 ml-4">
                        <li>• Full legal name</li>
                        <li>• Date of birth</li>
                        <li>• Social Security Number (for credit services only)</li>
                        <li>• Government-issued ID (driver's license, passport)</li>
                        <li>• Email address</li>
                        <li>• Phone number (mobile and landline)</li>
                        <li>• Mailing address and physical address</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Financial Information:</p>
                      <ul className="space-y-1 ml-4">
                        <li>• Income and employment details (for debt-to-income ratio calculations and action plans)</li>
                        <li>• Bank account information (for payment processing)</li>
                        <li>• Credit card information (processed securely through third-party payment processors)</li>
                        <li>• Business financial information (for business funding services)</li>
                        <li>• Credit report information (obtained with your authorization)</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Account Information:</p>
                      <ul className="space-y-1 ml-4">
                        <li>• Username and password for client portal access</li>
                        <li>• Security questions and answers</li>
                        <li>• Communication preferences</li>
                        <li>• Service preferences and selections</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Communications:</p>
                      <ul className="space-y-1 ml-4">
                        <li>• Messages sent through our website contact forms</li>
                        <li>• Email correspondence</li>
                        <li>• Phone call recordings (with notice and consent)</li>
                        <li>• SMS text messages</li>
                        <li>• Support tickets and inquiries</li>
                        <li>• Client portal messages</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Service-Specific Information:</p>
                      <ul className="space-y-1 ml-4">
                        <li>• Credit disputes and dispute documentation</li>
                        <li>• Creditor communications and correspondence</li>
                        <li>• Business funding applications and supporting documents</li>
                        <li>• Financial goals and objectives</li>
                        <li>• DIY training progress and materials accessed</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">2.2 Information We Collect Automatically</h3>
                  <p className="mb-4">When you visit our website or use our services, we automatically collect certain information:</p>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <p className="font-semibold text-gray-900 mb-3">Device and Usage Information:</p>
                    <ul className="space-y-2">
                      {['IP address', 'Browser type and version', 'Operating system', 'Device type (desktop, mobile, tablet)', 'Unique device identifiers', 'Pages visited and time spent on pages', 'Referring website/source', 'Click-through data', 'Date and time stamps'].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="font-semibold text-gray-900 mt-6 mb-3">Cookies and Tracking Technologies:</p>
                    <ul className="space-y-2">
                      {['Session cookies and persistent cookies', 'Web beacons and pixel tags', 'Google Analytics data', 'Facebook Pixel data', 'Retargeting and advertising cookies', 'GoHighLevel (GHL) tracking'].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="mt-4">For more details, see our <a href="/cookie-policy" className="text-amber-600 hover:text-amber-700 underline">Cookie Policy</a> and Section 5 below.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">2.3 Information from Third Parties</h3>
                  <p className="mb-4">We may receive information about you from:</p>

                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Credit Bureaus:</p>
                      <ul className="space-y-1 ml-4">
                        <li>• Experian, Equifax, and TransUnion credit reports (with your written authorization)</li>
                        <li>• Credit monitoring updates and alerts</li>
                        <li>• Credit score information</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Service Partners:</p>
                      <ul className="space-y-1 ml-4">
                        <li>• SmartCredit (credit monitoring services)</li>
                        <li>• Novae (business funding and debt relief for business and personal)</li>
                        <li>• Impruvu (business funding)</li>
                        <li>• CreditVersio (DIY platform for GetCreditly.com - white-label partner)</li>
                        <li>• SuperMoney (financial product comparisons)</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Business Information Providers:</p>
                      <ul className="space-y-1 ml-4">
                        <li>• Business credit bureaus (Dun & Bradstreet, Experian Business)</li>
                        <li>• Public business records and filings</li>
                        <li>• Business verification services</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Marketing and Analytics Providers:</p>
                      <ul className="space-y-1 ml-4">
                        <li>• Social media platforms (Facebook, Instagram, TikTok, YouTube, X/Twitter, LinkedIn)</li>
                        <li>• Email marketing platforms</li>
                        <li>• Advertising networks</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: How We Use Your Information */}
            <div id="section-3" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-xl">3</span>
                </div>
                HOW WE USE YOUR INFORMATION
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>Mesa Group Consulting uses your information for the following purposes:</p>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">3.1 Providing Services</h3>
                  <ul className="space-y-2">
                    {[
                      'Processing your enrollment and service agreements',
                      'Conducting credit report analysis and identifying disputed items',
                      'Preparing and submitting dispute letters to credit bureaus and creditors',
                      'Facilitating business funding applications and connecting you with lending partners',
                      'Providing credit monitoring services through SmartCredit',
                      'Delivering DIY credit repair training materials and resources',
                      'Offering financial consulting and personalized action plans',
                      'Calculating debt-to-income ratios and creating financial strategies',
                      'Managing your client portal account and access',
                      'Processing payments and billing',
                      'Providing customer support and responding to inquiries',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">3.2 Communication and Marketing</h3>
                  <ul className="space-y-2 ml-6">
                    {[
                      'Sending service-related notifications and updates',
                      'Providing progress reports and credit monitoring alerts',
                      'Sending promotional emails about our services, features, and offers',
                      'Sending SMS marketing messages (with your explicit consent)',
                      'Conducting customer surveys and feedback requests',
                      'Sending newsletters and educational content',
                      'Following up on abandoned forms or incomplete applications',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">3.3 Website Optimization and Analytics</h3>
                  <ul className="space-y-2 ml-6">
                    {[
                      'Analyzing website traffic and user behavior',
                      'Understanding how visitors interact with our website',
                      'Improving website functionality and user experience',
                      'Testing new features and content',
                      'Identifying technical issues and bugs',
                      'Optimizing marketing campaigns and advertising performance',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">3.4 Legal and Compliance Purposes</h3>
                  <ul className="space-y-2 ml-6">
                    {[
                      'Complying with CROA, FCRA, GLBA, CCPA, TCPA, and other applicable laws',
                      'Responding to legal requests, court orders, and subpoenas',
                      'Protecting against fraud, unauthorized access, and illegal activity',
                      'Enforcing our Terms & Conditions and service agreements',
                      'Defending legal claims and litigation',
                      'Conducting internal audits and compliance reviews',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">3.5 Business Operations</h3>
                  <ul className="space-y-2 ml-6">
                    {[
                      'Processing transactions and payments',
                      'Managing client relationships and accounts',
                      'Training staff and quality assurance',
                      'Conducting research and development',
                      'Evaluating and improving our services',
                      'Business planning and strategic decision-making',
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

            {/* Section 4: How We Share Your Information */}
            <div id="section-4" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-xl">4</span>
                </div>
                HOW WE SHARE YOUR INFORMATION
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>Mesa Group Consulting does not sell your personal information to third parties. However, we may share your information in the following circumstances:</p>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">4.1 Service Partners (As Needed)</h3>
                  <p className="mb-4">We share information with trusted service partners only when necessary to provide services you have requested:</p>

                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Credit Repair Services:</p>
                      <ul className="space-y-1 ml-4">
                        <li>• In-house fulfillment (not outsourced to third parties)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Credit Monitoring:</p>
                      <ul className="space-y-1 ml-4">
                        <li>• SmartCredit: Client information for 3-bureau credit monitoring services (name, DOB, SSN, address)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Business Funding:</p>
                      <ul className="space-y-1 ml-4">
                        <li>• Novae: Business and personal information for funding applications and debt relief services (business details, financial info, owner information)</li>
                        <li>• Impruvu: Business information for business funding applications</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">DIY Credit Repair Platform:</p>
                      <ul className="space-y-1 ml-4">
                        <li>• CreditVersio: Platform provider for GetCreditly.com (white-label partner). Client information for DIY credit repair tools and educational content.</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Financial Product Comparisons:</p>
                      <ul className="space-y-1 ml-4">
                        <li>• SuperMoney: Basic information for product recommendations and comparisons</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                    <div className="flex gap-3">
                      <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p><strong>Important:</strong> Not every client's information is shared with all partners. Sharing only occurs when you enroll in specific services that require partner fulfillment.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">4.2 Credit Bureaus and Creditors</h3>
                  <p className="mb-3">With your written authorization, we share information with:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Experian, Equifax, and TransUnion (for credit report disputes and investigations)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Creditors, collection agencies, and data furnishers (for dispute resolution)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Business credit bureaus (for business credit services)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">4.3 Payment Processors</h3>
                  <p>We use secure third-party payment processors to handle credit card, debit card, and ACH transactions. Your payment information is transmitted directly to these processors and is not stored on our servers.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">4.4 Technology and Service Providers</h3>
                  <p className="mb-3">We share information with technology providers that help us operate our business:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>GoHighLevel (GHL):</strong> CRM, email marketing, SMS marketing, automation, client portal hosting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Skool:</strong> Educational content platform, community access, course delivery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Google Analytics:</strong> Website analytics and performance tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Facebook/Meta:</strong> Advertising, retargeting, and social media marketing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Web hosting providers:</strong> Secure website hosting and storage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Cloud storage providers:</strong> Secure document storage and backup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Email service providers:</strong> Transactional and marketing email delivery</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">4.5 Legal and Regulatory Requirements</h3>
                  <p className="mb-3">We may disclose your information when required by law or to:</p>
                  <ul className="space-y-2 ml-6">
                    {[
                      'Comply with legal processes (subpoenas, court orders, regulatory requests)',
                      'Enforce our Terms & Conditions and service agreements',
                      'Protect the rights, property, or safety of Mesa Group, our clients, or others',
                      'Prevent fraud, security threats, or illegal activity',
                      'Cooperate with law enforcement or government agencies',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">4.6 Business Transfers</h3>
                  <p>In the event of a merger, acquisition, reorganization, bankruptcy, or sale of assets, your information may be transferred to the acquiring entity or successor organization. You will be notified of any such change via email and/or prominent notice on our website.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">4.7 With Your Consent</h3>
                  <p>We may share your information with third parties when you provide explicit consent or direct us to do so.</p>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex gap-3">
                    <CircleAlert className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <p><strong>Important Note:</strong> We do not sell, rent, or lease your personal information to third-party marketers, data brokers, or advertisers.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5: Cookies and Tracking Technologies */}
            <div id="section-5" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-xl">5</span>
                </div>
                COOKIES AND TRACKING TECHNOLOGIES
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>Mesa Group Consulting uses cookies, web beacons, pixels, and similar tracking technologies to enhance your experience and analyze website performance.</p>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">5.1 Types of Cookies We Use</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Essential Cookies:</p>
                      <p>Required for basic website functionality, security, and session management. These cannot be disabled.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Analytics Cookies:</p>
                      <p>Google Analytics and other analytics tools track website traffic, user behavior, page views, and performance metrics.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Marketing Cookies:</p>
                      <p>Facebook Pixel, Instagram ads, TikTok Pixel, YouTube ads, X (Twitter) ads, LinkedIn Insight Tag, Google Ads cookies, and other advertising/retargeting cookies track conversions, ad performance, and enable personalized advertising.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Functional Cookies:</p>
                      <p>Store preferences, language settings, and personalization options to improve your experience.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Third-Party Cookies:</p>
                      <p>Cookies set by third-party services like GoHighLevel, Google, Facebook, and other platforms we use.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">5.2 Managing Cookies</h3>
                  <p className="mb-3">You can control cookies through your browser settings:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Block All Cookies:</strong> May prevent website functionality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Delete Cookies:</strong> Removes existing cookies from your device</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Third-Party Cookies:</strong> Can be blocked separately in most browsers</span>
                    </li>
                  </ul>
                  <p className="mt-4">To opt out of interest-based advertising:</p>
                  <ul className="space-y-2 ml-6 mt-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Google Ads Settings: <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://adssettings.google.com</a></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Facebook Ad Preferences: <a href="https://www.facebook.com/ads/preferences" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://www.facebook.com/ads/preferences</a></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Network Advertising Initiative: <a href="https://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://optout.networkadvertising.org</a></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Digital Advertising Alliance: <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://optout.aboutads.info</a></span>
                    </li>
                  </ul>
                  <p className="mt-4">For more details, see our dedicated <a href="/cookie-policy" className="text-amber-600 hover:text-amber-700 underline">Cookie Policy</a>.</p>
                </div>
              </div>
            </div>

            {/* Section 6: Email and SMS Marketing */}
            <div id="section-6" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-xl">6</span>
                </div>
                EMAIL AND SMS MARKETING
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">6.1 Email Marketing</h3>
                  <p className="mb-3">We use GoHighLevel (GHL) and other email platforms to send:</p>
                  <ul className="space-y-2">
                    {['Promotional emails about our services and offerings', 'Educational content and newsletters', 'Service updates and announcements', 'Special offers and discounts'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4"><strong>Opt-Out:</strong> Every marketing email includes an unsubscribe link. You can also email <a href="mailto:contact@mesagroupconsulting.com" className="text-amber-600 hover:text-amber-700 underline">contact@mesagroupconsulting.com</a> to opt out.</p>
                  <p className="mt-4"><strong>CAN-SPAM Compliance:</strong> We comply with the CAN-SPAM Act by:</p>
                  <ul className="space-y-2 mt-2">
                    {['Including accurate sender information', 'Providing clear subject lines', 'Honoring opt-out requests within 10 business days', 'Including our physical address in emails'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">6.2 SMS Marketing</h3>
                  <p className="mb-3">We send SMS marketing messages only with your explicit opt-in consent.</p>

                  <p className="font-semibold text-gray-900 mb-2">What We Send:</p>
                  <ul className="space-y-2 ml-6 mb-4">
                    {['Service updates and appointment reminders', 'Promotional offers and marketing messages', 'Credit monitoring alerts (if enrolled)', 'Important account notifications'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <div className="flex gap-3">
                      <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900 mb-2">TCPA Compliance:</p>
                        <p className="mb-2">We comply with the Telephone Consumer Protection Act (TCPA) by:</p>
                        <ul className="space-y-1 ml-4">
                          <li>• Obtaining express written consent before sending marketing texts</li>
                          <li>• Providing clear opt-in disclosures</li>
                          <li>• Honoring opt-out requests immediately</li>
                          <li>• Maintaining do-not-contact lists</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4"><strong>Opt-Out:</strong> Reply "STOP" to any marketing text to unsubscribe immediately. You may continue to receive transactional messages related to your active services.</p>
                  <p className="mt-2"><strong>Message Frequency:</strong> Varies by service and enrollment. Marketing messages may be sent up to 4 times per month.</p>
                  <p className="mt-2"><strong>Standard Rates Apply:</strong> Message and data rates may apply based on your mobile carrier plan.</p>
                  <p className="mt-4">For more details, see our dedicated <a href="/tcpa-consent-policy" className="text-amber-600 hover:text-amber-700 underline">TCPA Consent Policy</a>.</p>
                </div>
              </div>
            </div>

            {/* Section 7: Data Security */}
            <div id="section-7" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-xl">7</span>
                </div>
                DATA SECURITY
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>Mesa Group Consulting takes data security seriously and implements industry-standard measures to protect your information:</p>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">7.1 Security Measures</h3>
                  <ul className="space-y-2">
                    {[
                      { label: 'Encryption:', desc: 'SSL/TLS encryption for data transmission' },
                      { label: 'Secure Storage:', desc: 'Encrypted databases and secure cloud storage' },
                      { label: 'Access Controls:', desc: 'Role-based access restrictions and multi-factor authentication' },
                      { label: 'Firewalls:', desc: 'Network security and intrusion detection systems' },
                      { label: 'Regular Security Audits:', desc: 'Vulnerability assessments and penetration testing' },
                      { label: 'Employee Training:', desc: 'Ongoing security awareness and privacy training' },
                      { label: 'Secure Payment Processing:', desc: 'PCI-DSS compliant payment processors' },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>{item.label}</strong> {item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">7.2 Limitations</h3>
                  <p>While we implement robust security measures, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security of your information. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">7.3 Data Breach Notification</h3>
                  <p>In the event of a data breach that compromises your personal information, we will notify you in accordance with applicable laws, including California's data breach notification requirements (Cal. Civ. Code § 1798.82).</p>
                </div>
              </div>
            </div>

            {/* Section 8: Data Retention */}
            <div id="section-8" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-xl">8</span>
                </div>
                DATA RETENTION
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>Mesa Group Consulting retains your information for as long as necessary to:</p>
                <ul className="space-y-2 ml-6 mb-6">
                  {['Provide services and fulfill our contractual obligations', 'Comply with legal and regulatory requirements', 'Resolve disputes and enforce agreements', 'Prevent fraud and maintain security'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <p className="font-semibold text-gray-900 mb-3">Retention Periods:</p>
                  <ul className="space-y-2">
                    {[
                      { label: 'Active Clients:', desc: 'Information retained for the duration of the service relationship' },
                      { label: 'Inactive Clients:', desc: 'Information retained for 7 years after termination (for legal and tax compliance)' },
                      { label: 'Credit Reports:', desc: 'Retained as required by FCRA and CROA' },
                      { label: 'Financial Records:', desc: 'Retained for 7 years (IRS requirements)' },
                      { label: 'Marketing Data:', desc: 'Retained until you opt out or request deletion' },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>{item.label}</strong> {item.desc}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4">After retention periods expire, we securely delete or anonymize your information.</p>
                </div>
              </div>
            </div>

            {/* Section 9: Your Privacy Rights */}
            <div id="section-9" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-xl">9</span>
                </div>
                YOUR PRIVACY RIGHTS
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">9.1 General Rights</h3>
                  <p className="mb-3">You have the right to:</p>
                  <ul className="space-y-2">
                    {[
                      { label: 'Access:', desc: 'Request a copy of the personal information we hold about you' },
                      { label: 'Correction:', desc: 'Request correction of inaccurate or incomplete information' },
                      { label: 'Deletion:', desc: 'Request deletion of your information (subject to legal retention requirements)' },
                      { label: 'Opt-Out:', desc: 'Unsubscribe from marketing emails and SMS messages' },
                      { label: 'Withdraw Consent:', desc: 'Withdraw consent for data processing where consent is the legal basis' },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>{item.label}</strong> {item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">9.2 California Residents (CCPA Rights)</h3>
                  <p>California residents have additional rights under the California Consumer Privacy Act (CCPA). See our dedicated <a href="/california-privacy-policy" className="text-amber-600 hover:text-amber-700 underline">California Privacy Policy</a> for full details.</p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">9.3 Exercising Your Rights</h3>
                  <p className="mb-3">To exercise your privacy rights, contact us:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Mail className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Email:</strong> <a href="mailto:contact@mesagroupconsulting.com" className="text-amber-600 hover:text-amber-700 underline">contact@mesagroupconsulting.com</a></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Phone className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Phone:</strong> <a href="tel:+16613103040" className="text-amber-600 hover:text-amber-700 underline">661-310-3040</a></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Mail:</p>
                        <p>MESA & CO CONSULTING LLC DBA MESA GROUP CONSULTING</p>
                        <p>5001 California Ave, Suite 219</p>
                        <p>Bakersfield, CA 93309</p>
                      </div>
                    </li>
                  </ul>
                  <p className="mt-4">We will respond to your request within 30 days (or as required by applicable law). We may require verification of your identity before processing requests.</p>
                </div>
              </div>
            </div>

            {/* Section 10: Children's Privacy */}
            <div id="section-10" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-xl">10</span>
                </div>
                CHILDREN'S PRIVACY
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Mesa Group Consulting does not knowingly collect, use, or disclose personal information from individuals under the age of 18. Our services are intended for adults only.</p>
                <p>If we become aware that we have collected information from a child under 18 without parental consent, we will delete that information immediately. If you believe we have collected information from a child, please contact us at <a href="mailto:contact@mesagroupconsulting.com" className="text-amber-600 hover:text-amber-700 underline">contact@mesagroupconsulting.com</a>.</p>
              </div>
            </div>

            {/* Section 11: Third-Party Links */}
            <div id="section-11" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-xl">11</span>
                </div>
                THIRD-PARTY LINKS
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Our website may contain links to third-party websites, services, or resources. Mesa Group Consulting is not responsible for the privacy practices, content, or security of these third-party sites.</p>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <p className="font-semibold text-gray-900 mb-3">Third-Party Services We Link To:</p>
                  <ul className="space-y-2">
                    {['SmartCredit (credit monitoring)', 'Lending partners (business funding)', 'Social media platforms (Facebook, Instagram, TikTok, YouTube, X/Twitter, LinkedIn)', 'Educational resources and tools'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p>We encourage you to review the privacy policies of any third-party sites you visit.</p>
              </div>
            </div>

            {/* Section 12: International Data Transfers */}
            <div id="section-12" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-xl">12</span>
                </div>
                INTERNATIONAL DATA TRANSFERS
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Mesa Group Consulting is based in California, USA. If you access our services from outside the United States, your information may be transferred to, stored, and processed in the United States.</p>
                <p>By using our services, you consent to the transfer of your information to the United States, where data protection laws may differ from those in your jurisdiction.</p>
                <p>For European Union (EU) and United Kingdom (UK) residents, we comply with applicable data protection laws and use standard contractual clauses or other approved transfer mechanisms when required.</p>
              </div>
            </div>

            {/* Section 13: Changes to This Privacy Policy */}
            <div id="section-13" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-xl">13</span>
                </div>
                CHANGES TO THIS PRIVACY POLICY
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Mesa Group Consulting reserves the right to modify this Privacy Policy at any time. When we make material changes, we will:</p>
                <ul className="space-y-2 ml-6">
                  {[
                    'Update the "Last Updated" date at the top of this policy',
                    'Post the revised policy on our website',
                    'Notify you via email (if you have provided an email address)',
                    'Provide prominent notice on our website',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4">Your continued use of our services after changes become effective constitutes acceptance of the revised Privacy Policy. We encourage you to review this Privacy Policy periodically.</p>
              </div>
            </div>

            {/* Section 14: Contact Us */}
            <div id="section-14" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-xl">14</span>
                </div>
                CONTACT US
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>If you have questions, concerns, or complaints about this Privacy Policy or our data practices, please contact us:</p>

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
                        <a href="mailto:contact@mesagroupconsulting.com" className="text-amber-600 hover:text-amber-700 underline">
                          contact@mesagroupconsulting.com
                        </a>
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
                        <a href="https://www.mesagroupconsulting.com" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">
                          www.mesagroupconsulting.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-amber-200">
                    <p className="font-semibold text-gray-900 mb-2">Business Hours:</p>
                    <div className="space-y-1">
                      <p>Monday - Friday, 9:00 AM - 7:00 PM Pacific Time</p>
                      <p>Saturday, 10:00 AM - 2:00 PM Pacific Time</p>
                      <p>Sunday, Closed</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-amber-200">
                    <p className="font-semibold text-gray-900 mb-2">Data Protection Officer:</p>
                    <p>For privacy-related inquiries, contact our Data Protection Officer at <a href="mailto:contact@mesagroupconsulting.com" className="text-amber-600 hover:text-amber-700 underline">contact@mesagroupconsulting.com</a>.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Acknowledgment Box */}
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 border-2 border-amber-400 rounded-xl p-8 mb-12">
              <p className="text-lg font-bold text-gray-900 mb-4">
                ACKNOWLEDGMENT
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using our website or services, you acknowledge that you have read, understood, and agree to this Privacy Policy.
              </p>
            </div>

            {/* Copyright Line */}
            <div className="text-center pt-12 border-t-2 border-gray-200">
              <p className="text-gray-600 font-medium">© 2026 MESA & CO CONSULTING LLC DBA MESA GROUP CONSULTING. All Rights Reserved.</p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
