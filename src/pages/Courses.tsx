import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Courses = () => {
  const courses = {
    machineLearning: [
      {
        id: "cs779",
        code: "CS779",
        title: "Statistical Natural Language Processing",
        semester: "Fall 2024",
        grade: "A",
        skills: ["Python", "NLP", "Machine Learning", "PyTorch"],
        description:
          "Course covering statistical methods in natural language processing and machine learning.",
        topics: [
          "Language models",
          "Hidden Markov Models",
          "POS tagging",
          "Parsing",
          "Word embeddings",
          "Neural NLP",
        ],
        project:
          "Built a sentiment analysis model using statistical and neural NLP techniques on real-world datasets.",
      },
      {
        id: "cs771",
        code: "CS771",
        title: "Machine Learning",
        semester: "Fall 2023",
        grade: "A",
        skills: ["Python", "NumPy", "scikit-learn", "TensorFlow"],
        description:
          "Comprehensive course on machine learning algorithms and their applications.",
        topics: [
          "Supervised and unsupervised learning",
          "Linear regression and SVMs",
          "Neural networks",
          "Clustering and PCA",
          "Probabilistic models",
          "EM algorithm",
        ],
        project:
          "Implemented and analyzed classical ML algorithms, involving hands-on experimentation with datasets to evaluate model performance.",
      },
      {
        id: "ee708",
        code: "EE708",
        title: "Fundamentals of Data Science and Machine Intelligence",
        semester: "Spring 2024",
        grade: "A",
        skills: ["Python", "Data Science", "Pandas", "Matplotlib"],
        description:
          "Introduction to data science methods and foundational concepts in machine intelligence.",
        topics: [
          "Probability and statistics for data science",
          "Linear regression",
          "Clustering",
          "Classification",
          "Feature engineering",
          "Evaluation metrics",
        ],
        project:
          "Developed predictive models using real-world datasets with emphasis on data preprocessing and visualization.",
      },
    ],

    computerScience: [
      {
        id: "eso207",
        code: "ESO207",
        title: "Data Structures and Algorithms",
        semester: "Spring 2023",
        grade: "A+",
        skills: ["C++", "Algorithm Design", "Data Structures"],
        description:
          "Fundamental course on data structures and algorithm design techniques.",
        topics: [
          "Arrays and linked lists",
          "Trees, heaps, and graphs",
          "Dynamic programming",
          "Sorting/searching algorithms",
          "Recursion",
          "Time and space complexity analysis",
        ],
        project:
          "Implemented core data structures and algorithms from scratch, optimizing for performance and scalability.",
      },
      {
        id: "cs345",
        code: "CS345",
        title: "Advanced Algorithms",
        semester: "Spring 2024",
        grade: "A",
        skills: ["C++", "Algorithm Design", "Complexity Analysis"],
        description:
          "Advanced course on algorithm design and analysis with complex theoretical concepts.",
        topics: [
          "NP-completeness",
          "Approximation algorithms",
          "Randomization",
          "Amortized analysis",
          "Linear programming",
          "Network flows",
        ],
        project:
          "Designed and implemented algorithms to solve complex competitive coding problems, focusing on efficiency and optimization.",
      },
      {
        id: "cs315",
        code: "CS315",
        title: "Principles of Database Systems",
        semester: "Fall 2023",
        grade: "A-",
        skills: ["SQL", "Database Design", "Python", "Java"],
        description:
          "Fundamentals of database systems design, implementation, and management.",
        topics: [
          "ER modeling",
          "Relational algebra",
          "SQL",
          "Normalization",
          "Indexing",
          "Transactions and concurrency control",
        ],
        project:
          "Developed a Hospital Management System database, designing schemas, implementing complex queries, and managing access controls.",
      },
      {
        id: "cs425",
        code: "CS425",
        title: "Computer Networks",
        semester: "Spring 2024",
        grade: "A",
        skills: ["C/C++", "Python", "Socket Programming"],
        description:
          "In-depth study of computer networks and network programming.",
        topics: [
          "TCP/IP stack",
          "Routing algorithms",
          "Congestion control",
          "DNS and HTTP",
          "Network security basics",
          "Socket programming",
        ],
        project:
          "Built a client-server chat system focused on real-time communication and reliability.",
      },
    ],

    mathematics: [
      {
        id: "mso201",
        code: "MSO201",
        title: "Probability and Statistics",
        semester: "Spring 2023",
        grade: "A",
        skills: ["Probability Theory", "Statistical Analysis", "R/Python"],
        description:
          "Course covering foundations of probability and statistical inference.",
        topics: [
          "Random variables",
          "Distributions",
          "Expectation and variance",
          "Hypothesis testing",
          "Confidence intervals",
          "Regression analysis",
        ],
        project:
          "Performed statistical analysis on real-world datasets to derive insights and validate hypotheses.",
      },
      {
        id: "ma201",
        code: "MA201",
        title: "Linear Algebra and Differential Equations",
        semester: "Fall 2022",
        grade: "A",
        skills: [
          "Linear Algebra",
          "Differential Equations",
          "Mathematical Modeling",
        ],
        description:
          "Introduction to linear algebra and differential equations with engineering applications.",
        topics: [
          "Matrix theory",
          "Eigenvalues and eigenvectors",
          "Systems of linear equations",
          "First and second-order ODEs",
          "Laplace transforms",
        ],
        project:
          "Modeled physical systems using differential equations and solved them analytically and numerically.",
      },
      {
        id: "ma202",
        code: "MA202",
        title: "Complex Analysis",
        semester: "Spring 2023",
        grade: "A",
        skills: ["Complex Functions", "Mathematical Analysis"],
        description:
          "Fundamentals of complex functions and their applications in engineering and physics.",
        topics: [
          "Analytic functions",
          "Cauchy’s theorem",
          "Laurent series",
          "Residue theorem",
          "Conformal mappings",
        ],
        project:
          "Applied complex analysis methods to solve contour integrals in applied mathematics problems.",
      },
    ],

    electrical: [
      {
        id: "ee321",
        code: "EE321",
        title: "Communication Systems",
        semester: "Spring 2024",
        grade: "A-",
        skills: ["MATLAB", "Python", "Signal Processing"],
        description:
          "Study of analog and digital communication systems and techniques.",
        topics: [
          "Modulation techniques (AM, FM, PM)",
          "Sampling theorem",
          "Noise analysis",
          "Digital communication",
          "Error detection/correction",
          "Information theory basics",
        ],
        project:
          "Simulated various modulation schemes and digital signal transmission, analyzing performance under different noise conditions.",
      },
      {
        id: "ee370",
        code: "EE370",
        title: "Digital Electronics",
        semester: "Fall 2023",
        grade: "A",
        skills: ["Verilog", "Logic Design", "Digital Circuits"],
        description:
          "Course on fundamentals of digital circuit design and analysis.",
        topics: [
          "Logic gates",
          "Combinational circuits",
          "Sequential circuits",
          "Finite state machines",
          "Memory elements",
        ],
        project:
          "Designed and implemented digital circuits using Verilog and tested on FPGA boards.",
      },
      {
        id: "ee210",
        code: "EE210",
        title: "Microelectronics",
        semester: "Fall 2022",
        grade: "A",
        skills: ["Semiconductor Physics", "MOSFETs", "Analog Circuits"],
        description:
          "Introduction to semiconductor devices and analog circuit design.",
        topics: [
          "Diodes and transistors",
          "MOSFET characteristics",
          "Amplifiers",
          "Small signal analysis",
        ],
        project:
          "Designed and simulated MOSFET amplifier circuits with performance evaluation.",
      },
      {
        id: "ee250",
        code: "EE250",
        title: "Control Systems Analysis",
        semester: "Spring 2023",
        grade: "A",
        skills: ["MATLAB", "Control Theory", "System Modeling"],
        description: "Course on analysis and design of control systems.",
        topics: [
          "Feedback control",
          "Stability analysis",
          "Root locus",
          "Bode plots",
          "State-space models",
        ],
        project:
          "Modeled and analyzed control systems using MATLAB, focusing on stability and response optimization.",
      },
      {
        id: "ee200",
        code: "EE200",
        title: "Signals, Systems and Networks",
        semester: "Fall 2022",
        grade: "A",
        skills: ["Signal Processing", "Fourier Analysis"],
        description:
          "Foundational course on signals, systems, and network theory.",
        topics: [
          "Time-domain analysis",
          "Convolution",
          "Fourier transforms",
          "Laplace transforms",
          "Network theorems",
        ],
        project:
          "Implemented signal transformations and network analysis using MATLAB and Python.",
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 bg-navy-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              My Courses
            </h1>
            <p className="text-xl text-gray-200 animate-fade-in">
              An overview of the key courses I've completed during my academic
              journey at IIT Kanpur.
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
                  CS
                </TabsTrigger>
                <TabsTrigger
                  value="electrical"
                  className="data-[state=active]:bg-navy-700 data-[state=active]:text-white"
                >
                  EE
                </TabsTrigger>
                <TabsTrigger
                  value="mathematics"
                  className="data-[state=active]:bg-navy-700 data-[state=active]:text-white"
                >
                  Math
                </TabsTrigger>
                <TabsTrigger
                  value="machineLearning"
                  className="data-[state=active]:bg-navy-700 data-[state=active]:text-white"
                >
                  ML
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Computer Science */}
            <TabsContent value="computerScience" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.computerScience.map((course) => (
                  <Card
                    key={course.id}
                    className="overflow-hidden hover:shadow-md transition-all"
                  >
                    <CardContent className="p-0">
                      <div className="bg-navy-700 text-white p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold">
                              {course.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-navy-600 mb-4">
                          {course.description}
                        </p>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="topics">
                            <AccordionTrigger className="text-navy-800">
                              Key Topics
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul className="list-disc pl-5 space-y-1 text-navy-600">
                                {course.topics.map((topic, index) => (
                                  <li key={index}>{topic}</li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="project">
                            <AccordionTrigger className="text-navy-800">
                              Course Project
                            </AccordionTrigger>
                            <AccordionContent>
                              <p className="text-navy-600">{course.project}</p>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {course.skills.map((skill) => (
                            <span
                              key={skill}
                              className="bg-navy-100 text-navy-700 px-2 py-1 rounded-md text-sm"
                            >
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

            {/* Electrical Engineering */}
            <TabsContent value="electrical" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.electrical.map((course) => (
                  <Card
                    key={course.id}
                    className="overflow-hidden hover:shadow-md transition-all"
                  >
                    <CardContent className="p-0">
                      <div className="bg-teal-700 text-white p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold">
                              {course.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-navy-600 mb-4">
                          {course.description}
                        </p>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="topics">
                            <AccordionTrigger className="text-navy-800">
                              Key Topics
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul className="list-disc pl-5 space-y-1 text-navy-600">
                                {course.topics.map((topic, index) => (
                                  <li key={index}>{topic}</li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="project">
                            <AccordionTrigger className="text-navy-800">
                              Course Project
                            </AccordionTrigger>
                            <AccordionContent>
                              <p className="text-navy-600">{course.project}</p>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {course.skills.map((skill) => (
                            <span
                              key={skill}
                              className="bg-teal-100 text-teal-700 px-2 py-1 rounded-md text-sm"
                            >
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

            {/* Mathematics */}
            <TabsContent value="mathematics" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.mathematics.map((course) => (
                  <Card
                    key={course.id}
                    className="overflow-hidden hover:shadow-md transition-all"
                  >
                    <CardContent className="p-0">
                      <div className="bg-purple-700 text-white p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold">
                              {course.title}
                            </h3>
                            <p className="text-purple-100">{course.semester}</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-navy-600 mb-4">
                          {course.description}
                        </p>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="topics">
                            <AccordionTrigger className="text-navy-800">
                              Key Topics
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul className="list-disc pl-5 space-y-1 text-navy-600">
                                {course.topics.map((topic, index) => (
                                  <li key={index}>{topic}</li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {course.skills.map((skill) => (
                            <span
                              key={skill}
                              className="bg-purple-100 text-purple-700 px-2 py-1 rounded-md text-sm"
                            >
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

            {/* Machine Learning */}
            <TabsContent value="machineLearning" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.machineLearning.map((course) => (
                  <Card
                    key={course.id}
                    className="overflow-hidden hover:shadow-md transition-all"
                  >
                    <CardContent className="p-0">
                      <div className="bg-amber-700 text-white p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold">
                              {course.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-navy-600 mb-4">
                          {course.description}
                        </p>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="topics">
                            <AccordionTrigger className="text-navy-800">
                              Key Topics
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul className="list-disc pl-5 space-y-1 text-navy-600">
                                {course.topics.map((topic, index) => (
                                  <li key={index}>{topic}</li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="project">
                            <AccordionTrigger className="text-navy-800">
                              Course Project
                            </AccordionTrigger>
                            <AccordionContent>
                              <p className="text-navy-600">{course.project}</p>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {course.skills.map((skill) => (
                            <span
                              key={skill}
                              className="bg-amber-100 text-amber-700 px-2 py-1 rounded-md text-sm"
                            >
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
          <h2 className="text-3xl font-bold mb-10 text-center text-navy-800">
            Skills Acquired
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-bold mb-4 text-navy-800 border-b pb-2">
                  Programming Languages
                </h3>
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
                <h3 className="text-xl font-bold mb-4 text-navy-800 border-b pb-2">
                  Computer Science
                </h3>
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
                <h3 className="text-xl font-bold mb-4 text-navy-800 border-b pb-2">
                  Electrical Engineering
                </h3>
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
