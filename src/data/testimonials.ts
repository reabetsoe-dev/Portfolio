export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  photo?: string;
}

export const testimonials: Testimonial[] = [];

export const testimonialPlaceholder =
  "Testimonials from clients, collaborators and project stakeholders will appear here.";
