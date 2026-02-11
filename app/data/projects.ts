import type { StaticImageData } from "next/image";
import image99 from "../../img/99.png";
import imageSamarammar from "../../img/samarammar.png";

export type Project = {
  slug: string;
  title: string;
  context: string;
  summary: string;
  image?: StaticImageData;
  url?: string;
  goal: string;
  build: string;
  work: string[];
  result: string;
  overview: string;
};

export const projects: Project[] = [
  {
    slug: "99cafe",
    title: "99cafe",
    context: "Cafe brand website",
    summary: "Modern cafe website with a clean menu flow.",
    image: image99,
    url: "https://99cafe.com",
    goal: "Present the brand clearly and highlight the menu.",
    build: "A clean, responsive site with focused sections.",
    work: ["Structured the content flow.", "Optimized for mobile speed."],
    result: "A clear, reliable site that supports the cafe’s presence.",
    overview: "Clean branding, fast pages, and an easy menu experience.",
  },
  {
    slug: "interior-landscape-elegance",
    title: "Interior & Landscape Elegance",
    context: "Interior, exterior & garden design",
    summary: "Showcasing refined interior, exterior, and garden designs.",
    image: imageSamarammar,
    goal: "Present refined interior, exterior, and garden design work.",
    build: "A portfolio showcasing elegant spaces and landscapes.",
    work: [
      "Interior and exterior design showcases.",
      "Garden and landscape visualizations.",
    ],
    result: "A clear, refined presentation of design projects.",
    overview: "Refined interior, exterior, and garden design portfolio.",
  },
  {
    slug: "signal-launch",
    title: "Signal Launch",
    context: "Landing page campaign",
    summary: "A focused landing page built to convert.",
    goal: "Explain the offer quickly and move users to action.",
    build: "A focused landing flow with short sections and clear proof.",
    work: [
      "Tight copy structure with one primary message.",
      "Fast-loading visuals and responsive layout.",
      "Single conversion path without distractions.",
    ],
    result: "Improved lead quality and a cleaner conversion funnel.",
    overview:
      "A landing page built to communicate fast and convert reliably.",
  },
];
