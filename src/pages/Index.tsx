
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import GlowingCard from '@/components/GlowingCard';

const Index = () => {
  // Featured Projects
  const featuredProjects = [{
    id: 1,
    title: 'Car Crash Detection System',
    description: 'Developed an embedded system that detects car crashes and automatically sends emergency notifications with location data.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&h=400',
    tags: ['Embedded C', 'IoT', 'Sensors']
  }, {
    id: 2,
    title: 'ML-Based Predictive Maintenance',
    description: 'Created a machine learning model to predict equipment failures in industrial settings, reducing downtime and maintenance costs.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400',
    tags: ['Python', 'Machine Learning', 'Data Analysis']
  }, {
    id: 3,
    title: 'Communication Protocol Simulator',
    description: 'Built a simulator for testing and analyzing various network protocols under different conditions and traffic loads.',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=600&h=400',
    tags: ['C++', 'Computer Networks', 'Simulation']
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
    code: 'CS315',
    title: 'Databases and Information Systems',
    skills: ['SQL', 'Database Design', 'ER Modeling']
  }, {
    id: 3,
    code: 'EE381',
    title: 'Embedded Systems',
    skills: ['Embedded C', 'Microcontrollers', 'IoT']
  }, {
    id: 4,
    code: 'CS345',
    title: 'Algorithms II',
    skills: ['C++', 'Algorithm Design', 'Complexity Analysis']
  }];
  
  return <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4 overflow-hidden">
        <AnimatedBackground />
        
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between max-w-6xl animate-fade-in relative z-10 gap-8">
          {/* Left column: Name, description and buttons */}
          <div className="flex flex-col items-start text-left max-w-xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
              <span className="text-gradient text-fuchsia-800">Hey I'm Nikhil!</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-foreground/80">Electrical engineering,
Indian Institute of Technology, Kanpur
Batch 2022

          </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 shadow-lg shadow-primary/20 ripple-effect" asChild>
                <Link to="/projects">View Projects</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 ripple-effect" asChild>
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          
          {/* Right column: Image */}
          <div className="w-full md:w-2/5 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 p-1 shadow-xl animate-scale-in">
              <img src="/lovable-uploads/34df2576-2aa5-4cba-a3c6-afe6cbfc1f8a.png" alt="Nikhil's profile" className="w-full h-full rounded-full object-cover object-center" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container-section" id="about">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <h2 className="text-gradient section-title">About Me</h2>
            <p className="text-lg text-foreground/80 mb-6">
              I'm a third-year Electrical Engineering student at IIT Kanpur, passionate about technology and innovation. Currently, I'm interning at Samsung Research Bangalore in the networks modem domain, where I'm gaining hands-on experience in cutting-edge communication systems.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
              Beyond academics, I have a knack for singing and am honing my skills in machine learning, quantitative finance, and data structures and algorithms. By 2025, I aim to complete a minor in Machine Learning, Systems, and Algorithms in the CSE department.
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
          {keyCourses.map(course => <div key={course.id} className="glass-card rounded-lg p-6 hover:shadow-lg transition-all border-white/20">
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
    </div>;
};
export default Index;
