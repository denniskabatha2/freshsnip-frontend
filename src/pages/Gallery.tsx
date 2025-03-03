
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PageWrapper } from '@/lib/transitions';
import { useAnimateOnScroll } from '@/lib/animations';

const Gallery = () => {
  useAnimateOnScroll();
  
  // Sample gallery images
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1596368708356-6e1e1025ee72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      alt: "Classic haircut",
      title: "Classic Haircut"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1620574387735-a22a715cbd4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      alt: "Beard trim",
      title: "Beard Trim"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1599351431583-a1f978884290?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      alt: "Shaving",
      title: "Hot Towel Shave"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1593702288056-7cc525e3f4db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      alt: "Styling",
      title: "Hair Styling"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1576238080242-2f71a65a874b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      alt: "Barber shop",
      title: "Our Shop"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1534297635766-a262cdcb8ee4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      alt: "Finished haircut",
      title: "Finished Look"
    }
  ];

  return (
    <PageWrapper>
      <Navbar />
      
      <main className="pt-24 md:pt-32">
        <div className="container mx-auto px-6 md:px-12 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">Our Gallery</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mb-12 animate-on-scroll">
            Browse through our collection of haircuts and styles we've created for our clients. 
            Get inspired for your next visit.
          </p>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div 
                key={image.id} 
                className="relative overflow-hidden rounded-lg shadow-md group animate-on-scroll"
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-white text-xl font-medium">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </PageWrapper>
  );
};

export default Gallery;
