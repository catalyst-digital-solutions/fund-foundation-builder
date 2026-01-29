import React, { useState } from 'react';
import { ArrowUpRight, Send, Mail, Phone, MapPin, Clock, X } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { NewsletterModal } from '@/components/NewsletterModal';
import { CalendlyModal } from '@/components/CalendlyModal';
import mesaGroupLogoWhite from '@/assets/mesa-group-logo-white.svg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [isEnglishCalendarOpen, setIsEnglishCalendarOpen] = useState(false);
  const [isSpanishCalendarOpen, setIsSpanishCalendarOpen] = useState(false);
  const [isPunjabiCalendarOpen, setIsPunjabiCalendarOpen] = useState(false);

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

      {/* English Consultation Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-amber-400 rounded-3xl p-8 md:p-12">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <div className="inline-block bg-gray-900 text-white px-3 py-1 rounded-md text-sm font-semibold">
                FREE CONSULTATION
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Free Consultation | Get <span className="font-black">Expert Credit Analysis</span> and Personalized <span className="font-black">Improvement Strategies</span> at No Cost to You
              </h2>
              <div className="text-gray-900 leading-relaxed space-y-4 text-lg">
                <p>Take the first step toward better credit with our complimentary consultation that provides real value without any obligation.</p>
                <p>Our credit specialists will review your current credit situation, identify improvement opportunities, and explain exactly how we can help you achieve your goals.</p>
                <p>This free consultation includes a thorough analysis of your credit reports, personalized recommendations for your unique situation, and a clear explanation of our services. Regardless of your credit goals, we'll give you the knowledge and confidence to make informed decisions about your credit future.</p>
              </div>
              <button
                onClick={() => setIsEnglishCalendarOpen(true)}
                className="inline-flex items-center justify-center gap-3 bg-black hover:bg-white hover:text-black text-amber-400 font-bold text-2xl py-8 px-12 rounded-2xl transition-colors border-2 border-transparent hover:border-black mt-6"
              >
                Schedule in English
                <ArrowUpRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Spanish Consultation Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-[#3e3e3e] rounded-3xl p-8 md:p-12">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <div className="inline-block bg-amber-400 text-gray-900 px-3 py-1 rounded-md text-sm font-semibold">
                CONSULTA GRATIS
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Consulta Gratuita | Obtenga <span className="font-black">Análisis de Crédito Experto</span> y <span className="font-black">Estrategias de Mejora Personalizadas</span> sin Costo Alguno
              </h2>
              <div className="text-gray-100 leading-relaxed space-y-4 text-lg">
                <p>Dé el primer paso hacia un mejor crédito con nuestra consulta gratuita que proporciona un valor real sin ninguna obligación.</p>
                <p>Nuestros especialistas en crédito revisarán su situación crediticia actual, identificarán oportunidades de mejora y explicarán exactamente cómo podemos ayudarlo a alcanzar sus objetivos.</p>
                <p>Esta consulta gratuita incluye un análisis completo de sus informes de crédito, recomendaciones personalizadas para su situación única y una explicación clara de nuestros servicios. Independientemente de sus objetivos crediticios, le brindaremos el conocimiento y la confianza para tomar decisiones informadas sobre su futuro crediticio.</p>
              </div>
              <button
                onClick={() => setIsSpanishCalendarOpen(true)}
                className="inline-flex items-center justify-center gap-3 bg-amber-400 hover:bg-white hover:text-black text-gray-900 font-bold text-2xl py-8 px-12 rounded-2xl transition-colors border-2 border-transparent hover:border-black mt-6"
              >
                Programar en Español
                <ArrowUpRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Punjabi Consultation Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-amber-400 rounded-3xl p-8 md:p-12">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <div className="inline-block bg-gray-900 text-white px-3 py-1 rounded-md text-sm font-semibold">
                ਮੁਫਤ ਸਲਾਹ
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                ਮੁਫਤ ਸਲਾਹ | <span className="font-black">ਮਾਹਰ ਕ੍ਰੈਡਿਟ ਵਿਸ਼ਲੇਸ਼ਣ</span> ਅਤੇ <span className="font-black">ਨਿੱਜੀ ਸੁਧਾਰ ਰਣਨੀਤੀਆਂ</span> ਤੁਹਾਡੇ ਲਈ ਕੋਈ ਕੀਮਤ ਨਹੀਂ
              </h2>
              <div className="text-gray-900 leading-relaxed space-y-4 text-lg">
                <p>ਸਾਡੀ ਮੁਫਤ ਸਲਾਹ ਨਾਲ ਬਿਹਤਰ ਕ੍ਰੈਡਿਟ ਵੱਲ ਪਹਿਲਾ ਕਦਮ ਚੁੱਕੋ ਜੋ ਬਿਨਾਂ ਕਿਸੇ ਜ਼ਿੰਮੇਵਾਰੀ ਦੇ ਅਸਲ ਮੁੱਲ ਪ੍ਰਦਾਨ ਕਰਦੀ ਹੈ।</p>
                <p>ਸਾਡੇ ਕ੍ਰੈਡਿਟ ਮਾਹਰ ਤੁਹਾਡੀ ਮੌਜੂਦਾ ਕ੍ਰੈਡਿਟ ਸਥਿਤੀ ਦੀ ਸਮੀਖਿਆ ਕਰਨਗੇ, ਸੁਧਾਰ ਦੇ ਮੌਕਿਆਂ ਦੀ ਪਛਾਣ ਕਰਨਗੇ, ਅਤੇ ਸਪੱਸ਼ਟ ਤੌਰ 'ਤੇ ਦੱਸਣਗੇ ਕਿ ਅਸੀਂ ਤੁਹਾਡੇ ਟੀਚਿਆਂ ਨੂੰ ਪ੍ਰਾਪਤ ਕਰਨ ਵਿੱਚ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦੇ ਹਾਂ।</p>
                <p>ਇਸ ਮੁਫਤ ਸਲਾਹ ਵਿੱਚ ਤੁਹਾਡੀਆਂ ਕ੍ਰੈਡਿਟ ਰਿਪੋਰਟਾਂ ਦਾ ਡੂੰਘਾ ਵਿਸ਼ਲੇਸ਼ਣ, ਤੁਹਾਡੀ ਵਿਲੱਖਣ ਸਥਿਤੀ ਲਈ ਨਿੱਜੀ ਸਿਫਾਰਸ਼ਾਂ, ਅਤੇ ਸਾਡੀਆਂ ਸੇਵਾਵਾਂ ਦੀ ਸਪੱਸ਼ਟ ਵਿਆਖਿਆ ਸ਼ਾਮਲ ਹੈ।</p>
              </div>
              <button
                onClick={() => setIsPunjabiCalendarOpen(true)}
                className="inline-flex items-center justify-center gap-3 bg-black hover:bg-white hover:text-black text-amber-400 font-bold text-2xl py-8 px-12 rounded-2xl transition-colors border-2 border-transparent hover:border-black mt-6"
              >
                ਪੰਜਾਬੀ ਵਿੱਚ ਨਿਯਤ ਕਰੋ
                <ArrowUpRight className="w-6 h-6" />
              </button>
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

      {/* Calendly Modals */}
      <CalendlyModal
        isOpen={isEnglishCalendarOpen}
        onClose={() => setIsEnglishCalendarOpen(false)}
        customUrl="https://calendly.com/mesagroupconsulting/mesa-group-consulting-consultation-calendar"
      />

      <CalendlyModal
        isOpen={isSpanishCalendarOpen}
        onClose={() => setIsSpanishCalendarOpen(false)}
        customUrl="https://calendly.com/mesagroupconsulting/mesa-group-consulting-consulta"
      />

      {/* GHL Punjabi Calendar Modal */}
      {isPunjabiCalendarOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 sm:p-6"
          onClick={() => setIsPunjabiCalendarOpen(false)}
        >
          <div
            className="relative w-full max-w-[600px] h-[90vh] max-h-[900px] bg-white rounded-xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsPunjabiCalendarOpen(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
            <iframe 
              src="https://link.mesagroupconsulting.com/widget/booking/5I7RpXpr10YWafm3DHdl" 
              className="w-full h-full"
              style={{ border: 'none' }}
              title="Schedule Consultation in Punjabi"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Contact;
