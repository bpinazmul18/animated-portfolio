// aboutData.ts
export interface AboutBox {
  icon: string;
  title: string;
  subtitle: string;
}

export const aboutBoxes: AboutBox[] = [
  {
    icon: "bx bx-award",
    title: "Experience",
    subtitle: "5 Years Working",
  },
  {
    icon: "bx bx-briefcase-alt",
    title: "Completed",
    subtitle: "38+ Projects",
  },
  {
    icon: "bx bx-support",
    title: "Support",
    subtitle: "Online 24/7",
  },
];
