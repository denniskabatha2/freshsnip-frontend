
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
import { 
  BarChart, 
  Users, 
  Scissors, 
  ShoppingBag, 
  Calendar, 
  DollarSign, 
  UserCheck,
  LayoutDashboard,
  Settings as SettingsIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

// Mock chart component - in a real app you'd use recharts or similar
const SimpleChart = () => (
  <div className="w-full h-60 bg-muted/30 rounded-md flex items-center justify-center">
    <p className="text-muted-foreground">Revenue chart would render here</p>
  </div>
);

const AdminDashboard = () => {
  const { user } = useAuth();
  const { toast } = useToast();

  const handleExportReport = () => {
    toast({
      title: "Report Generated",
      description: "The performance report has been exported to CSV.",
    });
  };

  const handleStaffDetails = () => {
    toast({
      title: "Staff Details",
      description: "Viewing detailed staff performance metrics.",
    });
  };

  const handleManageEvents = () => {
    toast({
      title: "Event Management",
      description: "Opening event management dashboard.",
    });
  };

  const handleAddBarber = () => {
    toast({
      title: "Add New Barber",
      description: "Opening new barber registration form.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your barbershop operations</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleExportReport}>
            <BarChart className="mr-2 h-4 w-4" />
            Export Report
          </Button>
          <Button asChild>
            <Link to="/dashboard/settings">
              <SettingsIcon className="mr-2 h-4 w-4" />
              Settings
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 text-muted-foreground mr-2" />
              <div className="text-2xl font-bold">$24,563</div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-500 font-medium">↑ 12%</span> from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 text-muted-foreground mr-2" />
              <div className="text-2xl font-bold">487</div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-500 font-medium">↑ 5%</span> from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">New Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Users className="h-4 w-4 text-muted-foreground mr-2" />
              <div className="text-2xl font-bold">64</div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-500 font-medium">↑ 8%</span> from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Barber Utilization</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Scissors className="h-4 w-4 text-muted-foreground mr-2" />
              <div className="text-2xl font-bold">84%</div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-red-500 font-medium">↓ 2%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-4">
          <TabsTrigger value="overview">
            <LayoutDashboard className="h-4 w-4 mr-2" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="staff">
            <Users className="h-4 w-4 mr-2" />
            Staff
          </TabsTrigger>
          <TabsTrigger value="services">
            <Scissors className="h-4 w-4 mr-2" />
            Services
          </TabsTrigger>
          <TabsTrigger value="inventory">
            <ShoppingBag className="h-4 w-4 mr-2" />
            Inventory
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
                <CardDescription>Monthly revenue for the current year</CardDescription>
              </CardHeader>
              <CardContent>
                <SimpleChart />
              </CardContent>
              <CardFooter>
                <Button variant="outline" onClick={handleExportReport} className="ml-auto">
                  Download Report
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Top Services</CardTitle>
                <CardDescription>Most popular services this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Scissors className="h-4 w-4" />
                      <span>Premium Haircut</span>
                    </div>
                    <span className="font-medium">186 bookings</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Scissors className="h-4 w-4" />
                      <span>Beard Trim</span>
                    </div>
                    <span className="font-medium">143 bookings</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Scissors className="h-4 w-4" />
                      <span>Hair Coloring</span>
                    </div>
                    <span className="font-medium">97 bookings</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Scissors className="h-4 w-4" />
                      <span>Full Package</span>
                    </div>
                    <span className="font-medium">84 bookings</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full"
                  asChild
                >
                  <Link to="/dashboard/services">View All Services</Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Scheduled events and promotions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Summer Discount Week</p>
                      <p className="text-sm text-muted-foreground">Starts June 15, 2023</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Staff Training Day</p>
                      <p className="text-sm text-muted-foreground">June 20, 2023</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <ShoppingBag className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">New Product Launch</p>
                      <p className="text-sm text-muted-foreground">June 25, 2023</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={handleManageEvents}
                >
                  Manage Events
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="staff">
          <Card>
            <CardHeader>
              <CardTitle>Staff Performance</CardTitle>
              <CardDescription>Overview of barber productivity and ratings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-2">
                  <div className="font-medium">Barber</div>
                  <div className="flex gap-8">
                    <div className="text-center w-20">Appointments</div>
                    <div className="text-center w-20">Revenue</div>
                    <div className="text-center w-16">Rating</div>
                    <div className="w-20"></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <UserCheck className="h-4 w-4" />
                    </div>
                    <span>Michael Scott</span>
                  </div>
                  <div className="flex gap-8">
                    <div className="text-center w-20">124</div>
                    <div className="text-center w-20">$5,240</div>
                    <div className="text-center w-16">4.9/5</div>
                    <div className="w-20">
                      <Button variant="outline" size="sm" onClick={handleStaffDetails}>Details</Button>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <UserCheck className="h-4 w-4" />
                    </div>
                    <span>Sarah Johnson</span>
                  </div>
                  <div className="flex gap-8">
                    <div className="text-center w-20">98</div>
                    <div className="text-center w-20">$4,120</div>
                    <div className="text-center w-16">4.8/5</div>
                    <div className="w-20">
                      <Button variant="outline" size="sm" onClick={handleStaffDetails}>Details</Button>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <UserCheck className="h-4 w-4" />
                    </div>
                    <span>David Williams</span>
                  </div>
                  <div className="flex gap-8">
                    <div className="text-center w-20">112</div>
                    <div className="text-center w-20">$4,950</div>
                    <div className="text-center w-16">4.7/5</div>
                    <div className="w-20">
                      <Button variant="outline" size="sm" onClick={handleStaffDetails}>Details</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={handleAddBarber}>
                Add New Barber
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="services">
          <Card>
            <CardHeader>
              <CardTitle>Service Management</CardTitle>
              <CardDescription>Manage your barbershop's service offerings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-2">
                  <div className="font-medium">Service</div>
                  <div className="flex gap-8">
                    <div className="text-center w-20">Duration</div>
                    <div className="text-center w-20">Price</div>
                    <div className="text-center w-20">Bookings</div>
                    <div className="w-20"></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Scissors className="h-4 w-4" />
                    <span>Regular Haircut</span>
                  </div>
                  <div className="flex gap-8">
                    <div className="text-center w-20">30 min</div>
                    <div className="text-center w-20">$30</div>
                    <div className="text-center w-20">186</div>
                    <div className="w-20">
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Scissors className="h-4 w-4" />
                    <span>Premium Haircut</span>
                  </div>
                  <div className="flex gap-8">
                    <div className="text-center w-20">45 min</div>
                    <div className="text-center w-20">$45</div>
                    <div className="text-center w-20">124</div>
                    <div className="w-20">
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Scissors className="h-4 w-4" />
                    <span>Beard Trim</span>
                  </div>
                  <div className="flex gap-8">
                    <div className="text-center w-20">20 min</div>
                    <div className="text-center w-20">$25</div>
                    <div className="text-center w-20">143</div>
                    <div className="w-20">
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Scissors className="h-4 w-4" />
                    <span>Haircut & Beard</span>
                  </div>
                  <div className="flex gap-8">
                    <div className="text-center w-20">50 min</div>
                    <div className="text-center w-20">$50</div>
                    <div className="text-center w-20">98</div>
                    <div className="w-20">
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Add New Service</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="inventory">
          <Card>
            <CardHeader>
              <CardTitle>Inventory Management</CardTitle>
              <CardDescription>Track and manage your product inventory</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-2">
                  <div className="font-medium">Product</div>
                  <div className="flex gap-8">
                    <div className="text-center w-20">In Stock</div>
                    <div className="text-center w-20">Price</div>
                    <div className="text-center w-20">Sold</div>
                    <div className="w-20"></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="h-4 w-4" />
                    <span>Styling Gel</span>
                  </div>
                  <div className="flex gap-8">
                    <div className="text-center w-20">42</div>
                    <div className="text-center w-20">$15</div>
                    <div className="text-center w-20">78</div>
                    <div className="w-20">
                      <Button variant="outline" size="sm">Restock</Button>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="h-4 w-4" />
                    <span>Beard Oil</span>
                  </div>
                  <div className="flex gap-8">
                    <div className="text-center w-20">28</div>
                    <div className="text-center w-20">$22</div>
                    <div className="text-center w-20">64</div>
                    <div className="w-20">
                      <Button variant="outline" size="sm">Restock</Button>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="h-4 w-4" />
                    <span>Pomade</span>
                  </div>
                  <div className="flex gap-8">
                    <div className="text-center w-20">15</div>
                    <div className="text-center w-20">$18</div>
                    <div className="text-center w-20">56</div>
                    <div className="w-20">
                      <Button variant="outline" size="sm">Restock</Button>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="h-4 w-4" />
                    <span>Hair Wax</span>
                  </div>
                  <div className="flex gap-8">
                    <div className="text-center w-20">8</div>
                    <div className="text-center w-20">$20</div>
                    <div className="text-center w-20">48</div>
                    <div className="w-20 text-red-500 font-medium">Low Stock</div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Manage Inventory</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
