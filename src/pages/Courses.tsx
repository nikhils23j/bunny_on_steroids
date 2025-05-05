
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Courses = () => {
  const courses = {
    computerScience: [
      {
        id: 'cs101',
        code: 'CS101',
        title: 'Introduction to Computer Science',
        semester: 'Fall 2021',
        grade: 'A',
        skills: ['Python', 'Algorithms', 'Data Structures'],
        description: 'Foundations of computer science, including programming basics, algorithms, and data structures.',
        topics: [
          'Programming fundamentals with Python',
          'Algorithm analysis and design',
          'Basic data structures (arrays, lists, stacks, queues)',
          'Introduction to object-oriented programming',
          'Problem-solving techniques'
        ],
        project: 'Developed a simple inventory management system using Python and basic data structures.'
      },
      {
        id: 'cs201',
        code: 'CS201',
        title: 'Data Structures and Algorithms',
        semester: 'Spring 2022',
        grade: 'A-',
        skills: ['Java', 'Algorithm Analysis', 'Complex Data Structures'],
        description: 'Advanced study of data structures and algorithm analysis.',
        topics: [
          'Advanced data structures (trees, graphs, hash tables)',
          'Algorithm design techniques',
          'Sorting and searching algorithms',
          'Dynamic programming',
          'Graph algorithms'
        ],
        project: 'Implemented a graph-based social network analysis tool that identified friend clusters.'
      },
      {
        id: 'cs250',
        code: 'CS250',
        title: 'Database Systems',
        semester: 'Fall 2022',
        grade: 'A',
        skills: ['SQL', 'Database Design', 'Normalization'],
        description: 'Fundamentals of database systems, SQL, and database design.',
        topics: [
          'Relational database concepts',
          'SQL query language',
          'Database design and normalization',
          'Transaction processing',
          'Database security'
        ],
        project: 'Designed and implemented a comprehensive database system for a fictional university.'
      },
      {
        id: 'cs340',
        code: 'CS340',
        title: 'Web Development',
        semester: 'Spring 2023',
        grade: 'A',
        skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js'],
        description: 'Comprehensive course on modern web development technologies and practices.',
        topics: [
          'Front-end development with HTML, CSS, and JavaScript',
          'React framework for single-page applications',
          'Server-side development with Node.js',
          'RESTful API design',
          'Web security best practices'
        ],
        project: 'Built a full-stack web application for event management with user authentication and real-time updates.'
      }
    ],
    mathematics: [
      {
        id: 'math241',
        code: 'MATH241',
        title: 'Calculus I',
        semester: 'Fall 2021',
        grade: 'B+',
        skills: ['Differentiation', 'Integration', 'Mathematical Modeling'],
        description: 'Introduction to differential and integral calculus.',
        topics: [
          'Limits and continuity',
          'Derivatives and their applications',
          'Integration techniques',
          'Applications of integration',
          'Mathematical modeling'
        ],
        project: 'Applied calculus concepts to solve real-world physics problems.'
      },
      {
        id: 'math242',
        code: 'MATH242',
        title: 'Calculus II',
        semester: 'Spring 2022',
        grade: 'B',
        skills: ['Series', 'Advanced Integration', 'Parametric Equations'],
        description: 'Advanced topics in calculus, including series and parametric equations.',
        topics: [
          'Sequences and series',
          'Advanced integration techniques',
          'Parametric equations',
          'Polar coordinates',
          'Applications in physics and engineering'
        ],
        project: 'Analyzed convergence of various mathematical series and their applications.'
      },
      {
        id: 'stat330',
        code: 'STAT330',
        title: 'Probability and Statistics',
        semester: 'Fall 2022',
        grade: 'A-',
        skills: ['Probability Theory', 'Statistical Analysis', 'Data Interpretation'],
        description: 'Introduction to probability theory and statistical methods.',
        topics: [
          'Probability concepts and theorems',
          'Random variables and distributions',
          'Descriptive statistics',
          'Inferential statistics',
          'Hypothesis testing'
        ],
        project: 'Conducted statistical analysis on a dataset of student performance factors.'
      }
    ],
    electives: [
      {
        id: 'psych101',
        code: 'PSYCH101',
        title: 'Introduction to Psychology',
        semester: 'Spring 2022',
        grade: 'A',
        skills: ['Psychological Theory', 'Human Behavior Analysis', 'Critical Thinking'],
        description: 'Overview of basic psychological theories and human behavior.',
        topics: [
          'Cognitive psychology',
          'Developmental psychology',
          'Social psychology',
          'Abnormal psychology',
          'Research methods in psychology'
        ],
        project: 'Designed and conducted a small-scale psychological experiment on memory recall.'
      },
      {
        id: 'econ201',
        code: 'ECON201',
        title: 'Microeconomics',
        semester: 'Fall 2022',
        grade: 'B+',
        skills: ['Economic Theory', 'Market Analysis', 'Critical Thinking'],
        description: 'Principles of microeconomics, including supply and demand, market structures, and resource allocation.',
        topics: [
          'Supply and demand analysis',
          'Consumer and producer theory',
          'Market structures and competition',
          'Resource allocation and efficiency',
          'Government intervention and regulation'
        ],
        project: 'Analyzed a local market's pricing strategies and competitive dynamics.'
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
              An overview of the key courses I've completed or am currently taking during my academic journey.
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
                  value="mathematics" 
                  className="data-[state=active]:bg-navy-700 data-[state=active]:text-white"
                >
                  Mathematics
                </TabsTrigger>
                <TabsTrigger 
                  value="electives" 
                  className="data-[state=active]:bg-navy-700 data-[state=active]:text-white"
                >
                  Electives
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
            
            <TabsContent value="mathematics" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.mathematics.map((course) => (
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
            
            <TabsContent value="electives" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.electives.map((course) => (
                  <Card key={course.id} className="overflow-hidden hover:shadow-md transition-all">
                    <CardContent className="p-0">
                      <div className="bg-amber-600 text-white p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold">{course.title}</h3>
                            <p className="text-amber-100">{course.code} - {course.semester}</p>
                          </div>
                          <span className="bg-white text-amber-800 px-2 py-1 rounded-full text-sm font-semibold">
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
                            <span key={skill} className="bg-amber-100 text-amber-700 px-2 py-1 rounded-md text-sm">
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
                    Java
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-navy-700 rounded-full mr-2"></span>
                    JavaScript
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-navy-700 rounded-full mr-2"></span>
                    SQL
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-navy-700 rounded-full mr-2"></span>
                    HTML/CSS
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-bold mb-4 text-navy-800 border-b pb-2">Web Technologies</h3>
                <ul className="space-y-2 text-navy-700">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-teal-700 rounded-full mr-2"></span>
                    React
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-teal-700 rounded-full mr-2"></span>
                    Node.js
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-teal-700 rounded-full mr-2"></span>
                    Express
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-teal-700 rounded-full mr-2"></span>
                    MongoDB
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-teal-700 rounded-full mr-2"></span>
                    RESTful APIs
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-bold mb-4 text-navy-800 border-b pb-2">Data Science</h3>
                <ul className="space-y-2 text-navy-700">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-amber-600 rounded-full mr-2"></span>
                    Data Analysis
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-amber-600 rounded-full mr-2"></span>
                    Statistics
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-amber-600 rounded-full mr-2"></span>
                    Machine Learning
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-amber-600 rounded-full mr-2"></span>
                    NumPy/Pandas
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-amber-600 rounded-full mr-2"></span>
                    Data Visualization
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
