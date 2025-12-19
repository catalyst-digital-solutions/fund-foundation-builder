import React from 'react';
import smartcreditLogo from '@/assets/smartcredit-logo.png';
import smartcreditLogoLight from '@/assets/smartcredit-logo-light.png';

interface PoweredBySmartCreditProps {
  variant?: 'light' | 'dark'; // 'light' = dark text for light backgrounds, 'dark' = white text for dark backgrounds
  className?: string;
}

const PoweredBySmartCredit: React.FC<PoweredBySmartCreditProps> = ({ 
  variant = 'light',
  className = ''
}) => {
  const textColor = variant === 'dark' ? 'text-white' : 'text-gray-500';
  const logo = variant === 'dark' ? smartcreditLogoLight : smartcreditLogo;

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <span className={`text-sm ${textColor}`}>Powered by</span>
      <img src={logo} alt="SmartCredit" className="h-5" />
    </div>
  );
};

export default PoweredBySmartCredit;
