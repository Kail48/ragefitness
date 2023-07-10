import React from "react";
import Footer from "../../components/Footer";

import Navbar from "../../components/Navbar";
import Image from "next/image";
import Button from "../../components/Button";
import coachImage from '../../public/images/genji.jpg'
import FooterHero from "../../components/FooterHero";
import FaqSection from "../../components/FaqSection";
export default function About() {
  const qnaData = [
    {
      question: "Do You Offer Any Trials?",
      answer: `Yes, we do! To ensure that you get to experience our excellent services with no commitment, 
      we offer a 1-week trial pass to anyone interested. This pass allows you to try out any classes 
      we offer, so you can know exactly what to expect.`,
    },
    {
      question: "Will I Learn Self-Defence?",
      answer: `At Rage Fitness, we never advocate the use of violence. However, we do teach everyone the 
      skills necessary to learn how to defend themselves in a life-threatening situation. Since all our 
      students are taught by former professional combat sports athletes and world-renowned 
      combat sports coaches, you can be sure to learn both crucial effective techniques and gain a 
      lot of confidence.`,
    },
    {
      question: "How Do I Sign Up?",
      answer: `Signing up with us is easy! All you have to do is give us a call and book your gym tour, along 
      with your class choice. When you come to the fitness center for your tour, you can then sign up 
      in person with our team, for a 1-week trial FULL Access to our classes. We look forward to 
      meeting you and starting your fitness journey!`,
    },
  ];
  return (
    <div className="w-screen ">
      <Navbar />
      <div className=" bg-black font-header text-header3 md:text-header text-lightyellow text-center py-12 overflow-x-hidden">
        <div className=" bg-black font-header text-header3 md:text-header text-lightyellow text-center py-12 overflow-x-hidden">
          <div className="w-full md:flex px-10 mt-12 mb-8 md:mb-16  items-center md:mt-12 bg-black text-white">
            <div className="md:px-4">
              <div className="font-header text-header2 md:text-header text-start">
                <span className="text-white">FREQUESNTLY</span> <span className="text-red">ASKED</span>
                <br />
                <span className="text-red">QUESTIONS</span>
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

       <FaqSection qnaData={qnaData}/>

        <FooterHero />
      </div>
      <Footer />
    </div>
  );
}
