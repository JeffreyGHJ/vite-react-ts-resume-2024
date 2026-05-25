import PersonalProjects from "@/lib/constants/PersonalProjects";
import SectionHeading from "./SectionHeading";
import Glow from "./Glow";

const PersonalProjectsSection = ({ expandedCard }: any) => {
  function parseHighlight(text: string) {
    const parts: { type: "text" | "link"; content: string; url?: string }[] = [];

    // short-circuit: If the text does not contain a link, return the text as plain text
    if (!text.includes("](")) {
      parts.push({ type: "text", content: text });
      return parts;
    }

    const segments = text.split("[");

    // Everything before the first `[` is plain text
    if (segments[0]) {
      parts.push({ type: "text", content: segments[0] });
    }

    for (let i = 1; i < segments.length; i++) {
      const segment = segments[i];

      if (segment.includes("](")) {
        const closingBracket = segment.indexOf("](");
        const linkText = segment.slice(0, closingBracket);

        const afterBracket = segment.slice(closingBracket + 2); // skip past `](`
        const closingParen = afterBracket.indexOf(")");
        const url = afterBracket.slice(0, closingParen);
        const trailing = afterBracket.slice(closingParen + 1);

        parts.push({ type: "link", content: linkText, url });
        if (trailing) {
          parts.push({ type: "text", content: trailing });
        }
      } else {
        // Not actually a link, restore the `[` we split on
        parts.push({ type: "text", content: "[" + segment });
      }
    }

    return parts;
  }
  return (
    <div className="w-full max-w-5xl m-auto">
      <SectionHeading>Personal Projects</SectionHeading>
      <div className="flex flex-wrap justify-center w-full gap-6 p-1 tracking-tight leading-[1.4] sm:p-0">
        {PersonalProjects.map((project, index) => (
          <Glow recalculateBounds={expandedCard} key={index} className="flex rounded-lg">
            <div className="flex flex-col p-3 border rounded-lg shadow-lg border-muted-foreground w-80 sm:w-96">
              {project.site_url ? (
                <a href={project.site_url} target="_blank" rel="noopener noreferrer">
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
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="mb-2">
                        {parseHighlight(highlight).map((part, i) =>
                          part.type === "link" ? (
                            <a key={i} href={part.url} target="_blank" rel="noopener noreferrer" className="underline">
                              {part.content}
                            </a>
                          ) : (
                            <span key={i}>{part.content}</span>
                          ),
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 font-bold">{project.timeframe}</div>
              </div>
            </div>
          </Glow>
        ))}
      </div>
    </div>
  );
};
export default PersonalProjectsSection;
