
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  duration?: string;
  image?: string;
  horizontal?: boolean;
  featured?: boolean;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  price,
  duration = "30 min",
  image,
  horizontal = false,
  featured = false,
  className,
}) => {
  return (
    <div 
      className={cn(
        "overflow-hidden rounded-2xl bg-card shadow-card transition-all duration-300 hover:shadow-highlight",
        featured && "ring-2 ring-primary",
        horizontal ? "grid grid-cols-1 md:grid-cols-2" : "flex flex-col",
        className
      )}
    >
      {image && (
        <div 
          className={cn(
            "relative overflow-hidden",
            horizontal ? "h-64 md:h-full" : "h-52"
          )}
        >
          <img 
            src={image} 
            alt={title} 
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
          {featured && (
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
              Popular
            </div>
          )}
        </div>
      )}
      
      <div className="flex flex-col justify-between p-6 md:p-8">
        <div>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-muted-foreground mb-6">{description}</p>
        </div>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <span className="text-lg font-semibold">{price}</span>
            {duration && (
              <span className="text-sm text-muted-foreground">{duration}</span>
            )}
          </div>
          
          <button 
            className="inline-flex items-center justify-center rounded-full bg-secondary px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
