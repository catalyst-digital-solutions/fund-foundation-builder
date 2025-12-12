import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PoweredByMesaGroup from '@/components/PoweredByMesaGroup';
import {
  DollarSign, Building2, CreditCard, FileText, Factory, Building, Rocket, Briefcase,
  Phone, Check, Lightbulb, Target, Zap, Shield, TrendingUp, Handshake, ClipboardList,
  ChevronDown, Star, AlertTriangle, Calculator, Users, ArrowRight, CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const BusinessFunding2 = () => {
  return (
    <div className="min-h-screen bg-background font-['Inter',sans-serif]">
      <Header />
      <HeroSection />
      <InteractiveFundingCalculator />
      <TheProblemSection />
      <TheSolutionSection />
      <IntroducingBrokerageDivision />
      <AllFundingSolutionsGrid />
      <ComparisonTable />
      <SettingRealisticExpectations />
      <RealTalkQualifications />
      <WhyMesaGetsResults />
      <TheProcessSection />
      <EnhancedSocialProofSection />
      <FAQSection />
      <TwoPathsForward />
      <FinalCTA />
      <Footer />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-white via-amber-50 to-white py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <div className="inline-flex items-center gap-2 bg-white border-2 border-amber-400 px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg">
          <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
          <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
          <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
          <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
          <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
          <span className="text-gray-900">Rated 5.0 on Google | 200+ Funded Businesses</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Your Business Deserves More Than <span className="text-[#f9c65d]">"Maybe"</span>
        </h1>

        <p className="text-xl text-gray-700 leading-relaxed mb-4 max-w-3xl mx-auto">
          <strong>You've built something real. Now it's time to fuel what's next.</strong>
        </p>

        <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto">
          Every business owner knows the feeling—the gap between where you are and where you could be isn't about ideas or effort. It's about capital. Whether you're hiring your first employee, upgrading equipment, or expanding to that second location, the right funding at the right time changes everything.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-10 max-w-3xl mx-auto">
          Through our brokerage division, <strong>Mesa Group Capital</strong>, we connect you with a curated network of <strong>75+ specialized lenders</strong>—each offering different products, terms, and approval criteria. We don't just submit applications. We architect funding solutions that match your business reality.
        </p>

        <div className="flex flex-col items-center mb-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://link.mesagroupconsulting.com/widget/bookings/mesa-group-capital-funding-discovery" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-white bg-amber-500 hover:bg-amber-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-600 text-xl font-bold px-12 py-5 h-auto">
                Schedule Free Consultation
              </Button>
            </a>

            <a href="https://mesagroupcapital.com/for-businesses/business-funding" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-gray-900 bg-white hover:bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-gray-300 text-xl font-semibold px-12 py-5 h-auto">
                Ready to Apply Now →
              </Button>
            </a>
          </div>
          <PoweredByMesaGroup className="mt-4" />
        </div>

      </div>
    </section>
  );
};

const InteractiveFundingCalculator = () => {
  const [revenue, setRevenue] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [fundingRange, setFundingRange] = useState({ min: 0, max: 0 });

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(num);
  };

  const calculateFunding = () => {
    const revenueNum = parseInt(revenue.replace(/,/g, ''));
    if (revenueNum && revenueNum > 0) {
      const min = Math.floor(revenueNum * 0.10);
      const max = Math.floor(revenueNum * 0.20);
      setFundingRange({ min, max });
      setShowResults(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/,/g, '');
    if (/^\d*$/.test(value)) {
      const formatted = value ? parseInt(value).toLocaleString() : '';
      setRevenue(formatted);
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-amber-50 to-white">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full text-sm font-semibold text-gray-900 mb-6">
            <Calculator className="w-4 h-4" />
            Interactive Funding Calculator
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How Much Funding Could <span className="text-[#f9c65d]">Your Business</span> Qualify For?
          </h2>
          <p className="text-xl text-gray-700">
            Most lenders approve 10-20% of your annual revenue for unsecured funding. See your estimated range instantly:
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 md:p-12 shadow-2xl border-2 border-amber-300">
          <div className="max-w-2xl mx-auto">
            <label className="block text-lg font-semibold text-gray-900 mb-3">
              What's your annual business revenue?
            </label>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 text-xl">$</span>
                  <input
                    type="text"
                    value={revenue}
                    onChange={handleInputChange}
                    placeholder="Enter amount"
                    className="w-full pl-8 pr-4 py-4 text-xl border-2 border-gray-300 rounded-lg focus:border-amber-500 focus:outline-none"
                  />
                </div>
              </div>
              <Button
                onClick={calculateFunding}
                className="bg-amber-500 hover:bg-amber-600 text-white text-lg font-bold px-8 py-4 h-auto rounded-lg"
              >
                Calculate My Funding Range
              </Button>
            </div>

            {showResults && (
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 mb-6 border-2 border-green-300 animate-in fade-in duration-300">
                <div className="text-center mb-4">
                  <div className="text-sm font-semibold text-green-800 mb-2">💰 Your Estimated Funding Range:</div>
                  <div className="text-4xl font-bold text-green-900">
                    {formatCurrency(fundingRange.min)} - {formatCurrency(fundingRange.max)}
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 text-sm text-gray-700 leading-relaxed">
                  <p className="mb-3">
                    This is based on the industry standard of <strong>10-20% of annual revenue</strong> for unsecured products like term loans, lines of credit, and cash advances.
                  </p>
                  <p className="text-gray-600">
                    <strong>Want higher amounts?</strong> Secured loans (equipment, real estate) can exceed this.
                  </p>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://link.mesagroupconsulting.com/widget/bookings/mesa-group-capital-funding-discovery" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-all">
                Schedule Free Consultation →
              </a>
              <a href="https://mesagroupcapital.com/for-businesses/business-funding" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-lg border-2 border-gray-300 transition-all">
                Apply Now →
              </a>
            </div>

            <p className="text-center text-sm text-gray-600 mt-6">
              <strong>Note:</strong> This is an estimate. Your actual funding amount depends on credit profile, time in business, and industry. Our consultation will give you a precise assessment.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

const TheProblemSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Most Business Funding Falls Short
          </h2>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-white rounded-xl p-8 md:p-12 shadow-lg border-l-4 border-red-500 mb-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            You've probably heard the same story from every lender:
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-800">"Your business is too new"</p>
            </div>
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-800">"Your revenue isn't consistent enough"</p>
            </div>
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-800">"Come back when you have more collateral"</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Meanwhile, competitors with deeper pockets are capturing the market opportunities you saw first. That contract you can't fulfill. The equipment upgrade that would double your capacity. The seasonal inventory that would set you up for your best quarter ever.
          </p>

          <p className="text-lg text-gray-800 font-semibold">
            The irony? Banks say you need money to prove you can handle money.
          </p>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-8 md:p-12 shadow-lg border-l-4 border-amber-500">
          <p className="text-xl text-gray-900 leading-relaxed">
            <strong>We know better.</strong> Your business isn't a credit score—it's your life's work, your family's security, and your community's resource. That deserves funding partners who see the full picture.
          </p>
        </div>

      </div>
    </section>
  );
};

const TheSolutionSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white via-amber-50 to-white">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How <span className="text-[#f9c65d]">Mesa Group Capital</span> Gets You Funded
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Unlike traditional lenders who fit businesses into rigid boxes, we start with a simple question: <strong>What would the right capital do for your business right now?</strong>
          </p>
          <p className="text-xl text-gray-700 mt-4">
            Then we reverse-engineer the path to get you there.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-2xl border-2 border-amber-300 overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-4">
            <h3 className="text-2xl font-bold text-white">Our 3-Phase Funding Strategy</h3>
          </div>

          <div className="p-8 md:p-12 space-y-8">

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Discovery & Diagnosis</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Deep-dive business assessment (not just paperwork review)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Credit profile analysis (personal & business)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Revenue pattern evaluation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Industry-specific opportunity mapping</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Strategic Positioning</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Optimize your credit leverage points</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Structure your financials for maximum approval odds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Match you with the right lenders from our 75+ partner network</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Prepare application packages that tell your business story effectively</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Execution & Funding</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Submit to multiple compatible lenders simultaneously</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Negotiate terms on your behalf using our broker relationships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Coordinate timing for optimal cash flow impact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Guide you through closing and fund deployment</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        <div className="bg-gradient-to-r from-green-100 to-green-50 rounded-xl p-8 text-center shadow-lg border-2 border-green-300">
          <p className="text-xl font-bold text-gray-900">
            The result? Most clients secure funding within <span className="text-green-700">30-45 days</span>—even if they've been denied elsewhere.
          </p>
        </div>

      </div>
    </section>
  );
};

const IntroducingBrokerageDivision = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Introducing Our <span className="text-[#f9c65d]">Brokerage Division</span>
          </h2>
          <h3 className="text-3xl font-bold text-[#f9c65d] mb-4">
            Mesa Group Capital: Your Connection to 75+ Lenders
          </h3>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Mesa Group Capital is the brokerage arm of Mesa Group Consulting, built specifically to solve one of the most frustrating challenges businesses face: <strong>access to the right capital at the right time.</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">

          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-amber-200 hover:shadow-2xl transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-amber-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">75+ Vetted Lender Relationships</h4>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We've spent years building partnerships with specialized lenders across every funding category. Each has different appetites, approval criteria, and speed-to-funding timelines.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-amber-200 hover:shadow-2xl transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-amber-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">Broker Advantage</h4>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Lenders give brokers access to better terms, faster approval lanes, and inside intel on what's actually getting funded. You get institutional leverage with personal service.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-amber-200 hover:shadow-2xl transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-amber-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">Strategic Matching</h4>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We don't blast your application to everyone. We analyze your profile, identify the 3-5 lenders most likely to approve, and position your story for maximum impact.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-amber-200 hover:shadow-2xl transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-amber-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">One Application, Multiple Offers</h4>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Fill out our comprehensive application once. We handle submissions, follow-ups, and negotiations across our entire network—at no cost to you. We're compensated directly by lenders when your funding closes.
            </p>
          </div>

        </div>

        <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-8 text-center shadow-lg border-2 border-amber-300">
          <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full text-sm font-bold text-green-800 mb-4">
            <Check className="w-4 h-4" />
            Nationwide Coverage
          </div>
          <p className="text-lg text-gray-700">
            Operating in all <strong>50 states</strong> with lenders licensed across the country.
          </p>
        </div>

      </div>
    </section>
  );
};

// Continue with AllFundingSolutionsGrid - keeping the same 8 products but with updated descriptions where needed
const AllFundingSolutionsGrid = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-amber-50 to-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            8 Ways We Fund Your <span className="text-[#f9c65d]">Business Growth</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Through Mesa Group Capital, you have access to every major funding category. No two businesses are identical—that's why we offer multiple pathways.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            For Established Businesses <span className="text-gray-600">(6+ months, steady revenue)</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">

          {/* Business Cash Advance */}
          <div className="bg-gradient-to-br from-white to-[#fefbf6] rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-amber-200">
            <div className="flex items-start justify-between mb-4">
              <div>
                <DollarSign className="w-12 h-12 text-amber-600 mb-3" strokeWidth={2.5} />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Business Cash Advance</h3>
                <p className="text-sm text-amber-700 font-semibold">The speed solution when opportunity knocks</p>
              </div>
              <div className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold">Up to $10M</div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Get up to 200% of your monthly deposits advanced immediately through our alternative lending partners. Perfect for seasonal businesses, fulfilling large orders, or bridging cash flow gaps.
            </p>

            <div className="space-y-3 text-sm mb-6">
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Approval Timeline:</span>
                <span className="font-bold text-gray-900">24-48 hours</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Min Credit:</span>
                <span className="font-bold text-gray-900">550+</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Time in Business:</span>
                <span className="font-bold text-gray-900">6+ months</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Min Revenue:</span>
                <span className="font-bold text-gray-900">$8K/month</span>
              </div>
            </div>

            <div className="flex gap-3">
              <a href="https://mesagroupcapital.com/for-businesses/business-funding" target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-all text-sm">
                Apply Now
              </a>
              <a href="https://link.mesagroupconsulting.com/widget/bookings/mesa-group-capital-funding-discovery" target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-4 py-2 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-lg border-2 border-gray-300 transition-all text-sm">
                Schedule Consultation
              </a>
            </div>
          </div>

          {/* Business Term Loans */}
          <div className="bg-gradient-to-br from-white to-[#fefbf6] rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-amber-200">
            <div className="flex items-start justify-between mb-4">
              <div>
                <Building2 className="w-12 h-12 text-amber-600 mb-3" strokeWidth={2.5} />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Business Term Loans</h3>
                <p className="text-sm text-amber-700 font-semibold">Traditional financing with modern speed</p>
              </div>
              <div className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold">Up to $5M</div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              SBA Express, 7(A) loans, equipment financing, franchise funding, and purchase order financing through our institutional lending partners.
            </p>

            <div className="space-y-3 text-sm mb-6">
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Approval Timeline:</span>
                <span className="font-bold text-gray-900">2-4 weeks</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Min Credit:</span>
                <span className="font-bold text-gray-900">650+</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Time in Business:</span>
                <span className="font-bold text-gray-900">2+ years</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Min Revenue:</span>
                <span className="font-bold text-gray-900">$20K/month</span>
              </div>
            </div>

            <div className="flex gap-3">
              <a href="https://mesagroupcapital.com/for-businesses/business-funding" target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-all text-sm">
                Apply Now
              </a>
              <a href="https://link.mesagroupconsulting.com/widget/bookings/mesa-group-capital-funding-discovery" target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-4 py-2 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-lg border-2 border-gray-300 transition-all text-sm">
                Schedule Consultation
              </a>
            </div>
          </div>

          {/* Business Line of Credit */}
          <div className="bg-gradient-to-br from-white to-[#fefbf6] rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-amber-200">
            <div className="flex items-start justify-between mb-4">
              <div>
                <CreditCard className="w-12 h-12 text-amber-600 mb-3" strokeWidth={2.5} />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Business Line of Credit</h3>
                <p className="text-sm text-amber-700 font-semibold">Your financial safety net</p>
              </div>
              <div className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold">Up to $250K</div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Revolving credit you can draw against as needed—pay interest only on what you use. Like a business credit card, but with serious limits and better terms.
            </p>

            <div className="space-y-3 text-sm mb-6">
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Approval Timeline:</span>
                <span className="font-bold text-gray-900">1-2 weeks</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Min Credit:</span>
                <span className="font-bold text-gray-900">650+</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Time in Business:</span>
                <span className="font-bold text-gray-900">2+ years</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Min Revenue:</span>
                <span className="font-bold text-gray-900">$20K/month</span>
              </div>
            </div>

            <div className="flex gap-3">
              <a href="https://mesagroupcapital.com/for-businesses/business-funding" target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-all text-sm">
                Apply Now
              </a>
              <a href="https://link.mesagroupconsulting.com/widget/bookings/mesa-group-capital-funding-discovery" target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-4 py-2 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-lg border-2 border-gray-300 transition-all text-sm">
                Schedule Consultation
              </a>
            </div>
          </div>

          {/* Invoice Factoring */}
          <div className="bg-gradient-to-br from-white to-[#fefbf6] rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-green-300">
            <div className="flex items-start justify-between mb-4">
              <div>
                <FileText className="w-12 h-12 text-green-600 mb-3" strokeWidth={2.5} />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Invoice Factoring</h3>
                <p className="text-sm text-green-700 font-semibold">Turn receivables into immediate capital</p>
              </div>
              <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">Up to $5M</div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Don't wait 30, 60, or 90 days to get paid. Sell your outstanding invoices to our factoring partners at a discount and access cash now.
            </p>

            <div className="space-y-3 text-sm mb-6">
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Approval Timeline:</span>
                <span className="font-bold text-gray-900">3-5 days</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Min Credit:</span>
                <span className="font-bold text-green-600">530+ ⭐ Lowest</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Time in Business:</span>
                <span className="font-bold text-gray-900">3 months</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Min Revenue:</span>
                <span className="font-bold text-gray-900">$40K/month</span>
              </div>
            </div>

            <div className="flex gap-3">
              <a href="https://mesagroupcapital.com/for-businesses/business-funding" target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all text-sm">
                Apply Now
              </a>
              <a href="https://link.mesagroupconsulting.com/widget/bookings/mesa-group-capital-funding-discovery" target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-4 py-2 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-lg border-2 border-gray-300 transition-all text-sm">
                Schedule Consultation
              </a>
            </div>
          </div>

          {/* Equipment Financing */}
          <div className="bg-gradient-to-br from-white to-[#fefbf6] rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-amber-200">
            <div className="flex items-start justify-between mb-4">
              <div>
                <Factory className="w-12 h-12 text-amber-600 mb-3" strokeWidth={2.5} />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Equipment Financing</h3>
                <p className="text-sm text-amber-700 font-semibold">Own the tools that grow your business</p>
              </div>
              <div className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold">$1K-$20M</div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Finance new or used equipment with the equipment itself as collateral through our specialized equipment lenders. Preserve cash flow while upgrading your capabilities.
            </p>

            <div className="space-y-3 text-sm mb-6">
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Approval Timeline:</span>
                <span className="font-bold text-gray-900">5-7 days</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Min Credit:</span>
                <span className="font-bold text-gray-900">700+</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Time in Business:</span>
                <span className="font-bold text-gray-900">4 months statements</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Min Revenue:</span>
                <span className="font-bold text-gray-900">$8K/month</span>
              </div>
            </div>

            <div className="flex gap-3">
              <a href="https://mesagroupcapital.com/for-businesses/business-funding" target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-all text-sm">
                Apply Now
              </a>
              <a href="https://link.mesagroupconsulting.com/widget/bookings/mesa-group-capital-funding-discovery" target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-4 py-2 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-lg border-2 border-gray-300 transition-all text-sm">
                Schedule Consultation
              </a>
            </div>
          </div>

          {/* Commercial Real Estate */}
          <div className="bg-gradient-to-br from-white to-[#fefbf6] rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-blue-300">
            <div className="flex items-start justify-between mb-4">
              <div>
                <Building className="w-12 h-12 text-blue-600 mb-3" strokeWidth={2.5} />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Commercial Real Estate Loans</h3>
                <p className="text-sm text-blue-700 font-semibold">Stop paying rent—start building equity</p>
              </div>
              <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">Up to $100M</div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Mortgages for owner-occupied properties, investment real estate, fix-and-flip, new construction, and multi-family units through our commercial lending partners.
            </p>

            <div className="space-y-3 text-sm mb-6">
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Approval Timeline:</span>
                <span className="font-bold text-gray-900">4-8 weeks</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Min Credit:</span>
                <span className="font-bold text-gray-900">620+</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Time in Business:</span>
                <span className="font-bold text-gray-900">Experience helps</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">LTV:</span>
                <span className="font-bold text-gray-900">Up to 90%</span>
              </div>
            </div>

            <div className="flex gap-3">
              <a href="https://mesagroupcapital.com/for-businesses/business-funding" target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all text-sm">
                Apply Now
              </a>
              <a href="https://link.mesagroupconsulting.com/widget/bookings/mesa-group-capital-funding-discovery" target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-4 py-2 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-lg border-2 border-gray-300 transition-all text-sm">
                Schedule Consultation
              </a>
            </div>
          </div>

        </div>

        {/* Startup Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            For Startups & New Businesses <span className="text-gray-600">(Under 2 years)</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* STARTUP Unsecured */}
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-amber-700">
            <div className="flex items-start justify-between mb-4">
              <div>
                <Rocket className="w-12 h-12 text-white mb-3" strokeWidth={2.5} />
                <h3 className="text-2xl font-bold mb-2">STARTUP Unsecured Business Funding</h3>
                <p className="text-sm text-amber-100 font-semibold">Launch without the traditional hurdles</p>
              </div>
              <div className="bg-white text-amber-600 px-3 py-1 rounded-full text-sm font-bold">Up to $150K</div>
            </div>

            <p className="leading-relaxed mb-6 text-amber-50">
              Revolving credit lines with no revenue requirements through our startup-friendly lenders. Use funds for any business purpose—no restrictions.
            </p>

            <div className="space-y-3 text-sm mb-6">
              <div className="flex justify-between py-2 border-b border-amber-400">
                <span>Approval Timeline:</span>
                <span className="font-bold">5-10 days</span>
              </div>
              <div className="flex justify-between py-2 border-b border-amber-400">
                <span>Min Credit:</span>
                <span className="font-bold">680+</span>
              </div>
              <div className="flex justify-between py-2 border-b border-amber-400">
                <span>Time in Business:</span>
                <span className="font-bold">NONE ⭐</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Min Revenue:</span>
                <span className="font-bold">$0-$4K</span>
              </div>
            </div>

            <div className="flex gap-3">
              <a href="https://mesagroupcapital.com/for-businesses/business-funding" target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-4 py-2 bg-white text-amber-600 hover:bg-amber-50 font-semibold rounded-lg transition-all text-sm">
                Apply Now
              </a>
              <a href="https://link.mesagroupconsulting.com/widget/bookings/mesa-group-capital-funding-discovery" target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-4 py-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-lg transition-all text-sm">
                Schedule Consultation
              </a>
            </div>
          </div>

          {/* STARTUP Small Business Loan */}
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-amber-700">
            <div className="flex items-start justify-between mb-4">
              <div>
                <Briefcase className="w-12 h-12 text-white mb-3" strokeWidth={2.5} />
                <h3 className="text-2xl font-bold mb-2">STARTUP Small Business Loan</h3>
                <p className="text-sm text-amber-100 font-semibold">Personal income, business purposes</p>
              </div>
              <div className="bg-white text-amber-600 px-3 py-1 rounded-full text-sm font-bold">Up to $150K</div>
            </div>

            <p className="leading-relaxed mb-6 text-amber-50">
              Unsecured personal loans with 3-7 year terms. Direct cash access for any business need through our alternative lending partners.
            </p>

            <div className="space-y-3 text-sm mb-6">
              <div className="flex justify-between py-2 border-b border-amber-400">
                <span>Approval Timeline:</span>
                <span className="font-bold">1-2 weeks</span>
              </div>
              <div className="flex justify-between py-2 border-b border-amber-400">
                <span>Min Credit:</span>
                <span className="font-bold">680+</span>
              </div>
              <div className="flex justify-between py-2 border-b border-amber-400">
                <span>Time in Business:</span>
                <span className="font-bold">NONE ⭐</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Min Income:</span>
                <span className="font-bold">$4K/mo (W2)</span>
              </div>
            </div>

            <div className="flex gap-3">
              <a href="https://mesagroupcapital.com/for-businesses/business-funding" target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-4 py-2 bg-white text-amber-600 hover:bg-amber-50 font-semibold rounded-lg transition-all text-sm">
                Apply Now
              </a>
              <a href="https://link.mesagroupconsulting.com/widget/bookings/mesa-group-capital-funding-discovery" target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-4 py-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-lg transition-all text-sm">
                Schedule Consultation
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

const ComparisonTable = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Quick Comparison: Find Your Best Fit
          </h2>
          <p className="text-xl text-gray-700">
            Compare all 8 funding options side-by-side to identify which solution matches your business profile.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl shadow-2xl">
          <table className="w-full bg-white rounded-lg text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-amber-500 to-amber-600 text-white">
                <th className="px-4 py-4 text-left font-bold">Funding Type</th>
                <th className="px-4 py-4 text-center font-bold">Speed</th>
                <th className="px-4 py-4 text-center font-bold">Amount</th>
                <th className="px-4 py-4 text-center font-bold">Min Credit</th>
                <th className="px-4 py-4 text-center font-bold">Time in Business</th>
                <th className="px-4 py-4 text-center font-bold">Min Revenue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-amber-50">
                <td className="px-4 py-4 font-semibold">Business Cash Advance</td>
                <td className="px-4 py-4 text-center">24-48 hrs</td>
                <td className="px-4 py-4 text-center">Up to $10M</td>
                <td className="px-4 py-4 text-center">550+</td>
                <td className="px-4 py-4 text-center">6 months</td>
                <td className="px-4 py-4 text-center">$8K/mo</td>
              </tr>
              <tr className="hover:bg-amber-50">
                <td className="px-4 py-4 font-semibold">Business Term Loans</td>
                <td className="px-4 py-4 text-center">2-4 weeks</td>
                <td className="px-4 py-4 text-center">Up to $5M</td>
                <td className="px-4 py-4 text-center">650+</td>
                <td className="px-4 py-4 text-center">2+ years</td>
                <td className="px-4 py-4 text-center">$20K/mo</td>
              </tr>
              <tr className="hover:bg-amber-50">
                <td className="px-4 py-4 font-semibold">Business Line of Credit</td>
                <td className="px-4 py-4 text-center">1-2 weeks</td>
                <td className="px-4 py-4 text-center">Up to $250K</td>
                <td className="px-4 py-4 text-center">650+</td>
                <td className="px-4 py-4 text-center">2+ years</td>
                <td className="px-4 py-4 text-center">$20K/mo</td>
              </tr>
              <tr className="bg-green-50 hover:bg-green-100">
                <td className="px-4 py-4 font-semibold">Invoice Factoring ⭐ Lowest Credit</td>
                <td className="px-4 py-4 text-center">3-5 days</td>
                <td className="px-4 py-4 text-center">Up to $5M</td>
                <td className="px-4 py-4 text-center font-bold text-green-600">530+</td>
                <td className="px-4 py-4 text-center">3 months</td>
                <td className="px-4 py-4 text-center">$40K/mo</td>
              </tr>
              <tr className="hover:bg-amber-50">
                <td className="px-4 py-4 font-semibold">Equipment Financing</td>
                <td className="px-4 py-4 text-center">5-7 days</td>
                <td className="px-4 py-4 text-center">$1K-$20M</td>
                <td className="px-4 py-4 text-center">700+</td>
                <td className="px-4 py-4 text-center">4 mo statements</td>
                <td className="px-4 py-4 text-center">$8K/mo</td>
              </tr>
              <tr className="bg-blue-50 hover:bg-blue-100">
                <td className="px-4 py-4 font-semibold">Commercial Real Estate ⭐ Highest Limit</td>
                <td className="px-4 py-4 text-center">4-8 weeks</td>
                <td className="px-4 py-4 text-center font-bold text-blue-600">Up to $100M</td>
                <td className="px-4 py-4 text-center">620+</td>
                <td className="px-4 py-4 text-center">Experience helps</td>
                <td className="px-4 py-4 text-center">N/A</td>
              </tr>
              <tr className="bg-purple-50 hover:bg-purple-100">
                <td className="px-4 py-4 font-semibold">STARTUP Unsecured ⭐ No Business History</td>
                <td className="px-4 py-4 text-center">5-10 days</td>
                <td className="px-4 py-4 text-center">Up to $150K</td>
                <td className="px-4 py-4 text-center">680+</td>
                <td className="px-4 py-4 text-center font-bold text-purple-600">NONE</td>
                <td className="px-4 py-4 text-center">$0-$4K</td>
              </tr>
              <tr className="bg-purple-50 hover:bg-purple-100">
                <td className="px-4 py-4 font-semibold">STARTUP Small Biz Loan ⭐ No Business History</td>
                <td className="px-4 py-4 text-center">1-2 weeks</td>
                <td className="px-4 py-4 text-center">Up to $150K</td>
                <td className="px-4 py-4 text-center">680+</td>
                <td className="px-4 py-4 text-center font-bold text-purple-600">NONE</td>
                <td className="px-4 py-4 text-center">$4K personal</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-12 bg-gradient-to-br from-amber-50 to-white rounded-xl p-8 shadow-lg border-2 border-amber-300">
          <div className="flex items-start gap-4">
            <Lightbulb className="w-8 h-8 text-amber-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Not sure which product fits? Schedule a Free Consultation and we'll recommend the best options for your specific situation.
              </h3>
              <p className="text-gray-700 mb-6">
                Ready to get started? Apply Now
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://link.mesagroupconsulting.com/widget/bookings/mesa-group-capital-funding-discovery" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3">
                    Schedule Free Consultation
                  </Button>
                </a>
                <a href="https://mesagroupcapital.com/for-businesses/business-funding" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-white hover:bg-gray-50 text-gray-900 font-bold px-8 py-3 border-2 border-gray-300">
                    Apply Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const SettingRealisticExpectations = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-amber-50 to-white">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Setting Realistic Expectations
          </h2>
          <h3 className="text-2xl font-bold text-amber-700">
            How Much Funding Can You Actually Get?
          </h3>
        </div>

        <div className="bg-white rounded-xl p-8 md:p-12 shadow-2xl border-2 border-amber-300 mb-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Here's the truth most brokers won't tell you upfront: <strong>your funding amount is tied directly to your revenue, not your dreams.</strong>
          </p>

          <div className="bg-amber-50 rounded-xl p-8 mb-8 border-l-4 border-amber-500">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">The 10-20% Rule:</h4>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As a general guideline, most lenders will approve funding equal to <strong>10-20% of your annual revenue</strong> for unsecured products like lines of credit, term loans, and cash advances.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-amber-600 w-32">$100K</div>
                <ArrowRight className="w-6 h-6 text-gray-400" />
                <div className="text-lg text-gray-700">$10K-$20K typical funding range</div>
              </div>
              <div className="flex items-center gap-4 bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-amber-600 w-32">$500K</div>
                <ArrowRight className="w-6 h-6 text-gray-400" />
                <div className="text-lg text-gray-700">$50K-$100K typical funding range</div>
              </div>
              <div className="flex items-center gap-4 bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-amber-600 w-32">$1M</div>
                <ArrowRight className="w-6 h-6 text-gray-400" />
                <div className="text-lg text-gray-700">$100K-$200K typical funding range</div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <a href="#calculator" className="text-amber-600 hover:text-amber-700 font-bold underline">
                Use Our Calculator Above to See Your Range →
              </a>
            </div>
          </div>

          <h4 className="text-xl font-bold text-gray-900 mb-4">Why this matters:</h4>
          <p className="text-gray-700 leading-relaxed mb-6">
            This prevents you from wasting time chasing $100K in funding when your business generates $80K/year. It's not that lenders don't believe in your potential—it's that they're underwriting based on <strong>demonstrated cash flow, not projected growth.</strong>
          </p>

          <h4 className="text-xl font-bold text-gray-900 mb-4">Exceptions to this rule:</h4>
          <ul className="space-y-3 text-gray-700 mb-6">
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
              <span><strong>Secured loans</strong> (equipment, real estate) can exceed this because collateral reduces lender risk</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
              <span><strong>SBA loans</strong> often allow higher multiples with strong credit and business plans</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
              <span><strong>Invoice factoring</strong> is based on receivables, not total revenue</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
              <span><strong>Multiple funding sources</strong> stacked together can push past 20% total</span>
            </li>
          </ul>

          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">The smart approach:</h4>
            <p className="text-gray-700 leading-relaxed">
              Start with funding that matches your current revenue. Deploy it strategically to grow. Then qualify for larger amounts based on your new, higher revenue. Many of our most successful clients have done 2-3 funding rounds, each larger than the last, as their business expanded.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 text-center shadow-lg border-2 border-gray-300">
          <p className="text-xl text-gray-800 font-semibold mb-4">
            Bottom line: We'd rather set realistic expectations upfront than promise $500K and deliver $50K.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            During your consultation, we'll give you an honest assessment of what funding amounts are realistic for your revenue level.
          </p>
          <a href="https://link.mesagroupconsulting.com/widget/bookings/mesa-group-capital-funding-discovery" target="_blank" rel="noopener noreferrer">
            <Button className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3">
              Schedule Your Free Consultation
            </Button>
          </a>
        </div>

      </div>
    </section>
  );
};

