export interface Skill {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced";
}

export const frontendSkillsGroups: Skill[][] = [
  [
    { name: "HTML", level: "Advanced" },
    { name: "CSS/SCSS", level: "Advanced" },
    { name: "Javascript", level: "Advanced" },
    { name: "TypeScript", level: "Intermediate" },
  ],
  [
    { name: "TailwindCSS", level: "Advanced" },
    { name: "Git", level: "Advanced" },
    { name: "React", level: "Advanced" },
    { name: "Next.js", level: "Advanced" },
  ],
];

export interface Skill {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced";
}

export const backendSkillsGroups: Skill[][] = [
  [
    { name: "Node JS", level: "Advanced" },
    { name: "Nest.js", level: "Intermediate" },
    { name: "MySQL", level: "Intermediate" },
  ],
  [
    { name: "Expressjs", level: "Intermediate" },
    { name: "Firebase", level: "Intermediate" },
    { name: "Mongo DB", level: "Intermediate" },
  ],
];
