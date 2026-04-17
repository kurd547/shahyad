export interface Startup {
  name: string;
  tagline: string;
  description: string;
  stage: string;
  logo: string;
}

export const startups: Startup[] = [
  {
    name: "Ecodrops",
    tagline: "Affordable Water Solutions",
    description:
      "Providing eco-friendly water purification systems and waterproofing services with free site visits and water testing.",
    stage: "Scaling",
    logo: "/logos/ecodrops.png",
  },
  {
    name: "Fashion Friday",
    tagline: "Affordable Streetwear & Footwear",
    description:
      "Bringing stylish and affordable fashion products like sneakers and crocs to the youth market across India.",
    stage: "Active Growth",
    logo: "/logos/fashionfriday.png",
  },
  {
    name: "Zera Events Planner",
    tagline: "Modern Event Experiences",
    description:
      "Event management with a focus on curated dessert and juice experiences, blending tradition with innovation.",
    stage: "Launch Ready",
    logo: "/logos/zera.png",
  },
];