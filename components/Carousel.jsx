import React from "react";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import Image from "next/image";
import "pure-react-carousel/dist/react-carousel.es.css";
import leftArrow from "../public/images/left-arrow.png";
import rightArrow from "../public/images/right-arrow.png";

export default function Carousel({ slides }) {
  return (
    <div className=" relative h-96 my-6">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={7}
        visibleSlides={5}
        isIntrinsicHeight={true}
      >
        <Slider className="mx-4 px-16">
          {slides.map((slide, index) => (
            <Slide index={index}>
              <Image
                key={index}
                src={slide}
                alt="image"
                height={500}
                width={380}
              />
            </Slide>
          ))}
        </Slider>
        <ButtonBack>
          <div className="absolute top-32 left-0  ml-6 z-1000 w-24 h-24 bg-white rounded-full hidden md:flex justify-center items-center opacity-70 hover:opacity-100">
            <Image src={leftArrow} alt="prev" width={60} height={60} />
          </div>
        </ButtonBack>
        <ButtonNext>
          <div className="absolute top-32 right-0 mr-6 z-1000 w-24 h-24 bg-white rounded-full hidden md:flex justify-center items-center opacity-70 hover:opacity-100">
            <Image src={rightArrow} alt="prev" width={60} height={60} />
          </div>
        </ButtonNext>
      </CarouselProvider>
    </div>
  );
}
