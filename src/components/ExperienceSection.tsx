import Experience from '@/lib/constants/Experience'
import SectionHeading from './SectionHeading'

const ExperienceSection = () => {
  return (
    <>
      <SectionHeading>Work Experience</SectionHeading>
      <div className="flex flex-wrap justify-center w-full gap-6 p-1 sm:p-0 leading-[1.4] tracking-tight">
        {Experience.map((experience) => (
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
          </div>
        ))}
      </div>
    </>
  )
}

export default ExperienceSection