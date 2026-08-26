export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: string[];
  showWhenEmpty?: boolean;
  emptyLabel?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Development",
    description: "Core web and software development tools used for modern responsive interfaces.",
    icon: "Code2",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Node.js",
      "Express.js",
      "React",
      "React Native",
      "Next Js",
      "Django",
      "FastAPI",
      "Streamlit",
      "Scikit-learn",
      "Machine Learning / NLP",
      "REST APIs",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Firebase",
      "Docker",
      "Linux",
      "Git/GitHub",
      "Visual Studio Code",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
];
