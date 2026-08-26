export type CertificationStatus =
  | "Academic Record"
  | "Transcript Evidence"
  | "Coursework Evidence"
  | "Training"
  | "In Progress"
  | "Completed Course"
  | "Certified";

export interface Certification {
  name: string;
  organization: string;
  status: CertificationStatus;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  documentUrl?: string;
}

export const certifications: Certification[] = [
  {
    name: "BSc in Software Engineering with Multimedia",
    organization: "Limkokwing University of Creative Technology, Lesotho",
    status: "Academic Record",
    date: "Transcript issued 23 July 2026",
  },
  {
    name: "Cumulative Academic Summary",
    organization: "Limkokwing University Registry Department",
    status: "Transcript Evidence",
    date: "GPA 3.07 / 568 credits earned",
  },
  {
    name: "Software Testing, AI, VR and Major Project 2",
    organization: "Final-year coursework",
    status: "Coursework Evidence",
    date: "February 2026",
  },
  {
    name: "System Security, Project Management and Major Project 1",
    organization: "Final-year coursework",
    status: "Coursework Evidence",
    date: "July 2025",
  },
];
