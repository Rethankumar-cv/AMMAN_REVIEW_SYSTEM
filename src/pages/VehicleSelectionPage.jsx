import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer, AnimatedSection, SectionTitle } from '../components/layout/PageContainer';
import { Header } from '../components/layout/Header';
import { VehicleSelectionGrid } from '../components/vehicle/VehicleSelectionGrid';
import { PrimaryButton } from '../components/ui/Button';
import { vehicles } from '../data/vehicles';
import { useReviewContext } from '../context/ReviewContext';
import { SelectionProgressBar } from '../components/ui/SelectionProgressBar';
import { BottomActionBar } from '../components/layout/BottomActionBar';

export const VehicleSelectionPage = () => {
  const navigate = useNavigate();
  const { reviewState, setVehicle } = useReviewContext();

  const handleNext = () => {
    if (reviewState.vehicle) {
      navigate('/review/rating');
    }
  };

  return (
    <PageContainer className="bg-gray-50">
      <Header showBack={true} title="Select Service" />
      <SelectionProgressBar step={1} totalSteps={4} />
      
      <div className="flex-1 flex flex-col p-6 overflow-y-auto">
        <AnimatedSection>
          <SectionTitle 
            title="What did you use?" 
            subtitle="Select the vehicle/service you used for your project."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="flex-1 pb-4">
          <VehicleSelectionGrid 
            vehicles={vehicles}
            selectedVehicleId={reviewState.vehicle?.id}
            onSelect={setVehicle}
          />
        </AnimatedSection>
      </div>

      <BottomActionBar>
        <PrimaryButton 
          onClick={handleNext}
          disabled={!reviewState.vehicle}
        >
          Continue
        </PrimaryButton>
      </BottomActionBar>
    </PageContainer>
  );
};
