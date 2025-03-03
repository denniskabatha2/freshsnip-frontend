
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Booking', path: '/booking' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-12',
        isScrolled 
          ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm' 
          : 'py-6 bg-transparent'
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="relative z-10 text-2xl font-bold tracking-tighter"
          >
            <span className="font-serif">clean</span>
            <span className="font-sans font-light">cuts</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
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
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-10 p-2 -mr-2 text-primary"
            aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Navigation */}
          <div
            className={cn(
              'fixed inset-0 z-0 flex flex-col items-center justify-center bg-white transition-transform duration-300 ease-in-out md:hidden',
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            )}
          >
            <nav className="flex flex-col items-center space-y-8 py-8">
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
  );
};

export default Navbar;
