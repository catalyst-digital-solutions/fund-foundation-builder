import { useState } from 'react';
import { DollarSign, Plus, X, ArrowLeft, Percent, Target, ArrowRight } from 'lucide-react';
import { formatCurrency, formatMonths, calculateMonthsToPayoff, calculateTotalInterest } from '@/utils/calculations';

interface Debt {
  id: string;
  name: string;
  balance: number;
  apr: number;
  minPayment: number;
}

interface DebtPayoffCalculatorProps {
  onBack: () => void;
}

interface PayoffResult {
  months: number;
  totalInterest: number;
  order: Debt[];
}

const SMARTCREDIT_URL = 'https://www.smartcredit.com/join/?PID=39842&planType=PREMIUM';

const DebtPayoffCalculator = ({ onBack }: DebtPayoffCalculatorProps) => {
  const [debts, setDebts] = useState<Debt[]>([
    { id: '1', name: 'Credit Card 1', balance: 0, apr: 0, minPayment: 0 }
  ]);
  const [extraPayment, setExtraPayment] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const addDebt = () => {
    setDebts([...debts, { 
      id: Date.now().toString(), 
      name: `Debt ${debts.length + 1}`, 
      balance: 0, 
      apr: 0, 
      minPayment: 0 
    }]);
  };

  const removeDebt = (id: string) => {
    if (debts.length > 1) {
      setDebts(debts.filter(debt => debt.id !== id));
    }
  };

  const updateDebt = (id: string, field: keyof Debt, value: string | number) => {
    setDebts(debts.map(debt => 
      debt.id === id ? { ...debt, [field]: field === 'name' ? value : (parseFloat(value as string) || 0) } : debt
    ));
  };

  // NPER formula: calculates months to pay off a debt
  const nper = (monthlyRate: number, payment: number, balance: number): number => {
    if (balance <= 0) return 0;
    if (payment <= 0) return Infinity;
    if (monthlyRate === 0) return balance / payment;
    
    const ratio = balance * monthlyRate / payment;
    if (ratio >= 1) return Infinity; // Payment doesn't cover interest
    
    return -Math.log(1 - ratio) / Math.log(1 + monthlyRate);
  };

  // Calculate balance after n months of payments
  const balanceAfterMonths = (principal: number, monthlyRate: number, payment: number, months: number): number => {
    if (monthlyRate === 0) return Math.max(0, principal - payment * months);
    if (months <= 0) return principal;
    
    const factor = Math.pow(1 + monthlyRate, months);
    return principal * factor - payment * (factor - 1) / monthlyRate;
  };

  // Calculate interest paid over n months
  const interestPaidOverMonths = (principal: number, monthlyRate: number, payment: number, months: number): number => {
    const totalPaid = payment * months;
    const principalPaid = principal - balanceAfterMonths(principal, monthlyRate, payment, months);
    return totalPaid - principalPaid;
  };

  const calculateMinimumPath = (): PayoffResult => {
    let totalInterest = 0;
    let maxMonths = 0;
    let hasInfinite = false;
    
    debts.forEach(debt => {
      if (debt.balance <= 0 || debt.minPayment <= 0) return;
      
      const monthlyRate = debt.apr / 100 / 12;
      const months = nper(monthlyRate, debt.minPayment, debt.balance);
      
      if (!isFinite(months)) {
        hasInfinite = true;
        // Estimate interest for display (e.g., 30 years of payments)
        const estimatedMonths = 360;
        const interest = interestPaidOverMonths(debt.balance, monthlyRate, debt.minPayment, estimatedMonths);
        totalInterest += interest;
        maxMonths = Math.max(maxMonths, estimatedMonths);
      } else {
        const interest = (debt.minPayment * months) - debt.balance;
        totalInterest += interest;
        maxMonths = Math.max(maxMonths, months);
      }
    });
    
    return { 
      months: hasInfinite ? Infinity : Math.ceil(maxMonths), 
      totalInterest, 
      order: debts 
    };
  };

  const calculateSnowball = (): PayoffResult => {
    // Sort by balance (smallest first), then by APR (highest first) for ties
    const sortedDebts = debts
      .map(d => ({ ...d }))
      .sort((a, b) => {
        if (a.balance !== b.balance) return a.balance - b.balance;
        return b.apr - a.apr;
      });
    
    return calculateStrategyPayoff(sortedDebts, 'Snowball');
  };

  const calculateAvalanche = (): PayoffResult => {
    // Sort by APR (highest first), then by balance (smallest first) for ties
    const sortedDebts = debts
      .map(d => ({ ...d }))
      .sort((a, b) => {
        if (a.apr !== b.apr) return b.apr - a.apr;
        return a.balance - b.balance;
      });
    
    return calculateStrategyPayoff(sortedDebts, 'Avalanche');
  };

  const calculateStrategyPayoff = (orderedDebts: Debt[], methodName: string): PayoffResult => {
    // Create working copies with current balances
    const workingDebts = orderedDebts.map(d => ({
      ...d,
      currentBalance: d.balance,
      monthlyRate: d.apr / 100 / 12
    }));

    let totalMonths = 0;
    let totalInterest = 0;
    let availableExtra = extraPayment; // Extra payment capacity

    // Process each debt in priority order
    for (let targetIndex = 0; targetIndex < workingDebts.length; targetIndex++) {
      const targetDebt = workingDebts[targetIndex];
      
      if (targetDebt.currentBalance <= 0) continue;

      // Calculate payment for target debt: its minimum + all available extra
      const targetPayment = targetDebt.minPayment + availableExtra;
      
      // Calculate months to pay off target debt
      let monthsForTarget = nper(targetDebt.monthlyRate, targetPayment, targetDebt.currentBalance);
      
      if (!isFinite(monthsForTarget)) {
        // Even with extra, can't pay off - use a cap
        monthsForTarget = 600 - totalMonths;
        if (monthsForTarget <= 0) break;
      }

      // During this time, all other unpaid debts are being paid at their minimums
      // Calculate their balance changes and interest
      for (let i = targetIndex + 1; i < workingDebts.length; i++) {
        const otherDebt = workingDebts[i];
        if (otherDebt.currentBalance <= 0) continue;

        // Interest accrued on other debt while paying target
        const interestOnOther = interestPaidOverMonths(
          otherDebt.currentBalance,
          otherDebt.monthlyRate,
          otherDebt.minPayment,
          monthsForTarget
        );
        totalInterest += interestOnOther;

        // Update other debt's balance after these months
        otherDebt.currentBalance = balanceAfterMonths(
          otherDebt.currentBalance,
          otherDebt.monthlyRate,
          otherDebt.minPayment,
          monthsForTarget
        );
      }

      // Calculate interest paid on target debt
      const interestOnTarget = (targetPayment * monthsForTarget) - targetDebt.currentBalance;
      totalInterest += interestOnTarget;

      // Target debt is now paid off
      targetDebt.currentBalance = 0;
      totalMonths += monthsForTarget;

      // Target debt's minimum payment is now freed up for next debt
      availableExtra += targetDebt.minPayment;
    }

    console.log(`${methodName}: ${totalMonths.toFixed(1)} months, $${totalInterest.toFixed(2)} interest`);
    console.log(`${methodName} order:`, orderedDebts.map(d => `${d.name}: $${d.balance} @ ${d.apr}%`));

    return { 
      months: Math.ceil(totalMonths), 
      totalInterest, 
      order: orderedDebts 
    };
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  const currentPath = calculateMinimumPath();
  const snowball = calculateSnowball();
  const avalanche = calculateAvalanche();

  const bestMethod = avalanche.totalInterest <= snowball.totalInterest ? 'avalanche' : 'snowball';

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
          Debt Payoff Calculator
        </h2>
        <p className="text-gray-600">
          See exactly when you'll be debt-free and how much interest you'll save using the snowball or avalanche method.
        </p>
      </div>

      {/* Input Section */}
      <div className="space-y-6 mb-8">
        {debts.map((debt, index) => (
          <div key={debt.id} className="bg-gray-50 rounded-lg p-6 space-y-4">
            <div className="flex justify-between items-center mb-4">
              <input
                type="text"
                value={debt.name}
                onChange={(e) => updateDebt(debt.id, 'name', e.target.value)}
                className="font-semibold text-gray-900 bg-transparent border-b border-transparent hover:border-gray-300 focus:border-amber-400 focus:outline-none"
                placeholder={`Debt ${index + 1}`}
              />
              {debts.length > 1 && (
                <button 
                  onClick={() => removeDebt(debt.id)} 
                  className="text-red-600 hover:text-red-700 p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Balance
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    value={debt.balance || ''}
                    onChange={(e) => updateDebt(debt.id, 'balance', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                    placeholder="5000"
                    min="0"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  APR
                </label>
                <div className="relative">
                  <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    value={debt.apr || ''}
                    onChange={(e) => updateDebt(debt.id, 'apr', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                    placeholder="18.99"
                    min="0"
                    step="0.01"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Minimum Payment
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    value={debt.minPayment || ''}
                    onChange={(e) => updateDebt(debt.id, 'minPayment', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                    placeholder="150"
                    min="0"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <button
          onClick={addDebt}
          className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 font-medium hover:border-amber-400 hover:text-amber-600 transition-colors flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Another Debt
        </button>

        {/* Extra Payment */}
        <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Extra Monthly Payment (Optional)
          </label>
          <div className="relative max-w-xs">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="number"
              value={extraPayment || ''}
              onChange={(e) => setExtraPayment(parseFloat(e.target.value) || 0)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              placeholder="100"
              min="0"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Adding even a small extra payment can significantly reduce your payoff time.
          </p>
        </div>
      </div>

      {/* Calculate Button */}
      <button
        onClick={handleCalculate}
        className="w-full py-4 bg-amber-400 text-gray-900 font-bold text-lg rounded-lg hover:bg-amber-500 transition-colors shadow-lg"
      >
        Calculate Payoff Options
      </button>

      {/* Results Section */}
      {showResults && (
        <div className="mt-8 space-y-6">
          {/* Comparison Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Current Path Card */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-4">Current Path</h4>
              <p className="text-xs text-gray-500 mb-4">Minimum payments only</p>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-gray-600">Debt-Free In</div>
                  <div className="text-2xl font-bold text-gray-900">
                    {!isFinite(currentPath.months) ? 'Never (payment too low)' : formatMonths(currentPath.months)}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Total Interest</div>
                  <div className="text-xl font-bold text-red-600">
                    {!isFinite(currentPath.months) ? '∞' : formatCurrency(currentPath.totalInterest)}
                  </div>
                </div>
                {!isFinite(currentPath.months) && (
                  <p className="text-xs text-red-600 mt-2">
                    Some debts have minimum payments that don't cover monthly interest
                  </p>
                )}
              </div>
            </div>
            
            {/* Snowball Card */}
            <div className={`border rounded-lg p-6 ${bestMethod === 'snowball' ? 'bg-green-50 border-green-300' : 'bg-blue-50 border-blue-200'}`}>
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-bold text-gray-900">Snowball Method</h4>
                {bestMethod === 'snowball' && (
                  <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full">Best</span>
                )}
              </div>
              <p className="text-xs text-gray-500 mb-4">Smallest balance first</p>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-gray-600">Debt-Free In</div>
                  <div className="text-2xl font-bold text-gray-900">
                    {formatMonths(snowball.months)}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Total Interest</div>
                  <div className="text-xl font-bold text-blue-600">
                    {formatCurrency(snowball.totalInterest)}
                  </div>
                </div>
                {isFinite(currentPath.months) && currentPath.totalInterest > snowball.totalInterest && (
                  <div className="text-sm text-green-600 font-medium">
                    Saves {formatCurrency(currentPath.totalInterest - snowball.totalInterest)} vs minimums
                  </div>
                )}
              </div>
            </div>
            
            {/* Avalanche Card */}
            <div className={`border rounded-lg p-6 ${bestMethod === 'avalanche' ? 'bg-green-50 border-green-300' : 'bg-emerald-50 border-emerald-200'}`}>
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-bold text-gray-900">Avalanche Method</h4>
                {bestMethod === 'avalanche' && (
                  <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full">Best</span>
                )}
              </div>
              <p className="text-xs text-gray-500 mb-4">Highest APR first</p>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-gray-600">Debt-Free In</div>
                  <div className="text-2xl font-bold text-gray-900">
                    {formatMonths(avalanche.months)}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Total Interest</div>
                  <div className="text-xl font-bold text-green-600">
                    {formatCurrency(avalanche.totalInterest)}
                  </div>
                </div>
                {isFinite(currentPath.months) && currentPath.totalInterest > avalanche.totalInterest && (
                  <div className="text-sm text-green-600 font-medium">
                    Saves {formatCurrency(currentPath.totalInterest - avalanche.totalInterest)} vs minimums
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Comparison between methods */}
          {snowball.totalInterest !== avalanche.totalInterest && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>{avalanche.totalInterest < snowball.totalInterest ? 'Avalanche' : 'Snowball'}</strong> saves{' '}
                <strong>{formatCurrency(Math.abs(snowball.totalInterest - avalanche.totalInterest))}</strong>{' '}
                more in interest compared to {avalanche.totalInterest < snowball.totalInterest ? 'Snowball' : 'Avalanche'}.
              </p>
            </div>
          )}

          {/* Payoff Order */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-4">Recommended Payoff Order ({bestMethod === 'avalanche' ? 'Avalanche' : 'Snowball'})</h4>
            <ol className="space-y-2">
              {(bestMethod === 'avalanche' ? avalanche.order : snowball.order).map((debt, index) => (
                <li key={debt.id} className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-amber-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{debt.name || `Debt ${index + 1}`}</span>
                  <span className="text-sm text-gray-500">
                    ({formatCurrency(debt.balance)} @ {debt.apr}% APR)
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* SmartCredit Offer */}
          <div className="bg-[#3e3e3e] rounded-lg p-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5 text-amber-400" />
              <h4 className="font-bold">Want a detailed payoff schedule?</h4>
            </div>
            <p className="text-amber-400 font-semibold mb-2">
              Our Recommended Tool to Help Achieve Your Desired Goal Faster
            </p>
            <p className="text-gray-300 text-sm mb-4">
              Unlock SmartCredit's <strong>Money Manager</strong> to track all your debts in one place, plus <strong>ScoreBoost™</strong> to see how paying them down affects your score.
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
            Calculations assume consistent payments and no new debt. Interest rates and minimum payments may change. Consult your creditors for exact payoff quotes.
          </p>
        </div>
      )}
    </div>
  );
};

export default DebtPayoffCalculator;
