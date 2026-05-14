import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export const PageContainer = ({ children, className = '' }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`min-h-[100svh] flex flex-col max-w-md mx-auto bg-white shadow-2xl relative overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedSection = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const SectionTitle = ({ title, subtitle, className = '' }) => (
  <div className={`mb-4 sm:mb-5 ${className}`}>
    <h2 className="text-[22px] sm:text-[24px] leading-tight font-extrabold tracking-tight text-dark mb-1">{title}</h2>
    {subtitle && <p className="text-[13px] sm:text-[14px] leading-snug text-secondary font-medium">{subtitle}</p>}
  </div>
);
