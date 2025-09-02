import { useState, useEffect } from "react";

const imageList = [
  "/lovable-uploads/a4.jpeg",
  "/lovable-uploads/m4.jpeg",
  "/lovable-uploads/a1.jpeg",
  "/lovable-uploads/m1.jpeg",
  "/lovable-uploads/m2.jpeg",
  "/lovable-uploads/a2.jpeg",
  "/lovable-uploads/p4.jpeg",
];

export default function HeroBackground() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 5000); // change image every 5 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="absolute inset-0 z-0 hero-background-image animate-hero-zoom transition-opacity duration-1000">
      <img
        src={imageList[currentImageIndex]}
        alt={`Background ${currentImageIndex + 1}`}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero-gradient-overlay"></div>
    </div>
  );
}
