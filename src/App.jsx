import React from 'react';
import { BrowserRouter as Router, HashRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import HomePage from '@/pages/HomePage';
import GalleryPage from '@/pages/GalleryPage';
import AboutPage from '@/pages/AboutPage';
import SurveyPage from '@/pages/SurveyPage';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ContactForm from '@/components/ContactForm';

function App() {
  // Use HashRouter if your hosting doesn't support SPA routing
  // Change this to HashRouter if you're still getting 404 errors
  const RouterComponent = Router;
  
  return (
    <RouterComponent>
      <ScrollToTop />
      <div className="min-h-screen bg-[#F5F5EB]">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/survey" element={<SurveyPage />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <Footer />
        <Toaster />
      </div>
    </RouterComponent>
  );
}

export default App;