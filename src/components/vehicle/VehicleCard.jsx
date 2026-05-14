import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const VehicleCard = ({ vehicle, isSelected, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      whileTap={{ scale: vehicle.active ? 0.95 : 1 }}
      onClick={() => vehicle.active && onClick(vehicle)}
      className={`relative p-3 rounded-2xl border-2 cursor-pointer transition-all flex flex-col h-full overflow-hidden select-none ${
        !vehicle.active 
          ? 'opacity-40 grayscale cursor-not-allowed border-gray-100 bg-gray-50' 
          : isSelected 
            ? 'border-primary bg-orange-50/50 shadow-[0_8px_20px_-8px_rgba(245,130,32,0.3)]' 
            : 'border-gray-100/80 bg-white hover:border-gray-200 hover:shadow-md shadow-sm'
      }`}
    >
      <div className="w-full aspect-[4/3] bg-white rounded-xl mb-3 overflow-hidden flex items-center justify-center p-2 relative">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-100 animate-pulse rounded-xl" />
        )}
        <img 
          src={vehicle.image} 
          alt={vehicle.name} 
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-contain transition-all duration-500 ease-out ${
            imageLoaded ? 'opacity-100' : 'opacity-0 scale-95'
          } ${isSelected ? 'scale-110 drop-shadow-md' : 'scale-100'}`}
          onError={(e) => { 
            e.target.onerror = null; 
            setImageLoaded(true);
            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdib3g9IjAgMCAxMDAgMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkeT0iLjNlbSIgZmlsbD0iI2FhYSIgZm9udC1zaXplPSIxMiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Tm8gSW1hZ2U8L3RleHQ+PC9zdmc+';
          }}
        />
      </div>
      
      <div className="mt-auto flex flex-col items-center text-center px-1">
        <h3 className={`font-extrabold text-[13px] leading-snug mb-1 line-clamp-2 min-h-[36px] flex items-center justify-center transition-colors ${isSelected ? 'text-primary' : 'text-dark'}`}>
          {vehicle.name}
        </h3>
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{vehicle.category}</p>
      </div>
      
      {isSelected && (
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-md z-10"
        >
          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
      )}
    </motion.div>
  );
};
