import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Trophy, Star, Calendar, Lock, AlertTriangle, Check, X, BarChart3,
  Search, Lightbulb, MapPin, ChevronDown, Building2, Globe, Phone,
  Shield, Users, FileText, TrendingUp, DollarSign, Clock, Award,
  Home, Car, CreditCard, GraduationCap, Briefcase, Heart, Scale,
  MessageSquare, Mail, CheckCircle2, XCircle, ArrowRight, Zap, Crown, Gem
} from "lucide-react";
import FAQ from "@/components/credit-repair-2/FAQ";
import { CalendlyPopupButton } from '@/components/CalendlyPopupButton';
import mesa360HeroTeam from "@/assets/mesa360-hero-team.jpeg";
import experianLogo from "@/assets/experian-logo.png";
import equifaxLogo from "@/assets/equifax-logo.png";
import transunionLogo from "@/assets/transunion-logo.png";
import { SEO } from '@/components/SEO';
import ContactFormSection from '@/components/ContactFormSection';
import { NewsletterModal } from '@/components/NewsletterModal';

const CreditRestorationV3 = () => {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  const portalUrl = 'https://portal.mesagroupconsulting.com//portal-signUp/signup.jsp?id=LzgrcWJobTEyUXFoejhLbFpJYjVwUT09';

  useEffect(() => {
    const hasSeenNewsletter = sessionStorage.getItem('mesa360_newsletter_shown');
    if (hasSeenNewsletter) return;
    let exitIntentTriggered = false;
    const timeoutId = setTimeout(() => {
      if (!exitIntentTriggered) {
        setIsNewsletterOpen(true);
        sessionStorage.setItem('mesa360_newsletter_shown', 'true');
      }
    }, 10000);
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5 && !exitIntentTriggered && !sessionStorage.getItem('mesa360_newsletter_shown')) {
        exitIntentTriggered = true;
        setIsNewsletterOpen(true);
        sessionStorage.setItem('mesa360_newsletter_shown', 'true');
        clearTimeout(timeoutId);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      <SEO
        title="Credit Repair Services | Mesa360 Credit System™ | Mesa Group Consulting"
        description="Fix bad credit with our Mesa360 Credit System™. Remove inaccurate items, rebuild your score, and transform your finances. 90-day money-back guarantee."
        canonicalUrl="/credit-restoration-v3"
      />
      <Header />

      {/* ============================================ */}
      {/* SECTION 1: HERO — KEPT AS-IS */}
      {/* ============================================ */}
      <section className="bg-gradient-to-br from-white via-amber-50 to-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                MESA360 CREDIT SYSTEM™
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                What Would Your Life Look Like If <span className="text-[#f9c65d]">Bad Credit Wasn't in the Way?</span>
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-[#bb9446] mb-6">
                Bad Credit Doesn't Define You. Let's Prove It.
              </p>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                The Mesa360 Credit System™ combines professional credit restoration with 1-on-1 coaching and a dedicated Client Success Manager who stays with you through the entire journey. You don't have to travel this path alone. We're here to help every step of the way.
              </p>
              <div className="mb-8">
                <div className="inline-flex flex-col items-center">
                  <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-3">
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
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Globe className="w-5 h-5 text-[#f9c65d]" />
                    <span>🇺🇸 English | 🇪🇸 Español | 🇮🇳 Punjabi</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <div className="flex flex-col items-center">
                    <CalendlyPopupButton
                      text="Schedule Your Free Consultation →"
                      className="inline-block bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-lg font-bold px-8 py-4 text-center"
                      showArrow={false}
                      prefillOptions={{ utm: { source: 'credit_repair_page', medium: 'website', campaign: 'hero_cta' } }}
                    />
                    <p className="text-sm text-gray-600 mt-2">Powered by Mesa Group</p>
                  </div>
                  <a
                    href="https://shm.to/yatPKyE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-white text-gray-900 hover:bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-gray-300 text-lg font-bold px-8 py-4 text-center"
                  >
                    Get Free Credit Analysis
                  </a>
                </div>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500"
                >
                  View Pricing & Plans
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-700 text-lg">
                  <strong>Prefer to talk?</strong> Call us now:{" "}
                  <a href="tel:6613103040" className="text-[#bb9446] hover:text-[#f9c65d] font-bold text-xl transition-colors">
                    (661) 310-3040
                  </a>
                </p>
              </div>
            </div>
            <div className="block">
              <img src={mesa360HeroTeam} alt="Mesa Group Capital team in front of client's new home" className="rounded-2xl shadow-2xl" loading="eager" />
              <div className="mt-4 px-2">
                <p className="text-sm text-gray-600 italic leading-relaxed text-center">
                  <span className="text-[#f9c65d] font-semibold not-italic">Real clients</span> with real results, achieving their dream of homeownership through the <span className="font-semibold text-gray-700">Mesa360 Credit System™</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 2B: GHL EMAIL CAPTURE FORM — KEPT AS-IS */}
      {/* ============================================ */}
      <section className="bg-gradient-to-br from-amber-50 to-white py-16 px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-3">
              Over 2,500 Lives Changed.<br /><span className="text-[#f9c65d]">Yours Could Be Next.</span>
            </h2>
            <p className="text-lg text-gray-600">
              Answer a few quick questions, and one of our Client Solutions Advisors will reach out to set you up with your own customized action plan built around your goals.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <iframe
              src="https://link.mesagroupconsulting.com/widget/survey/Y7K7EfnX7ydeGpv4RoIU"
              style={{ border: 'none', width: '100%', minHeight: '520px' }}
              scrolling="no"
              id="Y7K7EfnX7ydeGpv4RoIU"
              title="Credit Repair Assessment"
            />
          </div>
          <p className="text-center text-sm text-gray-500 -mt-6">
            We typically respond within one business day. What you share stays with us.
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 3: EMPATHY — KEPT AS-IS */}
      {/* ============================================ */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-8 text-center">
            Whatever You've Been Through,<br />
            <span className="text-[#f9c65d]">You're in the Right Place Now.</span>
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              A lot of people come to us carrying more than just credit problems. They're carrying the weight of feeling stuck. Of watching opportunities pass them by. Of not knowing who to trust or where to turn.
            </p>
            <p>We get it. And we don't take that lightly.</p>
            <blockquote className="my-8 py-6 px-8 border-l-4 border-[#f9c65d] bg-gray-50 text-center">
              <p className="text-2xl md:text-3xl font-semibold text-gray-800 italic">
                Bad credit doesn't mean you're irresponsible.
              </p>
              <p className="mt-3 text-lg text-gray-600">
                It usually means no one ever taught you how this system works. That changes today.
              </p>
            </blockquote>
            <p>We built Mesa for exactly this moment. For the person who's ready to take that first step and just needs someone to take it with them.</p>
            <p className="font-medium">Maybe you're stuck in the cycle:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Denied for mortgages, car loans, or credit cards because of your score',
                'Stuck paying sky-high interest rates that cost you thousands extra',
                'Collections calls and letters that won\'t stop',
                'Feeling overwhelmed by the dispute process',
                'Tried DIY dispute letters with no results',
                'Burned by "credit restoration" companies that disappeared with your money',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-xl font-semibold text-[#bb9446] pt-4">
              Sound familiar? You're not alone, and there's a proven path forward.
            </p>
            <p className="text-center text-xl font-bold text-[#3E3E3E]">
              That's where Mesa Group's Mesa360 Credit System™ comes in.
            </p>
            <div className="flex justify-center mt-8">
              <button
                onClick={() => scrollToSection('pricing')}
                className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500"
              >
                View Pricing & Plans
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 3B: SMARTCREDIT NOTICE — KEPT AS-IS */}
      {/* ============================================ */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl border-2 border-blue-200 shadow-lg p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">ONE THING WE WANT TO BE UPFRONT ABOUT</p>
                <h3 className="text-xl font-bold text-[#3E3E3E]">All Mesa360 Plans Require an Active Mesa x SmartCredit Subscription</h3>
              </div>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p><strong>$27.99/month, billed directly by SmartCredit. Not by us.</strong></p>
              <p>
                Transparency is one of our core values, so we'd rather tell you this now than have you find out later. Your dedicated Client Success Manager and the Mesa360 Credit System™ use SmartCredit to access your live Experian, Equifax, and TransUnion reports throughout your program. It's what keeps everyone aligned in real time, so nothing gets missed and every dispute is filed with precision.
              </p>
              <p>
                You keep full control of your account. You see everything we see. And beyond your restoration program, SmartCredit delivers genuine value on its own: $1M identity theft insurance, real-time fraud alerts, and all three bureaus in one dashboard.
              </p>
              <p className="font-semibold text-[#3E3E3E]">
                This is us being the partner we promised to be. Honest with you from the very first step.
              </p>
            </div>
            <a href="/credit-monitoring" className="inline-flex items-center gap-2 mt-6 text-blue-600 hover:text-blue-800 font-semibold underline text-sm">
              Learn More About Mesa x SmartCredit →
            </a>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 5: HOW MESA360 ACTUALLY WORKS — NEW per PRD */}
      {/* ============================================ */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-6">
            A System Built Around You. <span className="text-[#f9c65d]">Not the Other Way Around.</span>
          </h2>
          <div className="space-y-5 text-lg text-gray-700 leading-relaxed mb-10">
            <p>
              The Mesa360 Credit System™ wasn't built to process files. It was built to change lives. One client, one strategy, one win at a time.
            </p>
            <p>
              Most programs are built for efficiency. Mesa360 is built for people.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                title: 'One dedicated Client Success Manager. Start to finish.',
                body: 'Your Client Success Manager isn\'t just a point of contact. They\'re your advocate, fully invested in your outcome, knowing your name, your goals, and exactly where you are in your journey every single day.',
              },
              {
                title: 'Financial coaching that stays with you.',
                body: 'We don\'t just work your file and send updates. We teach you how credit actually works so that what we build together lasts long after your program ends. Because real transformation means you never end up back where you started.',
              },
              {
                title: 'A strategy built around your life.',
                body: 'Your credit situation is unique. Your action plan reflects that, built specifically for your profile, your goals, and what matters most to you. No two clients are the same and no two action plans should be either.',
              },
              {
                title: 'Complete visibility throughout your program.',
                body: 'Every 35 days your Client Success Manager sits down with you. What was disputed, what was removed, what\'s in progress, and what\'s coming next. No guessing. No wondering. Just clarity.',
              },
              {
                title: 'Federal law working in your favor.',
                body: 'We leverage FCRA and FDCPA protections, Metro 2 compliance standards, and direct creditor dispute channels, giving your case the legal weight it deserves.',
              },
              {
                title: 'Real legal backing when the system doesn\'t treat you fairly.',
                body: 'When creditors or bureaus step out of line, we bring in licensed consumer protection attorneys. Because you deserve someone who knows how to protect you.',
              },
            ].map(({ title, body }) => (
              <div key={title} className="flex items-start gap-5">
                <div className="w-2 h-2 bg-[#f9c65d] rounded-full flex-shrink-0 mt-3" />
                <div>
                  <p className="font-bold text-[#3E3E3E] text-lg mb-1">{title}</p>
                  <p className="text-gray-700 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            <CalendlyPopupButton
              text="Schedule Your Free Consultation"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-lg font-bold"
              showArrow={true}
              prefillOptions={{ utm: { source: 'credit_repair_page', medium: 'website', campaign: 'how_it_works_cta' } }}
            />
            <a
              href="https://shm.to/yatPKyE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-gray-300 text-gray-900 hover:bg-gray-50 rounded-lg transition-all font-bold text-lg"
            >
              Get Free Credit Analysis <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 6: REALISTIC TIMELINE — NEW per PRD */}
      {/* ============================================ */}
      <section style={{ background: 'linear-gradient(to bottom, #2d2d2d, #1a1a1a, #2d2d2d)' }} className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Your Journey With Us. <span className="text-[#f9c65d]">From Day One to the Life You Deserve.</span>
          </h2>
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            We don't just work your file and send updates. We walk this road with you. Every step, every round, every win. Here's exactly what that looks like.
          </p>

          <div className="space-y-8 mb-12">
            {[
              {
                label: 'DAY 1',
                title: 'Welcome to the Family.',
                body: 'From the moment you enroll, you\'re not a case number. You\'re a person with a story, a goal, and a team that genuinely wants to see you get there. Your Client Solutions Advisor handles your full onboarding and gets your client portal set up so everything is ready from day one. Within 24 hours your file is verified and passed to our dispute team. The work starts immediately, because your time matters.',
              },
              {
                label: 'DAY 1–35',
                title: 'We Go to Work on Your Behalf.',
                body: 'Our dispute team prepares and sends your first round of disputes to the bureaus using advanced FCRA and FDCPA frameworks, Metro 2 compliance challenges, and direct creditor dispute channels. Federal law requires the bureaus to investigate and respond within 30 days. We give it 35 days before your first update. Those extra days ensure every response has been properly processed and nothing gets missed before we sit down with you to review results. Your Client Success Manager personally walks you through everything at that 35-day mark. What moved. What\'s pending. What comes next. You\'ll always know exactly where you stand.',
              },
              {
                label: 'DAY 35–70',
                title: 'We Adapt and Keep Fighting.',
                body: 'Not everything resolves in round one, and that\'s completely normal. Every bureau response gives us new information about your file. We take that intelligence, sharpen your strategy, and go again with a more targeted second round. This is what it looks like when someone is genuinely in your corner. Not just sending letters, but actually fighting for you. Another 35-day cycle begins and your Client Success Manager stays close throughout.',
              },
              {
                label: 'DAY 70+',
                title: 'You Start to See It.',
                body: 'This is where the work becomes visible. Negative items coming off. Your profile getting cleaner. Your score finding room to move. We keep working through rounds, each one more refined than the last, until your file is where it needs to be. We celebrate every win alongside you because your progress is our progress.',
              },
            ].map(({ label, title, body }) => (
              <div key={label} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-[#f9c65d] rounded-full flex items-center justify-center shadow-lg shadow-amber-400/30">
                    <span className="text-gray-900 font-bold text-xs text-center leading-tight px-1">{label}</span>
                  </div>
                </div>
                <div className="pt-2">
                  <p className="text-[#f9c65d] font-bold text-xl mb-2">{title}</p>
                  <p className="text-white/85 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Score Caveat */}
          <div className="bg-amber-400/10 border border-amber-400/40 rounded-2xl p-8 mb-10">
            <h3 className="text-xl font-bold text-amber-300 mb-4">SOMETHING IMPORTANT WE WANT YOU TO KNOW</h3>
            <div className="space-y-4 text-white/85 leading-relaxed">
              <p>
                Sometimes items get removed and the score doesn't move right away. We want you to understand that before it happens, because we never want you to feel like the process isn't working when it actually is.
              </p>
              <p>
                Here's the truth: if positive credit hasn't been built yet, your score may stay flat even while negative items are coming off. That's not a setback. That's just how the system works. And it's exactly why every Mesa360 plan includes 1-on-1 financial coaching, so we're building the positive side of your credit profile at the same time. When those negative items come off, your score will have somewhere to go.
              </p>
              <p>
                We tell you this because we believe you deserve to understand your own financial journey. Not just receive updates about it.
              </p>
            </div>
          </div>

          {/* Concierge Callout */}
          <div className="bg-amber-400/10 border border-amber-400/40 rounded-2xl p-8 mb-10">
            <h3 className="text-lg font-bold text-amber-300 mb-4">YOUR FINANCIAL HOME WHILE WE WORK. MESA FINANCIAL CONCIERGE.</h3>
            <div className="space-y-4 text-white/85 leading-relaxed">
              <p>
                Every Mesa360 client automatically receives access to Mesa Financial Concierge Community tier, included at no additional cost. Because we believe the time spent in your program should never feel like waiting.
              </p>
              <p>Inside, your financial family is ready for you:</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {[
                  'Weekly live group coaching calls with financial experts',
                  'A private community where real answers are always within reach',
                  'A complete financial education library built around where you are right now',
                  'A personalized action plan powered by LevelUpScore technology',
                  'People on the exact same journey who genuinely want to see you win',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-white/85">
                    <ArrowRight className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
              <p>
                This is what sets Mesa apart. While your disputes are working through the system, you're not sitting still. You're learning. You're building. You're growing. Every single week.
              </p>
              <p>
                When you're ready for more personalized support, Mesa Financial Concierge has options designed around your goals. Your Client Success Manager can walk you through what's available whenever you're ready.
              </p>
            </div>
            <a href="/concierge" className="inline-flex items-center gap-2 mt-4 text-amber-400 hover:text-amber-300 font-semibold underline text-sm">
              Learn More About Mesa Financial Concierge →
            </a>
          </div>

          {/* Graduation */}
          <div className="bg-white/5 border border-white/20 rounded-2xl p-8 mb-10">
            <h3 className="text-xl font-bold text-[#f9c65d] mb-4">GRADUATION. THE BEGINNING OF WHAT'S NEXT.</h3>
            <div className="space-y-4 text-white/85 leading-relaxed">
              <p>
                When your file is clean, we don't just say congratulations and close your account. We sit down with you and talk about what's next. Business funding. Home buying preparation. Credit building. Long-term wealth strategy. Whatever the next chapter of your financial life looks like, your Client Success Manager helps you walk into it prepared, confident, and supported.
              </p>
              <p>
                Everything you've built through the Mesa360 Credit System™ is yours to keep. And we'll be right here when you're ready for the next step.
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-white/60 text-sm leading-relaxed mb-10">
            On average, our clients see improvements in the range of 50-150 points depending on their starting profile, the complexity of their situation, and bureau responsiveness. Individual results vary. During your free consultation, your Client Solutions Advisor will give you an honest picture of what to expect for your specific situation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <CalendlyPopupButton
              text="Schedule Your Free Consultation"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg transition-all duration-200 border-2 border-amber-500 text-lg font-bold"
              showArrow={true}
              prefillOptions={{ utm: { source: 'credit_repair_page', medium: 'website', campaign: 'timeline_cta' } }}
            />
            <a
              href="https://shm.to/yatPKyE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-lg transition-all font-bold text-lg"
            >
              Get Free Credit Analysis <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 7: PLAN SELECTOR — MOVED here per PRD */}
      {/* ============================================ */}
      <section className="bg-gradient-to-br from-amber-50 to-yellow-50 py-16 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-4">
              Let's Find the Right <span className="text-[#f9c65d]">Starting Point</span> for You
            </h2>
            <p className="text-lg text-gray-600">
              Every situation is different. Every plan is built around that. Take a look at what resonates with where you are right now. And if you're not sure, that's okay too. We'll figure it out together.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                condition: 'If your report has collections, late payments, or unauthorized inquiries:',
                body: "You're in the right place and you have a clear path forward. Mesa360 Lite was built for exactly where you are. A solid, structured starting point with a dedicated Client Success Manager and coaching included from day one.",
                cta: 'Mesa360 Lite is your starting point.',
                color: 'border-blue-200 bg-blue-50',
                badge: 'Lite',
              },
              {
                condition: "If you're also dealing with charge-offs on top of that:",
                body: "This is one of the most common situations we see, and one of the most manageable with the right strategy. Mesa360 Flex handles everything in Lite plus charge-offs, with accelerated processing and direct creditor disputes built in. There's a reason it's our most popular plan.",
                cta: 'Mesa360 Flex was made for your situation.',
                color: 'border-amber-300 bg-amber-50',
                badge: 'Flex',
              },
              {
                condition: 'If your report includes bankruptcies, repossessions, evictions, student loans, or medical bills:',
                body: "We know this feels heavy. It's okay. You're not alone in this and you're not out of options. Mesa360 Elite is our most comprehensive program, built specifically for complex situations with advanced legal dispute strategies and priority handling from our full team.",
                cta: 'Mesa360 Elite is built for where you are.',
                color: 'border-gray-700 bg-gray-800',
                badge: 'Elite',
                dark: true,
              },
              {
                condition: 'If you and a partner are both looking to rebuild:',
                body: 'Two profiles. One program. One team that shows up for both of you. The Mesa360 Duo Plan was designed for couples and partners who want to build their financial future together, because some journeys are better taken side by side.',
                cta: 'Mesa360 Duo covers both of you under one program.',
                color: 'border-purple-200 bg-purple-50',
                badge: 'Duo',
              },
            ].map(({ condition, body, cta, color, badge, dark }) => (
              <div key={badge} className={`rounded-xl p-6 border-2 ${color}`}>
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${dark ? 'bg-amber-400 text-gray-900' : 'bg-[#f9c65d] text-gray-900'}`}>
                    {badge}
                  </div>
                  <div>
                    <p className={`font-semibold mb-2 ${dark ? 'text-white' : 'text-[#3E3E3E]'}`}>{condition}</p>
                    <p className={`text-sm leading-relaxed mb-2 ${dark ? 'text-gray-300' : 'text-gray-600'}`}>{body}</p>
                    <p className={`text-sm font-bold ${dark ? 'text-amber-400' : 'text-[#bb9446]'}`}>→ {cta}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="rounded-xl p-6 border-2 border-green-200 bg-green-50">
              <p className="font-semibold text-[#3E3E3E] mb-2">If you're not sure where you fall:</p>
              <p className="text-sm text-gray-600 mb-3">This is the most honest answer and we respect it completely. You don't need to figure this out before you talk to us. That's exactly what we're here for. Start with a free consultation and your Client Solutions Advisor will review your situation and tell you exactly where you stand and what makes sense for your goals.</p>
              <CalendlyPopupButton
                text="Schedule Your Free Consultation →"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold px-6 py-3 rounded-lg border-2 border-amber-500 text-sm transition-all"
                showArrow={false}
                prefillOptions={{ utm: { source: 'credit_repair_page', medium: 'website', campaign: 'plan_selector_cta' } }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 8: PRICING & PLANS */}
      {/* ============================================ */}
      <section id="pricing" className="bg-white py-16 md:py-24 px-6 md:px-8 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-4">
              Choose Your <span className="text-[#f9c65d]">Path Forward</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              Every Mesa360 plan includes your dedicated Client Success Manager, 1-on-1 financial coaching, personalized action plan, client portal, and Mesa Financial Concierge Community access. What changes is the complexity of what we work on together.
            </p>
            <div className="inline-block bg-green-50 border-2 border-green-400 rounded-xl px-6 py-4 mb-6 text-left max-w-2xl">
              <p className="font-bold text-green-800 mb-1">🌐 Enroll directly through our website and save on your setup fee.</p>
              <p className="text-sm text-green-700">Our team is always here if you have questions first. But if you're ready to get started, we want to make it as easy as possible.</p>
            </div>
            <p className="text-sm text-gray-500 mb-2">All plans require an active Mesa x SmartCredit subscription ($27.99/month, billed directly by SmartCredit).</p>
            <div className="inline-block bg-amber-50 border border-amber-300 rounded-lg px-5 py-3 text-sm text-amber-800 max-w-2xl">
              <strong>Please note:</strong> Due to state regulations, Mesa Group Consulting is currently unable to provide credit restoration services to residents of Georgia. If you are located in Georgia and need assistance, please <a href="tel:6613103040" className="underline font-semibold">contact us</a> and we will do our best to point you in the right direction.
            </div>
          </div>

          {/* MONTHLY PLANS */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-[#3E3E3E] mb-2">MONTHLY PLANS</h3>
              <p className="text-lg text-gray-600">Build Your Credit While You Invest: Maximum Flexibility for Life's Reality</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Mesa360 Lite */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-amber-300 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-6 h-6 text-amber-500" />
                  <h4 className="text-xl font-bold text-[#3E3E3E]">MESA360 LITE</h4>
                </div>
                <p className="text-sm text-gray-600 mb-4">Your Starting Point</p>
                <div className="mb-2">
                  <span className="text-2xl font-bold text-[#3E3E3E]">$250</span>
                  <span className="text-gray-500"> to start + </span>
                  <span className="text-2xl font-bold text-[#FBBF23]">$149</span>
                  <span className="text-gray-500">/mo</span>
                </div>
                <p className="text-xs text-green-600 font-semibold mb-4">🌐 Online enrollment discount applied</p>
                <p className="text-sm text-gray-600 mb-4">Best for collections, late payments, and inquiries across all three bureaus.</p>
                <div className="space-y-1 mb-4 text-sm">
                  {['Collections', 'Late Payments', 'Inquiries (all 3 bureaus)', 'Disputes to all 3 bureaus', '35-day update cycle + client portal access', 'Dedicated Client Success Manager', '1-on-1 financial coaching', 'Mesa Financial Concierge Community access', 'Ongoing support. New items worked at no additional charge.'].map((item) => (
                    <div key={item} className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>{item}</span></div>
                  ))}
                </div>
                <div className="text-center mb-4">
                  <p className="text-2xl font-bold text-green-600">$0.00 DUE TODAY</p>
                  <p className="text-xs text-gray-500">Risk-Free 3-Day Cancellation Window</p>
                </div>
                <a href={portalUrl} target="_blank" rel="noopener noreferrer" className="block w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold py-3 rounded-lg transition-colors text-center">
                  Get Started with Lite →
                </a>
              </div>

              {/* Mesa360 Flex - Most Popular */}
              <div className="bg-white border-2 border-amber-400 rounded-2xl p-6 relative shadow-xl">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#FBBF23] text-gray-900 text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" /> MOST POPULAR
                </div>
                <div className="flex items-center gap-2 mb-2 mt-2">
                  <Zap className="w-6 h-6 text-amber-500" />
                  <h4 className="text-xl font-bold text-[#3E3E3E]">MESA360 FLEX</h4>
                </div>
                <p className="text-sm text-gray-600 mb-4">The Complete Restoration Package</p>
                <div className="mb-2">
                  <span className="text-2xl font-bold text-[#3E3E3E]">$350</span>
                  <span className="text-gray-500"> to start + </span>
                  <span className="text-2xl font-bold text-[#FBBF23]">$199</span>
                  <span className="text-gray-500">/mo</span>
                </div>
                <p className="text-xs text-green-600 font-semibold mb-4">🌐 Online enrollment discount applied</p>
                <p className="text-sm text-gray-600 mb-4">Best for collections, late payments, charge-offs, and inquiries. The most complete option for most clients.</p>
                <div className="space-y-1 mb-4 text-sm">
                  {['Everything in Lite', 'Charge-offs', 'Direct disputes to creditors and collectors', '35-day update cycle + client portal access', 'Dedicated Client Success Manager', '1-on-1 financial coaching', 'Mesa Financial Concierge Community access', 'Ongoing support. New items worked at no additional charge.'].map((item) => (
                    <div key={item} className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>{item}</span></div>
                  ))}
                </div>
                <div className="text-center mb-4">
                  <p className="text-2xl font-bold text-green-600">$0.00 DUE TODAY</p>
                  <p className="text-xs text-gray-500">Risk-Free 3-Day Cancellation Window</p>
                </div>
                <a href={portalUrl} target="_blank" rel="noopener noreferrer" className="block w-full bg-[#FBBF23] hover:bg-[#E5AC1F] text-gray-900 font-bold py-3 rounded-lg transition-colors text-center">
                  Get Started with Flex →
                </a>
              </div>

              {/* Mesa360 Elite */}
              <div className="bg-gradient-to-br from-[#3E3E3E] to-[#2c2c2c] border-2 border-[#3E3E3E] rounded-2xl p-6 text-white relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-400 text-gray-900 text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                  <Crown className="w-3 h-3" /> PREMIUM
                </div>
                <div className="flex items-center gap-2 mb-2 mt-2">
                  <Crown className="w-6 h-6 text-amber-400" />
                  <h4 className="text-xl font-bold">MESA360 ELITE</h4>
                </div>
                <p className="text-sm text-gray-300 mb-4">For Complex, Heavy Damage</p>
                <div className="mb-2">
                  <span className="text-2xl font-bold">$650</span>
                  <span className="text-gray-400"> to start + </span>
                  <span className="text-2xl font-bold text-amber-400">$299</span>
                  <span className="text-gray-400">/mo</span>
                </div>
                <p className="text-xs text-green-400 font-semibold mb-4">🌐 Online enrollment discount applied</p>
                <p className="text-sm text-gray-300 mb-4">Best for bankruptcies, repossessions, evictions, student loans, and medical bills. Our most advanced program with priority handling and legal team review.</p>
                <div className="space-y-1 mb-4 text-sm">
                  {['Everything in Flex', 'Bankruptcies (Chapter 7/13)', 'Repossessions', 'Evictions', 'Student Loans', 'Medical Bills', 'Priority handling, legal team review', 'Funding profile optimization', '35-day update cycle + client portal access', 'Dedicated Client Success Manager', '1-on-1 financial coaching', 'Mesa Financial Concierge Community access', 'Ongoing support. New items worked at no additional charge.'].map((item) => (
                    <div key={item} className="flex items-start gap-2"><Check className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" /><span>{item}</span></div>
                  ))}
                </div>
                <div className="text-center mb-4">
                  <p className="text-2xl font-bold text-green-400">$0.00 DUE TODAY</p>
                  <p className="text-xs text-gray-400">Risk-Free 3-Day Cancellation Window</p>
                </div>
                <a href={portalUrl} target="_blank" rel="noopener noreferrer" className="block w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold py-3 rounded-lg transition-colors text-center">
                  Get Started with Elite →
                </a>
              </div>

              {/* Mesa360 Duo */}
              <div className="bg-gradient-to-br from-purple-700 to-purple-900 border-2 border-purple-400 rounded-2xl p-6 text-white relative md:col-span-3 max-w-xl mx-auto w-full">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-400 text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                  <Users className="w-3 h-3" /> COUPLES PROGRAM
                </div>
                <div className="flex items-center gap-2 mb-2 mt-2">
                  <Users className="w-6 h-6 text-purple-300" />
                  <h4 className="text-xl font-bold">MESA360 DUO</h4>
                </div>
                <p className="text-sm text-purple-200 mb-1">Two Profiles. One Powerful Partnership.</p>
                <p className="text-sm text-purple-200 mb-4">Built for couples and partners ready to build their financial future together. Two profiles, one program, one team that shows up for both of you.</p>
                <div className="mb-2">
                  <span className="text-2xl font-bold">$700</span>
                  <span className="text-purple-300"> to start + </span>
                  <span className="text-2xl font-bold text-purple-300">$399</span>
                  <span className="text-purple-300">/mo</span>
                </div>
                <p className="text-xs text-green-400 font-semibold mb-4">🌐 Online enrollment discount applied</p>
                <div className="grid sm:grid-cols-2 gap-1 mb-4 text-sm">
                  {['Two full profiles covered under one program', 'Flex-level and Elite-level coverage as needed', 'Same 35-day update cycle for both profiles', 'Dedicated Client Success Manager for both', '1-on-1 financial coaching for both', 'Mesa Financial Concierge Community access', 'Ongoing support. New items worked at no additional charge.'].map((item) => (
                    <div key={item} className="flex items-start gap-2"><Check className="w-4 h-4 text-purple-300 mt-0.5 flex-shrink-0" /><span>{item}</span></div>
                  ))}
                </div>
                <div className="text-center mb-4">
                  <p className="text-2xl font-bold text-green-400">$0.00 DUE TODAY</p>
                  <p className="text-xs text-purple-300">Risk-Free 3-Day Cancellation Window</p>
                </div>
                <a href={portalUrl} target="_blank" rel="noopener noreferrer" className="block w-full bg-purple-400 hover:bg-purple-300 text-white font-bold py-3 rounded-lg transition-colors text-center">
                  Get Started with Duo →
                </a>
              </div>
            </div>

            {/* Custom Options */}
            <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
              <h4 className="font-bold text-[#3E3E3E] mb-2">Custom and Prepaid Options</h4>
              <p className="text-gray-600 text-sm mb-4">Looking for something different? Whether you need a custom payment structure or a prepaid program built around your specific situation, we'd love to talk. Our team will put together an option that actually fits. Your goals, your budget, your timeline.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <CalendlyPopupButton
                  text="Talk to Us About Custom Options →"
                  className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold px-6 py-3 rounded-lg border-2 border-amber-500 text-sm transition-all"
                  showArrow={false}
                  prefillOptions={{ utm: { source: 'credit_repair_page', medium: 'website', campaign: 'custom_options_cta' } }}
                />
                <a href="tel:6613103040" className="inline-flex items-center gap-2 text-[#bb9446] font-semibold hover:underline text-sm">
                  <Phone className="w-4 h-4" /> Or call: (661) 310-3040
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 9: THE GUARANTEE — NEW per PRD */}
      {/* ============================================ */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-6">
              Our Promise to You. <span className="text-green-600">Backed in Writing.</span>
            </h2>
          </div>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-10">
            <p>
              We believe that if we ask you to trust us with something as important as your financial future, we owe you more than good intentions. We owe you a real commitment.
            </p>
            <p className="text-xl font-semibold text-[#3E3E3E]">So here it is.</p>
            <p>
              If we don't remove at least one verifiable negative item from your credit report within 90 days, and you've held up your end of the journey, you get every dollar you paid us back. No runaround. No fine print designed to protect us instead of you. Just a straightforward promise from a team that means it.
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-green-500">
              <p className="font-bold text-[#3E3E3E] mb-3">What we commit to:</p>
              <p className="text-gray-700 leading-relaxed">
                We will work your file with everything we have. Advanced dispute strategies, consistent updates every 35 days, and a dedicated Client Success Manager who stays with you throughout. If your rights are violated by a creditor or bureau, we escalate to licensed attorneys on your behalf. We show up. Every round, every update, every step.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-amber-400">
              <p className="font-bold text-[#3E3E3E] mb-3">What we ask of you:</p>
              <p className="text-gray-700 leading-relaxed">
                Keep your Mesa x SmartCredit subscription active. Stay responsive to your Client Success Manager. Follow the guidance you're given. Avoid adding new negative items during your first 90 days. That's it. We handle everything else.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-400">
              <p className="font-bold text-[#3E3E3E] mb-3">Federal law protects you from day one.</p>
              <p className="text-gray-700 leading-relaxed">
                You have a legally protected 3-day right to cancel for any reason with a full refund. No questions asked. We put this here because you deserve to know it, not because we expect you to use it.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <p className="font-bold text-[#3E3E3E] mb-3">A few honest limitations:</p>
              <p className="text-gray-700 leading-relaxed">
                SmartCredit subscription fees are billed directly by SmartCredit and are outside our guarantee. Items that are accurate, complete, and properly reported under federal law cannot be removed by anyone. We will always be honest with you about what's possible. The guarantee applies when both sides show up. We always will.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyPopupButton
              text="Schedule Your Free Consultation"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg transition-all duration-200 border-2 border-amber-500 text-lg font-bold"
              showArrow={true}
              prefillOptions={{ utm: { source: 'credit_repair_page', medium: 'website', campaign: 'guarantee_cta' } }}
            />
            <a
              href="https://shm.to/yatPKyE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-gray-300 text-gray-900 hover:bg-gray-50 rounded-lg transition-all font-bold text-lg"
            >
              Get Free Credit Analysis <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 10: LEGAL ESCALATION INTRO — NEW per PRD */}
      {/* ============================================ */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Scale className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E]">
              You Have Rights. <span className="text-[#f9c65d]">We Make Sure They're Respected.</span>
            </h2>
          </div>
          <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
            <p>
              One of the things we believe most deeply at Mesa Group is that every person, regardless of their credit score or financial situation, deserves to be treated with fairness and dignity by the financial system.
            </p>
            <p>
              Sometimes that system falls short. Bureaus miss deadlines. Creditors re-report items that were already removed. Collectors overstep their boundaries. When that happens to our clients, we don't file it away and move on. We act.
            </p>
            <p>
              Mesa Group is not a law firm. But we work alongside licensed consumer protection attorneys who specialize in exactly these situations, and we bring them in the moment your rights are at stake.
            </p>
            <p>
              We tell you this not to impress you, but because we want you to know that you are protected here. That's what it means to have a real partner in your corner. Not just someone who works your file. Someone who stands up for you when it matters most.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 10B: WHEN LEGAL ESCALATION HAPPENS — NEW per PRD */}
      {/* ============================================ */}
      <section className="py-16 md:py-24 px-6 md:px-8" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/20 border-2 border-red-500/40 mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              You Have Rights. <span className="text-[#f9c65d]">Most People Just Don't Know It.</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Mesa Group is not a law firm. We work with licensed consumer protection attorneys who act on your behalf when violations occur.
            </p>
          </div>

          <p className="text-white/80 text-lg mb-6">If any of these sound familiar, your rights may have already been violated:</p>
          <div className="space-y-3 mb-10">
            {[
              'A collector called before 8 AM or after 9 PM',
              'A deleted item reappeared on your report without verification',
              'A collector contacted you after you told them to stop',
              'A collector called more than 7 times in 7 days',
              'A collector contacted your family, employer, or discussed your debt with others',
              'A bureau failed to respond within 30 days',
              'False information was reported to the credit bureaus',
            ].map((violation) => (
              <div key={violation} className="flex items-start gap-3 bg-red-900/20 border border-red-500/30 rounded-xl p-4">
                <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-white/90">{violation}</p>
              </div>
            ))}
          </div>

          <div className="bg-green-900/20 border border-green-500/30 rounded-2xl p-8 mb-10">
            <p className="text-white/90 text-lg leading-relaxed">
              Under federal law, qualifying violations may entitle you to up to <strong className="text-green-400">$1,000 per violation</strong>, in addition to removal of inaccurate items. Send your evidence to{' '}
              <a href="mailto:fdcpa@mesagroupconsulting.com" className="text-amber-400 hover:text-amber-300 font-semibold underline">
                fdcpa@mesagroupconsulting.com
              </a>{' '}
              and we'll tell you exactly where you stand.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyPopupButton
              text="Schedule Your Free Consultation"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg transition-all border-2 border-amber-500 text-lg font-bold"
              showArrow={true}
              prefillOptions={{ utm: { source: 'credit_repair_page', medium: 'website', campaign: 'legal_escalation_cta' } }}
            />
            <a
              href="https://shm.to/yatPKyE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-lg transition-all font-bold text-lg"
            >
              Get Free Credit Analysis <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 11: COST OF WAITING — NARRATIVE (NEW per PRD) */}
      {/* ============================================ */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-8">
            The Longer You Wait, <span className="text-[#f9c65d]">the More It Costs the People You Love.</span>
          </h2>
          <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
            <p>
              Every month with damaged credit is a month of paying more than you should. Higher interest rates. Denied applications. Missed opportunities that quietly add up to tens of thousands of dollars over time.
            </p>
            <p>
              But the real cost isn't financial. It's the weight of feeling stuck. Of watching the life you want feel just out of reach. Of wondering if things will ever actually change.
            </p>
            <p className="text-xl font-semibold text-[#3E3E3E]">They can. And they will, with the right people in your corner.</p>
            <p>
              We help people first. That means we'd rather see you start sooner than wait until the cost becomes unbearable. Whatever brought you to this page today, that feeling is telling you something. We think it's worth listening to.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 11B: COST OF WAITING — VISUAL ($126K) */}
      {/* ============================================ */}
      <section className="bg-gray-50 py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-4">
              Bad Credit Costs You <span className="text-red-600">$126,000</span> Over 30 Years. Here's What That Actually Means.
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Every month without action, the gap between where you are and where you want to be grows wider. Here's what that looks like in real numbers.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 text-center">
              <Home className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-2">Higher Mortgage Rates</h3>
              <div className="text-4xl font-bold text-red-600 mb-2">+$87,000</div>
              <p className="text-sm text-gray-600">620 score = 7.2% APR<br />720 score = 6.1% APR<br />On $300K over 30 years</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 text-center">
              <Car className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-2">Car Loan Penalties</h3>
              <div className="text-4xl font-bold text-red-600 mb-2">+$18,000</div>
              <p className="text-sm text-gray-600">Subprime: 14% APR<br />Prime: 6% APR<br />Over 5-year loan</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 text-center">
              <CreditCard className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-2">Credit Card Interest</h3>
              <div className="text-4xl font-bold text-red-600 mb-2">+$21,000</div>
              <p className="text-sm text-gray-600">Bad credit: 24% APR<br />Good credit: 16% APR<br />On $10K over 10 years</p>
            </div>
          </div>
          <div className="bg-[#3E3E3E] rounded-2xl p-8 md:p-12 text-center">
            <p className="text-amber-400 font-semibold mb-2">Total Cost of Bad Credit</p>
            <div className="text-5xl md:text-6xl font-bold text-white mb-6">$126,000+</div>
            <div className="border-t border-white/20 pt-6 mt-6">
              <p className="text-gray-300 mb-2">Mesa360 Credit System™</p>
              <p className="text-3xl font-bold text-amber-400 mb-4">Starting at $149/month</p>
              <p className="text-xl text-white">Your Potential Savings: <span className="text-green-400 font-bold">$100,000+</span></p>
            </div>
            <p className="text-gray-400 mt-4 text-sm italic">This isn't just about your credit score. It's about the life your family deserves, and what it costs every month you wait to protect it.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <CalendlyPopupButton
                text="Schedule Your Free Consultation"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg transition-all border-2 border-amber-500 text-lg font-bold"
                showArrow={true}
                prefillOptions={{ utm: { source: 'credit_repair_page', medium: 'website', campaign: 'cost_of_waiting_cta' } }}
              />
              <a
                href="https://shm.to/yatPKyE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 border-2 border-gray-300 hover:bg-gray-50 rounded-lg transition-all font-bold text-lg"
              >
                Get Free Credit Analysis <ArrowRight className="w-5 h-5 flex-shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 12: TESTIMONIALS */}
      {/* ============================================ */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-4">
              Real People. Real Results. Real <span className="text-[#f9c65d]">Transformation.</span>
            </h2>
            <p className="text-xl text-gray-700">
              Don't take our word for it. Hear from clients who transformed their financial futures with the Mesa360 Credit System™.
            </p>
          </div>

          {/* Stat Badges — updated per PRD */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { stat: '2,500+', label: 'Lives Changed' },
              { stat: '150+', label: 'Five-Star Reviews' },
              { stat: '90-Day', label: 'Guarantee' },
              { stat: '35 Days', label: 'to First Results' },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-[#3e3e3e] mb-2">{stat}</div>
                <p className="text-sm text-gray-600">{label}</p>
              </div>
            ))}
          </div>

          {/* Testimonial Cards — Mario: replace with real verified reviews per Evert's instruction */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                img: '/testimonials/credit-repair/bill-d-bakersfield-ca.jpeg',
                name: 'Bill D.',
                location: 'Bakersfield, CA',
                title: '"From 540 to 695 in 75 Days: I Finally Got My Dream Home"',
                quote: 'I was skeptical after being denied for a mortgage twice. I\'d tried DIY dispute letters with no results. Within 75 days of working with Mesa Group, they removed 6 inaccurate collections and my score increased from 540 to 695. Last month, I closed on my dream home in Bakersfield.',
              },
              {
                img: '/testimonials/credit-repair/carlos-r-kern-county-ca.jpeg',
                name: 'Carlos R.',
                location: 'Kern County, CA',
                title: '"100+ Point Increase in Under 4 Months"',
                quote: 'I came to Mesa Group in the low 500s. Great experience, great communication. Across all three bureaus, we\'re up over 100 points. I was able to get approved for a business loan I\'d been denied for twice before. Believe in the process.',
              },
              {
                img: '/testimonials/credit-repair/david-r-bakersfield-ca.jpeg',
                name: 'David R.',
                location: 'Bakersfield, CA',
                title: '"Tried DIY for 6 Months, Got Nowhere"',
                quote: 'I wasted 6 months trying to do it myself with templates from the internet. The bureaus ignored me. Mesa Group removed 3 items in the first 60 days, items I\'d been fighting on my own for half a year. Wish I\'d hired them sooner.',
              },
              {
                img: '/testimonials/credit-repair/maria-l-ca.jpeg',
                name: 'Maria L.',
                location: 'CA',
                title: '"Transparent Pricing, No Hidden Fees"',
                quote: 'I signed up for the monthly plan. Transparent pricing, no hidden fees. Canceled after 5 months when I hit my goal score (720). Exactly as advertised. No pressure to stay longer than I needed.',
              },
            ].map(({ img, name, location, title, quote }) => (
              <div key={name} className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-xl p-6 shadow-lg">
                <img src={img} alt={name} className="w-16 h-16 rounded-full object-cover mx-auto mb-4" />
                <div className="flex gap-1 mb-4 justify-center">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />)}
                </div>
                <h4 className="text-white font-bold mb-2 text-center">{title}</h4>
                <p className="text-gray-300 text-sm mb-4">"{quote}"</p>
                <p className="text-white/80 text-sm text-center">— {name}, {location}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            Individual results may vary. Testimonials reflect individual client experiences and are not a guarantee of similar outcomes. Results depend on individual circumstances.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <CalendlyPopupButton
              text="Schedule Your Free Consultation"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg transition-all border-2 border-amber-500 text-lg font-bold"
              showArrow={true}
              prefillOptions={{ utm: { source: 'credit_repair_page', medium: 'website', campaign: 'testimonials_cta' } }}
            />
            <a
              href="https://shm.to/yatPKyE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-gray-300 text-gray-900 hover:bg-gray-50 rounded-lg transition-all font-bold text-lg"
            >
              Get Free Credit Analysis <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </a>
          </div>
          <div className="text-center mt-4">
            <button
              onClick={() => scrollToSection('pricing')}
              className="inline-flex items-center gap-2 text-[#bb9446] hover:text-[#f9c65d] font-semibold transition-colors"
            >
              View Pricing & Plans <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </button>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 13: BUILT DIFFERENT. ON PURPOSE. */}
      {/* ============================================ */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-4">
              Built Different. <span className="text-[#f9c65d]">On Purpose.</span>
            </h2>
          </div>
          <div className="space-y-5 text-lg text-gray-700 leading-relaxed mb-10">
            <p>
              The Mesa360 Credit System™ wasn't designed to be the biggest credit restoration program. It was designed to be the <strong>most trusted one.</strong>
            </p>
            <p>
              From the beginning we made a decision that has guided every part of how we operate. <strong>We help people first.</strong> That's the foundation everything else is built on.
            </p>
            <p>
              We believe the right guidance sometimes means pointing you somewhere else. If another path serves you better, we'll tell you that openly and help you get there. Genuine care for someone means putting their outcome above everything else.
            </p>
            <p>
              What that philosophy has built is something rare in this industry. A program where every client has a real person in their corner. A dedicated Client Success Manager who knows your name, your story, and your goals. A coaching program that makes sure what we build together lasts. A trilingual team that communicates without barriers. A real office you can walk into. Legal backing when the system doesn't treat you fairly.
            </p>
            <p>
              Behind every file is a family. A dream. A version of life that feels just out of reach. We never forget that. Not when we're filing disputes. Not when we're reviewing your progress report. Not when we're celebrating your wins alongside you. That's what drives this team every single day, and it's why we'll never stop showing up for the people who trust us with something this important.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyPopupButton
              text="Schedule Your Free Consultation →"
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold px-8 py-4 rounded-lg border-2 border-amber-500 transition-all text-lg"
              showArrow={false}
              prefillOptions={{ utm: { source: 'credit_repair_page', medium: 'website', campaign: 'built_different_cta' } }}
            />
            <a
              href={portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-[#3E3E3E] text-[#3E3E3E] hover:bg-gray-50 font-bold px-8 py-4 rounded-lg transition-all text-lg"
            >
              Get Free Credit Analysis →
            </a>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 14: FAQ */}
      {/* ============================================ */}
      <FAQ />

      {/* ============================================ */}
      {/* SECTION 15: FINAL CTA — NEW per PRD */}
      {/* ============================================ */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#FFFBEC] from-40% to-[#FFECD7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Final CTA */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-10">
              Your Next Chapter Starts With <span className="text-[#f9c65d]">One Simple Step.</span>
            </h2>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              'Mesa360 Credit System™',
              '90-Day Money-Back Guarantee',
              'Nationwide from Bakersfield',
              'Full Legal Team',
              '2,500+ Lives Changed',
              '1-on-1 Financial Coaching',
              'Trilingual Support',
              'Real Office You Can Visit',
            ].map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{badge}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <CalendlyPopupButton
                text="Schedule Your Free Consultation"
                showArrow={true}
                className="inline-flex items-center justify-center gap-2 px-10 py-5 text-xl font-bold text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500"
                prefillOptions={{ utm: { source: 'credit_repair_page', medium: 'website', campaign: 'final_cta' } }}
              />
              <a
                href="https://shm.to/yatPKyE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 text-xl font-bold bg-white border-2 border-gray-300 text-gray-900 hover:bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Get Free Credit Analysis <ArrowRight className="w-5 h-5 flex-shrink-0" />
              </a>
            </div>
            <p className="text-gray-600 mb-3">
              Or call us: <a href="tel:6613103040" className="text-[#bb9446] hover:underline font-semibold">(661) 310-3040</a>
            </p>
            <p className="text-sm text-gray-500">Hablamos Español | Assi Punjabi Bolde Haan</p>
          </div>
        </div>
      </section>

      <ContactFormSection />
      <Footer />

      <NewsletterModal isOpen={isNewsletterOpen} onClose={() => setIsNewsletterOpen(false)} />
    </main>
  );
};

export default CreditRestorationV3;
