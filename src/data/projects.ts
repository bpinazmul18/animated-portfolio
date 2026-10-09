export interface Project {
  title: string;
  image: string;
  category: "web" | "mobile" | "design";
  demoUrl?: string;
  credentials?: {
    username: string;
    password: string;
  };
}

export const projects: Project[] = [
  {
    title: "Markopolo Web",
    image: "/img/work1.png",
    category: "web",
    demoUrl: "https://beta.markopolo.ai/",
    credentials: {
      username: "torixa6878@secbuf.com",
      password: "Hum4N12#$12",
    },
  },
  {
    title: "Deepdive",
    image: "/img/work2.png",
    category: "movil",
    demoUrl: "https://app.deepdiveplatform.com/",
    credentials: {
      username: "alec@dotlines.uk",
      password: "Sun90@Og",
    },
  },
  {
    title: "Paikari",
    image: "/img/work3.png",
    category: "web",
    demoUrl: "https://paikari.hishabee.io/",
    credentials: {
      username: "01785362016",
      password: "21451",
    },
  },
  {
    title: "Dokan web",
    image: "/img/work4.png",
    category: "web",
    demoUrl: "https://web.hishabee.business/",
    credentials: {
      username: "01785362016",
      password: "21451",
    },
  },
  {
    title: "Muallim Admin",
    image: "/img/work-placeholder.svg",
    category: "web",
    demoUrl: "https://admin.muallimedu.com/",
  },
  {
    title: "Muallim Teacher",
    image: "/img/work-placeholder.svg",
    category: "mobile",
    demoUrl: "https://play.google.com/store/apps/details?id=com.muallimedu.teacher&pcampaignid=web_share"
  },
  {
    title: "Stripe Payment Integration",
    image: "/img/work-placeholder.svg",
    category: "web",
  },
  {
    title: "React.js & Strapi CMS",
    image: "/img/work-placeholder.svg",
    category: "web",
  },
];
