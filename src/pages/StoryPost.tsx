import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Calendar, Clock, Tag } from "lucide-react";

export default function StoryPost() {
  const [content, setContent] = useState<string>("");

  // Story metadata (title, tags, etc.)
  const story = {
    title: "Year 2 at IITK",
    date: "October 28, 2024",
    readTime: "18 min read",
    tags: ["IITK", "College Life", "Reflections"],
    heroImage:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&h=600",
    file: "/stories/story1.md",
  };

  useEffect(() => {
    fetch(story.file)
      .then((res) => res.text())
      .then(setContent)
      .catch((err) => console.error("Error loading story:", err));
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Header */}
      <section className="relative w-full h-[60vh]">
        <img
          src={story.heroImage}
          alt={story.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-white max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{story.title}</h1>

          <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {story.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {story.readTime}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {story.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm"
              >
                <Tag className="inline h-3 w-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Markdown Story Content */}
      <article className="max-w-3xl mx-auto px-4 md:px-0 py-12">
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
