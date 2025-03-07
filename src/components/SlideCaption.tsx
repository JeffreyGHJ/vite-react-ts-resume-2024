import { BsChatSquareText } from "react-icons/bs";
import { Button } from "./ui/button";
import { useEffect } from "react";

const SlideCaption = ({
  caption,
  showCaptions,
  setShowCaptions,
  sectionName,
  index,
}: any) => {
  // display caption plaintext in raw HTML so that line breaks, bold letters, and other html can be rendered
  useEffect(() => {
    const el = document.getElementById(`caption-${sectionName}-${index}`);
    if (el) el.innerHTML = caption;
    // console.log("setting captions for: ", `caption-${sectionName}-${index}`);
  });

  return (
    <>
      {caption && showCaptions && (
        <div
          onClick={() => setShowCaptions(false)}
          id="caption-box"
          className={
            "absolute group cursor-pointer flex-col bottom-0 w-full h-fit flex-grow-1 flex items-center justify-center min-h-32 max-h-[37%]"
          }
        >
          <div
            id="paragraph-bounds"
            className="z-20 flex items-start justify-center w-full h-full max-h-full px-4 py-0 my-5 overflow-auto sm:px-8 md:px-10 "
          >
            <p
              id={`caption-${sectionName}-${index}`}
              className="relative text-sm text-white h-fit md:text-base"
            >
              {caption}
            </p>
            <div className="absolute invisible text-xs font-thin group-hover:visible text-primary/70 bottom-1 right-2 md:right-4">
              click to hide captions
            </div>
          </div>
          <div className="absolute w-full h-[100%]">
            <div
              id="gradient-end"
              className="w-full h-6 -mt-4 flex-grow-1 bg-linear-to-t from-black/85"
            ></div>
            <div
              id="gradient-transition"
              className="w-full h-[90%] flex-grow-1 bg-linear-to-t from-black to-black/85"
            ></div>
            <div id="gradient-bottom" className="w-full h-[55%] bg-black"></div>
          </div>
        </div>
      )}
      {caption && !showCaptions && (
        <div className="relative flex justify-end w-full h-0">
          <Button
            title="Show captions"
            variant={"outline"}
            onClick={() => setShowCaptions(true)}
            className="absolute px-2 shadow-md bottom-1 right-2 border-muted-2 w-fit h-fit text-primary/70 group hover:bg-background hover:border-primary dark:hover:text-white animate-bounce duration-2000 hover:duration-0"
          >
            <BsChatSquareText className="cursor-pointer pointer-events-auto duration-1500 size-8 animate-pulse group-hover:animate-none group-hover:duration-0" />
          </Button>
        </div>
      )}
    </>
  );
};

export default SlideCaption;
