import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmotionalCTA1 from '@/components/trust-and-will/sections/EmotionalCTA1';
import EmotionalCTA2 from '@/components/trust-and-will/sections/EmotionalCTA2';
import EmotionalCTA3 from '@/components/trust-and-will/sections/EmotionalCTA3';
import { 
  Check, Scale, Lock, CheckCircle, FileText, Building2, Heart, 
  Handshake, Users, Home, Hospital, Smile, AlertTriangle, 
  DollarSign, ClipboardList, Clock, Briefcase, Cake, Wallet, 
  Dog, Laptop, Star, Shield, TrendingUp, FileCheck, UserCheck,
  ArrowRight, HelpCircle, Award, Baby, CircleDollarSign, PiggyBank,
  FileSignature, Globe, X
} from 'lucide-react';

const TrustAndWillPlan = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is an online Will or Trust legally binding?",
      answer: "Yes, absolutely. Our estate planning documents are built by licensed attorneys and customized to meet your specific state's legal requirements. Once you sign them according to your state's witness and notarization requirements (which we provide clear instructions for), they are 100% legally binding and enforceable in court. Thousands of families use online estate planning documents successfully every year."
    },
    {
      question: "What's the difference between a Will and a Trust?",
      answer: "A Will takes effect after you die and goes through probate court (a public, 6-12 month process). A Trust takes effect immediately, holds your assets during your lifetime, and transfers them privately after death—avoiding probate entirely. Both name guardians for children and specify your wishes. Choose a Will if you have a modest estate and don't mind probate. Choose a Trust if you own a home, want privacy, or have significant assets ($100K+)."
    },
    {
      question: "Do I need an attorney to create a Will or Trust?",
      answer: "No. Our platform is built BY attorneys but designed FOR everyday people to use without legal help. The documents are attorney-crafted, state-specific templates that you customize by answering simple questions. It's the same quality as hiring an attorney, but you save $2,000-$5,000 and avoid multiple appointments. However, if your estate is extremely complex (business ownership, international assets, special needs trusts), you may want to consult with an attorney."
    },
    {
      question: "What happens if I don't have a Will or Trust?",
      answer: "If you die without a Will or Trust, you die 'intestate' and state law decides what happens to your assets and who raises your children. This process (called intestate succession) may not match your wishes at all. For example, if you're unmarried with kids, your assets might go to your parents instead of your children. Courts will appoint guardians for your kids—possibly someone you wouldn't choose. Plus, your estate goes through probate, which costs 3-7% of your estate value and takes 6-24 months."
    },
    {
      question: "Can I update my Will or Trust after I create it?",
      answer: "Yes! Life changes (marriage, divorce, new children, moving states), and your estate plan should change with it. With a Will plan, you can log back in anytime and create an updated version for a small fee. With a Trust plan, your first year of membership is FREE ($39/year after), which includes unlimited updates. You can add assets, change beneficiaries, update guardians, or make any other changes whenever needed."
    },
    {
      question: "How do I know which plan to choose—Will or Trust?",
      answer: "Choose a Will if: you're young (under 40), have minimal assets (under $100K), don't own a home, and are okay with the probate process. Choose a Trust if: you own a home, have assets over $100K, want to avoid probate, value privacy, want faster asset transfer, or have a complex family situation (blended family, children from multiple relationships). Most homeowners choose the Trust plan. Still not sure? The questionnaire will help guide you."
    },
    {
      question: "What if I live in multiple states or plan to move?",
      answer: "Your estate planning documents are state-specific and based on where you currently live. If you move to a new state, you should update your documents to comply with that state's laws. With membership (included free first year with Trust plan), you can easily update your documents for your new state. Some states have significantly different requirements, so updating is important."
    },
    {
      question: "Do I need witnesses or a notary?",
      answer: "It depends on your state. Most states require 2-3 witnesses for Wills (who are NOT beneficiaries), and some also require notarization. Trusts typically require notarization but not witnesses. We provide clear, state-specific instructions on exactly what your state requires. You can find notaries at banks, UPS stores, or use online notarization services (available in most states)."
    },
    {
      question: "Can my spouse and I create one joint Will or Trust?",
      answer: "We recommend each spouse have their own separate Will or Trust (called 'mirror' documents). This is the standard legal practice and avoids complications. Our couples pricing bundles two individual plans together at a discount ($299 for Will couples plan, $599 for Trust couples plan). Each spouse's documents work together but remain legally separate."
    },
    {
      question: "What if I have minor children? How do I name guardians?",
      answer: "Both the Will and Trust plans allow you to nominate guardians for your minor children (and pets!). You can name a primary guardian and backup guardians. If something happens to both parents, the court will appoint your chosen guardian to raise your children. Without a Will or Trust, the court decides who raises your kids—which may not be who you'd want. Naming guardians is one of the most important reasons parents create estate plans."
    }
  ];

  const handleCTAClick = () => {
    window.open('https://trustandwill.com/?utm_source=novae&utm_medium=partnerships&p_id=110&c_id=mesagroup', '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="min-h-screen">
      <Header />
      {/* SECTION 1: HERO */}
      <section className="bg-gradient-to-br from-white via-amber-50 to-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* LEFT COLUMN - Content */}
            <div>
              {/* Eyebrow */}
              <p className="text-sm uppercase tracking-wide text-gray-700 mb-4 font-medium">
                Trust & Will Estate Planning
              </p>
              
              {/* H1 Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Protect Your <span className="text-amber-600">Family</span>. Secure Your <span className="text-amber-600">Legacy</span>.
              </h1>
              
              {/* Subheadline */}
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                Create a legally-binding Will or Trust online in 20 minutes—built by attorneys, customized by you. Starting at a fraction of traditional attorney fees.
              </p>
              
              {/* Value Props Quick List */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700"><strong>Attorney-built documents</strong> – state-specific & legally binding</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700"><strong>Create online in 20 minutes</strong> – no appointments needed</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700"><strong>Save thousands vs attorneys</strong> – plans from $199</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700"><strong>Avoid probate with Trusts</strong> – keep affairs private</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700"><strong>30-day money-back guarantee</strong> – risk-free</span>
                </li>
              </ul>
              
              {/* Primary CTA */}
              <button 
                onClick={handleCTAClick}
                className="text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-lg font-semibold px-8 py-4 w-full md:w-auto"
              >
                Create Your Estate Plan
              </button>
              
              <p className="text-sm text-gray-600 mt-4">
                Takes 20 minutes. Instant download. No appointments required.
              </p>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <Scale className="w-6 h-6 text-[#bb9446]" />
                  <span className="text-sm font-medium text-[#3E3E3E]">Attorney-Built</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-6 h-6 text-[#bb9446]" />
                  <span className="text-sm font-medium text-[#3E3E3E]">Bank-Level Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-[#bb9446]" />
                  <span className="text-sm font-medium text-[#3E3E3E]">State-Specific</span>
                </div>
              </div>
            </div>
            
            {/* RIGHT COLUMN - Visual */}
            <div className="hidden md:block">
              <div className="bg-white rounded-lg shadow-2xl p-6 border-2 border-[#bb9446]">
                <h3 className="text-lg font-bold text-[#3E3E3E] mb-4 text-center">
                  What's Included in Your Estate Plan?
                </h3>
                
                <div className="space-y-4">
                  {/* Last Will & Testament */}
                  <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <FileText className="w-8 h-8 text-blue-600 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-[#3E3E3E]">Last Will & Testament</div>
                      <div className="text-sm text-gray-600">Decide who gets your assets, name guardians for children/pets</div>
                    </div>
                  </div>
                  
                  {/* Living Trust (Trust Plan Only) */}
                  <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <Building2 className="w-8 h-8 text-purple-600 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-[#3E3E3E]">Revocable Living Trust</div>
                      <div className="text-sm text-gray-600">Avoid probate, keep affairs private (Trust plan only)</div>
                    </div>
                  </div>
                  
                  {/* Healthcare Directives */}
                  <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <Hospital className="w-8 h-8 text-green-600 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-[#3E3E3E]">Healthcare Directives</div>
                      <div className="text-sm text-gray-600">Living Will, medical decisions, HIPAA authorization</div>
                    </div>
                  </div>
                  
                  {/* Power of Attorney */}
                  <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <Handshake className="w-8 h-8 text-[#bb9446] flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-[#3E3E3E]">Power of Attorney</div>
                      <div className="text-sm text-gray-600">Assign someone to handle finances if incapacitated</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-[#f8d899] rounded-lg text-center">
                  <div className="text-sm text-gray-700 mb-1">Starting at</div>
                  <div className="text-3xl font-bold text-[#bb9446]">$199</div>
                  <div className="text-xs text-gray-600 mt-1">vs $2,000-$5,000 for attorney</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <EmotionalCTA1 />

      {/* SECTION 2: WHY YOU NEED ESTATE PLANNING */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-4 text-center">
            Why Estate Planning Matters
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Without a Will or Trust, state law decides what happens to your assets and children. Don't leave it to chance.
          </p>
          
          {/* 5 Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            
            {/* Reason 1: Protect Children */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 text-center shadow-md border-2 border-blue-200">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-3">
                Protect Your Children
              </h3>
              <p className="text-sm text-gray-700">
                Name guardians for minor children. Without a Will, the court decides who raises your kids.
              </p>
            </div>
            
            {/* Reason 2: Control Assets */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-6 text-center shadow-md border-2 border-green-200">
              <div className="flex justify-center mb-4">
                <Home className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-3">
                Control Your Assets
              </h3>
              <p className="text-sm text-gray-700">
                Decide who gets your home, savings, investments, and possessions—not the government.
              </p>
            </div>
            
            {/* Reason 3: Avoid Probate */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 text-center shadow-md border-2 border-purple-200">
              <div className="flex justify-center mb-4">
                <Scale className="w-12 h-12 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-3">
                Avoid Probate Court
              </h3>
              <p className="text-sm text-gray-700">
                With a Trust, assets transfer privately and quickly—no lengthy court process or public records.
              </p>
            </div>
            
            {/* Reason 4: Medical Wishes */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 text-center shadow-md border-2 border-orange-200">
              <div className="flex justify-center mb-4">
                <Hospital className="w-12 h-12 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-3">
                Specify Medical Wishes
              </h3>
              <p className="text-sm text-gray-700">
                Document healthcare preferences and assign someone to make medical decisions if you can't.
              </p>
            </div>
            
            {/* Reason 5: Peace of Mind */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 text-center shadow-md border-2 border-yellow-200">
              <div className="flex justify-center mb-4">
                <Smile className="w-12 h-12 text-[#f9c65d]" />
              </div>
              <h3 className="text-lg font-bold text-[#3E3E3E] mb-3">
                Give Peace of Mind
              </h3>
              <p className="text-sm text-gray-700">
                Protect your family from stress, confusion, and conflict during an already difficult time.
              </p>
            </div>
            
          </div>
          
          {/* Urgency Callout */}
          <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-12 h-12 text-orange-500 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-[#3E3E3E] mb-3">
                  What Happens Without an Estate Plan?
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span>Courts decide who raises your children</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span>State law dictates asset distribution (may not match your wishes)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span>Estate goes through probate (6-24 months, 3-7% fees)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span>Financial affairs become public record</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span>Family conflict and legal battles over assets</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* SECTION 3: WILL VS TRUST COMPARISON */}
      <section className="bg-[#E5D2AF] py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-4 text-center">
            Will Estate Plan vs Trust Estate Plan
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Both protect your family, but they work differently. Choose the plan that fits your situation.
          </p>
          
          {/* Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Will Estate Plan */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  <FileText className="w-16 h-16 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-[#3E3E3E] mb-2">Will Estate Plan</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">$199</div>
                <div className="text-sm text-gray-600">Individual | $299 Couples</div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-gray-700">Last Will & Testament</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-gray-700">Name guardians for children & pets</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-gray-700">Healthcare directives & Living Will</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-gray-700">Power of Attorney</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-gray-700">State-specific & legally binding</span>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-200 space-y-3">
                <h4 className="font-semibold text-[#3E3E3E]">Best for:</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Younger individuals (under 40)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Modest estates (under $100K)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Renters or non-homeowners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Simple estate situations</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="text-sm text-gray-700">
                  <strong>Note:</strong> Estate goes through probate (6-12 months, public record, 3-7% fees)
                </div>
              </div>
              
              <button 
                onClick={handleCTAClick}
                className="w-full mt-6 bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 font-semibold px-6 py-3"
              >
                Choose Will Plan
              </button>
            </div>
            
            {/* Trust Estate Plan */}
            <div className="bg-white rounded-lg p-8 shadow-2xl border-4 border-[#bb9446] relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#bb9446] text-white px-6 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              
              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  <Building2 className="w-16 h-16 text-[#bb9446]" />
                </div>
                <h3 className="text-2xl font-bold text-[#3E3E3E] mb-2">Trust Estate Plan</h3>
                <div className="text-3xl font-bold text-[#bb9446] mb-2">$499</div>
                <div className="text-sm text-gray-600">Individual | $599 Couples</div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-gray-700"><strong>Revocable Living Trust</strong></span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-gray-700"><strong>Avoid probate entirely</strong></span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-gray-700">Last Will & Testament (pour-over)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-gray-700">Name guardians for children & pets</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-gray-700">Healthcare directives & Living Will</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-gray-700">Power of Attorney</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-gray-700"><strong>First year membership FREE</strong> ($39/year after)</span>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-200 space-y-3">
                <h4 className="font-semibold text-[#3E3E3E]">Best for:</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Homeowners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Assets over $100K</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Anyone wanting to avoid probate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Those who value privacy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Blended families</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                <div className="text-sm text-gray-700">
                  <strong>Benefit:</strong> Assets transfer immediately and privately—no court, no delays, no public record
                </div>
              </div>
              
              <button 
                onClick={handleCTAClick}
                className="w-full mt-6 bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 font-semibold px-6 py-3"
              >
                Choose Trust Plan
              </button>
            </div>
            
          </div>
          
          {/* Key Difference Callout */}
          <div className="mt-12 bg-white rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#3E3E3E] mb-4 text-center">
              The Key Difference: Probate
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-[#3E3E3E] mb-3">With a Will (Probate)</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 flex-shrink-0" strokeWidth={2.5} />
                    <span>6-24 months court process</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 flex-shrink-0" strokeWidth={2.5} />
                    <span>3-7% of estate value in fees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 flex-shrink-0" strokeWidth={2.5} />
                    <span>Public record (anyone can see)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 flex-shrink-0" strokeWidth={2.5} />
                    <span>Family can contest</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#3E3E3E] mb-3">With a Trust (No Probate)</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" strokeWidth={2.5} />
                    <span>Immediate transfer (days/weeks)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" strokeWidth={2.5} />
                    <span>Minimal fees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" strokeWidth={2.5} />
                    <span>100% private</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" strokeWidth={2.5} />
                    <span>Much harder to contest</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* SECTION 4: HOW IT WORKS */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-4 text-center">
            How It Works
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Creating your estate plan is simple. Most people complete the entire process in 20 minutes.
          </p>
          
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#f9c65d] rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-[#3E3E3E]">
                1
              </div>
              <h3 className="text-xl font-bold text-[#3E3E3E] mb-3">Answer Questions</h3>
              <p className="text-gray-700">
                Tell us about yourself, your family, your assets, and your wishes. Simple questions in plain English—no legal jargon.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#f9c65d] rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-[#3E3E3E]">
                2
              </div>
              <h3 className="text-xl font-bold text-[#3E3E3E] mb-3">Review & Customize</h3>
              <p className="text-gray-700">
                Our platform generates your state-specific documents. Review them, make changes if needed, and finalize.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#f9c65d] rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-[#3E3E3E]">
                3
              </div>
              <h3 className="text-xl font-bold text-[#3E3E3E] mb-3">Download & Sign</h3>
              <p className="text-gray-700">
                Instantly download your documents. Follow our clear state-specific instructions for signing, witnessing, and notarization.
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#f9c65d] rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-[#3E3E3E]">
                4
              </div>
              <h3 className="text-xl font-bold text-[#3E3E3E] mb-3">You're Protected</h3>
              <p className="text-gray-700">
                Store your documents safely. Share copies with executors, guardians, and family. Update anytime life changes.
              </p>
            </div>
            
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <button 
              onClick={handleCTAClick}
              className="text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-lg font-semibold px-8 py-4"
            >
              Get Started Now
            </button>
            <p className="text-sm text-gray-600 mt-4">
              20 minutes to complete • No credit card to start • 30-day guarantee
            </p>
          </div>
          
        </div>
      </section>

      <EmotionalCTA2 />

      {/* SECTION 5: PRICING DETAILS */}
      <section className="bg-[#E5D2AF] py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-4 text-center">
            Simple, Transparent Pricing
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            No hidden fees. No surprise charges. One price includes everything you need to protect your family.
          </p>
          
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            
            {/* Will Pricing */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#3E3E3E] mb-6 text-center">Will Estate Plan</h3>
              
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-blue-600 mb-2">$199</div>
                <div className="text-gray-600">Individual Plan</div>
              </div>
              
              <div className="text-center mb-8 pb-8 border-b border-gray-200">
                <div className="text-4xl font-bold text-blue-600 mb-2">$299</div>
                <div className="text-gray-600">Couples Plan</div>
                <div className="text-sm text-green-600 font-semibold mt-1">Save $99</div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" strokeWidth={2.5} />
                  <span className="text-gray-700">Last Will & Testament</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" strokeWidth={2.5} />
                  <span className="text-gray-700">Healthcare directives</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" strokeWidth={2.5} />
                  <span className="text-gray-700">Power of Attorney</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" strokeWidth={2.5} />
                  <span className="text-gray-700">Digital vault storage</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" strokeWidth={2.5} />
                  <span className="text-gray-700">24/7 customer support</span>
                </div>
              </div>
              
              <button 
                onClick={handleCTAClick}
                className="w-full bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 font-semibold px-6 py-3"
              >
                Get Will Plan
              </button>
            </div>
            
            {/* Trust Pricing */}
            <div className="bg-white rounded-lg p-8 shadow-2xl border-4 border-[#bb9446]">
              <div className="bg-[#bb9446] text-white text-center py-2 -mx-8 -mt-8 mb-6 rounded-t-lg font-bold">
                BEST VALUE • MOST POPULAR
              </div>
              
              <h3 className="text-2xl font-bold text-[#3E3E3E] mb-6 text-center">Trust Estate Plan</h3>
              
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-[#bb9446] mb-2">$499</div>
                <div className="text-gray-600">Individual Plan</div>
              </div>
              
              <div className="text-center mb-8 pb-8 border-b border-gray-200">
                <div className="text-4xl font-bold text-[#bb9446] mb-2">$599</div>
                <div className="text-gray-600">Couples Plan</div>
                <div className="text-sm text-green-600 font-semibold mt-1">Save $399</div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" strokeWidth={2.5} />
                  <span className="text-gray-700"><strong>Revocable Living Trust</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" strokeWidth={2.5} />
                  <span className="text-gray-700"><strong>Avoid probate entirely</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" strokeWidth={2.5} />
                  <span className="text-gray-700">Last Will & Testament</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" strokeWidth={2.5} />
                  <span className="text-gray-700">Healthcare directives</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" strokeWidth={2.5} />
                  <span className="text-gray-700">Power of Attorney</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" strokeWidth={2.5} />
                  <span className="text-gray-700">Digital vault storage</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" strokeWidth={2.5} />
                  <span className="text-gray-700"><strong>First year FREE membership</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" strokeWidth={2.5} />
                  <span className="text-gray-700">Unlimited updates (1st year)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" strokeWidth={2.5} />
                  <span className="text-gray-700">Priority support</span>
                </div>
              </div>
              
              <button 
                onClick={handleCTAClick}
                className="w-full bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 font-semibold px-6 py-3"
              >
                Get Trust Plan
              </button>
            </div>
            
          </div>
          
          {/* Comparison */}
          <div className="bg-white rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-[#3E3E3E] mb-6 text-center">
              Compare to Traditional Attorney Fees
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="py-3 px-4 font-semibold text-[#3E3E3E]">Service</th>
                    <th className="py-3 px-4 font-semibold text-[#3E3E3E] text-right">Online</th>
                    <th className="py-3 px-4 font-semibold text-[#3E3E3E] text-right">Attorney</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-700">Simple Will</td>
                    <td className="py-3 px-4 text-right text-green-600 font-semibold">$199</td>
                    <td className="py-3 px-4 text-right text-gray-700">$800-$1,500</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-700">Living Trust</td>
                    <td className="py-3 px-4 text-right text-green-600 font-semibold">$499</td>
                    <td className="py-3 px-4 text-right text-gray-700">$2,500-$5,000</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-700">Healthcare Directives</td>
                    <td className="py-3 px-4 text-right text-green-600 font-semibold">Included</td>
                    <td className="py-3 px-4 text-right text-gray-700">$200-$400</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-700">Power of Attorney</td>
                    <td className="py-3 px-4 text-right text-green-600 font-semibold">Included</td>
                    <td className="py-3 px-4 text-right text-gray-700">$200-$400</td>
                  </tr>
                  <tr className="bg-[#f8d899] font-bold">
                    <td className="py-4 px-4 text-[#3E3E3E]">Complete Estate Plan</td>
                    <td className="py-4 px-4 text-right text-[#bb9446] text-xl">$199-$499</td>
                    <td className="py-4 px-4 text-right text-gray-700 text-xl">$3,000-$7,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="text-center text-gray-600 mt-6">
              <strong>You save:</strong> $2,500-$6,500 on average by creating your estate plan online
            </p>
          </div>
          
        </div>
      </section>

      {/* SECTION 6: FAQ ACCORDION */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-6 text-center">
            Common <span className="text-amber-600">Questions</span> About Estate Planning
          </h2>
          <p className="text-xl text-gray-700 mb-12 text-center">
            Get answers to common questions about Wills, Trusts, and estate planning.
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

      {/* SECTION 7: WHO NEEDS ESTATE PLANNING */}
      <section className="bg-[#E5D2AF] py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-4 text-center">
            Who Needs Estate Planning?
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            You don't need to be wealthy or elderly to need an estate plan. If any of these apply to you, you need a Will or Trust today.
          </p>
          
          {/* Demographics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            
            {/* Parents with Minor Children */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-[#bb9446]" />
              </div>
              <h3 className="text-xl font-bold text-[#3E3E3E] mb-3 text-center">Parents with Minor Children</h3>
              <p className="text-sm text-gray-700 mb-4">
                <strong>Critical need:</strong> Without a Will, courts decide who raises your children if something happens to you.
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446]">•</span>
                  <span>Name guardians for kids (and pets)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446]">•</span>
                  <span>Set up trusts for minor children</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446]">•</span>
                  <span>Protect inheritance until they're adults</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-orange-50 rounded text-xs text-gray-700">
                <strong>Recommended:</strong> Will Plan minimum, Trust Plan ideal
              </div>
            </div>
            
            {/* Homeowners */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex justify-center mb-4">
                <Home className="w-12 h-12 text-[#bb9446]" />
              </div>
              <h3 className="text-xl font-bold text-[#3E3E3E] mb-3 text-center">Homeowners</h3>
              <p className="text-sm text-gray-700 mb-4">
                <strong>Save your family thousands:</strong> Probate costs 3-7% of estate value. On a $500K home, that's $15K-$35K in legal fees.
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446]">•</span>
                  <span>Avoid probate with a Trust</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446]">•</span>
                  <span>Transfer property immediately</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446]">•</span>
                  <span>Keep real estate affairs private</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-purple-50 rounded text-xs text-gray-700">
                <strong>Recommended:</strong> Trust Plan (avoids probate)
              </div>
            </div>
            
            {/* Blended Families */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-[#bb9446]" />
              </div>
              <h3 className="text-xl font-bold text-[#3E3E3E] mb-3 text-center">Blended Families</h3>
              <p className="text-sm text-gray-700 mb-4">
                <strong>Prevent family conflict:</strong> State law may give assets to people you don't intend. Clearly document your wishes.
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446]">•</span>
                  <span>Protect children from previous marriage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446]">•</span>
                  <span>Balance current spouse & kids' needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446]">•</span>
                  <span>Add conditions to distributions</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-purple-50 rounded text-xs text-gray-700">
                <strong>Recommended:</strong> Trust Plan (more control)
              </div>
            </div>
            
            {/* Unmarried Couples */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex justify-center mb-4">
                <Heart className="w-12 h-12 text-[#bb9446]" />
              </div>
              <h3 className="text-xl font-bold text-[#3E3E3E] mb-3 text-center">Unmarried Couples</h3>
              <p className="text-sm text-gray-700 mb-4">
                <strong>No automatic rights:</strong> Without marriage, your partner gets NOTHING by default. State law gives everything to blood relatives.
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446]">•</span>
                  <span>Leave assets to your partner</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446]">•</span>
                  <span>Grant medical decision-making rights</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446]">•</span>
                  <span>Prevent family from contesting wishes</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-orange-50 rounded text-xs text-gray-700">
                <strong>Recommended:</strong> Will Plan minimum, Trust Plan ideal
              </div>
            </div>
            
            {/* Business Owners */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex justify-center mb-4">
                <Briefcase className="w-12 h-12 text-[#bb9446]" />
              </div>
              <h3 className="text-xl font-bold text-[#3E3E3E] mb-3 text-center">Business Owners</h3>
              <p className="text-sm text-gray-700 mb-4">
                <strong>Protect your business:</strong> Without planning, your business could be frozen or sold during probate, destroying value.
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446]">•</span>
                  <span>Plan business succession</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446]">•</span>
                  <span>Avoid probate disruption</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446]">•</span>
                  <span>Transfer ownership smoothly</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-purple-50 rounded text-xs text-gray-700">
                <strong>Recommended:</strong> Trust Plan + business attorney
              </div>
            </div>
            
            {/* Anyone Over 40 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex justify-center mb-4">
                <Cake className="w-12 h-12 text-[#bb9446]" />
              </div>
              <h3 className="text-xl font-bold text-[#3E3E3E] mb-3 text-center">Anyone Over 40</h3>
              <p className="text-sm text-gray-700 mb-4">
                <strong>Life is unpredictable:</strong> Accidents, illness, and incapacity can happen at any age. Protect yourself and your family.
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446]">•</span>
                  <span>Document healthcare wishes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446]">•</span>
                  <span>Assign Power of Attorney</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446]">•</span>
                  <span>Give family clear guidance</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-blue-50 rounded text-xs text-gray-700">
                <strong>Recommended:</strong> Will Plan at minimum
              </div>
            </div>
            
            {/* High Net Worth */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex justify-center mb-4">
                <DollarSign className="w-12 h-12 text-[#bb9446]" />
              </div>
              <h3 className="text-xl font-bold text-[#3E3E3E] mb-3 text-center">High Net Worth Individuals</h3>
              <p className="text-sm text-gray-700 mb-4">
                <strong>Significant assets ($500K+):</strong> Probate is expensive, public, and slow. Trusts protect wealth and privacy.
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446]">•</span>
                  <span>Minimize estate taxes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446]">•</span>
                  <span>Keep financial details private</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446]">•</span>
                  <span>Control how/when heirs receive assets</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-purple-50 rounded text-xs text-gray-700">
                <strong>Recommended:</strong> Trust Plan essential
              </div>
            </div>
            
            {/* Pet Parents */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex justify-center mb-4">
                <Dog className="w-12 h-12 text-[#bb9446]" />
              </div>
              <h3 className="text-xl font-bold text-[#3E3E3E] mb-3 text-center">Pet Parents</h3>
              <p className="text-sm text-gray-700 mb-4">
                <strong>Protect your pets:</strong> Without planning, your pets could end up in shelters. Name caregivers and set aside funds.
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446]">•</span>
                  <span>Name pet guardians</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446]">•</span>
                  <span>Allocate money for pet care</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446]">•</span>
                  <span>Document care instructions</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-blue-50 rounded text-xs text-gray-700">
                <strong>Recommended:</strong> Will Plan at minimum
              </div>
            </div>
            
            {/* Digital Assets */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex justify-center mb-4">
                <Laptop className="w-12 h-12 text-[#bb9446]" />
              </div>
              <h3 className="text-xl font-bold text-[#3E3E3E] mb-3 text-center">Digital Asset Owners</h3>
              <p className="text-sm text-gray-700 mb-4">
                <strong>Modern wealth:</strong> Cryptocurrency, online businesses, digital art, and social media accounts need planning too.
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446]">•</span>
                  <span>Document cryptocurrency access</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446]">•</span>
                  <span>Assign digital executor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#bb9446]">•</span>
                  <span>Plan for online business transfer</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-purple-50 rounded text-xs text-gray-700">
                <strong>Recommended:</strong> Trust Plan
              </div>
            </div>
            
          </div>
          
          {/* Universal Truth */}
          <div className="bg-white rounded-lg p-8 max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-[#3E3E3E] mb-4">
              The Truth: Everyone Needs Estate Planning
            </h3>
            <p className="text-gray-700 text-lg mb-4">
              If you have <strong>anyone you care about</strong>, <strong>anything you own</strong>, or <strong>any wishes for your care</strong>, you need an estate plan.
            </p>
            <p className="text-gray-700">
              It's not about age or wealth—it's about protecting the people and things you love. The average cost of creating an estate plan online is $199-$599. The average cost of NOT having one is <strong>$15,000-$50,000+</strong> in probate fees, plus months of stress for your family.
            </p>
            <p className="text-[#bb9446] font-bold text-xl mt-4">
              Which would you rather invest in?
            </p>
          </div>
          
        </div>
      </section>

      {/* SECTION 8: SUCCESS STORIES & TESTIMONIALS */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E3E3E] mb-4 text-center">
            Real Families, Real Peace of Mind
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 text-center">
            See how families across America are protecting their loved ones with Trust & Will.
          </p>
          
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-lg p-6 shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />
                ))}
              </div>
              <p className="text-white mb-4 italic leading-relaxed">
                "As a new mom, I kept putting off creating a Will because I thought it would be complicated and expensive. This platform made it SO easy. In 20 minutes, I named guardians for my daughter and designated where everything goes. The peace of mind is priceless."
              </p>
              <div className="pt-4 border-t border-white/30">
                <p className="font-semibold text-white">Rachel M.</p>
                <p className="text-sm text-white/90">Will Estate Plan • New parent</p>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-lg p-6 shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />
                ))}
              </div>
              <p className="text-white mb-4 italic leading-relaxed">
                "My wife and I own our home and have investment accounts. We knew we needed a Trust to avoid probate but didn't want to spend $5,000 on an attorney. For $599, we got everything we needed—state-specific, legally binding, and done from our couch in under an hour."
              </p>
              <div className="pt-4 border-t border-white/30">
                <p className="font-semibold text-white">David & Jennifer K.</p>
                <p className="text-sm text-white/90">Trust Estate Plan • Homeowners</p>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-lg p-6 shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />
                ))}
              </div>
              <p className="text-white mb-4 italic leading-relaxed">
                "My dad passed away without a Will and the probate process was a nightmare—9 months, tons of legal fees, and family fighting. I swore I'd never put my kids through that. Creating my Trust online was the smartest thing I've ever done. My estate will transfer immediately with zero court involvement."
              </p>
              <div className="pt-4 border-t border-white/30">
                <p className="font-semibold text-white">Michael T.</p>
                <p className="text-sm text-white/90">Trust Estate Plan • Learned the hard way</p>
              </div>
            </div>
            
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#bb9446] mb-2">1M+</div>
              <div className="text-gray-700">Families protected</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#bb9446] mb-2">$2,500</div>
              <div className="text-gray-700">Average savings vs attorney</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#bb9446] mb-2">4.8/5</div>
              <div className="text-gray-700">Customer rating</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#bb9446] mb-2">20 min</div>
              <div className="text-gray-700">Average completion time</div>
            </div>
          </div>
          
          {/* Trust Certifications */}
          <div className="bg-[#E5D2AF] rounded-lg p-8">
            <h3 className="text-2xl font-bold text-[#3E3E3E] mb-6 text-center">
              Your Estate Plan is Secure & Legally Sound
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="flex justify-center mb-2">
                  <Scale className="w-10 h-10 text-[#bb9446]" />
                </div>
                <div className="font-semibold text-[#3E3E3E] mb-1">Attorney-Built Documents</div>
                <div className="text-sm text-gray-600">Created by licensed legal professionals</div>
              </div>
              <div>
                <div className="flex justify-center mb-2">
                  <Lock className="w-10 h-10 text-[#bb9446]" />
                </div>
                <div className="font-semibold text-[#3E3E3E] mb-1">Bank-Level Encryption</div>
                <div className="text-sm text-gray-600">256-bit SSL security protection</div>
              </div>
              <div>
                <div className="flex justify-center mb-2">
                  <CheckCircle className="w-10 h-10 text-[#bb9446]" />
                </div>
                <div className="font-semibold text-[#3E3E3E] mb-1">State-Specific Compliance</div>
                <div className="text-sm text-gray-600">Meets all legal requirements</div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <EmotionalCTA3 />

      {/* SECTION 9: FINAL CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Protect Your Family & Secure Your <span className="text-amber-400">Legacy</span>?
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl text-gray-300 mb-12">
            Create your attorney-built, state-specific Will or Trust online in 20 minutes. No appointments. No expensive attorneys.
          </p>

          {/* Two-Column Button Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Primary Option - Trust Plan (Orange Gradient) */}
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 text-left">
              <div className="text-xs font-bold mb-2 tracking-wide">MOST POPULAR</div>
              <h3 className="text-2xl font-bold mb-4">Trust Estate Plan</h3>
              <div className="text-4xl font-bold mb-2">$499</div>
              <p className="text-sm opacity-90 mb-6">Revocable Living Trust + All Will Plan benefits</p>
              <button 
                onClick={handleCTAClick}
                className="block w-full text-center py-4 px-6 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-lg transition-colors mb-4"
              >
                Choose Trust Plan
              </button>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Avoids probate entirely</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>First year membership FREE</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Immediate asset transfer</span>
                </div>
              </div>
            </div>

            {/* Secondary Option - Will Plan (Glass Effect) */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-left border-2 border-white/20">
              <div className="text-xs font-bold mb-2 tracking-wide opacity-0">PLACEHOLDER</div>
              <h3 className="text-2xl font-bold mb-4">Will Estate Plan</h3>
              <div className="text-4xl font-bold mb-2">$199</div>
              <p className="text-sm opacity-90 mb-6">Last Will, Healthcare Directives, Power of Attorney</p>
              <button 
                onClick={handleCTAClick}
                className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500"
              >
                Choose Will Plan
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-400" />
                  <span>Attorney-built documents</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-400" />
                  <span>State-specific & legally binding</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-400" />
                  <span>Name guardians for children</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-amber-400" />
              <span>30-Day Money-Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-amber-400" />
              <span>Takes Only 20 Minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-amber-400" />
              <span>Bank-Level Security</span>
            </div>
          </div>

          {/* Additional Info */}
          <p className="text-sm text-gray-400 mt-6">
            Couples plans available • Instant download • Unlimited updates with membership
          </p>

          {/* Alternative Links */}
          <div className="mt-12 pt-8 border-t-2 border-white/20">
            <p className="text-gray-300 mb-3">
              Need help with other financial matters?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/credit-repair" 
                className="text-amber-400 hover:text-amber-300 font-semibold underline"
              >
                Credit Repair
              </a>
              <span className="text-gray-500">|</span>
              <a 
                href="/debt-consolidation" 
                className="text-amber-400 hover:text-amber-300 font-semibold underline"
              >
                Debt Consolidation
              </a>
              <span className="text-gray-500">|</span>
              <a 
                href="/life-insurance" 
                className="text-amber-400 hover:text-amber-300 font-semibold underline"
              >
                Life Insurance
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
};

export default TrustAndWillPlan;
