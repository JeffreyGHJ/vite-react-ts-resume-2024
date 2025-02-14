import ThemeSwitcher from "@/components/ThemeSwitcher";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import AppFooter from "@/components/AppFooter";
import ResumeDownload from "@/components/ResumeDownload";
import Header from "@/components/Header";

function Home() {
  // Useful debug
  // const bodyStyles = window.getComputedStyle(document.body);
  // console.log(bodyStyles.getPropertyValue("--primary"));

  return (
    <div className="transition-all duration-1000 max-w-[100vw] overflow-x-hidden">
      <Header />
      <ThemeSwitcher />
      <ResumeDownload />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <AppFooter />
    </div>
  );
}
export default Home;
