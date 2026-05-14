import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer, AnimatedSection } from '../components/layout/PageContainer';
import { PrimaryButton } from '../components/ui/Button';
import { AlertCircle } from 'lucide-react';

export const InvalidPage = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <AnimatedSection>
          <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center text-red-500 mx-auto mb-6">
            <AlertCircle size={40} />
          </div>
          <h1 className="text-2xl font-bold text-dark mb-3">Page Not Found</h1>
          <p className="text-secondary text-sm mb-10">
            The page you are looking for doesn't exist or you've scanned an invalid QR code.
          </p>
          <PrimaryButton onClick={() => navigate('/')}>
            Go to Home
          </PrimaryButton>
        </AnimatedSection>
      </div>
    </PageContainer>
  );
};
