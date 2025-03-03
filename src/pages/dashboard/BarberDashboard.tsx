
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, DollarSign, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';

const BarberDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Barber Dashboard</h1>
        <Button asChild>
          <Link to="/dashboard/schedule">Manage Schedule</Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Today's Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
          </CardContent>
          <CardFooter>
            <Link to="/dashboard/schedule" className="text-xs text-blue-500 hover:underline">View schedule</Link>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">124</div>
          </CardContent>
          <CardFooter>
            <Link to="/dashboard/clients" className="text-xs text-blue-500 hover:underline">View clients</Link>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Weekly Earnings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$845</div>
          </CardContent>
          <CardFooter>
            <Link to="/dashboard/earnings" className="text-xs text-blue-500 hover:underline">View earnings</Link>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Rating</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8/5</div>
          </CardContent>
          <CardFooter>
            <Link to="/dashboard/reviews" className="text-xs text-blue-500 hover:underline">View reviews</Link>
          </CardFooter>
        </Card>
      </div>

      <Tabs defaultValue="today" className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-3">
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="tomorrow">Tomorrow</TabsTrigger>
          <TabsTrigger value="week">This Week</TabsTrigger>
        </TabsList>
        
        <TabsContent value="today">
          <Card>
            <CardHeader>
              <CardTitle>Today's Schedule</CardTitle>
              <CardDescription>June 12, 2023</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start border-l-4 border-primary pl-4 py-2">
                  <div className="flex-1">
                    <p className="font-medium">John Smith</p>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">9:00 AM - 10:00 AM</span>
                    </div>
                    <p className="text-sm mt-1">Haircut & Beard Trim</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Details</Button>
                    <Button size="sm">Check In</Button>
                  </div>
                </div>
                
                <div className="flex items-start border-l-4 border-primary pl-4 py-2">
                  <div className="flex-1">
                    <p className="font-medium">Mike Johnson</p>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">10:30 AM - 11:30 AM</span>
                    </div>
                    <p className="text-sm mt-1">Haircut, Shave, Hair Coloring</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Details</Button>
                    <Button size="sm">Check In</Button>
                  </div>
                </div>
                
                <div className="flex items-start border-l-4 border-primary pl-4 py-2">
                  <div className="flex-1">
                    <p className="font-medium">David Williams</p>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">1:00 PM - 1:45 PM</span>
                    </div>
                    <p className="text-sm mt-1">Haircut</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Details</Button>
                    <Button size="sm">Check In</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="tomorrow">
          <Card>
            <CardHeader>
              <CardTitle>Tomorrow's Schedule</CardTitle>
              <CardDescription>June 13, 2023</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start border-l-4 border-primary pl-4 py-2">
                  <div className="flex-1">
                    <p className="font-medium">Robert Brown</p>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">9:30 AM - 10:15 AM</span>
                    </div>
                    <p className="text-sm mt-1">Haircut & Style</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Details</Button>
                    <Button variant="outline" size="sm">Reschedule</Button>
                  </div>
                </div>
                
                <div className="flex items-start border-l-4 border-primary pl-4 py-2">
                  <div className="flex-1">
                    <p className="font-medium">Steven Davis</p>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">11:00 AM - 12:00 PM</span>
                    </div>
                    <p className="text-sm mt-1">Premium Haircut & Beard Styling</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Details</Button>
                    <Button variant="outline" size="sm">Reschedule</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="week">
          <Card>
            <CardHeader>
              <CardTitle>This Week's Summary</CardTitle>
              <CardDescription>June 12 - June 18, 2023</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span className="font-medium">Total Appointments</span>
                  </div>
                  <span className="font-bold">28</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    <span className="font-medium">Unique Clients</span>
                  </div>
                  <span className="font-bold">22</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    <span className="font-medium">Expected Revenue</span>
                  </div>
                  <span className="font-bold">$1,240</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BarChart className="h-5 w-5" />
                    <span className="font-medium">Busiest Day</span>
                  </div>
                  <span className="font-bold">Friday (8 appointments)</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View Full Schedule</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BarberDashboard;
