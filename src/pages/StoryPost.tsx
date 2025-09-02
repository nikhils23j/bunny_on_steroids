import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Tag, Share2, Heart } from "lucide-react";

const StoryPost = () => {
  const { slug } = useParams();

  // Sample story data - in a real app, this would be fetched based on the slug
  const getStoryContent = (slug: string) => {
    switch (slug) {
      case "year-2-at-iitk":
        return {
          title: "Year 2 at IITK",
          date: "October 28, 2024",
          readTime: "18 min read",
          tags: ["IITK", "College Life", "Reflections"],
          heroImage:
            "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&h=600",
          content: `
      <p class="lead"><strong>Disclaimer:</strong> Guys, new to this post—<em>must read my previous post for good luck.</em></p>
      
      <hr/>

      <h2>About Me</h2>
      <p>मेरा नाम <strong>निखिल जैन</strong> है । मेरे बापू का नाम <strong>चिन्मय</strong> है। मैं <strong>जोधपुर, राजस्थान</strong> से हूँ।</p>
      <p>भारतीय प्रद्योगिक संस्थान बॉम्बे द्वारा आयोजित संयुक्त प्रवेश परिशा अग्रवर्ती में उतीर्ण कर मैंने भारतीय प्रद्योगिक संस्थान कानपुर में <strong>विद्युत अभियांत्रिकी</strong> में प्रवेश लिया है।</p>
      <p>मेरी मुख्य अभिरुचियाँ <em>बैडमिंटन</em> और <em>शतरंज</em> खेलना है। <br/> <strong>हॉल २ की जय!</strong></p>

      <p><em>(जूनियर्स को सिखाने हेतु, एक उदाहरण के रूप में खोलने की व्याख्या करी गई है।)</em></p>

      <hr/>

      <blockquote>Einstein once said: <strong>"Coincidences are God’s way of remaining anonymous."</strong></blockquote>

      <p>It would be a mere coincidence to say that two years have passed successfully at IITK and I have matured as a fine wine—the memories umpteen to store and given only a little brain to take it back with. Guess I have found a way to let off some of my load.</p>

      <hr/>

      <h2>2nd Year Anniversary</h2>
      <p><strong>Date:</strong> 28th October<br/>
      Completed <strong>2 years at IITK</strong>.</p>

      <p><em>Leopard Note:</em> As attached as I am to the batch of Y22, I show up at the campus during the most memorable phases of them to tell, they are not alone and be ready to meet my family in the real world.</p>

      <p><strong>Thanks for your presence at:</strong></p>
      <ul>
        <li>First year Orientation</li>
        <li>Intern Season</li>
        <li>Second year Anniversary</li>
      </ul>
      <p>A letter is being written to commemorate his presence.</p>

      <hr/>

      <h2>Dear Mr Leopard</h2>
      <p>Let’s discount you my second-year story with a short Quora post.</p>
      <p><em>Pheww, God can I get some hooks to start with? I should not mess up the starting.</em></p>

      <hr/>

      <h2>📘 Recapping a Theorem</h2>
      <p><strong>Central Limit Theorem (MSO 201, 4th semester)</strong></p>

      <blockquote>
        <strong>Google Definition:</strong> The central limit theorem says that the sampling distribution of the mean will always be normally distributed, as long as the sample size is large enough. Regardless of whether the population has a normal, Poisson, binomial, or any other distribution, the sampling distribution of the mean will be NORMAL.
      </blockquote>

      <p>The definition is of statistics, but if you relate it this way, it says that each day you face different distributions of happiness and sadness. When added up for long days, your life is <strong>‘Normal’ :)</strong>.</p>

      <blockquote>
        "Every day, millions die, but for millions more, it’s the happiest day of their lives. Somewhere, someone is marrying the love of their life, while somewhere else, someone is saying a final goodbye. <br/><br/> <strong>Joy and pain—the world always seems to balance itself out.</strong>" – <em>House</em>
      </blockquote>

      <p>And as a college fruitfully teaches you how to react when you face an overwhelming desire to compete and yet try everything, when seeing everyone doing something unique. Planning each day when no one is there to look after, and living a phase where waking up on time is also an achievement. Going to the canteen whenever you get a chance, and talking about <strong>senseless topics for hours</strong> (yes: it’s singular :) ).</p>

      <p>And when we have become seniors and matured enough (though the usual gestation period of juniority is a year, we were a case of preterm birth of 8 months due to COVID), I’d put some philosophical hints and guiding content to help others in <em>‘pursuit of their Happiness.’</em></p>

      <hr/>

      <h2>💼 Internship Preparation</h2>
      <p>The major point in anyone’s mid second–third year transition is <strong>Internship Preparation</strong>—a time where it precisely hits your brain about the authenticity of your every action.</p>

      <p><strong>CPI</strong> (Henceforth called <em>Body Count</em>), the holy index of college metrics, comes again in existence (last seen: First year Orientation :O ).</p>

      <p>Come in, make friends, take a job, leave. We were definitely not ready for taking the third step.</p>

      <blockquote>
        As rightfully said by Barney Stinson: <br/> <strong>"It’s not legendary unless your friends are there to see it."</strong>
      </blockquote>

      <p><em>Jokes on them, they didn’t see any, cause there wasn’t one. (That was a joke)</em></p>

      <p>So, I guess during the 4th semester, everybody took on the journey to index their Body Count. Some did inter(disciplinary)course i.e. <strong>Open electives</strong>.</p>

      <hr/>

      <h2>📅 Chronological Order of Events</h2>
      <ul>
        <li>Aced a course (nothing to flex about)</li>
        <li>Got caught using phone in a test (flexed to this)</li>
        <li>Donated money to friends (never gonna return it until threatened)</li>
        <li>Stolen calculator before a test</li>
        <li>Abused somebody, got beaten back</li>
        <li>Guided a junior, asked a senior (Sharvil Athaley) for PYQ of a major quiz</li>
        <li>Kissed a girl in dreams, kissed boys in reality <em>(would put this in between for skimmers to skip it)</em></li>
        <li>Thrown a birthday bash, went to parties of societies: <strong>EEA, ANC, Antaragni, Thomso: Prem Bar</strong></li>
        <li>Stuck in someone’s brain, can’t get outta someone’s room/life :)</li>
        <li>Partied with others, parted by others</li>
        <li>Coded, simulated, deployed</li>
        <li>EEA secy interview</li>
        <li>EE dept convener interview (Amey Raj)</li>
        <li>DSA course</li>
        <li>The poem in treasure hunt</li>
      </ul>
      
      <p><strong>Hence, figuratively I have claimed to do some normal.</strong></p>

      <hr/>

      <h2>📖 4th Semester Highlights</h2>
      <ul>
        <li>EEA farewell pe meri quiz</li>
        <li>Summer intern journey</li>
        <li>Atharv collaboration during OA</li>
        <li>Samsung dholkha with Atharv: probability of do bhai dono tabahi missed</li>
        <li>Hello, papa, Intern ki to maa chud gayi yaar</li>
        <li>Anisha (Amazon), Siddhi Vora & Riyanshu Kumar (Siemens), Shreya Shree (Microsoft)</li>
        <li>Atharv Singh: lots of companies interview journey – let us name him Atharv</li>
        <li>Win/Lun philosophy</li>
        <li>Getting EEA award</li>
        <li>Book club thing</li>
        <li>Course BT: Psychology (Divyanshi), Chinese Cinema</li>
        <li>Sukriti and nickelcuzn account</li>
        <li>Rakshabandhan with Varsha Khandelwal</li>
        <li>My startup Omi</li>
        <li>Courses by Prof. Nitin Saxena & Raghunath Tewari (CSE)</li>
        <li>Hall 4 quest still talked about</li>
        <li>Winning the world cup: India vs Australia?</li>
        <li>Parents came at birthday</li>
        <li>Seniors in 2nd year: one from Jodhpur, another completing degree in 7th year</li>
        <li>The "Treasure Hunt" experience</li>
        <li>Gandhi Jayanti poster (PPOC)</li>
        <li>Antaragni struggle in Y2</li>
        <li>NNN challenge lasted 6 days</li>
        <li>My bold moves: CS345 and CS771 projects</li>
        <li>Prof. Sayak Ray Choudhary believed in me</li>
      </ul>

      <hr/>

      <h2>👤 Intro of Me</h2>
      <p>I am one of the loners like you guys who appreciates the joy of being together and want to share experiences...</p>
      <p>I love cooking and I play badminton on Sundays when hall 13 dog friends sleep after they have been fed with biscuits... I want to travel to cities in countries where I have never been. I am Rajasthani/Marwari and one that keeps me apart is that I am still not married. I want to pursue MBA from some renowned IIM. I know girls would kill... to have a boyfriend like me. But I am more open to the world for ambitions unlike others.. Of which I am not proud at all. <em>Sorry girls.</em></p>

      <hr/>

      <h2>⏰ My Daily Routine</h2>
      <ul>
        <li>5:00 am – Wake up</li>
        <li>5:00–5:30 – Brush & defecate</li>
        <li>5:30–6:00 – Telegram news read</li>
        <li>6:00 – Jogging + 45 min meditation</li>
        <li>7:25 – Bath & breakfast with podcasts</li>
        <li>8:00 – Plan the day</li>
        <li>9:00–6:30 – Cafe/class</li>
        <li>6:30 – Badminton/TT</li>
        <li>7:30 – Dinner + book</li>
        <li>8:00 – Walk with friend/calls + LinkedIn/Discord/InstiNews</li>
        <li>8:45 – Study classwork/exercises</li>
        <li>9:30 – YouTube learning (biographies, blogs, university courses)</li>
        <li>10:00 – Sleep</li>
      </ul>

      <p><em>Days when this was followed: 0 (the smallest number possible to give)</em></p>

      <hr/>

      <h2>⚠️ Series of Trouble (November 24)</h2>
      <ul>
        <li>Assignment 370 submitted solutions</li>
        <li>Endsem prep—only 1 day, CS345 in between</li>
        <li>EEA project cancelled</li>
        <li>Winternless</li>
        <li>CS345: midsem & quiz2 messed up</li>
        <li>CS771: couldn’t go better</li>
        <li>EE380: final lab—only 2 graphs instead of 8</li>
        <li>EE320 couldn’t go better</li>
      </ul>
    `,
        };

      default:
        return null;
    }
  };

  const story = getStoryContent(slug || "");

  if (!story) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Story Not Found</h1>
            <Link to="/story">
              <Button>Back to Stories</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={story.heroImage}
            alt={story.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/story"
              className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Stories
            </Link>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              {story.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/80 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {story.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {story.readTime}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {story.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <Button variant="secondary" size="sm">
                <Heart className="mr-2 h-4 w-4" />
                Like
              </Button>
              <Button variant="secondary" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div
              className="prose prose-lg max-w-none dark:prose-invert
                prose-headings:font-bold prose-headings:text-foreground
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-blockquote:border-l-primary prose-blockquote:bg-muted/30 
                prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-lg
                prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded
                prose-pre:bg-muted prose-pre:border
                prose-img:rounded-lg prose-img:shadow-lg prose-img:my-8
                prose-li:text-muted-foreground
                prose-strong:text-foreground"
              dangerouslySetInnerHTML={{ __html: story.content }}
            />
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default StoryPost;
