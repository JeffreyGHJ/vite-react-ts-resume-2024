import Experience from "@/lib/constants/Experience";
import SectionHeading from "./SectionHeading";
import ExperienceSectionCarousel from "./ExperienceSectionCarousel";

const images = import.meta.glob(
  "/src/assets/slides/ghostswap/*.{jpg,jpeg,png,gif}",
  { eager: true }
);

const ExperienceSection = () => {
  console.log("Images:", images);

  return (
    <>
      <SectionHeading>Work Experience</SectionHeading>
      <div className="flex flex-wrap justify-center w-full gap-6 p-1 sm:p-0 leading-[1.4] tracking-tight">
        {[...Experience].reverse().map((experience) => (
          <div className="flex flex-col rounded-lg border-[3px] border-muted-foreground w-80 sm:w-96 p-1 sm:p-3">
            <a href={experience.url} target="_blank" rel="noopener noreferrer">
              <div className="flex items-center justify-center p-6 mb-3 text-2xl font-semibold text-center transition-transform duration-500 cursor-pointer sm:text-3xl hover:scale-110">
                {experience.name}
              </div>
            </a>
            <div className="flex flex-col h-full p-3 text-muted-foreground-2">
              <div className="font-bold">{experience.role}</div>
              <ul className="h-full pl-4 my-4">
                {experience.details.map((detail) => (
                  <li className="mb-2 list-disc">{detail}</li>
                ))}
              </ul>
              <div className="font-bold">
                [{experience.location}] {experience.timeframe}
              </div>
            </div>
            <ExperienceSectionCarousel />
            {/* <div className="flex justify-center h-fit">
              <Carousel className="w-full h-fit">
                <CarouselContent>
                  {Object.keys(images).map((image, index) => (
                    <CarouselItem key={index} className="">
                      <img
                        src={image as string}
                        alt={`image-${index}`}
                        className="object-cover h-full border"
                      />
                    </CarouselItem>
                  ))}

                  <CarouselItem>...</CarouselItem>
                  <CarouselItem>...</CarouselItem>
                </CarouselContent>
                <div className="relative h-10 mx-14">
                  <CarouselPrevious className="absolute" />
                  <CarouselNext />
                </div>
              </Carousel>
            </div> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default ExperienceSection;
