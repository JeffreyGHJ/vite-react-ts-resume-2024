import { FaPlus } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { BsFiletypePdf } from "react-icons/bs";
import { Button } from "./ui/button";

const ResumeDownload = () => {
  return (
    <div className="w-full">
      <SectionHeading>Download My Resume</SectionHeading>

      <div className="flex flex-wrap justify-center gap-4 px-2 m-auto text-center sm:gap-8">
        <Button
          variant={"outline"}
          className="p-0 border shadow-lg w-60 rounded-xl h-fit border-muted-foreground"
          asChild
        >
          <a
            href="/public/documents/Jeffrey_Hernandez_Standard_Resume_2025.pdf"
            download={"Jeffrey_Hernandez_Standard_Resume_2025.pdf"}
            className="flex flex-col items-center gap-4 p-4 pb-8 text-xl w-fit"
          >
            Standard Resume
            <BsFiletypePdf className="size-20 text-muted-foreground-2" />
          </a>
        </Button>
        <Button
          variant={"outline"}
          className="p-0 border shadow-lg w-60 h-fit border-muted-foreground rounded-xl"
          asChild
        >
          <a
            href="/public/documents/Jeffrey_Hernandez_Extended_Resume_2025.pdf"
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
