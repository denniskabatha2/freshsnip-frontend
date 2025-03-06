
import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

// Define user roles
export type UserRole = 'customer' | 'barber' | 'admin';

// Define user type
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

// Define registration data type
export interface RegistrationData {
  name: string;
  email: string;
  password: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (data: RegistrationData) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();

  // Check for auth state on mount and subscribe to auth changes
  useEffect(() => {
    // Get the initial session
    const checkUser = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();

      if (session && !error) {
        // Fetch user profile from profiles table
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();

        if (profile && !profileError) {
          const userData: User = {
            id: profile.id,
            name: `${profile.first_name} ${profile.last_name}`,
            email: session.user.email!,
            role: profile.role as UserRole,
            avatar: profile.avatar_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${profile.first_name} ${profile.last_name}`,
          };
          setUser(userData);
          setIsAuthenticated(true);
        } else {
          // If we can't get the profile, just use the session data
          const userData: User = {
            id: session.user.id,
            name: session.user.email!.split('@')[0],
            email: session.user.email!,
            role: 'customer',
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${session.user.email}`,
          };
          setUser(userData);
          setIsAuthenticated(true);
        }
      }
    };

    checkUser();

    // Subscribe to auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_IN' && session) {
          // Fetch user profile
          const { data: profile, error: profileError } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', session.user.id)
            .single();

          if (profile && !profileError) {
            const userData: User = {
              id: profile.id,
              name: `${profile.first_name} ${profile.last_name}`,
              email: session.user.email!,
              role: profile.role as UserRole,
              avatar: profile.avatar_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${profile.first_name} ${profile.last_name}`,
            };
            setUser(userData);
            setIsAuthenticated(true);
          } else {
            // Fall back to session data
            const userData: User = {
              id: session.user.id,
              name: session.user.email!.split('@')[0],
              email: session.user.email!,
              role: 'customer',
              avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${session.user.email}`,
            };
            setUser(userData);
            setIsAuthenticated(true);
          }
        } else if (event === 'SIGNED_OUT') {
          setUser(null);
          setIsAuthenticated(false);
        }
      }
    );

    // Cleanup subscription
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast({
          title: 'Login Failed',
          description: error.message,
          variant: 'destructive',
        });
        return false;
      }

      // Success is handled by the auth state change listener
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const register = async (data: RegistrationData): Promise<boolean> => {
    try {
      // Register with Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            name: data.name,
            role: data.role,
          },
        },
      });

      if (authError) {
        toast({
          title: 'Registration Failed',
          description: authError.message,
          variant: 'destructive',
        });
        return false;
      }

      // We don't need to manually create the profile record since we have a trigger
      // that creates it when a new user is created in auth.users
      toast({
        title: 'Registration Successful',
        description: 'Your account has been created. Please log in.',
      });
      
      // Log the user out after successful registration so they can log in
      await logout();
      return true;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    }
  };

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        throw error;
      }
      // The auth state change listener will update the state
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
