
import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
  avatar?: string;
  rating?: number;
  className?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  avatar,
  rating = 5,
  className,
}) => {
  return (
    <div className={cn(
      "flex flex-col p-6 bg-card rounded-2xl shadow-card",
      className
    )}>
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
      
      <blockquote className="mb-4 italic text-lg">"{quote}"</blockquote>
      
      <div className="mt-auto flex items-center">
        {avatar && (
          <img 
            src={avatar}
            alt={author}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        )}
        
        <div>
          <div className="font-medium">{author}</div>
          {role && (
            <div className="text-sm text-muted-foreground">{role}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
