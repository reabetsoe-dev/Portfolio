export interface Insight {
  id: string;
  title: string;
  category: "Cybersecurity" | "Networking" | "Web Development" | "Technology" | "Entrepreneurship" | "Digital Transformation";
  summary: string;
  publishedAt: string;
  slug: string;
}

export const insights: Insight[] = [];
