import React, { useState } from 'react';
import { ArrowUpRight, Send, MapPin, X, Globe, Phone, Mail, Calendar, MessageCircle, FileCheck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { NewsletterModal } from '@/components/NewsletterModal';
import { CalendlyModal } from '@/components/CalendlyModal';
import mesaGroupLogoWhite from '@/assets/mesa-group-logo-white.svg';

const Contact = () => {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [isEnglishCalendarOpen, setIsEnglishCalendarOpen] = useState(false);
  const [isSpanishCalendarOpen, setIsSpanishCalendarOpen] = useState(false);
  const [isPunjabiCalendarOpen, setIsPunjabiCalendarOpen] = useState(false);

  const openNewsletter = () => setIsNewsletterOpen(true);
  const closeNewsletter = () => setIsNewsletterOpen(false);

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
                Transform Your Financial Future – <span className="text-[#f9c65d]">Let's Talk Strategy</span>
              </h1>
              <p className="text-xl font-semibold text-[#bb9446]">
                Free 30-Minute Consultation | No Pressure, Just Clarity
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you need credit repair, business funding, LLC formation, or debt relief – schedule a complimentary consultation with our Bakersfield team. We'll assess your situation, explain your options, and help you make informed decisions about your financial future.
              </p>
              <div className="space-y-4">
                <a
                  href="#english-consultation"
                  className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold text-lg py-4 px-8 rounded-xl transition-colors"
                >
                  Schedule Your Free Consultation
                  <ArrowUpRight className="w-5 h-5" />
                </a>
                <p className="text-sm text-gray-600">
                  Or fill out the form below and we'll contact you within 24 hours
                </p>
              </div>

              {/* Language Selection */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  Choose your preferred language:
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#english-consultation"
                    className="px-4 py-2 bg-gray-100 hover:bg-amber-100 text-gray-900 font-medium rounded-lg transition-colors text-sm"
                  >
                    English
                  </a>
                  <a
                    href="#spanish-consultation"
                    className="px-4 py-2 bg-gray-100 hover:bg-amber-100 text-gray-900 font-medium rounded-lg transition-colors text-sm"
                  >
                    Español
                  </a>
                  <a
                    href="#punjabi-consultation"
                    className="px-4 py-2 bg-gray-100 hover:bg-amber-100 text-gray-900 font-medium rounded-lg transition-colors text-sm"
                  >
                    Punjabi
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - GHL Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <iframe
                src="https://link.mesagroupconsulting.com/widget/form/CaNQDAlt2BSYAOxTZb6b"
                style={{ width: '100%', height: '1116px', border: 'none' }}
                id="inline-CaNQDAlt2BSYAOxTZb6b"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-activation-type="alwaysActivated"
                data-deactivation-type="neverDeactivate"
                data-form-name="MGC Website Contact"
                data-form-id="CaNQDAlt2BSYAOxTZb6b"
                title="MGC Website Contact"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 bg-gradient-to-br from-[#f8d899]/30 to-[#e5D2af]/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What to <span className="text-[#f9c65d]">Expect</span>
            </h2>
            <p className="text-lg text-gray-700">Your consultation in 3 simple steps</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#e5D2af] text-center">
              <div className="w-16 h-16 bg-[#f9c65d] rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">1. Schedule Your Call</h3>
              <p className="text-gray-600">Pick a time that works for you – English, Spanish, or Punjabi</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#e5D2af] text-center">
              <div className="w-16 h-16 bg-[#f9c65d] rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">2. Tell Us Your Goals</h3>
              <p className="text-gray-600">Credit repair, business funding, LLC formation, or debt relief</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#e5D2af] text-center">
              <div className="w-16 h-16 bg-[#f9c65d] rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">3. Get Your Custom Plan</h3>
              <p className="text-gray-600">Walk away with clear next steps – no pressure, just clarity</p>
            </div>
          </div>
          
          <p className="text-center text-[#bb9446] font-semibold mt-8 text-lg">
            30 minutes | 100% Free | No Obligation
          </p>
        </div>
      </section>

      {/* Alternative Contact Methods Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Just Have a <span className="text-[#f9c65d]">Quick Question?</span>
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Not ready to schedule a consultation? No problem. Reach out directly and we'll point you in the right direction – no commitment required.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <a
                href="tel:6613103040"
                className="flex items-center justify-center gap-4 bg-gray-50 hover:bg-amber-50 border-2 border-gray-200 hover:border-[#f9c65d] rounded-xl py-6 px-8 transition-all group"
              >
                <div className="w-12 h-12 bg-[#f9c65d] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-gray-900" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Call Us</p>
                  <p className="text-[#bb9446] font-medium">(661) 310-3040</p>
                </div>
              </a>
              
              <a
                href="mailto:contact@mesagroupconsulting.com"
                className="flex items-center justify-center gap-4 bg-gray-50 hover:bg-amber-50 border-2 border-gray-200 hover:border-[#f9c65d] rounded-xl py-6 px-8 transition-all group"
              >
                <div className="w-12 h-12 bg-[#f9c65d] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-gray-900" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Email Us</p>
                  <p className="text-[#bb9446] font-medium">contact@mesagroupconsulting.com</p>
                </div>
              </a>
            </div>
            
            <p className="text-sm text-gray-500 mt-6">
              We typically respond within 24 hours during business days.
            </p>
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
      <section id="english-consultation" className="py-16 md:py-24 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-amber-400 rounded-3xl p-8 md:p-12">
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="inline-block bg-gray-900 text-white px-3 py-1 rounded-md text-sm font-semibold">
                  FREE CONSULTATION
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-center">
                Transform Your Financial Future – <span className="font-black">Let's Talk Strategy</span>
              </h2>
              <div className="text-gray-900 leading-relaxed space-y-6 text-lg">
                <p>
                  Whether you're looking to repair your credit, secure business funding, launch a new LLC, or break free from debt, this consultation is your first step toward financial freedom.
                </p>
                
                <div>
                  <p className="font-bold mb-2">What to expect on this call:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• A personalized assessment of your current financial situation</li>
                    <li>• Clear explanation of which Mesa Group services align with your goals</li>
                    <li>• Transparent discussion of timelines, investment, and expected outcomes</li>
                    <li>• Answers to all your questions – no pressure, just clarity</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-bold mb-2">Come prepared (if possible):</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Any relevant financial documents (credit reports, bank statements, loan applications, etc.)</li>
                    <li>• Specific questions or concerns you'd like to address</li>
                    <li>• Your timeline and goals for what you're trying to achieve</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-bold mb-2">Our commitment to you:</p>
                  <p>
                    This is a strategy session, not a sales pitch. We'll give you honest guidance on whether we're the right fit for your situation and what realistic outcomes look like. If we can help, we'll show you exactly how. If we're not the best solution, we'll point you in the right direction.
                  </p>
                </div>
                
                <p className="italic">
                  We're looking forward to speaking with you!<br />
                  — The Mesa Group Consulting Team
                </p>
              </div>
              <div className="text-center">
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
        </div>
      </section>

      {/* Spanish Consultation Section */}
      <section id="spanish-consultation" className="py-16 md:py-24 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-[#3e3e3e] rounded-3xl p-8 md:p-12">
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="inline-block bg-amber-400 text-gray-900 px-3 py-1 rounded-md text-sm font-semibold">
                  CONSULTA GRATIS
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-center">
                Transforme Su Futuro Financiero – <span className="font-black">Hablemos de Estrategia</span>
              </h2>
              <div className="text-gray-100 leading-relaxed space-y-6 text-lg">
                <p>
                  Ya sea que necesite reparación de crédito, financiamiento empresarial, formar una LLC, o liberarse de deudas, esta consulta es su primer paso hacia la libertad financiera.
                </p>
                
                <div>
                  <p className="font-bold mb-2 text-white">Qué esperar en esta llamada:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Una evaluación personalizada de su situación financiera actual</li>
                    <li>• Explicación clara de qué servicios de Mesa Group se alinean con sus metas</li>
                    <li>• Discusión transparente de plazos, inversión y resultados esperados</li>
                    <li>• Respuestas a todas sus preguntas – sin presión, solo claridad</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-bold mb-2 text-white">Venga preparado (si es posible):</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Cualquier documento financiero relevante (informes de crédito, estados bancarios, solicitudes de préstamos, etc.)</li>
                    <li>• Preguntas o inquietudes específicas que desee abordar</li>
                    <li>• Su línea de tiempo y metas de lo que está tratando de lograr</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-bold mb-2 text-white">Nuestro compromiso con usted:</p>
                  <p>
                    Esta es una sesión de estrategia, no un discurso de ventas. Le daremos orientación honesta sobre si somos la opción correcta para su situación y cómo se ven los resultados realistas. Si podemos ayudar, le mostraremos exactamente cómo. Si no somos la mejor solución, le señalaremos la dirección correcta.
                  </p>
                </div>
                
                <p className="italic">
                  ¡Esperamos hablar con usted!<br />
                  — El Equipo de Mesa Group Consulting
                </p>
              </div>
              <div className="text-center">
                <button
                  onClick={() => setIsSpanishCalendarOpen(true)}
                  className="inline-flex items-center justify-center gap-3 bg-amber-400 hover:bg-white hover:text-black text-gray-900 font-bold text-2xl py-8 px-12 rounded-2xl transition-colors border-2 border-transparent hover:border-black mt-6"
                >
                  Agendar en Español
                  <ArrowUpRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Punjabi Consultation Section */}
      <section id="punjabi-consultation" className="py-16 md:py-24 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-amber-400 rounded-3xl p-8 md:p-12">
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="inline-block bg-gray-900 text-white px-3 py-1 rounded-md text-sm font-semibold">
                  FREE CONSULTATION | Bilkul Muft Consultation
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-center">
                Apna Financial Future Vadiya Banao – <span className="font-black">Strategy Te Gal Kariye</span>
              </h2>
              <div className="text-gray-900 leading-relaxed space-y-6 text-lg">
                <p>
                  Chahe tusi apna credit repair karna chaunde ho, business funding chahidi hove, navi LLC start karni hove, ya karze ton bahar nikalna chaunde ho, eh consultation tuhade layi pehla strong step hai financial freedom wal.
                </p>
                <p>
                  Is call vich koi pressure nahi, sirf asli keemat te sidhi gal hovegi.
                </p>
                
                <div>
                  <p className="font-bold mb-2">Is call vich ki expect kar sakde ho:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Tuhadi current financial situation di personalized assessment</li>
                    <li>• Clear explanation ke kehde Mesa Group services tuhade goals naal align karde ne</li>
                    <li>• Saaf te imaandari naal discussion timelines, investment, te expected outcomes</li>
                    <li>• Tuhade saare sawaalan de jawab — koi sales pressure nahi, sirf clarity</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-bold mb-2">Je ho sake, tayari naal aao:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Relevant financial documents (credit reports, bank statements, loan applications, etc.)</li>
                    <li>• Oh specific questions ya concerns jo tusi discuss karna chaunde ho</li>
                    <li>• Tuhada timeline te goals jo tusi achieve karna chaunde ho</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-bold mb-2">Saadi tuhade naal commitment:</p>
                  <p>
                    Eh strategy session hai, koi sales pitch nahi. Asi tuhanu imaandari naal guide karange ke asi tuhade layi right fit haan ja nahi, te realistic outcomes ki ho sakde ne. Je asi help kar sakde haan, asi exactly dikhavange kiven. Je asi best solution nahi haan, asi tuhanu sahi direction val guide karange.
                  </p>
                </div>
                
                <p className="italic">
                  Asi tuhade naal gal karan layi excited haan.<br />
                  — Mesa Group Consulting Team
                </p>
              </div>
              <div className="text-center">
                <button
                  onClick={() => setIsPunjabiCalendarOpen(true)}
                  className="inline-flex items-center justify-center gap-3 bg-black hover:bg-white hover:text-black text-amber-400 font-bold text-2xl py-8 px-12 rounded-2xl transition-colors border-2 border-transparent hover:border-black mt-6"
                >
                  Schedule in Punjabi
                  <ArrowUpRight className="w-6 h-6" />
                </button>
              </div>
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
