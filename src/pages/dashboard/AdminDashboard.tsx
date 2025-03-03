
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
import { BarChart, Users, Scissors, ShoppingBag, Clock, Calendar, DollarSign, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock chart component - in a real app you'd use recharts or similar
const SimpleChart = () => (
  <div className="w-full h-60 bg-muted/30 rounded-md flex items-center justify-center">
    <p className="text-muted-foreground">Revenue chart would render here</p>
  </div>
);

const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link to="/dashboard/reports">Reports</Link>
          </Button>
          <Button asChild>
            <Link to="/dashboard/settings">Settings</Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$24,563</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">487</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">New Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">64</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Barber Utilization</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">84%</div>
            <p className="text-xs text-muted-foreground">-2% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="staff">Staff</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
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
                <Button variant="outline" className="w-full">View All Services</Button>
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
                <Button variant="outline" className="w-full">Manage Events</Button>
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
                      <Button variant="outline" size="sm">Details</Button>
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
                      <Button variant="outline" size="sm">Details</Button>
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
                      <Button variant="outline" size="sm">Details</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Add New Barber</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="services">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Service Management</CardTitle>
                <CardDescription>Adjust pricing and availability</CardDescription>
              </div>
              <Button>Add Service</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-2">
                  <div className="font-medium">Service</div>
                  <div className="flex gap-8">
                    <div className="text-center w-20">Price</div>
                    <div className="text-center w-20">Duration</div>
                    <div className="text-center w-16">Status</div>
                    <div className="w-20"></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Scissors className="h-4 w-4" />
                    </div>
                    <span>Premium Haircut</span>
                  </div>
                  <div className="flex gap-8">
                    <div className="text-center w-20">$30.00</div>
                    <div className="text-center w-20">45 min</div>
                    <div className="text-center w-16">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Active
                      </span>
                    </div>
                    <div className="w-20">
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Scissors className="h-4 w-4" />
                    </div>
                    <span>Beard Trim</span>
                  </div>
                  <div className="flex gap-8">
                    <div className="text-center w-20">$15.00</div>
                    <div className="text-center w-20">20 min</div>
                    <div className="text-center w-16">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Active
                      </span>
                    </div>
                    <div className="w-20">
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Scissors className="h-4 w-4" />
                    </div>
                    <span>Hair Coloring</span>
                  </div>
                  <div className="flex gap-8">
                    <div className="text-center w-20">$60.00</div>
                    <div className="text-center w-20">90 min</div>
                    <div className="text-center w-16">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Limited
                      </span>
                    </div>
                    <div className="w-20">
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="inventory">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Inventory Management</CardTitle>
                <CardDescription>Product stock and orders</CardDescription>
              </div>
              <Button>New Order</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-2">
                  <div className="font-medium">Product</div>
                  <div className="flex gap-8">
                    <div className="text-center w-20">Stock</div>
                    <div className="text-center w-20">Price</div>
                    <div className="text-center w-16">Status</div>
                    <div className="w-20"></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <ShoppingBag className="h-4 w-4" />
                    </div>
                    <span>Premium Hair Wax</span>
                  </div>
                  <div className="flex gap-8">
                    <div className="text-center w-20">24 units</div>
                    <div className="text-center w-20">$12.99</div>
                    <div className="text-center w-16">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        In Stock
                      </span>
                    </div>
                    <div className="w-20">
                      <Button variant="outline" size="sm">Order</Button>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <ShoppingBag className="h-4 w-4" />
                    </div>
                    <span>Beard Oil</span>
                  </div>
                  <div className="flex gap-8">
                    <div className="text-center w-20">8 units</div>
                    <div className="text-center w-20">$18.99</div>
                    <div className="text-center w-16">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Low
                      </span>
                    </div>
                    <div className="w-20">
                      <Button variant="outline" size="sm">Order</Button>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <ShoppingBag className="h-4 w-4" />
                    </div>
                    <span>Hair Spray</span>
                  </div>
                  <div className="flex gap-8">
                    <div className="text-center w-20">0 units</div>
                    <div className="text-center w-20">$14.99</div>
                    <div className="text-center w-16">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Out
                      </span>
                    </div>
                    <div className="w-20">
                      <Button variant="outline" size="sm">Order</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View All Products</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
