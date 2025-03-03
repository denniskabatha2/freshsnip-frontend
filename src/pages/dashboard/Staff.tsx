
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
import { UserPlus, UserCheck } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Staff = () => {
  const { toast } = useToast();

  const handleAddStaff = () => {
    toast({
      title: "Add Staff",
      description: "Opening new staff registration form.",
    });
  };

  const handleStaffDetails = (name: string) => {
    toast({
      title: "Staff Details",
      description: `Viewing details for ${name}.`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Staff Management</h1>
          <p className="text-muted-foreground">Manage barbers and staff members</p>
        </div>
        <Button onClick={handleAddStaff}>
          <UserPlus className="mr-2 h-4 w-4" />
          Add New Staff
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Staff Directory</CardTitle>
          <CardDescription>View and manage all staff members</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-2">
              <div className="font-medium">Name</div>
              <div className="flex gap-8">
                <div className="text-center w-20">Role</div>
                <div className="text-center w-20">Appointments</div>
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
                <div className="text-center w-20">Senior Barber</div>
                <div className="text-center w-20">124</div>
                <div className="text-center w-16">4.9/5</div>
                <div className="w-20">
                  <Button variant="outline" size="sm" onClick={() => handleStaffDetails("Michael Scott")}>
                    Details
                  </Button>
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
                <div className="text-center w-20">Barber</div>
                <div className="text-center w-20">98</div>
                <div className="text-center w-16">4.8/5</div>
                <div className="w-20">
                  <Button variant="outline" size="sm" onClick={() => handleStaffDetails("Sarah Johnson")}>
                    Details
                  </Button>
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
                <div className="text-center w-20">Receptionist</div>
                <div className="text-center w-20">-</div>
                <div className="text-center w-16">-</div>
                <div className="w-20">
                  <Button variant="outline" size="sm" onClick={() => handleStaffDetails("David Williams")}>
                    Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">View All Staff</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Staff;
