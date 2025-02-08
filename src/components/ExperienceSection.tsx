import Experience from "@/lib/constants/Experience";
import SectionHeading from "./SectionHeading";
import ExperienceSectionCarousel from "./ExperienceSectionCarousel";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const ExperienceSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    setExpandedCard(null);
  }, []);

  return (
    <div
      className={cn(
        expandedCard === null ? "max-w-5xl" : "w-[calc(100vw-2.5rem)]"
      )}
    >
      <SectionHeading>Work Experience</SectionHeading>
      <div className="flex flex-wrap justify-center w-full gap-6 p-1 sm:p-0 leading-[1.4] tracking-tight">
        {[...Experience].reverse().map((experience, index) => (
          <div
            id={index.toString()}
            key={index}
            className={cn(
              "flex flex-col items-center rounded-lg border-[1px] border-muted-foreground shadow-lg p-1 sm:p-3",
              expandedCard === index ? "w-[100vw]" : "w-80 sm:w-96"
            )}
          >
            <a href={experience.url} target="_blank" rel="noopener noreferrer">
              <div className="flex items-center justify-center p-6 mb-3 text-2xl font-semibold text-center transition-transform duration-500 cursor-pointer sm:text-3xl hover:scale-110">
                {experience.name}
              </div>
            </a>
            <div className="flex flex-col h-full p-3 w-fit text-muted-foreground-2">
              <div className="font-bold">{experience.role}</div>
              <ul className="h-full pl-4 my-4">
                {experience.details.map((detail, index) => (
                  <li key={index} className="mb-2 list-disc">
                    {detail}
                  </li>
                ))}
              </ul>
              <div className="font-bold">
                [{experience.location}] {experience.timeframe}
              </div>
            </div>
            <ExperienceSectionCarousel
              index={index}
              expandedCard={expandedCard}
              setExpandedCard={setExpandedCard}
              sectionName={experience.sectionName}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
