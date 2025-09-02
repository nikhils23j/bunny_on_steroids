import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Calendar, Clock, Tag } from "lucide-react";

// Define the story type
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

const Story = () => {
  const [searchQuery, setSearchQuery] = useState("");

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
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in text-foreground">
              My Stories
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in">
              Personal narratives, experiences, and reflections from my journey
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search stories..."
                className="pl-10 py-6 text-lg bg-background"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
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

export default Story;
