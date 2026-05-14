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
import { motion } from 'framer-motion';

export const ReviewSuggestionsPage = () => {
  const navigate = useNavigate();
  const { reviewState, resetReview } = useReviewContext();
  
  const [suggestions, setSuggestions] = useState([]);
  const [copiedReview, setCopiedReview] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    if (!reviewState.experiences.length || !reviewState.vehicle) {
      navigate('/review/experience');
      return;
    }
    
    generateSuggestions();
  }, [reviewState, navigate]);

  const generateSuggestions = () => {
    setIsRefreshing(true);
    const newSuggestions = ReviewTemplateManager.getTemplates(
      reviewState.vehicle?.name || "Equipment",
      reviewState.rating || "good",
      reviewState.experiences || [],
      3
    );
    
    // Simulate a tiny delay for the refresh animation to feel natural
    setTimeout(() => {
      setSuggestions(newSuggestions);
      setCopiedReview(null);
      setIsRefreshing(false);
    }, 400);
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
    <PageContainer className="bg-gray-50 pb-[180px]">
      <Header showBack={true} title="Your Review" />
      <SelectionProgressBar step={4} totalSteps={4} />
      
      <div className="flex-1 flex flex-col p-4 sm:p-5 overflow-y-auto">
        <AnimatedSection className="flex flex-col items-center">
          <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-3 shadow-sm">
            <Sparkles size={28} />
          </div>
          <SectionTitle 
            className="text-center mb-4"
            title="Ready to Post!" 
            subtitle="Tap a review below to copy it."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="flex flex-col gap-3.5 relative">
          <motion.div
            animate={{ opacity: isRefreshing ? 0.5 : 1, y: isRefreshing ? 5 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-3.5"
          >
            {suggestions.map((suggestion, index) => (
              <ReviewSuggestionCard 
                key={index + suggestion.substring(0, 10)} // Force re-render on new suggestions for animation
                review={suggestion} 
                onCopy={handleCopy}
                isSelected={copiedReview === suggestion}
              />
            ))}
          </motion.div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2} className="mt-5 flex justify-center pb-4">
           <motion.button 
             whileTap={{ scale: 0.95 }}
             onClick={generateSuggestions}
             disabled={isRefreshing}
             className="flex items-center gap-2 text-[14px] font-bold text-secondary hover:text-primary transition-colors py-2.5 px-5 rounded-full bg-white border border-gray-200 shadow-sm active:bg-gray-50 disabled:opacity-50"
           >
             <motion.div animate={{ rotate: isRefreshing ? 360 : 0 }} transition={{ duration: 0.5, ease: "linear", repeat: isRefreshing ? Infinity : 0 }}>
               <RefreshCw size={16} strokeWidth={2.5} />
             </motion.div>
             Show different options
           </motion.button>
        </AnimatedSection>
      </div>

      <ToastNotification 
        message="Review copied! Ready to paste." 
        isVisible={showToast} 
      />

      <BottomActionBar className="flex-col gap-2.5 flex">
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
