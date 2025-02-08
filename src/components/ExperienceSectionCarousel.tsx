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

  // useEffect(() => {
  //   console.log("images: ", images);
  // }, [images]);

  return (
    <>
      {expandedCard === index && (
        <div className="flex justify-center h-fit">
          <Carousel className="w-full max-h-screen py-8 pb-20 [&>*]:h-full">
            <CarouselContent
              id="content"
              className="h-full [&>*]:h-full w-full "
            >
              {images.length > 0 &&
                images?.map((image: any, index) => (
                  <CarouselItem key={index} className="flex justify-center">
                    <img
                      src={`/slides/${sectionName}/${image?.src}`}
                      alt={`image-${index}`}
                      className="object-contain "
                    />
                  </CarouselItem>
                ))}
            </CarouselContent>
            <div style={{ height: "2.5rem" }} className="relative mt-4 mx-14">
              <CarouselPrevious />
              <CarouselNext />
              <Button
                size={"sm"}
                variant={"ghost"}
                onClick={() => setExpandedCard(null)}
                className="absolute translate-x-1/2 -translate-y-1/2 top-1/2 right-1/2 text-muted-2"
              >
                <BsX className="size-8" />
              </Button>
            </div>
          </Carousel>
        </div>
      )}
      {expandedCard !== index && images.length > 0 && (
        <Button
          onClick={() => setExpandedCard(index)}
          variant={"ghost"}
          className="text-sm text-muted-foreground/70"
        >
          View Slideshow
          <ImageIcon />
        </Button>
      )}
    </>
  );
};

export default ExperienceSectionCarousel;
