"use client";
import React from "react";
import Image from "next/image";

import Carousel from "./Carousel";
export default function TrainerSection({slides,header1,header2,subtitle}) {

  return (
    <div className="w-screen bg-red text-white py-12 md:py-16">
      <div className="font-header md:text-6xl text-center leading-10">
        <span className="text-white leading-6">
          {" "}
          {header1}<br />
        </span>
        <span className="text-lightyellow leading-6"> {header2}.</span>
        {subtitle?<p className="font-para text-xs px-4 md:text-para md:px-48 mt-4 md:mt-6 text-center">
          {subtitle}
        </p>:<></>}
      </div>
      <Carousel slides={slides} />
    </div>
  );
}
