import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Zap, BarChart3, TrendingUp, FileText, BookOpen, Calendar, CreditCard, Car, AlertTriangle, Shield, Star, Search, Bot, ClipboardList, PenTool, Mail, Infinity, X, Home, Scale, Gavel, Check, ChevronDown } from 'lucide-react';
import creditilyLogo from "@/assets/creditily-wolf-logo.svg";
import creditilyWideWolfLogo from "@/assets/creditily-wide-wolf-logo.svg";
import EmotionalCTA1 from "@/components/diy-credit-repair/sections/EmotionalCTA1";
import EmotionalCTA2 from "@/components/diy-credit-repair/sections/EmotionalCTA2";
import EmotionalCTA3 from "@/components/diy-credit-repair/sections/EmotionalCTA3";

const DIYCreditRepair = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do I need to be tech-savvy to use this?",
      answer: "No. If you can use email and browse websites, you can use our software. We walk you through every step with video tutorials, tooltips, and simple instructions. Most people complete their first dispute letter in under 15 minutes."
    },
    {
      question: "How much time will this take per month?",
      answer: "Plan on 2-3 hours per month. Initial setup (importing reports, reviewing items) takes about 2 hours. After that, it's 30-60 minutes monthly to send disputes, track responses, and update your reports. Compare this to full-service credit repair which takes 0 hours but costs $149-449/month."
    },
    {
      question: "What's the difference between this and free DIY credit repair?",
      answer: "Free DIY means writing your own letters from scratch, creating Excel spreadsheets to track everything, and figuring out strategy yourself. Our software gives you AI-powered recommendations, professional letter templates, 3-bureau tracking, deadline management, and education—everything credit repair companies use. You save hundreds while getting professional tools."
    },
    {
      question: "Can I really dispute as many items as I want?",
      answer: "Yes. Whether you have 1 negative item or 50, the price is the same. Dispute all of them, re-dispute verified items with different strategies, send multiple rounds—unlimited. This is why DIY saves so much money compared to services that charge per-item or per-dispute."
    },
    {
      question: "What if I get stuck or have questions?",
      answer: "We provide email support from real credit repair experts. Typically respond within 24 hours on business days. Plus, our education library has tutorials, sample disputes, and step-by-step guides for common situations. You're never truly on your own."
    },
    {
      question: "Will bureaus take my disputes seriously?",
      answer: "Yes, IF you use proper dispute letters. That's exactly what our letter generator creates—professional, legally-compliant disputes that cite specific FCRA violations, Metro 2 errors, and debt validation requirements. Bureaus are REQUIRED by federal law to investigate all disputes, whether they come from you or a credit repair company."
    },
    {
      question: "How long until I see results?",
      answer: "Bureaus have 30 days to respond to disputes. Most people see their first deletions within 45-60 days. Significant score improvements (50+ points) typically happen within 3-6 months as multiple items are removed. Timeline depends on how many items you're disputing and how quickly bureaus respond."
    },
    {
      question: "What if I'm not satisfied?",
      answer: "We offer a 7-day free trial (no credit card required) and a 30-day money-back guarantee after you subscribe. If the software isn't what you expected, cancel within 30 days for a full refund. We want you to succeed, not feel trapped."
    },
    {
      question: "Can I upgrade to full-service credit repair later?",
      answer: "Absolutely. If you try DIY and realize it's not for you, we can transition you to our full-service credit repair team at any time. Many clients start with DIY to save money, then upgrade if their situation becomes more complex. We're here to help either way."
    }
  ];

  const handleSignupClick = () => {
    window.open('https://member.getcreditily.com/Registration/CreateAccount/Account', '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="font-['Inter',sans-serif]">
      <Header />
      {/* SECTION 1: HERO */}
      <section className="bg-gradient-to-br from-white via-amber-50 to-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* LEFT COLUMN - Content */}
            <div>
              {/* Eyebrow */}
              <p className="text-sm uppercase tracking-wide text-gray-700 mb-4 font-medium">
                DIY CREDIT REPAIR — POWERED BY MESA GROUP
              </p>
              
              {/* H1 Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-[#f9c65d]">Not Ready</span> for Full-Service? Fix It Yourself for <span className="text-[#f9c65d]">$39.99/mo</span>.
              </h1>
              
              {/* Subheadline */}
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                Professional-grade credit repair tools — now in your hands. AI tells you what to dispute. We give you the letters. You send them. No waiting on anyone else. You're in control.
              </p>
              
              {/* Value Props Quick List */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Just <strong>$39.99/month</strong> (vs. thousands that other companies charge)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700"><strong>Unlimited disputes</strong> to all 3 bureaus</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700"><strong>AI-powered recommendations</strong> on what to challenge</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700"><strong>Professional letter templates</strong> citing federal law</span>
                </li>
              </ul>
              
              {/* Primary CTA */}
              <button 
                onClick={handleSignupClick}
                className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-lg font-semibold px-8 py-4 w-full md:w-auto"
              >
                Start Your DIY Credit Repair
              </button>
              
              <p className="text-sm text-gray-600 mt-4">
                Powered by Mesa Group
              </p>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <Zap className="w-6 h-6 text-amber-500" />
                  <span className="text-sm font-medium text-foreground">Setup in 5 Minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bot className="w-6 h-6 text-purple-600" />
                  <span className="text-sm font-medium text-foreground">AI-Powered</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-6 h-6 text-gray-700" />
                  <span className="text-sm font-medium text-foreground">Track All 3 Bureaus</span>
                </div>
              </div>
            </div>
            
            {/* RIGHT COLUMN - Visual */}
            <div className="hidden md:flex items-center justify-center">
              <img 
                src={creditilyLogo} 
                alt="Creditily - DIY Credit Repair Software" 
                className="max-w-full h-auto"
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* SECTION 2: IS DIY RIGHT FOR YOU? */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Two Ways to Bridge the Gap
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            No wrong answers. Just different paths depending on your situation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* DIY IS GREAT IF... */}
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Creditily DIY Is For You If:</span>
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-1">•</span>
                  <span>You've got <strong>2-3 hours/month</strong> to manage disputes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-1">•</span>
                  <span>You're <strong>organized</strong> and can track deadlines</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-1">•</span>
                  <span>You want to <strong>save money</strong> — 70% less than full-service</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-1">•</span>
                  <span>You like <strong>being in control</strong> of the process</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-1">•</span>
                  <span>You're comfortable with <strong>basic technology</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-1">•</span>
                  <span>You have <strong>1-10 negative items</strong> to tackle</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-1">•</span>
                  <span>You want to <strong>learn the system</strong> — not just fix it once</span>
                </li>
              </ul>
            </div>
            
            {/* CHOOSE FULL-SERVICE IF... */}
            <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="text-3xl">→</span>
                <span>Mesa Group Full-Service Is For You If:</span>
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl mt-1">•</span>
                  <span>You'd rather spend your time on <strong>life</strong> — not paperwork</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl mt-1">•</span>
                  <span>Your situation is <strong>complex</strong> (bankruptcy, repos, foreclosure)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl mt-1">•</span>
                  <span>You have <strong>15+ negative items</strong> to tackle</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl mt-1">•</span>
                  <span>You need direct <strong>creditor negotiations</strong> (goodwill letters, pay-for-delete)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl mt-1">•</span>
                  <span>You want <strong>experts handling everything</strong> — start to finish</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl mt-1">•</span>
                  <span>You'd rather not deal with <strong>disputes, deadlines, or tracking</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl mt-1">•</span>
                  <span>You're ready to invest in a <strong>white-glove experience</strong></span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-orange-200">
                <a 
                  href="/credit-repair" 
                  className="text-secondary hover:text-primary font-semibold underline"
                >
                  Learn about our full-service credit repair →
                </a>
              </div>
            </div>
            
          </div>
          
          {/* Cost Comparison */}
          <div className="relative bg-[#6c6c6c] rounded-lg p-8 mt-12 text-center overflow-hidden">
            {/* Watermark Background */}
            <div 
              className="absolute inset-0 opacity-[0.12] pointer-events-none"
              style={{
                backgroundImage: `url(${creditilyWideWolfLogo})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: '80% auto',
              }}
            />
            <div className="relative z-10">
              <h4 className="text-2xl font-bold text-black mb-4">Credit Repair Shouldn't Cost Thousands</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div>
                  <div className="text-5xl font-bold text-gray-400 mb-2">$1,000 - $3,000+</div>
                  <div className="text-lg text-gray-300">upfront</div>
                  <div className="text-sm text-gray-400 mt-2">What most companies charge</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-[#f9c65d] mb-2">$39.99/mo</div>
                  <div className="text-lg text-gray-300"></div>
                  <div className="text-sm text-gray-400 mt-2">What you'll pay with Creditily</div>
                </div>
              </div>
              <p className="text-black mt-6">
                Professional tools. No upfront fees. No long-term contracts. Just results.
              </p>
            </div>
          </div>
          
        </div>
      </section>

      <EmotionalCTA1 />

      {/* SECTION 3: HOW IT WORKS */}
      <section className="bg-[#2c2c2c] py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Simple Steps. <span className="text-[#f9c65d]">Powerful Results.</span>
          </h2>
          
          <p className="text-lg text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            Our software guides you through every move — you're never doing this alone.
          </p>
          
          {/* 5-Step Process */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            
            {/* Step 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/10">
              <div className="w-16 h-16 bg-[#f9c65d] text-[#2c2c2c] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <div className="flex justify-center mb-4">
                <ClipboardList className="w-10 h-10 text-[#f9c65d]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Import Your Reports
              </h3>
              <p className="text-sm text-gray-300">
                Upload your 3-bureau report. AI analyzes every negative item instantly.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/10">
              <div className="w-16 h-16 bg-[#f9c65d] text-[#2c2c2c] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <div className="flex justify-center mb-4">
                <Bot className="w-10 h-10 text-[#f9c65d]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Get AI Recommendations
              </h3>
              <p className="text-sm text-gray-300">
                See exactly what to dispute and why — prioritized for impact.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/10">
              <div className="w-16 h-16 bg-[#f9c65d] text-[#2c2c2c] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <div className="flex justify-center mb-4">
                <PenTool className="w-10 h-10 text-[#f9c65d]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Generate Letters
              </h3>
              <p className="text-sm text-gray-300">
                Professional dispute letters citing federal law — created in seconds.
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/10">
              <div className="w-16 h-16 bg-[#f9c65d] text-[#2c2c2c] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <div className="flex justify-center mb-4">
                <Mail className="w-10 h-10 text-[#f9c65d]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Send Your Disputes
              </h3>
              <p className="text-sm text-gray-300">
                Print and mail or send digitally. Track every deadline automatically.
              </p>
            </div>
            
            {/* Step 5 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/10">
              <div className="w-16 h-16 bg-[#f9c65d] text-[#2c2c2c] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                5
              </div>
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-10 h-10 text-[#f9c65d]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Track Your Results
              </h3>
              <p className="text-sm text-gray-300">
                Monitor responses, pull updated reports, and watch your score climb.
              </p>
            </div>
            
          </div>
          
          {/* Timeline Expectation */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mt-12 max-w-4xl mx-auto border border-white/10">
            <h4 className="text-xl font-bold text-white mb-4 text-center">
              What the Process Looks Like
            </h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3">
                <span className="font-semibold text-[#f9c65d] min-w-[120px]">First Round:</span>
                <span>Import reports, identify negative items, send your first disputes</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-semibold text-[#f9c65d] min-w-[120px]">30 Days Later:</span>
                <span>Bureaus respond (they're required to by law). Some items deleted, some verified.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-semibold text-[#f9c65d] min-w-[120px]">Next Round:</span>
                <span>Dispute verified items with a different strategy</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-semibold text-[#f9c65d] min-w-[120px]">Ongoing:</span>
                <span>Continue cycles until your report is clean. Credit repair is a marathon — not a sprint.</span>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <EmotionalCTA2 />

      {/* SECTION 4: KEY FEATURES */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Everything You Need to Bridge the Gap.
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Professional-grade credit repair tools — now in your hands for just $39.99/mo.
          </p>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Feature 1: AI Analysis */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-6 border-2 border-purple-200">
              <div className="flex justify-center mb-4">
                <Bot className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                AI-Powered. Zero Guesswork.
              </h3>
              <p className="text-gray-700 mb-4">
                Import your 3-bureau report automatically — no hard inquiry. Our AI identifies exactly what's hurting your score and tells you how to attack it.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">✓</span>
                  <span>Auto-imports all 3 bureaus (no hard inquiry)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">✓</span>
                  <span>Prioritizes high-impact items first</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">✓</span>
                  <span>Suggests new strategies monthly if items aren't deleted</span>
                </li>
              </ul>
            </div>
            
            {/* Feature 2: Professional Letters */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-yellow-200">
              <div className="flex justify-center mb-4">
                <FileText className="w-10 h-10 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Letters the Pros Would Send — Generated Instantly
              </h3>
              <p className="text-gray-700 mb-4">
                Letters are far more effective than online disputes. Ours cite federal consumer protection laws — and because YOU send them, bureaus can't reject them like they do with credit repair companies.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600">✓</span>
                  <span>Cites FCRA, FDCPA, and Metro 2 violations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600">✓</span>
                  <span>More effective than online disputes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600">✓</span>
                  <span>You send them — bureaus must respond</span>
                </li>
              </ul>
            </div>
            
            {/* Feature 3: 3-Bureau Tracking */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-6 border-2 border-green-200">
              <div className="flex justify-center mb-4">
                <BarChart3 className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                One Dashboard. Total Control.
              </h3>
              <p className="text-gray-700 mb-4">
                Manage unlimited disputes across Experian, Equifax, and TransUnion — all at the same time. No juggling accounts. No missing deadlines.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>All 3 bureaus in a single dashboard</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Unlimited disputes — whether you have 1 item or 50</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Monthly updates show what's deleted + your new scores</span>
                </li>
              </ul>
            </div>
            
            {/* Feature 4: Unlimited Disputes */}
            <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-lg p-6 border-2 border-pink-200">
              <div className="flex justify-center mb-4">
                <Infinity className="w-10 h-10 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                No Limits. No Extra Charges.
              </h3>
              <p className="text-gray-700 mb-4">
                Dispute everything — all 3 bureaus, as many items as you have, as many rounds as needed. One price. Unlimited firepower.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-pink-500">✓</span>
                  <span>1 account or 50 — same price</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500">✓</span>
                  <span>Re-dispute verified items with new strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500">✓</span>
                  <span>Keep going until your report is clean</span>
                </li>
              </ul>
            </div>
            
            {/* Feature 5: Progress Dashboard */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border-2 border-blue-200">
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Watch It Work.
              </h3>
              <p className="text-gray-700 mb-4">
                Every month, your report is re-imported automatically. See exactly what's been deleted, what's pending, and how your score is climbing — all 3 bureaus, one dashboard.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">✓</span>
                  <span>Monthly score updates across all 3 bureaus</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">✓</span>
                  <span>See exactly which items were removed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">✓</span>
                  <span>Track your progress visually over time</span>
                </li>
              </ul>
            </div>
            
            {/* Feature 6: Education Library */}
            <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-lg p-6 border-2 border-gray-200">
              <div className="flex justify-center mb-4">
                <BookOpen className="w-10 h-10 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Expert Guidance. Zero Extra Cost.
              </h3>
              <p className="text-gray-700 mb-4">
                Credit coaching videos, articles, and downloadable guides included with your membership. Learn the process. Understand the laws. Become your own expert.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-gray-500">✓</span>
                  <span>Video lessons from credit experts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500">✓</span>
                  <span>Tutorials for every step of the process</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500">✓</span>
                  <span>Bonus guides: goodwill letters, identity theft protection, and more</span>
                </li>
              </ul>
            </div>
            
          </div>
          
        </div>
      </section>

      <EmotionalCTA3 />

      {/* SECTION 5: WHAT YOU CAN DISPUTE */}
      <section className="bg-accent py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Types of Negative Items You Can Dispute
          </h2>
          
          {/* Negative Item Types Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <div className="flex justify-center mb-2">
                <Calendar className="w-8 h-8 text-gray-700" />
              </div>
              <div className="font-semibold text-foreground">Late Payments</div>
            </div>
            
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <div className="flex justify-center mb-2">
                <CreditCard className="w-8 h-8 text-gray-700" />
              </div>
              <div className="font-semibold text-foreground">Collections</div>
            </div>
            
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <div className="flex justify-center mb-2">
                <X className="w-8 h-8 text-gray-700" />
              </div>
              <div className="font-semibold text-foreground">Charge-Offs</div>
            </div>
            
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <div className="flex justify-center mb-2">
                <Car className="w-8 h-8 text-gray-700" />
              </div>
              <div className="font-semibold text-foreground">Repossessions</div>
            </div>
            
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <div className="flex justify-center mb-2">
                <Home className="w-8 h-8 text-gray-700" />
              </div>
              <div className="font-semibold text-foreground">Foreclosures</div>
            </div>
            
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <div className="flex justify-center mb-2">
                <Scale className="w-8 h-8 text-gray-700" />
              </div>
              <div className="font-semibold text-foreground">Bankruptcies</div>
            </div>
            
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <div className="flex justify-center mb-2">
                <Gavel className="w-8 h-8 text-gray-700" />
              </div>
              <div className="font-semibold text-foreground">Judgments</div>
            </div>
            
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <div className="flex justify-center mb-2">
                <Search className="w-8 h-8 text-gray-700" />
              </div>
              <div className="font-semibold text-foreground">Hard Inquiries</div>
            </div>
            
          </div>
          
          {/* Important Disclaimer */}
          <div className="bg-white rounded-lg p-8 border-2 border-secondary">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-10 h-10 text-orange-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  What Can You Dispute?
                </h3>
                <p className="text-gray-700 mb-4">
                  Under the FCRA, you have the right to challenge anything inaccurate, incomplete, unverifiable, or unfairly reported. And here's the thing — even items that seem accurate often have errors:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">•</span>
                    <span>Incorrect dates or balances</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">•</span>
                    <span>Missing required documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">•</span>
                    <span>Reporting violations (Metro 2 errors)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">•</span>
                    <span>Debt that can't be verified</span>
                  </li>
                </ul>
                <p className="text-gray-700 font-medium">
                  The AI scans for these. You dispute them. That's how it works.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* SECTION 6: PRICING */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            One Plan. Everything You Need.
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 text-center">
            No hidden fees. No setup charges. Cancel anytime.
          </p>
          
          {/* Pricing Card */}
          <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 md:p-12 text-center shadow-2xl max-w-2xl mx-auto">
            
            <div className="bg-white rounded-xl p-8 mb-6">
              <h3 className="text-2xl font-bold text-[#3e3e3e] mb-4">CREDITILY PRO</h3>
              <div className="text-6xl font-bold text-[#3e3e3e] mb-2">$39.99</div>
              <div className="text-2xl text-gray-700 mb-6">/mo</div>
              
              <div className="h-px bg-gray-300 my-6"></div>
              
              <h4 className="text-lg font-semibold text-gray-900 mb-4 text-left">What's Included:</h4>
              
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-800">Unlimited disputes to all 3 bureaus</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-800">AI-powered analysis and recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-800">Professional dispute letter generator</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-800">Monthly 3-bureau credit reports & scores</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-800">Real-time tracking dashboard</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-800">Credit coaching tutorials & guides</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-800">Credit monitoring & alerts</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-800">$1 Million identity fraud insurance</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-800">PrivacyMaster® protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-800">Cancel anytime — no contracts, no penalties</span>
                </li>
              </ul>
              
              <button 
                onClick={handleSignupClick}
                className="w-full text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold py-4"
              >
                Get Started for $39.99/mo →
              </button>
              
              <p className="text-sm text-gray-600 mt-4">
                Powered by Mesa Group
              </p>
            </div>
            
          </div>
          
        </div>
      </section>

      {/* SECTION 7: FAQ ACCORDION */}
      <section className="bg-muted py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
            Common <span className="text-[#f9c65d]">Questions</span> About DIY Credit Repair
          </h2>
          <p className="text-xl text-gray-700 mb-12 text-center">
            Get answers to common questions about our DIY credit repair software.
          </p>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-amber-300 transition-colors duration-300">
                
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-white/50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-amber-600 flex-shrink-0 transition-transform duration-300 ${
                      openFAQ === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openFAQ === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 pt-2 bg-white">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* SECTION 8: USER TESTIMONIALS & COUNTERS */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-amber-50 py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            People Like You Are Doing It Themselves
          </h2>
          
          <p className="text-lg text-gray-700 mb-16 text-center max-w-4xl mx-auto leading-relaxed">
            No credit repair company. No thousands in fees. Just the right tools and the drive to take control. Creditily users are saving money and fixing their credit — on their own terms.
          </p>
          
          {/* Counter Header */}
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">
            What Creditily Users Are Saying
          </h3>
          
          {/* Counters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            
            {/* Counter 1: 5 Stars */}
            <div className="bg-white rounded-xl p-8 shadow-lg text-center border-2 border-amber-100 hover:border-amber-300 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-[#f9c65d] to-[#bb9446] rounded-full flex items-center justify-center">
                  <Star className="w-10 h-10 text-white fill-white" />
                </div>
              </div>
              <div className="text-6xl font-bold text-[#bb9446] mb-3">5</div>
              <div className="text-2xl font-semibold text-gray-900 mb-2">Stars</div>
              <div className="text-sm text-gray-600 leading-relaxed">Rated on Google</div>
            </div>
            
            {/* Counter 2: Thousands Saved */}
            <div className="bg-white rounded-xl p-8 shadow-lg text-center border-2 border-amber-100 hover:border-amber-300 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-[#f9c65d] to-[#bb9446] rounded-full flex items-center justify-center">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="text-6xl font-bold text-[#bb9446] mb-3">$1,000s</div>
              <div className="text-2xl font-semibold text-gray-900 mb-2">Saved</div>
              <div className="text-sm text-gray-600 leading-relaxed">vs. credit repair companies</div>
            </div>
            
            {/* Counter 3: Total Control */}
            <div className="bg-white rounded-xl p-8 shadow-lg text-center border-2 border-amber-100 hover:border-amber-300 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-[#f9c65d] to-[#bb9446] rounded-full flex items-center justify-center">
                  <Shield className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="text-6xl font-bold text-[#bb9446] mb-3">100%</div>
              <div className="text-2xl font-semibold text-gray-900 mb-2">Control</div>
              <div className="text-sm text-gray-600 leading-relaxed">You run the process</div>
            </div>
            
          </div>
          
          {/* Tagline */}
          <p className="text-xl text-gray-700 text-center font-medium italic">
            Real people. Real results. No middleman.
          </p>
          
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#FFFBEC] from-40% to-[#FFECD7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Trust Recap */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">Unlimited Disputes</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">AI-Powered Analysis</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">Professional Templates</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">Step-by-Step Guidance</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">Progress Tracking</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">Cancel Anytime</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">$39.99/month</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">No Contracts</span>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ready to Bridge the Gap — <span className="text-[#f9c65d]">Your Way?</span>
            </h2>
            
            <button 
              onClick={handleSignupClick}
              className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 mb-4"
            >
              Start Your DIY Credit Repair →
            </button>
            
            <p className="text-gray-600 mb-6">
              Or call us: <a href="tel:6613103040" className="text-[#bb9446] hover:underline font-semibold">(661) 310-3040</a>
            </p>
            <p className="text-sm text-gray-500 mb-8">Powered by Mesa Group</p>

            {/* Alternative Option */}
            <div className="pt-6 border-t border-gray-300">
              <p className="text-gray-600 mb-2">
                Not sure DIY is right for you?
              </p>
              <a 
                href="/credit-repair" 
                className="text-[#bb9446] hover:text-[#9a7a3a] font-semibold underline text-lg"
              >
                Check out our full-service credit repair →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default DIYCreditRepair;