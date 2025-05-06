import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowLeft, MessageSquare, Share } from 'lucide-react';
import CodeBlock from '@/components/CodeBlock';
import GlowingCard from '@/components/GlowingCard';

const BlogPost = () => {
  const { slug } = useParams();
  const [blogPost, setBlogPost] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);

  useEffect(() => {
    // Simulating API fetch with a timeout
    setTimeout(() => {
      // Find the blog post data based on the slug
      const posts = [
        {
          id: 1,
          title: 'My First Semester Experience',
          slug: 'first-semester-experience',
          excerpt: 'Reflections on adjusting to college life and academic challenges during my first semester.',
          content: `
            <p>Starting college was both exciting and overwhelming. The first semester was filled with new experiences, challenges, and growth opportunities. I had to quickly adapt to a new environment, make new friends, and adjust to a different learning style.</p>
            
            <p>One of the biggest adjustments was managing my time effectively. Unlike high school, college classes don't meet every day, and there's a lot more independent study required. I had to develop a system to keep track of assignments, exams, and other commitments.</p>
            
            <p>The academic rigor was another significant change. Professors expected a higher level of critical thinking and analysis than I was used to in high school. I had to learn to read more efficiently, take better notes, and participate actively in discussions.</p>

            <h2>Discovering My Passion</h2>
            
            <p>Despite the challenges, my first semester was incredibly rewarding. I discovered my passion for computer science through my introductory programming course. The satisfaction of solving complex problems and creating something from scratch was unmatched.</p>
            
            <pre><code>
            function helloWorld() {
              console.log("Hello, college world!");
            }
            </code></pre>
            
            <p>By the end of the semester, I had not only survived but thrived. I made lasting friendships, discovered my academic interests, and developed skills that would serve me throughout my college journey.</p>

            <h2>Key Lessons Learned</h2>

            <ol>
              <li>Time management is essential for success in college</li>
              <li>Building relationships with professors provides valuable guidance</li>
              <li>Study groups can enhance learning and provide moral support</li>
              <li>Taking care of physical and mental health is crucial</li>
              <li>It's okay to adjust your goals as you discover new interests</li>
            </ol>
          `,
          date: 'May 15, 2023',
          image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&h=600',
          readTime: '5 min read',
          category: 'College Life',
          author: {
            name: 'Nikhil Jain',
            avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&h=100',
            bio: 'Computer Science student passionate about web development and AI.'
          },
          comments: 12,
          likes: 43
        },
        {
          id: 2,
          title: 'Landing My First Internship',
          slug: 'landing-first-internship',
          excerpt: 'How I prepared for interviews and secured my first tech internship during sophomore year.',
          content: `
            <p>Securing my first tech internship was a journey filled with preparation, persistence, and a bit of luck. I started the process during the fall semester of my sophomore year, knowing that competition would be fierce.</p>
            
            <p>The first step was updating my resume and creating a portfolio website to showcase my projects. Even though I didn't have professional experience, I highlighted relevant coursework, personal projects, and involvement in coding clubs and hackathons.</p>
            
            <h2>The Interview Process</h2>

            <p>Next came the interview preparation. I spent hours practicing coding problems on platforms like LeetCode and HackerRank. I also participated in mock interviews organized by our university's career center, which helped me overcome my nervousness and improve my communication skills.</p>
            
            <pre><code>
            // One of the problems I practiced
            function twoSum(nums, target) {
              const map = new Map();
              for (let i = 0; i < nums.length; i++) {
                const complement = target - nums[i];
                if (map.has(complement)) {
                  return [map.get(complement), i];
                }
                map.set(nums[i], i);
              }
              return null;
            }
            </code></pre>
            
            <p>The application process was grueling. I applied to over 50 companies, received rejections from many, and never heard back from others. But I persisted, and eventually received interview requests from a few companies.</p>
            
            <p>The interview with the company where I eventually interned was challenging but fair. It consisted of a technical screening, a take-home project, and a final round with the team. I was thrilled when I received the offer.</p>

            <h2>What I Learned</h2>
            
            <p>My advice to fellow students: start early, build a strong portfolio, practice technical interviews, and don't get discouraged by rejections. Each application and interview is a learning experience that brings you closer to your goal.</p>

            <ul>
              <li>Rejection is not failure, it's redirection</li>
              <li>Keep improving your skills while applying</li>
              <li>Tailor your applications for each company</li>
              <li>Network with alumni who work at your target companies</li>
            </ul>
          `,
          date: 'August 3, 2023',
          image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&h=600',
          readTime: '6 min read',
          category: 'Career',
          author: {
            name: 'Nikhil Jain',
            avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&h=100',
            bio: 'Computer Science student passionate about web development and AI.'
          },
          comments: 8,
          likes: 27
        },
        {
          id: 3,
          title: 'Group Project Survival Guide',
          slug: 'group-project-survival',
          excerpt: 'Tips and lessons learned from working on team projects with classmates.',
          content: `
            <p>Group projects in college can be either incredibly rewarding or frustratingly difficult, depending on how they're approached. After participating in numerous team projects throughout my college career, I've compiled some strategies for success.</p>
            
            <h2>Communication is Key</h2>
            
            <p>Communication is absolutely crucial. Establish a clear communication channel from the start, whether it's through Slack, Discord, or regular in-person meetings. Set expectations for response times and update frequency.</p>
            
            <p>Equally important is proper task division and management. I've found that using project management tools like Trello or GitHub Projects helps everyone stay on the same page. Break down the project into small, manageable tasks and assign clear responsibilities.</p>
            
            <pre><code>
            // Sample project task breakdown
            const projectTasks = {
              research: {
                assignee: "Alex",
                deadline: "Week 1",
                status: "completed"
              },
              design: {
                assignee: "Jamie",
                deadline: "Week 2",
                status: "in progress"
              },
              implementation: {
                assignee: "Taylor",
                deadline: "Week 3-4",
                status: "not started"
              },
              testing: {
                assignee: "Everyone",
                deadline: "Week 5",
                status: "not started"
              }
            };
            </code></pre>
            
            <h2>Managing Different Working Styles</h2>
            
            <p>Dealing with different working styles can be challenging. Some team members prefer to start early and work incrementally, while others might work best under pressure. Finding a middle ground through setting internal deadlines before the actual due date helps accommodate different styles while ensuring timely completion.</p>
            
            <p>Conflict resolution is an inevitable part of group work. Address issues as they arise rather than letting them fester. Focus on the problem rather than the person, and be open to compromise.</p>
            
            <p>Finally, celebrate your successes together. Acknowledge everyone's contributions and take time to reflect on what worked well and what could be improved for future collaborations.</p>
            
            <p>Group projects might not always be smooth sailing, but with the right approach, they can provide valuable collaborative skills that will serve you well in your professional career.</p>
          `,
          date: 'October 22, 2023',
          image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&h=600',
          readTime: '7 min read',
          category: 'Teamwork',
          author: {
            name: 'Nikhil Jain',
            avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&h=100',
            bio: 'Computer Science student passionate about web development and AI.'
          },
          comments: 15,
          likes: 36
        },
        {
          id: 4,
          title: 'Balancing Academics and Extracurriculars',
          slug: 'balancing-academics-extracurriculars',
          excerpt: 'Strategies for maintaining academic excellence while participating in clubs and activities.',
          content: `
            <p>College life is about more than just classes and grades. Extracurricular activities provide valuable experiences and skills that complement academic learning. However, balancing academics with other commitments can be challenging.</p>
            
            <h2>Time Management Techniques</h2>
            
            <p>Time management is the foundation of this balancing act. I use a digital calendar to schedule not just classes and meetings, but also study time, personal projects, and even downtime. This helps me visualize my commitments and ensure I'm allocating sufficient time to each priority.</p>
            
            <p>Learning to say no is another crucial skill. It's tempting to join every interesting club or participate in every event, but overcommitment leads to burnout. I've learned to be selective about my extracurricular involvements, focusing on those that align with my interests and career goals.</p>
            
            <p>During particularly busy academic periods, such as midterms or finals, I temporarily scale back my extracurricular commitments. Most clubs understand that academics come first and are flexible with members' availability during these times.</p>
            
            <h2>Finding Synergies</h2>
            
            <p>Finding synergies between academics and extracurriculars has been beneficial. For instance, joining the coding club has complemented my computer science coursework, while participating in debate club has improved my presentation skills for class projects.</p>
            
            <pre><code>
            // My weekly schedule template
            const weeklySchedule = {
              Monday: {
                morning: "Classes",
                afternoon: "Study Time",
                evening: "Coding Club"
              },
              Tuesday: {
                morning: "Research Lab",
                afternoon: "Classes",
                evening: "Personal Projects"
              },
              Wednesday: {
                morning: "Classes",
                afternoon: "Study Time",
                evening: "Rest & Recharge"
              },
              // ... rest of the week
            };
            </code></pre>
            
            <p>Lastly, self-care cannot be overlooked. Adequate sleep, regular exercise, and mindfulness practices help maintain the mental and physical energy needed to excel in both academics and extracurriculars.</p>
            
            <p>With thoughtful planning and prioritization, it's possible to enjoy a rich college experience that includes both academic achievement and meaningful extracurricular involvement.</p>
          `,
          date: 'January 15, 2024',
          image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&h=600',
          readTime: '6 min read',
          category: 'College Life',
          author: {
            name: 'Nikhil Jain',
            avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&h=100',
            bio: 'Computer Science student passionate about web development and AI.'
          },
          comments: 9,
          likes: 31
        },
        {
          id: 5,
          title: 'My Experience at a Hackathon',
          slug: 'hackathon-experience',
          excerpt: 'What I learned from participating in my first 24-hour coding competition.',
          content: `
            <p>My first hackathon was an intense, exhausting, and incredibly rewarding experience. Our university hosted a 24-hour event where teams competed to build innovative solutions addressing environmental challenges.</p>
            
            <h2>Preparation and Planning</h2>
            
            <p>Preparation was key. Our team of four met several times before the event to brainstorm ideas and decide on technologies we'd use. We settled on creating a mobile app that would help users track and reduce their carbon footprint.</p>
            
            <p>When the hackathon began, we quickly divided tasks based on our strengths. I focused on the back-end development, while my teammates handled the front-end, data modeling, and presentation preparation.</p>
            
            <p>The time constraint was the biggest challenge. We had to scope our project realistically given the 24-hour timeframe. This meant prioritizing core functionality and being willing to cut features as the deadline approached. We used agile principles, having short check-ins every few hours to assess progress and adjust our plan.</p>
            
            <pre><code>
            // One of our core features - calculating carbon footprint
            function calculateFootprint(transportMode, distance) {
              const emissionFactors = {
                car: 0.192, // kg CO2 per km
                bus: 0.105,
                train: 0.041,
                bike: 0,
                walk: 0
              };
              
              return distance * emissionFactors[transportMode];
            }
            </code></pre>
            
            <h2>Overcoming Challenges</h2>
            
            <p>Around 3 AM, we hit a major technical roadblock with our database design. The pressure and sleep deprivation made it difficult to think clearly, but after stepping back and taking a short break, we found a simpler solution that actually improved our overall design.</p>
            
            <p>The final hours were a blur of coding, testing, and preparing our pitch. Despite the exhaustion, there was an electric energy in the venue as teams rushed to complete their projects.</p>
            
            <p>While we didn't win the competition, we were proud of what we accomplished in such a short time. More importantly, the experience taught me valuable lessons about teamwork, working under pressure, and rapid prototyping that no classroom could provide.</p>
            
            <p>I've since participated in several more hackathons, each one building my technical skills and confidence. I'd encourage every tech student to try at least one hackathon during their college years – it's an experience you won't forget.</p>
          `,
          date: 'March 10, 2024',
          image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&h=600',
          readTime: '8 min read',
          category: 'Tech Events',
          author: {
            name: 'Nikhil Jain',
            avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&h=100',
            bio: 'Computer Science student passionate about web development and AI.'
          },
          comments: 21,
          likes: 54
        }
      ];

      const currentPost = posts.find(post => post.slug === slug);
      setBlogPost(currentPost || posts[0]);
      
      // Set related posts (excluding current post)
      const related = posts
        .filter(post => post.slug !== slug)
        .slice(0, 3);
      setRelatedPosts(related);
      
      setIsLoading(false);
    }, 500);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-10 w-2/3 bg-gray-200 rounded mb-4"></div>
            <div className="h-6 w-1/2 bg-gray-200 rounded mb-10"></div>
            <div className="h-64 w-full max-w-4xl bg-gray-200 rounded mb-6"></div>
            <div className="h-4 w-full max-w-4xl bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-full max-w-4xl bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-3/4 max-w-4xl bg-gray-200 rounded"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!blogPost) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="mb-6">Sorry, the blog post you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/blog">Return to Blog</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Function to create HTML from blog content
  const createMarkup = (htmlContent: string) => {
    return { __html: htmlContent };
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
      
      {/* Header */}
      <header className="container mx-auto px-4 mb-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-2 mb-4">
            <span className="bg-navy-100 text-navy-700 px-3 py-1 rounded-full text-sm">
              {blogPost.category}
            </span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              {blogPost.readTime}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 font-serif text-navy-800">{blogPost.title}</h1>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src={blogPost.author.avatar} alt={blogPost.author.name} />
                <AvatarFallback>{blogPost.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-navy-800">{blogPost.author.name}</p>
                <p className="text-sm text-gray-500">{blogPost.date}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex gap-1 items-center">
                <MessageSquare className="h-4 w-4" />
                <span>{blogPost.comments}</span>
              </Button>
              <Button variant="outline" size="sm" className="flex gap-1 items-center">
                <Share className="h-4 w-4" />
                <span>Share</span>
              </Button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Featured Image */}
      <section className="container mx-auto px-4 mb-10">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg overflow-hidden h-[400px] mb-6 shadow-lg">
            <img 
              src={blogPost.image} 
              alt={blogPost.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* Content */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-lg max-w-none prose-headings:text-navy-800 prose-a:text-navy-600 prose-a:no-underline hover:prose-a:underline prose-pre:bg-gray-100 prose-pre:text-navy-800">
            <div dangerouslySetInnerHTML={createMarkup(blogPost.content)} />
          </article>
          
          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-3 text-navy-800">Related Topics</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-navy-100 text-navy-700 px-3 py-1 rounded-full text-sm">
                {blogPost.category}
              </span>
              <span className="bg-navy-100 text-navy-700 px-3 py-1 rounded-full text-sm">
                Student Life
              </span>
              <span className="bg-navy-100 text-navy-700 px-3 py-1 rounded-full text-sm">
                Education
              </span>
              <span className="bg-navy-100 text-navy-700 px-3 py-1 rounded-full text-sm">
                Personal Growth
              </span>
            </div>
          </div>
          
          {/* Author Bio */}
          <div className="mt-10 p-6 bg-navy-50 rounded-lg">
            <div className="flex items-start sm:items-center flex-col sm:flex-row">
              <Avatar className="h-16 w-16 mb-4 sm:mb-0 sm:mr-6">
                <AvatarImage src={blogPost.author.avatar} alt={blogPost.author.name} />
                <AvatarFallback>{blogPost.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-bold mb-2 text-navy-800">About {blogPost.author.name}</h3>
                <p className="text-navy-600 mb-4">{blogPost.author.bio}</p>
                <Button variant="outline" className="border-navy-200 hover:bg-navy-100 text-navy-700">
                  Follow
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Posts */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-10 text-center text-navy-800">More Articles You Might Enjoy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {relatedPosts.map((post) => (
              <GlowingCard key={post.id} className="bg-white">
                <div className="h-40 -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="flex gap-2 mb-3">
                  <span className="bg-navy-100 text-navy-700 px-2 py-1 rounded-full text-xs">
                    {post.category}
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-navy-800 line-clamp-2">{post.title}</h3>
                <p className="text-navy-600 mb-4 text-sm line-clamp-2">{post.excerpt}</p>
                <Button 
                  variant="outline" 
                  className="w-full hover:bg-navy-100 hover:text-navy-800 mt-auto"
                  asChild
                >
                  <Link to={`/blog/${post.slug}`}>
                    Read Article
                  </Link>
                </Button>
              </GlowingCard>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
