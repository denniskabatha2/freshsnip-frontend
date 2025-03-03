
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, CreditCard, Scissors } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Appointments = () => {
  const { toast } = useToast();

  const handleReschedule = () => {
    toast({
      title: "Reschedule requested",
      description: "We'll contact you shortly to confirm your new appointment time.",
    });
  };

  const handleCancel = () => {
    toast({
      title: "Appointment cancelled",
      description: "Your appointment has been cancelled successfully.",
      variant: "destructive",
    });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">My Appointments</h1>
      <p className="text-muted-foreground">Manage your upcoming barber appointments</p>
      
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Haircut & Beard Trim</CardTitle>
            <CardDescription>With John Barber</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4" />
              <span>Monday, June 12, 2023</span>
            </div>
            <div className="flex items-center gap-2 text-sm mt-1">
              <Clock className="h-4 w-4" />
              <span>10:00 AM - 11:00 AM</span>
            </div>
            <div className="flex items-center gap-2 text-sm mt-1">
              <Scissors className="h-4 w-4" />
              <span>Regular Haircut, Beard Trim</span>
            </div>
            <div className="flex items-center gap-2 text-sm mt-1">
              <CreditCard className="h-4 w-4" />
              <span>$45.00</span>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleReschedule}>Reschedule</Button>
            <Button variant="destructive" onClick={handleCancel}>Cancel</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Haircut</CardTitle>
            <CardDescription>With Sarah Stylist</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4" />
              <span>Friday, June 23, 2023</span>
            </div>
            <div className="flex items-center gap-2 text-sm mt-1">
              <Clock className="h-4 w-4" />
              <span>2:30 PM - 3:15 PM</span>
            </div>
            <div className="flex items-center gap-2 text-sm mt-1">
              <Scissors className="h-4 w-4" />
              <span>Regular Haircut</span>
            </div>
            <div className="flex items-center gap-2 text-sm mt-1">
              <CreditCard className="h-4 w-4" />
              <span>$30.00</span>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleReschedule}>Reschedule</Button>
            <Button variant="destructive" onClick={handleCancel}>Cancel</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Appointments;
