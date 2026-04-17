import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { IconType } from "react-icons";


// --- Skill Type ---
interface Skill {
  icon: IconType;
  name: string;
  size?: number;
}

// --- Skill List ---
export const skills: Skill[] = [
  { icon: FaReact, name: "React", size: 36 },
  { icon: FaNodeJs, name: "Node.js", size: 28 },
  { icon: FaDatabase, name: "MongoDB", size: 20 },
  { icon: FaJs, name: "JavaScript", size: 32 },
  { icon: FaGitAlt, name: "Git", size: 30 },
  { icon: SiTypescript, name: "TypeScript", size: 35 },
  { icon: SiNextdotjs, name: "Next.js", size: 40 },
  { icon: SiTailwindcss, name: "TailwindCSS", size: 32 },
  { icon: FaCss3Alt, name: "CSS3", size: 32 },
  { icon: FaHtml5, name: "HTML5", size: 25 },
  { icon: FaPython, name: "Python", size: 34 },
  { icon: FaDocker, name: "Docker", size: 28 },
  { icon: FaAws, name: "AWS", size: 32 },

  { icon: FaReact, name: "React", size: 36 },
  { icon: FaNodeJs, name: "Node.js", size: 28 },
  { icon: FaDatabase, name: "MongoDB", size: 20 },
  { icon: FaJs, name: "JavaScript", size: 32 },
  { icon: FaGitAlt, name: "Git", size: 30 },
  { icon: SiTypescript, name: "TypeScript", size: 35 },
  { icon: SiNextdotjs, name: "Next.js", size: 40 },
  { icon: SiTailwindcss, name: "TailwindCSS", size: 32 },
  { icon: FaCss3Alt, name: "CSS3", size: 32 },
  { icon: FaHtml5, name: "HTML5", size: 25 },
  { icon: FaPython, name: "Python", size: 34 },
  { icon: FaDocker, name: "Docker", size: 28 },
  { icon: FaAws, name: "AWS", size: 32 },
];
