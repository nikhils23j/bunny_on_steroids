import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Github,
  Code,
  Bookmark,
  Home,
  User,
  Layers,
  BookOpen,
  MessageSquare,
  PenTool,
} from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Update scrolled state on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: Home,
    },
    {
      name: "About",
      path: "/about",
      icon: User,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: Layers,
    },
    {
      name: "Courses",
      path: "/courses",
      icon: BookOpen,
    },
    {
      name: "B/S",
      path: "/story",
      icon: PenTool,
    },
    // {
    //   name: "Contact",
    //   path: "/contact",
    //   icon: MessageSquare,
    // },
  ];
  const isActive = (path: string) => location.pathname === path;
  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="font-serif font-bold flex items-center hover-scale"
        >
          <span className="text-3xl text-gradient text-zinc-800">Nikhil</span>
          <span className="text-3xl text-foreground ml-1">Jain</span>
          <Code className="ml-2 text-accent h-5 w-5" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1 items-center bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-full px-2 py-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "flex items-center px-4 py-2 rounded-full font-medium transition-all duration-300",
                isActive(item.path)
                  ? "bg-primary text-white"
                  : "text-foreground hover:bg-primary/10"
              )}
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.name}
            </Link>
          ))}

          <ThemeToggle className="ml-2" />

          <a
            href="https://github.com/Jikhlin23"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 p-2 rounded-full bg-foreground text-background hover:bg-accent transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>

        {/* Mobile Icons */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <a
            href="https://github.com/Jikhlin23"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-foreground text-background hover:bg-accent transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-t border-border shadow-lg">
        <div className="flex justify-around items-center py-2 px-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "flex flex-col items-center p-2 rounded-lg transition-all duration-200 min-w-0 flex-1",
                isActive(item.path)
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              <item.icon className="h-5 w-5 mb-1" />
              <span className="text-xs font-medium truncate">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
