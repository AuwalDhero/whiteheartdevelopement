import React from 'react';
import logo from './assets/logo.png';  // Import the image from the new assets folder

const Logo: React.FC<{ className?: string }> = ({ className = "h-12" }) => {
  return (
    <img 
      src={logo} 
      alt="White Heart Development Initiative" 
      className={`w-auto ${className}`} 
    />
  );
};

export default Logo;