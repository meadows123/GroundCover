import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Star, Users, Calendar, Award, CalendarDays, Phone, Mail, MapPin, Leaf, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BookingModal } from '@/components/BookingModal';
import TestimonialsSection from '@/components/TestimonialsSection';

const HomePage = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const features = [
    { icon: Sparkles, title: 'Premium Quality', description: 'Exceptional craftsmanship in every detail' },
    { icon: Users, title: 'Expert Team', description: '15+ years of professional expertise' },
    { icon: Calendar, title: 'Flexible Service', description: 'Tailored to your schedule' },
    { icon: Award, title: 'Fully Insured', description: 'Complete protection & peace of mind' },
  ];

  const portfolioItems = [
    {
      image: '/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_5031.jpeg',
      title: 'Luxury Garden Design',
      description: 'Complete transformation with modern landscaping'
    },
    {
      image: '/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_2755.jpeg',
      title: 'Premium Patio Installation',
      description: 'Professional hardscaping and outdoor living'
    },
    {
      image: '/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_1325.jpeg',
      title: 'Garden Maintenance',
      description: 'Ongoing care for pristine outdoor spaces'
    },
    {
      image: '/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_0775.jpeg',
      title: 'Landscape Architecture',
      description: 'Bespoke design and installation services'
    },
    {
      image: '/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_5223.jpeg',
      title: 'Driveway Solutions',
      description: 'High-end surface installations'
    },
    {
      image: '/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_1183.jpeg',
      title: 'Outdoor Living Spaces',
      description: 'Creating beautiful functional areas'
    }
  ];

  return (
    <>
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#5B8B6B] via-[#7A5E3A] to-[#5B8B6B]">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#5B8B6B]/90 via-[#7A5E3A]/70 to-[#5B8B6B]/90 z-10"></div>
            <img  
              className="w-full h-full object-cover opacity-40" 
              alt="Premium landscaping and garden design by GroundCover"
              src="/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_6702.jpeg"
            />
          </div>
          
          <div className="relative z-20 text-center text-white max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
                <Leaf className="w-5 h-5 text-[#FFC107]" />
                <span className="text-sm font-medium">Premium Landscaping Services</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-5xl md:text-8xl font-bold mb-8 leading-tight"
            >
              <span className="text-[#FFC107]">
                Transforming
              </span>
              <br />
              <span className="text-white">Outdoor Spaces</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="text-xl md:text-2xl mb-12 text-gray-200 font-light max-w-3xl mx-auto leading-relaxed"
            >
              Professional landscaping, garden design, and outdoor living solutions across Bristol and the South West
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Button 
                size="lg" 
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-[#FFC107] hover:bg-[#FFD700] text-white font-semibold px-10 py-6 text-lg rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
              >
                Get Free Consultation
                <CalendarDays className="ml-3 w-6 h-6" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-[#5B8B6B] font-semibold px-10 py-6 text-lg rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Phone className="mr-3 w-6 h-6" />
                Call Now: +44 7510 359770
              </Button>
            </motion.div>

            {/* Quick Contact Strip */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="mt-16 flex flex-col sm:flex-row gap-6 justify-center items-center text-sm"
            >
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>groundcovergardencare@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>Bristol & South West</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Showcase */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-[#5B8B6B] mb-6">
                Our Premium Work
              </h2>
              <p className="text-xl text-[#7A5E3A] max-w-3xl mx-auto leading-relaxed">
                Every project showcases our commitment to excellence and attention to detail
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img  
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      alt={item.title}
                      src={item.image}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5B8B6B]/90 via-[#5B8B6B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-200 opacity-90">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <Link to="/gallery">
                <Button 
                  size="lg" 
                  className="bg-[#E1B941] hover:bg-[#FFD700] text-white font-semibold px-10 py-4 text-lg rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  View Full Portfolio
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Customer Testimonials & Feedback Section */}
        <TestimonialsSection />

        {/* Features Section */}
        <section className="py-24 bg-gradient-to-br from-[#5B8B6B] to-[#7A5E3A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Why Choose GroundCover?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Professional excellence meets exceptional service in every project we deliver
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-[#5B8B6B] to-[#7A5E3A] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-10 h-10 text-[#E1B941]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
                  <section className="py-24 bg-gradient-to-br from-[#5B8B6B] to-[#7A5E3A] relative overflow-hidden">
                          <div className="absolute inset-0 bg-[url('/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_0775.jpeg')] bg-cover bg-center opacity-10"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Ready to Transform Your Space?
              </h2>
                              <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                Get your free consultation today and discover how we can create the outdoor space of your dreams
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => setIsBookingModalOpen(true)}
                  className="bg-[#5B8B6B] hover:bg-[#7A5E3A] text-white font-semibold px-10 py-6 text-lg rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Book Free Consultation
                  <CalendarDays className="ml-3 w-6 h-6" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-transparent text-white border-white hover:bg-white hover:text-[#5B8B6B] font-bold px-10 py-6 text-lg rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Phone className="mr-3 w-6 h-6" />
                  Call: +44 7510 359770
                </Button>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 mb-3 text-[#FFC107]" />
                  <h4 className="font-semibold text-lg mb-2">Phone</h4>
                  <p className="text-white/80">+44 7510 359770</p>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 mb-3 text-[#FFC107]" />
                  <h4 className="font-semibold text-lg mb-2">Email</h4>
                  <p className="text-white/80">groundcovergardencare@gmail.com</p>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 mb-3 text-[#FFC107]" />
                  <h4 className="font-semibold text-lg mb-2">Service Area</h4>
                  <p className="text-white/80">Bristol & South West</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <BookingModal 
        isOpen={isBookingModalOpen} 
        setIsOpen={setIsBookingModalOpen} 
      />
    </>
  );
};

export default HomePage;