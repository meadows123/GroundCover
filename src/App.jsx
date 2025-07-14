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

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('App Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F5F5EB] flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold text-[#5B8B6B] mb-4">Something went wrong</h1>
            <p className="text-[#7A5E3A] mb-4">Please refresh the page or try again.</p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-[#fedd55] text-black px-6 py-3 rounded-xl font-semibold hover:bg-[#fedd55]/90 transition-colors"
            >
              Refresh Page
            </button>
            {this.state.error && (
              <details className="mt-4 text-left max-w-md mx-auto">
                <summary className="cursor-pointer text-sm text-gray-600">Error Details</summary>
                <pre className="text-xs text-red-600 mt-2 bg-red-50 p-2 rounded overflow-auto">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  // Use HashRouter if your hosting doesn't support SPA routing
  // Change this to HashRouter if you're still getting 404 errors
  const RouterComponent = HashRouter;
  
  console.log('App component rendering...');
  console.log('Current pathname:', window.location.pathname);
  
  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
}

export default App;