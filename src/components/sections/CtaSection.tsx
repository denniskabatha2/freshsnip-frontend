
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5"></div>
      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="max-w-3xl mx-auto text-center animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a Fresh Look?</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Join CleanCuts today and experience the difference.
            With over 11 premium services to choose from, our expert barbers 
            are ready to help you achieve your desired style.
          </p>
          <Link 
            to="/register"
            className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors duration-300 shadow-soft"
          >
            Register Now
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
