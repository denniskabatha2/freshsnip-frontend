
import React from 'react';
import { cn } from '@/lib/utils';

type SidebarOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SidebarOverlay: React.FC<SidebarOverlayProps> = ({ isOpen, onClose }) => {
  return (
    <div 
      className={cn(
        'fixed inset-0 bg-background/80 backdrop-blur-sm z-40 transition-opacity duration-300',
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
      onClick={onClose}
      aria-hidden="true"
    />
  );
};

export default SidebarOverlay;
