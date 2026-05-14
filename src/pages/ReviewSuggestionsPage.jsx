import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer, AnimatedSection, SectionTitle } from '../components/layout/PageContainer';
import { Header } from '../components/layout/Header';
import { PrimaryButton, SecondaryButton } from '../components/ui/Button';
import { useReviewContext } from '../context/ReviewContext';
import { SelectionProgressBar } from '../components/ui/SelectionProgressBar';
import { Sparkles, ExternalLink, RefreshCw } from 'lucide-react';
import { BottomActionBar } from '../components/layout/BottomActionBar';
import { ReviewTemplateManager } from '../utils/ReviewTemplateManager';
import { ReviewSuggestionCard } from '../components/review/ReviewSuggestionCard';
import { ToastNotification } from '../components/ui/ToastNotification';

export const ReviewSuggestionsPage = () => {
  const navigate = useNavigate();
  const { reviewState, resetReview } = useReviewContext();
  
  const [suggestions, setSuggestions] = useState([]);
  const [copiedReview, setCopiedReview] = useState(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (!reviewState.experiences.length || !reviewState.vehicle) {
      navigate('/review/experience');
      return;
    }
    
    generateSuggestions();
  }, [reviewState, navigate]);

  const generateSuggestions = () => {
    const newSuggestions = ReviewTemplateManager.getTemplates(
      reviewState.vehicle?.name || "Equipment",
      reviewState.rating || "good",
      reviewState.experiences || [],
      3
    );
    setSuggestions(newSuggestions);
    setCopiedReview(null);
  };

  const handleCopy = (review) => {
    setCopiedReview(review);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleRestart = () => {
    resetReview();
    navigate('/');
  };

  return (
    <PageContainer className="bg-gray-50 pb-36">
      <Header showBack={true} title="Your Review" />
      <SelectionProgressBar step={4} totalSteps={4} />
      
      <div className="flex-1 flex flex-col p-6 overflow-y-auto">
        <AnimatedSection>
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-500 mx-auto mb-4 shadow-sm">
            <Sparkles size={32} />
          </div>
          <SectionTitle 
            className="text-center mb-6"
            title="Ready to Post!" 
            subtitle="Tap a review below to copy it, then open Google to paste."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="flex flex-col gap-4">
          {suggestions.map((suggestion, index) => (
            <ReviewSuggestionCard 
              key={index} 
              review={suggestion} 
              onCopy={handleCopy}
              isSelected={copiedReview === suggestion}
            />
          ))}
        </AnimatedSection>
        
        <AnimatedSection delay={0.3} className="mt-6 flex justify-center">
           <button 
             onClick={generateSuggestions}
             className="flex items-center gap-2 text-sm font-semibold text-secondary hover:text-primary transition-colors py-2 px-4 rounded-full bg-white border border-gray-200 shadow-sm"
           >
             <RefreshCw size={16} />
             Show different options
           </button>
        </AnimatedSection>
      </div>

      <ToastNotification 
        message="Review copied! Ready to paste." 
        isVisible={showToast} 
      />

      <BottomActionBar className="flex-col gap-3 flex">
        <PrimaryButton 
          icon={ExternalLink} 
          disabled={!copiedReview}
          onClick={() => window.open('https://g.page/r/CbQeAW_pSUmQEAE/review', '_blank', 'noopener,noreferrer')}
        >
          Open Google Review
        </PrimaryButton>
        <SecondaryButton onClick={handleRestart}>
          Start Over
        </SecondaryButton>
      </BottomActionBar>
    </PageContainer>
  );
};
