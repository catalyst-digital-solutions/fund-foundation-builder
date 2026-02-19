/**
 * Static search index records for mesagroupconsulting.com
 * Run `npm run index:algolia` to push these to Algolia.
 * Add new pages here whenever new routes are created.
 */

export interface SearchRecord {
  objectID: string;
  title: string;
  description: string;
  path: string;
  category: string;
  keywords: string[];
}

export const records: SearchRecord[] = [
  // ── MAIN PAGES ──────────────────────────────────────────────────────────────
  {
    objectID: 'home',
    title: 'Mesa Group Consulting — Home',
    description: 'Your premier financial partner for credit repair, business funding, debt relief, and financial guidance. Serving clients nationwide from Bakersfield, CA.',
    path: '/',
    category: 'Main',
    keywords: ['mesa group', 'financial services', 'credit', 'funding', 'home'],
  },
  {
    objectID: 'about',
    title: 'About Us',
    description: 'Learn about Mesa Group Consulting, our founder Evert Calderon, and our mission to help 2,500+ clients build better financial futures.',
    path: '/about',
    category: 'Main',
    keywords: ['about', 'evert calderon', 'mission', 'team', 'bakersfield'],
  },
  {
    objectID: 'contact',
    title: 'Contact Us',
    description: 'Schedule a free consultation or reach our team. Call (661) 310-3040. Trilingual support in English, Spanish, and Punjabi.',
    path: '/contact',
    category: 'Main',
    keywords: ['contact', 'consultation', 'phone', 'schedule', 'appointment'],
  },
  {
    objectID: 'concierge',
    title: 'Mesa Financial Concierge',
    description: 'Your personal financial concierge. Expert advisors, weekly live calls, private community, and $1M identity theft insurance — included FREE with SmartCredit.',
    path: '/concierge',
    category: 'Main',
    keywords: ['concierge', 'community', 'financial guidance', 'smartcredit', 'coaching'],
  },

  // ── FOR CONSUMERS ────────────────────────────────────────────────────────────
  {
    objectID: 'for-consumers',
    title: 'For Consumers',
    description: 'Comprehensive financial services for individuals and families: credit repair, monitoring, loans, debt relief, estate planning, and more.',
    path: '/for-consumers',
    category: 'For Consumers',
    keywords: ['consumers', 'individuals', 'families', 'financial services'],
  },
  {
    objectID: 'credit-repair',
    title: 'Credit Repair — Mesa360 Credit System',
    description: 'Professional credit restoration with our Mesa360 Credit System. 90-day money-back guarantee. $15M+ in collections deleted. Start for $27.99/month.',
    path: '/credit-repair',
    category: 'Credit Services',
    keywords: ['credit repair', 'credit restoration', 'mesa360', 'disputes', 'collections', 'negative items', 'credit score'],
  },
  {
    objectID: 'diy-credit-repair',
    title: 'DIY Credit Repair',
    description: 'Self-directed credit repair with Creditily software. Learn to dispute errors, track progress, and improve your credit on your own terms.',
    path: '/diy-credit-repair',
    category: 'Credit Services',
    keywords: ['diy credit repair', 'creditily', 'self help', 'dispute letters', 'software'],
  },
  {
    objectID: 'credit-monitoring',
    title: 'Credit Monitoring — Powered by SmartCredit',
    description: '3-bureau credit monitoring with $1M fraud insurance, real-time alerts, ScoreBuilder tools, and Mesa Financial Concierge access. $27.99/month.',
    path: '/credit-monitoring',
    category: 'Credit Services',
    keywords: ['credit monitoring', 'smartcredit', 'identity theft', 'fraud protection', '3 bureau', 'experian', 'equifax', 'transunion'],
  },
  {
    objectID: 'build-credit',
    title: 'Build Your Credit',
    description: 'Free guide and tools to build credit from scratch. Secured cards, credit builder loans, rent reporting, and step-by-step strategies.',
    path: '/build-credit',
    category: 'Credit Services',
    keywords: ['build credit', 'start credit', 'secured card', 'credit builder', 'no credit', 'thin file'],
  },
  {
    objectID: 'personal-loans',
    title: 'Personal Loans',
    description: 'Compare personal loans from $1,000 to $100,000. Debt consolidation, home improvement, medical expenses, and more through our lending network.',
    path: '/personal-loans',
    category: 'Lending Solutions',
    keywords: ['personal loan', 'debt consolidation loan', 'home improvement loan', 'medical loan', 'borrow money'],
  },
  {
    objectID: 'credit-cards',
    title: 'Credit Cards',
    description: 'Find the best credit cards for your credit profile. Rewards cards, balance transfers, and cards for building credit.',
    path: '/credit-cards',
    category: 'Lending Solutions',
    keywords: ['credit cards', 'rewards', 'balance transfer', 'cash back', 'credit card comparison'],
  },
  {
    objectID: 'auto-loan-refi',
    title: 'Auto Loan Refinancing',
    description: 'Refinance your auto loan and lower your monthly payment. Compare rates from top lenders with no hard credit pull to check rates.',
    path: '/auto-loan-refi',
    category: 'Lending Solutions',
    keywords: ['auto loan refinance', 'car loan', 'lower payment', 'vehicle refinance'],
  },
  {
    objectID: 'student-loan-refi',
    title: 'Student Loan Refinancing',
    description: 'Refinance federal or private student loans to get a lower interest rate and save thousands over the life of your loan.',
    path: '/student-loan-refi',
    category: 'Lending Solutions',
    keywords: ['student loan refinance', 'student debt', 'federal loans', 'lower rate'],
  },
  {
    objectID: 'debt-consolidation-loan',
    title: 'Debt Consolidation Loans',
    description: 'Combine multiple debts into one simple monthly payment with a lower interest rate through our lending partners.',
    path: '/debt-consolidation-loan',
    category: 'Lending Solutions',
    keywords: ['debt consolidation', 'combine debt', 'lower payment', 'single payment'],
  },
  {
    objectID: 'debt-relief',
    title: 'Debt Relief',
    description: 'Explore debt settlement and negotiation options for credit cards, medical bills, and personal loans through our debt relief partners.',
    path: '/debt-relief',
    category: 'Protection Services',
    keywords: ['debt relief', 'debt settlement', 'debt negotiation', 'credit card debt', 'medical debt'],
  },
  {
    objectID: 'trust-and-will-plan',
    title: 'Trust & Will Planning',
    description: 'Create your will, trust, healthcare directive, and power of attorney online through our partner Trust & Will.',
    path: '/trust-and-will-plan',
    category: 'Protection Services',
    keywords: ['will', 'trust', 'estate planning', 'healthcare directive', 'power of attorney', 'legacy'],
  },
  {
    objectID: 'life-insurance',
    title: 'Life Insurance',
    description: 'Compare life insurance quotes from top carriers through PolicyGenius. Term, whole, and universal life insurance options.',
    path: '/life-insurance',
    category: 'Protection Services',
    keywords: ['life insurance', 'term life', 'whole life', 'insurance quote', 'policygenius'],
  },

  // ── FOR BUSINESSES ───────────────────────────────────────────────────────────
  {
    objectID: 'for-businesses',
    title: 'For Businesses',
    description: 'Business funding, credit building, and debt relief solutions for entrepreneurs, startups, and established businesses nationwide.',
    path: '/for-businesses',
    category: 'For Businesses',
    keywords: ['business', 'entrepreneur', 'small business', 'startup', 'LLC'],
  },
  {
    objectID: 'business-funding',
    title: 'Business Funding',
    description: 'Access business loans, lines of credit, SBA loans, equipment financing, and merchant cash advances through our lending network.',
    path: '/business-funding',
    category: 'Business Services',
    keywords: ['business funding', 'business loan', 'SBA loan', 'line of credit', 'merchant cash advance', 'equipment financing'],
  },
  {
    objectID: 'zero-interest-business-funding',
    title: '0% Interest Business Funding',
    description: 'Access $50,000–$250,000 in 0% business credit with no collateral, no tax returns, and no personal guarantees. Three support tiers available.',
    path: '/zero-interest-business-funding',
    category: 'Business Services',
    keywords: ['0% funding', 'zero interest', 'business credit cards', 'no collateral', '0 percent funding'],
  },
  {
    objectID: 'business-credit-builder',
    title: 'Business Credit Builder',
    description: 'Build your business credit profile with Dun & Bradstreet, Experian Business, and Equifax. Access $50K–$150K in business funding.',
    path: '/business-credit-builder',
    category: 'Business Services',
    keywords: ['business credit', 'dun bradstreet', 'DUNS number', 'EIN', 'corporate credit', 'business tradelines'],
  },
  {
    objectID: 'business-debt-relief',
    title: 'Business Debt Relief',
    description: 'Debt settlement and restructuring solutions for businesses with credit card debt, merchant cash advances, and other business obligations.',
    path: '/business-debt-relief',
    category: 'Business Services',
    keywords: ['business debt relief', 'debt restructuring', 'MCA relief', 'business debt settlement'],
  },

  // ── RESOURCES ────────────────────────────────────────────────────────────────
  {
    objectID: 'resources',
    title: 'Resources',
    description: 'Financial education resources: articles, calculators, letter templates, and news from Mesa Group Consulting.',
    path: '/resources',
    category: 'Resources',
    keywords: ['resources', 'education', 'tools', 'guides'],
  },
  {
    objectID: 'resources-articles',
    title: 'Blog & Guides — Articles & Insights',
    description: 'Financial education articles, credit repair guides, and business funding insights from the Mesa Group Consulting team.',
    path: '/resources/articles',
    category: 'Resources',
    keywords: ['blog', 'articles', 'guides', 'credit tips', 'financial education'],
  },
  {
    objectID: 'resources-calculators',
    title: 'Financial Calculators',
    description: 'Free financial calculators: debt payoff, credit utilization, DTI ratio, emergency fund, and monthly payment calculators.',
    path: '/resources/calculators',
    category: 'Resources',
    keywords: ['calculator', 'debt payoff', 'credit utilization', 'DTI', 'monthly payment', 'emergency fund'],
  },
  {
    objectID: 'resources-templates',
    title: 'Credit Dispute Letter Templates',
    description: 'Free credit dispute letter templates for contacting Experian, Equifax, TransUnion, and creditors directly.',
    path: '/resources/templates',
    category: 'Resources',
    keywords: ['dispute letter', 'letter template', 'credit bureau letter', 'dispute template', 'FCRA'],
  },
  {
    objectID: 'resources-news',
    title: 'Mesa News',
    description: 'Latest news, updates, and announcements from Mesa Group Consulting.',
    path: '/resources/news',
    category: 'Resources',
    keywords: ['news', 'announcements', 'updates', 'mesa group news'],
  },
];
