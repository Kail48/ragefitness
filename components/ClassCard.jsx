import Image from "next/image";
import React from "react";
import Link from "next/link";
export default function ClassCard({ img, text, link,isThreeCols }) {
  return (
    <div className="">
      <Link href={link}>
        <div className={`relative  ${isThreeCols?"h-[500px]":"h-[500px] md:h-[374px]"}  ${isThreeCols?"w-[382px]":"w-[382px] md:w-[286px]"}`}>
          <Image src={img} alt="image" fill={true} />
          <div className={`absolute bottom-16 left-0 right-0 text-center text-white flex justify-center items-center font-header md:text-header3 py-2`}>
            <div className="bg-red py-3 px-2 w-64 md:w-48 rounded-md whitespace-normal leading-6">
              <h2>{text}</h2>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
