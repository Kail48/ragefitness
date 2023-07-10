import React from "react";
import ClassCard from "./ClassCard";

export default function ClassesSection({cardsData,header1,header2,header3,subtitle}) {

  return (
    <div className="w-screen bg-red text-white py-8 md:py-16">
      <div className="font-header md:text-6xl text-center leading-6">
        <span className="text-white">{header1}</span>
        <span className="text-lightyellow">
          {" "}
         {header2} <br />
         {header3}.
        </span>
        <p className="font-para text-xs px-4 md:text-para md:px-48 mt-4 md:mt-6 text-center">
          {subtitle}
        </p>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap md:mt-16 items-center justify-center">
        
        {cardsData.map((data, index) => (
          <ClassCard key={index} img={data.img} text={data.text} link={data.link} isThreeCols={cardsData.length%3===0}/>
        ))}
      </div>
    </div>
  );
}
