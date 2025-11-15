import { useState } from 'react';
import Header from '@/components/Header';
import { 
  Trophy, CreditCard, Rocket, Building2, FileText, TrendingUp, 
  Coins, BarChart3, Hammer, Target, Building, Banknote, 
  Star, Phone, MapPin, Check, Lightbulb 
} from 'lucide-react';

const ZeroInterestBusinessFunding = () => {
  return (
    <div className="min-h-screen bg-background font-['Inter',sans-serif]">
      <Header />
      <HeroSection />
      <SuccessStoryTeaser />
      <NineFundingSolutions />
      <ZeroPercentAdvantage />
      <MesaGroupProcess />
      <QualificationFactors />
      <BakersfieldTestimonials />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

// Hero Section
const HeroSection = () => (
  <section className="bg-gradient-to-br from-white via-amber-50 to-white py-16 md:py-20 px-6 animate-fade-in">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Content */}
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-md border-2 border-amber-300">
            <Trophy className="w-4 h-4" />
            $42M+ Funded for 720+ Businesses
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-amber-600">0% Interest</span> Business Funding That Actually Makes Sense
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
            Stop sacrificing your profits to interest payments. Get <strong>$25,000 to $250,000</strong> in business capital with <strong>0% interest for 12-18 months</strong>.
          </p>

          <div className="bg-white rounded-lg p-6 mb-8 shadow-lg border-l-4 border-amber-500">
            <p className="text-lg text-gray-900 mb-3">
              <strong>Unlike traditional loans that eat your cash flow,</strong> our 0% promotional periods let you invest the money and see returns <em>before</em> any interest kicks in.
            </p>
            <div className="flex flex-wrap gap-3 text-base text-gray-600">
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-amber-600" /> No collateral required on most options</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-amber-600" /> Same-day approval available</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-amber-600" /> Credit scores as low as 550+ accepted</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://funding-app.mesagroupconsulting.com/opt-in/apply-page"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-10 py-5 text-center hover:scale-105"
            >
              Apply for 0% Funding Now
            </a>
            
            <a
              href="tel:6613103040"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#bb9446] text-xl font-semibold px-10 py-5 rounded-lg border-2 border-[#bb9446] hover:bg-[#f8d899] transition-all duration-200 text-center hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              (661) 310-3040
            </a>
          </div>

          <p className="text-sm text-gray-600 mt-4 italic">
            Serving Bakersfield &amp; businesses nationwide since 2015
          </p>
        </div>

        {/* Right: Stats Cards */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in">
            <div className="text-5xl font-bold text-[#bb9446] mb-2">$42M+</div>
            <div className="text-sm text-gray-600">Total Funding Secured</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <div className="text-5xl font-bold text-[#bb9446] mb-2">720+</div>
            <div className="text-sm text-gray-600">Businesses Funded</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-5xl font-bold text-[#bb9446] mb-2">0%</div>
            <div className="text-sm text-gray-600">Interest for 12-18 Months</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-5xl font-bold text-[#bb9446] mb-2">30+</div>
            <div className="text-sm text-gray-600">Funding Partners</div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
);

// Success Story Teaser
const SuccessStoryTeaser = () => (
  <section className="py-12 px-6 bg-[#bb9446]">
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl p-8 shadow-2xl animate-fade-in">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-20 h-20 bg-gradient-to-br from-[#f9c65d] to-[#bb9446] rounded-full flex items-center justify-center text-white flex-shrink-0">
            <Star className="w-10 h-10" fill="white" />
          </div>
          <div>
            <p className="text-2xl font-bold text-[#3E3E3E]">"Mesa Group secured $87,000 in 0% interest financing when traditional banks wouldn't even look at my application."</p>
          </div>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          "The funding allowed me to purchase essential equipment and hire staff without worrying about crushing interest payments during our critical growth phase. We're now generating enough revenue to comfortably pay it back—and we haven't paid a single dollar in interest."
        </p>
        <p className="text-base text-gray-600 font-semibold">
          — Daniel Rodriguez, Bakersfield Entrepreneur
        </p>
      </div>
    </div>
  </section>
);

// Nine Funding Solutions
const NineFundingSolutions = () => {
  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: JSX.Element } = {
      'credit': <CreditCard className="w-12 h-12 mb-4 text-[#bb9446]" />,
      'rocket': <Rocket className="w-12 h-12 mb-4 text-[#bb9446]" />,
      'building': <Building2 className="w-12 h-12 mb-4 text-[#bb9446]" />,
      'file': <FileText className="w-12 h-12 mb-4 text-[#bb9446]" />,
      'trending': <TrendingUp className="w-12 h-12 mb-4 text-[#bb9446]" />,
      'coins': <Coins className="w-12 h-12 mb-4 text-[#bb9446]" />,
      'chart': <BarChart3 className="w-12 h-12 mb-4 text-[#bb9446]" />,
      'hammer': <Hammer className="w-12 h-12 mb-4 text-[#bb9446]" />,
      'target': <Target className="w-12 h-12 mb-4 text-[#bb9446]" />
    };
    return iconMap[iconName];
  };

  const solutions = [
    {
      icon: "credit",
      title: "0% Interest Business Credit Lines",
      description: "Our signature funding: $25,000 to $250,000 credit lines with 0% interest for 12-18 months. Use for equipment, inventory, working capital, or growth without paying interest during the promotional period.",
      features: [
        "Revolving credit (reuse as you repay)",
        "No collateral required",
        "Builds business credit profile"
      ]
    },
    {
      icon: "rocket",
      title: "Startup Business Funding",
      description: "New businesses need special funding because they don't have the history banks want. Get 0% credit lines, equipment leasing, and loans based on your personal credit—not years of business history you don't have yet.",
      features: [
        "Personal credit as low as 550+",
        "Multiple funding sources combined",
        "Fast approval (24-48 hours possible)"
      ]
    },
    {
      icon: "building",
      title: "Equipment Financing",
      description: "Buy essential equipment while keeping cash flow healthy. Choose from equipment loans, lease-to-own deals, or 0% promotional financing. Equipment serves as collateral, making approval easier.",
      features: [
        "Equipment acts as collateral",
        "Seamless vendor financing",
        "Preserve working capital"
      ]
    },
    {
      icon: "file",
      title: "Invoice Factoring",
      description: "Turn unpaid invoices into immediate cash instead of waiting 30-90 days. Get 80-90% upfront, with the rest (minus small fees) when customers pay. Perfect for B2B companies and contractors.",
      features: [
        "Cash within 24 hours",
        "Recourse & non-recourse options",
        "No debt on balance sheet"
      ]
    },
    {
      icon: "trending",
      title: "Business Expansion Funding",
      description: "Ready to open new locations or enter new markets? Get term loans, SBA-backed options, or 0% credit lines specifically for scaling established businesses while maintaining operations.",
      features: [
        "Substantial capital for scaling",
        "Multiple sources combined",
        "Strategic deployment planning"
      ]
    },
    {
      icon: "coins",
      title: "Merchant Cash Advances",
      description: "Get fast funding based on credit card sales, with repayment as a percentage of daily receipts. Great for retail, restaurants, and service providers. Payments adjust to your business performance.",
      features: [
        "Fast approval (same day possible)",
        "Automatic daily repayment",
        "Flexible during slow seasons"
      ]
    },
    {
      icon: "chart",
      title: "Revenue-Based Financing",
      description: "Innovative funding with payments based on monthly revenue instead of fixed amounts. Perfect for software companies, subscription businesses, and seasonal enterprises. Payments adjust to your cycles.",
      features: [
        "2-8% of monthly revenue",
        "Aligns with business cycles",
        "No stress during slow periods"
      ]
    },
    {
      icon: "hammer",
      title: "Business Credit Building",
      description: "Build and strengthen your business credit profile for access to 10-20x more capital with better terms. Our 6-12 month structured approach includes vendor credit, business cards, and higher-limit options.",
      features: [
        "Separate business from personal credit",
        "Reports to business bureaus",
        "Long-term funding foundation"
      ]
    },
    {
      icon: "target",
      title: "Strategic Funding Combinations",
      description: "Complex businesses need sophisticated strategies. We combine multiple funding tools simultaneously—blending 0% credit lines with term loans, equipment financing, and revenue-based options for optimal results.",
      features: [
        "Custom funding packages",
        "Coordinated timing",
        "Minimize credit inquiries"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3E3E3E] mb-4">
            9 Strategic Funding Solutions with 0% Interest
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each solution targets specific business needs, ensuring you get the right capital at the right time—without the burden of interest costs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-gradient-to-br from-[#f8d899] to-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#E5D2AF] hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              {getIcon(solution.icon)}
              <h3 className="text-2xl font-bold text-[#3E3E3E] mb-3">
                {solution.title}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {solution.description}
              </p>
              <div className="text-sm text-gray-600 space-y-1">
                {solution.features.map((feature, i) => (
                  <p key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#bb9446] flex-shrink-0" /> {feature}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://funding-app.mesagroupconsulting.com/opt-in/apply-page"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#bb9446] text-white text-xl font-bold px-12 py-5 rounded-lg hover:bg-[#a07d3a] transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Apply for 0% Funding Now
          </a>
          <p className="text-sm text-gray-600 mt-4">Free consultation • No obligation • Same-day approval possible</p>
        </div>

      </div>
    </section>
  );
};

// Zero Percent Advantage
const ZeroPercentAdvantage = () => (
  <section className="py-20 px-6 bg-gray-50">
    <div className="max-w-6xl mx-auto">
      
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#3E3E3E] mb-4">
          The 0% Advantage: Real Math, Real Savings
        </h2>
        <p className="text-xl text-gray-600">
          See exactly how much money stays in your business instead of going to interest payments.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        
        {/* Traditional Loan */}
        <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-red-200 animate-fade-in">
          <div className="text-center mb-6">
            <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
              ❌ Traditional Bank Loan
            </div>
            <h3 className="text-3xl font-bold text-[#3E3E3E]">$50,000 Loan @ 12% APR</h3>
          </div>
          <div className="space-y-4 text-lg">
            <div className="flex justify-between pb-3 border-b border-gray-200">
              <span className="text-gray-700">Loan Amount:</span>
              <span className="font-bold">$50,000</span>
            </div>
            <div className="flex justify-between pb-3 border-b border-gray-200">
              <span className="text-gray-700">Interest Rate:</span>
              <span className="font-bold text-red-600">12% APR</span>
            </div>
            <div className="flex justify-between pb-3 border-b border-gray-200">
              <span className="text-gray-700">18-Month Payment:</span>
              <span className="font-bold">$3,077/month</span>
            </div>
            <div className="flex justify-between pb-3 border-b border-gray-200">
              <span className="text-gray-700">Total Interest Paid:</span>
              <span className="font-bold text-red-600">$5,386</span>
            </div>
            <div className="flex justify-between pt-3">
              <span className="text-gray-700 font-semibold">Total Repayment:</span>
              <span className="font-bold text-2xl text-red-600">$55,386</span>
            </div>
          </div>
        </div>

        {/* Mesa 0% Funding */}
        <div className="bg-gradient-to-br from-[#f8d899] to-[#E5D2AF] rounded-xl p-8 shadow-2xl border-2 border-[#bb9446] animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="text-center mb-6">
            <div className="inline-block bg-[#bb9446] text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              ✅ Mesa Group 0% Funding
            </div>
            <h3 className="text-3xl font-bold text-[#3E3E3E]">$50,000 @ 0% for 18 Months</h3>
          </div>
          <div className="space-y-4 text-lg">
            <div className="flex justify-between pb-3 border-b border-[#bb9446]/30">
              <span className="text-gray-700">Loan Amount:</span>
              <span className="font-bold">$50,000</span>
            </div>
            <div className="flex justify-between pb-3 border-b border-[#bb9446]/30">
              <span className="text-gray-700">Interest Rate:</span>
              <span className="font-bold text-green-600">0% for 18 months</span>
            </div>
            <div className="flex justify-between pb-3 border-b border-[#bb9446]/30">
              <span className="text-gray-700">18-Month Payment:</span>
              <span className="font-bold">$2,778/month</span>
            </div>
            <div className="flex justify-between pb-3 border-b border-[#bb9446]/30">
              <span className="text-gray-700">Total Interest Paid:</span>
              <span className="font-bold text-green-600">$0</span>
            </div>
            <div className="flex justify-between pt-3">
              <span className="text-gray-700 font-semibold">Total Repayment:</span>
              <span className="font-bold text-2xl text-green-600">$50,000</span>
            </div>
          </div>
        <div className="mt-6 pt-6 border-t-2 border-[#bb9446] text-center">
          <p className="text-2xl font-bold text-[#bb9446] flex items-center justify-center gap-2">
            <Coins className="w-8 h-8" /> YOU SAVE: $5,386
          </p>
            <p className="text-sm text-gray-700 mt-2">
              That's money that stays in your business for growth, hiring, or profit.
            </p>
          </div>
        </div>

      </div>

      {/* Key Advantages List */}
      <div className="bg-white rounded-xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-[#3E3E3E] mb-6 text-center flex items-center justify-center gap-2">
        <Target className="w-8 h-8 text-[#bb9446]" /> Additional 0% Funding Advantages
      </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Maximize Cash Flow", desc: "More revenue stays available for reinvestment, creating compound growth effects" },
            { title: "Flexible Usage", desc: "Use for ANY legitimate business purpose—no restrictions on capital deployment" },
            { title: "Revolving Availability", desc: "Reuse capacity as you repay principal, creating ongoing access to capital" },
            { title: "Build Business Credit", desc: "Accounts report to business bureaus, strengthening your profile for future funding" },
            { title: "No Collateral Required", desc: "Most options remain unsecured, eliminating risks to business or personal assets" },
            { title: "Rapid Access", desc: "Same-day liquidity enables you to capitalize on time-sensitive opportunities" }
          ].map((advantage, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-[#bb9446] text-white rounded-full flex items-center justify-center">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-[#3E3E3E]">{advantage.title}</p>
                <p className="text-gray-600 text-sm">{advantage.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
);

// Mesa Group Process
const MesaGroupProcess = () => {
  const steps = [
    {
      title: "Initial Funding Consultation",
      description: "Our process begins with a thorough assessment of your business needs, current financial position, and growth objectives. We identify funding requirements, timeline considerations, and ideal structure based on your specific situation."
    },
    {
      title: "Business Profile Optimization",
      description: "Before applying, we help strengthen your business funding profile by addressing key factors that impact approval odds and terms. This includes business credit optimization, documentation preparation, and financial presentation improvements."
    },
    {
      title: "Custom Funding Strategy",
      description: "Based on your consultation and profile analysis, we develop a tailored funding strategy that may include single or multiple funding sources structured for optimal terms, rates, and alignment with your business objectives."
    },
    {
      title: "Lender Matching & Submission",
      description: "Using our extensive network of 30+ funding partners, we match your business with the ideal sources for your specific needs and profile. Our strategic submission approach maximizes approval odds while protecting your credit profile."
    },
    {
      title: "Application Management",
      description: "Our team oversees the entire application process, managing documentation requirements, responding to information requests, and advocating for your business with potential funders to ensure optimal results."
    },
    {
      title: "Funding Coordination & Deployment",
      description: "After approval, we coordinate the closing process and help develop a strategic plan for utilizing the funding to maximize return on investment while maintaining healthy cash flow. We provide continued support for long-term capital strategies."
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3E3E3E] mb-4">
            Our Proven 6-Step Funding Process
          </h2>
          <p className="text-xl text-gray-600">
            Systematic approach to securing optimal business funding for your specific needs.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-6 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex-shrink-0 w-20 h-20 bg-[#bb9446] text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-xl">
                {index + 1}
              </div>
              <div className="flex-1 bg-gradient-to-r from-[#f8d899] to-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-[#3E3E3E] mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://funding-app.mesagroupconsulting.com/opt-in/apply-page"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-12 py-5 hover:scale-105"
          >
            Start Your Funding Application
          </a>
        </div>

      </div>
    </section>
  );
};

// Qualification Factors
const QualificationFactors = () => {
  const getFactorIcon = (iconName: string) => {
    const iconMap: { [key: string]: JSX.Element } = {
      'chart': <BarChart3 className="w-16 h-16 text-[#bb9446]" />,
      'building': <Building className="w-16 h-16 text-[#bb9446]" />,
      'banknote': <Banknote className="w-16 h-16 text-[#bb9446]" />,
      'target': <Target className="w-16 h-16 text-[#bb9446]" />
    };
    return iconMap[iconName];
  };

  const factors = [
    {
      icon: "chart",
      title: "Credit Profile",
      description: "Personal and business credit significantly impact approval odds and limits. Strong profiles often access 5-10x more capital.",
      details: ["Personal: 550+ acceptable", "Business: We can help build"]
    },
    {
      icon: "building",
      title: "Business Structure",
      description: "Proper structure, documentation, and compliance affect eligibility. This includes entity structure, tax compliance, banking relationships, and operational documentation.",
      details: ["LLC, S-Corp, or C-Corp preferred", "Sole proprietors considered"]
    },
    {
      icon: "banknote",
      title: "Revenue & Cash Flow",
      description: "Consistent revenue improves funding options. Lenders prefer predictable streams that demonstrate viability and repayment capacity.",
      details: ["$8K+/month for most programs", "Startups: lower requirements"]
    },
    {
      icon: "target",
      title: "Industry Type",
      description: "Certain industries have better access to specific funding types based on risk profiles and lender preferences. We match you with industry-friendly lenders.",
      details: ["Most industries accepted", "Specialized programs available"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3E3E3E] mb-4">
            What Impacts Your Funding Approval?
          </h2>
          <p className="text-xl text-gray-600">
            Understanding these factors dramatically improves your success probability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {factors.map((factor, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex justify-center mb-4">
                {getFactorIcon(factor.icon)}
              </div>
              <h3 className="text-xl font-bold text-[#3E3E3E] mb-3">
                {factor.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                {factor.description}
              </p>
              <div className="mt-4 text-xs text-gray-600 space-y-1">
                {factor.details.map((detail, i) => (
                  <p key={i} className="flex items-center justify-center gap-2">
                    <Check className="w-3 h-3 text-[#bb9446]" /> {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

    <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-[#3E3E3E] mb-4 text-center flex items-center justify-center gap-2">
        <Lightbulb className="w-8 h-8 text-[#bb9446]" /> Don't Meet All Criteria? Apply Anyway.
      </h3>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
            Our 30+ funding partners have different requirements. Even if you don't meet traditional bank standards, we often find alternative options for credit scores as low as 550+, startups with limited revenue, and businesses in challenging industries.
          </p>
        </div>

      </div>
    </section>
  );
};

// Bakersfield Testimonials
const BakersfieldTestimonials = () => {
  const testimonials = [
    {
      text: "My credit was really bad. They really helped me now. I'm buying a house.",
      author: "Mesa Group Client, Bakersfield"
    },
    {
      text: "Evert is amazing! The best! Helped me out from my bankruptcy and starting new credit for my business. I would recommend him to my family and friends.",
      author: "Business Owner, Bakersfield"
    },
    {
      text: "I got recommended from one of my family members that Evert is a very knowledgeable agent from Mesa Group Consulting which helped him establish a high credit score. I scheduled an appointment with Evert about my situation and we had a great conversation about improving my credit score.",
      author: "Referred Client, Bakersfield"
    },
    {
      text: "Great service, Evert was able to get me approved on a 25 Grand Cherokee.",
      author: "Auto Financing Client, Bakersfield"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3E3E3E] mb-4">
            Bakersfield Entrepreneurs Share Their Funding Victories
          </h2>
          <p className="text-xl text-gray-600">
            Local business owners have accessed the capital they need without sacrificing cash flow to interest.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-[#f8d899] to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex gap-1 text-[#f9c65d] mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5" fill="#f9c65d" />)}
              </div>
              <p className="text-gray-700 italic leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <p className="text-sm text-gray-600 font-semibold">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <div className="bg-gradient-to-br from-[#bb9446] to-[#f9c65d] text-white rounded-xl p-8 shadow-xl">
          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6" fill="white" />)}
          </div>
          <p className="text-white text-xl italic leading-relaxed mb-6">
            "Mesa Group secured $87,000 in 0% interest financing for my startup when traditional banks wouldn't even consider my application. The funding allowed me to purchase essential equipment and hire staff without worrying about crushing interest payments during our critical growth phase."
          </p>
          <p className="text-sm text-white font-semibold">
            — Daniel Rodriguez, Bakersfield Entrepreneur
          </p>
        </div>

      </div>
    </section>
  );
};

// FAQ Section
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is 0% business funding, and how does it really work?",
      answer: "0% business funding refers to business credit lines with promotional 0% APR for 12-18 months. During this period, you pay no interest on the borrowed amount—only the principal. This is similar to 0% credit card offers but designed for business use with much higher limits ($25K-$250K+). After the promotional period ends, standard interest rates apply to any remaining balance, so strategic businesses pay it off during the 0% window."
    },
    {
      question: "What credit score do I need to qualify?",
      answer: "It depends on the funding type. For 0% business credit lines, we typically need personal credit scores of 680+. However, we have other funding options (merchant cash advances, invoice factoring, revenue-based financing) that accept scores as low as 550+. Even if your credit isn't perfect, we likely have options—that's why we work with 30+ funding partners with different requirements."
    },
    {
      question: "How much can I actually get approved for?",
      answer: "Funding amounts vary based on your credit profile, business revenue, time in business, and industry. For 0% credit lines: typically $25,000 to $250,000. For business term loans: up to $5 million. For merchant cash advances: up to $10 million (for very high-volume businesses). We've secured $42M+ in funding for 720+ businesses, with individual approvals ranging from $10K to $2M+. Your specific approval amount will be determined during the consultation process."
    },
    {
      question: "Do I need collateral or a down payment?",
      answer: "Most of our 0% business credit lines and unsecured term loans require NO collateral. Equipment financing uses the equipment itself as collateral. SBA loans and larger term loans may require collateral depending on the amount. We always prioritize unsecured options first to protect your business and personal assets."
    },
    {
      question: "How long does the approval process take?",
      answer: "Timeline varies by funding type. For 0% business credit lines: 3-7 business days typical. For merchant cash advances: same-day to 48 hours. For SBA loans or larger term loans: 2-6 weeks. During your consultation, we'll set clear timeline expectations based on your chosen funding solution."
    },
    {
      question: "What can I use the funding for?",
      answer: "You can use business funding for ANY legitimate business purpose: equipment purchases, inventory, payroll, marketing, expansion, working capital, debt consolidation, hiring, office space, vehicles, technology, or any other operational need. There are no restrictions on how you deploy the capital."
    },
    {
      question: "Will applying hurt my credit score?",
      answer: "We use strategic application management to minimize credit impacts. Initial consultations and soft credit checks don't affect your score. When we submit formal applications, there will be hard inquiries, but we coordinate timing to minimize the impact. Multiple inquiries for the same purpose within a 14-30 day window typically count as a single inquiry for scoring purposes."
    },
    {
      question: "What happens after the 0% promotional period ends?",
      answer: "After 12-18 months (depending on your specific terms), any remaining balance begins accruing interest at the standard APR (typically 15-25%). However, strategic businesses use the 0% period to grow revenue and pay down the principal before interest kicks in. We help you develop a repayment strategy during the deployment planning phase."
    },
    {
      question: "Do you work with startups or only established businesses?",
      answer: "Yes, we work with startups! We have specialized startup funding programs that focus on personal credit rather than business history. While some funding types require 2+ years in business, our startup programs can work with businesses as new as 3-6 months old—or even pre-revenue in some cases."
    },
    {
      question: "What makes Mesa Group different from other business funding companies?",
      answer: "Three key differences: (1) We're a Bakersfield-based local company with deep community roots and accountability. (2) We have access to 30+ funding partners, enabling us to match your specific profile with the best options rather than being limited to one lender. (3) We provide ongoing support and strategic guidance beyond just securing funding—we help you deploy capital effectively and build long-term funding relationships."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3E3E3E] mb-4">
            Business Funding Questions Answered
          </h2>
          <p className="text-xl text-gray-600">
            Get clarity before you apply.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left hover:bg-gray-50 transition-colors flex justify-between items-center"
              >
                <span className="text-lg font-semibold text-[#3E3E3E] pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-[#bb9446] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 py-5 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-4">
            Ready to discuss your specific funding needs?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:6613103040"
              className="inline-flex items-center gap-2 text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-10 py-5 hover:scale-105"
            >
              <Phone className="w-6 h-6" /> Call (661) 310-3040
            </a>
            <a
              href="https://funding-app.mesagroupconsulting.com/opt-in/apply-page"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#bb9446] text-xl font-semibold px-10 py-5 rounded-lg border-2 border-[#bb9446] hover:bg-[#f8d899] transition-all duration-200 hover:scale-105"
            >
              Apply Online
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

// Final CTA
const FinalCTA = () => (
  <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      {/* Main Headline */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
        Stop Paying Interest.<br />
        Start Growing Your <span className="text-amber-400">Business</span>.
      </h2>
      
      {/* Subheadline */}
      <p className="text-xl text-gray-300 mb-12">
        Get $25,000 to $250,000 in 0% interest business funding and keep every dollar working for your business—not for the bank.
      </p>

      {/* Two-Column Button Grid */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Primary Option (Orange Gradient) */}
        <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 text-left">
          <h3 className="text-2xl font-bold mb-4">Apply for Funding</h3>
          <p className="text-white/90 mb-6">
            Apply in 5 minutes. Get a decision within 24-48 hours. Receive funding within days.
          </p>
          <a href="https://funding-app.mesagroupconsulting.com/opt-in/apply-page" target="_blank" rel="noopener noreferrer" className="block w-full text-center py-4 px-6 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-lg transition-all duration-200">
            Apply for 0% Funding Now
          </a>
        </div>

        {/* Secondary Option (Glass Effect) */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-left border-2 border-white/20">
          <h3 className="text-2xl font-bold mb-4">Speak with a Specialist</h3>
          <p className="text-gray-300 mb-6">
            Get a free consultation with our funding experts. No obligation. Same-day approval possible.
          </p>
          <a href="tel:6613103040" className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500">
            <Phone className="mr-2 w-5 h-5" />
            (661) 310-3040
          </a>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="mt-8 text-sm text-gray-400">
        <p>Mesa Group Consulting | Bakersfield, CA</p>
        <p className="mt-1">Serving Bakersfield businesses since 2015 • $42M+ funded for 720+ businesses</p>
      </div>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer className="bg-[#3E3E3E] py-12 px-6 text-white">
    <div className="max-w-7xl mx-auto">
      
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold text-[#f9c65d] mb-4">Mesa Group Consulting</h3>
          <p className="text-sm text-gray-300 mb-2">
            Bakersfield's trusted business funding specialists since 2015.
          </p>
          <p className="text-sm text-gray-300 flex items-start gap-2">
            <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span>Bakersfield, CA 93301</span>
          </p>
          <p className="text-sm text-gray-300 mt-2 flex items-center gap-2">
            <Phone className="w-4 h-4" /> (661) 310-3040
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-[#f9c65d] mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#funding" className="hover:text-[#f9c65d] transition-colors">0% Business Funding</a></li>
            <li><a href="#credit" className="hover:text-[#f9c65d] transition-colors">Credit Repair</a></li>
            <li><a href="#monitoring" className="hover:text-[#f9c65d] transition-colors">Credit Monitoring</a></li>
            <li><a href="#business-credit" className="hover:text-[#f9c65d] transition-colors">Business Credit Building</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-xl font-bold text-[#f9c65d] mb-4">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#blog" className="hover:text-[#f9c65d] transition-colors">Mesa News Blog</a></li>
            <li><a href="#calculators" className="hover:text-[#f9c65d] transition-colors">Financial Calculators</a></li>
            <li><a href="#templates" className="hover:text-[#f9c65d] transition-colors">Letter Templates</a></li>
            <li><a href="#about" className="hover:text-[#f9c65d] transition-colors">About Us</a></li>
          </ul>
        </div>

        {/* Contact CTA */}
        <div>
          <h3 className="text-xl font-bold text-[#f9c65d] mb-4">Get Started Today</h3>
          <a
            href="https://funding-app.mesagroupconsulting.com/opt-in/apply-page"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-base font-bold px-6 py-3"
          >
            Apply for Funding
          </a>
          <p className="text-xs text-gray-400">
            Free consultation • No obligation • Fast approval
          </p>
        </div>

      </div>

      <div className="border-t border-gray-600 pt-6 text-center">
        <p className="text-sm text-gray-400 mb-2">
          © {new Date().getFullYear()} Mesa Group Consulting. All rights reserved.
        </p>
        <p className="text-xs text-gray-500 max-w-4xl mx-auto">
          <strong>Disclosure:</strong> Business funding products and services provided by Mesa Group Consulting and its lending partners. Approval and terms are subject to credit review and lender requirements. 0% promotional APR periods vary by product and lender; standard rates apply after promotional period. Not all applicants will qualify. Consult with a Mesa Group funding specialist for details specific to your situation.
        </p>
      </div>

    </div>
  </footer>
);

export default ZeroInterestBusinessFunding;
