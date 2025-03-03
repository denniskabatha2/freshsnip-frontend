
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Clock, Check, X, Info } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';

export interface ServiceProps {
  title: string;
  description: string;
  price: string;
  duration?: string;
  image?: string;
  horizontal?: boolean;
  featured?: boolean;
  className?: string;
  benefits?: string[];
  notIncluded?: string[];
  longDescription?: string;
}

const ServiceCard: React.FC<ServiceProps> = ({
  title,
  description,
  price,
  duration = "30 min",
  image,
  horizontal = false,
  featured = false,
  className,
  benefits = [],
  notIncluded = [],
  longDescription,
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
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock size={14} className="mr-1" />
                <span>{duration}</span>
              </div>
            )}
          </div>
          
          <div className="flex space-x-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Info size={14} />
                  Details
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>{title}</DialogTitle>
                  <DialogDescription className="flex items-center text-muted-foreground">
                    <Clock size={14} className="mr-1" /> {duration} | {price}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="mt-4 space-y-4">
                  {image && (
                    <div className="overflow-hidden rounded-lg h-48">
                      <img src={image} alt={title} className="w-full h-full object-cover" />
                    </div>
                  )}
                  
                  <div>
                    <p className="text-base mb-4">{longDescription || description}</p>
                    
                    {benefits.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-medium mb-2">What's Included:</h4>
                        <ul className="space-y-1">
                          {benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <Check size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {notIncluded.length > 0 && (
                      <div>
                        <h4 className="font-medium mb-2">Not Included:</h4>
                        <ul className="space-y-1">
                          {notIncluded.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <X size={16} className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button className="w-full">Book This Service</Button>
                </div>
              </DialogContent>
            </Dialog>
            
            <Button size="sm">Book Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
