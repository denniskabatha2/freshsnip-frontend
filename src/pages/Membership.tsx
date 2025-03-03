
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Scissors, Sparkles, CalendarCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const membershipPlans = [
  {
    id: 'basic',
    name: 'Basic',
    price: 49.99,
    period: 'monthly',
    description: 'Essential grooming for the modern gentleman',
    features: [
      '2 haircuts per month',
      'Access to online booking',
      '10% off grooming products',
      'Complimentary beverage with service'
    ],
    isPopular: false,
    color: 'bg-card',
    buttonVariant: 'outline' as const
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 89.99,
    period: 'monthly',
    description: 'Enhanced services for the distinguished gentleman',
    features: [
      'Unlimited haircuts',
      'Monthly beard trim',
      '15% off grooming products',
      'Priority booking',
      'Complimentary hot towel service',
      'Neck and shoulder massage with service'
    ],
    isPopular: true,
    color: 'bg-primary/5 dark:bg-primary/10',
    buttonVariant: 'default' as const
  },
  {
    id: 'elite',
    name: 'Elite',
    price: 149.99,
    period: 'monthly',
    description: 'The ultimate grooming experience',
    features: [
      'Unlimited haircuts and styling',
      'Unlimited beard services',
      '25% off all grooming products',
      'VIP booking with 24/7 concierge',
      'Luxury grooming kit included',
      'Complimentary facial treatment monthly',
      'Extended massage with each service',
      'Exclusive access to member-only events'
    ],
    isPopular: false,
    color: 'bg-card',
    buttonVariant: 'outline' as const
  }
];

// FAQ content
const faqs = [
  {
    question: 'How do I sign up for a membership plan?',
    answer: 'You can sign up for any of our membership plans by visiting our location and speaking with our staff, calling us, or using our online form. We'll guide you through the process and answer any questions you might have.'
  },
  {
    question: 'Can I transfer my services to someone else?',
    answer: 'Membership services are non-transferable and can only be used by the member who signs up. Each membership is tied to an individual account and cannot be shared.'
  },
  {
    question: 'How do I book appointments with my membership?',
    answer: 'Members can book appointments through our website, mobile app, or by calling directly. Premium and Elite members receive priority scheduling options and can book further in advance.'
  },
  {
    question: 'Can I pause or cancel my membership?',
    answer: 'Yes, you can pause your membership for up to 3 months per year. Cancellations require a 30-day notice. Please contact our customer service for assistance with either option.'
  },
  {
    question: 'Do unused services roll over to the next month?',
    answer: 'Basic membership services do not roll over. Premium and Elite memberships include rollover services for up to 3 months, ensuring you never lose the value of your membership.'
  },
  {
    question: 'Are there any sign-up fees?',
    answer: 'There are no sign-up fees for any of our membership plans. You'll only pay the monthly fee for the plan you choose, with no hidden costs or commitments.'
  }
];

const benefitsContent = [
  {
    icon: <Scissors className="h-6 w-6 text-primary" />,
    title: 'Regular Grooming',
    description: 'Maintain your perfect look with regular cuts and trims at a fraction of the standard price.'
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: 'Save Time',
    description: 'Priority booking and dedicated appointment slots mean less waiting and more convenience.'
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
    title: 'Consistent Quality',
    description: 'Build a relationship with your preferred barber who knows your style preferences.'
  },
  {
    icon: <Sparkles className="h-6 w-6 text-primary" />,
    title: 'Exclusive Perks',
    description: 'Enjoy member-only benefits, discounts on products, and special treatments.'
  },
  {
    icon: <CalendarCheck className="h-6 w-6 text-primary" />,
    title: 'Flexible Scheduling',
    description: 'Book appointments that fit your schedule with our extended hours for members.'
  }
];

const PlanCard: React.FC<{ plan: typeof membershipPlans[0] }> = ({ plan }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className={`overflow-hidden h-full flex flex-col relative ${plan.color} ${plan.isPopular ? 'border-primary shadow-lg' : ''}`}>
        {plan.isPopular && (
          <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg">
            Most Popular
          </div>
        )}
        
        <CardHeader className="pb-6">
          <CardTitle className="text-2xl font-bold font-serif text-center">{plan.name}</CardTitle>
          <div className="text-center mt-2">
            <span className="text-4xl font-bold">${plan.price}</span>
            <span className="text-muted-foreground ml-1">/{plan.period}</span>
          </div>
          <p className="text-center text-muted-foreground mt-2">{plan.description}</p>
        </CardHeader>
        
        <CardContent className="flex-grow">
          <ul className="space-y-3">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        
        <CardFooter className="pt-4">
          <Button className="w-full" variant={plan.buttonVariant}>
            Choose {plan.name} Plan
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const MembershipPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 font-serif">Membership Plans</h1>
            <p className="text-lg text-muted-foreground">
              Join our membership program for exclusive benefits, priority service, and significant savings on regular grooming.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {membershipPlans.map(plan => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto mt-20 text-center">
            <h2 className="text-3xl font-bold mb-8 font-serif">Why Choose a Membership?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {benefitsContent.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex flex-col items-center p-6 bg-card rounded-lg"
                >
                  <div className="mb-4 p-3 bg-primary/10 rounded-full">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{benefit.title}</h3>
                  <p className="text-muted-foreground text-center">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8 text-center font-serif">Frequently Asked Questions</h2>
            <Tabs defaultValue="general" className="w-full max-w-3xl mx-auto">
              <TabsList className="w-full mb-8">
                <TabsTrigger value="general" className="flex-1">General</TabsTrigger>
                <TabsTrigger value="billing" className="flex-1">Billing</TabsTrigger>
                <TabsTrigger value="services" className="flex-1">Services</TabsTrigger>
              </TabsList>
              
              <TabsContent value="general" className="space-y-4">
                {faqs.slice(0, 3).map((faq, index) => (
                  <div key={index} className="p-6 bg-card rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </TabsContent>
              
              <TabsContent value="billing" className="space-y-4">
                {faqs.slice(3, 5).map((faq, index) => (
                  <div key={index} className="p-6 bg-card rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </TabsContent>
              
              <TabsContent value="services" className="space-y-4">
                {faqs.slice(5).map((faq, index) => (
                  <div key={index} className="p-6 bg-card rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="max-w-3xl mx-auto mt-20 text-center p-8 bg-muted/50 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 font-serif">Ready to Join?</h2>
            <p className="text-muted-foreground mb-6">
              Start enjoying the benefits of membership today. Sign up online or visit us in store to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Sign Up Online</Button>
              <Button variant="outline" size="lg">Contact Us</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MembershipPage;
