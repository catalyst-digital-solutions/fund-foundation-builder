import { useState } from 'react';
import Header from '@/components/Header';
import { 
  DollarSign, 
  Building2, 
  CreditCard, 
  FileText, 
  Factory, 
  Building, 
  Rocket, 
  Briefcase,
  Phone,
  Check,
  Lightbulb,
  Target,
  Zap,
  Shield,
  TrendingUp,
  Handshake,
  ClipboardList,
  MapPin,
  ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const BusinessFunding = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AllFundingSolutionsGrid />
      <ComparisonTable />
      <WhyChooseMesaGroupCapital />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-white via-amber-50 to-white py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        
        <div className="inline-block bg-amber-100 text-gray-900 px-6 py-3 rounded-full text-sm font-bold mb-8 border-2 border-amber-300">
          Mesa Group Capital | Trusted Business Funding Brokerage
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Business Funding Solutions from <span className="text-amber-600">$1K to $100M</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
          Whether you're a startup with <strong>no business history</strong> or an established company seeking <strong>multi-million dollar financing</strong>, Mesa Group Capital connects you with the right funding source.
        </p>

        <div className="bg-white rounded-xl p-8 mb-10 shadow-2xl max-w-3xl mx-auto border border-amber-200">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-amber-600 mb-2">8</div>
              <div className="text-sm text-gray-600">Funding Solutions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-600 mb-2">530+</div>
              <div className="text-sm text-gray-600">Min Credit Score</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-600 mb-2">$100M</div>
              <div className="text-sm text-gray-600">Max Funding Available</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-12 py-5 h-auto"
          >
            Explore Funding Options →
          </Button>
          
          <a
            href="tel:6613103040"
            className="inline-flex items-center justify-center gap-2 text-gray-700 bg-white hover:bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-gray-300 text-xl font-semibold px-12 py-5"
          >
            <Phone className="w-6 h-6" /> (661) 310-3040
          </a>
        </div>

      <p className="text-gray-600 text-sm mt-6 flex items-center justify-center gap-4 flex-wrap">
        <span className="flex items-center gap-1"><Check className="w-4 h-4" /> No-obligation consultation</span>
        <span>|</span>
        <span className="flex items-center gap-1"><Check className="w-4 h-4" /> Fast approval process</span>
        <span>|</span>
        <span className="flex items-center gap-1"><Check className="w-4 h-4" /> Multiple lender network</span>
      </p>

      </div>
    </section>
  );
};

