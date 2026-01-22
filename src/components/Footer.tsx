import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Linkedin, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import mesaLogo from '@/assets/mesa-group-logo.png';
import catalystLogo from '@/assets/catalyst-logo.png';

const Footer = () => {
  const [isConsumersOpen, setIsConsumersOpen] = useState(false);
  const [isBusinessesOpen, setIsBusinessesOpen] = useState(false);

  return (
    <footer className="w-full">
      {/* Main Footer Section - Two Column Layout */}
      <div className="grid md:grid-cols-[34.4%_65.6%] min-h-[525px]">
        {/* Left Column - Gray Background */}
        <div className="bg-[#2C2C2C] px-8 md:px-20 py-20 flex flex-col">
          {/* Logo */}
          <div className="mb-9">
            <img src={mesaLogo} alt="Mesa Group Consulting Logo" className="h-10" />
          </div>

          {/* Description */}
          <div className="mb-14">
            <p className="text-white text-lg leading-[27px] font-normal">
              Have a question about credit, funding, or your next financial move? Reach out today and let Mesa Group Consulting's trilingual team turn complex money problems into clear, actionable solutions—fast, friendly, and tailored to your goals.
            </p>
            <p className="text-white text-lg leading-[27px] font-normal mt-4">
              Se habla español.
            </p>
            <p className="text-white text-lg leading-[27px] font-normal">
              ਅਸੀਂ ਪੰਜਾਬੀ ਬੋਲਦੇ ਹਾਂ।
            </p>
          </div>

          {/* Contact Us */}
          <div className="mb-8">
            <h3 className="text-[#F9C65D] text-lg font-semibold mb-3">Contact Us</h3>
            <div className="space-y-3">
              <a href="mailto:contact@mesagroupconsulting.com" className="flex items-center gap-2 text-white hover:text-[#F9C65D] transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-[15px]">contact@mesagroupconsulting.com</span>
              </a>
              <a href="tel:+16613103040" className="flex items-center gap-2 text-white hover:text-[#F9C65D] transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-[15px]">(661) 310-3040</span>
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="mb-8">
            <h3 className="text-[#F9C65D] text-lg font-semibold mb-3">Address</h3>
            <a 
              href="https://www.google.com/maps/dir//5001+California+Ave+%23+219,+Bakersfield,+CA+93309"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-white hover:text-[#F9C65D] transition-colors"
            >
              <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
              <span className="text-[15px]">
                5001 California Ave Suite 219<br />
                Bakersfield, California 93309
              </span>
            </a>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-[#F9C65D] text-lg font-semibold mb-3">Hours</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span className="text-[15px]">M-F, 9am - 7pm</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span className="text-[15px]">Sat, 10am - 2pm</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span className="text-[15px]">Sun, Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Black Background */}
        <div className="bg-black px-8 md:px-20 py-20">
          {/* Three Columns of Links */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-20">
            {/* Resources Column */}
            <div>
              <h3 className="text-[#F9C65D] text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="https://portal.mesagroupconsulting.com/" target="_blank" rel="noopener noreferrer" className="text-white text-[15px] hover:text-[#F9C65D] transition-colors">Client Portal</a></li>
                <li><a href="https://tailorbrands.go2cloud.org/aff_c?offer_id=103&aff_id=9347" target="_blank" rel="noopener noreferrer" className="text-white text-[15px] hover:text-[#F9C65D] transition-colors">Form An LLC</a></li>
                <li><a href="https://smartcredit.com/join/?PID=24603&planType=PREMIUM" target="_blank" rel="noopener noreferrer" className="text-white text-[15px] hover:text-[#F9C65D] transition-colors">Get Credit Report</a></li>
              </ul>
            </div>

            {/* Services Column with Collapsible Sections */}
            <div>
              <h3 className="text-[#F9C65D] text-lg font-semibold mb-4">Services</h3>
              
              {/* For Consumers Section */}
              <Collapsible open={isConsumersOpen} onOpenChange={setIsConsumersOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full text-left group mb-2">
                  <span className="text-[#F9C65D] text-[15px] font-semibold">For Consumers</span>
                  <ChevronDown className={`w-4 h-4 text-[#F9C65D] transition-transform duration-200 ${isConsumersOpen ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <ul className="space-y-3 mb-4">
                <li><Link to="/build-credit" className="text-white text-[15px] hover:text-[#F9C65D] transition-colors">Build Credit</Link></li>
                <li><Link to="/credit-monitoring" className="text-white text-[15px] hover:text-[#F9C65D] transition-colors">Credit Monitoring</Link></li>
                <li><Link to="/credit-repair" className="text-white text-[15px] hover:text-[#F9C65D] transition-colors">Credit Restoration</Link></li>
                <li><Link to="/diy-credit-repair" className="text-white text-[15px] hover:text-[#F9C65D] transition-colors">DIY Credit Restoration</Link></li>
                  <CollapsibleContent>
                    <li className="mt-3"><Link to="/credit-cards" className="text-white text-[15px] hover:text-[#F9C65D] transition-colors">Credit Cards</Link></li>
                    <li className="mt-3"><Link to="/personal-loans" className="text-white text-[15px] hover:text-[#F9C65D] transition-colors">Personal Loans</Link></li>
                    <li className="mt-3"><Link to="/auto-loan-refi" className="text-white text-[15px] hover:text-[#F9C65D] transition-colors">Auto Loan Refi</Link></li>
                    <li className="mt-3"><Link to="/student-loan-refi" className="text-white text-[15px] hover:text-[#F9C65D] transition-colors">Student Loan Refi</Link></li>
                    <li className="mt-3"><Link to="/debt-consolidation-loan" className="text-white text-[15px] hover:text-[#F9C65D] transition-colors">Debt Consolidation Loan</Link></li>
                    <li className="mt-3"><Link to="/debt-relief" className="text-white text-[15px] hover:text-[#F9C65D] transition-colors">Debt Relief</Link></li>
                    <li className="mt-3"><Link to="/trust-and-will-plan" className="text-white text-[15px] hover:text-[#F9C65D] transition-colors">Trust & Will Plan</Link></li>
                    <li className="mt-3"><Link to="/life-insurance" className="text-white text-[15px] hover:text-[#F9C65D] transition-colors">Life Insurance</Link></li>
                  </CollapsibleContent>
                </ul>
              </Collapsible>

              {/* For Businesses Section */}
              <Collapsible open={isBusinessesOpen} onOpenChange={setIsBusinessesOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full text-left group mb-2">
                  <span className="text-[#F9C65D] text-[15px] font-semibold">For Businesses</span>
                  <ChevronDown className={`w-4 h-4 text-[#F9C65D] transition-transform duration-200 ${isBusinessesOpen ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <ul className="space-y-3">
                  <li><Link to="/zero-interest-business-funding" className="text-white text-[15px] hover:text-[#F9C65D] transition-colors">0% Interest Business Funding</Link></li>
                  <li><Link to="/business-funding" className="text-white text-[15px] hover:text-[#F9C65D] transition-colors">Business Funding</Link></li>
                  <li><Link to="/business-credit-builder" className="text-white text-[15px] hover:text-[#F9C65D] transition-colors">Business Credit Builder</Link></li>
                  <li><Link to="/business-debt-relief" className="text-white text-[15px] hover:text-[#F9C65D] transition-colors">Business Debt Relief</Link></li>
                </ul>
              </Collapsible>
            </div>

            {/* Pages Column */}
            <div>
              <h3 className="text-[#F9C65D] text-lg font-semibold mb-4">Pages</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="text-white text-[15px] hover:text-[#F9C65D] transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-white text-[15px] hover:text-[#F9C65D] transition-colors">About</Link></li>
                <li><Link to="/for-consumers" className="text-white text-[15px] hover:text-[#F9C65D] transition-colors">For Consumers</Link></li>
                <li><Link to="/for-businesses" className="text-white text-[15px] hover:text-[#F9C65D] transition-colors">For Businesses</Link></li>
                <li><Link to="/resources" className="text-white text-[15px] hover:text-[#F9C65D] transition-colors">Resources</Link></li>
                <li><Link to="/contact" className="text-white text-[15px] hover:text-[#F9C65D] transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Social Media Sections */}
          <div className="space-y-8">
            {/* Mesa Group Consulting Socials */}
            <div>
              <p className="text-white text-base mb-4">Mesa Group Consulting Socials</p>
              <div className="flex gap-3.5">
                <a href="https://www.facebook.com/mesafinanciera1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#F9C65D] flex items-center justify-center hover:bg-[#bb9446] transition-colors">
                  <Facebook className="w-4 h-4 text-[#2C2C2C]" fill="currentColor" />
                </a>
                <a href="https://www.instagram.com/mesafinanciera/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#F9C65D] flex items-center justify-center hover:bg-[#bb9446] transition-colors">
                  <Instagram className="w-4 h-4 text-[#2C2C2C]" />
                </a>
                <a href="https://www.tiktok.com/@mesafinanciera?lang=en" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#F9C65D] flex items-center justify-center hover:bg-[#bb9446] transition-colors">
                  <svg className="w-4 h-4 text-[#2C2C2C]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/mesa-group-consulting/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#F9C65D] flex items-center justify-center hover:bg-[#bb9446] transition-colors">
                  <Linkedin className="w-4 h-4 text-[#2C2C2C]" fill="currentColor" />
                </a>
                <a href="https://x.com/mesafinanciera" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#F9C65D] flex items-center justify-center hover:bg-[#bb9446] transition-colors">
                  <svg className="w-4 h-4 text-[#2C2C2C]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Chaklo Credit Socials */}
            <div>
              <p className="text-white text-base mb-4">Chaklo Credit Socials</p>
              <div className="flex gap-3.5">
                <a href="https://www.facebook.com/chaklocredit" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#F9C65D] flex items-center justify-center hover:bg-[#bb9446] transition-colors">
                  <Facebook className="w-4 h-4 text-[#2C2C2C]" fill="currentColor" />
                </a>
                <a href="https://www.instagram.com/chaklocredit/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#F9C65D] flex items-center justify-center hover:bg-[#bb9446] transition-colors">
                  <Instagram className="w-4 h-4 text-[#2C2C2C]" />
                </a>
                <a href="https://www.tiktok.com/@chaklocredit?lang=en" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#F9C65D] flex items-center justify-center hover:bg-[#bb9446] transition-colors">
                  <svg className="w-4 h-4 text-[#2C2C2C]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Catalyst Digital Solutions Attribution */}
            <div className="pt-8">
              <p className="text-[#F9C65D] text-base mb-2 text-right">A</p>
              <a href="https://www.catalyst-digital.solutions" target="_blank" rel="noopener noreferrer" className="block text-right">
                <img src={catalystLogo} alt="Catalyst Digital Solutions" className="w-[200px] h-[70px] object-contain ml-auto" />
              </a>
              <p className="text-[#F9C65D] text-base mt-2 text-right">Website</p>
            </div>
          </div>
        </div>
      </div>

      {/* Yellow Bar with Footer Links */}
      <div className="bg-[#F9C65D] py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 text-[#2C2C2C] text-[15px]">
            <a href="https://www.mesagroupconsulting.com/privacy-policy" className="hover:underline">Privacy Policy</a>
            <a href="https://www.mesagroupconsulting.com/terms-of-service" className="hover:underline">Terms of Service</a>
            <a href="https://www.mesagroupconsulting.com/disclaimer" className="hover:underline">Disclaimer</a>
            <a href="https://www.mesagroupconsulting.com/accessibility" className="hover:underline">Accessibility</a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#F9C65D] border-t border-[#2C2C2C]/10 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-[#2C2C2C] text-[15px]">
            © Copyright {new Date().getFullYear()} <a href="https://www.mesagroupconsulting.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Mesa Group Consulting.</a> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
