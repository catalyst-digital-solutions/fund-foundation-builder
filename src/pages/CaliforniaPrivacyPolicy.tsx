import React from 'react';
import { ShieldCheck, FileText, CircleAlert, CheckCircle2, MapPin, Mail, Phone, Globe, Info } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEO';

const CaliforniaPrivacyPolicy = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="California Privacy Policy | Mesa Group Consulting"
        description="California-specific privacy rights under CCPA/CPRA. Learn how Mesa Group Consulting collects, uses, and protects the personal information of California consumers."
        canonicalUrl="/california-privacy-policy"
      />
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-12 md:py-16 border-b-2 border-amber-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <ShieldCheck className="w-5 h-5 text-amber-600" />
              <span className="text-sm font-medium text-gray-700">Legal Document</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              California <span className="text-[#f9c65d]">Privacy</span> Policy
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
              This California Privacy Policy supplements our Privacy Policy and applies exclusively to California residents. This policy describes how Mesa Group Consulting collects, uses, discloses, and protects the personal information of California consumers as required by the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA).
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
              { id: 'section-1', title: '1. Information We Collect' },
              { id: 'section-2', title: '2. How We Use Personal Information' },
              { id: 'section-3', title: '3. How We Share Personal Information' },
              { id: 'section-4', title: '4. Your California Privacy Rights' },
              { id: 'section-5', title: '5. Do Not Sell My Personal Information' },
              { id: 'section-6', title: '6. Financial Incentives' },
              { id: 'section-7', title: '7. Exercising Your CCPA Rights' },
              { id: 'section-8', title: '8. Verification Process' },
              { id: 'section-9', title: '9. Authorized Agents' },
              { id: 'section-10', title: '10. Non-Discrimination' },
              { id: 'section-11', title: '11. Contact Information' },
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

            {/* Section 1: Information We Collect */}
            <div id="section-1" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">1</span>
                </div>
                INFORMATION WE COLLECT
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>In the past 12 months, Mesa Group Consulting has collected the following categories of personal information from California consumers:</p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Categories of Personal Information Collected</h3>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="text-left pb-3 font-bold text-gray-900">Category</th>
                        <th className="text-left pb-3 font-bold text-gray-900 px-4">Examples</th>
                        <th className="text-center pb-3 font-bold text-gray-900">Collected?</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-3 font-semibold">A. Identifiers</td>
                        <td className="py-3 px-4">Name, alias, postal address, email address, phone number, Social Security number, driver's license number, passport number, online identifiers, IP address, account name, unique device identifiers</td>
                        <td className="py-3 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold">B. Personal Information (Cal. Civ. Code § 1798.80(e))</td>
                        <td className="py-3 px-4">Name, signature, SSN, physical characteristics, address, telephone number, driver's license, passport, education, employment, employment history, bank account number, credit card number, financial information</td>
                        <td className="py-3 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold">C. Protected Classification Characteristics</td>
                        <td className="py-3 px-4">Age (40+), race, color, ancestry, national origin, citizenship, religion, marital status, medical condition, physical or mental disability, sex, veteran or military status, genetic information</td>
                        <td className="py-3 text-center text-red-600 font-bold">NO</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold">D. Commercial Information</td>
                        <td className="py-3 px-4">Records of services purchased or considered, purchasing or consuming histories or tendencies</td>
                        <td className="py-3 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold">E. Biometric Information</td>
                        <td className="py-3 px-4">Physiological, biological, or behavioral characteristics (fingerprints, faceprints, voiceprints, iris/retina scans, keystroke patterns, gait)</td>
                        <td className="py-3 text-center text-red-600 font-bold">NO</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold">F. Internet or Network Activity</td>
                        <td className="py-3 px-4">Browsing history, search history, information on interaction with website or application, cookies, pixels, device information</td>
                        <td className="py-3 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold">G. Geolocation Data</td>
                        <td className="py-3 px-4">Physical location (derived from IP address)</td>
                        <td className="py-3 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold">H. Sensory Data</td>
                        <td className="py-3 px-4">Audio, electronic, visual, thermal, olfactory, or similar information (e.g., call recordings)</td>
                        <td className="py-3 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold">I. Professional or Employment Information</td>
                        <td className="py-3 px-4">Current or past job history, performance evaluations, employer information, income</td>
                        <td className="py-3 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold">J. Non-Public Education Information</td>
                        <td className="py-3 px-4">Education records maintained by an educational institution or party acting on its behalf</td>
                        <td className="py-3 text-center text-red-600 font-bold">NO</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold">K. Inferences</td>
                        <td className="py-3 px-4">Profile reflecting preferences, characteristics, psychological trends, predispositions, behavior, attitudes, intelligence, abilities, aptitudes</td>
                        <td className="py-3 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold">L. Sensitive Personal Information</td>
                        <td className="py-3 px-4">SSN, driver's license, state ID, passport; account login + password/credentials; precise geolocation; racial/ethnic origin; religious/philosophical beliefs; union membership; genetic data; biometric data; health data; sex life/sexual orientation data; contents of mail/email/texts (not directed to Mesa Group)</td>
                        <td className="py-3 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
                  <div className="flex gap-3">
                    <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Note on Sensitive Personal Information</p>
                      <p>We only collect <strong>SSN, driver's license, account login credentials, and precise geolocation</strong> from Category L. We do not collect racial/ethnic origin, religious beliefs, union membership, genetic data, biometric data, health data, sex life/sexual orientation data, or contents of mail/email/texts not directed to us.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: How We Use Personal Information */}
            <div id="section-2" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">2</span>
                </div>
                HOW WE USE PERSONAL INFORMATION
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>Mesa Group Consulting uses personal information for the following business and commercial purposes:</p>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                    Business Purposes
                  </h3>
                  <ul className="space-y-2">
                    {[
                      { label: 'Providing Services:', desc: 'Credit repair, business funding facilitation, credit monitoring, DIY training, financial consulting' },
                      { label: 'Processing Transactions:', desc: 'Enrollment, billing, payment processing, invoicing' },
                      { label: 'Customer Support:', desc: 'Responding to inquiries, providing technical support, managing client accounts' },
                      { label: 'Communication:', desc: 'Service updates, progress reports, appointment reminders, transactional notifications' },
                      { label: 'Legal Compliance:', desc: 'CROA, FCRA, GLBA, TCPA, CAN-SPAM, CCPA, and other applicable laws' },
                      { label: 'Security and Fraud Prevention:', desc: 'Protecting against unauthorized access, fraud, illegal activity' },
                      { label: 'Internal Operations:', desc: 'Quality assurance, training, audits, business planning' },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>{item.label}</strong> {item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                    Commercial Purposes
                  </h3>
                  <ul className="space-y-2">
                    {[
                      { label: 'Marketing and Advertising:', desc: 'Email marketing, SMS marketing, promotional offers, retargeting ads, social media advertising' },
                      { label: 'Analytics and Optimization:', desc: 'Website analytics, user behavior analysis, A/B testing, campaign performance tracking' },
                      { label: 'Lead Generation:', desc: 'Capturing potential clients, nurturing leads, conversion optimization' },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>{item.label}</strong> {item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3: How We Share Personal Information */}
            <div id="section-3" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">3</span>
                </div>
                HOW WE SHARE PERSONAL INFORMATION
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <h3 className="text-xl font-bold text-gray-900">Categories of Third Parties We Share With</h3>
                <p>In the past 12 months, Mesa Group Consulting has disclosed personal information to the following categories of third parties for business purposes:</p>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <h4 className="font-bold text-gray-900 mb-3">Service Partners:</h4>
                  <ul className="space-y-1 ml-6">
                    <li>• SmartCredit (credit monitoring)</li>
                    <li>• Novae (business funding and debt relief for business and personal)</li>
                    <li>• Impruvu (business funding)</li>
                    <li>• CreditVersio (DIY platform for GetCreditly.com - white-label partner)</li>
                    <li>• SuperMoney (financial product comparisons - personal loans, auto refinancing, student loans, debt consolidation, credit cards)</li>
                    <li>• Ava Finance, CreditStrong, Self (credit building platforms)</li>
                    <li>• RentReporters, Rental Kharma, BoomPay, Experian Boost (credit building and rent reporting)</li>
                    <li>• PolicyGenius (life insurance comparison platform)</li>
                    <li>• Trust & Will (estate planning document platform)</li>
                    <li>• Various Lenders (through SuperMoney and other lending networks)</li>
                  </ul>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Credit Bureaus and Creditors:</h4>
                  <ul className="space-y-1 ml-6">
                    <li>• Experian, Equifax, TransUnion</li>
                    <li>• Creditors, collection agencies, data furnishers</li>
                  </ul>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Payment Processors:</h4>
                  <ul className="space-y-1 ml-6">
                    <li>• Credit card processors, ACH processors, payment gateways</li>
                  </ul>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Technology and Service Providers:</h4>
                  <ul className="space-y-1 ml-6">
                    <li>• GoHighLevel (CRM, email/SMS marketing, client portal)</li>
                    <li>• Skool (educational content platform, community access)</li>
                    <li>• Google Analytics (website analytics)</li>
                    <li>• Facebook/Meta (advertising and retargeting)</li>
                    <li>• Web hosting providers</li>
                    <li>• Cloud storage providers</li>
                    <li>• Email service providers</li>
                  </ul>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Legal and Regulatory Entities:</h4>
                  <ul className="space-y-1 ml-6">
                    <li>• Law enforcement agencies</li>
                    <li>• Government agencies and regulators</li>
                    <li>• Courts and legal counsel</li>
                  </ul>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Business Transfer Recipients:</h4>
                  <ul className="space-y-1 ml-6">
                    <li>• Potential acquirers, merger partners, or successor organizations (in the event of business transfer)</li>
                  </ul>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-6">Personal Information Disclosed for Business Purposes</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="text-left pb-3 font-bold text-gray-900">Category</th>
                        <th className="text-center pb-3 font-bold text-gray-900">Disclosed to Third Parties?</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr><td className="py-3 font-semibold">A. Identifiers</td><td className="py-3 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td></tr>
                      <tr><td className="py-3 font-semibold">B. Personal Information (Cal. Civ. Code § 1798.80(e))</td><td className="py-3 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td></tr>
                      <tr><td className="py-3 font-semibold">D. Commercial Information</td><td className="py-3 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td></tr>
                      <tr><td className="py-3 font-semibold">F. Internet or Network Activity</td><td className="py-3 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td></tr>
                      <tr><td className="py-3 font-semibold">G. Geolocation Data</td><td className="py-3 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td></tr>
                      <tr><td className="py-3 font-semibold">H. Sensory Data (Call recordings)</td><td className="py-3 text-center text-red-600 font-bold">NO</td></tr>
                      <tr><td className="py-3 font-semibold">I. Professional or Employment Information</td><td className="py-3 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td></tr>
                      <tr><td className="py-3 font-semibold">K. Inferences</td><td className="py-3 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td></tr>
                      <tr><td className="py-3 font-semibold">L. Sensitive Personal Information</td><td className="py-3 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td></tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-gray-600 mt-3"><strong>Note:</strong> SSN, driver's license - only to authorized partners as needed for services</p>
                </div>
              </div>
            </div>

            {/* Section 4: Your California Privacy Rights */}
            <div id="section-4" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">4</span>
                </div>
                YOUR CALIFORNIA PRIVACY RIGHTS
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>As a California resident, you have the following rights under the CCPA:</p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">4.1 Right to Know</h3>
                  <p className="mb-3">You have the right to request that we disclose:</p>
                  <ul className="space-y-1 ml-6">
                    <li>• Categories of personal information we have collected about you</li>
                    <li>• Categories of sources from which we collected personal information</li>
                    <li>• Business or commercial purpose for collecting or selling personal information</li>
                    <li>• Categories of third parties with whom we share personal information</li>
                    <li>• Specific pieces of personal information we have collected about you</li>
                  </ul>
                  <p className="mt-3"><strong>Time Period:</strong> We will provide information for the 12 months preceding your request.</p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">4.2 Right to Delete</h3>
                  <p className="mb-3">You have the right to request deletion of your personal information, subject to certain exceptions (e.g., legal retention requirements, fraud prevention, contractual obligations, legal compliance).</p>
                  <p className="font-semibold text-gray-900">Note:</p>
                  <p>We may retain information as required by CROA (Credit Repair Organizations Act), FCRA (Fair Credit Reporting Act), GLBA (Gramm-Leach-Bliley Act), tax laws (IRS requirements), and other applicable regulations.</p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">4.3 Right to Correct</h3>
                  <p>You have the right to request correction of inaccurate personal information we maintain about you.</p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">4.4 Right to Opt-Out of Sale or Sharing</h3>
                  <p className="mb-3">You have the right to opt out of the sale or sharing of your personal information.</p>
                  <p className="font-semibold text-gray-900">Important:</p>
                  <p>Mesa Group Consulting does <strong>not sell</strong> your personal information to third parties. We do not engage in data brokering or selling consumer data for monetary compensation.</p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">4.5 Right to Limit Use of Sensitive Personal Information</h3>
                  <p className="mb-3">You have the right to limit the use and disclosure of your sensitive personal information to only what is necessary to provide services you requested or as permitted by law.</p>

                  <p className="font-semibold text-gray-900 mt-4 mb-2">Sensitive Personal Information We Collect:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Social Security Number (required for credit services)</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Driver's license or state ID (for identity verification)</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Account login credentials (for client portal access)</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Precise geolocation (from IP address)</span></li>
                  </ul>

                  <p className="font-semibold text-gray-900 mt-4 mb-2">How We Use It:</p>
                  <ul className="space-y-2 ml-6">
                    <li>• <strong>SSN:</strong> Obtaining credit reports, identity verification, credit bureau disputes</li>
                    <li>• <strong>Driver's License:</strong> Identity verification and compliance with KYC (Know Your Customer) requirements</li>
                    <li>• <strong>Login Credentials:</strong> Secure client portal access</li>
                    <li>• <strong>Geolocation:</strong> Website analytics and fraud prevention</li>
                  </ul>

                  <p className="mt-4">We only use sensitive personal information for purposes necessary to provide our services and comply with legal obligations. We do not use sensitive personal information for purposes beyond those permitted by law without your consent.</p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">4.6 Right to Non-Discrimination</h3>
                  <p className="mb-3">You have the right to not receive discriminatory treatment for exercising your CCPA rights. We will not:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Deny services to you</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Charge different prices or rates</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Provide a different level or quality of services</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Suggest that you will receive different prices or quality of services</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 5: Do Not Sell My Personal Information */}
            <div id="section-5" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">5</span>
                </div>
                DO NOT SELL MY PERSONAL INFORMATION
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="font-bold text-xl text-gray-900">Mesa Group Consulting does not sell personal information.</p>

                <h3 className="text-xl font-bold text-gray-900">What Does "Sell" Mean Under CCPA?</h3>
                <p>"Selling" means disclosing or making available personal information to a third party in exchange for monetary or other valuable consideration.</p>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                    Our Position
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>We do <strong>NOT</strong> sell your personal information to data brokers, advertisers, or third-party marketers</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>We do <strong>NOT</strong> exchange your personal information for monetary compensation</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>We may share information with service partners to provide services you requested, but this is <strong>NOT</strong> considered a "sale" under CCPA</span></li>
                  </ul>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-6">Third-Party Cookies and Tracking</h3>
                <p>Like many websites, we use third-party cookies and tracking technologies (Google Analytics, Facebook Pixel) for analytics and advertising. While this may technically constitute "sharing" under CCPA, we do not receive monetary compensation for this activity.</p>

                <p className="font-semibold text-gray-900">If you want to limit third-party tracking:</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Adjust your browser cookie settings</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Opt out of interest-based advertising: <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://optout.aboutads.info</a></span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Use browser privacy tools or ad blockers</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>See our <a href="/cookie-policy" className="text-amber-600 hover:text-amber-700 underline">Cookie Policy</a> for more details</span></li>
                </ul>
              </div>
            </div>

            {/* Section 6: Financial Incentives */}
            <div id="section-6" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">6</span>
                </div>
                FINANCIAL INCENTIVES
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Mesa Group Consulting does not currently offer any financial incentive programs (discounts, rewards, promotions) in exchange for collecting, retaining, or selling personal information.</p>
                <p>If we offer such programs in the future, we will provide a separate notice describing the material terms, including how to opt-in, how to opt-out, and an explanation of how the program is reasonably related to the value of your personal information.</p>
              </div>
            </div>

            {/* Section 7: Exercising Your CCPA Rights */}
            <div id="section-7" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">7</span>
                </div>
                EXERCISING YOUR CCPA RIGHTS
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>To exercise your CCPA rights, you may submit a verifiable consumer request by:</p>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Methods</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Mail className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">Email:</p>
                        <p><a href="mailto:contact@mesagroupconsulting.com" className="text-amber-600 hover:text-amber-700 underline">contact@mesagroupconsulting.com</a></p>
                        <p className="text-sm text-gray-600">Subject Line: "CCPA Privacy Rights Request"</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Phone className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">Phone:</p>
                        <p><a href="tel:+16613103040" className="text-amber-600 hover:text-amber-700 underline">661-310-3040</a> (toll-free)</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">Mail:</p>
                        <p>MESA & CO CONSULTING LLC DBA MESA GROUP CONSULTING</p>
                        <p>Attn: CCPA Privacy Rights Request</p>
                        <p>5001 California Ave, Suite 219</p>
                        <p>Bakersfield, CA 93309</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-6">What to Include in Your Request</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <ul className="space-y-2">
                    {['Your full name', 'Email address associated with your account (if applicable)', 'Phone number', 'Mailing address', 'Specific right you are exercising (Right to Know, Right to Delete, Right to Correct, etc.)', 'Description of your request', 'Proof of California residency (if not already on file)'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 8: Verification Process */}
            <div id="section-8" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">8</span>
                </div>
                VERIFICATION PROCESS
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>To protect your privacy and security, we must verify your identity before processing CCPA requests.</p>

                <h3 className="text-xl font-bold text-gray-900">Verification Steps</h3>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <p className="font-semibold text-gray-900 mb-2">For Right to Know (Categories):</p>
                  <p>We will match at least <strong>two data points</strong> you provide with information we have on file (e.g., name, email, phone number)</p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <p className="font-semibold text-gray-900 mb-2">For Right to Know (Specific Pieces) or Right to Delete:</p>
                  <p className="mb-2">We will match at least <strong>three data points</strong> you provide with information we have on file</p>
                  <p>We may request additional documentation (e.g., copy of driver's license, utility bill) to verify identity</p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <p className="font-semibold text-gray-900 mb-2">For Right to Correct:</p>
                  <p className="mb-2">We will verify your identity using the same process as Right to Know (Specific Pieces)</p>
                  <p>We may request supporting documentation for requested corrections</p>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-6">Response Timeframe</h3>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>We will acknowledge receipt of your request within <strong>10 business days</strong></span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>We will respond to your request within <strong>45 days</strong></span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>If we need additional time (up to 90 days total), we will notify you and explain the reason for the extension</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 9: Authorized Agents */}
            <div id="section-9" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">9</span>
                </div>
                AUTHORIZED AGENTS
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>You may designate an authorized agent to submit CCPA requests on your behalf. The authorized agent must:</p>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Provide Proof of Authorization:</h3>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Signed written permission from you</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>OR</strong> power of attorney pursuant to California Probate Code sections 4000-4465</span></li>
                  </ul>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Verify Your Identity:</h3>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>We will still require verification of your identity directly from you</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>We may also require proof that you authorized the agent to act on your behalf</span></li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex gap-3">
                    <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p><strong>Note:</strong> Even if you use an authorized agent, we may contact you directly to confirm the request and verify your identity.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 10: Non-Discrimination */}
            <div id="section-10" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">10</span>
                </div>
                NON-DISCRIMINATION
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>Mesa Group Consulting will not discriminate against you for exercising any of your CCPA rights. We will not:</p>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <ul className="space-y-1 ml-6">
                    <li>• Deny you goods or services</li>
                    <li>• Charge you different prices or rates for goods or services (including discounts or other benefits)</li>
                    <li>• Provide you a different level or quality of goods or services</li>
                    <li>• Suggest that you may receive a different price, rate, level, or quality of goods or services</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex gap-3">
                    <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Exception:</p>
                      <p>We may offer financial incentives permitted by CCPA that can result in different prices, rates, or quality levels. Such programs are voluntary and you may opt out at any time. See Section 6 (Financial Incentives) for details.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 11: Contact Information */}
            <div id="section-11" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">11</span>
                </div>
                CONTACT INFORMATION
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>For questions about this California Privacy Policy or to exercise your CCPA rights, contact us:</p>

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
                    <p className="font-semibold text-gray-900 mb-1">Business Hours</p>
                    <p>Monday - Friday, 9:00 AM - 7:00 PM Pacific Time</p>
                    <p>Saturday, 10:00 AM - 2:00 PM Pacific Time</p>
                    <p>Sunday, Closed</p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-amber-200">
                    <p className="font-semibold text-gray-900 mb-1">Data Protection Officer</p>
                    <p>For CCPA-related inquiries, contact our Data Protection Officer at <a href="mailto:contact@mesagroupconsulting.com" className="text-amber-600 hover:text-amber-700 underline">contact@mesagroupconsulting.com</a>.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* California Resident Notice */}
            <div className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">CALIFORNIA RESIDENT NOTICE</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>If you are a California resident, you may report complaints to the California Attorney General's Office:</p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <p className="font-semibold text-gray-900 mb-2">California Attorney General's Office</p>
                  <p>Consumer Law Section</p>
                  <p>1300 I Street</p>
                  <p>Sacramento, CA 95814</p>
                  <p className="mt-2">Phone: <a href="tel:+19164459555" className="text-amber-600 hover:text-amber-700 underline">(916) 445-9555</a></p>
                  <p>Website: <a href="https://oag.ca.gov/contact/consumer-complaint-against-business-or-company" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://oag.ca.gov/contact/consumer-complaint-against-business-or-company</a></p>
                </div>
              </div>
            </div>

            {/* Shine the Light Law */}
            <div className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">SHINE THE LIGHT LAW</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>Under California Civil Code Section 1798.83 ("Shine the Light" law), California residents may request information about our disclosure of personal information to third parties for direct marketing purposes.</p>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <p className="font-semibold text-gray-900 mb-2">Our Response:</p>
                  <p>Mesa Group Consulting does <strong>not share</strong> personal information with third parties for their direct marketing purposes. Therefore, we are not required to provide a list of third parties or categories of personal information shared.</p>
                  <p className="mt-2">If you have questions, contact us at <a href="mailto:contact@mesagroupconsulting.com" className="text-amber-600 hover:text-amber-700 underline">contact@mesagroupconsulting.com</a>.</p>
                </div>
              </div>
            </div>

            {/* Changes to This California Privacy Policy */}
            <div className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">CHANGES TO THIS CALIFORNIA PRIVACY POLICY</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>Mesa Group Consulting reserves the right to update this California Privacy Policy at any time. When we make changes, we will:</p>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Update the "Last Updated" date</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Post the revised policy on our website</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Notify you via email (if you have provided an email address)</span></li>
                  </ul>
                </div>

                <p>Your continued use of our services after changes become effective constitutes acceptance of the revised policy.</p>
              </div>
            </div>

            {/* Acknowledgment */}
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 border-2 border-amber-400 rounded-xl p-8 mb-12">
              <p className="text-lg font-bold text-gray-900 mb-4">ACKNOWLEDGMENT</p>
              <p className="text-gray-700 leading-relaxed">
                By using our website or services as a California resident, you acknowledge that you have read and understood this California Privacy Policy and your rights under the CCPA.
              </p>
            </div>

            {/* Copyright */}
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

export default CaliforniaPrivacyPolicy;
