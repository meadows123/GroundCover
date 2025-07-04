import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, MapPin, Sun, Leaf, Award, CheckCircle, Phone, Mail, Send, Sparkles, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const AboutPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    message: '',
    projectBudget: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const teamMembers = [
    {
      name: 'Jack Fleming',
      role: 'Director',
      description: 'With over 20 years of experience, Jack brings unparalleled expertise to every landscape transformation.',
      image: '/images/wetransfer_img_6702-jpeg_2025-07-01_0636/Jack-1.jpg',
    },
    {
      name: 'David Jones',
      role: 'Director',
      description: 'David combines artistic vision with technical expertise to create stunning outdoor environments.',
      image: '/images/wetransfer_img_6702-jpeg_2025-07-01_0636/dave-1.jpg',
    },
    {
      name: 'Team Member',
      role: 'Director',
      description: 'Our third team member ensures every project exceeds expectations through meticulous planning and execution.',
      image: '/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_1325.jpeg',
    },
  ];

  const values = [
    { icon: Sparkles, title: 'Premium Quality', description: 'We use only the finest materials and proven techniques for lasting results.' },
    { icon: Users, title: 'Client Partnership', description: 'Your vision guides every decision we make throughout the project.' },
    { icon: CheckCircle, title: 'Guaranteed Excellence', description: 'We stand behind our work with comprehensive warranties and support.' },
    { icon: Leaf, title: 'Sustainable Design', description: 'Eco-friendly practices that create beautiful, environmentally responsible landscapes.' },
  ];

  const services = [
    'Garden Design & Landscaping',
    'Patio & Driveway Installation',
    'Garden Maintenance',
    'Lawn Care & Treatment',
    'Tree Surgery & Pruning',
    'Fencing & Decking',
    'Commercial Landscaping',
    'Other / Not Sure'
  ];

  const budgetRanges = [
    'Under £1,000',
    '£1,000 - £5,000',
    '£5,000 - £15,000',
    '£15,000 - £30,000',
    '£30,000+',
    'Prefer to discuss'
  ];

  const timelines = [
    'As soon as possible',
    'Within 1 month',
    '1-3 months',
    '3-6 months',
    '6+ months',
    'Flexible timing'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours to discuss your project.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        location: '',
        message: '',
        projectBudget: '',
        timeline: ''
      });
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Header */}
      <section className="relative py-32 bg-gradient-to-br from-[#5B8B6B] via-[#7A5E3A] to-[#5B8B6B] text-white overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_0625.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Users className="w-5 h-5 text-[#fedd55]" />
              <span className="text-sm font-medium">About Our Company</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight"
          >
            <span className="text-[#fedd55]">
              About GroundCover
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl mb-12 text-gray-200 font-light max-w-4xl mx-auto leading-relaxed"
          >
            Your trusted partner in creating exceptional outdoor environments across Bristol and the South West
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-[#5B8B6B] mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-[#7A5E3A] leading-relaxed">
                <p>
                  Founded in 2008, GroundCover began with a simple but powerful vision: to transform ordinary outdoor spaces into extraordinary landscapes that enhance both property value and quality of life.
                </p>
                <p>
                  What started as a small team of passionate landscape professionals has evolved into the South West's premier landscaping company, known for our innovative designs, meticulous craftsmanship, and unwavering commitment to client satisfaction.
                </p>
                <p>
                  We believe that exceptional outdoor spaces should be accessible to everyone, which is why we offer comprehensive services from intimate garden makeovers to large-scale commercial projects, all delivered with the same attention to detail and professional excellence.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#5B8B6B]">500+</div>
                  <div className="text-sm text-gray-500">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#5B8B6B]">15+</div>
                  <div className="text-sm text-gray-500">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#5B8B6B]">98%</div>
                  <div className="text-sm text-gray-500">Client Satisfaction</div>
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
                alt="GroundCover team working on a beautiful landscape project"
                src="/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_1011.jpg"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
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
              Our Values
            </h2>
            <p className="text-xl text-[#7A5E3A] max-w-3xl mx-auto leading-relaxed">
              The principles that guide every project and relationship we build
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-3xl bg-white shadow-luxury hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#5B8B6B] to-[#7A5E3A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-[#fedd55]" />
                </div>
                <h3 className="text-2xl font-bold text-[#5B8B6B] mb-4">{value.title}</h3>
                <p className="text-[#7A5E3A] leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet The Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-[#5B8B6B] mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-[#7A5E3A] max-w-3xl mx-auto leading-relaxed">
              Meet the skilled professionals behind every beautiful landscape
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-3xl shadow-luxury overflow-hidden text-center hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    alt={`${member.name}, ${member.role} at GroundCover`}
                    src={member.image}
                    loading="lazy"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#5B8B6B] mb-2">{member.name}</h3>
                  <p className="text-[#5B8B6B] font-semibold mb-4">{member.role}</p>
                  <p className="text-[#7A5E3A] leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-5xl md:text-6xl font-bold text-[#5B8B6B] mb-6">
                  Contact Us Today
                </h2>
                <p className="text-xl text-[#7A5E3A] leading-relaxed mb-8">
                  Ready to get started? Contact us today for your free consultation
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#5B8B6B] to-[#7A5E3A] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-[#fedd55] flex-shrink-0" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#5B8B6B] mb-1">Call Us</h4>
                    <p className="text-[#7A5E3A] text-lg">+44 7510 359770</p>
                    <p className="text-sm text-gray-500">Mon-Fri 8AM-6PM, Sat 8AM-4PM</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#5B8B6B] to-[#7A5E3A] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-7 h-7 text-[#fedd55] flex-shrink-0" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#5B8B6B] mb-1">Email Us</h4>
                    <p className="text-[#7A5E3A] text-lg">groundcovergardencare@gmail.com</p>
                    <p className="text-sm text-gray-500">We respond within 4 hours</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#5B8B6B] to-[#7A5E3A] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-[#fedd55] flex-shrink-0" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#5B8B6B] mb-1">Service Area</h4>
                    <p className="text-[#7A5E3A] text-lg">Bristol & South West</p>
                    <p className="text-sm text-gray-500">Including Bath, Gloucester, Cheltenham</p>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-[#ECECEC] to-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-[#5B8B6B] mb-6">Why Choose GroundCover?</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#fedd55]" />
                    <span className="text-[#7A5E3A]">Free no-obligation consultations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#fedd55]" />
                    <span className="text-[#7A5E3A]">15+ years of proven expertise</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-[#fedd55]" />
                    <span className="text-[#7A5E3A]">Fully insured & guaranteed work</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#5B8B6B] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fedd55] focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#5B8B6B] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fedd55] focus:border-transparent transition-all duration-300"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#5B8B6B] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fedd55] focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#5B8B6B] mb-2">
                      Service Required
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fedd55] focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#5B8B6B] mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fedd55] focus:border-transparent transition-all duration-300"
                      placeholder="e.g., Bristol, Bath"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#5B8B6B] mb-2">
                      Project Budget
                    </label>
                    <select
                      name="projectBudget"
                      value={formData.projectBudget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fedd55] focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((budget) => (
                        <option key={budget} value={budget}>{budget}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#5B8B6B] mb-2">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fedd55] focus:border-transparent transition-all duration-300"
                    >
                      <option value="">When do you need this?</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#5B8B6B] mb-2">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fedd55] focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project, garden size, specific requirements, or any questions you have..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#fedd55] hover:bg-[#fedd55] text-black font-semibold py-4 text-lg rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending Message...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-3">
                      <Send className="w-5 h-5" />
                      Get Free Quote
                    </div>
                  )}
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  We'll respond within 24 hours with a detailed quote and consultation booking.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;