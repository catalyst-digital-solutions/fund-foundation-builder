import React from 'react';
import mesaGroupLogoBlack from '@/assets/mesa-group-logo-black.webp';
import mesaGroupLogoWhite from '@/assets/mesa-group-logo-white.webp';

interface PoweredByMesaGroupProps {
  variant?: 'light' | 'dark'; // 'light' = dark logo for light backgrounds, 'dark' = white logo for dark backgrounds
  className?: string;
}

const PoweredByMesaGroup: React.FC<PoweredByMesaGroupProps> = ({ 
  variant = 'light',
  className = ''
}) => {
  const textColor = variant === 'dark' ? 'text-white' : '';
  const textStyle = variant === 'light' ? { color: '#4B5462' } : {};
  const logo = variant === 'dark' ? mesaGroupLogoWhite : mesaGroupLogoBlack;
  const shadow = variant === 'dark' ? 'drop-shadow-md' : '';

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <span className={`text-sm ${textColor} ${shadow}`} style={textStyle}>Powered by</span>
      <img src={logo} alt="Mesa Group Capital" className="h-7" />
    </div>
  );
};

export default PoweredByMesaGroup;
