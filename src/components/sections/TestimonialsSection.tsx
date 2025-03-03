
import React from 'react';
import Testimonial from '@/components/Testimonial';

const TestimonialsSection = () => {
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
  );
};

export default TestimonialsSection;
