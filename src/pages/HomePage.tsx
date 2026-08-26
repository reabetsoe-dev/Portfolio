import { type FormEvent, useMemo, useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Send,
  X,
} from "lucide-react";
import { IconByName } from "../utils/iconMap";
import { academicProfile } from "../data/academic";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { services } from "../data/services";
import { skillCategories } from "../data/skills";
import { socials, type SocialKey } from "../data/socials";

const accent = "text-[#ff0050]";
const accentBg = "bg-[#ff0050]";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Resume", href: "#resume" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialItems: Array<{
  key: SocialKey;
  label: string;
  icon: typeof Github;
  getHref: (value: string) => string;
}> = [
  { key: "email", label: "Email", icon: Mail, getHref: (value) => `mailto:${value}` },
  { key: "linkedin", label: "LinkedIn", icon: Linkedin, getHref: (value) => value },
  { key: "github", label: "GitHub", icon: Github, getHref: (value) => value },
  { key: "whatsapp", label: "WhatsApp", icon: MessageCircle, getHref: (value) => value },
];

const resumeProjectEntries = [
  {
    sourceId: "ai-drug-review",
    title: "AIDrugReview",
    category: "AI / Machine Learning Software Project",
    role: "AI / Software Developer",
    bullets: [
      "Developed an NLP-based machine learning pipeline for classifying patient drug review text into supported condition categories.",
      "Trained and compared Logistic Regression and Multinomial Naive Bayes models using TF-IDF text features.",
      "Integrated FastAPI services with a Streamlit dashboard for predictions, medication recommendation ranking, confidence results and PDF report generation.",
    ],
    technologies: ["Python", "Machine Learning", "NLP", "FastAPI", "Streamlit", "Scikit-learn", "NLTK", "TF-IDF"],
  },
  {
    sourceId: "lec-intellisupport",
    title: "LEC IntelliSupport",
    category: "Software Engineering Project",
    role: "Project Manager / Software Developer",
    bullets: [
      "Applied database and software engineering principles to an intelligent IT support and fault-management project for an organizational context.",
      "Supported data handling, system analysis, documentation and project coordination for a structured support workflow.",
      "Organized project scope around information tracking, fault-management processes and practical software delivery requirements.",
    ],
    technologies: ["System Analysis", "Database Systems", "Documentation", "Project Management"],
  },
  {
    sourceId: "e-commerce-system",
    title: "E-Commerce System",
    category: "Full-Stack E-Commerce Platform",
    role: "Full-Stack Developer",
    bullets: [
      "Built a Datamak Technologies-branded e-commerce platform with a React/Vite web frontend, Express REST API and PostgreSQL-backed data layer.",
      "Implemented JWT/bcrypt authentication with customer and admin roles, protected routes, profile updates, password reset tokens, catalog browsing, search, filtering and sorting.",
      "Delivered cart, wishlist, recently viewed, checkout with simulated payment, order history/details and admin tools for products, image uploads, users, order status updates and sales summaries.",
      "Extended the commerce workflows into an Expo React Native mobile app with product, hosting, cart, wishlist, order, profile and admin screens.",
    ],
    technologies: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "JWT", "bcryptjs", "Axios", "React Native", "Expo"],
  },
  {
    sourceId: "autoworld",
    title: "AutoWorld",
    category: "Automotive Web Platform Project",
    role: "Software Developer / Project Owner",
    bullets: [
      "Structured an automotive web platform concept around clearer vehicle information and marketplace activity.",
      "Designed project presentation content for buyer and seller workflows, automotive technology positioning and web platform planning.",
      "Prepared the portfolio project area to support deeper implementation notes as additional project evidence becomes available.",
    ],
    technologies: ["Vehicle Marketplace", "Automotive Technology", "Web Platform"],
  },
].map((entry) => {
  const source = projects.find((project) => project.id === entry.sourceId);

  return {
    ...entry,
    github: source?.github,
    liveDemo: source?.liveDemo,
  };
});

