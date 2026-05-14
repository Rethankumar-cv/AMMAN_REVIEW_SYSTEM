import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer, AnimatedSection } from '../components/layout/PageContainer';
import { Footer } from '../components/layout/Footer';
import { PrimaryButton } from '../components/ui/Button';
import { Logo } from '../components/common/Logo';
import { Star, ThumbsUp, MessageSquare } from 'lucide-react';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <div className="flex-1 flex flex-col items-center justify-center p-5 text-center">
        <AnimatedSection className="w-full max-w-[220px] mb-8 sm:mb-10">
          <Logo className="w-full" />
        </AnimatedSection>
        
        <AnimatedSection delay={0.1} className="mb-8 w-full">
          <h1 className="text-[26px] sm:text-3xl font-extrabold text-dark mb-2.5 leading-tight">How was our service?</h1>
          <p className="text-secondary text-[14px] leading-relaxed px-2">
            Thank you for choosing Amman Earth Movers. We value your feedback to help us serve you better.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="w-full flex justify-center gap-5 sm:gap-6 mb-10">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-primary mb-2 shadow-sm">
              <Star size={22} fill="currentColor" />
            </div>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Rate</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-primary mb-2 shadow-sm">
              <MessageSquare size={22} fill="currentColor" />
            </div>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Review</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-primary mb-2 shadow-sm">
              <ThumbsUp size={22} fill="currentColor" />
            </div>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Improve</span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="w-full mt-auto mb-4">
          <PrimaryButton 
            onClick={() => navigate('/review')}
            className="py-4 shadow-lg shadow-orange-500/20"
          >
            Start Your Review
          </PrimaryButton>
        </AnimatedSection>
      </div>
      <Footer />
    </PageContainer>
  );
};
