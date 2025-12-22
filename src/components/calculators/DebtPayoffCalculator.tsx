import { useState } from 'react';
import { DollarSign, Plus, X, ArrowLeft, Percent } from 'lucide-react';
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

const DebtPayoffCalculator = ({ onBack }: DebtPayoffCalculatorProps) => {
  const [debts, setDebts] = useState<Debt[]>([
    { id: '1', name: 'Credit Card 1', balance: 0, apr: 0, minPayment: 0 }
  ]);
  const [extraPayment, setExtraPayment] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');

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

  const calculateMinimumPath = (): PayoffResult => {
    let totalInterest = 0;
    let maxMonths = 0;
    
    debts.forEach(debt => {
      if (debt.balance <= 0 || debt.minPayment <= 0) return;
      
      const months = calculateMonthsToPayoff(debt.balance, debt.apr, debt.minPayment);
      if (isFinite(months)) {
        const interest = calculateTotalInterest(debt.minPayment, months, debt.balance);
        totalInterest += interest;
        maxMonths = Math.max(maxMonths, months);
      }
    });
    
    return { months: maxMonths, totalInterest, order: debts };
  };

  const calculateSnowball = (): PayoffResult => {
    const sortedDebts = [...debts].sort((a, b) => a.balance - b.balance);
    return simulatePayoff(sortedDebts);
  };

  const calculateAvalanche = (): PayoffResult => {
    const sortedDebts = [...debts].sort((a, b) => b.apr - a.apr);
    return simulatePayoff(sortedDebts);
  };

  const simulatePayoff = (orderedDebts: Debt[]): PayoffResult => {
    // Create working copies with current balance tracking
    let remainingDebts = orderedDebts.map(d => ({ ...d, currentBalance: d.balance }));
    let totalInterest = 0;
    let months = 0;

    // Track total extra payment available (starts with user's extra, grows as debts pay off)
    let rollingExtra = extraPayment;

    while (remainingDebts.some(d => d.currentBalance > 0) && months < 600) {
      months++;

      // Calculate this month's extra pool (rolling extra from previous months)
      let extraPool = rollingExtra;

      // Process each debt in priority order
      for (let i = 0; i < remainingDebts.length; i++) {
        const debt = remainingDebts[i];
        if (debt.currentBalance <= 0) continue;

        // Calculate interest for this month
        const monthlyRate = (debt.apr / 100) / 12;
        const interest = debt.currentBalance * monthlyRate;
        totalInterest += interest;

        // Add interest to balance
        debt.currentBalance += interest;

        // Determine payment: minimum + any available extra for the first unpaid debt
        let payment = debt.minPayment;

        // First unpaid debt gets all available extra
        const isFirstUnpaid = i === remainingDebts.findIndex(d => d.currentBalance > 0);
        if (isFirstUnpaid) {
          payment += extraPool;
        }

        // Apply payment
        debt.currentBalance -= payment;

        // If debt is paid off, add its min payment to rolling extra for future months
        if (debt.currentBalance <= 0) {
          // Any overpayment is "lost" (paid to debt, not refunded)
          debt.currentBalance = 0;
          // This debt's minimum payment now joins the rolling extra for next month
          rollingExtra += debt.minPayment;
        }
      }
    }

    return { months, totalInterest, order: orderedDebts };
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
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
                    {formatMonths(currentPath.months)}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Total Interest</div>
                  <div className="text-xl font-bold text-red-600">
                    {formatCurrency(currentPath.totalInterest)}
                  </div>
                </div>
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
                <div className="text-sm text-green-600 font-medium">
                  Saves {formatCurrency(currentPath.totalInterest - snowball.totalInterest)}
                </div>
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
                <div className="text-sm text-green-600 font-medium">
                  Saves {formatCurrency(currentPath.totalInterest - avalanche.totalInterest)}
                </div>
              </div>
            </div>
          </div>

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

          {/* Email Capture */}
          <div className="bg-gray-900 rounded-lg p-6 text-white">
            <h4 className="font-bold mb-2">Want a detailed payoff schedule?</h4>
            <p className="text-gray-300 text-sm mb-4">
              Enter your email to receive a month-by-month payment plan
            </p>
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
                required
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-amber-400 text-gray-900 font-semibold rounded-lg hover:bg-amber-500 transition-colors whitespace-nowrap"
              >
                Send My Schedule
              </button>
            </form>
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