const AllFundingSolutionsGrid = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            8 Comprehensive Business Funding Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From startups to established enterprises, Mesa Group Capital has the right funding solution for your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Card 1: Business Cash Advance */}
          <div className="bg-gradient-to-br from-[hsl(var(--mgc-cream))] to-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow border-2 border-[hsl(var(--mgc-tan))]">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="mb-3">
                  <DollarSign className="w-12 h-12 text-[hsl(var(--mgc-gold))]" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Business Cash Advance
                </h3>
              </div>
              <div className="bg-[hsl(var(--mgc-gold))] text-white px-3 py-1 rounded-full text-sm font-bold">
                Up to $10M
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              If you accept credit cards or have regular bank deposits, you can get funding advanced to you for up to <strong>200% (twice)</strong> of the amount of your monthly deposits.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Min Credit Score:</span>
                <span className="font-bold text-foreground">550+</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Min Time in Business:</span>
                <span className="font-bold text-foreground">6 months</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Min Monthly Revenue:</span>
                <span className="font-bold text-foreground">$8,000/mo</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground">Funding Range:</span>
                <span className="font-bold text-green-600">Up to $10 Million</span>
              </div>
            </div>
          </div>

          {/* Card 2: Business Term Loans */}
          <div className="bg-gradient-to-br from-[hsl(var(--mgc-cream))] to-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow border-2 border-[hsl(var(--mgc-tan))]">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="mb-3">
                  <Building2 className="w-12 h-12 text-[hsl(var(--mgc-gold))]" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Business Term Loans
                </h3>
              </div>
              <div className="bg-[hsl(var(--mgc-gold))] text-white px-3 py-1 rounded-full text-sm font-bold">
                Up to $5M
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              All types of loans, including <strong>SBA Express, 7(A), Equipment Financing, Franchise Loans, Purchase Order Loans, Real Estate backed loans</strong> and even more.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Min Credit Score:</span>
                <span className="font-bold text-foreground">650+</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Min Time in Business:</span>
                <span className="font-bold text-foreground">2+ years</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Min Monthly Revenue:</span>
                <span className="font-bold text-foreground">$20,000/mo</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground">Funding Range:</span>
                <span className="font-bold text-green-600">Up to $5 Million</span>
              </div>
            </div>
          </div>

          {/* Card 3: Business Line of Credit */}
          <div className="bg-gradient-to-br from-[hsl(var(--mgc-cream))] to-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow border-2 border-[hsl(var(--mgc-tan))]">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="mb-3">
                  <CreditCard className="w-12 h-12 text-[hsl(var(--mgc-gold))]" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Business Line of Credit
                </h3>
              </div>
              <div className="bg-[hsl(var(--mgc-gold))] text-white px-3 py-1 rounded-full text-sm font-bold">
                Up to $250K
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Money available to "draw" against that's deposited into your bank account. <strong>Repayment plan based on what you borrow.</strong> Access your balance as needed.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Min Credit Score:</span>
                <span className="font-bold text-foreground">650+</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Min Time in Business:</span>
                <span className="font-bold text-foreground">2+ years</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Min Monthly Revenue:</span>
                <span className="font-bold text-foreground">$20,000/mo</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground">Funding Range:</span>
                <span className="font-bold text-green-600">Up to $250,000</span>
              </div>
            </div>
          </div>

          {/* Card 4: Invoice Factoring */}
          <div className="bg-gradient-to-br from-[hsl(var(--mgc-cream))] to-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow border-2 border-[hsl(var(--mgc-tan))]">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="mb-3">
                  <FileText className="w-12 h-12 text-[hsl(var(--mgc-gold))]" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Invoice Factoring
                </h3>
              </div>
              <div className="bg-[hsl(var(--mgc-gold))] text-white px-3 py-1 rounded-full text-sm font-bold">
                Up to $5M
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Sell your accounts receivable to a lender at a discount, which the lender in turn provides an advance on payments for <strong>outstanding invoices</strong>.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Min Credit Score:</span>
                <span className="font-bold text-green-600">530+ ✨ Lowest</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Min Time in Business:</span>
                <span className="font-bold text-foreground">3 months</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Min Monthly Revenue:</span>
                <span className="font-bold text-foreground">$40,000/mo</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground">Funding Range:</span>
                <span className="font-bold text-green-600">Up to $5 Million</span>
              </div>
            </div>
          </div>

          {/* Card 5: Equipment Financing */}
          <div className="bg-gradient-to-br from-[hsl(var(--mgc-cream))] to-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow border-2 border-[hsl(var(--mgc-tan))]">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="mb-3">
                  <Factory className="w-12 h-12 text-[hsl(var(--mgc-gold))]" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Equipment Financing
                </h3>
              </div>
              <div className="bg-[hsl(var(--mgc-gold))] text-white px-3 py-1 rounded-full text-sm font-bold">
                $1K-$20M
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              For financing <strong>new or used equipment</strong> and their associated soft costs. Perfect for manufacturing, construction, healthcare, and more.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Min Credit Score:</span>
                <span className="font-bold text-foreground">700+</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Min Time in Business:</span>
                <span className="font-bold text-foreground">4 months bank statements</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Min Monthly Revenue:</span>
                <span className="font-bold text-foreground">$8,000/mo</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground">Funding Range:</span>
                <span className="font-bold text-green-600">$1K to $20 Million</span>
              </div>
            </div>
          </div>

          {/* Card 6: Real Estate Investment / Commercial Mortgage */}
          <div className="bg-gradient-to-br from-[hsl(var(--mgc-cream))] to-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow border-2 border-[hsl(var(--mgc-tan))]">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="mb-3">
                  <Building className="w-12 h-12 text-[hsl(var(--mgc-gold))]" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Real Estate Investment / Commercial Mortgage
                </h3>
              </div>
              <div className="bg-[hsl(var(--mgc-gold))] text-white px-3 py-1 rounded-full text-sm font-bold">
                Up to $100M
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Commercial mortgages, fix-and-flip, new construction, mortgage refinance, and multi-family units.</strong> LTV up to 90%. Qualifications vary per deal.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Min Credit Score:</span>
                <span className="font-bold text-foreground">620+</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Min Time in Business:</span>
                <span className="font-bold text-foreground">Investor experience helps</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Min Monthly Revenue:</span>
                <span className="font-bold text-foreground">N/A</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground">Funding Range:</span>
                <span className="font-bold text-green-600">Up to $100 Million ⭐</span>
              </div>
            </div>
          </div>

          {/* Card 7: STARTUP Unsecured Business Funding */}
          <div className="bg-gradient-to-br from-[hsl(var(--mgc-gold))] to-[hsl(var(--mgc-yellow))] text-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow border-2 border-[hsl(var(--mgc-gold))]">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="mb-3">
                  <Rocket className="w-12 h-12 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  STARTUP Unsecured Business Funding
                </h3>
              </div>
              <div className="bg-white text-[hsl(var(--mgc-gold))] px-3 py-1 rounded-full text-sm font-bold">
                Up to $150K
              </div>
            </div>
            
            <p className="leading-relaxed mb-6">
              Funding can be used for <strong>ANY PURPOSE</strong>. No income verification required and no industry restrictions. <strong>Revolving line of credit.</strong> Must have at least $2K in revolving credit currently and less than 30% utilization.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-white/30">
                <span>Min Credit Score:</span>
                <span className="font-bold">680+</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/30">
                <span>Min Time in Business:</span>
                <span className="font-bold">NONE ⭐ Perfect for Startups!</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/30">
                <span>Min Monthly Revenue:</span>
                <span className="font-bold">$0-$4K</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span>Funding Range:</span>
                <span className="font-bold">Up to $150,000</span>
              </div>
            </div>
          </div>

          {/* Card 8: STARTUP Small Business Loan */}
          <div className="bg-gradient-to-br from-[hsl(var(--mgc-gold))] to-[hsl(var(--mgc-yellow))] text-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow border-2 border-[hsl(var(--mgc-gold))]">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="mb-3">
                  <Briefcase className="w-12 h-12 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  STARTUP Small Business Loan
                </h3>
              </div>
              <div className="bg-white text-[hsl(var(--mgc-gold))] px-3 py-1 rounded-full text-sm font-bold">
                Up to $150K
              </div>
            </div>
            
            <p className="leading-relaxed mb-6">
              <strong>Unsecured personal loan.</strong> 3-7 year terms available. Must have W2 verifiable income. You will have <strong>DIRECT access to cash</strong> for business purposes.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-white/30">
                <span>Min Credit Score:</span>
                <span className="font-bold">680+</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/30">
                <span>Min Time in Business:</span>
                <span className="font-bold">NONE ⭐ Perfect for Startups!</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/30">
                <span>Min Monthly Revenue:</span>
                <span className="font-bold">$4,000/mo (personal income)</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span>Funding Range:</span>
                <span className="font-bold">Up to $150,000</span>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-16 text-center">
          <Button 
            size="lg"
            className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-12 py-5 h-auto"
          >
            Get Matched with the Right Funding →
          </Button>
          <p className="text-muted-foreground mt-4">Free consultation • No obligation • Fast pre-qualification</p>
        </div>

      </div>
    </section>
  );
};

