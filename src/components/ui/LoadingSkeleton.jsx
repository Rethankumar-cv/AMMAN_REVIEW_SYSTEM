import React from 'react';
import { motion } from 'framer-motion';

export const LoadingSkeleton = ({ className = '' }) => {
  return (
    <div className={`animate-pulse bg-gray-200 rounded-xl ${className}`}></div>
  );
};

export const CardSkeleton = () => {
  return (
    <div className="p-4 rounded-2xl border-2 border-gray-100 bg-white">
      <div className="flex flex-col items-center gap-3">
        <LoadingSkeleton className="w-16 h-16 rounded-full" />
        <div className="flex flex-col items-center gap-2 w-full">
          <LoadingSkeleton className="h-4 w-3/4 rounded" />
          <LoadingSkeleton className="h-3 w-1/2 rounded" />
        </div>
      </div>
    </div>
  );
};
