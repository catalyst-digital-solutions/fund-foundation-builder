import React, { useEffect } from 'react';
import { Scale, FileText, CircleAlert, CheckCircle2, MapPin, Mail, Phone, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEO';

const TermsAndConditions: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Terms & Conditions | Mesa Group Consulting"
        description="Review Mesa Group Consulting's Terms & Conditions for credit repair, business funding, and financial services. Understand your rights, our policies, and the Mesa360 guarantee."
        canonicalUrl="/terms-and-conditions"
      />
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-12 md:py-16 border-b-2 border-amber-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <Scale className="w-5 h-5 text-amber-600" />
              <span className="text-sm font-medium text-gray-700">Legal Document</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Terms & <span className="text-[#f9c65d]">Conditions</span>
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
              Please read these Terms & Conditions carefully before accessing our website or engaging our services. By using our services, you agree to be bound by these terms.
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
              { id: 'section-1', title: '1. Acceptance of Terms' },
              { id: 'section-2', title: '2. Services Provided' },
              { id: 'section-3', title: '3. Credit Repair Organizations Act (CROA) Compliance' },
              { id: 'section-4', title: '4. Mesa360 Credit Repair Program' },
              { id: 'section-5', title: '5. 90-Day Money-Back Guarantee' },
              { id: 'section-6', title: '6. Client Responsibilities' },
              { id: 'section-7', title: '7. Fees, Payment, and Refunds' },
              { id: 'section-8', title: '8. Results and Disclaimers' },
              { id: 'section-9', title: '9. Intellectual Property Rights' },
              { id: 'section-10', title: '10. User Content and Submissions' },
              { id: 'section-11', title: '11. Privacy and Data Protection' },
              { id: 'section-12', title: '12. Limitation of Liability' },
              { id: 'section-13', title: '13. Indemnification' },
              { id: 'section-14', title: '14. Dispute Resolution and Arbitration' },
              { id: 'section-15', title: '15. Termination' },
              { id: 'section-16', title: '16. Miscellaneous Provisions' },
              { id: 'section-17', title: '17. Contact Information' },
              { id: 'section-18', title: '18. California-Specific Notices' },
              { id: 'section-19', title: '19. Acknowledgment' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                className="text-left px-4 py-3 bg-white rounded-lg border border-gray-200 hover:border-amber-400 hover:bg-amber-50 transition-all duration-200 group"
              >
                <span className="text-gray-700 group-hover:text-amber-600 font-medium">{item.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Body */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            {/* Section 1 */}
            <div id="section-1" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">1</span>
                </div>
                ACCEPTANCE OF TERMS
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  These Terms & Conditions ("Terms," "Agreement") constitute a legally binding agreement between you ("Client," "you," "your") and <strong>MESA & CO CONSULTING LLC</strong>, doing business as <strong>Mesa Group Consulting</strong> ("Mesa Group," "Company," "we," "us," "our"), a California limited liability company, governing your access to and use of our website (<a href="https://www.mesagroupconsulting.com" className="text-amber-600 hover:text-amber-700 underline">www.mesagroupconsulting.com</a>) and services.
                </p>
                <p>
                  By accessing our website, engaging our services, submitting any forms, creating an account, or making a payment, you acknowledge that you have read, understood, and agree to be bound by these Terms, including our <a href="/privacy-policy" className="text-amber-600 hover:text-amber-700 underline">Privacy Policy</a>, <a href="/california-privacy-policy" className="text-amber-600 hover:text-amber-700 underline">California Privacy Policy</a>, <a href="/cookie-policy" className="text-amber-600 hover:text-amber-700 underline">Cookie Policy</a>, <a href="/tcpa-consent-policy" className="text-amber-600 hover:text-amber-700 underline">TCPA Consent Policy</a>, <a href="/disclaimer" className="text-amber-600 hover:text-amber-700 underline">Disclaimer</a>, <a href="/affiliate-disclosure" className="text-amber-600 hover:text-amber-700 underline">Affiliate Disclosure</a>, and <a href="/accessibility-statement" className="text-amber-600 hover:text-amber-700 underline">Accessibility Statement</a>. If you do not agree with any part of these Terms, you must immediately discontinue use of our website and services.
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <p className="font-semibold text-gray-900 mb-2">Legal Entity Information:</p>
                  <p><strong>MESA & CO CONSULTING LLC DBA MESA GROUP CONSULTING</strong></p>
                  <p>5001 California Ave, Suite 219</p>
                  <p>Bakersfield, CA 93309</p>
                  <p>Phone: <a href="tel:+16613103040" className="text-amber-600 hover:text-amber-700 underline">661-310-3040</a></p>
                  <p>Email: <a href="mailto:contact@mesagroupconsulting.com" className="text-amber-600 hover:text-amber-700 underline">contact@mesagroupconsulting.com</a></p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div id="section-2" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">2</span>
                </div>
                SERVICES PROVIDED
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>Mesa Group Consulting provides the following financial and credit-related services:</p>

                {[
                  {
                    title: '2.1 Credit Repair Services',
                    intro: 'Professional credit repair services including:',
                    items: [
                      'Credit report analysis across all three major credit bureaus (Experian, Equifax, TransUnion)',
                      'Identification of inaccurate, erroneous, false, or obsolete information on credit reports',
                      'Preparation and submission of dispute letters to credit bureaus and creditors',
                      'Creditor and credit bureau negotiations',
                      'Ongoing credit monitoring and progress tracking through SmartCredit 3-bureau monitoring',
                      'Credit-building guidance and trade line recommendations',
                      'Consultation services, coaching, and personalized action plans',
                      'Consumer education assistance',
                      'Access to client portal for updates and communication',
                    ],
                    note: null,
                  },
                  {
                    title: '2.2 Business Funding Services',
                    intro: 'Business funding consultation and facilitation services connecting clients with lending partners offering various financing solutions, including but not limited to:',
                    items: [
                      '0% interest financing (through approved partners)',
                      'Business credit cards and lines of credit',
                      'Term loans and SBA loans',
                      'Equipment financing and merchant cash advances',
                      'Business credit building strategies',
                    ],
                    note: 'Important: Mesa Group Consulting is not a lender and does not extend credit or make loans. We connect clients with third-party lending partners who make all lending decisions.',
                  },
                  {
                    title: '2.3 Credit Monitoring Services',
                    intro: 'Partnership-based credit monitoring services through SmartCredit providing:',
                    items: [
                      '24/7 credit surveillance across all three major credit bureaus',
                      'Fraud alerts and identity theft protection',
                      'Comprehensive credit reports and credit scores',
                      'Real-time updates on credit changes',
                    ],
                    note: 'Required for Credit Repair Clients: Credit monitoring is mandatory for Mesa360 Credit Repair clients and must remain active throughout the service period. Failure to maintain active monitoring for more than 30 days will result in termination of credit repair services.',
                  },
                  {
                    title: '2.4 DIY Credit Repair Training',
                    intro: 'Educational programs and training materials designed to teach clients self-directed credit repair strategies, delivered through our Skool community platform and other educational resources, including:',
                    items: [
                      'Credit report analysis techniques',
                      'Dispute letter writing and submission',
                      'Credit bureau response interpretation',
                      'Long-term credit management practices',
                      'Credit-building strategies',
                    ],
                    note: null,
                  },
                  {
                    title: '2.5 Financial Consulting Services',
                    intro: 'General financial guidance, credit counseling, financial planning consultations, and advisory services related to:',
                    items: [
                      'Credit optimization and credit score improvement',
                      'Debt management strategies',
                      'Debt-to-income (DTI) ratio calculations and action plans',
                      'Financial goal achievement and budgeting',
                      'Credit-building and trade line recommendations',
                    ],
                    note: null,
                  },
                ].map((svc) => (
                  <div key={svc.title} className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                      {svc.title}
                    </h3>
                    <p className="mb-3">{svc.intro}</p>
                    <ul className="space-y-2">
                      {svc.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {svc.note && <p className="mt-3 font-semibold"><strong>{svc.note}</strong></p>}
                  </div>
                ))}

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                    2.6 Consumer Loan Comparison and Referral Services
                  </h3>
                  <p className="mb-3">Through partnerships with financial comparison platforms, we provide access to:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Personal Loans:</strong> Loan comparison and referral services connecting clients with lenders offering personal loans from $1,000 to $100,000 for debt consolidation, home improvements, major purchases, medical expenses, and other personal needs.</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Auto Loan Refinancing:</strong> Vehicle loan refinancing services connecting clients with lenders offering competitive rates to refinance existing auto loans.</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Student Loan Refinancing:</strong> Student loan refinancing comparison services connecting clients with lenders offering lower rates on existing student loan debt.</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Debt Consolidation Loans:</strong> Specialized loan comparison services for consolidating multiple debts into single monthly payments with lower interest rates.</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Credit Card Comparisons:</strong> Credit card comparison and recommendation services helping clients find credit cards that match their credit profile and financial goals.</span></li>
                  </ul>
                  <p className="mt-3 font-semibold"><strong>Important:</strong> Mesa Group Consulting is not a lender. We provide comparison, education, and referral services only. All lending decisions, terms, rates, and conditions are determined solely by third-party lenders.</p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div id="section-3" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">3</span>
                </div>
                CREDIT REPAIR ORGANIZATIONS ACT (CROA) COMPLIANCE
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Federal Compliance Notice</p>
                      <p>Mesa Group Consulting complies with all federal and state laws governing credit repair services, including but not limited to the Credit Repair Organizations Act (15 U.S.C. § 1679 et seq.) and applicable California state regulations.</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900">3.1 No Advance Fees</h3>
                <p>In compliance with CROA, Mesa Group Consulting does not charge or collect any fees from clients for credit repair services before such services have been fully performed. All fees are charged only after services for the applicable billing period have been completed.</p>

                <h3 className="text-xl font-bold text-gray-900">3.2 Right to Cancel</h3>
                <p>You have the right to cancel your credit repair services contract at any time within three (3) business days from the date you signed the contract without any penalty or obligation. To cancel, you must provide written notice to Mesa Group Consulting via:</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Email: <a href="mailto:contact@mesagroupconsulting.com" className="text-amber-600 hover:text-amber-700 underline">contact@mesagroupconsulting.com</a></span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Mail: MESA & CO CONSULTING LLC, 5001 California Ave, Suite 219, Bakersfield, CA 93309</span></li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900">3.3 Consumer Rights Under CROA</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <p className="font-semibold text-gray-900 mb-3">You Have the Right To:</p>
                  <ul className="space-y-2">
                    {['A detailed written contract explaining your rights and the services provided', 'Cancel within three (3) business days without penalty', 'Sue a credit repair company for violations of CROA', 'File a dispute yourself with credit bureaus at no cost'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <p className="font-semibold text-gray-900 mb-2">Important Disclosures Required by CROA:</p>
                  <p className="mb-2">You have a right to dispute inaccurate information in your credit report by contacting the credit bureau directly. However, neither you nor a credit repair company or credit repair organization has the right to have accurate, current, and verifiable information removed from your credit report.</p>
                  <p className="mb-2">The credit bureau must remove accurate, negative information from your report only if it is over 7 years old. Bankruptcy information can be reported for up to 10 years.</p>
                  <p>You have a right to obtain a copy of your credit report from a credit bureau. You may be charged a reasonable fee. There is no fee, however, if you have been turned down for credit, employment, insurance, or a rental dwelling because of information in your credit report within the preceding 60 days.</p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div id="section-4" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">4</span>
                </div>
                MESA360 CREDIT REPAIR PROGRAM
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <h3 className="text-xl font-bold text-gray-900">4.1 Program Overview</h3>
                <p className="mb-3">The Mesa360 Credit Repair Program includes the following services:</p>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <p className="font-semibold text-gray-900 mb-3">Initial Services:</p>
                  <ul className="space-y-2">
                    {['Professional credit audit across all three credit bureaus (Experian, Equifax, TransUnion)', 'Identification of inaccurate, erroneous, false, or obsolete information', 'Customized action plan with recommended dispute strategies', 'Trade line and credit-building recommendations', 'Initial dispute letter preparation and submission'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <p className="font-semibold text-gray-900 mb-3">Ongoing Monthly Services:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Ongoing support for all originally enrolled items</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Dispute letters for any new or additional items that appear on credit reports while services remain active</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Credit bureau response review and follow-up disputes</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Creditor negotiations and correspondence</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Ongoing consultation and coaching</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Access to client portal for updates and communication (<a href="https://portal.mesagroupconsulting.com/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://portal.mesagroupconsulting.com/</a>)</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Consumer education assistance (one year free or until profile is 75% complete, whichever comes first)</span></li>
                  </ul>
                </div>

                <h3 className="text-xl font-bold text-gray-900">4.2 Client Portal and Communication</h3>
                <p>All updates and communication on your progress will be provided via your client portal at <a href="https://portal.mesagroupconsulting.com/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://portal.mesagroupconsulting.com/</a></p>
                <ul className="space-y-2 ml-6">
                  {['Clients are required to check the portal at least 2 to 3 times per week', 'Any questions or concerns must be submitted through the client portal, allowing 24 to 72 hours for a response', 'Updates to your file are provided every 35 days after you receive confirmation that dispute letters have been sent'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900">4.3 Customer Service</h3>
                <p>Customer Service Number: <a href="tel:+16613103040" className="text-amber-600 hover:text-amber-700 underline">661-310-3040</a></p>
                <p>Available: 9 AM to 7 PM Pacific Time</p>

                <h3 className="text-xl font-bold text-gray-900">4.4 Scope of Services</h3>
                <ul className="space-y-2 ml-6">
                  {["Mesa Group will work on all items originally enrolled and any new items that appear during the course of services, provided the client's monthly fee is paid and account is in good standing", "Client agrees to have consumer documents notarized on their behalf and electronically signed", "Mesa Group is not responsible for any lawsuits against the client or for offering any legal advice"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900">4.5 Data Breach Alerts</h3>
                <p>Fraud alerts may show up on your credit reports due to Mesa Group checking to see if you were affected by a data breach (including, but not limited to, the Equifax breach). These checks assist with your credit repair process.</p>

                <h3 className="text-xl font-bold text-gray-900">4.6 Applying for New Credit</h3>
                <p>The client may apply for new credit during the course of services. However, doing so may slow down the progress of the credit restoration process. Any new accounts or derogatory items that result will still be addressed by Mesa Group as long as the client remains enrolled and in good standing.</p>
              </div>
            </div>

            {/* Section 5 */}
            <div id="section-5" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">5</span>
                </div>
                90-DAY MONEY-BACK GUARANTEE
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>Mesa Group Consulting stands behind the Mesa360 Credit System with complete confidence. If you meet all client responsibilities for the first 90 days and we don't remove at least one verifiable negative item from your credit report, you get 100% of your money back—every dollar you paid to Mesa Group in monthly service fees.</p>

                <h3 className="text-xl font-bold text-gray-900">5.1 How the Guarantee Works</h3>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <p className="font-semibold text-gray-900 mb-3">You Hold Up Your End:</p>
                  <ul className="space-y-2">
                    {['Keep SmartCredit 3-bureau monitoring active for the full 90 days (no 30+ day gaps)', 'Stay responsive to your account manager (no 30+ days of silence)', 'Keep your Mesa account current (no invoices 30+ days past due)', 'Avoid adding new late payments during the 90 days', "Follow your account manager's guidance", 'Provide updated credit reports within 5 days of receiving bureau responses'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <p className="font-semibold text-gray-900 mb-3">We Deliver Results:</p>
                  <ul className="space-y-2">
                    {['Remove at least 1 verifiable negative item within 90 days', 'Provide monthly progress reports and portal access', 'Work your file with advanced dispute methods', 'Escalate violations to our legal team when needed'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-6">
                  <p className="text-lg font-bold text-gray-900">If We Don't Deliver: You get 100% of your money back. Every dollar you paid to Mesa Group in monthly service fees.</p>
                </div>

                <h3 className="text-xl font-bold text-gray-900">5.2 What's NOT Covered by This Guarantee</h3>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 space-y-4">
                  {[
                    { label: 'SmartCredit Monitoring Fees:', desc: 'The monthly SmartCredit subscription is a separate third-party service and is not refundable through Mesa Group. SmartCredit has its own cancellation policy.' },
                    { label: 'Consulting Fee:', desc: 'The one-time Consulting Fee / Credit Audit & Action Plan is non-refundable, as this covers professional work already completed at enrollment.' },
                    { label: 'New Negatives Added During Service:', desc: 'If you add new late payments, new collections, or other new negative items after enrollment, those items are not covered by the removal guarantee. The guarantee applies to items on your report at the time of enrollment.' },
                    { label: 'Accurate, Timely, and Verifiable Information:', desc: 'Federal law (CROA) prohibits us from guaranteeing the removal of accurate information. If bureaus and creditors properly verify that negative items are accurate, complete, and timely, those items may remain on your report despite our best efforts.' },
                  ].map((item, i) => (
                    <div key={i}>
                      <p className="font-semibold text-gray-900 mb-1">{item.label}</p>
                      <p>{item.desc}</p>
                    </div>
                  ))}
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Cases Where Client Responsibilities Aren't Met:</p>
                    <p className="mb-2">To qualify for the guarantee, you must:</p>
                    <ul className="space-y-1 ml-4">
                      {['Keep your SmartCredit monitoring active for the full 90 days (no 30+ day gaps)', "Respond to your account manager's communications (no 30+ days of silence)", 'Keep your Mesa account current (no invoices 30+ days past due)', 'Avoid adding new negative items during the first 90 days (new late payments, collections, charge-offs)', 'Avoid multiple new hard inquiries during the initial dispute period', 'Follow guidance provided by your account manager'].map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900">5.3 Why We Can Offer This Guarantee</h3>
                <p>Because we're that confident in the Mesa360 Credit System™. Most clients see results in the first 30-45 days. We use advanced dispute methods, not cookie-cutter templates. Your dedicated account manager works on your file personally. Our reputation depends on your success.</p>
                <p className="text-lg font-bold text-[#f9c65d]">This is The Mesa360 Guarantee: Real Results in 90 Days — or Your Money Back.</p>
              </div>
            </div>

            {/* Section 6 */}
            <div id="section-6" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">6</span>
                </div>
                CLIENT RESPONSIBILITIES
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <h3 className="text-xl font-bold text-gray-900">6.1 Account Security</h3>
                <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized access or use of your account.</p>

                <h3 className="text-xl font-bold text-gray-900">6.2 Accurate Information</h3>
                <p>You agree to provide true, accurate, current, and complete information when creating an account, submitting forms, or engaging our services. You agree to promptly update any information that becomes inaccurate or incomplete. Failure to provide accurate information may result in suspension or termination of services.</p>

                <h3 className="text-xl font-bold text-gray-900">6.3 Compliance with Laws</h3>
                <p>You agree to use our services in compliance with all applicable federal, state, and local laws and regulations. You will not use our services for any unlawful purpose or in any manner that violates these Terms.</p>

                <h3 className="text-xl font-bold text-gray-900">6.4 Cooperation</h3>
                <p className="mb-3">You agree to cooperate fully with Mesa Group Consulting in the provision of services, including:</p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <ul className="space-y-2">
                    {['Responding to requests for information within a reasonable timeframe', 'Providing necessary documentation (credit reports, creditor correspondence, identification documents)', 'Reviewing communications and following recommended actions promptly', 'Checking your client portal at least 2-3 times per week', 'Responding to account manager inquiries within 30 days'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
                <p className="mt-3">Failure to cooperate may impact the effectiveness of our services and our ability to achieve results.</p>

                <h3 className="text-xl font-bold text-gray-900">6.5 Credit Monitoring Requirement (Credit Repair Clients)</h3>
                <p>Credit repair clients must maintain active SmartCredit 3-bureau credit monitoring throughout the duration of services. Failure to keep active monitoring for more than 30 days will result in termination of credit repair services.</p>

                <h3 className="text-xl font-bold text-gray-900">6.6 Responsiveness</h3>
                <p>If a client becomes unresponsive for 30 consecutive days, Mesa Group reserves the right to cancel the client's account. If a client invoice remains unpaid for more than 30 days, services will be automatically cancelled.</p>

                <h3 className="text-xl font-bold text-gray-900">6.7 No Fraudulent Activity</h3>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex gap-3">
                    <CircleAlert className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <p><strong>Important:</strong> You agree not to provide false or misleading information to Mesa Group Consulting, credit bureaus, creditors, or any third parties. You acknowledge that providing false information or attempting to create a fraudulent credit identity is illegal and grounds for immediate termination of services.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 7 */}
            <div id="section-7" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">7</span>
                </div>
                FEES, PAYMENT, AND REFUNDS
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <h3 className="text-xl font-bold text-gray-900">7.1 Service Fees</h3>
                <p>Fees for services are specified in your individual service agreement or on our website pricing pages. All fees are in U.S. dollars and exclude applicable taxes, which will be added to your invoice where required by law.</p>

                <h3 className="text-xl font-bold text-gray-900">7.2 Credit Repair Services Fee Structure</h3>
                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Consulting Fee / Credit Audit & Action Plan:</p>
                    <p>A one-time enrollment fee is due at the time of signing. This fee covers professional consulting services, including a detailed credit audit and preparation of a customized action plan. This enrollment fee is non-refundable as it compensates for professional work already completed at enrollment.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Monthly Credit Repair Services:</p>
                    <p>Beginning 30 days after enrollment, credit repair services will be billed monthly. Fees are charged in arrears (after services have been performed) in compliance with CROA.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Credit Monitoring Requirement:</p>
                    <p>A monthly fee for SmartCredit 3-bureau credit monitoring is required. This is a separate third-party service billed by SmartCredit, not Mesa Group.</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900">7.3 Business Funding Services</h3>
                <p>Consultation Fees (if applicable): Consultation fees are due at the time of consultation. Mesa Group Consulting may receive compensation from lending partners when clients successfully secure funding, which does not affect the client's cost of services.</p>

                <h3 className="text-xl font-bold text-gray-900">7.4 Credit Monitoring Services</h3>
                <p>Billed according to the terms of your subscription agreement with the third-party monitoring service provider (SmartCredit).</p>

                <h3 className="text-xl font-bold text-gray-900">7.5 DIY Training Services</h3>
                <p>Fees due at the time of purchase or according to the payment plan selected.</p>

                <h3 className="text-xl font-bold text-gray-900">7.6 Payment Methods</h3>
                <p>We accept payments via credit card, debit card, ACH bank transfer, and other methods as specified during enrollment. By providing payment information, you authorize Mesa Group Consulting to charge the specified payment method for all applicable fees.</p>

                <h3 className="text-xl font-bold text-gray-900">7.7 Late Payments</h3>
                <p>Late payments may result in suspension of services until payment is received. Mesa Group Consulting reserves the right to charge a late fee of up to $25 or 5% of the outstanding balance (whichever is less) for payments not received within 10 days of the due date.</p>

                <h3 className="text-xl font-bold text-gray-900">7.8 Refund Policy</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Credit Repair Services:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• Subject to the 90-Day Money-Back Guarantee (see Section 5)</li>
                      <li>• Consulting Fee is non-refundable</li>
                      <li>• Monthly fees are non-refundable once services have been performed for that billing period</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Other Services:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• Refund requests must be submitted in writing to <a href="mailto:contact@mesagroupconsulting.com" className="text-amber-600 hover:text-amber-700 underline">contact@mesagroupconsulting.com</a></li>
                      <li>• Refunds are evaluated on a case-by-case basis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 8 */}
            <div id="section-8" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">8</span>
                </div>
                RESULTS AND DISCLAIMERS
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <CircleAlert className="w-6 h-6 text-yellow-600" />
                    8.1 No Guaranteed Results
                  </h3>
                  <p className="mb-3">While Mesa Group Consulting employs proven strategies and has achieved significant results for thousands of clients (track record of $15M+ in collections deleted for 2,500+ clients and $97M+ in business funding secured), we cannot and do not guarantee specific outcomes, including but not limited to:</p>
                  <ul className="space-y-2">
                    {['Specific credit score increases', 'Removal of any particular negative item', 'Approval for loans, mortgages, or credit cards', 'Specific funding amounts for business financing', 'Timeframes for achieving results'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2"><span className="text-yellow-600 font-bold">•</span><span>{item}</span></li>
                    ))}
                  </ul>
                  <p className="mt-3 font-semibold">Results vary significantly based on individual circumstances, including the nature and accuracy of negative items, creditor and credit bureau responses, client cooperation, and factors outside our control.</p>
                </div>

                <h3 className="text-xl font-bold text-gray-900">8.2 No Legal, Tax, or Investment Advice</h3>
                <p>Mesa Group Consulting provides financial consultation and credit-related services but is not a law firm, tax preparation service, or investment advisory firm. Nothing in these Terms or provided through our services constitutes legal advice, tax advice, investment advice, or comprehensive financial planning (unless specifically contracted). You should consult with licensed attorneys, CPAs, financial advisors, or other qualified professionals for specialized advice related to your specific situation.</p>

                <h3 className="text-xl font-bold text-gray-900">8.3 Not a Lender</h3>
                <p>Mesa Group Consulting is not a lender and does not extend credit or make loans. Our business funding services connect clients with third-party lending partners. All lending decisions, terms, rates, and conditions are determined solely by the lending partners, not by Mesa Group Consulting.</p>

                <h3 className="text-xl font-bold text-gray-900">8.4 Third-Party Services</h3>
                <p className="mb-3">Certain services may involve partnerships with third-party providers. Mesa Group Consulting is not responsible for the actions, services, terms, or privacy practices of these third parties.</p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <p className="font-semibold text-gray-900 mb-2">Key Third-Party Partners:</p>
                  <ul className="space-y-1">
                    {['SmartCredit: Credit monitoring services', 'Novae: Business funding and debt relief (business and personal)', 'Impruvu: Business funding services', 'CreditVersio: DIY platform for GetCreditly.com (white-label partner)', 'SuperMoney: Financial product comparisons (personal loans, auto refinancing, student loans, debt consolidation, credit cards)', 'Ava Finance: Credit building platform', 'CreditStrong: Credit building and installment loans', 'Self: Credit builder loans', 'RentReporters, Rental Kharma, BoomPay: Rent reporting services', 'Experian Boost: Free credit building tool', 'PolicyGenius: Life insurance comparison platform', 'Trust & Will: Estate planning document platform', 'Various Lenders: Personal loans, auto loans, student loans, debt consolidation through SuperMoney network'].map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <h3 className="text-xl font-bold text-gray-900">8.5 Credit Bureau Responses</h3>
                <p>Credit bureaus and creditors make independent decisions regarding disputes and investigations. Mesa Group Consulting cannot control or influence these decisions. Bureaus may verify negative items as accurate, refuse to investigate, or require additional information, which may affect results.</p>
              </div>
            </div>

            {/* Section 9 */}
            <div id="section-9" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">9</span>
                </div>
                INTELLECTUAL PROPERTY RIGHTS
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <h3 className="text-xl font-bold text-gray-900">9.1 Ownership</h3>
                <p>All content, materials, features, functionality, software, designs, graphics, text, logos, images, trademarks, service marks, and other intellectual property available through our website and services are owned by Mesa Group Consulting or our licensors and are protected by copyright, trademark, patent, trade secret, and other intellectual property laws.</p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <p className="font-semibold text-gray-900 mb-2">Trademarks:</p>
                  <ul className="space-y-1">
                    {['Mesa Group Consulting®', 'Mesa360 Credit System™', 'Mesa Financiera™', 'Get Creditly™', 'Mesa Money™'].map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <h3 className="text-xl font-bold text-gray-900">9.2 Limited License</h3>
                <p className="mb-3">Subject to your compliance with these Terms, Mesa Group Consulting grants you a limited, non-exclusive, non-transferable, revocable license to access and use our website and services for personal, non-commercial purposes. This license does not include:</p>
                <ul className="space-y-2 ml-6">
                  {['Resale or commercial use of our services or Content', 'Collection and use of product listings, descriptions, or prices', 'Derivative use of our services or Content', 'Downloading or copying of account information for the benefit of another party', 'Use of data mining, robots, or similar data gathering tools'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-red-600 font-bold">•</span><span>{item}</span></li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900">9.3 Restrictions</h3>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <ul className="space-y-2">
                    {['Modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any Content without express written permission', 'Remove or alter any copyright, trademark, or other proprietary notices', 'Use our name, trademarks, or logos without prior written consent', 'Reverse engineer, decompile, or disassemble any software or technology used in our services', 'Attempt to gain unauthorized access to our systems or networks'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2"><CircleAlert className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 10 */}
            <div id="section-10" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">10</span>
                </div>
                USER CONTENT AND SUBMISSIONS
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <h3 className="text-xl font-bold text-gray-900">10.1 User Content</h3>
                <p>You may have the opportunity to submit content, including but not limited to reviews, testimonials, comments, questions, feedback, or other communications ("User Content"). You retain ownership of your User Content, but by submitting it to Mesa Group Consulting, you grant us a perpetual, irrevocable, worldwide, royalty-free, non-exclusive, transferable license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, perform, and display such User Content in any media format and through any media channel.</p>

                <h3 className="text-xl font-bold text-gray-900">10.2 Content Standards</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <p className="mb-3">All User Content must:</p>
                  <ul className="space-y-2">
                    {['Be accurate and not misleading', 'Comply with applicable laws and regulations', 'Not infringe any intellectual property rights', 'Not contain defamatory, obscene, offensive, or illegal content', 'Not contain viruses, malware, or other harmful code', 'Not impersonate any person or entity'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                    ))}
                  </ul>
                </div>

                <h3 className="text-xl font-bold text-gray-900">10.3 Monitoring and Removal</h3>
                <p>Mesa Group Consulting reserves the right (but has no obligation) to monitor, review, edit, or remove User Content that violates these Terms or is otherwise objectionable, without notice and at our sole discretion.</p>
              </div>
            </div>

            {/* Section 11 */}
            <div id="section-11" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">11</span>
                </div>
                PRIVACY AND DATA PROTECTION
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <h3 className="text-xl font-bold text-gray-900">11.1 Privacy Policy</h3>
                <p>Your privacy is important to us. Our collection, use, storage, and protection of your personal information is governed by our <a href="/privacy-policy" className="text-amber-600 hover:text-amber-700 underline">Privacy Policy</a>, which is incorporated into these Terms by reference. By using our services, you consent to the practices described in our Privacy Policy.</p>

                <h3 className="text-xl font-bold text-gray-900">11.2 Confidential Information</h3>
                <p>Mesa Group Consulting agrees to maintain the confidentiality of your personal and financial information in accordance with applicable law, including but not limited to the Gramm-Leach-Bliley Act (GLBA) and California Consumer Privacy Act (CCPA).</p>

                <h3 className="text-xl font-bold text-gray-900">11.3 Credit Bureau Authorization</h3>
                <p>By engaging credit repair or credit monitoring services, you authorize Mesa Group Consulting and our designated representatives to obtain your consumer credit reports from one or more credit bureaus for the purposes of providing services. This authorization continues throughout the duration of our service relationship.</p>

                <h3 className="text-xl font-bold text-gray-900">11.4 Third-Party Sharing</h3>
                <p>Mesa Group Consulting may share your information with third parties only as necessary to provide services (e.g., credit bureaus, creditors, lending partners) or as required by law. We do not sell your personal information to third parties.</p>

                <h3 className="text-xl font-bold text-gray-900">11.5 Data Security</h3>
                <p>We implement industry-standard security measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.</p>
              </div>
            </div>

            {/* Section 12 */}
            <div id="section-12" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">12</span>
                </div>
                LIMITATION OF LIABILITY
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">12.1 Maximum Liability Cap</h3>
                  <p className="font-bold text-red-900">TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE TOTAL LIABILITY OF MESA GROUP CONSULTING FOR ANY AND ALL CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR OUR SERVICES, WHETHER IN CONTRACT, TORT, OR OTHERWISE, SHALL NOT EXCEED THE TOTAL AMOUNT OF FEES PAID BY YOU TO MESA GROUP CONSULTING IN THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO LIABILITY.</p>
                </div>

                <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">12.2 Exclusion of Consequential Damages</h3>
                  <p className="font-bold text-red-900 mb-3">TO THE MAXIMUM EXTENT PERMITTED BY LAW, MESA GROUP CONSULTING SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO:</p>
                  <ul className="space-y-2">
                    {['Lost profits, lost revenue, or lost business opportunities', 'Loss of data or information', 'Cost of substitute services', 'Business interruption or work stoppage', 'Loss of goodwill or reputation', 'Emotional distress or mental anguish', 'Denial of loan applications or credit products', 'Higher interest rates or unfavorable lending terms'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2"><span className="text-red-600 font-bold">•</span><span className="font-semibold">{item}</span></li>
                    ))}
                  </ul>
                  <p className="mt-3 font-bold text-red-900">THIS LIMITATION APPLIES REGARDLESS OF WHETHER MESA GROUP CONSULTING HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES AND REGARDLESS OF THE LEGAL THEORY ON WHICH THE CLAIM IS BASED.</p>
                </div>

                <h3 className="text-xl font-bold text-gray-900">12.3 Basis of the Bargain</h3>
                <p>You acknowledge and agree that these limitations of liability are fundamental elements of the agreement between you and Mesa Group Consulting. Our fees and service pricing reflect these limitations. Without these limitations, we would not be able to provide services at our current pricing structure.</p>

                <h3 className="text-xl font-bold text-gray-900">12.4 Jurisdictional Limitations</h3>
                <p>Some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages. In such jurisdictions, our liability is limited to the maximum extent permitted by applicable law.</p>
              </div>
            </div>

            {/* Section 13 */}
            <div id="section-13" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">13</span>
                </div>
                INDEMNIFICATION
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>You agree to indemnify, defend, and hold harmless Mesa Group Consulting, its officers, directors, employees, agents, affiliates, successors, and assigns from and against any and all losses, damages, liabilities, deficiencies, claims, actions, judgments, settlements, interest, awards, penalties, fines, costs, or expenses of whatever kind (including reasonable attorneys' fees) arising from or relating to:</p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <ul className="space-y-2">
                    {['Your use or misuse of our services or website', 'Your breach of these Terms or any representation, warranty, or covenant herein', 'Your violation of any law, regulation, or third-party rights', 'Any false, inaccurate, or misleading information you provide', 'Your User Content or any content you submit', 'Any dispute between you and any third party', 'Any negligent or willful misconduct on your part'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
                <p>This indemnification obligation will survive termination of these Terms and your use of our services.</p>
              </div>
            </div>

            {/* Section 14 */}
            <div id="section-14" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">14</span>
                </div>
                DISPUTE RESOLUTION AND ARBITRATION
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">14.1 Mandatory Arbitration Agreement</h3>
                  <p className="font-bold text-red-900">YOU AND MESA GROUP CONSULTING AGREE THAT ANY DISPUTE, CLAIM, OR CONTROVERSY ARISING OUT OF OR RELATING TO THESE TERMS OR OUR SERVICES (COLLECTIVELY, "DISPUTES") WILL BE SETTLED BY BINDING ARBITRATION, EXCEPT AS PROVIDED BELOW. ARBITRATION REPLACES THE RIGHT TO GO TO COURT, INCLUDING THE RIGHT TO A JURY TRIAL AND THE RIGHT TO PARTICIPATE IN A CLASS ACTION OR SIMILAR PROCEEDING.</p>
                </div>

                <h3 className="text-xl font-bold text-gray-900">14.2 Arbitration Procedures</h3>
                <p>Any Dispute will be resolved through final and binding arbitration administered by the American Arbitration Association ("AAA") under its Consumer Arbitration Rules then in effect, except as modified by this Agreement. The arbitration will be conducted in Kern County, California, or at another mutually agreeable location, unless the parties agree to conduct the arbitration by telephone or based solely on written submissions.</p>

                <h3 className="text-xl font-bold text-gray-900">14.3 Arbitration Costs</h3>
                <p>Each party will be responsible for paying their own attorneys' fees and costs unless otherwise required by applicable law or the arbitrator's award. Mesa Group Consulting will pay all AAA filing, administration, and arbitrator fees for claims under $10,000, unless the arbitrator finds the claims frivolous.</p>

                <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">14.4 Individual Arbitration Only</h3>
                  <p className="font-bold text-red-900">YOU AND MESA GROUP CONSULTING AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN AN INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS, REPRESENTATIVE, OR COLLECTIVE ACTION OR PROCEEDING.</p>
                </div>

                <h3 className="text-xl font-bold text-gray-900">14.5 Exceptions to Arbitration</h3>
                <ul className="space-y-2 ml-6">
                  {['Bring an individual action in small claims court if the claim qualifies', 'Seek injunctive or equitable relief in court to prevent infringement of intellectual property rights or unauthorized access to our systems'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900">14.6 Opt-Out Right</h3>
                <p>You have the right to opt out of this arbitration agreement by sending written notice within thirty (30) days of first accepting these Terms to:</p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <p><strong>MESA & CO CONSULTING LLC</strong></p>
                  <p>5001 California Ave, Suite 219</p>
                  <p>Bakersfield, CA 93309</p>
                  <p className="mt-2">Or via email: <a href="mailto:contact@mesagroupconsulting.com" className="text-amber-600 hover:text-amber-700 underline">contact@mesagroupconsulting.com</a></p>
                </div>

                <h3 className="text-xl font-bold text-gray-900">14.7 Governing Law</h3>
                <p>These Terms and any Disputes will be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law principles. If arbitration does not apply for any reason, you agree to submit to the exclusive jurisdiction of the state and federal courts located in Kern County, California.</p>
              </div>
            </div>

            {/* Section 15 */}
            <div id="section-15" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">15</span>
                </div>
                TERMINATION
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <h3 className="text-xl font-bold text-gray-900">15.1 Termination by Client</h3>
                <p>You may terminate your service agreement at any time by providing written notice to Mesa Group Consulting. Credit repair clients have the right to cancel within three (3) business days without penalty as required by CROA. After the cancellation period, fees for services already rendered are non-refundable unless otherwise specified in your service agreement or covered by the 90-Day Money-Back Guarantee.</p>

                <h3 className="text-xl font-bold text-gray-900">15.2 Termination by Mesa Group</h3>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <p className="mb-3">Mesa Group Consulting reserves the right to suspend or terminate your access to services immediately, without notice, for any reason, including but not limited to:</p>
                  <ul className="space-y-2">
                    {['Breach of these Terms', 'Providing false or misleading information', 'Failure to pay fees when due', 'Non-cooperation or failure to respond to communications (30+ days unresponsive)', 'Failure to maintain required credit monitoring (30+ days inactive)', 'Fraudulent activity or illegal conduct', 'Abusive, threatening, or disrespectful behavior toward staff', 'Any conduct that we determine, in our sole discretion, is harmful to our business or reputation'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2"><CircleAlert className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                    ))}
                  </ul>
                </div>

                <h3 className="text-xl font-bold text-gray-900">15.3 Effect of Termination</h3>
                <ul className="space-y-2 ml-6">
                  {['Your right to access and use our services will immediately cease', 'You remain responsible for all fees incurred prior to termination', 'Sections of these Terms that by their nature should survive termination will continue to apply, including intellectual property rights, disclaimers, limitations of liability, indemnification, dispute resolution, and governing law provisions', 'Mesa Group Consulting will cease all credit repair work on your behalf but is not required to reverse actions already taken'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Section 16 */}
            <div id="section-16" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">16</span>
                </div>
                MISCELLANEOUS PROVISIONS
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                {[
                  { title: '16.1 Entire Agreement', body: <>These Terms, together with any service-specific agreements, our <a href="/privacy-policy" className="text-amber-600 hover:text-amber-700 underline">Privacy Policy</a>, <a href="/california-privacy-policy" className="text-amber-600 hover:text-amber-700 underline">California Privacy Policy</a>, <a href="/cookie-policy" className="text-amber-600 hover:text-amber-700 underline">Cookie Policy</a>, <a href="/tcpa-consent-policy" className="text-amber-600 hover:text-amber-700 underline">TCPA Consent Policy</a>, <a href="/disclaimer" className="text-amber-600 hover:text-amber-700 underline">Disclaimer</a>, <a href="/affiliate-disclosure" className="text-amber-600 hover:text-amber-700 underline">Affiliate Disclosure</a>, <a href="/accessibility-statement" className="text-amber-600 hover:text-amber-700 underline">Accessibility Statement</a>, and any other policies referenced herein, constitute the entire agreement between you and Mesa Group Consulting and supersede all prior or contemporaneous communications or understandings.</> },
                  { title: '16.2 Amendments', body: 'Mesa Group Consulting reserves the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website with a new "Last Updated" date or by sending notice to the email address associated with your account. Your continued use of our services after changes become effective constitutes acceptance of the modified Terms.' },
                  { title: '16.3 Severability', body: 'If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions will continue in full force and effect.' },
                  { title: '16.4 Waiver', body: "No waiver of any provision of these Terms will be deemed a further or continuing waiver. Mesa Group Consulting's failure to enforce any right or provision will not constitute a waiver of that right or provision." },
                  { title: '16.5 Assignment', body: "You may not assign, transfer, or delegate these Terms without Mesa Group Consulting's prior written consent. Mesa Group Consulting may assign these Terms without restriction." },
                  { title: '16.6 Force Majeure', body: 'Mesa Group Consulting will not be liable for any delay or failure to perform obligations under these Terms due to causes beyond our reasonable control, including but not limited to acts of God, war, terrorism, pandemics, or shortages of transportation, facilities, fuel, energy, labor, or materials.' },
                  { title: '16.7 Independent Contractors', body: 'Nothing in these Terms creates a partnership, joint venture, agency, employment, or franchise relationship between you and Mesa Group Consulting.' },
                  { title: '16.8 No Third-Party Beneficiaries', body: 'These Terms are for the sole benefit of you and Mesa Group Consulting and do not create any third-party beneficiary rights.' },
                  { title: '16.9 Headings', body: 'The headings and section titles in these Terms are for convenience only and have no legal or contractual effect.' },
                  { title: '16.10 Language', body: 'If these Terms are translated into any language other than English, the English language version will control in the event of any conflict or discrepancy.' },
                ].map((item) => (
                  <div key={item.title}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 17 */}
            <div id="section-17" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">17</span>
                </div>
                CONTACT INFORMATION
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>If you have any questions, concerns, or complaints about these Terms or our services, please contact us:</p>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Mesa Group Consulting</h3>
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
                  <div className="mt-6 pt-6 border-t border-amber-200">
                    <p className="font-semibold text-gray-900 mb-2">Customer Service (Credit Repair Clients):</p>
                    <p><a href="tel:+16613103040" className="text-amber-600 hover:text-amber-700 underline">661-310-3040</a>, available 9 AM to 7 PM Pacific Time</p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-amber-200">
                    <p className="font-semibold text-gray-900 mb-2">Client Portal:</p>
                    <a href="https://portal.mesagroupconsulting.com/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://portal.mesagroupconsulting.com/</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 18 */}
            <div id="section-18" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">18</span>
                </div>
                CALIFORNIA-SPECIFIC NOTICES
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <h3 className="text-xl font-bold text-gray-900">18.1 California Residents</h3>
                <p>Under California Civil Code Section 1789.3, California residents are entitled to the following specific consumer rights information:</p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <p className="font-semibold text-gray-900 mb-2">Complaint Assistance:</p>
                  <p>The Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs may be contacted in writing at 1625 North Market Blvd., Suite N-112, Sacramento, CA 95834, or by telephone at (916) 445-1254 or (800) 952-5210.</p>
                </div>

                <h3 className="text-xl font-bold text-gray-900">18.2 California Consumer Privacy Act (CCPA)</h3>
                <p>California residents have specific rights under the CCPA regarding their personal information. For details on how we collect, use, and protect your information, and your rights under the CCPA, please review our <a href="/california-privacy-policy" className="text-amber-600 hover:text-amber-700 underline">California Privacy Policy</a>.</p>

                <h3 className="text-xl font-bold text-gray-900">18.3 California Credit Services Act</h3>
                <p>Under California Civil Code Section 1789.15, you have the right to obtain a copy of your credit file from a consumer credit reporting agency. You may be charged a reasonable fee not exceeding eight dollars ($8). There is no fee if you have been turned down for credit, employment, insurance, or a rental dwelling within the preceding 60 days.</p>
              </div>
            </div>

            {/* Section 19 */}
            <div id="section-19" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">19</span>
                </div>
                ACKNOWLEDGMENT
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 border-2 border-amber-400 rounded-xl p-8">
                  <p className="text-lg font-bold text-gray-900 mb-4">
                    BY ACCESSING OUR WEBSITE, CREATING AN ACCOUNT, ENGAGING OUR SERVICES, OR CLICKING "I AGREE," YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS & CONDITIONS IN THEIR ENTIRETY, INCLUDING THE CREDIT REPAIR SERVICES PROVISIONS, 90-DAY MONEY-BACK GUARANTEE, CLIENT RESPONSIBILITIES, AND ALL INCORPORATED POLICIES.
                  </p>
                  <p className="text-lg font-bold text-red-900">
                    IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST NOT ACCESS OR USE OUR WEBSITE OR SERVICES.
                  </p>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <p className="font-semibold text-gray-900 mb-3">For Credit Repair Clients:</p>
                  <p className="mb-3">By enrolling in Mesa Group Consulting's credit repair services, you specifically acknowledge and agree to:</p>
                  <ul className="space-y-2">
                    {['The credit repair fee structure (enrollment fee, monthly service fees, and credit monitoring subscription)', 'The requirement to maintain active SmartCredit credit monitoring throughout the service period', 'The 90-Day Money-Back Guarantee terms and conditions', 'Client responsibilities including portal monitoring, responsiveness, and cooperation', 'Your rights under CROA, including the right to cancel within 3 business days'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                    ))}
                  </ul>
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

export default TermsAndConditions;
