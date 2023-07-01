"use client";
import Image from "next/image";
import React, { useEffect, useState,useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import leftArrow from "../public/images/left-arrow.png";
import rightArrow from "../public/images/right-arrow.png";

export default function Carousel({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    breakpoints: {
      "(max-width: 480px)": {
        loop: false,
        align: "start",
        startIndex: 0,
        skipSnaps: false,
        watchDrag: true,
        dragThreshold:2
      },
    },
    loop: false,
    align: 0.2,
    startIndex: 0,
    skipSnaps: false,
    watchDrag: false,
  });

  const getNextSlide = () => {
    console.log(emblaApi.selectedScrollSnap());

    emblaApi.scrollNext();
    setCurrentSlide(emblaApi.selectedScrollSnap());
  };
  const getPrevSlide = () => {
    console.log("prev clicked");

    emblaApi.scrollPrev();
    setCurrentSlide(emblaApi.selectedScrollSnap());
  };

  const onSelect = useCallback((emblaApi, eventName) => {
    setCurrentSlide(emblaApi.selectedScrollSnap())
  }, []);

  const removeOnSelectListener = useCallback(() => {
    if (emblaApi) emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (emblaApi) emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative  my-6 md:py-10">
      <div className="embla pl-12 md:pl-0" ref={emblaRef}>
        <div className="embla__container overflow-hidden flex gap-x-2 min-w-max pl-16 md:pl-10">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`embla__slide  ${
                index === currentSlide
                  ? "z-40"
                  : "scale-75 z-30"
              } transition-all duration-300 ease-in-out `}
            >
              <div className="relative w-72 h-96 md:w-[350px] md:h-[545px]">
                <Image
                  src={slide}
                  alt="image"
                  fill={true}
                  className=" rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        onClick={() => getPrevSlide()}
        className="absolute cursor-pointer top-32 left-0  ml-10 z-1000 w-24 h-24 bg-white rounded-full hidden md:flex justify-center items-center opacity-70 hover:opacity-100"
      >
        <Image src={leftArrow} alt="prev" width={60} height={60} />
      </div>
      <div
        onClick={() => getNextSlide()}
        className="absolute cursor-pointer top-32 right-0 mr-10 z-1000 w-24 h-24 bg-white rounded-full hidden md:flex justify-center items-center opacity-70 hover:opacity-100"
      >
        <Image src={rightArrow} alt="prev" width={60} height={60} />
      </div>
    </div>
  );
}
