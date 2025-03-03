
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Clock, 
  Scissors, 
  CreditCard, 
  Star, 
  MessageSquare, 
  Repeat 
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const History = () => {
  const { toast } = useToast();
  
  const handleRebook = (service: string) => {
    toast({
      title: "Rebooking initiated",
      description: `You're rebooking "${service}". Please select a date and time.`,
    });
  };
  
  const handleReview = (service: string) => {
    toast({
      title: "Leave a review",
      description: `Thanks for sharing your experience with "${service}".`,
    });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Appointment History</h1>
      <p className="text-muted-foreground">View your past appointments and services</p>
      
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Appointments</TabsTrigger>
          <TabsTrigger value="month">Last Month</TabsTrigger>
          <TabsTrigger value="quarter">Last 3 Months</TabsTrigger>
          <TabsTrigger value="year">Last Year</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Haircut & Beard Trim</CardTitle>
                  <CardDescription>With John Barber</CardDescription>
                </div>
                <div className="bg-secondary/50 px-2 py-1 rounded text-xs">
                  Completed
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-1 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>May 15, 2023</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>10:00 AM - 11:00 AM</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Scissors className="h-4 w-4" />
                  <span>Regular Haircut, Beard Trim</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CreditCard className="h-4 w-4" />
                  <span>$45.00</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={() => handleRebook("Haircut & Beard Trim")}>
                  <Repeat className="mr-2 h-4 w-4" />
                  Rebook
                </Button>
                <Button size="sm" variant="ghost" onClick={() => handleReview("Haircut & Beard Trim")}>
                  <Star className="mr-2 h-4 w-4" />
                  Review
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Premium Haircut</CardTitle>
                  <CardDescription>With Sarah Stylist</CardDescription>
                </div>
                <div className="bg-secondary/50 px-2 py-1 rounded text-xs">
                  Completed
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-1 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>April 2, 2023</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>2:30 PM - 3:30 PM</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Scissors className="h-4 w-4" />
                  <span>Premium Haircut with Wash</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CreditCard className="h-4 w-4" />
                  <span>$55.00</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={() => handleRebook("Premium Haircut")}>
                  <Repeat className="mr-2 h-4 w-4" />
                  Rebook
                </Button>
                <Button size="sm" variant="ghost" onClick={() => handleReview("Premium Haircut")}>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  View Review
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Beard Trim</CardTitle>
                  <CardDescription>With Mike Barber</CardDescription>
                </div>
                <div className="bg-secondary/50 px-2 py-1 rounded text-xs">
                  Completed
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-1 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>February 18, 2023</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>11:00 AM - 11:30 AM</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Scissors className="h-4 w-4" />
                  <span>Beard Trim & Shape</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CreditCard className="h-4 w-4" />
                  <span>$25.00</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={() => handleRebook("Beard Trim")}>
                  <Repeat className="mr-2 h-4 w-4" />
                  Rebook
                </Button>
                <Button size="sm" variant="ghost" onClick={() => handleReview("Beard Trim")}>
                  <Star className="mr-2 h-4 w-4" />
                  Review
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="month" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>No appointments in the last month</CardTitle>
              <CardDescription>Book your next appointment now</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <a href="/dashboard/booking">Book Now</a>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="quarter" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Haircut & Beard Trim</CardTitle>
                  <CardDescription>With John Barber</CardDescription>
                </div>
                <div className="bg-secondary/50 px-2 py-1 rounded text-xs">
                  Completed
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-1 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>May 15, 2023</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>10:00 AM - 11:00 AM</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Scissors className="h-4 w-4" />
                  <span>Regular Haircut, Beard Trim</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CreditCard className="h-4 w-4" />
                  <span>$45.00</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={() => handleRebook("Haircut & Beard Trim")}>
                  <Repeat className="mr-2 h-4 w-4" />
                  Rebook
                </Button>
                <Button size="sm" variant="ghost" onClick={() => handleReview("Haircut & Beard Trim")}>
                  <Star className="mr-2 h-4 w-4" />
                  Review
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="year" className="space-y-4">
          {/* All appointments shown in the "all" tab would show here too */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Haircut & Beard Trim</CardTitle>
                  <CardDescription>With John Barber</CardDescription>
                </div>
                <div className="bg-secondary/50 px-2 py-1 rounded text-xs">
                  Completed
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-1 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>May 15, 2023</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>10:00 AM - 11:00 AM</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Scissors className="h-4 w-4" />
                  <span>Regular Haircut, Beard Trim</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CreditCard className="h-4 w-4" />
                  <span>$45.00</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={() => handleRebook("Haircut & Beard Trim")}>
                  <Repeat className="mr-2 h-4 w-4" />
                  Rebook
                </Button>
                <Button size="sm" variant="ghost" onClick={() => handleReview("Haircut & Beard Trim")}>
                  <Star className="mr-2 h-4 w-4" />
                  Review
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Additional year-specific appointments would go here */}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default History;
