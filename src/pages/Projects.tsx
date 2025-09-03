import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github } from "lucide-react";
import ProjectModal from "@/components/ProjectModal";

// Import project images
import computerNetworksImg from "@/assets/project-computer-networks.jpg";
import driverSynthesisImg from "@/assets/project-driver-synthesis.jpg";
import multimodalMLImg from "@/assets/project-multimodal-ml.jpg";
import bankruptcyPredictionImg from "@/assets/project-bankruptcy-prediction.jpg";
import algorithmsImg from "@/assets/project-algorithms.jpg";
import computerVisionImg from "@/assets/project-computer-vision.jpg";
import nlpImg from "@/assets/project-nlp.jpg";
import iotCrashDetectionImg from "@/assets/project-iot-crash-detection.jpg";
import hospitalManagementImg from "@/assets/project-hospital-management.jpg";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Computer Networks",
      description:
        "Built a multi-threaded TCP chat server, DNS resolvers, and raw-socket TCP client handling SYN, SYN-ACK, and ACK packets for protocol-level understanding.",
      image: computerNetworksImg,
      tags: ["C++", "Sockets", "DNS", "TCP/IP"],
      github: "https://github.com/Jikhlin23/CS425-ComputerNetworks",
      demo: "https://demo-link.com",
      category: "Systems",
      expandedInfo: `
- Built a multi-threaded TCP chat server in C++ with user authentication, /broadcast, /msg; used mutexes and sockets for concurrency  
- Implemented iterative/recursive DNS resolvers in dnspython, performing root → TLD → authoritative queries and domain-to-IP mapping  
- Developed a raw-socket TCP client in C++ to perform the three-way handshake by handling SYN, SYN-ACK, and ACK packets  
    `,
    },
    {
      id: 2,
      title: "Driver Synthesis & I–V Data Analysis",
      description:
        "Automated instrument control and I–V characterization pipelines using PyVISA, QCoDeS, and PyQt dashboards for real-time lab experiments.",
      image: driverSynthesisImg,
      tags: ["Python", "PyVISA", "QCoDeS", "PyQt5"],
      github:
        "https://github.com/Jikhlin23/Driver-Synthesis-I-V-Data-Analysis-Spintronic-Instruments",
      demo: "https://demo-link.com",
      category: "Development",
      expandedInfo: `
- Authored modular Python drivers using PyVISA and QCoDeS for Keysight B2900 SMU, SR830 Lock-in Amplifier, and Kikusui PBZ60-1.5  
- Devised scalable 2D nested sweep pipelines with live visualization, capturing current-voltage, phase, and harmonics in real time  
- Built a PyQt5/PyQtGraph interactive dashboard for intuitive experiment control, parallel logging, live plotting, and dynamic AC/DC control  
    `,
    },
    {
      id: 3,
      title: "Multi-Modal Classification & Lifelong Learning",
      description:
        "Implemented SVMs, GRUs, ViTs, and continual learning systems for multi-modal data, achieving high accuracy while mitigating catastrophic forgetting.",
      image: multimodalMLImg,
      tags: ["Python", "ML", "GRU", "ViT", "UDA"],
      github: "https://github.com/Jikhlin23/CS_771-Intro-to-ML",
      demo: "https://demo-link.com",
      category: "Machine Learning",
      expandedInfo: `
- Achieved 98.77% accuracy on a multi-modal classification task with an SVM on a unified feature matrix from categorical, deep, and sequential data  
- Engineered a dual-layer GRU for sequential classification, attaining 84.46% accuracy with 40% fewer parameters than CNN+LSTM  
- Built a ViT-based continual learning system to mitigate catastrophic forgetting across 20 sequential CIFAR-10 tasks  
- Applied prototype-based learning, memory buffers, and pseudo-labeling, maintaining over 90% accuracy on previous tasks  
- Achieved 95.8% accuracy on ImageCLEF-DA using a novel Lifelong UDA algorithm with GMM + experience replay  
    `,
    },
    {
      id: 4,
      title: "Bankruptcy Prediction using ML",
      description:
        "Designed imbalanced classification models achieving 0.94 AUC and 69.7% recall using decision trees, random forests, and sampling techniques.",
      image: bankruptcyPredictionImg,
      tags: ["Python", "ML", "SMOTE", "Decision Trees"],
      github:
        "https://github.com/Jikhlin23/EE708-Introduction-to-data-science-and-machine-intelligence",
      demo: "https://demo-link.com",
      category: "Machine Learning",
      expandedInfo: `
- Designed a bankruptcy prediction model on a severely imbalanced dataset (3:97 ratio), achieving 0.94 AUC, 69.7% recall, and 0.82 G-mean  
- Evaluated data sampling techniques including SMOTE, Random/Cluster-based Oversampling, Undersampling, and hybrid methods  
- Implemented Decision Tree and Random Forest classifiers from scratch as prediction models  
    `,
    },
    {
      id: 5,
      title: "Advanced Algorithms",
      description:
        "Implemented KMP, Ford–Fulkerson, Edmonds–Karp, KD-Trees, and DSU along with shortest path and spanning tree algorithms.",
      image: algorithmsImg,
      tags: ["C++", "Algorithms", "DSU", "Graph Theory"],
      github: "https://github.com",
      demo: "https://demo-link.com",
      category: "Development",
      expandedInfo: `
- Implemented KMP, Ford–Fulkerson, Edmonds–Karp, hashing, and KD-Trees  
- Executed graph algorithms such as Dijkstra’s, Bellman–Ford, Prim’s, and Disjoint Set Union (DSU) applications  
    `,
    },
    {
      id: 6,
      title: "Computer Vision & Drones 101",
      description:
        "Built image calibration, chessboard detection, hybridization, contour mapping, and Hough transform pipelines for CV applications.",
      image: computerVisionImg,
      tags: ["OpenCV", "Python", "Computer Vision"],
      github: "https://github.com",
      demo: "https://demo-link.com",
      category: "Development",
      expandedInfo: `
- Engineered a camera calibration module for spatial mapping using binary thresholding and contour detection  
- Designed algorithms for image hybridization, chessboard detection on live feed, and polygon approximation  
- Applied Sobel edge detection, image thresholding, contour mapping, and Hough transform  
    `,
    },
    {
      id: 7,
      title: "Advanced NLP for Text Analysis",
      description:
        "Developed n-gram models, TF-IDF pipelines, KNN classifiers, semantic embeddings, and custom subword tokenizers from scratch.",
      image: nlpImg,
      tags: ["Python", "NLP", "Embeddings", "Tokenization"],
      github: "https://github.com",
      demo: "https://demo-link.com",
      category: "Machine Learning",
      expandedInfo: `
- Built n-gram language models from scratch on 27K Wikipedia articles  
- Developed a TF-IDF pipeline and KNN classifier with KD-Tree/Ball Tree optimization for 10K articles  
- Achieved 87% accuracy and 84% F1-score via distance metric tuning  
- Generated semantic embeddings using co-occurrence + SVD  
- Implemented subword tokenization (BPE, Unigram, WordPiece, SentencePiece) from scratch  
    `,
    },
    {
      id: 8,
      title: "IoT Car Crash Detection & Alert System",
      description:
        "Built an ESP32-based IoT crash detection system using accelerometer and GPS sensors with real-time Telegram emergency alerts.",
      image: iotCrashDetectionImg,
      tags: ["Embedded C++", "IoT", "ESP32", "Sensors"],
      github: "https://github.com/Jikhlin23/EE381",
      demo: "https://demo-link.com",
      category: "Development",
      expandedInfo: `
- Engineered an IoT-based crash detection and alert system using ESP32 in Arduino C++  
- Processed accelerometer (MPU6050) and GPS (NEO-6M) data with offset subtraction for normal g-force and 3g anomaly detection  
- Integrated I²C/UART for sensors and Wi-Fi/HTTP APIs for real-time alerts on Telegram  
    `,
    },
    {
      id: 9,
      title: "Hospital Management System",
      description:
        "Designed a 3NF-normalized hospital database with 16+ entities, optimized SQL queries, and real-time operational workflows.",
      image: hospitalManagementImg,
      tags: ["MySQL", "SQL", "Database Design"],
      github: "https://github.com/Jikhlin23/CS315",
      demo: "https://demo-link.com",
      category: "Systems",
      expandedInfo: `
- Designed and implemented a hospital management database with 3NF schema, 16+ entities, and 21 foreign key constraints  
- Optimized MySQL with complex queries (joins, aggregations, pivoting) for billing, scheduling, and efficiency  
- Refined ER model, implemented DDL/DML with ACID compliance, and scaled with indexing + audit tracking  
    `,
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  const handleProjectClick = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 bg-navy-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              My Projects
            </h1>
            <p className="text-xl text-gray-200 animate-fade-in">
              A showcase of my technical projects, ranging from web applications
              to data science.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs
            defaultValue="all"
            value={activeTab}
            onValueChange={setActiveTab}
            className="mb-12"
          >
            <div className="flex justify-center">
              <TabsList className="bg-gray-100">
                <TabsTrigger
                  value="all"
                  className="data-[state=active]:bg-navy-700 data-[state=active]:text-white"
                >
                  All Projects
                </TabsTrigger>
                <TabsTrigger
                  value="Machine Learning"
                  className="data-[state=active]:bg-navy-700 data-[state=active]:text-white"
                >
                  ML
                </TabsTrigger>
                <TabsTrigger
                  value="Systems"
                  className="data-[state=active]:bg-navy-700 data-[state=active]:text-white"
                >
                  Systems
                </TabsTrigger>
                <TabsTrigger
                  value="Development"
                  className="data-[state=active]:bg-navy-700 data-[state=active]:text-white"
                >
                  Devops
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value={activeTab} className="mt-8">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredProjects.map((project) => (
                    <Card
                      key={project.id}
                      className="overflow-hidden hover:scale-[1.02] hover:shadow-lg transition-all duration-300 cursor-pointer group"
                      onClick={() => handleProjectClick(project)}
                    >
                      {/* Image Section */}
                      <div className="h-48 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>

                      {/* Content Section */}
                      <div className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-bold text-navy-800 flex-1 mr-2 line-clamp-2">
                            {project.title}
                          </h3>
                          <Button
                            variant="outline"
                            size="sm"
                            className="p-2 shrink-0"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.github, "_blank");
                            }}
                          >
                            <Github className="h-4 w-4" />
                          </Button>
                        </div>

                        <p className="text-navy-600 mb-3 text-sm line-clamp-3">
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1">
                          {project.tags.slice(0, 4).map((tag) => (
                            <span
                              key={tag}
                              className="bg-navy-100 text-navy-700 px-2 py-1 rounded-full text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 4 && (
                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                              +{project.tags.length - 4}
                            </span>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </div>
  );
};

export default Projects;
