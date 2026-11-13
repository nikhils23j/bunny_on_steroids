import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import { projects, type Project } from "./projects";
import { blogPosts } from "./blogs";
import { AboutPage, BlogArticle, BlogsPage } from "./Pages";

const profileUrl = "https://github.com/nikhils23j";

function useReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const elements = [
      ...document.querySelectorAll<HTMLElement>("[data-reveal]"),
    ];
    if (!("IntersectionObserver" in window)) return;
    elements.forEach((element) => element.classList.add("will-reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px 40px 0px" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const destination = project.liveUrl ?? project.url;
  return (
    <article
      id={`project-${project.id}`}
      className={`project-card project-card--${project.id}`}
      style={{ "--card-index": index } as React.CSSProperties}
    >
      <a
        className="project-visual"
        href={destination}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={project.liveUrl ? `Visit ${project.name} website` : `View ${project.name} on GitHub`}
      >
        <div className="visual-grain" aria-hidden="true" />
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          decoding="async"
        />
        {project.id === "sniff" && <span className="project-brand" aria-label="Sniff.in logo"><img src="/projects/sniff.webp" alt="" /></span>}
        <span className="visual-arrow">
          <ArrowUpRight size={20} strokeWidth={1.8} />
        </span>
      </a>
      <div className="project-body">
        <div className="project-eyebrow">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <h3>
          <a href={destination} target="_blank" rel="noopener noreferrer">
            {project.name}
            <ArrowUpRight size={19} aria-hidden="true" />
          </a>
        </h3>
        <p className="project-description">{project.description}</p>
        <div className="project-measure">
          <strong>{project.metric}</strong>
          <small>{project.scope}</small>
        </div>
        <div className="project-stack">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        {project.liveUrl && (
          <div className="project-links">
            <a className="project-live-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Link to web-app <ArrowUpRight size={15} />
            </a>
            <a className="project-source-link" href={project.url} target="_blank" rel="noopener noreferrer">
              <Github size={15} /> View source on GitHub <ArrowUpRight size={15} />
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

const featuredIds = [
  "sniff",
  "market-replay",
  "incidentops",
  "fleet-config",
  "gpu-direct-tcp",
];
const featuredProjects = featuredIds.map(
  (id) => projects.find((item) => item.id === id)!,
);

const projectDomains = [
  {
    id: "product",
    title: "Products & operations",
    summary: "People-facing products and tools for teams under pressure.",
    projectIds: ["sniff", "incidentops"],
  },
  {
    id: "markets",
    title: "Markets & quant",
    summary: "Market data, matching engines and measured risk experiments.",
    projectIds: ["market-replay", "exchangelab", "risklab"],
  },
  {
    id: "systems",
    title: "Systems & infrastructure",
    summary: "Correctness, networking, scheduling and recovery at the systems layer.",
    projectIds: ["fleet-config", "gpu-direct-tcp", "k8s-operator", "api-auth", "gpu-scheduler", "llm-serving"],
  },
];

const minors = [
  {
    title: "Algorithms",
    courses: ["Data Structures & Algorithms (DSA)", "Algorithms II", "Randomised Algorithms"],
  },
  {
    title: "Machine Learning & Applications",
    courses: ["Introduction to Machine Learning", "Statistical Natural Language Processing"],
  },
  {
    title: "Computer Systems",
    courses: ["Computer Networks", "Database Management System", "Linux Kernel Programming"],
  },
];

function ProjectGallery() {
  return (
    <>
      <nav className="domain-nav" aria-label="Jump to project domain">
        {projectDomains.map((domain, index) => (
          <a href={`#domain-${domain.id}`} key={domain.id} className="domain-link">
            <span className="mono">0{index + 1} / {domain.projectIds.length} PROJECTS</span>
            <strong>{domain.title}</strong>
            <ArrowDown size={20} aria-hidden="true" />
          </a>
        ))}
      </nav>
      {projectDomains.map((domain, domainIndex) => (
        <section className="domain-section" id={`domain-${domain.id}`} key={domain.id}>
          <div className="domain-heading">
            <span className="mono">0{domainIndex + 1} / DOMAIN</span>
            <h3>{domain.title}</h3>
            <p>{domain.summary}</p>
          </div>
          <div className="project-grid">
            {domain.projectIds.map((id, index) => {
              const project = projects.find((item) => item.id === id)!;
              return <ProjectCard key={id} project={project} index={index} />;
            })}
          </div>
        </section>
      ))}
    </>
  );
}

function ProjectsPageContent() {
  const [certificateOpen, setCertificateOpen] = useState(false);
  const certificateDialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = certificateDialog.current;
    if (!dialog) return;
    if (certificateOpen && !dialog.open) dialog.showModal();
    if (!certificateOpen && dialog.open) dialog.close();
  }, [certificateOpen]);

  return (
    <>
      <section className="projects-page-hero" id="top">
        <div className="container projects-page-hero-inner">
          <a className="projects-back" href="/">
            <ArrowRight size={16} /> Back to the homepage
          </a>
          <p className="eyebrow mono">THE PROJECT ARCHIVE / 2025—2026</p>
          <h1>
            Built to be <em>examined.</em>
          </h1>
          <p>
            Products, market systems and infrastructure experiments. Each card
            points to code and evidence; the scope note says what each result measures.
          </p>
          <div className="projects-page-stats mono">
            <span>
              <strong>{projects.length}</strong> RECENT PROJECTS
            </span>
            <span>
              <strong>3</strong> DOMAINS
            </span>
            <span>
              <strong>3</strong> IITK MINORS
            </span>
          </div>
        </div>
      </section>
      <section className="work section-pad projects-catalog" id="catalog">
        <div className="container">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow mono">
                <span className="section-number">01</span> / RECENT WORK
              </p>
              <h2>
                Explore the <em>details.</em>
              </h2>
            </div>
            <p className="section-lede">
              Pick a domain below, then open a project for implementation details,
              saved results and limitations.
            </p>
          </div>
          <div className="project-learning-note" data-reveal>
            <div>
              <span className="mono">WHAT I DID</span>
              <p>I built and tested these projects across product, market and systems work. GPU Direct TCP was a group course research prototype; the repository describes the shared implementation and hardware setup.</p>
            </div>
            <div>
              <span className="mono">WHAT I LEARNED</span>
              <p>Good engineering needs clear scope: measure the real bottleneck, test failure paths, and state exactly where a result holds. The notes on each card make those boundaries visible.</p>
            </div>
          </div>
          <ProjectGallery />
        </div>
      </section>
      <section className="minor-work section-pad">
        <div className="container">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow mono">
                <span className="section-number">02</span> / IIT KANPUR MINORS
              </p>
              <h2>
                The coursework <em>behind the work.</em>
              </h2>
            </div>
            <p className="section-lede">
              Three undergraduate minors shaped how I approach algorithms,
              learning systems and computer infrastructure.
            </p>
          </div>
          <div className="minors-layout">
            <figure className="minors-certificate">
              <button type="button" className="minors-certificate-open" onClick={() => setCertificateOpen(true)} aria-label="Expand IIT Kanpur minors certificate">
                <img src="/portraits/minors-certificate.webp" alt="Preview of IIT Kanpur certificate awarding Nikhil Jain three minors" loading="lazy" decoding="async" />
                <span className="mono">VIEW FULL SIZE <ArrowUpRight size={15} /></span>
              </button>
              <figcaption className="mono">IIT KANPUR / CERTIFICATE OF MINORS</figcaption>
            </figure>
            <div className="minors-list">
              {minors.map((minor, index) => (
                <article className="minor-card" key={minor.title}>
                  <span className="mono">0{index + 1} / MINOR</span>
                  <h3>{minor.title}</h3>
                  <ul>{minor.courses.map((course) => <li key={course}>{course}</li>)}</ul>
                  {minor.title === "Computer Systems" && (
                    <a className="minor-project-link" href="#project-gpu-direct-tcp">
                      Linux Kernel Programming course project: GPU Direct TCP <ArrowUpRight size={16} />
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <dialog ref={certificateDialog} className="certificate-dialog" onClose={() => setCertificateOpen(false)} onClick={(event) => { if (event.target === event.currentTarget) setCertificateOpen(false); }} aria-label="IIT Kanpur minors certificate full size">
        <button type="button" className="certificate-close" onClick={() => setCertificateOpen(false)} aria-label="Close certificate"><X size={22} /></button>
        <img src="/portraits/minors-certificate.webp" alt="Full IIT Kanpur certificate for Nikhil Jain's minors in Algorithms, Machine Learning & Applications, and Computer Systems" />
      </dialog>
    </>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
  const isProjectsPage = pathname === "/projects";
  const isAboutPage = pathname === "/about";
  const isBlogsPage = pathname === "/blogs";
  const article = pathname.startsWith("/blogs/")
    ? blogPosts.find((post) => `/blogs/${post.slug}` === pathname)
    : undefined;
  const isInnerPage = pathname !== "/";
  useReveal();
  useEffect(() => {
    const legacySections: Record<string, string> = {
      "/courses": "about",
      "/story": "about",
    };
    const section = legacySections[window.location.pathname];
    if (!section) return;
    window.history.replaceState(null, "", `/#${section}`);
    requestAnimationFrame(() => {
      document.documentElement.style.scrollBehavior = "auto";
      document.getElementById(section)?.scrollIntoView();
      document.documentElement.style.scrollBehavior = "";
    });
  }, []);
  useEffect(() => {
    const title = article?.title ?? (isProjectsPage ? "Projects" : isAboutPage ? "About" : isBlogsPage ? "Writing" : "");
    if (!title) return;
    document.title = `${title} — Nikhil Jain`;
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute("href", `https://nikhilj22iitk.vercel.app${pathname}`);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", `https://nikhilj22iitk.vercel.app${pathname}`);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", `${title} — Nikhil Jain`);
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        article?.subtitle ?? (isProjectsPage ? "Explore Nikhil Jain’s projects across systems, applied AI, product engineering and quantitative research." : isAboutPage ? "Meet Nikhil Jain: engineering work, values, team experiences, art, music, and chess." : "Technical notes from Nikhil Jain’s projects: decisions, evidence, lessons, and open questions."),
      );
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", article?.subtitle ?? (isProjectsPage ? "Explore Nikhil Jain’s project archive, with code, results and limitations." : isAboutPage ? "Meet Nikhil Jain: engineer, teammate, artist, musician and chess player." : "Technical notes on what Nikhil Jain has built and is learning next."));
  }, [article, isProjectsPage, isAboutPage, isBlogsPage, pathname]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="nav-shell container">
          <a
            className="wordmark"
            href={isInnerPage ? "/" : "#top"}
            aria-label="Nikhil Jain, back to top"
          >
            <span className="wordmark-icon">
              NJ<span>.</span>
            </span>
            <span className="wordmark-text">NIKHIL JAIN</span>
          </a>
          <nav
            className={menuOpen ? "primary-nav open" : "primary-nav"}
            aria-label="Main navigation"
          >
            <a
              href="/projects"
              aria-current={isProjectsPage ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="/about"
              aria-current={isAboutPage ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="/blogs"
              aria-current={isBlogsPage || article ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              Writing
            </a>
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              GitHub
            </a>
          </nav>
          <a className="header-cta" href="mailto:nikhilj22.iitk@gmail.com">
            Let's talk <ArrowUpRight size={16} />
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <main id="main">
        {isProjectsPage ? <ProjectsPageContent /> : isAboutPage ? <AboutPage /> : isBlogsPage ? <BlogsPage /> : article ? <BlogArticle post={article} /> : (
          <>
            <section className="hero" id="top">
              <div className="hero-grid" aria-hidden="true" />
              <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
              <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
              <div className="container hero-layout">
                <div className="hero-copy">
                  <div className="status-pill">
                    <span className="status-light" /> BASED IN BENGALURU, INDIA
                  </div>
                  <p className="hero-kicker mono">
                    ENGINEER / BUILDER / CURIOUS HUMAN
                  </p>
                  <h1>
                    Making complex
                    <br />
                    <em>systems</em> feel
                    <br />
                    simple<span className="accent-dot">.</span>
                  </h1>
                  <p className="hero-description">
                    I’m Nikhil Jain. I work across infrastructure, applied AI,
                    and quantitative engineering—building things that are
                    dependable, measurable, and useful.
                  </p>
                  <div className="hero-actions">
                    <a className="button button-primary" href="#work">
                      Explore my work <ArrowUpRight size={19} />
                    </a>
                    <a
                      className="button button-secondary"
                      href="/Nikhil_Jain_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View résumé <ArrowUpRight size={19} />
                    </a>
                  </div>
                  <div className="hero-socials">
                    <a
                      href="https://www.linkedin.com/in/nikhil-jain-907100253"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="mailto:nikhilj22.iitk@gmail.com"
                      aria-label="Email"
                    >
                      <Mail size={20} />
                    </a>
                    <span className="social-rule" />
                    <span className="mono">OPEN TO WHAT'S NEXT</span>
                  </div>
                </div>
                <div className="hero-art" aria-label="Portrait of Nikhil Jain">
                  <div className="portrait-frame">
                    <div className="portrait-fallback" aria-hidden="true">
                      NJ
                    </div>
                    <img
                      src="/portraits/portrait.webp"
                      alt="Nikhil Jain"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                    <span className="portrait-index mono">
                      01 / NIKHIL JAIN
                    </span>
                  </div>
                  <div className="hero-note">
                    <span className="note-symbol">
                      <Code2 size={20} />
                    </span>
                    <span>
                      Currently exploring
                      <br />
                      <strong>systems × intelligence</strong>
                    </span>
                  </div>
                  <div className="hero-art-caption mono">
                    <span>SCROLL TO EXPLORE</span>
                    <ArrowDown size={17} />
                  </div>
                </div>
              </div>
              <div className="hero-bottom container">
                <span>ENGINEERING WITH INTENT</span>
                <span className="hero-bottom-line" />
                <span>PORTFOLIO / 2026</span>
              </div>
            </section>

            <section className="intro-strip" aria-label="Focus areas">
              <div className="container intro-inner">
                <p>
                  From production incidents to research prototypes, I like the
                  work where <strong>correctness meets curiosity.</strong>
                </p>
                <div className="intro-chips">
                  <span>INFRASTRUCTURE</span>
                  <span>APPLIED AI</span>
                  <span>MARKET SYSTEMS</span>
                </div>
              </div>
            </section>

            <section className="work section-pad" id="work">
              <div className="container">
                <div className="section-heading" data-reveal>
                  <div>
                    <p className="eyebrow mono">
                      <span className="section-number">01</span> / SELECTED WORK
                    </p>
                    <h2>
                      Things I've
                      <br />
                      <em>made & measured.</em>
                    </h2>
                  </div>
                  <p className="section-lede">
                    A selection of recent projects. Open the repositories for
                    methods, results and the limits behind each number.
                  </p>
                </div>
                <div className="project-grid home-project-grid">
                  {featuredProjects.map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={index}
                    />
                  ))}
                </div>
                <div className="work-footer">
                  <p>
                    Five selected projects. Explore the full collection by domain.
                  </p>
                  <a href="/projects">
                    Explore all projects <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </section>

            <section className="about section-pad" id="about">
              <div className="container about-grid">
                <div className="about-visual" data-reveal>
                  <div className="about-photo">
                    <div className="portrait-fallback" aria-hidden="true">
                      NJ
                    </div>
                    <img
                      src="/portraits/about.webp"
                      alt="Nikhil Jain outdoors"
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                  <span className="about-photo-tag mono">
                    NIKHIL / BEYOND THE CODE
                  </span>
                  <figure className="graduation-card">
                    <img
                      src="/portraits/graduation.webp"
                      alt="Nikhil receiving his degree at IIT Kanpur"
                      loading="lazy"
                    />
                    <figcaption className="mono">IIT KANPUR · 2026</figcaption>
                  </figure>
                </div>
                <div className="about-copy" data-reveal>
                  <p className="eyebrow mono">
                    <span className="section-number">02</span> / A LITTLE ABOUT
                    ME
                  </p>
                  <h2>
                    Curiosity,
                    <br />
                    with <em>follow-through.</em>
                  </h2>
                  <p className="about-lead">
                    I’m an Electrical Engineering graduate from IIT Kanpur, with
                    minors in Computer Systems, Machine Learning & Applications, and Algorithms.
                  </p>
                  <p>
                    My work has taken me from analyzing wireless modem logs at
                    Samsung R&D to supporting live trading infrastructure at
                    Squarepoint Capital. I’m drawn to problems that need both
                    careful engineering and a clear way to tell whether the
                    solution works.
                  </p>
                  <p>
                    Outside work, I explore distributed systems, developer
                    tools, AI agents and market simulation through hands-on
                    projects.
                  </p>
                  <div className="about-facts">
                    <div>
                      <span className="fact-icon">
                        <MapPin size={20} />
                      </span>
                      <span>Bengaluru, India</span>
                    </div>
                    <div>
                      <span className="fact-icon">
                        <Check size={20} />
                      </span>
                      <span>IIT Kanpur · B.Tech EE, 2026</span>
                    </div>
                  </div>
                  <a
                    className="text-link"
                    href="/about"
                  >
                    More about me <ArrowUpRight size={19} />
                  </a>
                </div>
              </div>
            </section>

            <section className="experience section-pad" id="experience">
              <div className="container experience-layout">
                <div className="experience-heading" data-reveal>
                  <p className="eyebrow mono">
                    <span className="section-number">03</span> / EXPERIENCE
                  </p>
                  <h2>
                    Where I’ve
                    <br />
                    <em>put it to work.</em>
                  </h2>
                  <p>
                    Research, production systems and a habit of asking what the
                    data really shows.
                  </p>
                </div>
                <div className="experience-list">
                  <article className="experience-item" data-reveal>
                    <div className="experience-year mono">2026</div>
                    <div>
                      <div className="experience-title">
                        <h3>Squarepoint Capital</h3>
                        <span>JUL — SEP 2026</span>
                      </div>
                      <p className="experience-role">
                        Systems Specialist · TradeFlowSupport
                      </p>
                      <p>
                        Triaged Linux, Kubernetes, storage and networking
                        incidents for global trading environments. Built a
                        parallel Bash/SSH diagnostic framework that cut manual
                        diagnostic effort by approximately 5×.
                      </p>
                      <div className="experience-tags">
                        <span>PRODUCTION SUPPORT</span>
                        <span>INCIDENT RESPONSE</span>
                        <span>LINUX</span>
                      </div>
                    </div>
                  </article>
                  <article className="experience-item" data-reveal>
                    <div className="experience-year mono">2025</div>
                    <div>
                      <div className="experience-title">
                        <h3>Samsung R&D Institute India</h3>
                        <span>MAY — JUL 2025</span>
                      </div>
                      <p className="experience-role">
                        Research Developer Intern · MAC/UL2
                      </p>
                      <p>
                        Studied LTE/NR scheduling and retransmissions in modem
                        logs, and tuned XGBoost models for modulation and coding
                        scheme prediction.
                      </p>
                      <div className="experience-tags">
                        <span>WIRELESS SYSTEMS</span>
                        <span>XGBOOST</span>
                        <span>DATA ANALYSIS</span>
                      </div>
                    </div>
                  </article>
                  <article className="experience-item" data-reveal>
                    <div className="experience-year mono">2022—26</div>
                    <div>
                      <div className="experience-title">
                        <h3>Indian Institute of Technology, Kanpur</h3>
                        <span>GRADUATED MAY 2026</span>
                      </div>
                      <p className="experience-role">
                        B.Tech · Electrical Engineering
                      </p>
                      <p>
                        Minors in Computer Systems, Machine Learning & Applications, and
                        Algorithms. Coursework and projects across systems,
                        networking, databases and statistical NLP.
                      </p>
                      <div className="experience-tags">
                        <span>SYSTEMS</span>
                        <span>ML</span>
                        <span>ALGORITHMS</span>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </section>

            <section className="contact section-pad" id="contact">
              <div className="container contact-inner" data-reveal>
                <p className="eyebrow mono">
                  <span className="section-number">04</span> / SAY HELLO
                </p>
                <h2>
                  Have a good
                  <br />
                  <em>problem to solve?</em>
                </h2>
                <p>
                  I’d love to hear about it. Reach out for engineering
                  opportunities, collaborations, or a thoughtful conversation.
                </p>
                <a
                  className="contact-email"
                  href="mailto:nikhilj22.iitk@gmail.com"
                >
                  nikhilj22.iitk@gmail.com <ArrowUpRight size={34} />
                </a>
                <div className="contact-links">
                  <a
                    href="https://www.linkedin.com/in/nikhil-jain-907100253"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={20} /> LinkedIn <ArrowUpRight size={16} />
                  </a>
                  <a
                    href="https://codeforces.com/profile/nikhilj22.iitk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Code2 size={20} /> Codeforces <ExternalLink size={15} />
                  </a>
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span className="wordmark-icon">
            NJ<span>.</span>
          </span>
          <p>© {new Date().getFullYear()} Nikhil Jain</p>
          <a href={isInnerPage ? `${pathname}#top` : "#top"}>
            Back to top <ArrowRight size={17} className="back-top-arrow" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
