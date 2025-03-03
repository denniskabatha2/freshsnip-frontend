
import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Calendar, Clock, Award } from 'lucide-react';

const FeaturesSection = () => {
  return (
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
  );
};

export default FeaturesSection;
