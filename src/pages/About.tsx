import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import { Book, Music, GamepadIcon } from 'lucide-react';

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
      description: 'Minor in Machine Learning, Systems, and Algorithms in the CSE department. Current GPA: 8.0/10.0',
    },
    {
      degree: 'CBSE Class XII',
      institution: 'M.B. International School, Kota',
      period: '2022',
      description: 'Graduated with 95.4% marks, excelling in science and mathematics.',
    },
    {
      degree: 'CBSE Class X',
      institution: 'M.B. International School, Kota',
      period: '2020',
      description: 'Graduated with 96.2% marks, demonstrating strong academic foundation.',
    },
  ];

  const achievements = [
    {
      name: 'JEE Advanced 2022',
      issuer: 'Indian Institute of Technology',
      description: 'Secured All India Rank 1240 among 1.2 lakh candidates.',
    },
    {
      name: 'JEE Mains 2022',
      issuer: 'National Testing Agency',
      description: 'Secured All India Rank 363 among 1.5 million candidates.',
    },
    {
      name: 'KVPY SX 2022',
      issuer: 'Department of Science and Technology, Govt. of India',
      description: 'Secured All India Rank 248 in Kishore Vaigyanik Protsahan Yojana.',
    },
    {
      name: 'KVPY SA 2021',
      issuer: 'Department of Science and Technology, Govt. of India',
      description: 'Secured All India Rank 41 in Kishore Vaigyanik Protsahan Yojana.',
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
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl animate-scale-in hover:scale-105 transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=600" 
                alt="Student portrait" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="animate-slide-in">
              <h2 className="text-3xl font-bold mb-6 text-navy-800">About Me</h2>
              <p className="text-lg text-navy-700 mb-4">
                I'm Nikhil Jain, a third-year Electrical Engineering undergraduate at IIT Kanpur with a CPI of 8.0/10. Passionate about technology and innovation, I'm currently interning at Samsung Research Bangalore in the networks modem domain, gaining hands-on experience in advanced communication systems.
              </p>
              <p className="text-lg text-navy-700 mb-4">
                I'm pursuing a minor in Machine Learning, Systems, and Algorithms in the CSE department, set to complete by 2025. My academic journey is marked by consistent excellence, complemented by a love for singing, art, and chess.
              </p>
              <p className="text-lg text-navy-700">
                Beyond academics, I document my experiences, insights, and tips on my <a href="https://www.quora.com/profile/Nikhil-Jain-749" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Quora profile</a>, sharing stories from my academic adventures at IIT Kanpur to my professional endeavors.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* My Journey Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-navy-800">My Journey</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-3">
              <p className="text-lg text-navy-700 mb-4">
                My journey as an engineer, learner, and creator is a tapestry of challenges, growth, and curiosity. I document my experiences, insights, and tips on my <a href="https://www.quora.com/profile/Nikhil-Jain-749" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Quora profile</a>, where I share stories from my academic adventures at IIT Kanpur to my professional stint at Samsung Research Bangalore.
              </p>
              <p className="text-lg text-navy-700 mb-4">
                From mastering complex algorithms to exploring the nuances of embedded systems, every step has shaped my perspective. Whether it's debugging code at midnight or hitting high notes in a song, I thrive on blending discipline with creativity, always chasing the next big idea.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-navy-800">Technical Skills</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill) => (
                <div key={skill.name} className="mb-4 hover:scale-105 transition-all duration-300">
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-navy-800">Education</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-md transition-all border-l-4 border-l-navy-700 hover:scale-105 hover:border-3">
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
      
      {/* Achievements Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-navy-800">Scholastic Achievements</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="hover:shadow-md hover:bg-white transition-all hover:scale-105 hover:border-3">
                  <CardContent className="p-6">
                    <div className="mb-4 text-navy-700">
                      <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-navy-800 text-center">{achievement.name}</h3>
                    <p className="text-navy-600 mb-2 text-center">{achievement.issuer}</p>
                    <p className="text-sm text-navy-500 text-center">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Interests Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-navy-800">Personal Interests</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-navy-600 p-6 rounded-lg hover:shadow-md transition-all hover:scale-105 hover:border-3 text-white">
                <div className="flex items-center mb-3">
                  <Book className="w-6 h-6 text-white mr-2" />
                  <h3 className="text-xl font-bold text-white">Art</h3>
                </div>
                <p className="text-white/90">
                  I love expressing myself through sketches and paintings, finding inspiration in everyday moments.
                </p>
              </div>
              <div className="bg-navy-600 p-6 rounded-lg hover:shadow-md transition-all hover:scale-105 hover:border-3 text-white">
                <div className="flex items-center mb-3">
                  <Music className="w-6 h-6 text-white mr-2" />
                  <h3 className="text-xl font-bold text-white">Singing</h3>
                </div>
                <p className="text-white/90">
                  Music is my escape, and I enjoy performing soulful melodies that resonate with my emotions.
                </p>
              </div>
              <div className="bg-navy-600 p-6 rounded-lg hover:shadow-md transition-all hover:scale-105 hover:border-3 text-white">
                <div className="flex items-center mb-3">
                  <Music className="w-6 h-6 text-white mr-2" />
                  <h3 className="text-xl font-bold text-white">Making Music</h3>
                </div>
                <p className="text-white/90">
                  Experimenting with beats and tunes, I'm always crafting new sounds to share my stories.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg hover:shadow-md transition-all hover:scale-105 hover:border-3">
                <div className="flex items-center mb-3">
                  <GamepadIcon className="w-6 h-6 text-gray-800 mr-2" />
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
