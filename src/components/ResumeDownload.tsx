import { FaPlus } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { BsFiletypePdf } from "react-icons/bs";
import { Button } from "./ui/button";
import { useState } from "react";
import { Switch } from "./ui/switch";
import Glow from "./Glow";
import useReferrer from "@/lib/hooks/useReferrer";

const ResumeDownload = () => {
  const [openInNewTab, setOpenInNewTab] = useState(true);
  const referrer = useReferrer();

  return (
    <div className="w-full">
      <SectionHeading>Download My Resume</SectionHeading>

      <div className="flex flex-wrap justify-center gap-4 px-2 m-auto text-center sm:gap-8">
        <Glow className="rounded-xl">
          <Button
            variant={"outline"}
            className="p-0 border shadow-lg w-60 rounded-xl h-fit border-muted-foreground"
            asChild
          >
            <a
              href={
                referrer.includes("upwork.com")
                  ? "/documents/Jeffrey_Hernandez_Standard_Upwork_Resume.pdf"
                  : "/documents/Jeffrey_Hernandez_Standard_Resume.pdf"
              }
              download={
                openInNewTab
                  ? referrer.includes("upwork.com")
                    ? "Jeffrey_Hernandez_Standard_Upwork_Resume.pdf"
                    : "Jeffrey_Hernandez_Standard_Resume.pdf"
                  : null
              }
              className="flex flex-col items-center gap-4 p-4 pb-8 text-xl w-fit"
              target={openInNewTab ? undefined : "_blank"}
              rel={openInNewTab ? undefined : "noopener noreferrer"}
            >
              Standard Resume
              <BsFiletypePdf className="size-20 text-muted-foreground-2" />
            </a>
          </Button>
        </Glow>
        <Glow className="rounded-xl">
          <Button
            variant={"outline"}
            className="p-0 border shadow-lg w-60 h-fit border-muted-foreground rounded-xl"
            asChild
          >
            <a
              href={
                referrer.includes("upwork.com")
                  ? "/documents/Jeffrey_Hernandez_Extended_Upwork_Resume.pdf"
                  : "/documents/Jeffrey_Hernandez_Extended_Resume.pdf"
              }
              download={
                openInNewTab
                  ? referrer.includes("upwork.com")
                    ? "Jeffrey_Hernandez_Extended_Upwork_Resume.pdf"
                    : "Jeffrey_Hernandez_Extended_Resume.pdf"
                  : null
              }
              className="flex flex-col items-center gap-4 p-4 pb-8 text-xl w-fit"
              target={openInNewTab ? undefined : "_blank"}
              rel={openInNewTab ? undefined : "noopener noreferrer"}
            >
              Extended Resume
              <div className="relative">
                <BsFiletypePdf className="size-20 text-muted-foreground-2" />
                <FaPlus className="absolute translate-x-1/2 -translate-y-1/2 size-6 top-1/2 right-1/2 text-muted-foreground-2" />
              </div>
            </a>
          </Button>
        </Glow>
      </div>
      <div className="flex items-center justify-center w-full gap-2 mt-8 text-sm text-muted-foreground">
        <Switch
          checked={openInNewTab}
          onCheckedChange={setOpenInNewTab}
          id="new-tab"
        />
        <label htmlFor="new-tab">
          {openInNewTab ? "Download and save file" : "Open file in new tab"}
        </label>
      </div>
    </div>
  );
};

export default ResumeDownload;
