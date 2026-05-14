import React from 'react';
import { motion } from 'framer-motion';

const ratings = [
  { id: 'excellent', label: 'Excellent', emoji: '🤩', color: 'bg-green-100 text-green-700 border-green-200' },
  { id: 'good', label: 'Good', emoji: '🙂', color: 'bg-blue-100 text-blue-700 border-blue-200' },
  { id: 'average', label: 'Average', emoji: '😐', color: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
  { id: 'poor', label: 'Need Improvement', emoji: '😞', color: 'bg-red-100 text-red-700 border-red-200' },
];

export const RatingSelector = ({ selectedRating, onSelect }) => {
  return (
    <div className="flex flex-col gap-3.5">
      {ratings.map((rating, index) => {
        const isSelected = selectedRating === rating.id;
        return (
          <motion.div
            key={rating.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1, type: "spring", stiffness: 300, damping: 25 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onSelect(rating.id)}
            className={`p-4 rounded-2xl border-2 flex items-center gap-4 cursor-pointer transition-all select-none ${
              isSelected ? `border-primary bg-orange-50 shadow-md` : 'border-gray-100 bg-white hover:border-gray-200 shadow-sm'
            }`}
          >
            <div className={`w-14 h-14 rounded-full flex items-center justify-center text-3xl shadow-inner transition-transform ${isSelected ? 'scale-110 bg-white' : rating.color.split(' ')[0]}`}>
              {rating.emoji}
            </div>
            <div className={`flex-1 font-extrabold text-lg transition-colors ${isSelected ? 'text-primary' : 'text-dark'}`}>
              {rating.label}
            </div>
            {isSelected && (
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-7 h-7 bg-primary rounded-full flex items-center justify-center shadow-md"
              >
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};
