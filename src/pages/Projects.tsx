
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and order management.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&h=400',
      tags: ['Web Development', 'React', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://demo-link.com',
      category: 'web',
    },
    {
      id: 2,
      title: 'Mobile Finance App',
      description: 'A personal finance tracking app built with React Native and Firebase. Users can track expenses, set budgets, and view spending analytics.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400',
      tags: ['Mobile', 'React Native', 'Firebase', 'UI/UX'],
      github: 'https://github.com',
      demo: 'https://demo-link.com',
      category: 'mobile',
    },
    {
      id: 3,
      title: 'Machine Learning Analysis',
      description: 'A machine learning model that analyzes student performance data to predict academic outcomes. Built with Python, TensorFlow, and Scikit-learn.',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=600&h=400',
      tags: ['Data Science', 'Python', 'TensorFlow', 'Scikit-learn'],
      github: 'https://github.com',
      demo: 'https://demo-link.com',
      category: 'data',
    },
    {
      id: 4,
      title: 'Task Management System',
      description: 'A collaborative task management system built for team projects. Features include task assignment, progress tracking, and deadline notifications.',
      image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=600&h=400',
      tags: ['Web Development', 'React', 'Firebase', 'Redux'],
      github: 'https://github.com',
      demo: 'https://demo-link.com',
      category: 'web',
    },
    {
      id: 5,
      title: 'Smart Home Dashboard',
      description: 'A dashboard for controlling smart home devices. Built with React and connects to IoT devices via a custom API.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&h=400',
      tags: ['IoT', 'React', 'Node.js', 'API Integration'],
      github: 'https://github.com',
      demo: 'https://demo-link.com',
      category: 'web',
    },
    {
      id: 6,
      title: 'Sentiment Analysis Tool',
      description: 'A tool that analyzes sentiment in customer reviews. Uses natural language processing techniques to categorize feedback.',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&h=400',
      tags: ['Data Science', 'Python', 'NLP', 'Machine Learning'],
      github: 'https://github.com',
      demo: 'https://demo-link.com',
      category: 'data',
    },
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-16 bg-navy-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">My Projects</h1>
            <p className="text-xl text-gray-200 animate-fade-in">
              A showcase of my technical projects, ranging from web applications to data science.
            </p>
          </div>
        </div>
      </section>
      
      {/* Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-12">
            <div className="flex justify-center">
              <TabsList className="bg-gray-100">
                <TabsTrigger value="all" className="data-[state=active]:bg-navy-700 data-[state=active]:text-white">
                  All Projects
                </TabsTrigger>
                <TabsTrigger value="web" className="data-[state=active]:bg-navy-700 data-[state=active]:text-white">
                  Web Development
                </TabsTrigger>
                <TabsTrigger value="mobile" className="data-[state=active]:bg-navy-700 data-[state=active]:text-white">
                  Mobile Apps
                </TabsTrigger>
                <TabsTrigger value="data" className="data-[state=active]:bg-navy-700 data-[state=active]:text-white">
                  Data Science
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value={activeTab} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <Card key={project.id} className="overflow-hidden hover-scale hover:shadow-lg transition-all">
                    <div className="h-52 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-navy-800">{project.title}</h3>
                      <p className="text-navy-600 mb-4 line-clamp-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => (
                          <span key={tag} className="bg-navy-100 text-navy-700 px-2 py-1 rounded-md text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3 mt-4">
                        <Button className="flex-1 bg-navy-700 hover:bg-navy-800" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            Live Demo
                          </a>
                        </Button>
                        <Button variant="outline" className="flex-1" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            GitHub
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Project Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-navy-800">My Development Process</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-navy-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-bold mb-3 text-navy-800">Research</h3>
                <p className="text-navy-600">Understanding the problem and researching potential solutions.</p>
              </div>
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-navy-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-bold mb-3 text-navy-800">Design</h3>
                <p className="text-navy-600">Creating wireframes and planning the architecture.</p>
              </div>
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-navy-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-bold mb-3 text-navy-800">Develop</h3>
                <p className="text-navy-600">Coding the solution with clean, efficient code.</p>
              </div>
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-navy-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-xl font-bold mb-3 text-navy-800">Test & Deploy</h3>
                <p className="text-navy-600">Thorough testing and deployment to production.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Projects;
