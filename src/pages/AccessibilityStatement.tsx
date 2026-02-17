import React from 'react';
import {
  Accessibility,
  FileText,
  CircleAlert,
  CheckCircle2,
  Shield,
  Monitor,
  Keyboard,
  Eye,
  Volume2,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Clock,
  AlertCircle,
  Settings,
  RefreshCw,
  Users,
  FileCheck,
  Globe
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEO';

const AccessibilityStatement = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Accessibility Statement | Mesa Group Consulting"
        description="Mesa Group Consulting is committed to ensuring digital accessibility for people with disabilities. Learn about our accessibility features, standards, and how to request assistance."
        canonicalUrl="/accessibility-statement"
      />
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-12 md:py-16 border-b-2 border-amber-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <Accessibility className="w-5 h-5 text-amber-600" />
              <span className="text-sm font-medium text-gray-700">Legal Document</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Accessibility <span className="text-amber-600">Statement</span>
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
              Mesa Group Consulting is committed to ensuring digital accessibility for people with disabilities. We continually improve the accessibility and usability of our website to ensure equal access to information, services, and opportunities for all.
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Table of <span className="text-amber-600">Contents</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { id: 'commitment', title: 'Our Commitment to Accessibility' },
              { id: 'section-1', title: '1. Accessibility Features' },
              { id: 'section-2', title: '2. Standards and Guidelines' },
              { id: 'section-3', title: '3. Ongoing Efforts' },
              { id: 'section-4', title: '4. Known Limitations' },
              { id: 'section-5', title: '5. Assistive Technologies' },
              { id: 'section-6', title: '6. Feedback and Assistance' },
              { id: 'section-7', title: '7. Contact Information' },
              { id: 'legal-compliance', title: 'Legal Compliance' },
              { id: 'changes', title: 'Changes to This Statement' },
              { id: 'acknowledgment', title: 'Acknowledgment' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left px-4 py-3 bg-white rounded-lg border border-gray-200 hover:border-amber-400 hover:shadow-md transition-all duration-200"
              >
                <span className="font-semibold text-gray-900">{item.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Body */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Our Commitment to Accessibility */}
          <div id="commitment" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">OUR COMMITMENT TO ACCESSIBILITY</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Mesa Group Consulting is committed to ensuring digital accessibility for people with disabilities. We are continually working to improve the accessibility and usability of our website (<a href="https://www.mesagroupconsulting.com" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">www.mesagroupconsulting.com</a>) to ensure that it is accessible to everyone, including individuals with disabilities.
              </p>
              <p>
                We strive to adhere to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards and believe that all people, regardless of ability, should have equal access to information, services, and opportunities.
              </p>
            </div>
          </div>

          {/* Section 1: Accessibility Features */}
          <div id="section-1" className="mb-12 scroll-mt-24">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-amber-600">1</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">ACCESSIBILITY FEATURES</h2>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">Our website incorporates the following accessibility features to improve usability for individuals with disabilities:</p>

            {/* 1.1 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Keyboard className="w-5 h-5 text-amber-600" />
                1.1 Keyboard Navigation
              </h3>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                <ul className="space-y-2 text-gray-700">
                  {['All website functionality is accessible via keyboard (Tab, Shift+Tab, Enter, Spacebar, Arrow keys)', 'Logical tab order and focus indicators for navigation', 'Keyboard shortcuts available for common actions'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 1.2 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Volume2 className="w-5 h-5 text-amber-600" />
                1.2 Screen Reader Compatibility
              </h3>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                <ul className="space-y-2 text-gray-700">
                  {['Semantic HTML markup for proper screen reader interpretation', 'Descriptive alt text for images and graphics', 'ARIA (Accessible Rich Internet Applications) labels and landmarks', 'Proper heading structure (H1, H2, H3) for easy navigation'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 1.3 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Eye className="w-5 h-5 text-amber-600" />
                1.3 Visual Accessibility
              </h3>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                <ul className="space-y-2 text-gray-700">
                  {['Sufficient color contrast between text and background (WCAG AA contrast ratios)', 'Resizable text (up to 200% without loss of functionality)', 'No reliance on color alone to convey information', 'Clear, readable fonts and text sizes'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 1.4 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-amber-600" />
                1.4 Forms and Input Fields
              </h3>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                <ul className="space-y-2 text-gray-700">
                  {['Clearly labeled form fields with descriptive labels', 'Error messages and validation feedback clearly identified', 'Instructions provided for required fields and formatting', 'Accessible date pickers, dropdowns, and interactive elements'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 1.5 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Monitor className="w-5 h-5 text-amber-600" />
                1.5 Multimedia Content
              </h3>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                <ul className="space-y-2 text-gray-700">
                  {['Captions and transcripts provided for video content (where applicable)', 'Audio descriptions for visual content (where applicable)', 'Text alternatives for audio-only content'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 1.6 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-amber-600" />
                1.6 Navigation and Structure
              </h3>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                <ul className="space-y-2 text-gray-700">
                  {['Consistent navigation menu across all pages', 'Skip navigation links to jump to main content', 'Clear page titles and headings', 'Breadcrumb navigation for complex site structures'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 1.7 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Settings className="w-5 h-5 text-amber-600" />
                1.7 Compatibility with Assistive Technologies
              </h3>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                <ul className="space-y-2 text-gray-700">
                  {['Compatible with popular screen readers (JAWS, NVDA, VoiceOver, TalkBack)', 'Compatible with browser accessibility features (zoom, high contrast mode)', 'Compatible with assistive devices (braille displays, speech recognition software)'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2: Standards and Guidelines */}
          <div id="section-2" className="mb-12 scroll-mt-24">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-amber-600">2</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">STANDARDS AND GUIDELINES</h2>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">Mesa Group Consulting strives to conform to the following accessibility standards:</p>

            {/* 2.1 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" />
                2.1 Web Content Accessibility Guidelines (WCAG) 2.1 Level AA
              </h3>
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-4">We aim to meet WCAG 2.1 Level AA standards, which include:</p>
                <div className="space-y-4">
                  {[
                    { label: 'Perceivable:', desc: 'Information and user interface components must be presentable to users in ways they can perceive (e.g., text alternatives for non-text content, captions for videos, sufficient color contrast).' },
                    { label: 'Operable:', desc: 'User interface components and navigation must be operable by all users (e.g., keyboard accessibility, no time limits on reading content, no flashing content that could cause seizures).' },
                    { label: 'Understandable:', desc: 'Information and the operation of the user interface must be understandable (e.g., readable text, predictable navigation, input assistance for forms).' },
                    { label: 'Robust:', desc: 'Content must be robust enough to be interpreted reliably by a wide variety of user agents, including assistive technologies (e.g., valid HTML, compatibility with assistive technologies).' },
                  ].map((item, i) => (
                    <div key={i}>
                      <h4 className="font-bold text-gray-900 mb-1">{item.label}</h4>
                      <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 2.2 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" />
                2.2 Americans with Disabilities Act (ADA)
              </h3>
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">We are committed to ensuring that our digital properties comply with Title III of the Americans with Disabilities Act (ADA), which prohibits discrimination on the basis of disability in places of public accommodation, including websites.</p>
              </div>
            </div>

            {/* 2.3 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" />
                2.3 Section 508 of the Rehabilitation Act
              </h3>
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">We strive to meet Section 508 standards, which require federal agencies and entities receiving federal funding to make electronic and information technology accessible to people with disabilities.</p>
              </div>
            </div>
          </div>

          {/* Section 3: Ongoing Efforts */}
          <div id="section-3" className="mb-12 scroll-mt-24">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-amber-600">3</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">ONGOING EFFORTS</h2>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">Mesa Group Consulting is committed to ongoing accessibility improvements. Our efforts include:</p>

            {/* 3.1 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-amber-600" />
                3.1 Regular Accessibility Audits
              </h3>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                <ul className="space-y-2 text-gray-700">
                  {['Conducting periodic accessibility audits and testing with automated tools (e.g., WAVE, Axe, Lighthouse)', 'Manual testing with assistive technologies (screen readers, keyboard-only navigation)', 'User testing with individuals with disabilities (where feasible)'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 3.2 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-amber-600" />
                3.2 Staff Training
              </h3>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                <ul className="space-y-2 text-gray-700">
                  {['Training staff on accessibility best practices and inclusive design principles', 'Educating content creators on accessible content creation (alt text, captions, descriptive links)'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 3.3 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Settings className="w-5 h-5 text-amber-600" />
                3.3 Design and Development Standards
              </h3>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                <ul className="space-y-2 text-gray-700">
                  {['Incorporating accessibility into design and development workflows', 'Following semantic HTML and ARIA best practices', 'Testing for accessibility before launching new features or pages'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 3.4 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-amber-600" />
                3.4 Third-Party Content and Tools
              </h3>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                <ul className="space-y-2 text-gray-700">
                  {['Evaluating third-party tools, plugins, and widgets for accessibility compliance', 'Working with vendors to address accessibility issues in third-party products', 'Providing accessible alternatives when third-party tools are not fully accessible'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 3.5 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-amber-600" />
                3.5 Continuous Improvement
              </h3>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                <ul className="space-y-2 text-gray-700">
                  {['Monitoring user feedback and accessibility complaints', 'Prioritizing and addressing accessibility issues as they are identified', 'Staying informed about evolving accessibility standards and best practices'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Section 4: Known Limitations */}
          <div id="section-4" className="mb-12 scroll-mt-24">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-amber-600">4</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">KNOWN LIMITATIONS</h2>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">While we strive for full accessibility, we acknowledge that some limitations may exist:</p>

            {/* 4.1 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-600" />
                4.1 Third-Party Content
              </h3>
              <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                <ul className="space-y-2 text-gray-700">
                  {['Some third-party tools, plugins, or embedded content (e.g., social media feeds, payment processors, credit monitoring portals) may not be fully accessible', 'We are working with third-party vendors to improve accessibility where possible', 'We provide contact information for assistance if you encounter barriers with third-party content'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-red-600 font-bold flex-shrink-0">•</span><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 4.2 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-600" />
                4.2 Legacy Content
              </h3>
              <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                <ul className="space-y-2 text-gray-700">
                  {['Some older content or documents may not meet current accessibility standards', 'We are working to update legacy content to meet WCAG 2.1 Level AA standards', 'Contact us if you need an accessible version of specific content'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-red-600 font-bold flex-shrink-0">•</span><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 4.3 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-600" />
                4.3 Complex Forms and Interactive Elements
              </h3>
              <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                <ul className="space-y-2 text-gray-700">
                  {['Some complex forms (e.g., multi-step enrollment forms, business funding applications) may require additional assistance', 'Contact us if you need help completing forms or accessing interactive features'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-red-600 font-bold flex-shrink-0">•</span><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 4.4 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-600" />
                4.4 PDF Documents
              </h3>
              <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                <ul className="space-y-2 text-gray-700">
                  {['Some PDF documents may not be fully accessible (e.g., scanned documents, older PDFs)', 'We are working to remediate PDF accessibility issues and provide alternative formats (e.g., HTML, Word, plain text) upon request'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-red-600 font-bold flex-shrink-0">•</span><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Section 5: Assistive Technologies */}
          <div id="section-5" className="mb-12 scroll-mt-24">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-amber-600">5</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">ASSISTIVE TECHNOLOGIES</h2>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">Mesa Group Consulting's website is designed to be compatible with the following assistive technologies:</p>

            {/* 5.1 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Volume2 className="w-5 h-5 text-gray-600" />
                5.1 Screen Readers
              </h3>
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><span className="text-amber-600 font-bold flex-shrink-0">•</span><span><strong>JAWS (Job Access With Speech):</strong> Windows screen reader</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-600 font-bold flex-shrink-0">•</span><span><strong>NVDA (NonVisual Desktop Access):</strong> Free, open-source Windows screen reader</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-600 font-bold flex-shrink-0">•</span><span><strong>VoiceOver:</strong> Built-in macOS and iOS screen reader</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-600 font-bold flex-shrink-0">•</span><span><strong>TalkBack:</strong> Built-in Android screen reader</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-600 font-bold flex-shrink-0">•</span><span><strong>ChromeVox:</strong> Chrome browser extension for screen reading</span></li>
                </ul>
              </div>
            </div>

            {/* 5.2 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-gray-600" />
                5.2 Browser Accessibility Features
              </h3>
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><span className="text-amber-600 font-bold flex-shrink-0">•</span><span><strong>Text Zoom:</strong> Increase or decrease text size (Ctrl/Cmd + Plus/Minus)</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-600 font-bold flex-shrink-0">•</span><span><strong>High Contrast Mode:</strong> Enable high contrast themes in browser settings</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-600 font-bold flex-shrink-0">•</span><span><strong>Dark Mode:</strong> Enable dark mode in browser or operating system settings</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-600 font-bold flex-shrink-0">•</span><span><strong>Read Aloud:</strong> Use browser read-aloud features (Edge, Safari, Chrome extensions)</span></li>
                </ul>
              </div>
            </div>

            {/* 5.3 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-gray-600" />
                5.3 Speech Recognition Software
              </h3>
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><span className="text-amber-600 font-bold flex-shrink-0">•</span><span><strong>Dragon NaturallySpeaking:</strong> Voice-to-text and voice commands</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-600 font-bold flex-shrink-0">•</span><span><strong>Windows Speech Recognition:</strong> Built-in Windows speech recognition</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-600 font-bold flex-shrink-0">•</span><span><strong>macOS Dictation:</strong> Built-in macOS speech recognition</span></li>
                </ul>
              </div>
            </div>

            {/* 5.4 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Eye className="w-5 h-5 text-gray-600" />
                5.4 Braille Displays
              </h3>
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">Compatible with refreshable braille displays when used with screen readers</p>
              </div>
            </div>

            {/* 5.5 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Keyboard className="w-5 h-5 text-gray-600" />
                5.5 Keyboard Shortcuts
              </h3>
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><span className="text-amber-600 font-bold flex-shrink-0">•</span><span>Full keyboard navigation support (Tab, Shift+Tab, Enter, Spacebar, Arrow keys)</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-600 font-bold flex-shrink-0">•</span><span>No mouse or trackpad required for website interaction</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 6: Feedback and Assistance */}
          <div id="section-6" className="mb-12 scroll-mt-24">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-amber-600">6</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">FEEDBACK AND ASSISTANCE</h2>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">We welcome your feedback on the accessibility of our website. If you encounter accessibility barriers or have suggestions for improvement, please let us know.</p>

            {/* 6.1 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-600" />
                6.1 Reporting Accessibility Issues
              </h3>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed mb-4">If you experience difficulty accessing any part of our website or services, please contact us with the following information:</p>
                <ul className="space-y-2 text-gray-700">
                  {['Your name and contact information (email, phone)', 'Description of the accessibility barrier or issue', 'The specific page or feature where you encountered the issue', 'The assistive technology you are using (if applicable)', 'Your browser and operating system (if applicable)'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 6.2 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Settings className="w-5 h-5 text-amber-600" />
                6.2 Alternative Access
              </h3>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed mb-4">If you are unable to access content or features on our website due to accessibility barriers, we will work with you to provide:</p>
                <ul className="space-y-2 text-gray-700">
                  {['Alternative formats (e.g., plain text, Word documents, large print)', 'Assistance completing forms or applications over the phone', 'One-on-one support to access information or services', 'Reasonable accommodations as needed'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 6.3 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-600" />
                6.3 Response Time
              </h3>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed mb-4">We will respond to accessibility feedback and requests within:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Urgent Requests:</strong> 1-2 business days</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>General Feedback:</strong> 3-5 business days</span></li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">We are committed to resolving accessibility issues in a timely manner.</p>
              </div>
            </div>
          </div>

          {/* Section 7: Contact Information */}
          <div id="section-7" className="mb-12 scroll-mt-24">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-amber-600">7</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">CONTACT INFORMATION</h2>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">To report accessibility issues, request assistance, or provide feedback, please contact us:</p>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">MESA & CO CONSULTING LLC DBA MESA GROUP CONSULTING</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Mailing Address:</p>
                    <p className="text-gray-700">5001 California Ave, Suite 219</p>
                    <p className="text-gray-700">Bakersfield, CA 93309</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Email:</p>
                    <a href="mailto:contact@mesagroupconsulting.com" className="text-amber-600 hover:text-amber-700 underline">contact@mesagroupconsulting.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Phone:</p>
                    <a href="tel:661-310-3040" className="text-amber-600 hover:text-amber-700 underline">661-310-3040</a>
                    <p className="text-sm text-gray-600 mt-1">(accessible via TTY/TDD relay services)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Website:</p>
                    <a href="https://www.mesagroupconsulting.com" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">www.mesagroupconsulting.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Business Hours:</p>
                    <p className="text-gray-700">Monday - Friday, 9:00 AM - 7:00 PM Pacific Time</p>
                    <p className="text-gray-700">Saturday, 10:00 AM - 2:00 PM Pacific Time</p>
                    <p className="text-gray-700">Sunday, Closed</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Accessibility Coordinator:</p>
                    <p className="text-gray-700">
                      For accessibility-specific inquiries, contact our Accessibility Coordinator at{' '}
                      <a href="mailto:contact@mesagroupconsulting.com" className="text-amber-600 hover:text-amber-700 underline">contact@mesagroupconsulting.com</a>
                      {' '}with "Accessibility" in the subject line.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Compliance */}
          <div id="legal-compliance" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">LEGAL COMPLIANCE</h2>
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">Mesa Group Consulting is committed to complying with:</p>
              <ul className="space-y-2 text-gray-700 mb-4">
                {['Americans with Disabilities Act (ADA) - Title III', 'Section 508 of the Rehabilitation Act', 'Web Content Accessibility Guidelines (WCAG) 2.1 Level AA', 'California Unruh Civil Rights Act (for California residents)'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2"><Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
                ))}
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">If you believe we have failed to meet accessibility standards, you may file a complaint with:</p>
              <div className="bg-white border border-blue-200 p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">U.S. Department of Justice, Civil Rights Division</p>
                <p className="text-gray-700">950 Pennsylvania Avenue, NW</p>
                <p className="text-gray-700">Washington, DC 20530</p>
                <p className="text-gray-700 mt-2">Phone: 1-800-514-0301 (voice), 1-800-514-0383 (TTY)</p>
                <p className="text-gray-700 mt-2">Website: <a href="https://www.ada.gov" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://www.ada.gov</a></p>
              </div>
            </div>
          </div>

          {/* Changes to This Accessibility Statement */}
          <div id="changes" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">CHANGES TO THIS ACCESSIBILITY STATEMENT</h2>
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">Mesa Group Consulting reserves the right to update this Accessibility Statement at any time to reflect changes in our accessibility practices, standards, or technologies. When we make changes, we will:</p>
              <ul className="space-y-2 text-gray-700">
                {['Update the "Last Updated" date at the top of this page', 'Post the revised statement on our website', 'Notify users of significant changes via email (if applicable)'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-amber-600 font-bold flex-shrink-0">•</span><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Acknowledgment */}
          <div id="acknowledgment" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">ACKNOWLEDGMENT</h2>
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 border-2 border-amber-300 p-8 rounded-xl shadow-md">
              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                Mesa Group Consulting is committed to providing an accessible, inclusive digital experience for all users. We recognize that accessibility is an ongoing effort, and we are dedicated to continuous improvement.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                Thank you for visiting <a href="https://www.mesagroupconsulting.com" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:text-amber-800 underline font-semibold">www.mesagroupconsulting.com</a>. If you have questions or need assistance, please do not hesitate to contact us.
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-12 border-t-2 border-gray-200">
            <p className="text-gray-600 font-medium">© 2026 Mesa Group Consulting. All Rights Reserved.</p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AccessibilityStatement;
