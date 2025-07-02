import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare, Send, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '@/lib/emailjs-config';

const SurveyPage = () => {
  const [surveyData, setSurveyData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    projectType: '',
    serviceRating: 0,
    qualityRating: 0,
    communicationRating: 0,
    valueRating: 0,
    overallRating: 0,
    bestAspects: '',
    improvements: '',
    detailedReview: '',
    wouldRecommend: '',
    projectCompletion: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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

  const handleStarClick = (category, rating) => {
    setSurveyData(prev => ({ ...prev, [category]: rating }));
  };

  const handleInputChange = (e) => {
    setSurveyData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!surveyData.name || !surveyData.email || !surveyData.overallRating || !surveyData.detailedReview) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields including your overall rating and detailed review.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Format the ratings for display
      const formatRating = (rating) => rating > 0 ? `${rating}/5 stars` : 'Not rated';
      
      // Prepare email template parameters
      const templateParams = {
        // Customer Information
        customer_name: surveyData.name,
        customer_email: surveyData.email,
        customer_phone: surveyData.phone || 'Not provided',
        customer_location: surveyData.location || 'Not provided',
        project_type: surveyData.projectType || 'Not specified',
        
        // Ratings
        overall_rating: formatRating(surveyData.overallRating),
        service_rating: formatRating(surveyData.serviceRating),
        quality_rating: formatRating(surveyData.qualityRating),
        communication_rating: formatRating(surveyData.communicationRating),
        value_rating: formatRating(surveyData.valueRating),
        
        // Feedback
        detailed_review: surveyData.detailedReview,
        best_aspects: surveyData.bestAspects || 'Not provided',
        improvements: surveyData.improvements || 'Not provided',
        would_recommend: surveyData.wouldRecommend || 'Not specified',
        project_completion: surveyData.projectCompletion || 'Not specified',
        
        // Additional info
        submission_date: new Date().toLocaleDateString('en-GB', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        
        // Formatted summary for easy reading
        rating_summary: `Overall: ${formatRating(surveyData.overallRating)} | Service: ${formatRating(surveyData.serviceRating)} | Quality: ${formatRating(surveyData.qualityRating)} | Communication: ${formatRating(surveyData.communicationRating)} | Value: ${formatRating(surveyData.valueRating)}`
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.surveyTemplateId, // Survey template ID from config
        templateParams,
        emailjsConfig.publicKey
      );

      console.log('Survey email sent successfully:', result);
      
      setIsSubmitting(false);
      toast({
        title: "Thank you for your valuable feedback! ⭐",
        description: `We really appreciate ${surveyData.name} taking the time to share your detailed experience with us. Your feedback has been sent to our team.`,
        className: "bg-green-600 text-white",
      });
      
      // Reset form after successful submission
      setSurveyData({
        name: '',
        email: '',
        phone: '',
        location: '',
        projectType: '',
        serviceRating: 0,
        qualityRating: 0,
        communicationRating: 0,
        valueRating: 0,
        overallRating: 0,
        bestAspects: '',
        improvements: '',
        detailedReview: '',
        wouldRecommend: '',
        projectCompletion: ''
      });

    } catch (error) {
      console.error('Failed to send survey email:', error);
      setIsSubmitting(false);
      toast({
        title: "Submission Error",
        description: "There was a problem sending your survey. Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  const renderStars = (rating, category, size = 'w-6 h-6') => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${size} ${
              star <= rating 
                ? 'text-[#FFC107] fill-[#FFC107]' 
                : 'text-gray-300'
            } cursor-pointer hover:text-[#FFC107] transition-colors`}
            onClick={() => handleStarClick(category, star)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Header */}
      <section className="relative py-32 bg-gradient-to-br from-[#5B8B6B] via-[#7A5E3A] to-[#5B8B6B] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/wetransfer_img_6702-jpeg_2025-07-01_0636/IMG_5223.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <MessageSquare className="w-5 h-5 text-[#FFC107]" />
              <span className="text-sm font-medium">Customer Feedback Survey</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight"
          >
            <span className="text-[#FFC107]">
              Share Your Experience
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl mb-12 text-gray-200 font-light max-w-4xl mx-auto leading-relaxed"
          >
            Your feedback helps us continue to provide exceptional landscaping services
          </motion.p>
        </div>
      </section>

      {/* Survey Form */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#5B8B6B] mb-4">Customer Satisfaction Survey</h2>
              <p className="text-lg text-[#7A5E3A]">Help us improve our services by sharing your honest feedback</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#5B8B6B] mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={surveyData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFC107] transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#5B8B6B] mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={surveyData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFC107] transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#5B8B6B] mb-2">Project Type</label>
                <select
                  name="projectType"
                  value={surveyData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFC107] transition-all"
                >
                  <option value="">Select your project type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Ratings */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#5B8B6B] border-b border-gray-200 pb-2">Rate Your Experience</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-2xl">
                    <h4 className="font-semibold text-[#5B8B6B] mb-3">Service Quality</h4>
                    {renderStars(surveyData.serviceRating, 'serviceRating')}
                  </div>

                  <div className="bg-gray-50 p-6 rounded-2xl">
                    <h4 className="font-semibold text-[#5B8B6B] mb-3">Work Quality</h4>
                    {renderStars(surveyData.qualityRating, 'qualityRating')}
                  </div>

                  <div className="bg-gray-50 p-6 rounded-2xl">
                    <h4 className="font-semibold text-[#5B8B6B] mb-3">Communication</h4>
                    {renderStars(surveyData.communicationRating, 'communicationRating')}
                  </div>

                  <div className="bg-gray-50 p-6 rounded-2xl">
                    <h4 className="font-semibold text-[#5B8B6B] mb-3">Value for Money</h4>
                    {renderStars(surveyData.valueRating, 'valueRating')}
                  </div>
                </div>

                <div className="bg-[#5B8B6B]/5 p-8 rounded-2xl border-2 border-[#5B8B6B]/20">
                  <h4 className="font-bold text-[#5B8B6B] mb-4 text-xl">Overall Rating *</h4>
                  <div className="flex items-center gap-4">
                    {renderStars(surveyData.overallRating, 'overallRating', 'w-8 h-8')}
                    <span className="text-lg font-medium text-[#5B8B6B]">
                      ({surveyData.overallRating > 0 ? `${surveyData.overallRating} star${surveyData.overallRating !== 1 ? 's' : ''}` : 'Required'})
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Feedback */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#5B8B6B] border-b border-gray-200 pb-2">Your Detailed Feedback</h3>

                <div>
                  <label className="block text-sm font-semibold text-[#5B8B6B] mb-2">Detailed Review of Your Experience *</label>
                  <textarea
                    name="detailedReview"
                    value={surveyData.detailedReview}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFC107] transition-all resize-none"
                    placeholder="Please share your complete experience with GroundCover - from initial contact to project completion..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#5B8B6B] mb-2">What did you like best about our service?</label>
                  <textarea
                    name="bestAspects"
                    value={surveyData.bestAspects}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFC107] transition-all resize-none"
                    placeholder="Tell us what impressed you most..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#5B8B6B] mb-3">Would you recommend GroundCover to others?</label>
                  <div className="flex flex-wrap gap-3">
                    {['Definitely', 'Probably', 'Maybe', 'Probably Not', 'Definitely Not'].map((option) => (
                      <label key={option} className="flex items-center">
                        <input
                          type="radio"
                          name="wouldRecommend"
                          value={option}
                          checked={surveyData.wouldRecommend === option}
                          onChange={handleInputChange}
                          className="mr-2 text-[#FFC107] focus:ring-[#FFC107]"
                        />
                        <span className="text-[#7A5E3A]">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#FFC107] hover:bg-[#FFD700] text-white font-semibold py-4 text-lg rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Submitting Survey...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-3">
                    <Send className="w-5 h-5" />
                    Submit Survey
                  </div>
                )}
              </Button>

              <p className="text-sm text-gray-500 text-center">
                Thank you for taking the time to provide feedback. Your responses help us maintain our high standards.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SurveyPage; 