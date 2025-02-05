import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";
import { Button } from "./ui/button";
import { ImageIcon } from "@radix-ui/react-icons";
import { BsX } from "react-icons/bs";

const images = import.meta.glob(
  "/src/assets/slides/ghostswap/*.{jpg,jpeg,png,gif}",
  { eager: true }
);

const ExperienceSectionCarousel = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div className="flex justify-center h-fit">
          <Carousel className="w-full h-fit">
            <CarouselContent>
              {Object.keys(images).map((image, index) => (
                <CarouselItem key={index} className="">
                  <img
                    src={image as string}
                    alt={`image-${index}`}
                    className="object-cover h-full"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="relative h-10 mt-2 mx-14">
              <CarouselPrevious />
              <CarouselNext />
              <Button
                size={"sm"}
                variant={"ghost"}
                onClick={() => setOpen(false)}
                className="absolute translate-x-1/2 -translate-y-1/2 top-1/2 right-1/2 text-muted-2"
              >
                <BsX className="size-8" />
              </Button>
            </div>
          </Carousel>
        </div>
      )}
      {!open && (
        <Button
          onClick={() => setOpen(true)}
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
