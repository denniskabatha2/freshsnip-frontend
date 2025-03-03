
import React, { useState } from 'react';
import { Calendar, Clock, User, Scissors, Phone, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Service {
  id: string;
  name: string;
  duration: string;
  price: string;
}

const BookingForm: React.FC = () => {
  const { toast } = useToast();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  
  const services: Service[] = [
    { id: 'haircut', name: 'Haircut', duration: '30 min', price: '$35' },
    { id: 'haircut-beard', name: 'Haircut & Beard Trim', duration: '45 min', price: '$50' },
    { id: 'beard-trim', name: 'Beard Trim', duration: '15 min', price: '$20' },
    { id: 'hot-towel', name: 'Hot Towel Shave', duration: '45 min', price: '$45' },
    { id: 'hair-styling', name: 'Hair Styling', duration: '30 min', price: '$30' },
  ];
  
  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Appointment request submitted",
      description: "We'll confirm your appointment shortly via email.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 space-y-2">
            <label htmlFor="name" className="block text-sm font-medium">
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                <User size={16} />
              </div>
              <input
                type="text"
                id="name"
                className="block w-full pl-10 rounded-lg border border-input bg-background px-3 py-2.5 text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="John Doe"
                required
              />
            </div>
          </div>
          
          <div className="flex-1 space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium">
              Phone Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                <Phone size={16} />
              </div>
              <input
                type="tel"
                id="phone"
                className="block w-full pl-10 rounded-lg border border-input bg-background px-3 py-2.5 text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="(123) 456-7890"
                required
              />
            </div>
          </div>
        </div>
          
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
              <Mail size={16} />
            </div>
            <input
              type="email"
              id="email"
              className="block w-full pl-10 rounded-lg border border-input bg-background px-3 py-2.5 text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="johndoe@example.com"
              required
            />
          </div>
        </div>
            
        <div className="space-y-2">
          <label htmlFor="service" className="block text-sm font-medium">
            Select Service
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
              <Scissors size={16} />
            </div>
            <select
              id="service"
              className="block w-full pl-10 rounded-lg border border-input bg-background px-3 py-2.5 text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
              required
            >
              <option value="" disabled selected>Choose a service</option>
              {services.map(service => (
                <option key={service.id} value={service.id}>
                  {service.name} ({service.duration}, {service.price})
                </option>
              ))}
            </select>
          </div>
        </div>
              
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 space-y-2">
            <label htmlFor="date" className="block text-sm font-medium">
              Select Date
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                <Calendar size={16} />
              </div>
              <input
                type="date"
                id="date"
                className="block w-full pl-10 rounded-lg border border-input bg-background px-3 py-2.5 text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
          </div>
                
          <div className="flex-1 space-y-2">
            <label htmlFor="time" className="block text-sm font-medium">
              Select Time
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                <Clock size={16} />
              </div>
              <select
                id="time"
                className="block w-full pl-10 rounded-lg border border-input bg-background px-3 py-2.5 text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              >
                <option value="" disabled selected>Choose a time</option>
                {timeSlots.map(slot => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
                  
        <div className="space-y-2">
          <label htmlFor="notes" className="block text-sm font-medium">
            Special Requests (Optional)
          </label>
          <textarea
            id="notes"
            className="block w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px]"
            placeholder="Any special requests or details we should know..."
          />
        </div>
      </div>
                  
      <button
        type="submit"
        className="w-full rounded-lg bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
      >
        Book Appointment
      </button>
    </form>
  );
};

export default BookingForm;
