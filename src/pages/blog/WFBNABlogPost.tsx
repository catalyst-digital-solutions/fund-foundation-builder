import { useState } from 'react';
import { Calendar, Clock, User, CheckCircle, ArrowRight, Mail, AlertCircle, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CalendlyModal } from '@/components/CalendlyModal';
import { NewsletterModal } from '@/components/NewsletterModal';

const WFBNABlogPost = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  const openCalendly = () => setIsCalendlyOpen(true);
  const closeCalendly = () => setIsCalendlyOpen(false);
  const openNewsletter = () => setIsNewsletterOpen(true);
  const closeNewsletter = () => setIsNewsletterOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-amber-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/resources/articles" className="hover:text-amber-600 transition-colors">Articles</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">What Is WFBNA...</span>
          </div>
        </div>
      </div>

      {/* Article Container */}
      <article className="py-12 md:py-16">

        {/* Article Header */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
              What's That Wednesday
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            What Is <span className="text-amber-600">WFBNA</span> on Your Credit Report?
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Mesa Group Consulting</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>January 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>6 min read</span>
            </div>
          </div>

          {/* Quick Answer Box */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-amber-400 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              Quick Answer
            </h3>
            <p className="text-gray-700 leading-relaxed">
              WFBNA stands for Wells Fargo Bank N.A. (National Association) and appears on credit reports for Wells Fargo credit cards and banking products. It's just the legal entity name that Wells Fargo uses when reporting to credit bureaus.
            </p>
          </div>
        </header>

        {/* Hero Image */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <img
            src="/blog-post-images/post-02-img-1-confused-person-reviewing-credit-report.png"
            alt="Confused person reviewing credit report with WFBNA account entry visible"
            className="w-full rounded-xl shadow-lg"
          />
        </section>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-8">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              A client called us at Mesa Group Consulting last week, and I could hear the panic in her voice immediately. She was in the middle of reviewing her credit report before applying for a car loan—a stressful moment for anyone—when she spotted something that stopped her cold.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              There was an account listed under "WFBNA" that she did not recognize at all.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              "I have never had an account with a company called WFBNA," she told me, her voice rising. "Is this identity theft? Do I need to freeze everything right now?"
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              I paused and asked her one simple question: "Do you have a Wells Fargo credit card or bank account?"
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              There was a long silence on the other end of the line. "Oh. Yes, I do. Wait—is WFBNA just Wells Fargo?"
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              Exactly.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              The relief was audible. But her frustration was valid.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              Here is the thing: This happens constantly. Credit reports are cluttered with confusing abbreviations, internal codes, and shortened legal names that look nothing like the shiny brand logos you see in commercials. WFBNA is one of the most common codes that confuse consumers, and it appears on millions of credit reports across the country.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              You are not crazy for not recognizing it. The system is just not built for clarity.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Let me break down exactly what WFBNA is, why it appears on your report, and—most importantly—when you should actually be worried about it.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Short Answer: WFBNA Is <span className="text-amber-600">Wells Fargo Bank N.A.</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              Let us clear up the mystery right now. WFBNA stands for Wells Fargo Bank, National Association.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              It is the official legal entity name that Wells Fargo uses when reporting your credit activity to the three major credit bureaus—Equifax, Experian, and TransUnion.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mb-6">
              <h4 className="font-bold text-gray-900 mb-4">If you have any of these Wells Fargo products, you'll see WFBNA:</h4>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Wells Fargo credit cards (Cash Wise, Active Cash, Reflect, Autograph, etc.)</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Wells Fargo personal loans</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Wells Fargo auto loans</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Wells Fargo mortgage loans</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Wells Fargo home equity lines of credit</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Wells Fargo business credit cards or loans (relevant for <Link to="/business-funding" className="text-amber-600 hover:text-amber-700 underline">business funding</Link>)</span>
                </li>
              </ul>
            </div>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              The "N.A." simply stands for National Association. It is a standard designation for federally chartered banks. You will see similar confusing abbreviations for other financial giants—CBNA for Citibank, SYNCB for Synchrony Bank, AMEX for American Express.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Banks use these dry legal names instead of their consumer-facing brand names because credit reporting is a legal process governed by strict federal regulations. They are required to use their legal entity name, even if it makes things confusing for you.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why WFBNA Looks Different <span className="text-amber-600">From "Wells Fargo"</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              Here is what trips people up.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              You applied for a "Wells Fargo Cash Wise Visa Card." That is what the shiny brochure said. That is what the website said. That is what is printed on the plastic in your wallet.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              But when Wells Fargo reports that account to the bureaus, they do not use the marketing name. They report it under the corporate umbrella: Wells Fargo Bank, N.A. Then, the credit bureaus abbreviate it further to "WFBNA" to save characters on the report.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              So, your familiar card becomes a strange code. Same account. Just a different label that makes it harder to recognize at first glance.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              This is not unique to Wells Fargo. It is an industry standard. When you see SYNCB, that is Synchrony Bank—the powerhouse behind store cards like Amazon, PayPal Credit, and CareCredit. When you see CBNA, that is Citibank.
            </p>
          </section>
        </div>

        {/* Bank Code Infographic */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
          <img
            src="/blog-post-images/post-02-img-2-bank-code-credit-report-infographic.jpeg"
            alt="Common bank abbreviations on credit reports infographic"
            className="w-full rounded-xl shadow-lg"
          />
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Information WFBNA <span className="text-amber-600">Actually Reports</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              When you see that WFBNA line item, it is not just a name. It carries vital data about your financial habits. Understanding this data is crucial if you are focused on <Link to="/build-credit" className="text-amber-600 hover:text-amber-700 underline">building your credit</Link>.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-5">
                <h4 className="font-bold text-gray-900 mb-3">What Gets Reported</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Account Type:</strong> Credit card, loan, mortgage, etc.</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Credit Limit:</strong> Your total spending power</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Current Balance:</strong> What you owe right now</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Payment History:</strong> On-time vs late payments</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Account Status:</strong> Open, closed, delinquent</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Date Opened:</strong> Account age history</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-300 rounded-lg p-5">
                <h4 className="font-bold text-gray-900 mb-3">Impact on Your Score</h4>
                <ul className="space-y-3 text-sm">
                  <li className="text-gray-700">
                    <strong className="text-gray-900">Account Type:</strong> Contributes to credit mix (10% of score)
                  </li>
                  <li className="text-gray-700">
                    <strong className="text-gray-900">Payment History:</strong> Most important factor (35% of score)
                  </li>
                  <li className="text-gray-700">
                    <strong className="text-gray-900">Credit Limit:</strong> Affects utilization ratio (30% of score)
                  </li>
                  <li className="text-gray-700">
                    <strong className="text-gray-900">Date Opened:</strong> Builds length of history (15% of score)
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              All of this information stays on your credit report for as long as the account is open, and typically for 7 to 10 years after it closes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              When WFBNA on Your Report <span className="text-amber-600">Is a Problem</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              In 95 percent of cases, seeing WFBNA is completely normal. But I get why you are worried. There are specific situations where that code indicates a real problem that you need to address immediately.
            </p>

            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-red-900 mb-2">1. You Don't Have a Wells Fargo Account</h4>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      If WFBNA appears on your report and you are absolutely certain you have never opened a Wells Fargo product, stop everything.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      This is a major red flag for identity theft.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Someone may have used your Social Security number to open an account. Check the "Date Opened" and the address listed. If it is not yours, file a fraud report with Wells Fargo and the credit bureaus immediately. <Link to="/credit-monitoring" className="text-amber-600 hover:text-amber-700 underline">Credit monitoring</Link> services can alert you the moment suspicious accounts appear.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-orange-900 mb-2">2. The Account Shows Late Payments You Didn't Make</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Maybe you do have a Wells Fargo account, but the WFBNA entry shows a missed payment last month when you know you paid on time. Banks make mistakes. Systems glitch. Payments get misapplied. Pull your bank statements and compare them to the credit report. If the report says "late" and your statements prove "on time," you have grounds for a dispute.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-yellow-900 mb-2">3. The Balance Is Wrong</h4>
                    <p className="text-gray-700 leading-relaxed">
                      If WFBNA shows a balance significantly higher than what you actually owe, it can hurt your utilization ratio. This is a reporting error that needs to be fixed to protect your score.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">4. Duplicate Entries</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Sometimes, a glitch causes the same account to report twice—once as WFBNA and once as something else. This can make you look more indebted than you are. You should dispute the duplicate to clean up your profile.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Legitimate vs Fraud Comparison Chart */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
          <img
            src="/blog-post-images/post-02-img-3-legitimate-versus-fraud-comparison-chart.png"
            alt="Comparison chart showing legitimate WFBNA vs fraud warning signs"
            className="w-full rounded-xl shadow-lg"
          />
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How to Verify WFBNA Accounts <span className="text-amber-600">on Your Credit Report</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Before you panic or file a dispute, you need to verify the data. Here is a simple checklist to confirm if that WFBNA entry is legitimate.
            </p>

            <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-6 mb-6">
              <h4 className="font-bold text-gray-900 mb-4">Verification Checklist</h4>
              <ol className="space-y-4">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-amber-400 text-gray-900 font-bold rounded-full flex items-center justify-center">1</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Check Your Wells Fargo Accounts</p>
                    <p className="text-gray-700">Log into your Wells Fargo app or website. Look at your current balance and credit limit. Do they match the numbers next to WFBNA on your credit report? If yes, it's your account.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-amber-400 text-gray-900 font-bold rounded-full flex items-center justify-center">2</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Match the Account Numbers</p>
                    <p className="text-gray-700">Your credit report will usually show a partial account number (like xxxx-xxxx-xxxx-1234). Match those last four digits to your physical card or statement. If they match, the mystery is solved.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-amber-400 text-gray-900 font-bold rounded-full flex items-center justify-center">3</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Review the Timeline</p>
                    <p className="text-gray-700">Look at the "Date Opened" on the credit report. Does it align with when you got your mortgage or credit card? If the timeline fits, it's likely legitimate.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-amber-400 text-gray-900 font-bold rounded-full flex items-center justify-center">4</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Contact Wells Fargo Directly</p>
                    <p className="text-gray-700">If something feels off—wrong balance, unrecognized account—call Wells Fargo. Ask for their credit reporting department. Give them the details and ask them to investigate.</p>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Should You Dispute WFBNA <span className="text-amber-600">on Your Credit Report?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              Let me be clear: You should only dispute WFBNA if the information is inaccurate.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              If the account is yours and the payment history is correct, there is nothing to dispute. You cannot remove an account just because you do not like the abbreviation. Disputing accurate information is a waste of time and can actually flag you as a "frivolous disputer" with the bureaus.
            </p>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 border-l-4 border-red-500 rounded-lg p-6 mb-6">
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                When to Dispute
              </h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                However, if WFBNA is hurting you with wrong information—incorrect late payments or fraudulent accounts—you have rights. The Fair Credit Reporting Act (FCRA) allows you to challenge these errors.
              </p>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700"><strong>Dispute with Wells Fargo First:</strong> Often, the bank can fix the error internally and update the bureaus during the next reporting cycle.</p>
                </div>
                <div className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700"><strong>File a Formal Dispute:</strong> If the bank drags its feet, file disputes with Equifax, Experian, and TransUnion. You will need proof—bank statements, payment confirmations, or identity theft reports.</p>
                </div>
                <div className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700"><strong>Get Professional Help:</strong> If the error is complex or the bureaus are refusing to correct it, you might need professional <Link to="/credit-repair" className="text-amber-600 hover:text-amber-700 underline">credit repair</Link>.</p>
                </div>
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              At Mesa Group Consulting, we handle these types of complex disputes every day. We know exactly how to structure the argument to get results.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Other Bank Codes <span className="text-amber-600">You Might See</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Since we are decoding the secret language of credit reports, here are a few other common abbreviations that often confuse our clients:
            </p>

            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="font-bold text-gray-900">CBNA</p>
                <p className="text-sm text-gray-600">Citibank, N.A.</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="font-bold text-gray-900">SYNCB</p>
                <p className="text-sm text-gray-600">Synchrony Bank (Amazon, PayPal, Gap, Lowe's)</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="font-bold text-gray-900">AMEX</p>
                <p className="text-sm text-gray-600">American Express</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="font-bold text-gray-900">COMENITY</p>
                <p className="text-sm text-gray-600">Comenity Bank (Victoria's Secret, Wayfair)</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="font-bold text-gray-900">USAA</p>
                <p className="text-sm text-gray-600">USAA Federal Savings Bank</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="font-bold text-gray-900">NFCU</p>
                <p className="text-sm text-gray-600">Navy Federal Credit Union</p>
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-6">
              If you see these and do not recognize them, check your wallet for store cards. That "Gap" card is actually Synchrony (SYNCB). That "Wayfair" card is Comenity.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The <span className="text-amber-600">Bottom Line</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              WFBNA is just a corporate label for Wells Fargo. It is annoying that it is not clearer, but it is standard practice.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              If you have a Wells Fargo account, seeing WFBNA is normal. You do not need to lose sleep over it.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              The only time you need to take action is if the data is wrong. If you see late payments you did not make or an account you never opened, that is when you fight back.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              Credit reports are intimidating. They are filled with codes that make you feel like you are reading a foreign language. But once you know what to look for, the fear disappears.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              If you are reviewing your report and see things that genuinely do not add up, do not ignore them. Verify the data. Match it to your records. And if you find errors that are holding you back, reach out for help.
            </p>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                At Mesa Group Consulting, we help people decode their credit reports and fix inaccuracies every single day. Whether you need <Link to="/credit-repair" className="text-amber-600 hover:text-amber-700 underline">credit repair</Link> or just guidance on your next financial move, we are here to help.
              </p>
              <p className="text-gray-700 leading-relaxed font-semibold text-lg">
                You do not have to figure this out alone.
              </p>
            </div>
          </section>
        </div>

        {/* CTA Section - Credit Monitoring */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
          <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2a2a2a] rounded-2xl p-8 md:p-12 border-2 border-[#bb9446]">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Track Your Credit Report <span className="text-[#f9c65d]">Changes</span>
              </h3>
              <p className="text-[#e5d2af] leading-relaxed mb-8">
                Get real-time alerts about new accounts, balance changes, and potential fraud with 3-bureau credit monitoring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://smartcredit.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#f9c65d] hover:bg-[#bb9446] text-gray-900 font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl border-2 border-[#bb9446]"
                >
                  Start Monitoring Your Credit
                  <ArrowRight className="w-5 h-5" />
                </a>
                <button
                  onClick={openCalendly}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#f8d899] text-gray-900 font-semibold px-8 py-4 rounded-lg transition-all duration-200 border-2 border-[#cbcbcb]"
                >
                  Get Expert Help
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Disclosure */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-12">
            <h4 className="font-bold text-gray-900 mb-3">Disclosure</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              Mesa Group Consulting may receive compensation through affiliate partnerships when you click certain links in this article. This comes at no cost to you and helps us provide free educational content. We only recommend services we genuinely believe in.
            </p>
          </div>

          {/* Author Bio */}
          <div className="border-t border-gray-200 pt-12 mt-12">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-10 h-10 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">About Mesa Group Consulting</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Mesa Group Consulting is a financial services consulting firm specializing in credit repair, debt relief, business funding, and financial education. Our mission is to empower individuals and businesses with the knowledge and tools they need to achieve financial freedom.
                </p>
                <Link to="/about" className="text-amber-600 hover:text-amber-700 font-semibold inline-flex items-center gap-2">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Newsletter Signup Section */}
          <div className="bg-gradient-to-br from-[#3e3e3e] to-[#2a2a2a] rounded-2xl p-8 md:p-12 my-12 border-2 border-[#bb9446]">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-16 h-16 bg-[#f9c65d] rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Decode Your <span className="text-[#f9c65d]">Credit Report</span>
              </h3>
              <p className="text-[#e5d2af] leading-relaxed mb-8">
                Join our newsletter for weekly tips on understanding credit reports, fixing errors, and building better credit.
              </p>
              <button
                onClick={openNewsletter}
                className="inline-flex items-center justify-center gap-2 bg-[#f9c65d] hover:bg-[#bb9446] text-gray-900 font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl border-2 border-[#bb9446]"
              >
                Subscribe to Newsletter
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-sm text-[#cbcbcb] mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Related Articles */}
          <div className="border-t border-gray-200 pt-12 mt-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Related Articles
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/blog/does-credit-utilization-matter-if-you-pay-in-full-every-month" className="group">
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200">
                  <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                    <CheckCircle className="w-16 h-16 text-amber-600" />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-amber-600 font-semibold mb-2">Credit Truth Thursdays</div>
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                      Does Credit Utilization Matter If You Pay in Full?
                    </h4>
                    <p className="text-sm text-gray-600">
                      Learn why statement closing dates matter more than due dates for your credit score.
                    </p>
                  </div>
                </div>
              </Link>

              <div className="group cursor-pointer opacity-60">
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                    <Mail className="w-16 h-16 text-blue-600" />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 font-semibold mb-2">Coming Soon</div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      More Articles Coming Soon
                    </h4>
                    <p className="text-sm text-gray-600">
                      We're working on more helpful credit and finance articles for you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group cursor-pointer opacity-60">
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                    <Mail className="w-16 h-16 text-green-600" />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 font-semibold mb-2">Coming Soon</div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      More Articles Coming Soon
                    </h4>
                    <p className="text-sm text-gray-600">
                      We're working on more helpful credit and finance articles for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </article>

      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={closeCalendly}
        prefillOptions={{
          utm: {
            source: 'mesa-website',
            medium: 'website',
            campaign: 'Blog Post - WFBNA - CTA'
          }
        }}
      />

      <NewsletterModal
        isOpen={isNewsletterOpen}
        onClose={closeNewsletter}
      />

      <Footer />
    </div>
  );
};

export default WFBNABlogPost;
