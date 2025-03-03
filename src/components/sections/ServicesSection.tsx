import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Scissors, Paintbrush, Droplet } from 'lucide-react';
import ServiceCard, { ServiceProps } from '@/components/ServiceCard';
import { Card, CardContent } from "@/components/ui/card";

interface ServicesSectionProps {
  showHeading?: boolean;
}

interface ServiceCategory {
  name: string;
  icon: React.ReactNode;
  description: string;
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
    {
      title: 'Luxury Fade Cut',
      description: 'Precision fade haircut with seamless gradient transitions.',
      price: '$45',
      duration: '45 min',
      image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      longDescription: 'Our luxury fade cut delivers a precise gradient effect that transitions seamlessly from skin to longer hair on top. This modern, clean style is customized to complement your face shape and personal style preferences.',
      benefits: [
        'Personalized consultation',
        'Precision machine and scissor work',
        'Perfect gradient transitions',
        'Hot towel finish',
        'Styling with premium products',
        'Haircare recommendations'
      ],
      notIncluded: [
        'Hair coloring',
        'Beard services'
      ]
    },
    {
      title: 'Hair & Scalp Treatment',
      description: 'Rejuvenating treatment to improve scalp health and hair quality.',
      price: '$50',
      duration: '40 min',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      longDescription: 'This specialized treatment addresses scalp concerns and improves overall hair health. Starting with a thorough analysis, we apply premium conditioning treatments to nourish your scalp and strengthen your hair from the roots.',
      benefits: [
        'Scalp analysis and consultation',
        'Deep cleansing treatment',
        'Specialized conditioning',
        'Scalp massage',
        'Hydration therapy',
        'Personalized home care advice'
      ],
      notIncluded: [
        'Haircut services',
        'Color treatments'
      ]
    },
    {
      title: 'Grey Blending',
      description: 'Subtle color treatment to reduce grey hair visibility for a natural look.',
      price: '$65',
      duration: '60 min',
      image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      longDescription: 'Our grey blending service offers a subtle, low-maintenance approach to color that reduces the visibility of grey hair while maintaining a natural appearance. This service is perfect for men who want to look refreshed without an obvious color change.',
      benefits: [
        'Color consultation',
        'Customized color formulation',
        'Natural-looking results',
        'Low-maintenance upkeep',
        'Finishing style',
        'Color care recommendations'
      ],
      notIncluded: [
        'Full color transformation',
        'Highlights or balayage'
      ]
    },
    {
      title: 'Father & Son Package',
      description: 'Special package for fathers and sons to enjoy quality grooming time together.',
      price: '$75',
      duration: '60 min',
      image: 'https://images.unsplash.com/photo-1582015752624-e8b1c8778076?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      longDescription: 'Our Father & Son Package creates a special bonding experience while providing quality haircuts for both. This service includes side-by-side appointments with our skilled barbers who will consult individually with father and son to achieve their desired looks.',
      benefits: [
        'Side-by-side service experience',
        'Professional consultation for both',
        'Custom haircuts tailored to each person',
        'Styling tips and product recommendations',
        'Complimentary beverages',
        'Discounted pricing compared to individual services'
      ],
      notIncluded: [
        'Beard services (available as add-on)',
        'Color treatments'
      ],
      featured: true
    },
    {
      title: 'Bridal Party Grooming',
      description: 'Comprehensive grooming services for the groom and groomsmen.',
      price: '$300+',
      duration: '3+ hours',
      image: 'https://images.unsplash.com/photo-1511763368359-48e9b8ac36ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      longDescription: 'Make your wedding day special with our comprehensive bridal party grooming package. We provide premium services for the groom and groomsmen, ensuring everyone looks their best for the big day. This package can be customized based on group size and service preferences.',
      benefits: [
        'Private salon experience',
        'Custom haircuts for each groomsman',
        'Hot towel shaves or beard grooming',
        'Complimentary drinks and refreshments',
        'Optional pre-wedding consultation',
        'Special gift for the groom',
        'Commemorative group photo'
      ],
      notIncluded: [
        'Transportation to/from venue',
        'Hair coloring services'
      ]
    },
    {
      title: 'Express Grooming',
      description: 'Quick touch-up service for busy professionals on the go.',
      price: '$20',
      duration: '15 min',
      image: 'https://images.unsplash.com/photo-1554519934-e32b1629d9ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      longDescription: 'Our Express Grooming service is designed for the busy professional who needs a quick touch-up between regular appointments. This service focuses on cleaning up the neck, sideburns, and edges to maintain your style and professional appearance.',
      benefits: [
        'No appointment necessary (subject to availability)',
        'Quick service without compromising quality',
        'Neck and line clean-up',
        'Edge refinement',
        'Light styling touch-up'
      ],
      notIncluded: [
        'Full haircut service',
        'Shampooing',
        'Beard trimming (beyond edge cleanup)'
      ]
    },
    {
      title: 'Signature Face Shave',
      description: 'Premium facial hair removal with skincare benefits.',
      price: '$45',
      duration: '30 min',
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      longDescription: 'Our Signature Face Shave goes beyond hair removal to provide skincare benefits. Beginning with hot towel preparation, your barber will use a straight razor for an exceptionally close shave, followed by a cold towel and premium aftercare products to soothe and protect your skin.',
      benefits: [
        'Pre-shave oil application',
        'Multiple hot towel applications',
        'Premium shaving cream lather',
        'Straight razor technique',
        'Cold towel finish',
        'Aftershave and moisturizer application',
        'Facial massage'
      ],
      notIncluded: [
        'Haircut services',
        'Extended facial treatments'
      ]
    },
  ];

  const categories: ServiceCategory[] = [
    {
      name: "Haircuts",
      icon: <Scissors className="h-10 w-10 text-primary" />,
      description: "Professional cuts for all hair types and styles"
    },
    {
      name: "Beard Care",
      icon: <Paintbrush className="h-10 w-10 text-primary" />,
      description: "Expert beard shaping, trimming, and maintenance"
    },
    {
      name: "Grooming Products",
      icon: <Droplet className="h-10 w-10 text-primary" />,
      description: "Premium styling and care products for home use"
    }
  ];

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
        
        {showHeading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {categories.map((category, index) => (
              <Card key={index} className="animate-on-scroll hover:shadow-md transition-all duration-300" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="pt-6 text-center">
                  <div className="mx-auto mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            ))}
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
