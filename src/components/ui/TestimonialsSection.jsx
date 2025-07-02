import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare, Send, User, ThumbsUp, Award, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const TestimonialsSection = () => {
  const [feedbackForm, setFeedbackForm] = useState({
    name: '',
    email: '',
    rating: 0,
    review: '',
    projectType: '',
    location: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const existingTestimonials = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      location: 'Bristol',
      rating: 5,
      projectType: 'Garden Design',
      review: 'GroundCover transformed our garden beyond our wildest dreams. The team was professional, creative, and delivered exceptional quality. Our outdoor space is now our favorite part of the house!',
      date: '2024-11-15'
    },
    {
      id: 2,
      name: 'David Thompson',
      location: 'Bath',
      rating: 5,
      projectType: 'Patio Installation',
      review: 'Outstanding work from start to finish. The new patio and landscaping has completely transformed our property. Highly recommend GroundCover for anyone looking for premium quality.',
      date: '2024-10-28'
    },
    {
      id: 3,
      name: 'Emma Williams',
      location: 'Gloucester',
      rating: 5,
      projectType: 'Complete Garden Makeover',
      review: 'We couldn\'t be happier with the results. The team listened to our vision and created something even better than we imagined. The attention to detail is incredible.',
      date: '2024-10-12'
    },
    {
      id: 4,
      name: 'James Parker',
      location: 'Cheltenham',
      rating: 5,
      projectType: 'Commercial Landscaping',
      review: 'GroundCover handled our office complex landscaping with complete professionalism. The project was completed on time and within budget. Excellent service all around.',
      date: '2024-09-30'
    },
    {
      id: 5,
      name: 'Rachel Cooper',
      location: 'Swindon',
      rating: 5,
      projectType: 'Garden Maintenance',
      review: 'Their ongoing maintenance service keeps our garden looking perfect year-round. Reliable, professional, and they really care about the quality of their work.',
      date: '2024-09-18'
    },
    {
      id: 6,
      name: 'Michael Brown',
      location: 'Taunton',
      rating: 5,
      projectType: 'Driveway & Landscaping',
      review: 'From initial consultation to final completion, GroundCover exceeded every expectation. The new driveway and surrounding landscaping looks absolutely stunning.',
      date: '2024-08-22'
    }
  ];

  const projectTypes = [
    'Garden Design & Landscaping',
    'Patio & Driveway Installation',
    'Garden Maintenance',
    'Lawn Care & Treatment',
    'Tree Surgery & Pruning',
    'Fencing & Decking',
    'Commercial Landscaping',
    'Other'
  ];

  const handleStarClick = (rating) => {
    setFeedbackForm(prev => ({ ...prev, rating }));
  };

  const handleInputChange = (e) => {
    setFeedbackForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields
    if (!feedbackForm.name || !feedbackForm.email || !feedbackForm.rating || !feedbackForm.review) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields including your rating.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Thank you for your feedback! ⭐",
        description: "We really appreciate you taking the time to share your experience with us.",
        className: "bg-green-600 text-white",
      });
      
      // Reset form
      setFeedbackForm({
        name: '',
        email: '',
        rating: 0,
        review: '',
        projectType: '',
        location: ''
      });
    }, 2000);
  };

  const renderStars = (rating, interactive = false, size = 'w-5 h-5') => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${size} ${
              star <= rating 
                ? 'text-[#fedd55] fill-[#fedd55]' 
                : 'text-gray-300'
            } ${interactive ? 'cursor-pointer hover:text-[#fedd55] transition-colors' : ''}`}
            onClick={interactive ? () => handleStarClick(star) : undefined}
          />
        ))}
      </div>
    );
  };

  const averageRating = existingTestimonials.reduce((sum, testimonial) => sum + testimonial.rating, 0) / existingTestimonials.length;

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#5B8B6B]/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <MessageSquare className="w-5 h-5 text-[#5B8B6B]" />
            <span className="text-sm font-medium text-[#5B8B6B]">Customer Feedback</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#5B8B6B] to-[#7A5E3A] bg-clip-text text-transparent mb-6">
            What Our Customers Say
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            {renderStars(Math.round(averageRating), false, 'w-8 h-8')}
            <span className="text-2xl font-bold text-[#5B8B6B]">{averageRating.toFixed(1)}</span>
            <span className="text-gray-600">({existingTestimonials.length} reviews)</span>
          </div>
          
          <p className="text-xl text-[#7A5E3A] max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from our satisfied customers across the South West
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Testimonials Display */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-[#5B8B6B] mb-8 flex items-center gap-3">
              <Award className="w-8 h-8 text-[#fedd55]" />
              Customer Reviews
            </h3>
            
            <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2">
              {existingTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#5B8B6B] to-[#7A5E3A] rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#5B8B6B] text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.location} • {testimonial.projectType}</p>
                      <div className="mt-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-6 h-6 text-[#fedd55] opacity-50" />
                    <p className="text-[#7A5E3A] leading-relaxed pl-4">
                      {testimonial.review}
                    </p>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-gray-400">
                      {new Date(testimonial.date).toLocaleDateString('en-GB', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                    <ThumbsUp className="w-4 h-4 text-[#fedd55]" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Feedback Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl p-8"
          >
            <h3 className="text-3xl font-bold text-[#5B8B6B] mb-6 flex items-center gap-3">
              <MessageSquare className="w-8 h-8 text-[#fedd55]" />
              Share Your Experience
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#5B8B6B] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={feedbackForm.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fedd55] focus:border-transparent transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#5B8B6B] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={feedbackForm.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fedd55] focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#5B8B6B] mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={feedbackForm.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fedd55] focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
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
                    value={feedbackForm.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fedd55] focus:border-transparent transition-all duration-300"
                    placeholder="e.g., Bristol, Bath"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#5B8B6B] mb-2">
                  Your Rating *
                </label>
                <div className="flex items-center gap-2">
                  {renderStars(feedbackForm.rating, true, 'w-8 h-8')}
                  <span className="ml-3 text-sm text-gray-600">
                    ({feedbackForm.rating > 0 ? `${feedbackForm.rating} star${feedbackForm.rating !== 1 ? 's' : ''}` : 'Click to rate'})
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#5B8B6B] mb-2">
                  Your Review *
                </label>
                <textarea
                  name="review"
                  value={feedbackForm.review}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fedd55] focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your experience with GroundCover. What did you think of our service, quality, and results?"
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
                    Submitting Review...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-3">
                    <Send className="w-5 h-5" />
                    Submit Review
                  </div>
                )}
              </Button>

              <p className="text-sm text-gray-500 text-center">
                Your feedback helps us continue to provide exceptional service to all our customers.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 