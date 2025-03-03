
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
import { Star, MessageSquare, ThumbsUp, Filter } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Reviews = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">My Reviews</h1>
          <p className="text-muted-foreground">See what clients are saying about you</p>
        </div>
        
        <div className="flex items-center gap-2">
          <Select defaultValue="recent">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="highest">Highest Rated</SelectItem>
              <SelectItem value="lowest">Lowest Rated</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 fill-primary text-primary" />
                <Star className="w-5 h-5 fill-primary text-primary" />
                <Star className="w-5 h-5 fill-primary text-primary" />
                <Star className="w-5 h-5 fill-primary text-primary" />
                <Star className="w-5 h-5 fill-primary text-primary" />
              </div>
              <Badge>Haircut</Badge>
            </div>
            <p className="text-sm mb-4">
              "Amazing haircut! John really understands what I want even when I can't explain it well. 
              He's very attentive to detail and makes sure everything is perfect before you leave."
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>MS</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Michael Scott</p>
                  <p className="text-xs text-muted-foreground">June 2, 2023</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <ThumbsUp className="h-4 w-4 mr-1" />
                <span>Thank</span>
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 fill-primary text-primary" />
                <Star className="w-5 h-5 fill-primary text-primary" />
                <Star className="w-5 h-5 fill-primary text-primary" />
                <Star className="w-5 h-5 fill-primary text-primary" />
                <Star className="w-5 h-5 text-muted-foreground" />
              </div>
              <Badge>Beard Trim</Badge>
            </div>
            <p className="text-sm mb-4">
              "Great beard trim and styling advice. The barber took time to understand the look I wanted 
              and gave me tips on maintaining it between visits."
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>JH</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">James Halpert</p>
                  <p className="text-xs text-muted-foreground">May 28, 2023</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <ThumbsUp className="h-4 w-4 mr-1" />
                <span>Thank</span>
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 fill-primary text-primary" />
                <Star className="w-5 h-5 fill-primary text-primary" />
                <Star className="w-5 h-5 fill-primary text-primary" />
                <Star className="w-5 h-5 fill-primary text-primary" />
                <Star className="w-5 h-5 fill-primary text-primary" />
              </div>
              <Badge>Haircut & Beard</Badge>
            </div>
            <p className="text-sm mb-4">
              "Best barber I've found since moving to the city! The attention to detail is amazing 
              and the atmosphere in the shop is great. Will definitely be a regular."
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>DS</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Dwight Schrute</p>
                  <p className="text-xs text-muted-foreground">June 1, 2023</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <ThumbsUp className="h-4 w-4 mr-1" />
                <span>Thank</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Review Summary</CardTitle>
          <CardDescription>Your overall rating and performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col items-center justify-center md:w-1/3">
              <div className="text-4xl font-bold mb-2">4.8</div>
              <div className="flex items-center space-x-1 mb-2">
                <Star className="w-5 h-5 fill-primary text-primary" />
                <Star className="w-5 h-5 fill-primary text-primary" />
                <Star className="w-5 h-5 fill-primary text-primary" />
                <Star className="w-5 h-5 fill-primary text-primary" />
                <Star className="w-5 h-5 fill-primary/50 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">Based on 87 reviews</p>
            </div>
            
            <div className="md:w-2/3">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <p className="text-sm min-w-[60px]">5 stars</p>
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: '75%' }}></div>
                  </div>
                  <p className="text-sm min-w-[40px] text-right">75%</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <p className="text-sm min-w-[60px]">4 stars</p>
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: '20%' }}></div>
                  </div>
                  <p className="text-sm min-w-[40px] text-right">20%</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <p className="text-sm min-w-[60px]">3 stars</p>
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: '3%' }}></div>
                  </div>
                  <p className="text-sm min-w-[40px] text-right">3%</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <p className="text-sm min-w-[60px]">2 stars</p>
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: '1%' }}></div>
                  </div>
                  <p className="text-sm min-w-[40px] text-right">1%</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <p className="text-sm min-w-[60px]">1 star</p>
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: '1%' }}></div>
                  </div>
                  <p className="text-sm min-w-[40px] text-right">1%</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full flex gap-4">
            <Button className="flex-1" variant="outline">
              <MessageSquare className="mr-2 h-4 w-4" />
              Respond to Reviews
            </Button>
            <Button className="flex-1">
              Download Report
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Reviews;
