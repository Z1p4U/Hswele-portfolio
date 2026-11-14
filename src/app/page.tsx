import Image from "next/image";
import { ScrollRevealObserver } from "@/components/scroll-reveal-observer";

const projects = [
  {
    number: "01",
    name: "Salespoint",
    category: "Retail · Point of sale",
    description:
      "A POS experience for desktop and mobile, bringing sales tracking, orders, products, customers, and business reporting into one clear system.",
    outcome: "Desktop dashboard + mobile sales system",
    image: "/images/salepoint.png",
    alt: "Salespoint point-of-sale dashboard shown on desktop and mobile",
    imageWidth: 1600,
    imageHeight: 1067,
    className: "project-card--salespoint",
  },
  {
    number: "02",
    name: "YC Fitness",
    category: "Mobile · Fitness",
    description:
      "A welcoming fitness app with personalized plans, progress tracking, and a simpler path from opening the app to starting a workout.",
    outcome: "35% fewer navigation steps",
    image: "/images/yc.png",
    alt: "YC Fitness app mark",
    imageWidth: 360,
    imageHeight: 360,
    className: "project-card--yc",
  },
  {
    number: "03",
    name: "Share Friend Thailand",
    category: "Mobile · Social",
    description:
      "Core social journeys for onboarding, profiles, discovery, matching, chat, notifications, and account management.",
    outcome: "Reusable mobile UI components",
    image: "/images/sf.png",
    alt: "Share Friend Thailand app mark",
    imageWidth: 160,
    imageHeight: 160,
    className: "project-card--share",
  },
  {
    number: "04",
    name: "360 Digital",
    category: "SaaS · Travel & hospitality",
    description:
      "End-to-end product design for travel and hospitality platforms, supported by a shared system that keeps complex products consistent.",
    outcome: "120+ components · 50+ production screens",
    image: "/images/360.png",
    alt: "360 Digital logo",
    imageWidth: 360,
    imageHeight: 360,
    className: "project-card--360",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Align on the product goals, user needs, business context, and technical constraints.",
  },
  {
    number: "02",
    title: "Structure",
    description:
      "Turn requirements into clear user flows, information architecture, and useful UX patterns.",
  },
  {
    number: "03",
    title: "Explore",
    description:
      "Shape ideas through wireframes, high-fidelity interfaces, and interactive prototypes.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Document the details, build reusable components, and work closely with engineers through handoff.",
  },
];

const skillGroups = [
  {
    title: "UX & research",
    skills: ["User research", "UX strategy", "Journey mapping", "Information architecture", "Accessibility"],
  },
  {
    title: "Product design",
    skills: ["Interaction design", "Prototyping", "Design systems", "Responsive UI", "Developer handoff"],
  },
  {
    title: "Tools",
    skills: ["Figma", "FigJam", "Photoshop", "Illustrator", "Cursor AI", "ChatGPT", "Claude AI", "Lovable"],
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hswele-ehin-tse-587b17258/",
  },
  {
    label: "Telegram",
    href: "https://t.me/hswele18",
  },
  {
    label: "GitHub",
    href: "https://github.com/hsweeleehintse",
  },
];


const tickerWords = [
  "UI/UX DESIGN",
  "USER RESEARCH",
  "PRODUCT DESIGN",
  "USER FLOWS",
  "WIREFRAMING",
  "PROTOTYPING",
  "INTERACTION DESIGN",
  "DESIGN SYSTEMS",
  "FIGMA",
  "ACCESSIBILITY",
  "USABILITY TESTING",
  "INFORMATION ARCHITECTURE",
  "RESPONSIVE DESIGN",
  "VISUAL DESIGN",
  "DEVELOPER HANDOFF",
  "PRODUCT THINKING",
  "DESIGN STRATEGY",
  "USER JOURNEYS",
];

