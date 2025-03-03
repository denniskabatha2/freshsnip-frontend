
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PageWrapper } from '@/lib/transitions';
import { useAnimateOnScroll } from '@/lib/animations';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

const Booking = () => {
  useAnimateOnScroll();
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [time, setTime] = React.useState<string | undefined>(undefined);
  const [service, setService] = React.useState<string | undefined>(undefined);
  const { toast } = useToast();

  const availableTimes = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const services = [
    { id: "haircut", name: "Haircut", duration: "45 min", price: "$35" },
    { id: "haircut-beard", name: "Haircut & Beard Trim", duration: "1 hour", price: "$45" },
    { id: "beard-trim", name: "Beard Trim", duration: "30 min", price: "$20" },
    { id: "hot-towel-shave", name: "Hot Towel Shave", duration: "45 min", price: "$30" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !time || !service) {
      toast({
        title: "Missing Information",
        description: "Please select a date, time, and service before booking.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Booking Successful!",
      description: `Your appointment for ${service} on ${format(date, 'PPP')} at ${time} has been booked.`,
    });
  };

  return (
    <PageWrapper>
      <Navbar />
      
      <main className="pt-24 md:pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">Book an Appointment</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mb-12 animate-on-scroll">
            Choose your preferred date, time, and service. Our team of expert barbers is ready to give you the perfect look.
          </p>
        </div>
        
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <h2 className="text-2xl font-semibold mb-6">Select Date & Time</h2>
              <div className="space-y-6">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                  disabled={{ before: new Date() }}
                />
                
                {date && (
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium flex items-center gap-2">
                      <CalendarIcon size={18} />
                      Available Times for {format(date, 'PPP')}
                    </h3>
                    <div className="grid grid-cols-3 gap-2">
                      {availableTimes.map((t) => (
                        <Button
                          key={t}
                          variant={time === t ? "default" : "outline"}
                          onClick={() => setTime(t)}
                          className="text-sm"
                        >
                          {t}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <h2 className="text-2xl font-semibold mb-6">Select Service</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {services.map((s) => (
                  <Card 
                    key={s.id}
                    className={`p-4 cursor-pointer transition-all ${service === s.name ? 'ring-2 ring-primary' : 'hover:shadow-md'}`}
                    onClick={() => setService(s.name)}
                  >
                    <h3 className="font-medium">{s.name}</h3>
                    <div className="text-sm text-muted-foreground mt-1">{s.duration}</div>
                    <div className="text-lg font-semibold mt-2">{s.price}</div>
                  </Card>
                ))}
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-medium mb-3">Appointment Summary</h3>
                  <div className="text-sm space-y-2">
                    <div className="flex justify-between">
                      <span>Date:</span>
                      <span>{date ? format(date, 'PPP') : 'Not selected'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time:</span>
                      <span>{time || 'Not selected'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Service:</span>
                      <span>{service || 'Not selected'}</span>
                    </div>
                  </div>
                </div>
                
                <Button type="submit" className="w-full">Book Appointment</Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </PageWrapper>
  );
};

export default Booking;
