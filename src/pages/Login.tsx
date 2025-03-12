import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import { User, Shield, Key } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface LocationState {
  from?: {
    pathname: string;
  };
}

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const locationState = location.state as LocationState;
  const from = locationState?.from?.pathname || '/';

  // If user is already logged in, redirect them
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        navigate(from, { replace: true });
      }
    };
    
    checkSession();
  }, [navigate, from]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const success = await login(email, password);
      
      if (success) {
        toast({
          title: 'Login Successful',
          description: 'Welcome back!',
          variant: 'default',
        });
        navigate(from, { replace: true });
      } else {
        toast({
          title: 'Login Failed',
          description: 'Invalid email or password.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Login Error',
        description: 'An error occurred during login.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = async (role: string) => {
    setIsLoading(true);
    let demoEmail = '';
    
    switch(role) {
      case 'customer':
        demoEmail = 'customer@example.com';
        break;
      case 'barber':
        demoEmail = 'barber@example.com';
        break;
      case 'admin':
        demoEmail = 'admin@example.com';
        break;
      default:
        demoEmail = 'customer@example.com';
    }
    
    setEmail(demoEmail);
    setPassword('password123');
    
    try {
      const success = await login(demoEmail, 'password123');
      
      if (success) {
        toast({
          title: 'Demo Login Successful',
          description: `Logged in as ${role}`,
          variant: 'default',
        });
        navigate(from, { replace: true });
      } else {
        toast({
          title: 'Demo Login Failed',
          description: 'Demo accounts may not be set up yet.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Login Error',
        description: 'An error occurred during login.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container flex items-center justify-center min-h-screen py-20">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Welcome Back</CardTitle>
            <CardDescription>Sign in to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="regular">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="regular">
                  <User className="mr-2 h-4 w-4" />
                  Customer
                </TabsTrigger>
                <TabsTrigger value="barber">
                  <Shield className="mr-2 h-4 w-4" />
                  Barber
                </TabsTrigger>
                <TabsTrigger value="admin">
                  <Key className="mr-2 h-4 w-4" />
                  Admin
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="regular">
                <form onSubmit={handleLogin}>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Input
                        id="email"
                        placeholder="customer@example.com"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                        disabled={isLoading}
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Input
                        id="password"
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                        disabled={isLoading}
                        required
                      />
                    </div>
                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? 'Signing In...' : 'Sign In'}
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => handleDemoLogin('customer')}
                      disabled={isLoading}
                    >
                      Try Demo Account
                    </Button>
                  </div>
                </form>
              </TabsContent>
              
              <TabsContent value="barber">
                <form onSubmit={handleLogin}>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Input
                        id="email"
                        placeholder="barber@example.com"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                        disabled={isLoading}
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Input
                        id="password"
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                        disabled={isLoading}
                        required
                      />
                    </div>
                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? 'Signing In...' : 'Staff Sign In'}
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => handleDemoLogin('barber')}
                      disabled={isLoading}
                    >
                      Try Demo Account
                    </Button>
                  </div>
                </form>
              </TabsContent>
              
              <TabsContent value="admin">
                <form onSubmit={handleLogin}>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Input
                        id="email"
                        placeholder="admin@example.com"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                        disabled={isLoading}
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Input
                        id="password"
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                        disabled={isLoading}
                        required
                      />
                    </div>
                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? 'Signing In...' : 'Admin Sign In'}
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => handleDemoLogin('admin')}
                      disabled={isLoading}
                    >
                      Try Demo Account
                    </Button>
                  </div>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col items-center justify-center gap-4">
            <div className="text-center text-sm text-muted-foreground">
              <div>
                Don't have an account?{' '}
                <Link to="/register" className="text-primary hover:underline">
                  Register now
                </Link>
              </div>
              <div className="mt-1">
                For demo purposes, click the "Try Demo Account" button
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Login;
