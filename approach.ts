import { RiPokerClubsFill, RiPokerHeartsFill, RiPokerDiamondsFill, RiPokerSpadesFill } from "react-icons/ri";
import { IconType } from "react-icons";

interface ApproachStep {
  title: string;
  phase: string;
  description: string;
  bg: string;
  colors?: number[][];
  value: string;
  symbol: string | IconType; // either string or component
}

export const ApproachSteps: ApproachStep[] = [
  {
    title: "Research & Analysis",
    phase: "Step 1",
    description: "We dive deep into your market and competitors to understand the landscape.",
    bg: "bg-blue-500",
    colors: undefined,
    value: "1",
    symbol: RiPokerClubsFill, // component, not JSX
  },
  {
    title: "UI/UX Design",
    phase: "Step 2",
    description: "We craft intuitive and visually stunning user interfaces tailored to your audience.",
    bg: "bg-blue-600",
    colors: [
      [255, 166, 158],
      [221, 255, 247]
    ],
    value: "2",
    symbol: RiPokerDiamondsFill,
  },
  {
    title: "Development",
    phase: "Step 3",
    description: "Our engineers turn designs into fast, scalable, and maintainable code.",
    bg: "bg-blue-700",
    colors: [[125, 211, 252]],
    value: "3",
    symbol: RiPokerSpadesFill,
  },
  {
    title: "Launch & Support",
    phase: "Step 4",
    description: "We launch your product and provide ongoing maintenance and improvements.",
    bg: "bg-blue-800",
    colors: [[180, 200, 255]],
    value: "4",
    symbol: RiPokerHeartsFill,
  }
];
