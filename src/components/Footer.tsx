import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Linkedin, ChevronDown, Youtube, Star, DollarSign, Building2, Users, CheckCircle, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { NewsletterModal } from '@/components/NewsletterModal';
const Footer = () => {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [isCreditServicesOpen, setIsCreditServicesOpen] = useState(false);
  const [isLendingOpen, setIsLendingOpen] = useState(false);
  const [isProtectionOpen, setIsProtectionOpen] = useState(false);
  const [isBusinessServicesOpen, setIsBusinessServicesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  return (
    <footer className="w-full">

      {/* Black Disclaimer Bar */}
      <div className="bg-[#1a1a1a] py-4">
        <div className="max-w-[80vw] mx-auto px-4">
          <p className="text-white text-[10px] leading-relaxed text-center">
            <strong>Disclaimers:</strong> The information on this website is for educational purposes only and does not constitute financial, legal, or tax advice. Mesa Group Consulting is not a lender and does not make credit decisions or provide financing. We may receive compensation through affiliate partnerships and referral arrangements. Credit repair services comply with CROA—you have the right to dispute inaccurate information with credit bureaus yourself at no cost. Results are not guaranteed and vary by individual circumstances. For detailed information, see our full <a href="https://www.mesagroupconsulting.com/disclaimer" className="underline hover:text-[#f9c65d] transition-colors">Disclaimer Page</a>.
          </p>
        </div>
      </div>

      {/* Off-White/Cream 4-Column Footer */}
      <div className="bg-gradient-to-b from-amber-100 to-amber-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          {/* Desktop: 4 columns | Mobile: Stacked with collapsibles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Column 1: About Mesa Group */}
            <div className="space-y-6">
              <div>
                <img src="/mgc-mesa-group-consulting-black-svg-logo.svg.svg" alt="Mesa Group Consulting Logo" className="h-10 mb-4" />
                <p className="text-[#3e3e3e] text-sm leading-relaxed">
                  Have a question about credit, funding, or your next financial move? Reach out today and let Mesa Group Consulting's trilingual team turn complex money problems into clear, actionable solutions.
                </p>
              </div>

              {/* Language Support */}
              <div className="space-y-1">
                <p className="text-[#3e3e3e] text-sm flex items-center gap-2">
                  <span className="text-base">🇪🇸</span> Hablamos Español
                </p>
                <p className="text-[#3e3e3e] text-sm flex items-center gap-2">
                  <span className="text-base">🇮🇳</span> Assi Punjabi Bolde Haan
                </p>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-[#bb9446] font-semibold text-sm mb-2">CONTACT US</h4>
                <div className="space-y-2">
                  <a href="mailto:contact@mesagroupconsulting.com" className="flex items-center gap-2 text-[#3e3e3e] hover:text-[#bb9446] transition-colors text-sm">
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    contact@mesagroupconsulting.com
                  </a>
                  <a href="tel:+16613103040" className="flex items-center gap-2 text-[#3e3e3e] hover:text-[#bb9446] transition-colors text-sm">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    (661) 310-3040
                  </a>
                </div>
              </div>

              {/* Address */}
              <div>
                <h4 className="text-[#bb9446] font-semibold text-sm mb-2">ADDRESS</h4>
                <a 
                  href="https://www.google.com/maps/dir//5001+California+Ave+%23+219,+Bakersfield,+CA+93309"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-[#3e3e3e] hover:text-[#bb9446] transition-colors text-sm"
                >
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>5001 California Ave Suite 219<br />Bakersfield, CA 93309</span>
                </a>
              </div>

              {/* Hours */}
              <div>
                <h4 className="text-[#bb9446] font-semibold text-sm mb-2">HOURS</h4>
                <div className="space-y-1 text-[#3e3e3e] text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 flex-shrink-0" />
                    M-F: 9am - 7pm
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 flex-shrink-0" />
                    Sat: 10am - 2pm
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 flex-shrink-0" />
                    Sun: Closed
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: For Consumers */}
            <div className="space-y-4">
              <h3 className="text-[#3e3e3e] font-bold text-lg">For Consumers</h3>
              
              {/* Credit Services */}
              <div className="md:block">
                <Collapsible open={isCreditServicesOpen} onOpenChange={setIsCreditServicesOpen} className="md:hidden">
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-left group mb-2">
                    <h4 className="text-[#bb9446] font-semibold text-sm">CREDIT SERVICES</h4>
                    <ChevronDown className={`w-4 h-4 text-[#bb9446] transition-transform duration-200 md:hidden ${isCreditServicesOpen ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <ul className="space-y-2 text-sm mb-4">
                      <li><Link to="/build-credit" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors">Build Your Credit</Link></li>
                      <li><Link to="/credit-monitoring" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors">Credit Monitoring</Link></li>
                      <li><Link to="/credit-repair" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors">Credit Restoration</Link></li>
                      <li><Link to="/diy-credit-repair" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors">DIY Credit Repair</Link></li>
                      <li>
                        <a href="https://www.smartcredit.com/?PID=39842" target="_blank" rel="noopener noreferrer" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors inline-flex items-center gap-1">
                          Get Credit Report <ExternalLink className="w-3 h-3" />
                        </a>
                      </li>
                    </ul>
                  </CollapsibleContent>
                </Collapsible>
                <div className="hidden md:block">
                  <h4 className="text-[#bb9446] font-semibold text-sm mb-2">CREDIT SERVICES</h4>
                  <ul className="space-y-2 text-sm mb-4">
                    <li><Link to="/build-credit" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors">Build Your Credit</Link></li>
                    <li><Link to="/credit-monitoring" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors">Credit Monitoring</Link></li>
                    <li><Link to="/credit-repair" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors">Credit Restoration</Link></li>
                    <li><Link to="/diy-credit-repair" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors">DIY Credit Repair</Link></li>
                    <li>
                      <a href="https://www.smartcredit.com/?PID=39842" target="_blank" rel="noopener noreferrer" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors inline-flex items-center gap-1">
                        Get Credit Report <ExternalLink className="w-3 h-3" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Lending Solutions */}
              <div className="md:block">
                <Collapsible open={isLendingOpen} onOpenChange={setIsLendingOpen} className="md:hidden">
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-left group mb-2">
                    <h4 className="text-[#bb9446] font-semibold text-sm">LENDING SOLUTIONS</h4>
                    <ChevronDown className={`w-4 h-4 text-[#bb9446] transition-transform duration-200 md:hidden ${isLendingOpen ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <ul className="space-y-2 text-sm mb-4">
                      <li><Link to="/personal-loans" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors">Personal Loans</Link></li>
                      <li><Link to="/credit-cards" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors">Credit Cards</Link></li>
                      <li><Link to="/auto-loan-refi" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors">Auto Loan Refinancing</Link></li>
                      <li><Link to="/student-loan-refi" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors">Student Loan Refinancing</Link></li>
                      <li><Link to="/debt-consolidation-loan" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors">Debt Consolidation</Link></li>
                    </ul>
                  </CollapsibleContent>
                </Collapsible>
                <div className="hidden md:block">
                  <h4 className="text-[#bb9446] font-semibold text-sm mb-2">LENDING SOLUTIONS</h4>
                  <ul className="space-y-2 text-sm mb-4">
                    <li><Link to="/personal-loans" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors">Personal Loans</Link></li>
                    <li><Link to="/credit-cards" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors">Credit Cards</Link></li>
                    <li><Link to="/auto-loan-refi" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors">Auto Loan Refinancing</Link></li>
                    <li><Link to="/student-loan-refi" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors">Student Loan Refinancing</Link></li>
                    <li><Link to="/debt-consolidation-loan" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors">Debt Consolidation</Link></li>
                  </ul>
                </div>
              </div>

              {/* Protection */}
              <div className="md:block">
                <Collapsible open={isProtectionOpen} onOpenChange={setIsProtectionOpen} className="md:hidden">
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-left group mb-2">
                    <h4 className="text-[#bb9446] font-semibold text-sm">PROTECTION</h4>
                    <ChevronDown className={`w-4 h-4 text-[#bb9446] transition-transform duration-200 md:hidden ${isProtectionOpen ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <ul className="space-y-2 text-sm">
                      <li><Link to="/debt-relief" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors">Debt Relief</Link></li>
                      <li><Link to="/trust-and-will-plan" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors">Trust & Will Planning</Link></li>
                      <li><Link to="/life-insurance" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors">Life Insurance</Link></li>
                    </ul>
                  </CollapsibleContent>
                </Collapsible>
                <div className="hidden md:block">
                  <h4 className="text-[#bb9446] font-semibold text-sm mb-2">PROTECTION</h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/debt-relief" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors">Debt Relief</Link></li>
                    <li><Link to="/trust-and-will-plan" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors">Trust & Will Planning</Link></li>
                    <li><Link to="/life-insurance" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors">Life Insurance</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Column 3: For Businesses */}
            <div className="space-y-4">
              <h3 className="text-[#3e3e3e] font-bold text-lg">For Businesses</h3>
              
              {/* Business Services */}
              <div className="md:block">
                <Collapsible open={isBusinessServicesOpen} onOpenChange={setIsBusinessServicesOpen} className="md:hidden">
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-left group mb-2">
                    <h4 className="text-[#bb9446] font-semibold text-sm">BUSINESS SERVICES</h4>
                    <ChevronDown className={`w-4 h-4 text-[#bb9446] transition-transform duration-200 md:hidden ${isBusinessServicesOpen ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <ul className="space-y-2 text-sm mb-4">
                      <li><Link to="/zero-interest-business-funding" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors">0% Interest Funding</Link></li>
                      <li><Link to="/business-funding" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors">Business Funding</Link></li>
                      <li><Link to="/business-credit-builder" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors">Business Credit Builder</Link></li>
                      <li><Link to="/business-debt-relief" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors">Business Debt Relief</Link></li>
                      <li>
                        <a href="https://www.tailorbrands.com/llc-cpa-aff?transaction_id=102bd1f29c1558d91db36f9aa7b89e&state=&utm_source=Tune&utm_medium=Tune&utm_campaign=9347" target="_blank" rel="noopener noreferrer" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors inline-flex items-center gap-1">
                          Form An LLC <ExternalLink className="w-3 h-3" />
                        </a>
                      </li>
                    </ul>
                  </CollapsibleContent>
                </Collapsible>
                <div className="hidden md:block">
                  <h4 className="text-[#bb9446] font-semibold text-sm mb-2">BUSINESS SERVICES</h4>
                  <ul className="space-y-2 text-sm mb-4">
                    <li><Link to="/zero-interest-business-funding" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors">0% Interest Funding</Link></li>
                    <li><Link to="/business-funding" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors">Business Funding</Link></li>
                    <li><Link to="/business-credit-builder" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors">Business Credit Builder</Link></li>
                    <li><Link to="/business-debt-relief" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors">Business Debt Relief</Link></li>
                    <li>
                      <a href="https://www.tailorbrands.com/llc-cpa-aff?transaction_id=102bd1f29c1558d91db36f9aa7b89e&state=&utm_source=Tune&utm_medium=Tune&utm_campaign=9347" target="_blank" rel="noopener noreferrer" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors inline-flex items-center gap-1">
                        Form An LLC <ExternalLink className="w-3 h-3" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Resources */}
              <div className="md:block">
                <Collapsible open={isResourcesOpen} onOpenChange={setIsResourcesOpen} className="md:hidden">
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-left group mb-2">
                    <h4 className="text-[#bb9446] font-semibold text-sm">RESOURCES</h4>
                    <ChevronDown className={`w-4 h-4 text-[#bb9446] transition-transform duration-200 md:hidden ${isResourcesOpen ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a href="https://portal.mesagroupconsulting.com/Portal/login.jsp" target="_blank" rel="noopener noreferrer" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors inline-flex items-center gap-1">
                          Client Portal <ExternalLink className="w-3 h-3" />
                        </a>
                      </li>
                      <li><Link to="/resources/articles" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors">Blog & Guides</Link></li>
                      <li><Link to="/resources/calculators" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors">Financial Calculator</Link></li>
                      <li><Link to="/contact" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors">Free Consultation</Link></li>
                    </ul>
                  </CollapsibleContent>
                </Collapsible>
                <div className="hidden md:block">
                  <h4 className="text-[#bb9446] font-semibold text-sm mb-2">RESOURCES</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="https://portal.mesagroupconsulting.com/Portal/login.jsp" target="_blank" rel="noopener noreferrer" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors inline-flex items-center gap-1">
                        Client Portal <ExternalLink className="w-3 h-3" />
                      </a>
                    </li>
                    <li><Link to="/resources/articles" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors">Blog & Guides</Link></li>
                    <li><Link to="/resources/calculators" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors">Financial Calculator</Link></li>
                    <li><Link to="/contact" className="text-[#3e3e3e] hover:text-[#bb9446] transition-colors">Free Consultation</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Column 4: Connect With Us */}
            <div className="space-y-6">
              <h3 className="text-[#3e3e3e] font-bold text-lg">Connect With Us</h3>
              
              {/* Newsletter Signup */}
              <div>
                <h4 className="text-[#bb9446] font-semibold text-sm mb-2">STAY UPDATED</h4>
                <p className="text-[#3e3e3e] text-sm mb-3">Subscribe to our financial tips newsletter</p>
                <button
                  onClick={() => setIsNewsletterOpen(true)}
                  className="w-full bg-[#3e3e3e] hover:bg-[#2c2c2c] text-white px-4 py-3 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2"
                >
                  Subscribe Now <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-[#bb9446] font-semibold text-sm mb-3">MESA GROUP CONSULTING</h4>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.facebook.com/mesagroupco" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#3e3e3e] flex items-center justify-center hover:bg-[#bb9446] transition-colors">
                    <Facebook className="w-4 h-4 text-white" fill="currentColor" />
                  </a>
                  <a href="https://www.instagram.com/mesagroupco/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#3e3e3e] flex items-center justify-center hover:bg-[#bb9446] transition-colors">
                    <Instagram className="w-4 h-4 text-white" />
                  </a>
                  <a href="https://www.tiktok.com/@mesagroupco" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#3e3e3e] flex items-center justify-center hover:bg-[#bb9446] transition-colors">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/company/106433329/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#3e3e3e] flex items-center justify-center hover:bg-[#bb9446] transition-colors">
                    <Linkedin className="w-4 h-4 text-white" fill="currentColor" />
                  </a>
                  <a href="https://x.com/mesagroupco" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#3e3e3e] flex items-center justify-center hover:bg-[#bb9446] transition-colors">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="https://www.youtube.com/@MesaGroupCo" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#3e3e3e] flex items-center justify-center hover:bg-[#bb9446] transition-colors">
                    <Youtube className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>

              {/* Trust Indicators */}
              <div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#3e3e3e] text-sm">
                    <Star className="w-4 h-4 text-[#f9c65d] fill-[#f9c65d]" />
                    <span>5.0 Google Rating</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#3e3e3e] text-sm">
                    <DollarSign className="w-4 h-4 text-[#bb9446]" />
                    <span>$15M+ Collections Deleted</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#3e3e3e] text-sm">
                    <Building2 className="w-4 h-4 text-[#bb9446]" />
                    <span>$97M+ Business Funding Secured</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#3e3e3e] text-sm">
                    <Users className="w-4 h-4 text-[#bb9446]" />
                    <span>2,500+ Clients Served</span>
                  </div>
                </div>
              </div>

              {/* Catalyst Digital Solutions Attribution */}
              <div className="pt-4">
                <p className="text-[#3e3e3e] text-sm mb-1">A</p>
                <a href="https://www.catalyst-digital.solutions" target="_blank" rel="noopener noreferrer" className="block">
                  <img src="/Catalyst Digital Solutions Logos and Headers - Purple - Rev D.svg" alt="Catalyst Digital Solutions" className="w-[160px] h-[56px] object-contain" />
                </a>
                <p className="text-[#3e3e3e] text-sm mt-1">Website</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Black Links Bar */}
      <div className="bg-[#1a1a1a] py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 text-white text-[15px]">
            <a href="https://www.mesagroupconsulting.com/privacy-policy" className="hover:text-[#f9c65d] hover:underline transition-colors">Privacy Policy</a>
            <Link to="/terms-and-conditions" className="hover:text-[#f9c65d] hover:underline transition-colors">Terms & Conditions</Link>
            <a href="https://www.mesagroupconsulting.com/accessibility" className="hover:text-[#f9c65d] hover:underline transition-colors">Accessibility</a>
          </div>
        </div>
      </div>

      {/* Black Copyright Bar */}
      <div className="bg-[#1a1a1a] border-t border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-white text-[15px]">
            © Copyright {new Date().getFullYear()} <a href="https://www.mesagroupconsulting.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#f9c65d] hover:underline transition-colors">Mesa Group Consulting.</a> All rights reserved.
          </p>
        </div>
      </div>
      {/* END NEW FOOTER PREVIEW */}

      {/* Newsletter Modal */}
      <NewsletterModal isOpen={isNewsletterOpen} onClose={() => setIsNewsletterOpen(false)} />
    </footer>
  );
};

export default Footer;
