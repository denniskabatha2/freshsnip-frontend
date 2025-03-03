
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Home, 
  Info, 
  Scissors, 
  Image, 
  ShoppingBag, 
  Book, 
  Crown, 
  Calendar, 
  Phone,
  ChevronRight,
  X
} from 'lucide-react';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import ThemeToggle from './ThemeToggle';

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Services', path: '/services', icon: Scissors },
    { name: 'Gallery', path: '/gallery', icon: Image },
    { name: 'Products', path: '/products', icon: ShoppingBag },
    { name: 'Look Book', path: '/lookbook', icon: Book },
    { name: 'Membership', path: '/membership', icon: Crown },
    { name: 'Booking', path: '/booking', icon: Calendar },
    { name: 'Contact', path: '/contact', icon: Phone },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div 
      className={cn(
        'fixed inset-y-0 left-0 z-50 w-72 bg-background border-r border-border shadow-lg transition-transform duration-300 ease-in-out transform',
        isOpen ? 'translate-x-0' : '-translate-x-full'
      )}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4">
          <Link to="/" className="text-2xl font-bold text-foreground" onClick={onClose}>
            <span className="font-serif">clean</span>
            <span className="font-sans font-light">cuts</span>
          </Link>
          <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
            <X size={20} />
            <span className="sr-only">Close sidebar</span>
          </Button>
        </div>
        
        <Separator className="mb-4" />
        
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={onClose}
                  className={cn(
                    'flex items-center p-3 rounded-md transition-colors hover:bg-accent group',
                    isActive(link.path) 
                      ? 'text-primary font-medium bg-primary/10' 
                      : 'text-foreground hover:text-primary'
                  )}
                >
                  <link.icon size={18} className="mr-3" />
                  <span>{link.name}</span>
                  <ChevronRight 
                    size={16} 
                    className={cn(
                      'ml-auto transition-transform',
                      isActive(link.path) ? 'opacity-100' : 'opacity-0 group-hover:opacity-70'
                    )} 
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-4 border-t border-border">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">© 2023 CleanCuts</span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
