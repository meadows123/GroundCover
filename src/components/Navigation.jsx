import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BookingModal } from '@/components/BookingModal';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About Us', path: '/about' },
  ];

  const openBookingModal = () => {
    setIsOpen(false); 
    setIsBookingModalOpen(true);
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#5B8B6B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <img 
                  src="/images/wetransfer_img_6702-jpeg_2025-07-01_0636/GC logo  .jpg" 
                  alt="GroundCover Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold gradient-text">GroundCover</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-[#5B8B6B] ${
                    location.pathname === item.path
                      ? 'text-[#5B8B6B] border-b-2 border-[#FFC107]'
                      : 'text-[#7A5E3A]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                onClick={openBookingModal}
                className="bg-[#FFC107] hover:bg-[#FFD700] text-white font-semibold px-6"
              >
                Book a Free Visit
                <CalendarDays className="ml-2 h-4 w-4" />
              </Button>
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
                <Button 
                  onClick={openBookingModal}
                  className="bg-[#FFC107] hover:bg-[#FFD700] text-white font-semibold w-full"
                >
                  Book a Free Visit
                  <CalendarDays className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>
      <BookingModal isOpen={isBookingModalOpen} setIsOpen={setIsBookingModalOpen} />
    </>
  );
};

export default Navigation;