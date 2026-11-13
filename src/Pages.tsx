import { useState } from "react";
import { ArrowRight, ArrowUpRight, BookOpen, ChevronLeft, ChevronRight, Github } from "lucide-react";
import { blogPosts, type BlogPost } from "./blogs";

const teamMoments = [
  {
    image: "/portraits/samsung-team.webp",
    alt: "Samsung R&D team gathered at a restaurant",
    label: "SAMSUNG R&D · BENGALURU · 2025",
    title: "Learning with a team",
    description: "My research developer internship brought me into a collaborative wireless engineering environment and conversations that stayed with me beyond the office.",
  },
  {
    image: "/portraits/squarepoint-team.webp",
    alt: "Nikhil at a Squarepoint team outing with colleagues",
    label: "SQUAREPOINT CAPITAL · BENGALURU · 2026",
    title: "Beyond the incident bridge",
    description: "A team outing with colleagues and TAS lead Alex To. Working across trading and infrastructure teams reminded me how much dependable systems rely on clear communication and trust between people.",
  },
  {
    image: "/portraits/squarepoint-office.webp",
    alt: "Nikhil with a teammate inside the Squarepoint office",
    label: "SQUAREPOINT CAPITAL · THE OFFICE · 2026",
    title: "The everyday work",
    description: "A moment inside the Squarepoint office. The hands-on part of the job was diagnosing infrastructure issues carefully, coordinating with owners, and checking that recovery really held.",
  },
];

function TeamCarousel() {
  const [index, setIndex] = useState(0);
  const active = teamMoments[index];
  const show = (next: number) => setIndex((next + teamMoments.length) % teamMoments.length);
  return <div className="team-carousel" aria-label="Team moments photo carousel">
    <div className="team-carousel-photo">
      <img key={active.image} src={active.image} alt={active.alt} decoding="async" />
      <span className="mono">{String(index + 1).padStart(2, "0")} / {String(teamMoments.length).padStart(2, "0")}</span>
    </div>
    <div className="team-carousel-copy">
      <div aria-live="polite" aria-atomic="true"><p className="mono">{active.label}</p><h3>{active.title}</h3><p>{active.description}</p></div>
      <div className="team-carousel-controls">
        <div className="team-carousel-dots" role="group" aria-label="Choose a photo">
          {teamMoments.map((moment, position) => <button key={moment.image} type="button" aria-label={`Show photo ${position + 1}: ${moment.title}`} aria-pressed={position === index} onClick={() => show(position)} />)}
        </div>
        <div className="team-carousel-arrows">
          <button type="button" aria-label="Previous photo" onClick={() => show(index - 1)}><ChevronLeft size={20} /></button>
          <button type="button" aria-label="Next photo" onClick={() => show(index + 1)}><ChevronRight size={20} /></button>
        </div>
      </div>
    </div>
  </div>;
}

function BackHome() {
  return <a className="projects-back" href="/"><ArrowRight size={16} /> Back to the homepage</a>;
}

export function AboutPage() {
  return <>
    <section className="page-intro about-page-intro" id="top">
      <div className="container">
        <BackHome />
        <p className="eyebrow mono">ABOUT / THE PERSON BEHIND THE WORK</p>
        <h1>Curious by nature.<br /><em>Careful by habit.</em></h1>
        <p className="page-intro-lede">I’m Nikhil Jain, an engineer who likes turning complicated problems into work that people can trust, use, and improve together.</p>
        <a className="button button-primary about-gallery-link" href="#team">See team photos <ArrowRight size={18} /></a>
      </div>
    </section>
    <section className="about-story section-pad">
      <div className="container about-story-grid">
        <div className="about-story-photo" data-reveal>
          <img src="/portraits/about.webp" alt="Nikhil Jain outdoors" />
          <span className="mono">BENGALURU · 2026</span>
        </div>
        <div className="about-story-copy" data-reveal>
          <p className="eyebrow mono"><span className="section-number">01</span> / THE SHORT VERSION</p>
          <h2>People, systems, <em>possibility.</em></h2>
          <p>I graduated from IIT Kanpur in Electrical Engineering, with minors in Computer Systems, Machine Learning & Applications, and Algorithms. I’ve worked on wireless modem data at Samsung R&D and supported live trading infrastructure at Squarepoint Capital.</p>
          <p>Those settings taught me different versions of the same lesson: communicate clearly, check the state of the system, and make the next action understandable to everyone involved. At Squarepoint I helped coordinate incident bridges across more than eight trading teams and infrastructure owners, then checked recovery end to end.</p>
          <p>My own projects are how I keep exploring. They move between C++ market feeds, AI tool safety, integrations, and small products. I like publishing the method, result, and limitations together so someone else can inspect the work.</p>
          <a className="text-link" href="/projects">See the project archive <ArrowUpRight size={19} /></a>
        </div>
      </div>
    </section>
    <section className="about-moments section-pad" id="team">
      <div className="container">
        <div className="section-heading" data-reveal>
          <div><p className="eyebrow mono"><span className="section-number">02</span> / PEOPLE ALONG THE WAY</p><h2>Better work is <em>shared.</em></h2></div>
          <p className="section-lede">The moments around a project matter too: teammates, mentors, and the conversations that make the work better.</p>
        </div>
        <TeamCarousel />
        <figure className="graduation-feature" data-reveal><img src="/portraits/graduation.webp" alt="Nikhil at his IIT Kanpur graduation" loading="lazy" /><figcaption><span className="mono">IIT KANPUR · 2026</span><strong>Graduation day</strong><p>Four years of learning with people who challenged me to ask better questions.</p></figcaption></figure>
      </div>
    </section>
    <section className="outside-work section-pad">
      <div className="container outside-grid">
        <div><p className="eyebrow mono"><span className="section-number">03</span> / AWAY FROM THE KEYBOARD</p><h2>There’s more to <em>the story.</em></h2><p>Art, music, and chess give me different ways to practice attention and creativity.</p></div>
        <div className="hobby-grid">
          <article><span className="mono">01 / ART</span><h3>Sketching</h3><p>I enjoy drawing and the slower kind of observation it asks for.</p></article>
          <article><span className="mono">02 / MUSIC</span><h3>Singing & making music</h3><p>I sing and experiment with making music in GarageBand.</p></article>
          <article><span className="mono">03 / CHESS</span><h3>One more move</h3><p>Chess is a favorite way to think through tradeoffs, patterns, and patience.</p><a href="https://lichess.org/@/nikhilchicken" target="_blank" rel="noopener noreferrer">My Lichess profile <ArrowUpRight size={16} /></a></article>
        </div>
      </div>
    </section>
    <section className="about-end"><div className="container"><p>Want to talk about a project, a problem, or a game of chess?</p><a href="mailto:nikhilj22.iitk@gmail.com">Say hello <ArrowUpRight size={18} /></a></div></section>
  </>;
}

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return <a className="blog-card" href={`/blogs/${post.slug}`} style={{ "--card-index": index } as React.CSSProperties}>
    <div className="blog-card-image"><img src={post.image} alt={post.imageAlt} loading="lazy" /><span><ArrowUpRight size={20} /></span></div>
    <div className="blog-card-body"><p className="mono">{post.area}</p><h2>{post.title}</h2><p>{post.subtitle}</p><div className="blog-card-bottom mono"><span>{post.date}</span><span>{post.readTime}</span></div></div>
  </a>;
}

