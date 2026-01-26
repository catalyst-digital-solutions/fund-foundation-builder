import {
  CheckCircle,
  Heart,
  Shield,
  BookOpen,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Users,
  DollarSign,
  Star,
  Home,
  Briefcase,
  RefreshCw,
  GraduationCap,
  CreditCard,
  Car,
  PieChart,
  Umbrella,
  Scale,
  LifeBuoy,
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CalendlyPopupButton } from '@/components/CalendlyPopupButton';

const AboutUs = () => {
  const teamMembers = [
    { name: "Evert Jafet Calderon", role: "Visionary Operations Officer", languages: "Spanish/English" },
    { name: "Justin Calderon", role: "Client Solutions Coordinator", languages: "Spanish/English" },
    { name: "Daniel Hardtmann", role: "Client Solutions Advisor", languages: "Spanish/English" },
    { name: "Monika Kakalia", role: "Client Support Specialist", languages: "Punjabi/English" },
    { name: "Valerie Cazarez", role: "Media Content Representative", languages: "Spanish/English" },
    { name: "Josselin Banda", role: "Media Content Representative", languages: "Spanish/English" },
    { name: "Stephanie Gonzalez", role: "Client Solutions Advisor", languages: "Spanish/English" },
    { name: "Shirley Uriarte", role: "Client Support Specialist", languages: "Spanish/English" },
    { name: "Gurpreet Kaur", role: "Client Support Specialist", languages: "Punjabi/English" },
    { name: "Anchal Varma", role: "Client Support Specialist", languages: "Punjabi/English" },
    { name: "Gurtej Singh", role: "Client Solutions Director", languages: "Punjabi/English" },
    { name: "Aileen Calderon", role: "Office Operations Manager", languages: "Spanish/English" },
    { name: "Harpreet Moore", role: "Client Solutions Advisor", languages: "Punjabi/English" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-white via-amber-50 to-white py-12 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6 lg:space-y-8">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#3e3e3e] leading-tight">
              We're Not Here to Sell You Services.<br className="hidden md:block" />
              We're Here to <span className="text-[#f9c65d]">Rewrite Your Financial Story.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Mesa Group was built by someone who lived through bad credit, financial mistakes, 
              and the shame of being turned down, so you'd never have to navigate it alone.
            </p>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Since 2023, we've helped 2,500+ families and businesses break free from financial limitations. 
              Not because we had some magic formula, but because we've been exactly where you are.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <CalendlyPopupButton
                text="Schedule Your Free Consultation"
                showArrow={true}
                prefillOptions={{
                  utm: { source: 'website', medium: 'about', campaign: 'hero_cta' }
                }}
              />

              <a
                href="tel:6613103040"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-[#bb9446] transition-colors shadow-md"
              >
                <Phone className="mr-2 w-5 h-5" />
                (661) 310-3040
              </a>
            </div>
            
            {/* Trust Bar */}
            <div className="flex flex-wrap justify-center items-center gap-6 pt-8 text-sm md:text-base text-gray-700">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>2,500+ Clients Served</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>150+ Five-Star Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>$100M+ in Funding Facilitated</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>Trilingual Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: THE MESA STORY */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3e3e3e] leading-tight text-center">
              Why "Mesa"?<br className="hidden md:block" />
              Because Money Should Be <span className="text-[#f9c65d]">Discussed at the Table</span>, Not Hidden from It.
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center">
              In most households, there's an unspoken rule: you don't talk about money at the dinner table. 
              Finances are private. Struggles stay hidden. Pride keeps the conversation closed, and the cycle continues.
            </p>
            
            <p className="text-xl md:text-2xl text-[#f9c65d] font-semibold leading-relaxed text-center">
              Mesa Group was founded to change that.
            </p>
            
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12 space-y-6">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                "Mesa" means table. We named this company to challenge that silence.
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                What if families actually sat down and talked about credit? About debt? About building 
                something for the next generation? What if there was someone at that table who understood 
                the struggle and could show you the way forward without judgment?
              </p>
              
              <p className="text-lg md:text-xl text-[#f9c65d] font-semibold leading-relaxed">
                That's what we built.
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Mesa Group Consulting was founded by a first-generation American who watched his immigrant 
                parents navigate a financial system no one explained to them. He saw the foreclosure notices. 
                The bankruptcy filing. The sacrifices they made because they didn't know there was another way.
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                And when he tried to start his own life, he made the same mistakes.
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Credit completely shot. Failed business. Nearly empty bank account. No guidance. No blueprint. 
                Just the belief that there had to be a better way.
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                That journey—from financial rock bottom to building a company that has helped thousands of 
                families take control of their future—is the foundation of everything we do.
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Today, Mesa Group serves clients from all backgrounds and walks of life. Because bad credit 
                doesn't discriminate, and neither do we.
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Whether you're a young professional trying to build from scratch, a parent trying to buy 
                your first home, or someone rebuilding after life knocked you down, you deserve guidance 
                that meets you where you are.
              </p>
              
              <p className="text-xl md:text-2xl text-[#f9c65d] font-semibold leading-relaxed text-center">
                That's why we exist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: MEET EVERT - THE FOUNDER */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3e3e3e] leading-tight text-center mb-12">
            The Man Behind Mesa:<br className="hidden md:block" />
            Why This Is <span className="text-[#f9c65d]">Personal</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Photo */}
            <div className="order-2 lg:order-1">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/evert-at-a-speaking-engagement-for-smartcredit.jpg"
                  alt="Evert Calderon speaking at SmartCredit event"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Right Column - Story */}
            <div className="space-y-6 order-1 lg:order-2">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                At 25, Evert had bad credit, a failed business, and nearly nothing in the bank.
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                But that's not even the painful part.
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                The painful part was watching his immigrant parents almost lose their home. Not because they 
                were lazy or irresponsible, but because no one ever explained how the financial system worked. 
                They worked two jobs. They paid their bills. They did everything they were supposed to do.
              </p>
              
              <p className="text-lg md:text-xl text-[#f9c65d] font-semibold leading-relaxed">
                And the system still almost crushed them.
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Evert watched his family file bankruptcy in the early 2000s. He saw what it did to them: the 
                stress, the shame, the feeling of failure even though they worked harder than anyone he knew.
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                When he tried to start his own life, he repeated the same mistakes. Credit cards he didn't 
                understand. Loans he couldn't afford. A business that collapsed under debt he didn't know how to manage.
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                The day he checked his credit for the first time? It was rock bottom.
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                He felt like a failure. Like he'd let his family down. Like he was destined to repeat their struggle.
              </p>
              
              <p className="text-xl md:text-2xl text-[#f9c65d] font-semibold leading-relaxed">
                But then he realized something that changed everything:
              </p>
              
              <p className="text-xl md:text-2xl text-[#3e3e3e] font-bold leading-relaxed">
                Bad credit doesn't mean you're irresponsible. It means no one taught you.
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                And if no one taught his parents—hardworking immigrants who risked everything to come to 
                this country and build a life—then how many other families were out there navigating this system blind?
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                That's why he built Mesa Group.
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Not to build a business. To build a movement, one family at a time.
              </p>
              
              <p className="text-lg md:text-xl text-[#f9c65d] font-semibold leading-relaxed">
                He built it to be the strategic financial partner his family never had when they needed it most.
              </p>
            </div>
          </div>
          
          {/* Results Section */}
          {/* CTA after Mesa Story */}
          <div className="mt-12 text-center">
            <CalendlyPopupButton
              text="Let's Talk About Your Financial Goals"
              showArrow={true}
              prefillOptions={{
                utm: { source: 'website', medium: 'about', campaign: 'mesa_story_cta' }
              }}
            />
          </div>

          <div className="mt-16 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#3e3e3e] mb-8 text-center">The Results</h3>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Today, Mesa Group has:
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-lg md:text-xl text-gray-700">
                  Helped 2,500+ families and businesses transform their finances
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-lg md:text-xl text-gray-700">
                  Facilitated over $100M in funding through partner networks
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-lg md:text-xl text-gray-700">
                  Turned denied applications into mortgage approvals
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-lg md:text-xl text-gray-700">
                  Turned failed businesses into funded success stories
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-lg md:text-xl text-gray-700">
                  Built a perfect 5-star rating across 150+ Google reviews
                </span>
              </li>
            </ul>
            
            <p className="text-xl md:text-2xl text-[#f9c65d] font-semibold leading-relaxed mb-4">
              But here's what Evert is most proud of:
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Every single client Mesa Group has helped is now equipped to teach the next generation. 
              They understand how credit works. They know how to access capital. They can build wealth that lasts.
            </p>
            
            <p className="text-xl md:text-2xl text-[#3e3e3e] font-bold leading-relaxed mt-6">
              That's the real legacy. Not fixing credit. Breaking generational curses.
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-6">
              This isn't just business for Evert. This is personal. This is his family's story.
            </p>
            
            <p className="text-lg md:text-xl text-[#f9c65d] font-semibold leading-relaxed">
              And it's probably yours too.
            </p>
          </div>
          
          <div className="mt-8 text-center">
            <CalendlyPopupButton
              text="Get Your Free Consultation"
              showArrow={true}
              prefillOptions={{
                utm: { source: 'website', medium: 'about', campaign: 'founder_story_cta' }
              }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR MISSION */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3e3e3e] leading-tight">
            Our Mission:<br className="hidden md:block" />
            Financial Freedom for <span className="text-[#f9c65d]">Every Generation</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            To provide fast, ethical, and empowering financial solutions that help people across all 
            generations and backgrounds take control of their credit, funding, and financial future.
          </p>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            We are deeply committed to serving first-generation families and communities that traditional 
            financial services have historically overlooked.
          </p>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            We help the younger generation avoid the mistakes we made. We show the older generation that 
            it's never too late to start. And we treat every client—whether they walk in with a 300 or an 
            800—with the same respect and dedication.
          </p>
          
          <div className="pt-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#3e3e3e] mb-8">
              Three Promises We Make
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 text-left">
              
              {/* Promise 1 */}
              <div className="bg-white border-2 border-amber-200 rounded-xl p-6 space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-[#bb9446]" />
                </div>
                <h4 className="text-xl font-bold text-[#3e3e3e]">
                  To the Young Professional Building from Scratch
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  You won't repeat the mistakes your parents made. Not on our watch. We'll teach you how to 
                  build credit the right way from day one, so by the time you're ready to buy your first 
                  home or start your business, you're approved, not denied.
                </p>
              </div>
              
              {/* Promise 2 */}
              <div className="bg-white border-2 border-amber-200 rounded-xl p-6 space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Home className="w-6 h-6 text-[#bb9446]" />
                </div>
                <h4 className="text-xl font-bold text-[#3e3e3e]">
                  To the Parent Fighting for Your Family
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  You deserve that mortgage approval. You deserve to stop paying someone else's mortgage 
                  with your rent. You deserve to build something your kids can inherit. We'll show you the 
                  path from where you are to where you want to be.
                </p>
              </div>
              
              {/* Promise 3 */}
              <div className="bg-white border-2 border-amber-200 rounded-xl p-6 space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <RefreshCw className="w-6 h-6 text-[#bb9446]" />
                </div>
                <h4 className="text-xl font-bold text-[#3e3e3e]">
                  To the Entrepreneur Rebuilding After Setbacks
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Your past failures don't define your future success. Bankruptcy, divorce, medical debt, 
                  business collapse. We've seen it all, and we've helped people come back stronger. Your 
                  comeback story starts here.
                </p>
              </div>
            </div>
          </div>

          {/* CTA after Mission */}
          <div className="mt-12 text-center">
            <CalendlyPopupButton
              text="Ready to Start Your Journey?"
              showArrow={true}
              prefillOptions={{
                utm: { source: 'website', medium: 'about', campaign: 'mission_cta' }
              }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR FOUR CORE VALUES */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3e3e3e] leading-tight">
              Rooted in Faith, Family, and{' '}
              <span className="text-[#f9c65d]">Financial Freedom</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              These aren't just words on a wall. They're the principles that guide every decision we make 
              and every conversation we have.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Value 1: Family First */}
            <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-8 h-8 text-[#bb9446]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#3e3e3e]">Family First</h3>
              </div>
              
              <p className="text-lg text-[#3e3e3e] font-semibold">
                We treat our clients like family because that's how we were raised.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Every conversation and strategy comes from a place of respect, loyalty, and commitment to 
                lifting each other up. When you work with Mesa, you're not just a client. You're part of the family.
              </p>
              
              <div className="bg-amber-50 rounded-lg p-4 space-y-2">
                <p className="text-sm font-semibold text-[#3e3e3e]">What this means for you:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    No judgment. Ever. We've been where you are.
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    We celebrate your wins like they're our own
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    We stay with you through the entire journey, not just the transaction
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Value 2: Faith-Led Purpose */}
            <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-8 h-8 text-[#bb9446]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#3e3e3e]">Faith-Led Purpose</h3>
              </div>
              
              <p className="text-lg text-[#3e3e3e] font-semibold">
                Everything we do is rooted in service, compassion, and belief.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Belief in God. Belief in community. Belief in the power of new beginnings.
                Faith guides our vision and reminds us that we're building something bigger than ourselves.
              </p>
              
              <p className="text-[#bb9446] italic font-medium">
                "Where God guides, He provides." — Isaiah 58:11
              </p>
              
              <div className="bg-amber-50 rounded-lg p-4 space-y-2">
                <p className="text-sm font-semibold text-[#3e3e3e]">What this means for you:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    We operate with integrity because we answer to a higher standard
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    We believe your breakthrough is already written. We're just here to help you walk it out.
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    We pray for our clients' success as much as we strategize for it
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Value 3: Integrity Always */}
            <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-8 h-8 text-[#bb9446]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#3e3e3e]">Integrity Always</h3>
              </div>
              
              <p className="text-lg text-[#3e3e3e] font-semibold">
                We move with honesty and transparency, even when it's inconvenient.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Our clients trust us with their future, and we never take that lightly.
                No shortcuts. No broken promises. No illegal tactics. Just real results built on real ethics.
              </p>
              
              <div className="bg-amber-50 rounded-lg p-4 space-y-2">
                <p className="text-sm font-semibold text-[#3e3e3e]">What this means for you:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    We tell you what we CAN do and what we CAN'T do, upfront
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    We comply with every federal regulation (FCRA, CROA, TSR)
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    If we can't help you, we'll tell you that too, and point you in the right direction
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Value 4: Education Over Shortcuts */}
            <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-8 h-8 text-[#bb9446]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#3e3e3e]">Education Over Shortcuts</h3>
              </div>
              
              <p className="text-lg text-[#3e3e3e] font-semibold">
                Anyone can file a dispute. We teach you why it matters.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Real transformation happens when you understand how credit actually works, not just how to fix it temporarily.
                Our goal isn't just to repair your credit. It's to make sure you never need us again.
              </p>
              
              <div className="bg-amber-50 rounded-lg p-4 space-y-2">
                <p className="text-sm font-semibold text-[#3e3e3e]">What this means for you:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    You'll understand every step of the process
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    You'll learn how to maintain and protect your credit long after we're done
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    You'll be equipped to teach the next generation what no one taught you
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA after Core Values */}
          <div className="mt-12 text-center">
            <CalendlyPopupButton
              text="Experience the Mesa Difference"
              showArrow={true}
              prefillOptions={{
                utm: { source: 'website', medium: 'about', campaign: 'core_values_cta' }
              }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 5: OUR VISION */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3e3e3e] leading-tight text-center">
            Where We're Going:<br className="hidden md:block" />
            <span className="text-[#f9c65d]">Redefining Financial Success</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            To redefine what financial success looks like for first-generation families and underserved 
            communities by making credit, ownership, and wealth-building tools accessible, practical, and 
            empowering for everyone.
          </p>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            We envision a future where:
          </p>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <span className="text-lg md:text-xl text-gray-700">
                Young people have the knowledge to build early
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <span className="text-lg md:text-xl text-gray-700">
                Older generations are given the confidence to restart
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <span className="text-lg md:text-xl text-gray-700">
                Families break financial cycles for good
              </span>
            </li>
          </ul>
          
          <p className="text-lg md:text-xl text-[#f9c65d] font-semibold leading-relaxed">
            Mesa Group exists to shift the mindset from survival to ownership, one legacy at a time.
          </p>
          
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-[#3e3e3e]">The Impact We're Creating</h3>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              By 2030, our vision is to have helped:
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-[#bb9446] flex-shrink-0 mt-1" />
                <span className="text-lg md:text-xl text-gray-700">
                  10,000+ families achieve homeownership who thought it was impossible
                </span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-[#bb9446] flex-shrink-0 mt-1" />
                <span className="text-lg md:text-xl text-gray-700">
                  5,000+ businesses access the capital they need to scale
                </span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-[#bb9446] flex-shrink-0 mt-1" />
                <span className="text-lg md:text-xl text-gray-700">
                  50,000+ individuals understand credit well enough to never fall into the same traps again
                </span>
              </li>
            </ul>
            
            <p className="text-xl md:text-2xl text-[#f9c65d] font-semibold leading-relaxed">
              But the real measure of our success?
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              When your kids don't have to Google "how to fix bad credit" because you already taught them how to build it right.
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              When your grandkids inherit wealth instead of debt.
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              When "financial literacy" isn't some fancy term. It's just what your family does.
            </p>
            
            <p className="text-xl md:text-2xl text-[#3e3e3e] font-bold leading-relaxed">
              That's the Mesa legacy.
            </p>
          </div>

          {/* CTA after Vision */}
          <div className="mt-12 text-center">
            <CalendlyPopupButton
              text="Build Your Legacy with Mesa"
              showArrow={true}
              prefillOptions={{
                utm: { source: 'website', medium: 'about', campaign: 'vision_cta' }
              }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 6: WHO WE SERVE */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3e3e3e] leading-tight">
              We Serve Real People<br className="hidden md:block" />
              with <span className="text-[#f9c65d]">Real Financial Challenges</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Mesa Group works with clients at every stage of their financial journey, from rock bottom to soaring high.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Persona 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg space-y-4">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-[#bb9446]" />
              </div>
              <h3 className="text-xl font-bold text-[#3e3e3e]">
                Young Professionals & Credit Builders
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Starting from scratch or recovering from early mistakes. Building foundations for long-term success.
              </p>
              
              <div className="pt-2 space-y-2">
                <p className="text-sm font-semibold text-[#3e3e3e]">Typical challenges:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#bb9446]">•</span>
                    No credit history or thin file
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#bb9446]">•</span>
                    Student loans weighing them down
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#bb9446]">•</span>
                    First credit card mistakes
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#bb9446]">•</span>
                    Don't know where to start
                  </li>
                </ul>
              </div>
              
              <div className="pt-2 border-t border-gray-200">
                <p className="text-xs font-semibold text-[#3e3e3e] mb-1">How we help:</p>
                <p className="text-xs text-gray-600">
                  Credit building tools, student loan refinancing strategies, first-time credit guidance, financial education
                </p>
              </div>
            </div>
            
            {/* Persona 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg space-y-4">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-[#bb9446]" />
              </div>
              <h3 className="text-xl font-bold text-[#3e3e3e]">
                Growing Families
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Working toward homeownership, managing household debt, and making smart decisions for their children's future.
              </p>
              
              <div className="pt-2 space-y-2">
                <p className="text-sm font-semibold text-[#3e3e3e]">Typical challenges:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#bb9446]">•</span>
                    Denied for mortgages due to past mistakes
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#bb9446]">•</span>
                    High-interest debt eating their budget
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#bb9446]">•</span>
                    No emergency savings
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#bb9446]">•</span>
                    Worried about financial legacy
                  </li>
                </ul>
              </div>
              
              <div className="pt-2 border-t border-gray-200">
                <p className="text-xs font-semibold text-[#3e3e3e] mb-1">How we help:</p>
                <p className="text-xs text-gray-600">
                  Credit restoration, mortgage preparation, debt consolidation, estate planning guidance
                </p>
              </div>
            </div>
            
            {/* Persona 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg space-y-4">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-[#bb9446]" />
              </div>
              <h3 className="text-xl font-bold text-[#3e3e3e]">
                Business Owners & Entrepreneurs
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Accessing funding to grow operations, building business credit, and protecting their company's financial health.
              </p>
              
              <div className="pt-2 space-y-2">
                <p className="text-sm font-semibold text-[#3e3e3e]">Typical challenges:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#bb9446]">•</span>
                    Banks won't lend to them
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#bb9446]">•</span>
                    Personal credit tied to business
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#bb9446]">•</span>
                    Need capital but can't afford interest
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#bb9446]">•</span>
                    Cash flow constraints
                  </li>
                </ul>
              </div>
              
              <div className="pt-2 border-t border-gray-200">
                <p className="text-xs font-semibold text-[#3e3e3e] mb-1">How we help:</p>
                <p className="text-xs text-gray-600">
                  0% business funding, business credit building, debt restructuring, capital access strategies
                </p>
              </div>
            </div>
            
            {/* Persona 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg space-y-4">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <RefreshCw className="w-6 h-6 text-[#bb9446]" />
              </div>
              <h3 className="text-xl font-bold text-[#3e3e3e]">
                Anyone Rebuilding
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Recovering from financial setbacks (divorce, medical debt, job loss, business failure) and creating a path forward.
              </p>
              
              <div className="pt-2 space-y-2">
                <p className="text-sm font-semibold text-[#3e3e3e]">Typical challenges:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#bb9446]">•</span>
                    Bankruptcy on record
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#bb9446]">•</span>
                    Collections piling up
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#bb9446]">•</span>
                    Credit completely shot
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#bb9446]">•</span>
                    Lost hope that things can improve
                  </li>
                </ul>
              </div>
              
              <div className="pt-2 border-t border-gray-200">
                <p className="text-xs font-semibold text-[#3e3e3e] mb-1">How we help:</p>
                <p className="text-xs text-gray-600">
                  Credit restoration, debt relief, fresh start strategies, one-on-one financial coaching
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center space-y-4">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              No matter where you're starting, we have the platform, partnerships, and expertise to help you move forward.
            </p>
            <p className="text-lg md:text-xl text-[#f9c65d] font-semibold leading-relaxed">
              Because at Mesa Group, we don't judge where you've been. We focus on where you're going.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: OUR RESULTS (SOCIAL PROOF) */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3e3e3e] leading-tight">
              Real Families. Real Businesses.<br className="hidden md:block" />
              <span className="text-[#f9c65d]">Real Transformation.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Don't just take our word for it. Hear from the people who've walked this path with us.
            </p>
          </div>
          
          {/* Stats Bar */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl md:text-5xl font-bold text-[#f9c65d] mb-2">2,500+</div>
              <div className="text-gray-700 font-medium">Clients Served</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl md:text-5xl font-bold text-[#f9c65d] mb-2">$100M+</div>
              <div className="text-gray-700 font-medium">Funding Facilitated</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl md:text-5xl font-bold text-[#f9c65d] mb-2">150+</div>
              <div className="text-gray-700 font-medium">Five-Star Reviews</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl md:text-5xl font-bold text-[#f9c65d] mb-2">83</div>
              <div className="text-gray-700 font-medium">Avg. Credit Increase</div>
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-xl p-6 shadow-lg space-y-4">
              <img 
                src="/testimonials/about/maria-t-bakersfield-ca.jpeg" 
                alt="Maria T." 
                className="w-16 h-16 rounded-full object-cover mx-auto"
              />
              <div className="flex gap-1 justify-center">
                <Star className="w-5 h-5 fill-[#f9c65d] text-[#f9c65d]" />
                <Star className="w-5 h-5 fill-[#f9c65d] text-[#f9c65d]" />
                <Star className="w-5 h-5 fill-[#f9c65d] text-[#f9c65d]" />
                <Star className="w-5 h-5 fill-[#f9c65d] text-[#f9c65d]" />
                <Star className="w-5 h-5 fill-[#f9c65d] text-[#f9c65d]" />
              </div>
              <p className="text-white leading-relaxed">
                "My credit was really bad. They really helped me now. I'm buying a house."
              </p>
              <p className="text-sm font-semibold text-white">— Maria T., Bakersfield, CA</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-xl p-6 shadow-lg space-y-4">
              <img 
                src="/testimonials/about/james-k-business-owner-bakersield-ca.jpeg" 
                alt="James K." 
                className="w-16 h-16 rounded-full object-cover mx-auto"
              />
              <div className="flex gap-1 justify-center">
                <Star className="w-5 h-5 fill-[#f9c65d] text-[#f9c65d]" />
                <Star className="w-5 h-5 fill-[#f9c65d] text-[#f9c65d]" />
                <Star className="w-5 h-5 fill-[#f9c65d] text-[#f9c65d]" />
                <Star className="w-5 h-5 fill-[#f9c65d] text-[#f9c65d]" />
                <Star className="w-5 h-5 fill-[#f9c65d] text-[#f9c65d]" />
              </div>
              <p className="text-white leading-relaxed">
                "Mesa Group is amazing! The best! They helped me out from my bankruptcy and got me started 
                with new credit for my business. I would recommend them to my family and friends."
              </p>
              <p className="text-sm font-semibold text-white">— James K., Business Owner, Bakersfield, CA</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-xl p-6 shadow-lg space-y-4">
              <img 
                src="/testimonials/about/david-l-referred-client-bakersield-ca.jpeg" 
                alt="David L." 
                className="w-16 h-16 rounded-full object-cover mx-auto"
              />
              <div className="flex gap-1 justify-center">
                <Star className="w-5 h-5 fill-[#f9c65d] text-[#f9c65d]" />
                <Star className="w-5 h-5 fill-[#f9c65d] text-[#f9c65d]" />
                <Star className="w-5 h-5 fill-[#f9c65d] text-[#f9c65d]" />
                <Star className="w-5 h-5 fill-[#f9c65d] text-[#f9c65d]" />
                <Star className="w-5 h-5 fill-[#f9c65d] text-[#f9c65d]" />
              </div>
              <p className="text-white leading-relaxed">
                "I got recommended from one of my family members that Mesa Group Consulting is very 
                knowledgeable and helped him establish a high credit score. I scheduled an appointment and 
                we had a great conversation about improving my credit score."
              </p>
              <p className="text-sm font-semibold text-white">— David L., Referred Client, Bakersfield, CA</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-xl p-6 shadow-lg space-y-4">
              <img 
                src="/testimonials/about/robert-m-auto-financing-client-bakersield-ca.jpeg" 
                alt="Robert M." 
                className="w-16 h-16 rounded-full object-cover mx-auto"
              />
              <div className="flex gap-1 justify-center">
                <Star className="w-5 h-5 fill-[#f9c65d] text-[#f9c65d]" />
                <Star className="w-5 h-5 fill-[#f9c65d] text-[#f9c65d]" />
                <Star className="w-5 h-5 fill-[#f9c65d] text-[#f9c65d]" />
                <Star className="w-5 h-5 fill-[#f9c65d] text-[#f9c65d]" />
                <Star className="w-5 h-5 fill-[#f9c65d] text-[#f9c65d]" />
              </div>
              <p className="text-white leading-relaxed">
                "Great service. Mesa Group was able to get me approved on a 25 Grand Cherokee."
              </p>
              <p className="text-sm font-semibold text-white">— Robert M., Auto Financing Client, Bakersfield, CA</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-xl p-6 shadow-lg space-y-4 md:col-span-2">
              <img 
                src="/testimonials/about/daniel-rodriguez-bakersfield-entrepreneur.jpeg" 
                alt="Daniel Rodriguez" 
                className="w-16 h-16 rounded-full object-cover mx-auto"
              />
              <div className="flex gap-1 justify-center">
                <Star className="w-5 h-5 fill-[#f9c65d] text-[#f9c65d]" />
                <Star className="w-5 h-5 fill-[#f9c65d] text-[#f9c65d]" />
                <Star className="w-5 h-5 fill-[#f9c65d] text-[#f9c65d]" />
                <Star className="w-5 h-5 fill-[#f9c65d] text-[#f9c65d]" />
                <Star className="w-5 h-5 fill-[#f9c65d] text-[#f9c65d]" />
              </div>
              <p className="text-white leading-relaxed">
                "Mesa Group secured $87,000 in 0% interest financing for my startup when traditional banks 
                wouldn't even consider my application. The funding allowed me to purchase essential equipment 
                and hire staff without worrying about crushing interest payments during our critical growth phase."
              </p>
              <p className="text-sm font-semibold text-white">— Daniel Rodriguez, Bakersfield Entrepreneur</p>
            </div>
          </div>
          
          <p className="text-sm text-gray-600 text-center mt-8 max-w-3xl mx-auto">
            Compliance Disclaimer: Results vary based on individual circumstances. Testimonials reflect individual 
            client experiences and are not a guarantee of similar outcomes.
          </p>
        </div>
      </section>

      {/* SECTION 8: OUR APPROACH */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3e3e3e] leading-tight">
              How We're Different:<br className="hidden md:block" />
              <span className="text-[#f9c65d]">Education First, Sales Never</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Most financial companies care about commissions. We care about your transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Column 1 */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 space-y-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-[#bb9446]" />
              </div>
              <h3 className="text-2xl font-bold text-[#3e3e3e]">We've Actually Been There</h3>
              <p className="text-gray-700 leading-relaxed">
                Most financial companies are run by people who've never struggled with bad credit. Never been 
                denied. Never felt the shame of financial rejection.
              </p>
              <p className="text-[#3e3e3e] font-semibold">Not us.</p>
              <p className="text-gray-700 leading-relaxed">
                Our founder had credit completely shot. Failed business. Nearly empty bank account. He watched 
                his immigrant parents almost lose their home.
              </p>
              <p className="text-[#f9c65d] font-semibold">
                That's why Mesa Group operates differently. We're not here to judge you. We're here to guide 
                you, because we've walked the exact path you're on right now.
              </p>
            </div>
            
            {/* Column 2 */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 space-y-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#bb9446]" />
              </div>
              <h3 className="text-2xl font-bold text-[#3e3e3e]">We Built the Shortcuts You Need</h3>
              <p className="text-gray-700 leading-relaxed">
                You know what separates people who succeed from people who stay stuck? Information.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The wealthy have financial advisors, estate planners, CPAs, credit specialists, funding 
                networks. They have access.
              </p>
              <p className="text-[#f9c65d] font-semibold">Mesa Group gives you that same access.</p>
              <p className="text-gray-700 leading-relaxed">
                We spent years building relationships with SmartCredit, SuperMoney, Novae, and more. We 
                negotiated partnerships so you get enterprise-level tools without enterprise-level prices.
              </p>
              <p className="text-[#3e3e3e] font-semibold">
                The shortcuts the wealthy use? Now they're yours too.
              </p>
            </div>
            
            {/* Column 3 */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 space-y-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#bb9446]" />
              </div>
              <h3 className="text-2xl font-bold text-[#3e3e3e]">Your Success Is Our Success</h3>
              <p className="text-gray-700 leading-relaxed">
                Here's the difference between Mesa Group and everyone else:
              </p>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold">Other companies:</span> Get paid whether you succeed or not. 
                They take your money upfront, deliver mediocre results, and move on.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-[#f9c65d]">Mesa Group:</span> We only win when you win. 
                Our reputation is built on your transformation. Your referrals. Your success stories.
              </p>
              <p className="text-[#3e3e3e] font-semibold">
                That's why we work harder. That's why we care more. That's why we've maintained a perfect 
                5-star rating across 150+ reviews.
              </p>
              <p className="text-[#f9c65d] font-semibold">
                When you succeed, you tell people. And that's how we grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: OUR SERVICES (BRIEF OVERVIEW) */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3e3e3e] leading-tight">
              Comprehensive Solutions<br className="hidden md:block" />
              for <span className="text-[#f9c65d]">Every Financial Need</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              From credit building to business funding, estate planning to debt relief, we've partnered with 
              the nation's leading platforms to give you everything under one roof.
            </p>
          </div>
          
          {/* 8-Card Service Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            
            <Link to="/credit-cards" className="bg-[#3e3e3e] text-white rounded-xl p-6 hover:bg-[#2c2c2c] transition-colors group space-y-3">
              <CreditCard className="w-8 h-8 text-[#f9c65d]" />
              <h3 className="text-xl font-bold">Credit Cards</h3>
              <p className="text-gray-300 text-sm">
                Compare and choose offers from top providers to suit your needs.
              </p>
              <div className="flex items-center text-[#f9c65d] group-hover:gap-2 transition-all">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
            
            <Link to="/personal-loans" className="bg-[#3e3e3e] text-white rounded-xl p-6 hover:bg-[#2c2c2c] transition-colors group space-y-3">
              <DollarSign className="w-8 h-8 text-[#f9c65d]" />
              <h3 className="text-xl font-bold">Personal Loans</h3>
              <p className="text-gray-300 text-sm">
                Receive pre-qualified offers with loans up to $250,000 in less than 60 seconds.
              </p>
              <div className="flex items-center text-[#f9c65d] group-hover:gap-2 transition-all">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
            
            <Link to="/auto-loan-refi" className="bg-[#3e3e3e] text-white rounded-xl p-6 hover:bg-[#2c2c2c] transition-colors group space-y-3">
              <Car className="w-8 h-8 text-[#f9c65d]" />
              <h3 className="text-xl font-bold">Auto Loan Refi</h3>
              <p className="text-gray-300 text-sm">
                Offers in less than 60 seconds with loans from $10,000 to $100,000.
              </p>
              <div className="flex items-center text-[#f9c65d] group-hover:gap-2 transition-all">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
            
            <Link to="/student-loan-refi-2" className="bg-[#3e3e3e] text-white rounded-xl p-6 hover:bg-[#2c2c2c] transition-colors group space-y-3">
              <GraduationCap className="w-8 h-8 text-[#f9c65d]" />
              <h3 className="text-xl font-bold">Student Loan Refi</h3>
              <p className="text-gray-300 text-sm">
                Up to $500K, 20 yr term. Get matched with refinancing offers fast.
              </p>
              <div className="flex items-center text-[#f9c65d] group-hover:gap-2 transition-all">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
            
            <Link to="/debt-consolidation-loan" className="bg-[#3e3e3e] text-white rounded-xl p-6 hover:bg-[#2c2c2c] transition-colors group space-y-3">
              <PieChart className="w-8 h-8 text-[#f9c65d]" />
              <h3 className="text-xl font-bold">Debt Consolidation Loan</h3>
              <p className="text-gray-300 text-sm">
                Simplify your debt payments by combining multiple debts into one loan.
              </p>
              <div className="flex items-center text-[#f9c65d] group-hover:gap-2 transition-all">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
            
            <Link to="/debt-relief" className="bg-[#3e3e3e] text-white rounded-xl p-6 hover:bg-[#2c2c2c] transition-colors group space-y-3">
              <Umbrella className="w-8 h-8 text-[#f9c65d]" />
              <h3 className="text-xl font-bold">Debt Relief</h3>
              <p className="text-gray-300 text-sm">
                Reduce your debt burden. Achieve freedom by reducing overall debt balance.
              </p>
              <div className="flex items-center text-[#f9c65d] group-hover:gap-2 transition-all">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
            
            <Link to="/trust-and-will-plan" className="bg-[#3e3e3e] text-white rounded-xl p-6 hover:bg-[#2c2c2c] transition-colors group space-y-3">
              <Scale className="w-8 h-8 text-[#f9c65d]" />
              <h3 className="text-xl font-bold">Trust & Will Plan</h3>
              <p className="text-gray-300 text-sm">
                Customized, state-specific Trusts & Wills to protect assets and loved ones.
              </p>
              <div className="flex items-center text-[#f9c65d] group-hover:gap-2 transition-all">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
            
            <Link to="/life-insurance" className="bg-[#3e3e3e] text-white rounded-xl p-6 hover:bg-[#2c2c2c] transition-colors group space-y-3">
              <LifeBuoy className="w-8 h-8 text-[#f9c65d]" />
              <h3 className="text-xl font-bold">Life Insurance</h3>
              <p className="text-gray-300 text-sm">
                Your future is worth securing. Protect loved ones and enhance your financial plan.
              </p>
              <div className="flex items-center text-[#f9c65d] group-hover:gap-2 transition-all">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </div>

          {/* See Our Services CTA */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#3e3e3e] mb-6">
              See Our Services
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/for-consumers"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500"
              >
                <span className="text-center">For Consumers</span>
                <ArrowRight className="w-5 h-5 flex-shrink-0" />
              </Link>
              <Link
                to="/for-businesses"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#3e3e3e] hover:bg-[#2c2c2c] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-[#3e3e3e]"
              >
                <span className="text-center">For Businesses</span>
                <ArrowRight className="w-5 h-5 flex-shrink-0" />
              </Link>
            </div>
          </div>

          {/* Additional Services Section */}
          <div className="bg-white rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#3e3e3e] mb-8 text-center">
              Complete Credit & Business Solutions
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Column 1 */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-[#f9c65d]">Credit Solutions</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Professional Credit Restoration</li>
                  <li>• DIY Credit Repair (Powered by Creditily)</li>
                  <li>• Credit Monitoring (Powered by SmartCredit)</li>
                </ul>
                <Link to="/for-consumers" className="inline-flex items-center text-[#bb9446] font-semibold hover:text-[#f9c65d]">
                  View All Credit Services
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              
              {/* Column 2 */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-[#f9c65d]">Business Funding</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 0% Interest Business Funding (Exclusive)</li>
                  <li>• Business Funding Network (75+ Lenders)</li>
                  <li>• Business Credit Building</li>
                  <li>• Business Debt Relief</li>
                </ul>
                <Link to="/for-businesses" className="inline-flex items-center text-[#bb9446] font-semibold hover:text-[#f9c65d]">
                  Explore Business Solutions
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              
              {/* Column 3 */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-[#f9c65d]">Build Credit</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Secured Credit Cards</li>
                  <li>• Credit Builder Loans</li>
                  <li>• Authorized User Tradelines</li>
                  <li>• Credit Education Resources</li>
                </ul>
                <Link to="/build-credit" className="inline-flex items-center text-[#bb9446] font-semibold hover:text-[#f9c65d]">
                  Start Building Credit
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <CalendlyPopupButton
              text="Not Sure Where to Start? Let's Talk."
              showArrow={true}
              prefillOptions={{
                utm: { source: 'website', medium: 'about', campaign: 'services_cta' }
              }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 10: MEET THE TEAM */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3e3e3e] leading-tight">
              Meet the Team Behind<br className="hidden md:block" />
              Your <span className="text-[#f9c65d]">Financial Transformation</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Mesa Group is powered by a diverse, multilingual team of credit specialists, client advisors, 
              and support professionals, all committed to your financial success.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Every member of our team has one thing in common: we genuinely care about your outcome. This 
              isn't just a job to us. It's a calling. Whether you speak English, Spanish, or Punjabi, we're 
              here to guide you in the language you're most comfortable with.
            </p>
          </div>
          
          {/* Team Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 text-center space-y-3">
                <div className="w-20 h-20 bg-amber-200 rounded-full mx-auto flex items-center justify-center">
                  <Users className="w-10 h-10 text-[#bb9446]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#3e3e3e]">{member.name}</h3>
                  <p className="text-sm text-gray-700">{member.role}</p>
                  <p className="text-xs text-gray-600 mt-1">({member.languages})</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Section Closing */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-[#3e3e3e] text-center">
              Why Our Team Makes the Difference
            </h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Notice something about our team? We're not just multilingual. We're multicultural. We understand 
              the unique financial challenges facing Hispanic/Latino families, Punjabi communities, and 
              first-generation Americans because many of us have lived them.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              When you call Mesa Group, you're not getting a call center in another state reading from a 
              script. You're getting a real person in Bakersfield who understands your culture, speaks your 
              language, and genuinely cares about helping you build the financial future you deserve.
            </p>
            <p className="text-xl md:text-2xl text-[#f9c65d] font-semibold leading-relaxed text-center">
              That's the Mesa difference.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 11: OUR COMMUNITY COMMITMENT */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3e3e3e] leading-tight">
            Giving Back to the<br className="hidden md:block" />
            <span className="text-[#f9c65d]">Communities That Built Us</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Mesa Group was built in Bakersfield, California, a city often overlooked, but full of hardworking 
            families who deserve better financial opportunities.
          </p>
          
          <div className="bg-white rounded-2xl p-8 md:p-12 space-y-4 text-left">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We serve:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-lg md:text-xl text-gray-700">
                  Hispanic/Latino families through Mesa Financiera (Spanish-language services)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-lg md:text-xl text-gray-700">
                  Punjabi community through Chaklo Credit (Punjabi/English services)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-lg md:text-xl text-gray-700">
                  First-generation Americans navigating a financial system no one explained to them
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-lg md:text-xl text-gray-700">
                  Small business owners who've been turned down by traditional banks
                </span>
              </li>
            </ul>
            <p className="text-lg md:text-xl text-[#f9c65d] font-semibold leading-relaxed pt-4">
              We provide trilingual support (English, Spanish, Punjabi) because financial education should 
              never be limited by language.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 12: JOIN THE MESA FAMILY (FINAL CTA) */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#FFFBEC] from-40% to-[#FFECD7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3e3e3e] leading-tight">
            Your Financial Transformation<br className="hidden md:block" />
            Starts with <span className="text-[#f9c65d]">One Conversation</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            2,500+ families have already made the decision. They're building credit. Accessing capital. 
            Protecting legacies. Breaking cycles.
          </p>
          
          <p className="text-xl md:text-2xl text-[#3e3e3e] font-bold leading-relaxed">
            What are you waiting for?
          </p>
          
          {/* Emotional Hook */}
          <div className="bg-white rounded-2xl p-8 md:p-12 space-y-4 text-left">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Every day you wait is another day:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#f9c65d] text-2xl">•</span>
                <span className="text-lg md:text-xl text-gray-700">
                  Paying higher interest rates than you should
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f9c65d] text-2xl">•</span>
                <span className="text-lg md:text-xl text-gray-700">
                  Getting denied for opportunities you deserve
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f9c65d] text-2xl">•</span>
                <span className="text-lg md:text-xl text-gray-700">
                  Watching others build wealth while you stay stuck
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f9c65d] text-2xl">•</span>
                <span className="text-lg md:text-xl text-gray-700">
                  Letting your financial past steal your financial future
                </span>
              </li>
            </ul>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed pt-4">
              You can't change what happened yesterday. But you can change what happens tomorrow.
            </p>
            <p className="text-xl md:text-2xl text-[#f9c65d] font-semibold leading-relaxed">
              It starts right here. Right now.
            </p>
          </div>
          
          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <CalendlyPopupButton
              text="Schedule Your Free Consultation"
              showArrow={true}
              prefillOptions={{
                utm: { source: 'website', medium: 'about', campaign: 'final_cta' }
              }}
            />

            <a
              href="tel:6613103040"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-[#bb9446] transition-colors shadow-md"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Us: (661) 310-3040
            </a>
          </div>
          
          {/* What Happens Next */}
          <div className="bg-white rounded-2xl p-8 md:p-12 space-y-6 text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-[#3e3e3e] text-center">
              What Happens Next?
            </h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Whether you click "Schedule Consultation" or call us, you'll connect with a specialist who will:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-lg md:text-xl text-gray-700">
                  Listen to your current financial situation without judgment
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-lg md:text-xl text-gray-700">
                  Discuss your goals and challenges openly
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-lg md:text-xl text-gray-700">
                  Recommend tailored solutions from our platform
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-lg md:text-xl text-gray-700">
                  Answer all your questions with complete transparency
                </span>
              </li>
            </ul>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed pt-4">
              No pressure. No hidden fees. No surprises. Just clear guidance and proven solutions.
            </p>
            <p className="text-xl md:text-2xl text-[#f9c65d] font-semibold leading-relaxed text-center">
              This is your moment. Let's make it count.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;