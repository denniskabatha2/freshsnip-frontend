
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Calendar, 
  ClipboardList, 
  Users, 
  Scissors, 
  ShoppingBag, 
  Settings, 
  CreditCard, 
  Clock,
  MessageSquare,
  Heart,
  BarChart,
  UserPlus,
  Store
} from 'lucide-react';

interface SidebarLink {
  icon: React.ElementType;
  label: string;
  href: string;
  roles: string[];
}

const DashboardSidebar = () => {
  const { user } = useAuth();
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  const links: SidebarLink[] = [
    // Common for all roles
    { 
      icon: LayoutDashboard, 
      label: 'Dashboard', 
      href: '/dashboard', 
      roles: ['customer', 'barber', 'admin'] 
    },
    
    // Customer links
    { 
      icon: Calendar, 
      label: 'My Appointments', 
      href: '/dashboard/appointments', 
      roles: ['customer'] 
    },
    { 
      icon: Clock, 
      label: 'Appointment History', 
      href: '/dashboard/history', 
      roles: ['customer'] 
    },
    { 
      icon: Heart, 
      label: 'Favorite Styles', 
      href: '/dashboard/favorites', 
      roles: ['customer'] 
    },
    { 
      icon: CreditCard, 
      label: 'Payment Methods', 
      href: '/dashboard/payment', 
      roles: ['customer'] 
    },
    
    // Barber links
    { 
      icon: Calendar, 
      label: 'Schedule', 
      href: '/dashboard/schedule', 
      roles: ['barber'] 
    },
    { 
      icon: ClipboardList, 
      label: 'Appointments', 
      href: '/dashboard/appointments', 
      roles: ['barber'] 
    },
    { 
      icon: Users, 
      label: 'My Clients', 
      href: '/dashboard/clients', 
      roles: ['barber'] 
    },
    { 
      icon: Scissors, 
      label: 'Services', 
      href: '/dashboard/services', 
      roles: ['barber'] 
    },
    
    // Admin links
    { 
      icon: Users, 
      label: 'Staff', 
      href: '/dashboard/staff', 
      roles: ['admin'] 
    },
    { 
      icon: UserPlus, 
      label: 'Customers', 
      href: '/dashboard/customers', 
      roles: ['admin'] 
    },
    { 
      icon: BarChart, 
      label: 'Analytics', 
      href: '/dashboard/analytics', 
      roles: ['admin'] 
    },
    { 
      icon: Store, 
      label: 'Shop Management', 
      href: '/dashboard/shop', 
      roles: ['admin'] 
    },
    { 
      icon: ShoppingBag, 
      label: 'Inventory', 
      href: '/dashboard/inventory', 
      roles: ['admin'] 
    },
    
    // Common for all roles
    { 
      icon: MessageSquare, 
      label: 'Messages', 
      href: '/dashboard/messages', 
      roles: ['customer', 'barber', 'admin'] 
    },
    { 
      icon: Settings, 
      label: 'Settings', 
      href: '/dashboard/settings', 
      roles: ['customer', 'barber', 'admin'] 
    },
  ];

  const filteredLinks = links.filter(link => 
    user && link.roles.includes(user.role)
  );

  return (
    <aside className="w-full md:w-64 flex-shrink-0 h-[calc(100vh-4rem)] bg-background overflow-y-auto">
      <div className="py-4">
        <div className="px-4 py-2">
          <div className="bg-secondary/50 rounded-lg px-3 py-2">
            <p className="text-sm font-medium">{user?.name}</p>
            <p className="text-xs text-muted-foreground capitalize">{user?.role} Account</p>
          </div>
        </div>
        
        <nav className="mt-5 px-2">
          <div className="space-y-1">
            {filteredLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
                  isActive(link.href)
                    ? 'bg-secondary text-secondary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                )}
              >
                <link.icon className="mr-3 h-5 w-5" />
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
