import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Trophy, Star, Calendar, Lock, AlertTriangle, Check, X, BarChart3, Search, Lightbulb, MapPin, ChevronDown, Building2, Globe, Phone, Shield, Users, FileText, TrendingUp, DollarSign, Clock, Award, Home, Car, CreditCard, GraduationCap, Briefcase, Heart, Scale, MessageSquare, Mail, CheckCircle2, XCircle, ArrowRight, Zap } from "lucide-react";
import EmotionalCTA1 from "@/components/credit-repair/sections/EmotionalCTA1";
import EmotionalCTA2 from "@/components/credit-repair/sections/EmotionalCTA2";
import EmotionalCTA3 from "@/components/credit-repair/sections/EmotionalCTA3";
import kgetLogo from "@/assets/kget-17-logo.png";
import studio17Logo from "@/assets/studio-17-logo.png";
import telemundoLogo from "@/assets/telemundo-logo.png";
import cwLogo from "@/assets/cw-logo.png";
const CreditRepair2 = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const handleCTAClick = () => {
    window.open("https://portal.mesagroupconsulting.com//portal-signUp/signup.jsp?id=MjI1cm9wbjdDZFc1U1d0REI0NnNJdz09", "_blank", "noopener,noreferrer");
  };
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };
  const faqs = [{
    question: "Is this legit or a scam?",
    answer: "Mesa Group Consulting is a legitimate, California DOJ-registered credit repair company with a real physical office at 5001 California Ave Suite 219, Bakersfield, CA 93309. We've served 2,500+ clients nationwide with 150+ five-star reviews. Unlike fly-by-night operations, we've been in business since 2008 and comply with all federal regulations including CROA, TSR, and California CSO requirements. You're welcome to visit our office anytime."
  }, {
    question: "Will this hurt my credit more?",
    answer: "No. Disputing inaccurate items is your legal right under the Fair Credit Reporting Act (FCRA). The dispute process itself does not negatively impact your credit score. In fact, when negative items are removed, your score typically increases. We only challenge items that are inaccurate, unverifiable, or unfairly reported—we never use illegal tactics that could harm your credit."
  }, {
    question: "How much is this going to cost total?",
    answer: "Our monthly plans range from $149-$299/month plus an initial fee of $350-$800 depending on the plan. Most clients complete the program in 4-8 months, making total investment typically $1,000-$3,000. We also offer 12-month programs ($1,500-$1,800) for upfront savings. SmartCredit monitoring ($27.99/month) is required separately. There are no hidden fees, and you can cancel monthly plans anytime."
  }, {
    question: "How long does it actually take to see results?",
    answer: "Most clients see first results within 45-90 days. Credit bureaus have 30 days to investigate each dispute, and most items require 1-2 dispute cycles. Significant improvements (60-110+ point increases) typically occur within 3-6 months. Complex cases with bankruptcies, repos, or 15+ negative items may take 6-12 months. We provide realistic timelines during your free analysis."
  }, {
    question: "Can I do this myself instead of paying someone?",
    answer: "Legally, yes—the FCRA gives you the right to dispute items yourself for free. However, DIY has challenges: it takes 10-15 hours/month, generic templates are easily rejected, you need expertise in FCRA/Metro 2 compliance, and one mistake can hurt your case. Our clients choose professional service because we have relationships with creditors, advanced dispute methods, and a 91% success rate. That said, if you prefer DIY, check out our Creditily platform for $29.99/month."
  }, {
    question: "What items can be removed from my credit report?",
    answer: "We can challenge any item that is inaccurate, unverifiable, or unfairly reported—including collections, late payments, charge-offs, repossessions, foreclosures, bankruptcies (with errors), judgments, tax liens, and unauthorized inquiries. We CANNOT remove items that are 100% accurate and properly documented. However, even 'accurate' items often have errors (wrong dates, amounts, missing documentation) that make them legally disputable."
  }, {
    question: "Do you have legal support for FCRA violations?",
    answer: "Yes. While Mesa Group Consulting is not a law firm, we have a full legal team available for cases where creditors or bureaus violate your rights under FCRA or FDCPA. When violations occur (bureau fails to investigate within 30 days, creditor re-reports deleted info, etc.), our legal team can send demand letters and support potential violation claims. Many clients have received $1,000-$2,500+ settlements."
  }, {
    question: "What's the difference between monthly plans and 12-month programs?",
    answer: "Monthly plans (Lite/Flex/Elite) offer flexibility—pay as you go, cancel anytime, and we continue working on new items that appear. 12-month programs (Ruby/Emerald) offer significant savings (up to $1,788) when you pay upfront, but new items added during the program aren't covered. Choose monthly if your credit situation is evolving; choose 12-month if it's stable and you want to save money."
  }, {
    question: "What is SmartCredit and why do I need it?",
    answer: "SmartCredit provides real-time access to your credit reports from all three bureaus. We need this to see your actual reports, file accurate disputes, and track progress. Cost is $1 for 7-day trial, then $27.99/month. It's a third-party service you control directly—not owned by Mesa Group. You must keep SmartCredit active throughout the program for us to work your file."
  }, {
    question: "What's your refund policy?",
    answer: "We offer a 90-Day Money-Back Guarantee. If you hold up your end (keep SmartCredit active, stay responsive, keep account current, follow guidance) and we don't remove at least 1 verifiable negative item within 90 days, you get 100% of your money back—every dollar paid to Mesa Group. This is in writing in your agreement. No vague promises, no runaround."
  }];
  return <main className="min-h-screen">
      <Header />
      
      {/* ============================================ */}
      {/* SECTION 1: HERO */}
      {/* ============================================ */}
      <section className="bg-gradient-to-br from-white via-amber-50 to-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT COLUMN - Content */}
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                MESA360 CREDIT SYSTEM™
              </div>

              {/* H1 Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Stuck with Bad Credit? Our <span className="text-[#f9c65d]">Mesa360 Credit System™</span> Can Help You Fix It.
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                Remove inaccurate items from your credit report in 45-90 days—plus get 1-on-1 coaching to rebuild your credit and achieve your financial goals. This isn't just credit restoration—it's a <strong>complete financial transformation program</strong> powered by our proven Mesa360 Credit System™.
              </p>

              {/* Trust Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Trophy className="w-5 h-5 text-[#f9c65d]" />
                  <span><strong>2,500+</strong> Clients</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Star className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />
                  <span><strong>150+</strong> 5-Star Reviews</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Building2 className="w-5 h-5 text-[#f9c65d]" />
                  <span>Bakersfield HQ</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Globe className="w-5 h-5 text-[#f9c65d]" />
                  <span>EN/ES/Punjabi</span>
                </div>
              </div>

              {/* Primary CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={handleCTAClick} className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-lg font-bold px-8 py-4">
                  Start Your Credit Transformation →
                </button>
                <button onClick={() => scrollToSection("how-it-works")} className="text-amber-700 hover:text-amber-800 font-semibold underline underline-offset-4">
                  Get Free Credit Analysis
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN - Hero Image */}
            <div className="hidden lg:block">
              <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=600&h=700&q=80" alt="Happy client achieving financial freedom with Mesa Group" className="rounded-2xl shadow-2xl" loading="eager" />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 2: AS SEEN ON MEDIA LOGOS */}
      {/* ============================================ */}
      <section className="bg-gray-100 py-12 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-600 text-sm mb-10">
            Featured in local and national media for our proven Mesa360 Credit System™
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 lg:gap-28">
            <img src={kgetLogo} alt="KGET 17" className="h-16 md:h-20 w-auto object-contain" />
            <img src={studio17Logo} alt="Studio 17" className="h-20 md:h-28 w-auto object-contain" />
            <img src={telemundoLogo} alt="Telemundo" className="h-16 md:h-20 w-auto object-contain" />
            <img src={cwLogo} alt="The CW" className="h-14 md:h-18 w-auto object-contain" />
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 3: THE PROBLEM (Empathy + Acknowledgment) */}
      {/* ============================================ */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-8 text-center">
            We Know You've Been Promised <span className="text-[#f9c65d]">Quick Fixes</span> Before.
          </h2>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              You've probably seen ads promising to "erase bad credit in 30 days" or "guaranteed 100-point increases." Here's the truth: <strong>those promises are not only unrealistic—they may violate federal law.</strong>
            </p>

            <blockquote className="my-8 py-6 px-8 border-l-4 border-[#f9c65d] bg-gray-50 text-center">
              <p className="text-2xl md:text-3xl font-semibold text-gray-800 italic">
                Bad credit doesn't define you.
              </p>
              <p className="mt-3 text-lg text-gray-600">
                It's just a chapter in your financial story. And with the right strategy, it's a chapter you can rewrite.
              </p>
            </blockquote>

            <p className="font-medium">Maybe you're stuck in the cycle:</p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span>Denied for mortgages, car loans, or credit cards because of your score</span>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span>Stuck paying sky-high interest rates that cost you thousands extra</span>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span>Collections calls and letters that won't stop</span>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span>Feeling overwhelmed by the dispute process</span>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span>Tried DIY dispute letters with no results</span>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span>Burned by "credit repair" companies that disappeared with your money</span>
              </div>
            </div>

            <p className="text-center text-xl font-semibold text-[#bb9446] pt-4">
              Sound familiar? You're not alone—and there's a proven path forward.
            </p>
            <p className="text-center text-xl font-bold text-[#3E3E3E]">
              That's where Mesa Group's Mesa360 Credit System™ comes in.
            </p>
          </div>
        </div>
      </section>

      

      {/* ============================================ */}
      {/* SECTION 4: THE SOLUTION (Mesa360 Credit System™) */}
      {/* ============================================ */}
      <section id="how-it-works" className="bg-gradient-to-br from-gray-50 to-amber-50 py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3E3E3E] mb-6">
              The Mesa360 Credit System™: <span className="text-[#f9c65d]">Repair. Rebuild. Optimize.</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Unlike cookie-cutter credit repair companies that use generic templates and offshore call centers, Mesa Group provides a <strong>personalized, legally compliant credit restoration strategy</strong>—backed by a local team you can actually talk to.
            </p>
          </div>

          {/* 3-Step Process */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 items-stretch">
            {/* STEP 1: REPAIR */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-amber-500 flex flex-col">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <Search className="w-8 h-8 text-[#f9c65d]" />
              </div>
              <div className="text-sm font-bold text-[#f9c65d] mb-2">STEP 1</div>
              <h3 className="text-2xl font-bold text-[#3E3E3E] mb-4">REPAIR</h3>
              <p className="text-gray-600 mb-6">Remove What's Holding You Back</p>
              
              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <p className="font-semibold mb-2">Free Credit Analysis</p>
                  <p>We review your credit report from all three bureaus to identify inaccurate, outdated, or unverifiable items.</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">What We Look For:</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Collections that aren't yours</li>
                    <li>• Late payments reported incorrectly</li>
                    <li>• Charge-offs with missing documentation</li>
                    <li>• Bankruptcies that should've been removed</li>
                    <li>• Unauthorized inquiries</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Custom Dispute Strategy</p>
                  <p>No cookie-cutter letters. We craft personalized dispute strategies based on your unique credit situation and FCRA/FDCPA guidelines.</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">We Handle the Disputes</p>
                  <p>We manage all communication with credit bureaus and creditors on your behalf. No stress, no confusion—just progress.</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Advanced Methods:</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Digital uploads to bureaus</li>
                    <li>• Direct Experian uploads + rapid inquiry removal</li>
                    <li>• CFPB complaints when necessary</li>
                    <li>• Metro 2 challenges for complex items</li>
                    <li>• Legal team escalation for FCRA violations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* STEP 2: REBUILD */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-green-500 flex flex-col">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-sm font-bold text-green-600 mb-2">STEP 2</div>
              <h3 className="text-2xl font-bold text-[#3E3E3E] mb-4">REBUILD</h3>
              <p className="text-gray-600 mb-6">Build a Stronger Foundation</p>
              
              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <p className="font-semibold mb-2">1-on-1 Financial Coaching</p>
                  <p>Removing negative items is only half the battle. Our account managers teach you how to build and maintain good credit long-term.</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">You'll Learn:</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>• How to use credit cards responsibly</li>
                    <li>• When to apply for new credit</li>
                    <li>• Building positive payment history</li>
                    <li>• Understanding credit mix</li>
                    <li>• Protecting your credit long-term</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Customized Action Plan</p>
                  <p>Your account manager creates a personalized roadmap based on your unique goals—not a one-size-fits-all template.</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Monthly Progress Reviews</p>
                  <p>We don't just send updates—we walk you through your results, explain what's happening, and adjust strategy as needed.</p>
                </div>
              </div>
            </div>

            {/* STEP 3: OPTIMIZE */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-blue-500 flex flex-col">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-sm font-bold text-blue-600 mb-2">STEP 3</div>
              <h3 className="text-2xl font-bold text-[#3E3E3E] mb-4">OPTIMIZE</h3>
              <p className="text-gray-600 mb-6">Maximize Your Financial Opportunity</p>
              
              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <p className="font-semibold mb-2">Funding Profile Optimization</p>
                  <p>We don't stop at credit repair. We help you position your entire financial profile for maximum approval odds on mortgages, business funding, and loans.</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Strategic Credit Building</p>
                  <p>Learn which accounts to open, when to apply, and how to manage them for long-term success.</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Life After Restoration</p>
                  <p className="mb-2">When you're ready, we help you understand:</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>• How to maintain your improved credit</li>
                    <li>• When to refinance high-interest debts</li>
                    <li>• Building wealth with good credit as your foundation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Why It Works */}
          <div className="bg-[#3E3E3E] rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Why the Mesa360 Credit System™ Works</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <Zap className="w-10 h-10 text-amber-400 mx-auto mb-3" />
                <p className="font-semibold text-white mb-2">It's Comprehensive</p>
                <p className="text-sm text-gray-300">We educate, support, and coach you through the entire transformation.</p>
              </div>
              <div className="text-center">
                <Users className="w-10 h-10 text-amber-400 mx-auto mb-3" />
                <p className="font-semibold text-white mb-2">It's Personalized</p>
                <p className="text-sm text-gray-300">Your credit situation is unique. Your strategy should be too.</p>
              </div>
              <div className="text-center">
                <Award className="w-10 h-10 text-amber-400 mx-auto mb-3" />
                <p className="font-semibold text-white mb-2">It's Proven</p>
                <p className="text-sm text-gray-300">2,500+ clients. 150+ five-star reviews. 83-point average increase.</p>
              </div>
              <div className="text-center">
                <Shield className="w-10 h-10 text-amber-400 mx-auto mb-3" />
                <p className="font-semibold text-white mb-2">It's Legal</p>
                <p className="text-sm text-gray-300">FCRA/FDCPA compliant. No shady tactics that put you at risk.</p>
              </div>
            </div>
          </div>

          {/* Timeline Disclosure */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-8">
            <p className="text-sm text-gray-700">
              <strong>Important:</strong> Legitimate credit restoration takes time. While we cannot guarantee specific results, most clients see measurable improvements within 45-90 days. Individual timelines vary based on the complexity of your credit situation and credit bureau responsiveness. The bureaus have 30 days to investigate each dispute, and most items require 1-2 dispute cycles to resolve.
            </p>
          </div>
        </div>
      </section>

      

      {/* ============================================ */}
      {/* SECTION 5: WHAT MAKES US DIFFERENT */}
      {/* ============================================ */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-12 text-center">
            Why Choose Mesa Group Over Other Credit Services?
          </h2>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left bg-gray-100 font-semibold text-gray-700 border-b-2">Feature</th>
                  <th className="p-4 text-center bg-amber-100 font-bold text-amber-800 border-b-2 border-amber-200">Mesa Group</th>
                  <th className="p-4 text-center bg-gray-100 font-semibold text-gray-600 border-b-2">Typical Companies</th>
                  <th className="p-4 text-center bg-gray-100 font-semibold text-gray-600 border-b-2">DIY Letters</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b">
                  <td className="p-4 font-medium">Approach</td>
                  <td className="p-4 text-center"><span className="text-green-600 font-semibold">Mesa360™ - Repair, Rebuild, Optimize</span></td>
                  <td className="p-4 text-center text-gray-500">Transactional dispute only</td>
                  <td className="p-4 text-center text-gray-500">Completely on your own</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-medium">Location</td>
                  <td className="p-4 text-center"><span className="text-green-600 font-semibold">Bakersfield, CA HQ (Real Office)</span></td>
                  <td className="p-4 text-center text-gray-500">Offshore call centers</td>
                  <td className="p-4 text-center text-gray-500">No support</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">1-on-1 Coaching</td>
                  <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="p-4 text-center"><XCircle className="w-5 h-5 text-red-400 mx-auto" /></td>
                  <td className="p-4 text-center"><XCircle className="w-5 h-5 text-red-400 mx-auto" /></td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-medium">Dedicated Account Manager</td>
                  <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="p-4 text-center text-gray-500">Random reps each time</td>
                  <td className="p-4 text-center"><XCircle className="w-5 h-5 text-red-400 mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Bilingual Support</td>
                  <td className="p-4 text-center"><span className="text-green-600 font-semibold">Spanish/English/Punjabi</span></td>
                  <td className="p-4 text-center text-gray-500">English only</td>
                  <td className="p-4 text-center"><XCircle className="w-5 h-5 text-red-400 mx-auto" /></td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-medium">Legal Team for FCRA Violations</td>
                  <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="p-4 text-center text-gray-500">Often non-compliant</td>
                  <td className="p-4 text-center text-gray-500">Risk of mistakes</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Advanced Dispute Methods</td>
                  <td className="p-4 text-center"><span className="text-green-600 font-semibold">CFPB, Metro 2, Direct Creditor</span></td>
                  <td className="p-4 text-center text-gray-500">Generic templates</td>
                  <td className="p-4 text-center text-gray-500">Internet templates</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-medium">Pricing</td>
                  <td className="p-4 text-center"><span className="text-green-600 font-semibold">Transparent, no hidden fees</span></td>
                  <td className="p-4 text-center text-gray-500">Hidden fees, upsells</td>
                  <td className="p-4 text-center text-gray-500">Free but time-consuming</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Money-Back Guarantee</td>
                  <td className="p-4 text-center"><span className="text-green-600 font-semibold">90-Day Written Guarantee</span></td>
                  <td className="p-4 text-center text-gray-500">Vague promises</td>
                  <td className="p-4 text-center text-gray-500">N/A</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Legal Team Callout */}
          <div className="mt-12 bg-gradient-to-r from-[#3E3E3E] to-[#2c2c2c] rounded-2xl p-8 md:p-10">
            <div className="flex items-start gap-4">
              <Scale className="w-12 h-12 text-amber-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Full Legal Team for FCRA Violations</h3>
                <p className="text-gray-300 mb-4">
                  While Mesa Group Consulting is not a law firm, we have a full legal team available for cases where creditors or credit bureaus violate your rights under FCRA or FDCPA.
                </p>
                <p className="text-amber-400 font-semibold">
                  Real Results: Many qualified clients have received settlements ranging from $1,000 to $2,500+ when violations are found—in addition to item removal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 6: MORE THAN CREDIT REPAIR */}
      {/* ============================================ */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-4">
              This Isn't Just Credit Repair. It's a <span className="text-[#f9c65d]">Complete Financial Transformation</span>.
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Most credit repair companies send generic dispute letters and disappear. At Mesa Group, every client gets a dedicated account manager, customized action plan, monthly reviews, and 1-on-1 financial coaching.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <FileText className="w-10 h-10 text-[#f9c65d] mb-4" />
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-2">Customized Action Plan</h3>
              <p className="text-gray-600 text-sm">Your account manager creates a personalized roadmap based on YOUR unique credit situation—not a one-size-fits-all template.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Users className="w-10 h-10 text-[#f9c65d] mb-4" />
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-2">Dedicated Account Manager</h3>
              <p className="text-gray-600 text-sm">A real person assigned to your case who knows your name, your story, and your goals. No random reps each time.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <BarChart3 className="w-10 h-10 text-[#f9c65d] mb-4" />
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-2">Monthly Progress Reviews</h3>
              <p className="text-gray-600 text-sm">Every 35 days: what was disputed, what was removed, what's in progress, and your next steps. We walk you through everything.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <GraduationCap className="w-10 h-10 text-[#f9c65d] mb-4" />
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-2">Credit Building Education</h3>
              <p className="text-gray-600 text-sm">Learn how utilization works, when to apply for credit, building payment history, and protecting your credit long-term.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <MessageSquare className="w-10 h-10 text-[#f9c65d] mb-4" />
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-2">Ongoing Support</h3>
              <p className="text-gray-600 text-sm">Questions answered throughout the process. Guidance on major decisions like buying a car or applying for a mortgage.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Heart className="w-10 h-10 text-[#f9c65d] mb-4" />
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-2">Why This Matters</h3>
              <p className="text-gray-600 text-sm">Removing items is half the battle. Without learning to build good credit, you'll end up back where you started.</p>
            </div>
          </div>

          {/* Testimonial Callout */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-xl border-l-4 border-amber-500">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />)}
            </div>
            <p className="text-gray-700 italic mb-4">
              "I came to Mesa Group with a 540 score and collections I didn't understand. My account manager, Maria, didn't just file disputes—she explained every step, taught me how credit utilization works, and helped me build a plan to keep my score high after the program. Nine months later, I'm at 710 and I finally understand how to manage my credit."
            </p>
            <p className="text-[#3E3E3E] font-semibold">— Carlos R., Bakersfield, CA</p>
          </div>

          <div className="text-center mt-10">
            <button onClick={handleCTAClick} className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-lg font-bold px-8 py-4">
              Get Your Customized Action Plan →
            </button>
          </div>
        </div>
      </section>

      

      {/* ============================================ */}
      {/* SECTION 7: THE ROI (Cost of Bad Credit) */}
      {/* ============================================ */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-4">
              Bad Credit Costs You <span className="text-red-600">$126,000</span> Over 30 Years. Here's How.
            </h2>
            <p className="text-xl text-gray-700">
              Every month you wait to fix your credit, you're bleeding money. Higher interest rates, denied applications, security deposits—it all adds up.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 text-center">
              <Home className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-2">Higher Mortgage Rates</h3>
              <div className="text-4xl font-bold text-red-600 mb-2">+$87,000</div>
              <p className="text-sm text-gray-600">
                620 score = 7.2% APR<br />
                720 score = 6.1% APR<br />
                On $300K over 30 years
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 text-center">
              <Car className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-2">Car Loan Penalties</h3>
              <div className="text-4xl font-bold text-red-600 mb-2">+$18,000</div>
              <p className="text-sm text-gray-600">
                Subprime: 14% APR<br />
                Prime: 6% APR<br />
                Over 5-year loan
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 text-center">
              <CreditCard className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-2">Credit Card Interest</h3>
              <div className="text-4xl font-bold text-red-600 mb-2">+$21,000</div>
              <p className="text-sm text-gray-600">
                Bad credit: 24% APR<br />
                Good credit: 16% APR<br />
                On $10K over 10 years
              </p>
            </div>
          </div>

          <div className="bg-[#3E3E3E] rounded-2xl p-8 md:p-12 text-center">
            <p className="text-amber-400 font-semibold mb-2">Total Cost of Bad Credit</p>
            <div className="text-5xl md:text-6xl font-bold text-white mb-6">$126,000+</div>
            <div className="border-t border-white/20 pt-6 mt-6">
              <p className="text-gray-300 mb-2">Mesa Group Mesa360 Credit System™</p>
              <p className="text-3xl font-bold text-amber-400 mb-4">Starting at $149/month</p>
              <p className="text-xl text-white">Your Potential Savings: <span className="text-green-400 font-bold">$100,000+</span></p>
            </div>
            <p className="text-gray-400 mt-6 text-sm">
              Improving your credit isn't an expense—it's the highest-ROI financial decision you can make.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 8: SOCIAL PROOF (Testimonials) */}
      {/* ============================================ */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-4">
              Real People. Real Results. Real <span className="text-amber-600">Transformation</span>.
            </h2>
            <p className="text-xl text-gray-700">
              Don't take our word for it—hear from clients who transformed their financial futures with the Mesa360 Credit System™.
            </p>
          </div>

          {/* Aggregate Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">83</div>
              <p className="text-sm text-gray-600">Points Avg. Increase</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">2,500+</div>
              <p className="text-sm text-gray-600">Clients Served</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">150+</div>
              <p className="text-sm text-gray-600">5-Star Reviews</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl font-bold text-[#f9c65d] mb-2">45-90</div>
              <p className="text-sm text-gray-600">Days to First Results</p>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-xl p-6 shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />)}
              </div>
              <h4 className="text-white font-bold mb-2">"From 540 to 695 in 75 Days—I Finally Got My Dream Home"</h4>
              <p className="text-gray-300 text-sm mb-4">
                "I was skeptical after being denied for a mortgage twice. I'd tried DIY dispute letters with no results. Within 75 days of working with Mesa Group, they removed 6 inaccurate collections and my score increased from 540 to 695. Last month, I closed on my dream home in Bakersfield."
              </p>
              <p className="text-white/80 text-sm">— Sarah M., Bakersfield, CA</p>
            </div>

            <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-xl p-6 shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />)}
              </div>
              <h4 className="text-white font-bold mb-2">"100+ Point Increase in Under 4 Months"</h4>
              <p className="text-gray-300 text-sm mb-4">
                "I came to Mesa Group in the low 500s. Great experience, great communication. Across all three bureaus, we're up over 100 points. I was able to get approved for a business loan I'd been denied for twice before. Believe in the process."
              </p>
              <p className="text-white/80 text-sm">— Carlos R., Kern County, CA</p>
            </div>

            <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-xl p-6 shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />)}
              </div>
              <h4 className="text-white font-bold mb-2">"Tried DIY for 6 Months—Got Nowhere"</h4>
              <p className="text-gray-300 text-sm mb-4">
                "I wasted 6 months trying to do it myself with templates from the internet. The bureaus ignored me. Mesa Group removed 3 items in the first 60 days—items I'd been fighting on my own for half a year. Wish I'd hired them sooner."
              </p>
              <p className="text-white/80 text-sm">— David R., Bakersfield, CA</p>
            </div>

            <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-xl p-6 shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />)}
              </div>
              <h4 className="text-white font-bold mb-2">"Transparent Pricing, No Hidden Fees"</h4>
              <p className="text-gray-300 text-sm mb-4">
                "I signed up for the monthly plan. Transparent pricing, no hidden fees. Canceled after 5 months when I hit my goal score (720). Exactly as advertised. No pressure to stay longer than I needed."
              </p>
              <p className="text-white/80 text-sm">— Maria L., CA</p>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            Individual results may vary. Testimonials are not a guarantee of future performance. Results depend on individual circumstances.
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 9: PRICING & PLANS */}
      {/* ============================================ */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-4">
              Choose a Package that Suits Your <span className="text-[#f9c65d]">Budget</span>
            </h2>
            <p className="text-xl text-gray-700">
              Once you choose a package, we can get you started on your credit transformation journey with the Mesa360 Credit System™
            </p>
          </div>

          {/* Monthly Plans */}
          <h3 className="text-2xl font-bold text-[#3E3E3E] mb-6 text-center">Monthly Plans <span className="text-gray-500 font-normal text-lg">(Most Flexible)</span></h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Mesa360 Lite */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-amber-300 transition-colors">
              <h4 className="text-xl font-bold text-[#3E3E3E] mb-2">Mesa360 Lite</h4>
              <p className="text-sm text-gray-500 mb-4">Basic</p>
              <div className="mb-4">
                <span className="text-3xl font-bold text-[#3E3E3E]">$350</span>
                <span className="text-gray-500"> initial + </span>
                <span className="text-3xl font-bold text-amber-600">$149</span>
                <span className="text-gray-500">/mo</span>
              </div>
              <p className="text-sm text-gray-600 mb-6">Starting your credit repair journey. Covers collections, late payments, and inquiries across all 3 bureaus.</p>
              
              <div className="space-y-2 mb-6 text-sm">
                <p className="font-semibold text-gray-700">What's Included:</p>
                <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5" /><span>Collections, Late Payments, Inquiries</span></div>
                <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5" /><span>3-Bureau disputes to agencies</span></div>
                <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5" /><span>Digital uploads</span></div>
                <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5" /><span>35-day updates + client portal</span></div>
                <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5" /><span>Dedicated Account Manager</span></div>
                <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5" /><span>1-on-1 Financial Coaching</span></div>
              </div>

              <div className="text-center mb-4">
                <p className="text-2xl font-bold text-green-600">$0.00 DUE TODAY</p>
                <p className="text-xs text-gray-500">Risk Free - 3 Day Cancellation Window</p>
              </div>
              
              <button onClick={handleCTAClick} className="w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold py-3 rounded-lg transition-colors">
                Choose Mesa360 Lite
              </button>
            </div>

            {/* Mesa360 Flex - Most Popular */}
            <div className="bg-white border-2 border-amber-400 rounded-2xl p-6 relative shadow-xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                MOST POPULAR
              </div>
              <h4 className="text-xl font-bold text-[#3E3E3E] mb-2">Mesa360 Flex</h4>
              <p className="text-sm text-amber-600 font-semibold mb-4">Most Popular</p>
              <div className="mb-4">
                <span className="text-3xl font-bold text-[#3E3E3E]">$500</span>
                <span className="text-gray-500"> initial + </span>
                <span className="text-3xl font-bold text-amber-600">$199</span>
                <span className="text-gray-500">/mo</span>
              </div>
              <p className="text-sm text-gray-600 mb-6">Our most popular plan with faster methods like digital uploads, Experian rapid inquiry removal, and CFPB complaints.</p>
              
              <div className="space-y-2 mb-6 text-sm">
                <p className="font-semibold text-gray-700">All Lite features PLUS:</p>
                <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5" /><span>Direct Experian uploads + rapid inquiry removal</span></div>
                <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5" /><span>Disputes to creditors & collectors</span></div>
                <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5" /><span>CFPB complaints</span></div>
                <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5" /><span>Ongoing support for new items</span></div>
              </div>

              <div className="text-center mb-4">
                <p className="text-2xl font-bold text-green-600">$0.00 DUE TODAY</p>
                <p className="text-xs text-gray-500">Risk Free - 3 Day Cancellation Window</p>
              </div>
              
              <button onClick={handleCTAClick} className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg transition-colors">
                Choose Mesa360 Flex
              </button>
            </div>

            {/* Mesa360 Elite */}
            <div className="bg-gradient-to-br from-[#3E3E3E] to-[#2c2c2c] border-2 border-[#3E3E3E] rounded-2xl p-6 text-white">
              <h4 className="text-xl font-bold mb-2">Mesa360 Elite</h4>
              <p className="text-sm text-amber-400 font-semibold mb-4">Premium</p>
              <div className="mb-4">
                <span className="text-3xl font-bold">$800</span>
                <span className="text-gray-400"> initial + </span>
                <span className="text-3xl font-bold text-amber-400">$299</span>
                <span className="text-gray-400">/mo</span>
              </div>
              <p className="text-sm text-gray-300 mb-6">Our most premium plan. Covers everything plus charge-offs, bankruptcies, repos, evictions, student loans, medical bills.</p>
              
              <div className="space-y-2 mb-6 text-sm">
                <p className="font-semibold text-gray-200">All Flex features PLUS:</p>
                <div className="flex items-start gap-2"><Check className="w-4 h-4 text-amber-400 mt-0.5" /><span>Charge-offs, Bankruptcies, Repos</span></div>
                <div className="flex items-start gap-2"><Check className="w-4 h-4 text-amber-400 mt-0.5" /><span>Evictions, Student loans, Medical bills</span></div>
                <div className="flex items-start gap-2"><Check className="w-4 h-4 text-amber-400 mt-0.5" /><span>Advanced legal disputes (Metro 2, FCRA)</span></div>
                <div className="flex items-start gap-2"><Check className="w-4 h-4 text-amber-400 mt-0.5" /><span>Priority handling + legal review</span></div>
                <div className="flex items-start gap-2"><Check className="w-4 h-4 text-amber-400 mt-0.5" /><span>Funding profile optimization</span></div>
              </div>

              <div className="text-center mb-4">
                <p className="text-2xl font-bold text-green-400">$0.00 DUE TODAY</p>
                <p className="text-xs text-gray-400">Risk Free - 3 Day Cancellation Window</p>
              </div>
              
              <button onClick={handleCTAClick} className="w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold py-3 rounded-lg transition-colors">
                Choose Mesa360 Elite
              </button>
            </div>
          </div>

          {/* 12-Month Programs */}
          <h3 className="text-2xl font-bold text-[#3E3E3E] mb-2 text-center">12-Month Programs <span className="text-gray-500 font-normal text-lg">(Pay in Full & Save)</span></h3>
          <p className="text-center text-gray-600 mb-8">Get a full year of the Mesa360 Credit System™ with significant savings</p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Ruby Plan */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">R</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#3E3E3E]">Ruby Plan</h4>
                  <p className="text-sm text-gray-500">12-Month Flex</p>
                </div>
              </div>
              <div className="mb-2">
                <span className="text-4xl font-bold text-[#3E3E3E]">$1,500</span>
                <span className="text-gray-500"> one-time</span>
              </div>
              <p className="text-green-600 font-semibold mb-4">Save $888 vs. Monthly Flex</p>
              <p className="text-sm text-gray-600 mb-6">Equivalent to 12 months of Mesa360 Flex for the price of ~7.5 months</p>
              
              <div className="space-y-2 mb-6 text-sm">
                <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5" /><span>Collections, Late Payments, Inquiries</span></div>
                <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5" /><span>Digital uploads + Direct Experian uploads</span></div>
                <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5" /><span>Disputes to creditors & collectors</span></div>
                <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5" /><span>CFPB complaints when necessary</span></div>
                <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5" /><span>All coaching & support features</span></div>
              </div>

              <p className="text-xs text-gray-500 mb-4">Note: New items added during program not covered.</p>
              
              <button onClick={handleCTAClick} className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg transition-colors">
                Choose Ruby Plan
              </button>
            </div>

            {/* Emerald Plan */}
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 border-2 border-emerald-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">E</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#3E3E3E]">Emerald Plan</h4>
                  <p className="text-sm text-gray-500">12-Month Elite</p>
                </div>
              </div>
              <div className="mb-2">
                <span className="text-4xl font-bold text-[#3E3E3E]">$1,800</span>
                <span className="text-gray-500"> one-time</span>
              </div>
              <p className="text-green-600 font-semibold mb-4">Save $1,788 vs. Monthly Elite</p>
              <p className="text-sm text-gray-600 mb-6">Equivalent to 12 months of Mesa360 Elite for the price of ~6 months</p>
              
              <div className="space-y-2 mb-6 text-sm">
                <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5" /><span>All Ruby items PLUS:</span></div>
                <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5" /><span>Charge-offs, Bankruptcies, Repos, Evictions</span></div>
                <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5" /><span>Student loans, Medical bills</span></div>
                <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5" /><span>Advanced legal disputes + priority handling</span></div>
                <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5" /><span>Funding profile optimization</span></div>
              </div>

              <p className="text-xs text-gray-500 mb-4">Note: New items added during program not covered.</p>
              
              <button onClick={handleCTAClick} className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-lg transition-colors">
                Choose Emerald Plan
              </button>
            </div>
          </div>

          {/* SmartCredit Requirement */}
          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <BarChart3 className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-[#3E3E3E] mb-2">Why SmartCredit is Required</h4>
                <p className="text-sm text-gray-700 mb-2">
                  SmartCredit provides real-time access to your credit reports from all three bureaus. We need this to see your actual reports, file accurate disputes, and track progress.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Cost:</strong> $1 for 7-day trial, then $27.99/month. SmartCredit is a third-party service you control directly.
                </p>
              </div>
            </div>
          </div>

          {/* Still not sure? */}
          <div className="text-center mt-10">
            <p className="text-gray-700 mb-4">Still not sure which plan is right for you?</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="tel:6613103040" className="flex items-center gap-2 text-amber-700 hover:text-amber-800 font-semibold">
                <Phone className="w-4 h-4" /> (661) 310-3040
              </a>
              <a href="mailto:contact@mesagroupconsulting.com" className="flex items-center gap-2 text-amber-700 hover:text-amber-800 font-semibold">
                <Mail className="w-4 h-4" /> contact@mesagroupconsulting.com
              </a>
              <span className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" /> 5001 California Ave Suite 219, Bakersfield, CA
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 10: THE 90-DAY GUARANTEE */}
      {/* ============================================ */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-4">
              90 Days. Real Results. Or <span className="text-green-600">Every Dollar Back</span>.
            </h2>
            <p className="text-xl text-gray-700">We don't just talk about results.
We put it in writing with our legally backed 90-Day Money-Back Guarantee.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
            <h3 className="text-xl font-bold text-[#3E3E3E] mb-6">How It Works</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" /> You Hold Up Your End:
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Keep SmartCredit 3-Bureau monitoring active</li>
                  <li>✓ Stay responsive to your account manager</li>
                  <li>✓ Keep your account current</li>
                  <li>✓ Avoid adding new late payments during the 90 days</li>
                  <li>✓ Follow your account manager's guidance</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" /> We Deliver Results:
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Remove at least 1 verifiable negative item within 90 days</li>
                  <li>✓ Provide monthly progress reports and portal access</li>
                  <li>✓ Work your file with advanced dispute methods</li>
                  <li>✓ Escalate violations to our legal team when needed</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-green-100 rounded-xl text-center">
              <p className="text-lg font-bold text-green-800 mb-2">If We Don't Deliver:</p>
              <p className="text-2xl font-bold text-green-600">You get 100% of your money back.
Every dollar you paid to Mesa Group.</p>
            </div>
          </div>

          <div className="bg-[#3E3E3E] rounded-2xl p-8 text-center">
            <p className="text-amber-400 font-semibold mb-2">Why We Can Offer This</p>
            <p className="text-white text-lg mb-4">Because we're that confident in the Mesa360 Credit System™.</p>
            <p className="text-gray-300 text-sm">
              Most clients see results in the first 30-45 days. We use advanced dispute methods, not cookie-cutter templates. Your dedicated account manager works your file personally. Our reputation depends on your success.
            </p>
            <p className="text-white font-bold mt-6 text-xl">
              ✨ This is The Mesa360 Guarantee.<br />
              Real Results in 90 Days — or Your Money Back.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 11: THE COST OF INACTION (Urgency) */}
      {/* ============================================ */}
      <section className="bg-gradient-to-br from-red-900 to-red-800 py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Clock className="w-16 h-16 text-red-300 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Every Month You Wait Costs You Money.
          </h2>
          <div className="text-left bg-white/10 backdrop-blur rounded-xl p-8 mb-8">
            <p className="text-white/90 text-lg mb-4">Right now, you're paying penalties for bad credit:</p>
            <div className="grid md:grid-cols-2 gap-4 text-white/80">
              <div className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-red-300 flex-shrink-0" />
                <span>Higher interest on every loan</span>
              </div>
              <div className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-red-300 flex-shrink-0" />
                <span>Security deposits on rentals and utilities</span>
              </div>
              <div className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-red-300 flex-shrink-0" />
                <span>Denials for jobs, apartments, and financing</span>
              </div>
              <div className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-red-300 flex-shrink-0" />
                <span>Stress, embarrassment, and limited options</span>
              </div>
            </div>
          </div>
          <p className="text-xl text-white mb-8">
            The longer you wait, the more it costs you. But it doesn't have to be this way.<br />
            <strong className="text-amber-400">Your financial transformation starts today.</strong>
          </p>
          <button onClick={handleCTAClick} className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-10 py-5">
            Start Your Credit Transformation Now →
          </button>
          <p className="text-white/70 mt-4">
            Or, <button onClick={() => scrollToSection("faq")} className="underline hover:text-white">schedule a free consultation</button>
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 12: FAQ */}
      {/* ============================================ */}
      <section id="faq" className="bg-gray-50 py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-4 text-center">
            Your <span className="text-[#f9c65d]">Questions</span>, Answered.
          </h2>
          <p className="text-xl text-gray-700 mb-12 text-center">
            We believe in transparency. Here are honest answers to the questions most people ask.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => <div key={index} className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-amber-300 transition-colors duration-300">
                <button onClick={() => setOpenFAQ(openFAQ === index ? null : index)} className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors duration-200">
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-amber-600 flex-shrink-0 transition-transform duration-300 ${openFAQ === index ? 'transform rotate-180' : ''}`} />
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${openFAQ === index ? 'max-h-[500px]' : 'max-h-0'}`}>
                  <div className="px-6 pb-5 pt-2 bg-white">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>)}
          </div>

          {/* Still Have Questions? */}
          <div className="mt-12 text-center bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-[#3E3E3E] mb-4">Still Have Questions? Let's Talk.</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <button onClick={handleCTAClick} className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold px-6 py-3 rounded-lg transition-colors">
                Book Free Consultation
              </button>
              <button onClick={handleCTAClick} className="bg-[#3E3E3E] hover:bg-gray-700 text-white font-bold px-6 py-3 rounded-lg transition-colors">
                Start Your Transformation
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <a href="tel:6613103040" className="flex items-center gap-2 hover:text-amber-600">
                <Phone className="w-4 h-4" /> (661) 310-3040
              </a>
              <a href="mailto:contact@mesagroupconsulting.com" className="flex items-center gap-2 hover:text-amber-600">
                <Mail className="w-4 h-4" /> contact@mesagroupconsulting.com
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-4">🌎 Hablamos español | We speak Punjabi</p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 13: FINAL TRUST BAR + FOOTER CTA */}
      {/* ============================================ */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white bg-secondary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Trust Recap */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-amber-400" />
              <span>Mesa360 Credit System™</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-amber-400" />
              <span>90-Day Money-Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-amber-400" />
              <span>Nationwide from Bakersfield</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-amber-400" />
              <span>Full Legal Team</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-amber-400" />
              <span>2,500+ Clients Served</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-amber-400" />
              <span>1-on-1 Financial Coaching</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-amber-400" />
              <span>EN/ES/Punjabi Support</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-amber-400" />
              <span>Real Office You Can Visit</span>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Take Control of Your <span className="text-amber-400">Credit</span>?
            </h2>
            
            <button onClick={handleCTAClick} className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-10 py-5 mb-4">
              Get Started Today →
            </button>
            
            <p className="text-gray-300 mb-6">
              Or call us: <a href="tel:6613103040" className="text-amber-400 hover:underline font-semibold">(661) 310-3040</a>
            </p>
            <p className="text-sm text-gray-400">Hablamos español | We speak Punjabi</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>;
};
export default CreditRepair2;