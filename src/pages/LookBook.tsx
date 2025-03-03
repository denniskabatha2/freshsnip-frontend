
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Scissors, ChevronDown, ChevronRight, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Interfaces
interface HairstyleProps {
  id: string;
  name: string;
  category: 'classic' | 'modern' | 'trending' | 'beard';
  description: string;
  image: string;
  faceShapes?: string[];
  hairTypes?: string[];
  difficultyLevel?: 'easy' | 'moderate' | 'complex';
  maintenanceLevel?: 'low' | 'medium' | 'high';
  stylingTips?: string[];
}

// Sample data
const hairstyles: HairstyleProps[] = [
  {
    id: 'style1',
    name: 'Classic Pompadour',
    category: 'classic',
    description: 'A timeless style featuring voluminous hair swept upward and back from the face.',
    image: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    faceShapes: ['Round', 'Oval', 'Square'],
    hairTypes: ['Straight', 'Wavy'],
    difficultyLevel: 'moderate',
    maintenanceLevel: 'high',
    stylingTips: [
      'Use pomade for hold and shine',
      'Blow-dry for maximum volume',
      'Comb back while drying for classic shape'
    ]
  },
  {
    id: 'style2',
    name: 'Textured Crop',
    category: 'modern',
    description: 'A contemporary cut with textured top and clean fades on the sides.',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    faceShapes: ['Oval', 'Square', 'Diamond'],
    hairTypes: ['Straight', 'Wavy', 'Thick'],
    difficultyLevel: 'easy',
    maintenanceLevel: 'low',
    stylingTips: [
      'Use matte clay for natural texture',
      'Apply to towel-dried hair',
      'Style with fingers instead of comb for texture'
    ]
  },
  {
    id: 'style3',
    name: 'Slick Back Undercut',
    category: 'modern',
    description: 'Sharp contrast between long top hair slicked back and closely shaved sides.',
    image: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    faceShapes: ['Oval', 'Diamond', 'Heart'],
    hairTypes: ['Straight', 'Wavy'],
    difficultyLevel: 'moderate',
    maintenanceLevel: 'medium',
    stylingTips: [
      'Apply strong-hold pomade',
      'Comb back from the forehead',
      'Regular trims every 2-3 weeks for sides'
    ]
  },
  {
    id: 'style4',
    name: 'Buzz Cut Fade',
    category: 'classic',
    description: 'Ultra-short, low-maintenance style with graduated fading on the sides.',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    faceShapes: ['Oval', 'Square', 'Diamond'],
    hairTypes: ['All types'],
    difficultyLevel: 'easy',
    maintenanceLevel: 'low',
    stylingTips: [
      'Almost no daily styling needed',
      'Use light moisturizer to prevent dry scalp',
      'Maintenance cut every 2 weeks'
    ]
  },
  {
    id: 'style5',
    name: 'Curtained Hair',
    category: 'trending',
    description: 'Medium-length hair parted down the middle, falling to frame the face.',
    image: 'https://images.unsplash.com/photo-1585897763422-e1a4e3f513bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    faceShapes: ['Oval', 'Square', 'Heart'],
    hairTypes: ['Straight', 'Wavy'],
    difficultyLevel: 'easy',
    maintenanceLevel: 'medium',
    stylingTips: [
      'Use light hold styling cream',
      'Blow-dry with round brush for volume',
      'Finger comb for casual look'
    ]
  },
  {
    id: 'style6',
    name: 'Full Beard with Fade',
    category: 'beard',
    description: 'Well-groomed full beard that transitions smoothly into a faded haircut.',
    image: 'https://images.unsplash.com/photo-1613323593608-abc90fec84ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    faceShapes: ['All faces'],
    difficultyLevel: 'moderate',
    maintenanceLevel: 'high',
    stylingTips: [
      'Use beard oil daily',
      'Regular trimming for shape',
      'Beard balm for control'
    ]
  },
  {
    id: 'style7',
    name: 'Messy Quiff',
    category: 'trending',
    description: 'Voluminous style with height at the front and textured, casual finish.',
    image: 'https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    faceShapes: ['Round', 'Oval', 'Heart'],
    hairTypes: ['Wavy', 'Curly'],
    difficultyLevel: 'moderate',
    maintenanceLevel: 'medium',
    stylingTips: [
      'Pre-style with volume spray',
      'Blow-dry upward at the roots',
      'Finish with matte clay or sea salt spray'
    ]
  },
  {
    id: 'style8',
    name: 'Goatee with Stubble',
    category: 'beard',
    description: 'Defined goatee surrounded by neatly maintained stubble for a structured yet casual look.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    faceShapes: ['Oval', 'Square', 'Diamond'],
    difficultyLevel: 'easy',
    maintenanceLevel: 'medium',
    stylingTips: [
      'Regular trimming to maintain goatee definition',
      'Keep stubble at consistent length',
      'Use precision trimmer for clean lines'
    ]
  }
];