export function BlogsPage() {
  return <>
    <section className="page-intro blogs-page-intro" id="top"><div className="container"><BackHome /><p className="eyebrow mono">NOTES / LEARNING IN PUBLIC</p><h1>What I’ve learned.<br /><em>What I’m learning.</em></h1><p className="page-intro-lede">Technical notes from the projects I’ve built: the decisions, the evidence, the limitations, and the questions still open.</p></div></section>
    <section className="blogs-index section-pad"><div className="container"><div className="section-heading"><div><p className="eyebrow mono"><span className="section-number">01</span> / RECENT WRITING</p><h2>From the <em>workbench.</em></h2></div><p className="section-lede">Three starting points. The notebook is designed to grow as I build and learn more.</p></div><div className="blogs-grid">{blogPosts.map((post, index) => <BlogCard key={post.slug} post={post} index={index} />)}</div></div></section>
    <section className="blog-archive section-pad"><div className="container blog-archive-inner"><div><p className="eyebrow mono"><span className="section-number">02</span> / EARLIER WRITING</p><h2>Before this <em>chapter.</em></h2><p>Older reflections on college life and learning are on my Medium page.</p></div><a href="https://medium.com/@jikhlin23" target="_blank" rel="noopener noreferrer">Read the Medium archive <ArrowUpRight size={18} /></a></div></section>
  </>;
}

export function BlogArticle({ post }: { post: BlogPost }) {
  return <>
    <article id="top" className="blog-article"><header className="blog-article-head"><div className="container"><a className="projects-back" href="/blogs"><ArrowRight size={16} /> All writing</a><p className="eyebrow mono">{post.area} / {post.readTime}</p><h1>{post.title}</h1><p>{post.subtitle}</p><div className="blog-article-meta mono"><span>NIKHIL JAIN</span><span>{post.date}</span></div></div></header><div className="container"><figure className="blog-article-figure"><img src={post.image} alt={post.imageAlt} /><figcaption>Project figure from the linked repository. Results reflect the local evaluation described in the article.</figcaption></figure><div className="article-layout"><aside><BookOpen size={23} /><span className="mono">FIELD NOTES</span><p>Built, measured, and still learning.</p></aside><div className="article-prose">{post.blocks.map((block, index) => block.type === "paragraph" ? <p key={index}>{block.text}</p> : block.type === "heading" ? <h2 key={index}>{block.text}</h2> : <ul key={index}>{block.items.map(item => <li key={item}>{item}</li>)}</ul>)}<a className="article-repo" href={post.repository} target="_blank" rel="noopener noreferrer"><Github size={20} /> Read the code and evidence <ArrowUpRight size={19} /></a></div></div></div></article>
    <section className="blog-next"><div className="container"><span className="mono">KEEP READING</span><div>{blogPosts.filter(item => item.slug !== post.slug).slice(0, 2).map(item => <a key={item.slug} href={`/blogs/${item.slug}`}>{item.title}<ArrowUpRight size={20} /></a>)}</div></div></section>
  </>;
}
