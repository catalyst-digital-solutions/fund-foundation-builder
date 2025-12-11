import React from 'react';
import supermoneyLogo from '@/assets/supermoney-logo.svg';

interface PoweredBySuperMoneyProps {
  variant?: 'light' | 'dark'; // 'light' = dark text for light backgrounds, 'dark' = white text for dark backgrounds
  className?: string;
}

const PoweredBySuperMoney: React.FC<PoweredBySuperMoneyProps> = ({ 
  variant = 'light',
  className = ''
}) => {
  const textColor = variant === 'dark' ? 'text-white' : '';
  const textStyle = variant === 'light' ? { color: '#4B5462' } : {};
  const logoFilter = variant === 'dark' ? 'brightness-0 invert' : '';
  const shadow = variant === 'dark' ? 'drop-shadow-md' : '';

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <span className={`text-sm ${textColor} ${shadow}`} style={textStyle}>Powered by</span>
      <img src={supermoneyLogo} alt="SuperMoney" className={`h-5 ${logoFilter}`} />
    </div>
  );
};

export default PoweredBySuperMoney;
