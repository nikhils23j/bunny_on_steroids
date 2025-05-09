
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
      title: 'Paragraph Identification System',
      description: 'Developed a system to identify the most relevant paragraphs in a corpus based on a given question. Leveraged natural language processing techniques to extract and rank information efficiently, enhancing query-based information retrieval.',
      image: 'https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?auto=format&fit=crop&w=600&h=400',
      tags: ['Python', 'NLP', 'Information Retrieval'],
      github: 'https://github.com',
      demo: 'https://demo-link.com',
      category: 'data',
    },
    {
      id: 2,
      title: 'Retrieval Augmented Generation (RAG) Implementation',
      description: 'Implemented Retrieval Augmented Generation using a large language model API to generate concise, contextually accurate responses. Integrated document retrieval and response generation for improved answer quality in question-answering systems.',
      image: 'https://images.unsplash.com/photo-1677442135136-760c813028c4?auto=format&fit=crop&w=600&h=400',
      tags: ['Python', 'LLM API', 'AI', 'NLP'],
      github: 'https://github.com',
      demo: 'https://demo-link.com',
      category: 'data',
    },
    {
      id: 3,
      title: 'Trie and Linked List for Query Processing',
      description: 'Designed and implemented a Trie data structure for efficient query processing and a Linked List for seamless result retrieval. Optimized the system for fast and scalable handling of large query datasets.',
      image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&h=400',
      tags: ['C++', 'Data Structures', 'Optimization', 'Algorithms'],
      github: 'https://github.com',
      demo: 'https://demo-link.com',
      category: 'web',
    },
    {
      id: 4,
      title: 'Car Crash Detection System',
      description: 'Developed an embedded system that detects car crashes and automatically sends emergency notifications with location data.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&h=400',
      tags: ['Embedded C', 'IoT', 'Sensors'],
      github: 'https://github.com',
      demo: 'https://demo-link.com',
      category: 'web',
    },
    {
      id: 5,
      title: 'ML-Based Predictive Maintenance',
      description: 'Created a machine learning model to predict equipment failures in industrial settings, reducing downtime and maintenance costs.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400',
      tags: ['Python', 'Machine Learning', 'Data Analysis'],
      github: 'https://github.com',
      demo: 'https://demo-link.com',
      category: 'data',
    },
    {
      id: 6,
      title: 'Communication Protocol Simulator',
      description: 'Built a simulator for testing and analyzing various network protocols under different conditions and traffic loads.',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=600&h=400',
      tags: ['C++', 'Computer Networks', 'Simulation'],
      github: 'https://github.com',
      demo: 'https://demo-link.com',
      category: 'mobile',
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
                  <Card key={project.id} className="overflow-hidden hover:scale-105 hover:shadow-lg transition-all duration-300 hover:border-3 border">
                    <div className="h-52 overflow-hidden">
                      <img 
                        src={project.id === 2 ? 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&h=400' : project.image} 
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
              <div className="p-6 text-center hover:scale-105 hover:shadow-md transition-all duration-300 hover:border-3 border bg-white rounded-lg">
                <div className="w-16 h-16 bg-navy-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-bold mb-3 text-navy-800">Research</h3>
                <p className="text-navy-600">Understanding the problem and researching potential solutions.</p>
              </div>
              <div className="p-6 text-center hover:scale-105 hover:shadow-md transition-all duration-300 hover:border-3 border bg-white rounded-lg">
                <div className="w-16 h-16 bg-navy-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-bold mb-3 text-navy-800">Design</h3>
                <p className="text-navy-600">Creating wireframes and planning the architecture.</p>
              </div>
              <div className="p-6 text-center hover:scale-105 hover:shadow-md transition-all duration-300 hover:border-3 border bg-white rounded-lg">
                <div className="w-16 h-16 bg-navy-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-bold mb-3 text-navy-800">Develop</h3>
                <p className="text-navy-600">Coding the solution with clean, efficient code.</p>
              </div>
              <div className="p-6 text-center hover:scale-105 hover:shadow-md transition-all duration-300 hover:border-3 border bg-white rounded-lg">
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
