export interface ExperienceEntry {
  year: string;
  title: string;
  type: "Projects" | "Professional Experience" | "Training" | "Education" | "Volunteer Experience";
  description: string;
  highlights: string[];
}

export const experience: ExperienceEntry[] = [
  {
    year: "2022",
    title: "Software Engineering with Multimedia Foundation",
    type: "Education",
    description:
      "Started BSc Software Engineering with Multimedia coursework, building foundations in programming logic, computer skills, design, communication and innovation.",
    highlights: [
      "Year 1 Semester 1 GPA: 3.66.",
      "Completed Programming Logic & Design and Introduction to Computer Skills.",
      "Built early foundations in design, business communication and creative studies.",
    ],
  },
  {
    year: "2023",
    title: "Web, Database, Data Communication and C++ Coursework",
    type: "Education",
    description:
      "Expanded into software engineering principles, web design, database systems, data communication, networking and C++ programming.",
    highlights: [
      "Completed Principles of Software Engineering and Introduction to Database.",
      "Completed Data Communication & Networking and Fundamentals of Internet Technology.",
      "Completed C++ Programming I and Principles of Web Design.",
    ],
  },
  {
    year: "2024",
    title: "Java, Software Modelling, Interaction Design and Graphics",
    type: "Education",
    description:
      "Focused on Java programming, software modelling and analysis, data warehousing, interaction design, computer graphics and requirements engineering.",
    highlights: [
      "Completed JAVA Programming I and II.",
      "Completed Software Requirements Engineering and Software Modelling and Analysis.",
      "Completed Interaction Design, Computer Graphics and Data Warehousing.",
    ],
  },
  {
    year: "2025",
    title: "Software Design, Security, Project Management and Major Project 1",
    type: "Projects",
    description:
      "Moved into upper-level software and multimedia modules, including software design, information technology law, system security, project management and Major Project 1.",
    highlights: [
      "Year 3 Semester 2 GPA: 3.45.",
      "Interactive Multimedia listed at 91 / A+.",
      "Completed Software Design, System Security and Software Project Management.",
    ],
  },
  {
    year: "2026",
    title: "Testing, AI, Virtual Reality and Major Project 2",
    type: "Projects",
    description:
      "Final listed semester includes software testing and reliability, artificial intelligence, virtual reality and Major Project 2.",
    highlights: [
      "Year 4 Semester 2 GPA: 3.17.",
      "Completed Software Testing and Reliability, Artificial Intelligence and Virtual Reality.",
      "Transcript issue date: 23 July 2026. Statement of Results does not certify graduation.",
    ],
  },
];
