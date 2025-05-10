import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubscribe = async () => {
    if (!email) return;

    setStatus("Submitting...");

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxUIlOUaMmxXXP-ddqHKwWTaIMjydS8u5FK1CSKPj2IwIQUMcSNjjME7wbZ9X_mwPYI/exec",
        {
          method: "POST",
          body: JSON.stringify({ email }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setStatus("Thanks for subscribing!");
        setEmail("");
      } else {
        setStatus("Something went wrong.");
      }
    } catch (err) {
      setStatus("Error submitting email.");
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-navy-800">
            Subscribe to My Newsletter
          </h2>
          <p className="text-navy-600 mb-6">
            Stay updated with my latest blog posts, projects, and college
            journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow py-6 text-lg"
            />
            <Button
              onClick={handleSubscribe}
              className="bg-accent hover:bg-amber-600 text-white py-6 text-lg"
            >
              Subscribe
            </Button>
          </div>
          {status && <p className="mt-4 text-sm text-gray-700">{status}</p>}
        </div>
      </div>
    </section>
  );
}
