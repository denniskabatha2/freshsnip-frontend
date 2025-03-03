
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import CustomerDashboard from './CustomerDashboard';
import BarberDashboard from './BarberDashboard';
import AdminDashboard from './AdminDashboard';

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  // Render different dashboard based on user role
  if (user.role === 'customer') {
    return <CustomerDashboard />;
  } else if (user.role === 'barber') {
    return <BarberDashboard />;
  } else if (user.role === 'admin') {
    return <AdminDashboard />;
  }

  // Fallback
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <Card>
        <CardHeader>
          <CardTitle>Welcome back, {user.name}!</CardTitle>
          <CardDescription>You're signed in as {user.role}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Please contact support if you believe your access level is incorrect.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
