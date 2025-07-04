import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, ArrowRight, Calendar, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-20 h-20 rounded-2xl overflow-hidden">
                <img 
                  src="/images/wetransfer_img_6702-jpeg_2025-07-01_0636/GroundCover-Trans-bigger.png" 
                  alt="GroundCover Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Bristol's premier landscaping specialists, transforming outdoor spaces across the South West with exceptional design, craftsmanship, and ongoing care.
            </p>
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-[#fedd55]" />
              <span className="text-sm font-medium text-[#fedd55]">15+ Years of Excellence</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-black">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-[#fedd55] transition-colors duration-300 group">
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                <span>Home</span>
              </Link>
              <Link to="/gallery" className="flex items-center gap-2 text-gray-600 hover:text-[#fedd55] transition-colors duration-300 group">
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                <span>Our Work</span>
              </Link>
              <Link to="/about" className="flex items-center gap-2 text-gray-600 hover:text-[#fedd55] transition-colors duration-300 group">
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                <span>About Us</span>
              </Link>
              <Link to="/survey" className="flex items-center gap-2 text-gray-600 hover:text-[#fedd55] transition-colors duration-300 group">
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                <span>Customer Survey</span>
              </Link>
              <a href="tel:+447510359770" className="flex items-center gap-2 text-[#fedd55] hover:text-[#fedd55] transition-colors duration-300 group font-medium">
                <Calendar className="w-4 h-4" />
                <span>Free Consultation</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-black">Our Services</h3>
                         <div className="space-y-3">
                             <Link to="/gallery" className="flex items-center gap-2 text-gray-600 hover:text-[#fedd55] transition-colors duration-300 group">
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                <span>Garden Design & Landscaping</span>
              </Link>
              <Link to="/gallery" className="flex items-center gap-2 text-gray-600 hover:text-[#fedd55] transition-colors duration-300 group">
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                <span>Patios & Driveways</span>
              </Link>
              <Link to="/gallery" className="flex items-center gap-2 text-gray-600 hover:text-[#fedd55] transition-colors duration-300 group">
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                <span>Garden Maintenance</span>
              </Link>
              <Link to="/gallery" className="flex items-center gap-2 text-gray-600 hover:text-[#fedd55] transition-colors duration-300 group">
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                <span>Lawn Care & Treatment</span>
              </Link>
              <Link to="/gallery" className="flex items-center gap-2 text-gray-600 hover:text-[#fedd55] transition-colors duration-300 group">
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                <span>Tree Surgery & Pruning</span>
              </Link>
              <Link to="/gallery" className="flex items-center gap-2 text-gray-600 hover:text-[#fedd55] transition-colors duration-300 group">
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                <span>Commercial Landscaping</span>
              </Link>
             </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-black">Get In Touch</h3>
            <div className="space-y-4">
              <a href="tel:+447510359770" className="flex items-start gap-3 text-gray-700 hover:text-[#fedd55] transition-colors duration-300 group">
                <div className="w-10 h-10 bg-[#fedd55]/20 rounded-xl flex items-center justify-center group-hover:bg-[#fedd55]/30 transition-colors duration-300 flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#fedd55]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium leading-tight">+44 7510 359770</div>
                  <div className="text-sm text-gray-500 leading-tight">Call for free quote</div>
                </div>
              </a>
              
              <a href="mailto:groundcovergardencare@gmail.com" className="flex items-start gap-3 text-gray-700 hover:text-[#fedd55] transition-colors duration-300 group">
                <div className="w-10 h-10 bg-[#fedd55]/20 rounded-xl flex items-center justify-center group-hover:bg-[#fedd55]/30 transition-colors duration-300 flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#fedd55]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium leading-tight">groundcovergardencare@gmail.com</div>
                  <div className="text-sm text-gray-500 leading-tight">Quick response</div>
                </div>
              </a>
              
              <div className="flex items-start gap-3 text-gray-700">
                <div className="w-10 h-10 bg-[#fedd55]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#fedd55]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium leading-tight">Bristol & South West</div>
                  <div className="text-sm text-gray-500 leading-tight">Service coverage area</div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-black">Follow Our Work</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/share/1ME7r3GaPg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-[#fedd55] to-[#fedd55] rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
                >
                  <Facebook className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a 
                  href="https://www.instagram.com/ground__cover?igsh=MWh1aGg2djk5eDh4YQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
                >
                  <Instagram className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
              <p className="text-sm text-gray-500">
                See our latest projects and garden inspiration
              </p>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold text-black mb-3">Service Areas</h4>
            <p className="text-gray-600 text-sm leading-relaxed max-w-4xl mx-auto">
              Bristol • Bath • Gloucester • Cheltenham • Swindon • Taunton • Exeter • Plymouth • 
              Yeovil • Bridgwater • Weston-super-Mare • Clevedon • Portishead • Thornbury • Chipping Sodbury
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Landscaping. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-[#fedd55] font-medium">
              <span>Fully Insured & Licensed</span>
              <span className="text-gray-300">•</span>
              <span>Free Consultations</span>
              <span className="text-gray-300">•</span>
              <span>Guaranteed Work</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;