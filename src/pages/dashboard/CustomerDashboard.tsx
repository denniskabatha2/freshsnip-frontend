
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
import { Calendar, Clock, CreditCard, Scissors } from 'lucide-react';
import { Link } from 'react-router-dom';

const CustomerDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Customer Dashboard</h1>
        <Button asChild>
          <Link to="/booking">Book Appointment</Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
          </CardContent>
          <CardFooter>
            <Link to="/dashboard/appointments" className="text-xs text-blue-500 hover:underline">View all</Link>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Loyalty Points</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">250</div>
          </CardContent>
          <CardFooter>
            <Link to="/dashboard/rewards" className="text-xs text-blue-500 hover:underline">Redeem</Link>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Saved Styles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
          </CardContent>
          <CardFooter>
            <Link to="/dashboard/favorites" className="text-xs text-blue-500 hover:underline">View all</Link>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Last Visit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2 weeks ago</div>
          </CardContent>
          <CardFooter>
            <Link to="/dashboard/history" className="text-xs text-blue-500 hover:underline">View history</Link>
          </CardFooter>
        </Card>
      </div>

      <h2 className="text-xl font-semibold mt-6">Upcoming Appointments</h2>
      
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
            <Button variant="outline">Reschedule</Button>
            <Button variant="destructive">Cancel</Button>
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
            <Button variant="outline">Reschedule</Button>
            <Button variant="destructive">Cancel</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default CustomerDashboard;
