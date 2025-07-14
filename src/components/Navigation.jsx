import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#5B8B6B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <div className="h-14 w-auto">
                <img 
                  src="/images/wetransfer_img_6702-jpeg_2025-07-01_0636/Thebiggestlogo.png" 
                  alt="GroundCover Logo" 
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-[#5B8B6B] ${
                    location.pathname === item.path
                      ? 'text-[#5B8B6B] border-b-2 border-[#fedd55]'
                      : 'text-[#7A5E3A]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://wa.me/447510359770"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-xl transform hover:scale-110 transition-all duration-300 w-12 h-12 ml-4"
                aria-label="Chat on WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-7 h-7">
                  <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.41L4.06 28.06a1 1 0 001.18 1.18l6.65-2.176A12.94 12.94 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.77 0-3.48-.38-5.01-1.1l-.36-.17-3.95 1.29 1.3-3.85-.18-.37A9.96 9.96 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.29-7.71c-.29-.15-1.71-.84-1.97-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.21-.63.07-.29-.15-1.23-.45-2.34-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.29-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3.01.15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34z"/>
                </svg>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded px-3 py-1 mt-2 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-10">Chat on WhatsApp</span>
              </a>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#5B8B6B] hover:text-[#7A5E3A] transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden py-4 border-t border-[#5B8B6B]/10"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-medium transition-colors hover:text-[#5B8B6B] ${
                      location.pathname === item.path
                        ? 'text-[#5B8B6B]'
                        : 'text-[#7A5E3A]'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="https://wa.me/447510359770"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-xl transform hover:scale-110 transition-all duration-300 w-12 h-12"
                  aria-label="Chat on WhatsApp"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-7 h-7">
                    <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.41L4.06 28.06a1 1 0 001.18 1.18l6.65-2.176A12.94 12.94 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.77 0-3.48-.38-5.01-1.1l-.36-.17-3.95 1.29 1.3-3.85-.18-.37A9.96 9.96 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.29-7.71c-.29-.15-1.71-.84-1.97-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.21-.63.07-.29-.15-1.23-.45-2.34-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.29-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3.01.15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34z"/>
                  </svg>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded px-3 py-1 mt-2 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-10">Chat on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;