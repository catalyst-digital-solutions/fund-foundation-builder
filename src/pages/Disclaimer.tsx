import React from 'react';
import {
  AlertTriangle,
  FileText,
  CircleAlert,
  Shield,
  CheckCircle2,
  MapPin,
  Mail,
  Phone,
  Globe
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEO';

const Disclaimer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Disclaimer | Mesa Group Consulting"
        description="Read Mesa Group Consulting's legal disclaimers covering services, results, third-party partnerships, liability limitations, and more."
        canonicalUrl="/disclaimer"
      />
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-12 md:py-16 border-b-2 border-amber-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <span className="text-sm font-medium text-gray-700">Legal Document</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="text-[#f9c65d]">Disclaimer</span>
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
              Please read these disclaimers carefully before using Mesa Group Consulting's website or services. By accessing our website or engaging our services, you acknowledge and agree to the following:
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
              { id: 'section-1', title: '1. General Disclaimer' },
              { id: 'section-2', title: '2. No Guaranteed Results' },
              { id: 'section-3', title: '3. Credit Repair Disclaimers' },
              { id: 'section-4', title: '4. Business Funding Disclaimers' },
              { id: 'section-5', title: '5. Not a Lender' },
              { id: 'section-6', title: '6. No Legal, Tax, or Investment Advice' },
              { id: 'section-7', title: '7. Third-Party Services and Partnerships' },
              { id: 'section-8', title: '8. Affiliate Marketing Disclosure' },
              { id: 'section-9', title: '9. Credit Bureau and Creditor Responses' },
              { id: 'section-10', title: '10. Website Content and Accuracy' },
              { id: 'section-11', title: '11. Limitation of Liability' },
              { id: 'section-12', title: '12. External Links' },
              { id: 'section-13', title: '13. Testimonials and Results' },
              { id: 'section-14', title: '14. Educational Content' },
              { id: 'section-15', title: '15. Contact Information' },
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

            {/* Section 1: General Disclaimer */}
            <div id="section-1" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">1</span>
                </div>
                GENERAL DISCLAIMER
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The information provided on www.mesagroupconsulting.com and through Mesa Group Consulting's services is for general informational purposes only. While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website for any purpose.
                </p>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex gap-3">
                    <CircleAlert className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <p>Any reliance you place on such information is strictly at your own risk. In no event will Mesa Group Consulting be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website or services.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: No Guaranteed Results */}
            <div id="section-2" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">2</span>
                </div>
                NO GUARANTEED RESULTS
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <h3 className="text-xl font-bold text-gray-900">2.1 Credit Repair Results</h3>
                <p>Mesa Group Consulting provides credit repair services designed to help you improve your credit profile. However, <strong>we do not guarantee specific results</strong>, including but not limited to:</p>
                <ul className="space-y-2 ml-6">
                  {['Deletion of negative items from your credit reports', 'Improvement in your credit score by a specific number of points', 'Approval for credit, loans, or financing', 'Reduction in interest rates or monthly payments', 'Specific timelines for achieving results'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-6">2.2 Business Funding Results</h3>
                <p>Mesa Group Consulting provides business funding consulting and referral services. However, <strong>we do not guarantee approval</strong> for business loans, lines of credit, or other financing products. Lending decisions are made by third-party lenders, and approval depends on your business's creditworthiness, financial health, and lender criteria.</p>

                <h3 className="text-xl font-bold text-gray-900 mt-6">2.3 Factors Beyond Our Control</h3>
                <p>Credit repair and business funding results depend on many factors beyond Mesa Group Consulting's control, including:</p>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex gap-3">
                    <CircleAlert className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <ul className="space-y-2">
                      {['Your credit history, payment history, and credit utilization', 'Credit bureau and creditor policies and responses', 'The accuracy and verifiability of negative items on your credit reports', 'Your cooperation and responsiveness during the process', 'Your financial behavior during the service period (e.g., new debts, missed payments)', 'Lender underwriting criteria and risk tolerance', 'Economic conditions, interest rates, and market factors'].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Credit Repair Disclaimers */}
            <div id="section-3" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">3</span>
                </div>
                CREDIT REPAIR DISCLAIMERS
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <h3 className="text-xl font-bold text-gray-900">3.1 CROA Compliance</h3>
                <p>Mesa Group Consulting is a credit repair organization as defined under the federal <strong>Credit Repair Organizations Act (CROA)</strong> and complies with all applicable federal and state laws, including California's Rees-Levering Automobile Sales Finance Act.</p>

                <h3 className="text-xl font-bold text-gray-900 mt-6">3.2 Right to Dispute on Your Own</h3>
                <p><strong>You have the right to dispute inaccurate information</strong> on your credit reports yourself, at no cost, by contacting the credit bureaus (Experian, Equifax, TransUnion) directly. You may also contact creditors directly to dispute inaccuracies. Mesa Group Consulting provides credit repair services as a convenience, but you are not required to hire us to exercise your rights.</p>

                <h3 className="text-xl font-bold text-gray-900 mt-6">3.3 Results Vary</h3>
                <p>Results from credit repair services vary by individual. While Mesa Group Consulting uses proven strategies and works diligently on behalf of clients, we cannot guarantee:</p>
                <ul className="space-y-2 ml-6">
                  {['Removal of negative items (late payments, charge-offs, collections, bankruptcies, foreclosures, etc.)', 'Specific credit score increases', 'Approval for credit, loans, mortgages, or financing', 'Specific timelines for achieving results'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-6">3.4 Credit Repair Organizations Act (CROA) Notice</h3>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex gap-3">
                    <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Consumer Credit File Rights Under State and Federal Law</p>
                      <p>You have a right to dispute inaccurate information in your credit report by contacting the credit bureau directly. However, neither you nor any credit repair company or credit repair organization has the right to have accurate, current, and verifiable information removed from your credit report. The credit bureau must remove accurate, negative information from your report only if it is over 7 years old. Bankruptcy information can be reported for 10 years.</p>
                      <p className="mt-2">You have a right to obtain a copy of your credit report from a credit bureau. You may be charged a reasonable fee. There is no fee, however, if you have been turned down for credit, employment, insurance, or a rental dwelling because of information in your credit report within the preceding 60 days. The credit bureau must provide someone to help you interpret the information in your credit file. You are entitled to receive a free copy of your credit report if you are unemployed and intend to apply for employment in the next 60 days, if you are a recipient of public welfare assistance, or if you have reason to believe that there is inaccurate information in your credit report due to fraud.</p>
                      <p className="mt-2">You have a right to sue a credit repair organization that violates the Credit Repair Organization Act. This law prohibits deceptive practices by credit repair organizations.</p>
                      <p className="mt-2">You have the right to cancel your contract with any credit repair organization for any reason within 3 business days from the date you signed it.</p>
                      <p className="mt-2">Credit bureaus are required to follow reasonable procedures to ensure that the information they report is accurate. However, mistakes may occur.</p>
                      <p className="mt-2">You may, on your own, notify a credit bureau in writing that you dispute the accuracy of information in your credit file. The credit bureau must then reinvestigate and modify or remove inaccurate or incomplete information. The credit bureau may not charge any fee for this service. Any pertinent information and copies of all documents you have concerning an error should be given to the credit bureau.</p>
                      <p className="mt-2">If the credit bureau's reinvestigation does not resolve the dispute to your satisfaction, you may send a brief statement to the credit bureau, to be kept in your file, explaining why you think the record is inaccurate. The credit bureau must include a summary of your statement about disputed information with any report it issues about you.</p>
                      <p className="mt-2">The Federal Trade Commission regulates credit bureaus and credit repair organizations. For more information contact:</p>
                      <p className="mt-2">
                        <strong>The Public Reference Branch</strong><br />
                        Federal Trade Commission<br />
                        Washington, D.C. 20580
                      </p>
                      <p className="mt-2">For a complete copy of your rights under CROA, please refer to our <a href="/terms-and-conditions" className="text-amber-600 hover:text-amber-700 underline">Terms & Conditions</a>.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Business Funding Disclaimers */}
            <div id="section-4" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">4</span>
                </div>
                BUSINESS FUNDING DISCLAIMERS
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <h3 className="text-xl font-bold text-gray-900">4.1 No Guarantee of Funding Approval</h3>
                <p>Mesa Group Consulting provides business funding consulting and referral services to help you explore financing options. However, <strong>we do not guarantee approval</strong> for business loans, lines of credit, merchant cash advances, equipment financing, or other funding products. All lending decisions are made by third-party lenders based on their underwriting criteria.</p>

                <h3 className="text-xl font-bold text-gray-900 mt-6">4.2 Lender Decisions</h3>
                <p>Lenders make independent decisions based on:</p>
                <ul className="space-y-2 ml-6">
                  {['Your business credit profile and personal credit profile', "Your business's financial health (revenue, profit, cash flow)", 'Time in business and industry risk', 'Collateral, assets, or guarantees', 'Economic conditions and market factors'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-6">4.3 Funding Terms</h3>
                <p>Mesa Group Consulting does not control or guarantee:</p>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex gap-3">
                    <CircleAlert className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <ul className="space-y-2">
                      {['Loan amounts or credit limits', 'Interest rates, APR, or factor rates', 'Repayment terms, monthly payments, or payment schedules', 'Fees, origination costs, or closing costs', 'Approval timelines or funding speed'].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5: Not a Lender */}
            <div id="section-5" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">5</span>
                </div>
                NOT A LENDER
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex gap-3">
                    <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Important Notice</p>
                      <p>Mesa Group Consulting is <strong>not a lender</strong> and does not make credit decisions or provide financing. We are a consulting and referral service that connects clients with third-party lenders, funding partners, and financial service providers.</p>
                      <p className="mt-2">Mesa Group Consulting does not:</p>
                      <ul className="space-y-2 mt-2">
                        {['Issue loans, lines of credit, or financing', 'Make credit decisions or approve/deny applications', 'Set interest rates, fees, or loan terms', 'Control lender underwriting criteria or approval processes'].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-2">All lending decisions are made by third-party lenders. Mesa Group Consulting may receive referral fees or commissions from lending partners, but this does not affect your cost or loan terms.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6: No Legal, Tax, or Investment Advice */}
            <div id="section-6" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">6</span>
                </div>
                NO LEGAL, TAX, OR INVESTMENT ADVICE
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <h3 className="text-xl font-bold text-gray-900">6.1 Not Legal Advice</h3>
                <p>Mesa Group Consulting is not a law firm and does not provide legal advice. Nothing on our website or in our services should be construed as legal advice. For legal advice regarding:</p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <ul className="space-y-2">
                    {['Credit disputes or lawsuits', 'Debt collection or creditor harassment', 'Consumer rights or FCRA violations', 'Business legal matters', 'Contracts or agreements'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-gray-600">Please consult a licensed attorney.</p>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-6">6.2 Not Tax Advice</h3>
                <p>Mesa Group Consulting is not a tax preparation service and does not provide tax advice. For questions regarding:</p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <ul className="space-y-2">
                    {['Tax implications of debt settlement or forgiveness', 'Business tax planning or deductions', 'IRS reporting requirements', 'Tax consequences of financial decisions'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-gray-600">Please consult a Certified Public Accountant (CPA) or tax professional.</p>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-6">6.3 Not Investment Advice</h3>
                <p>Mesa Group Consulting is not a registered investment advisor (RIA) and does not provide investment advice. Our services do not constitute:</p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <ul className="space-y-2">
                    {['Investment recommendations', 'Securities analysis or portfolio management', 'Financial planning or wealth management', 'Retirement planning or investment strategy'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-gray-600">For investment advice, please consult a licensed financial advisor or registered investment advisor (RIA).</p>
                </div>
              </div>
            </div>

            {/* Section 7: Third-Party Services and Partnerships */}
            <div id="section-7" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">7</span>
                </div>
                THIRD-PARTY SERVICES AND PARTNERSHIPS
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Mesa Group Consulting partners with third-party service providers to deliver certain services, including:</p>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                    Service Partners
                  </h3>
                  <ul className="space-y-2">
                    {[
                      { label: 'SmartCredit:', desc: 'Credit monitoring services' },
                      { label: 'Novae:', desc: 'Business funding and debt relief (business and personal)' },
                      { label: 'Impruvu:', desc: 'Business funding services' },
                      { label: 'CreditVersio:', desc: 'DIY platform for GetCreditly.com (white-label partner)' },
                      { label: 'SuperMoney:', desc: 'Financial product comparisons (personal loans, auto refinancing, student loans, debt consolidation, credit cards)' },
                      { label: 'Ava Finance, CreditStrong, Self:', desc: 'Credit building platforms' },
                      { label: 'RentReporters, Rental Kharma, BoomPay, Experian Boost:', desc: 'Credit building and rent reporting services' },
                      { label: 'PolicyGenius:', desc: 'Life insurance comparison platform' },
                      { label: 'Trust & Will:', desc: 'Estate planning document platform' },
                      { label: 'Various Lenders:', desc: 'Through SuperMoney and other lending networks' },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>{item.label}</strong> {item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex gap-3">
                    <CircleAlert className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Important Disclaimers</p>
                      <ul className="space-y-2">
                        {['Mesa Group Consulting is not responsible for the actions, services, products, terms, privacy practices, or policies of third-party partners', 'Third-party services are subject to their own terms and conditions and privacy policies', 'Mesa Group Consulting does not guarantee the accuracy, reliability, or performance of third-party services', 'Issues with third-party services should be directed to the third-party provider'].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4 text-sm"><strong>Recommendation:</strong> Review the terms, conditions, and privacy policies of any third-party service before using it.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 8: Affiliate Marketing Disclosure */}
            <div id="section-8" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">8</span>
                </div>
                AFFILIATE MARKETING DISCLOSURE
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Mesa Group Consulting participates in affiliate marketing programs and may receive compensation from third-party partners when clients enroll in services or products offered by those partners.</p>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">How Affiliate Marketing Works</h3>
                  <ul className="space-y-2">
                    {['When you click on certain links or enroll in partner services, Mesa Group Consulting may receive a commission or referral fee', 'This compensation is paid by the partner company, not by you', 'Your cost for services is the same whether or not Mesa Group receives compensation'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-6">Affiliate Relationships</h3>
                <p>Mesa Group Consulting has affiliate relationships with:</p>
                <ul className="space-y-2 ml-6">
                  {['Lending partners (business funding)', 'Credit monitoring services (SmartCredit)', 'Financial product comparison platforms (SuperMoney)', 'Other financial service providers'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-6">Our Commitment</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <p className="font-semibold text-gray-900 mb-3">Despite these affiliate relationships, Mesa Group Consulting is committed to:</p>
                  <ul className="space-y-2">
                    {['Providing honest, unbiased recommendations', 'Disclosing affiliate relationships clearly', 'Recommending only services we believe are beneficial to clients', 'Complying with FTC affiliate disclosure requirements'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-4">For more details, see our dedicated <a href="/affiliate-disclosure" className="text-amber-600 hover:text-amber-700 underline">Affiliate Disclosure</a> page.</p>
              </div>
            </div>

            {/* Section 9: Credit Bureau and Creditor Responses */}
            <div id="section-9" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">9</span>
                </div>
                CREDIT BUREAU AND CREDITOR RESPONSES
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <h3 className="text-xl font-bold text-gray-900">9.1 Independent Decisions</h3>
                <p>Credit bureaus (Experian, Equifax, TransUnion) and creditors make independent decisions regarding credit disputes and investigations. Mesa Group Consulting cannot control or influence these decisions.</p>

                <h3 className="text-xl font-bold text-gray-900 mt-6">9.2 Possible Outcomes</h3>
                <p>When credit disputes are submitted, credit bureaus and creditors may:</p>
                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <ul className="space-y-2">
                    {[
                      { label: 'Verify Information as Accurate:', desc: 'Negative items remain on credit reports' },
                      { label: 'Delete Information:', desc: 'Negative items are removed from credit reports' },
                      { label: 'Update Information:', desc: 'Negative items are corrected or modified' },
                      { label: 'Refuse to Investigate:', desc: 'Bureaus may deem disputes frivolous or lacking merit' },
                      { label: 'Request Additional Documentation:', desc: 'Bureaus may require further proof before investigating' },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>{item.label}</strong> {item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-6">9.3 Verification Process</h3>
                <p>Credit bureaus are required to investigate disputes within 30 days (or 45 days in certain cases). However:</p>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex gap-3">
                    <CircleAlert className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <ul className="space-y-2">
                      {['Bureaus may accept creditor verification without independent investigation', 'Creditors may re-report previously deleted items if they later verify accuracy', 'Bureaus may refuse to investigate disputes that appear frivolous'].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 10: Website Content and Accuracy */}
            <div id="section-10" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">10</span>
                </div>
                WEBSITE CONTENT AND ACCURACY
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <h3 className="text-xl font-bold text-gray-900">10.1 General Information</h3>
                <p>The content on www.mesagroupconsulting.com is provided for general informational purposes only. While we strive for accuracy, we make no guarantees that:</p>
                <ul className="space-y-2 ml-6">
                  {['All information is current, complete, or error-free', 'Website content is suitable for your specific situation', 'Information has not changed since it was last updated'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-6">10.2 No Substitute for Professional Advice</h3>
                <p>Website content is not a substitute for personalized professional advice from:</p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <ul className="space-y-2">
                    {['Licensed attorneys (for legal matters)', 'Certified Public Accountants (for tax matters)', 'Registered investment advisors (for investment matters)', 'Certified financial planners (for financial planning)'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-6">10.3 Updates and Changes</h3>
                <p>Mesa Group Consulting reserves the right to update, modify, or remove website content at any time without notice. We are not obligated to update information or notify users of changes.</p>
              </div>
            </div>

            {/* Section 11: Limitation of Liability */}
            <div id="section-11" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">11</span>
                </div>
                LIMITATION OF LIABILITY
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex gap-3">
                    <CircleAlert className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900 mb-2">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
                      <p>Mesa Group Consulting, its officers, directors, employees, agents, affiliates, and partners shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from or related to:</p>
                      <ul className="space-y-2 mt-4">
                        {['Use or inability to use our website or services', 'Errors, omissions, or inaccuracies in website content or service delivery', 'Unauthorized access to or alteration of your data', 'Third-party conduct or content', 'Reliance on information provided on our website or in our services', 'Denial of credit, loans, or financial products', 'Higher interest rates or unfavorable lending terms', 'Damage to credit scores or credit reports', 'Financial losses or lost business opportunities', 'Emotional distress or mental anguish'].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4">This limitation applies regardless of the legal theory (contract, tort, negligence, strict liability, or otherwise) and whether or not Mesa Group Consulting has been advised of the possibility of such damages.</p>
                    </div>
                  </div>
                </div>
                <p className="mt-4">See our full <a href="/terms-and-conditions" className="text-amber-600 hover:text-amber-700 underline">Terms & Conditions</a> for complete liability limitations.</p>
              </div>
            </div>

            {/* Section 12: External Links */}
            <div id="section-12" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">12</span>
                </div>
                EXTERNAL LINKS
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Our website may contain links to third-party websites, services, or resources. Mesa Group Consulting:</p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <ul className="space-y-2">
                    {['Does not endorse, approve, or certify third-party websites', 'Is not responsible for the content, accuracy, or reliability of third-party sites', 'Is not liable for any damages or losses resulting from your use of third-party sites', 'Does not control the privacy practices of third-party sites'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">✗</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-4"><strong>Recommendation:</strong> Review the terms, conditions, and privacy policies of any third-party website before using it.</p>
              </div>
            </div>

            {/* Section 13: Testimonials and Results */}
            <div id="section-13" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">13</span>
                </div>
                TESTIMONIALS AND RESULTS
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <h3 className="text-xl font-bold text-gray-900">13.1 Individual Results May Vary</h3>
                <p>Testimonials, case studies, and results displayed on our website or in marketing materials represent individual experiences and may not be typical. Your results may differ significantly based on:</p>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex gap-3">
                    <CircleAlert className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <ul className="space-y-2">
                      {['Your unique credit situation', 'The accuracy and verifiability of negative items on your credit reports', 'Your cooperation and responsiveness', 'Your credit behavior during the service period', "Factors outside Mesa Group Consulting's control"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-6">13.2 Not a Guarantee</h3>
                <p>Testimonials and results are not guarantees, promises, or predictions of future performance. Past results do not guarantee future success.</p>

                <h3 className="text-xl font-bold text-gray-900 mt-6">13.3 Endorsements</h3>
                <p>Some testimonials may be from clients who received compensation, discounts, or other incentives for providing feedback. All testimonials represent genuine client experiences but may not reflect typical results.</p>
              </div>
            </div>

            {/* Section 14: Educational Content */}
            <div id="section-14" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">14</span>
                </div>
                EDUCATIONAL CONTENT
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <h3 className="text-xl font-bold text-gray-900">14.1 General Information Only</h3>
                <p>Educational content provided through our DIY training programs, blog posts, videos, webinars, and other materials is for general informational and educational purposes only. It is not personalized advice tailored to your specific situation.</p>

                <h3 className="text-xl font-bold text-gray-900 mt-6">14.2 Responsibility for Implementation</h3>
                <p>If you choose to implement strategies or techniques learned through our educational content, you do so at your own risk. Mesa Group Consulting is not responsible for:</p>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex gap-3">
                    <CircleAlert className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <ul className="space-y-2">
                      {['Results or outcomes from self-directed credit repair efforts', 'Mistakes or errors made during implementation', 'Negative consequences from misapplication of information', 'Disputes rejected by credit bureaus or creditors'].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-6">14.3 Professional Guidance</h3>
                <p>For personalized advice, consider consulting with licensed professionals (attorneys, CPAs, financial advisors) who can evaluate your specific circumstances.</p>
              </div>
            </div>

            {/* Section 15: Contact Information */}
            <div id="section-15" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">15</span>
                </div>
                CONTACT INFORMATION
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>If you have questions about these disclaimers or need clarification, contact us:</p>

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
                    <p className="font-semibold text-gray-900 mb-2">Business Hours</p>
                    <div className="space-y-1 text-sm">
                      <p>Monday - Friday, 9:00 AM - 7:00 PM Pacific Time</p>
                      <p>Saturday, 10:00 AM - 2:00 PM Pacific Time</p>
                      <p>Sunday, Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Changes to This Disclaimer */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Changes to This Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed">
                Mesa Group Consulting reserves the right to update these disclaimers at any time. When we make changes, we will update the "Last Updated" date at the top of this page. Your continued use of our website or services after changes become effective constitutes acceptance of the revised disclaimers.
              </p>
            </div>

            {/* Acknowledgment */}
            <div className="mb-12">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 border-2 border-amber-400 rounded-xl p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Acknowledgment</h2>
                <p className="text-lg text-gray-900">
                  By using our website or services, you acknowledge that you have read, understood, and agree to these disclaimers.
                </p>
              </div>
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

export default Disclaimer;
