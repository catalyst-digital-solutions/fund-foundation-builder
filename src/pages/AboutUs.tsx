import React from 'react';
import {
  CheckCircle,
  Heart,
  Shield,
  BookOpen,
  ArrowRight,
  Users,
  Star,
  Home,
  Briefcase,
  Phone,
  MapPin,
  Globe,
  GraduationCap,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CalendlyPopupButton } from '@/components/CalendlyPopupButton';
import { SEO } from '@/components/SEO';

const AboutUs = () => {
  const leadershipTeam = [
    {
      name: 'Evert Calderon',
      role: 'Founder & Visionary',
      languages: 'Spanish / English',
      bio: "Mesa Group exists because of a promise. A promise that no family should have to navigate the financial system alone, the way so many families have. Evert built this company not to put his name on something, but to build the resource his own family never had. Today he sets the vision, holds the standard, and makes sure every client who walks through the door receives the same level of care regardless of where they're starting. When clients describe working with Evert, the word that comes up most is understood. That's the whole point.",
    },
    {
      name: 'Aileen Calderon',
      role: 'Office Operations Manager',
      languages: 'Spanish / English',
      bio: "Aileen is the reason everything runs the way it should. She manages the day-to-day operations that most clients never see but always feel: the follow-through, the coordination, the consistency that makes Mesa feel different from the first interaction. She brings order to complexity and makes sure nothing falls through the cracks. Clients who've worked with Aileen describe her as someone who genuinely cares whether things go right for you, not just whether the process was followed.",
    },
    {
      name: 'Justin Calderon',
      role: 'Client Solutions Coordinator',
      languages: 'Spanish / English',
      bio: "Justin is usually the first real conversation a new client has at Mesa. He listens first and talks second, which is rarer than it should be in this industry. His job is to understand where someone actually is, not just financially, but emotionally, and connect them to the right path forward. He doesn't push. He guides. Clients consistently say Justin made them feel like they weren't being sold something, they were being helped.",
    },
    {
      name: 'Harpreet Moore',
      role: 'Client Solutions Advisor',
      languages: 'Punjabi / English',
      bio: "Harpreet understands what it means to navigate two worlds at once. She serves clients in both English and Punjabi, and brings a cultural fluency that goes deeper than language. She understands the specific pressures many immigrant families carry quietly, and she meets clients exactly where they are without judgment. Her clients don't just leave with a plan. They leave feeling like someone finally gets it.",
    },
    {
      name: 'Gurtej Singh',
      role: 'Client Solutions Director',
      languages: 'Punjabi / English',
      bio: "Gurtej leads with precision and conviction. He works with clients who are ready to move, people who've done the work and need a strategist in their corner to get results. He brings deep knowledge of both the credit system and the funding landscape, connecting the dots between where a client is today and what's actually possible for their future. Clients describe him as direct, thorough, and someone who always tells you the truth even when it's not what you wanted to hear.",
    },
  ];

  const clientSuccessTeam = [
    { name: 'Monika Kakalia', languages: 'Punjabi / English' },
    { name: 'Stephanie Gonzalez', languages: 'Spanish / English' },
    { name: 'Gurpreet Kaur', languages: 'Punjabi / English' },
    { name: 'Anchal Varma', languages: 'Punjabi / English' },
  ];

  const pillars = [
    {
      icon: Heart,
      color: 'bg-red-100 text-red-500',
      title: 'Family First',
      body: "We treat every client like family because that's how we were raised. Whether you're restoring credit, getting out of debt, accessing business funding, or protecting your family's future with a will or life insurance. Every conversation comes from a place of respect and genuine commitment. When you work with Mesa, you're not a transaction. You're part of something.",
    },
    {
      icon: Sparkles,
      color: 'bg-amber-100 text-amber-600',
      title: 'Faith-Led Purpose',
      body: 'Everything we do is rooted in service, compassion, and belief. Belief in new beginnings. Belief that your breakthrough is already written. We\'re just here to help you walk it out. We answer to a higher standard, and that standard shows up in every interaction, every service, every outcome. "Where God guides, He provides." — Isaiah 58:11',
    },
    {
      icon: Shield,
      color: 'bg-blue-100 text-blue-600',
      title: 'Integrity Always',
      body: "We tell you what we can do and what we can't, upfront. If credit restoration makes sense for you, we'll tell you. If debt relief is the smarter first step, we'll tell you that instead. No pressure. No shortcuts. No illegal tactics. You trust us with your financial future and we never take that lightly.",
    },
    {
      icon: BookOpen,
      color: 'bg-green-100 text-green-600',
      title: 'Education Over Shortcuts',
      body: "The wealthy have always had access to financial advisors, estate planners, credit specialists, and funding networks. Most people haven't. We built Mesa to change that. Real transformation happens when you understand how the system works, not just how to navigate it once, but how to use it for the rest of your life. Our goal isn't to make you dependent on us. It's to make sure you never need us again.",
    },
    {
      icon: Globe,
      color: 'bg-purple-100 text-purple-600',
      title: 'Access for Everyone',
      body: "Credit cards. Personal loans. Auto refinancing. Business funding. Debt relief. Estate planning. Life insurance. These aren't services reserved for people who already have money. They're tools every family deserves access to. Mesa Group exists to put those tools in your hands, with honest guidance on which ones actually fit your life, and none of the judgment that usually comes with it.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="About Mesa Group Consulting | Our Story, Mission & Team"
        description="Learn about Mesa Group Consulting's story, mission, and the team behind 2,500+ lives changed. Built for families the financial system forgot."
        canonicalUrl="/about"
      />
      <Header />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-block bg-amber-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
            Our Story
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Built for the Families <span className="text-[#f9c65d]">the System Forgot</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Mesa Group exists because too many hardworking people navigate one of the most important systems in their lives completely alone. We built the partner they never had.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            {['2,500+ Lives Changed', '150+ Five-Star Reviews', 'Real Office You Can Visit', 'EN / ES / Punjabi Support'].map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY "MESA"? ──────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Why <span className="text-[#f9c65d]">"Mesa"?</span>
          </h2>
          <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
            <p>
              In most households, there's an unspoken rule. You don't talk about money at the dinner table. Finances stay private. Struggles stay hidden. Pride keeps the conversation closed, and the cycle continues.
            </p>
            <p className="text-xl font-semibold text-gray-900">Mesa means table.</p>
            <p>
              We named this company to challenge that silence. What if families actually sat down and talked about credit? About debt? About building something the next generation could inherit? What if there was someone at that table who understood the struggle and could show you the way forward without judgment?
            </p>
            <p className="text-xl font-bold text-[#f9c65d]">That's what we built.</p>
            <p className="font-semibold text-gray-900">We help people first. Always.</p>
          </div>
        </div>
      </section>

      {/* ── WHERE THIS COMPANY CAME FROM ─────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Where This Company <span className="text-[#f9c65d]">Came From</span>
          </h2>
          <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
            <p>
              Mesa Group was born from a promise. A promise that no family should have to navigate the financial system blind, the way so many families have.
            </p>
            <p>
              Our founder watched his immigrant parents navigate a system no one ever explained to them. Two jobs. Paid their bills. Did everything right. And the system still almost crushed them. He saw the foreclosure notices. The bankruptcy filing. The shame that followed people who worked harder than anyone and still ended up on the wrong side of a number on a report.
            </p>
            <p>
              When he tried to build his own life, the same mistakes followed. Credit completely shot. A business that collapsed. Nearly nothing in the bank. No blueprint. No guidance.
            </p>
            <p className="text-xl font-bold text-red-600">
              But then came the realization that changed everything.
            </p>
            <p className="text-2xl font-bold text-gray-900">
              Bad credit doesn't mean you're irresponsible. It means no one taught you.
            </p>
            <p>
              And if no one taught hardworking immigrants who risked everything to build a life in this country, how many other families were navigating this same system blind?
            </p>
            <p className="text-xl font-bold text-gray-900">
              That's why Mesa Group exists. Not to fix credit scores. Not to push financial products. To be the financial partner those families never had, for credit, for funding, for debt, for protection, for everything that comes with building a life worth passing down.
            </p>
            <p>
              Today, we've helped over 2,500 individuals, families, and businesses transform their financial futures. We've turned denials into approvals. Debt into freedom. Confusion into clarity. And every single client we've helped is now equipped to teach the next generation what no one taught them.
            </p>
            <p className="text-xl font-bold text-green-600">
              That's the real legacy. Not restoring credit. Breaking generational cycles.
            </p>
            <p className="font-semibold text-gray-900">We help people first. Always.</p>
          </div>
        </div>
      </section>

      {/* ── WHAT WE'RE HERE TO DO ─────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            What We're <span className="text-[#f9c65d]">Here to Do</span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            To provide fast, ethical, and empowering financial solutions that help people across all generations and backgrounds take control of their credit, funding, and financial future.
          </p>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              We serve the younger generation so they don't repeat the mistakes their parents made. We serve the older generation because it is never too late to start. And we treat every client who walks through our door, whether they arrive with a 300 or an 800, whether they need credit restoration or business capital or a will for their family, with the same respect, care, and dedication.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT WE STAND ON ─────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            What We <span className="text-[#f9c65d]">Stand On</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
                <div className={`w-14 h-14 ${pillar.color} rounded-xl flex items-center justify-center mb-6`}>
                  <pillar.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{pillar.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP TEAM ──────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The People Behind <span className="text-[#f9c65d]">the Promise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every person on this team shows up for one reason. To help you figure out your best path forward, and stay with you until you get there.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-[#f9c65d]" />
            The Leadership Team
          </h3>

          <div className="space-y-8 mb-16">
            {leadershipTeam.map((member) => (
              <div key={member.name} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                    <p className="text-[#bb9446] font-semibold">{member.role}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-gray-500 bg-white px-3 py-1.5 rounded-full border border-gray-200 self-start">
                    <Globe className="w-3.5 h-3.5" />
                    {member.languages}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>

          {/* Client Success Team */}
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <Users className="w-6 h-6 text-[#f9c65d]" />
            Our Client Success Team
          </h3>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Your Client Success Manager is your dedicated point of contact throughout your journey. They know your file, your goals, and your name, from day one to graduation.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {clientSuccessTeam.map((member) => (
              <div key={member.name} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100 text-center">
                <div className="w-14 h-14 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-gray-900 font-bold text-xl">{member.name.charAt(0)}</span>
                </div>
                <p className="font-bold text-gray-900">{member.name}</p>
                <p className="text-sm text-gray-500 mt-1">Client Success Manager</p>
                <div className="flex items-center justify-center gap-1 mt-2 text-xs text-gray-500">
                  <Globe className="w-3 h-3" />
                  {member.languages}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROOTED IN BAKERSFIELD ─────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Rooted in Bakersfield. <span className="text-[#f9c65d]">Built for Everyone.</span>
          </h2>
          <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
            <p>
              Mesa Group was built in Bakersfield, California, a city often overlooked but full of hardworking families who deserve better financial opportunities. We serve this community in English, Spanish, and Punjabi because financial guidance should never be limited by language.
            </p>
            <p>
              We serve Hispanic and Latino families through <strong>Mesa Financiera</strong>. We serve the Punjabi community through <strong>Chaklo Credit</strong>. We serve first-generation Americans navigating a system no one explained to them. And we serve anyone who walks through our door ready to build something better.
            </p>
            <p className="text-xl font-bold text-gray-900">
              Bad credit doesn't discriminate. Neither do we.
            </p>
          </div>

          <div className="mt-8 flex items-start gap-3 bg-white rounded-xl p-6 border border-gray-200">
            <MapPin className="w-6 h-6 text-[#f9c65d] flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-gray-900">Come Visit Us</p>
              <p className="text-gray-600">5001 California Ave Suite 219, Bakersfield, CA 93309</p>
              <p className="text-gray-500 text-sm mt-1">M–F 9am–7pm · Sat 10am–2pm</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#FFFBEC] to-[#FFECD7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to <span className="text-[#f9c65d]">Start Your Journey?</span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-10 max-w-2xl mx-auto">
            Schedule a free consultation with our team. We'll listen, assess your situation honestly, and show you the best path forward. No pressure. No judgment. Just people who genuinely want to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <CalendlyPopupButton
              text="Schedule My Free Consultation"
              showArrow={true}
              prefillOptions={{ utm: { source: 'about', medium: 'final_cta' } }}
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

          <p className="text-sm text-gray-500">Hablamos Español · Assi Punjabi Bolde Haan</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
