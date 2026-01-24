import { useState } from 'react';
import { DollarSign, ArrowLeft, Percent, Calendar, Target, ArrowRight } from 'lucide-react';
import { calculateMonthlyPayment, formatCurrency } from '@/utils/calculations';

interface MonthlyPaymentCalculatorProps {
  onBack: () => void;
}

const SMARTCREDIT_URL = 'https://www.smartcredit.com/join/?PID=39842&planType=PREMIUM';

const MonthlyPaymentCalculator = ({ onBack }: MonthlyPaymentCalculatorProps) => {
  const [principal, setPrincipal] = useState(0);
  const [apr, setApr] = useState(0);
  const [termMonths, setTermMonths] = useState(36);
  const [termType, setTermType] = useState<'months' | 'years'>('months');
  const [showResults, setShowResults] = useState(false);

  const getMonths = () => termType === 'years' ? termMonths * 12 : termMonths;

  const handleCalculate = () => {
    setShowResults(true);
  };

  const result = calculateMonthlyPayment(principal, apr, getMonths());
  
  // Comparison table data
  const comparisonTerms = [12, 24, 36, 48, 60, 72];
  const comparisonResults = comparisonTerms.map(months => ({
    months,
    ...calculateMonthlyPayment(principal, apr, months)
  }));

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <button 
          onClick={onBack}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-amber-600 mb-4 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Calculators
        </button>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Monthly Payment Calculator
        </h2>
        <p className="text-gray-600">
          Calculate what your monthly payment would be for a car loan, personal loan, or other installment debt.
        </p>
      </div>

      {/* Input Section */}
      <div className="space-y-6 mb-8">
        {/* Loan Amount */}
        <div className="bg-gray-50 rounded-lg p-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Loan Amount
          </label>
          <div className="relative max-w-sm">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="number"
              value={principal || ''}
              onChange={(e) => setPrincipal(parseFloat(e.target.value) || 0)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              placeholder="25000"
              min="0"
            />
          </div>
        </div>

        {/* APR */}
        <div className="bg-gray-50 rounded-lg p-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Annual Interest Rate (APR)
          </label>
          <div className="relative max-w-sm">
            <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="number"
              value={apr || ''}
              onChange={(e) => setApr(parseFloat(e.target.value) || 0)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              placeholder="6.99"
              min="0"
              step="0.01"
            />
          </div>
        </div>

        {/* Loan Term */}
        <div className="bg-gray-50 rounded-lg p-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Loan Term
          </label>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1 max-w-sm">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="number"
                value={termMonths || ''}
                onChange={(e) => setTermMonths(parseInt(e.target.value) || 0)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                placeholder="36"
                min="1"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setTermType('months')}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  termType === 'months' 
                    ? 'bg-amber-400 text-gray-900' 
                    : 'bg-white border border-gray-300 text-gray-700 hover:border-amber-400'
                }`}
              >
                Months
              </button>
              <button
                onClick={() => setTermType('years')}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  termType === 'years' 
                    ? 'bg-amber-400 text-gray-900' 
                    : 'bg-white border border-gray-300 text-gray-700 hover:border-amber-400'
                }`}
              >
                Years
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Calculate Button */}
      <button
        onClick={handleCalculate}
        className="w-full py-4 bg-amber-400 text-gray-900 font-bold text-lg rounded-lg hover:bg-amber-500 transition-colors shadow-lg"
      >
        Calculate Monthly Payment
      </button>

      {/* Results Section */}
      {showResults && (
        <div className="mt-8 space-y-6">
          {/* Main Result */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-8 border border-amber-200 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Your Monthly Payment
            </h3>
            <div className="text-5xl font-bold text-gray-900 mb-4">
              {formatCurrency(result.payment)}
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-white rounded-lg p-4">
                <div className="text-sm text-gray-600">Total Interest</div>
                <div className="text-xl font-bold text-amber-600">
                  {formatCurrency(result.totalInterest)}
                </div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-sm text-gray-600">Total Amount Paid</div>
                <div className="text-xl font-bold text-gray-900">
                  {formatCurrency(result.totalPaid)}
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h4 className="font-bold text-gray-900">Compare Different Loan Terms</h4>
              <p className="text-sm text-gray-600">See how different terms affect your payment and total interest</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Term</th>
                    <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900">Monthly Payment</th>
                    <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900">Total Interest</th>
                    <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900">Total Paid</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisonResults.map((row) => {
                    const isCurrentTerm = row.months === getMonths();
                    return (
                      <tr 
                        key={row.months} 
                        className={`hover:bg-gray-50 ${isCurrentTerm ? 'bg-amber-50' : ''}`}
                      >
                        <td className="px-4 py-3 text-sm text-gray-900">
                          {row.months} months ({(row.months / 12).toFixed(1)} years)
                          {isCurrentTerm && (
                            <span className="ml-2 text-xs bg-amber-400 text-gray-900 px-2 py-0.5 rounded-full">
                              Selected
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900 text-right font-medium">
                          {formatCurrency(row.payment)}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600 text-right">
                          {formatCurrency(row.totalInterest)}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900 text-right">
                          {formatCurrency(row.totalPaid)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-white border-l-4 border-amber-600 rounded-lg p-6 shadow-sm">
            <h4 className="font-bold text-gray-900 mb-3">Things to Consider</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                Shorter terms mean higher payments but less total interest
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                Longer terms mean lower payments but more interest over time
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                Making extra payments can significantly reduce your interest costs
              </li>
            </ul>
          </div>

          {/* SmartCredit Offer */}
          <div className="bg-[#3e3e3e] rounded-lg p-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5 text-amber-400" />
              <h4 className="font-bold">Want to track your loan payments?</h4>
            </div>
            <p className="text-amber-400 font-semibold mb-2">
              Our Recommended Tool to Help Achieve Your Desired Goal Faster
            </p>
            <p className="text-gray-300 text-sm mb-4">
              Unlock SmartCredit's <strong>Money Manager</strong> to track all your loans in one place, plus <strong>ScoreBoost™</strong> to see how your payments impact your credit score.
            </p>
            <p className="text-green-400 text-sm font-medium mb-4">
              Special Offer: Just $1 for the first 7 days
            </p>
            <a 
              href={SMARTCREDIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-amber-400 text-gray-900 font-semibold rounded-lg hover:bg-amber-500 transition-colors"
            >
              <span>Get Money Manager + ScoreBoost™</span>
              <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </a>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-gray-500 italic">
            Loan terms, rates, and fees vary by lender and borrower qualifications. This calculator provides estimates only.
          </p>
        </div>
      )}
    </div>
  );
};

export default MonthlyPaymentCalculator;
