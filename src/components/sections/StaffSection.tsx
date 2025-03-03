
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Twitter } from 'lucide-react';

interface StaffMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  socialMedia: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

const StaffSection = () => {
  const staffMembers: StaffMember[] = [
    {
      name: "James Wilson",
      role: "Master Barber",
      image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "With over 15 years of experience, James specializes in classic cuts and hot towel shaves.",
      socialMedia: {
        instagram: "https://instagram.com",
        facebook: "https://facebook.com",
        twitter: "https://twitter.com"
      }
    },
    {
      name: "Michael Rodriguez",
      role: "Style Specialist",
      image: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      bio: "Michael brings the latest trends to life with his innovative approach to men's styling.",
      socialMedia: {
        instagram: "https://instagram.com",
        facebook: "https://facebook.com"
      }
    },
    {
      name: "David Thompson",
      role: "Beard Expert",
      image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "David's expertise in beard shaping and grooming has made him a client favorite.",
      socialMedia: {
        instagram: "https://instagram.com",
        twitter: "https://twitter.com"
      }
    },
    {
      name: "Robert Chen",
      role: "Junior Barber",
      image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "The newest addition to our team, Robert brings fresh perspectives and exceptional skill.",
      socialMedia: {
        instagram: "https://instagram.com"
      }
    }
  ];

  return (
    <section className="bg-background section-padding">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-xl mx-auto mb-16 animate-on-scroll">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider uppercase bg-secondary rounded-full">Our Team</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Expert Barbers</h2>
          <p className="text-muted-foreground">
            Our skilled professionals are dedicated to delivering exceptional service and helping you look your best.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {staffMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden animate-on-scroll hover:shadow-md transition-all duration-300" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="h-72 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  {member.socialMedia.instagram && (
                    <a href={member.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Instagram size={18} />
                    </a>
                  )}
                  {member.socialMedia.facebook && (
                    <a href={member.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Facebook size={18} />
                    </a>
                  )}
                  {member.socialMedia.twitter && (
                    <a href={member.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Twitter size={18} />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffSection;
