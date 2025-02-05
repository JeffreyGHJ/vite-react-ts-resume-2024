import ParticleCanvas from "@/components/ParticleCanvas";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Intro from "@/components/Intro.js";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import AppFooter from "@/components/AppFooter";
import ResumeDownload from "@/components/ResumeDownload";

function Home() {
  const bodyStyles = window.getComputedStyle(document.body);
  console.log(bodyStyles.getPropertyValue("--primary"));

  return (
    <div className="transition-all duration-1000">
      <div className="relative flex items-center justify-center w-full border border-secondary h-80">
        <ParticleCanvas />
        <div className="text-5xl font-thin leading-[1] text-center sm:text-6xl">
          Jeffrey Hernandez
        </div>
      </div>
      <ThemeSwitcher />
      <div className="flex flex-col items-center max-w-5xl m-auto">
        <Intro />
        <ResumeDownload />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <AppFooter />
      </div>
    </div>
  );
}
export default Home;
