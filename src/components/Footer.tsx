
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link to="/" className="inline-block text-2xl font-bold tracking-tighter">
              <span className="font-serif">clean</span>
              <span className="font-sans font-light">cuts</span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Premium barber services with attention to detail for the modern gentleman.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a href="#" className="p-2 bg-background rounded-full text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="p-2 bg-background rounded-full text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="p-2 bg-background rounded-full text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-base font-semibold">Navigation</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-base font-semibold">Hours</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>10:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-base font-semibold">Contact</h3>
            <address className="not-italic text-muted-foreground space-y-3">
              <p>Roysambu, Nairobi</p>
              <p>Kenya</p>
              <p className="pt-2">
                <a href="tel:+254706870553" className="hover:text-primary transition-colors">
                  +254 706 870 553
                </a>
              </p>
              <p>
                <a href="mailto:info@cleancuts.com" className="hover:text-primary transition-colors">
                  info@cleancuts.com
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-muted text-center text-muted-foreground text-sm">
          <p>© {currentYear} Cleancuts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
