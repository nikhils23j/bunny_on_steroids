
import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-50 animate-spin-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full filter blur-3xl opacity-60 animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/20 rounded-full filter blur-3xl opacity-40 animate-float"></div>
      
      {/* Radial gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background to-background"></div>
    </div>
  );
};

export default AnimatedBackground;
