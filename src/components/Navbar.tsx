
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';
import Sidebar from './Sidebar';
import SidebarOverlay from './SidebarOverlay';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    setIsMobileMenuOpen(false);
    setIsSidebarOpen(false);
  }, [location.pathname]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    // Close mobile menu if it's open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Products', path: '/products' },
    { name: 'Look Book', path: '/lookbook' },
    { name: 'Membership', path: '/membership' },
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
              className="p-2 text-primary rounded-full hover:bg-primary/10 transition-colors mr-2"
              aria-label="Toggle Sidebar"
            >
              <Menu size={24} />
            </button>

            <Link 
              to="/" 
              className="relative z-10 text-2xl font-bold tracking-tighter text-foreground ml-2"
            >
              <span className="font-serif">clean</span>
              <span className="font-sans font-light">cuts</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'relative px-1 py-2 text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:text-primary/80 hover:after:origin-bottom-left hover:after:scale-x-100',
                    isActive(link.path) && 'text-primary after:scale-x-100 after:origin-bottom-left'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <ThemeToggle />
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative z-10 p-2 -mr-2 text-primary"
                aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Navigation */}
            <div
              className={cn(
                'fixed inset-0 z-0 flex flex-col items-center justify-center bg-background transition-transform duration-300 ease-in-out md:hidden',
                isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
              )}
            >
              <nav className="flex flex-col items-center space-y-6 py-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      'text-xl font-medium transition-colors hover:text-primary',
                      isActive(link.path) && 'text-primary'
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
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
