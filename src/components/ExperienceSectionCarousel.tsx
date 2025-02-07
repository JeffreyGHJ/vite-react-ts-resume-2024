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
import { useEffect } from "react";

const images = import.meta.glob(
  "/public/slides/ghostswap/*.{jpg,jpeg,png,gif}",
  {
    eager: true,
  }
);

const ExperienceSectionCarousel = ({
  index,
  expandedCard,
  setExpandedCard,
}: any) => {
  console.log("images:", images);

  useEffect(() => {
    Object.keys(images).map((img) => {
      console.log("img:", img);
    });
  }, []);

  return (
    <>
      {expandedCard === index && (
        <div className="flex justify-center h-fit">
          <Carousel className="w-full max-h-screen py-8 pb-20 [&>*]:h-full">
            <CarouselContent
              id="content"
              className="h-full [&>*]:h-full w-full "
            >
              {Object.keys(images).map((image, index) => (
                <CarouselItem
                  key={index}
                  id={`${image}`}
                  className="flex justify-center"
                >
                  <img
                    src={image as string}
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
      {expandedCard !== index && (
        <Button
          onClick={() => setExpandedCard(index)}
          variant={"ghost"}
          className="text-xs text-muted-2"
        >
          View Slideshow
          <ImageIcon />
        </Button>
      )}
    </>
  );
};

export default ExperienceSectionCarousel;
