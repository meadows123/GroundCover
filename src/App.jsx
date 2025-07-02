import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import HomePage from '@/pages/HomePage';
import GalleryPage from '@/pages/GalleryPage';
import AboutPage from '@/pages/AboutPage';
import SurveyPage from '@/pages/SurveyPage';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F5F5EB]">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/survey" element={<SurveyPage />} />
        </Routes>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;