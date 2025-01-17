import Projects from '@/lib/constants/Projects'
import SectionHeading from './SectionHeading'

const ProjectsSection = () => {
  return (
    <div className="w-full">
      <SectionHeading>Personal Projects</SectionHeading>
      <div className="flex flex-wrap justify-center w-full gap-6 p-1 tracking-tight leading-[1.4] sm:p-0">
        {Projects.map((project) => (
          <div className="flex flex-col rounded-lg border-[3px] border-muted-foreground w-80 sm:w-96 p-3">
            {project.site_url ? (
              <a
                href={project.site_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center justify-center my-3 text-3xl font-semibold text-center transition-transform duration-500 cursor-pointer min-h-20 hover:scale-110">
                  {project.name}
                </div>
              </a>
            ) : (
              <div className="flex items-center justify-center p-6 text-3xl font-semibold text-center transition-transform duration-500 cursor-default hover:scale-110">
                {project.name}
              </div>
            )}
            <div className="flex flex-col h-full p-3 text-muted-foreground-2">
              <div className="font-bold">{project.role}</div>
              <div className="my-3">{project.description}</div>
              <div className="h-full pl-4 ">
                <ul className="list-disc">
                  {project.highlights.map((highlight) => (
                    <li className="mb-2">{highlight}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 font-bold">
                [{project.location}] {project.timeframe}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default ProjectsSection
