export const academicProfile = {
  institution: "Limkokwing University of Creative Technology, Lesotho",
  programme: "BSc in Software Engineering with Multimedia",
  transcriptIssueDate: "23 July 2026",
  cumulativeGpa: "3.07",
  creditsAttempted: "568",
  creditsEarned: "568",
  academicStatus: "Proceed",
  note: "Transcript reviewed for portfolio content. This does not certify graduation.",
};

export interface CourseworkGroup {
  title: string;
  summary: string;
  modules: string[];
}

export const courseworkGroups: CourseworkGroup[] = [
  {
    title: "Software Engineering Core",
    summary: "Requirements, modelling, design, management, formal methods and reliability.",
    modules: [
      "Principles of Software Engineering",
      "Software Requirements Engineering",
      "Software Modelling and Analysis",
      "Software Design",
      "Software Project Management",
      "Software Testing and Reliability",
      "Formal Methods",
      "Data Structures & Algorithm Analysis",
    ],
  },
  {
    title: "Programming & Computing",
    summary: "Programming logic, Java, C++, AI and practical computing foundations.",
    modules: [
      "Principles of Programming Logic & Design",
      "C++ Programming I",
      "C++ Programming II",
      "JAVA Programming I",
      "JAVA Programming II",
      "Artificial Intelligence",
      "Introduction to Computer Skills",
    ],
  },
  {
    title: "Web, Data & Networks",
    summary: "Web design, databases, warehousing, communication systems and networking.",
    modules: [
      "Principles of Web Design",
      "Introduction to Database",
      "Database System",
      "Data Warehousing",
      "Introduction to Data Communication",
      "Data Communication & Networking",
      "Fundamentals of Internet Technology",
    ],
  },
  {
    title: "Multimedia & Interaction",
    summary: "Design, imaging, interactive media, graphics, modelling, animation and VR.",
    modules: [
      "Introduction to Multimedia",
      "Introduction to Digital Graphics",
      "Introduction to Digital Imaging",
      "Interaction Design",
      "Computer Graphics",
      "Concept of Modelling",
      "Digital Modelling & Animation",
      "Interactive Multimedia",
      "Character Animation",
      "Virtual Reality",
    ],
  },
];

export interface SemesterRecord {
  period: string;
  title: string;
  gpa: string;
  highlights: string[];
}

export const semesterRecords: SemesterRecord[] = [
  {
    period: "August 2022",
    title: "Year 1 - Semester 1",
    gpa: "3.66",
    highlights: [
      "Programming Logic & Design",
      "Introduction to Computer Skills",
      "Business Communication",
      "Creative and Innovation Studies",
    ],
  },
  {
    period: "February 2023",
    title: "Year 1 - Semester 2",
    gpa: "3.24",
    highlights: [
      "Principles of Software Engineering",
      "Introduction to Database",
      "Introduction to Data Communication",
      "Multimedia fundamentals",
    ],
  },
  {
    period: "August 2023",
    title: "Year 2 - Semester 1",
    gpa: "2.78",
    highlights: [
      "C++ Programming I",
      "Principles of Web Design",
      "Data Communication & Networking",
      "Internet Technology",
    ],
  },
  {
    period: "February 2024",
    title: "Year 2 - Semester 2",
    gpa: "2.83",
    highlights: [
      "C++ Programming II",
      "JAVA Programming I",
      "Database System",
      "Software Modelling and Analysis",
    ],
  },
  {
    period: "July 2024",
    title: "Year 3 - Semester 1",
    gpa: "2.89",
    highlights: [
      "Software Requirements Engineering",
      "Interaction Design",
      "Computer Graphics",
      "Data Warehousing",
    ],
  },
  {
    period: "February 2025",
    title: "Year 3 - Semester 2",
    gpa: "3.45",
    highlights: [
      "Interactive Multimedia",
      "Software Design",
      "Digital Production",
      "Information Technology Law",
    ],
  },
  {
    period: "July 2025",
    title: "Year 4 - Semester 1",
    gpa: "2.63",
    highlights: [
      "System Security",
      "Software Project Management",
      "Major Project 1",
      "Data Structures & Algorithm Analysis",
    ],
  },
  {
    period: "February 2026",
    title: "Year 4 - Semester 2",
    gpa: "3.17",
    highlights: [
      "Software Testing and Reliability",
      "Virtual Reality",
      "Artificial Intelligence",
      "Major Project 2",
    ],
  },
];

export const transcriptHighlights = [
  { label: "Strongest listed module", value: "Interactive Multimedia", detail: "91 / A+" },
  { label: "High-performing areas", value: "Design, VR, statistics, web", detail: "B+ to A-" },
  { label: "Final-year technical focus", value: "Testing, AI, VR, security", detail: "2025-2026" },
  { label: "Academic evidence", value: "Statement of Results", detail: "Issued 23 July 2026" },
];
