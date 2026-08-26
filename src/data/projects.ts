import digitalSolutionsImage from "../assets/projects/digital-solutions.jpg";
import networkSecurityImage from "../assets/projects/network-security-lab.jpg";
import autoworldImage from "../assets/projects/autoworld.jpg";
import webPlatformImage from "../assets/projects/web-platform.jpg";

export type ProjectCategory =
  | "Web Development"
  | "Networking"
  | "Cybersecurity"
  | "Business/Technology"
  | "Other";

export interface Project {
  id: string;
  title: string;
  description: string;
  status: string;
  category: ProjectCategory[];
  technologies: string[];
  image: string;
  github?: string;
  liveDemo?: string;
  featured?: boolean;
  problem: string;
  solution: string;
  role: string;
  keyFeatures: string[];
  challenges: string[];
  results: string;
  screenshots: string[];
}

export const projectFilters: Array<"All" | ProjectCategory> = [
  "All",
  "Web Development",
  "Networking",
  "Cybersecurity",
  "Business/Technology",
  "Other",
];

export const projects: Project[] = [
  {
    id: "autoworld",
    title: "AutoWorld",
    description:
      "Vehicle marketplace and automotive technology platform concept, prepared as a focused portfolio project area.",
    status: "Project details to update",
    category: ["Web Development", "Business/Technology"],
    technologies: ["Vehicle Marketplace", "Automotive Technology", "Web Platform"],
    image: autoworldImage,
    featured: true,
    problem:
      "Vehicle buyers and sellers need a clearer digital way to organize automotive information and marketplace activity.",
    solution:
      "AutoWorld is positioned as a clean vehicle marketplace platform. Specific implementation details can be expanded as project materials are added.",
    role:
      "Project owner and technology learner shaping the project concept, content structure and presentation.",
    keyFeatures: [
      "Vehicle marketplace concept",
      "Automotive technology focus",
      "Portfolio-ready project presentation",
    ],
    challenges: [
      "Keeping the project description editable until full implementation notes are available.",
    ],
    results:
      "Prepared as one of the three featured portfolio projects.",
    screenshots: [],
  },
  {
    id: "lec-intellisupport",
    title: "LEC IntelliSupport",
    description:
      "Intelligent IT support and fault management system developed as a major project for Lesotho Electricity Company.",
    status: "Major Project",
    category: ["Business/Technology", "Other"],
    technologies: ["System Analysis", "Database Systems", "Documentation", "Project Management"],
    image: webPlatformImage,
    problem:
      "Organizational support and fault management processes need clear information handling, tracking and documentation.",
    solution:
      "The project applied database and software engineering principles to an intelligent support system for a real organizational context.",
    role:
      "Participated as Project Manager, assisting with data handling, software development, system analysis and documentation.",
    keyFeatures: [
      "Intelligent IT support concept",
      "Fault management workflow",
      "Data handling and documentation",
      "Software engineering project coordination",
    ],
    challenges: [
      "Connecting academic software engineering work with a real organizational problem.",
    ],
    results:
      "Confirmed in the CV as a major academic project for Lesotho Electricity Company.",
    screenshots: [],
  },
  {
    id: "ai-drug-review",
    title: "AI Drug Review",
    description:
      "AI and healthcare technology project area focused on exploring how intelligent systems can support review and decision workflows.",
    status: "Project details to update",
    category: ["Business/Technology", "Other"],
    technologies: ["Artificial Intelligence", "Healthcare Technology", "Research", "Data Review"],
    image: digitalSolutionsImage,
    problem:
      "Healthcare information can be complex to review, organize and interpret without structured technology support.",
    solution:
      "AI Drug Review is presented as an AI / healthcare technology project area, ready for deeper implementation notes and evidence.",
    role:
      "Student exploring AI, data review and practical technology solutions through academic and portfolio work.",
    keyFeatures: [
      "AI-focused project concept",
      "Healthcare technology theme",
      "Research and review workflow",
    ],
    challenges: [
      "Presenting an AI project responsibly without claiming unsupported medical outcomes.",
    ],
    results:
      "Included as a featured portfolio project area for future project evidence.",
    screenshots: [],
  },
];
