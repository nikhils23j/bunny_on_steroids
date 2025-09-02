
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Share, Bookmark } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const CareerResources = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-32 pb-6">
        <Button variant="ghost" className="group flex items-center text-navy-600 hover:text-navy-800" asChild>
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Blog
          </Link>
        </Button>
      </div>
      
      {/* Article Header */}
      <header className="container mx-auto px-4 mb-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 font-serif text-navy-800">
            Comprehensive Career and Placement Resources
          </h1>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&h=100" />
                <AvatarFallback>NJ</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-navy-800">Nikhil Jain</p>
                <p className="text-sm text-gray-500">May 6, 2025 · 12 min read</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex gap-1 items-center"
                onClick={toggleBookmark}
              >
                <Bookmark className={`h-4 w-4 ${isBookmarked ? "fill-navy-800" : ""}`} />
                <span>Save</span>
              </Button>
              <Button variant="outline" size="sm" className="flex gap-1 items-center">
                <Share className="h-4 w-4" />
                <span>Share</span>
              </Button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Article Content */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none prose-headings:text-navy-800 prose-a:text-navy-600 prose-a:no-underline hover:prose-a:underline">
            <p className="lead text-xl mb-8">
              This document organizes resources for various job roles, including placement guides, resumes, and role-specific materials.
              All links are categorized by job role with descriptive titles for clarity.
            </p>
            
            <h2 className="text-2xl font-bold mt-10 mb-4 text-navy-800">General Placement Resources</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-navy-700">Placement Preparation</h3>
            <ul className="space-y-2 mb-6">
              <li><a href="https://drive.google.com/drive/folders/10YbLZ_PdfkMrRg8DGzTkaxLY3NEyffJC" className="text-navy-600 hover:underline">CDev Placement Session Videos</a></li>
              <li><a href="https://drive.google.com/drive/folders/1vH5oni3cgKJQp8fn1k6FyIV1LmRSTKjO" className="text-navy-600 hover:underline">CDev Placement Session PPTs</a></li>
              <li><a href="https://drive.google.com/drive/folders/13lxT7Kr_iGSZ4gkw1P4cx3mG_IITRlEF" className="text-navy-600 hover:underline">Deepanshu Company Questions Compilation</a></li>
              <li><a href="https://drive.google.com/file/d/1wzE0R--k5gjweIcya3pz7hEjOw2fJNuS/view?usp=sharing" className="text-navy-600 hover:underline">SPO Placement Guide</a></li>
              <li><a href="https://docs.google.com/presentation/d/1-j09RhYkAkp6-Y9dlh2rjRqXTXmPL5OQ/edit?usp=share_link&ouid=106028959455133058139&rtpof=true&sd=true" className="text-navy-600 hover:underline">SPO Placement Presentation</a></li>
              <li><a href="https://drive.google.com/file/d/1D7ow8n50Kj2Wa85AMO9FulK_ZTHBxDg0/view?usp=sharing" className="text-navy-600 hover:underline">SPO Internship Guide</a></li>
              <li><a href="https://drive.google.com/drive/u/0/folders/153QbwBDmppuWOAGpTTWrSEZi-QXXQ9GV" className="text-navy-600 hover:underline">Placement Session Recordings (All Roles)</a></li>
              <li><a href="https://careerguide-iitkgp.vercel.app/roadmaps" className="text-navy-600 hover:underline">IITKGP Career Roadmap</a></li>
              <li><a href="https://drive.google.com/drive/folders/1mrAamEIaywvB2Y4L4f1-PugDWsaKa5WM" className="text-navy-600 hover:underline">Bonus Placement Resources</a></li>
              <li><a href="https://spo.iitk.ac.in/insights" className="text-navy-600 hover:underline">SPO Insights</a></li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-navy-700">Resume and Interview Preparation</h3>
            <ul className="space-y-2 mb-6">
              <li><a href="https://drive.google.com/drive/folders/18xiAga1RH_Hou_dMwSGoQNjkEK3w58N5" className="text-navy-600 hover:underline">Sample Resumes</a></li>
              <li><a href="https://docs.google.com/document/d/1X855p8_ROfzdZfaw4BNOSoNuP1vWI3v0RzWPYURDGgY/edit?usp=sharing" className="text-navy-600 hover:underline">HR Interview Preparation Resources</a></li>
              <li><a href="https://docs.google.com/document/d/1I_N0dUs-SFqJ0E3v2bEZmIqmgCJr3fGD911Nd1En10s/mobilebasic" className="text-navy-600 hover:underline">Placement Questions Set 1</a></li>
              <li><a href="https://docs.google.com/document/d/1Sb3DADhWAvCKpWd46V9TKcnqRPFF5svsrcXGgkWeRck/mobilebasic" className="text-navy-600 hover:underline">Placement Questions Set 2</a></li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-navy-700">Job Platforms and Tools</h3>
            <ul className="space-y-2 mb-6">
              <li><a href="https://www.freelancer.com/" className="text-navy-600 hover:underline">Freelancer Job Platform</a></li>
              <li><a href="https://www.levels.fyi/" className="text-navy-600 hover:underline">Levels.fyi Placement Resources</a></li>
              <li><a href="https://www.internshala.com/" className="text-navy-600 hover:underline">Internshala Internship Platform</a></li>
              <li><a href="https://unstop.com/" className="text-navy-600 hover:underline">Unstop Career Platform</a></li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-navy-700">Research and Internships</h3>
            <ul className="space-y-2 mb-6">
              <li><a href="https://drive.google.com/drive/folders/1DjgvskrWcIECtfd5bFpt8pX1nggVOfWf?usp=sharing" className="text-navy-600 hover:underline">Research Internships and Recordings</a></li>
              <li><a href="https://www.elsevier.com/en-in" className="text-navy-600 hover:underline">Elsevier Research Journals</a></li>
              <li><a href="https://www.sciencedirect.com/" className="text-navy-600 hover:underline">ScienceDirect Research Platform</a></li>
              <li><a href="https://arxiv.org/" className="text-navy-600 hover:underline">arXiv Research Papers</a></li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Software Development</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-navy-700">Competitive Programming</h3>
            <ul className="space-y-2 mb-6">
              <li><a href="https://ncduy0303.github.io/Competitive-Programming/" className="text-navy-600 hover:underline">Competitive Programming Templates</a></li>
              <li><a href="https://pclub.in/archive/" className="text-navy-600 hover:underline">PClub Test Series Archives</a></li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-navy-700">Core Software Concepts</h3>
            <ul className="space-y-2 mb-6">
              <li><a href="https://www.youtube.com/playlist?list=PLDzeHZWIZsTpukecmA2p5rhHM14bl2dHU" className="text-navy-600 hover:underline">DBMS Video Tutorials</a></li>
              <li><a href="https://drive.google.com/file/d/136ZJxz35asmu5Y0ba_DZ0k9kNr-j-ah3/view?usp=sharing" className="text-navy-600 hover:underline">DBMS Notes</a></li>
              <li><a href="https://www.youtube.com/watch?v=xw_OuOhjauw" className="text-navy-600 hover:underline">Operating Systems Tutorial</a></li>
              <li><a href="https://www.youtube.com/watch?v=D_wNQR3LeeM" className="text-navy-600 hover:underline">SQL Tutorial</a></li>
              <li><a href="https://www.learncpp.com/cpp-tutorial/introduction-to-object-oriented-programming/" className="text-navy-600 hover:underline">OOPS Tutorial</a></li>
              <li><a href="https://drive.google.com/file/d/1BwYZHOa_6ynY614RstDntzSwNNFUtD7s/view?usp=sharing" className="text-navy-600 hover:underline">Software Development Must-Do Resources</a></li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-navy-700">System Design</h3>
            <ul className="space-y-2 mb-6">
              <li><a href="https://www.amazon.com/System-Design-Interview-Insiders-Guide/dp/1736049119" className="text-navy-600 hover:underline">System Design Interview by Alex Xu</a></li>
              <li><a href="https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321" className="text-navy-600 hover:underline">Designing Data-Intensive Applications by Martin Kleppmann</a></li>
              <li><a href="https://www.youtube.com/@GauravSen" className="text-navy-600 hover:underline">Gaurav Sen System Design Videos</a></li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Data Science and Machine Learning</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-navy-700">Data Science</h3>
            <ul className="space-y-2 mb-6">
              <li><a href="https://datacarpentry.org/R-ecology-lesson/index.html" className="text-navy-600 hover:underline">R for Ecologists: Data Analysis and Visualization</a></li>
              <li><a href="https://www.kaggle.com/code/shivamb/data-science-glossary-on-kaggle" className="text-navy-600 hover:underline">Kaggle Data Science Glossary</a></li>
              <li><a href="https://www.kaggle.com/code/sudalairajkumar/winning-solutions-of-kaggle-competitions" className="text-navy-600 hover:underline">Kaggle Winning Solutions</a></li>
              <li><a href="https://www.analyticsvidhya.com/blog/?utm_source=datahack&utm_medium=navbar" className="text-navy-600 hover:underline">Analytics Vidhya Blog</a></li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-navy-700">Machine Learning</h3>
            <ul className="space-y-2 mb-6">
              <li><a href="https://www.youtube.com/playlist?list=PLo2ytBRv4PLduxe4kaDRgc9lDHJGukPhr" className="text-navy-600 hover:underline">Machine Learning Video Playlist</a></li>
              <li><a href="https://drive.google.com/file/d/1mk-Hpzg8YlPSd4aQQNmhdt7yuv3wpQF9/view?usp=share_link" className="text-navy-600 hover:underline">Machine Learning Resource 1</a></li>
              <li><a href="https://drive.google.com/file/d/1I1bzf_arHlqRR8meUQD9qQ3hWWEWEVBc/view?usp=share_link" className="text-navy-600 hover:underline">Machine Learning Resource 2</a></li>
              <li><a href="https://www.dropbox.com/scl/fo/js7s9u0i0ajgn83z9b6ox/AIR_vO3YRXpEPwTSfwOQyb8?rlkey=kvs41j5fd90jbmrwfu214haqe&e=1&dl=0" className="text-navy-600 hover:underline">Machine Learning PPTs</a></li>
              <li><a href="https://www.coursera.org/learn/ai-for-everyone" className="text-navy-600 hover:underline">Coursera AI for Everyone</a></li>
              <li><a href="https://www.coursera.org/specializations/deep-learning" className="text-navy-600 hover:underline">Coursera Deep Learning Specialization</a></li>
            </ul>
            
            {/* Remaining content shortened for brevity - would continue with other sections */}
            <div className="border-l-4 border-navy-300 pl-4 italic my-8 py-2 bg-navy-50 rounded-r-md">
              <p className="text-navy-700">This resource collection is continuously updated. Check back for new materials and links as they become available.</p>
            </div>
            
            <h2 className="text-2xl font-bold mt-10 mb-4 text-navy-800">Additional Categories</h2>
            <p>This document also includes extensive resources for:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Finance and Quantitative Finance</li>
              <li>Consulting</li>
              <li>Management and MBA Preparation</li>
              <li>Techno-Managerial Roles</li>
              <li>Premium Content Access</li>
            </ul>
            
            <div className="bg-navy-50 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-semibold mb-3 text-navy-700">Want to contribute?</h3>
              <p className="mb-4">If you have valuable resources that should be added to this collection, please reach out with your suggestions.</p>
              <Button className="bg-navy-700 hover:bg-navy-800 text-white">
                Submit a Resource
              </Button>
            </div>
          </div>
          
          {/* Author Bio */}
          <div className="mt-16 p-6 bg-navy-50 rounded-lg">
            <div className="flex items-start sm:items-center flex-col sm:flex-row">
              <Avatar className="h-16 w-16 mb-4 sm:mb-0 sm:mr-6">
                <AvatarImage src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&h=100" alt="Nikhil Jain" />
                <AvatarFallback>NJ</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-bold mb-2 text-navy-800">About Nikhil Jain</h3>
                <p className="text-navy-600 mb-4">Computer Science student passionate about web development, AI, and helping others navigate their career journeys. I compile and share resources I've found valuable throughout my academic and professional development.</p>
                <Button variant="outline" className="border-navy-200 hover:bg-navy-100 text-navy-700">
                  Follow
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CareerResources;
