
import React from 'react';
import { motion } from 'framer-motion';
import { PageWrapper } from '@/lib/transitions';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { useAnimateOnScroll } from '@/lib/animations';

const About = () => {
  useAnimateOnScroll();

  const team = [
    {
      name: "James Anderson",
      role: "Founder & Master Barber",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      bio: "With over 15 years of experience, James founded Cleancuts with a vision to combine traditional barbering techniques with modern style.",
    },
    {
      name: "Michael Chen",
      role: "Senior Barber",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      bio: "Michael specializes in precision fades and beard designs. His attention to detail has earned him a loyal client base.",
    },
    {
      name: "David Rodriguez",
      role: "Style Specialist",
      image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80",
      bio: "David is our creative expert, specializing in modern styles and transformations. He's known for his innovative approach to hair styling.",
    },
    {
      name: "Sophie Williams",
      role: "Master Barber",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      bio: "Sophie brings her classic training and contemporary flair to deliver exceptional cuts and styling for all hair types.",
    },
  ];

  const timeline = [
    {
      year: "2015",
      title: "The Beginning",
      description: "Cleancuts was founded with a single chair in a small studio, focused on providing premium men's grooming services."
    },
    {
      year: "2017",
      title: "First Expansion",
      description: "After gaining a loyal following, we moved to our current location and expanded our team of skilled barbers."
    },
    {
      year: "2019",
      title: "Grooming Products",
      description: "Launched our own line of premium grooming products, handcrafted with natural ingredients."
    },
    {
      year: "2021",
      title: "Award Recognition",
      description: "Recognized as one of the top barber shops in the city, winning the 'Best Grooming Experience' award."
    },
    {
      year: "2023",
      title: "Today",
      description: "Continuing our commitment to excellence with an expanded service menu and enhanced client experience."
    },
  ];

  return (
    <PageWrapper>
      <Navbar />
      
      <main>
        <Hero
          title="Our Story"
          subtitle="About Us"
          description="Learn about our journey, our team, and our commitment to exceptional grooming."
          image="https://images.unsplash.com/photo-1512690459411-b9245aed614b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
        />

        {/* Mission Section */}
        <section className="section-padding">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative animate-on-scroll">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                    alt="Barber at work" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6">
                  <p className="text-lg font-medium">
                    "Precision and excellence in every cut."
                  </p>
                </div>
              </div>
              
              <div className="animate-on-scroll">
                <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider uppercase bg-secondary rounded-full">Our Mission</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Crafting Confidence Through Exceptional Grooming</h2>
                <p className="text-muted-foreground mb-6">
                  At Cleancuts, we believe that a great haircut is more than just a service—it's an experience that enhances your confidence and style. Our mission is to provide premium barber services that combine traditional craftsmanship with modern techniques.
                </p>
                <p className="text-muted-foreground mb-6">
                  We are committed to creating a welcoming environment where clients can relax and enjoy exceptional service delivered with attention to detail and personal care.
                </p>
                <p className="font-medium mb-6">
                  Our core values drive everything we do:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center mr-3 shrink-0 mt-0.5">✓</span>
                    <span>Excellence in craftsmanship</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center mr-3 shrink-0 mt-0.5">✓</span>
                    <span>Attention to detail</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center mr-3 shrink-0 mt-0.5">✓</span>
                    <span>Personalized service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center mr-3 shrink-0 mt-0.5">✓</span>
                    <span>Continuous learning and improvement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-secondary section-padding">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center max-w-xl mx-auto mb-16 animate-on-scroll">
              <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider uppercase bg-background rounded-full">Our Team</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Expert Barbers</h2>
              <p className="text-muted-foreground">
                Our talented team of barbers brings years of experience and passion to every service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  className="rounded-2xl bg-white overflow-hidden shadow-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                    <p className="text-sm text-primary mb-4">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="section-padding">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center max-w-xl mx-auto mb-16 animate-on-scroll">
              <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider uppercase bg-secondary rounded-full">Our Journey</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Cleancuts Story</h2>
              <p className="text-muted-foreground">
                From a single chair to a premium barber shop, our journey has been defined by passion and excellence.
              </p>
            </div>
            
            <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-border shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <span className="font-mono text-sm">{item.year}</span>
                  </div>
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-6 rounded-xl shadow-card">
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-secondary section-padding">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider uppercase bg-background rounded-full">Our Values</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">What Sets Us Apart</h2>
                <p className="text-muted-foreground mb-6">
                  At Cleancuts, we believe in a different kind of barber experience. Our commitment goes beyond just providing a service—we create an environment where style, expertise, and customer satisfaction come together.
                </p>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="mr-4 h-12 w-12 shrink-0 bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Quality Assurance</h3>
                      <p className="text-muted-foreground">We guarantee satisfaction with every service, ensuring you leave looking and feeling your best.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 h-12 w-12 shrink-0 bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Personalized Approach</h3>
                      <p className="text-muted-foreground">We take the time to understand your preferences and style goals for a truly customized experience.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 h-12 w-12 shrink-0 bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Continuous Training</h3>
                      <p className="text-muted-foreground">Our barbers regularly update their skills to stay current with the latest techniques and trends.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 animate-on-scroll">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80" 
                    alt="Barber shop interior" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mt-12">
                  <img 
                    src="https://images.unsplash.com/photo-1596728325488-58c87691e9af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80" 
                    alt="Barber tools" 
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </PageWrapper>
  );
};

export default About;
