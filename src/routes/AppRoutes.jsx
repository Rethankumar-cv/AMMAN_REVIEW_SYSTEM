import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { HomePage } from '../pages/HomePage';
import { VehicleSelectionPage } from '../pages/VehicleSelectionPage';
import { RatingSelectionPage } from '../pages/RatingSelectionPage';
import { ExperienceSelectionPage } from '../pages/ExperienceSelectionPage';
import { ReviewSuggestionsPage } from '../pages/ReviewSuggestionsPage';
import { InvalidPage } from '../pages/InvalidPage';
import { ReviewProvider } from '../context/ReviewContext';

export const AppRoutes = () => {
  const location = useLocation();
  
  return (
    <ReviewProvider>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/review" element={<VehicleSelectionPage />} />
          <Route path="/review/vehicle" element={<VehicleSelectionPage />} />
          <Route path="/review/rating" element={<RatingSelectionPage />} />
          <Route path="/review/experience" element={<ExperienceSelectionPage />} />
          <Route path="/review/suggestions" element={<ReviewSuggestionsPage />} />
          <Route path="*" element={<InvalidPage />} />
        </Routes>
      </AnimatePresence>
    </ReviewProvider>
  );
};
