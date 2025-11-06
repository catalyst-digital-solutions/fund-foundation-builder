import React from 'react';

const ComplianceFooter = () => {
  return (
    <section className="py-12 bg-gray-100 border-t-2 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-sm text-gray-600 space-y-4">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Important Disclosures</h3>
          
          <p>
            <strong>No Guarantee of Results:</strong> Mesa Group Capital does not guarantee specific business credit scores, funding amounts, or approval for any financing product. Results vary based on individual circumstances.
          </p>

          <p>
            <strong>Typical Timeline:</strong> Building business credit typically takes 6-12 months. Individual results vary based on business structure, revenue, and adherence to program guidelines.
          </p>

          <p className="text-xs text-gray-500 mt-8">
            © 2025 Mesa Group Capital. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComplianceFooter;
