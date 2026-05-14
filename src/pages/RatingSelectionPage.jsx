import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer, AnimatedSection, SectionTitle } from '../components/layout/PageContainer';
import { Header } from '../components/layout/Header';
import { PrimaryButton } from '../components/ui/Button';
import { useReviewContext } from '../context/ReviewContext';
import { SelectionProgressBar } from '../components/ui/SelectionProgressBar';
import { RatingSelector } from '../components/review/RatingSelector';
import { BottomActionBar } from '../components/layout/BottomActionBar';

export const RatingSelectionPage = () => {
  const navigate = useNavigate();
  const { reviewState, setRating } = useReviewContext();

  useEffect(() => {
    if (!reviewState.vehicle) {
      navigate('/review/vehicle');
    }
  }, [reviewState.vehicle, navigate]);

  const handleNext = () => {
    if (reviewState.rating) {
      navigate('/review/experience');
    }
  };

  return (
    <PageContainer className="bg-gray-50">
      <Header showBack={true} title="Rate Service" />
      <SelectionProgressBar step={2} totalSteps={4} />
      
      <div className="flex-1 flex flex-col p-6 overflow-y-auto">
        <AnimatedSection>
          <SectionTitle 
            title="How was the service?" 
            subtitle={`Rate your experience with our ${reviewState.vehicle?.name}.`}
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="flex-1 mt-4">
          <RatingSelector 
            selectedRating={reviewState.rating}
            onSelect={setRating}
          />
        </AnimatedSection>
      </div>

      <BottomActionBar>
        <PrimaryButton 
          onClick={handleNext}
          disabled={!reviewState.rating}
        >
          Continue
        </PrimaryButton>
      </BottomActionBar>
    </PageContainer>
  );
};
