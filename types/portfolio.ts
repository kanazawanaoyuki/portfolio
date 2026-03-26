export type NavItem = {
  label: string;
  href: string;
};

export type SkillCategory = {
  category: string;
  items: SkillItem[];
};

export type SkillItem = {
  name: string;
  years: string;
  summary: string;
};

export type ExperienceItem = {
  id: string;
  period: string;
  title: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  improvement: string;
};

export type WorkCategory =
  | "All"
  | "Corporate Site"
  | "Frontend UI"
  | "Coding"
  | "Responsive"
  | "React";

export type WorkItem = {
  id: string;
  title: string;
  summary: string;
  description: string;
  stack: string[];
  categories: Exclude<WorkCategory, "All">[];
  role: string;
  improvement: string;
};
