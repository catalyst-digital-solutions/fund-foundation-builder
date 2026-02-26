// src/pages/LifeInsuranceV2.tsx
// Mesa Group Consulting — Life Insurance Page v2
// Version 1.0 | February 2026

import { useState, useEffect } from "react";
import {
  CheckCircle,
  ArrowRight,
  Phone,
  Shield,
  Heart,
  DollarSign,
  Home,
  Users,
  TrendingUp,
  Star,
  Clock,
  Award,
  HeartHandshake,
  FileText,
  Zap,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Gift,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import ContactFormSection from "@/components/ContactFormSection";

export default function LifeInsuranceV2() {
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

  const coverageOptions = [
    {
      icon: <Heart className="w-8 h-8 text-[#f9c65d]" />,
      title: "Final Expense Coverage",
      badge: "Best for adults 40–89",
      description:
        "Permanent whole life coverage designed to handle burial costs, final expenses, and leave something meaningful behind. Premiums lock in when you apply and never increase. Coverage never expires.",
      features: [
        "Locked premiums that never go up",
        "Tax-free death benefit paid directly to your beneficiary with no probate delays",
        "Cash value that builds over time",
        "Living benefits for chronic, critical, or terminal illness at no additional cost on most plans",
        "Accidental death benefit that can double or triple the payout",
      ],
      disclaimer: "Coverage subject to underwriting approval. Benefits vary by policy.",
    },
    {
      icon: <Home className="w-8 h-8 text-[#f9c65d]" />,
      title: "Term Life & Mortgage Protection",
      badge: "Best for families protecting a home, income, or young children",
      description:
        "Coverage for a set period of 10, 15, 20, 25, or 30 years designed to protect your family during the years they need it most.",
      features: [
        "No medical exam required for most coverage amounts",
        "Living benefits included — not sold as an add-on",
        "Return of Premium option: every dollar back if you outlive the policy",
        "Approved in as little as 24 hours",
      ],
      disclaimer: "Rates vary based on age, health, and coverage selected. Coverage subject to underwriting approval.",
    },
    {
      icon: <Shield className="w-8 h-8 text-[#f9c65d]" />,
      title: "Accidental Death Insurance",
      badge: "Best for anyone who wants additional protection with no health underwriting",
      description:
        "The one plan where everyone qualifies. No health questions, no underwriting. A lump-sum benefit ranging from $50,000 to $500,000 paid to your family if death results from a covered accident.",
      features: [
        "No health questions and no underwriting — everyone qualifies",
        "Lump-sum benefit from $50,000 to $500,000",
        "Cover yourself, your spouse, your children, or your entire family on a single application",
        "Cashback option subject to eligibility requirements",
      ],
      disclaimer: "Available in most states. Cashback option subject to eligibility requirements.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#f9c65d]" />,
      title: "Indexed Universal Life (IUL)",
      badge: "Best for business owners seeking permanent coverage with a savings component",
      description:
        "Permanent life insurance with a cash value component that follows S&P 500 performance. Grows when the market goes up. A built-in floor means it cannot lose value when the market drops. Living benefits included.",
      features: [
        "Cash value follows S&P 500 performance",
        "Built-in floor — cannot lose value when the market drops",
        "Living benefits included",
        "Ideal for business owners and high-income earners",
      ],
      disclaimer:
        "IUL policies involve market-linked components. Speak with a licensed agent to understand how this product works before applying.",
    },
    {
      icon: <Users className="w-8 h-8 text-[#f9c65d]" />,
      title: "Children's Whole Life",
      badge: "Best for parents and grandparents locking in protection early",
      description:
        "Permanent coverage for up to six children on a single application at rates locked in at a young age. Builds cash value they can access for education, a first car, or a down payment. Coverage continues into adulthood.",
      features: [
        "Cover up to six children on a single application",
        "Rates locked in at a young age — forever",
        "Builds cash value accessible for education, first car, or down payment",
        "Coverage continues into adulthood automatically",
      ],
      disclaimer: "",
    },
  ];

  const sixReasons = [
    {
      icon: <DollarSign className="w-8 h-8 text-[#f9c65d]" />,
      title: "Income Replacement",
      description:
        "Your income doesn't just pay bills. It funds your family's life. If something happens to you, a policy ensures they can maintain their standard of living without starting from zero.",
    },
    {
      icon: <Home className="w-8 h-8 text-[#f9c65d]" />,
      title: "Mortgage & Debt Protection",
      description:
        "The mortgage doesn't pause. Neither does the car payment or the credit card balance. Coverage ensures your family keeps what they've built without inheriting your debt.",
    },
    {
      icon: <Heart className="w-8 h-8 text-[#f9c65d]" />,
      title: "Final Expense Coverage",
      description:
        "The average funeral costs between $6,600 and $10,600. That cost falls on someone. Life insurance ensures it doesn't fall on the people you love most during the hardest moment of their lives.",
    },
    {
      icon: <Zap className="w-8 h-8 text-[#f9c65d]" />,
      title: "Living Benefits",
      description:
        "Most people don't know this exists. If you experience a chronic, critical, or terminal illness, most of our plans allow you to access your benefit while you are still alive. No waiting.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#f9c65d]" />,
      title: "Cash Value & Wealth Building",
      description:
        "Many of our permanent plans build cash value over time. That value grows tax-deferred and can be accessed during your lifetime for education, emergencies, or retirement.",
    },
    {
      icon: <Award className="w-8 h-8 text-[#f9c65d]" />,
      title: "Tax Advantages",
      description:
        "Death benefits are generally income-tax-free for your beneficiary. They bypass probate and go directly to the person you name, without court delays or waiting periods.",
    },
  ];

  const conditionTable = [
    { condition: "COPD", solution: "Immediate coverage available through select carriers" },
    { condition: "Diabetic neuropathy", solution: "Immediate coverage available through select carriers" },
    { condition: "Blood thinners", solution: "Return of premium options available" },
    { condition: "Active cancer, dialysis, oxygen use, HIV", solution: "Guaranteed issue coverage with no health questions required" },
    { condition: "Insulin-dependent diabetes", solution: "Term coverage available through select carriers if diagnosed after age 30" },
    { condition: "No height-weight requirement", solution: "Coverage available regardless of build through select carriers" },
    { condition: "Ages 86–89", solution: "Coverage available up to age 89 through select carriers" },
    { condition: "Smokers working toward quitting", solution: "Non-smoker rates available for up to four years through select carriers" },
  ];

  const processSteps = [
    {
      step: "01",
      icon: <HeartHandshake className="w-8 h-8 text-[#f9c65d]" />,
      title: "We Learn About Your Situation",
      description:
        "We start with your goals. Are you thinking about end-of-life costs? Protecting a mortgage? Leaving something behind for your children or grandchildren? We start there.",
    },
    {
      step: "02",
      icon: <FileText className="w-8 h-8 text-[#f9c65d]" />,
      title: "We Explain Your Options in Plain Language",
      description:
        "Which products fit your situation, what they cost, and what they actually do. No jargon. No confusion. No pressure.",
    },
    {
      step: "03",
      icon: <AlertCircle className="w-8 h-8 text-[#f9c65d]" />,
      title: "A Few Health Questions",
      description:
        "Two to three minutes. No exams, no labs, no doctors. This helps us identify which carriers are the right fit for your health history.",
    },
    {
      step: "04",
      icon: <TrendingUp className="w-8 h-8 text-[#f9c65d]" />,
      title: "We Show You Your Options",
      description:
        "Real quotes across our carrier network. What you qualify for, what it costs, what coverage looks like. Then the decision is entirely yours.",
    },
    {
      step: "05",
      icon: <CheckCircle className="w-8 h-8 text-[#f9c65d]" />,
      title: "You Decide",
      description:
        "No obligation. No follow-up pressure. If you're ready, we get started immediately. If you need time, we respect that. Our three goals every time: make sure you can afford it, make sure you qualify, and make sure you understand it.",
    },
  ];

  const carriers = [
    { name: "Aetna",                    logo: "/partners/life-insurance-partners/aetna-01.png" },
    { name: "Aflac",                    logo: "/partners/life-insurance-partners/aflac.png" },
    { name: "AIG",                      logo: "/partners/life-insurance-partners/AIG_logo.svg.png" },
    { name: "American Amicable",        logo: "/partners/life-insurance-partners/american-amicable-01.webp" },
    { name: "Americo",                  logo: "/partners/life-insurance-partners/americo.png" },
    { name: "Athene",                   logo: "/partners/life-insurance-partners/Athene-Logo.webp" },
    { name: "Columbian Financial Group",logo: "/partners/life-insurance-partners/columbian-financial-group.png" },
    { name: "Ethos",                    logo: "/partners/life-insurance-partners/ethos-logo-green-background-white-font.webp" },
    { name: "F&G Annuities and Life",   logo: "/partners/life-insurance-partners/F&G_Annuities_&_Life.png", zoom: 1.2 },
    { name: "Foresters Financial",      logo: "/partners/life-insurance-partners/Foresters_Financial_Logo.svg.png" },
    { name: "Global Atlantic",          logo: "/partners/life-insurance-partners/global-atlantic-financial-group.png" },
    { name: "Great Western Insurance",  logo: "/partners/life-insurance-partners/great-western-insurance-company-02.jpeg" },
    { name: "John Hancock",             logo: "/partners/life-insurance-partners/john-hancock-02.png" },
    { name: "Liberty Bankers",          logo: "/partners/life-insurance-partners/liberty-bankers-life-logo-02.png" },
    { name: "Lincoln Financial Group",  logo: "/partners/life-insurance-partners/lincoln-financial-new-logo.jpg" },
    { name: "Mutual of Omaha",          logo: "/partners/life-insurance-partners/Mutual-of-Omaha-logo-02.png" },
    { name: "National Life Group",      logo: "/partners/life-insurance-partners/national-life-group-01.png" },
    { name: "Prosperity Life Group",    logo: "/partners/life-insurance-partners/prosperity-life-group-02.png" },
    { name: "Royal Neighbors of America", logo: "/partners/life-insurance-partners/royal-neighbors-of-america-01.jpeg" },
    { name: "Transamerica",             logo: "/partners/life-insurance-partners/transamerica_1989-2025-logo_brandlogos.net_grdfy.png" },
    { name: "United Home Life",         logo: "/partners/life-insurance-partners/United-Home-Life.png", zoom: true },
    { name: "American National",        logo: "/partners/life-insurance-partners/american-national-02.jpg" },
    { name: "North American",           logo: "/partners/life-insurance-partners/north-american-life-insurance.png", zoom: true },
    { name: "Nassau",                   logo: "/partners/life-insurance-partners/nassau-life-insurance.png" },
    { name: "Columbus Life Insurance",  logo: "/partners/life-insurance-partners/columbus-life-insurance.png" },
  ];

  const faqs = [
    {
      question: "Do I need a medical exam?",
      answer:
        "No. Most of our plans are simplified issue, meaning they only require a few health questions. No blood draws, no urine tests, no doctor visits. Most clients are approved within 24 to 48 hours.",
    },
    {
      question: "What if I have a health condition or have been declined before?",
      answer:
        "This is one of the most important reasons to work with an independent broker. Different carriers have very different underwriting guidelines. A condition that leads to a decline at one company may qualify for immediate coverage at another. We look at your situation across our full carrier network before making any recommendation.",
    },
    {
      question: "How much does life insurance cost?",
      answer:
        "It depends on your age, health, the type of coverage, and how much you need. The most accurate way to find out is through a free consultation where we run real quotes based on your specific situation. Rates vary by carrier and are subject to underwriting approval.",
    },
    {
      question: "What are living benefits?",
      answer:
        "Living benefits allow you to access a portion of your death benefit while you are still alive if you experience a qualifying chronic, critical, or terminal illness. Most of our plans include living benefits at no additional cost.",
    },
    {
      question: "Is the death benefit taxable?",
      answer:
        "Life insurance death benefits are generally income-tax-free for your beneficiary. They bypass probate and go directly to the person you name without court delays.",
    },
    {
      question: "Do I already have enough coverage through work?",
      answer:
        "Group life insurance through an employer is a helpful starting point but it typically ends when your employment does. It also usually provides one to two times your annual salary, which may not cover a mortgage, replace income long-term, or handle final expenses. We can help you identify any gaps.",
    },
    {
      question: "What is Return of Premium?",
      answer:
        "An option on select term life policies where you receive back every premium dollar you paid if you outlive the policy term. If you pass away during the term, your family receives the full death benefit. Available on qualifying plans subject to carrier terms.",
    },
    {
      question: "Can my children be covered?",
      answer:
        "Yes. We offer Children's Whole Life coverage for up to six children on a single application. Coverage is permanent, premiums lock in young, and the policy builds cash value they can access as they grow.",
    },
    {
      question: "What languages do you serve?",
      answer:
        "Our team serves clients in English, Spanish, and Punjabi. We are based in Bakersfield and serve families across California and beyond.",
    },
    {
      question: "How long does the consultation take?",
      answer:
        "Most consultations run 30 to 45 minutes. You can meet us by phone, video call, or in person at our Bakersfield office.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Life Insurance | Mesa Group Consulting | Bakersfield, CA"
        description="Licensed independent life insurance agents. No medical exam required on most plans. 30+ top-rated carriers. English, Español, and Punjabi. Free consultation — no obligation."
        canonicalUrl="/life-insurance-v2"
      />
      <Header />

      {/* ─── TRUST BAR ─── */}
      <div className="bg-[#f9c65d] py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-center text-sm font-semibold text-gray-900">
          <span className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4" />
            Licensed Independent Insurance Agents
          </span>
          <span className="hidden sm:inline text-gray-700">·</span>
          <span>30+ Top-Rated Carriers</span>
          <span className="hidden sm:inline text-gray-700">·</span>
          <span>2,500+ Families Served</span>
          <span className="hidden sm:inline text-gray-700">·</span>
          <span>English · Español · Punjabi</span>
          <span className="hidden sm:inline text-gray-700">·</span>
          <span className="text-gray-800 font-bold">
            We Also Offer Health Insurance — Ask Us About Coverage Options
          </span>
        </div>
      </div>

      {/* ─── HERO ─── */}
      <section className="bg-gradient-to-br from-white via-amber-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left — Copy */}
            <div className="space-y-6 lg:space-y-8">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Mesa Group Life Insurance</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                What Would Your Family's Future Look Like If They Were{" "}
                <span className="text-[#f9c65d]">Fully Protected?</span>
              </h1>

              <p className="text-xl text-gray-700 font-semibold leading-snug">
                Your Family Deserves a Plan. Let's Build One Together.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                We are licensed independent agents who shop over 30 top-rated carriers to find coverage that fits your health, your budget, and your life. No medical exam required on most plans. Most clients are approved within 24 hours. We are here to help every step of the way.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { value: "2,500+", label: "Lives Changed" },
                  { value: "150+", label: "Five-Star Reviews" },
                  { value: "3", label: "Languages Served" },
                  { value: "30+", label: "Top-Rated Carriers" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                    <div className="text-2xl font-bold text-[#f9c65d]">{stat.value}</div>
                    <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#consultation"
                  className="inline-flex items-center justify-center gap-2 bg-[#f9c65d] hover:bg-[#bb9446] text-gray-900 font-semibold px-8 py-4 rounded-lg shadow-lg transition-colors text-base"
                >
                  Book Your Free Consultation
                  <ArrowRight className="w-5 h-5 flex-shrink-0" />
                </a>
                <a
                  href="tel:6613103040"
                  className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 hover:border-[#f9c65d] text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors text-base bg-white"
                >
                  <Phone className="w-5 h-5 text-[#f9c65d]" />
                  (661) 310-3040
                </a>
              </div>

              <p className="text-sm text-gray-500">
                Powered by Mesa Group · Real Office You Can Visit
              </p>
            </div>

            {/* Right — Visual Block */}
            <div className="relative hidden lg:block">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-xl border border-amber-100">
                <div className="space-y-4">
                  {[
                    "No medical exam required on most plans",
                    "Approved in as little as 24 hours",
                    "Rates that never increase after you enroll",
                    "Living benefits included on most plans at no extra cost",
                    "Coverage even if you've been declined before",
                    "English · Español · Punjabi support",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-800 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-white rounded-xl border border-amber-200 text-center">
                  <p className="text-sm text-gray-600">Free Consultation</p>
                  <p className="text-lg font-bold text-gray-900">30–45 Minutes · No Obligation</p>
                  <p className="text-sm text-gray-600 mt-1">Phone · Video · In-Office</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SURVEY / LEAD CAPTURE ─── */}
      <section id="consultation" className="py-16 md:py-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Your Family Deserves to Be{" "}
            <span className="text-[#f9c65d]">Protected.</span>{" "}
            Let's Build a Plan Around Them.
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Answer a few quick questions and a licensed Mesa Group advisor will reach out with coverage options built around the people counting on you, your health, and your budget.
          </p>
          {/* Transparent form container — GHL form has its own card */}
          <div className="rounded-2xl overflow-hidden">
            <iframe
              src="https://link.mesagroupconsulting.com/widget/survey/MIvqzyudmOgjhZLoVZwA"
              style={{ border: "none", width: "100%", minHeight: "500px", display: "block" }}
              scrolling="no"
              id="MIvqzyudmOgjhZLoVZwA"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-activation-type="alwaysActivated"
              data-deactivation-type="neverDeactivate"
              data-form-name="Mesa Group Life Insurance Survey"
              data-form-id="MIvqzyudmOgjhZLoVZwA"
              title="Mesa Group Life Insurance Survey"
            />
          </div>
          <p className="text-sm text-gray-500 -mt-6">
            Takes less than 2 minutes. What you share stays with us.
          </p>
        </div>
      </section>

      {/* ─── EMPATHY ─── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 text-center">
            Whatever Brought You Here, You Are in the{" "}
            <span className="text-[#f9c65d]">Right Place.</span>
          </h2>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-10 shadow-md border border-amber-100 space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              A lot of people come to us carrying more than just a question about life insurance. They are carrying the weight of not knowing who to trust. Of being told they do not qualify. Of putting this off because it felt too complicated or too expensive.
            </p>
            <p>We get it. And we do not take that lightly.</p>
            <p>
              Not having coverage does not mean you have not tried. It usually means no one took the time to explain your options in a way that actually made sense. That changes today.
            </p>
            <p>
              We built Mesa for exactly this moment. For the family that is ready to take that first step and just needs someone to take it with them.
            </p>
          </div>
        </div>
      </section>

      {/* ─── THE REAL PROBLEM ─── */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 text-center">
            Your family deserves more than a policy. They deserve a{" "}
            <span className="text-[#f9c65d]">plan.</span>
          </h2>
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-md border border-amber-100 space-y-5 text-lg text-gray-700 leading-relaxed">
            <p>
              The average funeral costs between <strong>$6,600 and $10,600</strong>. Mortgage payments do not pause. Neither do the everyday expenses your family depends on.
            </p>
            <p>
              Most people know they need coverage. They just have not found the right policy at the right price. Some have been told they do not qualify because of a health condition. Others have coverage through work that disappears the moment they change jobs.
            </p>
            <p>
              At Mesa Group, we believe every family deserves access to real guidance from people who genuinely care about what happens to them. White-glove service is not reserved for people with perfect health or a perfect financial history. We take the time to understand your situation, explain your options honestly, and find coverage that actually fits your life.
            </p>
            <p className="font-semibold text-gray-900">
              That is the standard we hold ourselves to. That is what helping people first looks like in practice.
            </p>
          </div>
        </div>
      </section>

      {/* ─── RIGHT TEAM IN YOUR CORNER ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 text-center">
            What it feels like to have the{" "}
            <span className="text-[#f9c65d]">right team</span> in your corner
          </h2>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-10 shadow-md border border-amber-100 space-y-5 text-lg text-gray-700 leading-relaxed">
            <p>
              Most families go through the process of getting life insurance without ever feeling truly guided. They walk away with a policy they half understand, coverage that may not fit their situation, and no one to call when questions come up.
            </p>
            <p className="font-semibold text-gray-900">That is not the experience we build here.</p>
            <div className="space-y-3 pt-2">
              {[
                "We take the time to understand your health history, your goals, and your budget.",
                "We give you access to a broad network of top-rated carriers so we can find what actually fits — not just what is available.",
                "Living benefits are included on most plans because we believe that kind of protection should not be an afterthought.",
                "You get clear, honest answers at every step because you deserve to understand what you are getting before you ever sign anything.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p>
              We treat every client the way we would want someone to treat our own family. With patience, transparency, and genuine care for what happens next.
            </p>
            <p className="font-bold text-gray-900">
              That is the Mesa Group standard. And we protect it with everything we have.
            </p>
          </div>
          <div className="flex justify-center mt-8">
            <a
              href="#consultation"
              className="inline-flex items-center gap-2 bg-[#f9c65d] hover:bg-[#bb9446] text-gray-900 font-semibold px-8 py-4 rounded-lg shadow-lg transition-colors"
            >
              Book Your Free Consultation
              <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── SIX REASONS ─── */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              What life insurance{" "}
              <span className="text-[#f9c65d]">actually does</span> for your family
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              This is not about preparing for the worst. It is about giving your family options no matter what happens.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sixReasons.map((reason) => (
              <div
                key={reason.title}
                className="bg-white rounded-xl p-6 border border-amber-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{reason.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-700 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PICTURE YOUR FAMILY'S FUTURE ─── */}
      <section className="py-16 md:py-24 bg-[#3e3e3e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
            Picture what changes when your family is{" "}
            <span className="text-[#f9c65d]">protected</span>
          </h2>
          <div className="space-y-4 text-left max-w-2xl mx-auto">
            {[
              "Your spouse does not have to go back to work the week after the funeral.",
              "Your kids stay in the same school, the same home, the same life you built for them.",
              "The mortgage gets paid. The bills get covered. The plan you made for them holds.",
              "You access your living benefit after a health diagnosis and use it to get the care you need without draining your savings or putting it on your family.",
              "You outlive your term policy and receive every premium dollar back because you chose the Return of Premium option.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#f9c65d] flex-shrink-0 mt-0.5" />
                <p className="text-gray-200 text-lg leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-lg text-gray-300 font-medium">
            This is not a fantasy. This is what the right coverage makes possible. And it starts with a 20-minute conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="#consultation"
              className="inline-flex items-center justify-center gap-2 bg-[#f9c65d] hover:bg-[#bb9446] text-gray-900 font-semibold px-8 py-4 rounded-lg shadow-lg transition-colors"
            >
              Book Your Free Consultation
              <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </a>
            <a
              href="tel:6613103040"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-500 hover:border-[#f9c65d] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5 text-[#f9c65d]" />
              (661) 310-3040
            </a>
          </div>
        </div>
      </section>

      {/* ─── COVERAGE OPTIONS ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Coverage for every{" "}
              <span className="text-[#f9c65d]">stage of life</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Not sure which type fits your situation? That is what the free consultation is for.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageOptions.map((option) => (
              <div
                key={option.title}
                className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-shadow p-6 flex flex-col"
              >
                <div className="mb-3">{option.icon}</div>
                <span className="text-xs font-semibold text-[#bb9446] bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-3 inline-block w-fit">
                  {option.badge}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{option.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">{option.description}</p>
                <div className="space-y-2 flex-1">
                  {option.features.map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{f}</span>
                    </div>
                  ))}
                </div>
                {option.disclaimer && (
                  <p className="text-xs text-gray-500 mt-4 pt-4 border-t border-gray-100">
                    {option.disclaimer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LIVING BENEFITS ─── */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              You do not have to{" "}
              <span className="text-[#f9c65d]">pass away</span>{" "}
              for this to protect your family
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Most people assume life insurance only pays when someone dies. What most people are never told is that the majority of our plans include living benefits at no additional cost.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { title: "Chronic Illness", description: "Unable to perform at least two of six basic daily living activities for 90 or more days." },
              { title: "Critical Illness", description: "Diagnosed with a covered condition such as a heart attack, stroke, invasive cancer, ALS, or kidney failure." },
              { title: "Terminal Illness", description: "Diagnosed with a life expectancy of 12 to 24 months." },
            ].map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-xl p-6 shadow-md border border-amber-100 text-center">
                <Heart className="w-10 h-10 text-[#f9c65d] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-6 border border-amber-200 text-center shadow-sm">
            <p className="text-lg font-semibold text-gray-900 mb-2">
              Use it for medical bills. Use it for living expenses. Use it for whatever your family needs while you are still here to help them.
            </p>
            <p className="text-sm text-gray-500">
              Living benefits included on most plans at no additional cost. Eligibility and access amounts vary by policy.
            </p>
          </div>
        </div>
      </section>

      {/* ─── WE FIND COVERAGE WHEN OTHERS SAY NO ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Been told you do{" "}
              <span className="text-[#f9c65d]">not qualify?</span>{" "}
              Let us take another look.
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Health history should not keep your family from being protected. Because we work with a broad network of top-rated carriers, we can often find coverage for people who have been declined elsewhere.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-md">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#f9c65d]">
                  <th className="text-left p-4 font-bold text-gray-900">Situation</th>
                  <th className="text-left p-4 font-bold text-gray-900">What We Can Do</th>
                </tr>
              </thead>
              <tbody>
                {conditionTable.map((row, index) => (
                  <tr key={row.condition} className={index % 2 === 0 ? "bg-white" : "bg-amber-50"}>
                    <td className="p-4 font-semibold text-gray-900 border-b border-gray-100">{row.condition}</td>
                    <td className="p-4 text-gray-700 border-b border-gray-100">{row.solution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 mt-4 text-center">
            Before you give up on finding coverage, let us check. That is what the free consultation is for. Coverage subject to carrier underwriting guidelines. Individual results vary.
          </p>
          <div className="flex justify-center mt-6">
            <a
              href="#consultation"
              className="inline-flex items-center gap-2 bg-[#f9c65d] hover:bg-[#bb9446] text-gray-900 font-semibold px-8 py-4 rounded-lg shadow-lg transition-colors"
            >
              Get Your Free Coverage Review
              <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── EITHER WAY YOU WIN ─── */}
      <section className="py-16 md:py-24 bg-[#3e3e3e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            There are only{" "}
            <span className="text-[#f9c65d]">two ways this pays off</span>
          </h2>
          <p className="text-lg text-gray-300 mb-10">With our Return of Premium term life option:</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-2xl p-8 border border-white/20 text-left">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-[#f9c65d]" />
                <h3 className="text-xl font-bold text-white">If you pass away during the policy term</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Your family receives the full death benefit, tax-free, paid directly to your chosen beneficiary with no probate delays.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 border border-white/20 text-left">
              <div className="flex items-center gap-3 mb-4">
                <Gift className="w-8 h-8 text-[#f9c65d]" />
                <h3 className="text-xl font-bold text-white">If you outlive the policy</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                You receive back every premium dollar you paid. 100% returned to you at the end of the term.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-[#f9c65d] rounded-2xl">
            <p className="text-xl font-bold text-gray-900">
              There is no losing scenario. Your family is protected either way.
            </p>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Return of Premium available on select term products. Not available in all states. Subject to policy terms and underwriting approval.
          </p>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Here is exactly what happens{" "}
              <span className="text-[#f9c65d]">when you reach out</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We know a free consultation can feel like a setup for a sales call. It is not. Here is what ours actually looks like.
            </p>
          </div>
          <div className="space-y-6">
            {processSteps.map((step) => (
              <div key={step.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-[#f9c65d] flex items-center justify-center font-bold text-gray-900 text-lg shadow-md">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    {step.icon}
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a
              href="#consultation"
              className="inline-flex items-center justify-center gap-2 bg-[#f9c65d] hover:bg-[#bb9446] text-gray-900 font-semibold px-8 py-4 rounded-lg shadow-lg transition-colors"
            >
              Book Your Free Consultation
              <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </a>
            <a
              href="tel:6613103040"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 hover:border-[#f9c65d] text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors bg-white"
            >
              <Phone className="w-5 h-5 text-[#f9c65d]" />
              (661) 310-3040
            </a>
          </div>
          <p className="text-center text-sm text-gray-500 mt-3">
            30–45 minutes · Available by phone, video, or in-office · No obligation · No pressure
          </p>
        </div>
      </section>

      {/* ─── CARRIERS ─── */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden">
        {/* Header — stays constrained */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            A network built for{" "}
            <span className="text-[#f9c65d]">your benefit</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We partner with over 30 top-rated carriers so we are never limited to a single option. That independence is what allows us to always put your needs first.
          </p>
        </div>

        {/* Full-width logo ticker — hover to pause */}
        <div className="marquee-container overflow-hidden py-2">
          <div className="marquee-track flex gap-5 w-max">
            {/* Duplicate set for seamless loop */}
            {[...carriers, ...carriers].map((carrier, i) => (
              <div
                key={`${carrier.name}-${i}`}
                className="w-[264px] h-24 flex-shrink-0 bg-white rounded-xl shadow-sm border border-gray-100 p-4 overflow-hidden"
              >
                <img
                  src={carrier.logo}
                  alt={carrier.name}
                  title={carrier.name}
                  className="w-full h-full object-contain"
                  style={'zoom' in carrier && carrier.zoom
                    ? { transform: `scale(${carrier.zoom === true ? 1.4 : carrier.zoom})` }
                    : undefined}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer — stays constrained */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8">
          <p className="text-xs text-gray-500">
            All carriers are independent of Mesa Group Consulting. Coverage availability varies by state and is subject to carrier underwriting guidelines.
          </p>
        </div>
      </section>

      {/* ─── WHY MESA GROUP ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Why{" "}
              <span className="text-[#f9c65d]">2,500+ families</span>{" "}
              chose us and kept coming back
            </h2>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-10 shadow-md border border-amber-100 space-y-5 text-lg text-gray-700 leading-relaxed">
            <p>
              Our founder knows what it feels like to navigate a financial system with no one in your corner. He watched his immigrant parents almost lose everything they built. He has sat where you are sitting.
            </p>
            <p>
              That is why Mesa Group operates differently. We are not here to sell you a policy. We are here to make sure your family is actually protected. We walk you through your options honestly. We tell you what you need and what you do not. We do not move until you understand.
            </p>
            <p className="font-bold text-gray-900">
              Because when you trust us with your family's future, we take that seriously.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            {[
              "2,500+ Families Served",
              "150+ Five-Star Reviews",
              "Licensed Independent Agents",
              "English · Español · Punjabi",
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-800"
              >
                <Star className="w-4 h-4 text-[#f9c65d]" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS (Placeholder) ─── */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real families.{" "}
            <span className="text-[#f9c65d]">Real protection.</span>{" "}
            Real peace of mind.
          </h2>
          {/* NOTE FOR MARIO AND EVERT: Replace placeholder testimonials with real verified
              client reviews once available. First name, last initial, city and state. */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md border border-amber-100">
                <div className="flex gap-1 mb-3 justify-center">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />
                  ))}
                </div>
                <p className="text-gray-500 italic text-sm">
                  [Client testimonial placeholder — insert once available]
                </p>
                <p className="text-gray-400 text-xs mt-4">— Mesa Group Client</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-6">
            Individual results may vary. Testimonials reflect individual client experiences and are not a guarantee of similar outcomes.
          </p>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
            Questions we hear{" "}
            <span className="text-[#f9c65d]">all the time</span>
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

      {/* ─── FINAL CTA ─── */}
      <section className="py-16 md:py-24 bg-[#f9c65d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Your family deserves a real plan. Let us help you build one.
          </h2>
          <p className="text-xl text-gray-800 mb-8 leading-relaxed max-w-2xl mx-auto">
            Coverage that fits your health, your budget, and your goals. Without the pressure, without the jargon, and without the runaround. The consultation is free. The conversation is on us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#consultation"
              className="inline-flex items-center justify-center gap-2 bg-[#3e3e3e] hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-lg shadow-xl transition-colors text-lg"
            >
              Book Your Free Consultation
              <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </a>
            <a
              href="tel:6613103040"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-semibold px-8 py-4 rounded-lg shadow-xl transition-colors text-lg border-2 border-gray-900"
            >
              <Phone className="w-5 h-5 flex-shrink-0" />
              (661) 310-3040
            </a>
          </div>
          <p className="text-sm text-gray-800 mt-4">
            No obligation · No pressure · English · Español · Punjabi
          </p>
        </div>
      </section>

      <ContactFormSection />
      <Footer />

      {/* ─── INSURANCE COMPLIANCE FOOTER ─── */}
      <div className="bg-[#3e3e3e] py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-400 leading-relaxed">
            Mesa Group Consulting is a licensed independent insurance agency. Coverage is subject to underwriting approval by the issuing carrier. Rates vary based on age, health, and coverage selected. Not all products are available in all states. We also offer health insurance coverage. Ask us about your options during your free consultation or call (661) 310-3040.
          </p>
          <p className="text-xs text-gray-600 mt-4">
            © {new Date().getFullYear()} Mesa Group Consulting. All rights reserved.
          </p>
        </div>
      </div>

    </div>
  );
}
