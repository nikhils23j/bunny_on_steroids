
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Courses = () => {
  const courses = {
    computerScience: [
      {
        id: 'cs771',
        code: 'CS771',
        title: 'Machine Learning',
        semester: 'Fall 2023',
        grade: 'A',
        skills: ['Python', 'NumPy', 'scikit-learn', 'TensorFlow'],
        description: 'Comprehensive course on machine learning algorithms and their applications.',
        topics: [
          'Supervised and unsupervised learning',
          'Linear regression and SVMs',
          'Neural networks',
          'Clustering and PCA',
          'Probabilistic models',
          'EM algorithm'
        ],
        project: 'Implemented and analyzed classical ML algorithms, involving hands-on experimentation with datasets to evaluate model performance.'
      },
      {
        id: 'cs345',
        code: 'CS345',
        title: 'Algorithms II',
        semester: 'Spring 2024',
        grade: 'A',
        skills: ['C++', 'Algorithm Design', 'Complexity Analysis'],
        description: 'Advanced course on algorithm design and analysis with complex theoretical concepts.',
        topics: [
          'NP-completeness',
          'Approximation algorithms',
          'Randomization',
          'Amortized analysis',
          'Linear programming',
          'Network flows'
        ],
        project: 'Designed and implemented algorithms to solve complex competitive coding problems, focusing on efficiency and optimization.'
      },
      {
        id: 'cs315',
        code: 'CS315',
        title: 'Databases and Information Systems',
        semester: 'Fall 2023',
        grade: 'A-',
        skills: ['SQL', 'Database Design', 'Python', 'Java'],
        description: 'Fundamentals of database systems design, implementation, and management.',
        topics: [
          'ER modeling',
          'Relational algebra',
          'SQL',
          'Normalization',
          'Indexing',
          'Transactions and concurrency control'
        ],
        project: 'Developed a Hospital Management System database, designing schemas, implementing complex queries, and managing access controls.'
      },
      {
        id: 'cs425',
        code: 'CS425',
        title: 'Computer Networks',
        semester: 'Spring 2024',
        grade: 'A',
        skills: ['C/C++', 'Python', 'Socket Programming'],
        description: 'In-depth study of computer networks and network programming.',
        topics: [
          'TCP/IP stack',
          'Routing algorithms',
          'Congestion control',
          'DNS and HTTP',
          'Network security basics',
          'Socket programming'
        ],
        project: 'Built a client-server chat system focused on real-time communication and reliability.'
      },
      {
        id: 'eso207',
        code: 'ESO207',
        title: 'Data Structures and Algorithms',
        semester: 'Spring 2023',
        grade: 'A+',
        skills: ['C++', 'Algorithm Design', 'Data Structures'],
        description: 'Fundamental course on data structures and algorithm design techniques.',
        topics: [
          'Arrays and linked lists',
          'Trees, heaps, and graphs',
          'Dynamic programming',
          'Sorting/searching algorithms',
          'Recursion',
          'Time and space complexity analysis'
        ],
        project: 'Implemented core data structures and algorithms from scratch, optimizing for performance and scalability.'
      }
    ],
    electrical: [
      {
        id: 'ee381',
        code: 'EE381',
        title: 'Embedded Systems',
        semester: 'Fall 2023',
        grade: 'A',
        skills: ['Embedded C', 'Arduino', 'Microcontrollers', 'I/O Interfacing'],
        description: 'Hands-on course on embedded systems design and development.',
        topics: [
          'Microcontrollers and architecture',
          'I/O interfacing',
          'RTOS concepts',
          'Embedded C programming',
          'Interrupts and timers',
          'Communication protocols (UART, SPI, I2C)'
        ],
        project: 'Developed a Car Crash Detection and Notification System, using sensors for real-time data acquisition and communication modules for alerts.'
      },
      {
        id: 'ee321',
        code: 'EE321',
        title: 'Communication Systems',
        semester: 'Spring 2024',
        grade: 'A-',
        skills: ['MATLAB', 'Python', 'Signal Processing'],
        description: 'Study of analog and digital communication systems and techniques.',
        topics: [
          'Modulation techniques (AM, FM, PM)',
          'Sampling theorem',
          'Noise analysis',
          'Digital communication',
          'Error detection/correction',
          'Information theory basics'
        ],
        project: 'Simulated various modulation schemes and digital signal transmission, analyzing performance under different noise conditions.'
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-16 bg-navy-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">My Courses</h1>
            <p className="text-xl text-gray-200 animate-fade-in">
              An overview of the key courses I've completed during my academic journey at IIT Kanpur.
            </p>
          </div>
        </div>
      </section>
      
      {/* Courses Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="computerScience" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-100">
                <TabsTrigger 
                  value="computerScience" 
                  className="data-[state=active]:bg-navy-700 data-[state=active]:text-white"
                >
                  Computer Science
                </TabsTrigger>
                <TabsTrigger 
                  value="electrical" 
                  className="data-[state=active]:bg-navy-700 data-[state=active]:text-white"
                >
                  Electrical Engineering
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="computerScience" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.computerScience.map((course) => (
                  <Card key={course.id} className="overflow-hidden hover:shadow-md transition-all">
                    <CardContent className="p-0">
                      <div className="bg-navy-700 text-white p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold">{course.title}</h3>
                            <p className="text-navy-100">{course.code} - {course.semester}</p>
                          </div>
                          <span className="bg-white text-navy-800 px-2 py-1 rounded-full text-sm font-semibold">
                            {course.grade}
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-navy-600 mb-4">{course.description}</p>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="topics">
                            <AccordionTrigger className="text-navy-800">Key Topics</AccordionTrigger>
                            <AccordionContent>
                              <ul className="list-disc pl-5 space-y-1 text-navy-600">
                                {course.topics.map((topic, index) => (
                                  <li key={index}>{topic}</li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="project">
                            <AccordionTrigger className="text-navy-800">Course Project</AccordionTrigger>
                            <AccordionContent>
                              <p className="text-navy-600">{course.project}</p>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {course.skills.map(skill => (
                            <span key={skill} className="bg-navy-100 text-navy-700 px-2 py-1 rounded-md text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="electrical" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.electrical.map((course) => (
                  <Card key={course.id} className="overflow-hidden hover:shadow-md transition-all">
                    <CardContent className="p-0">
                      <div className="bg-teal-700 text-white p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold">{course.title}</h3>
                            <p className="text-teal-100">{course.code} - {course.semester}</p>
                          </div>
                          <span className="bg-white text-teal-800 px-2 py-1 rounded-full text-sm font-semibold">
                            {course.grade}
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-navy-600 mb-4">{course.description}</p>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="topics">
                            <AccordionTrigger className="text-navy-800">Key Topics</AccordionTrigger>
                            <AccordionContent>
                              <ul className="list-disc pl-5 space-y-1 text-navy-600">
                                {course.topics.map((topic, index) => (
                                  <li key={index}>{topic}</li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="project">
                            <AccordionTrigger className="text-navy-800">Course Project</AccordionTrigger>
                            <AccordionContent>
                              <p className="text-navy-600">{course.project}</p>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {course.skills.map(skill => (
                            <span key={skill} className="bg-teal-100 text-teal-700 px-2 py-1 rounded-md text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Skills Summary */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-navy-800">Skills Acquired</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-bold mb-4 text-navy-800 border-b pb-2">Programming Languages</h3>
                <ul className="space-y-2 text-navy-700">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-navy-700 rounded-full mr-2"></span>
                    Python
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-navy-700 rounded-full mr-2"></span>
                    C++
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-navy-700 rounded-full mr-2"></span>
                    Embedded C
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-navy-700 rounded-full mr-2"></span>
                    SQL
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-navy-700 rounded-full mr-2"></span>
                    MATLAB
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-bold mb-4 text-navy-800 border-b pb-2">Computer Science</h3>
                <ul className="space-y-2 text-navy-700">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-teal-700 rounded-full mr-2"></span>
                    Machine Learning
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-teal-700 rounded-full mr-2"></span>
                    Data Structures & Algorithms
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-teal-700 rounded-full mr-2"></span>
                    Database Systems
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-teal-700 rounded-full mr-2"></span>
                    Computer Networks
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-teal-700 rounded-full mr-2"></span>
                    Socket Programming
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-bold mb-4 text-navy-800 border-b pb-2">Electrical Engineering</h3>
                <ul className="space-y-2 text-navy-700">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-amber-600 rounded-full mr-2"></span>
                    Embedded Systems
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-amber-600 rounded-full mr-2"></span>
                    Microcontroller Programming
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-amber-600 rounded-full mr-2"></span>
                    Communication Systems
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-amber-600 rounded-full mr-2"></span>
                    Signal Processing
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-amber-600 rounded-full mr-2"></span>
                    Sensor Integration
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Courses;
