import React from "react";
import ClassCard from "./ClassCard";
import strikingcardimg from "../public/images/strikecardimg.png";
import grapplingcardimg from "../public/images/graplingcardimg.png";
import fitnesscardimg from "../public/images/fitnesscardimg.png";
import boxingcardimg from "../public/images/boxingcardimg.png";
import kidscardimg from "../public/images/kidscardimg.png";
import resultscardimg from "../public/images/resultscardimg.png";
export default function ClassesSection() {
  const cardsData = [
    {
      text: "STRIKING",
      img: strikingcardimg,
      link:"/"
    },
    {
      text: "GRAPPLING",
      img: grapplingcardimg,
      link:"/"
    },
    {
      text: "FITNESS",
      img: fitnesscardimg,
      link:"/"
    },
    {
      text: "BOXING",
      img: boxingcardimg,
      link:"/"
    },
    {
      text: "KIDS",
      img: kidscardimg,
      link:"/"
    },
    {
      text: "RESULTS BASED",
      img: resultscardimg,
      link:"/"
    },
  ];
  return (
    <div className="w-screen bg-red text-white py-8 md:py-16">
      <div className="font-header md:text-6xl text-center leading-6">
        <span className="text-white">WE HAVE CLASSES FOR</span>
        <span className="text-lightyellow">
          {" "}
          EVERY AGE <br />
          AND EVERY SKILL LEVEL.
        </span>
        <p className="font-para text-xs px-4 md:text-para md:px-48 mt-4 md:mt-6 text-center">
          We offer programs to suit any individual’s needs. Whether you are a
          beginner or an expert, we have something for you. Our MMA fitness
          center is designed to meet the needs of everyone.
        </p>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap md:mt-16 items-center justify-center">
        {cardsData.map((data, index) => (
          <ClassCard key={index} img={data.img} text={data.text} link={data.link} />
        ))}
      </div>
    </div>
  );
}
