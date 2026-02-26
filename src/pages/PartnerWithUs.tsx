// src/pages/PartnerWithUs.tsx
// Mesa Group Consulting — Partner With Us Page
// Version 1.0 | February 2026

import { useState, useEffect } from "react";
import {
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Users,
  Building2,
  Briefcase,
  Home,
  Car,
  Shield,
  TrendingUp,
  HeartHandshake,
  Laptop,
  Sprout,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Star,
  DollarSign,
  Award,
  Zap,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import ContactFormSection from "@/components/ContactFormSection";

export default function PartnerWithUs() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Load GHL form_embed.js — never use <script> tags in JSX
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

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const whoItsFor = [
    { icon: <Home className="w-8 h-8 text-[#f9c65d]" />, label: "Real Estate Agents" },
    { icon: <Building2 className="w-8 h-8 text-[#f9c65d]" />, label: "Mortgage Lenders & Loan Officers" },
    { icon: <Car className="w-8 h-8 text-[#f9c65d]" />, label: "Auto Dealerships" },
    { icon: <Shield className="w-8 h-8 text-[#f9c65d]" />, label: "Insurance Agents" },
    { icon: <Briefcase className="w-8 h-8 text-[#f9c65d]" />, label: "Financial Coaches & Consultants" },
    { icon: <HeartHandshake className="w-8 h-8 text-[#f9c65d]" />, label: "Business Owners & Community Leaders" },
    { icon: <Sprout className="w-8 h-8 text-[#f9c65d]" />, label: "Career Changers & New Professionals" },
    { icon: <Laptop className="w-8 h-8 text-[#f9c65d]" />, label: "Remote Professionals Nationwide" },
  ];

  const faqs = [
    {
      question: "Is there a cost to become a Referral Partner?",
      answer:
        "No. The Mesa Referral Partner program is completely free to join. You get your unique link, your dashboard, and everything you need to start earning from day one.",
    },
    {
      question: "How and when do I get paid as a Referral Partner?",
      answer:
        "Commissions are paid on the 15th of each month via Zelle, check, or direct deposit. A 30-day activity period applies to each referral before the commission qualifies — this protects the integrity of the program for everyone involved.",
    },
    {
      question: "What does the Co-Brand setup investment cover?",
      answer:
        "It covers your fully custom branded page, a one-on-one onboarding call, a branded PDF you can share with clients, and ongoing support for any updates or changes you need — whenever you need them.",
    },
    {
      question: "I'm a realtor or mortgage lender. Can I still partner with you?",
      answer:
        "Absolutely. Our Co-Brand Partnership is built with licensed professionals in mind. Because certain compensation arrangements aren't permitted in your industry, our model is structured around delivering exclusive value to your clients — so you can participate with complete confidence and your professional standing stays protected.",
    },
    {
      question: "What services can I refer clients for right now?",
      answer:
        "The partner program currently covers credit restoration services. Additional programs will be available soon — and current partners are always notified first.",
    },
    {
      question: "What does my client's experience look like after I refer them?",
      answer:
        "They land on a page that carries your name and brand, go through a guided intake process, and get assigned to our team. From there they receive the same white-glove service every Mesa client receives. You'll hear from your dedicated account manager with regular updates so you're never left wondering.",
    },
    {
      question: "Do I need to be licensed to apply to join the agent team?",
      answer:
        "Not at all. If you're not yet licensed, we'll guide you through the process and cover the cost of your course and exam fees for W2 agents. All you need is the drive — we handle the rest.",
    },
    {
      question: "Will I have to generate my own leads as an agent?",
      answer:
        "No. Mesa provides warm and inbound leads so you can focus entirely on serving clients and building your book. You won't be cold calling or buying your own leads.",
    },
    {
      question: "Can I work remotely as an agent?",
      answer:
        "Yes. Our agents can work fully remote, in-office at our Bakersfield location, or a hybrid of both. As long as you're performing, you run your own schedule and your own environment.",
    },
    {
      question: "Do I need a large following or client base to join as a Referral Partner?",
      answer:
        "Not at all. Whether you're referring one person or one hundred, the program works the same way. We built it to be valuable at every level — not just for people with big audiences.",
    },
    {
      question: "Is there a limit to how much I can earn as a Referral Partner?",
      answer:
        "No limits. We want our partners to earn as much as possible — because that means they're helping as many families as possible. That's exactly the kind of partnership we want to build.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Partner With Us | Mesa Group Consulting"
        description="Three ways to grow with Mesa Group: Referral Partner (free), Co-Brand Partnership, or join our Agent Team. Help more families and build something that lasts."
        canonicalUrl="/partner-with-us"
      />
      <Header />

      {/* ─── HERO ─── */}
      <section className="bg-gradient-to-br from-white via-amber-50 to-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 mb-6">
            <HeartHandshake className="w-5 h-5 text-[#f9c65d]" />
            <span className="text-sm font-medium text-gray-700">Mesa Group Partnership Program</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Grow Together.{" "}
            <span className="text-[#f9c65d]">Help More People.</span>{" "}
            Build Something That Lasts.
          </h1>

          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10">
            Not everyone gets to be part of something that's changing lives. You do. Whether you want to refer people to a service you believe in, give your clients a complete financial experience, or build a career rooted in purpose — there's a place for you here.
          </p>

          {/* Three CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 flex-wrap">
            <a
              href="#referral-partner"
              className="inline-flex items-center justify-center gap-2 bg-[#f9c65d] hover:bg-[#bb9446] text-gray-900 font-semibold px-8 py-4 rounded-lg shadow-lg transition-colors text-base"
            >
              Become a Referral Partner — It's Free
              <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </a>
            <a
              href="#cobrand-partner"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-800 hover:border-[#f9c65d] hover:bg-amber-50 text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors text-base bg-white"
            >
              Explore Co-Brand Partnership
            </a>
            <a
              href="#agent-team"
              className="inline-flex items-center justify-center gap-2 text-[#bb9446] hover:text-[#f9c65d] font-semibold px-4 py-4 underline underline-offset-2 transition-colors text-base"
            >
              Join Our Agent Team
            </a>
          </div>

          {/* Trust Bar */}
          <div className="flex flex-wrap gap-8 justify-center">
            {[
              { value: "2,500+", label: "Clients Served" },
              { value: "150+", label: "Five-Star Reviews" },
              { value: "30+", label: "Insurance Carriers" },
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

      {/* ─── THE PHILOSOPHY ─── */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8 text-center">
            We Built This for the People Who{" "}
            <span className="text-[#f9c65d]">Believe in What We Do</span>
          </h2>
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-md border border-amber-100 space-y-5 text-lg text-gray-700 leading-relaxed">
            <p>
              At Mesa Group, we've always believed that when you help people — genuinely, without shortcuts, without fine print — good things follow. That's how we've served over 2,500 families. That's how we've grown. And that's the same spirit we bring to every partnership we build.
            </p>
            <p>
              Every person you send our way is someone's family member, someone's future, someone's fresh start. We don't take that lightly. We treat every referral the same way we treat every client — with respect, patience, and a real plan.
            </p>
            <p>
              We created three ways to grow with us. One for those who want to share a service they believe in and earn doing it. One for professionals who want to show up for their clients in a bigger way. And one for those ready to build something meaningful — a career that actually means something.
            </p>
            <p className="font-bold text-gray-900">
              All three paths. One foundation. Integrity, education, and genuine care for the people we serve.
            </p>
          </div>
        </div>
      </section>

      {/* ─── THREE PATHS ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Choose the Partnership{" "}
              <span className="text-[#f9c65d]">That Fits You</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Whether you want to refer, co-brand, or build a full career — there's a place for you inside the Mesa ecosystem.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {/* Card 1 — Referral Partner */}
            <div className="bg-white rounded-2xl border-2 border-amber-300 shadow-lg hover:shadow-xl transition-shadow p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="w-8 h-8 text-[#f9c65d]" />
                <span className="text-xs font-bold text-green-700 bg-green-50 border border-green-200 rounded-full px-3 py-1">
                  Free to Join
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Mesa Referral Partner</h3>
              <p className="text-sm text-[#bb9446] font-semibold mb-4">
                Best for: Past clients, friends of the brand, content creators, financial coaches, and anyone who wants to refer people to a service they genuinely believe in.
              </p>
              <div className="space-y-3 mb-6 flex-1">
                {[
                  "Your own unique referral link delivered straight to your inbox",
                  "A personal dashboard to track your referrals and earnings",
                  "$100 for every client you refer who enrolls in credit restoration",
                  "Commissions paid monthly on the 15th via Zelle, check, or direct deposit",
                  "No cap on earnings — the more families you help, the more you earn",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 mb-6">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">How it works:</strong> Share your link. We take it from there. When someone enrolls through your link and stays active for 30 days, your commission is locked in and paid out on the 15th.
                </p>
              </div>
              <p className="text-xs text-gray-500 mb-5">
                Currently available for credit restoration referrals. Additional programs coming soon — partners are notified first.
              </p>
              <a
                href="#referral-partner"
                className="inline-flex items-center justify-center gap-2 bg-[#f9c65d] hover:bg-[#bb9446] text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-md transition-colors w-full"
              >
                Join Free — Get My Referral Link
                <ArrowRight className="w-5 h-5 flex-shrink-0" />
              </a>
            </div>

            {/* Card 2 — Co-Brand Partner (dark / premium) */}
            <div className="bg-[#3e3e3e] rounded-2xl border-2 border-gray-700 shadow-xl hover:shadow-2xl transition-shadow p-8 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#f9c65d] text-gray-900 text-xs font-bold px-4 py-1 rounded-bl-xl">
                Most Popular
              </div>
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-8 h-8 text-[#f9c65d]" />
                <span className="text-xs font-bold text-[#f9c65d] bg-[#f9c65d]/10 border border-[#f9c65d]/30 rounded-full px-3 py-1">
                  One-Time Setup Investment
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">Mesa Co-Brand Partner</h3>
              <p className="text-sm text-amber-300 font-semibold mb-4">
                Best for: Real estate agents, mortgage lenders, loan officers, insurance agents, financial professionals, and business owners who serve clients that could benefit from credit restoration and financial guidance.
              </p>
              <div className="space-y-3 mb-6 flex-1">
                {[
                  "A fully branded landing page built around you — your logo, your colors, your photo, your name",
                  "Featured placement on the Mesa Group Consulting website",
                  "A dedicated account manager who keeps you updated on every client you send",
                  "A one-on-one onboarding call to get you set up and ready",
                  "A branded PDF you can share digitally with your clients",
                  "Ongoing support for any updates or changes to your page — whenever you need it",
                  "Eligible professionals: commission per enrolled client",
                  "Service professionals with compensation restrictions: exclusive client discounts available only through your partnership",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#f9c65d] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white/10 rounded-xl p-4 border border-white/10 mb-6">
                <p className="text-sm text-gray-300 leading-relaxed">
                  <strong className="text-white">How it works:</strong> Your clients land on a page that carries your name alongside ours. They receive the same white-glove service every Mesa client receives. And when they're ready — you're the person they remember.
                </p>
              </div>
              <a
                href="#cobrand-partner"
                className="inline-flex items-center justify-center gap-2 border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold px-6 py-3 rounded-lg transition-colors w-full"
              >
                Apply for Co-Brand Partnership
                <ArrowRight className="w-5 h-5 flex-shrink-0" />
              </a>
            </div>

            {/* Card 3 — Agent Team */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-8 h-8 text-[#f9c65d]" />
                <span className="text-xs font-bold text-green-700 bg-green-50 border border-green-200 rounded-full px-3 py-1">
                  Free to Apply
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Join Our Agent Team</h3>
              <p className="text-sm text-[#bb9446] font-semibold mb-4">
                Best for: Anyone who wants to build a meaningful career in life insurance — whether you're already licensed, just getting started, or simply looking for a team that actually has your back.
              </p>
              <div className="space-y-3 mb-6 flex-1">
                {[
                  "Warm and inbound leads provided — focus on families, not cold calls",
                  "All tools, systems, and infrastructure covered at no cost to you",
                  "Full licensing support — course and exam fees covered for W2 agents",
                  "Remote, in-office, or hybrid — your schedule, your environment",
                  "W2 or 1099 structure available depending on what fits your situation",
                  "Access to 30+ top-rated carriers",
                  "A team invested in your growth — not just your production numbers",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              {/* W2 vs 1099 sub-cards */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-amber-50 rounded-xl p-3 border border-amber-100">
                  <p className="text-xs font-bold text-gray-900 mb-1">W2 Agent</p>
                  <p className="text-xs text-gray-600 leading-relaxed">Commissions processed through Mesa, held 30 days, then paid out. Licensing costs fully covered. Built for structure, support, and unlimited earning potential.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
                  <p className="text-xs font-bold text-gray-900 mb-1">1099 Agent</p>
                  <p className="text-xs text-gray-600 leading-relaxed">Full independence with complete access to Mesa's lead system, tools, and infrastructure. Built for experienced producers who want freedom backed by a real team.</p>
                </div>
              </div>

              <p className="text-xs text-gray-500 mb-5 text-center font-semibold">
                Open nationwide. Licensed and unlicensed candidates welcome.
              </p>
              <a
                href="#agent-team"
                className="inline-flex items-center justify-center gap-2 bg-[#f9c65d] hover:bg-[#bb9446] text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-md transition-colors w-full"
              >
                Apply to Join Our Agent Team
                <ArrowRight className="w-5 h-5 flex-shrink-0" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ─── WHO IT'S FOR ─── */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            If the People You Serve Deserve{" "}
            <span className="text-[#f9c65d]">Better Financial Options,</span>{" "}
            This Is for You
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
            We work alongside professionals, partners, and people across every walk of life — united by one thing: a genuine desire to help the people around them get ahead.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {whoItsFor.map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-xl p-5 shadow-sm border border-amber-100 hover:shadow-md hover:border-amber-300 transition-all flex flex-col items-center gap-3"
              >
                {item.icon}
                <span className="text-sm font-semibold text-gray-800 text-center leading-snug">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl p-6 border border-amber-200 shadow-sm max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              When a client's credit isn't where it needs to be, that doesn't have to be the end of the conversation.{" "}
              <strong className="text-gray-900">Let us help them get there — and keep them connected to you in the process.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 text-center">
            Simple Process.{" "}
            <span className="text-[#f9c65d]">Real Support.</span>{" "}
            Real Results.
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-2xl mx-auto">
            Three steps between you and a partnership that actually works.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: <HeartHandshake className="w-8 h-8 text-[#f9c65d]" />,
                title: "Apply & Connect",
                description:
                  "Fill out your application and we'll reach out to schedule a call. We take the time to understand your goals, your clients, and how we can build something that actually works for you.",
              },
              {
                step: "02",
                icon: <Zap className="w-8 h-8 text-[#f9c65d]" />,
                title: "We Handle the Setup",
                description:
                  "Whether it's your co-brand page, your referral link, or your licensing process — our team takes care of the details so you can focus on what you do best.",
              },
              {
                step: "03",
                icon: <TrendingUp className="w-8 h-8 text-[#f9c65d]" />,
                title: "Grow Together",
                description:
                  "Send your clients, share your link, or start taking calls. We keep you in the loop every step of the way — with a dedicated point of contact who picks up the phone and actually follows through.",
              },
            ].map((step) => (
              <div key={step.step} className="text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#f9c65d] flex items-center justify-center font-bold text-gray-900 text-lg shadow-md mb-4">
                  {step.step}
                </div>
                <div className="mb-3">{step.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LIVE CO-BRAND EXAMPLES ─── */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See It{" "}
            <span className="text-[#f9c65d]">in Action</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
            This is what a Mesa Co-Brand Partnership looks like for two of our current partners. Every client they refer lands on a page that carries their name — and experiences a level of service that reflects the standard they hold themselves to.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                name: "Destiney Perry",
                role: "Real Estate Agent",
                url: "https://start.mesagroupconsulting.com/destineyperry",
              },
              {
                name: "Diana Munoz",
                role: "Mortgage Professional",
                url: "https://start.mesagroupconsulting.com/diana-munoz-mortgage",
              },
            ].map((partner) => (
              <div
                key={partner.name}
                className="bg-white rounded-2xl p-8 border border-amber-200 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4 justify-center">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#f9c65d]" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-gray-900 text-lg">{partner.name}</p>
                    <p className="text-sm text-[#bb9446] font-semibold">{partner.role}</p>
                  </div>
                </div>
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-gray-800 hover:border-[#f9c65d] hover:bg-amber-50 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors w-full"
                >
                  View {partner.name.split(" ")[0]}'s Page
                  <ExternalLink className="w-4 h-4 flex-shrink-0" />
                </a>
              </div>
            ))}
          </div>
          <p className="text-lg text-gray-700 mb-6">
            Every co-brand page is built around the partner — their brand, their clients, their story.{" "}
            <strong className="text-gray-900">Yours would be next.</strong>
          </p>
          <a
            href="#cobrand-partner"
            className="inline-flex items-center gap-2 bg-[#f9c65d] hover:bg-[#bb9446] text-gray-900 font-semibold px-8 py-4 rounded-lg shadow-lg transition-colors"
          >
            Apply for Co-Brand Partnership
            <ArrowRight className="w-5 h-5 flex-shrink-0" />
          </a>
        </div>
      </section>

      {/* ─── TRUST & INTEGRITY ─── */}
      <section className="py-16 md:py-24 bg-[#3e3e3e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
            We Do This the{" "}
            <span className="text-[#f9c65d]">Right Way.</span>{" "}
            Every Time.
          </h2>
          <div className="space-y-5 text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            <p>
              Over 2,500 families have trusted us with something personal — their financial future. That trust isn't something we take for granted. It's something we earn every day through honest conversations, realistic expectations, and service that doesn't cut corners.
            </p>
            <p>
              When you partner with Mesa Group, your clients get that same standard. The same patience. The same white-glove care. The same commitment to doing things the right way — regardless of where they're starting from.
            </p>
            <p className="font-bold text-white text-xl">
              That's not a policy. That's just who we are.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center mt-10">
            {[
              "2,500+ Families Served",
              "150+ Five-Star Reviews",
              "Licensed Independent Agency",
              "30+ Top-Rated Carriers",
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm font-semibold text-gray-200"
              >
                <Star className="w-4 h-4 text-[#f9c65d]" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
            Questions About{" "}
            <span className="text-[#f9c65d]">the Program</span>
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-amber-50 transition-colors"
                  aria-expanded={openFaq === index}
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[#f9c65d] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 bg-amber-50 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FORMS SECTION ─── */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Ready to Take the{" "}
              <span className="text-[#f9c65d]">Next Step?</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Choose your path and fill out the form below. Our team will reach out personally to get you started.
            </p>
          </div>

          {/* Form 9A — Referral Partner */}
          <div id="referral-partner" className="mb-16 scroll-mt-20">
            <div className="bg-white rounded-2xl shadow-md border border-amber-200 overflow-hidden">
              <div className="bg-[#f9c65d] px-8 py-5 flex items-center gap-3">
                <DollarSign className="w-7 h-7 text-gray-900" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Mesa Referral Partner</h3>
                  <p className="text-sm text-gray-800 font-medium">Free to Join · $100 per enrolled referral</p>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <iframe
                  src="https://link.mesagroupconsulting.com/widget/form/eJS7g0DkolAZrhylZKBR"
                  style={{ width: "100%", height: "1038px", border: "none", borderRadius: "3px", display: "block" }}
                  id="inline-eJS7g0DkolAZrhylZKBR"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Mesa Referral Partner Form"
                  data-height="1038"
                  data-layout-iframe-id="inline-eJS7g0DkolAZrhylZKBR"
                  data-form-id="eJS7g0DkolAZrhylZKBR"
                  title="Mesa Referral Partner Form"
                />
              </div>
            </div>
          </div>

          {/* Form 9B — Co-Brand Partner */}
          <div id="cobrand-partner" className="mb-16 scroll-mt-20">
            <div className="bg-white rounded-2xl shadow-md border border-gray-800 overflow-hidden">
              <div className="bg-[#3e3e3e] px-8 py-5 flex items-center gap-3">
                <Award className="w-7 h-7 text-[#f9c65d]" />
                <div>
                  <h3 className="text-xl font-bold text-white">Mesa Co-Brand Partnership</h3>
                  <p className="text-sm text-amber-300 font-medium">One-Time Setup Investment · Dedicated Page + Support</p>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <iframe
                  src="https://link.mesagroupconsulting.com/widget/form/UCgckF6ZdeIgyS7dKF3B"
                  style={{ width: "100%", height: "1459px", border: "none", borderRadius: "3px", display: "block" }}
                  id="inline-UCgckF6ZdeIgyS7dKF3B"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Co-Brand Partner Form"
                  data-height="1459"
                  data-layout-iframe-id="inline-UCgckF6ZdeIgyS7dKF3B"
                  data-form-id="UCgckF6ZdeIgyS7dKF3B"
                  title="Co-Brand Partner Form"
                />
              </div>
            </div>
          </div>

          {/* Form 9C — Agent Team */}
          <div id="agent-team" className="scroll-mt-20">
            <div className="bg-white rounded-2xl shadow-md border border-amber-200 overflow-hidden">
              <div className="bg-[#f9c65d] px-8 py-5 flex items-center gap-3">
                <Users className="w-7 h-7 text-gray-900" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Join Our Agent Team</h3>
                  <p className="text-sm text-gray-800 font-medium">Free to Apply · W2 or 1099 · Open Nationwide</p>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <iframe
                  src="https://link.mesagroupconsulting.com/widget/form/Mg8ybpMWozwXlvj0MoQw"
                  style={{ width: "100%", height: "1781px", border: "none", borderRadius: "3px", display: "block" }}
                  id="inline-Mg8ybpMWozwXlvj0MoQw"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Join Our Agent Team Form"
                  data-height="1781"
                  data-layout-iframe-id="inline-Mg8ybpMWozwXlvj0MoQw"
                  data-form-id="Mg8ybpMWozwXlvj0MoQw"
                  title="Join Our Agent Team Form"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── CLOSING CTA ─── */}
      <section className="py-16 md:py-24 bg-[#f9c65d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Ready to Build Something Together?
          </h2>
          <p className="text-xl text-gray-800 max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether you're here to refer, to partner, or to build a career — this is for people who believe that helping others and building a life you're proud of aren't two separate things. They never were.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 flex-wrap">
            <a
              href="#referral-partner"
              className="inline-flex items-center justify-center gap-2 bg-[#3e3e3e] hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-lg shadow-xl transition-colors text-base"
            >
              Join as a Referral Partner — Free
              <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </a>
            <a
              href="#cobrand-partner"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-900 hover:bg-[#3e3e3e] hover:text-white text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors bg-white text-base"
            >
              Apply for Co-Brand Partnership
            </a>
            <a
              href="#agent-team"
              className="inline-flex items-center justify-center gap-2 text-gray-800 hover:text-gray-900 font-semibold px-4 py-4 underline underline-offset-2 transition-colors text-base"
            >
              Join Our Agent Team
            </a>
          </div>
          <p className="text-sm text-gray-800 mt-2 flex items-center justify-center gap-4 flex-wrap">
            <span className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              contact@mesagroupconsulting.com
            </span>
            <span>·</span>
            <a href="tel:6613103040" className="flex items-center gap-1 hover:underline">
              <Phone className="w-4 h-4" />
              (661) 310-3040
            </a>
          </p>
          <p className="text-sm text-gray-800 mt-1 font-medium">
            We're real people and we'd love to talk.
          </p>
        </div>
      </section>

      <ContactFormSection />
      <Footer />

      {/* ─── COMPLIANCE FOOTER ─── */}
      <div className="bg-[#3e3e3e] py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-400 leading-relaxed">
            Mesa Referral Partner commissions are subject to a 30-day activity period. Co-Brand Partnerships are subject to program terms reviewed during onboarding. Partnership structures for licensed professionals are designed to comply with applicable compensation restrictions. Mesa Group Consulting is a licensed independent insurance agency. Agent compensation structures are subject to individual agreements reviewed during onboarding. Individual results for referred clients may vary.
          </p>
          <p className="text-xs text-gray-600 mt-4">
            © {new Date().getFullYear()} Mesa Group Consulting. All rights reserved.
          </p>
        </div>
      </div>

    </div>
  );
}
