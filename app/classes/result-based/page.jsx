import React from "react";
import Navbar from "../../../components/Navbar";
import Hero from "../../../components/Hero";
import Button from "../../../components/Button";
import hero2Image from "../../../public/images/resultHero2Image.png";
import fitnessHero1Image from "../../../public/images/resultHero1Image.png";
import fitnessCardioImage from "../../../public/images/fitnessCardioImage.png";
import fitnessSpinImage from "../../../public/images/fitnessSpinImage.png";
import fitnessStrengthImage from "../../../public/images/fitnessStrengthImage.png";
import fitnessYogaImage from "../../../public/images/fitnessYogaImage.png";

import ClassesSection from "../../../components/ClassesSection";
import TrainerSection from "../../../components/TrainerSection";
import trainer1 from "../../../public/images/tonyja.jpeg";
import test1img from "../../../public/images/testimonial1img.png";
import test2img from "../../../public/images/testimonial2img.png";
import test3img from "../../../public/images/testimonial3img.png";
import Testimonial from "../../../components/Testimonial";
import FaqSection from "../../../components/FaqSection";
import FooterHero from "../../../components/FooterHero";
import Footer from "../../../components/Footer";
export default function Page() {
  const qnaData = [
    {
      question: "At What Age Can A Child Start MMA?",
      answer: `The great thing about BJJ is that you can train it regardless of age and fitness levels. You will 
      build stamina, flexibility, agility, and muscle strength through doing different types of exercises, 
      so even if you don’t start fit, you soon will be! It is all about technique rather than strength, and 
      anyone can learn the necessary skills as long as they put in the hard work.`,
    },
    {
      question: `What If They Don't Have The Proper Gear For Training?`,
      answer: `We advise that you wear whatever you feel most comfortable in. In BJJ, it is compulsory to wear 
      a Gi; however, you can wear a rashguard, tank top, t-shirt, and shorts or leggings in No-Gi. In 
      wrestling, you can wear shorts, a t-shirt, and wrestling shoes.`,
    },
    {
      question: "Is MMA Safe For My Kids?",
      answer: `Yes! As long as MMA is taught to children by trained professionals who use traditional values and techniques, then MMA is not only safe but it’s hugely beneficial for your child’s strength of character, enjoyment, and discipline. At Dan Henderson’s Athletic Fitness Center, the safety of your kids is our priority! Our classes for kids MMA in Temecula CA are perfect for them to learn and practice in a safe environment.`,
    },
  ];
  const testimonialData = [
    {
      name: "KRISHNA DHAKAL",
      image: test1img,
      rating: 5,
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
      rating: 5,
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
      rating: 5,
      text: `I started bringing my son here for off season 
                      training for football . I was referred by my friend. 
                      I have to say we have come to love the gym . 
                      We are there everyday of the week and everyone 
                      is so nice and it’s just a great positive environment. 
                      I highly recommend bringing your kids and yourself here.`,
    },
  ];
  const slides = [
    trainer1,
    trainer1,
    trainer1,
    trainer1,
    trainer1,
    trainer1,
    trainer1,
  ];
  const cardsData = [
    {
      text: "CARDIO BAG",
      img: fitnessCardioImage,
      link: "/",
    },
    {
      text: "SPIN",
      img: fitnessSpinImage,
      link: "/",
    },
    {
      text: "STRENGTH & CONDITIONING",
      img: fitnessStrengthImage,
      link: "/",
    },
    {
      text: "YOGA",
      img: fitnessYogaImage,
      link: "/",
    },
  ];
  const hero1Text = `At Rage fitness, we offer the best-rated classes for MMA in Kathmandu, Nepal. Through our hard work, specialist instructors, high-grade equipment, and passion for helping people learn, we have managed to create a community that welcomes all levels and ages. You won’t find any other fitness centre in the area that offers our high-quality classes for the fantastic prices we have. We are the area’s number one choice for fitness centre's, so don’t miss out!`;
  return (
    <div className="w-screen">
      <Navbar />
      <div className=" bg-black font-header text-header3 md:text-header text-lightyellow text-center py-12 overflow-x-hidden">
        <div className="w-full md:flex px-10 mt-12 mb-8 md:mb-16  items-center md:mt-12 bg-black text-white">
          <div className="md:px-4">
            <div className="font-header text-[36px] md:text-[80px] md:leading-snug text-start">
              <span className="text-white">RESULT BASED</span>
              <br />
              <span className="text-red">FITNESS PROGRAM</span>
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
        <Hero
          isLeft={true}
          image={fitnessHero1Image}
          secondaryHeader={[`SIGN UP NOW FOR THE BEST`, `RESULT BASED FITNESS`,`PROGRAM`]}
          paragraph={`At Dan Henderson’s Athletic Fitness Center, we have the best-rated classes for kids MMA in Temecula CA. Parents bring their kids to us knowing they are in a safe and fun environment. Our kid’s classes are specially designed by experts to ensure your children learn vital skills while still having fun. You will notice a difference in your child’s behavior and fitness levels after they have been taking part in our program. Sign up now for the best kids MMA classes in Southern California, and watch your child grow and learn in a healthy setting.`}
          button1Text="GET 1 WEEK TRIAL PASS"
          imageHeight={615}
          imageWidth={508}
          animation={true}
        />
        <ClassesSection
          cardsData={cardsData}
          header1={`RESULT BASED PROGRAMS`}
          header2={`WE OFFER`}
          header3={`FOR ALL`}
          subtitle={`We offer programs for every age. Whether you are a beginner or an expert, we have something 
        for you. Our fitness center is designed to meet the needs of everyone.`}
        />
        <Hero
          isLeft={false}
          image={hero2Image}
          button1Text="GET 1 WEEK TRIAL PASS"
          secondaryHeader={[
            "EQUIP YOUR BODY WITH ",
            "PROPER SELF-DEFENSE SKILLS",
            "WITH OUR RESULT BASED",
            "FITNESS PROGRAM"
          ]}
          paragraph={`We have a whole range of MMA classes for kids to suit their age group and skill level. Our classes are there to make sure your child is getting the most out of their time with us. At Dan 
          Henderson’s Athletic Fitness Center, our specialist and professional instructors will guarantee that your children are being equipped with proper self-defense skills and learning other vital techniques. Our classes for kids MMA in Temecula CA are engaging, rewarding, fun, and incredibly helpful to your child’s personal development. Your children will love coming to our fitness center, and we look forward to seeing them!`}
          imageHeight={571}
          imageWidth={545}
          animation={true}
        />
        <TrainerSection
          header1={`OUR WOLRD CLASS`}
          header2={`FITNESS COACHES`}
          slides={slides}
        />
        <Testimonial
          testimonialData={testimonialData}
          headerWhite={`REVIEWS FROM OUR `}
          headerLight={`RESULT BASED STUDENTS`}
        />
        <FaqSection qnaData={qnaData} />
        <FooterHero />
      </div>
      <Footer />
    </div>
  );
}
