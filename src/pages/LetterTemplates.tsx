import { useState } from 'react';
import {
  FileText, Download, Search, CheckCircle, ArrowRight, Scale,
  DollarSign, Edit, Award, Shield, Edit3, Mail, Copy, AlignLeft,
  Paperclip, Clock, Target, Lightbulb, List, MapPin, File,
  Phone, ChevronDown, AlertTriangle, AlertCircle
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CalendlyModal } from '@/components/CalendlyModal';
import { NewsletterModal } from '@/components/NewsletterModal';

interface TemplateCardProps {
  icon: React.ReactNode;
  title: string;
  badge?: string;
  whenToUse: string;
  whatItDoes: string;
  included: string[];
  useCases: string[];
  additionalNote?: string;
  category: string;
}

const TemplateCard = ({
  icon, title, badge, whenToUse, whatItDoes, included, useCases, additionalNote
}: TemplateCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-200 overflow-hidden">
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            {icon}
            <div>
              <h4 className="text-xl font-bold text-gray-900">{title}</h4>
              {badge && <span className="text-sm text-amber-600 font-semibold">{badge}</span>}
            </div>
          </div>
          <Download className="w-5 h-5 text-gray-400" />
        </div>
        
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <p className="text-sm font-semibold text-gray-900 mb-1">When to Use:</p>
          <p className="text-sm text-gray-700">{whenToUse}</p>
        </div>
        
        <div>
          <p className="text-sm font-semibold text-gray-900 mb-2">What It Does:</p>
          <p className="text-sm text-gray-700 leading-relaxed">{whatItDoes}</p>
        </div>
        
        <div>
          <p className="text-sm font-semibold text-gray-900 mb-2">What's Included:</p>
          <ul className="space-y-1">
            {included.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <p className="text-sm font-semibold text-gray-900 mb-2">Common Use Cases:</p>
          <ul className="space-y-1">
            {useCases.map((useCase, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                <ArrowRight className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>{useCase}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {additionalNote && (
          <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded">
            <p className="text-sm text-gray-700">{additionalNote}</p>
          </div>
        )}
        
        <button className="w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
          <Download className="w-5 h-5" />
          Download Template
        </button>
      </div>
    </div>
  );
};

const templates: TemplateCardProps[] = [
  // Credit Dispute Letters
  {
    category: 'dispute',
    icon: <FileText className="w-8 h-8 text-amber-600 flex-shrink-0" />,
    title: 'Basic Credit Dispute Letter',
    badge: 'Most Popular',
    whenToUse: "You've identified errors on your credit report and want to dispute them with the credit bureaus for the first time.",
    whatItDoes: 'Formally requests the credit bureaus (Equifax, Experian, TransUnion) to investigate and remove inaccurate items from your credit report.',
    included: [
      'Letter template to all 3 credit bureaus',
      'Instructions on what to include',
      'List of required documentation',
      'Mailing addresses for all 3 bureaus',
      'Certified mail tracking guide'
    ],
    useCases: [
      "Accounts that don't belong to you",
      'Incorrect payment history',
      'Wrong account balances',
      'Accounts reporting after they should be removed',
      'Duplicate accounts'
    ]
  },
  {
    category: 'dispute',
    icon: <FileText className="w-8 h-8 text-amber-600 flex-shrink-0" />,
    title: 'Follow-Up Dispute Letter',
    whenToUse: "The credit bureau responded to your initial dispute but didn't remove the item, or their investigation was inadequate.",
    whatItDoes: 'Escalates your dispute by citing FCRA violations, demanding proper investigation, and requesting deletion of unverified items.',
    included: [
      'Escalation letter template',
      'FCRA citation language',
      'Instructions for referencing your original dispute',
      'Request for method of verification',
      'Proof requirement language'
    ],
    useCases: [
      'Bureau claims item is "verified" without proper investigation',
      'Bureau response is vague or incomplete',
      '30 days have passed with no resolution',
      'Bureau failed to contact the creditor'
    ]
  },
  {
    category: 'dispute',
    icon: <FileText className="w-8 h-8 text-amber-600 flex-shrink-0" />,
    title: 'Goodwill Adjustment Letter',
    whenToUse: 'You have a legitimate late payment on your credit report, but you have an otherwise good payment history and want to request removal as a courtesy.',
    whatItDoes: 'Politely asks your creditor to remove a late payment as a goodwill gesture, acknowledging the mistake while highlighting your positive history.',
    included: [
      'Goodwill request letter template',
      'Tips for explaining your situation',
      'Language emphasizing loyalty and good history',
      'Instructions for customization'
    ],
    useCases: [
      'One-time late payment due to emergency',
      'Account with years of on-time payments',
      'Late payment during financial hardship (medical, job loss)',
      'Administrative error or oversight'
    ],
    additionalNote: 'Success Rate: Works best with creditors you have long-standing relationships with and when late payments are isolated incidents.'
  },
  {
    category: 'dispute',
    icon: <FileText className="w-8 h-8 text-amber-600 flex-shrink-0" />,
    title: 'Identity Theft Affidavit',
    whenToUse: "You've discovered fraudulent accounts or charges on your credit report that resulted from identity theft.",
    whatItDoes: 'Officially reports identity theft to credit bureaus and creditors, initiating the process to remove fraudulent accounts from your credit report.',
    included: [
      'FTC Identity Theft Report template',
      'Affidavit of fraud letter',
      'Instructions for filing police report',
      'Bureau notification letters',
      'Creditor notification letters',
      'Documentation checklist'
    ],
    useCases: [
      'Accounts opened in your name without your knowledge',
      'Fraudulent charges on existing accounts',
      'Someone used your SSN to open credit',
      'Medical identity theft'
    ]
  },
  // Debt Management Letters
  {
    category: 'debt',
    icon: <FileText className="w-8 h-8 text-amber-600 flex-shrink-0" />,
    title: 'Pay for Delete Letter',
    whenToUse: 'You want to negotiate with a collection agency to remove the account from your credit report in exchange for payment.',
    whatItDoes: 'Proposes a formal agreement where you pay the debt (in full or settled amount) and the collector agrees to delete the account from your credit report.',
    included: [
      'Pay for delete request template',
      'Negotiation language',
      'Payment terms structure',
      'Written agreement requirements',
      'Follow-up instructions'
    ],
    useCases: [
      'Collections you can afford to pay',
      'Accounts with collection agencies (not original creditors)',
      'Older collections nearing statute of limitations',
      'Small balance collections'
    ]
  },
  {
    category: 'debt',
    icon: <FileText className="w-8 h-8 text-amber-600 flex-shrink-0" />,
    title: 'Debt Validation Letter',
    whenToUse: "A collector contacts you about a debt and you want to verify it's legitimate before paying.",
    whatItDoes: 'Exercises your rights under the FDCPA to demand proof that the debt is valid, accurate, and that the collector has the right to collect it.',
    included: [
      'Debt validation request template',
      'FDCPA citation language',
      '30-day deadline requirements',
      'Required documentation list',
      'Response tracking guide'
    ],
    useCases: [
      'Unknown debts appearing on your credit',
      'Debts you believe are past the statute of limitations',
      'Debts with incorrect amounts',
      'Debts that may have been paid already'
    ]
  },
  {
    category: 'debt',
    icon: <FileText className="w-8 h-8 text-amber-600 flex-shrink-0" />,
    title: 'Debt Settlement Offer Letter',
    whenToUse: "You want to settle a debt for less than the full amount owed and need a formal written offer.",
    whatItDoes: 'Presents a formal settlement offer to a creditor or collector, proposing a lump sum payment for less than the total balance.',
    included: [
      'Settlement offer template',
      'Payment terms language',
      'Account closure requirements',
      'Written confirmation requirements',
      'Tax implications notice'
    ],
    useCases: [
      'Debts you cannot afford to pay in full',
      'Older debts with negotiation leverage',
      'Collections from debt buyers',
      'Charged-off accounts'
    ]
  },
  {
    category: 'debt',
    icon: <FileText className="w-8 h-8 text-amber-600 flex-shrink-0" />,
    title: 'Cease and Desist Letter',
    whenToUse: 'You want to stop a debt collector from contacting you by phone, mail, or other means.',
    whatItDoes: 'Legally requires the collector to stop all communication with you, except for specific legal notices about the debt.',
    included: [
      'Cease and desist template',
      'FDCPA rights explanation',
      'Certified mail instructions',
      'Documentation requirements',
      'Follow-up violation reporting guide'
    ],
    useCases: [
      'Harassment from collectors',
      'Calls at inappropriate times',
      'Contact after requesting written communication only',
      'Threats or abusive language from collectors'
    ],
    additionalNote: 'Warning: This stops contact but does not eliminate the debt. The collector may still sue you to collect.'
  },
  // Credit Report Corrections
  {
    category: 'corrections',
    icon: <FileText className="w-8 h-8 text-amber-600 flex-shrink-0" />,
    title: 'Personal Information Update Letter',
    whenToUse: 'Your credit report contains incorrect personal information like wrong name spelling, address, or employer.',
    whatItDoes: 'Requests correction of personal identifying information on your credit report to ensure accuracy.',
    included: [
      'Personal info correction template',
      'Required documentation list',
      'Bureau contact information',
      'Identity verification requirements',
      'Follow-up tracking guide'
    ],
    useCases: [
      'Incorrect name spelling or maiden name issues',
      'Wrong addresses listed',
      'Incorrect employer information',
      'Wrong Social Security number digits',
      'Mixed file with another person'
    ]
  },
  {
    category: 'corrections',
    icon: <FileText className="w-8 h-8 text-amber-600 flex-shrink-0" />,
    title: 'ChexSystems Dispute Letter',
    whenToUse: "You've been denied a bank account due to ChexSystems and need to dispute inaccurate information.",
    whatItDoes: 'Disputes errors on your ChexSystems report, which banks use to screen new account applicants.',
    included: [
      'ChexSystems dispute template',
      'FCRA rights for specialty reports',
      'ChexSystems contact information',
      'Required documentation list',
      'Bank account denial response guide'
    ],
    useCases: [
      'Fraudulent accounts on ChexSystems',
      'Errors from closed accounts',
      'Mistaken identity issues',
      'Outdated information (over 5 years old)',
      'Accounts closed in good standing reported negatively'
    ]
  }
];

const faqs = [
  {
    q: "Are these templates really free?",
    a: "Yes! All our templates are 100% free to download and use."
  },
  {
    q: "Will these letters actually work?",
    a: "These are the same formats professionals use. Success depends on the accuracy of your dispute and the specific circumstances, but these letters give you the best chance of results."
  },
  {
    q: "How long does the credit dispute process take?",
    a: "Credit bureaus have 30 days to investigate disputes. Most people see initial results within 45-60 days."
  },
  {
    q: "Can I use these letters for multiple items?",
    a: 'Yes, but we recommend disputing 3-5 items at a time to avoid your dispute being flagged as "frivolous."'
  },
  {
    q: "Do I need to include documentation?",
    a: "For disputes, include copies (never originals) of documents that support your claim—but don't overdo it. A few key documents are better than overwhelming them with paperwork."
  },
  {
    q: 'What if the bureau says the item is "verified"?',
    a: "Use our Follow-Up Dispute Letter to escalate. Request the method of verification and proof of accuracy."
  }
];

const LetterTemplates = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  const openCalendly = () => setIsCalendlyOpen(true);
  const closeCalendly = () => setIsCalendlyOpen(false);
  const openNewsletter = () => setIsNewsletterOpen(true);
  const closeNewsletter = () => setIsNewsletterOpen(false);

  const filteredTemplates = templates.filter(template => {
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.whatItDoes.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const disputeTemplates = filteredTemplates.filter(t => t.category === 'dispute');
  const debtTemplates = filteredTemplates.filter(t => t.category === 'debt');
  const correctionTemplates = filteredTemplates.filter(t => t.category === 'corrections');

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-amber-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <FileText className="w-16 h-16 text-amber-600 mx-auto" />
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Letter <span className="text-[#f9c65d]">Templates</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto">
              Professional letter templates you can download and customize for free—the same formats credit repair specialists use.
            </p>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Taking control of your credit often starts with a simple letter. Whether you're disputing errors on your credit report, negotiating with creditors, or requesting goodwill adjustments, having the right format matters.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Our letter templates are professionally written, legally sound, and designed to get results. Download any template instantly, customize it with your information, and take action today.
              </p>
            </div>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mt-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search templates... (e.g., 'dispute letter')"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-lg text-base focus:border-amber-400 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16">
            How Our Letter Templates <span className="text-[#f9c65d]">Work</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Choose Your Template</h3>
              <p className="text-gray-700 leading-relaxed">
                Browse our library and select the letter that matches your situation—whether you're disputing credit report errors, negotiating debt, or correcting personal information.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Download & Customize</h3>
              <p className="text-gray-700 leading-relaxed">
                Enter your email to receive instant access. Each template comes in Word and PDF formats with clear instructions on how to personalize it.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Send & Track</h3>
              <p className="text-gray-700 leading-relaxed">
                Mail your letter via certified mail (we'll tell you why) and keep copies for your records. Most credit bureaus respond within 30-45 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Template Library Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4">
            Browse Letter <span className="text-[#f9c65d]">Templates</span>
          </h2>
          <p className="text-xl text-gray-700 text-center mb-12">
            All templates are 100% free. Choose the category that matches your needs.
          </p>
          
          {/* Filter and Sort Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-12 items-center justify-between">
            <div className="flex gap-2 flex-wrap justify-center">
              {[
                { key: 'all', label: 'All Templates' },
                { key: 'dispute', label: 'Credit Dispute Letters' },
                { key: 'debt', label: 'Debt Management Letters' },
                { key: 'corrections', label: 'Credit Report Corrections' }
              ].map(cat => (
                <button 
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                    selectedCategory === cat.key 
                      ? 'bg-amber-400 text-gray-900' 
                      : 'bg-white border border-gray-300 text-gray-700 hover:border-amber-400'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700"
              >
                <option value="popular">Most Popular</option>
                <option value="az">A-Z</option>
                <option value="usecase">By Use Case</option>
              </select>
            </div>
          </div>

          {/* Credit Dispute Letters */}
          {(selectedCategory === 'all' || selectedCategory === 'dispute') && disputeTemplates.length > 0 && (
            <div className="mb-16">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <Scale className="w-8 h-8 text-amber-600" />
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Credit Dispute Letters
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Dispute inaccurate, incomplete, or unverifiable information on your credit report. These letters help you exercise your rights under the Fair Credit Reporting Act (FCRA).
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {disputeTemplates.map((template, index) => (
                  <TemplateCard key={index} {...template} />
                ))}
              </div>

              {/* Identity Theft Special Callout */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-6 md:p-8 mt-8">
                <div className="flex items-start gap-4 mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0" />
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      PLEASE READ - IDENTITY THEFT VICTIMS:
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      If you are a real victim of identity theft, we can help you get these fraudulent accounts removed AND potentially secure a settlement for FCRA violations—at NO cost to you.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 mb-6">
                  <p className="text-gray-900 font-semibold mb-3">Our legal team specializes in identity theft cases and can:</p>
                  <ul className="space-y-2">
                    {[
                      'Remove all fraudulent accounts from your credit report',
                      'Pursue settlements ranging from $1,000-$2,500 for qualified cases',
                      'Handle all disputes and legal correspondence on your behalf',
                      'Navigate the complex identity theft resolution process'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded mb-6">
                  <p className="text-sm text-gray-700">
                    <strong>The only requirement:</strong> An active SmartCredit account ($27.99/month after $1 seven-day trial) so we can access your 3-bureau credit report and build your case.
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <button
                    onClick={openCalendly}
                    className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-colors text-center"
                  >
                    Book Free Consultation
                  </button>
                </div>
                
                <div className="mt-6 pt-6 border-t border-red-200">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700">
                      <strong>Important Note:</strong> Filing a false identity theft claim is illegal and constitutes fraud. Only use this template if you are a genuine victim of identity theft.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Debt Management Letters */}
          {(selectedCategory === 'all' || selectedCategory === 'debt') && debtTemplates.length > 0 && (
            <div className="mb-16">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <DollarSign className="w-8 h-8 text-amber-600" />
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Debt Management Letters
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Negotiate with creditors and collection agencies to settle debts, validate claims, or stop harassment. These letters help you exercise your rights under the Fair Debt Collection Practices Act (FDCPA).
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {debtTemplates.map((template, index) => (
                  <TemplateCard key={index} {...template} />
                ))}
              </div>
            </div>
          )}

          {/* Credit Report Corrections */}
          {(selectedCategory === 'all' || selectedCategory === 'corrections') && correctionTemplates.length > 0 && (
            <div className="mb-16">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <Edit className="w-8 h-8 text-amber-600" />
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Credit Report Corrections
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Fix errors in your personal information, address issues with specialty consumer reports, and correct inaccuracies that don't involve disputed accounts.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {correctionTemplates.map((template, index) => (
                  <TemplateCard key={index} {...template} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Why Use Mesa Templates Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16">
            Why Our Templates <span className="text-[#f9c65d]">Work</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Professionally Written</h3>
              <p className="text-gray-700 leading-relaxed">
                Created by credit repair specialists who know exactly what language gets results. These aren't generic templates—they're proven formats we've refined over thousands of client cases.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Legally Sound</h3>
              <p className="text-gray-700 leading-relaxed">
                All templates cite relevant consumer protection laws (FCRA, FDCPA) and include proper legal language to protect your rights.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center mx-auto">
                <Edit3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Easy to Customize</h3>
              <p className="text-gray-700 leading-relaxed">
                Clear instructions tell you exactly what to fill in, what documentation to include, and where to send your letters. No guesswork required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Process Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16">
            How to <span className="text-[#f9c65d]">Download</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12">
            {[
              { step: '1', title: 'Click "Download Template"', desc: 'Choose the template you need from our library above.' },
              { step: '2', title: 'Enter Your Email', desc: "Provide your email address for instant access. We'll also send you helpful tips on using the template effectively." },
              { step: '3', title: 'Receive Your Template', desc: 'Get immediate download links for both Word (.docx) and PDF formats, plus step-by-step instructions.' }
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-xl shadow-md p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-gray-900">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* What You'll Receive */}
          <div className="bg-white rounded-xl p-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">What You'll Receive</h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                { icon: FileText, label: 'Editable Word document (.docx)' },
                { icon: File, label: 'Printable PDF version' },
                { icon: List, label: 'Customization instructions' },
                { icon: MapPin, label: 'Mailing addresses (where applicable)' },
                { icon: Lightbulb, label: 'Tips for best results' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center space-y-2">
                  <item.icon className="w-12 h-12 text-amber-600" />
                  <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Template Usage Tips */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16">
            Tips for <span className="text-[#f9c65d]">Success</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Mail, title: 'Always Send Certified Mail', desc: 'Use certified mail with return receipt requested. This proves the bureau or creditor received your letter and starts the legal timeline for response.' },
              { icon: Copy, title: 'Keep Copies of Everything', desc: 'Save copies of every letter you send and every response you receive. Documentation is critical if you need to escalate.' },
              { icon: AlignLeft, title: 'Be Clear and Concise', desc: "Stick to the facts. Don't include unnecessary personal stories or emotional appeals (except for goodwill letters)." },
              { icon: Paperclip, title: 'Include Required Documentation', desc: 'Only send copies, never originals. Highlight the relevant information on your documents.' },
              { icon: Clock, title: 'Follow Up', desc: "Credit bureaus have 30 days to investigate. If you don't hear back, send a follow-up letter." },
              { icon: Target, title: 'Be Patient But Persistent', desc: "Credit repair takes time. Don't be discouraged if the first letter doesn't work—escalate with follow-up letters." }
            ].map((tip, i) => (
              <div key={i} className="bg-gray-50 rounded-xl shadow-md p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <tip.icon className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{tip.title}</h4>
                    <p className="text-gray-700 leading-relaxed">{tip.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4">
            Get Expert Credit Repair <span className="text-[#f9c65d]">Tips</span>
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-8">
            Downloading templates is just the first step. Join our email list for ongoing credit strategies, dispute tips, and exclusive resources.
          </p>

          <div className="text-center">
            <button
              onClick={openNewsletter}
              className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-4 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
            >
              Subscribe to Newsletter
            </button>

            <p className="text-sm text-gray-600 mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Rather Have Experts Handle It CTA */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4">
            Rather Have Experts <span className="text-[#f9c65d]">Handle It?</span>
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8">
            DIY credit repair works—but it takes time, patience, and persistence. If you'd rather have professionals handle the entire process for you, our team is here to help. We'll dispute errors, negotiate with creditors, and guide you through every step.
          </p>
          
          <div className="max-w-3xl mx-auto mb-8">
            <div className="bg-gray-50 rounded-xl shadow-lg p-8 border border-gray-200">
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">What We Do:</h4>
              <div className="space-y-4">
                {[
                  'Review all 3 credit reports for errors',
                  'File disputes with bureaus and creditors',
                  'Track responses and escalate when needed',
                  'Negotiate pay-for-delete agreements',
                  'Provide 1-on-1 coaching throughout the process'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex flex-row gap-4 justify-center">
            <a
              href="/credit-repair"
              className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-4 px-8 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              View Credit Repair Services
              <ArrowRight className="w-5 h-5" />
            </a>
            <button
              onClick={openCalendly}
              className="bg-white hover:bg-gray-50 border-2 border-gray-300 text-gray-900 font-semibold py-4 px-8 rounded-lg transition-colors text-center"
            >
              Book a Free Consultation
            </button>
          </div>
          
          <div className="text-center mt-6">
            <a href="tel:6613240679" className="inline-flex items-center gap-2 text-lg font-semibold text-gray-900 hover:text-amber-600">
              <Phone className="w-5 h-5" />
              Call (661) 324-0679
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked <span className="text-[#f9c65d]">Questions</span>
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-bold text-gray-900">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer with Disclaimer */}
      <div className="bg-gray-100 border-t border-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-amber-400">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Legal Disclaimer</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              These letter templates are provided for educational purposes and general guidance. While we've designed them based on industry best practices and consumer protection laws, results may vary depending on your specific situation. MESA Group Consulting is not a law firm and does not provide legal advice. For complex situations, consider consulting with a consumer rights attorney. Misrepresenting information in letters to credit bureaus or creditors may violate federal law.
            </p>
          </div>
        </div>
      </div>

      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={closeCalendly}
        utmCampaign="Letter Templates Page - Identity Theft CTA"
      />

      <NewsletterModal
        isOpen={isNewsletterOpen}
        onClose={closeNewsletter}
      />

      <Footer />
    </div>
  );
};

export default LetterTemplates;
