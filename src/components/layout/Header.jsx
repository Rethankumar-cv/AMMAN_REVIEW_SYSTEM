import React from 'react';
import { Logo } from '../common/Logo';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export const Header = ({ showBack = false, title = '' }) => {
  const navigate = useNavigate();
  
  return (
    <header className="px-5 py-4 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-gray-100/50 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
      {showBack ? (
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate(-1)}
          className="w-10 h-10 -ml-2 rounded-full flex items-center justify-center hover:bg-gray-100 active:bg-gray-200 transition-colors"
        >
          <ChevronLeft className="text-dark" size={24} strokeWidth={2.5} />
        </motion.button>
      ) : (
        <div className="w-10"></div>
      )}
      
      {title ? (
        <h1 className="text-lg font-bold text-dark tracking-tight">{title}</h1>
      ) : (
        <Logo className="w-32" />
      )}
      
      <div className="w-10"></div>
    </header>
  );
};
