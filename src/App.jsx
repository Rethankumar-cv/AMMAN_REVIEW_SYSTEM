import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        {/* The main app container is restricted to mobile max-width to ensure a mobile-first feel even on desktop */}
        <div className="w-full max-w-md bg-white min-h-screen shadow-2xl overflow-hidden relative">
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
