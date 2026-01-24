import { useState } from 'react';
import { DollarSign, ArrowLeft, Shield, TrendingUp, Calendar, Target, ArrowRight } from 'lucide-react';
import { formatCurrency, formatMonths } from '@/utils/calculations';

interface EmergencyFundCalculatorProps {
  onBack: () => void;
}

type Stability = 'stable' | 'moderate' | 'unstable';

const SMARTCREDIT_URL = 'https://www.smartcredit.com/join/?PID=39842&planType=PREMIUM';

const ProgressBar = ({ current, target }: { current: number; target: number }) => {
  const percentage = target > 0 ? Math.min((current / target) * 100, 100) : 0;
  
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm font-medium text-gray-700">
        <span>{formatCurrency(current)}</span>
        <span>{percentage.toFixed(1)}% Complete</span>
        <span>{formatCurrency(target)}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
        <div 
          className="h-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-500 flex items-center justify-center text-white text-xs font-bold"
          style={{ width: `${percentage}%` }}
        >
          {percentage > 15 && `${percentage.toFixed(0)}%`}
        </div>
      </div>
    </div>
  );
};

const EmergencyFundCalculator = ({ onBack }: EmergencyFundCalculatorProps) => {
  const [monthlyExpenses, setMonthlyExpenses] = useState(0);
  const [currentSavings, setCurrentSavings] = useState(0);
  const [monthlySavings, setMonthlySavings] = useState(0);
  const [stability, setStability] = useState<Stability>('stable');
  const [showResults, setShowResults] = useState(false);

  const getMultiplier = (s: Stability) => {
    switch (s) {
      case 'stable': return 3;
      case 'moderate': return 4;
      case 'unstable': return 6;
    }
  };

  const calculateEmergencyFund = () => {
    const multiplier = getMultiplier(stability);
    const targetFund = monthlyExpenses * multiplier;
    const amountNeeded = Math.max(0, targetFund - currentSavings);
    const monthsToGoal = monthlySavings > 0 ? Math.ceil(amountNeeded / monthlySavings) : 0;
    
    const accelerated = {
      plus50: monthlySavings + 50 > 0 ? Math.ceil(amountNeeded / (monthlySavings + 50)) : 0,
      plus100: monthlySavings + 100 > 0 ? Math.ceil(amountNeeded / (monthlySavings + 100)) : 0,
      plus200: monthlySavings + 200 > 0 ? Math.ceil(amountNeeded / (monthlySavings + 200)) : 0
    };
    
    const goalDate = new Date();
    goalDate.setMonth(goalDate.getMonth() + monthsToGoal);
    
    return { targetFund, amountNeeded, monthsToGoal, accelerated, goalDate, multiplier };
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  const { targetFund, amountNeeded, monthsToGoal, accelerated, goalDate, multiplier } = calculateEmergencyFund();

  const stabilityOptions = [
    { 
      value: 'stable' as Stability, 
      label: 'Stable', 
      description: 'Steady job, multiple income sources, or strong job security',
      months: '3 months'
    },
    { 
      value: 'moderate' as Stability, 
      label: 'Moderate', 
      description: 'Single income, some job uncertainty, or variable income',
      months: '4 months'
    },
    { 
      value: 'unstable' as Stability, 
      label: 'Variable', 
      description: 'Freelance, seasonal work, high-risk industry, or single breadwinner',
      months: '6 months'
    }
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
          Emergency Fund Calculator
        </h2>
        <p className="text-gray-600">
          Find out how much you should save for emergencies and create a realistic savings plan to reach your goal.
        </p>
      </div>

      {/* Input Section */}
      <div className="space-y-6 mb-8">
        {/* Monthly Expenses */}
        <div className="bg-gray-50 rounded-lg p-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Monthly Essential Expenses
          </label>
          <p className="text-xs text-gray-500 mb-3">
            Include rent/mortgage, utilities, groceries, insurance, minimum debt payments, transportation
          </p>
          <div className="relative max-w-sm">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="number"
              value={monthlyExpenses || ''}
              onChange={(e) => setMonthlyExpenses(parseFloat(e.target.value) || 0)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              placeholder="3500"
              min="0"
            />
          </div>
        </div>

        {/* Current Savings */}
        <div className="bg-gray-50 rounded-lg p-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current Emergency Savings
          </label>
          <div className="relative max-w-sm">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="number"
              value={currentSavings || ''}
              onChange={(e) => setCurrentSavings(parseFloat(e.target.value) || 0)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              placeholder="2000"
              min="0"
            />
          </div>
        </div>

        {/* Monthly Savings */}
        <div className="bg-gray-50 rounded-lg p-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Amount You Can Save Monthly
          </label>
          <div className="relative max-w-sm">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="number"
              value={monthlySavings || ''}
              onChange={(e) => setMonthlySavings(parseFloat(e.target.value) || 0)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              placeholder="300"
              min="0"
            />
          </div>
        </div>

        {/* Income Stability */}
        <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Income Stability Level
          </label>
          <div className="grid md:grid-cols-3 gap-4">
            {stabilityOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setStability(option.value)}
                className={`p-4 rounded-lg border-2 text-left transition-all ${
                  stability === option.value
                    ? 'border-amber-400 bg-white shadow-md'
                    : 'border-gray-200 bg-white hover:border-amber-300'
                }`}
              >
                <div className="font-semibold text-gray-900">{option.label}</div>
                <div className="text-xs text-gray-500 mt-1">{option.description}</div>
                <div className="text-sm font-medium text-amber-600 mt-2">
                  Recommended: {option.months}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Calculate Button */}
      <button
        onClick={handleCalculate}
        className="w-full py-4 bg-amber-400 text-gray-900 font-bold text-lg rounded-lg hover:bg-amber-500 transition-colors shadow-lg"
      >
        Calculate My Emergency Fund Goal
      </button>

      {/* Results Section */}
      {showResults && (
        <div className="mt-8 space-y-6">
          {/* Target Fund */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-8 border border-amber-200">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-amber-600" />
              <h3 className="text-xl font-bold text-gray-900">
                Your Emergency Fund Target
              </h3>
            </div>
            <div className="text-5xl font-bold text-gray-900 mb-2">
              {formatCurrency(targetFund)}
            </div>
            <p className="text-gray-600 mb-6">
              Based on {multiplier} months of expenses at {formatCurrency(monthlyExpenses)}/month
            </p>
            
            {/* Progress Bar */}
            <ProgressBar current={currentSavings} target={targetFund} />
            
            <div className="mt-4 text-center">
              {amountNeeded > 0 ? (
                <p className="text-gray-700">
                  You need <span className="font-bold text-amber-600">{formatCurrency(amountNeeded)}</span> more to reach your goal
                </p>
              ) : (
                <p className="text-green-600 font-bold">
                  Congratulations! You've reached your emergency fund goal!
                </p>
              )}
            </div>
          </div>

          {/* Timeline */}
          {amountNeeded > 0 && monthlySavings > 0 && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-amber-600" />
                <h4 className="font-bold text-gray-900">Time to Reach Your Goal</h4>
              </div>
              
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {formatMonths(monthsToGoal)}
              </div>
              <p className="text-gray-600 mb-6">
                Target date: {goalDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </p>

              {/* Accelerated Scenarios */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <h5 className="font-semibold text-gray-900">Accelerate Your Savings</h5>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Save extra $50/month</span>
                    <span className="font-semibold text-gray-900">{formatMonths(accelerated.plus50)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Save extra $100/month</span>
                    <span className="font-semibold text-gray-900">{formatMonths(accelerated.plus100)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Save extra $200/month</span>
                    <span className="font-semibold text-gray-900">{formatMonths(accelerated.plus200)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tips */}
          <div className="bg-white border-l-4 border-amber-600 rounded-lg p-6 shadow-sm">
            <h4 className="font-bold text-gray-900 mb-3">Tips for Building Your Emergency Fund</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                Set up automatic transfers to a separate savings account
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                Use a high-yield savings account to earn more interest
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                Direct tax refunds and bonuses straight to savings
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                Start with a mini goal of $1,000, then build from there
              </li>
            </ul>
          </div>

          {/* SmartCredit Offer */}
          <div className="bg-[#3e3e3e] rounded-lg p-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5 text-amber-400" />
              <h4 className="font-bold">Want to track your savings progress?</h4>
            </div>
            <p className="text-amber-400 font-semibold mb-2">
              Our Recommended Tool to Help Achieve Your Desired Goal Faster
            </p>
            <p className="text-gray-300 text-sm mb-4">
              Unlock SmartCredit's <strong>Money Manager</strong> to track your savings, expenses, and financial goals all in one place—making it easier to build your emergency fund.
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
            Recommended savings amounts are guidelines. Adjust based on your personal situation, risk tolerance, and financial goals.
          </p>
        </div>
      )}
    </div>
  );
};

export default EmergencyFundCalculator;
