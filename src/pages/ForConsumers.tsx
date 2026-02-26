import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle,
  Star,
  TrendingUp,
  Shield,
  DollarSign,
  Heart,
  Home,
  MapPin,
  ArrowRight,
  Phone,
  ChevronDown,
  ChevronUp,
  Users,
  MessageSquare,
  Map
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactFormSection from '@/components/ContactFormSection';
import { CalendlyPopupButton } from '@/components/CalendlyPopupButton';
import { SEO } from '@/components/SEO';

const ForConsumers = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    {
      question: "How do I know which service is right for me?",
      answer: "Schedule a free consultation with one of our advisors. We'll take the time to understand your situation, your goals, and your budget, and point you toward the solution that genuinely makes sense. No obligation. Just honest guidance."
    },
    {
      question: "Do you work with people who have bad credit?",
      answer: "Absolutely. We specialize in helping people at every stage. Whether your score is 300 or 800, you'll receive the same level of care, respect, and professional service every single time."
    },
    {
      question: "Are there any hidden fees?",
      answer: "None. Every service comes with transparent, upfront pricing so you know exactly what you're committing to before you sign anything."
    },
    {
      question: "What if I can't afford your services right now?",
      answer: "We offer multiple pricing tiers and flexible payment options to fit different budgets. Some services, like loan shopping and credit card comparisons, are completely free to use. Come talk to us and we'll figure out what's possible for your situation."
    },
    {
      question: "Do I have to commit to anything during the free consultation?",
      answer: "Not at all. The consultation exists purely to understand your situation and give you honest information. You decide if, when, and how you want to move forward. That's always your call."
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Credit Repair, Loans & Financial Services | Mesa Group Consulting"
        description="Credit restoration, monitoring, personal loans, debt relief, and more. Mesa Group helps individuals and families improve their financial lives. Free consultation available."
        canonicalUrl="/for-consumers"
      />
      <Header />

      {/* ── SECTION 1: HERO ──────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-white via-amber-50 to-white py-12 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">

            <div className="inline-block bg-amber-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
              We Help People First. Always.
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              You're in the Right Place. <span className="text-[#f9c65d]">Let's Figure This Out Together.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              From credit restoration to debt relief, personal loans to life insurance, Mesa Group connects you with the right resources and expert support to move forward with confidence. Whether you're rebuilding after a setback, planning for the future, or simply looking to improve your financial health, we'll find the solution that fits your life.
            </p>

            {/* Trust Bar */}
            <div className="flex flex-wrap justify-center gap-6 pt-2 text-sm text-gray-600">
              {['2,500+ Lives Changed', '150+ Five-Star Reviews', 'Real Office You Can Visit', 'EN / ES / Punjabi Support'].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <CalendlyPopupButton
                text="Schedule My Free Consultation"
                prefillOptions={{ utm: { source: 'for_consumers', medium: 'hero_cta' } }}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#f9c65d] hover:bg-[#bb9446] text-gray-900 font-bold rounded-xl shadow-lg transition-all duration-200"
                showArrow={true}
              />
              <a
                href="tel:+16613103040"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-xl shadow-md border-2 border-gray-200 transition-all"
              >
                <Phone className="w-5 h-5 text-[#f9c65d]" />
                (661) 310-3040
              </a>
            </div>

            <p className="text-sm text-gray-500">Hablamos Español · Assi Punjabi Bolde Haan</p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: ROUTING CARDS ─────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold mb-4 uppercase tracking-wide">
              Find Your Path
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Brings You <span className="text-[#f9c65d]">Here Today?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pick the situation that fits yours. We'll show you exactly where to go.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Card 1, Fix or Build Credit */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-amber-300">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Fix or Build My Credit</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Whether you have a pile of negatives or just a thin file with nothing on it, there's a clear path forward. We'll help you find the right starting point.
              </p>
              <div className="space-y-1.5 mb-6 text-sm text-gray-600">
                <div>→ <Link to="/credit-repair" className="text-[#bb9446] hover:underline font-medium">Credit Restoration (Mesa360)</Link></div>
                <div>→ <Link to="/diy-credit-repair" className="text-[#bb9446] hover:underline font-medium">DIY Credit Repair</Link></div>
                <div>→ <Link to="/build-credit" className="text-[#bb9446] hover:underline font-medium">Build Credit</Link></div>
                <div>→ <Link to="/credit-monitoring" className="text-[#bb9446] hover:underline font-medium">Credit Monitoring</Link></div>
              </div>
              <Link to="/credit-repair" className="inline-flex items-center gap-2 text-gray-900 font-bold bg-[#f9c65d] hover:bg-[#bb9446] px-6 py-3 rounded-lg transition-colors">
                See My Options <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 2, Get Out of Debt */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-amber-300">
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Get Out of Debt</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Stop creditor calls, reduce what you owe, and get a realistic plan to become debt-free without filing bankruptcy.
              </p>
              <div className="space-y-1.5 mb-6 text-sm text-gray-600">
                <div>→ <Link to="/debt-relief" className="text-[#bb9446] hover:underline font-medium">Debt Relief</Link></div>
                <div>→ <Link to="/debt-consolidation-loan" className="text-[#bb9446] hover:underline font-medium">Debt Consolidation Loan</Link></div>
              </div>
              <Link to="/debt-relief" className="inline-flex items-center gap-2 text-gray-900 font-bold bg-[#f9c65d] hover:bg-[#bb9446] px-6 py-3 rounded-lg transition-colors">
                See My Options <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 3, Find a Loan or Credit Product */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-amber-300">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Find a Loan or Credit Product</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We've done the homework on which lenders are worth your time. Compare real rates from multiple lenders in minutes, with no impact to your credit score.
              </p>
              <div className="space-y-1.5 mb-6 text-sm text-gray-600">
                <div>→ <Link to="/personal-loans" className="text-[#bb9446] hover:underline font-medium">Personal Loans</Link></div>
                <div>→ <Link to="/credit-cards" className="text-[#bb9446] hover:underline font-medium">Credit Cards</Link></div>
                <div>→ <Link to="/auto-loan-refi" className="text-[#bb9446] hover:underline font-medium">Auto Loan Refinancing</Link></div>
                <div>→ <Link to="/student-loan-refi" className="text-[#bb9446] hover:underline font-medium">Student Loan Refinancing</Link></div>
              </div>
              <Link to="/personal-loans" className="inline-flex items-center gap-2 text-gray-900 font-bold bg-[#f9c65d] hover:bg-[#bb9446] px-6 py-3 rounded-lg transition-colors">
                See My Options <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 4, Protect My Family's Future */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-amber-300">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Protect My Family's Future</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Life doesn't wait. Get your estate planning and life insurance in order. Affordable, simple, and done right.
              </p>
              <div className="space-y-1.5 mb-6 text-sm text-gray-600">
                <div>→ <Link to="/life-insurance" className="text-[#bb9446] hover:underline font-medium">Life Insurance</Link></div>
                <div>→ <Link to="/trust-and-will-plan" className="text-[#bb9446] hover:underline font-medium">Trust & Will Planning</Link></div>
              </div>
              <Link to="/life-insurance" className="inline-flex items-center gap-2 text-gray-900 font-bold bg-[#f9c65d] hover:bg-[#bb9446] px-6 py-3 rounded-lg transition-colors">
                See My Options <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 3: MESA FINANCIAL CONCIERGE SPOTLIGHT ────────────── */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 via-[#fffbec] to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-amber-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-4 uppercase tracking-wide">
              What Makes Mesa Different
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              You Get More Than a Service. <span className="text-[#f9c65d]">You Get a Partner.</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              From the moment you walk through our door, you have access to something that most people never knew existed. Expert guidance, a dedicated community, and a personalized roadmap built entirely around your life and your goals.
            </p>
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-4 text-lg text-gray-700 mb-12">
            <p>
              That's Mesa Financial Concierge. White-glove financial partnership, available to every single person we serve, included free with your credit monitoring subscription.
            </p>
            <p className="font-semibold text-gray-900">
              This is the experience you always deserved. Now it's yours.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Users,
                title: 'Expert Coaching',
                body: 'Weekly live coaching calls with financial advisors dedicated to your success. Bring your questions, your challenges, your wins. Real guidance from real people, every single week.',
              },
              {
                icon: MessageSquare,
                title: 'Private Community',
                body: "You're never navigating alone. Post a question at any hour and receive a thoughtful response from experts or members who've walked the exact path you're on, within 24 hours.",
              },
              {
                icon: Map,
                title: 'Your Personal Roadmap',
                body: "Your fully customized action plan tells you precisely what to do next, built around your credit profile and your goals. No guessing. No wasted time. Just a clear path forward that's yours alone.",
              },
            ].map((pillar) => (
              <div key={pillar.title} className="bg-white rounded-2xl p-8 shadow-md text-center">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <pillar.icon className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">{pillar.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{pillar.body}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/concierge"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#f9c65d] hover:bg-[#bb9446] text-gray-900 font-bold rounded-xl shadow-lg transition-all duration-200"
            >
              Discover Mesa Financial Concierge <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              Included FREE with Mesa x SmartCredit ($27.99/month) · Included with every Mesa360 enrollment
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: NOT SURE WHERE TO START ───────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Not Sure Where to Start? <span className="text-[#f9c65d]">That's What We're Here For.</span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
            At Mesa Group, nobody gets turned away without guidance. Sit down with one of our advisors, completely free, and we'll take the time to understand your full situation, answer every question you have, and point you toward the path that genuinely makes sense for your goals.
          </p>
          <p className="text-lg font-semibold text-gray-900 mb-10">
            That's the Mesa promise. And it's available to everyone who walks through our door.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyPopupButton
              text="Schedule My Free Consultation"
              showArrow={true}
              prefillOptions={{ utm: { source: 'for_consumers', medium: 'not_sure_cta' } }}
              className="inline-flex items-center justify-center px-8 py-4 bg-[#f9c65d] hover:bg-[#bb9446] text-gray-900 font-bold rounded-xl shadow-lg transition-all duration-200"
            />
            <a
              href="tel:+16613103040"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-xl shadow-md border-2 border-gray-200 transition-all"
            >
              <Phone className="w-5 h-5 text-[#f9c65d]" />
              Or call us: (661) 310-3040
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-6">Hablamos Español · Assi Punjabi Bolde Haan</p>
        </div>
      </section>

      {/* ── SECTION 5: WHY MESA ──────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16">
            Built on a Promise <span className="text-[#f9c65d]">We Made to Ourselves.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Home className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">We've Been There</h3>
              <p className="text-gray-700 leading-relaxed">
                Our founder watched his immigrant parents nearly lose everything they worked their whole lives to build. He knows what it feels like to navigate a financial system that wasn't designed with your family in mind. Mesa Group was born from that experience, so no family ever has to face it alone again.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">We Help Everybody</h3>
              <p className="text-gray-700 leading-relaxed">
                Every person who walks through our door gets the same level of care, whether your credit is a 300 or an 800, whether you need comprehensive services or just honest direction. We help everybody. That's the promise we made, and that's the promise we keep.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">A Real Home Base for Your Financial Life</h3>
              <p className="text-gray-700 leading-relaxed">
                5001 California Ave Suite 219, Bakersfield, CA. Come in, meet the team, and sit down before you commit to anything. This is your financial home, and you're always welcome here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: TESTIMONIALS ──────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Real Clients. Real Results. <span className="text-[#f9c65d]">Real Transformation.</span>
            </h2>
            <p className="text-xl text-gray-600">Here's what happens when you work with people who genuinely want you to succeed.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                photo: "/reviews/for-consumers-reviews/img-01-happy-latino-man-at-new-home.jpeg",
                text: "A year ago, my credit score was 512 and I felt stuck. Within 6 months, my score jumped over 250 points. Thanks to them, I was finally approved for my first car loan and just closed on my dream home.",
                name: "Julian M.",
                detail: "512 → 762+ in 6 months · Car loan · Dream home",
                location: "Bakersfield, CA",
              },
              {
                photo: "/reviews/for-consumers-reviews/img-02-man-celebrates-rising-credit-score-graph.jpeg",
                text: "I tried 2 other companies and for over 2 years combined, all I got was empty promises and no results. I came across Mesa Group and in just a few months the results speak for themselves.",
                name: "Alex M.",
                detail: "Results in months after 2+ years at other companies",
                location: "Bakersfield, CA",
              },
              {
                photo: "/reviews/for-consumers-reviews/img-03-punjabi-woman-in-warm-golden-light.jpeg",
                text: "Cannot rave enough about them! They turned my credit around when I thought there was no recovering from it. I'm beyond thankful for the opportunities that have opened up after this experience.",
                name: "Loveleen S.",
                detail: "Credit turned around when recovery seemed impossible",
                location: "Bakersfield, CA",
              },
            ].map((t, i) => (
              <div key={i} className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-2xl shadow-lg overflow-hidden flex flex-col">
                {/* Review photo */}
                <div className="h-56 overflow-hidden">
                  <img
                    src={t.photo}
                    alt=""
                    aria-hidden
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Quote + attribution */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />)}
                  </div>
                  <p className="text-white italic leading-relaxed mb-6 flex-1">"{t.text}"</p>
                  <div className="border-t border-gray-600 pt-4">
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-sm text-[#f9c65d] font-semibold mt-1">{t.detail}</p>
                    <p className="text-xs text-gray-400">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center max-w-2xl mx-auto space-y-2">
            <p className="text-sm text-gray-500">
              Important Disclosure: Results vary based on individual circumstances. Testimonials reflect individual client experiences and are not a guarantee of similar outcomes. All testimonials are from actual clients.
            </p>
            <p className="text-xs text-gray-400">
              Images may be AI-generated, stock photo, or other representations and do not depict actual clients.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: FAQ ───────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4">
            Common Questions. <span className="text-[#f9c65d]">Honest Answers.</span>
          </h2>
          <p className="text-center text-gray-600 mb-12">Everything you need to know before getting started.</p>

          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</span>
                  {openFaq === index
                    ? <ChevronUp className="w-5 h-5 text-[#f9c65d] flex-shrink-0" />
                    : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  }
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: FINAL CTA ─────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#FFFBEC] to-[#FFECD7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your Financial Transformation Starts with <span className="text-[#f9c65d]">One Conversation</span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-4 max-w-3xl mx-auto">
            Whether you're ready to take action today or just exploring your options, we're here to help. Schedule a free consultation, and let's talk about where you are, where you want to be, and the most practical path to get there.
          </p>
          <p className="text-base text-gray-600 mb-10">
            No pressure. No judgment. Just honest guidance from people who understand what you're going through.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <CalendlyPopupButton
              text="Schedule Free Consultation"
              showArrow={true}
              prefillOptions={{ utm: { source: 'for_consumers', medium: 'final_cta' } }}
              className="inline-flex items-center justify-center px-8 py-4 bg-[#f9c65d] hover:bg-[#bb9446] text-gray-900 font-bold rounded-xl shadow-lg transition-all duration-200"
            />
            <a
              href="tel:+16613103040"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-xl shadow-md border-2 border-gray-200 transition-all"
            >
              <Phone className="w-5 h-5 text-[#f9c65d]" />
              Call Us: (661) 310-3040
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-xl mx-auto text-sm text-gray-600 mb-6">
            <div>M-F: 9am – 7pm | Sat: 10am – 2pm PST</div>
            <div>5001 California Ave Suite 219, Bakersfield, CA 93309</div>
          </div>

          <p className="text-xs text-gray-500 max-w-2xl mx-auto">
            Mesa Group Consulting is a financial services platform. Results vary by individual circumstances. Affiliate partnerships with SmartCredit, SuperMoney, and others are disclosed. We may receive compensation when you sign up through our links.
          </p>
        </div>
      </section>

      <ContactFormSection />
      <Footer />
    </div>
  );
};

export default ForConsumers;
