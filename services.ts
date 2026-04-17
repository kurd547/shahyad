import {
  FaLaptopCode,
  FaSearch,
  FaDatabase,
  FaNetworkWired,
  FaPaintBrush,
  FaCloud,
} from "react-icons/fa";
import { IconType } from "react-icons";

export type Service = {
  title: string;
  description: string;
  icon: IconType;
};

export const services: Service[] = [
  {
    title: "UI/UX Design",
    description:
      "Create intuitive and user-friendly interfaces that enhance usability and delight users.",
    icon: FaPaintBrush,
  },
  {
    title: "Web App Development",
    description:
      "Create responsive and scalable web applications using modern frameworks and clean architecture.",
    icon: FaLaptopCode,
  },
  {
    title: "SEO Optimization",
    description:
      "Boost website visibility and search engine ranking with proven SEO strategies and analytics.",
    icon: FaSearch,
  },
  {
    title: "Database Management",
    description:
      "Design, optimize, and maintain secure databases ensuring high performance and data integrity.",
    icon: FaDatabase,
  },
  {
    title: "API Development",
    description:
      "Develop secure and scalable APIs to enable seamless integration across applications and services.",
    icon: FaNetworkWired,
  },
  {
    title: "Cloud & Deployment",
    description:
      "Deploy applications to cloud platforms with automated CI/CD pipelines for smooth scaling.",
    icon: FaCloud,
  },
];
