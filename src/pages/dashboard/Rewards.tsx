
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
import { Gift, Award, Star } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/components/ui/use-toast';

const Rewards = () => {
  const { toast } = useToast();
  
  const handleRedeem = (reward: string, points: number) => {
    toast({
      title: "Reward Redeemed!",
      description: `You've redeemed ${reward} for ${points} points.`,
    });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Loyalty Rewards</h1>
      <p className="text-muted-foreground">Redeem your loyalty points for exclusive rewards</p>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Your Rewards Status</CardTitle>
          <CardDescription>Earn points with every service</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Current points: 250</span>
                <span className="text-sm text-muted-foreground">500 points for Gold status</span>
              </div>
              <Progress value={50} className="h-2" />
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 text-primary p-3 rounded-full mb-2">
                  <Award size={24} />
                </div>
                <span className="text-sm font-medium">Silver Member</span>
                <span className="text-xs text-muted-foreground">Current Tier</span>
              </div>
              
              <div className="flex flex-col items-center text-center opacity-50">
                <div className="bg-yellow-100 text-yellow-600 p-3 rounded-full mb-2">
                  <Star size={24} />
                </div>
                <span className="text-sm font-medium">Gold Member</span>
                <span className="text-xs text-muted-foreground">250 points away</span>
              </div>
              
              <div className="flex flex-col items-center text-center opacity-50">
                <div className="bg-purple-100 text-purple-600 p-3 rounded-full mb-2">
                  <Gift size={24} />
                </div>
                <span className="text-sm font-medium">Platinum Member</span>
                <span className="text-xs text-muted-foreground">750 points away</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <h2 className="text-xl font-semibold mt-8 mb-4">Available Rewards</h2>
      
      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Free Beard Trim</CardTitle>
            <CardDescription>With any haircut service</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Redeem this reward to get a complimentary beard trim with your next haircut appointment.</p>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-500" />
              <span className="font-medium">100 points</span>
            </div>
            <Button onClick={() => handleRedeem("Free Beard Trim", 100)}>Redeem</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Hair Product Discount</CardTitle>
            <CardDescription>20% off any hair product</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Get a 20% discount on any premium hair product from our shop.</p>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-500" />
              <span className="font-medium">150 points</span>
            </div>
            <Button onClick={() => handleRedeem("20% Product Discount", 150)}>Redeem</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Premium Styling</CardTitle>
            <CardDescription>Free styling with premium products</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Receive a complimentary styling session using our premium product line.</p>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-500" />
              <span className="font-medium">200 points</span>
            </div>
            <Button onClick={() => handleRedeem("Premium Styling", 200)}>Redeem</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Free Haircut</CardTitle>
            <CardDescription>Complete service on us</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Redeem this reward for a completely free haircut with any of our stylists.</p>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-500" />
              <span className="font-medium">500 points</span>
            </div>
            <Button disabled onClick={() => handleRedeem("Free Haircut", 500)}>Redeem</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Rewards;
