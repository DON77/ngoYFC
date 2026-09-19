export type Resource = {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  viewUrl: string;
  downloadUrl: string;
};

export const publicationCategories = [
  "Guideline",
  "Reports",
  "Research",
  "Online campaigns",
];
export const reportCategories = [
  "Annual reports",
  "Financial information",
  "Institutional documents",
];
export const publications: Resource[] = [];
export const reports: Resource[] = [];
