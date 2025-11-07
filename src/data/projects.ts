import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Json Tree",
    href: "/projects",
    tags: ["Nextjs", "Tailwindcss", "Monaco Editor", "Vercel"],
    image: {
      LIGHT: "/images/projects/jsontreeLight.webp",
      DARK: "/images/projects/jsontreeDark.webp",
    },
  },
  {
    index: 1,
    title: "telegaio",
    href: "/projects",
    tags: [
      "Reactjs",
      "Tailwindcss",
      "Sass",
      "Python",
      "FastAPI",
      "API integration",
    ],
    image: {
      LIGHT: "/images/projects/teleio.jpg",
      DARK: "/images/projects/teleio.jpg",
    },
  },
  {
    index: 2,
    title: "nemora.ai",
    href: "/projects",
    tags: ["Vuejs", "Django", "Tailwindcss", "RestfulAPI"],
    image: {
      LIGHT: "/images/projects/nemora2.jpg",
      DARK: "/images/projects/nemora3.jpg",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Json tree",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/images/projects/jsontreeLight.webp",
      "/images/projects/jsontreeDark.webp",
    ],
    description:
      "Visualize JSON data format in form of a tree or graph. Application is made using Nextjs, Tailwindcss and Monaco Editor. Design image can be downloaded from this app.",
    sourceCodeHref: "https://github.com/coastellen515-ui/JsonTree",
    liveWebsiteHref: "https://jsontree.vercel.app",
  },
  {
    name: "Stock predictor",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/images/projects/stockPredictor.webp",
      "/images/projects/stockPredictorCandleChart.webp",
      "/images/projects/stockPredictorCompareChart.webp",
      "/images/projects/stockPredictorLineChart.webp",
    ],
    description:
      "Get prediction of opening and closing price of stocks price. Frontend is made using Reactjs and backend is made using Flask and Machine learning model are trained using Tensorflow",
    sourceCodeHref: "https://github.com/coastellen515-ui/Stock-market",
  },
  {
    name: "Telega.io",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: ["/images/projects/teleio.jpg"],
    description:
      "I worked on building a telegram-based advertising platform that helps users manage and track their campaigns in one place.",
    sourceCodeHref:
      "https://github.com/coastellen515-ui/tele.io-telegalaxy.github.io",
    liveWebsiteHref: "https://telega.io/",
  },
  {
    name: "nemora",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/images/projects/nemora2.jpg",
      "/images/projects/nemora1.jpg",
      "/images/projects/nemora2.jpg",
    ],
    description:
      "I developed a unified web platform designed to automate complex workflows, manage dynamic content, and deliver a seamless user experience through a modular dashboard interface.",
    sourceCodeHref: "",
    liveWebsiteHref: "https://landing.nemora.ai/",
  },
];
