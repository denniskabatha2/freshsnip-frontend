
import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ProductProps {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  category: 'hair' | 'beard' | 'shaving' | 'skincare';
}

const products: ProductProps[] = [
  {
    id: 'p1',
    name: 'Premium Hair Pomade',
    description: 'High-hold, matte finish pomade for stylish hairstyles that last all day.',
    price: 24.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1581084349663-2093e090ee0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    category: 'hair'
  },
  {
    id: 'p2',
    name: 'Beard Oil',
    description: 'Nourishing beard oil with jojoba and argan oil to soften and condition your beard.',
    price: 19.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    category: 'beard'
  },
  {
    id: 'p3',
    name: 'Luxury Shaving Cream',
    description: 'Rich lathering cream that protects skin and enables a smooth, close shave.',
    price: 22.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1626808642875-0aa545482dfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    category: 'shaving'
  },
  {
    id: 'p4',
    name: 'Clay Hair Styling',
    description: 'Medium-hold clay with natural matte finish for textured, defined styles.',
    price: 21.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1669234444868-717f03c57f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    category: 'hair'
  },
  {
    id: 'p5',
    name: 'Beard Balm',
    description: 'Conditioning balm that tames and shapes your beard while nourishing skin underneath.',
    price: 18.99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1621607505533-32f0f9811df5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    category: 'beard'
  },
  {
    id: 'p6',
    name: 'Exfoliating Face Scrub',
    description: 'Gentle exfoliating scrub that removes dead skin cells and unclogs pores.',
    price: 25.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    category: 'skincare'
  },
  {
    id: 'p7',
    name: 'Aftershave Balm',
    description: 'Soothing balm that calms skin after shaving and prevents irritation.',
    price: 23.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    category: 'shaving'
  },
  {
    id: 'p8',
    name: 'Moisturizing Face Lotion',
    description: 'Lightweight, non-greasy moisturizer that hydrates and protects skin all day.',
    price: 27.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1556229010-aa3f7ff66b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    category: 'skincare'
  }
];

const ProductCard: React.FC<{ product: ProductProps }> = ({ product }) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="fill-yellow-400 text-yellow-400" size={16} />);
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="text-muted-foreground/20" size={16} />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="fill-yellow-400 text-yellow-400" size={16} />
          </div>
        </div>
      );
    }

    const remainingStars = 5 - Math.ceil(product.rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="text-muted-foreground/20" size={16} />);
    }

    return stars;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden h-full flex flex-col border-border/50 hover:shadow-md transition-shadow">
        <div className="h-60 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
        
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">{product.name}</CardTitle>
          <div className="flex items-center gap-1 mt-1">
            {renderStars()}
            <span className="text-sm text-muted-foreground ml-1">{product.rating.toFixed(1)}</span>
          </div>
        </CardHeader>
        
        <CardContent className="pb-4 flex-grow">
          <CardDescription>{product.description}</CardDescription>
        </CardContent>
        
        <CardFooter className="flex items-center justify-between pt-0">
          <span className="font-semibold">${product.price.toFixed(2)}</span>
          <Button size="sm" className="gap-1">
            <ShoppingCart size={16} />
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const ProductsPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 font-serif">Premium Grooming Products</h1>
            <p className="text-lg text-muted-foreground">
              Discover our curated selection of high-quality grooming products to maintain your look between visits.
            </p>
          </div>
          
          <Tabs defaultValue="all" className="mb-12">
            <div className="flex justify-center">
              <TabsList className="mb-8">
                <TabsTrigger value="all">All Products</TabsTrigger>
                <TabsTrigger value="hair">Hair</TabsTrigger>
                <TabsTrigger value="beard">Beard</TabsTrigger>
                <TabsTrigger value="shaving">Shaving</TabsTrigger>
                <TabsTrigger value="skincare">Skincare</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
            
            {['hair', 'beard', 'shaving', 'skincare'].map(category => (
              <TabsContent key={category} value={category} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {products
                    .filter(product => product.category === category)
                    .map(product => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
          <div className="bg-muted/50 rounded-xl p-8 mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4 font-serif">Looking for something specific?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our barbers use only the highest quality products. Ask about any products used during your appointment and receive personalized recommendations.
            </p>
            <Button className="gap-2">
              Book a Consultation <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductsPage;
