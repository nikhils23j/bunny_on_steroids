import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Code, Mail, MapPin } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gradient-to-br from-primary/90 to-secondary/90 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <h3 className="text-3xl font-serif font-bold mr-2">Nikhil Jain</h3>
              <Code className="h-5 w-5 text-accent/80" />
            </div>
            <p className="mb-6 text-white/80 max-w-md">With a passion for building innovative solutions, I turn ideas into reality through code and creativity.</p>
            <div className="flex space-x-4">
              <a href="https://github.com/nikhiljain" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:contact@nikhiljain.com" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Navigation</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/projects" className="text-white/80 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/courses" className="text-white/80 hover:text-white transition-colors">Courses</Link></li>
              <li><Link to="/blog" className="text-white/80 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-white/80">
                <Mail className="h-4 w-4 mr-2 text-accent/80" />
                nikhil@github.edu
              </li>
              <li className="flex items-center text-white/80">
                <MapPin className="h-4 w-4 mr-2 text-accent/80" />
                University Campus
              </li>
              <li className="text-white/80 flex items-center">
                <Code className="h-4 w-4 mr-2 text-accent/80" />
                Computer Science
              </li>
            </ul>
            
            <div className="mt-6 pt-4 border-t border-white/20">
              <div className="text-xs text-white/60">
                Made with React, Tailwind & Shadcn UI
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-white/60">
          <p>&copy; {currentYear} Nikhil Jain. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;