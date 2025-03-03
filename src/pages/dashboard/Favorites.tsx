
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Scissors, Heart, Share2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const { toast } = useToast();
  
  const handleRemove = (styleName: string) => {
    toast({
      title: "Style Removed",
      description: `"${styleName}" has been removed from your favorites.`,
      variant: "destructive",
    });
  };
  
  const handleShare = (styleName: string) => {
    toast({
      title: "Style Shared",
      description: `A link to "${styleName}" has been copied to your clipboard.`,
    });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Favorite Styles</h1>
      <p className="text-muted-foreground">Your collection of saved haircuts and styles</p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <div className="aspect-video relative overflow-hidden rounded-t-lg">
            <img 
              src="https://images.unsplash.com/photo-1593702288056-7cc525e3f4db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
              alt="Classic Fade"
              className="w-full h-full object-cover"
            />
          </div>
          <CardHeader>
            <CardTitle>Classic Fade</CardTitle>
            <CardDescription>Short on sides with textured top</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm">
              <Scissors className="h-4 w-4" />
              <span>30 minutes</span>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm" onClick={() => handleShare("Classic Fade")}>
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button variant="ghost" size="sm" onClick={() => handleRemove("Classic Fade")}>
              <Heart className="mr-2 h-4 w-4 fill-current text-red-500" />
              Remove
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <div className="aspect-video relative overflow-hidden rounded-t-lg">
            <img 
              src="https://images.unsplash.com/photo-1599351431583-a1f978884290?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
              alt="Textured Crop"
              className="w-full h-full object-cover"
            />
          </div>
          <CardHeader>
            <CardTitle>Textured Crop</CardTitle>
            <CardDescription>Modern style with texture and movement</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm">
              <Scissors className="h-4 w-4" />
              <span>35 minutes</span>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm" onClick={() => handleShare("Textured Crop")}>
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button variant="ghost" size="sm" onClick={() => handleRemove("Textured Crop")}>
              <Heart className="mr-2 h-4 w-4 fill-current text-red-500" />
              Remove
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <div className="aspect-video relative overflow-hidden rounded-t-lg">
            <img 
              src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
              alt="Beard Style"
              className="w-full h-full object-cover"
            />
          </div>
          <CardHeader>
            <CardTitle>Neat Beard Style</CardTitle>
            <CardDescription>Well-groomed beard with clean lines</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm">
              <Scissors className="h-4 w-4" />
              <span>25 minutes</span>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm" onClick={() => handleShare("Neat Beard Style")}>
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button variant="ghost" size="sm" onClick={() => handleRemove("Neat Beard Style")}>
              <Heart className="mr-2 h-4 w-4 fill-current text-red-500" />
              Remove
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <div className="aspect-video relative overflow-hidden rounded-t-lg">
            <img 
              src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
              alt="Pompadour Style"
              className="w-full h-full object-cover"
            />
          </div>
          <CardHeader>
            <CardTitle>Modern Pompadour</CardTitle>
            <CardDescription>Classic style with a modern twist</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm">
              <Scissors className="h-4 w-4" />
              <span>40 minutes</span>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm" onClick={() => handleShare("Modern Pompadour")}>
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button variant="ghost" size="sm" onClick={() => handleRemove("Modern Pompadour")}>
              <Heart className="mr-2 h-4 w-4 fill-current text-red-500" />
              Remove
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <div className="aspect-video relative overflow-hidden rounded-t-lg">
            <img 
              src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
              alt="Buzz Cut"
              className="w-full h-full object-cover"
            />
          </div>
          <CardHeader>
            <CardTitle>Clean Buzz Cut</CardTitle>
            <CardDescription>Low maintenance and clean style</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm">
              <Scissors className="h-4 w-4" />
              <span>20 minutes</span>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm" onClick={() => handleShare("Clean Buzz Cut")}>
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button variant="ghost" size="sm" onClick={() => handleRemove("Clean Buzz Cut")}>
              <Heart className="mr-2 h-4 w-4 fill-current text-red-500" />
              Remove
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      <div className="flex justify-center mt-8">
        <Button asChild>
          <Link to="/lookbook">Explore More Styles</Link>
        </Button>
      </div>
    </div>
  );
};

export default Favorites;
