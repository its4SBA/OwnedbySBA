import type { LucideIcon } from "lucide-react";
import { BriefcaseBusiness, Code2 } from "lucide-react";

export const SITE_URL = "https://ownedbysba.dev";

export const PROFILE = {
  brand: "ownedbysba.dev",
  name: "Salma Alaleeli",
  title: "Software Engineer",
  heroText: "I build clean, responsive digital experiences with a focus on usability, visual detail, and practical product value.",
  location: "Based in Dubai, United Arab Emirates",
  focus: "Focused on web interfaces, UI/UX, and practical digital products.",
  availability: "Open to freelance work, collaborations, and career opportunities.",
  email: "s.alaleeli.sa@gmail.com",
  footerBrand: "Owned by SBA",
  footerCopyright: "© 2026 Salma Alaleeli",
  footerLine: "Built with intention."
};

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "What I Do", href: "#what-i-do" },
  { label: "Credentials", href: "#credentials" },
  { label: "Connect", href: "#connect" }
];

export const INTRODUCTION = [
  "I’m Salma Alaleeli, a Software Engineer based in Dubai. I build modern, responsive, and user-focused digital experiences with attention to clean design, usability, and practical functionality.",
  "My work combines front-end development, UI/UX thinking, and an interest in digital products. I enjoy turning ideas into clear interfaces, improving user flows, and building experiences that feel simple, useful, and polished.",
  "Alongside my full-time role, I continue growing through freelance work, personal projects, artificial intelligence learning, and product-focused development."
];

export const SKILL_GROUPS = [
  {
    title: "Front-End",
    description: "Building responsive interfaces and modern web experiences.",
    skills: ["React", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Web Design"]
  },
  {
    title: "Backend and APIs",
    description: "Connecting interfaces with data and application logic.",
    skills: ["Node.js", "Express.js", "MySQL", "API Integration"]
  },
  {
    title: "Design and Tools",
    description: "Designing, organizing, and delivering digital work clearly.",
    skills: ["Figma", "Git", "GitHub", "VS Code", "Postman", "Notion"]
  }
];

export const CURRENT_BUILD = {
  title: "Currently building TrackMe",
  description: "A personal app and website concept for tracking movies, series, and anime in one organized place.",
  highlights: ["Movies", "Series", "Anime", "Personal watch lists", "Progress tracking", "Clean dashboard experience"]
};

export const SERVICES = [
  {
    title: "Front-End Development",
    description:
      "Building responsive and maintainable web interfaces with React, Next.js, JavaScript, HTML, CSS, and modern UI libraries."
  },
  {
    title: "UI/UX Design",
    description:
      "Creating clear user flows, wireframes, and interface designs in Figma with usability and visual consistency in mind."
  },
  {
    title: "Design to Development",
    description: "Transforming Figma designs into functional, accurate, and responsive user interfaces."
  },
  {
    title: "API Integration",
    description: "Connecting front-end experiences with APIs and handling real application data."
  },
  {
    title: "Digital Project Support",
    description:
      "Supporting the planning, design, implementation, and improvement of digital products and internal platforms."
  }
];

export const CREDENTIALS = [
  "Artificial Intelligence Training Diploma — Tamken Training Center",
  "One Million Prompters — Dubai Centre for Artificial Intelligence",
  "Introduction to AI — IBM",
  "Web Development Certificate — Udemy",
  "React Certificate — Udemy",
  "User Experience Fundamentals Certificate — Udemy"
];

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/salmaalaleeli/", icon: BriefcaseBusiness },
  { label: "GitHub", href: "https://github.com/its4SBA", icon: Code2 }
];
