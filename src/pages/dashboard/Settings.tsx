
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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/AuthContext';

const Settings = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile Updated",
      description: "Your profile information has been updated successfully.",
    });
  };
  
  const handleSaveNotifications = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Notification Settings Saved",
      description: "Your notification preferences have been updated.",
    });
  };
  
  const handleSavePassword = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Password Changed",
      description: "Your password has been changed successfully.",
    });
  };

  // Determine which tabs to show based on user role
  const showBusinessSettings = user?.role === 'barber' || user?.role === 'admin';
  const showAdminSettings = user?.role === 'admin';

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Account Settings</h1>
          <p className="text-muted-foreground">Manage your profile and preferences</p>
        </div>
        
        <div className="flex items-center gap-3">
          <Avatar className="h-16 w-16 border-2 border-primary/10">
            <AvatarImage src={user?.avatar} alt={user?.name} />
            <AvatarFallback className="text-lg">
              {user?.name?.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
      
      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-4xl">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          {showBusinessSettings && (
            <TabsTrigger value="business">Business</TabsTrigger>
          )}
          {showAdminSettings && (
            <TabsTrigger value="admin">Admin</TabsTrigger>
          )}
        </TabsList>
        
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSaveProfile} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue={user?.name || ''} />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue={user?.email || ''} />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+254 706 870 553" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input id="dob" type="date" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="Enter your address" />
                </div>
                
                {user?.role === 'customer' && (
                  <div className="space-y-2">
                    <Label htmlFor="preferences">Haircut Preferences</Label>
                    <Input id="preferences" placeholder="Describe your usual style preferences" />
                  </div>
                )}
                
                <Button type="submit">Save Changes</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Manage how we contact you</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSaveNotifications} className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="appointment-email">Appointment Reminders</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive email notifications about upcoming appointments
                      </p>
                    </div>
                    <Switch id="appointment-email" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="appointment-sms">SMS Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive text message reminders for appointments
                      </p>
                    </div>
                    <Switch id="appointment-sms" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="marketing">Marketing Communications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive emails about promotions and special offers
                      </p>
                    </div>
                    <Switch id="marketing" />
                  </div>
                  
                  {/* Show this option only for staff/admin */}
                  {(user?.role === 'barber' || user?.role === 'admin') && (
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="appointments">New Appointment Alerts</Label>
                        <p className="text-sm text-muted-foreground">
                          Get notified when a new appointment is booked
                        </p>
                      </div>
                      <Switch id="appointments" defaultChecked />
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="feedback">Feedback Requests</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive requests to review your experience after appointments
                      </p>
                    </div>
                    <Switch id="feedback" defaultChecked />
                  </div>
                </div>
                
                <Button type="submit">Save Preferences</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Password & Security</CardTitle>
              <CardDescription>Manage your account security settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSavePassword} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
                
                <Button type="submit">Change Password</Button>
              </form>
              
              <div className="pt-6 border-t">
                <h3 className="font-medium mb-4">Account Actions</h3>
                <div className="space-y-4">
                  <div>
                    <Button variant="outline" className="w-full sm:w-auto">
                      Download Personal Data
                    </Button>
                    <p className="text-sm text-muted-foreground mt-1">
                      Request a copy of all your personal data stored in our system.
                    </p>
                  </div>
                  
                  <div>
                    <Button variant="destructive" className="w-full sm:w-auto">
                      Delete Account
                    </Button>
                    <p className="text-sm text-muted-foreground mt-1">
                      Permanently delete your account and all associated data.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Business Settings - Only shown for barbers and admins */}
        {showBusinessSettings && (
          <TabsContent value="business">
            <Card>
              <CardHeader>
                <CardTitle>Business Settings</CardTitle>
                <CardDescription>Manage your business preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="working-hours">Working Hours</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <Input id="hours-from" type="time" defaultValue="09:00" />
                        <Input id="hours-to" type="time" defaultValue="18:00" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="break-time">Break Time</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <Input id="break-from" type="time" defaultValue="13:00" />
                        <Input id="break-to" type="time" defaultValue="14:00" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="availability">Days Available</Label>
                    <div className="grid grid-cols-3 sm:grid-cols-7 gap-2">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                        <div key={day} className="flex items-center space-x-2">
                          <Switch id={`day-${day}`} defaultChecked={day !== 'Sun'} />
                          <Label htmlFor={`day-${day}`}>{day}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service-duration">Default Service Duration (minutes)</Label>
                    <Input id="service-duration" type="number" defaultValue="30" />
                  </div>
                  
                  <Button type="submit">Save Business Settings</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        )}
        
        {/* Admin Settings - Only shown for admins */}
        {showAdminSettings && (
          <TabsContent value="admin">
            <Card>
              <CardHeader>
                <CardTitle>Administrative Settings</CardTitle>
                <CardDescription>System configuration options</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                        <p className="text-sm text-muted-foreground">
                          Enable maintenance mode for the customer-facing website
                        </p>
                      </div>
                      <Switch id="maintenance-mode" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="booking-enabled">Online Booking</Label>
                        <p className="text-sm text-muted-foreground">
                          Allow customers to book appointments online
                        </p>
                      </div>
                      <Switch id="booking-enabled" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="registration-enabled">User Registration</Label>
                        <p className="text-sm text-muted-foreground">
                          Allow new users to register accounts
                        </p>
                      </div>
                      <Switch id="registration-enabled" defaultChecked />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="booking-notice">Minimum Booking Notice (hours)</Label>
                    <Input id="booking-notice" type="number" defaultValue="2" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="max-bookings">Max Bookings Per Day</Label>
                    <Input id="max-bookings" type="number" defaultValue="20" />
                  </div>
                  
                  <Button type="submit">Save Admin Settings</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
};

export default Settings;
