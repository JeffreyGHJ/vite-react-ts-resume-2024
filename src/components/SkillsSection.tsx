import { Skills } from "@/lib/constants/Skills";
import Skill from "./Skill";
import SectionHeading from "./SectionHeading";

const SkillsSection = ({ expandedCard }: any) => {
  return (
    <div className="my-16 space-y-3">
      <SectionHeading>Skills</SectionHeading>
      <div className="flex flex-wrap justify-center gap-2 mb-2">
        {Object.values(Skills.group1).map((skill: any, index: number) => {
          return (
            <Skill
              key={index}
              index={index}
              skill={skill}
              updateGlow={expandedCard}
            />
          );
        })}
      </div>
      <div className="flex flex-wrap justify-center gap-2 mb-2">
        {Object.values(Skills.primary).map((skill: any, index: number) => {
          return (
            <Skill
              key={index}
              index={index}
              skill={skill}
              updateGlow={expandedCard}
            />
          );
        })}
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {Object.values(Skills.secondary).map((skill: any, index: number) => {
          return (
            <Skill
              key={index}
              index={index}
              skill={skill}
              updateGlow={expandedCard}
            />
          );
        })}
      </div>
      <div className="flex flex-wrap justify-center gap-2 mb-2">
        {Object.values(Skills.group2).map((skill: any, index: number) => {
          return (
            <Skill
              key={index}
              index={index}
              skill={skill}
              updateGlow={expandedCard}
            />
          );
        })}
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-2">
        {Object.values(Skills.group4).map((skill: any, index: number) => {
          return (
            <Skill
              key={index}
              index={index}
              skill={skill}
              updateGlow={expandedCard}
            />
          );
        })}
      </div>
      <div className="flex flex-wrap justify-center gap-2 mb-2">
        {Object.values(Skills.group3).map((skill: any, index: number) => {
          return (
            <Skill
              key={index}
              index={index}
              skill={skill}
              updateGlow={expandedCard}
            />
          );
        })}
      </div>
    </div>
  );
};
export default SkillsSection;
