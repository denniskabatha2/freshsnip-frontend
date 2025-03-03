
import React from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PageWrapper } from '@/lib/transitions';
import { useAnimateOnScroll } from '@/lib/animations';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CtaSection from '@/components/sections/CtaSection';
import StaffSection from '@/components/sections/StaffSection';
import PricingSection from '@/components/sections/PricingSection';

const Index = () => {
  useAnimateOnScroll();

  return (
    <PageWrapper>
      <Navbar />
      
      <main>
        <Hero
          title="Premium Barber Experience for the Modern Gentleman"
          description="Exceptional haircuts, beard grooming, and hot towel shaves delivered with precision and care."
          ctaText="Book Appointment"
          ctaLink="/booking"
          image="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
          fullHeight
        />

        <AboutSection />
        <ServicesSection />
        <FeaturesSection />
        <StaffSection />
        <PricingSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      
      <Footer />
    </PageWrapper>
  );
};

export default Index;
