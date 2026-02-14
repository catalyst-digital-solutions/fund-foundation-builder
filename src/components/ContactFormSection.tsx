import React from 'react';
import { Send } from 'lucide-react';

/**
 * Reusable Contact Form Section Component
 * 
 * Usage: Add this component before the Footer on any page where a contact form is needed.
 * The form uses GoHighLevel (GHL) iframe integration for seamless submission.
 */
const ContactFormSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Heading & Benefits */}
          <div className="space-y-6">
            <div className="inline-block bg-amber-400 text-gray-900 px-3 py-1 rounded-md text-sm font-semibold">
              GET IN TOUCH
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Have Questions? <span className="text-[#f9c65d]">Let's Talk</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Fill out the form and our team will get back to you within 24 hours. Whether you need credit repair, business funding, or financial guidance, we're here to help.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#f9c65d] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Free Consultation</p>
                  <p className="text-gray-600 text-sm">No cost, no obligation — just honest guidance</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#f9c65d] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">24-Hour Response</p>
                  <p className="text-gray-600 text-sm">We typically respond within one business day</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#f9c65d] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Trilingual Support</p>
                  <p className="text-gray-600 text-sm">English, Español, and Punjabi available</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                <strong>Prefer to call?</strong><br />
                <a href="tel:6613103040" className="text-[#bb9446] hover:text-[#f9c65d] font-semibold transition-colors">(661) 310-3040</a>
              </p>
            </div>
          </div>

          {/* Right Column - GHL Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <iframe
              src="https://link.mesagroupconsulting.com/widget/form/CaNQDAlt2BSYAOxTZb6b"
              style={{ width: '100%', height: '1003px', border: 'none' }}
              id="inline-contact-form"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-activation-type="alwaysActivated"
              data-deactivation-type="neverDeactivate"
              data-form-name="MGC Website Contact"
              data-form-id="CaNQDAlt2BSYAOxTZb6b"
              title="Mesa Group Consulting Contact Form"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
