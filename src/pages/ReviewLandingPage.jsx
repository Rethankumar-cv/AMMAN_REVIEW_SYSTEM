import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer, AnimatedSection, SectionTitle } from '../components/layout/PageContainer';
import { Header } from '../components/layout/Header';
import { PrimaryButton, SecondaryButton } from '../components/ui/Button';
import { Star } from 'lucide-react';

export const ReviewLandingPage = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <Header showBack={true} title="Your Feedback" />
      
      <div className="flex-1 p-6 flex flex-col items-center text-center justify-center">
        <AnimatedSection className="w-full">
          <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Star size={40} className="text-primary fill-primary" />
          </div>
          <h2 className="text-2xl font-bold text-dark mb-4">Review Process Placeholder</h2>
          <p className="text-secondary mb-10 text-sm leading-relaxed">
            This is a placeholder page for the review process. 
            The actual logic for rating selection and review suggestions will be implemented here.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="w-full space-y-4 mt-auto">
          <PrimaryButton onClick={() => alert('Submit logic will go here')}>
            Post Review
          </PrimaryButton>
          <SecondaryButton onClick={() => navigate('/')}>
            Back to Home
          </SecondaryButton>
        </AnimatedSection>
      </div>
    </PageContainer>
  );
};
