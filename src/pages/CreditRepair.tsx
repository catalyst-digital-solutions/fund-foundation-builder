import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import { Trophy, Star, Calendar, Lock, AlertTriangle, Check, X, BarChart3, Search, Lightbulb, MapPin } from "lucide-react";

const CreditRepair = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  // Custom hook for counter animation
  const useCounter = (end: number, duration: number = 2000, delay: number = 0) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const counterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );

      if (counterRef.current) {
        observer.observe(counterRef.current);
      }

      return () => observer.disconnect();
    }, [isVisible]);

    useEffect(() => {
      if (!isVisible) return;

      const timer = setTimeout(() => {
        let startTime: number | null = null;
        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);
          
          setCount(Math.floor(progress * end));
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
      }, delay);

      return () => clearTimeout(timer);
    }, [isVisible, end, duration, delay]);

    return { count, counterRef };
  };

  const faqs = [
    {
      question: "How long does credit repair take?",
      answer:
        "First results typically appear in 30-45 days after bureaus respond to initial disputes. Significant improvements (50-100 point increases) usually take 3-6 months. Complex cases with many negative items may require 6-12 months for maximum results. We provide realistic timelines during your free analysis.",
    },
    {
      question: "Is credit repair legal?",
      answer:
        "Yes. The Fair Credit Reporting Act (FCRA) gives you the legal right to dispute inaccurate, unverifiable, or unfair information on your credit reports. Credit repair companies simply exercise these rights more effectively than most consumers can alone. We're fully compliant with CROA, TSR, and California CSO regulations.",
    },
    {
      question: "What negative items can you remove?",
      answer:
        "We can challenge any item that is inaccurate, unverifiable, or unfairly reported—including late payments, collections, charge-offs, repossessions, foreclosures, bankruptcies, judgments, tax liens, and unauthorized hard inquiries. However, we CANNOT remove accurate, verifiable negative items. Even 'accurate' items often contain errors (wrong dates, amounts, missing documentation) that make them removable.",
    },
    {
      question: "How much will my score improve?",
      answer:
        "Average clients see 60-110 point increases over 6 months. Some with multiple removable items gain 150+ points. However, improvement depends on your starting score, credit history, and how many negative items are successfully removed. We provide realistic expectations during your consultation—no false promises.",
    },
    {
      question: "Why can't I just dispute online with the bureaus myself?",
      answer:
        "You legally can—and some people succeed. But DIY has major drawbacks: (1) Takes 10-15 hours/month, (2) Generic disputes are easily rejected, (3) You need expertise in FCRA violations, Metro 2 compliance, debt validation, (4) No creditor relationships for negotiations, (5) One mistake can hurt your case. Professional service saves time and increases success rates significantly.",
    },
    {
      question: "Why can't I talk to someone before signing up?",
      answer:
        "Due to FTC Telemarketing Sales Rules (TSR) for credit repair, we legally cannot do phone consultations until you've signed an agreement and provided payment details. This protects consumers from high-pressure sales tactics. However, you CAN: (1) Use our live chat for questions, (2) Review our free credit analysis online, (3) Read all terms before committing. Once you're a client, phone support is available.",
    },
    {
      question: "What if the bureaus verify the account I'm disputing?",
      answer:
        "If a bureau verifies an item on the first attempt, we don't give up. We try alternative strategies: (1) Direct creditor negotiation, (2) Goodwill letters for accurate-but-old items, (3) Debt validation requests to collectors, (4) FCRA violation identification, (5) Re-dispute with additional documentation. Multiple dispute rounds often succeed even after initial verification.",
    },
  ];

  const handleCTAClick = (plan?: string) => {
    const baseUrl = "https://disputefox.com/signup";
    const params = new URLSearchParams({
      affiliate: "mesa",
      utm_source: "mesa",
      utm_medium: "website",
      utm_campaign: "credit_repair",
    });
    if (plan) params.append("plan", plan);
    window.open(`${baseUrl}?${params.toString()}`, "_blank", "noopener,noreferrer");
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Initialize counters for trust badges
  const successRateCounter = useCounter(91, 2000, 0);
  const bbbCounter = useCounter(100, 2000, 150);
  const yearCounter = useCounter(2012, 2000, 300);

  return (
    <main className="min-h-screen">
      <Header />
      {/* SECTION 1: HERO */}
      <section className="bg-gradient-to-br from-white via-amber-50 to-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* LEFT COLUMN - Content */}
            <div>
              {/* Eyebrow */}
              <p className="text-sm uppercase tracking-wide text-gray-600 mb-4">
                Professional Credit Repair in Bakersfield, CA
              </p>

              {/* H1 Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Remove <span className="text-amber-600">Inaccurate Items</span>. Rebuild Your <span className="text-amber-600">Credit</span>. Reclaim Your <span className="text-amber-600">Financial Future</span>.
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                91% success rate. Average 83-point increase. Results in 30-45 days. We handle disputes,
                negotiate with creditors, and track every change—so you don't have to.
              </p>

              {/* Transparency Callout Box */}
              <div className="bg-white/80 backdrop-blur-sm border-l-4 border-amber-500 p-6 rounded-lg mb-8 shadow-lg">
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle className="text-amber-600 w-6 h-6 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Here's What We Do (And Don't Do):
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="text-green-600 w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Dispute inaccurate, unverifiable items with all 3 bureaus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-600 w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Negotiate directly with creditors for removal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-600 w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Guide you through credit-building strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="text-red-600 w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>We CANNOT guarantee specific score increases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="text-red-600 w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>We CANNOT remove accurate, timely negative items</span>
                  </li>
                </ul>
                <p className="text-sm italic text-gray-600 mt-4 pt-4 border-t border-amber-500/30">
                  Why we're honest: Scam companies promise miracles. We deliver legal, proven results.
                </p>
              </div>

              {/* Primary CTA Button */}
              <button
                onClick={() => handleCTAClick()}
                className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-lg font-semibold px-8 py-4 w-full md:w-auto"
              >
                Get Your Free Credit Analysis
              </button>

              {/* Secondary CTA Link */}
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="block text-gray-700 hover:text-amber-600 underline text-base mt-4"
              >
                Not ready yet? Learn more about our process ↓
              </button>
            </div>

            {/* RIGHT COLUMN - Hero Image */}
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&h=800&q=80"
                alt="Mesa Group credit repair specialist reviewing client credit report"
                className="rounded-lg shadow-xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES SECTION - Full Width */}
      <section className="bg-white py-12 md:py-16 px-6 md:px-8">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div ref={successRateCounter.counterRef} className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-in border border-gray-100" style={{ animationDelay: '0ms' }}>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-16 h-16 bg-gradient-to-br from-mgc-yellow to-mgc-gold rounded-full flex items-center justify-center shadow-lg animate-scale-in" style={{ animationDelay: '100ms' }}>
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-mgc-dark-gray">{successRateCounter.count}%</div>
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Success Rate</div>
              </div>
            </div>
            <div ref={bbbCounter.counterRef} className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-in border border-gray-100" style={{ animationDelay: '150ms' }}>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-16 h-16 bg-gradient-to-br from-mgc-yellow to-mgc-gold rounded-full flex items-center justify-center shadow-lg animate-scale-in" style={{ animationDelay: '250ms' }}>
                  <Star className="w-8 h-8 text-white fill-white" />
                </div>
                <div className="text-4xl font-bold text-mgc-dark-gray">{bbbCounter.count >= 100 ? 'A+' : 'A'}</div>
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">BBB Rated</div>
              </div>
            </div>
            <div ref={yearCounter.counterRef} className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-in border border-gray-100" style={{ animationDelay: '300ms' }}>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-16 h-16 bg-gradient-to-br from-mgc-yellow to-mgc-gold rounded-full flex items-center justify-center shadow-lg animate-scale-in" style={{ animationDelay: '400ms' }}>
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-mgc-dark-gray">{yearCounter.count}</div>
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Since</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-in border border-gray-100" style={{ animationDelay: '450ms' }}>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-16 h-16 bg-gradient-to-br from-mgc-yellow to-mgc-gold rounded-full flex items-center justify-center shadow-lg animate-scale-in" style={{ animationDelay: '550ms' }}>
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-mgc-dark-gray">Bank-Level</div>
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Security</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PROBLEM AGITATION */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-8 text-center">
            Bad Credit Is Costing You Thousands—Every Month
          </h2>

          <div className="space-y-6 text-lg text-[#475569] leading-relaxed">
            <p>
              A low credit score isn't just a number. It's the difference between a 4% mortgage rate and
              an 8% rate—costing you $200,000+ over 30 years.
            </p>

            <p>
              It's getting denied for that business loan. Paying $3,000 deposits on apartments. Being
              passed over for jobs (yes, employers check credit).
            </p>

            <p>
              Here's the truth: Most negative items on your credit report contain errors, outdated
              information, or unverifiable data. Under federal law (FCRA), you have the right to
              challenge these items.
            </p>

            <p>
              But navigating disputes with Experian, Equifax, and TransUnion? Tracking responses?
              Negotiating with creditors? It's a full-time job.
            </p>

            <p className="font-semibold text-[#bb9446]">That's where we come in.</p>
          </div>

          {/* Statistic Callout */}
          <div className="bg-[#E5D2AF] border border-[#bb9446] rounded-lg p-6 mt-8">
            <div className="flex items-start gap-4">
              <BarChart3 className="w-10 h-10 text-mgc-gold flex-shrink-0" />
              <div>
                <p className="text-xl font-semibold text-[#3E3E3E] mb-2">
                  78% of credit reports contain errors or outdated information
                </p>
                <p className="text-sm text-[#64748B]">— Federal Trade Commission Study</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW IT WORKS */}
      <section id="how-it-works" className="bg-[#F8FAFC] py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-12 text-center">
            Our Proven Credit Repair Process
          </h2>

          {/* Timeline - 6 Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#bb9446] text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                  1
                </div>
                <h3 className="text-xl font-semibold text-[#3E3E3E]">Free Credit Analysis</h3>
              </div>
              <p className="text-[#475569] leading-relaxed">
                We review your reports from all 3 bureaus (Experian, Equifax, TransUnion). Identify every
                negative item affecting your score. Create a custom strategy.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#bb9446] text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                  2
                </div>
                <h3 className="text-xl font-semibold text-[#3E3E3E]">Sign Up for SmartCredit</h3>
              </div>
              <p className="text-[#475569] leading-relaxed mb-2">
                Connect your SmartCredit account (just $1.99 for 7 days). This pulls your full reports so
                we can start working immediately.
              </p>
              <p className="text-sm text-[#64748B] italic">
                Note: After trial: $29.95/month for ongoing monitoring. Cancel anytime.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#bb9446] text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                  3
                </div>
                <h3 className="text-xl font-semibold text-[#3E3E3E]">Review Your Strategy</h3>
              </div>
              <p className="text-[#475569] leading-relaxed">
                See exactly what we're disputing, why, and your estimated timeline. Typical: First changes
                in 30-45 days, significant improvement in 3-6 months.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#bb9446] text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                  4
                </div>
                <h3 className="text-xl font-semibold text-[#3E3E3E]">We File Disputes</h3>
              </div>
              <p className="text-[#475569] leading-relaxed">
                We send legally-compliant dispute letters citing FCRA violations, debt validation
                requirements, and Metro 2 compliance issues. Bureaus have 30 days to respond.
              </p>
            </div>

            {/* Step 5 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#bb9446] text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                  5
                </div>
                <h3 className="text-xl font-semibold text-[#3E3E3E]">Creditor Negotiations</h3>
              </div>
              <p className="text-[#475569] leading-relaxed">
                For items requiring creditor intervention, we negotiate goodwill adjustments,
                pay-for-delete arrangements, and account updates.
              </p>
            </div>

            {/* Step 6 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#bb9446] text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                  6
                </div>
                <h3 className="text-xl font-semibold text-[#3E3E3E]">Track Progress 24/7</h3>
              </div>
              <p className="text-[#475569] leading-relaxed">
                24/7 portal access (web + mobile). See every dispute response, score change, account
                update. Monthly progress reports keep you informed.
              </p>
            </div>
          </div>

          {/* CTA after timeline */}
          <div className="text-center mt-12">
            <button
              onClick={() => handleCTAClick()}
              className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-lg font-semibold px-8 py-4"
            >
              Start Your Credit Repair Journey
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHAT WE REMOVE */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-12 text-center">
            Negative Items We Challenge
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - List */}
            <div className="bg-[#F8FAFC] rounded-lg p-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#10B981] font-bold text-xl mt-1">✓</span>
                  <span className="text-[#3E3E3E]">Late Payments (30/60/90+ days late)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#10B981] font-bold text-xl mt-1">✓</span>
                  <span className="text-[#3E3E3E]">Collections Accounts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#10B981] font-bold text-xl mt-1">✓</span>
                  <span className="text-[#3E3E3E]">Charge-Offs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#10B981] font-bold text-xl mt-1">✓</span>
                  <span className="text-[#3E3E3E]">Repossessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#10B981] font-bold text-xl mt-1">✓</span>
                  <span className="text-[#3E3E3E]">Foreclosures</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#10B981] font-bold text-xl mt-1">✓</span>
                  <span className="text-[#3E3E3E]">Bankruptcies (past errors/violations)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#10B981] font-bold text-xl mt-1">✓</span>
                  <span className="text-[#3E3E3E]">Judgments & Tax Liens</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#10B981] font-bold text-xl mt-1">✓</span>
                  <span className="text-[#3E3E3E]">Hard Inquiries (unauthorized)</span>
                </li>
              </ul>
            </div>

            {/* Right Column - Important Disclaimer */}
            <div className="bg-[#E5D2AF] border border-[#bb9446] rounded-lg p-8">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-3xl">🔍</span>
                <h3 className="text-xl font-semibold text-[#3E3E3E]">Important</h3>
              </div>
              <p className="text-[#3E3E3E] leading-relaxed mb-4">
                We can only remove <strong>inaccurate, unverifiable, or unfair</strong> items.
              </p>
              <p className="text-[#3E3E3E] leading-relaxed mb-4">
                If an item is 100% accurate and properly reported, federal law prevents removal. However,
                even "accurate" items may have:
              </p>
              <ul className="space-y-2 text-[#3E3E3E] mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446]">•</span>
                  <span>Incorrect dates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446]">•</span>
                  <span>Wrong amounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446]">•</span>
                  <span>Missing documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446]">•</span>
                  <span>FCRA violations in reporting</span>
                </li>
              </ul>
              <p className="text-[#3E3E3E] leading-relaxed font-medium">
                That's what we look for and challenge.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <button
              onClick={() => handleCTAClick()}
              className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-lg font-semibold px-8 py-4"
            >
              See What's On Your Report
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 5: TESTIMONIALS */}
      <section className="bg-[#F8FAFC] py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-4 text-center">
            Real Clients, Real Results
          </h2>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#f9c65d] mb-2">91%</div>
              <div className="text-[#475569]">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#f9c65d] mb-2">83</div>
              <div className="text-[#475569]">Points Average Increase</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#f9c65d] mb-2">30-45</div>
              <div className="text-[#475569]">Days First Results</div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />
                ))}
              </div>
              <p className="text-[#475569] leading-relaxed mb-4 italic">
                "Right away got on my credit and making changes. Was given Mesa Group Consulting by a good
                friend from high school. Evert is a knowledgeable agent with well experience to handle my
                case. Thank you Mesa Group Consulting."
              </p>
              <p className="text-sm font-medium text-[#64748B]">
                — Jose Luis Herrera, Bakersfield, CA
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />
                ))}
              </div>
              <p className="text-[#475569] leading-relaxed mb-4 italic">
                "Removed 4 collections and 2 late payments in 90 days. My score went from 580 to 680.
                Finally qualified for a car loan at a decent rate."
              </p>
              <p className="text-sm font-medium text-[#64748B]">— Jennifer M., Kern County</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />
                ))}
              </div>
              <p className="text-[#475569] leading-relaxed mb-4 italic">
                "Tried DIY for 6 months—got nowhere. Mesa Group removed 3 items in the first 60 days. Wish
                I'd hired them sooner."
              </p>
              <p className="text-sm font-medium text-[#64748B]">— David R., Bakersfield, CA</p>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />
                ))}
              </div>
              <p className="text-[#475569] leading-relaxed mb-4 italic">
                "Transparent pricing, no hidden fees. Canceled after 5 months when I hit my goal score
                (720). Exactly as advertised."
              </p>
              <p className="text-sm font-medium text-[#64748B]">— Maria L., CA</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: PRICING */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-4 text-center">
            Flexible Plans for Every Situation
          </h2>

          <p className="text-xl text-[#64748B] mb-12 text-center">
            No setup fees. No hidden charges. Cancel anytime.
          </p>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Silver Plan */}
            <div className="bg-white border-2 border-[#CBCBCB] hover:border-[#f9c65d] rounded-lg p-6 transition duration-200">
              <h3 className="text-xl font-bold text-[#3E3E3E] mb-2">Silver Plan</h3>
              <div className="text-4xl font-bold text-[#f9c65d] mb-4">
                $149<span className="text-lg text-[#64748B]">/mo</span>
              </div>
              <p className="text-sm text-[#64748B] mb-4">Best for: 5 or fewer negative accounts</p>
              <ul className="space-y-2 mb-6 text-sm text-[#475569]">
                <li className="flex items-start gap-2">
                  <Check className="text-[#10B981] w-4 h-4 flex-shrink-0 mt-1" />
                  <span>All 3 bureau disputes</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#10B981] w-4 h-4 flex-shrink-0 mt-1" />
                  <span>Monthly progress reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#10B981] w-4 h-4 flex-shrink-0 mt-1" />
                  <span>Client portal access</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#10B981] w-4 h-4 flex-shrink-0 mt-1" />
                  <span>Email support</span>
                </li>
              </ul>
              <button
                onClick={() => handleCTAClick("silver")}
                className="w-full text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 font-semibold py-3"
              >
                Choose Silver
              </button>
            </div>

            {/* Sapphire Plan */}
            <div className="bg-white border-2 border-[#CBCBCB] hover:border-[#f9c65d] rounded-lg p-6 transition duration-200">
              <h3 className="text-xl font-bold text-[#3E3E3E] mb-2">Sapphire Plan</h3>
              <div className="text-4xl font-bold text-[#f9c65d] mb-4">
                $249<span className="text-lg text-[#64748B]">/mo</span>
              </div>
              <p className="text-sm text-[#64748B] mb-4">Best for: 6-10 negative accounts</p>
              <ul className="space-y-2 mb-6 text-sm text-[#475569]">
                <li className="flex items-start gap-2">
                  <Check className="text-[#10B981] w-4 h-4 flex-shrink-0 mt-1" />
                  <span>Everything in Silver</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#10B981] w-4 h-4 flex-shrink-0 mt-1" />
                  <span>Direct creditor negotiations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#10B981] w-4 h-4 flex-shrink-0 mt-1" />
                  <span>Priority processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#10B981] w-4 h-4 flex-shrink-0 mt-1" />
                  <span>Phone + email support</span>
                </li>
              </ul>
              <button
                onClick={() => handleCTAClick("sapphire")}
                className="w-full text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 font-semibold py-3"
              >
                Choose Sapphire
              </button>
            </div>

            {/* Ruby Plan - MOST POPULAR */}
            <div className="bg-white border-2 border-[#f9c65d] rounded-lg p-6 relative shadow-lg">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#EF4444] text-white text-xs font-bold px-4 py-1 rounded-full">
                MOST POPULAR
              </div>
              <h3 className="text-xl font-bold text-[#3E3E3E] mb-2">Ruby Plan</h3>
              <div className="text-4xl font-bold text-[#f9c65d] mb-4">
                $349<span className="text-lg text-[#64748B]">/mo</span>
              </div>
              <p className="text-sm text-[#64748B] mb-4">Best for: 11-15 negative accounts</p>
              <ul className="space-y-2 mb-6 text-sm text-[#475569]">
                <li className="flex items-start gap-2">
                  <Check className="text-[#10B981] w-4 h-4 flex-shrink-0 mt-1" />
                  <span>Everything in Sapphire</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#10B981] w-4 h-4 flex-shrink-0 mt-1" />
                  <span>Goodwill letter campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#10B981] w-4 h-4 flex-shrink-0 mt-1" />
                  <span>Rapid dispute cycles</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#10B981] w-4 h-4 flex-shrink-0 mt-1" />
                  <span>Dedicated support rep</span>
                </li>
              </ul>
              <button
                onClick={() => handleCTAClick("ruby")}
                className="w-full text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 font-semibold py-3"
              >
                Choose Ruby
              </button>
            </div>

            {/* Emerald Plan */}
            <div className="bg-white border-2 border-[#CBCBCB] hover:border-[#f9c65d] rounded-lg p-6 transition duration-200">
              <h3 className="text-xl font-bold text-[#3E3E3E] mb-2">Emerald Plan</h3>
              <div className="text-4xl font-bold text-[#f9c65d] mb-4">
                $449<span className="text-lg text-[#64748B]">/mo</span>
              </div>
              <p className="text-sm text-[#64748B] mb-4">Best for: 16+ accounts or urgent timeline</p>
              <ul className="space-y-2 mb-6 text-sm text-[#475569]">
                <li className="flex items-start gap-2">
                  <Check className="text-[#10B981] w-4 h-4 flex-shrink-0 mt-1" />
                  <span>Everything in Ruby</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#10B981] w-4 h-4 flex-shrink-0 mt-1" />
                  <span>Most aggressive approach</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#10B981] w-4 h-4 flex-shrink-0 mt-1" />
                  <span>Same-day support response</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#10B981] w-4 h-4 flex-shrink-0 mt-1" />
                  <span>Priority bureau escalations</span>
                </li>
              </ul>
              <button
                onClick={() => handleCTAClick("emerald")}
                className="w-full text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 font-semibold py-3"
              >
                Choose Emerald
              </button>
            </div>
          </div>

          {/* Helper text below cards */}
          <p className="text-center text-[#64748B] mt-8 flex items-center justify-center gap-2">
            <Lightbulb className="w-5 h-5 text-mgc-gold" />
            Not sure which plan? Start your free analysis and we'll recommend the best fit.
          </p>

          <div className="text-center mt-6">
            <button
              onClick={() => handleCTAClick()}
              className="text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-lg font-semibold px-8 py-4"
            >
              Get Free Analysis
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQ ACCORDION */}
      <section className="bg-[#F8FAFC] py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-12 text-center">
            Common Questions About Credit Repair
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-[#CBCBCB] overflow-hidden"
              >
                {/* Question - clickable header */}
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-[#F8FAFC] transition duration-200"
                  aria-expanded={openFAQ === index}
                >
                  <h3 className="text-lg font-semibold text-[#3E3E3E] pr-8">{faq.question}</h3>
                  <span className="text-2xl text-[#bb9446] flex-shrink-0">
                    {openFAQ === index ? "−" : "+"}
                  </span>
                </button>

                {/* Answer - collapsible content */}
                {openFAQ === index && (
                  <div className="px-6 pb-4 pt-2">
                    <p className="text-[#475569] leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: TSR COMPLIANCE EXPLANATION */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#E5D2AF] border border-[#bb9446] rounded-lg p-8">
            <h3 className="text-2xl font-bold text-[#3E3E3E] mb-4">
              Why We Can't Offer Phone Consultations (Yet)
            </h3>

            <p className="text-[#3E3E3E] leading-relaxed mb-4">
              You might notice we can't talk on the phone until you sign up. This isn't because we're
              hiding anything—it's federal law.
            </p>

            <p className="text-[#3E3E3E] leading-relaxed mb-4">
              The FTC's Telemarketing Sales Rule (TSR) prohibits credit repair companies from doing phone
              or live consultations before a signed agreement. This rule exists to protect consumers from
              high-pressure sales tactics.
            </p>

            <p className="text-[#3E3E3E] leading-relaxed mb-4">
              <strong>Here's what this means for you:</strong>
            </p>

            <ul className="space-y-2 text-[#3E3E3E] mb-6">
              <li className="flex items-start gap-2">
                <Check className="text-[#10B981] w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>You can ask questions via live chat anytime</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-[#10B981] w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>You can review your free credit analysis online</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-[#10B981] w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>You can see all pricing and terms upfront</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-[#10B981] w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>You have a 3-day right to cancel after signing</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-[#10B981] w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Once you're a client, phone support is available</span>
              </li>
            </ul>

            <p className="text-[#3E3E3E] leading-relaxed italic">
              If another credit company offers phone consultations BEFORE you sign up, that's a major red
              flag—they're breaking federal law.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Fix Your Credit the <span className="text-amber-400">Right Way</span>?
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl text-gray-300 mb-12">
            Join hundreds of Bakersfield residents who've improved their scores and unlocked better financial opportunities.
          </p>

          {/* Single CTA Card */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 text-left">
              <h3 className="text-2xl font-bold mb-4">Professional Credit Repair</h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <div className="text-3xl font-bold mb-1">91%</div>
                  <div className="text-sm opacity-90">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">60-110</div>
                  <div className="text-sm opacity-90">Avg. Point Increase</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">30-45</div>
                  <div className="text-sm opacity-90">Days to 1st Results</div>
                </div>
              </div>
              <button 
                onClick={() => handleCTAClick()}
                className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-lg transition-colors"
              >
                Get Your Free Credit Analysis
              </button>
              <p className="text-sm text-white/90 mt-3 text-center">
                No credit card required • Takes 2 minutes
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-amber-400" />
              <span>BBB A+ Rated</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-amber-400" />
              <span>Local Bakersfield Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-amber-400" />
              <span>California DOJ Registered</span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 10: COMPLIANCE FOOTER */}
      <footer className="bg-[#F1F5F9] py-12 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm text-[#64748B] leading-relaxed space-y-4">
            <p>
              <strong>Results Disclaimer:</strong> Results vary by individual. While our average client
              sees a 60-110 point improvement, your results depend on your specific credit situation, the
              accuracy of negative items, and how many items are successfully removed. We cannot guarantee
              specific score increases or the removal of accurate information.
            </p>

            <p>
              Mesa Group Consulting is registered with the California Department of Justice and maintains a
              $100,000 surety bond as required by California law. We comply with the Credit Repair
              Organizations Act (CROA), Fair Credit Reporting Act (FCRA), and FTC Telemarketing Sales Rule
              (TSR).
            </p>

            <p>
              <strong>Your Rights:</strong> You have the right to dispute credit report information
              yourself, free of charge. For more information about your rights, visit{" "}
              <a
                href="https://www.ftc.gov/credit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#bb9446] hover:underline"
              >
                ftc.gov/credit
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default CreditRepair;
