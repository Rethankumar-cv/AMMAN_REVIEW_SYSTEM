import React from 'react';
import { Logo } from '../common/Logo';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export const Header = ({ showBack = false, title = '' }) => {
  const navigate = useNavigate();
  
  return (
    <header className="px-4 py-3 sm:px-5 sm:py-4 flex items-center justify-between bg-white/90 backdrop-blur-md sticky top-0 z-40 border-b border-gray-100/50 shadow-sm pt-safe">
      {showBack ? (
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate(-1)}
          className="w-11 h-11 -ml-2 rounded-full flex items-center justify-center hover:bg-gray-50 active:bg-gray-100 transition-colors"
          aria-label="Go back"
        >
          <ChevronLeft className="text-dark" size={22} strokeWidth={2.5} />
        </motion.button>
      ) : (
        <div className="w-11 h-11 flex-shrink-0"></div>
      )}
      
      {title ? (
        <h1 className="text-[17px] font-bold text-dark tracking-tight leading-none text-center flex-1">{title}</h1>
      ) : (
        <div className="flex-1 flex justify-center">
          <Logo className="w-28 sm:w-32" />
        </div>
      )}
      
      <div className="w-11 h-11 flex-shrink-0"></div>
    </header>
  );
};
