import React from 'react';
import { motion } from 'framer-motion';

export const BottomActionBar = ({ children, className = '' }) => {
  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 30, delay: 0.1 }}
      className={`p-4 bg-white/95 backdrop-blur-md border-t border-gray-100 sticky bottom-0 z-40 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)] pb-safe ${className}`}
    >
      <div className="w-full flex flex-col gap-2.5">
        {children}
      </div>
    </motion.div>
  );
};
