import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer, AnimatedSection } from '../components/layout/PageContainer';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { PrimaryButton } from '../components/ui/Button';
import { Logo } from '../components/common/Logo';
import { Star, ThumbsUp, MessageSquare } from 'lucide-react';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <AnimatedSection className="w-full max-w-[280px] mb-10">
          <Logo className="w-full" showText={true} />
        </AnimatedSection>
        
        <AnimatedSection delay={0.1} className="mb-8">
          <h1 className="text-3xl font-bold text-dark mb-4">How was our service?</h1>
          <p className="text-secondary text-sm px-4">
            Thank you for choosing Amman Earth Movers. We value your feedback to help us serve you better.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="w-full flex justify-center gap-6 mb-12">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-primary mb-2">
              <Star size={24} />
            </div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Rate</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-primary mb-2">
              <MessageSquare size={24} />
            </div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Review</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-primary mb-2">
              <ThumbsUp size={24} />
            </div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Improve</span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="w-full mt-auto">
          <PrimaryButton 
            onClick={() => navigate('/review')}
            className="py-5 text-lg"
          >
            Start Your Review
          </PrimaryButton>
        </AnimatedSection>
      </div>
      <Footer />
    </PageContainer>
  );
};
