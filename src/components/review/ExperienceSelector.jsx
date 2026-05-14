import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  { id: 'timely', label: 'Timely completion', icon: '⏱️' },
  { id: 'professional', label: 'Professional work', icon: '👷' },
  { id: 'condition', label: 'Vehicle condition', icon: '✨' },
  { id: 'coordination', label: 'Easy coordination', icon: '🤝' },
  { id: 'reliable', label: 'Reliable service', icon: '🛡️' },
  { id: 'fast', label: 'Fast response', icon: '⚡' },
];

export const ExperienceSelector = ({ selectedExperiences, onToggle }) => {
  return (
    <div className="grid grid-cols-2 gap-3.5">
      {experiences.map((exp, index) => {
        const isSelected = selectedExperiences.includes(exp.id);
        return (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05, type: "spring", stiffness: 300, damping: 25 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onToggle(exp.id)}
            className={`p-4 rounded-2xl border-2 flex flex-col items-center text-center gap-3 cursor-pointer transition-all select-none ${
              isSelected ? 'border-primary bg-orange-50 shadow-md' : 'border-gray-100 bg-white hover:border-gray-200 shadow-sm'
            }`}
          >
            <div className={`text-3xl transition-transform ${isSelected ? 'scale-110' : ''}`}>{exp.icon}</div>
            <div className={`font-bold text-[13px] leading-tight transition-colors ${isSelected ? 'text-primary' : 'text-dark'}`}>
              {exp.label}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