const skillIconStyles: Record<string, { mark: string; color: string; background: string; border: string }> = {
  JavaScript: { mark: "JS", color: "#f7df1e", background: "rgba(247, 223, 30, 0.12)", border: "rgba(247, 223, 30, 0.28)" },
  TypeScript: { mark: "TS", color: "#3178c6", background: "rgba(49, 120, 198, 0.14)", border: "rgba(49, 120, 198, 0.32)" },
  Python: { mark: "Py", color: "#4b8bbe", background: "rgba(75, 139, 190, 0.14)", border: "rgba(75, 139, 190, 0.32)" },
  "Node.js": { mark: "Node", color: "#68a063", background: "rgba(104, 160, 99, 0.14)", border: "rgba(104, 160, 99, 0.32)" },
  "Express.js": { mark: "Ex", color: "#ffffff", background: "rgba(255, 255, 255, 0.1)", border: "rgba(255, 255, 255, 0.22)" },
  "Next Js": { mark: "Next", color: "#ffffff", background: "rgba(255, 255, 255, 0.1)", border: "rgba(255, 255, 255, 0.22)" },
  React: { mark: "R", color: "#61dafb", background: "rgba(97, 218, 251, 0.12)", border: "rgba(97, 218, 251, 0.3)" },
  "React Native": { mark: "RN", color: "#61dafb", background: "rgba(97, 218, 251, 0.12)", border: "rgba(97, 218, 251, 0.3)" },
  Django: { mark: "Dj", color: "#44b78b", background: "rgba(68, 183, 139, 0.12)", border: "rgba(68, 183, 139, 0.3)" },
  FastAPI: { mark: "API", color: "#009688", background: "rgba(0, 150, 136, 0.14)", border: "rgba(0, 150, 136, 0.32)" },
  Streamlit: { mark: "St", color: "#ff4b4b", background: "rgba(255, 75, 75, 0.14)", border: "rgba(255, 75, 75, 0.32)" },
  "Scikit-learn": { mark: "SK", color: "#f89939", background: "rgba(248, 153, 57, 0.14)", border: "rgba(248, 153, 57, 0.32)" },
  "Machine Learning / NLP": { mark: "ML", color: "#ff0050", background: "rgba(255, 0, 80, 0.12)", border: "rgba(255, 0, 80, 0.32)" },
  "REST APIs": { mark: "API", color: "#38bdf8", background: "rgba(56, 189, 248, 0.12)", border: "rgba(56, 189, 248, 0.3)" },
  PostgreSQL: { mark: "PG", color: "#336791", background: "rgba(51, 103, 145, 0.14)", border: "rgba(51, 103, 145, 0.32)" },
  MongoDB: { mark: "MDB", color: "#47a248", background: "rgba(71, 162, 72, 0.14)", border: "rgba(71, 162, 72, 0.32)" },
  Firebase: { mark: "Fb", color: "#ffca28", background: "rgba(255, 202, 40, 0.14)", border: "rgba(255, 202, 40, 0.32)" },
  "Tailwind CSS": { mark: "Tw", color: "#38bdf8", background: "rgba(56, 189, 248, 0.12)", border: "rgba(56, 189, 248, 0.3)" },
  HTML: { mark: "H5", color: "#e34f26", background: "rgba(227, 79, 38, 0.12)", border: "rgba(227, 79, 38, 0.3)" },
  CSS: { mark: "C3", color: "#1572b6", background: "rgba(21, 114, 182, 0.14)", border: "rgba(21, 114, 182, 0.32)" },
  MySQL: { mark: "SQL", color: "#00a3a3", background: "rgba(0, 163, 163, 0.12)", border: "rgba(0, 163, 163, 0.3)" },
  Docker: { mark: "D", color: "#2496ed", background: "rgba(36, 150, 237, 0.14)", border: "rgba(36, 150, 237, 0.32)" },
  Linux: { mark: "Ln", color: "#facc15", background: "rgba(250, 204, 21, 0.12)", border: "rgba(250, 204, 21, 0.28)" },
  "Git/GitHub": { mark: "Git", color: "#ffffff", background: "rgba(255, 255, 255, 0.1)", border: "rgba(255, 255, 255, 0.22)" },
  "Visual Studio Code": { mark: "VS", color: "#007acc", background: "rgba(0, 122, 204, 0.14)", border: "rgba(0, 122, 204, 0.32)" },
  "Networking Fundamentals": { mark: "Net", color: "#38bdf8", background: "rgba(56, 189, 248, 0.12)", border: "rgba(56, 189, 248, 0.3)" },
  "TCP/IP": { mark: "IP", color: "#38bdf8", background: "rgba(56, 189, 248, 0.12)", border: "rgba(56, 189, 248, 0.3)" },
  "Cisco Packet Tracer": { mark: "CPT", color: "#00bceb", background: "rgba(0, 188, 235, 0.12)", border: "rgba(0, 188, 235, 0.3)" },
  "Wireless Networking": { mark: "WiFi", color: "#38bdf8", background: "rgba(56, 189, 248, 0.12)", border: "rgba(56, 189, 248, 0.3)" },
  "Cybersecurity Fundamentals": { mark: "Sec", color: "#ff0050", background: "rgba(255, 0, 80, 0.12)", border: "rgba(255, 0, 80, 0.32)" },
  "Network Security Concepts": { mark: "NS", color: "#ff0050", background: "rgba(255, 0, 80, 0.12)", border: "rgba(255, 0, 80, 0.32)" },
  "Fortinet Training": { mark: "Ft", color: "#ff0050", background: "rgba(255, 0, 80, 0.12)", border: "rgba(255, 0, 80, 0.32)" },
  "Information Technology Law": { mark: "Law", color: "#ff0050", background: "rgba(255, 0, 80, 0.12)", border: "rgba(255, 0, 80, 0.32)" },
  "Database Systems": { mark: "DB", color: "#00a3a3", background: "rgba(0, 163, 163, 0.12)", border: "rgba(0, 163, 163, 0.3)" },
  "Data Warehousing": { mark: "DW", color: "#00a3a3", background: "rgba(0, 163, 163, 0.12)", border: "rgba(0, 163, 163, 0.3)" },
  "Software Project Management": { mark: "PM", color: "#ff0050", background: "rgba(255, 0, 80, 0.12)", border: "rgba(255, 0, 80, 0.32)" },
  "System Analysis": { mark: "SA", color: "#ff0050", background: "rgba(255, 0, 80, 0.12)", border: "rgba(255, 0, 80, 0.32)" },
  Documentation: { mark: "Doc", color: "#ffffff", background: "rgba(255, 255, 255, 0.1)", border: "rgba(255, 255, 255, 0.22)" },
  "Microsoft Office": { mark: "365", color: "#f25022", background: "rgba(242, 80, 34, 0.12)", border: "rgba(242, 80, 34, 0.3)" },
  "Artificial Intelligence": { mark: "AI", color: "#ff0050", background: "rgba(255, 0, 80, 0.12)", border: "rgba(255, 0, 80, 0.32)" },
};

