
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PageWrapper } from '@/lib/transitions';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageWrapper>
      <Navbar />
      
      <main className="min-h-[calc(100vh-64px-320px)] flex items-center justify-center">
        <div className="text-center px-6 py-24">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">404</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Oops! We couldn't find the page you're looking for.
          </p>
          <Link to="/">
            <Button size="lg" className="gap-2">
              <Home size={18} />
              Back to Home
            </Button>
          </Link>
        </div>
      </main>
      
      <Footer />
    </PageWrapper>
  );
};

export default NotFound;
