import React, { useState, useRef } from 'react';
import { Clock, Mail, MapPin, Phone, ChevronDown, X, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

// Inline SVG Logo Component (white version for dark backgrounds)
const MesaGroupLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 500 135.2" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="m164.7 116.54c-.28 2.43-1.15 4.3-2.62 5.62s-3.43 1.98-5.87 1.98c-2.65 0-4.77-.97-6.37-2.92-1.6-1.94-2.39-4.55-2.39-7.8v-2.21c0-2.13.37-4.01 1.12-5.63.74-1.62 1.8-2.86 3.16-3.73s2.95-1.3 4.74-1.3c2.38 0 4.29.68 5.73 2.04s2.27 3.24 2.51 5.65h-2.97c-.26-1.83-.81-3.16-1.67-3.98s-2.05-1.23-3.59-1.23c-1.89 0-3.37.72-4.44 2.15s-1.61 3.47-1.61 6.11v2.22c0 2.49.51 4.48 1.52 5.95 1.02 1.47 2.44 2.21 4.26 2.21 1.64 0 2.9-.38 3.78-1.14s1.46-2.09 1.75-3.98h2.97z" fill="#fff"/>
    <path d="m188.5 113.09c0 2.25-.37 4.21-1.11 5.89s-1.79 2.96-3.14 3.84-2.94 1.32-4.74 1.32-3.33-.44-4.7-1.33-2.42-2.15-3.18-3.8-1.14-3.55-1.16-5.71v-1.65c0-2.21.37-4.16 1.12-5.85s1.81-2.99 3.18-3.89 2.94-1.35 4.7-1.35 3.38.44 4.75 1.33 2.42 2.17 3.16 3.86 1.11 3.65 1.11 5.89v1.45zm-2.94-1.48c0-2.72-.53-4.81-1.6-6.27-1.07-1.45-2.56-2.18-4.48-2.18s-3.34.73-4.41 2.18c-1.07 1.46-1.62 3.48-1.66 6.06v1.69c0 2.64.54 4.71 1.62 6.22s2.57 2.26 4.47 2.26 3.39-.71 4.43-2.14c1.05-1.42 1.59-3.47 1.62-6.12v-1.7z" fill="#fff"/>
    <path d="m212.68 123.82h-2.97l-11.29-17.69v17.69h-2.97v-22.95h2.97l11.32 17.76v-17.76h2.94z" fill="#fff"/>
    <path d="m227.69 113.59c-2.54-.75-4.38-1.66-5.54-2.75s-1.73-2.43-1.73-4.03c0-1.81.71-3.3 2.12-4.48s3.25-1.77 5.5-1.77c1.54 0 2.91.31 4.12.91 1.21.61 2.14 1.45 2.8 2.52s.99 2.24.99 3.52h-2.97c0-1.39-.43-2.49-1.29-3.28-.86-.8-2.08-1.19-3.65-1.19-1.46 0-2.59.33-3.41.99s-1.22 1.57-1.22 2.74c0 .94.39 1.73 1.16 2.38s2.09 1.24 3.96 1.78 3.32 1.13 4.37 1.77c1.05.65 1.83 1.4 2.34 2.26s.76 1.88.76 3.04c0 1.86-.71 3.35-2.12 4.47-1.42 1.12-3.31 1.68-5.68 1.68-1.54 0-2.98-.3-4.31-.91s-2.36-1.43-3.09-2.48c-.72-1.05-1.09-2.24-1.09-3.58h2.97c0 1.39.5 2.48 1.5 3.29 1 .8 2.34 1.21 4.01 1.21 1.56 0 2.76-.33 3.59-.98s1.25-1.54 1.25-2.66-.38-1.99-1.15-2.61c-.77-.61-2.17-1.22-4.19-1.82z" fill="#fff"/>
    <path d="m258.73 100.87v15.61c-.01 2.16-.67 3.94-1.99 5.31-1.32 1.38-3.11 2.15-5.37 2.32l-.79.03c-2.45 0-4.41-.68-5.87-2.03-1.46-1.36-2.2-3.22-2.22-5.6v-15.64h2.93v15.54c0 1.66.45 2.95 1.34 3.87s2.17 1.38 3.82 1.38 2.95-.46 3.84-1.37 1.33-2.2 1.33-3.86v-15.56h2.97z" fill="#fff"/>
    <path d="m269.52 121.35h10.62v2.47h-13.59v-22.95h2.97z" fill="#fff"/>
    <path d="m301.71 103.35h-7.21v20.48h-2.94v-20.48h-7.19v-2.47h17.34z" fill="#fff"/>
    <path d="m311.36 123.82h-2.96v-22.95h2.96z" fill="#fff"/>
    <path d="m336.52 123.82h-2.97l-11.29-17.69v17.69h-2.97v-22.95h2.97l11.32 17.76v-17.76h2.94z" fill="#fff"/>
    <path d="m361.47 120.81c-.76 1.11-1.82 1.95-3.18 2.5s-2.94.83-4.75.83-3.45-.44-4.87-1.32-2.51-2.13-3.29-3.74c-.77-1.62-1.17-3.49-1.19-5.63v-2c0-3.46.79-6.14 2.36-8.04s3.79-2.85 6.64-2.85c2.34 0 4.22.61 5.65 1.84 1.43 1.22 2.3 2.96 2.62 5.21h-2.96c-.55-3.05-2.32-4.57-5.3-4.57-1.98 0-3.48.71-4.5 2.14s-1.54 3.49-1.55 6.19v1.88c0 2.58.57 4.63 1.72 6.15s2.7 2.28 4.67 2.28c1.11 0 2.08-.13 2.91-.38s1.52-.68 2.06-1.27v-5.14h-5.19v-2.47h8.13v8.42z" fill="#fff"/>
    <path d="m85.24 25.53h10.02v50.49h-10.63v-33.33l-11.82 16.88h-8.47l-11.96-16.38v32.83h-10.63v-50.49h10.09l16.81 23.29 16.6-23.29z" fill="#fff"/>
    <path d="m101.84 25.53h30.99v9.83h-20.36v9.11h17.91v9.83h-17.91v11.89h20.36v9.83h-30.99z" fill="#fff"/>
    <path d="m171.03 50.03c1.96 1.19 3.45 2.71 4.48 4.56s1.54 3.99 1.54 6.41c0 2.28-.54 4.4-1.61 6.37s-2.59 3.71-4.55 5.23c-1.77 1.38-3.79 2.43-6.05 3.17s-4.65 1.13-7.17 1.18c-2.52 0-4.92-.36-7.21-1.07s-4.32-1.78-6.09-3.2c-2.66-2.04-4.48-4.51-5.46-7.41l9.79-4.63c0 .48.16 1.07.49 1.78s.84 1.4 1.54 2.07 1.61 1.23 2.73 1.71 2.49.71 4.13.71c1.3 0 2.46-.17 3.46-.5s1.84-.75 2.52-1.25 1.19-1.07 1.54-1.71.52-1.29.52-1.96c0-.76-.24-1.47-.74-2.14-.49-.66-1.25-1.19-2.27-1.57-1.87-.66-3.84-1.22-5.91-1.67-2.08-.45-4.09-1.02-6.05-1.71s-3.78-1.6-5.46-2.74-3.01-2.73-3.99-4.77c-.89-1.8-1.33-3.73-1.33-5.77 0-2.28.52-4.49 1.57-6.62 1.05-2.14 2.48-3.94 4.3-5.41 1.73-1.38 3.66-2.43 5.81-3.17 2.14-.74 4.41-1.1 6.79-1.1s4.65.36 6.82 1.07 4.12 1.76 5.84 3.13c1.68 1.28 3.01 2.78 3.99 4.49l-7.98 5.55c-.98-1.38-2.2-2.48-3.67-3.31s-3.11-1.25-4.93-1.25c-2.52 0-4.47.57-5.84 1.71-1.38 1.14-2.06 2.63-2.06 4.49 0 .85.38 1.61 1.15 2.28s1.77 1.26 3.01 1.78c1.23.52 2.62.99 4.16 1.39s3.07.81 4.58 1.21c1.52.4 2.95.82 4.3 1.25s2.45.9 3.29 1.42z" fill="#fff"/>
    <path d="m213.08 25.53 20.71 50.49h-11.47l-4.48-10.82h-21.06l-4.41 10.82h-11.54l20.71-50.49zm.77 29.84-6.51-15.88-6.51 15.88h13.01z" fill="#fff"/>
    <path d="m307.63 70.3c-1.68 2.46-4.02 4.29-7.02 5.51s-6.5 1.83-10.49 1.83-7.62-.97-10.74-2.9c-3.13-1.94-5.55-4.69-7.26-8.26s-2.59-7.71-2.63-12.41v-4.42c0-7.63 1.74-13.54 5.22-17.73 3.48-4.2 8.37-6.29 14.67-6.29 5.17 0 9.33 1.35 12.48 4.05s5.08 6.53 5.78 11.49h-6.53c-1.22-6.72-5.12-10.08-11.7-10.08-4.37 0-7.69 1.57-9.94 4.72s-3.39 7.7-3.42 13.66v4.14c0 5.68 1.27 10.2 3.81 13.55s5.97 5.03 10.3 5.03c2.45 0 4.59-.28 6.43-.83 1.84-.56 3.35-1.49 4.56-2.81v-11.34h-11.46v-5.46h17.95v18.57z" fill="#fff"/>
    <path d="m336.67 56.46h-11.63v20.48h-6.56v-50.62h16.39c5.58 0 9.87 1.3 12.87 3.89 3 2.6 4.5 6.38 4.5 11.34 0 3.15-.83 5.9-2.5 8.24s-3.98 4.09-6.95 5.25l11.63 21.49v.42h-7l-10.74-20.48zm-11.63-5.46h10.03c3.24 0 5.82-.86 7.73-2.58s2.87-4.02 2.87-6.9c0-3.13-.91-5.54-2.74-7.21-1.82-1.67-4.46-2.52-7.9-2.54h-10v19.23z" fill="#fff"/>
    <path d="m399.46 53.26c0 4.96-.82 9.29-2.45 12.99s-3.94 6.52-6.94 8.47c-2.99 1.95-6.48 2.92-10.47 2.92s-7.36-.98-10.37-2.94-5.35-4.75-7.02-8.38-2.52-7.83-2.57-12.6v-3.65c0-4.87.83-9.17 2.48-12.9s3.99-6.59 7.02-8.57 6.49-2.97 10.39-2.97 7.46.98 10.49 2.94 5.36 4.8 6.99 8.52 2.45 8.05 2.45 12.99v3.2zm-6.49-3.26c0-6-1.18-10.61-3.54-13.82s-5.66-4.82-9.89-4.82-7.37 1.61-9.74 4.82-3.59 7.67-3.66 13.37v3.72c0 5.82 1.2 10.39 3.59 13.72s5.68 4.99 9.88 4.99 7.48-1.57 9.79-4.71 3.5-7.64 3.57-13.51z" fill="#fff"/>
    <path d="m444.1 26.32v34.42c-.02 4.78-1.49 8.68-4.4 11.72s-6.86 4.74-11.85 5.11l-1.73.07c-5.42 0-9.74-1.5-12.95-4.49-3.22-2.99-4.85-7.1-4.9-12.34v-34.49h6.46v34.28c0 3.66.99 6.51 2.96 8.54s4.78 3.04 8.43 3.04 6.52-1.01 8.48-3.02c1.96-2.02 2.94-4.86 2.94-8.52v-34.32z" fill="#fff"/>
    <path d="m460.93 57.12v19.82h-6.53v-50.62h18.26c5.42 0 9.66 1.41 12.73 4.24s4.61 6.57 4.61 11.23c0 4.91-1.5 8.7-4.5 11.35s-7.3 3.98-12.9 3.98h-11.66zm0-5.46h11.73c3.49 0 6.16-.84 8.02-2.53 1.86-1.68 2.79-4.12 2.79-7.3s-.93-5.43-2.79-7.24-4.41-2.75-7.65-2.82h-12.1z" fill="#fff"/>
    <path d="m264.12 95.84h-254.12v-88.53h254.12v88.52zm-242.49-11.66h230.86v-65.21h-230.86z" fill="#f9c65d"/>
    <g fill="#fff">
      <path d="m477.9 7.31c.2 0 .29.07.29.18v1.12c0 .11-.09.18-.29.18h-2.11v7.33c0 .12-.09.18-.29.18h-1.89c-.18 0-.29-.06-.29-.18v-7.33h-2.11c-.18 0-.29-.07-.29-.18v-1.12c0-.11.11-.18.29-.18h6.68z"/>
      <path d="m489.63 7.31c.24 0 .36.08.36.22v8.55c0 .15-.13.22-.36.22h-1.69c-.24 0-.36-.08-.36-.22v-5.06h-.13l-1.8 5.08c-.05.13-.18.2-.4.2h-.89c-.22 0-.34-.07-.4-.2l-1.8-5.08h-.13v5.06c0 .15-.13.22-.36.22h-1.67c-.24 0-.36-.08-.36-.22v-8.54c0-.15.13-.22.36-.22h2.4c.22 0 .34.07.4.2l2.02 5.6 2.02-5.6c.05-.13.18-.2.4-.2h2.4z"/>
    </g>
  </svg>
);

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
        { label: 'Credit Restoration (Mesa360)', href: '/credit-repair' },
        { label: 'DIY Credit Restoration', href: '/diy-credit-repair' },
        { label: 'Credit Cards', href: '/credit-cards' },
        { label: 'Personal Loans', href: '/personal-loans' },
        { label: 'Auto Loan Refi', href: '/auto-loan-refi' },
        { label: 'Student Loan Refi', href: '/student-loan-refi' },
        { label: 'Debt Consolidation Loan', href: '/debt-consolidation-loan' },
        { label: 'Debt Relief', href: '/debt-relief' },
        { label: 'Trust & Will Plan', href: '/trust-and-will-plan' },
        { label: 'Life Insurance', href: '/life-insurance' },
      ],
    },
    {
      label: 'For Businesses',
      href: '/for-businesses',
      submenu: [
        { label: '0% Interest Business Funding', href: '/zero-interest-business-funding' },
        { label: 'Business Funding', href: '/business-funding' },
        { label: 'Business Credit Builder', href: '/business-credit-builder' },
        { label: 'Business Debt Relief', href: '/business-debt-relief' },
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
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="w-full bg-black text-white">
      {/* Top Info Bar */}
      <div className="border-b border-white/20 h-[45px]">
        <div className="max-w-[1840px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full text-xs sm:text-sm">
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
              <a href="https://www.google.com/maps/dir//5001+California+Ave+Suite+219,+Bakersfield,+CA+93309" target="_blank" rel="noopener noreferrer" className="hidden lg:flex items-center gap-2 hover:text-[#f9c65d] transition-colors">
                <MapPin className="w-4 h-4" />
                <span>5001 California Ave Suite 219 Bakersfield, California 93309</span>
              </a>
            </div>

            {/* Right: Social Icons */}
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/mesagroupco" target="_blank" rel="noopener noreferrer" className="hover:text-[#f9c65d] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/mesagroupco/" target="_blank" rel="noopener noreferrer" className="hover:text-[#f9c65d] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://x.com/mesagroupco" target="_blank" rel="noopener noreferrer" className="hover:text-[#f9c65d] transition-colors">
                <XIcon />
              </a>
              <a href="https://www.linkedin.com/company/106433329/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="hover:text-[#f9c65d] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.tiktok.com/@mesagroupco" target="_blank" rel="noopener noreferrer" className="hover:text-[#f9c65d] transition-colors">
                <TikTokIcon />
              </a>
              <a href="https://www.youtube.com/@MesaGroupCo" target="_blank" rel="noopener noreferrer" className="hover:text-[#f9c65d] transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b border-gray-800">
        <div className="max-w-[1840px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-[105px]">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img src="/mgc-mesa-group-consulting-white-svg-logo.svg.svg" alt="Mesa Group Consulting" className="h-[40px] w-auto" />
            </Link>

            {/* Divider */}
            <div className="hidden lg:block h-[40px] w-[1px] bg-gray-700 mx-6" />

            {/* Desktop Navigation - Centered */}
            <nav className="hidden lg:flex items-center justify-center gap-6 flex-1">
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

            {/* Divider before Phone */}
            <div className="hidden lg:block h-[40px] w-[1px] bg-gray-700 mx-6" />

            {/* Right Side: Phone, Client Login & Dot Grid */}
            <div className="flex items-center gap-4">
              {/* Phone Section */}
              <div className="hidden md:flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#3e3e3e] flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-400">Have Questions?</div>
                  <a href="tel:+16613103040" className="text-sm font-semibold text-white hover:text-[#f9c65d] transition-colors">
                    (661) 310-3040
                  </a>
                </div>
              </div>

              {/* Divider before Client Login */}
              <div className="hidden lg:block h-[40px] w-[1px] bg-gray-700 mx-2" />

              {/* Client Login Link */}
              <a
                href="https://portal.mesagroupconsulting.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex text-sm font-medium text-white hover:text-[#f9c65d] transition-colors"
              >
                Client Login
              </a>

              {/* Divider before Dot Grid */}
              <div className="hidden lg:block h-[40px] w-[1px] bg-gray-700 mx-2" />

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
              <a href="tel:+16613103040" className="flex items-center gap-3 px-4 py-3 text-white hover:text-[#f9c65d] transition-colors">
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
