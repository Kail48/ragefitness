"use client";
import React from "react";
import Image from "next/image";
import trainer1 from "../public/images/tonyja.jpeg";
import trainer2 from "../public/images/jetli.jpeg";
import trainer3 from "../public/images/genji.jpg";
import trainer4 from "../public/images/blackwidow.jpg";
import trainer5 from "../public/images/vandam.jpeg";
import trainer6 from "../public/images/wonderwoman.jpg";
import trainer7 from "../public/images/jackie.jpeg";
import exampleimage from "../public/images/boxingcardimg.png";
import Carousel from "./Carousel";
export default function TrainerSection() {
  const slides = [
    trainer1,
    trainer1,
    trainer1,
    trainer1,
    trainer1,
    trainer1,
    trainer1,
  ];
  return (
    <div className="w-screen bg-red text-white py-12 md:py-16">
      <div className="font-header md:text-6xl text-center leading-10">
        <span className="text-white leading-6">
          {" "}
          OUR AWESOME <br />
        </span>
        <span className="text-lightyellow leading-6"> COACHES AND TRAINERS.</span>
        <p className="font-para text-xs px-4 md:text-para md:px-48 mt-4 md:mt-6 text-center">
          Our coaches are here to meet the needs of everyone regardless of age
          or previous experience. Whether you’re into cardio, yoga, spin,
          kettlebells, boxing, Jiu-Jitsu, MMA, weight lifting, or something else
          altogether, our world-class instructors exist to help you level up and
          become a better you!
        </p>
      </div>
      <Carousel slides={slides} />
    </div>
  );
}
