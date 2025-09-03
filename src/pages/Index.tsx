import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import GlowingCard from "@/components/GlowingCard";
import { useEffect, useState } from "react";
import HeroBackground from "@/components/ui/HeroBackground";

const Index = () => {
  // State for animations
  const [isLoaded, setIsLoaded] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const greeting = "Hi, I'm Nikhil. 🦁";

  // Typewriter effect
  useEffect(() => {
    if (charIndex < greeting.length) {
      const timer = setTimeout(() => {
        setCharIndex((prevIndex) => prevIndex + 1);
      }, 100); // Speed of typing
      return () => clearTimeout(timer);
    }
  }, [charIndex]);

  // Page load animation
  useEffect(() => {
    setIsLoaded(true);

    // Scroll to top on page load
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Initialize mouse follow effect
    const createMouseFollower = (e) => {
      const follower = document.createElement("div");
      follower.className = "mouse-follower";
      document.body.appendChild(follower);

      follower.style.left = e.clientX + "px";
      follower.style.top = e.clientY + "px";

      setTimeout(() => {
        follower.style.opacity = "0";
        follower.style.transform = "scale(2)";
        setTimeout(() => {
          follower.remove();
        }, 1000);
      }, 100);
    };

    document.addEventListener("mousemove", createMouseFollower);

    return () => {
      document.removeEventListener("mousemove", createMouseFollower);
    };
  }, []);

  // Featured Blog Posts
  const featuredPosts = [
    {
      id: 3,
      title: "Third Year Resources",
      excerpt:
        "Discover a treasure trove of curated resources tailored for third-year students aiming to ace internships and placements.",
      date: "May 1, 2025",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400",
      link: "https://medium.com/@jikhlin23/part-3-8563864a4801",
    },
    {
      id: 1,
      title: "IIT K Courses",
      excerpt:
        "Dive into the world of IIT Kanpur's cutting-edge courses, specially curated for Electrical Engineering and Computer Science students.",
      date: "April 12, 2025",
      image:
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&h=400",
      link: "https://medium.com/@jikhlin23/electrical-engineering-students-in-iitk-62bc057420a8",
    },
    {
      id: 2,
      title: "Second Year's Note",
      excerpt:
        "Unlock the secrets to thriving in your sophomore year with this comprehensive guide!",
      date: "February 8, 2025",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&h=400",
      link: "https://medium.com/@jikhlin23/sophomore-year-college-tips-and-resources-cba9d0a43139",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section with Personal Image Background */}
      <section className="min-h-screen flex items-center justify-center relative px-4 overflow-hidden">
        {/* Personal image background with gradient overlay */}

        <HeroBackground />

        {/* Particle Effect */}
        <div className="particles-container absolute inset-0 z-10 pointer-events-none"></div>

        <div className="container mx-auto flex flex-col items-center justify-center max-w-6xl relative z-20 gap-8">
          {/* Name, description and button - centered */}
          <div
            className={`flex flex-col items-center text-center max-w-xl transition-opacity duration-1000 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
              <span className="text-gradient text-fuchsia-800">
                {greeting.substring(0, charIndex)}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            <p
              className={`text-xl md:text-2xl mb-10 text-foreground/80 transition-opacity duration-1000 delay-500 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
            >
              IIT Kanpur Y22 | Electrical Engineering
            </p>
            <div
              className={`transition-all duration-1000 delay-1000 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <Button
                size="lg"
                className="resume-button bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 shadow-lg shadow-primary/20 animate-bounce-in transition-transform duration-300 hover:scale-110"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1beYeqm0cgBAxc1EkFuaVrzK8VhFbngCh/view?usp=sharing",
                    "_blank"
                  )
                }
              >
                See Resume
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
          <div className="scroll-indicator flex flex-col items-center text-primary animate-bounce">
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown size={24} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container-section" id="about">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <h2 className="text-gradient section-title"> Why Me ?</h2>
            <p className="text-lg text-foreground/80 mb-6">
              A tortoise 🐢 was in a race with a crocodile 🐊 this time, I
              betted against sir croc cause eh tortoise won before. Now both
              slow, one was moving at his max speed acc. to his spedometer, and
              the other cared less, lept his mouth open and said- I AM HIRING.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
              Thats when I switched sides.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
              What can i do ? I wanted to get hired.
            </p>
            {/* <p className="text-lg text-foreground/80 mb-6">
              A. Cause you were hiring. And also
            </p> */}
            <Button
              className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20 hover:opacity-90 ripple-effect"
              asChild
            >
              <Link to="/about">
                About me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-xl animate-scale-in">
            <img
              src="lovable-uploads/l2.jpeg"
              alt="Student working on a laptop"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent mix-blend-multiply"></div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Index;
