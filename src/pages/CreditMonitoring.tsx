import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, CheckCircle2, TrendingUp, Bell, BarChart3, Users, Smartphone, FileText, AlertTriangle, DollarSign, Eye, Lock, Mail, ChevronDown, Phone, MapPin, ExternalLink } from 'lucide-react';
import EmotionalCTA1 from '@/components/credit-monitoring/sections/EmotionalCTA1';
import EmotionalCTA2 from '@/components/credit-monitoring/sections/EmotionalCTA2';
import EmotionalCTA3 from '@/components/credit-monitoring/sections/EmotionalCTA3';

const AFFILIATE_LINK = "https://smartcredit.com/join/?PID=24603&planType=PREMIUM";

const CreditMonitoring = () => {
  return (
    <div className="min-h-screen bg-background font-['Inter',sans-serif]">
      <Header />
      <HeroSection />
      <WhyMonitoringMatters />
      <EmotionalCTA1 />
      <SmartCreditFeatures />
      <EmotionalCTA2 />
      <WhyChooseSmartCredit />
      <HowItWorks />
      <EmotionalCTA3 />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default CreditMonitoring;

function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-white via-amber-50 to-white py-20 px-6 lg:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            
            <div className="inline-flex items-center gap-2 bg-amber-100 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-6 border-2 border-amber-300">
              <Shield className="w-4 h-4" />
              Powered by SmartCredit® | Trusted Credit Monitoring
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Protect Your <span className="text-amber-600">Credit</span>. Monitor Your <span className="text-amber-600">Future</span>.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              <strong>24/7 credit monitoring</strong> with real-time alerts, identity theft protection, and powerful tools to track and improve your credit score—all in one simple platform.
            </p>

            {/* Key Features List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">3-Bureau Credit Reports & Scores</h3>
                  <p className="text-gray-600 text-sm">Experian, Equifax, and TransUnion—all in one dashboard</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">$1 Million Fraud Insurance</h3>
                  <p className="text-gray-600 text-sm">Covers your entire family's identity theft expenses</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">ScoreTracker, Builder & Boost</h3>
                  <p className="text-gray-600 text-sm">Tools to control and improve your future credit score</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Real-Time Alerts</h3>
                  <p className="text-gray-600 text-sm">Instant notifications of suspicious activity or changes</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-12 py-5 mb-4"
            >
              Start Monitoring My Credit
              <ExternalLink className="w-5 h-5" />
            </a>
            
            <p className="text-sm text-gray-600">
              <CheckCircle2 className="w-4 h-4 inline mr-1" />
              Instant access to all 3 bureaus
              <span className="mx-2">|</span>
              <CheckCircle2 className="w-4 h-4 inline mr-1" />
              Cancel anytime
              <span className="mx-2">|</span>
              <CheckCircle2 className="w-4 h-4 inline mr-1" />
              Family fraud protection
            </p>

          </div>

          {/* Right Visual - Dashboard Mockup */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              {/* Credit Score Display */}
              <div className="text-center mb-6 pb-6 border-b border-border">
                <div className="text-sm text-muted-foreground mb-2">Your Credit Score</div>
                <div className="text-6xl font-bold text-success mb-2">720</div>
                <div className="text-sm text-muted-foreground">Good • Updated Today</div>
              </div>
              
              {/* 3 Bureau Scores */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-xs text-muted-foreground mb-1">Experian</div>
                  <div className="text-2xl font-bold text-primary">725</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-muted-foreground mb-1">Equifax</div>
                  <div className="text-2xl font-bold text-primary">718</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-muted-foreground mb-1">TransUnion</div>
                  <div className="text-2xl font-bold text-primary">717</div>
                </div>
              </div>

              {/* Recent Alerts */}
              <div className="space-y-2">
                <div className="bg-success/10 border border-success/20 rounded-lg p-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                  <div className="text-xs text-foreground">No suspicious activity detected</div>
                </div>
                <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-3 flex items-center gap-2">
                  <Bell className="w-5 h-5 text-secondary flex-shrink-0" />
                  <div className="text-xs text-foreground">New account opened: Credit Card</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function WhyMonitoringMatters() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Credit Monitoring Matters More Than Ever
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            With identity theft on the rise and credit impacting every major financial decision, monitoring your credit is no longer optional—it's essential.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Concern 1 */}
          <div className="bg-gradient-to-br from-red-50 to-background rounded-xl p-6 shadow-md border-l-4 border-destructive">
            <AlertTriangle className="w-12 h-12 text-destructive mb-3" />
            <h3 className="text-lg font-bold text-foreground mb-2">
              9 Million Victims/Year
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Identity theft and credit fraud affect millions of Americans annually. Early detection is your best defense.
            </p>
          </div>

          {/* Concern 2 */}
          <div className="bg-gradient-to-br from-orange-50 to-background rounded-xl p-6 shadow-md border-l-4 border-orange-500">
            <TrendingUp className="w-12 h-12 text-orange-500 mb-3" />
            <h3 className="text-lg font-bold text-foreground mb-2">
              Errors Hurt Your Score
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Credit report errors are common and can unfairly lower your score, costing you thousands in higher interest rates.
            </p>
          </div>

          {/* Concern 3 */}
          <div className="bg-gradient-to-br from-yellow-50 to-background rounded-xl p-6 shadow-md border-l-4 border-yellow-500">
            <DollarSign className="w-12 h-12 text-yellow-600 mb-3" />
            <h3 className="text-lg font-bold text-foreground mb-2">
              Major Financial Impact
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your credit score affects mortgage rates, car loans, credit cards, and even job applications.
            </p>
          </div>

          {/* Concern 4 */}
          <div className="bg-gradient-to-br from-blue-50 to-background rounded-xl p-6 shadow-md border-l-4 border-secondary">
            <Eye className="w-12 h-12 text-secondary mb-3" />
            <h3 className="text-lg font-bold text-foreground mb-2">
              Can't See What You Don't Track
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Without monitoring, you won't know if someone opens accounts in your name until it's too late.
            </p>
          </div>

        </div>

        <div className="bg-secondary/10 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Don't Wait for a Crisis to Start Monitoring
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            SmartCredit® gives you the tools to catch problems early, dispute errors quickly, and take control of your financial future.
          </p>
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-10 py-4"
          >
            Get Protected Today
            <Shield className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}

function SmartCreditFeatures() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-light to-background">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Everything You Need in One Platform
          </h2>
          <p className="text-xl text-muted-foreground">
            SmartCredit® makes credit monitoring simple, powerful, and affordable
          </p>
        </div>

        <div className="space-y-8">
          
          {/* Feature 1: 3-Bureau Monitoring */}
          <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block bg-secondary/10 p-4 rounded-lg mb-4">
                  <BarChart3 className="w-12 h-12 text-secondary" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  3-Bureau Credit Reports & Scores
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Your credit score is one of the most valuable financial tools you have. With SmartCredit®'s monitoring services, you can track <strong>all three major credit bureaus</strong>—Experian, Equifax, and TransUnion—in one easy-to-read dashboard.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Your credit report is like a report card of your entire financial history. We make it easy to check accuracy and understand what's helping or hurting your score.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#bb9446] to-[#8b6f35] rounded-xl p-6 text-white shadow-xl">
                <div className="text-center mb-6">
                  <div className="text-sm mb-2 font-semibold">See All 3 Scores</div>
                  <div className="text-6xl font-bold drop-shadow-lg">720</div>
                  <div className="text-sm mt-2 font-semibold">Your Average Score</div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-white/30">
                    <span className="text-sm font-semibold">Experian</span>
                    <span className="font-bold text-lg">725</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-white/30">
                    <span className="text-sm font-semibold">Equifax</span>
                    <span className="font-bold text-lg">718</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-white/30">
                    <span className="text-sm font-semibold">TransUnion</span>
                    <span className="font-bold text-lg">717</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2: Identity Theft Protection */}
          <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 bg-gradient-to-br from-success to-success/80 rounded-xl p-8 text-white">
                <div className="text-center">
                  <Shield className="w-16 h-16 mb-4 mx-auto" />
                  <div className="text-5xl font-bold mb-2">$1 Million</div>
                  <div className="text-xl mb-6">Family Fraud Insurance</div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-sm leading-relaxed">
                      Comprehensive identity fraud expense reimbursement covering your entire household
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block bg-success/10 p-4 rounded-lg mb-4">
                  <Lock className="w-12 h-12 text-success" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Identity Theft Protection & Fraud Insurance
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  With more than <strong>9 million Americans</strong> experiencing credit fraud and identity theft each year, protection is critical. Our $1 Million Family Fraud Insurance gives you peace of mind.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Real-time alerts notify you instantly of suspicious activity, and our insurance covers expenses if you or a family member becomes a victim of identity theft.
                </p>
                <div className="flex gap-4">
                  <div className="bg-success/10 border border-success/20 rounded-lg p-4 flex-1">
                    <div className="text-success font-bold mb-1 flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      Dark Web Monitoring
                    </div>
                    <div className="text-sm text-muted-foreground">We scan for your personal info</div>
                  </div>
                  <div className="bg-success/10 border border-success/20 rounded-lg p-4 flex-1">
                    <div className="text-success font-bold mb-1 flex items-center gap-2">
                      <Bell className="w-4 h-4" />
                      Real-Time Alerts
                    </div>
                    <div className="text-sm text-muted-foreground">Instant notifications</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Credit Builder Tools */}
          <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block bg-[#bb9446]/10 p-4 rounded-lg mb-4">
                  <TrendingUp className="w-12 h-12 text-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  ScoreTracker, Builder & Boost™
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  It's not enough to just monitor—you need <strong>tools to improve</strong>. SmartCredit® includes powerful features to help you control and boost your future credit score.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <div className="font-bold text-foreground">ScoreTracker</div>
                      <div className="text-sm text-muted-foreground">See what's helping or hurting your score in real-time</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <div className="font-bold text-foreground">ScoreBuilder®</div>
                      <div className="text-sm text-muted-foreground">Get personalized recommendations to improve your credit</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <div className="font-bold text-foreground">ScoreBoost™</div>
                      <div className="text-sm text-muted-foreground">Instantly add positive payment history to your report</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#f9c65d] to-[#bb9446] rounded-xl p-6 text-gray-900 shadow-xl">
                <div className="text-center mb-6">
                  <div className="text-sm mb-2 font-bold">Credit Score Trend</div>
                  <div className="flex items-end justify-center gap-2 mb-4">
                    <div className="w-8 h-12 bg-[#3E3E3E] rounded shadow-md"></div>
                    <div className="w-8 h-16 bg-[#3E3E3E] rounded shadow-md"></div>
                    <div className="w-8 h-24 bg-[#3E3E3E] rounded shadow-md"></div>
                    <div className="w-8 h-32 bg-[#3E3E3E] rounded shadow-md"></div>
                    <div className="w-8 h-40 bg-[#3E3E3E] rounded shadow-md"></div>
                    <div className="w-8 h-48 bg-gray-900 rounded shadow-lg"></div>
                  </div>
                  <div className="text-3xl font-bold drop-shadow-sm">+67 Points</div>
                  <div className="text-sm font-semibold">in 6 Months</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 4: Dispute Errors */}
          <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 bg-gradient-to-br from-red-600 to-red-700 rounded-xl p-8 text-white shadow-xl">
                <AlertTriangle className="w-12 h-12 mb-4 drop-shadow-lg" />
                <h4 className="text-2xl font-bold mb-4">Found an Error?</h4>
                <p className="leading-relaxed mb-4">
                  Use our Action Buttons to dispute errors directly with creditors and credit bureaus—right from your dashboard.
                </p>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                  <div className="text-sm font-bold mb-2">Common Errors We Help Fix:</div>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3" />
                      Incorrect account balances
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3" />
                      Accounts that aren't yours
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3" />
                      Wrong payment history
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3" />
                      Outdated information
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block bg-[#bb9446]/10 p-4 rounded-lg mb-4">
                  <FileText className="w-12 h-12 text-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Dispute Errors on Your Credit Reports
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Disputing an error on your credit report doesn't have to be complicated. With SmartCredit®'s <strong>Action Buttons</strong>, you can communicate directly with creditors to fix inaccuracies that may be lowering your score.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our interactive credit reports make it easy to identify errors and take immediate action—all from your dashboard.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 5: Money Manager */}
          <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block bg-[#bb9446]/10 p-4 rounded-lg mb-4">
                  <DollarSign className="w-12 h-12 text-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Money Manager Dashboard
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  SmartCredit® isn't just about credit monitoring—it's a complete <strong>financial management platform</strong>. Our Money Manager gives you online banking functionality with action buttons all in one place.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Track your accounts, monitor transactions, and manage your credit—all from a single, simple dashboard designed for both your money and credit.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#f9c65d] to-[#bb9446] rounded-xl p-6 text-gray-900 shadow-xl">
                <div className="space-y-3">
                  <div className="bg-white/30 backdrop-blur-sm rounded-lg p-4 border border-white/40">
                    <div className="text-sm mb-1 font-bold">Checking Account</div>
                    <div className="text-2xl font-bold">$3,247.89</div>
                  </div>
                  <div className="bg-white/30 backdrop-blur-sm rounded-lg p-4 border border-white/40">
                    <div className="text-sm mb-1 font-bold">Savings Account</div>
                    <div className="text-2xl font-bold">$12,450.00</div>
                  </div>
                  <div className="bg-white/30 backdrop-blur-sm rounded-lg p-4 border border-white/40">
                    <div className="text-sm mb-1 font-bold">Credit Card Balance</div>
                    <div className="text-2xl font-bold">$1,842.30</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 text-center">
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-12 py-5"
          >
            Get All These Features Now
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}

function WhyChooseSmartCredit() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose SmartCredit®?
          </h2>
          <p className="text-xl text-muted-foreground">
            The most comprehensive credit monitoring platform at an affordable price
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Reason 1 */}
          <div className="bg-gradient-to-br from-light to-background rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-200">
            <div className="flex justify-center mb-4">
              <BarChart3 className="w-16 h-16 text-[#ECC169]" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
              All-in-One Platform
            </h3>
            <p className="text-muted-foreground leading-relaxed text-center mb-4">
              Everything you need in one place—credit monitoring, identity protection, financial management, and credit building tools.
            </p>
            <div className="text-sm text-muted-foreground text-center">
              No need for multiple subscriptions
            </div>
          </div>

          {/* Reason 2 */}
          <div className="bg-gradient-to-br from-light to-background rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-200">
            <div className="flex justify-center mb-4">
              <Users className="w-16 h-16 text-[#ECC169]" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
              Trusted by Professionals
            </h3>
            <p className="text-muted-foreground leading-relaxed text-center mb-4">
              Mesa Group Consulting uses and recommends SmartCredit® because it's the same platform trusted by credit repair professionals nationwide.
            </p>
            <div className="text-sm text-muted-foreground text-center">
              Industry-leading technology
            </div>
          </div>

          {/* Reason 3 */}
          <div className="bg-gradient-to-br from-light to-background rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-200">
            <div className="flex justify-center mb-4">
              <Smartphone className="w-16 h-16 text-[#ECC169]" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
              Works on All Devices
            </h3>
            <p className="text-muted-foreground leading-relaxed text-center mb-4">
              Access your credit reports, scores, and alerts anytime, anywhere—on desktop, tablet, or mobile. Your credit protection travels with you.
            </p>
            <div className="text-sm text-muted-foreground text-center">
              iOS, Android, and web access
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-light to-background">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get Started in Minutes
          </h2>
          <p className="text-xl text-muted-foreground">
            Protecting your credit is quick and easy
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Step 1 */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 shadow-xl">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-[#ECC169] rounded-full flex items-center justify-center text-2xl font-bold text-gray-900 shadow-lg">
                1
              </div>
              <div className="flex justify-center mt-4 mb-4">
                <FileText className="w-16 h-16 text-[#3D3D3D]" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                Sign Up
              </h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                Create your SmartCredit® Premium account in less than 2 minutes. No credit card required to start.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 shadow-xl">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-[#ECC169] rounded-full flex items-center justify-center text-2xl font-bold text-gray-900 shadow-lg">
                2
              </div>
              <div className="flex justify-center mt-4 mb-4">
                <Eye className="w-16 h-16 text-[#3D3D3D]" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                Get Your Reports
              </h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                Instantly access your 3-bureau credit reports and scores. See your complete financial picture right away.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 shadow-xl">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-[#ECC169] rounded-full flex items-center justify-center text-2xl font-bold text-gray-900 shadow-lg">
                3
              </div>
              <div className="flex justify-center mt-4 mb-4">
                <Shield className="w-16 h-16 text-[#3D3D3D]" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                Stay Protected
              </h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                Receive real-time alerts, track your score, and take action when needed. We monitor 24/7 so you don't have to.
              </p>
            </div>
          </div>

        </div>

        <div className="mt-12 text-center">
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-12 py-5"
          >
            Start My Protection Now
            <ExternalLink className="w-5 h-5" />
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            Join thousands of satisfied members • Cancel anytime
          </p>
        </div>

      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Why do I need to monitor all 3 credit bureaus?",
      answer: "Each credit bureau (Experian, Equifax, and TransUnion) maintains separate records. One bureau may have more or fewer inquiries than the others, which could produce different credit reports and scores. Monitoring all three ensures you have a comprehensive view of your credit and can quickly identify discrepancies."
    },
    {
      question: "How often is my credit information updated?",
      answer: "Your credit reports are updated monthly, and you'll receive real-time alerts whenever changes occur to your credit profile. This includes new accounts, inquiries, late payments, or suspicious activity."
    },
    {
      question: "Will checking my credit hurt my score?",
      answer: "No. When you check your own credit through SmartCredit®, it's considered a \"soft inquiry\" which does not impact your credit score. Only \"hard inquiries\" from lenders when you apply for credit can affect your score."
    },
    {
      question: "What's included in the $1 Million fraud insurance?",
      answer: "The Identity Fraud Expense Reimbursement covers expenses related to identity theft for you and your entire household. This includes legal fees, lost wages, document replacement costs, and other expenses incurred while resolving identity theft issues."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes. You can cancel your SmartCredit® membership at any time with no penalties or fees. You'll pay any accumulated, unbilled charges through the date of cancellation. You may reactivate your membership at any time."
    },
    {
      question: "How do I dispute errors on my credit report?",
      answer: "SmartCredit® makes disputing errors simple with Action Buttons built into your credit report dashboard. When you identify an error, click the Action Button to communicate directly with the creditor or credit bureau to initiate the dispute process."
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Common Questions About Credit Monitoring
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card rounded-lg shadow-md overflow-hidden border border-border">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-8 py-6 flex justify-between items-center hover:bg-muted/50 transition-colors"
              >
                <span className="text-lg font-bold text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === index && (
                <div className="px-8 py-6 bg-white">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Start Protecting Your <span className="text-amber-400">Credit</span> Today
        </h2>
        
        {/* Subheadline */}
        <p className="text-xl text-gray-300 mb-12">
          Join thousands of members who trust SmartCredit® for 24/7 credit monitoring, identity theft protection, and powerful credit-building tools.
        </p>

        {/* Single CTA Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 text-left">
            <h3 className="text-2xl font-bold mb-4">SmartCredit® Premium</h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <div className="text-3xl font-bold mb-1">3</div>
                <div className="text-sm opacity-90">Bureau Monitoring</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">$1M</div>
                <div className="text-sm opacity-90">Fraud Insurance</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">24/7</div>
                <div className="text-sm opacity-90">Real-Time Alerts</div>
              </div>
            </div>
            <a 
              href={AFFILIATE_LINK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-lg transition-colors"
            >
              Get SmartCredit® Premium
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-gray-300 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>Instant access to all 3 bureaus</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>Cancel anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>Trusted by credit professionals</span>
          </div>
        </div>

      </div>
    </section>
  );
}