const skillBrandIcons: Record<string, string> = {
  JavaScript: "/skills/javascript.svg",
  TypeScript: "/skills/typescript.svg",
  Python: "/skills/python.svg",
  "Node.js": "/skills/nodejs.svg",
  "Express.js": "/skills/express.svg",
  "Next Js": "/skills/nextjs.svg",
  React: "/skills/react.svg",
  "React Native": "/skills/react.svg",
  Django: "/skills/django.svg",
  FastAPI: "/skills/fastapi.svg",
  Streamlit: "/skills/streamlit.svg",
  "Scikit-learn": "/skills/scikitlearn.svg",
  PostgreSQL: "/skills/postgresql.svg",
  MongoDB: "/skills/mongodb.svg",
  Firebase: "/skills/firebase.svg",
  "Tailwind CSS": "/skills/tailwindcss.svg",
  HTML: "/skills/html5.svg",
  CSS: "/skills/css3.svg",
  MySQL: "/skills/mysql.svg",
  Docker: "/skills/docker.svg",
  Linux: "/skills/linux.svg",
  "Git/GitHub": "/skills/git.svg",
  "Visual Studio Code": "/skills/vscode.svg",
};

function getSkillIcon(skill: string) {
  const fallbackMark = skill
    .split(/[ /&-]+/)
    .filter(Boolean)
    .slice(0, 3)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    skillIconStyles[skill] ?? {
      mark: fallbackMark || "SK",
      color: "#ff0050",
      background: "rgba(255, 0, 80, 0.12)",
      border: "rgba(255, 0, 80, 0.32)",
    }
  );
}

const skillItems = skillCategories.flatMap((category) =>
  category.skills.map((skill) => ({ skill, category: category.title })),
);

