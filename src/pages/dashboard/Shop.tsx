
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
import { 
  Store, 
  Map, 
  Clock, 
  Calendar, 
  Settings,
  Users,
  PenTool,
  ImagePlus
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Shop = () => {
  const { toast } = useToast();

  const handleUpdateHours = () => {
    toast({
      title: "Hours Updated",
      description: "Your shop hours have been updated successfully.",
    });
  };

  const handleUpdateSettings = () => {
    toast({
      title: "Settings Updated",
      description: "Shop settings have been updated successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Shop Management</h1>
          <p className="text-muted-foreground">Manage your barbershop details and settings</p>
        </div>
        <Button onClick={handleUpdateSettings}>
          <Settings className="mr-2 h-4 w-4" />
          Update Settings
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Shop Details</CardTitle>
            <CardDescription>Your barbershop's basic information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                <Store className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <p className="font-medium">Name</p>
                <p className="text-sm text-muted-foreground">CleanCuts Barbershop</p>
                <Button variant="outline" size="sm" className="mt-2">
                  <PenTool className="h-3 w-3 mr-1" />
                  Edit
                </Button>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                <Map className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <p className="font-medium">Address</p>
                <div className="text-sm text-muted-foreground">
                  <p>123 Main Street</p>
                  <p>San Francisco, CA 94103</p>
                </div>
                <Button variant="outline" size="sm" className="mt-2">
                  <PenTool className="h-3 w-3 mr-1" />
                  Edit
                </Button>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <p className="font-medium">Capacity</p>
                <p className="text-sm text-muted-foreground">5 barber stations</p>
                <Button variant="outline" size="sm" className="mt-2">
                  <PenTool className="h-3 w-3 mr-1" />
                  Edit
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Business Hours</CardTitle>
            <CardDescription>Your shop's operating hours</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>Monday</span>
              </div>
              <span>9:00 AM - 7:00 PM</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>Tuesday</span>
              </div>
              <span>9:00 AM - 7:00 PM</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>Wednesday</span>
              </div>
              <span>9:00 AM - 7:00 PM</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>Thursday</span>
              </div>
              <span>9:00 AM - 7:00 PM</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>Friday</span>
              </div>
              <span>9:00 AM - 8:00 PM</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>Saturday</span>
              </div>
              <span>10:00 AM - 6:00 PM</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>Sunday</span>
              </div>
              <span>Closed</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleUpdateHours} className="w-full">
              Update Hours
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Shop Photos</CardTitle>
            <CardDescription>Manage your barbershop images</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
              <div className="aspect-square bg-muted/50 rounded-md flex items-center justify-center">
                <span className="text-xs text-muted-foreground">Photo 1</span>
              </div>
              <div className="aspect-square bg-muted/50 rounded-md flex items-center justify-center">
                <span className="text-xs text-muted-foreground">Photo 2</span>
              </div>
              <div className="aspect-square bg-muted/50 rounded-md flex items-center justify-center">
                <span className="text-xs text-muted-foreground">Photo 3</span>
              </div>
              <div className="aspect-square bg-muted/50 rounded-md flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
                <ImagePlus className="h-6 w-6 text-muted-foreground/50" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              <ImagePlus className="mr-2 h-4 w-4" />
              Add More Photos
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Special Hours & Closures</CardTitle>
            <CardDescription>Manage holidays and special business hours</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Independence Day</p>
                  <p className="text-sm text-muted-foreground">July 4, 2023</p>
                  <p className="text-sm text-destructive">Closed</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Labor Day</p>
                  <p className="text-sm text-muted-foreground">September 4, 2023</p>
                  <p className="text-sm text-destructive">Closed</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Christmas Eve</p>
                  <p className="text-sm text-muted-foreground">December 24, 2023</p>
                  <p className="text-sm">10:00 AM - 3:00 PM</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <Calendar className="mr-2 h-4 w-4" />
              Add Special Hours
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Shop;
