import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Star, Users, Calendar, Award, CalendarDays, Phone, Mail, MapPin, Leaf, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BookingModal } from '@/components/BookingModal';

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
      image: '/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_1485.jpg',
      title: 'Luxury Garden Design',
      description: 'Complete transformation with modern landscaping'
    },
    {
      image: '/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_2772.jpeg',
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
      image: '/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_0498.jpeg',
      title: 'Premium Driveways & Pathways',
      description: 'Stunning entrance solutions and walkways'
    },
    {
      image: '/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_1183.jpeg',
      title: 'Outdoor Living Spaces',
      description: 'Creating beautiful functional areas'
    }
  ];

  // Real Google Reviews from customers
  const googleReviews = [
    {
      id: 1,
      name: 'Shaun Lewis',
      location: 'Google Reviews',
      rating: 5,
      date: 'A year ago',
      text: 'Very friendly service. All work was completed at a high quality. The team are perfectionists.',
      verified: true,
      reviewCount: '1 review • 21 photos',
      initials: 'SL',
      avatarColor: 'bg-blue-500'
    },
    {
      id: 2,
      name: 'James Graley',
      location: 'Google Reviews',
      rating: 5,
      date: 'A year ago',
      text: 'Great service highly recommended!',
      verified: true,
      reviewCount: '3 reviews',
      initials: 'JG',
      avatarColor: 'bg-green-500'
    },
    {
      id: 3,
      name: 'Ying Yin',
      location: 'Google Reviews',
      rating: 5,
      date: '9 months ago',
      text: 'Two trust-worthy and good-looking fellas saving a completely over-grown garden neglected by the tenants, showing care and respect to the plants. What more can you ask for?',
      verified: true,
      reviewCount: '25 reviews • 20 photos',
      initials: 'YY',
      avatarColor: 'bg-purple-500'
    }
  ];

  return (
    <>
      <div className="pt-16 overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#5B8B6B] via-[#7A5E3A] to-[#5B8B6B] pb-16 sm:pb-0">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#5B8B6B]/90 via-[#7A5E3A]/70 to-[#5B8B6B]/90 z-10"></div>
            <img  
              className="w-full h-full object-cover opacity-40" 
              alt="Premium landscaping and garden design by GroundCover"
              src="/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_1325.jpeg"
            />
          </div>
          
          <div className="relative z-20 text-center text-white max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-12 sm:mb-8 mt-20 sm:mt-0"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 sm:mb-6">
                <Leaf className="w-5 h-5 text-[#fedd55]" />
                <span className="text-sm font-medium">Transforming outdoor spaces</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-5xl md:text-8xl font-bold mb-8 leading-tight"
            >
              <span className="text-[#fedd55]">
                Your Grounds
              </span>
              <br />
              <span className="text-white">Maintenance Experts</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="text-xl md:text-2xl mb-12 text-gray-200 font-light max-w-3xl mx-auto leading-relaxed"
            >
              At Ground Cover, we specialise in reliable, year-round grounds maintenance for commercial clients. From business parks and schools to housing developments and retail spaces — we keep your grounds safe, tidy, and well-presented.
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
                className="bg-[#fedd55] hover:bg-[#fedd55] text-black font-semibold px-6 sm:px-10 py-6 text-base sm:text-lg rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
              >
                <span className="whitespace-nowrap">Get Free Consultation</span>
                <CalendarDays className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-[#5B8B6B] font-semibold px-6 sm:px-10 py-6 text-base sm:text-lg rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Phone className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <span className="whitespace-nowrap">Call: +44 7510 359770</span>
              </Button>
            </motion.div>

            {/* Quick Contact Strip */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="mt-16 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center text-xs sm:text-sm"
            >
              <div className="flex items-center gap-2 text-gray-300 break-all">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="break-all">groundcovergardencare@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4 flex-shrink-0" />
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
                      loading="lazy"
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
                  className="bg-[#fedd55] hover:bg-[#fedd55] text-black font-semibold px-10 py-4 text-lg rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  View Full Portfolio
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Company History & Commitment Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 bg-[#5B8B6B]/10 rounded-full px-6 py-3 mb-6">
                  <Users className="w-5 h-5 text-[#5B8B6B]" />
                  <span className="text-sm font-medium text-[#5B8B6B]">Trusted Grounds Maintenance Experts</span>
                </div>
                <h2 className="text-5xl font-bold text-[#5B8B6B] mb-8">Our Foundation</h2>
                <div className="space-y-6 text-lg text-[#7A5E3A] leading-relaxed">
                  <p>
                    Ground cover was established in 2020 by David Jones and Jack Fleming. Based in the heart of Bristol, our team is committed to delivering exceptional Landscaping & Maintenance services.
                  </p>
                  <div className="border-l-4 border-[#fedd55] pl-6 bg-[#fedd55]/5 py-4">
                    <h3 className="text-2xl font-bold text-[#5B8B6B] mb-4">Our Commitment</h3>
                    <p>
                      Groundcover is dedicated to providing top Landscaping & Maintenance services that not just meets, but exceed our clients' expectations. We understand that every space is unique, and we approach each job with a keen eye for detail and a passion for creating stunning outdoor environments.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden shadow-2xl"
              >
                <img 
                  className="w-full h-auto object-cover"
                  alt="David Jones and Jack Fleming - GroundCover founders"
                  src="/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_1011.jpg"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Google Reviews Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
                              <div className="inline-flex items-center gap-2 bg-[#fedd55]/10 rounded-full px-6 py-3 mb-6">
                  <Star className="w-5 h-5 text-[#fedd55] fill-current" />
                <span className="text-sm font-medium text-[#5B8B6B]">5-Star Google Reviews</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-[#5B8B6B] mb-6">
                What Our Customers Say
              </h2>
              <p className="text-xl text-[#7A5E3A] max-w-3xl mx-auto leading-relaxed">
                Don't just take our word for it - see what our satisfied customers have to say about our work
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {googleReviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl p-8 shadow-luxury hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  {/* Google branding */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-6 h-6">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#fedd55" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-600">Google</span>
                    </div>
                    {review.verified && (
                      <div className="flex items-center gap-1 text-xs text-[#5B8B6B] font-medium">
                        <CheckCircle className="w-3 h-3 fill-current" />
                        Verified
                      </div>
                    )}
                  </div>

                  {/* Star rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                                              <Star key={i} className="w-5 h-5 text-[#fedd55] fill-current" />
                    ))}
                  </div>

                  {/* Review text */}
                  <p className="text-[#7A5E3A] leading-relaxed mb-6 line-clamp-4">
                    "{review.text}"
                  </p>

                  {/* Customer info */}
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-12 h-12 rounded-full ${review.avatarColor} flex items-center justify-center shadow-lg`}>
                        <span className="text-white font-bold text-sm">{review.initials}</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-[#5B8B6B] mb-1">{review.name}</div>
                        <div className="text-xs text-gray-500">{review.reviewCount}</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">{review.date}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Google Reviews CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <a 
                href="https://www.google.com/search?q=groundcover+bristol&sca_esv=32f9ae821a1b1a5d&sxsrf=AE3TifP0MjA91bRXZ2aYPE1Zx_V-9W8nZA%3A1751355649753&ei=AZFjaP_dLe-khbIPtr22-Qs&ved=0ahUKEwi_4oOblJuOAxVvUkEAHbaeLb8Q4dUDCBA&uact=5&oq=groundcover+bristol&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgCIhNncm91bmRjb3ZlciBicmlzdG9sMgQQIxgnMgcQABiABBgNMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyCBAAGKIEGIkFMggQABiiBBiJBTIIEAAYogQYiQVI3xJQsgRYoBBwAXgBkAEDmAHNAqABhQuqAQczLjAuMi4yuAEDyAEA-AEBmAIFoALLBMICBxAjGLADGCfCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICChAAGIAEGEMYigXCAgoQABiABBgUGIcCwgIFEAAYgATCAggQABiABBiLA8ICChAuGIAEGBQYhwLCAgYQABgWGB6YAwCIBgGQBgqSBwUyLjIuMaAHzT2yBwUxLjIuMbgHrwTCBwUzLTMuMsgHUw&sclient=gws-wiz-serp#lrd=0x6fd7861ade6d7c0f:0x55fb7ba8bd4ced45,1,,,,"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#fedd55] text-black px-8 py-4 rounded-2xl font-semibold hover:bg-[#fedd55] transition-colors duration-300 cursor-pointer"
              >
                <Star className="w-5 h-5 fill-current" />
                <span>Read All Reviews on Google</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-sm text-gray-500 mt-3">
                Read all our genuine 5-star Google reviews
              </p>
            </motion.div>
          </div>
        </section>

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
                    <feature.icon className="w-10 h-10 text-[#fedd55]" />
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
                  <Phone className="w-8 h-8 mb-3 text-[#fedd55]" />
                  <h4 className="font-semibold text-lg mb-2">Phone</h4>
                  <p className="text-white/80">+44 7510 359770</p>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 mb-3 text-[#fedd55]" />
                  <h4 className="font-semibold text-lg mb-2">Email</h4>
                  <p className="text-white/80">groundcovergardencare@gmail.com</p>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 mb-3 text-[#fedd55]" />
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