import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, CheckCircle2 } from 'lucide-react';

export const ReviewSuggestionCard = ({ review, onCopy, isSelected }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(review).then(() => {
      setCopied(true);
      onCopy(review);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleCopy}
      className={`p-5 rounded-2xl border-2 shadow-sm relative cursor-pointer transition-all select-none ${
        isSelected ? 'border-primary bg-orange-50/80 shadow-[0_8px_20px_-8px_rgba(245,130,32,0.3)]' : 'border-gray-100 bg-white hover:border-gray-200 hover:shadow-md'
      }`}
    >
      <p className={`leading-relaxed text-[15px] pr-10 font-medium transition-colors ${isSelected ? 'text-dark' : 'text-gray-600'}`}>
        "{review}"
      </p>
      
      <div 
        className={`absolute top-4 right-4 p-2.5 rounded-xl transition-all duration-300 ${
          copied ? 'bg-green-100 text-green-600 scale-110 shadow-sm' : isSelected ? 'bg-orange-100 text-primary shadow-sm' : 'bg-gray-50 text-gray-400'
        }`}
      >
        {copied ? <CheckCircle2 size={20} strokeWidth={2.5} /> : <Copy size={20} strokeWidth={2.5} />}
      </div>
    </motion.div>
  );
};