const ComparisonTable = () => {
  return (
    <section className="py-20 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Quick Comparison: Find Your Best Fit
          </h2>
          <p className="text-xl text-muted-foreground">
            Compare all 8 funding options side-by-side to identify which solution matches your business profile.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-card rounded-lg shadow-lg text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-[hsl(var(--mgc-gold))] to-[hsl(var(--mgc-yellow))] text-white">
                <th className="px-4 py-4 text-left font-bold">Funding Type</th>
                <th className="px-4 py-4 text-center font-bold">Min Credit</th>
                <th className="px-4 py-4 text-center font-bold">Time in Business</th>
                <th className="px-4 py-4 text-center font-bold">Min Revenue</th>
                <th className="px-4 py-4 text-center font-bold">Funding Range</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              
              <tr className="hover:bg-secondary/50">
                <td className="px-4 py-4 font-semibold text-foreground">Business Cash Advance</td>
                <td className="px-4 py-4 text-center">550+</td>
                <td className="px-4 py-4 text-center">6 months</td>
                <td className="px-4 py-4 text-center">$8K/mo</td>
                <td className="px-4 py-4 text-center font-bold text-green-600">Up to $10M</td>
              </tr>

              <tr className="hover:bg-secondary/50">
                <td className="px-4 py-4 font-semibold text-foreground">Business Term Loans</td>
                <td className="px-4 py-4 text-center">650+</td>
                <td className="px-4 py-4 text-center">2+ years</td>
                <td className="px-4 py-4 text-center">$20K/mo</td>
                <td className="px-4 py-4 text-center font-bold text-green-600">Up to $5M</td>
              </tr>

              <tr className="hover:bg-secondary/50">
                <td className="px-4 py-4 font-semibold text-foreground">Business Line of Credit</td>
                <td className="px-4 py-4 text-center">650+</td>
                <td className="px-4 py-4 text-center">2+ years</td>
                <td className="px-4 py-4 text-center">$20K/mo</td>
                <td className="px-4 py-4 text-center font-bold text-green-600">Up to $250K</td>
              </tr>

              <tr className="hover:bg-secondary/50 bg-green-50">
                <td className="px-4 py-4 font-semibold text-foreground">Invoice Factoring ⭐ Lowest Credit</td>
                <td className="px-4 py-4 text-center font-bold text-green-600">530+</td>
                <td className="px-4 py-4 text-center">3 months</td>
                <td className="px-4 py-4 text-center">$40K/mo</td>
                <td className="px-4 py-4 text-center font-bold text-green-600">Up to $5M</td>
              </tr>

              <tr className="hover:bg-secondary/50">
                <td className="px-4 py-4 font-semibold text-foreground">Equipment Financing</td>
                <td className="px-4 py-4 text-center">700+</td>
                <td className="px-4 py-4 text-center">4 months</td>
                <td className="px-4 py-4 text-center">$8K/mo</td>
                <td className="px-4 py-4 text-center font-bold text-green-600">$1K-$20M</td>
              </tr>

              <tr className="hover:bg-secondary/50 bg-blue-50">
                <td className="px-4 py-4 font-semibold text-foreground">Real Estate / Commercial ⭐ Highest Limit</td>
                <td className="px-4 py-4 text-center">620+</td>
                <td className="px-4 py-4 text-center">Varies</td>
                <td className="px-4 py-4 text-center">N/A</td>
                <td className="px-4 py-4 text-center font-bold text-blue-600">Up to $100M</td>
              </tr>

              <tr className="hover:bg-secondary/50 bg-purple-50">
                <td className="px-4 py-4 font-semibold text-foreground">STARTUP Unsecured ⭐ No Business History</td>
                <td className="px-4 py-4 text-center">680+</td>
                <td className="px-4 py-4 text-center font-bold text-purple-600">NONE</td>
                <td className="px-4 py-4 text-center">$0-$4K</td>
                <td className="px-4 py-4 text-center font-bold text-green-600">Up to $150K</td>
              </tr>

              <tr className="hover:bg-secondary/50 bg-purple-50">
                <td className="px-4 py-4 font-semibold text-foreground">STARTUP Small Business Loan ⭐ No Business History</td>
                <td className="px-4 py-4 text-center">680+</td>
                <td className="px-4 py-4 text-center font-bold text-purple-600">NONE</td>
                <td className="px-4 py-4 text-center">$4K/mo (personal)</td>
                <td className="px-4 py-4 text-center font-bold text-green-600">Up to $150K</td>
              </tr>

            </tbody>
          </table>
        </div>

        <div className="mt-8 bg-card rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-[hsl(var(--mgc-yellow))]" />
            Can't Decide Which Option Is Right for You?
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            That's where Mesa Group Capital's brokerage expertise comes in. We analyze your business profile, credit situation, revenue, and goals to match you with the <strong>best funding source</strong> from our network of lenders. No guesswork—just strategic guidance.
          </p>
          <Button className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-lg font-semibold px-8 py-3 h-auto">
            Get Expert Guidance Now
          </Button>
        </div>

      </div>
    </section>
  );
};

