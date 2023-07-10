import React from "react";
import Footer from "../../components/Footer"
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import heroImage from "../../public/images/hero1image.png";
import Button from "../../components/Button";
import Videoplayer from "../../components/Vidplayer";
import FooterHero from "../../components/FooterHero";
export default function About() {
  return (
    <div className="w-screen ">
      <Navbar />
      <div className=" bg-black font-header text-header3 md:text-header text-lightyellow text-center py-12 overflow-x-hidden">
      <div className=" bg-black font-header text-header3 md:text-header text-lightyellow text-center py-12 overflow-x-hidden">
        <div className="w-full md:flex px-10 mt-12 mb-8 md:mb-16  items-center md:mt-12 bg-black text-white">
          <div className="md:px-4">
            <div className="font-header text-header2 md:text-header text-start">
              <span className="text-white">OUR</span>
              <br />
              <span className="text-red">SCHEDULE</span>
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
        <div className="font-header text-header text-center">
            <h1 className="text-white">MARTIAL</h1>
            <h1 className="text-lightyellow">ARTS SCHEDULE</h1>
        </div>
      </div>
  
        <FooterHero/>
      </div>
      <Footer />
    </div>
  );
}
