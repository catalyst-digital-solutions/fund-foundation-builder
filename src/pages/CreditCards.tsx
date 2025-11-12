import { useState } from 'react';
import Header from '@/components/Header';

const CreditCards = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const affiliateLink = 'https://track.supermoney.com/aff_c?offer_id=596&aff_id=2815&utm_source=mesa&utm_medium=website&utm_campaign=credit_cards';
  
  const openAffiliateLink = (campaign?: string) => {
    const url = campaign 
      ? `https://track.supermoney.com/aff_c?offer_id=596&aff_id=2815&utm_source=mesa&utm_medium=website&utm_campaign=${campaign}`
      : affiliateLink;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const faqs = [
    {
      question: "Will checking my pre-qualification hurt my credit score?",
      answer: "No. Pre-qualification uses a 'soft pull' which doesn't affect your credit score at all. Soft pulls are visible only to you, not to lenders. Only when you actually APPLY for a card (after pre-qualification) does a hard pull happen, which may lower your score by 5-10 points temporarily."
    },
    {
      question: "What's the difference between pre-qualification and pre-approval?",
      answer: "Pre-qualification is a quick estimate based on self-reported info (soft pull, no score impact). Pre-approval is more thorough, often involves a hard pull, and means you're very likely to be approved. Our tool shows pre-qualification first—apply when ready for the hard pull."
    },
    {
      question: "What credit score do I need to get approved?",
      answer: "It depends on the card. Secured cards accept 300+ scores. Standard cards want 580-669 (fair credit). Rewards cards prefer 670+ (good credit). Premium travel cards need 740+ (excellent). Our comparison tool shows you which cards match YOUR score range."
    },
    {
      question: "Should I close old credit cards I don't use?",
      answer: "Usually no. Closing old cards reduces your total available credit (increases utilization) and shortens your credit history—both hurt your score. Better strategy: Keep old cards open, use them occasionally for small purchases, pay off immediately."
    },
    {
      question: "How many credit cards should I have?",
      answer: "There's no magic number, but most credit experts recommend 2-4 cards for optimal credit building. Multiple cards increase total credit limit (lowers utilization), provides backup options, and can maximize rewards in different categories. Just don't apply for many at once."
    },
    {
      question: "What if I get denied after applying?",
      answer: "Call the issuer's reconsideration line within 30 days and ask why you were denied. Sometimes you can provide additional info (income proof, explanation of credit issues) and get approved. If not, wait 6 months, improve your credit, and try again or apply for a different card."
    },
    {
      question: "Can I get a credit card with no credit history?",
      answer: "Yes. Start with a secured credit card (requires deposit) or become an authorized user on someone else's card. Student cards and credit builder cards also work. After 6-12 months of on-time payments, you'll qualify for standard unsecured cards."
    },
    {
      question: "How do I maximize credit card rewards?",
      answer: "Strategy: (1) Use cards in their bonus categories (5% on gas, 3% on dining, etc.), (2) Pay off balance monthly to avoid interest (which wipes out rewards), (3) Take advantage of sign-up bonuses, (4) Consider a 2% flat cashback card for everything else."
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      {/* SECTION 1: HERO */}
      <section className="bg-gradient-to-b from-[hsl(var(--mgc-yellow))] via-[hsl(var(--mgc-cream))] to-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          
          <p className="text-sm uppercase tracking-wide text-[hsl(var(--mgc-dark-gray))] mb-4 font-medium">
            Mesa Group Consulting Credit Card Marketplace
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(var(--mgc-dark-gray))] mb-6 leading-tight">
            Find Your Perfect Credit Card—Without Hurting Your Score
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
            Compare dozens of credit cards in one place. Get pre-qualified with a soft pull (no impact on your credit). Find the best rates, rewards, and terms for your credit situation.
          </p>
          
          <div className="bg-white border-2 border-[hsl(var(--mgc-gold))] rounded-lg p-6 mb-8 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🎯</span>
              <div className="text-left">
                <h3 className="text-xl font-bold text-[hsl(var(--mgc-dark-gray))] mb-2">
                  Pre-Qualification = No Credit Score Impact
                </h3>
                <p className="text-gray-700">
                  Answer 5 quick questions (no SSN yet). See which cards you're likely to get approved for using a <strong>soft pull only</strong>. Your credit score won't drop. Apply when you're ready—that's when the hard pull happens.
                </p>
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => openAffiliateLink()}
            className="bg-[hsl(var(--mgc-gold))] hover:bg-[hsl(var(--mgc-yellow))] text-white hover:text-[hsl(var(--mgc-dark-gray))] text-lg font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition duration-200"
          >
            Compare Credit Cards Now
          </button>
          
          <p className="text-sm text-gray-600 mt-4">
            Free to compare. No credit card required. Takes 60 seconds.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="text-sm font-medium text-[hsl(var(--mgc-dark-gray))]">Soft Pull Only</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="text-sm font-medium text-[hsl(var(--mgc-dark-gray))]">Compare 50+ Cards</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="text-sm font-medium text-[hsl(var(--mgc-dark-gray))]">All Credit Levels</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔒</span>
              <span className="text-sm font-medium text-[hsl(var(--mgc-dark-gray))]">Bank-Level Security</span>
            </div>
          </div>
          
        </div>
      </section>

      {/* SECTION 2: HOW IT WORKS */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--mgc-dark-gray))] mb-4 text-center">
            How This Works (It's Easy)
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Get personalized credit card recommendations without risking your credit score.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[hsl(var(--mgc-yellow))] text-[hsl(var(--mgc-dark-gray))] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-[hsl(var(--mgc-dark-gray))] mb-3">
                Answer 5 Questions
              </h3>
              <p className="text-gray-700">
                Tell us about your credit situation and what you're looking for. No SSN required at this step.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[hsl(var(--mgc-yellow))] text-[hsl(var(--mgc-dark-gray))] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-[hsl(var(--mgc-dark-gray))] mb-3">
                See Your Matches
              </h3>
              <p className="text-gray-700">
                Get a personalized list of cards you're likely to qualify for, with approval odds shown.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[hsl(var(--mgc-yellow))] text-[hsl(var(--mgc-dark-gray))] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-[hsl(var(--mgc-dark-gray))] mb-3">
                Compare Rates & Rewards
              </h3>
              <p className="text-gray-700">
                Review APRs, annual fees, cashback rates, travel perks, and credit limits side-by-side.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[hsl(var(--mgc-yellow))] text-[hsl(var(--mgc-dark-gray))] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-[hsl(var(--mgc-dark-gray))] mb-3">
                Apply When Ready
              </h3>
              <p className="text-gray-700">
                Choose your favorite card and apply directly. The hard pull happens here—not during comparison.
              </p>
            </div>
            
          </div>
          
          <div className="bg-[hsl(var(--mgc-cream))] border-l-4 border-[hsl(var(--mgc-yellow))] p-6 rounded-lg mt-12 max-w-4xl mx-auto">
            <div className="flex items-start gap-3">
              <span className="text-2xl mt-1">💡</span>
              <div>
                <h4 className="text-lg font-semibold text-[hsl(var(--mgc-dark-gray))] mb-2">
                  Important: Soft Pull vs. Hard Pull
                </h4>
                <p className="text-gray-700 mb-2">
                  <strong>Soft Pull (Pre-Qualification):</strong> Doesn't affect your credit score. This is what happens when you compare cards.
                </p>
                <p className="text-gray-700">
                  <strong>Hard Pull (Application):</strong> May lower your score by 5-10 points temporarily. This only happens when you actually apply for a card.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* SECTION 3: CARD CATEGORIES */}
      <section className="bg-[hsl(var(--mgc-tan))] py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--mgc-dark-gray))] mb-4 text-center">
            Find Cards for Your Credit Situation
          </h2>
          
          <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            Whether you're rebuilding credit or have excellent scores, we'll match you with the right cards.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition duration-200">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-[hsl(var(--mgc-dark-gray))] mb-3">
                Bad Credit (300-579)
              </h3>
              <p className="text-gray-700 mb-4">
                Secured cards that help you rebuild. Small deposits, guaranteed approval, graduate to unsecured cards.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Security deposit required</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Reports to all 3 bureaus</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Path to unsecured card</span>
                </li>
              </ul>
              <button 
                onClick={() => openAffiliateLink('bad_credit_cards')}
                className="w-full bg-[hsl(var(--mgc-gold))] hover:bg-[hsl(var(--mgc-yellow))] text-white hover:text-[hsl(var(--mgc-dark-gray))] font-semibold py-3 rounded-lg transition duration-200"
              >
                View Bad Credit Cards
              </button>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition duration-200">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-[hsl(var(--mgc-dark-gray))] mb-3">
                Fair Credit (580-669)
              </h3>
              <p className="text-gray-700 mb-4">
                Rebuilding cards with better terms. Lower fees, modest rewards, approval likely.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>No security deposit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Basic rewards programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Credit line increases</span>
                </li>
              </ul>
              <button 
                onClick={() => openAffiliateLink('fair_credit_cards')}
                className="w-full bg-[hsl(var(--mgc-gold))] hover:bg-[hsl(var(--mgc-yellow))] text-white hover:text-[hsl(var(--mgc-dark-gray))] font-semibold py-3 rounded-lg transition duration-200"
              >
                View Fair Credit Cards
              </button>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition duration-200">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-[hsl(var(--mgc-dark-gray))] mb-3">
                Good Credit (670-739)
              </h3>
              <p className="text-gray-700 mb-4">
                Rewards cards with competitive rates. Cashback, travel perks, lower APRs.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Solid rewards programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Competitive APRs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Sign-up bonuses</span>
                </li>
              </ul>
              <button 
                onClick={() => openAffiliateLink('good_credit_cards')}
                className="w-full bg-[hsl(var(--mgc-gold))] hover:bg-[hsl(var(--mgc-yellow))] text-white hover:text-[hsl(var(--mgc-dark-gray))] font-semibold py-3 rounded-lg transition duration-200"
              >
                View Good Credit Cards
              </button>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition duration-200">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-[hsl(var(--mgc-dark-gray))] mb-3">
                Excellent Credit (740+)
              </h3>
              <p className="text-gray-700 mb-4">
                Premium cards with best perks. Luxury travel benefits, highest cashback, lowest rates.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Premium rewards (2-5%)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Airport lounge access</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Large sign-up bonuses</span>
                </li>
              </ul>
              <button 
                onClick={() => openAffiliateLink('excellent_credit_cards')}
                className="w-full bg-[hsl(var(--mgc-gold))] hover:bg-[hsl(var(--mgc-yellow))] text-white hover:text-[hsl(var(--mgc-dark-gray))] font-semibold py-3 rounded-lg transition duration-200"
              >
                View Premium Cards
              </button>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition duration-200">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-[hsl(var(--mgc-dark-gray))] mb-3">
                Cashback Rewards
              </h3>
              <p className="text-gray-700 mb-4">
                Earn money on every purchase. 1-5% back on gas, groceries, dining, and more.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Simple cash rewards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Bonus categories</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>No travel restrictions</span>
                </li>
              </ul>
              <button 
                onClick={() => openAffiliateLink('cashback_cards')}
                className="w-full bg-[hsl(var(--mgc-gold))] hover:bg-[hsl(var(--mgc-yellow))] text-white hover:text-[hsl(var(--mgc-dark-gray))] font-semibold py-3 rounded-lg transition duration-200"
              >
                View Cashback Cards
              </button>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition duration-200">
              <div className="text-4xl mb-4">✈️</div>
              <h3 className="text-xl font-bold text-[hsl(var(--mgc-dark-gray))] mb-3">
                Travel Rewards
              </h3>
              <p className="text-gray-700 mb-4">
                Earn miles and points. Free flights, hotel stays, airport perks, travel insurance.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Airline miles & points</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Hotel status upgrades</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Travel protections</span>
                </li>
              </ul>
              <button 
                onClick={() => openAffiliateLink('travel_cards')}
                className="w-full bg-[hsl(var(--mgc-gold))] hover:bg-[hsl(var(--mgc-yellow))] text-white hover:text-[hsl(var(--mgc-dark-gray))] font-semibold py-3 rounded-lg transition duration-200"
              >
                View Travel Cards
              </button>
            </div>
            
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => openAffiliateLink()}
              className="bg-[hsl(var(--mgc-gold))] hover:bg-[hsl(var(--mgc-yellow))] text-white hover:text-[hsl(var(--mgc-dark-gray))] text-lg font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition duration-200"
            >
              Compare All Cards
            </button>
          </div>
          
        </div>
      </section>

      {/* SECTION 4: WHY USE A COMPARISON TOOL */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--mgc-dark-gray))] mb-12 text-center">
            Why Compare Cards (Instead of Applying Blindly)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[hsl(var(--mgc-dark-gray))] mb-4 flex items-center gap-2">
                <span className="text-3xl">❌</span>
                <span>Applying Without Comparing</span>
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold text-xl mt-1">✗</span>
                  <span>Hard pull on your credit (each application)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold text-xl mt-1">✗</span>
                  <span>Risk of denial (hurts score with no card)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold text-xl mt-1">✗</span>
                  <span>Miss better offers you qualified for</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold text-xl mt-1">✗</span>
                  <span>End up with higher APR or fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold text-xl mt-1">✗</span>
                  <span>Multiple hard inquiries damage credit</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[hsl(var(--mgc-dark-gray))] mb-4 flex items-center gap-2">
                <span className="text-3xl">✓</span>
                <span>Using Our Comparison Tool</span>
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold text-xl mt-1">✓</span>
                  <span>Soft pull only (no credit score impact)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold text-xl mt-1">✓</span>
                  <span>See approval odds before applying</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold text-xl mt-1">✓</span>
                  <span>Compare 50+ cards side-by-side</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold text-xl mt-1">✓</span>
                  <span>Find lowest rates and best rewards</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold text-xl mt-1">✓</span>
                  <span>Apply only to cards you'll likely get</span>
                </li>
              </ul>
            </div>
            
          </div>
          
          <div className="bg-[hsl(var(--mgc-cream))] rounded-lg p-8 mt-12 text-center">
            <div className="text-5xl font-bold text-[hsl(var(--mgc-gold))] mb-2">3.2x</div>
            <p className="text-xl text-gray-700">
              Users who pre-qualify have 3.2x higher approval rates than those who apply blindly
            </p>
            <p className="text-sm text-gray-600 mt-2">— Credit Card Industry Study, 2024</p>
          </div>
          
        </div>
      </section>

      {/* SECTION 5: WHAT TO LOOK FOR */}
      <section className="bg-[hsl(var(--mgc-cream))] py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--mgc-dark-gray))] mb-4 text-center">
            What to Compare When Choosing a Card
          </h2>
          
          <p className="text-lg text-gray-700 mb-12 text-center">
            Don't just look at the rewards. Here's what actually matters:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="text-4xl">📊</div>
                <div>
                  <h3 className="text-xl font-semibold text-[hsl(var(--mgc-dark-gray))] mb-2">
                    APR (Interest Rate)
                  </h3>
                  <p className="text-gray-700 mb-2">
                    The rate you pay on unpaid balances. Lower is always better.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    Range: 15.99% - 29.99%. Excellent credit gets lowest rates.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="text-4xl">💵</div>
                <div>
                  <h3 className="text-xl font-semibold text-[hsl(var(--mgc-dark-gray))] mb-2">
                    Annual Fee
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Yearly cost to keep the card. $0 - $695+.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    Premium cards charge fees but offer valuable perks. Do the math.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🎁</div>
                <div>
                  <h3 className="text-xl font-semibold text-[hsl(var(--mgc-dark-gray))] mb-2">
                    Rewards Rate
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Cashback percentage or points per dollar spent.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    Typical: 1-2% base, 3-5% in bonus categories. Check the fine print.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🎯</div>
                <div>
                  <h3 className="text-xl font-semibold text-[hsl(var(--mgc-dark-gray))] mb-2">
                    Sign-Up Bonus
                  </h3>
                  <p className="text-gray-700 mb-2">
                    One-time reward for hitting spending threshold.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    Example: "Spend $3K in 3 months, get $200." Factor in your budget.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🌍</div>
                <div>
                  <h3 className="text-xl font-semibold text-[hsl(var(--mgc-dark-gray))] mb-2">
                    Foreign Transaction Fee
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Charge for purchases outside the US (typically 3%).
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    If you travel internationally, look for $0 foreign fees.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="text-4xl">💳</div>
                <div>
                  <h3 className="text-xl font-semibold text-[hsl(var(--mgc-dark-gray))] mb-2">
                    Credit Limit
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Maximum you can charge. Affects utilization ratio.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    Higher limits = better utilization = higher credit score.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
      </section>

      {/* SECTION 6: FAQ ACCORDION */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--mgc-dark-gray))] mb-12 text-center">
            Common Credit Card Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg border-2 border-[hsl(var(--mgc-light-gray))] hover:border-[hsl(var(--mgc-yellow))] overflow-hidden transition duration-200">
                
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-[hsl(var(--mgc-cream))] transition duration-200"
                >
                  <h3 className="text-lg font-semibold text-[hsl(var(--mgc-dark-gray))] pr-8">
                    {faq.question}
                  </h3>
                  <span className="text-2xl text-[hsl(var(--mgc-gold))] flex-shrink-0 font-bold">
                    {openFAQ === index ? '−' : '+'}
                  </span>
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-4 pt-2 bg-white">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
                
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* SECTION 7: CREDIT SCORE GUIDE */}
      <section className="bg-[hsl(var(--mgc-tan))] py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--mgc-dark-gray))] mb-4 text-center">
            Credit Score Ranges & What They Mean
          </h2>
          
          <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            Your credit score determines which cards you qualify for. Here's the breakdown:
          </p>
          
          <div className="space-y-4">
            
            <div className="bg-green-500 rounded-lg p-6 text-white">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="text-3xl font-bold mb-2">800 - 850</div>
                  <div className="text-xl font-semibold mb-1">Exceptional</div>
                  <p className="text-green-100">Best rates on everything. Premium cards welcome you.</p>
                </div>
                <div className="text-6xl">🏆</div>
              </div>
            </div>
            
            <div className="bg-green-400 rounded-lg p-6 text-white">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="text-3xl font-bold mb-2">740 - 799</div>
                  <div className="text-xl font-semibold mb-1">Very Good</div>
                  <p className="text-green-100">Great rates. Most premium cards available.</p>
                </div>
                <div className="text-6xl">⭐</div>
              </div>
            </div>
            
            <div className="bg-[hsl(var(--mgc-yellow))] rounded-lg p-6 text-[hsl(var(--mgc-dark-gray))]">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="text-3xl font-bold mb-2">670 - 739</div>
                  <div className="text-xl font-semibold mb-1">Good</div>
                  <p>Above-average rates. Solid rewards cards accessible.</p>
                </div>
                <div className="text-6xl">👍</div>
              </div>
            </div>
            
            <div className="bg-orange-400 rounded-lg p-6 text-white">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="text-3xl font-bold mb-2">580 - 669</div>
                  <div className="text-xl font-semibold mb-1">Fair</div>
                  <p className="text-orange-100">Higher rates. Limited to rebuilding cards.</p>
                </div>
                <div className="text-6xl">📈</div>
              </div>
            </div>
            
            <div className="bg-red-500 rounded-lg p-6 text-white">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="text-3xl font-bold mb-2">300 - 579</div>
                  <div className="text-xl font-semibold mb-1">Poor</div>
                  <p className="text-red-100">Secured cards only. Focus on rebuilding.</p>
                </div>
                <div className="text-6xl">🔧</div>
              </div>
            </div>
            
          </div>
          
          <div className="bg-white rounded-lg p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold text-[hsl(var(--mgc-dark-gray))] mb-4">
              Don't Know Your Credit Score?
            </h3>
            <p className="text-gray-700 mb-6">
              Our comparison tool will estimate your score range based on your credit profile. Or check your score free at Credit Karma, Experian, or through your bank.
            </p>
            <button 
              onClick={() => openAffiliateLink()}
              className="bg-[hsl(var(--mgc-gold))] hover:bg-[hsl(var(--mgc-yellow))] text-white hover:text-[hsl(var(--mgc-dark-gray))] text-lg font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition duration-200"
            >
              Find Cards for Your Score
            </button>
          </div>
          
        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <section className="bg-gradient-to-r from-[hsl(var(--mgc-gold))] to-[hsl(var(--mgc-yellow))] py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Find Your Perfect Credit Card?
          </h2>
          
          <p className="text-xl text-white mb-8">
            Compare 50+ cards in 60 seconds. See your approval odds. No credit score impact.
          </p>
          
          <button 
            onClick={() => openAffiliateLink()}
            className="bg-white text-[hsl(var(--mgc-gold))] hover:bg-[hsl(var(--mgc-cream))] hover:text-[hsl(var(--mgc-dark-gray))] text-lg font-semibold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transition duration-200"
          >
            Compare Credit Cards Now
          </button>
          
          <p className="text-sm text-white mt-4">
            Free comparison. Soft pull only. Takes 60 seconds.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="text-sm font-medium text-white">No Score Impact</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="text-sm font-medium text-white">All Credit Levels</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔒</span>
              <span className="text-sm font-medium text-white">Secure & Private</span>
            </div>
          </div>
          
        </div>
      </section>

      {/* SECTION 9: COMPLIANCE FOOTER */}
      <footer className="bg-gray-50 py-12 px-6 md:px-8 border-t-2 border-[hsl(var(--mgc-light-gray))]">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-sm text-gray-600 leading-relaxed space-y-4">
            
            <p>
              <strong>Affiliate Disclosure:</strong> Mesa Group Consulting is a partner of SuperMoney. We may earn a commission if you apply for a credit card through our comparison tool, at no additional cost to you. We only recommend services that provide value to our clients.
            </p>
            
            <p>
              <strong>Pre-Qualification Disclaimer:</strong> Pre-qualification does not guarantee approval. Actual approval depends on the card issuer's full review of your credit history, income, and other factors. Pre-qualification uses a soft pull; actual applications require a hard pull which may affect your credit score.
            </p>
            
            <p>
              <strong>Credit Score Impact:</strong> Comparing credit cards through our tool uses soft inquiries only, which do not affect your credit score. When you submit an actual application for a credit card, the issuer will perform a hard inquiry, which may lower your score by 5-10 points temporarily.
            </p>
            
            <p>
              Card terms, rates, and fees are determined by the card issuer and may change without notice. Always review the card's terms and conditions before applying.
            </p>
            
          </div>
          
        </div>
      </footer>
    </main>
  );
};

export default CreditCards;
