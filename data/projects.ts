export type ProjectCategory =
  | "personal-portfolio"
  | "internship"
  | "fyp"
  | "university";

export type Project = {
  title: string;
  category: ProjectCategory;
  summary: string;
  stack: string[];
  status: "placeholder" | "complete";
};

export const categoryLabels: Record<ProjectCategory, string> = {
  "personal-portfolio": "Personal / Portfolio",
  internship: "Internship Projects",
  fyp: "Final Year Project",
  university: "University / Course",
};

export const projects: Project[] = [
  {
    title: "Future Personal Project A",
    category: "personal-portfolio",
    summary:
      "Reserved for Samantha's future personal project after it is genuinely completed and documented.",
    stack: ["Coming later"],
    status: "placeholder",
  },
  {
    title: "Future Personal Project B",
    category: "personal-portfolio",
    summary:
      "A second personal-project slot is included because this category may contain more than one project.",
    stack: ["Coming later"],
    status: "placeholder",
  },
  {
    title: "Internship Project",
    category: "internship",
    summary:
      "Samantha's strongest permitted internship project will replace this placeholder after the source material is reviewed.",
    stack: ["[Actual stack]"],
    status: "placeholder",
  },
  {
    title: "TeleCardio",
    category: "fyp",
    summary:
      "A cardiovascular-focused telemedicine mobile application that supports health monitoring, cardiovascular risk assessment, appointment and video consultation workflows, medication management, and pharmacy access.",
    stack: [
      "Flutter",
      "Dart",
      "Firebase Firestore",
      "Firebase Authentication",
      "Firebase Storage",
    ],
    status: "complete",
    featured: true,
  },
  {
    title: "University Project A",
    category: "university",
    summary:
      "The first selected university project will be inserted here after reviewing Samantha's retained evidence.",
    stack: ["[Actual stack]"],
    status: "placeholder",
  },
  {
    title: "University Project B",
    category: "university",
    summary:
      "A second university-project slot is included because this category may contain more than one project.",
    stack: ["[Actual stack]"],
    status: "placeholder",
  },
];
