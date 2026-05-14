import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer, AnimatedSection, SectionTitle } from '../components/layout/PageContainer';
import { Header } from '../components/layout/Header';
import { PrimaryButton } from '../components/ui/Button';
import { useReviewContext } from '../context/ReviewContext';
import { SelectionProgressBar } from '../components/ui/SelectionProgressBar';
import { ExperienceSelector } from '../components/review/ExperienceSelector';
import { BottomActionBar } from '../components/layout/BottomActionBar';

export const ExperienceSelectionPage = () => {
  const navigate = useNavigate();
  const { reviewState, toggleExperience } = useReviewContext();

  useEffect(() => {
    if (!reviewState.rating) {
      navigate('/review/rating');
    }
  }, [reviewState.rating, navigate]);

  const handleNext = () => {
    navigate('/review/suggestions');
  };

  return (
    <PageContainer className="bg-gray-50">
      <Header showBack={true} title="Experience Details" />
      <SelectionProgressBar step={3} totalSteps={4} />
      
      <div className="flex-1 flex flex-col p-6 overflow-y-auto">
        <AnimatedSection>
          <SectionTitle 
            title="What did you like?" 
            subtitle="Select all that apply to your experience."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="flex-1 mt-2">
          <ExperienceSelector 
            selectedExperiences={reviewState.experiences}
            onToggle={toggleExperience}
          />
        </AnimatedSection>
      </div>

      <BottomActionBar>
        <PrimaryButton 
          onClick={handleNext}
          disabled={reviewState.experiences.length === 0}
        >
          Continue
        </PrimaryButton>
      </BottomActionBar>
    </PageContainer>
  );
};
