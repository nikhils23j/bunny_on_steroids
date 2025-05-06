
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, BookOpen } from 'lucide-react';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const blogPosts = [
    {
      id: 1,
      title: 'My First Semester Experience',
      slug: 'first-semester-experience',
      excerpt: 'Reflections on adjusting to college life and academic challenges during my first semester.',
      content: `
        <p>Starting college was both exciting and overwhelming. The first semester was filled with new experiences, challenges, and growth opportunities. I had to quickly adapt to a new environment, make new friends, and adjust to a different learning style.</p>
        
        <p>One of the biggest adjustments was managing my time effectively. Unlike high school, college classes don't meet every day, and there's a lot more independent study required. I had to develop a system to keep track of assignments, exams, and other commitments.</p>
        
        <p>The academic rigor was another significant change. Professors expected a higher level of critical thinking and analysis than I was used to in high school. I had to learn to read more efficiently, take better notes, and participate actively in discussions.</p>
        
        <p>Despite the challenges, my first semester was incredibly rewarding. I discovered my passion for computer science through my introductory programming course. The satisfaction of solving complex problems and creating something from scratch was unmatched.</p>
        
        <p>By the end of the semester, I had not only survived but thrived. I made lasting friendships, discovered my academic interests, and developed skills that would serve me throughout my college journey.</p>
      `,
      date: 'May 15, 2023',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500',
      readTime: '5 min read',
      category: 'College Life',
    },
    {
      id: 2,
      title: 'Landing My First Internship',
      slug: 'landing-first-internship',
      excerpt: 'How I prepared for interviews and secured my first tech internship during sophomore year.',
      content: `
        <p>Securing my first tech internship was a journey filled with preparation, persistence, and a bit of luck. I started the process during the fall semester of my sophomore year, knowing that competition would be fierce.</p>
        
        <p>The first step was updating my resume and creating a portfolio website to showcase my projects. Even though I didn't have professional experience, I highlighted relevant coursework, personal projects, and involvement in coding clubs and hackathons.</p>
        
        <p>Next came the interview preparation. I spent hours practicing coding problems on platforms like LeetCode and HackerRank. I also participated in mock interviews organized by our university's career center, which helped me overcome my nervousness and improve my communication skills.</p>
        
        <p>The application process was grueling. I applied to over 50 companies, received rejections from many, and never heard back from others. But I persisted, and eventually received interview requests from a few companies.</p>
        
        <p>The interview with the company where I eventually interned was challenging but fair. It consisted of a technical screening, a take-home project, and a final round with the team. I was thrilled when I received the offer.</p>
        
        <p>My advice to fellow students: start early, build a strong portfolio, practice technical interviews, and don't get discouraged by rejections. Each application and interview is a learning experience that brings you closer to your goal.</p>
      `,
      date: 'August 3, 2023',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&h=500',
      readTime: '6 min read',
      category: 'Career',
    },
    {
      id: 3,
      title: 'Group Project Survival Guide',
      slug: 'group-project-survival',
      excerpt: 'Tips and lessons learned from working on team projects with classmates.',
      content: `
        <p>Group projects in college can be either incredibly rewarding or frustratingly difficult, depending on how they're approached. After participating in numerous team projects throughout my college career, I've compiled some strategies for success.</p>
        
        <p>Communication is absolutely crucial. Establish a clear communication channel from the start, whether it's through Slack, Discord, or regular in-person meetings. Set expectations for response times and update frequency.</p>
        
        <p>Equally important is proper task division and management. I've found that using project management tools like Trello or GitHub Projects helps everyone stay on the same page. Break down the project into small, manageable tasks and assign clear responsibilities.</p>
        
        <p>Dealing with different working styles can be challenging. Some team members prefer to start early and work incrementally, while others might work best under pressure. Finding a middle ground through setting internal deadlines before the actual due date helps accommodate different styles while ensuring timely completion.</p>
        
        <p>Conflict resolution is an inevitable part of group work. Address issues as they arise rather than letting them fester. Focus on the problem rather than the person, and be open to compromise.</p>
        
        <p>Finally, celebrate your successes together. Acknowledge everyone's contributions and take time to reflect on what worked well and what could be improved for future collaborations.</p>
        
        <p>Group projects might not always be smooth sailing, but with the right approach, they can provide valuable collaborative skills that will serve you well in your professional career.</p>
      `,
      date: 'October 22, 2023',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&h=500',
      readTime: '7 min read',
      category: 'Teamwork',
    },
    {
      id: 4,
      title: 'Balancing Academics and Extracurriculars',
      slug: 'balancing-academics-extracurriculars',
      excerpt: 'Strategies for maintaining academic excellence while participating in clubs and activities.',
      content: `
        <p>College life is about more than just classes and grades. Extracurricular activities provide valuable experiences and skills that complement academic learning. However, balancing academics with other commitments can be challenging.</p>
        
        <p>Time management is the foundation of this balancing act. I use a digital calendar to schedule not just classes and meetings, but also study time, personal projects, and even downtime. This helps me visualize my commitments and ensure I'm allocating sufficient time to each priority.</p>
        
        <p>Learning to say no is another crucial skill. It's tempting to join every interesting club or participate in every event, but overcommitment leads to burnout. I've learned to be selective about my extracurricular involvements, focusing on those that align with my interests and career goals.</p>
        
        <p>During particularly busy academic periods, such as midterms or finals, I temporarily scale back my extracurricular commitments. Most clubs understand that academics come first and are flexible with members' availability during these times.</p>
        
        <p>Finding synergies between academics and extracurriculars has been beneficial. For instance, joining the coding club has complemented my computer science coursework, while participating in debate club has improved my presentation skills for class projects.</p>
        
        <p>Lastly, self-care cannot be overlooked. Adequate sleep, regular exercise, and mindfulness practices help maintain the mental and physical energy needed to excel in both academics and extracurriculars.</p>
        
        <p>With thoughtful planning and prioritization, it's possible to enjoy a rich college experience that includes both academic achievement and meaningful extracurricular involvement.</p>
      `,
      date: 'January 15, 2024',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&h=500',
      readTime: '6 min read',
      category: 'College Life',
    },
    {
      id: 5,
      title: 'My Experience at a Hackathon',
      slug: 'hackathon-experience',
      excerpt: 'What I learned from participating in my first 24-hour coding competition.',
      content: `
        <p>My first hackathon was an intense, exhausting, and incredibly rewarding experience. Our university hosted a 24-hour event where teams competed to build innovative solutions addressing environmental challenges.</p>
        
        <p>Preparation was key. Our team of four met several times before the event to brainstorm ideas and decide on technologies we'd use. We settled on creating a mobile app that would help users track and reduce their carbon footprint.</p>
        
        <p>When the hackathon began, we quickly divided tasks based on our strengths. I focused on the back-end development, while my teammates handled the front-end, data modeling, and presentation preparation.</p>
        
        <p>The time constraint was the biggest challenge. We had to scope our project realistically given the 24-hour timeframe. This meant prioritizing core functionality and being willing to cut features as the deadline approached. We used agile principles, having short check-ins every few hours to assess progress and adjust our plan.</p>
        
        <p>Around 3 AM, we hit a major technical roadblock with our database design. The pressure and sleep deprivation made it difficult to think clearly, but after stepping back and taking a short break, we found a simpler solution that actually improved our overall design.</p>
        
        <p>The final hours were a blur of coding, testing, and preparing our pitch. Despite the exhaustion, there was an electric energy in the venue as teams rushed to complete their projects.</p>
        
        <p>While we didn't win the competition, we were proud of what we accomplished in such a short time. More importantly, the experience taught me valuable lessons about teamwork, working under pressure, and rapid prototyping that no classroom could provide.</p>
        
        <p>I've since participated in several more hackathons, each one building my technical skills and confidence. I'd encourage every tech student to try at least one hackathon during their college years – it's an experience you won't forget.</p>
      `,
      date: 'March 10, 2024',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500',
      readTime: '8 min read',
      category: 'Tech Events',
    }
  ];
  
  // Add a new resource post at the top
  const resourcePost = {
    id: 6,
    title: 'Comprehensive Career and Placement Resources',
    slug: 'resources',
    excerpt: 'A curated collection of resources for various job roles, including placement guides, resumes, and role-specific materials.',
    content: '',
    date: 'May 6, 2025',
    image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500',
    readTime: '12 min read',
    category: 'Resources',
    isSpecial: true
  };
  
  const allPosts = [resourcePost, ...blogPosts];
  
  const filteredPosts = allPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-16 bg-navy-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Campus Chronicles</h1>
            <p className="text-xl text-gray-200 animate-fade-in">
              Stories, insights, and reflections from my college journey.
            </p>
          </div>
        </div>
      </section>
      
      {/* Search */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search blog posts..."
                className="pl-10 py-6 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Post - Career Resources */}
      <section className="pt-12 pb-6">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-navy-800">Featured Resource</h2>
          <div className="bg-gradient-to-br from-navy-50 to-navy-100 rounded-xl p-6 md:p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="rounded-lg overflow-hidden h-[300px]">
                <img 
                  src={resourcePost.image} 
                  alt={resourcePost.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex gap-2 mb-4">
                  <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm flex items-center">
                    <BookOpen className="mr-1 h-4 w-4" />
                    {resourcePost.category}
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {resourcePost.readTime}
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-navy-800">{resourcePost.title}</h3>
                <p className="text-navy-600 mb-4">{resourcePost.excerpt}</p>
                <div className="mb-6 text-gray-500">{resourcePost.date}</div>
                <Button 
                  className="bg-navy-700 hover:bg-navy-800 text-white"
                  asChild
                >
                  <Link to={`/blog/${resourcePost.slug}`}>
                    Access Resource Collection
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Regular Featured Post */}
      <section className="pb-6">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-navy-800">Featured Post</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="rounded-lg overflow-hidden h-[400px]">
              <img 
                src={blogPosts[0].image} 
                alt={blogPosts[0].title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex gap-2 mb-4">
                <span className="bg-navy-100 text-navy-700 px-3 py-1 rounded-full text-sm">
                  {blogPosts[0].category}
                </span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {blogPosts[0].readTime}
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-navy-800">{blogPosts[0].title}</h3>
              <p className="text-navy-600 mb-4">{blogPosts[0].excerpt}</p>
              <div className="mb-6 text-gray-500">{blogPosts[0].date}</div>
              <Button 
                className="bg-navy-700 hover:bg-navy-800 text-white"
                asChild
              >
                <Link to={`/blog/${blogPosts[0].slug}`}>
                  Read Full Article
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* All Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-navy-800">All Posts</h2>
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.filter(post => !post.isSpecial).map((post) => (
                <Card key={post.id} className="overflow-hidden hover-scale hover:shadow-lg transition-all">
                  <div className="h-52 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex gap-2 mb-3">
                      <span className="bg-navy-100 text-navy-700 px-2 py-1 rounded-full text-sm">
                        {post.category}
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-navy-800">{post.title}</h3>
                    <p className="text-navy-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <Button 
                        variant="outline" 
                        className="hover:bg-navy-100 hover:text-navy-800"
                        asChild
                      >
                        <Link to={`/blog/${post.slug}`}>
                          Read More
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold text-navy-800 mb-2">No posts found</h3>
              <p className="text-navy-600">Try adjusting your search query.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-navy-800">Subscribe to My Newsletter</h2>
            <p className="text-navy-600 mb-6">
              Stay updated with my latest blog posts, projects, and college journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow py-6 text-lg"
              />
              <Button className="bg-accent hover:bg-amber-600 text-white py-6 text-lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
