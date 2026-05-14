import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="mt-auto py-6 text-center border-t border-gray-100 bg-gray-50 pb-8">
      <div className="flex items-center justify-center gap-1 text-xs text-secondary font-medium mb-1">
        <ShieldCheck size={14} className="text-primary" />
        <span>Secure & Verified Review</span>
      </div>
      <p className="text-xs text-gray-400">© {new Date().getFullYear()} Amman Earth Movers</p>
    </footer>
  );
};
