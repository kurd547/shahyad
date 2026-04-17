import { FaCode, FaGithub, FaTrophy, FaKeyboard } from "react-icons/fa";
import { GrAchievement } from "react-icons/gr";
import { FaRegKeyboard } from "react-icons/fa";
import { BsKeyboard } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";
import { IconType } from "react-icons";

interface HomeAchievement {
  icon: IconType;
  title: string;
  description: string;
  style: string;
}

export const HomeAchievements: HomeAchievement[] = [
  {
    icon: FaCode,
    title: "500 Days LeetCode Streak",
    description:
      "Solved coding problems daily for over 500 days, building consistency and strong problem-solving skills.",
    style: "-mb-6 -rotate-2 bg-gradient-to-tr",
  },
  {
    icon: VscGithub,
    title: "Top 1% GitHub Contributor",
    description:
      "2034 contributions in a year, 204 stars earned, and a 170-day coding streak.",
    style: "-mb-6 rotate-2 bg-gradient-to-tl",
  },
  {
    icon: GrAchievement,
    title: "Winner - Tegfly Coding Challenge",
    description:
      "Secured 1st place in Tegfly's 15-Day Coding Challenge, proving speed and skill.",
    style: "-mb-6 -rotate-2 bg-gradient-to-tr",
  },
  {
    icon: BsKeyboard,
    title: "Top 1% Typist",
    description:
      "Achieved 100+ WPM in a 60-second test according to TCK Publishing.",
    style: "-mb-6 rotate-2 bg-gradient-to-t",
  },
];

export type Achievement = {
  id: string;
  category: "leetcode" | "github" | "certificate" | "other";
  title: string;
  subtitle?: string;
  date?: string;
  level?: string;
  url?: string;
  image?: string;
  tags?: string[];
  score?: number;
  icon?: any;
  iconStyle?: string;
};

import { SiLeetcode } from "react-icons/si";
import { FiGithub, FiAward, FiUsers } from "react-icons/fi";

export const achievements: Achievement[] = [
  {
    id: "lc-250",
    category: "leetcode",
    title: "250 Problems Solved",
    subtitle: "76 Easy · 139 Medium · 35 Hard",
    date: "2025-08-31",
    level: "LeetCode Milestone",
    url: "https://leetcode.com/yourprofile",
    tags: ["algorithms", "ds"],
    score: 83,
    icon: SiLeetcode,
    iconStyle: "text-orange-400 text-2xl"
  },
  {
    id: "gh-top-contrib",
    category: "github",
    title: "Top OSS Contributor",
    subtitle: "Maintainer & contributor to multiple repos",
    date: "2025-07-12",
    url: "https://github.com/yourprofile",
    tags: ["open-source", "cli"],
    score: 72,
    icon: FiGithub,
    iconStyle: "text-slate-200 text-2xl"
  },
  {
    id: "cert-react",
    category: "certificate",
    title: "React Professional Certificate",
    subtitle: "Completed intensive frontend program",
    date: "2024-11-20",
    url: "#",
    tags: ["react", "frontend"],
    score: 95,
    icon: FiAward,
    iconStyle: "text-yellow-500 text-2xl"
  },
  {
    id: "hack-win",
    category: "other",
    title: "Hackathon Winner",
    subtitle: "1st Place - Build for Good",
    date: "2024-04-05",
    tags: ["hackathon", "team"],
    score: 60,
    icon: FiUsers,
     iconStyle:"text-blue-600 text-2xl"
  },
];


export const leetCodeBadges = [
  {
    card: "./leetCode/500days.png",
    alt: "500 Days Badge"
  },
  {
    card: "./leetCode/365days.png",
    alt: "365 Days Badge"
  },
  {
    card: "./leetCode/200days.png",
    alt: "200 Days Badge"
  },
  {
    card: "./leetCode/100days.png",
    alt: "100 Days Badge"
  },
  {
    card: "./leetCode/100days_2024.png",
    alt: "100 Days Badge 2024"
  },
];



export const githubAchievements = [
  {
    id: 1,
    name: "Pair Extraordinaire",
    img: "./gitHub/pairExtraordinaire.webp",
  },
  {
    id: 2,
    name: "YOLO",
    img: "./gitHub/yolo.webp",
  },
  {
    id: 3,
    name: "Pull Shark",
    img: "./gitHub/pullShark.webp",
  },
  {
    id: 4,
    name: "Quickdraw",
    img: "./gitHub/quickdraw.webp",
  },
];
