import React from 'react';
import {
  Phone,
  FileText,
  CircleAlert,
  CheckCircle2,
  Shield,
  MapPin,
  Mail,
  Globe
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEO';

const TCPAConsentPolicy = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="TCPA Consent Policy | Mesa Group Consulting"
        description="Mesa Group Consulting's TCPA Consent Policy explains how we obtain, use, and manage your consent to contact you by telephone, text message, and email."
        canonicalUrl="/tcpa-consent-policy"
      />
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-12 md:py-16 border-b-2 border-amber-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <Phone className="w-5 h-5 text-amber-600" />
              <span className="text-sm font-medium text-gray-700">Legal Document</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              TCPA Consent <span className="text-[#f9c65d]">Policy</span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Effective Date: February 1, 2026</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full" />
              <div className="flex items-center gap-2">
                <CircleAlert className="w-4 h-4" />
                <span>Last Updated: February 1, 2026</span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              This TCPA Consent Policy explains how MESA & CO CONSULTING LLC, doing business as Mesa Group Consulting ("Mesa Group," "we," "us," or "our"), obtains, uses, and manages your consent to contact you by telephone, text message (SMS/MMS), and email in compliance with the Telephone Consumer Protection Act (TCPA), CAN-SPAM Act, and applicable state telemarketing laws.
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Table of <span className="text-[#f9c65d]">Contents</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { id: 'section-1', title: '1. What is the TCPA?' },
              { id: 'section-2', title: '2. Your Consent to Contact' },
              { id: 'section-3', title: '3. Types of Communications' },
              { id: 'section-4', title: '4. SMS/Text Messaging' },
              { id: 'section-5', title: '5. Phone Calls' },
              { id: 'section-6', title: '6. Email Communications' },
              { id: 'section-7', title: '7. Opt-Out Rights' },
              { id: 'section-8', title: '8. Do Not Call Registry' },
              { id: 'section-9', title: '9. Consent Requirements' },
              { id: 'section-10', title: '10. Contact Information' },
              { id: 'section-11', title: '11. Changes to This TCPA Consent Policy' },
              { id: 'section-12', title: '12. Acknowledgment' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left px-4 py-3 bg-white rounded-lg border border-gray-200 hover:border-amber-400 hover:bg-amber-50 transition-all duration-200 group"
              >
                <span className="text-gray-700 group-hover:text-amber-600 font-medium">
                  {item.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Body */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            {/* Section 1: What is the TCPA? */}
            <div id="section-1" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">1</span>
                </div>
                WHAT IS THE TCPA?
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The <strong>Telephone Consumer Protection Act (TCPA)</strong> is a federal law that regulates telemarketing calls, automated telephone calls, prerecorded messages, text messages, and unsolicited faxes. The TCPA requires companies to obtain prior express written consent before:
                </p>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Making marketing or promotional calls to mobile phones using an automatic telephone dialing system (ATDS) or artificial/prerecorded voice</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Sending marketing or promotional text messages (SMS/MMS) to mobile phones</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Making telemarketing calls to numbers listed on the National Do Not Call Registry</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex gap-3">
                    <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p>Mesa Group Consulting is committed to full compliance with the TCPA and all applicable federal and state telemarketing laws.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Your Consent to Contact */}
            <div id="section-2" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">2</span>
                </div>
                YOUR CONSENT TO CONTACT
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>By providing your phone number and/or mobile number to Mesa Group Consulting, you expressly consent to receive communications from us, including:</p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">2.1 Express Written Consent</h3>
                <p>When you provide your phone number through our website forms, enrollment applications, or service agreements, you provide <strong>express written consent</strong> to be contacted by Mesa Group Consulting via:</p>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Text messages (SMS/MMS):</strong> Marketing messages, promotional offers, service updates, appointment reminders, credit monitoring alerts, and other communications related to our services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Phone calls:</strong> Marketing calls, follow-up calls, consultation calls, customer service calls, and service-related calls</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Email:</strong> Marketing emails, promotional offers, newsletters, service updates, and transactional emails</span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">2.2 Consent Language</h3>
                <p>By submitting your phone number, you acknowledge and agree to the following:</p>

                <div className="bg-gradient-to-br from-amber-100 to-orange-100 border-2 border-amber-400 rounded-xl p-8">
                  <p className="text-lg font-bold text-gray-900">
                    "By providing my phone number, I expressly consent to receive marketing and promotional text messages (SMS/MMS), phone calls (including calls using an automatic telephone dialing system or artificial/prerecorded voice), and emails from Mesa Group Consulting at the phone number and email address I provide. I understand that consent is not a condition of purchase and that I can opt out at any time by replying STOP to any text message, calling 661-310-3040, or emailing contact@mesagroupconsulting.com. Message and data rates may apply."
                  </p>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">2.3 Voluntary Consent</h3>
                <p>Your consent to receive communications is <strong>voluntary</strong>. You are not required to provide consent as a condition of purchasing any goods or services from Mesa Group Consulting. However, providing consent allows us to communicate with you more effectively about our services, offers, and updates.</p>
              </div>
            </div>

            {/* Section 3: Types of Communications */}
            <div id="section-3" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">3</span>
                </div>
                TYPES OF COMMUNICATIONS
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>Mesa Group Consulting may send the following types of communications:</p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">3.1 Marketing and Promotional Communications</h3>
                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <ul className="space-y-2">
                    {['Promotional offers and discounts', 'Information about new services and features', 'Educational content about credit repair, business funding, and financial services', 'Marketing messages about our products and services', 'Special announcements and company updates'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">3.2 Transactional and Service-Related Communications</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <ul className="space-y-2">
                    {['Service confirmations and enrollment confirmations', 'Appointment reminders and scheduling notifications', 'Progress reports and credit monitoring alerts', 'Payment confirmations and billing reminders', 'Account updates and security alerts', 'Customer support responses', 'Service termination or cancellation notices'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex gap-3">
                    <CircleAlert className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <p><strong>Note:</strong> Transactional and service-related communications are not subject to opt-out requirements, as they are necessary to provide the services you have requested.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: SMS/Text Messaging */}
            <div id="section-4" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">4</span>
                </div>
                SMS/TEXT MESSAGING
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <h3 className="text-xl font-bold text-gray-900">4.1 SMS Consent</h3>
                <p>By providing your mobile phone number, you consent to receive text messages (SMS/MMS) from Mesa Group Consulting. Text messages may include:</p>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <ul className="space-y-2">
                    {['Marketing and promotional offers', 'Appointment reminders', 'Service updates and progress reports', 'Credit monitoring alerts (if enrolled in SmartCredit)', 'Account notifications', 'Links to resources, tools, and educational content'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">4.2 Message Frequency</h3>
                <p>Message frequency varies depending on the services you enroll in and the communications you opt into:</p>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Marketing Messages:</strong> Up to 4 promotional messages per month</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Service Updates:</strong> Varies based on activity in your account (credit disputes, funding applications, etc.)</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Appointment Reminders:</strong> Sent as scheduled appointments approach</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Credit Monitoring Alerts:</strong> Sent when changes are detected on your credit report (if enrolled)</span></li>
                  </ul>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">4.3 Message and Data Rates</h3>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex gap-3">
                    <CircleAlert className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <p>Standard message and data rates may apply based on your mobile carrier plan. Mesa Group Consulting is not responsible for any charges you may incur from your mobile carrier for receiving text messages.</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">4.4 Supported Carriers</h3>
                <p>Our SMS program supports major U.S. mobile carriers, including but not limited to:</p>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <ul className="grid md:grid-cols-2 gap-2">
                    {['AT&T', 'Verizon', 'T-Mobile', 'Sprint', 'U.S. Cellular', 'Boost Mobile', 'Cricket Wireless', 'MetroPCS'].map((carrier, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{carrier}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-gray-600 italic">If your carrier is not supported, you may not receive text messages from Mesa Group Consulting.</p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">4.5 Opt-Out of SMS</h3>
                <p>To stop receiving text messages from Mesa Group Consulting, <strong>reply STOP</strong> to any text message you receive. You will receive a confirmation message acknowledging your opt-out request.</p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-4">
                  <div className="flex gap-3">
                    <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Alternative Opt-Out Methods:</p>
                      <ul className="space-y-1">
                        <li>• Call us at <a href="tel:+16613103040" className="text-amber-600 hover:text-amber-700 underline">661-310-3040</a></li>
                        <li>• Email us at <a href="mailto:contact@mesagroupconsulting.com" className="text-amber-600 hover:text-amber-700 underline">contact@mesagroupconsulting.com</a> with "STOP SMS" in the subject line</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-4">
                  <div className="flex gap-3">
                    <CircleAlert className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <p><strong>Note:</strong> After opting out of marketing messages, you may still receive transactional or service-related messages necessary to provide the services you have enrolled in.</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">4.6 Help and Support</h3>
                <p>For help with text messages, reply <strong>HELP</strong> to any message or contact us:</p>
                <ul className="ml-6 space-y-1">
                  <li>• <strong>Phone:</strong> <a href="tel:+16613103040" className="text-amber-600 hover:text-amber-700 underline">661-310-3040</a></li>
                  <li>• <strong>Email:</strong> <a href="mailto:contact@mesagroupconsulting.com" className="text-amber-600 hover:text-amber-700 underline">contact@mesagroupconsulting.com</a></li>
                </ul>
              </div>
            </div>

            {/* Section 5: Phone Calls */}
            <div id="section-5" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">5</span>
                </div>
                PHONE CALLS
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <h3 className="text-xl font-bold text-gray-900">5.1 Call Consent</h3>
                <p>By providing your phone number, you consent to receive phone calls from Mesa Group Consulting, including:</p>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <ul className="space-y-2">
                    {['Marketing and sales calls', 'Consultation and follow-up calls', 'Customer service and support calls', 'Account management calls', 'Appointment reminder calls', 'Calls regarding your credit disputes, business funding applications, or other services'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">5.2 Automated Calls and Prerecorded Messages</h3>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex gap-3">
                    <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p>Mesa Group Consulting may use an <strong>automatic telephone dialing system (ATDS)</strong>, artificial voice, or prerecorded messages to contact you. By providing your phone number, you expressly consent to receive calls made using these technologies.</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">5.3 Call Recording</h3>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex gap-3">
                    <CircleAlert className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <p>Phone calls with Mesa Group Consulting may be recorded for quality assurance, training, compliance, and dispute resolution purposes. You will be notified at the beginning of the call if the call is being recorded.</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">5.4 Opt-Out of Phone Calls</h3>
                <p>To stop receiving marketing or promotional phone calls from Mesa Group Consulting:</p>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-4">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Call us:</strong> <a href="tel:+16613103040" className="text-amber-600 hover:text-amber-700 underline">661-310-3040</a> and request to be placed on our internal do-not-call list</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Email us:</strong> <a href="mailto:contact@mesagroupconsulting.com" className="text-amber-600 hover:text-amber-700 underline">contact@mesagroupconsulting.com</a> with "Do Not Call" in the subject line</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Write to us:</strong> MESA & CO CONSULTING LLC, 5001 California Ave, Suite 219, Bakersfield, CA 93309</span></li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-4">
                  <div className="flex gap-3">
                    <CircleAlert className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <p><strong>Note:</strong> Even after opting out of marketing calls, you may still receive transactional or service-related calls necessary to provide the services you have enrolled in (e.g., follow-up calls about your credit disputes or business funding applications).</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6: Email Communications */}
            <div id="section-6" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">6</span>
                </div>
                EMAIL COMMUNICATIONS
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <h3 className="text-xl font-bold text-gray-900">6.1 Email Consent</h3>
                <p>By providing your email address, you consent to receive emails from Mesa Group Consulting, including:</p>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <ul className="space-y-2">
                    {['Marketing and promotional emails', 'Newsletters and educational content', 'Service updates and progress reports', 'Account notifications and billing reminders', 'Appointment confirmations and reminders', 'Customer support responses'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">6.2 CAN-SPAM Compliance</h3>
                <p>Mesa Group Consulting complies with the CAN-SPAM Act by:</p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex gap-3">
                    <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <ul className="space-y-2">
                      {['Including accurate sender information in all emails', 'Providing clear subject lines that reflect the content of the email', 'Including our physical address in all marketing emails', 'Providing a clear and easy opt-out mechanism (unsubscribe link)', 'Honoring opt-out requests within 10 business days'].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">6.3 Opt-Out of Emails</h3>
                <p>To stop receiving marketing emails from Mesa Group Consulting:</p>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-4">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Click the <strong>"Unsubscribe"</strong> link at the bottom of any marketing email</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Email us at <a href="mailto:contact@mesagroupconsulting.com" className="text-amber-600 hover:text-amber-700 underline">contact@mesagroupconsulting.com</a> with "Unsubscribe" in the subject line</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Call us at <a href="tel:+16613103040" className="text-amber-600 hover:text-amber-700 underline">661-310-3040</a> and request to be removed from our email list</span></li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-4">
                  <div className="flex gap-3">
                    <CircleAlert className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <p><strong>Note:</strong> After opting out of marketing emails, you may still receive transactional or service-related emails necessary to provide the services you have enrolled in (e.g., credit dispute updates, billing notices).</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 7: Opt-Out Rights */}
            <div id="section-7" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">7</span>
                </div>
                OPT-OUT RIGHTS
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>You have the right to opt out of marketing and promotional communications at any time. Opting out does <strong>not</strong> affect:</p>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <ul className="space-y-2">
                    {['Transactional or service-related communications (appointment reminders, progress reports, billing notices, account updates)', 'Communications required by law or regulation', 'Communications necessary to fulfill contractual obligations', 'Communications related to services you have enrolled in'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">7.1 How to Opt Out</h3>

                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                    <thead className="bg-amber-50">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold text-gray-900 border-b border-gray-300">Communication Type</th>
                        <th className="px-4 py-3 text-left font-bold text-gray-900 border-b border-gray-300">How to Opt Out</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 font-semibold">Text Messages (SMS)</td>
                        <td className="px-4 py-3">Reply <strong>STOP</strong> to any text message</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold">Phone Calls</td>
                        <td className="px-4 py-3">Call <a href="tel:+16613103040" className="text-amber-600 hover:text-amber-700 underline">661-310-3040</a> or email <a href="mailto:contact@mesagroupconsulting.com" className="text-amber-600 hover:text-amber-700 underline">contact@mesagroupconsulting.com</a></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold">Marketing Emails</td>
                        <td className="px-4 py-3">Click "Unsubscribe" link in any email or email <a href="mailto:contact@mesagroupconsulting.com" className="text-amber-600 hover:text-amber-700 underline">contact@mesagroupconsulting.com</a></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold">All Communications</td>
                        <td className="px-4 py-3">Email <a href="mailto:contact@mesagroupconsulting.com" className="text-amber-600 hover:text-amber-700 underline">contact@mesagroupconsulting.com</a> or call <a href="tel:+16613103040" className="text-amber-600 hover:text-amber-700 underline">661-310-3040</a> with "Opt Out of All" request</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">7.2 Processing Opt-Out Requests</h3>
                <p>Mesa Group Consulting will process your opt-out request within:</p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-4">
                  <div className="flex gap-3">
                    <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Text Messages:</strong> Immediately upon receiving "STOP" reply</span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Phone Calls:</strong> Within 10 business days</span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Emails:</strong> Within 10 business days</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 8: Do Not Call Registry */}
            <div id="section-8" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">8</span>
                </div>
                DO NOT CALL REGISTRY
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex gap-3">
                    <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p>Mesa Group Consulting respects the <strong>National Do Not Call Registry</strong> and state do-not-call lists. If your phone number is registered on the National Do Not Call Registry, we will not make telemarketing calls to your number unless you have provided express written consent to receive such calls.</p>
                  </div>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">To register your number on the National Do Not Call Registry:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Visit:</strong> <a href="https://www.donotcall.gov" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://www.donotcall.gov</a></span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Call:</strong> <a href="tel:+18883821222" className="text-amber-600 hover:text-amber-700 underline">1-888-382-1222</a> (from the phone you wish to register)</span></li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex gap-3">
                    <CircleAlert className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <p><strong>Note:</strong> Registering your number on the Do Not Call Registry does not prevent you from receiving calls from companies with which you have an existing business relationship or to which you have provided express consent.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 9: Consent Requirements */}
            <div id="section-9" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">9</span>
                </div>
                CONSENT REQUIREMENTS
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <h3 className="text-xl font-bold text-gray-900">9.1 Valid Consent</h3>
                <p>For your consent to be valid under the TCPA, the following conditions must be met:</p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex gap-3">
                    <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Written Consent:</strong> Your consent must be in writing (electronic or physical signature)</span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Clear and Conspicuous:</strong> The consent disclosure must be clear, conspicuous, and not hidden in fine print</span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Not a Condition of Purchase:</strong> Consent is not required as a condition of purchasing goods or services</span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Specific Phone Number:</strong> You must provide the specific phone number(s) to which you consent to receive communications</span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Opt-Out Information:</strong> You must be informed of your right to opt out at any time</span></li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">9.2 Revoking Consent</h3>
                <p>You may revoke your consent to receive communications at any time using the opt-out methods described in Section 7. Revoking consent does not affect communications you have already received or communications sent before your opt-out request is processed.</p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">9.3 Updates to Phone Number</h3>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex gap-3">
                    <CircleAlert className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <p>If you change your phone number, you are responsible for notifying Mesa Group Consulting to update your contact information. We are not responsible for communications sent to an outdated phone number.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 10: Contact Information */}
            <div id="section-10" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">10</span>
                </div>
                CONTACT INFORMATION
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>If you have questions about this TCPA Consent Policy or wish to opt out of communications, contact us:</p>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">MESA & CO CONSULTING LLC DBA MESA GROUP CONSULTING</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Mailing Address</p>
                        <p>5001 California Ave, Suite 219</p>
                        <p>Bakersfield, CA 93309</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Email</p>
                        <a href="mailto:contact@mesagroupconsulting.com" className="text-amber-600 hover:text-amber-700 underline">contact@mesagroupconsulting.com</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Phone</p>
                        <a href="tel:+16613103040" className="text-amber-600 hover:text-amber-700 underline">661-310-3040</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Globe className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Website</p>
                        <a href="https://www.mesagroupconsulting.com" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">www.mesagroupconsulting.com</a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-amber-200">
                    <p className="font-semibold text-gray-900 mb-2">Business Hours:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>Monday - Friday, 9:00 AM - 7:00 PM Pacific Time</li>
                      <li>Saturday, 10:00 AM - 2:00 PM Pacific Time</li>
                      <li>Sunday, Closed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 11: Changes to This TCPA Consent Policy */}
            <div id="section-11" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">11</span>
                </div>
                CHANGES TO THIS TCPA CONSENT POLICY
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>Mesa Group Consulting reserves the right to update this TCPA Consent Policy at any time. When we make changes, we will:</p>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <ul className="space-y-2">
                    {['Update the "Last Updated" date at the top of this policy', 'Post the revised policy on our website', 'Notify you via email or text message (if applicable)'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex gap-3">
                    <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p>Your continued use of our services and receipt of communications after changes become effective constitutes acceptance of the revised policy.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 12: Acknowledgment */}
            <div id="section-12" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#f9c65d] font-bold text-xl">12</span>
                </div>
                ACKNOWLEDGMENT
              </h2>
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 border-2 border-amber-400 rounded-xl p-8">
                <p className="text-lg font-bold text-gray-900">
                  By providing your phone number and consenting to receive communications from Mesa Group Consulting, you acknowledge that you have read, understood, and agree to this TCPA Consent Policy.
                </p>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center pt-12 border-t-2 border-gray-200">
              <p className="text-gray-600 font-medium">© 2026 MESA & CO CONSULTING LLC DBA MESA GROUP CONSULTING. All Rights Reserved.</p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TCPAConsentPolicy;
