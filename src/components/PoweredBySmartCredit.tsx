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
  const textColor = variant === 'dark' ? 'text-gray-200' : 'text-gray-500';
  const logo = variant === 'dark' ? smartcreditLogoLight : smartcreditLogo;
  const opacity = variant === 'dark' ? 'opacity-80' : 'opacity-70';

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <span className={`text-sm ${textColor}`}>Powered by</span>
      <img src={logo} alt="SmartCredit" className={`h-5 ${opacity}`} />
    </div>
  );
};

export default PoweredBySmartCredit;
