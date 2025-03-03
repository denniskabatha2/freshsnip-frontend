
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
import { UserPlus, User, Mail, Phone, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Customers = () => {
  const { toast } = useToast();

  const handleAddCustomer = () => {
    toast({
      title: "Add Customer",
      description: "Opening new customer registration form.",
    });
  };

  const handleCustomerDetails = (name: string) => {
    toast({
      title: "Customer Details",
      description: `Viewing details for ${name}.`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Customer Management</h1>
          <p className="text-muted-foreground">View and manage your customer base</p>
        </div>
        <Button onClick={handleAddCustomer}>
          <UserPlus className="mr-2 h-4 w-4" />
          Add New Customer
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-500 font-medium">↑ 4%</span> from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">New Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">64</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-500 font-medium">↑ 8%</span> from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Returning Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">76%</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-500 font-medium">↑ 2%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Customer Directory</CardTitle>
          <CardDescription>Manage your customer database</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-2">
              <div className="font-medium">Customer</div>
              <div className="flex gap-6">
                <div className="text-center w-24">Contact</div>
                <div className="text-center w-24">Last Visit</div>
                <div className="text-center w-24">Total Visits</div>
                <div className="w-20"></div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-xs text-muted-foreground">Member since Jan 2023</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-center w-24 flex flex-col">
                  <div className="flex items-center text-xs gap-1 justify-center">
                    <Mail className="h-3 w-3" />
                    <span>Email</span>
                  </div>
                  <div className="flex items-center text-xs gap-1 justify-center">
                    <Phone className="h-3 w-3" />
                    <span>Phone</span>
                  </div>
                </div>
                <div className="text-center w-24 flex items-center justify-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>2 weeks ago</span>
                </div>
                <div className="text-center w-24">12</div>
                <div className="w-20">
                  <Button variant="outline" size="sm" onClick={() => handleCustomerDetails("John Doe")}>
                    Details
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium">Jane Smith</p>
                  <p className="text-xs text-muted-foreground">Member since Mar 2023</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-center w-24 flex flex-col">
                  <div className="flex items-center text-xs gap-1 justify-center">
                    <Mail className="h-3 w-3" />
                    <span>Email</span>
                  </div>
                  <div className="flex items-center text-xs gap-1 justify-center">
                    <Phone className="h-3 w-3" />
                    <span>Phone</span>
                  </div>
                </div>
                <div className="text-center w-24 flex items-center justify-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>Yesterday</span>
                </div>
                <div className="text-center w-24">8</div>
                <div className="w-20">
                  <Button variant="outline" size="sm" onClick={() => handleCustomerDetails("Jane Smith")}>
                    Details
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium">Robert Johnson</p>
                  <p className="text-xs text-muted-foreground">Member since Feb 2023</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-center w-24 flex flex-col">
                  <div className="flex items-center text-xs gap-1 justify-center">
                    <Mail className="h-3 w-3" />
                    <span>Email</span>
                  </div>
                  <div className="flex items-center text-xs gap-1 justify-center">
                    <Phone className="h-3 w-3" />
                    <span>Phone</span>
                  </div>
                </div>
                <div className="text-center w-24 flex items-center justify-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>1 month ago</span>
                </div>
                <div className="text-center w-24">3</div>
                <div className="w-20">
                  <Button variant="outline" size="sm" onClick={() => handleCustomerDetails("Robert Johnson")}>
                    Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">View All Customers</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Customers;
