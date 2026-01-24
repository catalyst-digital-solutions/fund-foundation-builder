import { useState } from 'react';
import { DollarSign, ArrowLeft, Home, Car, CreditCard, GraduationCap, Wallet, MoreHorizontal, Target, ArrowRight } from 'lucide-react';
import { formatCurrency, getDTIZone } from '@/utils/calculations';

interface DTICalculatorProps {
  onBack: () => void;
}

const DTIGauge = ({ percentage }: { percentage: number }) => {
  const zone = getDTIZone(percentage);
  
  return (
    <div className="space-y-4">
      <div className="relative h-12 bg-gray-200 rounded-full overflow-hidden">
        <div className="absolute inset-0 flex">
          <div className="flex-[36] bg-green-100"></div>
          <div className="flex-[7] bg-yellow-100"></div>
          <div className="flex-[7] bg-orange-100"></div>
          <div className="flex-[50] bg-red-100"></div>
        </div>
        <div 
          className={`absolute h-full ${zone.color} transition-all duration-500`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
      
      <div className="flex justify-between text-xs text-gray-600 font-medium px-1">
        <span>0%</span>
        <span className="text-green-600">36%</span>
        <span className="text-yellow-600">43%</span>
        <span className="text-orange-600">50%</span>
        <span>100%</span>
      </div>
      
      <div className={`text-center text-xl font-bold ${zone.textColor}`}>
        {zone.label}
      </div>
    </div>
  );
};

const SMARTCREDIT_URL = 'https://www.smartcredit.com/join/?PID=39842&planType=PREMIUM';

const DTICalculator = ({ onBack }: DTICalculatorProps) => {
  const [income, setIncome] = useState(0);
  const [debts, setDebts] = useState({
    mortgage: 0,
    carLoan: 0,
    creditCards: 0,
    studentLoans: 0,
    personalLoans: 0,
    other: 0
  });
  const [showResults, setShowResults] = useState(false);

  const updateDebt = (field: keyof typeof debts, value: number) => {
    setDebts({ ...debts, [field]: value || 0 });
  };

  const calculateDTI = () => {
    const totalDebt = Object.values(debts).reduce((sum, val) => sum + val, 0);
    const dtiRatio = income > 0 ? (totalDebt / income) * 100 : 0;
    
    const mortgageQualified = dtiRatio < 43;
    const autoLoanQualified = dtiRatio < 50;
    
    const debtReductionForMortgage = Math.max(0, totalDebt - (income * 0.43));
    const debtReductionForAuto = Math.max(0, totalDebt - (income * 0.50));
    
    return { 
      dtiRatio, 
      totalDebt,
      mortgageQualified, 
      autoLoanQualified, 
      debtReductionForMortgage,
      debtReductionForAuto
    };
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  const { dtiRatio, totalDebt, mortgageQualified, autoLoanQualified, debtReductionForMortgage, debtReductionForAuto } = calculateDTI();

  const debtFields = [
    { key: 'mortgage', label: 'Mortgage/Rent', icon: Home },
    { key: 'carLoan', label: 'Car Loan', icon: Car },
    { key: 'creditCards', label: 'Credit Card Minimum Payments', icon: CreditCard },
    { key: 'studentLoans', label: 'Student Loans', icon: GraduationCap },
    { key: 'personalLoans', label: 'Personal Loans', icon: Wallet },
    { key: 'other', label: 'Other Monthly Debts', icon: MoreHorizontal },
  ];

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
          Debt-to-Income Ratio Calculator
        </h2>
        <p className="text-gray-600">
          Find out if you qualify for a mortgage, auto loan, or other major purchase based on your debt-to-income ratio.
        </p>
      </div>

      {/* Income Input */}
      <div className="bg-amber-50 rounded-lg p-6 border border-amber-200 mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Gross Monthly Income (before taxes)
        </label>
        <div className="relative max-w-sm">
          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="number"
            value={income || ''}
            onChange={(e) => setIncome(parseFloat(e.target.value) || 0)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
            placeholder="5000"
            min="0"
          />
        </div>
      </div>

      {/* Debt Inputs */}
      <div className="space-y-4 mb-8">
        <h3 className="font-semibold text-gray-900">Monthly Debt Payments</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {debtFields.map(({ key, label, icon: Icon }) => (
            <div key={key} className="bg-gray-50 rounded-lg p-4">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Icon className="w-4 h-4 text-gray-500" />
                {label}
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  value={debts[key as keyof typeof debts] || ''}
                  onChange={(e) => updateDebt(key as keyof typeof debts, parseFloat(e.target.value))}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                  placeholder="0"
                  min="0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Calculate Button */}
      <button
        onClick={handleCalculate}
        className="w-full py-4 bg-amber-400 text-gray-900 font-bold text-lg rounded-lg hover:bg-amber-500 transition-colors shadow-lg"
      >
        Calculate My DTI Ratio
      </button>

      {/* Results Section */}
      {showResults && (
        <div className="mt-8 space-y-6">
          {/* DTI Result */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6 border border-amber-200">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Your Debt-to-Income Ratio
            </h3>
            <div className="text-5xl font-bold text-gray-900 mb-6">
              {dtiRatio.toFixed(1)}%
            </div>
            <DTIGauge percentage={dtiRatio} />
            <div className="mt-4 text-sm text-gray-600">
              <p>Total Monthly Debt: {formatCurrency(totalDebt)}</p>
              <p>Gross Monthly Income: {formatCurrency(income)}</p>
            </div>
          </div>

          {/* Qualification Status */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className={`rounded-lg p-6 border ${mortgageQualified ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
              <div className="flex items-center gap-3 mb-2">
                <Home className={`w-6 h-6 ${mortgageQualified ? 'text-green-600' : 'text-red-600'}`} />
                <h4 className="font-bold text-gray-900">Mortgage Qualification</h4>
              </div>
              <p className={`text-lg font-semibold ${mortgageQualified ? 'text-green-600' : 'text-red-600'}`}>
                {mortgageQualified ? 'Likely Qualified' : 'May Not Qualify'}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Most lenders require DTI below 43%
              </p>
              {!mortgageQualified && (
                <p className="text-sm text-red-600 mt-2">
                  Reduce monthly debt by {formatCurrency(debtReductionForMortgage)} to qualify
                </p>
              )}
            </div>
            
            <div className={`rounded-lg p-6 border ${autoLoanQualified ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
              <div className="flex items-center gap-3 mb-2">
                <Car className={`w-6 h-6 ${autoLoanQualified ? 'text-green-600' : 'text-red-600'}`} />
                <h4 className="font-bold text-gray-900">Auto Loan Qualification</h4>
              </div>
              <p className={`text-lg font-semibold ${autoLoanQualified ? 'text-green-600' : 'text-red-600'}`}>
                {autoLoanQualified ? 'Likely Qualified' : 'May Not Qualify'}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Most lenders prefer DTI below 50%
              </p>
              {!autoLoanQualified && (
                <p className="text-sm text-red-600 mt-2">
                  Reduce monthly debt by {formatCurrency(debtReductionForAuto)} to qualify
                </p>
              )}
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-white border-l-4 border-amber-600 rounded-lg p-6 shadow-sm">
            <h4 className="font-bold text-gray-900 mb-3">How to Improve Your DTI</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                Pay down existing debt to reduce monthly payments
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                Increase your income through raises or side income
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                Avoid taking on new debt before applying for loans
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                Consider debt consolidation to lower monthly payments
              </li>
            </ul>
          </div>

          {/* SmartCredit Offer */}
          <div className="bg-[#3e3e3e] rounded-lg p-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5 text-amber-400" />
              <h4 className="font-bold">Want to improve your DTI ratio?</h4>
            </div>
            <p className="text-amber-400 font-semibold mb-2">
              Our Recommended Tool to Help Achieve Your Desired Goal Faster
            </p>
            <p className="text-gray-300 text-sm mb-4">
              Unlock SmartCredit's <strong>Money Manager</strong> to track all your debts and income in one dashboard, making it easier to monitor and improve your DTI ratio.
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
              <span>Get SmartCredit Money Manager</span>
              <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </a>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-gray-500 italic">
            Lender qualification standards vary. This calculator uses general benchmarks. Individual lenders may have different requirements.
          </p>
        </div>
      )}
    </div>
  );
};

export default DTICalculator;
