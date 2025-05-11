
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/a927f6ae-7824-4099-b902-f9bff45816a1.png" 
        alt="Tour Der Wang Logo" 
        className="h-10 w-auto"
      />
    </div>
  );
};

export default Logo;
