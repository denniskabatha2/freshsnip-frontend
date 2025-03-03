
import React from 'react';
import { Mail, Phone, User, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm: React.FC = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "We'll get back to you as soon as possible.",
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
        </div>
        
        <div className="space-y-2">
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
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="subject" className="block text-sm font-medium">
            Subject
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
              <MessageSquare size={16} />
            </div>
            <input
              type="text"
              id="subject"
              className="block w-full pl-10 rounded-lg border border-input bg-background px-3 py-2.5 text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="How can we help you?"
              required
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            className="block w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary min-h-[150px]"
            placeholder="Please provide details about your inquiry..."
            required
          />
        </div>
      </div>
      
      <button
        type="submit"
        className="w-full rounded-lg bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
