import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Calendar, Clock, Tag, ExternalLink } from "lucide-react";
import NewsletterSection from "@/components/ui/newsletter";

// BlogPost type
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

// Story type
interface Story {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  image: string;
  readTime: string;
  tags: string[];
}

const StoryPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Blog Data
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "First Year's Note",
      slug: "first-year-note",
      excerpt:
        "Step into your college journey with confidence! This blog is your ultimate guide for first-year students, offering expert tips, academic hacks, and motivational advice to make your freshman year at IIT Kanpur unforgettable and successful.",
      content: "",
      date: "January 15, 2025",
      image:
        "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&w=800&h=500",
      readTime: "8 min read",
      category: "Academic Tips",
      externalLink: "https://medium.com/@jikhlin23/ye-leh-a641f0700b9f",
    },
    {
      id: 2,
      title: "Second Year's Note",
      slug: "second-year-note",
      excerpt:
        "Unlock the secrets to thriving in your sophomore year with this comprehensive guide! Packed with practical tips, academic strategies, and resources, this blog is your roadmap to balancing studies, skills, and personal growth in your second year.",
      content: "",
      date: "February 8, 2025",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500",
      readTime: "10 min read",
      category: "Academic Tips",
      externalLink:
        "https://medium.com/@jikhlin23/sophomore-year-college-tips-and-resources-cba9d0a43139",
    },
    {
      id: 3,
      title: "Third Year Resources",
      slug: "third-year-resources",
      excerpt:
        "Discover a treasure trove of curated resources tailored for third-year students aiming to ace internships and placements. From coding guides to interview tips, this blog equips you with everything you need to stand out in competitive job profiles.",
      content: "",
      date: "May 1, 2025",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=500",
      readTime: "15 min read",
      category: "Resources",
      externalLink: "https://medium.com/@jikhlin23/part-3-8563864a4801",
    },
    {
      id: 4,
      title: "IIT K Courses",
      slug: "iitk-courses",
      excerpt:
        "Dive into the world of IIT Kanpur's cutting-edge courses, specially curated for Electrical Engineering and Computer Science students. Explore course structures, key takeaways, and tips to excel in these transformative academic journeys.",
      content: "",
      date: "April 12, 2025",
      image:
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&h=500",
      readTime: "12 min read",
      category: "Education",
      externalLink:
        "https://medium.com/@jikhlin23/electrical-engineering-students-in-iitk-62bc057420a8",
    },
  ];

  // Story Data
  const stories: Story[] = [
    {
      id: 1,
      title: "Year 2 at IITK",
      slug: "year-2-at-iitk",
      excerpt:
        "A personal reflection on completing two years at IIT Kanpur—memories, lessons, and experiences from academics, hostel life, and internship preparation.",
      date: "October 28, 2024",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&h=400",
      readTime: "15 min read",
      tags: ["IITK", "College Life", "Reflections"],
    },
  ];

  // Filters
  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredStories = stories.filter(
    (story) =>
      story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in text-foreground">
            My Stories and Blogs
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Personal narratives, experiences, and reflections from my journey
          </p>
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
                placeholder="Search blogs and stories..."
                className="pl-10 py-6 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-navy-800">Blogs</h2>
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="overflow-hidden hover-scale hover:shadow-lg transition-all"
                >
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
                    <h3 className="text-xl font-bold mb-2 text-navy-800">
                      {post.title}
                    </h3>
                    <p className="text-navy-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      {post.externalLink ? (
                        <Button
                          variant="outline"
                          className="hover:bg-navy-100 hover:text-navy-800"
                          asChild
                        >
                          <a
                            href={post.externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                          >
                            Read on Medium{" "}
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          className="hover:bg-navy-100 hover:text-navy-800"
                          asChild
                        >
                          <Link to={`/blog/${post.slug}`}>Read More</Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold text-navy-800 mb-2">
                No blogs found
              </h3>
              <p className="text-navy-600">Try adjusting your search query.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stories Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-navy-800">Stories</h2>
          {filteredStories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStories.map((story) => (
                <Link
                  key={story.id}
                  to={`/story/${story.slug}`}
                  className="group"
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {story.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {story.readTime}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                        {story.title}
                      </h3>

                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {story.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {story.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                          >
                            <Tag className="h-3 w-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold text-foreground mb-2">
                No stories found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search query.
              </p>
            </div>
          )}
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default StoryPage;
