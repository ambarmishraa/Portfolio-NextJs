import Navbar from "@/components/Navbar";
import Hero from "@/components/hero/Hero";
import HeroOne from "@/components/hero/HeroOne";
import HeroTwo from "@/components/hero/HeroTwo";
import Project from "@/app/project/Project";
import ProjectOne from "./project/ProjectOne";
import ProjectTwo from "./project/ProjectTwo";
import ProjectThree from "./project/ProjectThree"
import Skills from "./skills/skills";
import Projects from "./Projects/Projects";





export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth scrollbar-none">
      {/* <Hero />
      <HeroOne />
      <HeroTwo />
      <Project />
      <ProjectOne />
      <ProjectTwo />
      <ProjectThree /> */}
      <Hero />
      <Skills />
      <Projects />

    </div>
    // <Navbar />
    // <Project />
    // <ProjectOne />
    // <ProjectTwo />
    // <ProjectThree/>

  );
}