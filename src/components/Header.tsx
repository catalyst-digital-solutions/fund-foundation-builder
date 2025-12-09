import React, { useState, useRef } from 'react';
import { Clock, Mail, MapPin, Phone, ChevronDown, Menu, X, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import mesaGroupLogo from '@/assets/mesa-group-logo.png';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    // Clear any pending close timeout
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    // Delay closing the dropdown to allow smooth cursor movement
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    {
      label: 'For Consumers',
      submenu: [
        { label: 'Build Credit', href: '#' },
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
      submenu: [
        { label: 'Mesa News', href: '/mesa-news' },
        { label: 'Financial Calculators', href: '/financial-calculators' },
        { label: 'Letter Templates', href: '/letter-templates' },
      ],
    },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="w-full bg-black text-white">
      {/* Top Info Bar */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-xs sm:text-sm">
            {/* Left: Hours */}
            <div className="flex items-center gap-2 text-gray-300">
              <Clock className="w-4 h-4" />
              <span className="hidden sm:inline">M-F 9a - 7p | Sat 10a - 2p</span>
              <span className="sm:hidden">M-F 9a-7p</span>
            </div>

            {/* Center: Email */}
            <div className="hidden md:flex items-center gap-2 text-gray-300">
              <Mail className="w-4 h-4" />
              <a href="mailto:contact@mesagroupconsulting.com" className="hover:text-[#f9c65d] transition-colors">
                contact@mesagroupconsulting.com
              </a>
            </div>

            {/* Right: Address & Social */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>5001 California Ave Suite 219 Bakersfield, California 93309</span>
              </div>
              
              {/* Social Icons */}
              <div className="flex items-center gap-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#f9c65d] transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#f9c65d] transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#f9c65d] transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#f9c65d] transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src={mesaGroupLogo} 
                alt="Mesa Group Consulting" 
                className="h-[60px] w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.submenu && handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.submenu ? (
                    <>
                      <button className="flex items-center gap-1 text-white hover:text-[#f9c65d] transition-colors font-medium">
                        {item.label}
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      {activeDropdown === item.label && (
                        <div 
                          className="absolute top-full left-0 mt-2 w-64 bg-black border border-gray-800 rounded-lg shadow-xl z-50"
                          onMouseEnter={() => handleMouseEnter(item.label)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="py-2">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.label}
                                to={subItem.href}
                                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-900 hover:text-[#f9c65d] transition-colors"
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-white hover:text-[#f9c65d] transition-colors font-medium"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side: Phone & Menu Toggle */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#f9c65d]" />
                <div className="text-right">
                  <div className="text-xs text-gray-400">Have Questions?</div>
                  <a href="tel:6613103040" className="text-lg font-semibold text-white hover:text-[#f9c65d] transition-colors">
                    (661) 310-3040
                  </a>
                </div>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-white hover:text-[#f9c65d] transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <div key={item.label}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                        className="flex items-center justify-between w-full px-4 py-3 text-white hover:text-[#f9c65d] hover:bg-gray-900 rounded-lg transition-colors font-medium"
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {activeDropdown === item.label && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.label}
                              to={subItem.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block px-4 py-2 text-sm text-gray-300 hover:text-[#f9c65d] hover:bg-gray-900 rounded-lg transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
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
                <Phone className="w-5 h-5" />
                <div>
                  <div className="text-xs text-gray-400">Have Questions?</div>
                  <div className="text-lg font-semibold">(661) 310-3040</div>
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