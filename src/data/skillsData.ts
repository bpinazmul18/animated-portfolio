export interface Skill {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced";
}

export const frontendSkillsGroups: Skill[][] = [
  [
    { name: "React.js", level: "Advanced" },
    { name: "Next.js", level: "Advanced" },
    { name: "TypeScript", level: "Advanced" },
    { name: "JavaScript (ES6+)", level: "Advanced" },
  ],
  [
    { name: "Redux Toolkit / RTK Query", level: "Advanced" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "Shadcn UI / Radix UI", level: "Advanced" },
    { name: "React Native", level: "Intermediate" },
  ],
];

export const backendSkillsGroups: Skill[][] = [
  [
    { name: "Node.js", level: "Advanced" },
    { name: "Express.js", level: "Advanced" },
    { name: "NestJS", level: "Intermediate" },
    { name: "MongoDB", level: "Advanced" },
  ],
  [
    { name: "RESTful API Design", level: "Advanced" },
    { name: "JWT / OAuth 2.0", level: "Advanced" },
    { name: "Stripe Integration", level: "Advanced" },
    { name: "Strapi CMS", level: "Intermediate" },
  ],
];
