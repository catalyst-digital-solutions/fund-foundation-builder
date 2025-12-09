import { useState } from 'react';
import { DollarSign, Plus, X, Lightbulb, ArrowLeft } from 'lucide-react';
import { formatCurrency, getUtilizationColor } from '@/utils/calculations';

interface CreditCard {
  id: string;
  limit: number;
  balance: number;
}

interface CreditUtilizationCalculatorProps {
  onBack: () => void;
}

const UtilizationGauge = ({ percentage }: { percentage: number }) => {
  const color = getUtilizationColor(percentage);
  
  return (
    <div className="space-y-2">
      <div className="w-full bg-gray-200 rounded-full h-8 overflow-hidden">
        <div 
          className={`h-8 ${color} transition-all duration-500 rounded-full`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-gray-600 font-medium px-1">
        <span>0%</span>
        <span className="text-green-600">10%</span>
        <span className="text-yellow-600">30%</span>
        <span>100%</span>
      </div>
    </div>
  );
};

const CreditUtilizationCalculator = ({ onBack }: CreditUtilizationCalculatorProps) => {
  const [cards, setCards] = useState<CreditCard[]>([
    { id: '1', limit: 0, balance: 0 }
  ]);
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');

  const addCard = () => {
    setCards([...cards, { id: Date.now().toString(), limit: 0, balance: 0 }]);
  };

  const removeCard = (id: string) => {
    if (cards.length > 1) {
      setCards(cards.filter(card => card.id !== id));
    }
  };

  const updateCard = (id: string, field: 'limit' | 'balance', value: number) => {
    setCards(cards.map(card => 
      card.id === id ? { ...card, [field]: value || 0 } : card
    ));
  };

  const calculateUtilization = () => {
    const totalLimit = cards.reduce((sum, card) => sum + card.limit, 0);
    const totalBalance = cards.reduce((sum, card) => sum + card.balance, 0);
    
    if (totalLimit === 0) return { overallUtilization: 0, perCardUtilization: [], totalPaydown: 0 };
    
    const overallUtilization = (totalBalance / totalLimit) * 100;
    
    const perCardUtilization = cards.map(card => ({
      ...card,
      utilization: card.limit > 0 ? (card.balance / card.limit) * 100 : 0,
      optimalBalance: card.limit * 0.30,
      paydownAmount: Math.max(0, card.balance - (card.limit * 0.30))
    }));
    
    const totalPaydown = perCardUtilization.reduce((sum, card) => sum + card.paydownAmount, 0);
    
    return { overallUtilization, perCardUtilization, totalPaydown };
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Handle email capture
  };

  const { overallUtilization, perCardUtilization, totalPaydown } = calculateUtilization();

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
          Credit Utilization Calculator
        </h2>
        <p className="text-gray-600">
          Find out if your credit card balances are hurting your score—and exactly how much to pay down to optimize your utilization ratio.
        </p>
      </div>

      {/* Input Section */}
      <div className="space-y-6 mb-8">
        {cards.map((card, index) => (
          <div key={card.id} className="bg-gray-50 rounded-lg p-6 space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-900">Credit Card {index + 1}</h3>
              {cards.length > 1 && (
                <button 
                  onClick={() => removeCard(card.id)} 
                  className="text-red-600 hover:text-red-700 p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Credit Limit
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    value={card.limit || ''}
                    onChange={(e) => updateCard(card.id, 'limit', parseFloat(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                    placeholder="10000"
                    min="0"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Balance
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    value={card.balance || ''}
                    onChange={(e) => updateCard(card.id, 'balance', parseFloat(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                    placeholder="3000"
                    min="0"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <button
          onClick={addCard}
          className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 font-medium hover:border-amber-400 hover:text-amber-600 transition-colors flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Another Card
        </button>
      </div>

      {/* Calculate Button */}
      <button
        onClick={handleCalculate}
        className="w-full py-4 bg-amber-400 text-gray-900 font-bold text-lg rounded-lg hover:bg-amber-500 transition-colors shadow-lg"
      >
        Calculate My Utilization
      </button>

      {/* Results Section */}
      {showResults && (
        <div className="mt-8 space-y-6">
          {/* Overall Utilization */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6 border border-amber-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Your Overall Credit Utilization
            </h3>
            <div className="text-5xl font-bold text-gray-900 mb-4">
              {overallUtilization.toFixed(1)}%
            </div>
            <UtilizationGauge percentage={overallUtilization} />
          </div>

          {/* Recommendation */}
          <div className="bg-white border-l-4 border-amber-600 rounded-lg p-6 shadow-sm">
            <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-600" />
              RECOMMENDATION
            </h4>
            <p className="text-gray-700">
              {overallUtilization > 30 
                ? `Your utilization is high. Pay down ${formatCurrency(totalPaydown)} to reach the optimal 30% threshold.`
                : overallUtilization > 10
                ? "Good! Your utilization is in a healthy range. Aim for under 10% for the best credit score impact."
                : "Excellent! Your utilization is optimal for credit scoring."
              }
            </p>
          </div>

          {/* Per-Card Breakdown */}
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900">Per-Card Breakdown</h4>
            {perCardUtilization.map((card, index) => (
              <div key={card.id} className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Card {index + 1}</span>
                  <span className={`font-bold ${
                    card.utilization > 30 ? 'text-red-600' : 
                    card.utilization > 10 ? 'text-yellow-600' : 
                    'text-green-600'
                  }`}>
                    {card.utilization.toFixed(1)}%
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  {formatCurrency(card.balance)} / {formatCurrency(card.limit)}
                </div>
                {card.utilization > 30 && (
                  <div className="mt-2 text-sm text-red-600">
                    Pay down {formatCurrency(card.paydownAmount)} to reach 30%
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Email Capture */}
          <div className="bg-gray-900 rounded-lg p-6 text-white">
            <h4 className="font-bold mb-2">Want a detailed paydown strategy?</h4>
            <p className="text-gray-300 text-sm mb-4">
              Enter your email to receive a month-by-month plan and credit optimization tips
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
                Send My Report
              </button>
            </form>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-gray-500 italic">
            Credit score impacts are estimates. Actual score changes depend on your complete credit profile including payment history, credit age, and inquiries.
          </p>
        </div>
      )}
    </div>
  );
};

export default CreditUtilizationCalculator;
