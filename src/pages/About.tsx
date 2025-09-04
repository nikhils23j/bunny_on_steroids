import Navigation from "@/components/Navigation";
import { ArrowRight, ChevronDown } from "lucide-react";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { Book, Music, GamepadIcon } from "lucide-react";

const About = () => {
  const languagesAndTools = [
    "C",
    "C++",
    "Python",
    "SQL",
    "MongoDB",
    "Verilog",
    "Arduino",
    "React",
    "GitHub",
    "Bash",
    "Firebase",
    "Docker",
    "LaTeX",
  ];

  const utilitiesAndFrameworks = [
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Scikit-learn",
    "TensorFlow",
    "Keras",
    "OpenCV",
    "Scapy",
  ];

  const education = [
    {
      degree: "B.Tech in Electrical Engineering",
      institution: "Indian Institute of Technology, Kanpur",
      period: "2022 - Present",
      description:
        "Minor in Machine Learning (CSE), Systems(CSE), and Industrial Management & Engineering(DoMS). Current GPA: 8.1/10.0",
    },
    {
      degree: "CBSE Class XII",
      institution: "M.B. International School, Kota",
      period: "2022",
      description:
        "Graduated with 95.4% marks, excelling in science and mathematics.",
    },
    {
      degree: "CBSE Class X",
      institution: "M.B. International School, Kota",
      period: "2020",
      description:
        "Graduated with 96.2% marks, demonstrating strong academic foundation.",
    },
  ];

  const achievements = [
    {
      name: "JEE Advanced 2022",
      issuer: "Indian Institute of Technology",
      description: "Secured All India Rank 1240 among 1.2 lakh candidates.",
    },
    {
      name: "JEE Mains 2022",
      issuer: "National Testing Agency",
      description: "Secured All India Rank 363 among 1.5 million candidates.",
    },
    {
      name: "KVPY SX 2022",
      issuer: "Department of Science and Technology, Govt. of India",
      description:
        "Secured All India Rank 248 in Kishore Vaigyanik Protsahan Yojana.",
    },
    {
      name: "KVPY SA 2021",
      issuer: "Department of Science and Technology, Govt. of India",
      description:
        "Secured All India Rank 41 in Kishore Vaigyanik Protsahan Yojana.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in text-foreground">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in">
              Sarcastically funny sometimes (work culture safe)
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
                src="lovable-uploads/l3.jpeg"
                alt="Student portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6 text-navy-800">
                About Me
              </h2>
              <p className="text-lg text-navy-700 mb-4">
                Kudos for coming to this page. You're taking the first step in
                thinking about hiring me.
              </p>
              <p className="text-lg text-navy-700 mb-4">
                Well, if you really want to hire me, here is a little bit about
                me -{" "}
                <a
                  href=" https://drive.google.com/file/d/1beYeqm0cgBAxc1EkFuaVrzK8VhFbngCh/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {" "}
                  resume{" "}
                </a>
                . I bet if you pause here and take a look at it, and then resume
                judging me, you'd like me more then.
              </p>
              <p className="text-lg text-navy-700 mb-4"></p>
              <p className="text-lg text-navy-700 mb-4">
                I'll get hired in roles if they are in SDE or finance. But if
                you are Richie Rich, I'd get hired in any role you want me to.
              </p>
              <p className="text-lg text-navy-700">
                Beyond academics, I document my experiences, insights, and tips
                on my{" "}
                <a
                  href="https://www.quora.com/profile/Nikhil-Jain-749"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Quora profile
                </a>
                , sharing stories from my academic adventures at IIT Kanpur to
                my professional endeavors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Journey Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Left aligned heading */}
          <h2 className="text-3xl font-bold mb-10 text-left text-navy-800">
            My Journey
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text on the left */}
            <div className="animate-fade-in leading-relaxed">
              <p className="text-lg text-navy-700 mb-6">
                The years in college, I absolutely loved taking challenges—
                particularly if that challenge was doing CSE courses. What could
                I do, I wanted to get HIRED. Then I interned at{" "}
                <b>Samsung R&D Institute India - Bangalore</b> as a Software
                Developer Intern, an absolute cesspool of geniuses. I'd work on
                something cool and then walk away to see the city lights at
                night. Well, that was fun.
              </p>
              <p className="text-lg text-navy-700">
                From mastering complex algorithms to exploring the nuances of
                embedded systems, ... I'd always take a sip of coffee before
                resuming again. And repeat. And repeat again.
              </p>
              <p>
                <Button
                  className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20 hover:opacity-90 ripple-effect"
                  asChild
                >
                  <Link to="/Projects">
                    My Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </p>
            </div>

            {/* Image on the right */}
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl animate-scale-in transition-transform duration-300 hover:scale-105">
              <img
                src="lovable-uploads/22.jpg"
                alt="Journey illustration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Google Developer Group Banner */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="relative w-full rounded-lg overflow-hidden shadow-xl">
            {/* Desktop Banner */}
            <img
              src="/lovable-uploads/35d55906-9081-4470-accc-851548194455.png"
              alt="Google Developer Group - Indian Institute of Technology Kanpur"
              className="hidden md:block w-full h-auto object-cover"
            />
            {/* Mobile Banner */}
            <img
              src="/lovable-uploads/3b949e08-8cf5-4b18-a78c-55a480a1dea0.png"
              alt="Google Developer Group - Indian Institute of Technology Kanpur"
              className="block md:hidden w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-navy-800">
            Technical Skills
          </h2>

          {/* Languages & Tools */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4 text-navy-700 text-center">
              Languages & Tools
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {languagesAndTools.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-navy-100 text-navy-700 font-medium shadow hover:bg-navy-200 transition-all"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Utilities & Frameworks */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-navy-700 text-center">
              Utilities & Frameworks
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {utilitiesAndFrameworks.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-navy-100 text-navy-700 font-medium shadow hover:bg-navy-200 transition-all"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-navy-800">
            Personal Interests
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-navy-600 p-6 rounded-lg hover:shadow-md transition-all hover:scale-105 hover:border-3 text-white">
                <div className="flex items-center mb-3">
                  <Book className="w-6 h-6 text-white mr-2" />
                  <h3 className="text-xl font-bold text-white">Art</h3>
                </div>
                <p className="text-white/90">
                  I sketched faces and scenes a few long years back. I'm ready
                  to give it another shot, someday.
                </p>
              </div>
              <div className="bg-navy-600 p-6 rounded-lg hover:shadow-md transition-all hover:scale-105 hover:border-3 text-white">
                <div className="flex items-center mb-3">
                  <Music className="w-6 h-6 text-white mr-2" />
                  <h3 className="text-xl font-bold text-white">Singing</h3>
                </div>
                <p className="text-white/90">
                  Music is my escape, for sure. I'll listen and sing for hours.
                  English and Hingi, New and retro.
                </p>
              </div>
              <div className="bg-navy-600 p-6 rounded-lg hover:shadow-md transition-all hover:scale-105 hover:border-3 text-white">
                <div className="flex items-center mb-3">
                  <Music className="w-6 h-6 text-white mr-2" />
                  <h3 className="text-xl font-bold text-white">Making Music</h3>
                </div>
                <p className="text-white/90">
                  What i can say , people make friends, I stay with GarageBand
                  at home.
                </p>
              </div>
              <div className="bg-navy-600 p-6 rounded-lg hover:shadow-md transition-all hover:scale-105 hover:border-3 text-white">
                <div className="flex items-center mb-3">
                  <GamepadIcon className="w-6 h-6 text-white mr-2" />
                  <h3 className="text-xl font-bold text-white">
                    Playing Chess
                  </h3>
                </div>
                <p className="text-white/90">
                  Yeah Thats a game , none can't beat me, until you are 1750 or
                  higher at rating. :/
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
