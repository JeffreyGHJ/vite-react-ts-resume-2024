import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Glow from "./Glow";

const Skill = ({ index, skill, updateGlow }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsExpanded(false);
  }, []);

  const getSkillStyle = () => {
    return isExpanded ? "w-52 h-40" : "";
  };

  return (
    <Glow recalculateBounds={updateGlow} className="rounded-xl">
      <div
        tabIndex={index}
        className="relative"
        // onClick={() => setIsExpanded(!isExpanded)}
      >
        <div
          className={cn(
            "flex flex-col p-2 gap-1 border-muted-foreground text-muted-foreground-2 border-solid rounded-lg border shadow-lg cursor-pointer transition-all",
            getSkillStyle()
          )}
        >
          <div className="flex w-full gap-2 h-fit">
            <div
              className={
                " transition-all duration-300 " +
                (isExpanded ? "text-4xl" : "text-[2.5rem] sm:text-7xl")
              }
            >
              {skill.icon}
            </div>
            {isExpanded && (
              <div className="w-full text-base items-center justify-end flex leading-[1]">
                {skill.name}
              </div>
            )}
          </div>
          {isExpanded && (
            <div className="h-full overflow-auto text-xs leading-tight tracking-tight">
              {skill.details}
            </div>
          )}
        </div>
        <div className="absolute bottom-0 px-1 text-[7px] sm:text-[10px] rounded-lg leading-[0.7] translate-y-1/2 bg-background right-[2px] sm:right-[5px]">
          {skill.name}
        </div>
      </div>
    </Glow>
  );
};
export default Skill;
