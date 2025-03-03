
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/sections/ServicesSection';
import CtaSection from '@/components/sections/CtaSection';
import { PageWrapper } from '@/lib/transitions';
import { useAnimateOnScroll } from '@/lib/animations';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, Scissors, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  useAnimateOnScroll();

  const pricingPlans = [
    {
      title: "Basic",
      price: "$35",
      description: "Essential grooming services",
      features: [
        "Classic haircut",
        "Neck shave",
        "Hot towel refresher",
        "Styling guidance"
      ],
      popular: false
    },
    {
      title: "Premium",
      price: "$55",
      description: "Complete grooming experience",
      features: [
        "Premium haircut",
        "Beard trim & shape",
        "Hot towel treatment",
        "Scalp massage",
        "Premium styling products"
      ],
      popular: true
    },
    {
      title: "Deluxe",
      price: "$85",
      description: "Ultimate luxury package",
      features: [
        "Designer haircut",
        "Hot towel shave",
        "Deep conditioning treatment",
        "Facial scrub",
        "Scalp & shoulder massage",
        "Complimentary beverage"
      ],
      popular: false
    }
  ];

  const processList = [
    {
      title: "Book an Appointment",
      description: "Schedule your visit online or give us a call to secure your preferred time slot.",
      icon: <Calendar className="h-12 w-12 p-2 bg-secondary rounded-full text-primary" />
    },
    {
      title: "Consultation",
      description: "Your barber will discuss your style preferences and recommend the best approach for your hair type and face shape.",
      icon: <Scissors className="h-12 w-12 p-2 bg-secondary rounded-full text-primary" />
    },
    {
      title: "Premium Service",
      description: "Relax and enjoy our premium grooming services performed with expert technique and attention to detail.",
      icon: <Check className="h-12 w-12 p-2 bg-secondary rounded-full text-primary" />
    },
    {
      title: "Finish & Style",
      description: "Your barber will complete your look with styling advice and product recommendations for maintaining your new style.",
      icon: <Clock className="h-12 w-12 p-2 bg-secondary rounded-full text-primary" />
    }
  ];

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
        
        <section className="section-padding">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center max-w-xl mx-auto mb-16 animate-on-scroll">
              <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider uppercase bg-background rounded-full">Pricing</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Service Packages</h2>
              <p className="text-muted-foreground">
                Choose a package that suits your needs or book individual services. All packages include a consultation with one of our expert barbers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {pricingPlans.map((plan, index) => (
                <Card key={index} className={`animate-on-scroll p-8 flex flex-col ${plan.popular ? 'ring-2 ring-primary shadow-lg' : 'shadow-sm'}`} style={{ animationDelay: `${index * 100}ms` }}>
                  {plan.popular && (
                    <div className="px-3 py-1 text-xs font-medium tracking-wider uppercase bg-primary text-primary-foreground rounded-full self-start mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold">{plan.title}</h3>
                  <div className="mt-4 mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">per visit</span>
                  </div>
                  <p className="text-muted-foreground mb-6">{plan.description}</p>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Check size={16} className="text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/booking">
                    <Button className={`w-full ${plan.popular ? '' : 'variant-outline'}`}>Book Now</Button>
                  </Link>
                </Card>
              ))}
            </div>
            
            <div className="bg-secondary rounded-xl p-8 md:p-12 animate-on-scroll">
              <h3 className="text-2xl font-bold mb-6 text-center">Our Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processList.map((process, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="mb-4">{process.icon}</div>
                    <h4 className="text-lg font-semibold mb-2">{process.title}</h4>
                    <p className="text-muted-foreground">{process.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <section className="section-padding bg-muted">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center max-w-xl mx-auto mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">
                Got questions about our services? Find answers to commonly asked questions below.
              </p>
            </div>
            
            <Tabs defaultValue="appointments" className="max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="appointments">Appointments</TabsTrigger>
                <TabsTrigger value="services">Services</TabsTrigger>
                <TabsTrigger value="products">Products</TabsTrigger>
              </TabsList>
              
              <TabsContent value="appointments" className="space-y-4">
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-medium mb-2">How do I book an appointment?</h3>
                  <p className="text-muted-foreground">You can book an appointment online through our website, give us a call, or walk in. We recommend booking in advance to secure your preferred time slot.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-medium mb-2">What if I need to cancel my appointment?</h3>
                  <p className="text-muted-foreground">We appreciate at least 24 hours notice for cancellations. You can cancel online or give us a call.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-medium mb-2">How early should I arrive for my appointment?</h3>
                  <p className="text-muted-foreground">We recommend arriving 5-10 minutes before your scheduled time to ensure a smooth check-in process.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="services" className="space-y-4">
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-medium mb-2">How long does a typical haircut take?</h3>
                  <p className="text-muted-foreground">A standard haircut typically takes 30-45 minutes, depending on your hair type and the complexity of the style.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-medium mb-2">Do you offer hair coloring services?</h3>
                  <p className="text-muted-foreground">We specialize in barbering services for men and don't currently offer hair coloring. We focus on cuts, trims, shaves, and styling.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-medium mb-2">What's included in a hot towel shave?</h3>
                  <p className="text-muted-foreground">Our hot towel shave includes pre-shave preparation with hot towels, premium shaving cream application, a precision straight razor shave, and post-shave treatment with moisturizer.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="products" className="space-y-4">
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-medium mb-2">What hair products do you use?</h3>
                  <p className="text-muted-foreground">We use premium quality products from brands like Baxter of California, American Crew, and Layrite, selected for their quality and performance.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-medium mb-2">Do you sell the products you use?</h3>
                  <p className="text-muted-foreground">Yes, we carry a selection of our professional-grade styling products for purchase, allowing you to maintain your style at home.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-medium mb-2">What products do you recommend for beard care?</h3>
                  <p className="text-muted-foreground">We recommend using beard oil daily to keep your beard soft and moisturized, along with a quality beard balm for styling and control.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        <CtaSection />
      </main>
      
      <Footer />
    </PageWrapper>
  );
};

export default Services;
