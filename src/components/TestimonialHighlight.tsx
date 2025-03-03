
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialHighlightProps {
  quote: string;
  author: string;
  rating?: number;
  className?: string;
}

const TestimonialHighlight: React.FC<TestimonialHighlightProps> = ({
  quote,
  author,
  rating = 5,
  className,
}) => {
  return (
    <div className={cn(
      "relative p-6 bg-secondary rounded-lg",
      className
    )}>
      <Quote className="absolute top-4 right-4 text-primary/10" size={40} />
      
      {rating > 0 && (
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={cn(
                "mr-1",
                i < rating ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"
              )}
            />
          ))}
        </div>
      )}
      
      <p className="italic text-lg mb-4">"{quote}"</p>
      <div className="font-medium">{author}</div>
    </div>
  );
};

export default TestimonialHighlight;
