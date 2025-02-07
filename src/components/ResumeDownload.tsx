import { FaPlus } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { BsFiletypePdf } from "react-icons/bs";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
// import { useState } from "react";
// import { Checkbox } from "./ui/checkbox";

const ResumeDownload = () => {
  const [openInNewTab, setOpenInNewTab] = useState(false);

  useEffect(() => {
    setOpenInNewTab(false);
  }, []);

  return (
    <div className="w-full">
      <SectionHeading>Download My Resume</SectionHeading>

      <div className="flex flex-wrap justify-center gap-4 px-2 m-auto text-center sm:gap-8">
        <Button
          variant={"outline"}
          className="p-0 border shadow-lg w-60 rounded-xl h-fit border-muted-foreground"
          asChild
        >
          {openInNewTab && (
            <a
              href="/documents/Jeffrey_Hernandez_Standard_Resume_2025.pdf"
              // download={"Jeffrey_Hernandez_Standard_Resume_2025.pdf"}
              className="flex flex-col items-center gap-4 p-4 pb-8 text-xl w-fit"
              target="_blank"
              rel="noopener noreferrer"
            >
              Standard Resume
              <BsFiletypePdf className="size-20 text-muted-foreground-2" />
            </a>
          )}
          {!openInNewTab && (
            <a
              href="/documents/Jeffrey_Hernandez_Standard_Resume_2025.pdf"
              download={"/documents/Jeffrey_Hernandez_Standard_Resume_2025.pdf"}
              className="flex flex-col items-center gap-4 p-4 pb-8 text-xl w-fit"
            >
              Standard Resume
              <BsFiletypePdf className="size-20 text-muted-foreground-2" />
            </a>
          )}
        </Button>
        <Button
          variant={"outline"}
          className="p-0 border shadow-lg w-60 h-fit border-muted-foreground rounded-xl"
          asChild
        >
          {openInNewTab && (
            <a
              href="/documents/Jeffrey_Hernandez_Extended_Resume_2025.pdf"
              // download={"Jeffrey_Hernandez_Extended_Resume_2025.pdf"}
              className="flex flex-col items-center gap-4 p-4 pb-8 text-xl w-fit"
              target="_blank"
              rel="noopener noreferrer"
            >
              Extended Resume
              <div className="relative">
                <BsFiletypePdf className="size-20 text-muted-foreground-2" />
                <FaPlus className="absolute translate-x-1/2 -translate-y-1/2 size-6 top-1/2 right-1/2 text-muted-foreground-2" />
              </div>
            </a>
          )}
          {!openInNewTab && (
            <a
              href="/documents/Jeffrey_Hernandez_Extended_Resume_2025.pdf"
              download={"/documents/Jeffrey_Hernandez_Extended_Resume_2025.pdf"}
              className="flex flex-col items-center gap-4 p-4 pb-8 text-xl w-fit"
            >
              Extended Resume
              <div className="relative">
                <BsFiletypePdf className="size-20 text-muted-foreground-2" />
                <FaPlus className="absolute translate-x-1/2 -translate-y-1/2 size-6 top-1/2 right-1/2 text-muted-foreground-2" />
              </div>
            </a>
          )}
        </Button>
      </div>
      {/* <div>
        <Checkbox
          checked={openInNewTab}
          onCheckedChange={() => setOpenInNewTab}
          id="new-tab"
        />
        <label htmlFor="new-tab">Open file in new tab</label>
      </div> */}
    </div>
  );
};

export default ResumeDownload;
