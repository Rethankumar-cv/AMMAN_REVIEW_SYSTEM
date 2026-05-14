import React from 'react';
import { motion } from 'framer-motion';

export const SelectionProgressBar = ({ step, totalSteps }) => {
  const progress = (step / totalSteps) * 100;

  return (
    <div className="w-full bg-gray-100 h-1.5 mb-2">
      <motion.div 
        className="h-full bg-primary"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};
