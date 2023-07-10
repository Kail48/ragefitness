import React from "react";
import Footer from "../../components/Footer";

import Navbar from "../../components/Navbar";
import Image from "next/image";
import Button from "../../components/Button";
import coachImage from '../../public/images/genji.jpg'
import FooterHero from "../../components/FooterHero";
export default function About() {
  const coachesData=[
    {
      name:"Tonyja",
      image:coachImage
    },
    {
      name:"Genji",
      image:coachImage
    },
    {
      name:"buddha",
      image:coachImage
    },
    {
      name:"Tonyja",
      image:coachImage
    },
    {
      name:"Tonyja",
      image:coachImage
    },
    {
      name:"Tonyja",
      image:coachImage
    },
    {
      name:"Tonyja",
      image:coachImage
    },
    {
      name:"Tonyja",
      image:coachImage
    },
    {
      name:"Tonyja",
      image:coachImage
    },
  ]
  return (
    <div className="w-screen ">
      <Navbar />
      <div className=" bg-black font-header text-header3 md:text-header text-lightyellow text-center py-12 overflow-x-hidden">
        <div className=" bg-black font-header text-header3 md:text-header text-lightyellow text-center py-12 overflow-x-hidden">
          <div className="w-full md:flex px-10 mt-12 mb-8 md:mb-16  items-center md:mt-12 bg-black text-white">
            <div className="md:px-4">
              <div className="font-header text-header2 md:text-header text-start">
                <span className="text-white">DHAFC</span>
                <br />
                <span className="text-red">FIGHTERS</span>
              </div>

              <div className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 gap-x-6 py-2">
                <Button
                  text={"GET 1 WEEK TRIAL PASS"}
                  isLink={true}
                  to="/"
                  fill={true}
                  size="md"
                />

                <Button
                  text={"+977 - 9812345678"}
                  isLink={true}
                  to="/"
                  fill={false}
                  size="md"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="font-header text-header2 leading-snug md:text-[64px] md:leading-[80px] text-center md:px-6">
            <h1 className="text-white">OUR WORLD</h1>
            <h1 className="text-lightyellow">CLASS FIGHTERS</h1>
          </div>
          <div className="flex flex-col md:flex-row md:gap-x-6 md:gap-y-4 flex-wrap md:mt-16 items-center justify-center">
              {
                coachesData.map((coach,index)=>(
                  <div key={index} className="relative h-[463px] w-[379px]">
                    <Image 
                    src={coach.image}
                    alt={coach.name}
                    fill={true}
                    />
                  </div>
                ))
              }
          </div>
        </div>

        <FooterHero />
      </div>
      <Footer />
    </div>
  );
}
