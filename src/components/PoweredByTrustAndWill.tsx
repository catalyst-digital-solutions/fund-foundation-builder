import React from 'react';
import trustAndWillLogo from '@/assets/trust-and-will-logo.webp';

interface PoweredByTrustAndWillProps {
  variant?: 'light' | 'dark'; // 'light' = dark text for light backgrounds, 'dark' = white text for dark backgrounds
  className?: string;
}

const PoweredByTrustAndWill: React.FC<PoweredByTrustAndWillProps> = ({ 
  variant = 'light',
  className = ''
}) => {
  const textColor = variant === 'dark' ? 'text-white' : '';
  const textStyle = variant === 'light' ? { color: '#4B5462' } : {};
  const shadow = variant === 'dark' ? 'drop-shadow-md' : '';

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <span className={`text-sm ${textColor} ${shadow}`} style={textStyle}>Powered by</span>
      <img src={trustAndWillLogo} alt="Trust & Will" className="h-5" />
    </div>
  );
};

export default PoweredByTrustAndWill;
