
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider uppercase bg-secondary rounded-full">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Crafting Confidence Through Exceptional Grooming</h2>
            <p className="text-muted-foreground mb-6">
              Since 2015, Cleancuts has been dedicated to providing premium barber services with meticulous attention to detail. Our skilled barbers combine traditional techniques with modern styles to create the perfect look for each client.
            </p>
            <p className="text-muted-foreground mb-8">
              We believe that a great haircut and grooming experience should be accessible, convenient, and consistently excellent.
            </p>
            <Link 
              to="/about"
              className="inline-flex items-center font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Learn more about us
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          
          <div className="relative animate-on-scroll">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-highlight">
              <img 
                src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1999&q=80" 
                alt="Premium barber shop" 
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-card border border-border/50 backdrop-blur-sm">
              <div className="flex items-center space-x-6">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold">8+</span>
                  <span className="text-sm text-muted-foreground">Years of Excellence</span>
                </div>
                <div className="h-12 w-px bg-border"></div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold">5000+</span>
                  <span className="text-sm text-muted-foreground">Happy Clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
