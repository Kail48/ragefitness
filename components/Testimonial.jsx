"use client";
import React from "react";
import TestimonialCard from "./TestimonialCard";

export default function Testimonial({
  testimonialData,
  headerWhite,
  headerLight,
}) {
  return (
    <div className="">
      <div className="font-header text-3xl md:text-7xl text-center leading-10 mt-16 md:mt-20">
        {headerWhite ? (
          <>
        
            {" "}
            <span className="text-white leading-6">
             {headerWhite}
              <br /> 
            </span>
            <span className="text-lightyellow leading-6">{headerLight}</span>
        
          </>
        ) : (
          <>
            {" "}
            <span className="text-lightyellow leading-6">
              HEAR WHAT OUR
              <br /> MEMBERS
            </span>
            <span className="text-white leading-6"> HAVE TO SAY.</span>
          </>
        )}
      </div>
      <div className="flex flex-col gap-y-10 md:flex-row py-8 gap-x-4 px-12">
        {testimonialData.map((data, index) => (
          <TestimonialCard
            key={index}
            image={data.image}
            name={data.name}
            stars={data.rating}
            text={data.text}
          />
        ))}
      </div>
    </div>
  );
}
