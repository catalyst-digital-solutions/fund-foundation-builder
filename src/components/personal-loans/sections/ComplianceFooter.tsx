import React from 'react';
import { ExternalLink } from 'lucide-react';

const ComplianceFooter = () => {
  return (
    <section className="py-12 bg-gray-100 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Important Disclaimers */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Important Disclaimers</h3>
          <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <p>
              <strong>Representative APR Example:</strong> If you borrow $10,000 over 36 months at 10.00% APR, 
              you will make 36 monthly payments of approximately $322 for a total repayment amount of $11,616, 
              including $1,616 in interest. Your actual APR, loan amount, term, and monthly payments may vary 
              based on your creditworthiness, income, and lender approval.
            </p>
            <p>
              <strong>Rate Disclosure:</strong> Personal loan APRs through our lending partners range from 
              5.99% to 35.99% depending on your credit profile, loan amount, loan term, and other factors. 
              Not all applicants will qualify for the lowest rates. The APR you receive will be disclosed 
              by your chosen lender before you accept a loan offer.
            </p>
            <p>
              <strong>Credit Score Impact:</strong> Checking rates through our platform involves a soft credit 
              inquiry that will not affect your credit score. However, if you proceed with a loan application 
              from a specific lender, they will perform a hard credit inquiry which may temporarily lower your 
              credit score by a few points. Applying to multiple lenders within a short timeframe (typically 14-45 days) 
              is generally treated as a single inquiry for credit scoring purposes.
            </p>
            <p>
              <strong>No Guarantee of Approval:</strong> Submitting an application does not guarantee loan 
              approval or any specific loan terms. All lending decisions are made by individual lenders based 
              on their underwriting criteria. Mesa Group Consulting does not make lending decisions.
            </p>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="mb-8 p-6 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Affiliate Partnership Disclosure</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Mesa Group Consulting is a financial services marketplace that connects consumers with lending partners. 
            We earn a referral fee from lenders when you successfully obtain a loan through our platform. This 
            compensation does not affect the interest rates or terms you receive—lenders pay us for marketing services. 
            Our goal is to provide unbiased comparisons and connect you with the best loan options for your situation.
          </p>
        </div>

        {/* Legal */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Legal & Licensing</h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Mesa Group Consulting is not a lender. We are a lead generation and comparison service. All loans are 
            originated by third-party lenders who are licensed in your state. Loan availability and terms vary by 
            state. Not all applicants will qualify for a loan. By submitting your information, you authorize Mesa 
            Group Consulting and its lending partners to contact you regarding loan products.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>State Restrictions:</strong> Personal loans may not be available in all states. Lending partners 
            operate in accordance with state and federal lending laws, including the Truth in Lending Act (TILA) and 
            Equal Credit Opportunity Act (ECOA).
          </p>
        </div>

        {/* Consumer Resources */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Consumer Financial Resources</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <a 
              href="https://www.consumerfinance.gov/ask-cfpb/what-is-a-personal-loan-en-1959/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#bb9446] hover:text-[#9a7a3a] hover:underline"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Consumer Financial Protection Bureau - Personal Loans</span>
            </a>
            <a 
              href="https://www.ftc.gov/news-events/topics/consumer-finance/credit-loans" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#bb9446] hover:text-[#9a7a3a] hover:underline"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Federal Trade Commission - Credit & Loans</span>
            </a>
            <a 
              href="https://www.annualcreditreport.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#bb9446] hover:text-[#9a7a3a] hover:underline"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Free Annual Credit Report</span>
            </a>
            <a 
              href="https://www.consumerfinance.gov/complaint/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#bb9446] hover:text-[#9a7a3a] hover:underline"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Submit a Consumer Complaint (CFPB)</span>
            </a>
          </div>
        </div>

        {/* Final Notice */}
        <div className="pt-8 border-t border-gray-300 text-center">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Mesa Group Consulting. All rights reserved. | 
            <a href="https://www.mesagroupconsulting.com" className="text-[#bb9446] hover:underline ml-1">
              www.mesagroupconsulting.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComplianceFooter;
