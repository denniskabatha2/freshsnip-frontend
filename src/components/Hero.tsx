
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  image?: string;
  overlay?: boolean;
  centered?: boolean;
  fullHeight?: boolean;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  ctaText = "Book Now",
  ctaLink = "/booking",
  image = "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  overlay = true,
  centered = false,
  fullHeight = false,
  className = "",
}) => {
  return (
    <div
      className={`relative ${fullHeight ? 'min-h-screen' : 'min-h-[70vh]'} flex items-center ${
        centered ? 'justify-center text-center' : 'justify-start'
      } ${className}`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-15000 hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/20" />
      )}
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className={`max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {subtitle && (
            <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider uppercase bg-primary text-primary-foreground rounded-full animate-fade-in backdrop-blur-sm">
              {subtitle}
            </span>
          )}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6 animate-fade-in [animation-delay:200ms] font-serif">
            {title}
          </h1>
          
          {description && (
            <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in [animation-delay:400ms]">
              {description}
            </p>
          )}
          
          {ctaText && (
            <Link
              to={ctaLink}
              className="inline-flex items-center px-8 py-4 bg-white text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-colors duration-300 shadow-soft animate-fade-in [animation-delay:600ms]"
            >
              {ctaText}
              <ArrowRight size={16} className="ml-2" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
