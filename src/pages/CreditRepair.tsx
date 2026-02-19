import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Trophy, Star, Calendar, Lock, AlertTriangle, Check, X, BarChart3, Search, Lightbulb, MapPin, ChevronDown, Building2, Globe, Phone, Shield, Users, FileText, TrendingUp, DollarSign, Clock, Award, Home, Car, CreditCard, GraduationCap, Briefcase, Heart, Scale, MessageSquare, Mail, CheckCircle2, XCircle, ArrowRight, Zap, Crown, Gem } from "lucide-react";
import EmotionalCTA1 from "@/components/credit-repair/sections/EmotionalCTA1";
import EmotionalCTA2 from "@/components/credit-repair/sections/EmotionalCTA2";
import EmotionalCTA3 from "@/components/credit-repair/sections/EmotionalCTA3";
import FAQ from "@/components/credit-repair-2/FAQ";
import { CalendlyPopupButton } from '@/components/CalendlyPopupButton';
import kgetLogo from "@/assets/kget-17-logo.png";
import studio17Logo from "@/assets/studio-17-logo.png";
import telemundoLogo from "@/assets/telemundo-logo.png";
import cwLogo from "@/assets/cw-logo.png";
import mesa360HeroImage from "@/assets/mesa360-hero-image.png";
import mesa360HeroTeam from "@/assets/mesa360-hero-team.jpeg";
import experianLogo from "@/assets/experian-logo.png";
import equifaxLogo from "@/assets/equifax-logo.png";
import transunionLogo from "@/assets/transunion-logo.png";
import { SEO } from '@/components/SEO';
import ContactFormSection from '@/components/ContactFormSection';
import { NewsletterModal } from '@/components/NewsletterModal';
const CreditRepair = () => {
  const timelineSectionRef = useRef<HTMLElement>(null);
  const [timelineVisible, setTimelineVisible] = useState(false);
  const [phase1Open, setPhase1Open] = useState(false);
  const [phase2Open, setPhase2Open] = useState(false);
  const [phase3Open, setPhase3Open] = useState(false);
  const [phase4Open, setPhase4Open] = useState(false);
  const [pricingLiteOpen, setPricingLiteOpen] = useState(false);
  const [pricingFlexOpen, setPricingFlexOpen] = useState(false);
  const [pricingEliteOpen, setPricingEliteOpen] = useState(false);
  const [pricingRubyOpen, setPricingRubyOpen] = useState(false);
  const [pricingEmeraldOpen, setPricingEmeraldOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  
  const portalUrl = 'https://portal.mesagroupconsulting.com//portal-signUp/signup.jsp?id=MjI1cm9wbjdDZFc1U1d0REI0NnNJdz09';

  // Newsletter Popup Logic
  useEffect(() => {
    // Check if user has already seen the newsletter popup in this session
    const hasSeenNewsletter = sessionStorage.getItem('mesa360_newsletter_shown');
    
    if (hasSeenNewsletter) {
      return; // Don't show again this session
    }

    let exitIntentTriggered = false; // Track if exit-intent already fired

    // Time-based trigger: Show after 10 seconds
    const timeoutId = setTimeout(() => {
      if (!exitIntentTriggered) {
        setIsNewsletterOpen(true);
        sessionStorage.setItem('mesa360_newsletter_shown', 'true');
      }
    }, 10000);

    // Exit-intent trigger: Show when mouse leaves viewport towards top (close button)
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger once, and only if mouse is moving towards top (trying to close tab)
      if (e.clientY <= 5 && !exitIntentTriggered && !sessionStorage.getItem('mesa360_newsletter_shown')) {
        exitIntentTriggered = true; // Prevent multiple triggers
        setIsNewsletterOpen(true);
        sessionStorage.setItem('mesa360_newsletter_shown', 'true');
        clearTimeout(timeoutId); // Cancel time-based trigger if exit-intent fires first
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Scroll animation for timeline section
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimelineVisible(true);
        }
      });
    }, {
      threshold: 0.2
    });
    if (timelineSectionRef.current) {
      observer.observe(timelineSectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <main className="min-h-screen">
      <SEO 
        title="Credit Repair Services | Mesa360 Credit System™ | Mesa Group Consulting"
        description="Fix bad credit in 45-90 days with our Mesa360 Credit System™. Remove inaccurate items, rebuild your score, and transform your finances. 90-day money-back guarantee."
        canonicalUrl="/credit-repair"
      />
      <Header />
      
      {/* ============================================ */}
      {/* SECTION 1: HERO */}
      {/* ============================================ */}
      <section className="bg-gradient-to-br from-white via-amber-50 to-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT COLUMN - Content */}
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                MESA360 CREDIT SYSTEM™
              </div>

              {/* H1 Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Stuck with Bad Credit? Our <span className="text-[#f9c65d]">Mesa360 Credit System™</span> Can Help You Fix It.
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                Remove inaccurate items from your credit report in 45-90 days, plus get 1-on-1 coaching to rebuild your credit and achieve your financial goals. This isn't just credit restoration. It's a <strong>complete financial transformation program</strong> powered by our proven Mesa360 Credit System™.
              </p>

              {/* Trust Bar */}
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

              {/* Primary CTA Buttons */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <div className="flex flex-col items-center">
                    <CalendlyPopupButton
                      text="Schedule Your Free Consultation →"
                      className="inline-block bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-lg font-bold px-8 py-4 text-center"
                      showArrow={false}
                      prefillOptions={{
                        utm: { source: 'credit_repair_page', medium: 'website', campaign: 'hero_cta' }
                      }}
                    />
                    <p className="text-sm text-gray-600 mt-2">Powered by Mesa Group</p>
                  </div>
                  <a 
                    href="https://shm.to/yatPKyE" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center bg-white text-gray-900 hover:bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-gray-300 text-lg font-bold px-8 py-4 text-center mt-0"
                  >
                    Get Free Credit Analysis
                  </a>
                </div>
                
                {/* Full-width View Pricing button */}
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500"
                >
                  View Pricing & Plans
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Phone Number CTA */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-700 text-lg">
                  <strong>Prefer to talk?</strong> Call us now:{" "}
                  <a 
                    href="tel:6613103040" 
                    className="text-[#bb9446] hover:text-[#f9c65d] font-bold text-xl transition-colors"
                  >
                    (661) 310-3040
                  </a>
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN - Hero Image */}
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
      {/* SECTION 2: AS SEEN ON MEDIA LOGOS - REMOVED PER EVERT/STEVE MEETING */}
      {/* ============================================ */}

      {/* ============================================ */}
      {/* SECTION 3: THE PROBLEM (Empathy + Acknowledgment) */}
      {/* ============================================ */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-8 text-center">
            We Know You've Been Promised<br />
            <span className="text-[#f9c65d]">Quick Fixes</span> Before.
          </h2>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              You've probably seen ads promising to "erase bad credit in 30 days" or "guaranteed 100-point increases." Here's the truth: <strong>those promises are not only unrealistic, they may violate federal law.</strong>
            </p>

            <blockquote className="my-8 py-6 px-8 border-l-4 border-[#f9c65d] bg-gray-50 text-center">
              <p className="text-2xl md:text-3xl font-semibold text-gray-800 italic">
                Bad credit doesn't define you.
              </p>
              <p className="mt-3 text-lg text-gray-600">
                It's just a chapter in your financial story. And with the right strategy, it's a chapter you can rewrite.
              </p>
            </blockquote>

            <p className="font-medium">Maybe you're stuck in the cycle:</p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span>Denied for mortgages, car loans, or credit cards because of your score</span>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span>Stuck paying sky-high interest rates that cost you thousands extra</span>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span>Collections calls and letters that won't stop</span>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span>Feeling overwhelmed by the dispute process</span>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span>Tried DIY dispute letters with no results</span>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span>Burned by "credit restoration" companies that disappeared with your money</span>
              </div>
            </div>

            <p className="text-center text-xl font-semibold text-[#bb9446] pt-4">
              Sound familiar? You're not alone, and there's a proven path forward.
            </p>
            <p className="text-center text-xl font-bold text-[#3E3E3E]">
              That's where Mesa Group's Mesa360 Credit System™ comes in.
            </p>

            {/* View Pricing CTA Button */}
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
      {/* SECTION 4A: Mesa360 Credit System Hero */}
      {/* ============================================ */}
      <section id="how-it-works" className="relative py-20 md:py-28 px-6 md:px-8 bg-cover bg-center bg-fixed" style={{
      backgroundImage: `url(${mesa360HeroImage})`
    }}>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            The Mesa360 Credit System™: <span className="text-[#f9c65d]">Your Complete Financial Transformation Blueprint</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Here's what makes us different: We don't just erase bad marks and disappear. We walk beside you through the entire journey, from breaking free of the mistakes holding you back, to building the financial foundation that changes everything, to positioning you for opportunities you thought were out of reach.
          </p>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mt-4">
            This isn't a service. It's a partnership. It's a transformation. It's your second chance, done right.
          </p>

          <div className="max-w-2xl mx-auto space-y-4 mt-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CalendlyPopupButton 
                text="Schedule Your Free Consultation"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-lg font-bold"
                showArrow={true}
                prefillOptions={{
                  utm: { source: 'credit_repair_page', medium: 'website', campaign: 'mesa360_section_cta' }
                }}
              />
              <a 
                href={portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-lg transition-all duration-200 text-lg font-bold"
              >
                Get Free Credit Analysis <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            
            {/* Full-width View Pricing button */}
            <button
              onClick={() => scrollToSection('pricing')}
              className="w-full inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500"
            >
              View Pricing & Plans
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 4B: 3-Step Process Cards */}
      {/* ============================================ */}
      <section className="bg-gradient-to-br from-gray-50 to-amber-50 py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">

          {/* 4-Phase Process - Collapsible */}
          <div className="space-y-6 mb-16">
            {/* PHASE 1: BREAK DOWN THE BARRIERS */}
            <div className="bg-white rounded-2xl shadow-xl border-t-4 border-amber-500">
              <button
                onClick={() => setPhase1Open(!phase1Open)}
                className="w-full flex items-center justify-between p-8 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Search className="w-8 h-8 text-[#f9c65d]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#f9c65d] mb-1">PHASE 1</div>
                    <h3 className="text-2xl font-bold text-[#3E3E3E]">BREAK DOWN THE BARRIERS</h3>
                    <p className="text-gray-600 italic text-sm">What's Really Holding You Back</p>
                  </div>
                </div>
                <ChevronDown className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform ${phase1Open ? 'rotate-180' : ''}`} />
              </button>
              
              {phase1Open && (
                <div className="px-8 pb-8 space-y-4 text-sm text-gray-700">
                <p>Before we can move forward, we need to understand what's anchoring you to the past. Not just the obvious stuff, but the hidden damage, the errors, the items that shouldn't even be there.</p>
                
                <div>
                  <p className="font-bold mb-2">Deep Credit Forensics</p>
                  <p>We pull your credit from all three bureaus (Experian, Equifax, TransUnion) and perform a forensic analysis. Not a 5-minute glance. A real investigation.</p>
                </div>
                
                <div>
                  <p className="font-bold mb-2">What We're Looking For:</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Collections that aren't yours or can't be verified</li>
                    <li>• Late payments reported incorrectly (wrong dates, wrong amounts)</li>
                    <li>• Charge-offs missing required documentation</li>
                    <li>• Bankruptcies that should have aged off years ago</li>
                    <li>• Inquiries you never authorized</li>
                    <li>• Accounts reporting wrong balances or fabricated payment history</li>
                    <li>• Identity theft red flags hiding in plain sight</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-bold mb-2">The Truth Moment:</p>
                  <p>Most people discover 3-7 items on their report that are either completely inaccurate or can't be legally verified. You're not asking for favors. You're demanding accuracy. That's your right under federal law.</p>
                </div>
                
                <div>
                  <p className="font-bold mb-2">What You Get:</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Free 3-Bureau Credit Analysis (normally $50+ value)</li>
                    <li>• Written breakdown of every negative item, and whether it's disputable</li>
                    <li>• Honest assessment of your timeline and what's realistic</li>
                    <li>• Custom dispute strategy built for YOUR situation, not a template</li>
                  </ul>
                </div>
                </div>
              )}
            </div>

            {/* PHASE 2: REPAIR WHAT'S BROKEN */}
            <div className="bg-white rounded-2xl shadow-xl border-t-4 border-orange-500">
              <button
                onClick={() => setPhase2Open(!phase2Open)}
                className="w-full flex items-center justify-between p-8 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FileText className="w-8 h-8 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-orange-600 mb-1">PHASE 2</div>
                    <h3 className="text-2xl font-bold text-[#3E3E3E]">REPAIR WHAT'S BROKEN</h3>
                    <p className="text-gray-600 italic text-sm">Removing the Weight You've Been Carrying</p>
                  </div>
                </div>
                <ChevronDown className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform ${phase2Open ? 'rotate-180' : ''}`} />
              </button>
              
              {phase2Open && (
                <div className="px-8 pb-8 space-y-4 text-sm text-gray-700">
                <p>Now the real work begins. We don't send generic letters. We don't use offshore call centers. We don't "set it and forget it."</p>
                
                <p>Your dedicated account manager, a real person who knows your name, your story, your goals, builds a custom dispute strategy based on FCRA/FDCPA law, your unique credit profile, and the specific violations we found.</p>
                
                <div>
                  <p className="font-bold mb-2">Our Arsenal of Advanced Methods:</p>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Direct Digital Uploads</strong> to all 3 bureaus (faster than mail, harder to ignore)</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Experian Rapid Inquiry Removal</strong> (proprietary access most companies don't have)</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Direct Creditor & Collector Disputes</strong> (going straight to the source)</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>CFPB Complaints</strong> (when bureaus stonewall you, we escalate to federal oversight)</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Metro 2 Challenges</strong> (advanced formatting disputes for complex items)</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Legal Team Escalation</strong> (when they violate FCRA, we bring in the attorneys)</span></li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-bold mb-2">We Handle Everything:</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>• All communication with bureaus and creditors</li>
                    <li>• All follow-ups, re-disputes, escalations</li>
                    <li>• All documentation, tracking, and compliance</li>
                    <li>• Every 35 days, you get a detailed progress update in your client portal</li>
                  </ul>
                </div>
                
                <p className="font-semibold text-gray-800">You don't lift a finger. You just watch the progress.</p>
                </div>
              )}
            </div>

            {/* PHASE 3: BUILD YOUR NEW FOUNDATION */}
            <div className="bg-white rounded-2xl shadow-xl border-t-4 border-green-500">
              <button
                onClick={() => setPhase3Open(!phase3Open)}
                className="w-full flex items-center justify-between p-8 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-green-600 mb-1">PHASE 3</div>
                    <h3 className="text-2xl font-bold text-[#3E3E3E]">BUILD YOUR NEW FOUNDATION</h3>
                    <p className="text-gray-600 italic text-sm">Learning to Win Long-Term</p>
                  </div>
                </div>
                <ChevronDown className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform ${phase3Open ? 'rotate-180' : ''}`} />
              </button>
              
              {phase3Open && (
                <div className="px-8 pb-8 space-y-4 text-sm text-gray-700">
                <p>Here's where most credit restoration companies fail you: they remove the bad stuff, take your money, and ghost you. Then 6 months later, you're back where you started because nobody taught you how to actually BUILD credit.</p>
                
                <p className="font-semibold">Not here. Not with Mesa Group Consulting.</p>
                
                <div>
                  <p className="font-bold mb-2">1-on-1 Financial Coaching (Included in Every Plan)</p>
                  <p>Your account manager doesn't just file disputes. They teach you the game.</p>
                </div>
                
                <div>
                  <p className="font-bold mb-2">You'll Master:</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>• <span className="font-semibold">Credit Utilization Mastery</span> – How to use cards without hurting your score (it's not just "keep it under 30%")</li>
                    <li>• <span className="font-semibold">Strategic Application Timing</span> – When to apply for new credit and when to WAIT</li>
                    <li>• <span className="font-semibold">Positive Payment History Building</span> – Building good credit while we remove the bad</li>
                    <li>• <span className="font-semibold">Credit Mix Strategy</span> – Understanding why account diversity matters (and how to build it safely)</li>
                    <li>• <span className="font-semibold">Long-Term Protection</span> – Avoiding the traps that got you here in the first place</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-bold mb-2">Monthly Strategy Calls:</p>
                  <p className="mb-2">Every 35 days, you're not just getting a "here's what got deleted" email. You're getting on the phone with your account manager to:</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Review what changed (and why)</li>
                    <li>• Adjust strategy based on results</li>
                    <li>• Answer questions about next steps</li>
                    <li>• Plan for major financial moves (buying a car, applying for a mortgage, etc.)</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-bold mb-2">Customized Action Plan:</p>
                  <p className="mb-2">No cookie-cutter templates. No "here's what we tell everyone." Your roadmap is built for YOUR goals:</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Trying to buy a house in 6 months? We structure around that.</li>
                    <li>• Need business funding? We position you for that.</li>
                    <li>• Just want financial peace? We focus on stability.</li>
                  </ul>
                </div>
                </div>
              )}
            </div>

            {/* PHASE 4: OPTIMIZE FOR MAXIMUM OPPORTUNITY */}
            <div className="bg-white rounded-2xl shadow-xl border-t-4 border-blue-500">
              <button
                onClick={() => setPhase4Open(!phase4Open)}
                className="w-full flex items-center justify-between p-8 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-blue-600 mb-1">PHASE 4</div>
                    <h3 className="text-2xl font-bold text-[#3E3E3E]">OPTIMIZE FOR MAXIMUM OPPORTUNITY</h3>
                    <p className="text-gray-600 italic text-sm">Positioning You to Win</p>
                  </div>
                </div>
                <ChevronDown className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform ${phase4Open ? 'rotate-180' : ''}`} />
              </button>
              
              {phase4Open && (
                <div className="px-8 pb-8 space-y-4 text-sm text-gray-700">
                <p>We don't just repair your credit. We optimize your entire financial profile so when opportunity knocks, you're ready to answer.</p>
                
                <div>
                  <p className="font-bold mb-2">Funding Profile Optimization</p>
                  <p className="mb-2">We help you understand:</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>• How lenders actually evaluate your profile (it's more than just your score)</li>
                    <li>• Which accounts to open (and which to avoid)</li>
                    <li>• How to position yourself for maximum approval odds</li>
                    <li>• When to apply for mortgages, business funding, loans</li>
                    <li>• How to leverage good credit for wealth building</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-bold mb-2">Strategic Credit Building</p>
                  <p>Learn which tradelines add value, which hurt you, and how to build strategically, not randomly.</p>
                </div>
                
                <div>
                  <p className="font-bold mb-2">Exit Strategy & Life After Restoration</p>
                  <p className="mb-2">When you graduate from our program, you don't just leave with a better score. You leave with:</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Complete understanding of how to maintain it</li>
                    <li>• Knowledge of when to refinance high-interest debt</li>
                    <li>• A plan to leverage your improved credit for financial growth</li>
                    <li>• Confidence that you'll never need credit restoration again</li>
                  </ul>
                </div>
                </div>
              )}
            </div>
          </div>

          {/* Free Credit Consultation CTA after Phases */}
          <div className="text-center my-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your <span className="text-[#f9c65d]">Credit & Financial Future?</span>
            </h3>
            <a 
              href={portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold text-xl px-10 py-5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500"
            >
              Free Credit Consultation
              <ArrowRight className="w-6 h-6" />
            </a>
            <p className="text-gray-600 mt-4">90-Day Money-Back Guarantee | Start Your Journey Today</p>
          </div>

          {/* Why It Works */}
          <div className="bg-[#3E3E3E] rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">WHY THE <span className="text-[#f9c65d]">MESA360 CREDIT SYSTEM™</span> ACTUALLY WORKS</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center md:text-left">
                <Zap className="w-10 h-10 text-amber-400 mx-auto md:mx-0 mb-3" />
                <p className="font-bold text-white text-lg mb-2">It's Comprehensive</p>
                <p className="text-gray-300">We don't just dispute items. We educate you, support you, and coach you through total financial transformation.</p>
              </div>
              <div className="text-center md:text-left">
                <Users className="w-10 h-10 text-amber-400 mx-auto md:mx-0 mb-3" />
                <p className="font-bold text-white text-lg mb-2">It's Personalized</p>
                <p className="text-gray-300">Your credit situation is unique. Your strategy should be too. No generic templates. No one-size-fits-all.</p>
              </div>
              <div className="text-center md:text-left">
                <Award className="w-10 h-10 text-amber-400 mx-auto md:mx-0 mb-3" />
                <p className="font-bold text-white text-lg mb-2">It's Proven</p>
                <ul className="text-gray-300 space-y-1">
                  <li>• 2,500+ clients nationwide</li>
                  <li>• 150+ five-star reviews</li>
                  <li>• 83-point average score increase</li>
                  <li>• Real results you can verify</li>
                </ul>
              </div>
              <div className="text-center md:text-left">
                <Shield className="w-10 h-10 text-amber-400 mx-auto md:mx-0 mb-3" />
                <p className="font-bold text-white text-lg mb-2">It's Legal</p>
                <p className="text-gray-300">We follow FCRA/FDCPA regulations to the letter. No shady tactics. No gray areas. No putting you at risk.</p>
              </div>
              <div className="text-center md:text-left lg:col-span-2">
                <Scale className="w-10 h-10 text-amber-400 mx-auto md:mx-0 mb-3" />
                <p className="font-bold text-white text-lg mb-2">It's Backed by Real Legal Power</p>
                <p className="text-gray-300">When creditors or bureaus violate your rights, we don't back down. We escalate to our legal team, real attorneys who've recovered thousands in settlements for clients whose rights were violated.</p>
              </div>
            </div>

            {/* View Pricing CTA inside Why It Works */}
            <div className="text-center mt-10">
              <button
                onClick={() => scrollToSection('pricing')}
                className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500"
              >
                View Pricing & Plans
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Timeline Disclosure */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-8">
            <p className="text-sm text-gray-700">
              <strong>Important:</strong> Legitimate credit restoration takes time. While we cannot guarantee specific results, most clients see measurable improvements within 45-90 days. Individual timelines vary based on the complexity of your credit situation and credit bureau responsiveness. The bureaus have 30 days to investigate each dispute, and most items require 1-2 dispute cycles to resolve.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CONDENSED PRICING CARDS - Early Preview */}
      {/* ============================================ */}
      <section className="bg-white py-12 md:py-16 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your <span className="text-[#f9c65d]">Investment Path</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three monthly plans and two prepaid options. All include the complete Mesa360 Credit System™.
            </p>
          </div>

          {/* Monthly Plans Heading */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">MONTHLY PLANS</h3>
            <p className="text-gray-600">Maximum flexibility - cancel anytime after 90 days</p>
          </div>

          {/* Condensed Collapsible Monthly Cards */}
          <div className="space-y-4 mb-12">
            {/* Mesa360 Lite - Collapsible */}
            <div className="bg-white border-2 border-gray-200 rounded-xl shadow-sm hover:border-amber-300 transition-colors">
              <button
                onClick={() => setPricingLiteOpen(!pricingLiteOpen)}
                className="w-full p-6 text-left"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-5 h-5 text-amber-500" />
                      <h4 className="text-lg font-bold text-gray-900">MESA360 LITE</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Your Gateway to Financial Freedom</p>
                    <div className="mb-3">
                      <span className="text-2xl font-bold text-gray-900">$350</span>
                      <span className="text-gray-500"> initial + </span>
                      <span className="text-2xl font-bold text-[#FBBF23]">$149</span>
                      <span className="text-gray-500">/mo</span>
                    </div>
                    <p className={`text-sm ${pricingLiteOpen ? 'text-gray-700' : 'text-gray-400'} font-semibold flex items-center gap-2`}>
                      What's Included
                      {!pricingLiteOpen && <span className="text-xs text-gray-400">(click to expand)</span>}
                    </p>
                  </div>
                  <ChevronDown className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform ${pricingLiteOpen ? 'rotate-180' : ''}`} />
                </div>
              </button>
              
              {pricingLiteOpen && (
                <div className="px-6 pb-6 space-y-3 border-t border-gray-100 pt-4">
                  <div className="space-y-1 text-sm">
                    <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Collections, Late Payments, Inquiries</span></div>
                    <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>3-Bureau Digital Filing</span></div>
                    <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Dedicated Account Manager</span></div>
                    <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>1-on-1 Financial Coaching</span></div>
                    <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Monthly Progress Tracking</span></div>
                  </div>
                  <a href={portalUrl} target="_blank" rel="noopener noreferrer" className="block w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold py-3 rounded-lg transition-colors text-center mt-4">
                    Choose Mesa360 Lite
                  </a>
                </div>
              )}
            </div>

            {/* Mesa360 Flex - Collapsible */}
            <div className="bg-white border-2 border-amber-400 rounded-xl shadow-md relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#FBBF23] text-gray-900 text-xs font-bold px-4 py-1 rounded-full">
                ⭐ MOST POPULAR
              </div>
              <button
                onClick={() => setPricingFlexOpen(!pricingFlexOpen)}
                className="w-full p-6 text-left mt-2"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-5 h-5 text-amber-500" />
                      <h4 className="text-lg font-bold text-gray-900">MESA360 FLEX</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">The Complete Transformation Package</p>
                    <div className="mb-3">
                      <span className="text-2xl font-bold text-gray-900">$500</span>
                      <span className="text-gray-500"> initial + </span>
                      <span className="text-2xl font-bold text-[#FBBF23]">$199</span>
                      <span className="text-gray-500">/mo</span>
                    </div>
                    <p className={`text-sm ${pricingFlexOpen ? 'text-gray-700' : 'text-gray-400'} font-semibold flex items-center gap-2`}>
                      What's Included
                      {!pricingFlexOpen && <span className="text-xs text-gray-400">(click to expand)</span>}
                    </p>
                  </div>
                  <ChevronDown className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform ${pricingFlexOpen ? 'rotate-180' : ''}`} />
                </div>
              </button>
              
              {pricingFlexOpen && (
                <div className="px-6 pb-6 space-y-3 border-t border-gray-100 pt-4">
                  <div className="space-y-1 text-sm">
                    <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>All Lite features</span></div>
                    <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Charge-Offs</span></div>
                    <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Priority Bureau Access</span></div>
                    <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Direct Creditor Disputes</span></div>
                    <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Federal Escalation (CFPB)</span></div>
                  </div>
                  <a href={portalUrl} target="_blank" rel="noopener noreferrer" className="block w-full bg-[#FBBF23] hover:bg-[#E5AC1F] text-gray-900 font-bold py-3 rounded-lg transition-colors text-center mt-4">
                    Choose Mesa360 Flex
                  </a>
                </div>
              )}
            </div>

            {/* Mesa360 Elite - Collapsible */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 rounded-xl shadow-lg relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-400 text-gray-900 text-xs font-bold px-4 py-1 rounded-full">
                👑 PREMIUM
              </div>
              <button
                onClick={() => setPricingEliteOpen(!pricingEliteOpen)}
                className="w-full p-6 text-left mt-2"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Crown className="w-5 h-5 text-amber-400" />
                      <h4 className="text-lg font-bold text-white">MESA360 ELITE</h4>
                    </div>
                    <p className="text-sm text-gray-300 mb-2">When You've Got the Heavy Stuff</p>
                    <div className="mb-3">
                      <span className="text-2xl font-bold text-white">$800</span>
                      <span className="text-gray-400"> initial + </span>
                      <span className="text-2xl font-bold text-amber-400">$299</span>
                      <span className="text-gray-400">/mo</span>
                    </div>
                    <p className={`text-sm ${pricingEliteOpen ? 'text-gray-200' : 'text-gray-500'} font-semibold flex items-center gap-2`}>
                      What's Included
                      {!pricingEliteOpen && <span className="text-xs text-gray-500">(click to expand)</span>}
                    </p>
                  </div>
                  <ChevronDown className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform ${pricingEliteOpen ? 'rotate-180' : ''}`} />
                </div>
              </button>
              
              {pricingEliteOpen && (
                <div className="px-6 pb-6 space-y-3 border-t border-gray-700 pt-4">
                  <div className="space-y-1 text-sm text-gray-300">
                    <div className="flex items-start gap-2"><Check className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" /><span>All Flex features</span></div>
                    <div className="flex items-start gap-2"><Check className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" /><span>Bankruptcies, Repossessions, Evictions</span></div>
                    <div className="flex items-start gap-2"><Check className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" /><span>Student Loans & Medical Bills</span></div>
                    <div className="flex items-start gap-2"><Check className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" /><span>Advanced Legal Disputes</span></div>
                    <div className="flex items-start gap-2"><Check className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" /><span>Funding Profile Optimization</span></div>
                  </div>
                  <a href={portalUrl} target="_blank" rel="noopener noreferrer" className="block w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold py-3 rounded-lg transition-colors text-center mt-4">
                    Choose Mesa360 Elite
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* 9-Month Prepaid Plans Heading */}
          <div className="mb-6 mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-2">9-MONTH PREPAID PLANS</h3>
            <p className="text-gray-600">Pay once, save up to $1,691 - maximum commitment, maximum savings</p>
          </div>

          {/* Condensed Collapsible Prepaid Cards */}
          <div className="space-y-4">
            {/* Ruby Plan - Collapsible */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200 rounded-xl shadow-sm">
              <button
                onClick={() => setPricingRubyOpen(!pricingRubyOpen)}
                className="w-full p-6 text-left"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Gem className="w-5 h-5 text-red-500" />
                      <h4 className="text-lg font-bold text-gray-900">RUBY PLAN</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">9-Month Flex - Pay Once</p>
                    <div className="mb-3">
                      <span className="text-3xl font-bold text-gray-900">$2,291</span>
                      <span className="text-gray-500 text-sm"> one-time payment</span>
                    </div>
                    <p className="text-sm font-semibold text-green-600 mb-2">Save $791 vs. Monthly Flex</p>
                    <p className={`text-sm ${pricingRubyOpen ? 'text-gray-700' : 'text-gray-400'} font-semibold flex items-center gap-2`}>
                      What's Included
                      {!pricingRubyOpen && <span className="text-xs text-gray-400">(click to expand)</span>}
                    </p>
                  </div>
                  <ChevronDown className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform ${pricingRubyOpen ? 'rotate-180' : ''}`} />
                </div>
              </button>
              
              {pricingRubyOpen && (
                <div className="px-6 pb-6 space-y-3 border-t border-red-200 pt-4">
                  <div className="space-y-1 text-sm">
                    <p className="font-semibold text-gray-900 mb-2">All Mesa360 Flex features for 9 months:</p>
                    <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Collections, Late Payments, Charge-Offs, Inquiries</span></div>
                    <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Priority Bureau Access + Accelerated Processing</span></div>
                    <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Direct Creditor & Collector Disputes</span></div>
                    <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Federal Escalation Protocol (CFPB)</span></div>
                    <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Dedicated Account Manager + 1-on-1 Coaching</span></div>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-3">
                    <p className="text-sm font-semibold text-green-800">💰 Save $791 compared to paying monthly</p>
                  </div>
                  <a href={portalUrl} target="_blank" rel="noopener noreferrer" className="block w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg transition-colors text-center mt-4">
                    Choose Ruby Plan
                  </a>
                </div>
              )}
            </div>

            {/* Emerald Plan - Collapsible */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-300 rounded-xl shadow-sm">
              <button
                onClick={() => setPricingEmeraldOpen(!pricingEmeraldOpen)}
                className="w-full p-6 text-left"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Gem className="w-5 h-5 text-emerald-600" />
                      <h4 className="text-lg font-bold text-gray-900">EMERALD PLAN</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">9-Month Elite - Maximum Savings</p>
                    <div className="mb-3">
                      <span className="text-3xl font-bold text-gray-900">$4,001</span>
                      <span className="text-gray-500 text-sm"> one-time payment</span>
                    </div>
                    <p className="text-sm font-semibold text-green-600 mb-2">Save $1,691 vs. Monthly Elite</p>
                    <p className={`text-sm ${pricingEmeraldOpen ? 'text-gray-700' : 'text-gray-400'} font-semibold flex items-center gap-2`}>
                      What's Included
                      {!pricingEmeraldOpen && <span className="text-xs text-gray-400">(click to expand)</span>}
                    </p>
                  </div>
                  <ChevronDown className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform ${pricingEmeraldOpen ? 'rotate-180' : ''}`} />
                </div>
              </button>
              
              {pricingEmeraldOpen && (
                <div className="px-6 pb-6 space-y-3 border-t border-emerald-200 pt-4">
                  <div className="space-y-1 text-sm">
                    <p className="font-semibold text-gray-900 mb-2">All Mesa360 Elite features for 9 months:</p>
                    <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Everything in Flex PLUS Bankruptcies</span></div>
                    <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Repossessions, Evictions</span></div>
                    <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Student Loans & Medical Bills</span></div>
                    <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Advanced Legal Disputes + Priority Handling</span></div>
                    <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Funding Profile Optimization</span></div>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-3">
                    <p className="text-sm font-semibold text-green-800">💰 Save $1,691 compared to paying monthly</p>
                  </div>
                  <a href={portalUrl} target="_blank" rel="noopener noreferrer" className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg transition-colors text-center mt-4">
                    Choose Emerald Plan
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* View Full Pricing CTA */}
          <div className="text-center mt-10">
            <button
              onClick={() => scrollToSection('pricing')}
              className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold text-base px-6 py-3 rounded-lg transition-colors border border-gray-300"
            >
              View Full Pricing Details
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-sm text-gray-500 mt-2">See complete feature breakdown and side-by-side comparison</p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 4C: REALISTIC TIMELINE & EXPECTATIONS */}
      {/* ============================================ */}
      <section ref={timelineSectionRef} style={{
      background: 'linear-gradient(to bottom, #2d2d2d, #1a1a1a, #2d2d2d)'
    }} className="py-16 md:py-24 px-6 md:px-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-mgc-yellow to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-mgc-gold to-transparent" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              REALISTIC TIMELINE & <span className="text-mgc-yellow">EXPECTATIONS</span>
            </h2>
            <div className="w-24 h-1 bg-mgc-gold mx-auto mb-8" />
          </div>

          {/* The Truth Section */}
          <div className="bg-red-900/30 border border-red-500/30 rounded-2xl p-6 md:p-8 mb-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">The Truth About Credit Restoration:</h3>
                <p className="text-mgc-tan text-lg">
                  Anyone promising "30-day miracles" or "guaranteed 100-point increases" is lying to you, and possibly <span className="text-red-400 font-semibold">breaking federal law</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Timeline */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-white mb-8 text-center">Here's What's Real:</h3>
            
            {/* Timeline Container */}
            <div className="relative">
              {/* Timeline Line - animated on scroll */}
              <div className="hidden md:block absolute top-8 left-0 right-0 h-1 overflow-hidden" style={{
              backgroundColor: '#444'
            }}>
                <div className="h-full bg-gradient-to-r from-mgc-yellow via-mgc-gold to-green-400 transition-all duration-1000 ease-out" style={{
                width: timelineVisible ? '100%' : '0%',
                opacity: timelineVisible ? 1 : 0
              }} />
              </div>
              
              {/* Timeline Points */}
              <div className="grid md:grid-cols-4 gap-6 md:gap-4">
                {/* Day 1 */}
                <div className="relative text-center transition-all duration-700 ease-out" style={{
                opacity: timelineVisible ? 1 : 0,
                transform: timelineVisible ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: '200ms'
              }}>
                  <div className="w-16 h-16 bg-mgc-yellow rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-mgc-yellow/30 relative z-10 transform transition-transform duration-300 hover:scale-110">
                    <span className="text-mgc-dark-gray font-bold text-sm">DAY 1</span>
                  </div>
                  <div className="rounded-xl p-4 border border-mgc-gold/30 backdrop-blur-sm" style={{
                  backgroundColor: 'rgba(68,68,68,0.5)'
                }}>
                    <p className="text-mgc-yellow font-semibold mb-1">Analysis</p>
                    <p className="text-mgc-light-gray text-sm">Deep credit forensics & strategy planning</p>
                  </div>
                </div>

                {/* Day 30 */}
                <div className="relative text-center transition-all duration-700 ease-out" style={{
                opacity: timelineVisible ? 1 : 0,
                transform: timelineVisible ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: '400ms'
              }}>
                  <div className="w-16 h-16 bg-mgc-text-orange rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-mgc-text-orange/30 relative z-10 transform transition-transform duration-300 hover:scale-110">
                    <span className="text-white font-bold text-sm">30 DAYS</span>
                  </div>
                  <div className="rounded-xl p-4 border border-mgc-gold/30 backdrop-blur-sm" style={{
                  backgroundColor: 'rgba(68,68,68,0.5)'
                }}>
                    <p className="text-mgc-text-orange font-semibold mb-1">First Results</p>
                    <p className="text-mgc-light-gray text-sm">Bureau investigations complete (by law)</p>
                  </div>
                </div>

                {/* Day 45-60 */}
                <div className="relative text-center transition-all duration-700 ease-out" style={{
                opacity: timelineVisible ? 1 : 0,
                transform: timelineVisible ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: '600ms'
              }}>
                  <div className="w-16 h-16 bg-mgc-cream rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-mgc-cream/30 relative z-10 transform transition-transform duration-300 hover:scale-110">
                    <span className="text-mgc-dark-gray font-bold text-sm">45-60</span>
                  </div>
                  <div className="rounded-xl p-4 border border-mgc-gold/30 backdrop-blur-sm" style={{
                  backgroundColor: 'rgba(68,68,68,0.5)'
                }}>
                    <p className="text-mgc-cream font-semibold mb-1">Momentum</p>
                    <p className="text-mgc-light-gray text-sm">Second dispute cycle for complex items</p>
                  </div>
                </div>

                {/* Day 90 */}
                <div className="relative text-center transition-all duration-700 ease-out" style={{
                opacity: timelineVisible ? 1 : 0,
                transform: timelineVisible ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: '800ms'
              }}>
                  <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-400/30 relative z-10 transform transition-transform duration-300 hover:scale-110">
                    <span className="text-mgc-dark-gray font-bold text-sm">90 DAYS</span>
                  </div>
                  <div className="rounded-xl p-4 border border-mgc-gold/30 backdrop-blur-sm" style={{
                  backgroundColor: 'rgba(68,68,68,0.5)'
                }}>
                    <p className="text-green-400 font-semibold mb-1">Transformation</p>
                    <p className="text-mgc-light-gray text-sm">Most clients see measurable improvements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What's Real Checkmarks */}
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            <div className="flex items-start gap-3 rounded-xl p-4 border border-mgc-gold/20 transition-all duration-700 ease-out" style={{
            backgroundColor: 'rgba(68,68,68,0.3)',
            opacity: timelineVisible ? 1 : 0,
            transform: timelineVisible ? 'translateX(0)' : 'translateX(-40px)',
            transitionDelay: '900ms'
          }}>
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-mgc-tan">Most clients see measurable improvements in <span className="text-white font-semibold">45-90 days</span></p>
            </div>
            <div className="flex items-start gap-3 rounded-xl p-4 border border-mgc-gold/20 transition-all duration-700 ease-out" style={{
            backgroundColor: 'rgba(68,68,68,0.3)',
            opacity: timelineVisible ? 1 : 0,
            transform: timelineVisible ? 'translateX(0)' : 'translateX(40px)',
            transitionDelay: '1000ms'
          }}>
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-mgc-tan">Credit bureaus have <span className="text-white font-semibold">30 days by law</span> to investigate disputes</p>
            </div>
            <div className="flex items-start gap-3 rounded-xl p-4 border border-mgc-gold/20 transition-all duration-700 ease-out" style={{
            backgroundColor: 'rgba(68,68,68,0.3)',
            opacity: timelineVisible ? 1 : 0,
            transform: timelineVisible ? 'translateX(0)' : 'translateX(-40px)',
            transitionDelay: '1100ms'
          }}>
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-mgc-tan">Complex items often require <span className="text-white font-semibold">1-2 dispute cycles</span> to resolve</p>
            </div>
            <div className="flex items-start gap-3 rounded-xl p-4 border border-mgc-gold/20 transition-all duration-700 ease-out" style={{
            backgroundColor: 'rgba(68,68,68,0.3)',
            opacity: timelineVisible ? 1 : 0,
            transform: timelineVisible ? 'translateX(0)' : 'translateX(40px)',
            transitionDelay: '1200ms'
          }}>
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-mgc-tan">Your individual timeline depends on the <span className="text-white font-semibold">complexity of your situation</span></p>
            </div>
          </div>

          {/* What We CAN Promise */}
          <div className="bg-gradient-to-br from-mgc-gold/15 to-mgc-yellow/5 border border-mgc-gold/40 rounded-2xl p-8 transition-all duration-700 ease-out" style={{
          opacity: timelineVisible ? 1 : 0,
          transform: timelineVisible ? 'scale(1)' : 'scale(0.95)',
          transitionDelay: '1300ms'
        }}>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              What We <span className="text-mgc-yellow">CAN</span> Promise:
            </h3>
            <div className="space-y-4 max-w-2xl mx-auto">
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-mgc-gold flex-shrink-0 mt-1" />
                <p className="text-mgc-tan">We'll work your file <span className="text-white font-semibold">aggressively within legal boundaries</span></p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-mgc-gold flex-shrink-0 mt-1" />
                <p className="text-mgc-tan">We'll communicate <span className="text-white font-semibold">transparently every step</span></p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-mgc-gold flex-shrink-0 mt-1" />
                <p className="text-mgc-tan">We'll <span className="text-white font-semibold">adjust strategy based on results</span></p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-mgc-gold flex-shrink-0 mt-1" />
                <p className="text-mgc-tan">If new items appear during the process, we work on them at <span className="text-white font-semibold">no additional charge</span> (monthly plans)</p>
              </div>
              <div className="flex items-start gap-3 bg-green-500/10 border border-green-500/30 rounded-xl p-4 mt-6">
                <Shield className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-green-300 font-semibold">If we don't deliver results in 90 days, you get <span className="text-green-400">100% of your money back</span></p>
              </div>
            </div>
            
            {/* Closing Statement */}
            <p className="text-center text-xl text-white font-bold mt-8">
              No false promises. Just real work. And <span className="text-mgc-yellow">real results</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <CalendlyPopupButton 
                text="Schedule Your Free Consultation"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-lg font-bold"
                showArrow={true}
                prefillOptions={{
                  utm: { source: 'credit_repair_page', medium: 'website', campaign: 'mesa360_section_cta' }
                }}
              />
              <a 
                href={portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-lg transition-all duration-200 text-lg font-bold"
              >
                Get Free Credit Analysis <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

      </section>



      {/* ============================================ */}
      {/* SECTION 5: WHAT MAKES US DIFFERENT */}
      {/* ============================================ */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-12 text-center">
            WHY MESA GROUP ISN'T LIKE OTHER CREDIT COMPANIES
          </h2>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left bg-gray-100 font-semibold text-gray-700 border-b-2">What Actually Matters</th>
                  <th className="p-4 text-center bg-amber-100 font-bold text-amber-800 border-b-2 border-amber-200">Mesa Group Financial Enhancement</th>
                  <th className="p-4 text-center bg-gray-100 font-semibold text-gray-600 border-b-2">Typical Credit Restoration Companies</th>
                  <th className="p-4 text-center bg-gray-100 font-semibold text-gray-600 border-b-2">DIY Dispute Letters</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b">
                  <td className="p-4 font-medium">The System</td>
                  <td className="p-4 text-center"><span className="text-green-600 font-semibold">Mesa360 Credit System™</span> – Repair, Rebuild, Optimize. This isn't just dispute letters. It's complete financial transformation with coaching, education, and ongoing support.</td>
                  <td className="p-4 text-center text-gray-500">Transactional dispute service only. Send letters, collect payment, disappear. No education. No coaching. No transformation.</td>
                  <td className="p-4 text-center text-gray-500">You're completely on your own. Google templates and hope. No strategy. No support. High failure rate.</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-medium">Where We Are</td>
                  <td className="p-4 text-center"><span className="text-green-600 font-semibold">Bakersfield, CA Headquarters</span> – Real office you can visit at 5001 California Ave. Local team serving clients nationwide. You're not a ticket number.</td>
                  <td className="p-4 text-center text-gray-500">Offshore call centers with no local presence. You'll never meet your "account manager." Reps change constantly.</td>
                  <td className="p-4 text-center text-gray-500">No support whatsoever. You're isolated and confused.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">What's Included</td>
                  <td className="p-4 text-center"><span className="text-green-600 font-semibold">1-on-1 Financial Coaching</span> included in EVERY plan. Learn how to build credit while we remove the bad. Education changes everything.</td>
                  <td className="p-4 text-center text-gray-500">Just send dispute letters and ghost you. No coaching. No education. No long-term strategy. You're on your own after disputes.</td>
                  <td className="p-4 text-center text-gray-500">No guidance. No education. No strategy. You don't even know what you don't know.</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-medium">Your Account Manager</td>
                  <td className="p-4 text-center"><span className="text-green-600 font-semibold">Dedicated account manager</span> for every client. Same person. Knows your name, your story, your goals. Personalized strategy.</td>
                  <td className="p-4 text-center text-gray-500">Assigned to random reps each call. No continuity. No relationship. No personalization. Just a case number.</td>
                  <td className="p-4 text-center text-gray-500">No support. No manager. No guidance. Just you, Google, and confusion.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Visit Us</td>
                  <td className="p-4 text-center"><span className="text-green-600 font-semibold">Real office you can visit</span> – 5001 California Ave, Bakersfield, CA 93309. Walk in. Meet your team. See where the work happens.</td>
                  <td className="p-4 text-center text-gray-500">No physical presence. PO boxes. Virtual offices. You'll never know who's actually working your file.</td>
                  <td className="p-4 text-center text-gray-500">No support infrastructure.</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-medium">Language Support</td>
                  <td className="p-4 text-center"><span className="text-green-600 font-semibold">Spanish, English, Punjabi</span> – Bilingual team members who speak YOUR language. Communication without barriers.</td>
                  <td className="p-4 text-center text-gray-500">English-only support (if you can even reach someone). Language barriers create confusion and mistakes.</td>
                  <td className="p-4 text-center text-gray-500">No guidance in any language.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Legal Backing</td>
                  <td className="p-4 text-center"><span className="text-green-600 font-semibold">Full legal team</span> for FCRA violation cases. Paralegals, attorneys, demand letters. REAL legal power when your rights are violated.</td>
                  <td className="p-4 text-center text-gray-500">Often non-compliant with federal law. No legal support. When violations happen, you're on your own.</td>
                  <td className="p-4 text-center text-gray-500">Risk of legal mistakes that could hurt you worse. No understanding of FCRA/FDCPA.</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-medium">Dispute Methods</td>
                  <td className="p-4 text-center"><span className="text-green-600 font-semibold">Advanced strategies</span>: CFPB complaints, Metro 2 challenges, direct creditor disputes, digital uploads, Experian rapid inquiry removal. Multi-channel attack.</td>
                  <td className="p-4 text-center text-gray-500">Generic templates the bureaus recognize instantly. Easily ignored. Low success rates.</td>
                  <td className="p-4 text-center text-gray-500">Internet templates bureaus have seen 10,000 times. Ignored immediately.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Pricing</td>
                  <td className="p-4 text-center"><span className="text-green-600 font-semibold">Transparent pricing, no hidden fees.</span> You know exactly what you're paying. No surprises. No upsells. No gotchas.</td>
                  <td className="p-4 text-center text-gray-500">Hidden fees everywhere. Constant upsells. "Oh, you want us to dispute THAT? That's extra." Nickel and dimed to death.</td>
                  <td className="p-4 text-center text-gray-500">Free (but time-consuming, confusing, error-prone, and often ineffective).</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-medium">Ongoing Support</td>
                  <td className="p-4 text-center"><span className="text-green-600 font-semibold">Monthly plans cover new items</span> – Life happens. Collections appear during the process? We work on them at no extra charge. This is accountability.</td>
                  <td className="p-4 text-center text-gray-500">Limited support windows. "Your 6 months are up, pay again if you want more help." Transactional. No ongoing commitment.</td>
                  <td className="p-4 text-center text-gray-500">All on you. Every single step. Forever.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Guarantee</td>
                  <td className="p-4 text-center"><span className="text-green-600 font-semibold">90-Day Money-Back Guarantee in writing.</span> Legally binding contract. Remove at least 1 item or get 100% refund. We're that confident.</td>
                  <td className="p-4 text-center text-gray-500">Vague "satisfaction" promises with impossible-to-navigate refund processes. Good luck getting your money back.</td>
                  <td className="p-4 text-center text-gray-500">N/A (you already wasted time you can't get back).</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* What This Really Means For You */}
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-[#3E3E3E] mb-10 text-center">
              WHAT THIS REALLY MEANS FOR YOU
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Mesa Group = Partnership */}
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-300 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="text-xl font-bold text-amber-800 mb-3">Mesa Group = Partnership</h4>
                <p className="text-gray-700">You're not just hiring a service. You're gaining a partner, a coach, a dedicated team that succeeds when YOU succeed.</p>
              </div>
              
              {/* Typical Companies = Transaction */}
              <div className="bg-gray-100 border border-gray-300 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">🏢</div>
                <h4 className="text-xl font-bold text-gray-600 mb-3">Typical Companies = Transaction</h4>
                <p className="text-gray-500">They want your money. They don't care about your transformation. Send letters, collect fees, move on to the next customer.</p>
              </div>
              
              {/* DIY = Isolation */}
              <div className="bg-gray-100 border border-gray-300 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">📄</div>
                <h4 className="text-xl font-bold text-gray-600 mb-3">DIY = Isolation</h4>
                <p className="text-gray-500">You're alone, confused, and likely making mistakes that could make things worse.</p>
              </div>
            </div>

            <div className="max-w-2xl mx-auto space-y-4 mt-12">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <CalendlyPopupButton 
                  text="Schedule Your Free Consultation"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-lg font-bold"
                  showArrow={true}
                  prefillOptions={{
                    utm: { source: 'credit_repair_page', medium: 'website', campaign: 'what_this_means_cta' }
                  }}
                />
                <a 
                  href={portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200 text-lg font-bold"
                >
                  Get Free Credit Analysis <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              
              {/* Full-width View Pricing button */}
              <button
                onClick={() => scrollToSection('pricing')}
                className="w-full inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500"
              >
                View Pricing & Plans
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 5B: WHEN LEGAL ESCALATION HAPPENS */}
      {/* ============================================ */}
      <section className="py-16 md:py-24 px-6 md:px-8 relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)'
    }}>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50" />
        
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500/20 border-2 border-red-500/40 mb-6">
              <Scale className="w-10 h-10 text-red-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              WHEN <span className="text-mgc-yellow">LEGAL ESCALATION</span> HAPPENS
            </h2>
            <p className="text-xl text-mgc-tan max-w-3xl mx-auto">
              Your Rights Are Protected By Federal Law, And We Make Sure They're Enforced
            </p>
          </div>

          {/* Disclaimer Box */}
          <div className="bg-mgc-gold/10 border border-mgc-gold/30 rounded-2xl p-6 md:p-8 mb-12">
            <p className="text-mgc-tan text-lg leading-relaxed text-center">
              While Mesa Group Consulting is not a law firm, we work with <span className="text-white font-semibold">licensed attorneys who specialize in consumer protection and FCRA violations</span>.
            </p>
          </div>

          {/* When We Bring in the Legal Team */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center gap-3">
              <AlertTriangle className="w-8 h-8 text-red-400" />
              When We Bring in the Legal Team:
            </h3>
            
            <div className="space-y-4">
              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-5 flex items-start gap-4 hover:bg-red-900/30 transition-colors">
                <span className="text-2xl flex-shrink-0">🚨</span>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Bureau Fails to Investigate Within 30 Days</h4>
                  <p className="text-mgc-tan">Federal law requires a response within 30 days. If they ignore you, we escalate to legal.</p>
                </div>
              </div>
              
              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-5 flex items-start gap-4 hover:bg-red-900/30 transition-colors">
                <span className="text-2xl flex-shrink-0">🚨</span>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Creditor Re-Reports Deleted Information Without Verification</h4>
                  <p className="text-mgc-tan">Once an item is removed, they can't just put it back without proper proof. If they do, that's a violation.</p>
                </div>
              </div>
              
              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-5 flex items-start gap-4 hover:bg-red-900/30 transition-colors">
                <span className="text-2xl flex-shrink-0">🚨</span>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Collector Contacts You After Cease & Desist</h4>
                  <p className="text-mgc-tan">Under FDCPA, once you tell them to stop, they must stop. Violations = potential damages.</p>
                </div>
              </div>
              
              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-5 flex items-start gap-4 hover:bg-red-900/30 transition-colors">
                <span className="text-2xl flex-shrink-0">🚨</span>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Bureau Reports Inaccurate Info After You've Provided Proof of Error</h4>
                  <p className="text-mgc-tan">Ignoring documented proof of inaccuracy is a violation of your FCRA rights.</p>
                </div>
              </div>
              
              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-5 flex items-start gap-4 hover:bg-red-900/30 transition-colors">
                <span className="text-2xl flex-shrink-0">🚨</span>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Any Other Violation of Federal Consumer Protection Laws</h4>
                  <p className="text-mgc-tan">We don't tolerate violations. Period.</p>
                </div>
              </div>
            </div>
          </div>

          {/* What Legal Escalation Looks Like */}
          <div className="bg-gradient-to-br from-mgc-gold/15 to-mgc-yellow/5 border border-mgc-gold/40 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-mgc-gold" />
              What Legal Escalation Looks Like:
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-mgc-tan"><span className="text-white font-semibold">Paralegal FCRA/FDCPA Audits</span> of your entire case</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-mgc-tan"><span className="text-white font-semibold">Attorney Review</span> of violations and potential claims</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-mgc-tan"><span className="text-white font-semibold">Legal Demand Letters</span> sent to creditors and bureaus</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-mgc-tan"><span className="text-white font-semibold">Settlement Negotiation Support</span> when violations are clear</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-mgc-tan"><span className="text-white font-semibold">Documentation for Potential Litigation</span> if needed</p>
              </div>
            </div>
          </div>

          {/* Real Financial Impact */}
          <div className="bg-green-900/20 border border-green-500/30 rounded-2xl p-8 mb-12 text-center">
            <DollarSign className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Real Financial Impact:</h3>
            <p className="text-mgc-tan text-lg">
              Many qualified clients have received cash settlements ranging from <span className="text-green-400 font-bold">$1,000 to $2,500+</span> when creditors or bureaus violated their rights, <span className="text-white font-semibold">in addition to removal of inaccurate items</span>.
            </p>
          </div>

          {/* The Bottom Line */}
          <div className="bg-mgc-dark-gray/50 border border-mgc-gold/30 rounded-2xl p-8 mb-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">The Bottom Line:</h3>
            <p className="text-xl text-mgc-tan">
              We don't make promises we can't keep. We make progress you can measure. And when your rights are violated, we fight back with <span className="text-mgc-yellow font-bold">real legal power</span>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CalendlyPopupButton
              text="Schedule Your Free Consultation"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-lg font-bold"
              showArrow={true}
              prefillOptions={{
                utm: { source: 'credit_repair_page', medium: 'website', campaign: 'mesa360_section_cta' }
              }}
            />
            <a
              href={portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-lg transition-all duration-200 text-lg font-bold"
            >
              Get Free Credit Analysis <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 6: MORE THAN CREDIT RESTORATION */}
      {/* ============================================ */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-4">
              This Isn't Just Credit Restoration.<br />
              It's <span className="text-[#f9c65d]">Complete Financial Transformation</span>.
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Most credit recovery companies send generic dispute letters and disappear. At Mesa Group, every client gets a dedicated account manager, customized action plan, monthly reviews, and 1-on-1 financial coaching.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <FileText className="w-10 h-10 text-[#f9c65d] mb-4" />
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-2">Customized Action Plan</h3>
              <p className="text-gray-600 text-sm">Your account manager creates a personalized roadmap based on YOUR unique credit situation, not a one-size-fits-all template.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Users className="w-10 h-10 text-[#f9c65d] mb-4" />
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-2">Dedicated Account Manager</h3>
              <p className="text-gray-600 text-sm">A real person assigned to your case who knows your name, your story, and your goals. No random reps each time.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <BarChart3 className="w-10 h-10 text-[#f9c65d] mb-4" />
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-2">Monthly Progress Reviews</h3>
              <p className="text-gray-600 text-sm">Every 35 days: what was disputed, what was removed, what's in progress, and your next steps. We walk you through everything.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <GraduationCap className="w-10 h-10 text-[#f9c65d] mb-4" />
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-2">Credit Building Education</h3>
              <p className="text-gray-600 text-sm">Learn how utilization works, when to apply for credit, building payment history, and protecting your credit long-term.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <MessageSquare className="w-10 h-10 text-[#f9c65d] mb-4" />
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-2">Ongoing Support</h3>
              <p className="text-gray-600 text-sm">Questions answered throughout the process. Guidance on major decisions like buying a car or applying for a mortgage.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Heart className="w-10 h-10 text-[#f9c65d] mb-4" />
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-2">Why This Matters</h3>
              <p className="text-gray-600 text-sm">Removing items is half the battle. Without learning to build good credit, you'll end up back where you started.</p>
            </div>
          </div>

          {/* Testimonial Callout */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-xl border-l-4 border-amber-500">
            <div className="flex items-start gap-6">
              <img 
                src="/testimonials/credit-repair/johnny-f-bakersfield-ca.jpeg" 
                alt="Johnny F." 
                className="w-20 h-20 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />)}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "I came to Mesa Group with a 540 score and collections I didn't understand. My account manager, Maria, didn't just file disputes. She explained every step, taught me how credit utilization works, and helped me build a plan to keep my score high after the program. Nine months later, I'm at 710 and I finally understand how to manage my credit."
                </p>
                <p className="text-[#3E3E3E] font-semibold">— Johnny F., Bakersfield, CA</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <CalendlyPopupButton 
              text="Schedule Your Free Consultation"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-lg font-bold"
              showArrow={true}
              prefillOptions={{
                utm: { source: 'credit_repair_page', medium: 'website', campaign: 'mesa360_section_cta' }
              }}
            />
            <a 
              href={portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200 text-lg font-bold"
            >
              Get Free Credit Analysis <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>


      {/* ============================================ */}
      {/* SECTION 7: THE ROI (Cost of Bad Credit) */}
      {/* ============================================ */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-4">
              Bad Credit Costs You <span className="text-red-600">$126,000</span> Over 30 Years. Here's How.
            </h2>
            <p className="text-xl text-gray-700">
              Every month you wait to fix your credit, you're bleeding money. Higher interest rates, denied applications, security deposits. It all adds up.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 text-center">
              <Home className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-2">Higher Mortgage Rates</h3>
              <div className="text-4xl font-bold text-red-600 mb-2">+$87,000</div>
              <p className="text-sm text-gray-600">
                620 score = 7.2% APR<br />
                720 score = 6.1% APR<br />
                On $300K over 30 years
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 text-center">
              <Car className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-2">Car Loan Penalties</h3>
              <div className="text-4xl font-bold text-red-600 mb-2">+$18,000</div>
              <p className="text-sm text-gray-600">
                Subprime: 14% APR<br />
                Prime: 6% APR<br />
                Over 5-year loan
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 text-center">
              <CreditCard className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-2">Credit Card Interest</h3>
              <div className="text-4xl font-bold text-red-600 mb-2">+$21,000</div>
              <p className="text-sm text-gray-600">
                Bad credit: 24% APR<br />
                Good credit: 16% APR<br />
                On $10K over 10 years
              </p>
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
            <p className="text-gray-400 mt-6 text-sm">
              Improving your credit isn't an expense. It's the highest-ROI financial decision you can make.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <CalendlyPopupButton 
                text="Schedule Your Free Consultation"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-lg font-bold"
                showArrow={true}
                prefillOptions={{
                  utm: { source: 'credit_repair_page', medium: 'website', campaign: 'mesa360_section_cta' }
                }}
              />
              <a 
                href={portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 border-2 border-gray-300 hover:bg-gray-50 rounded-lg transition-all duration-200 text-lg font-bold shadow-sm hover:shadow-md"
              >
                Get Free Credit Analysis <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 8: SOCIAL PROOF (Testimonials) */}
      {/* ============================================ */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-4">
              Real People. Real Results. Real <span className="text-[#f9c65d]">Transformation</span>.
            </h2>
            <p className="text-xl text-gray-700">
              Don't take our word for it. Hear from clients who transformed their financial futures with the Mesa360 Credit System™.
            </p>
          </div>

          {/* Aggregate Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl font-bold text-[#3e3e3e] mb-2">83</div>
              <p className="text-sm text-gray-600">Points Avg. Increase</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl font-bold text-[#3e3e3e] mb-2">2,500+</div>
              <p className="text-sm text-gray-600">Clients Served</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl font-bold text-[#3e3e3e] mb-2">150+</div>
              <p className="text-sm text-gray-600">5-Star Reviews</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl font-bold text-[#f9c65d] mb-2">45-90</div>
              <p className="text-sm text-gray-600">Days to First Results</p>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-xl p-6 shadow-lg">
              <img 
                src="/testimonials/credit-repair/bill-d-bakersfield-ca.jpeg" 
                alt="Bill D." 
                className="w-16 h-16 rounded-full object-cover mx-auto mb-4"
              />
              <div className="flex gap-1 mb-4 justify-center">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />)}
              </div>
              <h4 className="text-white font-bold mb-2 text-center">"From 540 to 695 in 75 Days: I Finally Got My Dream Home"</h4>
              <p className="text-gray-300 text-sm mb-4">
                "I was skeptical after being denied for a mortgage twice. I'd tried DIY dispute letters with no results. Within 75 days of working with Mesa Group, they removed 6 inaccurate collections and my score increased from 540 to 695. Last month, I closed on my dream home in Bakersfield."
              </p>
              <p className="text-white/80 text-sm text-center">— Bill D., Bakersfield, CA</p>
            </div>

            <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-xl p-6 shadow-lg">
              <img 
                src="/testimonials/credit-repair/carlos-r-kern-county-ca.jpeg" 
                alt="Carlos R." 
                className="w-16 h-16 rounded-full object-cover mx-auto mb-4"
              />
              <div className="flex gap-1 mb-4 justify-center">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />)}
              </div>
              <h4 className="text-white font-bold mb-2 text-center">"100+ Point Increase in Under 4 Months"</h4>
              <p className="text-gray-300 text-sm mb-4">
                "I came to Mesa Group in the low 500s. Great experience, great communication. Across all three bureaus, we're up over 100 points. I was able to get approved for a business loan I'd been denied for twice before. Believe in the process."
              </p>
              <p className="text-white/80 text-sm text-center">— Carlos R., Kern County, CA</p>
            </div>

            <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-xl p-6 shadow-lg">
              <img 
                src="/testimonials/credit-repair/david-r-bakersfield-ca.jpeg" 
                alt="David R." 
                className="w-16 h-16 rounded-full object-cover mx-auto mb-4"
              />
              <div className="flex gap-1 mb-4 justify-center">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />)}
              </div>
              <h4 className="text-white font-bold mb-2 text-center">"Tried DIY for 6 Months, Got Nowhere"</h4>
              <p className="text-gray-300 text-sm mb-4">
                "I wasted 6 months trying to do it myself with templates from the internet. The bureaus ignored me. Mesa Group removed 3 items in the first 60 days, items I'd been fighting on my own for half a year. Wish I'd hired them sooner."
              </p>
              <p className="text-white/80 text-sm text-center">— David R., Bakersfield, CA</p>
            </div>

            <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-xl p-6 shadow-lg">
              <img 
                src="/testimonials/credit-repair/maria-l-ca.jpeg" 
                alt="Maria L." 
                className="w-16 h-16 rounded-full object-cover mx-auto mb-4"
              />
              <div className="flex gap-1 mb-4 justify-center">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />)}
              </div>
              <h4 className="text-white font-bold mb-2 text-center">"Transparent Pricing, No Hidden Fees"</h4>
              <p className="text-gray-300 text-sm mb-4">
                "I signed up for the monthly plan. Transparent pricing, no hidden fees. Canceled after 5 months when I hit my goal score (720). Exactly as advertised. No pressure to stay longer than I needed."
              </p>
              <p className="text-white/80 text-sm text-center">— Maria L., CA</p>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            Individual results may vary. Testimonials are not a guarantee of future performance. Results depend on individual circumstances.
          </p>

          <div className="max-w-2xl mx-auto space-y-4 mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CalendlyPopupButton 
                text="Schedule Your Free Consultation"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-lg font-bold"
                showArrow={true}
                prefillOptions={{
                  utm: { source: 'credit_repair_page', medium: 'website', campaign: 'mesa360_section_cta' }
                }}
              />
              <a 
                href={portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 border-2 border-gray-300 hover:bg-gray-50 rounded-lg transition-all duration-200 text-lg font-bold shadow-sm hover:shadow-md"
              >
                Get Free Credit Analysis <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            
            {/* Full-width View Pricing button */}
            <button
              onClick={() => scrollToSection('pricing')}
              className="w-full inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500"
            >
              View Pricing & Plans
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 9: PRICING & PLANS */}
      {/* ============================================ */}
      <section id="pricing" className="bg-white py-16 md:py-24 px-6 md:px-8 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          {/* Main Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-4">
              Choose Your Path to <span className="text-[#f9c65d]">Financial Transformation</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              This isn't a purchase. It's an investment in your future, your family, your freedom. Every plan includes the complete Mesa360 Credit System™: comprehensive credit restoration, 1-on-1 coaching, and a dedicated account manager who knows your name and your goals.
            </p>
          </div>

          {/* MONTHLY PLANS SECTION */}
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
                <p className="text-sm text-gray-600 mb-1">Your Gateway to Financial Freedom</p>
                <p className="text-xs text-gray-500 mb-4">Basic</p>
                
                <div className="mb-2">
                  <p className="text-sm font-semibold text-gray-700">Investment:</p>
                  <div>
                    <span className="text-2xl font-bold text-[#3E3E3E]">$350</span>
                    <span className="text-gray-500"> initial + </span>
                    <span className="text-2xl font-bold text-[#FBBF23]">$149</span>
                    <span className="text-gray-500">/mo</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">Starting your credit restoration journey. Covers collections, late payments, and inquiries across all 3 bureaus. Includes steady dispute support with agencies and monthly progress tracking.</p>
                
                <div className="space-y-1 mb-4 text-sm">
                  <p className="font-semibold text-gray-700">What's Included:</p>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Collections</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Late Payments</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Inquiries (all 3 bureaus)</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>3-Bureau disputes to agencies</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Real-Time Digital Filing</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Priority Bureau Access</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>35-day updates + client portal</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Ongoing support for new items</span></div>
                </div>

                <div className="space-y-1 mb-4 text-sm">
                  <p className="font-semibold text-gray-700">Package Features:</p>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Correct All Personal Information</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Dispute All Inquiries</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Monthly Progress Report</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Client Portal to Track Results</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Mobile App to Track Results</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Dedicated Account Manager</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>1-on-1 Financial Coaching</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Customized Action Plan</span></div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <p className="text-xs font-semibold text-gray-700 mb-1">Best for:</p>
                  <p className="text-xs text-gray-600">Starting your credit restoration journey. Covers collections, late payments, and inquiries across all 3 bureaus. Includes steady dispute support with agencies and monthly progress tracking.</p>
                </div>

                <div className="text-center mb-4">
                  <p className="text-sm font-semibold text-gray-700">Your Investment Today:</p>
                  <p className="text-2xl font-bold text-green-600">$0.00 DUE TODAY</p>
                  <p className="text-xs text-gray-500">Risk Free - 3 Day Cancellation Window</p>
                </div>
                
                <a href={portalUrl} target="_blank" rel="noopener noreferrer" className="block w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold py-3 rounded-lg transition-colors mb-3 text-center">
                  Choose Mesa360 Lite
                </a>

                <p className="text-xs text-gray-500">Note: You must maintain your SmartCredit 3-Bureau monitoring account throughout the entire process. Ongoing support is provided. If you add new items, we will work on them. Clients may continue applying for accounts as needed.</p>
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
                <p className="text-sm text-gray-600 mb-1">The Complete Transformation Package</p>
                <p className="text-xs text-[#FBBF23] font-semibold mb-4">Most Popular</p>
                
                <div className="mb-2">
                  <p className="text-sm font-semibold text-gray-700">Investment:</p>
                  <div>
                    <span className="text-2xl font-bold text-[#3E3E3E]">$500</span>
                    <span className="text-gray-500"> initial + </span>
                    <span className="text-2xl font-bold text-[#FBBF23]">$199</span>
                    <span className="text-gray-500">/mo</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">Our most popular plan. Everything in Lite PLUS charge-offs. Includes priority bureau access, accelerated processing, direct creditor disputes, and federal escalation protocols.</p>
                
                <div className="space-y-1 mb-4 text-sm">
                  <p className="font-semibold text-gray-700">What's Included:</p>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>All Lite features</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Charge-Offs</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Priority Bureau Access + Accelerated Processing</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Disputes to creditors & collectors</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Federal Escalation Protocol (CFPB)</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Ongoing support for new items</span></div>
                </div>

                <div className="space-y-1 mb-4 text-sm">
                  <p className="font-semibold text-gray-700">Package Features:</p>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Correct All Personal Information</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Dispute All Inquiries</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Monthly Progress Report</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Client Portal to Track Results</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Mobile App to Track Results</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Dedicated Account Manager</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>1-on-1 Financial Coaching</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Customized Action Plan</span></div>
                </div>

                <div className="bg-amber-50 rounded-lg p-3 mb-4">
                  <p className="text-xs font-semibold text-gray-700 mb-1">Best for:</p>
                  <p className="text-xs text-gray-600">Our most popular plan with charge-off removal strategy. Includes priority bureau access, accelerated processing, direct creditor disputes, and federal escalation protocols with 35-day updates.</p>
                </div>

                <div className="text-center mb-4">
                  <p className="text-sm font-semibold text-gray-700">Your Investment Today:</p>
                  <p className="text-2xl font-bold text-green-600">$0.00 DUE TODAY</p>
                  <p className="text-xs text-gray-500">Risk Free - 3 Day Cancellation Window</p>
                </div>
                
                <a href={portalUrl} target="_blank" rel="noopener noreferrer" className="block w-full bg-[#FBBF23] hover:bg-[#E5AC1F] text-gray-900 font-bold py-3 rounded-lg transition-colors mb-3 text-center">
                  Choose Mesa360 Flex
                </a>

                <p className="text-xs text-gray-500">Note: You must maintain your SmartCredit 3-Bureau monitoring account throughout the entire process. Ongoing support is provided. If you add new items, we will work on them. Clients may continue applying for accounts as needed.</p>
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
                <p className="text-sm text-gray-300 mb-1">When You've Got the Heavy Stuff</p>
                <p className="text-xs text-amber-400 font-semibold mb-4">Premium</p>
                
                <div className="mb-2">
                  <p className="text-sm font-semibold text-gray-300">Investment:</p>
                  <div>
                    <span className="text-2xl font-bold">$800</span>
                    <span className="text-gray-400"> initial + </span>
                    <span className="text-2xl font-bold text-amber-400">$299</span>
                    <span className="text-gray-400">/mo</span>
                  </div>
                </div>
                <p className="text-sm text-gray-300 mb-4">Our most premium plan reserved for heavy credit damage. Covers everything in Flex PLUS bankruptcies, repossessions, evictions, student loans, and medical bills. Includes advanced legal disputes, priority handling, and funding profile optimization.</p>
                
                <div className="space-y-1 mb-4 text-sm">
                  <p className="font-semibold text-gray-200">What's Included:</p>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" /><span>All Flex features</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" /><span>Bankruptcies (Chapter 7/13)</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" /><span>Repossessions</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" /><span>Evictions</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" /><span>Student Loans</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" /><span>Medical Bills</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" /><span>First-class mailed disputes to all 3 bureaus</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" /><span>Priority Bureau Platform Access + Phone Disputes</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" /><span>Advanced Technical Challenges (Data-Level Disputes, FCRA)</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" /><span>Priority handling + legal review</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" /><span>Funding profile optimization</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" /><span>Ongoing support for new items</span></div>
                </div>

                <div className="space-y-1 mb-4 text-sm">
                  <p className="font-semibold text-gray-200">Package Features:</p>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" /><span>Correct All Personal Information</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" /><span>Dispute All Inquiries</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" /><span>Monthly Progress Report</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" /><span>Client Portal to Track Results</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" /><span>Mobile App to Track Results</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" /><span>Dedicated Account Manager</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" /><span>1-on-1 Financial Coaching</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" /><span>Customized Action Plan</span></div>
                </div>

                <div className="bg-gray-700/50 rounded-lg p-3 mb-4">
                  <p className="text-xs font-semibold text-gray-200 mb-1">Best for:</p>
                  <p className="text-xs text-gray-300">Our most premium plan reserved for heavy credit damage. Covers everything in Flex plus bankruptcies, repossessions, evictions, student loans, and medical bills. Includes advanced legal disputes, priority handling, and funding profile optimization.</p>
                </div>

                <div className="text-center mb-4">
                  <p className="text-sm font-semibold text-gray-300">Your Investment Today:</p>
                  <p className="text-2xl font-bold text-green-400">$0.00 DUE TODAY</p>
                  <p className="text-xs text-gray-400">Risk Free - 3 Day Cancellation Window</p>
                </div>
                
                <a href={portalUrl} target="_blank" rel="noopener noreferrer" className="block w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold py-3 rounded-lg transition-colors mb-3 text-center">
                  Choose Mesa360 Elite
                </a>

                <p className="text-xs text-gray-400">Note: You must maintain your SmartCredit 3-Bureau monitoring account throughout the entire process. Ongoing support is provided. If you add new items, we will work on them. Clients may continue applying for accounts as needed.</p>
              </div>
            </div>
          </div>

          {/* 9-MONTH PROGRAMS SECTION */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-[#3E3E3E] mb-2">9-MONTH PROGRAMS</h3>
              <p className="text-lg text-gray-600 mb-4">Pay Once, Transform Forever: Maximum Savings for Committed Action</p>
              <p className="text-xl font-semibold text-[#3E3E3E] mb-2">Get nine months of the Mesa360 Credit System™ with significant savings</p>
              <p className="text-gray-600 max-w-3xl mx-auto">For those who know they're committed, pay in full (or use Buy Now, Pay Later) and save up to $1,691 compared to monthly plans. Get the complete Mesa360 Credit System™ with massive upfront savings.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Ruby Plan */}
              <div className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Gem className="w-8 h-8 text-red-500" />
                  <div>
                    <h4 className="text-xl font-bold text-[#3E3E3E]">RUBY PLAN</h4>
                    <p className="text-sm text-gray-500">9-Month Flex</p>
                  </div>
                </div>
                
                <div className="mb-2">
                  <p className="text-sm font-semibold text-gray-700">One-Time Investment:</p>
                  <span className="text-3xl font-bold text-[#3E3E3E]">$1,500</span>
                  <span className="text-gray-500"> one-time (Pay in Full or BNPL)</span>
                </div>
                <p className="text-green-600 font-bold mb-1">Save $791 vs. Monthly Flex</p>
                <p className="text-sm text-gray-600 mb-6">(Equivalent to 9 months of Mesa360 Flex for the price of ~5.5 months)</p>
                
                <div className="space-y-1 mb-4 text-sm">
                  <p className="font-semibold text-gray-700">What's Included:</p>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Collections</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Late Payments</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Inquiries (all 3 bureaus)</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Charge-Offs</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Real-Time Digital Filing (no mailed letters)</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Priority Bureau Access + Accelerated Processing</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Disputes to creditors & collection agencies</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Federal Escalation Protocol (CFPB) when necessary</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>35-day updates + client portal</span></div>
                </div>

                <div className="space-y-1 mb-4 text-sm">
                  <p className="font-semibold text-gray-700">Package Features:</p>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Dedicated Account Manager</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>1-on-1 Financial Coaching</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Customized Action Plan</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Monthly Progress Report</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Client Portal + Mobile App</span></div>
                </div>

                <div className="bg-red-100 rounded-lg p-3 mb-4">
                  <p className="text-xs font-semibold text-red-800">Important Note:</p>
                  <p className="text-xs text-red-700">Comprehensive 9-month program focused on your current credit profile. New items added during the program will not be worked on.</p>
                </div>
                
                <a href={portalUrl} target="_blank" rel="noopener noreferrer" className="block w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg transition-colors text-center">
                  Choose Ruby Plan
                </a>
              </div>

              {/* Emerald Plan */}
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 border-2 border-emerald-200 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Gem className="w-8 h-8 text-emerald-500" />
                  <div>
                    <h4 className="text-xl font-bold text-[#3E3E3E]">EMERALD PLAN</h4>
                    <p className="text-sm text-gray-500">9-Month Elite</p>
                  </div>
                </div>
                
                <div className="mb-2">
                  <p className="text-sm font-semibold text-gray-700">One-Time Investment:</p>
                  <span className="text-3xl font-bold text-[#3E3E3E]">$1,800</span>
                  <span className="text-gray-500"> one-time (Pay in Full or BNPL)</span>
                </div>
                <p className="text-green-600 font-bold mb-1">Save $1,691 vs. Monthly Elite</p>
                <p className="text-sm text-gray-600 mb-6">(Equivalent to 9 months of Mesa360 Elite for the price of ~5 months)</p>
                
                <div className="space-y-1 mb-4 text-sm">
                  <p className="font-semibold text-gray-700">What's Included:</p>
                  <p className="text-gray-600 italic mb-2">All Ruby items PLUS:</p>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Bankruptcies (Chapter 7/13)</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Repossessions</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Evictions</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Student Loans</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Medical Bills</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>First-class mailed disputes to all 3 bureaus</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Direct disputes to creditors & collection agencies</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Priority Bureau Platform Access + Phone Disputes</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Federal Escalation Protocol (CFPB)</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Advanced Technical Challenges (Data-Level Disputes, FCRA frameworks)</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Legal Team Priority Handling + Review</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Funding profile optimization</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>35-day updates + client portal</span></div>
                </div>

                <div className="space-y-1 mb-4 text-sm">
                  <p className="font-semibold text-gray-700">Package Features:</p>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Dedicated Account Manager</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>1-on-1 Financial Coaching</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Customized Action Plan</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Monthly Progress Report</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Client Portal + Mobile App</span></div>
                </div>

                <div className="bg-emerald-100 rounded-lg p-3 mb-4">
                  <p className="text-xs font-semibold text-emerald-800">Important Note:</p>
                  <p className="text-xs text-emerald-700">Comprehensive 9-month program focused on your current credit profile. New items added during the program will not be worked on.</p>
                </div>
                
                <a href={portalUrl} target="_blank" rel="noopener noreferrer" className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-lg transition-colors text-center">
                  Choose Emerald Plan
                </a>
              </div>
            </div>
          </div>

          {/* Which Plan Is Right For You */}
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-[#3E3E3E] mb-10 text-center">
              WHICH PLAN IS RIGHT FOR YOU?
            </h3>
            
            {/* Individual Plans */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Lite */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h4 className="font-bold text-[#3E3E3E] mb-4">Choose Mesa360 Lite if:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>You have collections, late payments, and inquiries</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>No charge-offs or heavy accounts</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>You want affordable entry point with full coaching support</span></div>
                </div>
              </div>

              {/* Flex */}
              <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-6">
                <h4 className="font-bold text-[#3E3E3E] mb-4">Choose Mesa360 Flex <span className="text-amber-600">(Most Popular)</span> if:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>You have collections, late payments, inquiries</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>PLUS charge-offs that need removal</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>You want direct creditor disputes and federal escalation</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>You need maximum speed and aggressive strategy</span></div>
                </div>
              </div>

              {/* Elite */}
              <div className="bg-gray-800 text-white rounded-xl p-6">
                <h4 className="font-bold mb-4">Choose Mesa360 Elite if:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" /><span>You have heavy damage: bankruptcies, repos, evictions, student loans</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" /><span>You need advanced legal dispute strategies</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" /><span>You want legal team review and priority handling</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" /><span>You need funding profile optimization for major purchases</span></div>
                </div>
              </div>
            </div>

            {/* Monthly vs 12-Month */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Monthly Plans */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="font-bold text-[#3E3E3E] mb-4">Choose Monthly Plans (Lite/Flex/Elite) if:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /><span>You want maximum flexibility</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /><span>Your credit situation is still evolving</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /><span>You want ongoing support for new items as they appear</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /><span>You prefer to pay as you go</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" /><span>You're not 100% sure on timeline yet</span></div>
                </div>
              </div>

              {/* 9-Month Programs */}
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-xl p-6">
                <h4 className="font-bold text-[#3E3E3E] mb-4">Choose 9-Month Programs (Ruby/Emerald) if:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /><span>You want to save $791-$1,691 upfront</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /><span>Your credit situation is stable</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /><span>You're committed to nine months</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /><span>You prefer one-and-done payment</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /><span>You want to lock in pricing and eliminate monthly billing</span></div>
                </div>
              </div>
            </div>

            {/* Still Not Sure CTA */}
            <div className="bg-gradient-to-r from-[#3E3E3E] to-[#2c2c2c] rounded-2xl p-8 text-center">
              <h4 className="text-2xl font-bold text-white mb-6">STILL NOT SURE? LET'S TALK.</h4>
              
              <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
                <a href="tel:6613103040" className="flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold">
                  <Phone className="w-5 h-5" /> (661) 310-3040
                </a>
                <a href="mailto:contact@mesagroupconsulting.com" className="flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold">
                  <Mail className="w-5 h-5" /> contact@mesagroupconsulting.com
                </a>
                <span className="flex items-center gap-2 text-gray-300">
                  <MapPin className="w-5 h-5" /> 5001 California Ave Suite 219, Bakersfield, CA 93309
                </span>
              </div>
              
              <p className="text-gray-300 mb-6">Hablamos Español 🇪🇸 | Assi Punjabi Bolde Haan 🇮🇳</p>

              <CalendlyPopupButton
                text="Schedule Free Consultation"
                showArrow={true}
                className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
                prefillOptions={{
                  utm: { source: 'website', medium: 'credit_repair_2', campaign: 'still_not_sure_cta' }
                }}
              />
            </div>
          </div>

          {/* Why SmartCredit is Required */}
          <div className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-[#3E3E3E]">WHY SMARTCREDIT IS REQUIRED</h3>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-bold text-[#3E3E3E] mb-4">Real-Time 3-Bureau Monitoring</h4>
              <div className="flex items-center justify-center gap-8 mb-6 py-4 bg-white rounded-lg">
                <img src={experianLogo} alt="Experian" className="h-8 object-contain" />
                <img src={equifaxLogo} alt="Equifax" className="h-8 object-contain" />
                <img src={transunionLogo} alt="TransUnion" className="h-8 object-contain" />
              </div>
              <p className="text-gray-700 mb-4">
                SmartCredit provides instant access to your credit reports from Experian, Equifax, and TransUnion. We need this to:
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">See your actual credit reports to file accurate disputes</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Track your progress in real-time (you see what we see)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Ensure both you and your account manager have the same information</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Catch new items immediately</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 mb-6">
              <p className="text-lg font-bold text-[#3E3E3E]">Cost: <span className="text-blue-600">$27.99/month</span></p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-amber-800">
                <strong>Important:</strong> SmartCredit is a third-party service not owned by Mesa Group. You maintain direct control over your account.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h5 className="font-bold text-[#3E3E3E] mb-2">Why This Matters:</h5>
              <p className="text-gray-700">
                Without real-time monitoring, we're flying blind. Disputes could be resolved and we wouldn't know. New items could appear and we'd miss them. SmartCredit keeps everyone aligned, and keeps you in control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 10: THE 90-DAY GUARANTEE */}
      {/* ============================================ */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-4">
              90 Days. Real Results. Or <span className="text-green-600">Every Dollar Back</span>.
            </h2>
            <p className="text-xl text-gray-700">We don't just talk about results.
We put it in writing with our legally backed 90-Day Money-Back Guarantee.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
            <h3 className="text-xl font-bold text-[#3E3E3E] mb-6">How It Works</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" /> You Hold Up Your End:
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Keep SmartCredit 3-Bureau monitoring active</li>
                  <li>✓ Stay responsive to your account manager</li>
                  <li>✓ Keep your account current</li>
                  <li>✓ Avoid adding new late payments during the 90 days</li>
                  <li>✓ Follow your account manager's guidance</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" /> We Deliver Results:
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Remove at least 1 verifiable negative item within 90 days</li>
                  <li>✓ Provide monthly progress reports and portal access</li>
                  <li>✓ Work your file with advanced dispute methods</li>
                  <li>✓ Escalate violations to our legal team when needed</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-green-100 rounded-xl text-center">
              <p className="text-lg font-bold text-green-800 mb-2">If We Don't Deliver:</p>
              <p className="text-2xl font-bold text-green-600">You get 100% of your money back.
Every dollar you paid to Mesa Group.</p>
            </div>
          </div>

          <div className="bg-[#3E3E3E] rounded-2xl p-8 text-center">
            <p className="text-amber-400 font-semibold mb-2">Why We Can Offer This</p>
            <p className="text-white text-lg mb-4">Because we're that confident in the Mesa360 Credit System™.</p>
            <p className="text-gray-300 text-sm">
              Most clients see results in the first 30-45 days. We use advanced dispute methods, not cookie-cutter templates. Your dedicated account manager works your file personally. Our reputation depends on your success.
            </p>
            <p className="text-white font-bold mt-6 text-xl">
              This is The Mesa360 Guarantee.<br />
              Real Results in 90 Days, or Your Money Back.
            </p>

            <div className="max-w-2xl mx-auto space-y-4 mt-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <CalendlyPopupButton 
                  text="Schedule Your Free Consultation"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-lg font-bold"
                  showArrow={true}
                  prefillOptions={{
                    utm: { source: 'credit_repair_page', medium: 'website', campaign: 'mesa360_section_cta' }
                  }}
                />
                <a 
                  href={portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 border-2 border-gray-300 hover:bg-gray-50 rounded-lg transition-all duration-200 text-lg font-bold shadow-sm hover:shadow-md"
                >
                  Get Free Credit Analysis <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              
              {/* Full-width View Pricing button */}
              <button
                onClick={() => scrollToSection('pricing')}
                className="w-full inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500"
              >
                View Pricing & Plans
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 10B: WHAT'S NOT COVERED */}
      {/* ============================================ */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <AlertTriangle className="w-16 h-16 text-orange-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-4">
              What's <span className="text-orange-600">Not Covered</span> By The Mesa 360<br />
              90-Day Money Back Guarantee
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Transparency is important to us. Here's what the Mesa 360 90-Day Money-Back Guarantee does NOT cover:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1: SmartCredit */}
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-orange-200 rounded-xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <XCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-[#3E3E3E]">SmartCredit Monitoring Fees</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                The $27.99/month SmartCredit subscription is a separate third-party service and is not refundable through Mesa Group. SmartCredit has its own cancellation policy.
              </p>
            </div>

            {/* Card 2: Client Responsibilities */}
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-orange-200 rounded-xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <XCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-[#3E3E3E]">Cases Where Client Responsibilities Aren't Met</h3>
              </div>
              <p className="text-gray-700 mb-3">To qualify for the guarantee, you must:</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600">•</span>
                  <span>Keep your SmartCredit monitoring active for the full 90 days (no 30+ day gaps)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600">•</span>
                  <span>Respond to your account manager's communications (no 30+ days of silence)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600">•</span>
                  <span>Keep your Mesa account current (no invoices 30+ days past due)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600">•</span>
                  <span>Avoid adding new negative items during the first 90 days (new late payments, collections, charge-offs)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600">•</span>
                  <span>Avoid multiple new hard inquiries during the initial dispute period</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600">•</span>
                  <span>Follow guidance provided by your account manager</span>
                </li>
              </ul>
            </div>

            {/* Card 3: New Negatives */}
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-orange-200 rounded-xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <XCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-[#3E3E3E]">New Negatives Added During Service</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                If you add new late payments, new collections, or other new negative items after enrollment, those items are not covered by the removal guarantee. The guarantee applies to items on your report at the time of enrollment.
              </p>
            </div>

            {/* Card 4: Accurate Information */}
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-orange-200 rounded-xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <XCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-[#3E3E3E]">Accurate, Timely, and Verifiable Information</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Federal law (CROA) prohibits us from guaranteeing the removal of accurate information. If bureaus and creditors properly verify that negative items are accurate, complete, and timely, those items may remain on your report despite our best efforts. We can only legally dispute items that are inaccurate, incomplete, unverifiable, or outdated.
              </p>
            </div>

            {/* Card 5: Annual Plans After 90 Days */}
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-orange-200 rounded-xl p-6 md:col-span-2">
              <div className="flex items-start gap-3 mb-4">
                <XCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-[#3E3E3E]">Ruby & Emerald (Prepaid Annual Plans) After 90 Days</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                The 90-day money-back guarantee is your primary protection for annual plans. After 90 days, refunds are evaluated case-by-case based on work completed, as these are prepaid programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 10C: YOU'VE GOT NOTHING TO LOSE */}
      {/* ============================================ */}
      <section className="bg-gradient-to-br from-amber-50 to-yellow-50 py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-[#f9c65d] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-4">
              Risk-Free Credit Restoration: You've Got <span className="text-[#f9c65d]">Nothing to Lose</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Card 1: 3-Day Cancellation */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-[#f9c65d]">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
                <h3 className="text-2xl font-bold text-[#3E3E3E]">3-Day Cancellation Right (All Plans)</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Federal law (CROA) requires that we honor a 3-day cancellation period. If you enroll in Mesa 360 and change your mind for ANY reason within the first 3 days, you can cancel and receive a 100% refund of all Mesa fees paid. No questions asked.
              </p>
            </div>

            {/* Card 2: 90-Day Guarantee */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-[#f9c65d]">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
                <h3 className="text-2xl font-bold text-[#3E3E3E]">90-Day Money-Back Guarantee (When You Meet Your Part)</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                If you follow all client responsibilities for the first 90 days and we don't remove at least one negative item from your credit report, you get 100% of your money back. Every dollar you paid to Mesa Group.
              </p>
            </div>

            {/* Card 3: Cancel Anytime */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-[#f9c65d]">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
                <h3 className="text-2xl font-bold text-[#3E3E3E]">Monthly Plans: Cancel Anytime After 90 Days</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                For monthly Mesa 360 plans (Lite, Flex, Elite), you can cancel at any time after the initial 90 days with no penalties or future charges. You only pay for work already completed.
              </p>
            </div>

            {/* Card 4: Why This Matters */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-[#f9c65d]">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
                <h3 className="text-2xl font-bold text-[#3E3E3E]">Why This Guarantee Matters</h3>
              </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Most credit restoration companies don't offer this level of protection. We can make this guarantee because:
                </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#f9c65d]">•</span>
                  <span>We have a 91% success rate in removing or correcting negative items</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#f9c65d]">•</span>
                  <span>Our Mesa 360 system uses proven legal strategies, not generic template letters</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#f9c65d]">•</span>
                  <span>Our partnered legal team backs up our disputes when violations occur</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#f9c65d]">•</span>
                  <span>We've helped thousands of clients improve their credit scores (average 150-point increase)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Callout */}
          <div className="bg-gradient-to-r from-[#f9c65d] to-[#fcd34d] rounded-2xl p-8 md:p-10 text-center">
            <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              The only way you don't see results is if you don't hold up your end: keeping monitoring active, staying responsive, and avoiding new negatives.
            </p>
            <p className="text-xl text-gray-800 mb-6">
              If you do your part, we deliver results or refund your investment.
            </p>
            <p className="text-2xl font-bold text-gray-900 mb-6">
              Ready to start your credit transformation with zero risk?
            </p>
            <CalendlyPopupButton
              text="Start Your Risk-Free Credit Restoration"
              showArrow={true}
              className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-200 text-xl font-bold px-10 py-5"
              prefillOptions={{
                utm: { source: 'website', medium: 'credit_repair_2', campaign: 'risk_free_restoration_cta' }
              }}
            />
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 11: THE COST OF INACTION (Urgency) */}
      {/* ============================================ */}
      <section className="bg-gradient-to-br from-red-900 to-red-800 py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Clock className="w-16 h-16 text-red-300 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Every Month You Wait Costs You Money.
          </h2>
          <div className="text-left bg-white/10 backdrop-blur rounded-xl p-8 mb-8">
            <p className="text-white/90 text-lg mb-4">Right now, you're paying penalties for bad credit:</p>
            <div className="grid md:grid-cols-2 gap-4 text-white/80">
              <div className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-red-300 flex-shrink-0" />
                <span>Higher interest on every loan</span>
              </div>
              <div className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-red-300 flex-shrink-0" />
                <span>Security deposits on rentals and utilities</span>
              </div>
              <div className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-red-300 flex-shrink-0" />
                <span>Denials for jobs, apartments, and financing</span>
              </div>
              <div className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-red-300 flex-shrink-0" />
                <span>Stress, embarrassment, and limited options</span>
              </div>
            </div>
          </div>
          <p className="text-xl text-white mb-8">
            The longer you wait, the more it costs you. But it doesn't have to be this way.<br />
            <strong className="text-amber-400">Your financial transformation starts today.</strong>
          </p>
          <CalendlyPopupButton
            text="Start Your Credit Transformation Now"
            showArrow={true}
            className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-10 py-5"
            prefillOptions={{
              utm: { source: 'website', medium: 'credit_repair_2', campaign: 'transformation_now_cta' }
            }}
          />
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 12: FAQ */}
      {/* ============================================ */}
      <FAQ />

      {/* ============================================ */}
      {/* SECTION 13: FINAL TRUST BAR + FOOTER CTA */}
      {/* ============================================ */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#FFFBEC] from-40% to-[#FFECD7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Trust Recap */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">Mesa360 Credit System™</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">90-Day Money-Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">Nationwide from Bakersfield</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">Full Legal Team</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">2,500+ Clients Served</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">1-on-1 Financial Coaching</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">Trilingual Support</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">Real Office You Can Visit</span>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ready to Take Control of Your <span className="text-[#f9c65d]">Credit</span>?
            </h2>
            
            <CalendlyPopupButton
              text="Get Started Today"
              showArrow={true}
              className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 mb-4"
              prefillOptions={{
                utm: { source: 'website', medium: 'credit_repair_2', campaign: 'get_started_today_cta' }
              }}
            />
            
            <p className="text-gray-600 mb-6">
              Or call us: <a href="tel:6613103040" className="text-[#bb9446] hover:underline font-semibold">(661) 310-3040</a>
            </p>
            <p className="text-sm text-gray-500">Hablamos Español 🇪🇸 |  Assi Punjabi Bolde Haan 🇮🇳</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactFormSection />

      <Footer />

      {/* Newsletter Modal - Time-based (5s) + Exit-intent triggers */}
      <NewsletterModal 
        isOpen={isNewsletterOpen} 
        onClose={() => setIsNewsletterOpen(false)} 
      />
    </main>;
};
export default CreditRepair;