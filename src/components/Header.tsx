import { CheckIcon, CopyIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import ParticleCanvas from "./ParticleCanvas";
import { SiLeetcode } from "react-icons/si";
import { Button } from "./ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [showCheck, setShowCheck] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("Jeffreyghj@gmail.com");
    setShowCheck(true);
    setTimeout(() => {
      setShowCheck(false);
    }, 2000);
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-96 ">
      <ParticleCanvas />
      <div className="">
        <div className="text-5xl font-thin leading-[1] text-center sm:text-6xl">
          Jeffrey Hernandez
        </div>
        <div className="relative m-auto my-4 w-fit h-fit">
          <div className="absolute bottom-0 -left-3 animate-wave z-[90]">
            <div className="relative z-[90] text-3xl h-fit w-fit">🖐️</div>
          </div>
          <img
            src={"/Me.jpg"}
            className="relative rounded-full  size-24 z-[89] m-auto border-2 border-secondary shadow-md"
          ></img>
        </div>

        <div className="mt-4 text-center z-[90] relative">
          Hi, my name is Jeff and I like to build software!
        </div>

        <div className="flex items-center justify-center gap-2 mt-4 transition-all">
          <div className=" h-7 flex items-center font-semibold text-center z-[90] relative border rounded-full w-fit gap-2 pl-4 pr-3">
            Jeffreyghj@gmail.com
            <Button
              variant={"ghost"}
              onClick={() => handleCopyEmail()}
              className="flex items-center h-full p-0 pl-2 transition-all border-l rounded-none hover:bg-transparent"
            >
              <CopyIcon
                className={cn(
                  "transition-all ",
                  showCheck
                    ? "opacity-0 duration-100"
                    : "opacity-100 duration-500"
                )}
              />
              <CheckIcon
                className={cn(
                  "transition-all absolute",
                  showCheck
                    ? "opacity-100 duration-500"
                    : "opacity-0 duration-500"
                )}
              />
            </Button>
          </div>
          {/* <GitHubLogoIcon className="size-6" />
          <SiLeetcode className="size-6" /> */}
        </div>

        <div className="z-[99] relative flex justify-center text-muted-foreground-2 mt-4 gap-2">
          <Button
            title="Link to my GitHub profile"
            variant={"ghost"}
            className="flex flex-col items-center p-0 w-fit h-fit hover:bg-transparent"
            asChild
          >
            <a
              href="https://github.com/JeffreyGHJ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubLogoIcon className="size-6" />
            </a>
            {/* <div className="text-xs">GitHub</div> */}
          </Button>
          <Button
            title="Link to my LeetCode profile"
            variant={"ghost"}
            className="flex flex-col items-center p-0 w-fit h-fit hover:bg-transparent"
            asChild
          >
            <a
              href="https://leetcode.com/u/JeffreyGHJ/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLeetcode className="size-6" />
            </a>
            {/* <div className="text-xs">LeetCode</div> */}
          </Button>
        </div>
      </div>
      <div className="absolute flex flex-col bottom-0 z-[20] w-full h-36 pointer-events-none">
        <div className="flex h-full bg-gradient-to-t from-background"></div>
        <div className="w-full h-5 bg-background" />
      </div>
    </div>
  );
};

export default Header;
