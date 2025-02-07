import { Skills } from "@/lib/constants/Skills";
import Skill from "./Skill";
import SectionHeading from "./SectionHeading";

const SkillsSection = () => {
  const bodyStyles = window.getComputedStyle(document.body);
  console.log(bodyStyles.getPropertyValue("--primary"));

  return (
    <div className="my-16 space-y-3">
      <SectionHeading>Skills</SectionHeading>
      <div className="flex flex-wrap justify-center gap-2 mb-2">
        {Object.values(Skills.primary).map((skill: any, index: number) => {
          console.log(skill);
          return <Skill index={index} skill={skill} />;
        })}
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {Object.values(Skills.secondary).map((skill: any, index: number) => {
          console.log(skill);
          return <Skill index={index} skill={skill} />;
        })}
      </div>
    </div>
  );
};
export default SkillsSection;
