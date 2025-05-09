
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import { Book, Music, Chess, CodeIcon } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Python', level: 90 },
    { name: 'C++', level: 85 },
    { name: 'Data Structures & Algorithms', level: 85 },
    { name: 'Machine Learning', level: 80 },
    { name: 'Embedded Systems', level: 75 },
    { name: 'Communication Systems', level: 80 },
    { name: 'SQL', level: 70 },
    { name: 'MATLAB', level: 75 },
  ];

  const education = [
    {
      degree: 'B.Tech in Electrical Engineering',
      institution: 'Indian Institute of Technology, Kanpur',
      period: '2022 - Present',
      description: 'Minor in Machine Learning, Systems, and Algorithms in the CSE department. Current GPA: 9.2/10.0',
    },
    {
      degree: 'High School',
      institution: 'Delhi Public School',
      period: '2020 - 2022',
      description: 'Graduated with distinction. Ranked among top students in science and mathematics.',
    },
  ];

  const certifications = [
    {
      name: 'Machine Learning Specialization',
      issuer: 'Coursera (Stanford University)',
      date: 'March 2024',
    },
    {
      name: 'Data Structures and Algorithms',
      issuer: 'CodeChef',
      date: 'August 2023',
    },
    {
      name: 'Embedded Systems Design',
      issuer: 'Samsung PRISM Program',
      date: 'January 2024',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-16 bg-navy-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">About Me</h1>
            <p className="text-xl text-gray-200 animate-fade-in">
              Get to know more about my background, skills, and journey in technology and engineering.
            </p>
          </div>
        </div>
      </section>
      
      {/* Bio Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=600" 
                alt="Student portrait" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="animate-slide-in">
              <h2 className="text-3xl font-bold mb-6 text-navy-800">My Journey</h2>
              <p className="text-lg text-navy-700 mb-4">
                My journey as an engineer, learner, and creator is a tapestry of challenges, growth, and curiosity. I document my experiences, insights, and tips on my <a href="https://www.quora.com/profile/Nikhil-Jain-749" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Quora profile</a>, where I share stories from my academic adventures at IIT Kanpur to my professional stint at Samsung Research Bangalore.
              </p>
              <p className="text-lg text-navy-700 mb-4">
                From mastering complex algorithms to exploring the nuances of embedded systems, every step has shaped my perspective. Whether it's debugging code at midnight or hitting high notes in a song, I thrive on blending discipline with creativity, always chasing the next big idea.
              </p>
              <p className="text-lg text-navy-700">
                I'm a third-year Electrical Engineering student at IIT Kanpur, passionate about technology and innovation. Currently, I'm interning at Samsung Research Bangalore in the networks modem domain, where I'm gaining hands-on experience in cutting-edge communication systems.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-navy-800">Technical Skills</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill) => (
                <div key={skill.name} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-navy-700">{skill.name}</span>
                    <span className="text-navy-600">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-navy-800">Education</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-md transition-all border-l-4 border-l-navy-700">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start flex-wrap">
                      <div>
                        <h3 className="text-xl font-bold text-navy-800">{edu.degree}</h3>
                        <p className="text-navy-600">{edu.institution}</p>
                      </div>
                      <span className="bg-navy-100 text-navy-700 px-3 py-1 rounded-full text-sm">
                        {edu.period}
                      </span>
                    </div>
                    <p className="mt-4 text-gray-600">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Certifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-navy-800">Certifications</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover:shadow-md hover:bg-white transition-all hover-scale">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 text-navy-700">
                      <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397a1 1 0 011.354-.46l.292.12v-.58a1 1 0 112 0v.58l.292-.12a1 1 0 01.837 1.814l-1.248.534a1 1 0 01-.787 0l-1.248-.534a1 1 0 01-.46-1.354l.29-.35z"></path>
                        <path d="M9.3 16.095a1 1 0 01-.3-.095l-8-3.5c-.552-.24-.552-1.01 0-1.25L9.3 7.75c.183.081.38.081.6 0l8.4-3.5c.552-.24.552-1.01 0-1.25l-8-3.5a1 1 0 00-.6 0l-8 3.5c-.552.24-.552 1.01 0 1.25l8 3.5a1 1 0 00.6 0l3.7-1.533v1.25a1 1 0 01-.3.875l-4 3.5z"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-navy-800">{cert.name}</h3>
                    <p className="text-navy-600 mb-2">{cert.issuer}</p>
                    <p className="text-sm text-navy-500">{cert.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Interests Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-navy-800">Personal Interests</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-teal-50 p-6 rounded-lg hover:shadow-md transition-all">
                <div className="flex items-center mb-3">
                  <Book className="w-6 h-6 text-teal-800 mr-2" />
                  <h3 className="text-xl font-bold text-teal-800">Art</h3>
                </div>
                <p className="text-navy-700">
                  I love expressing myself through sketches and paintings, finding inspiration in everyday moments.
                </p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg hover:shadow-md transition-all">
                <div className="flex items-center mb-3">
                  <Music className="w-6 h-6 text-amber-800 mr-2" />
                  <h3 className="text-xl font-bold text-amber-800">Singing</h3>
                </div>
                <p className="text-navy-700">
                  Music is my escape, and I enjoy performing soulful melodies that resonate with my emotions.
                </p>
              </div>
              <div className="bg-navy-50 p-6 rounded-lg hover:shadow-md transition-all">
                <div className="flex items-center mb-3">
                  <Music className="w-6 h-6 text-navy-800 mr-2" />
                  <h3 className="text-xl font-bold text-navy-800">Making Music</h3>
                </div>
                <p className="text-navy-700">
                  Experimenting with beats and tunes, I'm always crafting new sounds to share my stories.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg hover:shadow-md transition-all">
                <div className="flex items-center mb-3">
                  <Chess className="w-6 h-6 text-gray-800 mr-2" />
                  <h3 className="text-xl font-bold text-gray-800">Playing Chess</h3>
                </div>
                <p className="text-navy-700">
                  A strategic thinker on the board, I relish the thrill of outsmarting opponents in every match.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
