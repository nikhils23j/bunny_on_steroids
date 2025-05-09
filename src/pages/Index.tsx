import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import CodeBlock from '@/components/CodeBlock';
import GlowingCard from '@/components/GlowingCard';
const Index = () => {
  // Featured Projects
  const featuredProjects = [{
    id: 1,
    title: 'E-commerce Platform',
    description: 'Developed a full-stack e-commerce platform with React, Node.js, and MongoDB.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&h=400',
    tags: ['React', 'Node.js', 'MongoDB']
  }, {
    id: 2,
    title: 'Mobile Finance App',
    description: 'Created a personal finance tracking app with React Native and Firebase.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400',
    tags: ['React Native', 'Firebase', 'UI/UX']
  }, {
    id: 3,
    title: 'Machine Learning Analysis',
    description: 'Built a machine learning model to analyze student performance data.',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=600&h=400',
    tags: ['Python', 'TensorFlow', 'Data Analysis']
  }];

  // Featured Blog Posts
  const featuredPosts = [{
    id: 1,
    title: 'My First Semester Experience',
    excerpt: 'Reflections on adjusting to college life and academic challenges during my first semester.',
    date: 'May 15, 2023',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&h=400'
  }, {
    id: 2,
    title: 'Landing My First Internship',
    excerpt: 'How I prepared for interviews and secured my first tech internship during sophomore year.',
    date: 'August 3, 2023',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&h=400'
  }, {
    id: 3,
    title: 'Group Project Survival Guide',
    excerpt: 'Tips and lessons learned from working on team projects with classmates.',
    date: 'October 22, 2023',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&h=400'
  }];

  // Key Courses
  const keyCourses = [{
    id: 1,
    code: 'CS771',
    title: 'Introduction to Machine Learning',
    skills: ['Python', 'Algorithms', 'Data Structures']
  }, {
    id: 2,
    code: 'CS250',
    title: 'Database Systems',
    skills: ['SQL', 'Database Design', 'Normalization']
  }, {
    id: 3,
    code: 'CS340',
    title: 'Web Development',
    skills: ['HTML/CSS', 'JavaScript', 'React']
  }, {
    id: 4,
    code: 'CS420',
    title: 'Machine Learning',
    skills: ['Python', 'Neural Networks', 'Statistical Analysis']
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
              I'm a passionate Computer Science student with a focus on web development and data analysis.
              Currently in my junior year, I've developed skills across multiple programming languages and frameworks.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
              When I'm not coding, you can find me participating in hackathons, contributing to open source,
              or exploring new technologies through side projects.
            </p>
            <Button className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20 hover:opacity-90 ripple-effect" asChild>
              <Link to="/about">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-xl animate-scale-in">
            <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=600" alt="Student working on a laptop" className="w-full h-full object-cover" />
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
              I write about my college experiences, tech trends, and lessons learned along the way.
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
                  <Button variant="outline" className="w-full hover:bg-primary/10 hover:text-primary border-primary/20">
                    Read Post
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
            Interested in working together or have questions about my projects?
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