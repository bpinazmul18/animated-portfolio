// navLinks.ts
export interface NavLink {
  id: string; // used for href (#home, #about, etc.)
  icon: string; // boxicons class
}

export const navLinks: NavLink[] = [
  { id: "home", icon: "bx bx-home" },
  { id: "about", icon: "bx bx-user" },
  { id: "skills", icon: "bx bx-book" },
  { id: "work", icon: "bx bx-briefcase-alt-2" },
  { id: "contact", icon: "bx bx-message-square-dots" },
];
