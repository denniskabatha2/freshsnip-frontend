
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Crown, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingOption {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  buttonLink: string;
  icon?: React.ReactNode;
}

const PricingSection = () => {
  const pricingOptions: PricingOption[] = [
    {
      title: "Classic Package",
      price: "$35",
      description: "Essential grooming services for the busy professional",
      features: [
        "Classic haircut",
        "Basic beard trim",
        "Complimentary beverage",
        "Schedule flexibility"
      ],
      buttonText: "Book Classic",
      buttonLink: "/booking?package=basic",
      icon: <Check size={24} className="text-primary" />
    },
    {
      title: "Premium Package",
      price: "$55",
      description: "Enhanced grooming experience with added luxury",
      features: [
        "Premium haircut",
        "Beard styling",
        "Hot towel treatment",
        "Face massage",
        "Complimentary beverage",
        "Priority scheduling"
      ],
      popular: true,
      buttonText: "Book Premium",
      buttonLink: "/booking?package=premium",
      icon: <Star size={24} className="text-amber-500" />
    },
    {
      title: "Royal Experience",
      price: "$85",
      description: "Complete luxury treatment for the distinguished gentleman",
      features: [
        "Precision haircut",
        "Expert beard sculpting",
        "Hot towel shave",
        "Facial treatment",
        "Scalp massage",
        "Premium drink selection",
        "Private styling area",
        "Extended appointment time"
      ],
      buttonText: "Book Royal",
      buttonLink: "/booking?package=vip",
      icon: <Crown size={24} className="text-amber-600" />
    }
  ];

  return (
    <section className="bg-gradient-to-b from-background to-secondary/50 section-padding">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-xl mx-auto mb-16 animate-on-scroll">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider uppercase bg-secondary rounded-full">Pricing</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Select Your Grooming Package</h2>
          <p className="text-muted-foreground">
            Choose from our carefully curated service packages designed to meet your grooming needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingOptions.map((option, index) => (
            <Card 
              key={index} 
              className={`animate-on-scroll relative overflow-hidden ${option.popular ? 'ring-2 ring-primary shadow-highlight' : 'shadow-card'} hover:shadow-highlight hover:translate-y-[-8px] transition-all duration-300`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {option.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-medium px-4 py-1 transform translate-x-1/4 rotate-45 origin-top-left">
                  Most Popular
                </div>
              )}
              <CardContent className="pt-8 pb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-secondary p-3 rounded-full">
                    {option.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{option.title}</h3>
                <p className="text-4xl font-bold text-center mb-2">{option.price}</p>
                <p className="text-center text-muted-foreground mb-6">{option.description}</p>
                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check size={18} className="text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to={option.buttonLink}>
                  <Button className="w-full" variant={option.popular ? "default" : "outline"}>
                    {option.buttonText}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
