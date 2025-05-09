
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import GlowingCard from '@/components/GlowingCard';
import { useEffect, useState } from 'react';

const Index = () => {
  // State for animations
  const [isLoaded, setIsLoaded] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const greeting = "Hi, I'm Nikhil.";
  
  // Typewriter effect
  useEffect(() => {
    if (charIndex < greeting.length) {
      const timer = setTimeout(() => {
        setCharIndex(prevIndex => prevIndex + 1);
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
      behavior: 'smooth'
    });
    
    // Initialize mouse follow effect
    const createMouseFollower = (e) => {
      const follower = document.createElement('div');
      follower.className = 'mouse-follower';
      document.body.appendChild(follower);
      
      follower.style.left = e.clientX + 'px';
      follower.style.top = e.clientY + 'px';
      
      setTimeout(() => {
        follower.style.opacity = '0';
        follower.style.transform = 'scale(2)';
        setTimeout(() => {
          follower.remove();
        }, 1000);
      }, 100);
    };
    
    document.addEventListener('mousemove', createMouseFollower);
    
    return () => {
      document.removeEventListener('mousemove', createMouseFollower);
    };
  }, []);

  // Featured Projects
  const featuredProjects = [{
    id: 1,
    title: 'Paragraph Identification System',
    description: 'Developed a system to identify the most relevant paragraphs in a corpus based on a given question using natural language processing techniques.',
    image: 'https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?auto=format&fit=crop&w=600&h=400',
    tags: ['Python', 'NLP', 'Information Retrieval']
  }, {
    id: 2,
    title: 'Retrieval Augmented Generation',
    description: 'Implemented RAG using a large language model API to generate concise, contextually accurate responses for question-answering systems.',
    image: 'https://images.unsplash.com/photo-1677442135136-760c813028c4?auto=format&fit=crop&w=600&h=400',
    tags: ['Python', 'LLM API', 'AI']
  }, {
    id: 3,
    title: 'Trie and Linked List for Query Processing',
    description: 'Designed and implemented efficient data structures for query processing and result retrieval, optimized for large datasets.',
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&h=400',
    tags: ['C++', 'Data Structures', 'Algorithms']
  }];

  // Featured Blog Posts
  const featuredPosts = [{
    id: 1,
    title: 'Third Year Resources',
    excerpt: 'Discover a treasure trove of curated resources tailored for third-year students aiming to ace internships and placements.',
    date: 'May 1, 2025',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400',
    link: 'https://medium.com/@jikhlin23/part-3-8563864a4801'
  }, {
    id: 2,
    title: 'IIT K Courses',
    excerpt: 'Dive into the world of IIT Kanpur\'s cutting-edge courses, specially curated for Electrical Engineering and Computer Science students.',
    date: 'April 12, 2025',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&h=400',
    link: 'https://medium.com/@jikhlin23/electrical-engineering-students-in-iitk-62bc057420a8'
  }, {
    id: 3,
    title: 'Second Year\'s Note',
    excerpt: 'Unlock the secrets to thriving in your sophomore year with this comprehensive guide!',
    date: 'February 8, 2025',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&h=400',
    link: 'https://medium.com/@jikhlin23/sophomore-year-college-tips-and-resources-cba9d0a43139'
  }];

  // Key Courses
  const keyCourses = [{
    id: 1,
    code: 'CS771',
    title: 'Machine Learning',
    skills: ['Python', 'NumPy', 'scikit-learn', 'TensorFlow']
  }, {
    id: 2,
    code: 'CS345',
    title: 'Algorithms II',
    skills: ['C++', 'Algorithm Design', 'Complexity Analysis']
  }, {
    id: 3,
    code: 'CS315',
    title: 'Databases and Information Systems',
    skills: ['SQL', 'Database Design', 'ER Modeling']
  }, {
    id: 4,
    code: 'CS425',
    title: 'Computer Networks',
    skills: ['TCP/IP', 'Routing', 'Socket Programming']
  }, {
    id: 5,
    code: 'ESO207',
    title: 'Data Structures and Algorithms',
    skills: ['C++', 'Data Structures', 'Algorithms']
  }, {
    id: 6,
    code: 'EE381',
    title: 'Embedded Systems',
    skills: ['Embedded C', 'Microcontrollers', 'IoT']
  }, {
    id: 7,
    code: 'EE321',
    title: 'Communication Systems',
    skills: ['MATLAB', 'Signal Processing', 'Modulation']
  }];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section with Personal Image Background */}
      <section className="min-h-screen flex items-center justify-center relative px-4 overflow-hidden">
        {/* Personal image background with gradient overlay */}
        <div className="absolute inset-0 z-0 hero-background-image animate-hero-zoom">
          <img 
            src="/lovable-uploads/c7c909f4-10ae-4af6-a9e9-e8fc3f14f3d4.png" 
            alt="Nikhil in mountains" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient-overlay"></div>
        </div>
        
        {/* Particle Effect */}
        <div className="particles-container absolute inset-0 z-10 pointer-events-none"></div>
        
        <div className="container mx-auto flex flex-col items-center justify-center max-w-6xl relative z-20 gap-8">
          {/* Name, description and button - centered */}
          <div className={`flex flex-col items-center text-center max-w-xl transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
              <span className="text-gradient text-fuchsia-800">
                {greeting.substring(0, charIndex)}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            <p className={`text-xl md:text-2xl mb-10 text-foreground/80 transition-opacity duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              IIT Kanpur Y22 | Electrical Engineering
            </p>
            <div className={`transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Button 
                size="lg" 
                className="resume-button bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 shadow-lg shadow-primary/20 animate-bounce-in transition-transform duration-300 hover:scale-110"
                onClick={() => window.open('/path/to/resume.pdf', '_blank')}
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
            <h2 className="text-gradient section-title">About Me</h2>
            <p className="text-lg text-foreground/80 mb-6">
              I'm Nikhil Jain, a third-year Electrical Engineering undergraduate at IIT Kanpur with a CPI of 8.0/10. Passionate about technology and innovation, I'm currently interning at Samsung Research Bangalore in the networks modem domain, gaining hands-on experience in advanced communication systems.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
              I'm pursuing a minor in Machine Learning, Systems, and Algorithms in the CSE department, set to complete by 2025. My academic journey is marked by consistent excellence, complemented by a love for singing, art, and chess.
            </p>
            <Button className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20 hover:opacity-90 ripple-effect" asChild>
              <Link to="/about">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-xl animate-scale-in">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=600" alt="Student working on a laptop" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent mix-blend-multiply"></div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/90 -z-10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle mx-auto">
              Here are some of my recent projects that showcase my technical skills and problem-solving abilities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => <GlowingCard key={project.id}>
                <div className="h-48 -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-lg">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => <span key={tag} className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm">
                      {tag}
                    </span>)}
                </div>
                <Button variant="outline" className="w-full hover:bg-primary/10 hover:text-primary border-primary/20">
                  View Details
                </Button>
              </GlowingCard>)}
          </div>
          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20 hover:opacity-90 ripple-effect" asChild>
              <Link to="/projects">View All Projects <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="container-section">
        <div className="text-center mb-16">
          <h2 className="section-title">Key Courses</h2>
          <p className="section-subtitle mx-auto">
            A selection of important courses I've completed that have shaped my knowledge and skills.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {keyCourses.slice(0, 4).map(course => <div key={course.id} className="glass-card rounded-lg p-6 hover:shadow-lg transition-all border-white/20">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold">{course.title}</h3>
                  <p className="text-foreground/70">{course.code}</p>
                </div>
                <span className="bg-accent/10 text-accent text-xs px-2 py-1 rounded-full">Completed</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {course.skills.map(skill => <span key={skill} className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm">
                    {skill}
                  </span>)}
              </div>
            </div>)}
        </div>
        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20 hover:opacity-90 ripple-effect" asChild>
            <Link to="/courses">View All Courses <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/90 -z-10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Recent Blog Posts</h2>
            <p className="section-subtitle mx-auto">
              I write about my college experiences, tech insights, and academic journey at IIT Kanpur.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map(post => <Card key={post.id} className="overflow-hidden hover-scale hover:shadow-lg transition-all bg-white/50 backdrop-blur-sm border border-white/30">
                <div className="h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-foreground/60 mb-2">{post.date}</div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-foreground/70 mb-4">{post.excerpt}</p>
                  <Button variant="outline" className="w-full hover:bg-primary/10 hover:text-primary border-primary/20" asChild>
                    <a href={post.link} target="_blank" rel="noopener noreferrer">
                      Read on Medium
                    </a>
                  </Button>
                </CardContent>
              </Card>)}
          </div>
          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20 hover:opacity-90 ripple-effect" asChild>
              <Link to="/blog">View All Posts <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif">Let's Connect</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
            Interested in discussing tech, collaboration, or learning more about my projects?
            Feel free to reach out!
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover-scale shadow-lg shadow-black/10 ripple-effect" asChild>
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
