
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  role: string;
  outcome: string;
  tools: string[];
  imageUrl: string;
  galleryImages?: string[]; // New: support for multiple images
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}
