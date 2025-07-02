import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Phone, Mail, MapPin, Send, CheckCircle, Clock, Shield } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '@/lib/emailjs-config';

const ContactForm = () => {
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

    try {
      // EmailJS configuration - replace these with your actual EmailJS credentials
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service || 'Not specified',
        location: formData.location || 'Not specified',
        project_budget: formData.projectBudget || 'Not specified',
        timeline: formData.timeline || 'Not specified',
        message: formData.message || 'No additional details provided',
        to_email: 'groundcovergardencare@gmail.com'
      };

      // Send email using EmailJS
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      );

      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours to discuss your project.",
      });
      
      // Reset form
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

    } catch (error) {
      console.error('EmailJS Error:', error);
      setIsSubmitting(false);
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly at groundcovergardencare@gmail.com",
        variant: "destructive"
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 to-white">
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
                Get In Touch
              </h2>
              <p className="text-xl text-[#7A5E3A] leading-relaxed mb-8">
                Get in touch for a free consultation and transform your outdoor space today
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-[#FFC107] rounded-xl flex items-center justify-center">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#5B8B6B] mb-1">Call Us</h4>
                  <p className="text-[#7A5E3A]">+44 7510 359770</p>
                  <p className="text-sm text-gray-500">Mon-Fri 8AM-6PM, Sat 8AM-4PM</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-[#FFC107] rounded-xl flex items-center justify-center">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#5B8B6B] mb-1">Email Us</h4>
                  <p className="text-[#7A5E3A]">groundcovergardencare@gmail.com</p>
                  <p className="text-sm text-gray-500">We respond within 4 hours</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-[#FFC107] rounded-xl flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#5B8B6B] mb-1">Service Area</h4>
                  <p className="text-[#7A5E3A]">Bristol & South West</p>
                  <p className="text-sm text-gray-500">Including Bath, Gloucester, Cheltenham</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-[#FFC107]/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#5B8B6B] mb-6">Why Choose GroundCover?</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFC107]" />
                  <span className="text-[#7A5E3A]">Free no-obligation consultations</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#FFC107]" />
                  <span className="text-[#7A5E3A]">15+ years of experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-[#FFC107]" />
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
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFC107] focus:border-transparent transition-all duration-300"
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
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFC107] focus:border-transparent transition-all duration-300"
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
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFC107] focus:border-transparent transition-all duration-300"
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
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFC107] focus:border-transparent transition-all duration-300"
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
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFC107] focus:border-transparent transition-all duration-300"
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
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFC107] focus:border-transparent transition-all duration-300"
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
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFC107] focus:border-transparent transition-all duration-300"
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
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFC107] focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your project, garden size, specific requirements, or any questions you have..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#FFC107] hover:bg-[#FFD700] text-white font-semibold py-4 text-lg rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending Message...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-3">
                    <Send className="w-5 h-5" />
                    Send Message & Get Free Quote
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
    </div>
  );
};

export default ContactForm; 