import React from "react";
import Footer from "../../components/Footer";

import Navbar from "../../components/Navbar";
import Image from "next/image";
import Button from "../../components/Button";
import coachImage from "../../public/images/genji.jpg";
import FooterHero from "../../components/FooterHero";
import FaqSection from "../../components/FaqSection";
export default function About() {
  return (
    <div className="w-screen ">
      <Navbar />
      <div className=" bg-black font-header text-header3 md:text-header text-lightyellow text-center py-12 overflow-x-hidden">
        <div className=" bg-black font-header text-header3 md:text-header text-lightyellow text-center py-12 overflow-x-hidden">
          <div className="w-full md:flex md:px-16 md:gap-x-24 mb-8 md:mb-16 items-center md:mt-12 bg-black text-white">
            <div className="md:px-4">
              <div className="font-header whitespace-nowrap text-header2 leading-tight md:text-[70px] md:leading-[70px] md:text-start text-center">
                <span className="text-white">START YOUR</span>
                <br />
                <span className="text-red">1 WEEK TRIAL</span>
              </div>
              <p className="font-para text-center text-para text-lightyellow px-6 md:px-0">
                Fill Out This Form And Head Over To Our Gym To Get Started!
              </p>
            </div>
            <div className="md:w-5/12">
                <form className="m-0 md:flex md:flex-col md:gap-y-4">
                  <div className="md:flex font-para text-para md:gap-x-4">
                      <input type="text" placeholder="First Name" className="bg-darkblack w-full h-12 md:h-12 md:w-72 rounded-md pl-4 focus:outline-none"/>
                      <input type="text" placeholder="Last Name"  className="bg-darkblack w-full h-12 md:h-12 md:w-72 rounded-md pl-4 focus:outline-none mt-4 md:mt-0"/>
                  </div>
                  <input type="text" placeholder="Email" className="font-para text-para bg-darkblack  w-full h-12 md:h-12 md:w-full rounded-md pl-4 focus:outline-none mt-4 md:mt-0"/>
                  <input type="text" placeholder="Phone" className="font-para text-para bg-darkblack  w-full h-12 md:h-12 md:w-full rounded-md pl-4 focus:outline-none mt-4 md:mt-0"/>
                  <input type="submit" value={`GET 1 WEEK FREE TRIAL PASS`}  className="font-header text-xl py-2 md:py-0 mt-4 md:mt-0 md:text-header3 bg-red w-full rounded-md cursor-pointer"/>
                <p className="font-para text-para text-lightyellow md:mt-2">Any Questions/Comments Or Concerns Call +977-9823282902</p>
                </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
