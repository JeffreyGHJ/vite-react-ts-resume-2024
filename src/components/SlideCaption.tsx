import { cn } from "@/lib/utils";
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
    console.log("setting captions for: ", `caption-${sectionName}-${index}`);
  });

  return (
    <>
      {caption && showCaptions && (
        <div
          onClick={() => setShowCaptions(false)}
          id="caption-box"
          className={cn(
            "absolute group cursor-pointer flex-col bottom-0 w-full h-fit  flex-grow-1 flex items-center justify-end",
            showCaptions ? "max-h-[30%]" : "max-h-10"
          )}
        >
          <div
            id="paragraph-bounds"
            className="z-20 flex items-start justify-center w-full max-h-full px-10 py-5 pb-6 mt-2 mb-8 overflow-auto text-xl h-fit"
          >
            <p
              id={`caption-${sectionName}-${index}`}
              className="relative text-white h-fit"
            >
              {caption}
            </p>
            <div className="absolute invisible text-base group-hover:visible text-primary/70 bottom-1 right-4">
              click or tap to hide captions
            </div>
          </div>
          <div className="absolute w-full h-[100%]">
            <div
              id="gradient-end"
              className="w-full h-6 -mt-6 flex-grow-1 bg-gradient-to-t from-black/85"
            ></div>
            <div
              id="gradient-transition"
              className="w-full h-[90%] flex-grow-1 bg-gradient-to-t from-black to-black/85"
            ></div>
            <div id="gradient-bottom" className="w-full h-[95%] bg-black"></div>
          </div>
        </div>
      )}
      {caption && !showCaptions && (
        <div className="absolute bottom-0 flex justify-end w-full p-2 h-fit animate-bounce duration-2000">
          <Button
            variant={"outline"}
            onClick={() => setShowCaptions(true)}
            className="p-2 cursor-pointer hover:bg-background h-fit text-muted-2"
          >
            <BsChatSquareText className="duration-1000 size-8 animate-pulse" />
          </Button>
        </div>
      )}
    </>
  );
};

export default SlideCaption;
