import Image from "next/image";
import React from "react";
import Link from "next/link";
export default function ClassCard({ img, text, link }) {
  return (
    <div className="">
      <Link href={link}>
        <div className="relative  h-[500px] w-[382px]">
          <Image src={img} alt="image" fill={true} />
          <div className="absolute bottom-16 left-0 right-0 text-center text-white flex justify-center items-center font-header md:text-header3 py-2">
            <div className="bg-red py-1 px-2 md:w-64 rounded-md whitespace-nowrap">
              <h2>{text}</h2>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
