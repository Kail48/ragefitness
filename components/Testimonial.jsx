"use client";
import React from "react";
import TestimonialCard from "./TestimonialCard";
import test1img from "../public/images/testimonial1img.png";
import test2img from "../public/images/testimonial2img.png";
import test3img from "../public/images/testimonial3img.png";
const testimonialData = [
  {
    name: "KRISHNA DHAKAL",
    image: test1img,
    rating:5,
    text: `I started bringing my son here for off season 
        training for football . I was referred by my friend. 
        I have to say we have come to love the gym . 
        We are there everyday of the week and everyone 
        is so nice and it’s just a great positive environment. 
        I highly recommend bringing your kids and yourself here.`,
  },
  {
    name: "SEDRINA TAMANG",
    image: test2img,
    rating:5,
    text: `I started bringing my son here for off season 
            training for football . I was referred by my friend. 
            I have to say we have come to love the gym . 
            We are there everyday of the week and everyone 
            is so nice and it’s just a great positive environment. 
            I highly recommend bringing your kids and yourself here.`,
  },
  {
    name: "BISHOW RIMAL",
    image: test3img,
    rating:5,
    text: `I started bringing my son here for off season 
                training for football . I was referred by my friend. 
                I have to say we have come to love the gym . 
                We are there everyday of the week and everyone 
                is so nice and it’s just a great positive environment. 
                I highly recommend bringing your kids and yourself here.`,
  },
];
export default function Testimonial() {
  return (
    <div className="">
      <div className="font-header text-3xl md:text-7xl text-center leading-10 mt-16 md:mt-20">
        <span className="text-lightyellow leading-6">
          HEAR WHAT OUR
          <br /> MEMBERS
        </span>
        <span className="text-white leading-6"> HAVE TO SAY.</span>
      </div>
      <div className="flex flex-col gap-y-10 md:flex-row py-8 gap-x-4 px-12">
        {testimonialData.map((data,index) => (
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
