import React from 'react';
import { VehicleCard } from './VehicleCard';
import { motion } from 'framer-motion';

export const VehicleSelectionGrid = ({ vehicles, selectedVehicleId, onSelect }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {vehicles.map((vehicle, index) => (
        <motion.div
          key={vehicle.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
        >
          <VehicleCard
            vehicle={vehicle}
            isSelected={selectedVehicleId === vehicle.id}
            onClick={onSelect}
          />
        </motion.div>
      ))}
    </div>
  );
};
