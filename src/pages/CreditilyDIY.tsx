// src/pages/CreditilyDIY.tsx
// Mesa Group Consulting — Creditily DIY Credit Restoration Page
// Version 2.0 | February 2026

import { useState, useEffect } from "react";
import {
  CheckCircle,
  ArrowRight,
  Star,
  Shield,
  TrendingUp,
  FileText,
  Users,
  Clock,
  BarChart3,
  BookOpen,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Phone,
  Lock,
  RefreshCw,
  Search,
  Mail,
  CreditCard,
  Zap,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import ContactFormSection from "@/components/ContactFormSection";
import diyHeroImage from "@/assets/diy-credit-repair-hero.webp";

// ─────────────────────────────────────────────
// FAQ DATA
// ─────────────────────────────────────────────
const faqs = [
  {
    q: "Do I need to be technical to use Creditily?",
    a: "Not at all. If you can check email and browse a website, you can use this platform. Every step is guided with video tutorials, clear instructions, and tooltips that explain exactly what to do and why. Most people generate their first dispute letter in under 15 minutes.",
  },
  {
    q: "What makes Creditily different from trying to dispute on my own?",
    a: "When you dispute directly through a bureau's website, those submissions are often processed automatically without real human investigation. Creditily generates professional letters that cite the specific federal laws protecting your rights, sent via physical mail, which creates a legal trail bureaus are required to investigate thoroughly. The AI also identifies errors most people would never catch on their own and builds a multi-round strategy if items are not resolved the first time.",
  },
  {
    q: "How is Creditily different from Mesa Group full-service?",
    a: "With Creditily, you are in the driver's seat. You review the strategy, generate your letters, mail them, and track your results through the dashboard. The platform guides every step but you are the one moving through it.\n\nWith Mesa360, you have a dedicated Client Success Manager from day one who handles the strategy, the disputes, the creditor negotiations, and your 35-day progress updates. If you want a professional team in your corner doing the heavy lifting alongside you, Mesa360 is built for that.\n\nBoth paths lead to the same place. The right one depends on how you want to travel.",
  },
  {
    q: "How long until I see results?",
    a: "Bureaus are required by federal law to respond within 30 days of receiving your dispute. Most Creditily users see their first results at the 40-day mark when the platform automatically imports your updated report and shows you exactly what changed. Some items resolve in Round 1. Others take 2 to 3 rounds over several months. Credit restoration is a process not a shortcut, but every round moves you forward. Results may vary based on your individual situation.",
  },
  {
    q: "Can I dispute late payments, collections, charge-offs, and repossessions?",
    a: "Yes. Creditily is built to handle all major negative item types including late payments, collections, charge-offs, repossessions, foreclosures, bankruptcies, judgments, and hard inquiries. Even items that appear accurate often contain technical errors that give you legitimate grounds to dispute. The AI scans for all of it automatically.",
  },
  {
    q: "What if an item gets verified and is not removed in Round 1?",
    a: "This is completely normal and it is exactly where the AI earns its value. If an item survives Round 1, Creditily analyzes the bureau's response, shifts to a new legal strategy, and prepares your Round 2 approach automatically. The platform tracks every result across every round and uses that information to make each dispute stronger than the last.",
  },
  {
    q: "Do I need to upload any documents before I start?",
    a: "Yes, and this step matters. You will need to upload a valid photo ID and proof of address before generating your first dispute letter. Creditily automatically attaches these to every letter you create. Without them, bureaus can reject your dispute entirely. We walk you through exactly what to upload and it takes just a few minutes.",
  },
  {
    q: "Is Creditily backed by Mesa Group Consulting?",
    a: "Yes. Creditily is Mesa Group's platform for clients who want to take a hands-on approach to their credit restoration. The same methodology, expertise, and commitment to helping people first that drives everything Mesa Group does is built into this platform. Our team is reachable at (661) 310-3040 whenever you have questions.",
  },
  {
    q: "What if I am not satisfied?",
    a: "Creditily offers a 30-day money-back guarantee. If you are not satisfied within your first 30 days, contact support and we will make it right. No complicated process. No hoops to jump through. We stand behind this platform completely.",
  },
  {
    q: "Can I move to Mesa Group full-service later if I need more support?",
    a: "Absolutely. Many people start with Creditily to address the straightforward items on their report and later transition to Mesa360 when they want a dedicated team in their corner for more complex situations. Your Mesa Group team is always here when you are ready for that next step.",
  },
];

// ─────────────────────────────────────────────
// FAQ ACCORDION ITEM
// ─────────────────────────────────────────────
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-gray-900 pr-4">{q}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-[#f9c65d] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#f9c65d] flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white">
          {a.split("\n\n").map((para, i) => (
            <p key={i} className="text-gray-700 leading-relaxed mb-3 last:mb-0">
              {para}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN PAGE COMPONENT
// ─────────────────────────────────────────────
export default function CreditilyDIY() {
  // Load GHL form_embed.js via useEffect — never use <script> tags in JSX
  useEffect(() => {
    const scriptId = "ghl-form-embed-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://link.mesagroupconsulting.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SEO
        title="DIY Credit Restoration | Creditily — Powered by Mesa Group Consulting"
        description="Professional credit restoration tools in your hands. Creditily's AI-powered platform guides you through every dispute step backed by Mesa Group's expertise. $39.99/mo, cancel anytime."
        canonicalUrl="/creditily"
      />
      <Header />

      {/* ── SECTION 2: HERO ────────────────────────────── */}
      <section className="bg-gradient-to-br from-white via-amber-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left — Content */}
            <div className="space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                <span className="text-sm font-medium text-[#f9c65d]">
                  Backed by Mesa Group Consulting
                </span>
              </div>

              {/* H1 */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Professional Credit Restoration.<br />
                Now In <span className="text-[#f9c65d]">Your Hands.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                You deserve the same tools the professionals use. Mesa Group has guided 2,500+ families through the credit restoration process. Now that same expertise lives inside a platform built for people who are ready to take ownership of their journey.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://member.getcreditily.com/Registration/CreateAccount/Account"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold px-8 py-4 rounded-xl shadow-lg transition-colors text-base"
                >
                  <span className="text-center">Ready to get started?<br />Join Creditily today</span>
                  <ArrowRight className="w-5 h-5 flex-shrink-0" />
                </a>
              </div>

              {/* Trust Bar */}
              <div className="flex flex-wrap gap-6 pt-2">
                {[
                  { icon: Users, label: "2,500+ Families Helped" },
                  { icon: Star, label: "5-Star Rated on Google" },
                  { icon: Shield, label: "Backed by Mesa Group Consulting" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2">
                    <Icon className="w-5 h-5 text-[#f9c65d]" />
                    <span className="text-sm font-medium text-gray-700">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Hero Image */}
            <div className="relative flex flex-col justify-center lg:justify-end items-center gap-4">
              <img
                src="/mesa-group-consulting-girls-and-wolfie.png"
                alt="Creditily — Powered by Mesa Group Consulting"
                className="w-full max-w-lg object-contain"
                loading="eager"
              />
              <p className="text-sm text-gray-500 italic text-center">Creditily is our AI DIY credit restoration solution.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 3: LEAD CAPTURE SURVEY ────────────── */}
      <section id="lead-capture" className="py-16 md:py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Your Free{" "}
              <span className="text-[#f9c65d]">Dispute Letter Generator</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Answer 3 quick questions and we will unlock your free access to Creditily's AI-powered dispute letter generator. The same tool Mesa Group uses with clients every day. No credit card. No commitment.
            </p>
          </div>

          {/* GHL Survey Embed — script injected via useEffect above */}
          <div className="rounded-2xl overflow-hidden">
            <iframe
              src="https://link.mesagroupconsulting.com/widget/survey/nVWtGucezHO6c0Or4Il1"
              style={{ border: "none", width: "100%", minHeight: "480px", display: "block" }}
              scrolling="no"
              id="nVWtGucezHO6c0Or4Il1"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-activation-type="alwaysActivated"
              data-deactivation-type="neverDeactivate"
              data-form-name="Creditily DIY Lead Capture"
              data-form-id="nVWtGucezHO6c0Or4Il1"
              title="Creditily Free Dispute Letter Generator"
            />
          </div>
          <p className="text-center text-sm text-gray-500 -mt-6">
            No credit card required. What you share stays with us.<br />On completion, you will be taken directly to your free dispute letter generator.
          </p>
        </div>
      </section>

      {/* ── SECTION 4: WHAT IS CREDITILY ──────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left — Stats */}
            <div className="grid grid-cols-1 gap-6">
              {[
                { icon: Users, value: "2,500+", label: "Families Guided by Mesa Group" },
                { icon: BarChart3, value: "3 Bureaus", label: "Experian, Equifax, TransUnion" },
                { icon: CreditCard, value: "$39.99/month", label: "Cancel Anytime" },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 flex items-center gap-5 border border-amber-100">
                  <div className="bg-amber-400 rounded-xl p-3 flex-shrink-0">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{value}</p>
                    <p className="text-sm text-gray-600">{label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right — Copy */}
            <div className="space-y-6">
              <p className="text-sm font-semibold text-[#f9c65d] uppercase tracking-wider">
                More Than a Platform
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                The Expertise of Mesa Group.{" "}
                <span className="text-[#f9c65d]">In Your Hands.</span>
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-base">
                <p>
                  Most people who come to us carry more than just credit problems. They carry the weight of not knowing who to trust. Of trying things that did not work. Of wondering if their situation is even fixable.
                </p>
                <p>It is. And you do not have to navigate it alone.</p>
                <p>
                  Mesa Group has spent years sitting across from real people. Families who were denied. Entrepreneurs who got stuck. People who did everything right and still got left behind by a system no one explained to them.
                </p>
                <p>
                  We built Creditily because access to professional-grade credit restoration tools should not be a luxury. It should be a right.
                </p>
                <p>
                  This is not a generic credit app. It is Mesa Group's methodology, expertise, and dispute strategy built into a platform you control. The same approach we use with every full-service client, now available to you directly.
                </p>
                <p className="font-semibold text-gray-900">
                  You bring the commitment. Creditily brings everything else.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 5: WHO THIS IS FOR ─────────────────── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#f9c65d] uppercase tracking-wider mb-3">
              Two Paths. One Mission.
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              We Help{" "}
              <span className="text-[#f9c65d]">Everyone</span>{" "}
              Who Walks Through Our Door.
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Some people want a dedicated team in their corner from day one. Others are ready to take the wheel themselves. Both paths lead to the same destination. We will help you find the right one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {/* Creditily Card */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-amber-400 p-8 flex flex-col">
              <div className="bg-amber-400 text-gray-900 font-bold text-sm px-4 py-1.5 rounded-full inline-block mb-6 self-start">
                DIY Platform
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                Creditily Is Right For You If...
              </h3>
              <ul className="space-y-3 flex-1">
                {[
                  "You are ready to take an active role in your credit restoration journey",
                  "You have 1 to 10 negative items you want to address",
                  "You prefer to work at your own pace with professional tools guiding every step",
                  "You want to learn the system deeply so you can protect your credit for life",
                  "You are organized and can dedicate a few hours each month to your progress",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://getcreditily.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold px-6 py-3.5 rounded-xl transition-colors"
              >
                Start Your Creditily Journey
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </a>
            </div>

            {/* Mesa360 Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 flex flex-col">
              <div className="bg-[#3e3e3e] text-white font-bold text-sm px-4 py-1.5 rounded-full inline-block mb-6 self-start">
                Full-Service
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                Mesa360 Full-Service Is Right For You If...
              </h3>
              <ul className="space-y-3 flex-1">
                {[
                  "You want a dedicated Client Success Manager handling everything from start to finish",
                  "Your situation involves bankruptcy, repossessions, or foreclosure",
                  "You have multiple negative items across all three bureaus",
                  "You need direct creditor negotiations and legal team backing",
                  "You want 1-on-1 coaching and a real person in your corner every step of the way",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              {/* /mesa360 → corrected to /credit-repair (actual route) */}
              <a
                href="/credit-repair"
                className="mt-8 inline-flex items-center justify-center gap-2 border-2 border-gray-900 text-gray-900 font-semibold px-6 py-3.5 rounded-xl hover:bg-[#3e3e3e] hover:text-white transition-colors"
              >
                Explore Mesa360 Credit Restoration
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </a>
            </div>

          </div>

          {/* Wolfie + Mesa girls pointing at the plans — full viewport width */}
          <div className="mt-6 -mb-4 -mx-4 sm:-mx-6 lg:-mx-8 pointer-events-none select-none">
            <img
              src="/wolfie-and-the-mesa-group-consulting-girls-pointing-at-plans-for-creditily-diy-credit-restoration-in-bakersfield-no-bg-cropped.png"
              alt="Wolfie and the Mesa Group Consulting team pointing at your credit restoration options"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Reassurance line */}
          <p className="text-center text-gray-600 mt-4 text-base">
            Not sure which path fits?{" "}
            <a href="tel:6613103040" className="text-[#f9c65d] font-semibold hover:underline">
              Call us at (661) 310-3040
            </a>
            . We will give you an honest answer, even if that answer is just good advice.
          </p>
        </div>
      </section>

      {/* ── SECTION 6: HOW IT WORKS ────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#f9c65d] uppercase tracking-wider mb-3">
              A Process Built Around You
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Your Credit Restoration Journey.<br className="hidden md:block" />
              <span className="text-[#f9c65d]">Step by Step.</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Creditily does not leave you guessing. Every step is guided, every decision is supported, and every round is smarter than the last.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                num: 1,
                icon: Search,
                title: "Connect Your Credit Report",
                body: "Creditily pulls your complete 3-bureau report from Experian, Equifax, and TransUnion instantly, with no hard inquiry. Your full credit picture is on your dashboard in seconds. No guessing. No surprises.",
              },
              {
                num: 2,
                icon: FileText,
                title: "Upload Your ID Documents",
                body: "Before your first dispute, you will add a photo ID and proof of address to your account. Creditily automatically attaches these to every letter you generate. This matters because without them, bureaus can reject your dispute outright. We make sure that does not happen.",
              },
              {
                num: 3,
                icon: Zap,
                title: "AI Builds Your Strategy",
                body: "This is where Creditily separates itself. The AI scans thousands of lines of data across your entire credit report looking for 20 or more types of errors. Wrong dates, duplicate accounts, balance discrepancies, reporting violations, payment status errors. It then ranks every dispute reason by success rate, built from millions of real disputes across the platform. You see exactly what to challenge, exactly why it matters, and exactly where to start.",
              },
              {
                num: 4,
                icon: Mail,
                title: "Generate and Mail Your Letters",
                body: "With one click, your dispute letters are created. One letter per bureau. All your accounts combined on a single letter, exactly the way bureaus prefer. The letters are emailed to you to print, sign, and mail. Because you are the one sending them, bureaus are legally required to conduct a real investigation. Physical mail carries legal weight that online submissions simply do not.",
              },
              {
                num: 5,
                icon: RefreshCw,
                title: "Track Results and Build on Every Round",
                body: "Every 40 days, Creditily automatically imports your updated credit reports and compares them to the previous ones. You see every account that was repaired, every item that was deleted, and everything that needs a new strategy. The AI adapts. Round 2 is smarter than Round 1. Round 3 is smarter than Round 2. The platform keeps working until your report reflects who you actually are.",
              },
            ].map(({ num, icon: Icon, title, body }) => (
              <div key={num} className="flex gap-6 bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center shadow-md">
                    <span className="text-gray-900 font-bold text-lg">{num}</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-5 h-5 text-[#f9c65d]" />
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">{title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-base">{body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline callout */}
          <div className="mt-10 max-w-4xl mx-auto bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-2xl p-8">
            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#f9c65d]" />
              What Your Journey Looks Like
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: "Week 1", desc: "Connect your report, upload your ID, generate and mail your Round 1 letters" },
                { label: "Day 40", desc: "Creditily imports your updated report and shows you exactly what changed" },
                { label: "Round 2", desc: "AI shifts strategy for remaining items and new letters are ready to go" },
                { label: "Ongoing", desc: "Each round builds on the last. Most people see meaningful results within 2 to 3 rounds." },
              ].map(({ label, desc }) => (
                <div key={label} className="flex gap-3">
                  <div className="bg-amber-400 text-gray-900 font-bold text-xs px-2 py-1 rounded h-fit mt-0.5 flex-shrink-0">
                    {label}
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: WHAT YOU CAN DISPUTE ──────────── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#f9c65d] uppercase tracking-wider mb-3">
              Your Rights Under Federal Law
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              If It Is Inaccurate,<br />
              You Have the{" "}
              <span className="text-[#f9c65d]">Right to Challenge It.</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              The Fair Credit Reporting Act gives every American the right to dispute anything on their credit report that is inaccurate, incomplete, or cannot be verified. Creditily makes sure you use that right to its full potential.
            </p>
          </div>

          {/* 8-item grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
            {[
              { icon: Clock, label: "Late Payments" },
              { icon: AlertCircle, label: "Collections" },
              { icon: FileText, label: "Charge-Offs" },
              { icon: TrendingUp, label: "Repossessions" },
              { icon: Shield, label: "Foreclosures" },
              { icon: FileText, label: "Bankruptcies" },
              { icon: AlertCircle, label: "Judgments" },
              { icon: Search, label: "Hard Inquiries" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-amber-100 rounded-xl p-3 mb-3">
                  <Icon className="w-6 h-6 text-[#f9c65d]" />
                </div>
                <p className="text-sm font-semibold text-gray-900">{label}</p>
              </div>
            ))}
          </div>

          {/* Legal callout */}
          <div className="max-w-4xl mx-auto bg-white border-l-4 border-amber-400 rounded-xl p-8 shadow-sm">
            <h4 className="text-lg font-bold text-gray-900 mb-3">
              What actually makes an item disputable?
            </h4>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Most people assume an item has to be obviously wrong to dispute it. That is rarely the case. Even accounts that appear accurate on the surface often contain errors buried in the data. Incorrect dates. Wrong balances. Missing documentation. Reporting format violations. The Creditily AI scans for all of it automatically, across 20 or more error types, and surfaces every legitimate dispute opportunity in your report.
            </p>
            <p className="text-gray-700 mb-3 font-semibold">You can challenge items that are:</p>
            <ul className="space-y-2">
              {[
                "Inaccurate — incorrect dates, balances, or account status",
                "Incomplete — missing required information under federal reporting standards",
                "Unverifiable — the creditor cannot substantiate the account with documentation",
                "Reported in violation — errors in reporting format that violate federal compliance standards",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: PLATFORM FEATURES ─────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#f9c65d] uppercase tracking-wider mb-3">
              Built With One Purpose
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to{" "}
              <span className="text-[#f9c65d]">Take Ownership.</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Six professional capabilities in one platform.<br />Built for people who are ready to stop waiting and start moving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Search,
                title: "AI That Sees What You Cannot",
                body: "Your credit report is more than what you see on the screen. Behind every account is thousands of lines of data and buried inside that data is the formula for disputing it. Creditily's AI reads all of it, scanning for 20 or more types of errors and building a dispute strategy ranked by real success data from millions of cases across the platform.",
              },
              {
                icon: BarChart3,
                title: "Dispute Strategies Backed by Real Results",
                body: "Every suggested dispute reason in your plan is ranked by success rate. Not guesswork. Not templates. Actual performance data from millions of real disputes. The most effective approach rises to the top. You review it, accept it or adjust it, and move forward with confidence.",
              },
              {
                icon: Mail,
                title: "Professional Letters Ready to Sign and Send",
                body: "Your dispute letters are generated in seconds and emailed to you ready to print, sign, and mail. One letter per bureau with every account included. Your ID and proof of address are automatically attached. Everything the bureaus need is already there. All you do is send it.",
              },
              {
                icon: BarChart3,
                title: "One Dashboard for All Three Bureaus",
                body: "Every account across all three bureaus organized in one clean dashboard. Positive accounts separated from negative. Disputes tracked with deadlines. A 40-day countdown timer so you always know exactly where you are in the process and what needs to happen next.",
              },
              {
                icon: RefreshCw,
                title: "A Strategy That Gets Smarter Every Round",
                body: "The dispute process is not a one-time event. Every 40 days Creditily imports your new report, compares it to the last one, and updates your plan. Items that survive Round 1 get a refined strategy for Round 2. The AI tracks every result across every round and uses that information to build a stronger approach each time.",
              },
              {
                icon: BookOpen,
                title: "Credit Education Built Into the Platform",
                body: "Understanding your credit is not a bonus feature here. It is part of the program. Video tutorials, step-by-step guides, and educational resources are included at no extra cost. Because the goal is not just a clean report. It is making sure you never have to start over.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-gradient-to-br from-gray-50 to-amber-50 rounded-2xl border border-gray-200 p-7 hover:shadow-md transition-shadow">
                <div className="bg-amber-400 rounded-xl p-3 inline-block mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: PRICING ─────────────────────────── */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#f9c65d] uppercase tracking-wider mb-3">
              Transparent. Simple. No Surprises.
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              One Plan.{" "}
              <span className="text-[#f9c65d]">Everything Included.</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              No hidden fees. No setup charges. No long contracts. Professional credit restoration tools, available to anyone who is ready to use them.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl border-2 border-amber-400 p-8 md:p-10">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <img src="/partners/diy-credit-repair-creditily-logo.png" alt="Creditily" className="w-full max-w-[250px] h-auto object-contain" />
                </div>
                <p className="text-xs text-gray-500 mb-4">Powered by Mesa Group</p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-5xl font-bold text-gray-900">$39.99</span>
                  <span className="text-gray-500 mb-2">/month</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">cancel anytime</p>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Unlimited disputes across all 3 bureaus — Experian, Equifax, TransUnion",
                  "AI-powered dispute analysis and strategy recommendations",
                  "Professional dispute letter generator citing federal law",
                  "3-bureau credit reports and score updates every 40 days",
                  "Real-time tracking dashboard with round-by-round progress",
                  "Credit education video library and downloadable guides",
                  "Credit monitoring and alert notifications",
                  "$1 million identity fraud insurance",
                  "PrivacyMaster protection",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-center text-xs text-gray-500 mb-6">No contracts. Cancel anytime online.</p>

              <a
                href="https://getcreditily.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold px-8 py-4 rounded-xl shadow-lg transition-colors text-base"
              >
                Start Your Credit Restoration Journey
                <ArrowRight className="w-5 h-5 flex-shrink-0" />
              </a>

              {/* Trust badges */}
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                {["Cancel Anytime", "30-Day Money-Back Guarantee", "No Contracts", "Backed by Mesa Group"].map((badge) => (
                  <span key={badge} className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full font-medium">
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Footnote */}
            <p className="text-center text-xs text-gray-500 mt-4 leading-relaxed">
              Creditily is powered by SmartCredit technology. Results may vary.<br />We cannot guarantee specific outcomes or credit score improvements.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: TESTIMONIALS ──────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#f9c65d] uppercase tracking-wider mb-3">
              Real People. Real Journeys.
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              This Is What <span className="text-[#f9c65d]">Taking Ownership</span><br />
              Looks Like.
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              When people stop waiting and start moving, things change.<br />Here is what that looks like in real life.
            </p>
          </div>

          {/* Stat blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            {[
              { value: "2,500+", label: "Families Guided by Mesa Group" },
              { value: "5 Stars", label: "on Google" },
              { value: "Real Team", label: "Backed by a Team That Has Been Where You Are" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100">
                <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
                <p className="text-sm text-gray-600">{label}</p>
              </div>
            ))}
          </div>

          {/* NOTE FOR MARIO AND EVERT: Replace placeholder testimonials below with real verified
              Creditily client reviews. First name, last initial, city and state. Their words
              exactly as written or spoken. No edits. Add FTC disclaimer beneath all testimonials. */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                photo: "/reviews/creditily/img-01-portrait-of-relieved-woman-at-desk.png",
                quote: "I had tried to figure this out on my own for months and kept hitting walls. Creditily showed me exactly where to start, built my letters automatically, and within 40 days I had my first deletions. Having Mesa Group behind it made me feel like I was actually in good hands.",
                name: "Jennifer K.",
                detail: "First deletions in 40 days",
                location: "Atlanta, GA",
              },
              {
                photo: "/reviews/creditily/img-02-confident-man-in-navy-button-down.png",
                quote: "What got me was how organized everything was. I knew exactly what was being disputed, why it was being disputed, and when I would see results. I never felt lost. Four collections removed in my first round and my score is moving in the right direction.",
                name: "Marcus T.",
                detail: "4 collections removed in Round 1",
                location: "Dallas, TX",
              },
              {
                photo: "/reviews/creditily/img-03-relaxed-hispanic-man-in-warm-light.png",
                quote: "The education library alone changed how I think about credit. I finally understand how the system actually works. The dispute letters cite real federal laws. This is not a shortcut. It is the real thing, and it works.",
                name: "David R.",
                detail: "Finally understands how the system works",
                location: "Phoenix, AZ",
              },
              {
                photo: "/reviews/creditily/img-04-confident-woman-in-light-colored-sweater.png",
                quote: "I appreciated that I was in control the whole time. I reviewed every letter before it went out. I understood every step. I chose what to dispute. And the results followed. Knowing Mesa Group built this gave me confidence from day one.",
                name: "Amanda S.",
                detail: "In control every step of the way",
                location: "Denver, CO",
              },
            ].map(({ photo, quote, name, detail, location }) => (
              <div key={name} className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-2xl shadow-lg overflow-hidden flex flex-col">
                {photo && (
                  <img src={photo} alt="" aria-hidden className="w-full h-auto block flex-shrink-0" />
                )}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />
                    ))}
                  </div>
                  <p className="text-white italic leading-relaxed mb-6 flex-1">"{quote}"</p>
                  <div className="border-t border-gray-600 pt-4">
                    <p className="font-semibold text-white text-sm">{name}</p>
                    {detail && <p className="text-sm text-[#f9c65d] font-semibold mt-1">{detail}</p>}
                    <p className="text-xs text-gray-400">{location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center max-w-2xl mx-auto space-y-2">
            <p className="text-sm text-gray-500">
              Individual results may vary. Testimonials are not a guarantee of future performance or results. Success depends on individual circumstances including credit history, accuracy of disputed items, and credit bureau responsiveness.
            </p>
            <p className="text-xs text-gray-400">
              Images may be AI-generated, stock photo, or other representations and may not depict actual clients.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 11: FAQ ────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[53rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#f9c65d] uppercase tracking-wider mb-3">
              You Have Questions. We Have Honest Answers.
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Want to Know<br />
              <span className="text-[#f9c65d]">Before You Start.</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe transparency is not a policy. It is a promise. If your question is not here,{" "}
              <a href="tel:6613103040" className="text-[#f9c65d] font-semibold hover:underline">
                call us at (661) 310-3040
              </a>
              . We are real people and we will give you a straight answer.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <FAQItem key={q} q={q} a={a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 12: FINAL CTA ──────────────────────── */}
      <section
        className="py-16 md:py-24"
        style={{ background: "linear-gradient(135deg, #3e3e3e 0%, #2a2a2a 60%, #3e3e3e 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-4">
            You Have Been Ready. Now You Have the Tools.
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Take Ownership of Your Credit Journey.{" "}
            <span className="text-amber-400">Your Way.</span>
          </h2>
          <div className="space-y-4 text-gray-300 text-base leading-relaxed max-w-3xl mx-auto mb-10">
            <p>
              Good credit is not just a number. It is the apartment you actually get approved for. The business that finally gets funded. The rate you actually deserve instead of the one that punishes you for a past no one helped you navigate.
            </p>
            <p>
              Bad credit does not mean you are irresponsible. It means no one taught you. That changes today.
            </p>
            <p>
              Creditily, backed by Mesa Group Consulting, gives you the professional tools, the proven strategy, and the guidance to restore your credit on your terms. At your pace. With real support behind you every step of the way.
            </p>
            <p>
              You have always had the right to challenge inaccurate information on your credit report. Now you have everything you need to do it the right way.
            </p>
          </div>

          <a
            href="https://getcreditily.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold px-10 py-5 rounded-xl shadow-xl transition-colors text-lg mb-6"
          >
            Start Your Creditily Journey Today
            <ArrowRight className="w-6 h-6 flex-shrink-0" />
          </a>

          <p className="text-gray-400 text-sm mb-2">
            Questions?{" "}
            <a href="tel:6613103040" className="text-amber-400 font-semibold hover:underline">
              Call us: (661) 310-3040
            </a>
          </p>
          <p className="text-gray-500 text-xs">
            Cancel anytime · No contracts · 30-day guarantee · Backed by Mesa Group Consulting
          </p>
        </div>
      </section>

      <ContactFormSection />
      <Footer />
    </div>
  );
}
