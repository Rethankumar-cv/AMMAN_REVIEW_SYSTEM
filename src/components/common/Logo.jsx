import React from 'react';

export const Logo = ({ className = "w-32" }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <img src="/logo/logo.png" alt="Amman Earth Movers Logo" className="w-full h-auto object-contain" />
    </div>
  );
};
