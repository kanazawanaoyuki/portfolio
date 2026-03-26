import type { WorkCategory, WorkItem } from "@/types/portfolio";

export const filterWorks = (works: WorkItem[], category: WorkCategory): WorkItem[] => {
  if (category === "All") return works;
  return works.filter((work) => work.categories.includes(category));
};