const WhyChooseMesaGroupCapital = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Businesses Choose Mesa Group Capital
          </h2>
          <p className="text-xl text-muted-foreground">
            More than just a funding source—we're your strategic financing partner.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Target className="w-14 h-14 text-[hsl(var(--mgc-gold))]" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                We Match You with the Right Lender
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                With 8 funding solutions and a network of 30+ lenders, we don't force you into one-size-fits-all options. We analyze your business and match you with lenders who <strong>specialize in your industry, credit profile, and funding needs</strong>.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Zap className="w-14 h-14 text-[hsl(var(--mgc-yellow))]" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Fast Pre-Qualification & Approval
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Time is money in business. Our streamlined process gets you <strong>pre-qualified in 24 hours</strong> and final approval within days—not weeks. Some funding options (like cash advances) can be funded same-day.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Briefcase className="w-14 h-14 text-[hsl(var(--mgc-gold))]" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Startup-Friendly Programs
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>No business history? No problem.</strong> Our 2 startup programs don't require any time in business—just good personal credit (680+). Perfect for entrepreneurs launching their first venture.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Shield className="w-14 h-14 text-[hsl(var(--mgc-gold))]" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Bad Credit? We Have Options
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Credit scores as low as <strong>530+</strong> are accepted for invoice factoring. And if your credit needs work, we can help you improve it while securing funding through alternative sources like merchant cash advances (550+ credit).
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <TrendingUp className="w-14 h-14 text-[hsl(var(--mgc-yellow))]" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Flexible Repayment Structures
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Choose from <strong>fixed-payment term loans, revolving credit lines, revenue-based repayment, or daily ACH deductions</strong> based on your cash flow patterns. We structure financing that works with your business cycles.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Handshake className="w-14 h-14 text-[hsl(var(--mgc-gold))]" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Ongoing Strategic Support
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We don't disappear after funding closes. Mesa Group Capital provides <strong>continued guidance on capital management, refinancing opportunities, and long-term financing strategies</strong> as your business grows.
              </p>
            </div>
          </div>

        </div>

        <div className="bg-gradient-to-br from-[hsl(var(--mgc-cream))] to-[hsl(var(--mgc-tan))] rounded-xl p-8 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Ready to Get the Funding Your Business Deserves?
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Let Mesa Group Capital's brokerage expertise connect you with the right funding solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-10 py-4 h-auto"
            >
              Apply for Funding Now
            </Button>
            
            <a
              href="tel:6613103040"
              className="inline-flex items-center justify-center gap-2 bg-white text-[hsl(var(--mgc-gold))] text-xl font-semibold px-10 py-4 rounded-lg border-2 border-[hsl(var(--mgc-gold))] hover:bg-secondary/30 transition-all duration-200"
            >
              <Phone className="w-6 h-6" /> Call (661) 310-3040
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Which funding option is right for my business?",
      answer: "It depends on your credit score, time in business, revenue, and funding needs. Invoice factoring is best for B2B companies with outstanding invoices and accepts the lowest credit scores (530+). Startups with no business history should look at our STARTUP programs (680+ credit required). Established businesses (2+ years, 650+ credit, $20K+/mo revenue) qualify for term loans and credit lines. Real estate investors need 620+ credit but can access up to $100M. Equipment-heavy businesses can get $1K-$20M with 700+ credit. Mesa Group Capital will help you identify the best fit during your consultation."
    },
    {
      question: "How fast can I get funded?",
      answer: "Timeline varies by funding type. Business Cash Advances and Merchant Cash Advances can fund same-day to 48 hours. Invoice Factoring typically funds within 24-48 hours. Business Lines of Credit and STARTUP programs: 3-7 business days. SBA loans and Real Estate financing: 2-6 weeks. During your consultation, we'll set clear expectations based on your chosen funding solution."
    },
    {
      question: "What if my credit score is below 680?",
      answer: "You still have options! Invoice Factoring accepts credit scores as low as 530+. Business Cash Advances accept 550+ credit. Real Estate Investment loans accept 620+ credit. If your credit is below these thresholds, we can help you work on credit improvement strategies while exploring alternative funding sources. Mesa Group Capital specializes in matching businesses with lenders regardless of credit challenges."
    },
    {
      question: "Do I need collateral?",
      answer: "It depends on the funding type. Unsecured options (no collateral): Business Cash Advances, Business Lines of Credit, STARTUP programs, and some term loans. Secured options (collateral required): Equipment Financing uses the equipment as collateral. Real Estate loans use the property as collateral. SBA loans may require collateral for larger amounts. We always prioritize unsecured options first to protect your assets."
    },
    {
      question: "Can I get funding if my business is brand new (no history)?",
      answer: "Yes! Our 2 STARTUP programs are designed specifically for businesses with ZERO time in business. The STARTUP Unsecured Business Funding (up to $150K) and STARTUP Small Business Loan (up to $150K) only require personal credit of 680+ and some verifiable personal income. No business tax returns, no years of operation required. Perfect for launching your first venture."
    },
    {
      question: "How much will the funding cost me?",
      answer: "Cost varies significantly by funding type, credit profile, and lender. Business term loans and SBA loans typically have APRs of 6-12%. Business Lines of Credit: 8-20% APR. Merchant Cash Advances and Invoice Factoring: factor rates of 1.1-1.5 (not APR). Equipment Financing: 5-15% depending on collateral. STARTUP programs: 10-25% depending on credit. We'll provide transparent cost breakdowns for all options during your consultation so you can make an informed decision."
    },
    {
      question: "What documents do I need to apply?",
      answer: "Basic requirements for most programs: Driver's License or ID, 3-6 months of business bank statements, Business tax returns (if applicable), Personal credit authorization. Additional documents may be needed for specific programs (e.g., equipment quotes for equipment financing, invoices for invoice factoring, property details for real estate). Mesa Group Capital will provide a complete checklist during your consultation."
    },
    {
      question: "Can I apply for multiple funding types at once?",
      answer: "Yes, and we often recommend it! Many businesses benefit from combining multiple funding sources. For example: 0% Business Credit Line + Equipment Financing + Invoice Factoring for comprehensive capital coverage. Mesa Group Capital coordinates timing and applications to maximize approvals while minimizing credit inquiry impacts. We call this 'Strategic Funding Combinations.'"
    },
    {
      question: "What industries does Mesa Group Capital work with?",
      answer: "We work with virtually all industries, but certain funding types favor specific sectors. Invoice Factoring: B2B services, contractors, staffing agencies, wholesalers. Equipment Financing: manufacturing, construction, healthcare, transportation. Merchant Cash Advances: retail, restaurants, service providers. Real Estate: fix-and-flip investors, commercial property buyers, multi-family developers. STARTUP programs: all industries. If you're unsure whether your industry qualifies, schedule a consultation—we'll find the right option."
    },
    {
      question: "Is Mesa Group Capital a direct lender?",
      answer: "No, Mesa Group Capital is a business funding brokerage. This means we have relationships with 30+ funding partners and lenders, enabling us to match your business with the ideal funding source for your specific needs and profile. As a brokerage, we provide strategic guidance and handle the application process on your behalf, often achieving better terms than you'd get applying directly. There's no cost to you—we're compensated by the lenders."
    }
  ];

  return (
    <section className="py-20 px-6 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Get clarity on Mesa Group Capital's funding solutions.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border rounded-lg overflow-hidden bg-card">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left hover:bg-secondary/50 transition-colors flex justify-between items-center"
              >
                <span className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-[hsl(var(--mgc-gold))] flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-5 bg-secondary/30 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[hsl(var(--mgc-gold))] via-[hsl(var(--mgc-yellow))] to-[hsl(var(--mgc-tan))]">
      <div className="max-w-4xl mx-auto text-center">
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Get Matched with Your Ideal Funding Solution
        </h2>
        
        <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
          From <strong>$1,000 to $100 million</strong>. From <strong>530+ to 700+ credit</strong>. From <strong>brand new startups to established enterprises</strong>. Mesa Group Capital has the right funding source for your business.
        </p>

        <div className="bg-white rounded-xl p-8 mb-8 shadow-2xl">
          <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center justify-center gap-2">
            <ClipboardList className="w-7 h-7 text-[hsl(var(--mgc-gold))]" />
            Start Your Free Consultation
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            No obligation. No pressure. Just expert guidance on which funding solution fits your business best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-xl font-bold px-12 py-5 h-auto"
            >
              Apply for Funding Now
            </Button>
            
            <a
              href="tel:6613103040"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-[hsl(var(--mgc-gold))] text-xl font-semibold px-12 py-5 rounded-lg border-2 border-[hsl(var(--mgc-gold))] hover:bg-secondary/30 transition-all duration-200"
            >
              <Phone className="w-6 h-6" /> (661) 310-3040
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Mesa Group Capital | Bakersfield's Trusted Business Funding Brokerage
          </p>
        </div>

    <div className="grid md:grid-cols-3 gap-4 text-white text-sm">
      <div className="flex items-center justify-center gap-2">
        <Check className="w-5 h-5" />
        <span>8 Funding Solutions</span>
      </div>
      <div className="flex items-center justify-center gap-2">
        <Check className="w-5 h-5" />
        <span>30+ Lender Network</span>
      </div>
      <div className="flex items-center justify-center gap-2">
        <Check className="w-5 h-5" />
        <span>Expert Brokerage Guidance</span>
      </div>
    </div>

      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--mgc-dark-gray))] py-12 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-[hsl(var(--mgc-yellow))] mb-4">Mesa Group Capital</h3>
        <p className="text-sm text-gray-300 mb-4">
          Your trusted business funding brokerage connecting businesses with the right capital solutions.
        </p>
        <div className="text-sm text-gray-300 space-y-1">
          <p className="flex items-center gap-2">
            <MapPin className="w-4 h-4" /> Bakersfield, CA
          </p>
          <p className="flex items-center gap-2">
            <Phone className="w-4 h-4" /> (661) 310-3040
          </p>
        </div>
          </div>

          {/* Funding Solutions */}
          <div>
            <h3 className="text-xl font-bold text-[hsl(var(--mgc-yellow))] mb-4">Funding Solutions</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Business Cash Advance</li>
              <li>• Business Term Loans</li>
              <li>• Business Lines of Credit</li>
              <li>• Invoice Factoring</li>
              <li>• Equipment Financing</li>
              <li>• Real Estate Financing</li>
              <li>• STARTUP Funding</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-[hsl(var(--mgc-yellow))] mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/about" className="hover:text-[hsl(var(--mgc-yellow))]">About Mesa Group</a></li>
              <li><a href="/business-funding" className="hover:text-[hsl(var(--mgc-yellow))]">Business Funding</a></li>
              <li><a href="/business-credit" className="hover:text-[hsl(var(--mgc-yellow))]">Business Credit Building</a></li>
              <li><a href="/business-debt-relief" className="hover:text-[hsl(var(--mgc-yellow))]">Business Debt Relief</a></li>
              <li><a href="/contact" className="hover:text-[hsl(var(--mgc-yellow))]">Contact Us</a></li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-xl font-bold text-[hsl(var(--mgc-yellow))] mb-4">Ready to Get Funded?</h3>
            <Button className="bg-[hsl(var(--mgc-yellow))] text-[hsl(var(--mgc-dark-gray))] text-base font-bold px-6 py-3 h-auto hover:bg-[hsl(var(--mgc-cream))] transition-all duration-200 mb-4 w-full">
              Apply Now
            </Button>
            <p className="text-xs text-gray-400">
              Free consultation • No obligation • Fast approval
            </p>
          </div>

        </div>

        <div className="border-t border-gray-600 pt-6 text-center">
          <p className="text-sm text-gray-400 mb-2">
            © {new Date().getFullYear()} Mesa Group Capital. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            <strong>Disclosure:</strong> Mesa Group Capital is a business funding brokerage connecting businesses with third-party lenders. Approval, terms, and rates are subject to lender requirements and credit review. Not all applicants will qualify for all funding programs. Funding amounts and terms vary by program, credit profile, business revenue, and lender discretion.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default BusinessFunding;
