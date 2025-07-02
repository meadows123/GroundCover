import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, X, Clock, User, Mail, Phone, MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { useToast } from '@/components/ui/use-toast';

export const BookingModal = ({ isOpen, setIsOpen }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !name || !email) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields (Date, Time, Name, Email).',
        variant: 'destructive',
      });
      return;
    }

    console.log({ name, email, phone, selectedDate, selectedTime, message });
    
    localStorage.setItem('bookingRequest', JSON.stringify({
      name, email, phone, selectedDate: format(selectedDate, 'PPP'), selectedTime, message, submittedAt: new Date().toISOString()
    }));

    toast({
      title: 'Booking Request Sent! 🎉',
      description: `Thanks, ${name}! We've received your request for a visit on ${format(selectedDate, 'PPP')} at ${selectedTime}. We'll be in touch soon!`,
      className: 'bg-green-600 text-white',
    });
    setIsOpen(false);
    setSelectedDate(null);
    setSelectedTime('');
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            className="bg-white rounded-xl shadow-2xl w-full max-w-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4, ease: 'easeOut' }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="text-center mb-6">
              <CalendarIcon className="w-12 h-12 mx-auto text-[#5B8B6B] mb-3" />
              <h2 className="text-3xl font-bold text-[#5B8B6B]">Book a Free Visit</h2>
              <p className="text-[#7A5E3A] mt-1">
                Choose a date and time that works for you. We'll confirm your appointment shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Date Picker */}
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-[#5B8B6B] mb-1">
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal border-[#fedd55] hover:border-[#5B8B6B]",
                          !selectedDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4 text-[#fedd55]" />
                        {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-white" align="start">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        initialFocus
                        disabled={(date) => date < new Date(new Date().setDate(new Date().getDate() -1)) || date.getDay() === 0 || date.getDay() === 6}
                        className="text-[#5B8B6B]"
                        classNames={{
                          day_selected: "bg-[#5B8B6B] text-white hover:bg-[#5B8B6B] focus:bg-[#5B8B6B]",
                          day_today: "text-[#fedd55] font-bold",
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Time Slot Picker */}
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-[#5B8B6B] mb-1">
                    Preferred Time <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {timeSlots.map(time => (
                      <Button
                        key={time}
                        type="button"
                        variant={selectedTime === time ? "default" : "outline"}
                        onClick={() => setSelectedTime(time)}
                        className={cn(
                          "w-full",
                          selectedTime === time ? "bg-[#5B8B6B] text-white hover:bg-[#5B8B6B]/90" : "border-[#fedd55] text-[#7A5E3A] hover:bg-[#F5F5EB] hover:border-[#5B8B6B]"
                        )}
                      >
                        <Clock className="mr-2 h-4 w-4" /> {time}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Personal Details */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#5B8B6B] mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#fedd55]" />
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full pl-10 pr-3 py-2 border border-[#fedd55] rounded-md shadow-sm focus:ring-[#5B8B6B] focus:border-[#5B8B6B] sm:text-sm"
                      placeholder="e.g. John Doe"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#5B8B6B] mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#fedd55]" />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-10 pr-3 py-2 border border-[#fedd55] rounded-md shadow-sm focus:ring-[#5B8B6B] focus:border-[#5B8B6B] sm:text-sm"
                      placeholder="e.g. john.doe@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#5B8B6B] mb-1">
                    Phone Number (Optional)
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#fedd55]" />
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 border border-[#fedd55] rounded-md shadow-sm focus:ring-[#5B8B6B] focus:border-[#5B8B6B] sm:text-sm"
                      placeholder="e.g. 07123 456789"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#5B8B6B] mb-1">
                    Project Details (Optional)
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-[#fedd55]" />
                    <textarea
                      id="message"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 border border-[#fedd55] rounded-md shadow-sm focus:ring-[#5B8B6B] focus:border-[#5B8B6B] sm:text-sm"
                      placeholder="Tell us a bit about your project or any specific requirements..."
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-[#fedd55] hover:bg-[#fedd55] text-black font-semibold py-3 text-lg"
              >
                Request Free Visit <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};