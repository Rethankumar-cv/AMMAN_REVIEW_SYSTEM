import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export const PageContainer = ({ children, className = '' }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.98 }}
      transition={{ type: "tween", ease: "circOut", duration: 0.4 }}
      className={`min-h-[100dvh] flex flex-col max-w-md mx-auto bg-white shadow-2xl relative overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedSection = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 25, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const SectionTitle = ({ title, subtitle, className = '' }) => (
  <div className={`mb-6 ${className}`}>
    <h2 className="text-[26px] leading-tight font-extrabold tracking-tight text-dark mb-1.5">{title}</h2>
    {subtitle && <p className="text-[15px] leading-snug text-secondary font-medium">{subtitle}</p>}
  </div>
);