// Difficulty level tags
const DifficultyTag: React.FC<{ level: 'easy' | 'moderate' | 'complex' }> = ({ level }) => {
  const colors = {
    easy: 'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300',
    moderate: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300',
    complex: 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300'
  };
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[level]}`}>
      {level.charAt(0).toUpperCase() + level.slice(1)}
    </span>
  );
};

// Maintenance level tags
const MaintenanceTag: React.FC<{ level: 'low' | 'medium' | 'high' }> = ({ level }) => {
  const colors = {
    low: 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
    medium: 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300',
    high: 'bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300'
  };
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[level]}`}>
      {level.charAt(0).toUpperCase() + level.slice(1)} Maintenance
    </span>
  );
};

// Hairstyle card component
const HairstyleCard: React.FC<{ hairstyle: HairstyleProps }> = ({ hairstyle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative aspect-[3/4] group">
        <img 
          src={hairstyle.image} 
          alt={hairstyle.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 text-white w-full">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 w-full">
                  View Details <ChevronRight size={16} className="ml-2" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="aspect-[3/4] rounded-lg overflow-hidden">
                    <img src={hairstyle.image} alt={hairstyle.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold font-serif">{hairstyle.name}</DialogTitle>
                      <DialogDescription className="text-base">
                        {hairstyle.description}
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="mt-6 space-y-4 flex-grow">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {hairstyle.difficultyLevel && <DifficultyTag level={hairstyle.difficultyLevel} />}
                        {hairstyle.maintenanceLevel && <MaintenanceTag level={hairstyle.maintenanceLevel} />}
                      </div>
                      
                      {hairstyle.faceShapes && hairstyle.faceShapes.length > 0 && (
                        <div>
                          <h4 className="text-sm font-medium mb-1">Best for face shapes:</h4>
                          <div className="flex flex-wrap gap-1">
                            {hairstyle.faceShapes.map(shape => (
                              <span key={shape} className="inline-block px-2 py-1 bg-secondary text-xs rounded-md">
                                {shape}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {hairstyle.hairTypes && hairstyle.hairTypes.length > 0 && (
                        <div>
                          <h4 className="text-sm font-medium mb-1">Works with hair types:</h4>
                          <div className="flex flex-wrap gap-1">
                            {hairstyle.hairTypes.map(type => (
                              <span key={type} className="inline-block px-2 py-1 bg-secondary text-xs rounded-md">
                                {type}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {hairstyle.stylingTips && hairstyle.stylingTips.length > 0 && (
                        <div>
                          <h4 className="text-sm font-medium mb-1">Styling tips:</h4>
                          <ul className="text-sm text-muted-foreground">
                            {hairstyle.stylingTips.map((tip, index) => (
                              <li key={index} className="flex items-start mb-1">
                                <span className="text-primary mr-2">•</span>
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-auto">
                      <Button className="w-full">
                        Book This Style <ArrowRight size={16} className="ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-lg">{hairstyle.name}</h3>
        <p className="text-muted-foreground text-sm mt-1">{hairstyle.category.charAt(0).toUpperCase() + hairstyle.category.slice(1)}</p>
      </div>
    </motion.div>
  );
};

const LookBookPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  // Filter hairstyles based on search and category
  const filteredHairstyles = hairstyles.filter(style => {
    const matchesSearch = style.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          style.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || style.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 font-serif">Style Look Book</h1>
            <p className="text-lg text-muted-foreground">
              Explore our collection of signature cuts and styles for inspiration before your next visit.
            </p>
          </div>
          
          {/* Search and filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-3xl mx-auto">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search styles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-2">
              <Button 
                variant={selectedCategory === "all" ? "default" : "outline"}
                onClick={() => setSelectedCategory("all")}
                className="flex-shrink-0"
              >
                All
              </Button>
              <Button 
                variant={selectedCategory === "classic" ? "default" : "outline"}
                onClick={() => setSelectedCategory("classic")}
                className="flex-shrink-0"
              >
                Classic
              </Button>
              <Button 
                variant={selectedCategory === "modern" ? "default" : "outline"}
                onClick={() => setSelectedCategory("modern")}
                className="flex-shrink-0"
              >
                Modern
              </Button>
              <Button 
                variant={selectedCategory === "trending" ? "default" : "outline"}
                onClick={() => setSelectedCategory("trending")}
                className="flex-shrink-0"
              >
                Trending
              </Button>
              <Button 
                variant={selectedCategory === "beard" ? "default" : "outline"}
                onClick={() => setSelectedCategory("beard")}
                className="flex-shrink-0"
              >
                Beard
              </Button>
            </div>
          </div>
          
          {/* Results count */}
          <div className="mb-6 flex items-center">
            <Scissors className="h-5 w-5 mr-2 text-primary" />
            <span className="text-muted-foreground">Showing {filteredHairstyles.length} styles</span>
          </div>
          
          {/* Hairstyles grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredHairstyles.map(style => (
              <HairstyleCard key={style.id} hairstyle={style} />
            ))}
          </div>
          
          {filteredHairstyles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No styles found matching your criteria.</p>
            </div>
          )}
          
          {/* Help section */}
          <div className="mt-20 bg-muted/50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6 text-center font-serif">Finding Your Perfect Style</h2>
            
            <Tabs defaultValue="face-shape" className="w-full">
              <TabsList className="w-full mb-6">
                <TabsTrigger value="face-shape" className="flex-1">Face Shape</TabsTrigger>
                <TabsTrigger value="hair-type" className="flex-1">Hair Type</TabsTrigger>
                <TabsTrigger value="maintenance" className="flex-1">Maintenance</TabsTrigger>
              </TabsList>
              
              <TabsContent value="face-shape" className="pt-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-medium mb-3">How to Determine Your Face Shape</h3>
                    <p className="text-muted-foreground mb-4">
                      Understanding your face shape helps identify styles that complement your natural features.
                      Pull your hair back, look in the mirror, and observe the outline of your face.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <ChevronRight size={16} className="text-primary flex-shrink-0 mt-1 mr-2" />
                        <div>
                          <span className="font-medium">Oval:</span> Forehead slightly wider than chin, with gentle curves.
                        </div>
                      </div>
                      <div className="flex items-start">
                        <ChevronRight size={16} className="text-primary flex-shrink-0 mt-1 mr-2" />
                        <div>
                          <span className="font-medium">Round:</span> Similar length and width with soft angles.
                        </div>
                      </div>
                      <div className="flex items-start">
                        <ChevronRight size={16} className="text-primary flex-shrink-0 mt-1 mr-2" />
                        <div>
                          <span className="font-medium">Square:</span> Strong jaw and broad forehead with minimal curves.
                        </div>
                      </div>
                      <div className="flex items-start">
                        <ChevronRight size={16} className="text-primary flex-shrink-0 mt-1 mr-2" />
                        <div>
                          <span className="font-medium">Heart:</span> Wider forehead tapering to a narrow chin.
                        </div>
                      </div>
                      <div className="flex items-start">
                        <ChevronRight size={16} className="text-primary flex-shrink-0 mt-1 mr-2" />
                        <div>
                          <span className="font-medium">Diamond:</span> Narrow forehead and jawline with wide cheekbones.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-3">Recommended Styles by Face Shape</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-base font-medium">Oval Face</h4>
                        <p className="text-muted-foreground">Versatile shape that works with most styles.</p>
                      </div>
                      <div>
                        <h4 className="text-base font-medium">Round Face</h4>
                        <p className="text-muted-foreground">Styles with height on top and shorter sides add definition.</p>
                      </div>
                      <div>
                        <h4 className="text-base font-medium">Square Face</h4>
                        <p className="text-muted-foreground">Textured crops and styles with softer edges complement strong jawlines.</p>
                      </div>
                      <div>
                        <h4 className="text-base font-medium">Heart/Diamond Face</h4>
                        <p className="text-muted-foreground">Medium-length styles with volume on the sides balance narrower jawlines.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="hair-type" className="pt-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Understanding Your Hair Type</h3>
                    <p className="text-muted-foreground mb-4">
                      Hair texture, thickness, and natural patterns significantly impact how styles will look. 
                      Working with your natural hair type yields better results.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <ChevronRight size={16} className="text-primary flex-shrink-0 mt-1 mr-2" />
                        <div>
                          <span className="font-medium">Straight:</span> Smooth texture with no natural curl or wave.
                        </div>
                      </div>
                      <div className="flex items-start">
                        <ChevronRight size={16} className="text-primary flex-shrink-0 mt-1 mr-2" />
                        <div>
                          <span className="font-medium">Wavy:</span> Natural S-pattern with gentle waves.
                        </div>
                      </div>
                      <div className="flex items-start">
                        <ChevronRight size={16} className="text-primary flex-shrink-0 mt-1 mr-2" />
                        <div>
                          <span className="font-medium">Curly:</span> Defined spiral patterns throughout.
                        </div>
                      </div>
                      <div className="flex items-start">
                        <ChevronRight size={16} className="text-primary flex-shrink-0 mt-1 mr-2" />
                        <div>
                          <span className="font-medium">Coily:</span> Tight, springy curls with S or Z patterns.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-3">Other Hair Characteristics</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <ChevronRight size={16} className="text-primary flex-shrink-0 mt-1 mr-2" />
                        <div>
                          <span className="font-medium">Thickness:</span> Refers to the density of hair follicles (thin, medium, thick).
                        </div>
                      </div>
                      <div className="flex items-start">
                        <ChevronRight size={16} className="text-primary flex-shrink-0 mt-1 mr-2" />
                        <div>
                          <span className="font-medium">Porosity:</span> How well your hair absorbs and retains moisture.
                        </div>
                      </div>
                      <div className="flex items-start">
                        <ChevronRight size={16} className="text-primary flex-shrink-0 mt-1 mr-2" />
                        <div>
                          <span className="font-medium">Elasticity:</span> How much your hair can stretch and return to normal.
                        </div>
                      </div>
                      <div className="flex items-start">
                        <ChevronRight size={16} className="text-primary flex-shrink-0 mt-1 mr-2" />
                        <div>
                          <span className="font-medium">Growth pattern:</span> Direction your hair naturally grows (cowlicks, etc).
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="maintenance" className="pt-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Maintenance Levels Explained</h3>
                    <p className="text-muted-foreground mb-4">
                      Consider your lifestyle and how much time you can devote to styling before choosing a haircut.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-base font-medium flex items-center">
                          <span className="inline-block h-3 w-3 rounded-full bg-blue-500 mr-2"></span>
                          Low Maintenance
                        </h4>
                        <p className="text-muted-foreground ml-5">
                          Minimal daily styling, infrequent trims (every 6-8 weeks), works with natural texture.
                          <br />
                          <span className="text-sm italic">Example: Buzz cut, crew cut, textured crop</span>
                        </p>
                      </div>
                      <div>
                        <h4 className="text-base font-medium flex items-center">
                          <span className="inline-block h-3 w-3 rounded-full bg-purple-500 mr-2"></span>
                          Medium Maintenance
                        </h4>
                        <p className="text-muted-foreground ml-5">
                          Some styling required (5-10 minutes), regular trims (4-6 weeks), basic products needed.
                          <br />
                          <span className="text-sm italic">Example: Side part, short quiff, tapered cut</span>
                        </p>
                      </div>
                      <div>
                        <h4 className="text-base font-medium flex items-center">
                          <span className="inline-block h-3 w-3 rounded-full bg-orange-500 mr-2"></span>
                          High Maintenance
                        </h4>
                        <p className="text-muted-foreground ml-5">
                          Daily styling (10+ minutes), frequent trims (3-4 weeks), multiple styling products.
                          <br />
                          <span className="text-sm italic">Example: Pompadour, slick back, longer textured styles</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-3">Tips for Easy Maintenance</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <ChevronRight size={16} className="text-primary flex-shrink-0 mt-1 mr-2" />
                        <div>
                          Choose styles that work with your natural hair pattern rather than against it.
                        </div>
                      </div>
                      <div className="flex items-start">
                        <ChevronRight size={16} className="text-primary flex-shrink-0 mt-1 mr-2" />
                        <div>
                          Discuss your daily routine with your barber to find a suitable maintenance level.
                        </div>
                      </div>
                      <div className="flex items-start">
                        <ChevronRight size={16} className="text-primary flex-shrink-0 mt-1 mr-2" />
                        <div>
                          Invest in quality styling products recommended specifically for your hair type.
                        </div>
                      </div>
                      <div className="flex items-start">
                        <ChevronRight size={16} className="text-primary flex-shrink-0 mt-1 mr-2" />
                        <div>
                          Learn proper styling techniques during your appointment - ask your barber for a tutorial.
                        </div>
                      </div>
                      <div className="flex items-start">
                        <ChevronRight size={16} className="text-primary flex-shrink-0 mt-1 mr-2" />
                        <div>
                          Schedule regular maintenance appointments to keep your style looking fresh.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4 font-serif">Ready to Transform Your Look?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Bring these images to your appointment or simply ask your barber about the styles you like.
              Our expert team can customize any look to suit your unique features.
            </p>
            <Button size="lg">Book Your Appointment</Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LookBookPage;
