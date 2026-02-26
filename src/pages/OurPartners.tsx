// src/pages/OurPartners.tsx
// Mesa Group Consulting — Our Partners Page
// Version 1.0 | February 2026

import {
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Star,
  Users,
  Shield,
  Award,
  HeartHandshake,
  ExternalLink,
  BadgeCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import ContactFormSection from "@/components/ContactFormSection";

export default function OurPartners() {

  const premierChannels = [
    {
      name: "Chaklo Credit",
      tagline: "For the Punjabi Community",
      description:
        "Premium credit restoration and financial education built specifically for the Punjabi community — delivered in their language, with the cultural respect their families deserve.",
      accentColor: "border-orange-300",
      bgColor: "from-orange-50 to-amber-50",
      logo: "/partners/chaklo-credit-logo.png",
      href: "https://chaklo.mesagroupconsulting.com/",
    },
    {
      name: "Credit Sherbie",
      tagline: "Real Guidance. No Runaround.",
      description:
        "Real guidance for people who are done settling for less. No runaround, no jargon — just the kind of direct, knowledgeable advice that actually moves the needle.",
      accentColor: "border-amber-300",
      bgColor: "from-amber-50 to-yellow-50",
      logo: "/partners/credit-sherbie-logo.png",
      href: "https://www.tiktok.com/@creditsherbie",
    },
    {
      name: "Creditily",
      tagline: "Modern. Accessible. Yours.",
      description:
        "A modern, accessible platform for people who want to take ownership of their credit journey — with the tools, education, and support to do it right.",
      accentColor: "border-blue-200",
      bgColor: "from-blue-50 to-sky-50",
      logo: "/partners/diy-credit-repair-creditily-logo.png",
      href: "https://getcreditily.com/",
    },
    {
      name: "Credit Girly",
      tagline: "Financial Empowerment for Women",
      description:
        "Financial empowerment built for women — clear, honest, and completely free of the barriers this industry has always put in the way. Because the right guidance should be available to everyone.",
      accentColor: "border-pink-200",
      bgColor: "from-pink-50 to-rose-50",
      logo: "/partners/credit-girly-logo.png",
      href: "https://www.instagram.com/creditgirly/",
    },
    {
      name: "Mesa Financiera",
      tagline: "Para Familias Latinas",
      description:
        "Our Spanish-language home. Full-service credit restoration and financial education for Latino families — built from the same foundation that started everything Mesa stands for.",
      accentColor: "border-green-200",
      bgColor: "from-green-50 to-emerald-50",
      logo: "/partners/mesa-financiera-logo.png",
      href: "https://www.instagram.com/mesafinanciera/",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Our Partners | Mesa Group Consulting"
        description="Every channel, program, and professional in the Mesa ecosystem — built around one standard: people first, always. Explore our Premier Channels, Fulfillment Partners, and Co-Brand Partners."
        canonicalUrl="/our-partners"
      />
      <Header />

      {/* ─── HERO ─── */}
      <section className="bg-gradient-to-br from-white via-amber-50 to-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 mb-6">
            <HeartHandshake className="w-5 h-5 text-[#f9c65d]" />
            <span className="text-sm font-medium text-gray-700">Mesa Group Consulting — Our Partners</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            The Standard Is Simple.{" "}
            <span className="text-[#f9c65d]">People First.</span>{" "}
            Always.
          </h1>

          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10">
            Every channel we've built, every program we offer, and every professional who stands alongside us was chosen because they believe the same thing we do — that when you genuinely help people, everything else follows.
          </p>

          <div className="flex justify-center mb-10">
            <Link
              to="/partner-with-us"
              className="inline-flex items-center justify-center gap-2 bg-[#f9c65d] hover:bg-[#bb9446] text-gray-900 font-semibold px-8 py-4 rounded-lg shadow-lg transition-colors text-base"
            >
              Become a Partner
              <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </Link>
          </div>

          {/* Trust Bar */}
          <div className="flex flex-wrap gap-8 justify-center">
            {[
              { value: "2,500+", label: "Clients Served" },
              { value: "150+", label: "Five-Star Reviews" },
              { value: "3", label: "Partnership Tiers" },
              { value: "2023", label: "Serving Families Since" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-[#f9c65d]">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── THE MESA PHILOSOPHY ─── */}
      <section className="py-16 md:py-24 bg-[#3e3e3e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
            We Built This Around{" "}
            <span className="text-[#f9c65d]">People.</span>{" "}
            Not Products.
          </h2>
          <div className="space-y-5 text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            <p>
              From the beginning, we made a decision to operate differently. To treat every client with the kind of care most companies reserve for their highest-paying customers. To build a standard so consistent that it doesn't matter how someone found us, what their credit looks like, or what language they speak — when they arrive at Mesa, the experience is the same.
            </p>
            <p className="text-xl font-semibold text-white">
              Premium. Personal. Without exception.
            </p>
            <p>
              This page is a reflection of that decision. Every channel, every program, every professional here was built or chosen because they hold that same standard. Not because it was convenient. Because it was right.
            </p>
          </div>
        </div>
      </section>

      {/* ─── PREMIER CHANNELS ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-[#f9c65d] uppercase mb-3 block">
              Premier Channels
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              One Mission.{" "}
              <span className="text-[#f9c65d]">Multiple Doors.</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
              Every channel in the Mesa ecosystem is operated by our own leadership team — built for a specific community, delivered at the same premium standard, powered by the same purpose.
            </p>
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100 text-left">
              <p className="text-gray-700 leading-relaxed">
                These aren't outside companies. <strong className="text-gray-900">They are Mesa.</strong> Each brand was created because we saw a community that deserved better — better guidance, better access, better service — and we built it for them. In their language. Through their culture. With the same level of care every Mesa client receives. Whatever door someone walks through, they arrive at the same place: a team that is fully invested in their outcome.
              </p>
            </div>
          </div>

          {/* Channel Cards — 2+2+1 responsive grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {premierChannels.map((channel) => (
              <a
                key={channel.name}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gradient-to-br ${channel.bgColor} rounded-2xl border-2 ${channel.accentColor} shadow-md hover:shadow-xl transition-all flex flex-col overflow-hidden cursor-pointer`}
              >
                {/* Logo — full width, native aspect ratio, card gradient behind it.
                    overflow-hidden on outer div clips corners; border-2 on outer div
                    sits above the image on the z-axis naturally. */}
                <div className={`bg-gradient-to-br ${channel.bgColor} px-8 pt-8 pb-4`}>
                  <img
                    src={channel.logo}
                    alt={channel.name}
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Content */}
                <div className="px-8 pb-8 flex flex-col flex-1">
                  <span className="text-xs font-bold tracking-wide uppercase text-gray-600 mb-2">
                    {channel.tagline}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{channel.name}</h3>
                  <p className="text-gray-700 leading-relaxed flex-1">{channel.description}</p>

                  <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-gray-600">
                    <BadgeCheck className="w-4 h-4 text-green-600" />
                    Operated by Mesa Group Leadership
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* ─── THE MESA STANDARD ─── */}
      <section className="py-16 md:py-20 bg-[#f9c65d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            The Experience Never Changes.{" "}
            Regardless of Where You Start.
          </h2>
          <div className="space-y-4 text-lg text-gray-800 leading-relaxed max-w-2xl mx-auto">
            <p>
              Premium service is not a reward for people with perfect credit. At Mesa, it is the baseline. Every client — regardless of their score, their background, or how many times they've been turned away before — receives white-glove attention, a personalized plan, and a team that stays with them through every step of the process.
            </p>
            <p className="text-xl font-bold text-gray-900">
              That is the Mesa standard. It is non-negotiable. And it is what every part of this ecosystem is built to uphold.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            {[
              "White-Glove Attention",
              "Personalized Plan",
              "Every Background Welcome",
              "Full-Journey Support",
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 bg-white/70 border border-white rounded-full px-4 py-2 text-sm font-semibold text-gray-900"
              >
                <CheckCircle className="w-4 h-4 text-green-700" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FULFILLMENT PARTNERS ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-[#f9c65d] uppercase mb-3 block">
              Fulfillment Partners
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Backed by the{" "}
              <span className="text-[#f9c65d]">Best in the Business.</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
              We don't just choose partners. We choose the standard we want our clients to experience. These are the platforms behind the Mesa promise.
            </p>
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100 text-left">
              <p className="text-gray-700 leading-relaxed">
                Every program we deliver is only as good as what's powering it. That's why we've aligned with two of the most trusted names in the financial services space — so when a client comes to Mesa, they're not just getting our team. They're getting access to infrastructure that the industry's top performers rely on. <strong className="text-gray-900">Premium service starts with premium partnerships.</strong>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* SmartCredit */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow p-8 flex flex-col">
              <div className="h-14 flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-xl px-5 py-2 rounded-lg inline-flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  SmartCredit
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">Credit Monitoring That Keeps Clients in Control</h3>
              <p className="text-gray-700 leading-relaxed flex-1 mb-6">
                SmartCredit is one of the most powerful credit monitoring platforms in the country — and it's what we put behind every client who comes to Mesa for credit monitoring. Real-time credit data. Score tracking. Actionable tools that keep clients informed and in control at every stage of their journey. We chose SmartCredit because our clients deserve more than a number. <strong className="text-gray-900">They deserve clarity.</strong>
              </p>
              <Link
                to="/credit-monitoring"
                className="inline-flex items-center justify-center gap-2 bg-[#f9c65d] hover:bg-[#bb9446] text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-md transition-colors"
              >
                Explore Credit Monitoring
                <ArrowRight className="w-5 h-5 flex-shrink-0" />
              </Link>
            </div>

            {/* Novae */}
            <div className="bg-[#3e3e3e] rounded-2xl border-2 border-gray-700 shadow-xl hover:shadow-2xl transition-shadow p-8 flex flex-col">
              <div className="h-14 flex items-center mb-6">
                <div className="bg-[#f9c65d] text-gray-900 font-bold text-xl px-5 py-2 rounded-lg inline-flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Novae
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">The Infrastructure Behind Mesa's Most Powerful Programs</h3>
              <p className="text-gray-300 leading-relaxed flex-1 mb-6">
                Novae is the platform behind some of Mesa's most powerful programs — business funding available in all 50 states, debt relief solutions for individuals and businesses, and a structured business credit building program built for real, lasting growth. When our clients are ready to move beyond credit restoration and step into their financial potential, <strong className="text-white">Novae is the infrastructure that makes it possible.</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                {[
                  { label: "Business Funding", href: "/business-funding" },
                  { label: "Debt Relief", href: "/debt-relief" },
                  { label: "Business Credit Builder", href: "/business-credit-builder" },
                ].map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="inline-flex items-center justify-center gap-1 border border-gray-500 hover:border-[#f9c65d] hover:text-[#f9c65d] text-gray-300 font-semibold px-4 py-2 rounded-lg transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── CO-BRAND PARTNERS ─── */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-[#f9c65d] uppercase mb-3 block">
              Co-Brand Partners
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Professionals Who Refuse to Leave{" "}
              <span className="text-[#f9c65d]">Their Clients Behind</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
              These are the professionals who looked at a client's credit situation and decided it wasn't the end of the conversation. Their name is here because they stand behind what we do — and their clients are better for it.
            </p>
            <div className="max-w-3xl mx-auto bg-white rounded-2xl p-6 border border-amber-100 shadow-sm text-left">
              <p className="text-gray-700 leading-relaxed">
                A Mesa co-brand partnership is for a specific kind of professional. One who understands that the clients who aren't quite ready are still worth fighting for. Real estate agents. Mortgage professionals. Financial advisors. People who serve families every day and know that a credit challenge doesn't have to mean a closed door — it just means the client needs the right team in their corner.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                When they refer someone to Mesa, that client lands on a page that carries their name alongside ours. They receive a premium, white-glove experience from first contact to finish. And when they're ready to come back — for the home, the loan, the next chapter — they remember exactly who cared enough to send them here.
              </p>
            </div>
          </div>

          {/* Partner Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            {/* Destiney Perry */}
            <a
              href="https://destineyperrysells.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex flex-col cursor-pointer"
            >
              <div className="h-64 bg-gradient-to-br from-amber-100 to-orange-100 overflow-hidden relative">
                <img
                  src="/partners/destiny-perry-real-estate.svg"
                  alt="Destiney Perry — Real Estate Agent"
                  className="w-full h-full object-cover object-top relative z-10"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-amber-200 to-orange-200">
                  <div className="w-24 h-24 rounded-full bg-[#f9c65d] flex items-center justify-center text-gray-900 font-bold text-3xl shadow-lg">
                    DP
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Destiney Perry</h3>
                    <p className="text-[#bb9446] font-semibold">Real Estate Agent</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0 mt-1" />
                </div>
                <p className="text-gray-700 leading-relaxed flex-1">
                  Destiney has built her career on one belief: every family deserves a home. She knows that credit is often the last obstacle standing between a family and the life they've been working toward — and she refuses to let that be where their story ends.
                </p>
              </div>
            </a>

            {/* Diana Munoz */}
            <a
              href="https://www.facebook.com/diana.munoz.9231/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex flex-col cursor-pointer"
            >
              <div className="h-64 bg-gradient-to-br from-amber-100 to-orange-100 overflow-hidden relative">
                <img
                  src="/partners/diana-munoz-mortgage-loan-expert.png"
                  alt="Diana Munoz — Mortgage Professional"
                  className="w-full h-full object-cover object-top relative z-10"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-amber-200 to-orange-200">
                  <div className="w-24 h-24 rounded-full bg-[#f9c65d] flex items-center justify-center text-gray-900 font-bold text-3xl shadow-lg">
                    DM
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Diana Munoz</h3>
                    <p className="text-[#bb9446] font-semibold">Mortgage Professional</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0 mt-1" />
                </div>
                <p className="text-gray-700 leading-relaxed flex-1">
                  Diana meets clients at every stage of the home financing journey. For the ones who aren't quite ready, her partnership with Mesa means they never leave empty-handed — they leave with a plan, a team, and a clear path to what they came for.
                </p>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* ─── BECOME A CO-BRAND PARTNER ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Your Name Could Be{" "}
            <span className="text-[#f9c65d]">on This Page</span>
          </h2>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-10 shadow-md border border-amber-100 text-left space-y-4 text-lg text-gray-700 leading-relaxed mb-8">
            <p>
              Every professional here made a decision to go further for their clients. To not let a credit challenge be the end of the conversation. To give the people they serve access to a team they could trust and a standard they could be proud to put their name on.
            </p>
            <p className="font-semibold text-gray-900">
              If that sounds like you — a Mesa co-brand partnership was built for you.
            </p>
            <div className="space-y-2 pt-2">
              {[
                "Your own branded page",
                "Your clients in the best hands in the business",
                "Your reputation backed by a team that treats every referral like family",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p>
              We don't build this roster to look impressive. We build it because the families these professionals serve deserve better than a dead end. And so do yours.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/partner-with-us"
              state={{ scrollTo: "cobrand-partner" }}
              onClick={() => {
                setTimeout(() => {
                  document.getElementById("cobrand-partner")?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              className="inline-flex items-center justify-center gap-2 bg-[#f9c65d] hover:bg-[#bb9446] text-gray-900 font-semibold px-8 py-4 rounded-lg shadow-lg transition-colors"
            >
              Apply for a Co-Brand Partnership
              <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </Link>
            <Link
              to="/partner-with-us"
              className="inline-flex items-center justify-center gap-2 text-[#bb9446] hover:text-[#f9c65d] font-semibold px-4 py-4 underline underline-offset-2 transition-colors"
            >
              See how it works
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CLOSING TRUST STATEMENT ─── */}
      <section className="py-16 md:py-24 bg-[#3e3e3e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
            Every Name on This Page{" "}
            <span className="text-[#f9c65d]">Was Earned.</span>
          </h2>
          <div className="space-y-4 text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10">
            <p>
              Over 2,500 families have trusted Mesa with something deeply personal — their financial future. We have never taken that lightly. Not once. Every channel we operate, every program we deliver, every professional who stands alongside us is held to the same standard those families deserve.
            </p>
            <p className="text-xl font-bold text-white">
              When the Mesa name is on something, it means it was done right. With care. With integrity. With the people at the center of every decision.
            </p>
            <p className="font-semibold text-gray-200">That will never change.</p>
          </div>
          <div className="flex justify-center mb-6">
            <Link
              to="/partner-with-us"
              className="inline-flex items-center gap-2 bg-[#f9c65d] hover:bg-[#bb9446] text-gray-900 font-semibold px-8 py-4 rounded-lg shadow-xl transition-colors"
            >
              Become a Partner
              <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </Link>
          </div>
          <p className="text-sm text-gray-400 flex items-center justify-center gap-4 flex-wrap">
            <span>Questions? We'd love to talk.</span>
            <a
              href="mailto:contact@mesagroupconsulting.com"
              className="flex items-center gap-1 hover:text-[#f9c65d] transition-colors"
            >
              <Mail className="w-4 h-4" />
              contact@mesagroupconsulting.com
            </a>
            <span>·</span>
            <a
              href="tel:6613103040"
              className="flex items-center gap-1 hover:text-[#f9c65d] transition-colors"
            >
              <Phone className="w-4 h-4" />
              (661) 310-3040
            </a>
          </p>
        </div>
      </section>

      <ContactFormSection />
      <Footer />

      {/* ─── COMPLIANCE FOOTER ─── */}
      <div className="bg-[#3e3e3e] py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-400 leading-relaxed">
            Mesa Group Consulting's premier channels are operated under the Mesa Group Consulting leadership team and adhere to the same compliance standards and service model. All financial solutions and programs are subject to eligibility requirements and individual circumstances. Co-brand partners are independent professionals. Mesa Group Consulting is responsible for all credit restoration services delivered through co-brand partner pages. Individual results may vary. All credit restoration services comply with the Credit Repair Organizations Act (CROA).
          </p>
          <p className="text-xs text-gray-600 mt-4">
            © {new Date().getFullYear()} Mesa Group Consulting. All rights reserved.
          </p>
        </div>
      </div>

    </div>
  );
}
