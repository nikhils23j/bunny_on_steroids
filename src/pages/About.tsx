
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const About = () => {
  const skills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Python', level: 85 },
    { name: 'Java', level: 70 },
    { name: 'SQL', level: 75 },
    { name: 'Git', level: 80 },
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University Name',
      period: '2021 - Present',
      description: 'Focusing on web development, machine learning, and database systems. Current GPA: 3.8/4.0',
    },
    {
      degree: 'High School Diploma',
      institution: 'High School Name',
      period: '2017 - 2021',
      description: 'Graduated with honors. Member of the Computer Science Club and Math Team.',
    },
  ];

  const certifications = [
    {
      name: 'Web Development Bootcamp',
      issuer: 'Udemy',
      date: 'March 2022',
    },
    {
      name: 'Python for Data Science and Machine Learning',
      issuer: 'Coursera',
      date: 'August 2022',
    },
    {
      name: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'January 2023',
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
              Get to know more about my background, skills, and journey in the world of computer science.
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
                I'm a passionate Computer Science student currently in my junior year. My journey in technology began when I was 14, 
                building simple websites and modifying video games. This early fascination evolved into a serious academic pursuit.
              </p>
              <p className="text-lg text-navy-700 mb-4">
                Today, I'm focused on web development, data science, and machine learning. I enjoy solving complex problems and building 
                applications that make a difference in people's lives.
              </p>
              <p className="text-lg text-navy-700">
                Outside of academics, I'm an active member of our university's Computer Science Club, where I collaborate with peers 
                on exciting projects and help organize workshops for junior students.
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
                <h3 className="text-xl font-bold mb-3 text-teal-800">Technology</h3>
                <p className="text-navy-700">
                  I'm passionate about emerging technologies like blockchain, artificial intelligence, and virtual reality. 
                  I regularly attend tech meetups and follow the latest developments in these fields.
                </p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg hover:shadow-md transition-all">
                <h3 className="text-xl font-bold mb-3 text-amber-800">Outdoor Activities</h3>
                <p className="text-navy-700">
                  I enjoy hiking and photography. Exploring nature helps me clear my mind and find inspiration for creative 
                  problem-solving approaches in my technical work.
                </p>
              </div>
              <div className="bg-navy-50 p-6 rounded-lg hover:shadow-md transition-all">
                <h3 className="text-xl font-bold mb-3 text-navy-800">Reading</h3>
                <p className="text-navy-700">
                  I'm an avid reader of both technical books and science fiction. My favorite authors include Isaac Asimov 
                  and Neal Stephenson, whose works blend technology with compelling narratives.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg hover:shadow-md transition-all">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Music</h3>
                <p className="text-navy-700">
                  I play guitar in my free time and occasionally perform at campus events. Music offers a creative outlet 
                  that complements my technical pursuits.
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
