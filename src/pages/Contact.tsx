import React, { useState } from 'react';
import { ArrowUpRight, Send, Mail, Phone, MapPin, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { NewsletterModal } from '@/components/NewsletterModal';
import mesaGroupLogoWhite from '@/assets/mesa-group-logo-white.svg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  const openNewsletter = () => setIsNewsletterOpen(true);
  const closeNewsletter = () => setIsNewsletterOpen(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <div className="inline-block bg-amber-400 text-gray-900 px-3 py-1 rounded-md text-sm font-semibold">
                CONTACT US
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Get Your <span className="text-[#f9c65d]">Free Credit Report Analysis</span> & Personalized Financial Strategy
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Have questions about your credit report or financial options? Our team is ready to help. Fill out this form to schedule your complimentary credit analysis with one of our Bakersfield specialists. We'll review your Experian, Equifax, and TransUnion reports, identify improvement opportunities, and develop a customized strategy for your unique situation. Most inquiries receive a response within 24 hours.
              </p>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
                <textarea
                  placeholder="Message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <button
                  type="submit"
                  className="w-full bg-amber-400 hover:bg-white hover:text-gray-900 text-gray-900 font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 border-2 border-transparent hover:border-gray-900"
                >
                  Send Mail
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <img 
                src="/5001-california-ave-bakersfield-ca-building-photo-4-mesa-group-consulting-office-location.jpg" 
                alt="Mesa Group Consulting Office - 5001 California Ave, Bakersfield, CA" 
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="p-6 md:p-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Come visit us at our location on <span className="text-[#f9c65d]">California Avenue!</span>
                </h2>
                <a 
                  href="https://www.google.com/maps/dir//5001+California+Ave+%23+219,+Bakersfield,+CA+93309"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-lg text-gray-700 hover:text-[#bb9446] transition-colors"
                >
                  <MapPin className="w-5 h-5 text-[#bb9446]" />
                  <span className="font-semibold">5001 California Ave Suite 219, Bakersfield, CA 93309</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In-Office Meeting Section - Desktop */}
      <section className="py-16 md:py-24 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="bg-[#3e3e3e] rounded-3xl p-12 grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <div className="inline-block bg-amber-400 text-gray-900 px-3 py-1 rounded-md text-sm font-semibold">
                MEET IN PERSON
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                In-Office Meeting | Personalized <span className="text-[#f9c65d]">Financial Guidance</span>. Face-to-Face <span className="text-[#f9c65d]">Expert Consultations</span> in Our Bakersfield Office.
              </h2>
              <div className="text-white leading-relaxed space-y-4">
                <p>Nothing replaces the power of personal connection when discussing your financial future.</p>
                <p>Our in-office consultations provide a comfortable, private environment where you can meet directly with our experienced specialists to review your credit reports, explore funding options, and develop customized strategies.</p>
                <p>During your visit to our Bakersfield location, we'll conduct a comprehensive analysis of your situation and create a personalized roadmap for achieving your financial goals, whether that's buying a home, starting a business, or simply gaining peace of mind about your credit health.</p>
              </div>
            </div>

            {/* Right Column - Buttons */}
            <div className="space-y-4">
              <a
                href="https://calendly.com/mesagroupconsulting/office-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-amber-400 hover:bg-white text-gray-900 font-bold text-2xl py-8 px-6 rounded-2xl transition-colors text-center flex items-center justify-center gap-3"
              >
                English
                <ArrowUpRight className="w-6 h-6" />
              </a>
              <a
                href="https://calendly.com/mesagroupconsulting/consulta-de-oficina"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-amber-400 hover:bg-white text-gray-900 font-bold text-2xl py-8 px-6 rounded-2xl transition-colors text-center flex items-center justify-center gap-3"
              >
                Español
                <ArrowUpRight className="w-6 h-6" />
              </a>
              <a
                href="https://link.mesagroupconsulting.com/widget/bookings/office-consultation-punjabi"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-amber-400 hover:bg-white text-gray-900 font-bold text-2xl py-8 px-6 rounded-2xl transition-colors text-center flex items-center justify-center gap-3"
              >
                ਪੰਜਾਬੀ
                <ArrowUpRight className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* In-Office Meeting Section - Mobile */}
      <section className="py-16 md:hidden">
        <div className="container mx-auto px-4">
          <div className="bg-[#3e3e3e] rounded-3xl p-8 space-y-8">
            {/* Content */}
            <div className="space-y-4">
              <div className="inline-block bg-amber-400 text-gray-900 px-3 py-1 rounded-md text-sm font-semibold">
                MEET IN PERSON
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                In-Office Meeting | Personalized <span className="text-[#f9c65d]">Financial Guidance</span>. Face-to-Face <span className="text-[#f9c65d]">Expert Consultations</span> in Our Bakersfield Office.
              </h2>
              <div className="text-white text-sm leading-relaxed space-y-3">
                <p>Nothing replaces the power of personal connection when discussing your financial future.</p>
                <p>Our in-office consultations provide a comfortable, private environment where you can meet directly with our experienced specialists to review your credit reports, explore funding options, and develop customized strategies.</p>
                <p>During your visit to our Bakersfield location, we'll conduct a comprehensive analysis of your situation and create a personalized roadmap for achieving your financial goals, whether that's buying a home, starting a business, or simply gaining peace of mind about your credit health.</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              <a
                href="https://calendly.com/mesagroupconsulting/office-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-amber-400 hover:bg-white text-gray-900 font-semibold text-lg py-5 px-6 rounded-xl transition-colors text-center flex items-center justify-center gap-2"
              >
                English
                <ArrowUpRight className="w-5 h-5" />
              </a>
              <a
                href="https://calendly.com/mesagroupconsulting/consulta-de-oficina"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-amber-400 hover:bg-white text-gray-900 font-semibold text-lg py-5 px-6 rounded-xl transition-colors text-center flex items-center justify-center gap-2"
              >
                Español
                <ArrowUpRight className="w-5 h-5" />
              </a>
              <a
                href="https://link.mesagroupconsulting.com/widget/bookings/office-consultation-punjabi"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-amber-400 hover:bg-white text-gray-900 font-semibold text-lg py-5 px-6 rounded-xl transition-colors text-center flex items-center justify-center gap-2"
              >
                ਪੰਜਾਬੀ
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Free Consultation Section - Desktop */}
      <section className="py-16 md:py-24 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="bg-amber-400 rounded-3xl p-12 grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <div className="inline-block bg-gray-900 text-white px-3 py-1 rounded-md text-sm font-semibold">
                FREE CONSULTATION
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Free Consultation | Get <span className="font-black">Expert Credit Analysis</span> and Personalized <span className="font-black">Improvement Strategies</span> at No Cost to You
              </h2>
              <div className="text-gray-900 leading-relaxed space-y-4">
                <p>Take the first step toward better credit with our complimentary consultation that provides real value without any obligation.</p>
                <p>Our credit specialists will review your current credit situation, identify improvement opportunities, and explain exactly how we can help you achieve your goals.</p>
                <p>This free consultation includes a thorough analysis of your credit reports, personalized recommendations for your unique situation, and a clear explanation of our services. Regardless of your credit goals, we'll give you the knowledge and confidence to make informed decisions about your credit future.</p>
              </div>
            </div>

            {/* Right Column - Buttons */}
            <div className="space-y-4">
              <a
                href="https://calendly.com/mesagroupconsulting/free-credit-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-black hover:bg-white hover:text-black text-amber-400 font-bold text-2xl py-8 px-6 rounded-2xl transition-colors text-center flex items-center justify-center gap-3 border-2 border-transparent hover:border-black"
              >
                English
                <ArrowUpRight className="w-6 h-6" />
              </a>
              <a
                href="https://calendly.com/mesagroupconsulting/consulta-de-credito"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-black hover:bg-white hover:text-black text-amber-400 font-bold text-2xl py-8 px-6 rounded-2xl transition-colors text-center flex items-center justify-center gap-3 border-2 border-transparent hover:border-black"
              >
                Español
                <ArrowUpRight className="w-6 h-6" />
              </a>
              <a
                href="https://link.mesagroupconsulting.com/widget/bookings/free-credit-consulation-punjabi"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-black hover:bg-white hover:text-black text-amber-400 font-bold text-2xl py-8 px-6 rounded-2xl transition-colors text-center flex items-center justify-center gap-3 border-2 border-transparent hover:border-black"
              >
                ਪੰਜਾਬੀ
                <ArrowUpRight className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Free Consultation Section - Mobile */}
      <section className="py-16 md:hidden">
        <div className="container mx-auto px-4">
          <div className="bg-amber-400 rounded-3xl p-8 space-y-8">
            {/* Content */}
            <div className="space-y-4">
              <div className="inline-block bg-gray-900 text-white px-3 py-1 rounded-md text-sm font-semibold">
                FREE CONSULTATION
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                Free Consultation | Get <span className="font-black">Expert Credit Analysis</span> and Personalized <span className="font-black">Improvement Strategies</span> at No Cost to You
              </h2>
              <div className="text-gray-900 text-sm leading-relaxed space-y-3">
                <p>Take the first step toward better credit with our complimentary consultation that provides real value without any obligation.</p>
                <p>Our credit specialists will review your current credit situation, identify improvement opportunities, and explain exactly how we can help you achieve your goals.</p>
                <p>This free consultation includes a thorough analysis of your credit reports, personalized recommendations for your unique situation, and a clear explanation of our services. Regardless of your credit goals, we'll give you the knowledge and confidence to make informed decisions about your credit future.</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              <a
                href="https://calendly.com/mesagroupconsulting/free-credit-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-black hover:bg-white hover:text-black text-amber-400 font-semibold text-lg py-5 px-6 rounded-xl transition-colors text-center flex items-center justify-center gap-2 border-2 border-transparent hover:border-black"
              >
                English
                <ArrowUpRight className="w-5 h-5" />
              </a>
              <a
                href="https://calendly.com/mesagroupconsulting/consulta-de-credito"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-black hover:bg-white hover:text-black text-amber-400 font-semibold text-lg py-5 px-6 rounded-xl transition-colors text-center flex items-center justify-center gap-2 border-2 border-transparent hover:border-black"
              >
                Español
                <ArrowUpRight className="w-5 h-5" />
              </a>
              <a
                href="https://link.mesagroupconsulting.com/widget/bookings/free-credit-consulation-punjabi"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-black hover:bg-white hover:text-black text-amber-400 font-semibold text-lg py-5 px-6 rounded-xl transition-colors text-center flex items-center justify-center gap-2 border-2 border-transparent hover:border-black"
              >
                ਪੰਜਾਬੀ
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://maps.google.com/maps?q=5001%20California%20Ave%20Suite%20219%20Bakersfield%2C%20California%2093309&t=m&z=14&output=embed&iwloc=near"
              title="Mesa Group Consulting Office - 5001 California Ave Suite 219 Bakersfield, California 93309"
              aria-label="Mesa Group Consulting Office Location"
              className="w-full h-96 md:h-[500px] grayscale"
              loading="lazy"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            {/* Icon */}
            <div className="flex justify-center">
              <div className="bg-gray-100 p-6 rounded-full">
                <Send className="w-12 h-12 text-gray-700" />
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Subscribe to our <span className="text-[#f9c65d]">Newsletter</span> for free credit tips.
            </h2>

            {/* Button */}
            <div className="text-center">
              <button
                onClick={openNewsletter}
                className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
              >
                Subscribe to Newsletter
                <ArrowUpRight className="w-5 h-5" />
              </button>

              <p className="text-sm text-gray-600 mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      <NewsletterModal
        isOpen={isNewsletterOpen}
        onClose={closeNewsletter}
      />

      <Footer />
    </div>
  );
};

export default Contact;
