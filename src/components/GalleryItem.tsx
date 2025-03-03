
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface GalleryItemProps {
  image: string;
  alt?: string;
  category?: string;
  className?: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({
  image,
  alt = "Gallery image",
  category,
  className,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-xl bg-muted cursor-pointer",
      className
    )}>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
      
      {/* Low-quality image placeholder */}
      <div 
        className={cn(
          "absolute inset-0 bg-cover bg-center blur-lg scale-105 transition-opacity duration-500",
          isLoaded ? "opacity-0" : "opacity-100"
        )}
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* High-quality image */}
      <img
        src={image}
        alt={alt}
        className={cn(
          "h-full w-full object-cover transition-all duration-500 group-hover:scale-105",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        onLoad={() => setIsLoaded(true)}
      />
      
      {category && (
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
          <span className="text-sm font-medium">{category}</span>
        </div>
      )}
    </div>
  );
};

export default GalleryItem;