export default function Home() {
  return (
    <>
      <ScrollRevealObserver />
      <header className="site-header" id="top">
        <a className="brand" href="#home" aria-label="Hswele Ehin Tse, home">
          <span className="brand-mark" aria-hidden="true">H</span>
          <span className="brand-copy">
            <strong>Hswele Ehin Tse</strong>
            <span>UI/UX & product designer</span>
          </span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#about">About</a>
          <a className="nav-cta" href="#contact">Let&apos;s talk <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
          <div className="hero-copy" data-reveal="left">
            <p className="eyebrow"><span className="status-dot" /> UI/UX & product designer <span className="eyebrow-location">· Bangkok, Thailand</span></p>
            <h1 id="hero-title">I make complex digital products feel <em>clear.</em></h1>
            <p className="hero-intro">
              Thoughtful, production-ready experiences across SaaS, travel, hospitality, entertainment, and enterprise products.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">Explore my work <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="/cv.pdf" download>Download CV <span aria-hidden="true">↓</span></a>
            </div>

            <div className="hero-stats" aria-label="Experience highlights">
              <div><strong>4+</strong><span>years in product design</span></div>
              <div><strong>80+</strong><span>production screens</span></div>
              <div><strong>120+</strong><span>design components</span></div>
            </div>
          </div>

          <div className="hero-visual" data-reveal="right">
            <div className="portrait-halo" aria-hidden="true" />
            <div className="portrait-frame">
              <Image
                src="/images/profile.png"
                alt="Portrait of Hswele Ehin Tse"
                fill
                priority
                sizes="(max-width: 760px) 80vw, 42vw"
                className="portrait-image"
              />
            </div>
            <div className="portrait-sticker">
              <span>Design with</span>
              <strong>purpose</strong>
              <span aria-hidden="true">✳</span>
            </div>
            <p className="portrait-caption">SaaS, travel & hospitality.<br />Clear thinking, useful products.</p>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[0, 1].map((copy) => (
              <div className="ticker-group" key={copy}>
                {tickerWords.map((word, index) => (
                  <span className="ticker-word" key={copy + "-" + index}>
                    {word}<i aria-hidden="true">✳</i>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section className="work-section section-space" id="work" aria-labelledby="work-title">
          <div className="section-wrap">
            <div className="section-heading section-heading-work" data-reveal="up">
              <div>
                <p className="eyebrow section-label"><span>01</span> Selected work</p>
                <h2 id="work-title">Good design makes hard things feel <em>natural.</em></h2>
              </div>
              <p className="section-aside">
                A selection of product work across retail, fitness, social experiences, travel, and hospitality.
              </p>
            </div>

            <div className="project-grid">
              {projects.map((project, index) => (
                <article
                  className={"project-card " + project.className}
                  data-reveal="up"
                  data-reveal-order={index}
                  key={project.number}
                >
                  <div className="project-art">
                    <span className="project-number">{project.number}</span>
                    <Image
                      src={project.image}
                      alt={project.alt}
                      width={project.imageWidth}
                      height={project.imageHeight}
                      className="project-image"
                      sizes="(max-width: 760px) 90vw, (max-width: 1100px) 45vw, 40vw"
                    />
                    {project.className === "project-card--salespoint" && (
                      <span className="art-caption">SALESPOINT · POS PLATFORM</span>
                    )}
                  </div>
                  <div className="project-copy">
                    <div className="project-title-row">
                      <div>
                        <p className="eyebrow project-category">{project.category}</p>
                        <h3>{project.name}</h3>
                      </div>
                                          </div>
                    <p className="project-description">{project.description}</p>
                    <p className="project-outcome"><span aria-hidden="true">✳</span> {project.outcome}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="process-section section-space" id="process" aria-labelledby="process-title">
          <div className="section-wrap">
            <div className="section-heading process-heading" data-reveal="up">
              <div>
                <p className="eyebrow section-label"><span>02</span> The process</p>
                <h2 id="process-title">A clear path from first question to <em>launch.</em></h2>
              </div>
              <p className="section-aside">
                The work moves from understanding the problem to making the solution practical for the people who use and build it.
              </p>
            </div>

            <ol className="process-grid">
              {processSteps.map((step, index) => (
                <li className="process-step" data-reveal="up" data-reveal-order={index} key={step.number}>
                  <span className="step-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="about-section section-space" id="about" aria-labelledby="about-title">
          <div className="section-wrap">
            <div className="section-heading about-heading" data-reveal="up">
              <div>
                <p className="eyebrow section-label"><span>03</span> A little about me</p>
                <h2 id="about-title">Design is where people, products, and <em>possibility</em> meet.</h2>
              </div>
              <div className="about-copy">
                <p>
                  I&apos;m a UI/UX and product designer based in Bangkok, creating digital products for SaaS, travel, hospitality, entertainment, and enterprise teams.
                </p>
                <p>
                  I work across user flows, wireframes, high-fidelity interfaces, interactive prototypes, and reusable design systems. I also partner closely with developers so the details stay useful from the first sketch through implementation.
                </p>
              </div>
            </div>

            <div className="about-lower">
              <div className="skills-panel" data-reveal="left">
                <p className="eyebrow panel-label">What I bring to the table</p>
                <div className="skill-groups">
                  {skillGroups.map((group) => (
                    <div className="skill-group" key={group.title}>
                      <h3>{group.title}</h3>
                      <div className="skill-list">
                        {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="experience-panel" data-reveal="right">
                <p className="eyebrow panel-label">Experience</p>
                <article className="experience-item">
                  <span className="experience-marker" aria-hidden="true" />
                  <div>
                    <p className="experience-dates">2025 — Present</p>
                    <h3>UI/UX Designer <span>· Develop X</span></h3>
                    <p>Led end-to-end design from research and wireframes through high-fidelity UI, prototyping, handoff, and post-launch validation.</p>
                  </div>
                </article>
                <article className="experience-item">
                  <span className="experience-marker" aria-hidden="true" />
                  <div>
                    <p className="experience-dates">2021 — 2025</p>
                    <h3>UI/UX Designer <span>· 360 Digital</span></h3>
                    <p>Grew from owning individual features to leading design for complex product work, systems, and cross-functional reviews.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section section-space" id="contact" aria-labelledby="contact-title">
          <div className="section-wrap contact-wrap">
            <div className="contact-kicker" data-reveal="up"><span className="status-dot" /> Bangkok, Thailand <span>·</span> Available for conversation</div>
            <div className="contact-main" data-reveal="up">
              <div>
                <p className="eyebrow section-label"><span>04</span> The next step</p>
                <h2 id="contact-title">Have a good problem? <em>Let&apos;s talk.</em></h2>
              </div>
              <a className="contact-email" href="mailto:hsweeleehintse@gmail.com">
                hsweeleehintse@gmail.com <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="contact-bottom" data-reveal="up">
              <p>For product design, collaboration, or a thoughtful introduction.</p>
              <div className="social-links">
                {socialLinks.map((link) => (
                  <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
                    {link.label}<span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="footer-brand" href="#top">Hswele Ehin Tse <span>© 2026</span></a>
        <p>Thoughtful design, from first sketch to shipped product.</p>
        <a className="back-to-top" href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
