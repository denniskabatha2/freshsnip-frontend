
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      title: 'Classic Haircut',
      description: 'A timeless cut tailored to your face shape and hair type.',
      price: '$35',
      duration: '30 min',
      image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1344&q=80',
    },
    {
      title: 'Beard Trim & Shape',
      description: 'Expert beard grooming to achieve your desired style.',
      price: '$25',
      duration: '20 min',
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      featured: true,
    },
    {
      title: 'Hot Towel Shave',
      description: 'A luxurious straight razor shave with hot towel treatment.',
      price: '$40',
      duration: '45 min',
      image: 'https://images.unsplash.com/photo-1581591524425-c7e0978865fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    },
  ];

  return (
    <section className="bg-secondary section-padding">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-xl mx-auto mb-16 animate-on-scroll">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider uppercase bg-background rounded-full">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Premium Grooming Services</h2>
          <p className="text-muted-foreground">
            From classic cuts to signature beard grooming, our expert barbers provide exceptional services tailored to your style preferences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-on-scroll">
          <Link 
            to="/services"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors duration-300 shadow-soft"
          >
            View All Services
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
