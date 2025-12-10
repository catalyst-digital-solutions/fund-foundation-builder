import React, { useState, useRef } from 'react';
import { Clock, Mail, MapPin, Phone, ChevronDown, X, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import mesaGroupLogo from '@/assets/mesa-group-logo.png';

// Custom X (Twitter) icon
const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// TikTok icon
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

// 3x3 Dot Grid icon
const DotGridIcon = () => (
  <div className="grid grid-cols-3 gap-[3px]">
    {[...Array(9)].map((_, i) => (
      <div key={i} className="w-[5px] h-[5px] bg-white rounded-full" />
    ))}
  </div>
);

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    {
      label: 'For Consumers',
      href: '/for-consumers',
      submenu: [
        { label: 'Build Credit', href: '/build-credit' },
        { label: 'Credit Monitoring', href: '/credit-monitoring' },
        { label: 'Credit Repair (Mesa360)', href: '/credit-repair-2' },
        { label: 'DIY Credit Repair', href: '/diy-credit-repair' },
        { label: 'Credit Cards', href: '/credit-cards' },
        { label: 'Personal Loans', href: '/personal-loans' },
        { label: 'Auto Loan Refi', href: '/auto-loan-refi' },
        { label: 'Student Loan Refi', href: '/student-loan-refi-2' },
        { label: 'Debt Consolidation Loan', href: '/debt-consolidation-loan' },
        { label: 'Debt Relief', href: '/debt-relief' },
        { label: 'Trust & Will Plan', href: '/trust-and-will-plan' },
        { label: 'Life Insurance', href: '/life-insurance' },
      ],
    },
    {
      label: 'For Businesses',
      submenu: [
        { label: '0% Interest Business Funding', href: '/zero-interest-business-funding' },
        { label: 'Business Funding', href: '/business-funding' },
        { label: 'Business Debt Relief', href: '/business-debt-relief' },
        { label: 'Business Credit', href: '/business-credit' },
      ],
    },
    {
      label: 'Resources',
      href: '/resources',
      submenu: [
        { label: 'Articles & Insights', href: '/resources/articles' },
        { label: 'Mesa News', href: '/resources/news' },
        { label: 'Financial Calculators', href: '/resources/calculators' },
        { label: 'Letter Templates', href: '/resources/templates' },
      ],
    },
    { label: 'Contact', href: 'https://www.mesagroupconsulting.com/contact-us', external: true },
  ];

  return (
    <header className="w-full bg-black text-white">
      {/* Top Info Bar */}
      <div className="border-b border-white/20">
        <div className="max-w-[1840px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-xs sm:text-sm">
            {/* Left: Hours */}
            <div className="flex items-center gap-2 text-white">
              <Clock className="w-4 h-4" />
              <span className="hidden sm:inline">M-F 9a - 7p | Sat 10a - 2p</span>
              <span className="sm:hidden">M-F 9a-7p</span>
            </div>

            {/* Center: Email & Address */}
            <div className="hidden md:flex items-center gap-6 text-white">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:contact@mesagroupconsulting.com" className="hover:text-[#f9c65d] transition-colors">
                  contact@mesagroupconsulting.com
                </a>
              </div>
              <div className="hidden lg:flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>5001 California Ave Suite 219 Bakersfield, California 93309</span>
              </div>
            </div>

            {/* Right: Social Icons */}
            <div className="flex items-center gap-3">
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#f9c65d] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#f9c65d] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#f9c65d] transition-colors">
                <XIcon />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#f9c65d] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#f9c65d] transition-colors">
                <TikTokIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b border-gray-800">
        <div className="max-w-[1840px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-[60px]">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img 
                src={mesaGroupLogo} 
                alt="Mesa Group Consulting" 
                className="h-[40px] w-auto"
              />
            </Link>

            {/* Divider */}
            <div className="hidden lg:block h-[40px] w-[1px] bg-gray-700 mx-6" />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 flex-1">
              {menuItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.submenu && handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.submenu ? (
                    <>
                      {item.href ? (
                        <Link 
                          to={item.href}
                          className="flex items-center gap-1 text-white hover:text-[#f9c65d] transition-colors text-sm font-medium"
                        >
                          {item.label}
                          <ChevronDown className="w-4 h-4" />
                        </Link>
                      ) : (
                        <button className="flex items-center gap-1 text-white hover:text-[#f9c65d] transition-colors text-sm font-medium">
                          {item.label}
                          <ChevronDown className="w-4 h-4" />
                        </button>
                      )}
                      {activeDropdown === item.label && (
                        <div 
                          className="absolute top-full left-0 mt-2 w-64 bg-black border border-gray-800 rounded-lg shadow-xl z-50"
                          onMouseEnter={() => handleMouseEnter(item.label)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="py-2">
                            {item.submenu.map((subItem) => (
                              ('external' in subItem && subItem.external) ? (
                                <a
                                  key={subItem.label}
                                  href={subItem.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-900 hover:text-[#f9c65d] transition-colors"
                                >
                                  {subItem.label}
                                </a>
                              ) : (
                                <Link
                                  key={subItem.label}
                                  to={subItem.href}
                                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-900 hover:text-[#f9c65d] transition-colors"
                                >
                                  {subItem.label}
                                </Link>
                              )
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#f9c65d] transition-colors text-sm font-medium"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-white hover:text-[#f9c65d] transition-colors text-sm font-medium"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side: Phone & Dot Grid */}
            <div className="flex items-center gap-4 ml-auto">
              {/* Phone Section */}
              <div className="hidden md:flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#3e3e3e] flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-400">Have Questions?</div>
                  <a href="tel:6613103040" className="text-sm font-semibold text-white hover:text-[#f9c65d] transition-colors">
                    (661) 310-3040
                  </a>
                </div>
              </div>

              {/* 3x3 Dot Grid - Desktop */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="hidden lg:flex p-2 text-white hover:text-[#f9c65d] transition-colors"
                aria-label="Open menu"
              >
                <DotGridIcon />
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-white hover:text-[#f9c65d] transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <DotGridIcon />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="bg-black border-b border-gray-800">
          <div className="max-w-[1840px] mx-auto px-4 sm:px-6 py-4">
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <div key={item.label}>
                  {item.submenu ? (
                    <>
                      <div className="flex items-center">
                        {item.href ? (
                          <Link
                            to={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex-1 px-4 py-3 text-white hover:text-[#f9c65d] hover:bg-gray-900 rounded-l-lg transition-colors font-medium"
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <span className="flex-1 px-4 py-3 text-white font-medium">
                            {item.label}
                          </span>
                        )}
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                          className="px-4 py-3 text-white hover:text-[#f9c65d] hover:bg-gray-900 rounded-r-lg transition-colors"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              activeDropdown === item.label ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      </div>
                      {activeDropdown === item.label && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.submenu.map((subItem) => (
                            ('external' in subItem && subItem.external) ? (
                              <a
                                key={subItem.label}
                                href={subItem.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block px-4 py-2 text-sm text-gray-300 hover:text-[#f9c65d] hover:bg-gray-900 rounded-lg transition-colors"
                              >
                                {subItem.label}
                              </a>
                            ) : (
                              <Link
                                key={subItem.label}
                                to={subItem.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block px-4 py-2 text-sm text-gray-300 hover:text-[#f9c65d] hover:bg-gray-900 rounded-lg transition-colors"
                              >
                                {subItem.label}
                              </Link>
                            )
                          ))}
                        </div>
                      )}
                    </>
                  ) : item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-white hover:text-[#f9c65d] hover:bg-gray-900 rounded-lg transition-colors font-medium"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-white hover:text-[#f9c65d] hover:bg-gray-900 rounded-lg transition-colors font-medium"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Phone */}
            <div className="mt-4 pt-4 border-t border-gray-800">
              <a href="tel:6613103040" className="flex items-center gap-3 px-4 py-3 text-white hover:text-[#f9c65d] transition-colors">
                <div className="w-10 h-10 rounded-full bg-[#3e3e3e] flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Have Questions?</div>
                  <div className="text-sm font-semibold">(661) 310-3040</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
