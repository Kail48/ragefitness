import React from "react";
import Image from "next/image";
import rightArrow from "../public/images/right-arrow.png";
export default function FaqSection({ qnaData, title }) {
  return (
    <div>
      {title ? (
        <div className="text-white text-3xl md:text-7xl text-center leading-10 md:my-16">
          <span>{title[0]}</span>
          <br />
          {title[1] ? <span>{title[1]}</span> : <></>}
        </div>
      ) : (
        <div className="text-lightyellow text-3xl md:text-7xl text-center leading-10 md:my-16">
          <span className="">HEAR WHAT OUR</span>
          <br />
          <span>MEMBERS </span>
          <span className="text-white">HAVE TO SAY</span>
        </div>
      )}
      <div className="flex flex-col bg-darkblack py-12 mx-2 md:mx-12">
        {qnaData.map((data, index) => (
          <div key={index} className="py-4 md:mx-6 md:my-4">
            <div className="flex items-center">
              <div className="hidden cursor-pointer mr-8 md:w-12 md:h-12 bg-red rounded-full md:flex justify-center items-center ">
                <Image src={rightArrow} alt="prev" width={20} height={20} />
              </div>
              <div className="md:hidden  mr-6 cursor-pointer w-6 h-6 bg-red rounded-full flex justify-center items-center ">
                <Image src={rightArrow} alt="prev" width={12} height={12} />
              </div>
              <h1 className="font-header text-[20px] md:text-[36px] text-red leading-normal">
                {data.question.toUpperCase()}
              </h1>
            </div>
            <p className="font-para text-[16px] leading-6 md:text-[24px] md:leading-10 md:mt-4 text-justify px-10 md:px-20">
              {data.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
