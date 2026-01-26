import React, { useState } from 'react';
import { CheckCircle, FileText, Shield, Scale, AlertCircle, Mail, Phone, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsAndConditions = () => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Legal Document Header */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-12 md:py-16 border-b-2 border-amber-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            {/* Legal Badge */}
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <Scale className="w-5 h-5 text-amber-600" />
              <span className="text-sm font-medium text-gray-700">Legal Document</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Terms & <span className="text-amber-600">Conditions</span>
            </h1>

            {/* Meta Information */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Effective Date: January 27, 2026</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full" />
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                <span>Last Updated: January 27, 2026</span>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Please read these Terms & Conditions carefully before accessing our website or engaging our services. By using our services, you agree to be bound by these terms.
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
              { id: 'section-1', title: '1. Acceptance of Terms' },
              { id: 'section-2', title: '2. Services Provided' },
              { id: 'section-3', title: '3. Credit Repair Organizations Act (CROA) Compliance' },
              { id: 'section-4', title: '4. Client Responsibilities' },
              { id: 'section-5', title: '5. Fees, Payment, and Refunds' },
              { id: 'section-6', title: '6. Results and Disclaimers' },
              { id: 'section-7', title: '7. Intellectual Property Rights' },
              { id: 'section-8', title: '8. User Content and Submissions' },
              { id: 'section-9', title: '9. Privacy and Data Protection' },
              { id: 'section-10', title: '10. Limitation of Liability' },
              { id: 'section-11', title: '11. Indemnification' },
              { id: 'section-12', title: '12. Dispute Resolution and Arbitration' },
              { id: 'section-13', title: '13. Termination' },
              { id: 'section-14', title: '14. Miscellaneous Provisions' },
              { id: 'section-15', title: '15. Contact Information' },
              { id: 'section-16', title: '16. California-Specific Notices' },
              { id: 'section-17', title: '17. Acknowledgment' }
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

      {/* Main Terms Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            {/* Section 1: Acceptance of Terms */}
            <div id="section-1" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-xl">1</span>
                </div>
                ACCEPTANCE OF TERMS
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  These Terms & Conditions ("Terms," "Agreement") constitute a legally binding agreement between you ("Client," "you," "your") and <strong>Mesa Group Consulting</strong> ("Mesa Group," "Company," "we," "us," "our"), a California limited liability company, governing your access to and use of our website (www.mesagroupconsulting.com) and services.
                </p>
                <p>
                  By accessing our website, engaging our services, submitting any forms, creating an account, or making a payment, you acknowledge that you have read, understood, and agree to be bound by these Terms, including our Privacy Policy. If you do not agree with any part of these Terms, you must immediately discontinue use of our website and services.
                </p>
              </div>
            </div>

            {/* Section 2: Services Provided */}
            <div id="section-2" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-xl">2</span>
                </div>
                SERVICES PROVIDED
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>Mesa Group Consulting provides the following financial and credit-related services:</p>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    2.1 Credit Repair Services
                  </h3>
                  <p>
                    Professional credit repair services including credit report analysis, dispute campaigns, credit bureau negotiations, creditor negotiations, and ongoing credit monitoring designed to identify and challenge inaccurate, unverifiable, or unfair negative items on credit reports.
                  </p>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    2.2 Business Funding Services
                  </h3>
                  <p>
                    Business funding consultation and facilitation services connecting clients with lending partners offering various financing solutions, including but not limited to 0% interest financing, business credit cards, lines of credit, term loans, and equipment financing.
                  </p>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    2.3 Credit Monitoring Services
                  </h3>
                  <p>
                    Partnership-based credit monitoring services providing 24/7 credit surveillance, fraud alerts, identity theft protection, and comprehensive credit report monitoring across all three major credit bureaus (Experian, Equifax, and TransUnion).
                  </p>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    2.4 DIY Credit Repair Training
                  </h3>
                  <p>
                    Educational programs and training materials designed to teach clients self-directed credit repair strategies, credit report analysis techniques, dispute letter writing, and long-term credit management practices.
                  </p>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    2.5 Financial Consulting Services
                  </h3>
                  <p>
                    General financial guidance, credit counseling, financial planning consultations, and advisory services related to credit optimization, debt management, and financial goal achievement.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: CROA Compliance */}
            <div id="section-3" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-xl">3</span>
                </div>
                CREDIT REPAIR ORGANIZATIONS ACT (CROA) COMPLIANCE
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex gap-3">
                    <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Federal Compliance Notice</p>
                      <p>
                        Mesa Group Consulting complies with all federal and state laws governing credit repair services, including but not limited to the Credit Repair Organizations Act (15 U.S.C. § 1679 et seq.) and applicable California state regulations.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">3.1 No Advance Fees</h3>
                <p>
                  In compliance with CROA, Mesa Group Consulting does not charge or collect any fees from clients for credit repair services before such services have been fully performed. All fees are charged only after services for the applicable billing period have been completed.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">3.2 Right to Cancel</h3>
                <p>
                  You have the right to cancel your credit repair services contract at any time within three (3) business days from the date you signed the contract without any penalty or obligation. To cancel, you must provide written notice to Mesa Group Consulting via email at contact@mesagroupconsulting.com or by mail to 4012 Foxwood St, Bakersfield, CA 93306.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">3.3 Consumer Rights Under CROA</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <p className="font-semibold text-gray-900 mb-3">You Have the Right To:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>A detailed written contract explaining your rights and the services provided</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Cancel within three (3) business days without penalty</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Sue a credit repair company for violations of CROA</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>File a dispute yourself with credit bureaus at no cost</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 4: Client Responsibilities */}
            <div id="section-4" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-xl">4</span>
                </div>
                CLIENT RESPONSIBILITIES
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <h3 className="text-xl font-bold text-gray-900">4.1 Account Security</h3>
                <p>
                  You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized access or use of your account.
                </p>

                <h3 className="text-xl font-bold text-gray-900">4.2 Accurate Information</h3>
                <p>
                  You agree to provide true, accurate, current, and complete information when creating an account, submitting forms, or engaging our services. You agree to promptly update any information that becomes inaccurate or incomplete. Failure to provide accurate information may result in suspension or termination of services.
                </p>

                <h3 className="text-xl font-bold text-gray-900">4.3 Compliance with Laws</h3>
                <p>
                  You agree to use our services in compliance with all applicable federal, state, and local laws and regulations. You will not use our services for any unlawful purpose or in any manner that violates these Terms.
                </p>

                <h3 className="text-xl font-bold text-gray-900">4.4 Cooperation</h3>
                <p>
                  You agree to cooperate fully with Mesa Group Consulting in the provision of services, including responding to requests for information, providing necessary documentation, reviewing communications, and following recommended actions in a timely manner. Failure to cooperate may impact the effectiveness of our services and our ability to achieve results.
                </p>

                <h3 className="text-xl font-bold text-gray-900">4.5 No Fraudulent Activity</h3>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex gap-3">
                    <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <p>
                      <strong>Important:</strong> You agree not to provide false or misleading information to Mesa Group Consulting, credit bureaus, creditors, or any third parties. You acknowledge that providing false information or attempting to create a fraudulent credit identity is illegal and grounds for immediate termination of services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5: Fees, Payment, and Refunds */}
            <div id="section-5" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-xl">5</span>
                </div>
                FEES, PAYMENT, AND REFUNDS
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <h3 className="text-xl font-bold text-gray-900">5.1 Service Fees</h3>
                <p>
                  Fees for services are specified in your individual service agreement or on our website pricing pages. All fees are in U.S. dollars and exclude applicable taxes, which will be added to your invoice where required by law.
                </p>

                <h3 className="text-xl font-bold text-gray-900">5.2 Payment Terms</h3>
                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg space-y-4">
                  <p className="font-semibold text-gray-900">Payment terms vary by service type:</p>
                  <div>
                    <p className="font-semibold text-gray-900">Credit Repair Services:</p>
                    <p>Charged monthly in arrears after services have been performed for that billing period, in compliance with CROA.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Business Funding Services:</p>
                    <p>Consultation fees (if applicable) are due at the time of consultation. Mesa Group Consulting may receive compensation from lending partners when clients successfully secure funding, which does not affect the client's cost of services.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Credit Monitoring Services:</p>
                    <p>Billed according to the terms of your subscription agreement with the third-party monitoring service provider.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">DIY Training Services:</p>
                    <p>Fees due at the time of purchase or according to the payment plan selected.</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900">5.3 Payment Methods</h3>
                <p>
                  We accept payments via credit card, debit card, ACH bank transfer, and other methods as specified during enrollment. By providing payment information, you authorize Mesa Group Consulting to charge the specified payment method for all applicable fees.
                </p>

                <h3 className="text-xl font-bold text-gray-900">5.4 Late Payments</h3>
                <p>
                  Late payments may result in suspension of services until payment is received. Mesa Group Consulting reserves the right to charge a late fee of up to $25 or 5% of the outstanding balance (whichever is less) for payments not received within 10 days of the due date.
                </p>

                <h3 className="text-xl font-bold text-gray-900">5.5 Refund Policy</h3>
                <p>
                  Refund policies vary by service type and are detailed in your individual service agreement. Credit repair services are subject to any money-back guarantees specified in your Credit Repair Services Agreement. All refund requests must be submitted in writing to contact@mesagroupconsulting.com.
                </p>
              </div>
            </div>

            {/* Section 6: Results and Disclaimers */}
            <div id="section-6" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-xl">6</span>
                </div>
                RESULTS AND DISCLAIMERS
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-6 h-6 text-yellow-600" />
                    6.1 No Guaranteed Results
                  </h3>
                  <p className="mb-3">
                    While Mesa Group Consulting employs proven strategies and has achieved significant results for thousands of clients, we cannot and do not guarantee specific outcomes, including but not limited to:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 font-bold">•</span>
                      <span>Specific credit score increases</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 font-bold">•</span>
                      <span>Removal of any particular negative item</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 font-bold">•</span>
                      <span>Approval for loans, mortgages, or credit cards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 font-bold">•</span>
                      <span>Specific funding amounts for business financing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 font-bold">•</span>
                      <span>Timeframes for achieving results</span>
                    </li>
                  </ul>
                  <p className="mt-3 font-semibold">
                    Results vary significantly based on individual circumstances, including the nature and accuracy of negative items, creditor and credit bureau responses, client cooperation, and factors outside our control.
                  </p>
                </div>

                <h3 className="text-xl font-bold text-gray-900">6.2 No Legal, Tax, or Investment Advice</h3>
                <p>
                  Mesa Group Consulting provides financial consultation and credit-related services but is not a law firm, tax preparation service, or investment advisory firm. Nothing in these Terms or provided through our services constitutes legal advice, tax advice, investment advice, or comprehensive financial planning (unless specifically contracted). You should consult with licensed attorneys, CPAs, financial advisors, or other qualified professionals for specialized advice related to your specific situation.
                </p>

                <h3 className="text-xl font-bold text-gray-900">6.3 Not a Lender</h3>
                <p>
                  Mesa Group Consulting is not a lender and does not extend credit or make loans. Our business funding services connect clients with third-party lending partners. All lending decisions, terms, rates, and conditions are determined solely by the lending partners, not by Mesa Group Consulting.
                </p>

                <h3 className="text-xl font-bold text-gray-900">6.4 Third-Party Services</h3>
                <p>
                  Certain services may involve partnerships with third-party providers (e.g., credit monitoring companies, lending partners, credit bureaus). Mesa Group Consulting is not responsible for the actions, services, terms, or privacy practices of these third parties. Your use of third-party services may be subject to separate terms and conditions and privacy policies.
                </p>

                <h3 className="text-xl font-bold text-gray-900">6.5 Credit Bureau Responses</h3>
                <p>
                  Credit bureaus and creditors make independent decisions regarding disputes and investigations. Mesa Group Consulting cannot control or influence these decisions. Bureaus may verify negative items as accurate, refuse to investigate, or require additional information, which may affect results.
                </p>
              </div>
            </div>

            {/* Section 7: Intellectual Property Rights */}
            <div id="section-7" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-xl">7</span>
                </div>
                INTELLECTUAL PROPERTY RIGHTS
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <h3 className="text-xl font-bold text-gray-900">7.1 Ownership</h3>
                <p>
                  All content, materials, features, functionality, software, designs, graphics, text, logos, images, trademarks, service marks, and other intellectual property available through our website and services ("Content") are owned by Mesa Group Consulting or our licensors and are protected by copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>

                <h3 className="text-xl font-bold text-gray-900">7.2 Limited License</h3>
                <p>
                  Subject to your compliance with these Terms, Mesa Group Consulting grants you a limited, non-exclusive, non-transferable, revocable license to access and use our website and services for personal, non-commercial purposes. This license does not include:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span>Resale or commercial use of our services or Content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span>Collection and use of product listings, descriptions, or prices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span>Derivative use of our services or Content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span>Downloading or copying of account information for the benefit of another party</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span>Use of data mining, robots, or similar data gathering tools</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900">7.3 Restrictions</h3>
                <p>You agree not to:</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span>Modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any Content without express written permission</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span>Remove or alter any copyright, trademark, or other proprietary notices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span>Use our name, trademarks, or logos without prior written consent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span>Reverse engineer, decompile, or disassemble any software or technology used in our services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span>Attempt to gain unauthorized access to our systems or networks</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 8: User Content and Submissions */}
            <div id="section-8" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-xl">8</span>
                </div>
                USER CONTENT AND SUBMISSIONS
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <h3 className="text-xl font-bold text-gray-900">8.1 User Content</h3>
                <p>
                  You may have the opportunity to submit content, including but not limited to reviews, testimonials, comments, questions, feedback, or other communications ("User Content"). You retain ownership of your User Content, but by submitting it to Mesa Group Consulting, you grant us a perpetual, irrevocable, worldwide, royalty-free, non-exclusive, transferable license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, perform, and display such User Content in any media format and through any media channel.
                </p>

                <h3 className="text-xl font-bold text-gray-900">8.2 Content Standards</h3>
                <p>All User Content must:</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Be accurate and not misleading</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Comply with applicable laws and regulations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Not infringe any intellectual property rights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Not contain defamatory, obscene, offensive, or illegal content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Not contain viruses, malware, or other harmful code</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Not impersonate any person or entity</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900">8.3 Monitoring and Removal</h3>
                <p>
                  Mesa Group Consulting reserves the right (but has no obligation) to monitor, review, edit, or remove User Content that violates these Terms or is otherwise objectionable, without notice and at our sole discretion.
                </p>
              </div>
            </div>

            {/* Section 9: Privacy and Data Protection */}
            <div id="section-9" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-xl">9</span>
                </div>
                PRIVACY AND DATA PROTECTION
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Shield className="w-6 h-6 text-blue-600" />
                    9.1 Privacy Policy
                  </h3>
                  <p>
                    Your privacy is important to us. Our collection, use, storage, and protection of your personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using our services, you consent to the practices described in our Privacy Policy.
                  </p>
                </div>

                <h3 className="text-xl font-bold text-gray-900">9.2 Confidential Information</h3>
                <p>
                  Mesa Group Consulting agrees to maintain the confidentiality of your personal and financial information in accordance with applicable law, including but not limited to the Gramm-Leach-Bliley Act (GLBA) and California Consumer Privacy Act (CCPA).
                </p>

                <h3 className="text-xl font-bold text-gray-900">9.3 Credit Bureau Authorization</h3>
                <p>
                  By engaging credit repair or credit monitoring services, you authorize Mesa Group Consulting and our designated representatives to obtain your consumer credit reports from one or more credit bureaus for the purposes of providing services. This authorization continues throughout the duration of our service relationship.
                </p>

                <h3 className="text-xl font-bold text-gray-900">9.4 Third-Party Sharing</h3>
                <p>
                  Mesa Group Consulting may share your information with third parties only as necessary to provide services (e.g., credit bureaus, creditors, lending partners) or as required by law. We do not sell your personal information to third parties.
                </p>

                <h3 className="text-xl font-bold text-gray-900">9.5 Data Security</h3>
                <p>
                  We implement industry-standard security measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </div>
            </div>

            {/* Section 10: Limitation of Liability */}
            <div id="section-10" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-xl">10</span>
                </div>
                LIMITATION OF LIABILITY
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">10.1 Maximum Liability Cap</h3>
                  <p className="font-bold text-red-900">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE TOTAL LIABILITY OF MESA GROUP CONSULTING FOR ANY AND ALL CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR OUR SERVICES, WHETHER IN CONTRACT, TORT, OR OTHERWISE, SHALL NOT EXCEED THE TOTAL AMOUNT OF FEES PAID BY YOU TO MESA GROUP CONSULTING IN THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO LIABILITY.
                  </p>
                </div>

                <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">10.2 Exclusion of Consequential Damages</h3>
                  <p className="font-bold text-red-900 mb-3">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, MESA GROUP CONSULTING SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span className="font-semibold">Lost profits, lost revenue, or lost business opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span className="font-semibold">Loss of data or information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span className="font-semibold">Cost of substitute services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span className="font-semibold">Business interruption or work stoppage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span className="font-semibold">Loss of goodwill or reputation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span className="font-semibold">Emotional distress or mental anguish</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span className="font-semibold">Denial of loan applications or credit products</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span className="font-semibold">Higher interest rates or unfavorable lending terms</span>
                    </li>
                  </ul>
                  <p className="mt-3 font-bold text-red-900">
                    THIS LIMITATION APPLIES REGARDLESS OF WHETHER MESA GROUP CONSULTING HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES AND REGARDLESS OF THE LEGAL THEORY ON WHICH THE CLAIM IS BASED.
                  </p>
                </div>

                <h3 className="text-xl font-bold text-gray-900">10.3 Basis of the Bargain</h3>
                <p>
                  You acknowledge and agree that these limitations of liability are fundamental elements of the agreement between you and Mesa Group Consulting. Our fees and service pricing reflect these limitations. Without these limitations, we would not be able to provide services at our current pricing structure.
                </p>

                <h3 className="text-xl font-bold text-gray-900">10.4 Jurisdictional Limitations</h3>
                <p>
                  Some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages. In such jurisdictions, our liability is limited to the maximum extent permitted by applicable law.
                </p>
              </div>
            </div>

            {/* Section 11: Indemnification */}
            <div id="section-11" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-xl">11</span>
                </div>
                INDEMNIFICATION
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  You agree to indemnify, defend, and hold harmless Mesa Group Consulting, its officers, directors, employees, agents, affiliates, successors, and assigns from and against any and all losses, damages, liabilities, deficiencies, claims, actions, judgments, settlements, interest, awards, penalties, fines, costs, or expenses of whatever kind (including reasonable attorneys' fees) arising from or relating to:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span>Your use or misuse of our services or website</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span>Your breach of these Terms or any representation, warranty, or covenant herein</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span>Your violation of any law, regulation, or third-party rights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span>Any false, inaccurate, or misleading information you provide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span>Your User Content or any content you submit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span>Any dispute between you and any third party</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span>Any negligent or willful misconduct on your part</span>
                  </li>
                </ul>
                <p className="mt-4 font-semibold">
                  This indemnification obligation will survive termination of these Terms and your use of our services.
                </p>
              </div>
            </div>

            {/* Section 12: Dispute Resolution and Arbitration */}
            <div id="section-12" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-xl">12</span>
                </div>
                DISPUTE RESOLUTION AND ARBITRATION
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">12.1 Mandatory Arbitration Agreement</h3>
                  <p className="font-bold text-orange-900">
                    YOU AND MESA GROUP CONSULTING AGREE THAT ANY DISPUTE, CLAIM, OR CONTROVERSY ARISING OUT OF OR RELATING TO THESE TERMS OR OUR SERVICES (COLLECTIVELY, "DISPUTES") WILL BE SETTLED BY BINDING ARBITRATION, EXCEPT AS PROVIDED BELOW. ARBITRATION REPLACES THE RIGHT TO GO TO COURT, INCLUDING THE RIGHT TO A JURY TRIAL AND THE RIGHT TO PARTICIPATE IN A CLASS ACTION OR SIMILAR PROCEEDING.
                  </p>
                </div>

                <h3 className="text-xl font-bold text-gray-900">12.2 Arbitration Procedures</h3>
                <p>
                  Any Dispute will be resolved through final and binding arbitration administered by the American Arbitration Association ("AAA") under its Consumer Arbitration Rules then in effect, except as modified by this Agreement. The arbitration will be conducted in Kern County, California, or at another mutually agreeable location, unless the parties agree to conduct the arbitration by telephone or based solely on written submissions.
                </p>

                <h3 className="text-xl font-bold text-gray-900">12.3 Arbitration Costs</h3>
                <p>
                  Each party will be responsible for paying their own attorneys' fees and costs unless otherwise required by applicable law or the arbitrator's award. Mesa Group Consulting will pay all AAA filing, administration, and arbitrator fees for claims under $10,000, unless the arbitrator finds the claims frivolous.
                </p>

                <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">12.4 Individual Arbitration Only</h3>
                  <p className="font-bold text-orange-900">
                    YOU AND MESA GROUP CONSULTING AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN AN INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS, REPRESENTATIVE, OR COLLECTIVE ACTION OR PROCEEDING. Unless both parties agree otherwise, the arbitrator may not consolidate more than one person's claims and may not preside over any form of representative, class, or collective proceeding.
                  </p>
                </div>

                <h3 className="text-xl font-bold text-gray-900">12.5 Exceptions to Arbitration</h3>
                <p>Notwithstanding the arbitration agreement above, either party may:</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Bring an individual action in small claims court if the claim qualifies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Seek injunctive or equitable relief in court to prevent infringement of intellectual property rights or unauthorized access to our systems</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900">12.6 Opt-Out Right</h3>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <p className="mb-3">
                    <strong>You have the right to opt out of this arbitration agreement</strong> by sending written notice of your decision to opt out to Mesa Group Consulting at:
                  </p>
                  <div className="bg-white rounded-lg p-4 mb-3">
                    <p className="font-semibold">Mesa Group Consulting</p>
                    <p>4012 Foxwood St</p>
                    <p>Bakersfield, CA 93306</p>
                    <p className="mt-2">Or via email: contact@mesagroupconsulting.com</p>
                  </div>
                  <p>
                    Your opt-out notice must be sent within <strong>thirty (30) days of first accepting these Terms</strong> and must include your name, address, email, and a clear statement that you wish to opt out of this arbitration agreement. If you opt out, all other terms of this Agreement will continue to apply.
                  </p>
                </div>

                <h3 className="text-xl font-bold text-gray-900">12.7 Governing Law</h3>
                <p>
                  These Terms and any Disputes will be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law principles. If arbitration does not apply for any reason, you agree to submit to the exclusive jurisdiction of the state and federal courts located in Kern County, California.
                </p>
              </div>
            </div>

            {/* Section 13: Termination */}
            <div id="section-13" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-xl">13</span>
                </div>
                TERMINATION
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <h3 className="text-xl font-bold text-gray-900">13.1 Termination by Client</h3>
                <p>
                  You may terminate your service agreement at any time by providing written notice to Mesa Group Consulting. Credit repair clients have the right to cancel within three (3) business days without penalty as required by CROA. After the cancellation period, you may terminate at any time, but fees for services already rendered are non-refundable unless otherwise specified in your service agreement.
                </p>

                <h3 className="text-xl font-bold text-gray-900">13.2 Termination by Mesa Group</h3>
                <p>Mesa Group Consulting reserves the right to suspend or terminate your access to services immediately, without notice, for any reason, including but not limited to:</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span>Breach of these Terms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span>Providing false or misleading information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span>Failure to pay fees when due</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span>Non-cooperation or failure to respond to communications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span>Fraudulent activity or illegal conduct</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span>Abusive, threatening, or disrespectful behavior toward staff</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span>Any conduct that we determine, in our sole discretion, is harmful to our business or reputation</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900">13.3 Effect of Termination</h3>
                <p>Upon termination:</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Your right to access and use our services will immediately cease</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>You remain responsible for all fees incurred prior to termination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Sections of these Terms that by their nature should survive termination will continue to apply, including intellectual property rights, disclaimers, limitations of liability, indemnification, dispute resolution, and governing law provisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Mesa Group Consulting will cease all credit repair work on your behalf but is not required to reverse actions already taken</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 14: Miscellaneous Provisions */}
            <div id="section-14" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-xl">14</span>
                </div>
                MISCELLANEOUS PROVISIONS
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <h3 className="text-xl font-bold text-gray-900">14.1 Entire Agreement</h3>
                <p>
                  These Terms, together with any service-specific agreements, our Privacy Policy, and any other policies or guidelines referenced herein, constitute the entire agreement between you and Mesa Group Consulting and supersede all prior or contemporaneous communications, agreements, or understandings, whether oral or written.
                </p>

                <h3 className="text-xl font-bold text-gray-900">14.2 Amendments</h3>
                <p>
                  Mesa Group Consulting reserves the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website with a new "Last Updated" date or by sending notice to the email address associated with your account. Your continued use of our services after changes become effective constitutes acceptance of the modified Terms. If you do not agree to the modified Terms, you must discontinue use of our services.
                </p>

                <h3 className="text-xl font-bold text-gray-900">14.3 Severability</h3>
                <p>
                  If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions will continue in full force and effect. The invalid provision will be modified to the minimum extent necessary to make it valid and enforceable while preserving the original intent.
                </p>

                <h3 className="text-xl font-bold text-gray-900">14.4 Waiver</h3>
                <p>
                  No waiver of any provision of these Terms will be deemed a further or continuing waiver of such provision or any other provision. Mesa Group Consulting's failure to enforce any right or provision of these Terms will not constitute a waiver of that right or provision.
                </p>

                <h3 className="text-xl font-bold text-gray-900">14.5 Assignment</h3>
                <p>
                  You may not assign, transfer, or delegate these Terms or your rights and obligations hereunder without Mesa Group Consulting's prior written consent. Mesa Group Consulting may assign these Terms without restriction. Any attempted assignment in violation of this section is void.
                </p>

                <h3 className="text-xl font-bold text-gray-900">14.6 Force Majeure</h3>
                <p>
                  Mesa Group Consulting will not be liable for any delay or failure to perform obligations under these Terms due to causes beyond our reasonable control, including but not limited to acts of God, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, pandemics, strikes, or shortages of transportation, facilities, fuel, energy, labor, or materials.
                </p>

                <h3 className="text-xl font-bold text-gray-900">14.7 Independent Contractors</h3>
                <p>
                  Nothing in these Terms creates a partnership, joint venture, agency, employment, or franchise relationship between you and Mesa Group Consulting. You have no authority to bind Mesa Group Consulting or make commitments on our behalf.
                </p>

                <h3 className="text-xl font-bold text-gray-900">14.8 No Third-Party Beneficiaries</h3>
                <p>
                  These Terms are for the sole benefit of you and Mesa Group Consulting and do not create any third-party beneficiary rights.
                </p>

                <h3 className="text-xl font-bold text-gray-900">14.9 Headings</h3>
                <p>
                  The headings and section titles in these Terms are for convenience only and have no legal or contractual effect.
                </p>

                <h3 className="text-xl font-bold text-gray-900">14.10 Language</h3>
                <p>
                  If these Terms are translated into any language other than English, the English language version will control in the event of any conflict or discrepancy.
                </p>
              </div>
            </div>

            {/* Section 15: Contact Information */}
            <div id="section-15" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-xl">15</span>
                </div>
                CONTACT INFORMATION
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  If you have any questions, concerns, or complaints about these Terms or our services, please contact us:
                </p>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Mesa Group Consulting</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Address</p>
                        <p>4012 Foxwood St</p>
                        <p>Bakersfield, CA 93306</p>
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
                        <p>[Insert phone number]</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileText className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Website</p>
                        <a href="https://www.mesagroupconsulting.com" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">
                          www.mesagroupconsulting.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-amber-200">
                    <p className="font-semibold text-gray-900">Business Hours:</p>
                    <p>Monday-Sunday, 9:00 AM - 5:00 PM Pacific Time</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 16: California-Specific Notices */}
            <div id="section-16" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-xl">16</span>
                </div>
                CALIFORNIA-SPECIFIC NOTICES
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <h3 className="text-xl font-bold text-gray-900">16.1 California Residents</h3>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <p className="mb-3">
                    Under California Civil Code Section 1789.3, California residents are entitled to the following specific consumer rights information:
                  </p>
                  <p className="font-semibold text-gray-900 mb-2">Complaint Assistance:</p>
                  <p>
                    The Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs may be contacted in writing at 1625 North Market Blvd., Suite N-112, Sacramento, CA 95834, or by telephone at (916) 445-1254 or (800) 952-5210.
                  </p>
                </div>

                <h3 className="text-xl font-bold text-gray-900">16.2 California Consumer Privacy Act (CCPA)</h3>
                <p>
                  California residents have specific rights under the CCPA regarding their personal information. For details on how we collect, use, and protect your information, and your rights under the CCPA, please review our Privacy Policy.
                </p>
              </div>
            </div>

            {/* Section 17: Acknowledgment */}
            <div id="section-17" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-xl">17</span>
                </div>
                ACKNOWLEDGMENT
              </h2>
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 border-2 border-amber-400 rounded-xl p-8">
                <p className="text-lg font-bold text-gray-900 mb-4">
                  BY ACCESSING OUR WEBSITE, CREATING AN ACCOUNT, ENGAGING OUR SERVICES, OR CLICKING "I AGREE," YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS & CONDITIONS IN THEIR ENTIRETY.
                </p>
                <p className="text-lg font-bold text-red-900">
                  IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST NOT ACCESS OR USE OUR WEBSITE OR SERVICES.
                </p>
              </div>
            </div>

            {/* Copyright Notice */}
            <div className="text-center pt-12 border-t-2 border-gray-200">
              <p className="text-gray-600 font-medium">
                © {new Date().getFullYear()} Mesa Group Consulting. All Rights Reserved.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;

