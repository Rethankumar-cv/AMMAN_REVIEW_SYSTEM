import React from 'react';
import { motion } from 'framer-motion';

export const BottomActionBar = ({ children, className = '' }) => {
  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.2 }}
      className={`p-5 bg-white/95 backdrop-blur-md border-t border-gray-100 pb-safe sticky bottom-0 z-40 shadow-[0_-10px_30px_-10px_rgba(0,0,0,0.1)] ${className}`}
    >
      {/* Safe area bottom padding is crucial for modern iPhones */}
      <div className="pb-2">
        {children}
      </div>
    </motion.div>
  );
};
