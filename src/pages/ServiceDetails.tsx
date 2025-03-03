
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PageWrapper } from '@/lib/transitions';
import { useAnimateOnScroll } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, Check, X } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import TestimonialHighlight from '@/components/TestimonialHighlight';
import { ServiceProps } from '@/components/ServiceCard';

interface ServiceDetailsMapType {
  [key: string]: ServiceProps;
}

const ServiceDetails = () => {
  useAnimateOnScroll();
  const { serviceId } = useParams<{ serviceId: string }>();
  
  const servicesMap: ServiceDetailsMapType = {
    'classic-haircut': {
      title: 'Classic Haircut',
      description: 'A timeless cut tailored to your face shape and hair type.',
      longDescription: 'Our classic haircut is designed to enhance your natural features while maintaining a timeless look. Each haircut begins with a consultation to understand your style preferences and hair goals, followed by a relaxing shampoo and conditioning treatment.',
      price: '$35',
      duration: '30 min',
      image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1344&q=80',
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
    'beard-trim': {
      title: 'Beard Trim & Shape',
      description: 'Expert beard grooming to achieve your desired style.',
      longDescription: 'Achieve the perfect beard shape with our expert trim service. Your barber will work with you to determine the ideal style and then meticulously trim, shape, and detail your beard for a clean, well-groomed look.',
      price: '$25',
      duration: '20 min',
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      featured: true,
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
    'hot-towel-shave': {
      title: 'Hot Towel Shave',
      description: 'A luxurious straight razor shave with hot towel treatment.',
      longDescription: 'Experience the ultimate in relaxation and precision with our signature hot towel shave. This traditional service begins with warm towel preparations to soften the beard, followed by a rich lather and a meticulous straight razor shave for incredibly smooth results.',
      price: '$40',
      duration: '45 min',
      image: 'https://images.unsplash.com/photo-1581591524425-c7e0978865fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
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
    'haircut-beard-combo': {
      title: 'Haircut & Beard Combo',
      description: 'Complete grooming package including haircut and beard service.',
      longDescription: 'The ultimate grooming experience combining our classic haircut with expert beard trimming and styling. This comprehensive service ensures both your hair and facial hair are perfectly styled to complement each other.',
      price: '$55',
      duration: '50 min',
      image: 'https://images.unsplash.com/photo-1593702288056-f9544fd2e7cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
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
    }
  };
  
  const service = serviceId ? servicesMap[serviceId] : null;
  
  const relatedServices = Object.entries(servicesMap)
    .filter(([id]) => id !== serviceId)
    .slice(0, 2)
    .map(([_, service]) => service);
    
  const testimonials = [
    {
      quote: "Best haircut I've had in years. The attention to detail was impressive.",
      author: "James Wilson",
      rating: 5
    },
    {
      quote: "Professional service with excellent results. Will definitely return.",
      author: "Michael Thompson",
      rating: 5
    }
  ];
  
  if (!service) {
    return (
      <PageWrapper>
        <Navbar />
        <main className="pt-24 md:pt-32 pb-24">
          <div className="container mx-auto px-6 md:px-12">
            <h1 className="text-3xl font-bold mb-6">Service Not Found</h1>
            <p className="mb-8">Sorry, we couldn't find the service you're looking for.</p>
            <Link to="/services">
              <Button>Return to Services</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </PageWrapper>
    );
  }
  
  return (
    <PageWrapper>
      <Navbar />
      
      <main className="pt-24 md:pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          <Link to="/services" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft size={16} className="mr-2" />
            Back to Services
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="animate-on-scroll">
              <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
              <div className="flex items-center text-muted-foreground mb-6">
                <Clock size={16} className="mr-2" />
                <span className="mr-4">{service.duration}</span>
                <span>{service.price}</span>
              </div>
              
              <p className="text-lg mb-8">{service.longDescription}</p>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">What's Included</h2>
                <ul className="space-y-2">
                  {service.benefits?.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={16} className="text-green-500 mr-3 mt-1" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {service.notIncluded && service.notIncluded.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Not Included</h2>
                  <ul className="space-y-2">
                    {service.notIncluded?.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <X size={16} className="text-red-500 mr-3 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <Link to="/booking">
                <Button size="lg" className="mt-4">Book This Service</Button>
              </Link>
            </div>
            
            <div className="animate-on-scroll" style={{ animationDelay: "100ms" }}>
              <div className="rounded-xl overflow-hidden shadow-lg h-80 md:h-96">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <Separator className="my-16" />
          
          <div className="mb-16 animate-on-scroll">
            <h2 className="text-2xl font-bold mb-8 text-center">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialHighlight 
                  key={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  rating={testimonial.rating}
                />
              ))}
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <h2 className="text-2xl font-bold mb-8 text-center">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedServices.map((service, index) => (
                <div key={index} className="bg-card rounded-xl overflow-hidden shadow-md flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground mr-4">{service.duration}</span>
                        <span className="font-medium">{service.price}</span>
                      </div>
                      <Link to={`/services/${Object.keys(servicesMap).find(key => servicesMap[key].title === service.title)}`}>
                        <Button variant="outline" size="sm">View Details</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </PageWrapper>
  );
};

export default ServiceDetails;