const aboutHighlights = [
  "Build responsive interfaces for web experiences.",
  "Use AI, data and software engineering to support real workflows.",
  "Design with reliability, security and usability in mind.",
  "Keep solutions practical, readable and easy to improve.",
];

const contactStrengths = [
  "Intelligent digital solutions",
  "Reliable web interfaces",
  "User-focused problem solving",
  "Academic and freelance collaboration",
];

function SectionHeader({
  eyebrow,
  title,
  highlight,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/80">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
        {title}
        {highlight ? <span className={accent}> {highlight}</span> : null}
      </h2>
    </div>
  );
}

function SocialButtons({ className = "", keys }: { className?: string; keys?: SocialKey[] }) {
  const visibleItems = keys ? socialItems.filter((item) => keys.includes(item.key)) : socialItems;

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {visibleItems.map((item) => {
        const value = socials[item.key];
        const Icon = item.icon;

        if (!value) {
          return null;
        }

        return (
          <a
            key={item.key}
            href={item.getHref(value)}
            target={item.key === "email" ? undefined : "_blank"}
            rel={item.key === "email" ? undefined : "noreferrer"}
            aria-label={item.label}
            title={item.label}
            className="grid h-11 w-11 place-items-center rounded-md border border-white/10 bg-white/[0.06] text-[#ff0050] transition hover:-translate-y-0.5 hover:border-[#ff0050] hover:bg-[#ff0050] hover:text-white"
          >
            <Icon aria-hidden="true" className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
}

function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const mailtoHref = useMemo(() => {
    const subject = values.subject.trim() || "Portfolio project enquiry";
    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone}`,
      "",
      values.message,
    ].join("\n");

    return `mailto:${profile.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [values]);

  function updateField(field: keyof typeof values, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = mailtoHref;
  }

  const inputClass =
    "h-14 rounded-md border border-white/5 bg-[#1f1f1f] px-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#ff0050] focus:shadow-[0_0_0_4px_rgba(255,0,80,0.12)]";

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-white">
          Full Name
          <input
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            className={inputClass}
            placeholder="Your name"
            autoComplete="name"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-white">
          Email Address
          <input
            type="email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            className={inputClass}
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-white">
          Phone Number
          <input
            value={values.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className={inputClass}
            placeholder="+266 ..."
            autoComplete="tel"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-white">
          Subject
          <input
            value={values.subject}
            onChange={(event) => updateField("subject", event.target.value)}
            className={inputClass}
            placeholder="I have a project for you"
            required
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-semibold text-white">
        Message
        <textarea
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="min-h-36 resize-y rounded-md border border-white/5 bg-[#1f1f1f] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#ff0050] focus:shadow-[0_0_0_4px_rgba(255,0,80,0.12)]"
          placeholder="Write your message..."
          required
        />
      </label>

      <button
        type="submit"
        className={`${accentBg} inline-flex h-12 w-full items-center justify-center gap-2 rounded-md px-5 text-sm font-bold text-white shadow-[0_16px_34px_-18px_rgba(255,0,80,0.95)] transition hover:-translate-y-0.5 hover:bg-[#ff1f66] sm:w-max`}
      >
        Send Message
        <Send aria-hidden="true" className="h-4 w-4" />
      </button>
    </form>
  );
}

export function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#101010] text-white">
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:88px_88px]" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_-10%,rgba(255,0,80,0.28),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_22%)]" />

      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#151515]/95 backdrop-blur-xl">
        <nav className="section-shell flex items-center justify-between gap-4 py-4">
          <a
            href="#home"
            className="inline-flex min-h-10 min-w-0 items-center gap-1 truncate text-base font-black tracking-tight text-white sm:text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className={accent}>Reabetsoe</span>
            <span>Sephekola</span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-bold text-white/85 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="inline-flex min-h-10 items-center rounded-md px-2 transition hover:text-[#ff0050]">
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href="#contact"
              className={`${accentBg} hidden h-11 items-center justify-center rounded-md px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#ff1f66] sm:inline-flex`}
            >
              Hire Me
            </a>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-md border border-white/10 bg-white/[0.06] text-[#ff0050] transition hover:border-[#ff0050] hover:bg-[#ff0050] hover:text-white lg:hidden"
              aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((current) => !current)}
            >
              {isMenuOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        <div className={`${isMenuOpen ? "block" : "hidden"} section-shell pb-4 lg:hidden`}>
          <div className="grid gap-1 rounded-md border border-white/10 bg-[#1b1b1b] p-2 shadow-[0_24px_70px_-46px_rgba(0,0,0,0.85)] sm:grid-cols-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex min-h-11 items-center rounded-md px-3 text-sm font-bold text-white/80 transition hover:bg-white/[0.06] hover:text-[#ff0050]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className={`${accentBg} inline-flex min-h-11 items-center justify-center rounded-md px-3 text-sm font-bold text-white transition hover:bg-[#ff1f66] sm:hidden`}
              onClick={() => setIsMenuOpen(false)}
            >
              Hire Me
            </a>
          </div>
        </div>
      </header>

      <section id="home" className="section-shell grid min-h-[calc(100vh-76px)] items-center gap-10 py-12 sm:gap-12 sm:py-16 lg:grid-cols-[1fr_0.95fr]">
        <div className="min-w-0">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-white/80">Hello, I'm</p>
          <h1
            className="mt-4 max-w-[360px] break-words text-4xl font-black leading-none text-white sm:max-w-none sm:text-6xl lg:text-7xl"
            style={{ overflowWrap: "anywhere" }}
          >
            <span className={accent}>Reabetsoe</span> Sephekola
          </h1>
          <p
            className="mt-6 max-w-[360px] text-lg font-bold leading-tight text-[#ff0050] sm:max-w-3xl sm:text-3xl"
            style={{ overflowWrap: "anywhere" }}
          >
            {profile.intro}
          </p>
          <p
            className="mt-7 max-w-[360px] text-sm leading-7 text-white/72 sm:max-w-2xl sm:text-lg sm:leading-8"
            style={{ overflowWrap: "anywhere" }}
          >
            {profile.about}
          </p>

          <div className="mt-10">
            <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              {profile.cv.available ? (
                <a
                  href={profile.cv.url}
                  download={profile.cv.fileName}
                  className={`${accentBg} inline-flex h-12 items-center justify-center gap-2 rounded-md px-6 text-sm font-bold text-white shadow-[0_16px_34px_-18px_rgba(255,0,80,0.95)] transition hover:-translate-y-0.5 hover:bg-[#ff1f66]`}
                >
                  {profile.cv.label}
                  <Download aria-hidden="true" className="h-4 w-4" />
                </a>
              ) : null}
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-[#ff0050]/60 px-6 text-sm font-bold text-[#ff0050] transition hover:-translate-y-0.5 hover:bg-[#ff0050] hover:text-white"
              >
                Contact Me
                <Mail aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
            <SocialButtons className="mt-4 justify-start" keys={["linkedin", "github", "whatsapp"]} />
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[320px] sm:max-w-[460px] lg:max-w-[520px]">
          <div className="absolute inset-5 rounded-full border-[7px] border-[#ff0050]" aria-hidden="true" />
          <div className="absolute inset-x-14 bottom-2 h-24 rounded-b-full bg-[#ff0050]" aria-hidden="true" />
          <img
            src={profile.profileImage}
            alt={`${profile.name} profile`}
            className="absolute inset-0 h-full w-full rounded-full border border-white/10 object-cover object-center grayscale"
          />
        </div>
      </section>

      <section id="about" className="border-t border-white/5 bg-[#111111] py-20 sm:py-24">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1fr]">
          <div className="relative overflow-hidden rounded-md border border-white/5 bg-[#1c1c1c]">
            <img
              src={profile.profileImage}
              alt={`${profile.name} portrait`}
              className="h-full min-h-[320px] w-full object-cover object-center grayscale sm:min-h-[420px]"
            />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#111111] to-transparent" aria-hidden="true" />
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/80">About Me</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
              Driven, practical <span className={accent}>Software Engineer</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-white/72">{profile.about}</p>
            <p className="mt-4 text-base leading-8 text-white/72">{profile.approach}</p>

            <div className="mt-8 grid gap-4">
              {aboutHighlights.map((item) => (
                <div key={item} className="flex items-start gap-3 text-white/82">
                  <CheckCircle2 aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-[#ff0050]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <SocialButtons className="mt-8" />
          </div>
        </div>
      </section>

      <section id="services" className="py-20 sm:py-24">
        <div className="section-shell">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-base font-black uppercase tracking-[0.24em] text-[#ff0050] sm:text-lg">SERVICES</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              What I Can Do
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
              From software engineering and intelligent systems to digital design and multimedia, I create practical technology and visual solutions built around real-world needs.
            </p>
          </div>

          <div className="grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group flex h-full min-h-[300px] flex-col items-center justify-center rounded-md border border-white/5 bg-[#1f1f1f] p-6 text-center shadow-[0_26px_60px_-42px_rgba(0,0,0,0.8)] transition duration-300 hover:-translate-y-1 hover:border-[#ff0050]/75 hover:shadow-[0_24px_70px_-40px_rgba(255,0,80,0.9)] xl:p-7"
              >
                <span className="grid h-16 w-16 place-items-center rounded-md border border-[#ff0050]/35 bg-[#ff0050]/10 text-[#ff0050] transition duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-hover:border-[#ff0050] group-hover:bg-[#ff0050]/15">
                  <IconByName name={service.icon} className="h-8 w-8" strokeWidth={1.9} />
                </span>
                <h3 className="mt-7 max-w-xs text-base font-black uppercase tracking-wide text-white">{service.title}</h3>
                <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-white/70">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="resume" className="border-y border-white/5 bg-[#111111] py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeader eyebrow="My Resume" title="Experience and" highlight="Education" />

          <div className="mt-8">
            <div id="resume-experience">
              <div className="mx-auto mb-8 max-w-3xl text-center">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#ff0050]">Experience</p>
                <h3 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Selected Software Engineering Experience
                </h3>
                <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/70">
                  A selection of software engineering projects demonstrating practical experience across full-stack development, artificial intelligence, database systems, APIs and user-focused digital solutions.
                </p>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                {resumeProjectEntries.map((project) => (
                  <article
                    key={project.title}
                    className="relative overflow-hidden rounded-md border border-white/5 bg-[#1b1b1b] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#ff0050]/70 hover:shadow-[0_24px_70px_-46px_rgba(255,0,80,0.9)] sm:p-7"
                  >
                    <span className="absolute left-0 top-8 h-16 w-1 rounded-r-full bg-[#ff0050]" aria-hidden="true" />
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#ff0050]">{project.category}</p>
                        <h4 className="mt-3 text-xl font-black leading-tight text-white sm:text-2xl">{project.title}</h4>
                        <p className="mt-2 text-sm font-bold text-white/75">{project.role}</p>
                      </div>
                    </div>

                    <ul className="mt-6 grid gap-3">
                      {project.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 text-sm leading-7 text-white/68">
                          <CheckCircle2 aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-[#ff0050]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span key={technology} className="rounded-md border border-[#ff0050]/20 bg-[#ff0050]/5 px-3 py-1 text-xs font-bold text-white/70">
                          {technology}
                        </span>
                      ))}
                    </div>

                    {project.github || project.liveDemo ? (
                      <div className="mt-7 flex flex-wrap gap-3">
                        {project.github ? (
                          <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[#ff0050] px-4 text-sm font-bold text-[#ff0050] transition hover:bg-[#ff0050] hover:text-white">
                            <Github aria-hidden="true" className="h-4 w-4" />
                            GitHub
                          </a>
                        ) : null}
                        {project.liveDemo ? (
                          <a href={project.liveDemo} target="_blank" rel="noreferrer" className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[#ff0050] px-4 text-sm font-bold text-[#ff0050] transition hover:bg-[#ff0050] hover:text-white">
                            View Project
                            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                          </a>
                        ) : null}
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
            </div>

            <div id="resume-education" className="mt-10 rounded-md border border-white/5 bg-[#1b1b1b] p-7 text-center transition">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#ff0050]">Education</p>
              <h3 className="mx-auto mt-4 max-w-3xl text-3xl font-black leading-tight text-white">
                BSc (Hons) in Software Engineering with Multimedia
              </h3>
              <p className="mt-3 text-base font-bold text-white/75">{academicProfile.institution}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeader eyebrow="My Talent" title="Professional" highlight="Skills" />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {skillItems.map(({ skill, category }) => {
              const icon = getSkillIcon(skill);
              const brandIcon = skillBrandIcons[skill];
              const needsLightBackground = ["Next Js", "Express.js", "Streamlit", "Linux"].includes(skill);

              return (
                <article
                  key={`${category}-${skill}`}
                  className="group grid min-h-32 place-items-center rounded-md border border-white/5 bg-[#1f1f1f] p-4 text-center transition duration-300 hover:-translate-y-1 hover:border-[#ff0050] hover:shadow-[0_22px_60px_-44px_rgba(255,0,80,0.9)]"
                  title={category}
                >
                  <span
                    className="grid h-16 w-16 place-items-center rounded-md border text-sm font-black transition duration-300 group-hover:-translate-y-1 group-hover:scale-105"
                    style={
                      brandIcon
                        ? {
                            background: needsLightBackground ? "rgba(255, 255, 255, 0.98)" : "rgba(255, 255, 255, 0.04)",
                            borderColor: needsLightBackground ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.08)",
                          }
                        : {
                            color: icon.color,
                            background: icon.background,
                            borderColor: icon.border,
                          }
                    }
                    aria-hidden="true"
                  >
                    {brandIcon ? (
                      <img src={brandIcon} alt="" className="h-11 w-11 object-contain" />
                    ) : (
                      icon.mark
                    )}
                  </span>
                  <p className="mt-4 max-w-full break-words text-sm font-black text-white" style={{ overflowWrap: "anywhere" }}>
                    {skill}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="border-y border-white/5 bg-[#111111] py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeader eyebrow="Latest Works" title="Explore My" highlight="Projects" />

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <article
                key={project.id}
                className="grid gap-7 rounded-md border border-white/5 bg-[#181818] p-4 transition hover:border-[#ff0050]/70 sm:p-5 lg:grid-cols-[0.95fr_1fr] lg:gap-8 lg:p-8"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <img
                    src={project.image}
                    alt={`${project.title} project visual`}
                    className="aspect-[16/10] w-full rounded-md border border-white/5 object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-[#ff0050]">
                    {project.category[0]}
                  </p>
                  <h3 className="mt-4 text-2xl font-black leading-tight text-white sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base sm:leading-8">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span key={technology} className="rounded-md border border-white/10 px-3 py-1 text-xs font-bold text-white/65">
                        {technology}
                      </span>
                    ))}
                  </div>
                  <div className="mt-7 flex flex-wrap gap-3">
                    {project.github ? (
                      <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[#ff0050] px-4 text-sm font-bold text-[#ff0050] transition hover:bg-[#ff0050] hover:text-white">
                        <Github aria-hidden="true" className="h-4 w-4" />
                        Code
                      </a>
                    ) : null}
                    {project.liveDemo ? (
                      <a href={project.liveDemo} target="_blank" rel="noreferrer" className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[#ff0050] px-4 text-sm font-bold text-[#ff0050] transition hover:bg-[#ff0050] hover:text-white">
                        <ExternalLink aria-hidden="true" className="h-4 w-4" />
                        Live
                      </a>
                    ) : null}
                    <a href="#contact" className="grid h-12 w-12 place-items-center rounded-full border border-[#ff0050] text-[#ff0050] transition hover:bg-[#ff0050] hover:text-white" aria-label={`Discuss ${project.title}`}>
                      <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 sm:py-24">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/80">Get In Touch</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Let's Talk For your <span className={accent}>Next Project(s)</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-white/72">
              Discuss a project, internship, collaboration or freelance web work. Connect with me via email and I will respond as soon as I can.
            </p>

            <div className="mt-8 grid gap-4">
              {contactStrengths.map((strength) => (
                <div key={strength} className="flex items-center gap-3 text-white/82">
                  <CheckCircle2 aria-hidden="true" className="h-5 w-5 text-[#ff0050]" />
                  <span>{strength}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3 text-white/70">
              <MapPin aria-hidden="true" className="h-5 w-5 text-[#ff0050]" />
              <span>{profile.location}</span>
            </div>
            <SocialButtons className="mt-8" />
          </div>

          <ContactForm />
        </div>
      </section>

      <footer className="border-t border-white/5 bg-[#151515] py-6">
        <div className="section-shell flex flex-col gap-3 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>Copyright &copy; 2026 <span className={accent}>Reabetsoe Sephekola</span>. All Rights Reserved.</p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="inline-flex min-h-10 items-center rounded-md px-2 transition hover:text-[#ff0050]">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
