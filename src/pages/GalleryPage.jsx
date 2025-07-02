import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Eye, ArrowRight, Sparkles, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Garden Design', 'Patios & Driveways', 'Landscape Architecture', 'Maintenance', 'Commercial'];

  const portfolioProjects = [
    {
      id: 1,
      category: 'Garden Design',
      image: '/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_5031.jpeg',
      title: 'Luxury Contemporary Garden',
      description: 'Complete garden transformation with modern design elements and premium materials',
      location: 'Bristol'
    },
    {
      id: 2,
      category: 'Patios & Driveways',
      image: '/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_2755.jpeg',
      title: 'Premium Patio Installation',
      description: 'High-end natural stone patio with integrated outdoor living space',
      location: 'Bath'
    },
    {
      id: 3,
      category: 'Landscape Architecture',
      image: '/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_1325.jpeg',
      title: 'Architectural Landscape Design',
      description: 'Sophisticated landscaping with structured plantings and modern features',
      location: 'Gloucester'
    },
    {
      id: 4,
      category: 'Garden Design',
      image: '/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_0775.jpeg',
      title: 'Elegant Garden Renovation',
      description: 'Traditional garden updated with contemporary design principles',
      location: 'Cheltenham'
    },
    {
      id: 5,
      category: 'Patios & Driveways',
      image: '/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_5223.jpeg',
      title: 'Executive Driveway Project',
      description: 'Premium block paving with decorative borders and lighting integration',
      location: 'Swindon'
    },
    {
      id: 6,
      category: 'Maintenance',
      image: '/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_1183.jpeg',
      title: 'Garden Maintenance Excellence',
      description: 'Ongoing professional maintenance showcasing pristine results',
      location: 'Bristol'
    },
    {
      id: 7,
      category: 'Landscape Architecture',
      image: '/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_0487.jpeg',
      title: 'Structural Landscaping',
      description: 'Bold architectural elements combined with natural beauty',
      location: 'Exeter'
    },
    {
      id: 8,
      category: 'Garden Design',
      image: '/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_0924.jpeg',
      title: 'Naturalistic Garden Design',
      description: 'Organic design approach with native plantings and natural materials',
      location: 'Taunton'
    },
    {
      id: 9,
      category: 'Commercial',
      image: '/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_0498.jpeg',
      title: 'Commercial Landscape Project',
      description: 'Large-scale commercial landscaping with sustainable design',
      location: 'Bristol City Centre'
    },
    {
      id: 10,
      category: 'Patios & Driveways',
      image: '/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_0497.jpeg',
      title: 'Multi-Level Patio Design',
      description: 'Complex terraced patio with retaining walls and integrated seating',
      location: 'Yeovil'
    },
    {
      id: 11,
      category: 'Garden Design',
      image: '/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_2860.jpeg',
      title: 'Family Garden Transformation',
      description: 'Functional yet beautiful family garden with play areas and relaxation zones',
      location: 'Bridgwater'
    },
    {
      id: 12,
      category: 'Landscape Architecture',
      image: '/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_7434.jpeg',
      title: 'Contemporary Landscape Design',
      description: 'Cutting-edge design with innovative materials and techniques',
      location: 'Plymouth'
    },
    {
      id: 13,
      category: 'Maintenance',
      image: '/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_5746.jpeg',
      title: 'Estate Garden Maintenance',
      description: 'Premium maintenance service for large estate gardens',
      location: 'Weston-super-Mare'
    },
    {
      id: 14,
      category: 'Garden Design',
      image: '/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_7853.jpeg',
      title: 'Boutique Garden Design',
      description: 'Intimate garden space maximized for beauty and functionality',
      location: 'Clevedon'
    },
    {
      id: 15,
      category: 'Patios & Driveways',
      image: '/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_7261.jpeg',
      title: 'Luxury Outdoor Living Space',
      description: 'Premium outdoor entertainment area with kitchen and dining facilities',
      location: 'Portishead'
    },
    {
      id: 16,
      category: 'Commercial',
      image: '/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_6702.jpeg',
      title: 'Corporate Headquarters Landscaping',
      description: 'Professional corporate landscaping with year-round interest',
      location: 'Bristol Business Park'
    }
  ];

  const featuredProjects = [
    {
      id: 1,
      title: 'Award-Winning Garden Transformation',
      beforeImage: '/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_0386.jpeg',
      afterImage: '/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_5536.jpeg',
      description: 'Complete transformation of a neglected urban garden into a contemporary outdoor sanctuary'
    },
    {
      id: 2,
      title: 'Executive Patio & Landscape Design',
      beforeImage: '/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_4461.jpeg',
      afterImage: '/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_0931.jpeg',
      description: 'Premium materials and expert craftsmanship create an exceptional outdoor living space'
    },
    {
      id: 3,
      title: 'Modern Family Garden',
      beforeImage: '/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_2772.jpeg',
      afterImage: '/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_5165.jpeg',
      description: 'Functional family space combining play areas with sophisticated design elements'
    }
  ];

  const filteredImages = activeFilter === 'All' 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === activeFilter);

  const openLightbox = (project) => {
    setSelectedImage(project);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(project => project.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Header */}
      <section className="relative py-32 bg-gradient-to-br from-[#5B8B6B] via-[#7A5E3A] to-[#5B8B6B] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_1187.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Sparkles className="w-5 h-5 text-[#FFC107]" />
              <span className="text-sm font-medium">Premium Portfolio</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
          >
            <span className="text-[#FFC107]">
              Our Work
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl mb-12 text-gray-200 font-light max-w-4xl mx-auto leading-relaxed"
          >
            Explore our portfolio of stunning landscape transformations
          </motion.p>
        </div>
      </section>

      {/* Featured Before & After Projects */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
              Transformation Stories
            </h2>
            <p className="text-xl text-[#7A5E3A] max-w-3xl mx-auto leading-relaxed">
              Witness the remarkable transformations that showcase our expertise and vision
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group bg-white rounded-3xl shadow-luxury overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <BeforeAfterSlider
                    beforeImage={project.beforeImage}
                    afterImage={project.afterImage}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5B8B6B]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#5B8B6B] mb-3">{project.title}</h3>
                  <p className="text-[#7A5E3A] leading-relaxed">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
              Portfolio Gallery
            </h2>
            <p className="text-xl text-[#7A5E3A] max-w-3xl mx-auto leading-relaxed mb-12">
              Discover our complete collection of landscape projects
            </p>

            {/* Modern Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeFilter === filter
                      ? 'bg-[#5B8B6B] text-white shadow-xl'
                      : 'bg-white text-[#5B8B6B] hover:bg-gray-50 border border-gray-200 shadow-lg'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Portfolio Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredImages.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl shadow-luxury hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => openLightbox(project)}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter contrast-110 saturate-110"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-2">
                                          <span className="text-xs font-medium bg-[#E1B941] px-3 py-1 rounded-full text-black">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white drop-shadow-lg line-clamp-1">{project.title}</h3>
                  <p className="text-white text-xs mb-3 drop-shadow-md line-clamp-2 leading-relaxed">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-200 drop-shadow-md truncate flex-1 mr-2">{project.location}</span>
                                          <div className="flex items-center gap-1 text-[#E1B941] drop-shadow-md flex-shrink-0">
                      <Eye className="w-3 h-3" />
                      <span className="text-xs">View</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
              <section className="py-24 bg-gradient-to-br from-[#5B8B6B] to-[#7A5E3A] relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_5055.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Leaf className="w-16 h-16 text-[#FFC107] mx-auto mb-6" />
            <h2 className="text-5xl md:text-6xl font-bold text-[#E1B941] mb-8">
              Ready for Your Transformation?
            </h2>
            <p className="text-xl text-white mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how we can create something exceptional for your outdoor space
            </p>
            
            <Button 
              size="lg" 
              className="bg-white text-[#7A5E3A] hover:bg-gray-100 font-bold px-12 py-6 text-lg rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center lightbox-overlay" onClick={closeLightbox}>
          <div className="relative max-w-6xl max-h-[90vh] mx-4">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-2xl shadow-3xl"
              onClick={(e) => e.stopPropagation()}
            />
            
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>
            
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-2xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-2 text-white">{selectedImage.title}</h3>
              <p className="text-white mb-2">{selectedImage.description}</p>
              <div className="flex items-center justify-between">
                                  <span className="text-[#E1B941] font-medium">{selectedImage.category}</span>
                <span className="text-gray-200">{selectedImage.location}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;