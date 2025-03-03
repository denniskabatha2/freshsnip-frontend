
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
import { Calendar, Clock, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Schedule = () => {
  const { toast } = useToast();

  const handleBlockTime = () => {
    toast({
      title: "Time blocked",
      description: "The selected time slot has been blocked in your schedule.",
    });
  };

  const handleOpenSlot = () => {
    toast({
      title: "Slot opened",
      description: "The time slot is now available for bookings.",
    });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">My Schedule</h1>
      <p className="text-muted-foreground">Manage your availability and appointments</p>
      
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
        <div className="md:col-span-5">
          <Card>
            <CardHeader>
              <CardTitle>June 2023</CardTitle>
              <CardDescription>Manage your schedule and availability</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-1">
                {/* Calendar header */}
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-center font-medium text-sm py-2">{day}</div>
                ))}
                
                {/* Calendar days - first week with some days from previous month */}
                {[28, 29, 30, 31, 1, 2, 3].map((day) => (
                  <div 
                    key={`week1-${day}`} 
                    className={`text-center p-2 min-h-[80px] border ${day < 28 ? 'text-muted-foreground bg-muted/20' : ''}`}
                  >
                    <div className={`text-sm ${day < 28 ? 'text-muted-foreground' : ''}`}>{day}</div>
                    {day === 2 && (
                      <div className="mt-1 text-xs bg-primary/10 text-primary rounded p-1">
                        3 appointments
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Second week */}
                {[4, 5, 6, 7, 8, 9, 10].map((day) => (
                  <div 
                    key={`week2-${day}`} 
                    className={`text-center p-2 min-h-[80px] border ${day === 8 ? 'ring-2 ring-primary' : ''}`}
                  >
                    <div className="text-sm">{day}</div>
                    {day === 8 && (
                      <div className="mt-1 text-xs bg-primary/10 text-primary rounded p-1">
                        5 appointments
                      </div>
                    )}
                    {day === 10 && (
                      <div className="mt-1 text-xs bg-primary/10 text-primary rounded p-1">
                        2 appointments
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Remaining weeks - simplified for brevity */}
                {Array.from({ length: 21 }, (_, i) => i + 11).map((day) => (
                  <div 
                    key={`remaining-${day}`} 
                    className="text-center p-2 min-h-[80px] border"
                  >
                    <div className="text-sm">{day > 30 ? day - 30 : day}</div>
                    {day === 15 && (
                      <div className="mt-1 text-xs bg-primary/10 text-primary rounded p-1">
                        4 appointments
                      </div>
                    )}
                    {day === 22 && (
                      <div className="mt-1 text-xs bg-destructive/10 text-destructive rounded p-1">
                        Day off
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="md:col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Today's Schedule</CardTitle>
              <CardDescription>June 8, 2023</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="border-l-4 border-primary pl-4 py-2">
                <p className="font-medium">John Smith</p>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">9:00 AM - 10:00 AM</span>
                </div>
                <p className="text-sm mt-1">Haircut & Beard Trim</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4 py-2">
                <p className="font-medium">Mike Johnson</p>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">10:30 AM - 11:30 AM</span>
                </div>
                <p className="text-sm mt-1">Premium Haircut</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4 py-2">
                <p className="font-medium">David Williams</p>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">1:00 PM - 1:45 PM</span>
                </div>
                <p className="text-sm mt-1">Haircut</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">View All</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Manage Availability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col gap-3">
                <Button onClick={handleBlockTime} variant="outline">Block Time Off</Button>
                <Button onClick={handleOpenSlot}>Open New Slots</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
