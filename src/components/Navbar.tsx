
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';
import Sidebar from './Sidebar';
import SidebarOverlay from './SidebarOverlay';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Primary links that will stay in the navbar
  const primaryNavLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Booking', path: '/booking' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-12',
          isScrolled 
            ? 'py-3 bg-background/90 backdrop-blur-md shadow-sm border-b border-border/50' 
            : 'py-6 bg-transparent'
        )}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* Sidebar Toggle Button */}
            <button
              onClick={toggleSidebar}
              className="p-2 text-primary rounded-full hover:bg-primary/10 transition-colors"
              aria-label="Toggle Sidebar"
            >
              <Menu size={24} />
            </button>

            <Link 
              to="/" 
              className="relative z-10 text-2xl font-bold tracking-tighter text-foreground mx-4"
            >
              <span className="font-serif">clean</span>
              <span className="font-sans font-light">cuts</span>
            </Link>

            {/* Desktop Navigation with more spacing */}
            <nav className="hidden md:flex items-center space-x-8">
              {primaryNavLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'relative px-2 py-2 text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:text-primary/80 hover:after:origin-bottom-left hover:after:scale-x-100',
                    isActive(link.path) && 'text-primary after:scale-x-100 after:origin-bottom-left'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <ThemeToggle />
            </nav>

            {/* Mobile View - Just show theme toggle */}
            <div className="md:hidden flex items-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar and Overlay */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <SidebarOverlay isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default Navbar;
