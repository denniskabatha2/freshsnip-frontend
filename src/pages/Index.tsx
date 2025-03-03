
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Scissors, Calendar, Clock, Award, Star, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Testimonial from '@/components/Testimonial';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PageWrapper } from '@/lib/transitions';
import { useAnimateOnScroll, staggeredAnimation } from '@/lib/animations';

const Index = () => {
  useAnimateOnScroll();

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

  const testimonials = [
    {
      quote: "My go-to place for haircuts. The attention to detail is unmatched and the atmosphere is always welcoming.",
      author: "Michael Thompson",
      role: "Regular Client",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
      rating: 5,
    },
    {
      quote: "The best hot towel shave experience I've ever had. Clean, precise, and incredibly relaxing.",
      author: "David Chen",
      role: "First-time Client",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
      rating: 5,
    },
    {
      quote: "I appreciate their commitment to quality. Worth every penny for the exceptional service.",
      author: "James Wilson",
      role: "Regular Client",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
      rating: 5,
    },
  ];

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

        {/* About Section */}
        <section className="section-padding">
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
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                    alt="Barber shop interior" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-card">
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

        {/* Services Section */}
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

        {/* Features Section */}
        <section className="section-padding">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center max-w-xl mx-auto mb-16 animate-on-scroll">
              <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider uppercase bg-secondary rounded-full">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Cleancuts Experience</h2>
              <p className="text-muted-foreground">
                We combine skilled craftsmanship with premium products and a relaxing atmosphere to provide an exceptional grooming experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <motion.div 
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-secondary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-14 w-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-5">
                  <Scissors size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-3">Expert Barbers</h3>
                <p className="text-muted-foreground">
                  Our team consists of experienced barbers who are passionate about their craft.
                </p>
              </motion.div>
              
              <motion.div 
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-secondary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="h-14 w-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-5">
                  <Calendar size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-3">Easy Booking</h3>
                <p className="text-muted-foreground">
                  Book your appointment online in seconds without any hassle.
                </p>
              </motion.div>
              
              <motion.div 
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-secondary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="h-14 w-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-5">
                  <Clock size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-3">Time Efficiency</h3>
                <p className="text-muted-foreground">
                  We respect your time with punctual service and efficient scheduling.
                </p>
              </motion.div>
              
              <motion.div 
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-secondary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="h-14 w-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-5">
                  <Award size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-3">Premium Quality</h3>
                <p className="text-muted-foreground">
                  We use only the finest products and tools for superior results.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-secondary section-padding">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center max-w-xl mx-auto mb-16 animate-on-scroll">
              <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider uppercase bg-background rounded-full">Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
              <p className="text-muted-foreground">
                Don't just take our word for it. Here's what our clients have to say about their Cleancuts experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
                  <Testimonial {...testimonial} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5"></div>
          <div className="container mx-auto px-6 md:px-12 relative">
            <div className="max-w-3xl mx-auto text-center animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a Fresh Look?</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Book your appointment today and experience the Cleancuts difference. 
                Our expert barbers are ready to help you achieve your desired style.
              </p>
              <Link 
                to="/booking"
                className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors duration-300 shadow-soft"
              >
                Book Your Appointment
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </PageWrapper>
  );
};

export default Index;
