
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PageWrapper } from '@/lib/transitions';
import { useAnimateOnScroll } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  useAnimateOnScroll();
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you shortly.",
    });
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <PageWrapper>
      <Navbar />
      
      <main className="pt-24 md:pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">Contact Us</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mb-12 animate-on-scroll">
            Have questions or want to book an appointment? Reach out to us using the contact information
            below or fill out the form.
          </p>
        </div>
        
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-primary/10 text-primary rounded-full p-3 h-12 w-12 flex items-center justify-center flex-shrink-0">
                    <MapPin />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Visit Us</h3>
                    <p className="text-muted-foreground">123 Styling Street<br />San Francisco, CA 94103</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-primary/10 text-primary rounded-full p-3 h-12 w-12 flex items-center justify-center flex-shrink-0">
                    <Phone />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Call Us</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+14155550123" className="hover:text-primary transition-colors">(415) 555-0123</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-primary/10 text-primary rounded-full p-3 h-12 w-12 flex items-center justify-center flex-shrink-0">
                    <Mail />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email Us</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:info@cleancuts.com" className="hover:text-primary transition-colors">info@cleancuts.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-primary/10 text-primary rounded-full p-3 h-12 w-12 flex items-center justify-center flex-shrink-0">
                    <Clock />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Opening Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 8:00 PM<br />
                      Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: 10:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764015555555!3d37.75781499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1655828013214!5m2!1sen!2sus" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0, borderRadius: '0.5rem' }} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cleancuts location"
                ></iframe>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="bg-card p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                    <Input id="name" name="name" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                    <Input id="phone" name="phone" type="tel" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input id="subject" name="subject" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Your Message</label>
                    <Textarea id="message" name="message" rows={5} required />
                  </div>
                  
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </PageWrapper>
  );
};

export default Contact;
