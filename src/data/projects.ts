export interface Project {
  title: string;
  image: string;
  category: "web" | "movil" | "design";
  demoUrl: string;
}

export const projects: Project[] = [
  {
    title: "Markopolo Web",
    image: "/img/work1.png",
    category: "web",
    demoUrl: "https://beta.markopolo.ai/",
  },
  {
    title: "Deepdive",
    image: "/img/work2.png",
    category: "movil",
    demoUrl: "https://app.deepdiveplatform.com/",
  },
  {
    title: "Paikari",
    image: "/img/work3.png",
    category: "web",
    demoUrl: "https://paikari.hishabee.io/",
  },
  {
    title: "Dokan web",
    image: "/img/work4.png",
    category: "web",
    demoUrl: "https://web.hishabee.business/",
  },
  //   {
  //     title: "App Movil",
  //     image: "/img/work5.jpg",
  //     category: "movil",
  //     demoUrl: "#",
  //   },
];
