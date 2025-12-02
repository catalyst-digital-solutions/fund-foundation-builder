import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Zap, BarChart3, TrendingUp, FileText, BookOpen, Calendar, CreditCard, Car, AlertTriangle, Shield, Star, Search, Bot, ClipboardList, PenTool, Mail, Infinity, X, Home, Scale, Gavel, Check, ChevronDown } from 'lucide-react';
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
                Not Ready for Full-Service? Fix It Yourself for $29.99/mo.
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
                  <span className="text-gray-700">Just <strong>$29.99/month</strong> (vs. thousands that other companies charge)</span>
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
            <div className="hidden md:block">
              <div className="bg-white rounded-lg shadow-2xl p-6 border-2 border-secondary">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
                    <span className="font-semibold text-foreground">Late Payment #1</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Removed ✓</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
                    <span className="font-semibold text-foreground">Collection Account</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Disputing...</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
                    <span className="font-semibold text-foreground">Credit Score</span>
                    <span className="text-2xl font-bold text-primary">658 → 712</span>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-600 mt-4 italic">
                  Track your progress in real-time
                </p>
              </div>
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
          <div className="bg-accent rounded-lg p-8 mt-12 text-center">
            <h4 className="text-2xl font-bold text-foreground mb-4">Credit Repair Shouldn't Cost Thousands</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <div className="text-5xl font-bold text-gray-400 mb-2">$1,000 - $3,000+</div>
                <div className="text-lg text-gray-700">upfront</div>
                <div className="text-sm text-gray-600 mt-2">What most companies charge</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-white mb-2">$29.99/mo</div>
                <div className="text-lg text-gray-700"></div>
                <div className="text-sm text-gray-600 mt-2">What you'll pay with Creditily</div>
              </div>
            </div>
            <p className="text-gray-700 mt-6">
              Professional tools. No upfront fees. No long-term contracts. Just results.
            </p>
          </div>
          
        </div>
      </section>

      <EmotionalCTA1 />

      {/* SECTION 3: HOW IT WORKS */}
      <section className="bg-muted py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            How DIY Credit Repair Works
          </h2>
          
          <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            Our software walks you through every step. You're never doing this alone.
          </p>
          
          {/* 5-Step Process */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            
            {/* Step 1 */}
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary text-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <div className="flex justify-center mb-4">
                <ClipboardList className="w-10 h-10 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Import Reports
              </h3>
              <p className="text-sm text-gray-700">
                Upload your 3-bureau credit report. Our AI analyzes every negative item.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary text-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <div className="flex justify-center mb-4">
                <Bot className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                AI Recommendations
              </h3>
              <p className="text-sm text-gray-700">
                See which items to dispute first, with strategy suggestions for each.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary text-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <div className="flex justify-center mb-4">
                <PenTool className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Generate Letters
              </h3>
              <p className="text-sm text-gray-700">
                Create professional dispute letters citing FCRA, FDCPA, and other laws.
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary text-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <div className="flex justify-center mb-4">
                <Mail className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Mail Disputes
              </h3>
              <p className="text-sm text-gray-700">
                Print and mail (or email) your disputes. Track delivery and deadlines.
              </p>
            </div>
            
            {/* Step 5 */}
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary text-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                5
              </div>
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Track Results
              </h3>
              <p className="text-sm text-gray-700">
                Monitor responses, update reports monthly, watch your score rise.
              </p>
            </div>
            
          </div>
          
          {/* Timeline Expectation */}
          <div className="bg-white rounded-lg p-8 mt-12 max-w-4xl mx-auto">
            <h4 className="text-xl font-bold text-foreground mb-4 text-center">
              Typical Timeline
            </h4>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start gap-3">
                <span className="font-semibold text-[#bb9446] min-w-[120px]">Week 1:</span>
                <span>Import reports, identify negative items, send first round of disputes</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-semibold text-[#bb9446] min-w-[120px]">Week 4-6:</span>
                <span>Bureaus respond (30-day deadline). Some items deleted, some verified</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-semibold text-[#bb9446] min-w-[120px]">Week 8:</span>
                <span>Send second round for verified items with different strategy</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-semibold text-[#bb9446] min-w-[120px]">Month 3-6:</span>
                <span>Continue cycles, see significant score improvements as items are removed</span>
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
            Everything You Need to Repair Your Credit
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Professional-grade tools that credit repair companies charge hundreds for—now yours for $49.99/month.
          </p>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Feature 1: AI Analysis */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-6 border-2 border-purple-200">
              <div className="flex justify-center mb-4">
                <Bot className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                AI-Powered Analysis
              </h3>
              <p className="text-gray-700 mb-4">
                Our AI scans your credit report and identifies which items are hurting your score most—and which are easiest to remove.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">✓</span>
                  <span>Prioritizes high-impact items</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">✓</span>
                  <span>Suggests dispute strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">✓</span>
                  <span>Predicts removal likelihood</span>
                </li>
              </ul>
            </div>
            
            {/* Feature 2: Professional Letters */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-yellow-200">
              <div className="flex justify-center mb-4">
                <FileText className="w-10 h-10 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Professional Letter Generator
              </h3>
              <p className="text-gray-700 mb-4">
                Create legally-compliant dispute letters that cite specific federal laws. Bureaus take these seriously.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600">✓</span>
                  <span>Cites FCRA violations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600">✓</span>
                  <span>Includes Metro 2 compliance issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600">✓</span>
                  <span>Multiple letter templates</span>
                </li>
              </ul>
            </div>
            
            {/* Feature 3: 3-Bureau Tracking */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-6 border-2 border-green-200">
              <div className="flex justify-center mb-4">
                <BarChart3 className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                3-Bureau Tracking
              </h3>
              <p className="text-gray-700 mb-4">
                Manage disputes with Experian, Equifax, and TransUnion all in one dashboard. No need to juggle three accounts.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Single dashboard for all 3</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Automatic deadline tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Color-coded status updates</span>
                </li>
              </ul>
            </div>
            
            {/* Feature 4: Unlimited Disputes */}
            <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-lg p-6 border-2 border-pink-200">
              <div className="flex justify-center mb-4">
                <Infinity className="w-10 h-10 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Unlimited Disputes
              </h3>
              <p className="text-gray-700 mb-4">
                Dispute as many items as you want, as often as needed. Whether you have 1 account or 50, same price.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-pink-500">✓</span>
                  <span>No per-item charges</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500">✓</span>
                  <span>Re-dispute verified items</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500">✓</span>
                  <span>Multiple dispute rounds</span>
                </li>
              </ul>
            </div>
            
            {/* Feature 5: Progress Dashboard */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border-2 border-blue-200">
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Real-Time Progress Dashboard
              </h3>
              <p className="text-gray-700 mb-4">
                See exactly which items have been removed, which are pending, and how your score is improving month by month.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">✓</span>
                  <span>Score tracking (all 3 bureaus)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">✓</span>
                  <span>Removal count & timeline</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">✓</span>
                  <span>Visual progress charts</span>
                </li>
              </ul>
            </div>
            
            {/* Feature 6: Education Library */}
            <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-lg p-6 border-2 border-gray-200">
              <div className="flex justify-center mb-4">
                <BookOpen className="w-10 h-10 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Credit Education Library
              </h3>
              <p className="text-gray-700 mb-4">
                Learn credit repair strategies, understand laws, read sample letters, watch tutorials. Become your own expert.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-gray-500">✓</span>
                  <span>Video tutorials</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500">✓</span>
                  <span>Sample successful disputes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500">✓</span>
                  <span>Credit laws explained</span>
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
                  Important: You Can Only Dispute Inaccurate Items
                </h3>
                <p className="text-gray-700 mb-4">
                  Federal law (FCRA) allows you to dispute items that are <strong>inaccurate, incomplete, unverifiable, or unfair</strong>. You CANNOT remove accurate, timely negative items just because you don't like them.
                </p>
                <p className="text-gray-700 mb-4">
                  However, even "accurate" items often have:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">•</span>
                    <span>Incorrect dates or amounts</span>
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
                    <span>Unverifiable debt ownership</span>
                  </li>
                </ul>
                <p className="text-gray-700 font-medium">
                  Our AI helps you identify these technicalities so you can dispute legally and effectively.
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
            Simple, Transparent Pricing
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 text-center">
            No hidden fees. No setup charges. Cancel anytime.
          </p>
          
          {/* Pricing Card */}
          <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 md:p-12 text-center shadow-2xl max-w-2xl mx-auto">
            
            <div className="bg-white rounded-xl p-8 mb-6">
              <div className="text-6xl font-bold text-[#3e3e3e] mb-2">$49.99</div>
              <div className="text-2xl text-gray-700 mb-4">per month</div>
              <div className="text-sm text-gray-600 mb-6">7-day free trial • No credit card required</div>
              
              <div className="h-px bg-gray-300 my-6"></div>
              
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-800"><strong>Unlimited disputes</strong> to all 3 credit bureaus</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-800"><strong>AI-powered</strong> analysis and recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-800"><strong>Professional letter generator</strong> (cites federal laws)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-800"><strong>Real-time tracking</strong> dashboard (3 bureaus)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-800"><strong>Progress monitoring</strong> & score tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-800"><strong>Education library</strong> (tutorials, templates, guides)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-800"><strong>Email support</strong> from credit experts</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-800"><strong>Cancel anytime</strong> (no contracts, no penalties)</span>
                </li>
              </ul>
              
              <button 
                onClick={handleSignupClick}
                className="w-full text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold py-4"
              >
                Start Your 7-Day Free Trial
              </button>
              
              <p className="text-sm text-gray-600 mt-4">
                No credit card required for trial. $49.99/month after trial ends.
              </p>
            </div>
            
            <p className="text-[#3e3e3e] text-lg">
              Try it risk-free for 7 days. If it's not for you, cancel before the trial ends—no charge.
            </p>
            
          </div>
          
          {/* Money-Back Guarantee */}
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 mt-12 text-center max-w-2xl mx-auto">
            <div className="flex justify-center mb-3">
              <Shield className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              30-Day Money-Back Guarantee
            </h3>
            <p className="text-gray-700">
              If you're not satisfied with the software in your first 30 days, we'll refund your money. No questions asked.
            </p>
          </div>
          
        </div>
      </section>

      {/* SECTION 7: FAQ ACCORDION */}
      <section className="bg-muted py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
            Common <span className="text-amber-600">Questions</span> About DIY Credit Repair
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

      {/* SECTION 8: SUCCESS STORIES */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Real DIY Success Stories
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 text-center">
            Everyday people using our software to fix their credit—and save thousands.
          </p>
          
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-lg p-6 shadow-md">
              <div className="flex gap-1 mb-4">
                <Star className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />
                <Star className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />
                <Star className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />
                <Star className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />
                <Star className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />
              </div>
              <p className="text-white mb-4 italic leading-relaxed">
                "Removed 3 collections and 2 late payments in 4 months. My score went from 590 to 680. Total cost: $200. Would've been $600+ with a credit repair company."
              </p>
              <div className="pt-4 border-t border-white/30">
                <p className="font-semibold text-white">Sarah M.</p>
                <p className="text-sm text-white/90">Bakersfield, CA</p>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-lg p-6 shadow-md">
              <div className="flex gap-1 mb-4">
                <Star className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />
                <Star className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />
                <Star className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />
                <Star className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />
                <Star className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />
              </div>
              <p className="text-white mb-4 italic leading-relaxed">
                "The AI told me exactly which items to dispute first. I was skeptical but followed the strategy. 2 of my biggest items were deleted in the first round. Already recommended to 3 friends."
              </p>
              <div className="pt-4 border-t border-white/30">
                <p className="font-semibold text-white">James T.</p>
                <p className="text-sm text-white/90">Kern County, CA</p>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-lg p-6 shadow-md">
              <div className="flex gap-1 mb-4">
                <Star className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />
                <Star className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />
                <Star className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />
                <Star className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />
                <Star className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />
              </div>
              <p className="text-white mb-4 italic leading-relaxed">
                "I spend maybe 1 hour a month on this. The letter generator is incredible—way better than anything I could've written myself. Saved me $1,500+ vs. hiring a company."
              </p>
              <div className="pt-4 border-t border-white/30">
                <p className="font-semibold text-white">Maria G.</p>
                <p className="text-sm text-white/90">Fresno, CA</p>
              </div>
            </div>
            
          </div>
          
          {/* Results Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#bb9446] mb-2">73%</div>
              <div className="text-gray-700">Success rate for first-time DIY users</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#bb9446] mb-2">$1,200</div>
              <div className="text-gray-700">Average savings vs. full-service (6 months)</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#bb9446] mb-2">4.8</div>
              <div className="text-gray-700">Average rating (out of 5 stars)</div>
            </div>
          </div>
          
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Take Control of Your <span className="text-amber-400">Credit</span>?
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl text-gray-300 mb-12">
            Try it free for 7 days. No credit card required. See results in your first month.
          </p>

          {/* Single CTA Card */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 text-left">
              <h3 className="text-2xl font-bold mb-4">DIY Credit Repair Software</h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <div className="text-3xl font-bold mb-1">7-Day</div>
                  <div className="text-sm opacity-90">Free Trial</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">$49.99</div>
                  <div className="text-sm opacity-90">Per Month</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">Unlimited</div>
                  <div className="text-sm opacity-90">Disputes</div>
                </div>
              </div>
              <button 
                onClick={handleSignupClick}
                className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-lg transition-colors"
              >
                Start Your Free 7-Day Trial
              </button>
              <p className="text-sm text-white/90 mt-3 text-center">
                No credit card required • Cancel anytime
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-amber-400" />
              <span>No Credit Card for Trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-amber-400" />
              <span>30-Day Money-Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-amber-400" />
              <span>Professional Templates Included</span>
            </div>
          </div>

          {/* Alternative Option */}
          <div className="mt-12 pt-8 border-t-2 border-white/20">
            <p className="text-gray-300 mb-3">
              Not sure DIY is right for you?
            </p>
            <a 
              href="/credit-repair" 
              className="text-amber-400 hover:text-amber-300 font-semibold underline text-lg"
            >
              Check out our full-service credit repair →
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
};

export default DIYCreditRepair;