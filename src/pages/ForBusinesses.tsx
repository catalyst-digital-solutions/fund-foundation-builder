import React, { useState } from 'react';
import {
  CheckCircle,
  Star,
  TrendingUp,
  Building2,
  DollarSign,
  ShieldCheck,
  Briefcase,
  ChevronDown,
  ChevronUp,
  MapPin,
  ArrowRight,
  Phone,
  Heart,
  Home,
  Users,
  MessageSquare,
  Map
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactFormSection from '@/components/ContactFormSection';
import { CalendlyPopupButton } from '@/components/CalendlyPopupButton';
import { SEO } from '@/components/SEO';

const ForBusinesses = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    {
      question: "How do I know which business service is right for me?",
      answer: "Schedule a free consultation with one of our advisors. We'll take the time to understand your business situation, your goals, and your timeline, and point you toward the solution that genuinely makes sense. No obligation. Just honest guidance."
    },
    {
      question: "Do you work with businesses that have bad credit or no credit history?",
      answer: "Absolutely. We specialize in helping businesses at every stage, whether you're brand new with no credit profile or recovering from a setback. You'll receive the same level of care, respect, and professional service every single time."
    },
    {
      question: "Are there any hidden fees?",
      answer: "None. Every service comes with transparent, upfront pricing so you know exactly what you're committing to before you sign anything. Our business funding services are performance-based. We don't get paid until you do."
    },
    {
      question: "What if my business was just denied for funding?",
      answer: "A denial isn't the end. It usually means the wrong lender, wrong timing, or wrong positioning, not that funding is impossible. We'll review your situation, identify what caused the denial, and build a strategy to get you approved through the right channel."
    },
    {
      question: "Do I have to commit to anything during the free consultation?",
      answer: "Not at all. The consultation exists purely to understand your business and give you honest information. You decide if, when, and how you want to move forward. That's always your call."
    },
    {
      question: "What size businesses do you work with?",
      answer: "We work with businesses at every stage, from pre-revenue startups to established companies doing millions annually. The solutions change depending on where you are, but the commitment to helping you doesn't."
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Business Funding & Credit Solutions | Mesa Group Consulting"
        description="Business credit building, funding, 0% interest capital, and debt relief. Mesa Group helps entrepreneurs access the capital and guidance they need to grow."
        canonicalUrl="/for-businesses"
      />
      <Header />

      {/* ── SECTION 1: HERO ──────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-white via-amber-50 to-white py-12 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">

            <div className="inline-block bg-amber-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
              We Help Businesses First. Always.
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              You're in the Right Place. <span className="text-[#f9c65d]">Let's Figure This Out Together.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              From business credit to funding, 0% interest capital to debt relief, Mesa Group connects you with the right resources and expert support to move your business forward with confidence. Whether you're building from scratch, ready to scale, or recovering from crushing debt, we'll find the solution that fits where your business actually is.
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
                text="Schedule My Free Business Consultation"
                prefillOptions={{ utm: { source: 'for_businesses', medium: 'hero_cta' } }}
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

            <p className="text-sm text-gray-500">🇪🇸 Hablamos Español · 🇮🇳 Assi Punjabi Bolde Haan</p>
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
              What's Going On With Your <span className="text-[#f9c65d]">Business Right Now?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tell us where you are. We'll show you exactly where to go. No pressure, no judgment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Card 1, Build Credit */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-amber-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Build My Business Credit</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                No business credit history. Banks keep saying no. You're putting everything on your personal card and it's getting old. There's a better way, and we'll walk you through it step by step.
              </p>
              <div className="space-y-2 mb-6 text-sm text-gray-600">
                <div>→ <Link to="/business-credit-builder" className="text-[#bb9446] hover:underline font-medium">Business Credit Builder Program</Link></div>
              </div>
              <Link to="/business-credit-builder" className="inline-flex items-center gap-2 text-gray-900 font-bold bg-[#f9c65d] hover:bg-[#bb9446] px-6 py-3 rounded-lg transition-colors">
                Show Me How <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 2, Get Funding */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-amber-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Get Business Funding</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                You've got a real business doing real work, and you just need the capital to match. Whether you've been denied before or you're applying for the first time, we'll find the right lender for where you actually are.
              </p>
              <div className="space-y-2 mb-6 text-sm text-gray-600">
                <div>→ <Link to="/business-funding" className="text-[#bb9446] hover:underline font-medium">Business Funding via Mesa Group Capital</Link></div>
                <div>→ <Link to="/zero-interest-business-funding" className="text-[#bb9446] hover:underline font-medium">0% Interest Funding Program</Link></div>
              </div>
              <Link to="/business-funding" className="inline-flex items-center gap-2 text-gray-900 font-bold bg-[#f9c65d] hover:bg-[#bb9446] px-6 py-3 rounded-lg transition-colors">
                Show Me How <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 3, Debt Relief */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-amber-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Get Out of Business Debt</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Merchant cash advances bleeding you dry. Creditors calling. The payments don't stop but the balance never moves. You don't have to file bankruptcy to get free. There's a real path out, and we know it.
              </p>
              <div className="space-y-2 mb-6 text-sm text-gray-600">
                <div>→ <Link to="/business-debt-relief" className="text-[#bb9446] hover:underline font-medium">Business Debt Relief & Settlement</Link></div>
              </div>
              <Link to="/business-debt-relief" className="inline-flex items-center gap-2 text-gray-900 font-bold bg-[#f9c65d] hover:bg-[#bb9446] px-6 py-3 rounded-lg transition-colors">
                Show Me How <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 4, Set Up Right */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-amber-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Set My Business Up Right</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Maybe no one ever showed you how to properly structure a business so banks and lenders take it seriously. We'll get the foundation right, so the doors that keep closing start opening instead.
              </p>
              <div className="space-y-2 mb-6 text-sm text-gray-600">
                <div>→ <a href="https://www.tailorbrands.com/llc-cpa-aff?transaction_id=102bd1f29c1558d91db36f9aa7b89e&state=&utm_source=Tune&utm_medium=Tune&utm_campaign=9347" target="_blank" rel="noopener noreferrer" className="text-[#bb9446] hover:underline font-medium">LLC Formation</a></div>
                <div>→ <span className="text-gray-500 font-medium">Business Advisory (free consultation)</span></div>
              </div>
              <CalendlyPopupButton
                text="Show Me How"
                showArrow={true}
                prefillOptions={{ utm: { source: 'for_businesses', medium: 'setup_card' } }}
                className="inline-flex items-center gap-2 text-gray-900 font-bold bg-[#f9c65d] hover:bg-[#bb9446] px-6 py-3 rounded-lg transition-colors"
              />
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
              From the moment you walk through our door, you have access to something that most business owners never knew existed. Expert guidance, a dedicated community, and a personalized roadmap built entirely around your business and your goals.
            </p>
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-4 text-lg text-gray-700 mb-12">
            <p>
              That's Mesa Financial Concierge. White-glove financial partnership, available to every single client we serve, included free with your credit monitoring subscription.
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
                title: 'Your Business Roadmap',
                body: "Your fully customized action plan tells you precisely what to do next, built around your business profile and your goals. No guessing. No wasted time. Just a clear path forward that's yours and yours alone.",
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#f9c65d] hover:bg-[#bb9446] text-gray-900 font-bold rounded-xl shadow-lg transition-all duration-200 mr-4"
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
            You Don't Have to <span className="text-[#f9c65d]">Figure This Out Alone.</span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
            A lot of business owners come to us not knowing exactly what they need, just knowing something isn't working. That's okay. That's actually exactly why we're here.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto">
            Sit down with one of our advisors, completely free, and just talk. Tell us where your business is. Tell us what's been frustrating you. We'll listen, ask the right questions, and give you honest direction, whether you become a client or not.
          </p>
          <p className="text-lg font-semibold text-gray-900 mb-10">
            That's the Mesa promise. And it's available to every business owner who walks through our door.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyPopupButton
              text="Schedule My Free Business Consultation"
              showArrow={true}
              prefillOptions={{ utm: { source: 'for_businesses', medium: 'not_sure_cta' } }}
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
          <p className="text-sm text-gray-500 mt-6">🇪🇸 Hablamos Español · 🇮🇳 Assi Punjabi Bolde Haan</p>
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
                Our founder watched his immigrant parents nearly lose everything they worked their whole lives to build. He knows what it feels like to build something from nothing, and to navigate a financial system that wasn't designed with your family or your business in mind. Mesa Group was born from that experience, so no business owner ever has to face it alone again.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">We Help Everybody</h3>
              <p className="text-gray-700 leading-relaxed">
                Every business owner who walks through our door gets the same level of care. No matter where your business is, no matter what your credit looks like, no matter how complicated your situation. We don't turn people away. We find a way to help. Every single time.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">A Real Place You Can Walk Into</h3>
              <p className="text-gray-700 leading-relaxed">
                5001 California Ave Suite 219, Bakersfield, CA. Come in, meet the team, and sit down before you commit to a single thing. No call centers. No overseas agents. Just real people who are invested in your business because this community is ours too.
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
              Real Business Owners. Real Results. <span className="text-[#f9c65d]">Real Transformation.</span>
            </h2>
            <p className="text-xl text-gray-600">Here's what happens when you work with people who genuinely want your business to succeed.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                stars: 5,
                text: "Evert is amazing! The best! Helped me out from my bankruptcy and starting new credit for my business. I would recommend him to my family and friends.",
                name: "Julie A.",
                detail: "Recovered from bankruptcy · New business credit established",
                location: "Bakersfield, CA",
              },
              {
                stars: 5,
                text: "I had a great experience with mesa group consulting. They helped me a lot in repairing my credit. I would also like to say to everyone else that anyone who wants to fix their credit should contact them.",
                name: "Rana Y.",
                detail: "Credit repaired · Ready to access capital",
                location: "Bakersfield, CA",
              },
              {
                stars: 5,
                text: "They did a great job. They fix my credit from 530 to 780 credit score.",
                name: "Guillermo A.",
                detail: "530 → 780 credit score",
                location: "Bakersfield, CA",
              },
            ].map((t, i) => (
              <div key={i} className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-2xl p-8 shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.stars)].map((_, j) => <Star key={j} className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />)}
                </div>
                <p className="text-white italic leading-relaxed mb-6">"{t.text}"</p>
                <div className="border-t border-gray-600 pt-4">
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-[#f9c65d] font-semibold mt-1">{t.detail}</p>
                  <p className="text-xs text-gray-400">{t.location}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-8 max-w-2xl mx-auto">
            Results vary based on individual business circumstances. Testimonials reflect individual client experiences and are not a guarantee of similar outcomes. All testimonials are from actual clients.
          </p>
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
            Your Business Transformation Starts with <span className="text-[#f9c65d]">One Conversation</span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-4 max-w-3xl mx-auto">
            Whether you're ready to take action today or just exploring your options, we're here to help. Schedule a free consultation and let's talk about where your business is, where you want it to be, and the most practical path to get there.
          </p>
          <p className="text-base text-gray-600 mb-10">
            No pressure. No judgment. Just honest guidance from people who understand what you're going through, because we've built businesses ourselves.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <CalendlyPopupButton
              text="Schedule Free Business Consultation"
              showArrow={true}
              prefillOptions={{ utm: { source: 'for_businesses', medium: 'final_cta' } }}
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
            Mesa Group Consulting is a financial services and advisory platform. Mesa Group Capital is our business funding brokerage division. Results vary by individual business circumstances. Business funding is facilitated through Mesa Group Capital's lender network, terms and approval are subject to lender underwriting. No upfront fees on brokerage services.
          </p>
        </div>
      </section>

      <ContactFormSection />
      <Footer />
    </div>
  );
};

export default ForBusinesses;
