import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail, MapPin, Github, Linkedin, ExternalLink, Download,
  Code2, Database, Wrench, Sparkles, GraduationCap, Award,
  Send, ArrowUpRight, Briefcase, Cpu, Globe,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const STUDENT = {
  name: "Rajkumar T",
  title: "Full Stack Developer",
  tagline: "Aspiring Java Developer",
  profilePic: "https://www.image2url.com/r2/default/images/1776362142827-5ecf2f53-4802-4066-95e3-e3c573e7df10.jpg",
  resume: "https://drive.google.com/file/d/13WzmAIAQ9y5HwKuvNusNA6hUs7G7wtle/view?usp=drivesdk",
  email: "trajkumarslm15@gmail.com",
  location: "Salem, Tamil Nadu",
  domain: "Web Developer",
  socials: {
    linkedin: "https://www.linkedin.com/in/rajkumar-t07",
    github: "https://github.com/Rajkumar-Thirupathi",
    portfolio: "https://www.linkedin.com/in/rajkumar-t07",
  },
  about: {
    short: "Software developer with knowledge in Java, Spring Boot, MySQL, and responsive web development.",
    long: "Motivated and detail-oriented software developer with knowledge in Core Java, Spring Boot, MySQL, HTML, CSS, and JavaScript. Skilled in developing responsive web applications and working with databases. Able to write clean and efficient code with good problem-solving skills. Passionate about learning new technologies and improving technical knowledge. Interested in contributing to projects that create better user experience and solve real-world problems.",
  },
  typingRoles: ["Java Developer", "Full Stack Developer", "Web Developer"],
};

const LOGO_URL = "https://tapportfolio.lovable.app/assets/logo-CxDGoOCE.png";

const SKILLS = [
  { group: "Frontend", icon: Globe, items: ["HTML", "CSS", "JavaScript", "React"] },
  { group: "Backend", icon: Code2, items: ["Core Java", "Spring Boot", "Hibernate", "JDBC", "REST API"] },
  { group: "Databases", icon: Database, items: ["MySQL"] },
  { group: "Tools", icon: Wrench, items: ["VS Code", "Eclipse", "GitHub"] },
  { group: "AI Tools", icon: Sparkles, items: ["ChatGPT", "Claude", "Lovable AI"] },
];

const PROJECTS = [
  {
    title: "Personal Portfolio",
    status: "Completed",
    category: "Web Application",
    description:
      "Designed and developed a responsive personal portfolio website to showcase skills, projects, and contact details using modern web technologies.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    demo: "https://www.linkedin.com/in/rajkumar-t07",
    github: "https://www.linkedin.com/in/rajkumar-t07",
  },
  {
    title: "AI-Based Medical Imaging for Early Lung Cancer Detection",
    status: "Completed",
    category: "AI / Machine Learning",
    description:
      "Developed an AI-based medical imaging system for early lung cancer detection using deep neural networks. Analyzes CT & PET scan images to identify abnormal patterns and improve early diagnosis accuracy.",
    tech: ["Python", "Deep Learning", "CNN", "TensorFlow", "OpenCV", "NumPy", "Pandas"],
    demo: "https://www.linkedin.com/in/rajkumar-t07",
    github: "https://www.linkedin.com/in/rajkumar-t07",
  },
];

const EDUCATION = [
  {
    degree: "B.E. Biomedical Engineering",
    institute: "Sona College of Technology",
    location: "Salem, Tamil Nadu",
    status: "Expected 2026",
    description:
      "Hands-on knowledge in healthcare systems, programming, project development, and innovation.",
  },
  {
    degree: "HSC",
    institute: "Jay Matric Higher Secondary School",
    location: "Salem, Tamil Nadu",
    status: "Completed 2020",
    description: "Percentage: 66.6",
  },
  {
    degree: "SSLC",
    institute: "Jay Matriculation School",
    location: "Salem, Tamil Nadu",
    status: "Completed 2022",
    description: "Percentage: 60.8",
  },
];

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

