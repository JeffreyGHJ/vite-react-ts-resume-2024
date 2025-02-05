import { FaPlus } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { BsFiletypePdf } from "react-icons/bs";
import { Button } from "./ui/button";

const ResumeDownload = () => {
  return (
    <div className="w-full">
      <SectionHeading>Download My Resume</SectionHeading>

      <div className="flex justify-center max-w-lg gap-8 m-auto text-center">
        <Button
          variant={"outline"}
          className="w-full p-0 border-2 rounded-xl h-fit border-muted-foreground"
          asChild
        >
          <a
            href="/src/assets/documents/Jeffrey_Hernandez_Standard_Resume_2025.pdf"
            download={"Jeffrey_Hernandez_Standard_Resume_2025.pdf"}
            className="flex flex-col items-center gap-4 p-4 pb-8 text-xl w-fit"
          >
            Standard Resume
            <BsFiletypePdf className="size-20 text-muted-foreground-2" />
          </a>
        </Button>
        <Button
          variant={"outline"}
          className="w-full p-0 border-2 h-fit border-muted-foreground rounded-xl"
          asChild
        >
          <a
            href="/src/assets/documents/Jeffrey_Hernandez_Extended_Resume_2025.pdf"
            download={"Jeffrey_Hernandez_Extended_Resume_2025.pdf"}
            className="flex flex-col items-center gap-4 p-4 pb-8 text-xl w-fit"
          >
            Extended Resume
            <div className="relative">
              <BsFiletypePdf className="size-20 text-muted-foreground-2" />
              <FaPlus className="absolute translate-x-1/2 -translate-y-1/2 size-6 top-1/2 right-1/2 text-muted-foreground-2" />
            </div>
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ResumeDownload;
