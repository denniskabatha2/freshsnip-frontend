
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/sections/ServicesSection';
import CtaSection from '@/components/sections/CtaSection';
import { PageWrapper } from '@/lib/transitions';
import { useAnimateOnScroll } from '@/lib/animations';

const Services = () => {
  useAnimateOnScroll();

  return (
    <PageWrapper>
      <Navbar />
      
      <main className="pt-24 md:pt-32">
        <div className="container mx-auto px-6 md:px-12 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">Our Services</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mb-12 animate-on-scroll">
            We offer a range of premium barber services tailored to meet your needs. Our skilled barbers 
            are dedicated to providing you with the best grooming experience.
          </p>
        </div>
        
        <ServicesSection showHeading={false} />
        <CtaSection />
      </main>
      
      <Footer />
    </PageWrapper>
  );
};

export default Services;
