import React, { createContext, useContext, useState } from 'react';

const ReviewContext = createContext();

export const useReviewContext = () => useContext(ReviewContext);

export const ReviewProvider = ({ children }) => {
  const [reviewState, setReviewState] = useState({
    vehicle: null,
    rating: null,
    experiences: [],
  });

  const setVehicle = (vehicle) => setReviewState(prev => ({ ...prev, vehicle }));
  const setRating = (rating) => setReviewState(prev => ({ ...prev, rating }));
  const toggleExperience = (exp) => setReviewState(prev => {
    const isSelected = prev.experiences.includes(exp);
    if (isSelected) {
      return { ...prev, experiences: prev.experiences.filter(e => e !== exp) };
    } else {
      return { ...prev, experiences: [...prev.experiences, exp] };
    }
  });

  const resetReview = () => setReviewState({ vehicle: null, rating: null, experiences: [] });

  return (
    <ReviewContext.Provider value={{
      reviewState,
      setVehicle,
      setRating,
      toggleExperience,
      resetReview
    }}>
      {children}
    </ReviewContext.Provider>
  );
};
