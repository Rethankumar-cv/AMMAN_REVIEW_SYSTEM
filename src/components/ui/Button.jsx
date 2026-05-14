import React from 'react';
import { motion } from 'framer-motion';

export const PrimaryButton = ({ children, onClick, className = '', icon: Icon, disabled = false }) => {
  return (
    <motion.button
      whileTap={!disabled ? { scale: 0.97 } : {}}
      onClick={onClick}
      disabled={disabled}
      className={`w-full min-h-[50px] flex items-center justify-center gap-2 bg-primary text-white font-bold text-[16px] rounded-[14px] transition-all select-none
        ${disabled 
          ? 'opacity-40 cursor-not-allowed bg-gray-300 shadow-none' 
          : 'hover:bg-primary-hover active:bg-orange-600 shadow-md cursor-pointer'
        } ${className}`}
    >
      {Icon && <Icon size={20} strokeWidth={2.5} />}
      {children}
    </motion.button>
  );
};

export const SecondaryButton = ({ children, onClick, className = '', icon: Icon, disabled = false }) => {
  return (
    <motion.button
      whileTap={!disabled ? { scale: 0.97 } : {}}
      onClick={onClick}
      disabled={disabled}
      className={`w-full min-h-[50px] flex items-center justify-center gap-2 bg-white text-secondary font-bold text-[16px] rounded-[14px] border-2 transition-all select-none
        ${disabled 
          ? 'opacity-40 cursor-not-allowed border-gray-100 text-gray-400' 
          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50 active:bg-gray-100 cursor-pointer'
        } ${className}`}
    >
      {Icon && <Icon size={20} strokeWidth={2.5} />}
      {children}
    </motion.button>
  );
};