/* ---------------- Typing animation hook ---------------- */
function useTyping(words: string[], typeSpeed = 90, pause = 1400) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    const speed = deleting ? typeSpeed / 2 : typeSpeed;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), pause);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setI((p) => p + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i, words, typeSpeed, pause]);

  return text;
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- Navbar ---------------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-300 ${
            scrolled ? "glass-strong glow-shadow" : "glass"
          }`}
        >
          <a href="#home" className="flex items-center gap-2 group">
            <img
              src={LOGO_URL}
              alt="TAP Academy"
              className="h-9 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="relative px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors after:absolute after:left-3 after:right-3 after:bottom-1 after:h-px after:bg-gradient-to-r after:from-primary after:to-accent after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={STUDENT.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl gradient-bg px-4 py-2 text-sm font-semibold text-primary-foreground glow-shadow hover:scale-105 transition-transform"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <button
              aria-label="Menu"
              className="md:hidden p-2 rounded-lg glass"
              onClick={() => setOpen((v) => !v)}
            >
              <div className="space-y-1.5">
                <span className={`block h-0.5 w-5 bg-foreground transition ${open ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`block h-0.5 w-5 bg-foreground transition ${open ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-5 bg-foreground transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-4 animate-fade-in">
            <div className="flex flex-col gap-1">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/5"
                >
                  {n.label}
                </a>
              ))}
              <a
                href={STUDENT.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl gradient-bg px-4 py-2 text-sm font-semibold text-primary-foreground"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  const typed = useTyping(STUDENT.typingRoles);
  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 gradient-hero pointer-events-none" />
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      {/* floating orbs */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-[glow-pulse_4s_ease-in-out_infinite]" />
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl animate-[glow-pulse_5s_ease-in-out_infinite]" />

      <div className="relative mx-auto max-w-7xl px-4 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Open for opportunities
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
              Hi, I'm <span className="gradient-text">{STUDENT.name}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-4 text-xl sm:text-2xl text-muted-foreground h-9">
              I'm a{" "}
              <span className="text-foreground font-semibold">
                {typed}
                <span className="inline-block w-0.5 h-6 bg-accent align-middle ml-0.5 animate-[blink_1s_step-end_infinite]" />
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground">
              {STUDENT.tagline}. {STUDENT.about.short}
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl gradient-bg px-5 py-3 font-semibold text-primary-foreground glow-shadow hover:scale-105 transition-transform"
              >
                View Projects <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 font-semibold hover:border-primary/50 hover-lift"
              >
                Contact Me <Mail className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.5}>
            <div className="mt-8 flex items-center gap-4 text-muted-foreground">
              <a href={STUDENT.socials.github} target="_blank" rel="noreferrer" className="hover:text-foreground transition hover:scale-110"><Github className="h-5 w-5" /></a>
              <a href={STUDENT.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground transition hover:scale-110"><Linkedin className="h-5 w-5" /></a>
              <a href={`mailto:${STUDENT.email}`} className="hover:text-foreground transition hover:scale-110"><Mail className="h-5 w-5" /></a>
              <span className="inline-flex items-center gap-1.5 text-sm"><MapPin className="h-4 w-4" />{STUDENT.location}</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="relative mx-auto w-fit">
            <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-primary to-accent blur-2xl opacity-60 animate-[glow-pulse_4s_ease-in-out_infinite]" />
            <div className="relative h-72 w-72 sm:h-80 sm:w-80 rounded-full p-[3px] gradient-bg animate-[float_6s_ease-in-out_infinite]">
              <div className="h-full w-full rounded-full overflow-hidden bg-card glass-strong">
                <img
                  src={STUDENT.profilePic}
                  alt={STUDENT.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            {/* floating chips */}
            <div className="absolute -left-6 top-10 glass rounded-xl px-3 py-2 text-xs animate-[float_5s_ease-in-out_infinite]">
              <Cpu className="inline h-4 w-4 mr-1 text-accent" /> Java • Spring
            </div>
            <div className="absolute -right-6 bottom-10 glass rounded-xl px-3 py-2 text-xs animate-[float_7s_ease-in-out_infinite]">
              <Code2 className="inline h-4 w-4 mr-1 text-primary" /> React • REST
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Section heading ---------------- */
function SectionHeader({ tag, title, subtitle }: { tag: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      <Reveal>
        <span className="inline-block rounded-full glass px-3 py-1 text-xs text-accent uppercase tracking-widest">
          {tag}
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-4 text-3xl sm:text-5xl font-bold">
          {title.split(" ").map((w, i, arr) =>
            i === arr.length - 1 ? <span key={i} className="gradient-text"> {w}</span> : <span key={i}>{i > 0 ? " " : ""}{w}</span>
          )}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p className="mt-3 text-muted-foreground">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------------- About ---------------- */
function About() {
  const stats = [
    { label: "Projects", value: "2+" },
    { label: "Experience", value: "Fresher" },
    { label: "Domain", value: STUDENT.domain },
    { label: "Location", value: "Salem, TN" },
  ];
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader tag="About" title="A bit about me" />
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 items-stretch">
          <Reveal>
            <div className="glass rounded-2xl p-6 hover-lift h-full">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl gradient-bg flex items-center justify-center glow-shadow">
                  <Briefcase className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Currently</p>
                  <p className="font-semibold">{STUDENT.title}</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-xl glass p-4">
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                    <p className="mt-1 font-semibold gradient-text">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="glass rounded-2xl p-6 sm:p-8 hover-lift h-full">
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                {STUDENT.about.long}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Problem Solving", "Clean Code", "Team Player", "Fast Learner"].map((t) => (
                  <span key={t} className="rounded-full glass px-3 py-1 text-xs text-foreground/90">{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Skills ---------------- */
function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader tag="Skills" title="My tech toolkit" subtitle="Tools and technologies I work with day-to-day." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.group} delay={i * 0.08}>
                <div className="group glass rounded-2xl p-6 hover-lift h-full">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-xl gradient-bg flex items-center justify-center glow-shadow">
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold">{s.group}</h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.items.map((it) => (
                      <span
                        key={it}
                        className="rounded-lg glass px-3 py-1.5 text-sm text-foreground/90 transition hover:text-foreground hover:border-primary/50 hover:shadow-[0_0_20px_oklch(0.72_0.19_305_/_0.35)]"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Projects ---------------- */
function Projects() {
  const categories = useMemo(() => ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))], []);
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader tag="Projects" title="Things I've built" subtitle="A selection of academic and personal projects." />

        <Reveal>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  filter === c
                    ? "gradient-bg text-primary-foreground glow-shadow"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <article className="group glass rounded-2xl p-6 sm:p-7 hover-lift h-full flex flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-block text-xs rounded-full glass px-2.5 py-1 text-accent">{p.category}</span>
                    <h3 className="mt-3 text-xl sm:text-2xl font-semibold leading-snug group-hover:gradient-text transition">{p.title}</h3>
                  </div>
                  <span className="shrink-0 text-xs rounded-full bg-emerald-400/15 text-emerald-300 border border-emerald-400/30 px-2.5 py-1">
                    {p.status}
                  </span>
                </div>
                <p className="mt-3 text-muted-foreground">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-md glass px-2.5 py-1 text-xs">{t}</span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3 pt-5 border-t border-white/10">
                  <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm gradient-text font-semibold hover:opacity-80">
                    Live Demo <ExternalLink className="h-4 w-4" />
                  </a>
                  <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
                    <Github className="h-4 w-4" /> Code
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Education ---------------- */
function Education() {
  return (
    <section id="education" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeader tag="Education" title="My academic journey" />
        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent -translate-x-1/2" />
          <div className="space-y-10">
            {EDUCATION.map((e, i) => (
              <Reveal key={e.degree} delay={i * 0.1}>
                <div className={`relative grid sm:grid-cols-2 gap-6 sm:gap-10 ${i % 2 === 0 ? "" : "sm:[direction:rtl]"}`}>
                  <div className={`pl-12 sm:pl-0 ${i % 2 === 0 ? "sm:text-right sm:pr-10" : "sm:[direction:ltr] sm:pl-10"}`}>
                    <div className="glass rounded-2xl p-5 hover-lift inline-block w-full">
                      <div className="flex items-center gap-3 sm:justify-end">
                        <GraduationCap className="h-5 w-5 text-accent" />
                        <h3 className="font-semibold text-lg">{e.degree}</h3>
                      </div>
                      <p className="mt-1 text-muted-foreground">{e.institute}</p>
                      <p className="text-sm text-muted-foreground/80">{e.location} • {e.status}</p>
                      <p className="mt-3 text-sm text-foreground/80">{e.description}</p>
                    </div>
                  </div>
                  <div className="hidden sm:block" />
                  <span className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 h-4 w-4 rounded-full gradient-bg glow-shadow ring-4 ring-background" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Certifications ---------------- */
function Certifications() {
  return (
    <section id="certifications" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeader tag="Certifications" title="Credentials & badges" />
        <Reveal>
          <div className="glass rounded-2xl p-10 text-center hover-lift">
            <div className="mx-auto h-14 w-14 rounded-2xl gradient-bg flex items-center justify-center glow-shadow">
              <Award className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="mt-5 text-xl font-semibold">Certifications coming soon</h3>
            <p className="mt-2 text-muted-foreground max-w-md mx-auto">
              Currently pursuing certifications in Java, Spring Boot, and Full Stack Development. Check back soon!
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
function CTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glass-strong p-10 sm:p-14 text-center">
            <div className="absolute inset-0 gradient-hero pointer-events-none" />
            <div className="absolute -top-20 -left-10 h-60 w-60 rounded-full bg-primary/30 blur-3xl" />
            <div className="absolute -bottom-20 -right-10 h-60 w-60 rounded-full bg-accent/30 blur-3xl" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-accent uppercase tracking-widest">
                <Sparkles className="h-3.5 w-3.5" /> Available
              </span>
              <h2 className="mt-5 text-3xl sm:text-5xl font-bold">
                Let's <span className="gradient-text">work together!</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                Have an opportunity, internship or project? I'd love to hear about it and see how I can contribute.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a href="#contact" className="inline-flex items-center gap-2 rounded-xl gradient-bg px-5 py-3 font-semibold text-primary-foreground glow-shadow hover:scale-105 transition-transform">
                  Get in touch <ArrowUpRight className="h-4 w-4" />
                </a>
                <a href={STUDENT.resume} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 font-semibold hover-lift">
                  <Download className="h-4 w-4" /> Resume
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} <${form.email}>`);
    window.location.href = `mailto:${STUDENT.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader tag="Contact" title="Get in touch" subtitle="Drop a message — I'll get back as soon as possible." />
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-6">
          <Reveal>
            <div className="glass rounded-2xl p-6 sm:p-7 hover-lift h-full">
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <p className="mt-2 text-muted-foreground text-sm">Feel free to reach out via any of the channels below.</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-xl gradient-bg flex items-center justify-center glow-shadow shrink-0">
                    <Mail className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs">Email</p>
                    <a href={`mailto:${STUDENT.email}`} className="hover:gradient-text break-all">{STUDENT.email}</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-xl gradient-bg flex items-center justify-center glow-shadow shrink-0">
                    <MapPin className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs">Location</p>
                    <p>{STUDENT.location}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-xl gradient-bg flex items-center justify-center glow-shadow shrink-0">
                    <Linkedin className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs">LinkedIn</p>
                    <a href={STUDENT.socials.linkedin} target="_blank" rel="noreferrer" className="hover:gradient-text">rajkumar-t07</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-xl gradient-bg flex items-center justify-center glow-shadow shrink-0">
                    <Github className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs">GitHub</p>
                    <a href={STUDENT.socials.github} target="_blank" rel="noreferrer" className="hover:gradient-text">Rajkumar-Thirupathi</a>
                  </div>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-7 hover-lift h-full">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-muted-foreground">Your Name</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-1 w-full rounded-xl bg-background/40 border border-white/10 px-4 py-3 text-sm outline-none focus:border-primary/60 focus:shadow-[0_0_30px_oklch(0.72_0.19_305_/_0.35)] transition"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground">Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-1 w-full rounded-xl bg-background/40 border border-white/10 px-4 py-3 text-sm outline-none focus:border-primary/60 focus:shadow-[0_0_30px_oklch(0.72_0.19_305_/_0.35)] transition"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="text-xs text-muted-foreground">Message</label>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1 w-full rounded-xl bg-background/40 border border-white/10 px-4 py-3 text-sm outline-none focus:border-primary/60 focus:shadow-[0_0_30px_oklch(0.72_0.19_305_/_0.35)] transition resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              <button
                type="submit"
                className="mt-5 inline-flex items-center gap-2 rounded-xl gradient-bg px-5 py-3 font-semibold text-primary-foreground glow-shadow hover:scale-105 transition-transform"
              >
                {sent ? "Opening mail..." : "Send Message"} <Send className="h-4 w-4" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-white/10 mt-10">
      <div className="mx-auto max-w-7xl px-4 py-10 grid sm:grid-cols-3 gap-6 items-center">
        <div className="flex items-center gap-3">
          <img src={LOGO_URL} alt="TAP Academy" className="h-9 w-auto" />
        </div>
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} <span className="gradient-text font-semibold">{STUDENT.name}</span>. All rights reserved.
        </p>
        <div className="flex sm:justify-end gap-3">
          <a href={STUDENT.socials.github} target="_blank" rel="noreferrer" className="h-10 w-10 rounded-xl glass flex items-center justify-center hover-lift"><Github className="h-4 w-4" /></a>
          <a href={STUDENT.socials.linkedin} target="_blank" rel="noreferrer" className="h-10 w-10 rounded-xl glass flex items-center justify-center hover-lift"><Linkedin className="h-4 w-4" /></a>
          <a href={`mailto:${STUDENT.email}`} className="h-10 w-10 rounded-xl glass flex items-center justify-center hover-lift"><Mail className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Page ---------------- */
function Portfolio() {
  return (
    <main className="min-h-screen text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
