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

  return (
    <>
      {expandedCard === index && (
        <div
          id={`${sectionName}-carousel`}
          className="flex justify-center w-full h-fit"
        >
          <Carousel className="w-full h-screen max-h-screen py-8 pb-20 [&>*]:h-full">
            <CarouselContent
              id="content"
              className="h-full [&>*]:h-full w-full "
            >
              {images.length > 0 &&
                images?.map((image: any, index) => (
                  <CarouselItem key={index} className="flex justify-center">
                    {!isVideoFile(image.src) ? (
                      <img
                        src={`/slides/${sectionName}/${image?.src}`}
                        alt={`image-${index}`}
                        className="object-contain"
                      />
                    ) : (
                      <video playsInline autoPlay muted loop controls>
                        <source
                          src={`/slides/${sectionName}/${image?.src}`}
                          type="video/mp4"
                        />
                      </video>
                    )}
                  </CarouselItem>
                ))}
            </CarouselContent>
            <div style={{ height: "3rem" }} className="relative mt-4 mx-14">
              <CarouselPrevious className="size-12 [&>svg]:size-6 hover:stroke-primary stroke-muted-2 border-primary/40 hover:bg-transparent hover:border-primary" />
              <CarouselNext className="size-12 [&>svg]:size-6 hover:stroke-primary stroke-muted-2 border-primary/40 hover:bg-transparent hover:border-primary" />
              <Button
                size={"sm"}
                variant={"ghost"}
                onClick={() => {
                  setExpandedCard(null);
                  recenterAfterCarouselClose();
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
          onClick={() => {
            setExpandedCard(index);
            scrollCarouselToCenter();
          }}
          variant={"ghost"}
          className="text-sm text-primary/70 dark:text-muted-foreground/70"
        >
          View Slideshow
          <ImageIcon className="size-5" />
        </Button>
      )}
    </>
  );
};

export default ExperienceSectionCarousel;
