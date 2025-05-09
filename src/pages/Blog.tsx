
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, BookOpen, ExternalLink } from 'lucide-react';

// Define the blog post type
interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  readTime: string;
  category: string;
  externalLink: string;
}

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Third Year Resources",
      slug: "third-year-resources",
      excerpt: "Discover a treasure trove of curated resources tailored for third-year students aiming to ace internships and placements. From coding guides to interview tips, this blog equips you with everything you need to stand out in competitive job profiles.",
      content: "",
      date: "May 1, 2025",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=500",
      readTime: "15 min read",
      category: "Resources",
      externalLink: "https://medium.com/@jikhlin23/part-3-8563864a4801"
    },
    {
      id: 2,
      title: "IIT K Courses",
      slug: "iitk-courses",
      excerpt: "Dive into the world of IIT Kanpur's cutting-edge courses, specially curated for Electrical Engineering and Computer Science students. Explore course structures, key takeaways, and tips to excel in these transformative academic journeys.",
      content: "",
      date: "April 12, 2025",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&h=500",
      readTime: "12 min read",
      category: "Education",
      externalLink: "https://medium.com/@jikhlin23/electrical-engineering-students-in-iitk-62bc057420a8"
    },
    {
      id: 3,
      title: "Second Year's Note",
      slug: "second-year-note",
      excerpt: "Unlock the secrets to thriving in your sophomore year with this comprehensive guide! Packed with practical tips, academic strategies, and resources, this blog is your roadmap to balancing studies, skills, and personal growth in your second year.",
      content: "",
      date: "February 8, 2025",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500",
      readTime: "10 min read",
      category: "Academic Tips",
      externalLink: "https://medium.com/@jikhlin23/sophomore-year-college-tips-and-resources-cba9d0a43139"
    },
    {
      id: 4,
      title: "First Year's Note",
      slug: "first-year-note",
      excerpt: "Step into your college journey with confidence! This blog is your ultimate guide for first-year students, offering expert tips, academic hacks, and motivational advice to make your freshman year at IIT Kanpur unforgettable and successful.",
      content: "",
      date: "January 15, 2025",
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&w=800&h=500",
      readTime: "8 min read",
      category: "Academic Tips",
      externalLink: "https://medium.com/@jikhlin23/ye-leh-a641f0700b9f"
    }
  ];
  
  const filteredPosts = blogPosts.filter(post => 
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
      
      {/* Featured Post */}
      <section className="pt-12 pb-6">
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
              {blogPosts[0].externalLink ? (
                <Button 
                  className="bg-navy-700 hover:bg-navy-800 text-white"
                  asChild
                >
                  <a href={blogPosts[0].externalLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Read on Medium <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              ) : (
                <Button 
                  className="bg-navy-700 hover:bg-navy-800 text-white"
                  asChild
                >
                  <Link to={`/blog/${blogPosts[0].slug}`}>
                    Read Full Article
                  </Link>
                </Button>
              )}
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
              {filteredPosts.map((post) => (
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
                      {post.externalLink ? (
                        <Button 
                          variant="outline" 
                          className="hover:bg-navy-100 hover:text-navy-800"
                          asChild
                        >
                          <a href={post.externalLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            Read on Medium <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </Button>
                      ) : (
                        <Button 
                          variant="outline" 
                          className="hover:bg-navy-100 hover:text-navy-800"
                          asChild
                        >
                          <Link to={`/blog/${post.slug}`}>
                            Read More
                          </Link>
                        </Button>
                      )}
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
