import { Shield } from "lucide-react";

const ComplianceFooter = () => {
  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compliance Header */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Shield className="w-5 h-5 text-gray-600" />
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
            Important Disclosures
          </h3>
        </div>

        {/* Disclaimer Text */}
        <div className="max-w-5xl mx-auto space-y-4 text-sm text-gray-600 leading-relaxed">
          
          <p>
            <strong className="text-gray-900">Insurance Partnership:</strong> Mesa Group Consulting is an affiliate partner of PolicyGenius, an independent insurance marketplace. We may receive compensation when you purchase insurance through our affiliate links, at no additional cost to you.
          </p>

          <p>
            <strong className="text-gray-900">Not Insurance Advice:</strong> The information provided on this page is for educational purposes only and should not be construed as insurance advice. Mesa Group Consulting does not provide insurance advice, sell insurance products directly, or make recommendations on specific policies or carriers. All insurance decisions should be made after consulting with a licensed insurance professional.
          </p>

          <p>
            <strong className="text-gray-900">PolicyGenius Services:</strong> PolicyGenius is a licensed insurance broker operating in all 50 states. PolicyGenius works with A-rated and above insurance carriers to provide comparison quotes. All insurance policies are issued by the respective insurance carriers, not by PolicyGenius or Mesa Group Consulting.
          </p>

          <p>
            <strong className="text-gray-900">Coverage & Pricing:</strong> Life insurance coverage amounts, premiums, and policy terms vary based on individual factors including age, health, lifestyle, state of residence, and the specific insurance carrier. Quotes and coverage availability are subject to underwriting approval. Not all applicants will qualify for coverage or the lowest advertised rates.
          </p>

          <p>
            <strong className="text-gray-900">Medical Underwriting:</strong> Most life insurance policies require medical underwriting, which may include a medical exam, health questionnaire, and review of medical records. Some policies offer simplified or guaranteed issue underwriting with higher premiums and/or lower coverage amounts.
          </p>

          <p>
            <strong className="text-gray-900">Tax Considerations:</strong> While life insurance death benefits are generally income-tax-free, there may be estate tax implications depending on policy ownership and your overall estate. Cash value policies have complex tax rules regarding withdrawals and policy loans. Consult with a qualified tax advisor regarding your specific situation.
          </p>

          <p>
            <strong className="text-gray-900">State Regulations:</strong> Life insurance is regulated by individual state insurance departments. Coverage availability, policy features, and regulations vary by state. All quotes and policy information are subject to state-specific requirements and approvals.
          </p>

          <p>
            <strong className="text-gray-900">No Guarantee:</strong> Mesa Group Consulting makes no guarantee regarding coverage approval, premium rates, policy terms, or claim outcomes. All insurance decisions and outcomes are between you and the issuing insurance carrier.
          </p>

          <p>
            <strong className="text-gray-900">Policy Review:</strong> It is your responsibility to carefully review all policy documents, terms, conditions, exclusions, and limitations before purchasing any insurance product. If you have questions about a specific policy, contact the insurance carrier or a licensed insurance agent directly.
          </p>

          <p>
            <strong className="text-gray-900">Time-Sensitive Information:</strong> Insurance rates, policy features, and carrier offerings change frequently. The information on this page is current as of the publication date but may not reflect the most recent changes. Always verify current information with PolicyGenius or the insurance carrier directly.
          </p>

          <p className="pt-4 border-t border-gray-200 text-xs text-gray-500">
            PolicyGenius® is a registered trademark of PolicyGenius, Inc. Mesa Group Consulting is an independent affiliate partner and is not directly affiliated with, endorsed by, or sponsored by PolicyGenius beyond our affiliate partnership agreement. All insurance products are offered by licensed insurance carriers. For more information about PolicyGenius, visit their website directly.
          </p>

          <p className="text-xs text-gray-500">
            <strong>Last Updated:</strong> November 2025 | Mesa Group Consulting | All rights reserved.
          </p>

        </div>

      </div>
    </section>
  );
};

export default ComplianceFooter;
