
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Scissors, Paintbrush, Droplet } from 'lucide-react';
import ServiceCard, { ServiceProps } from '@/components/ServiceCard';

interface ServicesSectionProps {
  showHeading?: boolean;
}

const ServicesSection = ({ showHeading = true }: ServicesSectionProps) => {
  const services: ServiceProps[] = [
    {
      title: 'Classic Haircut',
      description: 'A timeless cut tailored to your face shape and hair type.',
      price: '$35',
      duration: '30 min',
      image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1344&q=80',
      longDescription: 'Our classic haircut is designed to enhance your natural features while maintaining a timeless look. Each haircut begins with a consultation to understand your style preferences and hair goals, followed by a relaxing shampoo and conditioning treatment.',
      benefits: [
        'Professional consultation',
        'Relaxing shampoo & conditioning',
        'Precision cutting technique',
        'Styling with premium products',
        'Hot towel refresher'
      ],
      notIncluded: [
        'Beard trimming',
        'Color services'
      ]
    },
    {
      title: 'Beard Trim & Shape',
      description: 'Expert beard grooming to achieve your desired style.',
      price: '$25',
      duration: '20 min',
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      featured: true,
      longDescription: 'Achieve the perfect beard shape with our expert trim service. Your barber will work with you to determine the ideal style and then meticulously trim, shape, and detail your beard for a clean, well-groomed look.',
      benefits: [
        'Style consultation',
        'Precision trimming',
        'Line-up and edge detailing',
        'Hot towel treatment',
        'Beard oil application'
      ],
      notIncluded: [
        'Hair cutting services',
        'Beard coloring'
      ]
    },
    {
      title: 'Hot Towel Shave',
      description: 'A luxurious straight razor shave with hot towel treatment.',
      price: '$40',
      duration: '45 min',
      image: 'https://images.unsplash.com/photo-1581591524425-c7e0978865fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      longDescription: 'Experience the ultimate in relaxation and precision with our signature hot towel shave. This traditional service begins with warm towel preparations to soften the beard, followed by a rich lather and a meticulous straight razor shave for incredibly smooth results.',
      benefits: [
        'Multiple hot towel applications',
        'Pre-shave oil treatment',
        'Premium shaving cream application',
        'Straight razor precision shave',
        'After-shave balm and moisturizer',
        'Face massage'
      ],
      notIncluded: [
        'Haircut services',
        'Hair styling'
      ]
    },
    {
      title: 'Haircut & Beard Combo',
      description: 'Complete grooming package including haircut and beard service.',
      price: '$55',
      duration: '50 min',
      image: 'https://images.unsplash.com/photo-1593702288056-f9544fd2e7cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      longDescription: 'The ultimate grooming experience combining our classic haircut with expert beard trimming and styling. This comprehensive service ensures both your hair and facial hair are perfectly styled to complement each other.',
      benefits: [
        'Full haircut service',
        'Beard trim and shape',
        'Style consultation',
        'Hot towel treatment',
        'Premium product application',
        'Styling tips and recommendations'
      ],
      notIncluded: [
        'Color services',
        'Chemical treatments'
      ]
    },
  ];

  // On the services page, show all services. On the homepage, show only first 3
  const displayServices = showHeading ? services.slice(0, 3) : services;

  return (
    <section className="bg-secondary section-padding">
      <div className="container mx-auto px-6 md:px-12">
        {showHeading && (
          <div className="text-center max-w-xl mx-auto mb-16 animate-on-scroll">
            <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider uppercase bg-background rounded-full">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Premium Grooming Services</h2>
            <p className="text-muted-foreground">
              From classic cuts to signature beard grooming, our expert barbers provide exceptional services tailored to your style preferences.
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {displayServices.map((service, index) => (
            <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
        
        {showHeading && (
          <div className="text-center mt-12 animate-on-scroll">
            <Link 
              to="/services"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors duration-300 shadow-soft"
            >
              View All Services
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