const RealTalkQualifications = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Talk About Qualifications
          </h2>
        </div>

        <div className="bg-white rounded-xl p-8 md:p-12 shadow-2xl border-2 border-amber-300">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Here's what we've learned after funding <strong>1,000+ businesses</strong> through Mesa Group Capital:
          </p>

          <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-6 mb-6 border-l-4 border-amber-500">
            <p className="text-lg text-gray-800 font-semibold mb-4">
              The listed minimums are guidelines, not absolutes.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We've secured funding for clients who didn't check every box because we:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Positioned their application strategically</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Found lenders within our network who value their specific industry</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Built compensating factors into their profile</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Timed applications when their business showed momentum</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 rounded-xl p-6 mb-6 border-l-4 border-red-500">
            <p className="text-lg text-gray-800 font-semibold mb-4">
              However, some fundamentals matter:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span><strong>Credit utilization above 30%</strong> makes approval more challenging across most lenders</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span><strong>Debt-to-income ratios above 50%</strong> significantly limit available options</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span><strong>No credit history</strong> = no funding (you'll need established credit before applying)</span>
              </li>
            </ul>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            If you're close but not quite there? We'll give you honest feedback during your consultation about what needs to improve before applying. In some cases, our sister company <strong>Mesa Group Consulting</strong> can help you build the credit foundation needed to qualify—but that's a separate service focused on long-term credit building, not a quick fix.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-300">
            <p className="text-lg text-gray-800 font-semibold text-center">
              <strong>Co-signers accepted:</strong> All funding types accept co-signers to strengthen applications.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

const WhyMesaGetsResults = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white via-amber-50 to-white">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Mesa Group Capital Gets Better Results
          </h2>
          <p className="text-2xl text-[#f9c65d] font-semibold">
            Most Brokers Submit Your Application and Hope. We Engineer Your Approval.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-amber-200 hover:shadow-2xl transition-shadow">
            <div className="w-12 h-12 bg-amber-500 text-white rounded-lg flex items-center justify-center mb-4">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">75+ Curated Lender Relationships</h3>
            <p className="text-gray-700 leading-relaxed">
              We know which lenders approve which profiles, what industries they prefer, and what red flags they overlook. No wasted applications, no credit inquiry damage.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-amber-200 hover:shadow-2xl transition-shadow">
            <div className="w-12 h-12 bg-amber-500 text-white rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Pre-Qualification Strategy</h3>
            <p className="text-gray-700 leading-relaxed">
              We test the waters with soft inquiries before committing your credit. Only submit formal applications when we know approval is likely.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-amber-200 hover:shadow-2xl transition-shadow">
            <div className="w-12 h-12 bg-amber-500 text-white rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Application Optimization</h3>
            <p className="text-gray-700 leading-relaxed">
              How you present your business matters as much as the numbers. We craft applications that get approved—highlighting strengths, addressing concerns proactively, and positioning you as a smart investment.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-amber-200 hover:shadow-2xl transition-shadow">
            <div className="w-12 h-12 bg-amber-500 text-white rounded-lg flex items-center justify-center mb-4">
              <Handshake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Terms Negotiation</h3>
            <p className="text-gray-700 leading-relaxed">
              Mesa Group Capital has funded $50M+ in business loans through our network. Lenders give us terms they won't offer direct applicants because we bring them qualified, well-presented deals.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-amber-200 hover:shadow-2xl transition-shadow">
            <div className="w-12 h-12 bg-amber-500 text-white rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Post-Funding Strategy</h3>
            <p className="text-gray-700 leading-relaxed">
              Getting funded is step one. We show you how to use that capital to strengthen your profile and qualify for even better terms in your next funding round.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

const TheProcessSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            From <span className="text-[#f9c65d]">"Maybe"</span> to <span className="text-[#f9c65d]">"Approved"</span> in 4 Simple Steps
          </h2>
        </div>

        <div className="space-y-8">

          <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-amber-500">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-2xl">1</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Free Funding Consultation (30 minutes)</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We'll discuss your business, what you need capital for, and your growth plans. Together, we'll determine which funding products from our network best match your situation and timeline. This consultation is completely free with no obligation.
                </p>
                <a href="https://link.mesagroupconsulting.com/widget/bookings/mesa-group-capital-funding-discovery" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-bold">
                  Schedule Your Consultation <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-amber-500">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-2xl">2</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Fundability Assessment (2-3 days)</h3>
                <p className="text-gray-700 leading-relaxed">
                  We review your credit profile and bank statements to verify fundability before submitting anything. This ensures we're positioning you for success and not wasting your time or damaging your credit with premature applications. We'll identify your strongest funding pathways and set realistic expectations for approval odds and terms.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-amber-500">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-2xl">3</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Network Submission & Advisor Assignment (1-2 weeks)</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Once we confirm you're fundable, we submit your application strategically across our 75+ lender network to secure your best offers. You'll be assigned a dedicated funding advisor and get access to our client portal where you can track progress, upload documents, and communicate directly with our team throughout the process.
                </p>
                <p className="text-gray-700 font-semibold">
                  Ready to skip the consultation? <a href="https://mesagroupcapital.com/for-businesses/business-funding" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">Apply directly here</a>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-amber-500">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-2xl">4</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Funding & Deployment (Timeline varies by product)</h3>
                <p className="text-gray-700 leading-relaxed">
                  After you select your preferred offer, we guide you through closing. Funds typically hit your account within 3-5 business days of final approval. Your funding advisor will provide guidance on optimal deployment strategies to maximize ROI and position you for future funding rounds if needed.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

const EnhancedSocialProofSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-amber-50 to-white">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Real Businesses, Real Results
          </h2>
          <div className="inline-flex items-center gap-2 bg-white border-2 border-amber-400 px-6 py-3 rounded-full shadow-lg">
            <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
            <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
            <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
            <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
            <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
            <span className="text-gray-900 font-bold">Rated 5.0 Stars on Google</span>
          </div>
          <p className="text-gray-700 mt-3">Based on 200+ verified client reviews</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">

          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-green-200">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />)}
            </div>
            <p className="text-gray-700 italic leading-relaxed mb-4">
              "Mesa Group Capital got us $250K when three banks said no. Their broker relationships made the difference. We hired two employees, bought a second truck, and doubled revenue in six months. The team was transparent about timelines and delivered exactly what they promised."
            </p>
            <p className="font-bold text-gray-900">— Sarah M.</p>
            <p className="text-sm text-gray-600">Construction Company Owner | <strong>Funded: $250,000</strong></p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-green-200">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />)}
            </div>
            <p className="text-gray-700 italic leading-relaxed mb-4">
              "Funded in 18 days after months of rejections. The difference was night and day. Other brokers sent a generic application. Mesa Group Capital told our story and positioned us strategically across their lender network. They knew exactly which lenders would appreciate our tech business model."
            </p>
            <p className="font-bold text-gray-900">— James K.</p>
            <p className="text-sm text-gray-600">Tech Startup Founder | <strong>Funded: $85,000</strong></p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-green-200">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />)}
            </div>
            <p className="text-gray-700 italic leading-relaxed mb-4">
              "Got $75K even with damaged credit from my divorce. I thought my credit was too damaged. They helped me understand what their lenders actually care about and which programs I qualified for. Got $75K for inventory through their factoring partner. Now we're on track for our best year ever."
            </p>
            <p className="font-bold text-gray-900">— Patricia L.</p>
            <p className="text-sm text-gray-600">E-commerce Retailer | <strong>Funded: $75,000</strong></p>
          </div>

        </div>

        <div className="bg-white rounded-xl p-8 md:p-12 shadow-2xl border-2 border-amber-300">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">By The Numbers:</h3>
          <div className="grid md:grid-cols-5 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-amber-600 mb-2">$50M+</div>
              <div className="text-sm text-gray-600">Business Funding Facilitated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-600 mb-2">1,000+</div>
              <div className="text-sm text-gray-600">Businesses Funded</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-600 mb-2">30 Days</div>
              <div className="text-sm text-gray-600">Average Approval Timeline</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-600 mb-2">5.0 ⭐</div>
              <div className="text-sm text-gray-600">Google Rating (200+ Reviews)</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-600 mb-2">50 States</div>
              <div className="text-sm text-gray-600">Nationwide Coverage</div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-bold">
            Read More Reviews on Google →
          </a>
          <span className="mx-4 text-gray-400">|</span>
          <a href="https://mesagroupcapital.com/for-businesses/business-funding" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-bold">
            Start Your Application →
          </a>
        </div>

      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How is Mesa Group Capital different from applying directly with a bank?",
      answer: "Banks approve what fits their specific criteria. As a broker, we match you with lenders from our 75+ partner network whose criteria fits your business. Plus, we know how to present your application for maximum approval odds and negotiate better terms than you'd get directly."
    },
    {
      question: "Will this hurt my credit score?",
      answer: "We pre-qualify without hard inquiries through our broker relationships. Only when we're confident of approval do we submit formal applications—and even then, multiple applications within 14-45 days typically count as one inquiry for credit scoring purposes."
    },
    {
      question: "What if I've been denied before?",
      answer: "Perfect—tell us why. Previous denials give us intel on what to fix or avoid. During your free consultation, we'll review what happened and give you honest feedback about whether you're ready to apply again or if you need to strengthen your profile first. Many of our best success stories through Mesa Group Capital are clients who were denied elsewhere but got approved once we positioned them correctly."
    },
    {
      question: "How much does this cost?",
      answer: "Nothing. Mesa Group Capital's services are completely free to business owners. We earn commissions directly from lenders when your funding closes. You pay no application fees, no upfront costs, and no hidden charges. We only get paid when you get funded."
    },
    {
      question: "Are there really no application fees?",
      answer: "Correct. Unlike many brokers who charge application fees, we don't. Our entire compensation comes from the lender side of the transaction, which means our interests are perfectly aligned with yours—we both win when you get approved for the right funding at the best terms."
    },
    {
      question: "How fast can I get funded?",
      answer: "Cash advances: 24-48 hours. Lines of credit: 1-2 weeks. Term loans: 2-4 weeks. Real estate: 4-8 weeks. Speed depends on product type, lender workflow, and your documentation readiness."
    },
    {
      question: "Do you work with startups?",
      answer: "Yes. Mesa Group Capital has specific lender partners for businesses under 2 years old. Requirements differ from established business funding, but we have pathways for entrepreneurs just getting started."
    },
    {
      question: "What if my credit isn't good enough yet?",
      answer: "We'll be upfront during your fundability assessment. If you're not ready, we won't waste your time with applications that will get denied. In some cases, our sister company Mesa Group Consulting offers business credit building services to help you establish the foundation needed to qualify—but that's a separate engagement focused on long-term credit development."
    },
    {
      question: "Should I schedule a consultation or apply directly?",
      answer: "Schedule a consultation if: You've been denied before, you're unsure which product fits, your credit/revenue is borderline, or you want guidance on timing and strategy. Apply directly if: You know which product you want, you meet all the minimums clearly, and you're ready to move fast."
    },
    {
      question: "What's the relationship between Mesa Group Consulting and Mesa Group Capital?",
      answer: "Mesa Group Consulting is our advisory firm that helps businesses build credit, optimize operations, and grow strategically. Mesa Group Capital is our brokerage division that connects businesses to our network of 75+ lenders. Often clients work with both—we help them become fundable, then connect them to capital."
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Questions, <span className="text-[#f9c65d]">Answered</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-amber-300 transition-colors duration-300">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-amber-50 transition-colors duration-200"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-amber-600 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''}`}
                />
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                <div className="px-6 pb-5 pt-2 bg-white">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://link.mesagroupconsulting.com/widget/bookings/mesa-group-capital-funding-discovery" target="_blank" rel="noopener noreferrer">
              <Button className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3">
                Schedule Consultation
              </Button>
            </a>
            <a href="https://mesagroupcapital.com/for-businesses/business-funding" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white hover:bg-gray-50 text-gray-900 font-bold px-8 py-3 border-2 border-gray-300">
                Apply Now
              </Button>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

const TwoPathsForward = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-amber-50 to-white">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Two Paths Forward
          </h2>
          <p className="text-xl text-gray-700">Not Sure Where to Start?</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Path 1: Consultation First */}
          <div className="bg-white rounded-xl p-8 shadow-2xl border-2 border-amber-400">
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg mb-6">
              <h3 className="text-2xl font-bold">Path 1: Free Consultation First</h3>
              <p className="text-amber-100 text-sm">(Recommended for most businesses)</p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Best if you:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Have been denied before</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Don't know which product fits your situation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Want to verify you're fundable before applying</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Need guidance on timing and strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Have credit or revenue concerns</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">What happens:</h4>
              <p className="text-gray-700 leading-relaxed">
                30-minute call → We assess your situation → Recommend best products → Set realistic expectations → If fundable, we apply for you
              </p>
            </div>

            <a href="https://link.mesagroupconsulting.com/widget/bookings/mesa-group-capital-funding-discovery" target="_blank" rel="noopener noreferrer" className="block">
              <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 text-lg">
                Schedule Free Consultation
              </Button>
            </a>
          </div>

          {/* Path 2: Apply Directly */}
          <div className="bg-white rounded-xl p-8 shadow-2xl border-2 border-gray-300">
            <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-6 py-3 rounded-lg mb-6">
              <h3 className="text-2xl font-bold">Path 2: Apply Directly</h3>
              <p className="text-gray-300 text-sm">(For ready-to-go businesses)</p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Best if you:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Know which product you want</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Clearly meet all the requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Have documentation ready</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Want to move fast (skip the consultation)</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">What happens:</h4>
              <p className="text-gray-700 leading-relaxed">
                Complete application → Assigned funding advisor → Submitted to our 75+ lender network → Receive multiple offers → Select best terms → Get funded
              </p>
            </div>

            <a href="https://mesagroupcapital.com/for-businesses/business-funding" target="_blank" rel="noopener noreferrer" className="block">
              <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-4 text-lg">
                Start Your Application
              </Button>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white via-amber-50 to-amber-100">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Business Doesn't Have <span className="text-[#f9c65d]">Time</span> to Wait
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6 max-w-3xl mx-auto">
            Every day without the right funding is a day your competition moves ahead. The market doesn't care about your credit score—it cares whether you can deliver.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-6 max-w-3xl mx-auto">
            Through Mesa Group Capital, we've helped over <strong>1,000 business owners</strong> close the gap between where they are and where they're going. Many of them heard "no" from traditional lenders before they heard "yes" from our network.
          </p>
          <p className="text-xl font-bold text-gray-900 mb-8">
            The question isn't whether you qualify. It's whether you're ready to stop letting funding be the bottleneck in your business growth.
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 md:p-12 shadow-2xl border-2 border-amber-400 mb-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Star className="w-6 h-6 text-amber-500 fill-amber-500" />
            <Star className="w-6 h-6 text-amber-500 fill-amber-500" />
            <Star className="w-6 h-6 text-amber-500 fill-amber-500" />
            <Star className="w-6 h-6 text-amber-500 fill-amber-500" />
            <Star className="w-6 h-6 text-amber-500 fill-amber-500" />
            <span className="text-gray-900 font-bold ml-2">5.0 Stars on Google | 200+ Reviews</span>
          </div>
          <p className="text-lg text-gray-700 italic text-center mb-8">
            "Best decision we made for our business. Professional, transparent, and they delivered results when nobody else could." — Real Client Review
          </p>

          <p className="text-center text-gray-700 mb-8">
            Our consultation and entire service is completely free. We only succeed when you do.
          </p>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Path:</h3>
            <div className="flex flex-col items-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div>
                  <a href="https://link.mesagroupconsulting.com/widget/bookings/mesa-group-capital-funding-discovery" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-10 py-4 text-xl h-auto">
                      Schedule Free Consultation
                    </Button>
                  </a>
                  <p className="text-sm text-gray-600 mt-2">← Start here if you have questions</p>
                </div>
                <div>
                  <a href="https://mesagroupcapital.com/for-businesses/business-funding" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-gray-800 hover:bg-gray-900 text-white font-bold px-10 py-4 text-xl h-auto">
                      Apply Now
                    </Button>
                  </a>
                  <p className="text-sm text-gray-600 mt-2">← Start here if you're ready to go</p>
                </div>
              </div>
              <PoweredByMesaGroup className="mt-4" />
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-2">Or call us: <a href="tel:6613103040" className="text-amber-600 hover:text-amber-700 font-bold">(661) 310-3040</a></p>
            <p className="text-sm text-gray-600">📅 Currently booking consultations 5-7 days out</p>
            <p className="text-sm text-gray-600 mt-4">Mesa Group Capital operates nationwide. Backed by Mesa Group Consulting's expertise.</p>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="text-2xl mb-2">🏆</div>
            <div className="text-sm font-semibold text-gray-900">5.0 Star Rating on Google</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="text-2xl mb-2">✅</div>
            <div className="text-sm font-semibold text-gray-900">Licensed in All 50 States</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="text-2xl mb-2">💰</div>
            <div className="text-sm font-semibold text-gray-900">$50M+ in Funding Facilitated</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="text-2xl mb-2">🤝</div>
            <div className="text-sm font-semibold text-gray-900">75+ Lender Network</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="text-2xl mb-2">⚡</div>
            <div className="text-sm font-semibold text-gray-900">1,000+ Businesses Funded</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="text-2xl mb-2">🔒</div>
            <div className="text-sm font-semibold text-gray-900">No Upfront Fees Ever</div>
          </div>
        </div>

        <div className="mt-12 bg-gray-100 rounded-xl p-6 text-center">
          <p className="text-xs text-gray-600 leading-relaxed">
            <strong>Disclaimers:</strong> Mesa Group Capital is a commercial loan brokerage operating in all 50 states. Our services are provided at no cost to clients—we earn commissions from lenders upon successful funding. Funding approval is based on credit profile health, business financials, and individual lender criteria. Minimum requirements listed are guidelines; exceptions may apply. Not all products available in all situations. The funding calculator provides estimates based on industry standards; actual amounts depend on individual assessment.
          </p>
        </div>

      </div>
    </section>
  );
};

export default BusinessFunding2;
