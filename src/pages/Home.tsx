import ThemeSwitcher from "@/components/ThemeSwitcher";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import AppFooter from "@/components/AppFooter";
import ResumeDownload from "@/components/ResumeDownload";
import Header from "@/components/Header";
import GlowArea from "@/components/GlowArea";

function Home() {
  // Useful debug
  // const bodyStyles = window.getComputedStyle(document.body);
  // console.log(bodyStyles.getPropertyValue("--primary"));

  return (
    <div className="max-w-[100vw] overflow-x-hidden transition-colors duration-500">
      <Header />
      <ThemeSwitcher />
      <GlowArea>
        <ResumeDownload />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <AppFooter />
      </GlowArea>
    </div>
  );
}
export default Home;
