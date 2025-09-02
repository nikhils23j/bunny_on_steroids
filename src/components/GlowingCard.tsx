
import React from 'react';
import { cn } from '@/lib/utils';

interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlowingCard: React.FC<GlowingCardProps> = ({ children, className }) => {
  return (
    <div className={cn(
      "animated-border p-[2px] w-full hover-scale transition-all duration-500",
      className
    )}>
      <div className="bg-background h-full w-full p-6 rounded-lg relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlowingCard;
