import Education from "@/lib/constants/Education";
import SectionHeading from "./SectionHeading";
import Glow from "./Glow";

const EducationSection = () => {
  return (
    <>
      <SectionHeading>Education</SectionHeading>
      <div className="flex flex-wrap justify-center w-full gap-6 p-1 tracking-tight leading-[1.4] sm:p-0">
        {Education.map((item, index) => (
          <Glow key={index} className="flex rounded-lg">
            <div className="flex flex-col p-1 border rounded-lg shadow-lg border-muted-foreground w-80 sm:w-96 sm:p-3">
              <a href={item.site_url} target="_blank" rel="noopener noreferrer">
                <div className="flex content-center justify-center w-full h-24 text-5xl rounded-sm cursor-pointer bg-muted-2 dark:bg-muted-foreground-2">
                  <img
                    src={item.image_url}
                    className="p-4 transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </a>
              <div className="flex flex-col h-full p-3 text-muted-foreground-2">
                <div className="mb-4 font-bold">{item.role}</div>
                <div className="h-full mb-4">{item.description}</div>
                <div className="font-bold">
                  [{item.location}] {item.timeframe}
                </div>
              </div>
            </div>
          </Glow>
        ))}
      </div>
    </>
  );
};
export default EducationSection;
