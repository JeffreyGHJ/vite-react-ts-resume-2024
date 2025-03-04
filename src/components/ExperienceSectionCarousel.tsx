import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { ImageIcon } from "@radix-ui/react-icons";
import { BsX } from "react-icons/bs";
import { useEffect, useState } from "react";
import SlideCaption from "./SlideCaption";

const scrollIntoViewOptions: ScrollIntoViewOptions = {
  behavior: "smooth",
  block: "center",
};

const ExperienceSectionCarousel = ({
  index,
  expandedCard,
  setExpandedCard,
  sectionName,
}: any) => {
  const [images, setImages] = useState([]);
  const [showCaptions, setShowCaptions] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedIndices, setLoadedIndices] = useState<number[]>([]);

  useEffect(() => {
    // Update which items should be loaded
    const visibleRange = getVisibleRange(currentIndex, images.length);
    setLoadedIndices(visibleRange);
  }, [currentIndex, images.length]);

  const getJson = async (filename: string) => {
    try {
      const response = await fetch(`/slides/${filename}/images.json`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error("Error loading JSON:", error);
    }
  };

  useEffect(() => {
    getJson(sectionName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollCarouselToCenter = () => {
    setTimeout(() => {
      document
        .getElementById(`${sectionName}-carousel`)
        ?.scrollIntoView(scrollIntoViewOptions);
    }, 50);
  };

  const recenterAfterCarouselClose = () => {
    setTimeout(() => {
      document
        .getElementById(sectionName)
        ?.scrollIntoView(scrollIntoViewOptions);
    }, 50);
  };

  const isVideoFile = (srcString: string) => {
    return srcString.split(".")[srcString.split(".").length - 1] === "mp4";
  };

  // Generate an array of indices to display based on the current index
  const getVisibleRange = (current: number, total: number) => {
    const start = Math.max(0, current - 2);
    const end = Math.min(total, current + 3);
    return Array.from({ length: end - start }, (_, i) => i + start);
  };

  // Check if an index is in the loaded range
  const shouldRenderItem = (idx: number) => {
    return loadedIndices.includes(idx);
  };

  return (
    <>
      {expandedCard === index && (
        <div
          id={`${sectionName}-carousel`}
          className="flex justify-center w-full h-fit"
        >
          <Carousel className="w-full h-screen max-h-screen py-8 pb-20 *:h-full">
            <CarouselContent id="content" className="h-full *:h-full w-full">
              {images.length > 0 &&
                images.map((image: any, idx: number) => (
                  <CarouselItem
                    key={idx}
                    className="flex flex-col items-center justify-center"
                  >
                    {shouldRenderItem(idx) ? (
                      <div className="relative h-full select-none">
                        {!isVideoFile(image.src) ? (
                          <img
                            loading="lazy"
                            src={`/slides/${sectionName}/${image?.src}`}
                            alt={`image-${idx}`}
                            className="object-contain h-full"
                          />
                        ) : (
                          <video
                            playsInline
                            autoPlay={true}
                            muted
                            loop
                            controls
                            preload="none"
                            className="object-contain h-full"
                          >
                            <source
                              src={`/slides/${sectionName}/${image?.src}`}
                              type="video/mp4"
                            />
                          </video>
                        )}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full w-full"></div>
                    )}
                    {shouldRenderItem(idx) && (
                      <SlideCaption
                        caption={image.caption}
                        showCaptions={showCaptions}
                        setShowCaptions={setShowCaptions}
                        sectionName={sectionName}
                        index={idx}
                      />
                    )}
                  </CarouselItem>
                ))}
            </CarouselContent>
            <div style={{ height: "3rem" }} className="relative mt-4 mx-14">
              <CarouselPrevious
                updateIndex={() => setCurrentIndex(currentIndex - 1)}
                className="size-12 [&>svg]:size-6 hover:stroke-primary stroke-muted-2 border-primary/40 hover:bg-transparent hover:border-primary"
              />
              <CarouselNext
                updateIndex={() => setCurrentIndex(currentIndex + 1)}
                className="size-12 [&>svg]:size-6 hover:stroke-primary stroke-muted-2 border-primary/40 hover:bg-transparent hover:border-primary"
              />
              <Button
                size={"sm"}
                variant={"ghost"}
                onClick={() => {
                  setExpandedCard(null);
                  recenterAfterCarouselClose();
                  setCurrentIndex(0);
                }}
                className="absolute translate-x-1/2 -translate-y-1/2 hover:bg-transparent top-1/2 right-1/2 text-muted-2"
              >
                <BsX className="size-12" />
              </Button>
            </div>
          </Carousel>
        </div>
      )}
      {expandedCard !== index && images.length > 0 && (
        <Button
          variant={"secondary"}
          onClick={() => {
            setExpandedCard(index);
            scrollCarouselToCenter();
          }}
          className="w-full cursor-pointer text-lg text-primary/70 dark:hover:text-primary dark:text-muted-foreground/70"
        >
          View Slideshow
          <ImageIcon className="size-5" />
        </Button>
      )}
    </>
  );
};

export default ExperienceSectionCarousel;
