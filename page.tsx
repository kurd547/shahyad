import HeroSection from "@/components/Hero/HeroSection";
import CustomCursor from "@/components/Common/CustomCursor";
import GridSection from "@/components/Grid/GridSection";
import ServiceSection from "@/components/Service/ServiceSection";
import ProjectsSection from "@/components/Projects/ProjectsSection";
import ExperienceSection from "@/components/Experience/ExperienceSection";
import TestimonialsSection from "@/components/Testimonials/TestimonialsSection";
import SkillsSection from "@/components/Skills/SkillsSection";
import AchievementsSection from "@/components/Achievements/AchievementsSection";
import ApproachSection from "@/components/Approach/ApproachSection";
import ContactSection from "@/components/Contact/ContactSection";
import Footer from "@/components/Footer/Footer";
import ScrollProgress from "@/components/Common/ScrollProgress";

const sections = [
  { id: "hero", Component: HeroSection },
  { id: "grid", Component: GridSection },
  { id: "services", Component: ServiceSection },
  { id: "projects", Component: ProjectsSection },
  { id: "experience", Component: ExperienceSection },
  { id: "testimonials", Component: TestimonialsSection },
  { id: "skills", Component: SkillsSection },
  { id: "achievements", Component: AchievementsSection },
  { id: "approach", Component: ApproachSection },
  { id: "contact", Component: ContactSection },
];

export default function Home() {
  return (
    <main className="relative w-full bg-black text-white flex flex-col items-center justify-center overflow-hidden mx-auto select-none before:absolute before:inset-0 before:[background-size:20px_20px] before:[background-image:radial-gradient(#404040_1px,transparent_1px)]">
      <CustomCursor />
      <ScrollProgress />
      {sections.map(({ id, Component }) => (
        <section id={id} key={id} className="w-full">
          <Component />
        </section>
      ))}
      <Footer />
    </main>
  );
}
